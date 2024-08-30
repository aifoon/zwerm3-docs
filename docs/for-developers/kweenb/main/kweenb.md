---
sidebar_position: 1
---

# KweenB

KweenB is a global object that is accessible in the main process.

The `KweenB` class encapsulates methods and state management related to the application’s mode (e.g., P2P), the handling of audio devices (referred to as "bees"), and the management of various installation paths related to the audio processing framework Jack and the JackTrip software. It serves as the bridge between the application’s user interface and its backend functionalities. An instance of this object is shared via a global singleton that can be accessed throughout the main process.

## `async hasInternet(): Promise<boolean>`

Checks for internet connectivity by executing a shell script.

## `async initBeforeWindow()`

Initializes the application settings and dependencies before the main window is created:

- Initializes the Jack folder path and binary path.
- Copies default presets to a dedicated presets folder.
- Initializes the Express server and Socket.io for communication.
- Set up the SSH connections to every bee

:::info
We communicate with a bee via zwerm3-api to start Jack and Jacktrip processes, but we also make changes over SSH. The public and private keys are installed in the binaries of the electron application.
:::

## `async initAfterWindow(callback: (message: string) => void)`

Runs after the main window is created, initializing the Bee states worker and managing the download and installation of Jack and JackTrip.

## `async initJackFolderPath()`

Sets the path for the Jack binary using settings fetched from the configuration.

## `async initJackAndJacktrip()`

Checks for the existence of necessary directories and files for Jack and JackTrip, downloads them if not present, and verifies their versions for updates.

## `async initJacktripBinPath()`

Sets the binary path for JackTrip based on stored settings or defaults if not specified.

## `throwError(error: IError)`

Sends an error message to the renderer process.

## `showInfo(message: string)`

Sends an informational message to the renderer process.

## `showSuccess(message: string)`

Sends a success message to the renderer process.

## `setLoader(loading: boolean, text: string = "")`

Controls the loader's visibility in the renderer process and optionally sets a loading text.
