# useApp

## Overview

The `useApp` hook is designed to manage and synchronize bee audio scenes with active bees, providing a streamlined approach to handle audio scenarios in an application. It employs state management, asynchronous server communication, and persistent storage.

## Implementation

### **Imports**

```typescript
import React, { useEffect, useState } from "react";
import {
  BeeAudioScene,
  useAppPersistentStorage,
} from "./useAppPersistentStorage";
import { useSocket } from "./useSocket";
import { IBee } from "@shared/interfaces";
import { useAppStore } from "./useAppStore";
```

- **React Hooks**: Utilizes `useEffect` and `useState` for component lifecycle and state management.
- **Custom Hooks**:
  - `useAppPersistentStorage`: Manages persistent storage of `BeeAudioScene`.
  - `useSocket`: Handles socket communication.
  - `useAppStore`: Manages the application state related to current bees.

### **Functionality**

The `useApp` function is a custom hook providing the following features:

- **State Management**: Initializes a loading state.
- **Socket Communication**: Requests active bees from the server.
- **Persistent Storage**: Fetches and updates bee audio scenes.
- **Bee Management**: Manages the current swarm of bees.

### **Detailed Description**

#### **State Initialization**

```typescript
const [loading, setLoading] = useState(true);
```

- **`loading` State**:
  - **Purpose**: Indicates the loading status of bee audio scenes.
  - **Initial Value**: `true`

#### **Socket Communication**

```typescript
const { sendToServerAndExpectResponseAsync } = useSocket();
```

- **Function**: `sendToServerAndExpectResponseAsync`
  - **Purpose**: Sends requests to the server and expects an asynchronous response.
  - **Usage**: Fetches active bees.

#### **Persistent Storage Access**

```typescript
const beeAudioScenes = useAppPersistentStorage((state) => state.beeAudioScenes);
const swapAllBeeAudioScenes = useAppPersistentStorage(
  (state) => state.swapAllBeeAudioScenes
);
```

- **`beeAudioScenes`**: Retrieves stored bee audio scenes.
- **`swapAllBeeAudioScenes`**: Updates all bee audio scenes with new data.

#### **Current Swarm Management**

```typescript
const setCurrentSwarm = useAppStore((state) => state.setCurrentSwarm);
```

- **Function**: `setCurrentSwarm`
  - **Purpose**: Sets the current active swarm of bees.

#### **Effect Hook**

```typescript
useEffect(() => {
  if (!beeAudioScenes) {
    return;
  }

  sendToServerAndExpectResponseAsync("fetchActiveBees", {}).then((data) => {
    const currentSwarm = data as IBee[];
    setCurrentSwarm(currentSwarm);

    const updatedBeeAudioScenes: BeeAudioScene[] = [];
    currentSwarm.forEach((bee) => {
      const beeAudioScene = beeAudioScenes.find(
        (audioScene) => audioScene.bee.id === bee.id
      );
      if (!beeAudioScene) {
        updatedBeeAudioScenes.push({
          bee,
          audioScene: undefined,
          isLooping: false,
        });
      } else {
        updatedBeeAudioScenes.push(beeAudioScene);
      }
    });

    swapAllBeeAudioScenes(updatedBeeAudioScenes);
    setLoading(false);
  });
}, []);
```

- **Purpose**: Synchronizes the current swarm and their corresponding audio scenes.
- **Process**:
  1. **Check for Existence**: Returns early if there are no saved bee audio scenes.
  2. **Fetch Active Bees**: Requests active bee data from the server.
  3. **Update State**:
     - Sets the current swarm.
     - Updates or initializes bee audio scenes.
     - Swaps all bee audio scenes.
  4. **Set Loading**: Marks loading as complete.

### **Return Value**

```typescript
return { loading };
```

- **`loading`**: Boolean indicating whether data is still loading.

## Summary

The `useApp` hook effectively manages the lifecycle and synchronization of bee audio scenes with active bees. 🐝 Through a combination of custom hooks and React's built-in features, it ensures that the application state reflects the current environment accurately and efficiently.
