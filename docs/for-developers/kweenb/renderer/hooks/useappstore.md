# useAppStore

Welcome to the documentation for the **`useAppStore.ts`** file, a state management solution for your application using **Zustand**. This file contains types, states, and actions necessary to handle application-wide states and behaviors. 

## Table of Contents

- [Imports](#imports)
- [Types](#types)
  - [AppState](#appstate)
  - [AppAction](#appaction)
- [Store Creation](#store-creation)
- [Utilized Zustand](#utilized-zustand)

## Imports

This file relies on several imports to define enums, interfaces, and constants. Here is a list of all imports:

```typescript
import { AppMode } from "@shared/enums";
import { AudioScene, LoadingState } from "@shared/interfaces";
import { create } from "zustand";
import { ToastMessage } from "../interfaces";
import { DEFAULT_APP_MODE } from "@shared/consts";
```

## Types

### AppState

The **`AppState`** type defines the structure for the application's state. Below is a breakdown of each property:

| **Property**                   | **Type**       | **Description**                                                        |
| ------------------------------ | -------------- | ---------------------------------------------------------------------- |
| `appMode`                      | `AppMode`      | Represents the current mode of the application.                        |
| `audioScenesCache`             | `AudioScene[]` | Cache for audio scenes.                                                |
| `currentLatency`               | `number`       | Represents the current latency measured.                               |
| `loading`                      | `LoadingState` | Object containing loading information.                                 |
| `openAboutKweenBModal`         | `boolean`      | State to determine if the "About KweenB" modal is open.                |
| `openConnectBeesHubModal`      | `boolean`      | State to determine if the "Connect Bees Hub" modal is open.            |
| `openConnectBeesP2PModal`      | `boolean`      | State to determine if the "Connect Bees P2P" modal is open.            |
| `openDisconnectBeesModal`      | `boolean`      | State to determine if the "Disconnect Bees" modal is open.             |
| `openTriggerOnlyModal`         | `boolean`      | State to determine if the "Trigger Only" modal is open.                |
| `openUploadAudioFilesSettings` | `boolean`      | State to determine if the "Upload Audio Files Settings" modal is open. |
| `toast`                        | `ToastMessage` | Represents the content and type of the toast notification.             |
| `openToastState`               | `boolean`      | State to determine if the toast notification is visible.               |
| `manageBeesCollapsed`          | `boolean`      | Determines whether the "Manage Bees" section is collapsed.             |

### AppAction

The **`AppAction`** type outlines the actions available to manipulate the application state:

- `closeToast`: Closes the toast notification.
- `setAppMode`: Updates the application's mode.
- `setAudioScenesCache`: Updates the cache of audio scenes.
- `setManageBeesCollapsed`: Sets the collapsed state of the "Manage Bees" section.
- `setOpenAboutKweenBModal`: Opens or closes the "About KweenB" modal.
- `setOpenConnectBeesHubModal`: Opens or closes the "Connect Bees Hub" modal.
- `setOpenConnectBeesP2PModal`: Opens or closes the "Connect Bees P2P" modal.
- `setOpenDisconnectBeesModal`: Opens or closes the "Disconnect Bees" modal.
- `setOpenTriggerOnlyModal`: Opens or closes the "Trigger Only" modal.
- `setOpenUploadAudioFilesSettings`: Opens or closes the "Upload Audio Files Settings" modal.
- `setLoading`: Updates the loading state.
- `showToast`: Displays a toast notification.
- `updateCurrentLatency`: Asynchronously updates the current latency.

## Store Creation

Below is the code for creating the store using Zustand:

```typescript
eort const useAppStore = create<AppState & AppAction>((set) => ({
  appMode: DEFAULT_APP_MODE,
  audioScenesCache: [],
  closeToast: () => {
    set({ openToastState: false });
  },
  currentLatency: 0,
  loading: {
    loading: false,
    text: "What's up",
    cancelButton: false,
    onCancel: () => {},
  },
  manageBeesCollapsed: true,
  openAboutKweenBModal: false,
  openConnectBeesHubModal: false,
  openConnectBeesP2PModal: false,
  openDisconnectBeesModal: false,
  openTriggerOnlyModal: false,
  openToastState: false,
  openUploadAudioFilesSettings: false,
  setAppMode: (appMode: AppMode) => set({ appMode }),
  setAudioScenesCache: (audioScenes: AudioScene[]) =>
    set({ audioScenesCache: audioScenes }),
  setLoading: (loading) => set({ loading }),
  setManageBeesCollapsed: (collapsed) =>
    set({ manageBeesCollapsed: collapsed }),
  setOpenAboutKweenBModal: (open) => set({ openAboutKweenBModal: open }),
  setOpenConnectBeesHubModal: (open) => set({ openConnectBeesHubModal: open }),
  setOpenConnectBeesP2PModal: (open) => set({ openConnectBeesP2PModal: open }),
  setOpenDisconnectBeesModal: (open) => set({ openDisconnectBeesModal: open }),
  setOpenTriggerOnlyModal: (open) => set({ openTriggerOnlyModal: open }),
  setOpenUploadAudioFilesSettings: (open) =>
    set({ openUploadAudioFilesSettings: open }),
  showToast: (toast) => {
    set({ toast });
    set({ openToastState: true });
  },
  toast: { message: "", severity: "info" },
  updateCurrentLatency: async () => {
    const latency = await window.kweenb.methods.calculateCurrentLatency();
    set({ currentLatency: latency });
  },
}));
```

## Utilized Zustand

This file utilizes the **Zustand** library to manage the application's state. Zustand is a small, fast and scalable state-management solution. Here are some key features used in this file:

- **State**: Zustand creates a global state that can be used across different components.
- **Action**: Zustands actions are functions that alter the state.
- **Middlewares**: Allows for asynchronous updates and side-effects.

> Zustand is a powerful tool for state management in React applications. The **`useAppStore`** allows for efficient state handling with actions that directly manipulate the app state.
