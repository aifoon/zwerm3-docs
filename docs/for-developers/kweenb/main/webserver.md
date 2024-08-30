---
sidebar_position: 4
---

# Webserver

To serve the trigger interface, we spin up a local webserver by [Express](https://expressjs.com/) on [startup](kweenb#async-initbeforewindow).

:::note
The `interface` project is a React interface that is compiled in the public folder of the main process. Therefore, the interface can be served here.
:::

## Express Module

The `express.ts` file is a module responsible for initializing and managing the Express.js server process within the Kweenb application. It provides functionality to start the Express server and handle its lifecycle, particularly in the context of the application's environment (development or production).

This module defines functions to start and terminate the Express server process. It utilizes Node.js's child process capabilities to run the server in a separate node process, allowing better isolation and management of the server and main application logic.

## Functions

### `killExpress`

```typescript
export const killExpress = () => {
  if (expressProcess && !expressProcess.killed) {
    expressProcess.kill("SIGINT");
  }
};
```

Kills the currently running Express server process if it is active.

### `initExpress`

```typescript
export const initExpress = (): ChildProcess | null => {
  const serverUrl =
    import.meta.env.MODE === "production"
      ? path.resolve(__dirname, "server.js")
      : path.resolve(__dirname, "../public/server.js");

  expressProcess = fork(serverUrl, {
    env: {
      ...process.env,
    },
  });

  try {
    if (expressProcess) {
      expressProcess.stdout?.on("data", console.log);
      expressProcess.stderr?.on("data", console.error);
    }
    return expressProcess;
  } catch (e) {
    return null;
  }
};
```

Initializes and starts the Express server process.

**Details**:

- Determines the correct server script to run based on the environment (production or development).
- Uses `fork` to start the server process with the determined server script.
- Sets up event listeners on the `stdout` and `stderr` streams of the process to log output and errors.
- Handles potential errors by returning `null` if the process cannot be started.
