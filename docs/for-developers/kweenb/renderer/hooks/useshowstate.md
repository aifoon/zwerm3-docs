# useShowState

This module provides a simple modal state manager using React's `useState` hook. It allows you to easily control the visibility of a modal component by providing state and handler functions.

##  Overview

The `useShowState` function helps manage the open or closed state of a modal. It eorts a set of tools to modify and access the modal's state.

##  Import

```javascript
import { useShowState } from "./useShowState";
```

##  Usage

Here's an example of how to use `useShowState`:

```javascript
import React from "react";
import { useShowState } from "./useShowState";

function ModalComponent() {
  const { open, handleOpen, handleClose } = useShowState(false);

  return (
    <div>
      <button onClick={handleOpen}>Open Modal</button>
      {open && (
        <div>
          <p>This is a Modal</p>
          <button onClick={handleClose}>Close Modal</button>
        </div>
      )}
    </div>
  );
}
```

##  Function: **`useShowState`**

### **Definition**

```typescript
eort function useShowState(isOpen: boolean): {
  open: boolean;
  handleOpen: () => void;
  handleClose: () => void;
};
```

### **Parameters**

| Parameter | Type      | Description                                   |
| --------- | --------- | --------------------------------------------- |
| `isOpen`  | `boolean` | Initial open state of the modal (true/false). |

### **Returns**

An object containing:

| Property      | Type       | Description                              |
| ------------- | ---------- | ---------------------------------------- |
| `open`        | `boolean`  | Current state of the modal (open/close). |
| `handleOpen`  | `function` | Function to set the modal as open.       |
| `handleClose` | `function` | Function to set the modal as closed.     |

##  Notes

- **State Management**: The `useShowState` hook internally uses React's `useState` to manage the modal's visibility.
- **Handlers**: It provides two handler functions, `handleOpen` to open the modal and `handleClose` to close it.

##  File Location

- **Filename**: `useShowState.ts`

##  Tips

- This hook is particularly useful for handling modal states in functional components where you want to toggle between an open and closed state efficiently.
- Since it's based on React's `useState`, it's only suitable for components that are written as React function components.

---

Enjoy managing your modals with ease using **`useShowState`**! 
