# useAppPersistentStorage

This document provides an overview of the `useAppPersistentStorage.ts` file, detailing its purpose, functionality, and usage in managing audio scenes and their association with bees in a persistent storage solution using Zustand and IndexedDB.

## Overview

### Purpose

The `useAppPersistentStorage` hook is designed to manage **audio scenes** and their association with **bees** in a persistent manner. It leverages Zustand for state management and integrates `idb-keyval` for IndexedDB storage.

### Key Components

- **Zustand**: A small, fast, and scalable state-management library.
- **IndexedDB**: A way to store data persistently in users' browsers with `idb-keyval` providing a simple API.
- **Audio Scenes**: Represents audio content tied to bees and ordered sequences.

## Interfaces

### `BeeAudioScene`

```typescript
export interface BeeAudioScene {
  bee: IBee;
  audioScene: AudioScene | undefined;
  isLooping: boolean;
}
```

- **bee**: The bee associated with the audio scene.
- **audioScene**: The audio scene linked to the bee.
- **isLooping**: A flag indicating if the audio should loop.

### `OrderedAudioScene`

```typescript
export interface OrderedAudioScene {
  audioScene: AudioScene;
  order: number;
}
```

- **audioScene**: The audio scene in an ordered collection.
- **order**: Position of the audio scene in the sequence.

## State Management

### **useAppPersistentStorageState**

This interface defines the structure and methods used within the Zustand store:

| Method                        | Description                                             |
| ----------------------------- | ------------------------------------------------------- |
| **addOrderedAudioScene**      | Adds an audio scene to the ordered list if not present. |
| **moveUpOrderedAudioScene**   | Moves an audio scene up in the order list.              |
| **moveDownOrderedAudioScene** | Moves an audio scene down in the order list.            |
| **removeOrderedAudioScene**   | Removes an audio scene from the order list.             |
| **removeBeeAudioScene**       | Unlinks an audio scene from a specific bee.             |
| **setAllBeesToAudioScene**    | Assigns a specific audio scene to all bees.             |
| **setCachedAudioScenes**      | Sets the cached audio scenes.                           |
| **setSocketUrl**              | Updates the socket URL.                                 |
| **swapAllBeeAudioScenes**     | Replaces all existing bee audio scenes.                 |
| **updateBeeAudioScene**       | Updates the audio scene for a specific bee.             |

**State Variables:**

- **beeAudioScenes**: Array of `BeeAudioScene`.
- **cachedAudioScenes**: Array of cached `AudioScene`.
- **orderedAudioScenes**: Array of `OrderedAudioScene`.
- **socketUrl**: URL string for socket communication.

## Persistent Storage Configuration

A custom storage solution is implemented using `idb-keyval`:

```typescript
const storage: StateStorage = {
  getItem: async (name: string): Promise<string | null> => {
    return (await get(name)) || null;
  },
  setItem: async (name: string, value: string): Promise<void> => {
    await set(name, value);
  },
  removeItem: async (name: string): Promise<void> => {
    await del(name);
  },
};
```

The `useAppPersistentStorage` hook utilizes Zustand's `persist` middleware to save its state:

```typescript
export const useAppPersistentStorage = create<useAppPersistentStorageState>()(
  persist(
    (set, get) => ({
      // Implementation details...
    }),
    {
      name: "kweenbTriggeringStates",
      storage: createJSONStorage(() => storage),
      partialize: (state) => ({
        beeAudioScenes: state.beeAudioScenes,
        orderedAudioScenes: state.orderedAudioScenes,
        socketUrl: state.socketUrl,
      }),
      onRehydrateStorage: (state) => {
        useAppStore.setState({ rehydrated: false });
        return () => {
          useAppStore.setState({ rehydrated: true });
        };
      },
    }
  )
);
```

## Usage

By using `useAppPersistentStorage`, developers can easily manage and persist audio scenes and their association with bees in a frontend application. This setup ensures that state changes are consistent and long-lived across user sessions.

## Conclusion

The `useAppPersistentStorage.ts` file provides a robust solution for managing persistent states associated with audio scenes in a bee-related application. With the combination of Zustand and IndexedDB, it efficiently handles complex state management scenarios, enhancing the application's reliability and user experience.
