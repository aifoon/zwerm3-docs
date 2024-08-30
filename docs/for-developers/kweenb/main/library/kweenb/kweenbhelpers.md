# KweenBHelpers

This module contains helper functions that support the core functionality of the KweenB application, particularly focused on managing JACK and JackTrip audio networking processes. These helpers streamline the operations required to establish communication between audio devices and manage their respective states.

## Functions

### `closeApplication`

```typescript
const closeApplication = async (appMode: AppMode) => { ... }
```

Cleans up resources and shuts down the application, including stopping the Express server, terminating worker processes, disconnecting MQTT brokers, and shutting down any active JACK or JackTrip processes.

**Parameters**:

- `appMode`: Indicates which mode the app is currently operating in (development or production).

### `killJackAndJacktrip`

```typescript
const killJackAndJacktrip = async () => { ... }
```

Kills all running JACK and JackTrip processes.

### `isJackAndJacktripInstalled`

```typescript
const isJackAndJacktripInstalled = () => { ... }
```

Checks for the presence of JACK and JackTrip binaries on the filesystem.

**Returns**:

- `boolean` indicating whether both JACK and JackTrip binaries are installed on the system.

### `startJacktripHubServer`

```typescript
const startJacktripHubServer = async () => { ... }
```

Initializes and starts the JackTrip hub server using the settings defined in the application. If JackTrip is running in debug mode, it logs relevant messages.

**Returns**: A promise that resolves when the server has started.

### `startJackWithJacktripHubClient`

```typescript
const startJackWithJacktripHubClient = async () => { ... }
```

Starts the Jack audio server and connects it to the JackTrip hub client using the settings defined in the application. Similar to the hub server, it logs if debugging is enabled.

**Returns**: A promise that resolves when both services have been successfully started.

### `startJackWithJacktripP2PClient`

```typescript
const startJackWithJacktripP2PClient = async (ipAddress: string, localPort: number, clientName: string) => { ... }
```

Establishes a peer-to-peer connection using JackJack and JackTrip to a specified IP address.

**Parameters**:

- `ipAddress`: The IP address of the target (normally a Bee).
- `localPort`: The local port to use for connections.
- `clientName`: A name to identify the client.

**Returns**: A promise that resolves upon successful connection.

### `disconnectAllP2PAudioConnections`

```typescript
const disconnectAllP2PAudioConnections = async () => { ... }
```

Disconnects all peer-to-peer audio connections currently established.

**Returns**: A promise that resolves after all connections have been disconnected.

### `makeHubAudioConnections`

```typescript
const makeHubAudioConnections = async () => { ... }
```

Establishes audio connections for all active Bees to the KweenB hub.

### `makeP2PAudioConnection`

```typescript
const makeP2PAudioConnection = async (bee: IBee) => { ... }
```

Sets up a peer-to-peer audio connection from a system audio device to the specified Bee.

**Parameters**:

- `bee`: An object representing the Bee device.

### `makeP2PAudioConnections`

```typescript
const makeP2PAudioConnections = async () => { ... }
```

Initiates audio connections for all active Bees in a peer-to-peer configuration.

### `setJackFolderPath`

```typescript
const setJackFolderPath = (jackFolderPath: string) => { ... }
```

Sets the path to the JACK folder where jack binaries are located.

**Parameters**:

- `jackFolderPath`: The file path to the JACK folder.

### `setJacktripBinPath`

```typescript
const `setJacktripBinPath` = (jacktripBinPath: string) => { ... }
```

Sets the path to the JackTrip binary.

**Parameters**:

- `jacktripBinPath`: The file path to the JackTrip binary.
