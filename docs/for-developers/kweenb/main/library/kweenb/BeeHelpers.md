# BeeHelpers

## Overview

The `BeeHelpers` module provides various utility functions for managing audio bees within the KweenB audio application. This module is responsible for tasks such as creating bees, fetching their configurations, and managing their audio states among others. It leverages interactions with the underlying database and APIs, facilitating communication with the physical audio devices referred to as "bees".

## Functions

### `createBee`

```typescript
const createBee = async (bee: IBeeInput): Promise<IBee>
```

**Description**: Creates a new bee with the provided input parameters.

**Parameters**:

- `bee`: An object conforming to the [`IBeeInput`](../../../types/interfaces#ibeeinput) interface containing the bee details.

**Returns**: A promise resolving to an [`IBee`](../../../types/interfaces#ibee) object that includes the newly created bee data.

### `exportBees`

```typescript
const exportBees = async (filePath: string)
```

**Description**: Exports all bees to a specified JSON file.

**Parameters**:

- `filePath`: The path to the file where bee data will be saved. If not provided, the function does nothing.

### `getAllBees`

```typescript
const getAllBees = async (activeState: BeeActiveState = BeeActiveState.ACTIVE)
```

**Description**: Retrieves all bees based on their active state.

**Parameters**:

- `activeState`: An optional parameter that specifies which bees to fetch (ACTIVE, INACTIVE, or ALL).

**Returns**: A promise that resolves to an array of [`IBee`](../../../types/interfaces#ibee) objects representing the bees.

### `getAllBeesData`

```typescript
const getAllBeesData = async (activeState: BeeActiveState = BeeActiveState.ACTIVE)
```

**Description**: Retrieves all bee data without additional status checks.

**Parameters**:

- `activeState`: An optional parameter specifying the active state to filter bees.

**Returns**: A promise resolving to an array of [`IBee`](../../../types/interfaces#ibee) objects.

### `getAudioScenesForBee`

```typescript
const getAudioScenesForBee = async (bee: IBee): Promise<AudioScene[]>
```

**Description**: Fetches audio scenes associated with a specific bee.

**Parameters**:

- `bee`: The bee object for which audio scenes are requested.

**Returns**: A promise that resolves to an array of [`AudioScene`](../../../types/interfaces#audioscene) objects.

### `getAudioScenes`

```typescript
const getAudioScenes = async (): Promise<AudioScene[]>
```

**Description**: Fetches audio scenes across all active bees.

**Returns**: A promise that resolves to an array of [`AudioScene`](../../../types/interfaces#audioscene) objects.

### `getBee`

```typescript
const getBee = async (id: number): Promise<IBee>
```

**Description**: Retrieves a bee by its unique identifier.

**Parameters**:

- `id`: The identifier of the bee to be fetched.

**Returns**: A promise that resolves to an [`IBee`](../../../types/interfaces#ibee) object.

### `getBeeConfig`

```typescript
const getBeeConfig = async (id: number): Promise<IBeeConfig>
```

**Description**: Fetches configuration details for a specified bee.

**Parameters**:

- `id`: The ID of the bee whose configuration is requested.

**Returns**: A promise resolving to an [`AudioScene`](../../../types/interfaces#ibeeconfig) object.

### `getCurrentBeeStates`

```typescript
const getCurrentBeeStates = async (bees: IBee[]): Promise<IBeeState[]>
```

**Description**: Fetches current real-time states of the specified bees.

**Parameters**:

- `bees`: An array of [`IBee`](../../../types/interfaces#ibee) objects for which states are to be retrieved.

**Returns**: A promise resolving to an array of [`IBeeState`](../../../types/interfaces#ibeestate) objects.

### `importBees`

```typescript
const importBees = async (filePath: string)
```

**Description**: Imports bees from a specified JSON file into the database.

**Parameters**:

- `filePath`: The path to the JSON file containing bee data.

### `makeP2PAudioConnection`

```typescript
const makeP2PAudioConnection = async (bee: IBee)
```

**Description**: Establishes a peer-to-peer audio connection for a specified bee.

**Parameters**:

- `bee`: The [`IBee`](../../../types/interfaces#ibee) object that represents the bee to connect.

### `setBeeActive`

```typescript
const setBeeActive = async (id: number, active: boolean)
```

**Description**: Sets the active state for a specified bee.

**Parameters**:

- `id`: The ID of the bee.
- `active`: A boolean indicating whether to set the bee to active (true) or inactive (false).

### `setBeePozyxTagId`

```typescript
const setBeePozyxTagId = async (bee: IBee, pozyxTagId: string)
```

**Description**: Sets the Pozyx tag ID for a specified bee.

**Parameters**:

- `bee`: The [`IBee`](../../../types/interfaces#ibee) object representing the bee.
- `pozyxTagId`: The new Pozyx tag ID to be set.

### `setAudioParam`

```typescript
const setAudioParam = async (bees: IBee[] | IBee, pdAudioParam: PDAudioParam, value: number | boolean)
```

**Description**: Sets a specified audio parameter for one or more bees by sending an OSC data package.

**Parameters**:

- `bees`: An array of [`IBee`](../../../types/interfaces#ibee) objects or a single [`IBee`](../../../types/interfaces#ibee) object.
- `pdAudioParam`: The audio parameter to set (e.g., volume, low, mid, high).
- `value`: The value to set for the specified audio parameter.

### `startAudio`

```typescript
const startAudio = async (bees: IBee[] | IBee, value: string)
```

**Description**: Starts audio for one or more specified bees by sending an OSC trigger to the bee.

**Parameters**:

- `bees`: An array of [`IBee`](../../../types/interfaces#ibee) objects or a single [`IBee`](../../../types/interfaces#ibee) object.
- `value`: The value with which to start audio.

### `stopAudio`

```typescript
const stopAudio = async (bees: IBee[] | IBee)
```

**Description**: Stops audio for one or more specified bees by sending an OSC trigger to the bee.

**Parameters**:

- `bees`: An array of [`IBee`](../../../types/interfaces#ibee) objects or a single [`IBee`](../../../types/interfaces#ibee) object.

## Error Handling

Each function in this module implements error handling using the custom `KweenBException`. Errors are thrown if operations fail (e.g., bee not found, network issues), allowing for streamlined error management in higher-level application logic.
