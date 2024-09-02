# Interface (triggering)

The interface is built with [React](#react) and uses [Vite](#vite) as the build tool. The build files are compiled inside the public folder of the main process.

![The interface for triggering of kweenb](/img/for-developers/interface/triggering-interface.png)

We can use this responsive interface (it will work on mobile phones and tablets) to:

- Trigger scenes on a single bee
- Trigger scenes on all the bees
- Setting audio parameters such as volume, high, low frequencies
- Can loop audio files

## React

We use React as the frontend framework. In [the `components` folder](components), you'll find all the components related to the Electron application. Additionally, there is [a `shared` folder](../sharedcomponents) containing components that are reused across other projects, such as the renderer.

### Layout

The layout components are used to construct the application's layout, including navigation and the sidebar. Each page has a dedicated folder (e.g., `Audio` for triggering, `Positioning` for positioning, etc.).

## Material UI

We use [Material UI](https://mui.com/) as the component library, integrating its existing components to build [our React components](components).

## Vite

We use [Vite](https://vitejs.dev/) as a server, in the development it spins up a webserver with hot reloading. Also, the current builded version of the interface will be served on the port specified in the constants file.

## Socket IO

The interface communicates with kweenb via websockets. We use SocketIO as the library that handles the communication and messages.
