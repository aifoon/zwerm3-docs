# OSC

## OSC Base

The `OscBase` class manages the connection to an OSC client, allowing users to send messages to remote OSC servers.

### Class Structure

#### Properties

- `_oscClient`: An instance of the OSC `Client` class that manages the OSC connection.
- `_ipAddress`: A string representing the IP address to which OSC messages will be sent.

### Constructor

```typescript
constructor(ipAddress: string, port: number)
```

**Parameters:**

- `ipAddress` (string): The IP address of the target OSC server.
- `port` (number): The port number on which the OSC server is listening.

This constructor initializes the `OscBase` instance by creating an OSC client connected to the specified address and port.

#### Methods

##### `send`

```typescript
async send(address: string, value: any): Promise<void>
```

This method constructs an OSC message and sends it to the specified OSC address. It handles errors using Promises, allowing the calling code to handle success and failure scenarios appropriately.

**Parameters:**

- `address` (string): The OSC address that the message should be sent to.
- `value` (any): The value (data) that will be sent along with the OSC address.

**Returns:** A promise that resolves when the message is sent successfully or rejects if there is an error in sending the message.

## ReaperOSC

The `ReaperOsc` class is a part of the OSC (Open Sound Control) implementation used within the KweenB application. This class inherits from the `OscBase` class and provides methods specifically designed to interact with and control the Reaper Digital Audio Workstation (DAW) using OSC messages.

The `ReaperOsc` class facilitates sending OSC messages to control track volumes in Reaper.

### Properties

The class relies on the inherited properties from `OscBase` to manage the OSC operations.

### Methods

#### `setTrackVolume`

```typescript
async setTrackVolume(trackId: number, volume: number): Promise<void>
```

Sends an OSC message to Reaper to set the volume of a specified track.

**Parameters:**

- `trackId` (number): The ID of the track in Reaper whose volume is to be adjusted.
- `volume` (number): The desired volume level for the specified track, typically within a range of 0 to 1.

## PDBeeOSC

The `PDBeeOsc` class is a part of the Kweenb project, specifically under the OSC (Open Sound Control) library. It extends the `OscBase` class and is designed to manage audio parameters for a "bee" using OSC messages. The class facilitates the adjustment of various audio properties like volume, bass, mid, and high frequencies, as well as controlling playback options.

### Methods

#### `async setVolume(value: number): Promise<void>`

Sets the volume of the audio stream using the specified `value`.

**Parameters**:

- `value`: The volume level as a number.
  **Returns**: A promise that resolves when the OSC message is sent successfully.

#### `async setBass(value: number): Promise<void>`

Sets the bass level of the audio stream using the specified `value`.

**Parameters**:

- `value`: The bass level as a number.
  **Returns**: A promise that resolves when the OSC message is sent successfully.

#### `async setMid(value: number): Promise<void>`

Sets the mid-frequency level of the audio stream using the specified `value`.

**Parameters**:

- `value`: The mid-frequency level as a number.
  **Returns**: A promise that resolves when the OSC message is sent successfully.

#### `async setHigh(value: number): Promise<void>`

Sets the high-frequency level of the audio stream using the specified `value`.

**Parameters**:

- `value`: The high-frequency level as a number.
  **Returns**: A promise that resolves when the OSC message is sent successfully.

#### `async setFileLoop(value: boolean): Promise<void>`

Sets the file loop option for the audio playback.

**Parameters**:

- `value`: A boolean indicating whether the audio should loop.
  **Returns**: A promise that resolves when the OSC message is sent successfully.

#### `async setUseEq(value: boolean): Promise<void>`

Sets whether to use an equalizer (EQ) in audio processing.

**Parameters**:

- `value`: A boolean indicating if the EQ should be used.
  **Returns**: A promise that resolves when the OSC message is sent successfully.

#### `async startAudio(value: string): Promise<void>`

Starts audio playback based on the specified `value`.

**Parameters**:

- `value`: A string that may specify the type of playback or file to start.
  **Returns**: A promise that resolves when the OSC message is sent successfully.

#### `async stopAudio(): Promise<void>`

Stops audio playback.

**Returns**: A promise that resolves when the OSC message is sent successfully.

## OSCMonitor

The `OscMonitor` class is an extension of the `OscBase` class, which provides functionality to send debug messages over the OSC (Open Sound Control) protocol. You can use [OSCMonitor](https://www.kasperkamperman.com/blog/processing-code/osc-datamonitor/) or [Protokol](https://hexler.net/protokol) for start debugging.

### Methods

#### `sendDebugMessage(address: string, value: any): Promise<void>`

This method sends a debug message to a specified OSC address.

**Parameters**:

- `address` (`string`): The OSC address to which the message will be sent.
- `value` (`any`): The value to be sent as a message. It is converted to a string before sending.

**Returns**: `Promise<void>` - This method returns a promise that resolves when the sending operation is complete.
