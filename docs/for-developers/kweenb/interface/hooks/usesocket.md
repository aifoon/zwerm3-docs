# useSocket

This document provides detailed information about the **useSocket** module which facilitates interaction with a WebSocket server using **Socket.io**. This module utilizes persistent storage for dynamic connection URL management and provides functions for connecting, disconnecting, and communicating with the server.

## Imports

The file begins with the import of required modules and interfaces:

```typescript
import { SocketMessage } from "@shared/interfaces";
import { useAppPersistentStorage } from "./useAppPersistentStorage";
import { io, Socket } from "socket.io-client";
```

## Global Variables

- **socket: Socket** - A globally accessible instance of the Socket object from Socket.io.

```typescript
export let socket: Socket;
```

## useSocket Hook

The **useSocket** hook provides a set of functions to manage socket connections and data transmissions.

### Functions

| Function Name                          | Description                                                 |
| -------------------------------------- | ----------------------------------------------------------- |
| **connect**                            | Establishes a connection to the socket server.              |
| **disconnect**                         | Closes the connection to the socket server.                 |
| **sendToServerWithoutResponse**        | Sends a message to the server without expecting a response. |
| **sendToServerAndExpectResponseAsync** | Sends a message to the server and waits for a response.     |

---

### connect

**Description:**
Connects to the socket server using the URL retrieved from persistent storage.

**Code Block:**

```typescript
const connect = () => {
  socket = io(socketUrl, {
    reconnectionDelay: 1000,
    reconnectionDelayMax: 5000,
  });
  socket.connect();
};
```

### disconnect

**Description:**
Disconnects from the socket server.

**Code Block:**

```typescript
const disconnect = () => {
  socket.disconnect();
};
```

### sendToServerWithoutResponse

**Description:**
Sends a message to the server without expecting any response.

**Parameters:**

- **message** `string` - The message to be sent.
- **json** `Object` (optional) - An object payload to be included with the message.

**Code Block:**

```typescript
const sendToServerWithoutResponse = (message: string, json?: Object) => {
  const socketMessage: SocketMessage = { message };
  if (json) {
    socketMessage.payload = JSON.stringify(json);
  }
  socket.send(socketMessage);
};
```

### sendToServerAndExpectResponseAsync

**Description:**
Sends a message to the server and returns a promise that resolves with the server's response.

**Parameters:**

- **message** `string` - The message to be sent.
- **json** `Object` (optional) - An object payload to be included with the message.

**Returns:**
A promise that resolves with the response data from the server.

**Code Block:**

```typescript
const sendToServerAndExpectResponseAsync = async (
  message: string,
  json?: Object
) => {
  return new Promise((resolve) => {
    const socketMessage: SocketMessage = { message };
    if (json) {
      socketMessage.payload = JSON.stringify(json);
    }
    socket.send(socketMessage);
    socket.once(message, (data) => {
      resolve(data);
    });
  });
};
```

## Usage

To use the functions provided by the **useSocket** hook, simply call `useSocket` and destructure the desired methods:

```typescript
const {
  connect,
  disconnect,
  sendToServerWithoutResponse,
  sendToServerAndExpectResponseAsync,
} = useSocket();
```

## Additional Notes

- The **socketUrl** is dynamically retrieved from the application's persistent storage, allowing for flexibility in development and production environments.
- The reconnection delays are set to ensure reliability in case of temporary network issues.

This module ensures robust and efficient communication with WebSocket servers using the **Socket.io** library.
