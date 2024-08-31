# useApp

This document provides an overview and elanation of the `useApp.ts` file. This file defines a custom hook `useApp` which is used to manage application events and state transitions in a React application using the `useAppStore` hook.

---

## **Overview**

The `useApp` hook listens for application-wide events and updates the state or displays notifications based on these events. It utilizes React's `useEffect` to initialize event listeners and perform clean-up when necessary.

### **Imports**

```typescript
import { useEffect } from "react";
import { useAppStore } from "../hooks/useAppStore";
import { AppMode } from "@shared/enums";
```

- **useEffect**: A React hook that lets you perform side effects in function components.
- **useAppStore**: A custom hook presumably for accessing and modifying the global application state.
- **AppMode**: An enumeration representing different modes the application might operate in.

### **Custom Hook: `useApp`**

```typescript
eort const useApp = () => {
  const setAppMode = useAppStore((state) => state.setAppMode);
  const setOpenAboutKweenBModal = useAppStore(
    (state) => state.setOpenAboutKweenBModal
  );
  const showToast = useAppStore((state) => state.showToast);
  const setLoading = useAppStore((state) => state.setLoading);

  useEffect(() => {
    // Code handling various application events
  }, []);
};

eort default useApp;
```

#### **Variables**

- **`setAppMode`**: A function to set the application's current mode.
- **`setOpenAboutKweenBModal`**: A function to control the visibility of the "About KweenB" modal.
- **`showToast`**: A function to display notification toasts.
- **`setLoading`**: A function to set the loading state and message.

---

## **Event Handlers**

The `useEffect` hook sets up event listeners for application events:

### **Event Listener Table**

| **Event**       | **Description**                                                   | **Handler**                                                     |
| --------------- | ----------------------------------------------------------------- | --------------------------------------------------------------- |
| `onAboutKweenB` | Opens the "About KweenB" modal.                                   | `setOpenAboutKweenBModal(true)`                                 |
| `onError`       | Displays an error toast with the error message.                   | `showToast({ message, severity: "error" })`                     |
| `onInfo`        | Displays an info toast with the message.                          | `showToast({ message, severity: "info" })`                      |
| `onSuccess`     | Displays a success toast with the message.                        | `showToast({ message, severity: "success" })`                   |
| `onClosing`     | Sets the loading state with a closing message.                    | `setLoading({ loading: true, text: "Closing application..." })` |
| `onLoading`     | Sets the loading state with the provided loading status and text. | `setLoading({ loading, text, cancelButton: false })`            |
| `onAppMode`     | Updates the application's mode.                                   | `setAppMode(_appMode as AppMode)`                               |

### **Implementation Details**

- **`onAboutKweenB`**: Invokes when the "About KweenB" event is triggered, opening the corresponding modal.

- **`onError`**: Captures error events and displays a toast notification with an error severity level.

- **`onInfo` & `onSuccess`**: These events show toast notifications with informational and success messages respectively.

- **`onClosing`**: When triggered, sets the application state to loading and displays a closing message.

- **`onLoading`**: Manages loading events, adjusting the loading state and optionally displaying a message.

- **`onAppMode`**: Changes the current mode of the application.

---

## **Conclusion**

The `useApp` hook acts as a central point for handling various application events, updating the state, and notifying users via toast messages. This promotes a reactive and dynamic user interface within the application by efficiently managing state and events.
