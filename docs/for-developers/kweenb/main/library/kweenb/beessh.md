# BeeSsh

## Overview

This module provides SSH-based utilities for managing audio processing software on remote devices, referred to as "Bees". It interacts with each Bee to perform various operations, such as managing audio files, controlling audio processing software (Jack, Jacktrip, Pure Data), and gathering state information about the Bees.

The `BeeSsh` module is responsible for executing SSH commands on remote Bees based on their IP addresses. It manages operations like file handling and service supervision, relevant to the audio management system within the `kweenb` project.

## Functions

### `writeDataToFile(ipAddress: string, path: string, data: string)`

Creates a file on the client machine with the specified data.

**Parameters**:

- `ipAddress` (string): The IP address of the client.
- `path` (string): The destination file path on the client's filesystem.
- `data` (string): The content to write into the file.

### `deletePath(ipAddress: string, path: string)`

Deletes a specified path (file or directory) from the client machine.

**Parameters**:

- `ipAddress` (string): The IP address of the client.
- `path` (string): The path to delete on the client's filesystem.

### `getAudioFiles(ipAddress: string): Promise<AudioFile[]>`

Retrieves a list of audio files located on the client machine.

**Parameters**:

- `ipAddress` (string): The IP address of the client.

**Returns**: A promise that resolves to an array of `AudioFile` objects.

### `getAudioScenes(ipAddress: string): Promise<AudioScene[]>`

Retrieves audio scene configurations from the client's filesystem.

**Parameters**:

- `ipAddress` (string): The IP address of the client.

**Returns**: A promise that resolves to an array of `AudioScene` objects.

### `isJackRunning(ipAddress: string): Promise<boolean>`

Checks if the Jack audio server is running on the client.

**Parameters**:

- `ipAddress` (string): The IP address of the client.

**Returns**: A promise that resolves to a boolean indicating the Jack server's status.

### `isJacktripRunning(ipAddress: string): Promise<boolean>`

Checks if the Jacktrip service is running on the client.

**Parameters**:

- `ipAddress` (string): The IP address of the client.

**Returns**: A promise that resolves to a boolean indicating the Jacktrip service's status.

### `isZwerm3ApiRunning(ipAddress: string): Promise<boolean>`

Checks if the Zwerm3 API is active on the client.

**Parameters**:

- `ipAddress` (string): The IP address of the client.

**Returns**: A promise that resolves to a boolean indicating the Zwerm3 API's status.

### `killJack(ipAddress: string)`

Kills all running Jack processes on the client.

**Parameters**:

- `ipAddress` (string): The IP address of the client.

### `killJackAndJacktrip(ipAddress: string)`

Kills both Jack and Jacktrip processes on the client.

**Parameters**:

- `ipAddress` (string): The IP address of the client.

### `killJacktrip(ipAddress: string)`

Kills all running Jacktrip processes on the client.

**Parameters**:

- `ipAddress` (string): The IP address of the client.

### `killPureData(ipAddress: string)`

Kills the Pure Data process on the client.

**Parameters**:

- `ipAddress` (string): The IP address of the client.

### `startPureData(ipAddress: string)`

Starts the Pure Data application on the client. Also manages the state by ensuring that no other instance is running before starting a new one.

**Parameters**:

- `ipAddress` (string): The IP address of the client.
