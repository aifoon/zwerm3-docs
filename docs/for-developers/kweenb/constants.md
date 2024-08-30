---
sidebar_position: 2
id: constants
title: Constants
sidebar_label: Constants
---

# Constants

## Main Process

### Debug Flags

- `DEBUG_JACK_JACKTRIP`: A boolean flag to enable or disable debugging for Jack and JackTrip. This will show the CLI output.
- `DEBUG_KWEENB`: A boolean flag to enable or disable debugging for KweenB. This will log out debugging information during development.

### Paths

- `MAIN_PATH`: Determines the main path of the application, adjusting based on the Node environment (development or production).
- `SSH_PRIVATE_KEY_PATH`: The path to the private key used for SSH connections.
- `SSL_KEY`: The path to the SSL key used for secure connections.
- `SSL_CERT`: The path to the SSL certificate used for secure connections.

### SSH Configuration

- `SSH_USERNAME_BEE`: The username used for SSH connections to the audio bees, set to “pi”.

### Sequelize Configurations

- `SEQUELIZE_LOGGING`: A boolean flag to enable or disable logging for the Sequelize database.

### Polling Configurations

- `BEE_POLLING_SECONDS`: The interval (in seconds) used to poll a bee for its status and rebuilding the cached states datatable.
- `BEE_CONSIDERED_OFFLINE_SECONDS`: The duration (in seconds) a bee is considered offline if no response is received.
- `NETWORK_PERFORMANCE_POLLING_SECONDS`: The interval used to poll a bee for its network performance.

### ZWERM3 API Configuration

- `ZWERM3API_PORT`: The port number for the ZWERM3 API, set to 3000. This is the default port number zwerm3-api is running on a bee.

### Audio File Management

- `AUDIO_FILES_ROOT_DIRECTORY`: The root directory on the Raspberry Pi where audio files are stored.

### Default Configurations

- `DEFAULT_BEE_CONFIG`: An object representing the default configuration settings for a bee, including MQTT settings and device specifications.
- `USER_DATA`: The path where user data is stored, determined based on the Node environment.
- `PRESETS_FOLDER_PATH`: The path to the presets folder, located within the user data path.
- `DEFAULT_BEE_STATUS`: An object representing the default status of a bee, indicating whether Jack and JackTrip are running.

### Ping Configuration

- `PING_CONFIG`: An object defining the configuration for ping operations, including `timeout` and `deadline`.

### JackTrip Configuration

- `START_PORT_JACKTRIP`: The starting port number for JackTrip connections, set to 4464.
- `JACKTRIP_HUB_PORT`: The port for the local JackTrip HUB server, set to 4495.
- `JACKTRIP_DOWNLOAD_VERSION`: The version of JackTrip that is set to be downloaded
- `JACK_DOWNLOAD_VERSION`: The version of Jack that is set to be downloaded

### Positioning Configuration

- `POSITIONING_INTERVAL_MS`: The interval (in milliseconds) in which the positioning controller is invoked.
- `OSCMONITOR_PORT`: The port for the OSC monitor, set to 8110.
- `REAPER_OSC_PORT`: The port for the Reaper OSC service, set to 8111.

## Shared

These constants are shared with all the subprojects in the electron app.

- `HAS_CONNECTION_WITH_PHYSICAL_SWARM`: A flag indicating whether there is a physical swarm connection available. This setting can influence how the application fetches or displays data. If set to `false`, the application may fall back on demo data (in seeds) for certain features, which is particularly useful during development or testing environments.
- `PD_PORT_BEE`: The port number used for **Pure Data (PD)** communication with the audio bees. This constant streamlines configuration related to audio processing and routing by providing a single point of reference for the port number across the application.
- `DEFAULT_APP_MODE`: This constant sets the default application mode when the application starts. The default mode is defined as `Hub`, which suggests that the application is primarily intended to function as a hub for managing audio device connections and routing. This mode can control the behavior of features, ensuring they align with the expected use case of the application.
