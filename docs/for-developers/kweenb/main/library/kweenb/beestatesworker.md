# BeeStatesWorker

The `BeeStatesWorker.ts` file is responsible for managing and monitoring the states of audio devices, referred to as "bees," within the KweenB application. This includes checking their online status, retrieving network performance metrics, and coordinating state updates. The `BeeStatesWorker` class encapsulates functionality for managing periodic checks to ensure the application remains aware of the current status of all connected bees, making it crucial for maintaining audio routing operations.

## Class Overview

### `BeeStatesWorker`

This class is responsible for:

- Maintaining a collection of bees and their states.
- Polling the status of each bee at regular intervals.
- Updating internal states based on periodic checks of network performance and operational status of services on each bee.

#### Properties

- **\_beeStates**: An instance of `BeeStates` that stores the current states of bees.
- **\_updateBeeStatesInterval**: A timeout identifier for polling bee states.
- **\_updateBeeNetworkPerformanceInterval**: A timeout identifier for polling bee network performance.

#### Methods

1.  **`constructor()`** Initializes a new `BeeStatesWorker` instance and creates a `BeeStates` object to manage states.
2.  **`get beeStates()`** Returns the current state of the bees.
3.  **`async init()`**
    - Fetches all bees using `BeeHelpers`.
    - Initializes bees in the internal state.
    - Starts intervals to periodically update bee states and network performance.
4.  **`stopWorkers()`** Stops the intervals for updating bee states and network performance.
5.  **`private updateBeeNetworkPerformance()`**
    - Retrieves the list of IP addresses of all bees.
    - Executes a shell script to check online status (via SSH) for each bee.
    - Updates the internal network performance information for online bees.
6.  **`private updateBeeStates()`**
    - Similar to `updateBeeNetworkPerformance`, this method checks the SSH status for each bee from the same list of IP addresses.
    - Updates various state properties of bees, such as online status, response time, and the operational status of specific services (Zwerm3 API, Jack, and Jacktrip).
