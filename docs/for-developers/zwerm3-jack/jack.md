# Jack

**Table of Contents**

- [Introduction](#introduction)
- [Functions](#functions)
  - [_public_ connectChannel()](#connectchannel)
  - [_public_ disconnectChannel()](#connectchannel)
  - [_private_ getConnections()](#getconnections)
  - [_private_ getDeviceParams()](#getdeviceparams)
  - [_public_ getJackPaths()](#getjackpaths)
  - [_public_ getJackHubClients()](#getjackhubclients)
  - [_public_ getJackSystemClients()](#getjacksystemclients)
  - [_private_ hasConnection()](#hasconnection)
  - [_public_ isJackDmpRunning()](#isjackdmprunning)
  - [_public_ startJackDmp()](#startjackdmp)
  - [_public_ startJackDmpAsync()](#startjackdmpasync)

## Introduction

This module provides logic for managing the Jack Daemon on a host system. It offers functions to check its status, start it with configurable parameters, and ensure its successful initialization.

## Functions

### connectChannel()

```typescript
/**
 * Connect a source and destination channel in Jack
 *
 * @param param0 ChannelConnection
 * @returns A message about what is done
 */
export const connectChannel = async (
  { source, destination }: ChannelConnection,
  currentTry = 0
): Promise<boolean> =>
  new Promise((resolve) => {
    const jackPaths = getJackPaths();
    spawnSync(jackPaths.jackConnect, [source, destination]);
    if (currentTry >= 5) resolve(false);
    if (!hasConnection({ source, destination })) {
      setTimeout(async () => {
        if (!hasConnection({ source, destination })) {
          await connectChannel({ source, destination }, currentTry + 1);
        }
      }, 500);
    } else {
      resolve(true);
    }
  });
```

This function connects a source and destination channel in Jack using the `jack_connect` command-line utility. It repeatedly checks if the connection has been established after each attempt. If the connection is not successful after five attempts, it returns `false`.

### disconnectChannel()

```typescript
/**
 * Disconnect a source and destination channel in Jack
 *
 * @param param0 ChannelConnection
 * @returns A message about what is done
 */
export const disconnectChannel = (
  { source, destination }: ChannelConnection,
  currentTry = 0
): Promise<boolean> =>
  new Promise((resolve) => {
    const jackPaths = getJackPaths();
    spawnSync(jackPaths.jackDisconnect, [source, destination]);
    if (currentTry >= 5) resolve(false);
    if (hasConnection({ source, destination })) {
      setTimeout(async () => {
        if (hasConnection({ source, destination }))
          await disconnectChannel({ source, destination }, currentTry + 1);
      }, 500);
    } else {
      resolve(true);
    }
  });
```

This function disconnects a source and destination channel in Jack using the `jack_disconnect` command-line utility. Similar to `connectChannel()`, it repeatedly checks if the disconnection has been successful after each attempt. If the disconnection is not successful after five attempts, it returns `false`.

### getConnections()

```typescript
/**
 * Get all current connection
 * @returns
 */
const getConnections = (): {
  source: string;
  destinations: string[];
}[] => {
  // Get some information to work with
  const jackPaths = getJackPaths();

  // Get the connections
  const result = spawnSync(jackPaths.jackLsp, ["-c"]);
  const output = result.stdout.toString().split("\\n");

  // Get all connections
  const connections: { source: string; destinations: string[] }[] = [];
  for (let i = 0; i < output.length - 1; i += 1) {
    const source = output[i].trim();
    const destinations = [];
    let y = 1;
    while (output[i + y].startsWith(" ")) {
      destinations.push(output[i + y].trim());
      y += 1;
    }
    i += y - 1;
    connections.push({ source, destinations });
  }

  return connections;
};
```

This function retrieves all current connections in Jack by using the `jack_lsp` command-line utility. It parses the output and returns an array of objects, each representing a connection with its source and destination channels.

### getDeviceParams()

```typescript
/**
 * Returns the device parameters for jack to start, OS specific
 *
 * @returns CLIParams
 */
const getDeviceParams = (): CLIParams => {
  const cliParams = new CLIParams();

  // win32 support
  if (process.platform === "win32") {
    cliParams.addParam({ flag: "-d", value: "portaudio" });
    cliParams.addParam({ flag: "-d", value: "ASIO::ASIO4ALL v2" });
  }

  // macos support
  else if (process.platform === "darwin") {
    cliParams.addParam({ flag: "-d", value: "coreaudio" });
  }

  // other (alsa)
  else {
    cliParams.addParam({ flag: "-d", value: "alsa" });
  }

  return cliParams;
};
```

**Purpose:** Returns an object (`CLIParams`) containing OS-specific device parameters for starting the Jack Daemon.

**Parameters:** None

**Returns:** An instance of `CLIParams` with appropriate device flags.

**Logic:**

- Creates a new `CLIParams` object.
- Adds default device parameters based on the operating system:
  - **Windows (win32):** `-d portaudio`, `-d ASIO::ASIO4ALL v2`
  - **macOS (darwin):** `-d coreaudio`
  - **Other (Linux, etc.):** `-d alsa`
- Returns the populated `CLIParams` object.

### getJackPaths()

```typescript
const getJackFolderPath = (): JackPaths => { ... };
```

An object of type [`JackPaths`](types/interfaces#jackpaths) representing the correct paths for the JACK commands based on the operating system. This function acts as the primary interface for retrieving the correct JACK paths. It checks the platform and calls the corresponding path function (Windows, Darwin, or Linux).

### getJackHubClients()

```typescript
/**
 * Gets the current JackTrip Hub Clients
 *
 * @returns HubClients
 */
export const getJackHubClients = (): Promise<HubClients> => {
  try {
    return new Promise((resolve) => {
      // Get some information to work with
      const jackPaths = getJackPaths();

      // Get the connections
      const result = spawnSync(jackPaths.jackLsp);

      // delay before for fetching the stdout result
      setTimeout(() => {
        const output = result.stdout.toString().split("\n");

        // Create data vars
        const hubClients: HubClients = {
          sendChannels: [],
          receiveChannels: [],
        };

        // Loop over connections and add them to the internal arrays
        output.forEach((e) => {
          if (e.includes("send_")) {
            hubClients.sendChannels.push(e);
          }
          if (e.includes("receive_")) {
            hubClients.receiveChannels.push(e);
          }
        });

        resolve(hubClients);
      }, 750);
    });
  } catch (e: any) {
    throw new Exception(e.message);
  }
};
```

This function retrieves the current JackTrip Hub Clients by executing the `jack_lsp` command to list the available channels. It returns a promise that resolves with an object of type [`HubClients`](types/interfaces#hubclients), which includes the following properties:

- **sendChannels**: An array of strings representing channels that can send audio data.
- **receiveChannels**: An array of strings representing channels that can receive audio data.

**Logic**

1.  **Get JACK Paths**: Calls `getJackPaths()` to obtain the necessary path for the `jack_lsp` command.

2.  **Execute JACK Command**: The `jack_lsp` command is executed using `spawnSync`, which returns information about the current audio connections.

3.  **Timeout Delay**: A timeout of 750 milliseconds is introduced to ensure that the command has completed, allowing for the output to be processed.

4.  **Processing Output**:

    - The output from the command is split into lines.

    - Each line is inspected for the presence of `'send_'` or `'receive_'` to determine if it corresponds to a send or receive channel, respectively.

    - Appropriate channels are pushed into the `sendChannels` or `receiveChannels` arrays.

5.  **Return Promise**: The `hubClients` object is resolved as the final output of the promise.

### getJackSystemClients()

```typescript
/**
 * Gets the current Jack System Clients
 *
 * @returns SystemClients
 */
export const getJackSystemClients = (): Promise<SystemClients> => {
  try {
    return new Promise((resolve) => {
      // Get some information to work with
      const jackPaths = getJackPaths();

      // Get the connections
      const result = spawnSync(jackPaths.jackLsp);

      // delay before for fetching the stdout result
      setTimeout(() => {
        const output = result.stdout.toString().split("\n");

        // Create data vars
        const systemClients: SystemClients = {
          captureChannels: [],
          playbackChannels: [],
        };

        // Loop over connections and add them to the internal arrays
        output.forEach((e) => {
          if (e.includes("capture_")) {
            systemClients.captureChannels.push(e);
          }
          if (e.includes("playback_")) {
            systemClients.playbackChannels.push(e);
          }
        });

        resolve(systemClients);
      }, 750);
    });
  } catch (e: any) {
    throw new Exception(e.message);
  }
};
```

This function retrieves the current JACK system clients by executing the `jack_lsp` command and parsing its output to identify which channels are capture or playback channels.

**Logic**

1.  **Call to External Command**:

    - This function uses the `spawnSync` method to execute the `jack_lsp` command. This command is essential for listing JACK client connections.

2.  **Output Handling**:

    - A timeout of 750 milliseconds is employed to allow the command to produce results before further processing begins.

3.  **Data Structuring**:

    - The output from the command is split by newline characters to create an array of results.

    - Each result is examined, and if it contains the string 'capture\_', it is added to the `captureChannels` array; if it contains 'playback\_', it goes into the `playbackChannels` array.

4.  **Returns**: A promise that resolves to a `SystemClients` object, which contains two arrays:

    - `captureChannels`: List of active capture channels.
    - `playbackChannels`: List of active playback channels.

5.  **Error Handling**:

    - Any errors encountered during execution will throw an instance of the `Exception` class, encapsulating the error message.

### hasConnection()

```typescript
/**
 * Check if we have a certain connection
 * @param source
 * @param destination
 * @returns
 */
export const hasConnection = ({ source, destination }: ChannelConnection) => {
  // get all the connections
  const connections = getConnections();

  // find source
  const connection = connections.find(
    ({ source: currentSource }) => source === currentSource
  );

  // check if destination exists
  return connection?.destinations.includes(destination);
};
```

This function checks if a specific connection exists between a source and destination channel. It retrieves all current connections using `getConnections()`, finds the source channel, and then verifies if the destination channel is included in the source's destinations.

### isJackDmpRunning()

```typescript
/**
 * Gets a boolean value if the Jack Daemon is running or not
 * @returns boolean
 */
export const isJackDmpRunning = async (): Promise<boolean> =>
  new Promise<boolean>((resolve, reject) => {
    try {
      find("name", "jackd", false).then((list: any) => {
        resolve(list.length > 0);
      });
    } catch (e: any) {
      reject(e.message);
    }
  });
```

**Purpose:** Asynchronously checks if the Jack Daemon is currently running.

**Parameters:** None

**Returns:** A Promise resolving to `true` if the Jack Daemon is running, `false` otherwise.

**Logic:**

- Uses the `find-process` library to search for processes named "jackd".
- If any processes are found, resolves the promise with `true`, indicating the Jack Daemon is running.
- If no processes are found, resolves the promise with `false`.
- Catches any errors during the process search and rejects the promise with the error message.

### startJackDmp()

```typescript
/**
 * Starts a Jack Daemon on the host
 * @param param0 JackParams channels, bufferSize & sampleRate
 * @returns RunningCommand
 */
export const startJackDmp = (
  jackParams: JackParams,
  { onLog }: OptionalParams
): RunningCommand => {
  // Destructure the variables
  const {
    device = "",
    outputChannels = 2,
    inputChannels = 2,
    bufferSize = 256,
    sampleRate = 48000,
    periods = 2,
  } = jackParams;

  // Do some validation
  if (!validateBufferSize(bufferSize)) throw new BufferSizeNotValidException();
  if (!validateSampleRate(sampleRate)) throw new SampleRateNotValidException();

  // Get some information to work with
  const jackPaths = getJackPaths();
  const cliParams = getDeviceParams();

  // Add the soundcard device (if given, defaults the default soundcard driver)
  if (device) cliParams.addParam({ flag: "-d", value: device.toString() });

  // Add the output channels
  if (outputChannels !== -1)
    cliParams.addParam({ flag: "-o", value: outputChannels.toString() });

  // Add the input channels
  if (inputChannels !== -1)
    cliParams.addParam({ flag: "-i", value: inputChannels.toString() });

  // Add the buffersize
  cliParams.addParam({ flag: "-p", value: bufferSize.toString() });

  // Add the samplerate
  cliParams.addParam({ flag: "-r", value: sampleRate.toString() });

  // Specify the number of periods of playback latency.
  if (periods !== -1)
    cliParams.addParam({ flag: "-n", value: periods.toString() });

  try {
    // Create the command
    const command = `** ${jackPaths.jackDmp} ${cliParams.toString()}`;

    // Let them know which command we are running
    if (onLog) onLog(`Running Command: ${command}`);

    // Return the running command
    const runningCommand = {
      command,
      process: spawn(jackPaths.jackDmp, cliParams.toStringArray()),
    };

    // Get the CLI outputs
    runningCommand.process.stdout.on("data", (data) => {
      if (onLog) onLog(data.toString());
    });
    runningCommand.process.stderr.on("data", (data) => {
      if (onLog) onLog(data.toString());
    });

    // Return the command
    return {
      command: runningCommand.command,
      pid: runningCommand.process.pid,
      params: jackParams,
    };
  } catch (e: any) {
    throw new StartJackDmpFailedException(e.message);
  }
};
```

**Purpose:** Starts the Jack Daemon with specified parameters.

**Parameters:**

- **jackParams:** An object containing the following properties:
  - **device:** (Optional) The specific soundcard device to use.
  - **outputChannels:** (Optional) Number of output channels, defaults to 2.
  - **inputChannels:** (Optional) Number of input channels, defaults to 2.
  - **bufferSize:** The size of the audio buffer.
  - **sampleRate:** The audio sample rate.
  - **periods:** (Optional) The number of periods of playback latency, defaults to 2.
- **onLog:** (Optional) A function to handle log messages.

**Returns:**

An object containing:

- **command:** The command used to start the Jack Daemon.
- **pid:** The process ID of the running Jack Daemon.
- **params:** The `jackParams` object passed as an argument.

**Logic:**

1. **Validation:**
   - Validates the `bufferSize` and `sampleRate` parameters using the `validateBufferSize` and `validateSampleRate` functions.
   - Throws appropriate exceptions if validation fails.
2. **Parameter Setup:**
   - Retrieves the paths for the Jack Daemon binaries (`jackDmp`) using the `getJackPaths` function.
   - Constructs the `CLIParams` object for the command-line arguments.
   - Adds the device, channels, buffer size, sample rate, and periods parameters to the `CLIParams` object.
3. **Command Execution:**
   - Creates the command string using the Jack Daemon executable path and the constructed `CLIParams`.
   - Logs the running command using the `onLog` function if provided.
   - Spawns the Jack Daemon process using the `child_process.spawn` function.
   - Captures and logs the process's standard output and error streams.
4. **Return:**
   - Returns an object containing the command string, process ID, and the original `jackParams` object.
   - Catches any errors during the process spawning and throws a `StartJackDmpFailedException`.

### startJackDmpAsync()

```typescript
/**
 * Starts a Jack Daemon on the host and waits until the Jack Daemon is fully started.
 * @param param0 JackParams channels, bufferSize & sampleRate
 * @returns Promise<RunningCommand>
 */
export const startJackDmpAsync = (
  jackParams: JackParams,
  optionalParams: OptionalParams
): Promise<RunningCommand> =>
  new Promise<RunningCommand>((resolve, reject) => {
    try {
      // Init some variables
      const pollTimeout = 5000;
      const pollIntervalTime = 500;
      const maxPolls = pollTimeout / pollIntervalTime;
      let currentPoll = 0;

      // Start the Jack Daemon
      const runningCommand = startJackDmp(jackParams, optionalParams);

      // Start polling and check if Daemon is running via Jack LSP
      const pollInterval = setInterval(() => {
        currentPoll += 1;
        // If max polls are reached, clear the interval and reject the promise
        if (currentPoll > maxPolls) {
          clearInterval(pollInterval);
          reject(
            new RequestTimedOutException(
              "Request Timed Out. Could not start the Jack Daemon."
            )
          );
        }

        // Are we running?
        isJackDmpRunning().then((isRunning) => {
          // If so, resolve the promise and clear interval
          if (isRunning) {
            clearInterval(pollInterval);
            setTimeout(
              () => resolve(runningCommand),
              TIMEOUT_AFTER_RUNNING_PROCESS
            );
          }
        });
      }, pollIntervalTime);
    } catch (e) {
      reject(e);
    }
  });
```

**Purpose:** Starts the Jack Daemon asynchronously and waits until it is fully initialized.

**Parameters:**

- **jackParams:** An object containing the desired parameters for the Jack Daemon.
- **optionalParams:** (Optional) An object containing optional parameters.

**Returns:**
A Promise that resolves with an object containing:

- **command:** The command used to start the Jack Daemon.
- **pid:** The process ID of the running Jack Daemon.
- **params:** The `jackParams` object passed as an argument.

**Logic:**

1. **Initialization:**
   - Sets up polling variables (timeout, interval, max polls).
2. **Daemon Start:**
   - Starts the Jack Daemon using the `startJackDmp` function.
3. **Polling:**
   - Starts a timer that polls for the running status of the Jack Daemon using the `isJackDmpRunning` function at specified intervals.
4. **Timeout Handling:**
   - If the maximum number of polls is reached without the Jack Daemon being detected as running, the timer is cleared, and the promise is rejected with a `RequestTimedOutException`.
5. **Success Handling:**
   - If the Jack Daemon is detected as running during polling, the timer is cleared, and the promise is resolved with the `runningCommand` object. A short timeout is applied before resolving the promise to allow for the Jack Daemon to fully initialize.
6. **Error Handling:**
   - Catches any errors during the initialization or polling process and rejects the promise with the caught error.
