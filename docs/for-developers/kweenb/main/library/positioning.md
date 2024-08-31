# Positioning

To add a new positioning algorithm, you need to define a calculator that processes the `PozyxData` and outputs the desired results.

## Helpers

### PozyxData

`PozyxData` is a dictionary that holds the data received from Pozyx sensors. This data is periodically updated by **kweenb** at intervals defined in the constants file.

### PositioningTarget

`PositioningTarget` exports an interface that is used to send the calculated positioning data over OSC (Open Sound Control) to a target application (e.g., Reaper, Ableton, etc.).

### PositioningTargets

`PositioningTargets` is a file that lists all available OSC targets. When adding a new target, you must update this file and add a new `OSCBase` so the system knows how to send OSC messages to that target.

### PozyxMqttBroker

`PozyxMqttBroker` is responsible for connecting to the Pozyx MQTT broker. It receives Pozyx data and stores it in a cache for later processing.

### PositioningController

The `PositioningController` manages the positioning algorithms. To add new algorithms, you need to update the `initPositioningControllerAlgorithms` function within this controller.

## Algorithms

To add a new positioning algorithm, follow these steps:

1. **Create a New Algorithm**: Add your new algorithm in the `Algorithms` folder.

2. **Inherit from PositioningAlgorithmBase**: Ensure your algorithm class inherits from `PositioningAlgorithmBase`. This base class provides the necessary structure for your algorithm.

3. **Implement sendToTargets**: The `sendToTargets` function is abstract and must be implemented in your algorithm. This function is where the main calculation occurs, and it’s responsible for sending the results to the appropriate targets.

4. **Use Existing Algorithms as Reference**: For guidance, you can refer to the `VolumeControlXY` algorithm as an example of how to structure your implementation.
