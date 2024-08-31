# usePositioningStore

This documentation provides an overview of the `usePositioningStore.ts` file, which is a store using Zustand for managing the connection state to a Pozyx broker.

## Table of Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Store Structure](#store-structure)
  - [State](#state)
  - [Actions](#actions)
- [Usage](#usage)
- [Code Overview](#code-overview)

## Introduction

The `usePositioningStore` leverages **Zustand** to create a global store that manages the connection status of a Pozyx broker. It provides an intuitive API for connecting and disconnecting from the broker.

## Installation

To use the positioning store, ensure that you have **Zustand** installed:

```bash
npm install zustand
```

## Store Structure

The store is composed of two main parts: **State** and **Actions**.

### State

| **Property**           | **Type** | **Description**                             |
| ---------------------- | -------- | ------------------------------------------- |
| `pozyxBrokerConnected` | boolean  | Indicates if the Pozyx broker is connected. |

### Actions

| **Action**              | **Description**                                                            |
| ----------------------- | -------------------------------------------------------------------------- |
| `pozyxBrokerConnect`    | Sets `pozyxBrokerConnected` to `true`. Connects to the Pozyx broker.       |
| `pozyxBrokerDisconnect` | Sets `pozyxBrokerConnected` to `false`. Disconnects from the Pozyx broker. |

## Usage

To utilize the `usePositioningStore`, you can import and use it within your React components as shown below:

```typescript
import { usePositioningStore } from "./usePositioningStore";

const Component = () => {
  const { pozyxBrokerConnected, pozyxBrokerConnect, pozyxBrokerDisconnect } =
    usePositioningStore();

  return (
    <div>
      <p>
        Broker Status: {pozyxBrokerConnected ? "Connected" : "Disconnected"}
      </p>
      <button onClick={pozyxBrokerConnect}>Connect</button>
      <button onClick={pozyxBrokerDisconnect}>Disconnect</button>
    </div>
  );
};
```

## Code Overview

Below is the complete code for the `usePositioningStore.ts` file:

```typescript
import { create } from "zustand";

type PositioningStoreState = {
  pozyxBrokerConnected: boolean;
};

type PositioningStoreActions = {
  pozyxBrokerConnect: () => void;
  pozyxBrokerDisconnect: () => void;
};

eort const usePositioningStore = create<
  PositioningStoreState & PositioningStoreActions
>((set) => ({
  pozyxBrokerConnected: false,
  pozyxBrokerConnect: () => set((state) => ({ pozyxBrokerConnected: true })),
  pozyxBrokerDisconnect: () =>
    set((state) => ({ pozyxBrokerConnected: false })),
}));
```

## Conclusion

The `usePositioningStore` is a simple yet powerful tool for managing the connection status to a Pozyx broker with Zustand. With clear **state** definitions and actionable **methods**, integrating this store into your application is seamless and enhances the connection management eerience! 
