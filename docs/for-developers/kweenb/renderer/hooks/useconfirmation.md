# useConfirmation

## Overview

The `useConfirmation.ts` file contains a simple confirmation state manager implemented using React's Hooks. This utility is useful for managing confirmation dialogs or similar components where you need to control open/close states and pass data.

## Functions

### `useConfirmation<T>`

This function is a custom React Hook that manages open/close states and associated data for a confirmation dialog.

#### Parameters

| Parameter      | Type      | Description                                               |
| -------------- | --------- | --------------------------------------------------------- |
| `isOpen`       | `boolean` | **Initial state** of the open status of the confirmation. |
| `defaultValue` | `T`       | **Initial value** or default data for the confirmation.   |

#### Returns

An object that contains the following properties and methods:

| Property/Method    | Type                | Description                                             |
| ------------------ | ------------------- | ------------------------------------------------------- |
| `open`             | `boolean`           | A boolean state that shows if the confirmation is open. |
| `confirmationData` | `T`                 | The data associated with the confirmation state.        |
| `handleOpen`       | `(data: T) => void` | **Opens** the confirmation and sets the data.           |
| `handleClose`      | `() => void`        | **Closes** the confirmation and resets the data.        |

## Usage

Here's how you can use the `useConfirmation` hook in your component:

```typescript
import React from "react";
import { useConfirmation } from "./useConfirmation";

const MyComponent = () => {
  const { open, confirmationData, handleOpen, handleClose } =
    useConfirmation<boolean>(false, false);

  return (
    <div>
      <button onClick={() => handleOpen(true)}>Open Confirmation</button>
      {open && (
        <div>
          <p>Are you sure?</p>
          <button onClick={handleClose}>Cancel</button>
          <button
            onClick={() => {
              // handle confirmation
              handleClose();
            }}
          >
            Confirm
          </button>
        </div>
      )}
    </div>
  );
};

eort default MyComponent;
```

## Features

- **State Management**: Manages open/close states of a confirmation dialog.
- **Data Handling**: Allows passing and resetting of data tied to the confirmation state.
- **Simple API**: Provides an intuitive interface for managing confirmation dialogs.

## Benefits

- **Ease of Use**: Offers a straightforward way to handle confirmation logic without complex state management.
- **Reusability**: Can be easily reused across different components and projects.
- **Flexibility**: Supports any data type for confirmation data through TypeScript generics.

##  Tips

- **Type Safety**: Utilize TypeScript's generic types for robust type-checking and maintainability.
- **Modular Design**: Use this hook to separate your confirmation logic from UI logic for cleaner components.

## Conclusion

The `useConfirmation` hook is a powerful yet simple tool for managing confirmation dialogs in React applications. It provides a structured way to handle state and data, ensuring your components remain organized and easy to maintain.
