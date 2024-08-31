# Socket

The `Socket` class encapsulates the functionality required to create a WebSocket server that listens for incoming connections, manages incoming messages, and sends messages back to clients. It is designed to facilitate communication between audio devices or services within the KweenB application.

## Socket

### Properties

- **port**: `number`

  The port number on which the socket server listens for connections.

- **socketServer**: `Server`

  An instance of the Socket.IO `Server`, enabling WebSocket functionality.

- **\_onMessage**: `((message: SocketMessage) => void) | undefined`

  An optional callback function invoked upon receiving a message. This allows the application to define custom behavior when messages are received.

- **debug**: `boolean`

  A flag to enable or disable debug logging. When set to `true`, the server will log debug information to the console.

### Constructor

```typescript
constructor(port: number, onMessage?: (message: SocketMessage) => void)
```

**Parameters**:

- `port`: The port number for the server to listen on.
- `onMessage`: An optional callback function that is called when a message is received. It receives a `SocketMessage` object as its parameter.

### Methods

#### initServer

```typescript
private initServer()
```

- Initializes the WebSocket server.
- Sets up event listeners for new connections and incoming messages.
- When a client connects, the socket's ID is logged if debugging is enabled.
- When a message is received, the `_onMessage` callback is invoked (if provided), passing the message along with the client's ID as a `SocketMessage` object.

#### sendToClients

```typescript
public sendToClients(event: string, data: any)
```

- Sends a message to all connected clients.

**Parameters**:

- `event`: The event name that clients are listening for.
- `data`: The data payload to send to clients.

#### sendToClient

```typescript
public sendToClient(clientId: string, event: string, data: any)
```

- Sends a message to a specific client based on the client ID.

**Parameters**:

- `clientId`: The ID of the client that should receive the message.
- `event`: The event name that the client is expecting.
- `data`: The data payload to send to the specified client.

### Usage Example

```typescript
const socket = new Socket(3000, (message) => {
  console.log("Received message:", message);
});

// Sending a message to all clients
socket.sendToClients("update", { status: "connected" });

// Sending a message to a specific client
socket.sendToClient("client-id-123", "privateMsg", { text: "Hello!" });
```

## SocketMessageHandler

This class utilizes the underlying `SocketSingleton` to manage socket connections and interactions. The focus is on executing specific methods based on incoming messages and processing the relevant data to perform actions, such as fetching active bees, controlling audio parameters, and managing audio scenes.

### Class Structure

#### Methods

##### `handleMessage({ message, payload, clientId })`

Handles incoming socket messages.

**Parameters:**

- `message`: A string representing the socket message.
- `payload`: The payload data associated with the message.
- `clientId`: Optional client ID; defaults to an empty string.

**Functionality:**

- Parses the payload into JSON.
- Constructs the appropriate method name based on the message.
- Calls the constructed method if it exists.

##### `handleMessageFetchActiveBees({ clientId })`

Fetches and returns the currently active bees to the requesting client.

##### `handleMessageFetchAllScenes({ clientId })`

Obtains all available audio scenes and sends them to the client.

##### `handleMessageFetchScenesForBee({ clientId, json })`

Retrieves audio scenes specific to a given bee.

##### `handleMessageSetParamOfBees({ json })`

Updates the volume parameters of specified bees.

##### `handleMessageStartAudio({ json })`

Initiates audio playback on specified bees.

##### `handleMessageStopAudio({ json })`

Stops audio playback on specified bees.

##### `handleMessageShowConnectedClients()`

Logs the number of connected clients to the console.
