# Renderer Process

The renderer process is built with [React](#react) and uses [Vite](#vite) as the build tool.

## React

We use React as the frontend framework. In [the `components` folder](components), you'll find all the components related to the Electron application. Additionally, there is [a `shared` folder](../sharedcomponents) containing components that are reused across other projects, such as the trigger interface.

### Layout

The layout components are used to construct the application's layout, including navigation and the sidebar. Each page has a dedicated folder (e.g., `Audio` for triggering, `Positioning` for positioning, etc.).

While there is a design system available, it is currently not maintained.

## Material UI

We use [Material UI](https://mui.com/) as the component library, integrating its existing components to build [our React components](components).

## Vite

We use [Vite](https://vitejs.dev/) as a server, in the development it spins up a webserver with hot reloading. Also, the current builded version of the interface will be served on the port specified in the constants file.
