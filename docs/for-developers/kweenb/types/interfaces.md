---
sidebar_position: 1
id: interfaces
title: Interfaces
sidebar_label: Interfaces
---

This file defines shared interfaces used throughout the KweenB application. These interfaces help maintain consistency across various components, particularly in handling data related to audio devices (Bees), positioning, audio settings, and presets. The code is structured to represent data models and types, aiding in TypeScript's type checking and improving the developer experience.

## General Interfaces

### `IError`

- `message`: The error message string.
- `where`: A string indicating where the error occurred.

### `LoadingState`

- `loading`: A boolean indicating if a loading process is ongoing.
- `text?`: An optional string for loading text display.
- `cancelButton?`: An optional boolean to show a cancel button.
- `onCancel?`: An optional function callback executed on cancel.

## For The Kween

**Note**: These types are deprecated

### `IHubClients`

- `sendChannels`: An array of strings representing channels used to send data.
- `receiveChannels`: An array of strings representing channels used to receive data.

### `IHubClientsResponse`

- `message`: A string message related to the hub client operation.
- `hubClients`: An instance of `IHubClients`.

## For Bee

### `ChannelType`

- `MONO`: Represents a mono audio channel.
- `STEREO`: Represents a stereo audio channel.

### `IBee`

- `id`: Unique identifier for the Bee.
- `name`: Name of the Bee.
- `ipAddress`: IP address of the Bee.
- `isOnline`: Boolean indicating if the Bee is online.
- `isActive`: Boolean indicating if the Bee is active.
- `isApiOn`: Boolean indicating if the API service is running for the Bee.
- `status`: An instance of `IBeeStatus`.
- `channelType`: Type of channel (using `ChannelType` enum).
- `channel1`: Numeric identifier for channel 1.
- `channel2?`: Optional numeric identifier for channel 2.
- `pozyxTagId?`: Optional string for the Pozyx tag identifier.
- `networkPerformanceMs`: Numeric value representing the network performance in milliseconds.

### `IBeeInput`

- `id`: Unique identifier for the Bee input.
- `name`: Name for the Bee input.
- `ipAddress`: IP address for the Bee input.
- `isActive`: Boolean indicating if the Bee input is active.
- `channelType`: Type of channel (using `ChannelType` enum).
- `channel1`: Numeric identifier for the main channel.

### `IBeeConfig`

- `useMqtt`: Boolean indicating if MQTT is used.
- `mqttBroker`: String for the MQTT broker address.
- `mqttChannel`: String for the specific MQTT channel.
- `device`: String for the device information.

### `IBeeStatus`

- `isJackRunning`: Boolean indicating if Jack is running.
- `isJacktripRunning`: Boolean indicating if Jacktrip is running.

### `IBeeState`

- `bee`: An instance of `IBee`.
- `lastPingResponse`: Date of the last response or null.
- `isApiOn`: Boolean indicating if the API is active.
- `isJackRunning`: Boolean indicating if Jack is running.
- `isJacktripRunning`: Boolean indicating if Jacktrip is running.
- `networkPerformanceMs`: Numeric value for network performance in milliseconds.

## For System Clients (For Jack Status coming from zwerm3-)

### `ISystemClients`

- `captureChannels`: An array of strings for capture channels.
- `playbackChannels`: An array of strings for playback channels.

### `ISystemClientsResponse`

- `message`: A string message related to the system client operation.
- `systemClients`: An instance of `ISystemClients`.

## Audio and Scene Related (Triggering)

### `AudioFile`

- `name`: The name of the audio file.
- `fullPath`: The full path to the audio file.
- `files`: An array of objects representing sub-files within the main audio file.

### `AudioScene`

- `name`: The name of the audio scene.
- `foundOnBees`: An array of `IBee` instances where the scene is found.
- `oscAddress`: The OSC address associated with the audio scene.

## For Positioning

### `IPositioningData`

- `x`: The x-coordinate.
- `y`: The y-coordinate.
- `z`: The z-coordinate.

### `IOrientationData`

- `yaw`: The yaw angle.
- `pitch`: The pitch angle.
- `roll`: The roll angle.

### `ITagData`

- `coordinates`: An instance of `IPositioningData`.

### `IPozyxData`

- `version`: The version of the system.
- `tagId`: The tag ID.
- `success`: A boolean indicating if the data retrieval was successful.
- `timestamp`: A number indicating the timestamp.
- `data`: An instance of `ITagData`.

### `VolumeControlXYOptions`

- `bees`: An array of `IBee` instances.
- `beeRadius`: Radius used for calculations with Bees.
- `tagId`: The tag ID used in positioning.
- `maxVolume`: Maximum volume level.
- `maxVolumeZoneRadius`: Zone radius for maximum volume.
- `easingIntervalTime`: Time for easing effect.
- `updateRateEasingFactor`: Factor for updating the easing.

## For Settings

### `ISetting`

- `key`: The key for the setting.
- `value`: The value for the setting.

### `ISettings`

- `beeAudioSettings`: An instance of `IBeeAudioSettings`.
- `kweenBAudioSettings`: An instance of `IKweenBAudioSettings`.
- `kweenBSettings`: An instance of `IKweenBSettings`.
- `positioningSettings`: An instance of `IPositioningSettings`.

### `IAudioSettingsJack`

- `bufferSize`: Buffer size for Jack.
- `device`: String for the device name.
- `inputChannels`: Number of input channels.
- `outputChannels`: Number of output channels.
- `periods`: Number of periods.
- `sampleRate`: Sample rate.

### `IAudioSettingsJackTrip`

- `bitRate`: Bit rate for JackTrip.
- `channels`: Number of channels.
- `redundancy`: Redundancy settings.
- `queueBufferLength`: Length of the queue buffer.
- `realtimePriority`: Boolean for realtime priority.
- `receiveChannels`: Number of receiving channels.
- `sendChannels`: Number of sending channels.
- `localPort`: Local port number for connection.

### `IBeeAudioSettings`

- `jack`: An instance of `IAudioSettingsJack`.
- `jacktrip`: An instance of `IAudioSettingsJackTrip`.

### `IKweenBAudioSettings`

- `jack`: An instance of `IAudioSettingsJack`.
- `jacktrip`: An instance of `IAudioSettingsJackTrip`.

### `IKweenBSettings`

- `jackFolderPath`: The path for Jack folder.
- `jacktripBinPath`: The path for JackTrip binary.

## For Presets

### `IAudioPreset`

- `fileName`: The name of the audio preset file.
- `name`: The name of the preset.
- `description`: Description of the preset.
- `appMode`: The application mode (using `AppMode` enum).
- `maxAllowedBees`: Maximum allowed Bees for this preset.
- `latency`: Latency associated with the preset.
- `bee`: Settings specific to Bees including Jack and Jacktrip settings.
- `kweenb`: Settings specific to KweenB including Jack and Jacktrip settings.

### Socket

### `SocketMessage`

- `clientId?`: Optional string for the client identifier.
- `message`: The message sent through the socket.
- `payload?`: Optional payload containing additional data.
