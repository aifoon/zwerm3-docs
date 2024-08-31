# useAppStore

This file defines a Zustand store named `useAppStore` that manages application state related to audio settings and a collection of bees.

## Overview

The `useAppStore` combines both **state** and **actions** to manage:

- **Volume Settings**: Control over master volume levels.
- **Bee Swarm Management**: Handling of a collection of bee entities.

## Installation

Ensure you have Zustand and the necessary interfaces installed:

```bash
npm install zustand @shared/interfaces
```

## State Structure

The state is defined by the `AppState` type, which includes:

| **Property**   | **Type**  | **Description**                                                      |
| -------------- | --------- | -------------------------------------------------------------------- |
| `masterVolume` | `number`  | Current master volume level. Defaults to `50`.                       |
| `masterLow`    | `number`  | Lower frequency volume level. Defaults to `1`.                       |
| `masterHigh`   | `number`  | Higher frequency volume level. Defaults to `1`.                      |
| `rehydrated`   | `boolean` | Indicates if the state has been rehydrated. Defaults to `false`.     |
| `currentSwarm` | `IBee[]`  | Array of current bees in the swarm. Defaults to an empty array `[]`. |

### Actions

The actions are defined by the `AppAction` type, which consists of methods to modify the state:

| **Method**        | **Description**                                      |
| ----------------- | ---------------------------------------------------- |
| `setMasterVolume` | Sets the `masterVolume` state.                       |
| `setMasterLow`    | Sets the `masterLow` state.                          |
| `setMasterHigh`   | Sets the `masterHigh` state.                         |
| `setCurrentSwarm` | Updates the `currentSwarm` with a new array of bees. |

## Usage Example

Here's a quick example to demonstrate how you might use the `useAppStore`:

```typescript
import { useAppStore } from "./useAppStore";

const ExampleComponent = () => {
  const { masterVolume, setMasterVolume } = useAppStore();

  return (
    <div>
      <p>Master Volume: {masterVolume}</p>
      <button onClick={() => setMasterVolume(75)}>Increase Volume 🔊</button>
    </div>
  );
};
```

## API Reference

### **`useAppStore`**

The `useAppStore` is an instance of Zustand's store combining both **state** and **actions**:

- **State**: Holds the application configuration related to audio and bees.
- **Actions**: Provide methods to update each piece of state.

#### **Initialization**

The store is initialized with default values:

```typescript
export const useAppStore = create<AppState & AppAction>((set) => ({
  masterVolume: 50,
  masterLow: 1,
  masterHigh: 1,
  rehydrated: false,
  currentSwarm: [],
  setMasterVolume: (masterVolume) => set({ masterVolume }),
  setMasterLow: (masterLow) => set({ masterLow }),
  setMasterHigh: (masterHigh) => set({ masterHigh }),
  setCurrentSwarm: (currentSwarm) => set({ currentSwarm }),
}));
```

### **Methods**

- **`setMasterVolume(masterVolume: number): void`**

  - Updates the `masterVolume` state.

- **`setMasterLow(masterLow: number): void`**

  - Updates the `masterLow` state.

- **`setMasterHigh(masterHigh: number): void`**

  - Updates the `masterHigh` state.

- **`setCurrentSwarm(currentSwarm: IBee[]): void`**
  - Updates the `currentSwarm` with a new array of `IBee`.

## Conclusion

The `useAppStore` is a crucial part of handling audio and bee swarm states in your application. With its combination of state and actions, it provides a simple yet powerful way to manage your app's configurations.
