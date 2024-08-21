# Jacktrip

- [Introduction](#introduction)
- [Functions](#functions)
  - [_public_ getJacktripPaths()](#getjacktrippaths)
  - [_public_ isJacktripRunning()](#isjacktriprunning)
  - [_public_ startJacktripHubClient()](#startjacktriphubclient)
  - [_public_ startJacktripHubClientAsync()](#startjacktriphubclientasync)
  - [_public_ startJacktripHubServer()](#startjacktriphubserver)
  - [_public_ startJacktripHubServerAsync()](#startjacktriphubserverasync)
  - [_public_ startJacktripP2PClient()](#startjacktripp2pclient)
  - [_public_ startJacktripP2PClientAsync()](#startjacktripp2pclientasync)
  - [_public_ startJacktriptP2PMultipleClientsAsync()](#startjacktriptp2pmultipleclientsasync)
  - [_public_ startJacktripP2PServer()](#startjacktripp2pserver)
  - [_public_ startJacktripP2PServerAsync()](#startjacktripp2pserverasync)

## Introduction

This module provides logic for managing the Jacktrip process on a host system. It offers functions to check its status, start it with configurable parameters, and ensure its successful initialization.

## Functions

### `getJacktripPaths()`

```typescript
export const getJacktripPaths = (): JacktripPaths => { ... }
```

#### Returns

- An object of type [`JacktripPaths`](types/interfaces#jacktrippaths) based on the operating system where the code is executed.

#### Behavior

- It uses `process.platform` to determine the OS:
  - `win32`: Calls `jacktripWinPaths()`
  - `darwin`: Calls `jacktripDarwinPaths()`
  - Any other platform will default to Linux and call `jacktripLinuxPaths()`.

### `isJacktripRunning()`

```typescript
export const isJacktripRunning = (): Promise<boolean>
```

This function checks if the JackTrip daemon is currently running on the system. It returns a Promise that resolves to a boolean value indicating the status.

#### Returns

`Promise<boolean>`: Resolves to `true` if JackTrip is running, otherwise resolves to `false`.

#### Example

```typescript
isJacktripRunning()
  .then((isRunning) => {
    if (isRunning) {
      console.log("JackTrip is running.");
    } else {
      console.log("JackTrip is not running.");
    }
  })
  .catch((error) => {
    console.error("An error occurred while checking JackTrip status:", error);
  });
```

### `startJacktripHubClient()`

```typescript
export const startJacktripHubClient = (
  jacktripHubClientParams: JacktripHubClientParams,
  { onLog }: OptionalParams
): RunningCommand
```

Initializes and starts a Jacktrip Hub Client using the provided parameters. If successful, it spawns a new process for the client.

#### Parameters

- `jacktripHubClientParams`: An object from type [JacktripHubClientParams](types/interfaces#jacktriphubclientparams) joined with [JacktripParams](types/interfaces#jacktripparams).

- `optionalParams`: Additional parameters, including logging functionality from type [OptionalParams](types/interfaces#optionalparams)

#### Returns

- `RunningCommand`: An object containing from type [RunningCommand](types/interfaces#runningcommand).

### `startJacktripHubClientAsync()`

```typescript
export const startJacktripHubClientAsync = (
  jacktripHubClientParams: JacktripHubClientParams,
  optionalParams: OptionalParams
): Promise<RunningCommand>
```

Asynchronously starts a Jacktrip Hub Client and returns a Promise that resolves once the client is fully started.

#### Parameters

- `jacktripHubClientParams`: An object from type [JacktripHubClientParams](types/interfaces#jacktriphubclientparams) joined with [JacktripParams](types/interfaces#jacktripparams).

- `optionalParams`: Additional parameters, including logging functionality from type [OptionalParams](types/interfaces#optionalparams)

#### Returns

- `RunningCommand`: An object containing from type [RunningCommand](types/interfaces#runningcommand).

### `startJacktripHubServer()`

```typescript
export const startJacktripHubServer = (
  jacktripHubServerParams: JacktripHubServerParams,
  { onLog }: OptionalParams
): RunningCommand
```

Starts a Jacktrip Hub Server using provided parameters and configurations. Handles command-line parameter assembly and execution of the Jacktrip server process.

#### Parameters

- `jacktripHubServerParams`: An object from type [JacktripHubServerParams](types/interfaces#jacktriphubserverparams) joined with [JacktripParams](types/interfaces#jacktripparams).

- `optionalParams`: Additional parameters, including logging functionality from type [OptionalParams](types/interfaces#optionalparams)

#### Returns

- `RunningCommand`: An object containing from type [RunningCommand](types/interfaces#runningcommand).

#### Errors

- Throws `HubPatchModeNotValidException` if the provided `hubPatchMode` is invalid.

- Throws `StartJacktripFailedException` if the Jacktrip server fails to start.

### `startJacktripHubServerAsync()`

```typescript
export const startJacktripHubServerAsync = (
  jacktripHubServerParams: JacktripHubServerParams,
  optionalParams: OptionalParams
): Promise<RunningCommand>
```

Asynchronously starts a Jacktrip Hub Server and waits for the server to be fully initialized.

#### Parameters

- `jacktripHubServerParams`: An object from type [JacktripHubServerParams](types/interfaces#jacktriphubserverparams) joined with [JacktripParams](types/interfaces#jacktripparams).

- `optionalParams`: Additional parameters, including logging functionality from type [OptionalParams](types/interfaces#optionalparams)

#### Returns

- `Promise<RunningCommand>`: Resolves to a [`RunningCommand`](types/interfaces#runningcommand) object once the server has started.

### `startJacktripP2PClient()`

```typescript
export const startJacktripP2PClient = (
  jacktripP2PClientParams: JacktripP2PClientParams,
  { onLog }: OptionalParams
): RunningCommand
```

Starts a Jacktrip P2P Client with provided parameters.

#### Parameters

- `jacktripP2PClientParams`: An object from type [JacktripP2PClientParams](types/interfaces#jacktripp2pclientparams) joined with [JacktripP2PServerParams](types/interfaces#jacktripp2pserverparams).

- `optionalParams`: Additional parameters, including logging functionality from type [OptionalParams](types/interfaces#optionalparams)

#### Returns

- `RunningCommand`: An object containing from type [RunningCommand](types/interfaces#runningcommand).

### `startJacktripP2PClientAsync()`

```typescript
export const startJacktripP2PClientAsync = (
  jacktripP2PClientParams: JacktripP2PClientParams,
  optionalParams: OptionalParams
): Promise<RunningCommand>
```

Starts a Jacktrip P2P Client asynchronously and waits for the server to fully start.

#### Parameters

- `jacktripP2PClientParams`: An object from type [JacktripP2PClientParams](types/interfaces#jacktripp2pclientparams) joined with [JacktripP2PServerParams](types/interfaces#jacktripp2pserverparams).

- `optionalParams`: Additional parameters, including logging functionality from type [OptionalParams](types/interfaces#optionalparams)

#### Returns

- `Promise<RunningCommand>`: Resolves to a [`RunningCommand`](types/interfaces#runningcommand) object once the server has started.

### `startJacktriptP2PMultipleClientsAsync()`

```typescript
export const startJacktriptP2PMultipleClientsAsync = (
  jacktripP2PClientParams: Omit<JacktripP2PClientParams, 'localPort' | 'clientName' | 'host'>,
  clients: JacktripP2PClient[]
): Promise<RunningCommand[]>
```

Starts multiple Jacktrip P2P Clients asynchronously based on an array of clients.

#### Parameters

- `jacktripP2PClientParams`: An object from type [JacktripP2PClientParams](types/interfaces#jacktripp2pclientparams) joined with [JacktripP2PServerParams](types/interfaces#jacktripp2pserverparams).

- `clients`: An array of [`JacktripP2PClient`](types/interfaces#jacktripp2pclient) objects, each defining `localPort`, `clientName`, and `host`.

#### Returns

- `Promise<RunningCommand>`: Resolves to a [`RunningCommand`](types/interfaces#runningcommand) object once the server has started.

### `startJacktripP2PServer()`

```typescript
export const startJacktripP2PServer = (
  jacktripP2PServerParams: JacktripP2PServerParams,
  { onLog }: OptionalParams
): RunningCommand
```

Starts a Jacktrip Peer-to-Peer Server by spawning a process with defined parameters. It validates and prepares command-line arguments for launching the Jacktrip server.

#### Parameters

- `jacktripP2PServerParams`: An object from type [JacktripP2PServerParams](types/interfaces#jacktripp2pserverparams).

- `optionalParams`: Additional parameters, including logging functionality from type [OptionalParams](types/interfaces#optionalparams)

#### Returns

- `RunningCommand`: An object containing from type [RunningCommand](types/interfaces#runningcommand).

#### Throws

- **BitRateNotValidException**: If the provided bit rate is invalid.
- **StartJacktripFailedException**: If the server fails to start, an exception containing the error message is thrown.

### `startJacktripP2PServerAsync()`

```typescript
export const startJacktripP2PServerAsync = (
  jacktripP2PServerParams: JacktripP2PServerParams,
  optionalParams: OptionalParams
): Promise<RunningCommand>
```

Starts a Jacktrip Peer-to-Peer Server asynchronously, allowing the application to continue without waiting for the server to fully start.

#### Parameters

- `jacktripP2PServerParams`: An object from type [JacktripP2PServerParams](types/interfaces#jacktripp2pserverparams).

- `optionalParams`: Additional parameters, including logging functionality from type [OptionalParams](types/interfaces#optionalparams)

#### Returns

- `Promise<RunningCommand>`: Resolves to a [`RunningCommand`](types/interfaces#runningcommand) object once the server has started.
