# Dictionaries

## BeeStates

The `BeeStates` class is responsible for managing the state of audio devices referred to as "bees" in the KweenB application. This class maintains a list of current bees, tracks their state, and provides functionality to add, update, retrieve, and remove bees based on their operational status.

The `BeeStates` class plays a crucial role in managing the state of audio devices within the KweenB application. It allows the application to monitor and control audio connections more effectively while providing developers with actionable insights into the operational status of each bee. Understanding how to use this class is essential for maintaining the application's audio networking capabilities.

### Properties

- `beeStates`: An array of `IBeeState` objects representing the current states of all bees managed by this class.

### Methods

#### `addBees(bees: IBee[]): void`

Adds an array of bees to the `beeStates` collection. Each bee's state is initialized with default values, including `lastPingResponse`, `isApiOn`, `isJackRunning`, `isJacktripRunning`, and `networkPerformanceMs`.

#### `clear(): void`

Clears the list of bees, effectively resetting the state to an empty array.

#### `printDebugInfo(beeNumbers: number[] | null = null): void`

Logs the operational state of each bee to the console. If specific bee IDs are provided, only those are printed; otherwise, all bees are displayed. Each bee's information will include:

- Online status
- API status
- Jack audio server status
- Jacktrip audio server status
- Network performance in milliseconds

#### `get bees(): IBee[]`

Getter method that returns an array of all bees currently tracked by `beeStates`.

#### `getBee(bee: IBee | number | null): IBee | null`

Retrieves a bee by its ID or directly as an `IBee` object. Returns `null` if no such bee exists or if the provided input is invalid.

#### `getBeeState(bee: IBee): IBeeState | undefined`

Returns the state of a specified bee. If the bee is not found in `beeStates`, it returns `undefined`.

#### `isOnline(bee: IBee | number): boolean`

Checks if the specified bee is online by looking up its `lastPingResponse`. Returns `true` if the bee’s last ping was received within the defined `BEE_CONSIDERED_OFFLINE_SECONDS`.

#### `isApiOn(bee: IBee | number): boolean`

Determines if the API is running for the specified bee.

#### `isJackRunning(bee: IBee | number): boolean`

Checks if the Jack audio server is running for the specified bee.

#### `isJacktripRunning(bee: IBee | number): boolean`

Checks if the Jacktrip audio server is running for the specified bee.

#### `getNetworkPerformanceMs(bee: IBee | number): number`

Retrieves the network performance value in milliseconds for the specified bee.

#### `update(type: "lastPingResponse" | "isApiOn" | "isJackRunning" | "isJacktripRunning" | "networkPerformanceMs", bee: IBee, value: Date | boolean | number = false): void`

Updates the selected type of information (like last ping time or server status) for the specified bee.

#### `validBeeState(bee: IBee | number): IBeeState | null`

Helper method to get a valid bee state if the bee is online. Returns `null` if the bee is not found or if it is offline.

#### `removeBee(bee: IBee | number): void`

Removes a bee from the `beeStates` array based on its ID or direct reference.

### Usage Example

```typescript
const beeManager = new BeeStates();
beeManager.addBees([bee1, bee2]); // Add bees to the manager
beeManager.printDebugInfo(); // Print all debug info
const isBeeOnline = beeManager.isOnline(bee1.id); // Check if a specific bee is online
```

## BeeSshConnections

The `BeeSshConnections.ts` file is responsible for managing SSH connections to audio devices (referred to as "bees"). It utilizes the `node-ssh` library to handle SSH operations and maintain a dictionary of active SSH instances, allowing for efficient management of multiple connections.

### Properties

`_beeSshInstances`:

- **Type**: `{ [ipAddress: string]: NodeSSH }`
- **Access**: Private
- **Description**: A dictionary that maps IP addresses to their corresponding `NodeSSH` instances.

### Methods

#### `amountOfSshInstances`

Returns the total number of active SSH instances managed by the class.

#### `getNodeSshInstance(ipAddress: string): NodeSSH`

Returns the `NodeSSH` instance for a specific IP address. If an instance does not exist, it creates a new one and stores it in `_beeSshInstances`.

#### `getSshConnection(ipAddress: string): Promise<NodeSSH>`

- Retrieves or creates an SSH connection to the specified IP address.
- If the connection is not already established, it attempts to connect using predefined constants for the username and private key path, allowing for easy configuration.
