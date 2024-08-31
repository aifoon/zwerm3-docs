# Actions and Methods

- An action is one-way direction, it's a function that will be triggered from the renderer but does not expect to send an answer
- A method is two-way direction, it's a function that will be triggered from the renderer and expects an answer

## Bee

These endpoints are used to manage the bees within the system:

### General

#### Methods

- `createBee`: Adds a new bee to the swarm.
- `deleteBee`: Deletes a bee from the swarm.
- `updateBee`: Updates the configuration for a specific bee.
- `getCurrentBeeStates`: Gets the current bee state, which bees are online and what their network performance is.
- `fetchBee`: Retrieves data for a specific bee.
- `fetchActiveBees`: Retrieves data for a bees that are active (in the swarm)
- `fetchActiveBeesData`: Retrieves data for a bees that are active (in the swarm)
- `fetchAllBees`: Retrieves a list of all bees in the system.
- `fetchAllBeesData`: Retrieves data for all bees
- `fetchInActiveBees`: Retrieves a list of inactive bees.
- `fetchInActiveBeesData`: Retrieves a list of inactive bees.

#### Actions

- `setBeeActive`: Activates or deactivates a bee.
- `setBeePozyxTagId`: Connects a bee to a Pozyx tag id

### Jack and Jacktrip Control

These endpoints control the Jack audio system and Jacktrip for audio streaming between bees:

#### Methods

- `killJackAndJacktrip`: Stops both Jack and Jacktrip.
- `killJack`: Stops the Jack audio server.
- `killJacktrip`: Stops the Jacktrip audio stream.
- `makeAudioConnection`: Makes a Jack audio connection
- `startJack`: Starts the Jack audio server.
- `startJackWithJacktripHubClient`: Starts Jack and sets up a Jacktrip HUB client connection
- `startJackWithJacktripP2PServer`: Starts Jack and sets up Jacktrip peer-to-peer server. This is needed if kweenb wants to conect with a bee in P2P mode.

### Audio Triggering

These endpoints handle audio-related operations such as managing audio files, configuring audio parameters, and controlling the audio stream:

#### Methods

- `deleteAudio`: Deletes an audio file on the bee
- `getAudioFiles`: Retrieves a list of available audio files
- `getAudioScenes`: Fetches the current audio scenes
- `killPureData`: Kills the Pure Data process on the bee
- `setAudioParam`: Sets an audio parameter for a specific bee (volue, low, mid, high)
- `setAudioParamForAllBees`: Sets an audio parameter for all bees (volue, low, mid, high)
- `startAudio`: Starts playing a file
- `stopAudio`: Stops the audio file playing
- `startPureData`: Start Pure Data on the bee
- `uploadAudioFiles`: Uploads new audio files.

## KweenB

### General

#### Methods

- `kweenb:getKweenBVersion`: Gets the kweenb version.
- `kweenb:openDialog`: Opens a dialog.

### Jack and Jacktrip Control

#### Methods

- `kweenb:calculateCurrentLatency`: Calculates the latency with current Jack and Jacktrip setting
- `kweenb:isJackAndJacktripInstalled`: Check if Jack and Jacktrip is installed on the local computer
- `kweenb:killJackAndJacktrip`: Kill Jack and Jacktrip on the local computer
- `kweenb:startJacktripHubServer`: Starts a Jacktrip Hub server on the local computer
- `kweenb:startJackWithJacktripHubClient`: Start Jack with a Jacktrip hub client
- `kweenb:startJackWithJacktripP2PClient`: Start Jack with a Jacktrip P2P client
- `kweenb:makeHubAudioConnections`: Makes all hub Jack audio connections (from kweenb to kweenb-remote to bee)
- `kweenb:makeP2PAudioConnections`: Makes all P2P Jack audio connections (straight from kween to a bee)
- `kweenb:disconnectP2PAudioConnections`: Disconnect the P2P Jack audio connections
- `kweenb:makeAudioConnection`: Make a single Jack audio connection in Jack

### Actions

- `kweenb:setJackFolderPath`: Sets the Jack binary folder path
- `kweenb:setJacktripBinPath`: Sets the Jacktrip binary folder path

## Settings

### General

#### Methods

- `setting:fetchSettings`: Get all the settings
- `setting:updateSetting`: Update a specific setting

## Presets

### General

#### Methods

- `presets:getAudioPresets`: Get audio presets
- `presets:activatePreset`: This will get the preset and overwrites the settings in kween matching this preset

## Positioning

### General

#### Methods

- `positioning:connectPozyxMqttBroker`: Connect to the Pozyx MQTT broker
- `positioning:getAllTagIds`: Get all tag ids
- `positioning:getTargetsAndOptionsForAlgorithm`: Get the targets and options for an algorithm

#### Actions

- `positioning:disconnectPozyxMqttBrokers`: Disconnect from the Pozyx MQTT broker
- `positioning:enablePositioningControllerTargetType`:
- `positioning:enablePositioningControllerAlgorithm"`:
- `positioning:updatePositioningControllerAlgorithmOptions`:
