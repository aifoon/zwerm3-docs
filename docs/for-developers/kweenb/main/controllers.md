# Controllers

The `controllers` folder contains the main logic for handling various types of requests in the **kweenb** system. The available controllers include:

- **Settings**: Manages configuration and application settings.
- **Presets**: Handles preset configurations and management.
- **Positioning**: Manages positioning algorithms and related data.
- **kweenb**: Central controller for managing the overall system operations.
- **Bee**: Handles actions and data related to individual bees (nodes in the swarm).

## Request Handling

When an incoming request is received, the corresponding controller will use a helper function from the library to process the request.

- **Simple Requests**: If the request does not require complex processing, the controller will immediately send the response.
- **Complex Requests**: For more intricate requests, the controller may utilize additional helper functions or perform more detailed logic before sending a response.

## Exploring the Controllers

To understand the functionality available within each controller, examine [the actions and methods](actions-methods). These actions and methods provide insight into the operations that can be performed by each controller, offering a comprehensive overview of the available features and capabilities.
