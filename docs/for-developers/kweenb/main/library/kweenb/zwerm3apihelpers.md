# Zwerm3ApiHelpers

## Overview

The `Zwerm3ApiHelpers.ts` file provides a set of utilities to interact with the Zwerm3 API, specifically for managing audio connections, configurations, and states on corresponding bees. These helpers ensure seamless communication between the application and the audio devices while handling various functionalities such as starting processes, checking statuses, and manipulating audio configurations.

This module encapsulates various functions that facilitate communication with the Zwerm3 API running on bees. Each function corresponds to a specific task related to managing audio streams, checking system status, or manipulating configurations.

## Functions

### `createFullEndpoint`

```typescript
const createFullEndpoint = (ipAddress: string, endpoint: string): string;
```

Creates a full endpoint URL based on the provided IP address and the specific API endpoint that needs to be accessed.

**Parameters**:

- `ipAddress`: The IP address of the bee.
- `endpoint`: The specific endpoint to connect to (e.g., `jack/start`).

**Returns**: A complete URL formatted string.

### `isZwerm3ApiRunning`

```typescript
const isZwerm3ApiRunning = async (ipAddress: string) => Promise<boolean>;
```

Checks if the Zwerm3 API is currently running on the specified IP address.

**Parameters**:

- `ipAddress`: The IP address of the bee.

**Returns**: A promise resolving to a boolean indicating the API's running status.

### `connectChannel`

```typescript
const connectChannel = async (ipAddress: string, source: string, destination: string);

```

Connects audio channels on the specified bee.

**Parameters**:

- `ipAddress`: The IP address where the Zwerm3API is running.
- `source`: The source channel to connect.
- `destination`: The destination channel to connect to.

### `isJackRunning`

```typescript
const isJackRunning = async (ipAddress: string): Promise<boolean>;
```

Checks if the JACK audio server is running on the specified IP address.

**Parameters**:

- `ipAddress`: The IP address of the bee.

**Returns**: A promise resolving to a boolean indicating if JACK is running.

### `isJacktripRunning`

```typescript
const isJacktripRunning = async (ipAddress: string): Promise<boolean>;
```

Checks if the Jacktrip audio server is running on the specified IP address.

**Parameters**:

- `ipAddress`: The IP address of the bee.

**Returns**: A promise resolving to a boolean indicating if Jacktrip is running.

### `getAllConfig`

```typescript
const getAllConfig = async (ipAddress: string): Promise<IBeeConfig>;
```

Fetches all configuration settings from the Zwerm3 API for a specific bee.

**Parameters**:

- `ipAddress`: The IP address of the bee.

**Returns**: A promise resolving to an object of type [`IBeeConfig`](../../../types/interfaces#ibeeconfig) containing various configuration settings.

### `getHubClients`

```typescript
const getHubClients = async (ipAddress: string): Promise<IHubClients>;
```

Retrieves a list of all connected hub clients for a bee.

**Parameters**:

- `ipAddress`: The IP address of the bee.

**Returns**: A promise resolving to an object containing arrays of `sendChannels` and `receiveChannels`.

### `getJackSystemClients`

```typescript
const getJackSystemClients = async (ipAddress: string): Promise<ISystemClients>;
```

Obtains a list of local JACK system clients running on the specified bee.

**Parameters**:

- `ipAddress`: The IP address of the bee.

**Returns**: A promise resolving to an object containing arrays of `playbackChannels` and `captureChannels`.

### `killJackAndJacktrip`

```typescript
const killJackAndJacktrip = async (ipAddress: string);
```

Terminates all running JACK and Jacktrip processes on the specified bee.

**Parameters**:

- `ipAddress`: The IP address of the bee.

### `killJack`

```typescript
const killJack = async (ipAddress: string);
```

Terminates the JACK audio server on the specified bee.

**Parameters**:

- `ipAddress`: The IP address of the bee.

### `killJacktrip`

```typescript
const killJacktrip = async (ipAddress: string);
```

Terminates the Jacktrip server on the specified bee.

**Parameters**:

- `ipAddress`: The IP address of the bee.

### `startJack`

```typescript
const startJack = async (ipAddress: string, triggerOnly: boolean = false);
```

Starts the JACK audio server with specific configurations.

**Parameters**:

- `ipAddress`: The IP address of the bee.
- `triggerOnly`: If true, starts JACK with a reduced buffer size.

### `startJackWithJacktripHubServer`

```typescript
const startJackWithJacktripHubServer = async (ipAddress: string);
```

Starts the JACK audio server with Jacktrip Hub server integration.

**Parameters**:

- `ipAddress`: The IP address of the bee.

### `startJackWithJacktripHubClient`

```typescript
const startJackWithJacktripHubClient = async (ipAddress: string, clientName: string = "beeworker");
```

Starts the Jacktrip Hub client on the specified bee.

**Parameters**:

- `ipAddress`: The IP address of the bee.
- `clientName`: The name of the client, defaults to "beeworker".

### `startJacktripP2PServer`

```typescript
const startJacktripP2PServer = async (ipAddress: string, clientName: string);
```

Starts the Jacktrip P2P server on the specified bee.

**Parameters**:

- `ipAddress`: The IP address of the bee.
- `clientName`: The name of the client.

### `startJackWithJacktripP2PServer`

```typescript
const startJackWithJacktripP2PServer = async (ipAddress: string, clientName: string);
```

Starts the Jack and Jacktrip P2P server on the specified bee.

**Parameters**:

- `ipAddress`: The IP address of the bee.
- `clientName`: The name of the client.

### `saveConfig`

```typescript
const saveConfig = async (ipAddress: string, config: Partial<IBeeConfig>);
```

Saves the provided configuration settings in the Zwerm3 API for the specified bee.

**Parameters**:

- `ipAddress`: The IP address of the bee.
- `config`: A partial object of [`IBeeConfig`](../../../types/interfaces#ibeeconfig) containing the settings to save.

## Error Handling

Errors during API interactions are managed through exceptions:

- `FETCH_ERROR`: Indicates a problem with fetching data.
- `POST_ERROR`: Signals issues with posting data.
- `ZWERM3_API_NOTRUNNING`: Thrown if the Zwerm3 API isn't running on the specified IP address.
