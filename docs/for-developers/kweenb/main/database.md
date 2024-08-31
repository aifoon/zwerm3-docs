# Database

The kweenb settings and bees information are stored in a local SQLLite database. Connections and CRUD movements are done via [Sequelize](https://sequelize.org/).

## Database Class

The `database.ts` file is responsible for managing the SQLite database connection within the KweenB application. It utilizes the Sequelize library to provide an ORM interface for interacting with the database. This file contains the `Database` class, which encapsulates the database functionalities, including initialization, connection testing, and retrieving the Sequelize instance.

### File Structure

The core structure of the file is as follows:

```javascript
class Database {
  private sequelize: Sequelize;
  private databasePath: string;

  constructor(databasePath: string) {
    this.databasePath = databasePath;
    this.init();
  }

  init() {
    this.sequelize = new Sequelize({
      dialect: "sqlite",
      storage: this.databasePath,
      logging: SEQUELIZE_LOGGING,
    });
  }

  async testConnection() {
    try {
      await this.getSequelize().authenticate();
      console.log("Connection has been established successfully.");
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }
  }

  getSequelize(): Sequelize {
    if (this.sequelize) return this.sequelize;
    this.init();
    return this.getSequelize();
  }
}

export default new Database(
  process.env.NODE_ENV === "development"
    ? "kweenb.sqlite"
    : join(USER_DATA, "kweenb.sqlite")
);

```

### Methods

#### init

- This method initializes the Sequelize instance by defining the database dialect as "sqlite" and using the `databasePath` for storage.
- Enables/disables logging based on the `SEQUELIZE_LOGGING` constant defined in `consts.ts`.

#### testConnection

- Tests the connection to the database using the `authenticate()` method from Sequelize.
- If successful, logs a success message; on failure, logs an error message.

#### getSequelize

- Returns the current Sequelize instance. If the instance isn't initialized, it calls the `init()` method first.
- Utilizes recursion to ensure the Sequelize instance is valid.

## Models

### Bee

**Properties**

- `id: number`: The unique identifier for each bee. Automatically increments and serves as the primary key.
- `name: string`: The name assigned to the bee. This field is essential for user-friendly identification.
- `ipAddress: string`: The IP address of the bee device, used for network identification and connections.
- `isActive: boolean`: A flag indicating whether the bee is currently active (true) or inactive (false).
- `channelType: ChannelType`: Specifies the type of audio channel (e.g., mono or stereo). This is enforced via an enum.
- `channel1: number`: Represents the first audio channel of the bee.
- `channel2: number`: Represents the second audio channel of the bee. This field can be null.
- `pozyxTagId: string`: An optional identifier used for tracking the bee's physical location in space, applicable in positioning contexts.

### Setting

The `Setting` model is a Sequelize model representing the configuration settings for the `kweenb` application. It provides an interface to interact with the `settings` table in the database, allowing for the storage and retrieval of key-value pairs that define application settings.

The model is initialized with the following parameters:

- `key`: String, not nullable.
- `value`: String, not nullable.

## Usage

An instance of the `Database` class is exported and automatically configured based on the environment:

- In development mode, it uses a local SQLite database named `kweenb.sqlite`.
- In production mode, it uses a SQLite database located in the user data path.
