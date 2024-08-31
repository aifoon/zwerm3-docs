# useBeeStore

This document provides an overview and guide for the `useBeeStore.ts` file, utilizing the **Zustand** library to manage bee-related states and actions. This store allows interactions such as creating, deleting, and managing active and inactive states of bees.

## Table of Contents

- [Imports](#imports)
- [State Types](#state-types)
- [Action Types](#action-types)
- [Store Initialization](#store-initialization)
- [State and Actions](#state-and-actions)
  - [State](#state)
  - [Actions](#actions)
- [Utility Functions](#utility-functions)

## Imports

```typescript
import { create } from "zustand";
import { IBee } from "@shared/interfaces";
import { pollingInterval } from "../consts";
```

- **`create`**: A function from the **Zustand** library to create the store.
- **`IBee`**: Interface defining the structure of a bee object.
- **`pollingInterval`**: A constant defining the interval for polling operations.

## State Types

The state of our store is defined as `BeeStoreState`:

| Property       | Type      | Description                              |
| -------------- | --------- | ---------------------------------------- |
| `initializing` | `boolean` | Indicates if bees are being initialized. |
| `bees`         | `IBee[]`  | List of all bees.                        |
| `activeBees`   | `IBee[]`  | List of active bees.                     |
| `inActiveBees` | `IBee[]`  | List of inactive bees.                   |

## Action Types

The actions of our store are defined as `BeeStoreAction`:

| Action           | Type                            | Description                          |
| ---------------- | ------------------------------- | ------------------------------------ |
| `createBee`      | `(bee: IBee) => void`           | Permanently creates a new bee.       |
| `deleteBee`      | `(id: number) => void`          | Permanently deletes a bee by ID.     |
| `initializeBees` | `() => Promise<void>`           | Fetches and initializes all bees.    |
| `setActive`      | `(id: number) => Promise<void>` | Sets a specific bee as active.       |
| `setInActive`    | `(id: number) => Promise<void>` | Sets a specific bee as inactive.     |
| `startPolling`   | `() => void`                    | Begins the polling process for bees. |
| `stopPolling`    | `() => void`                    | Stops the polling process for bees.  |

## Store Initialization

The store is created using the `create` function from the **Zustand** library:

```typescript
eort const useBeeStore = create<BeeStoreState & BeeStoreAction>((set) => {
  // Logic for store initialization and actions
});
```

## State and Actions

### State

The initial state includes:

- **`initializing`**: Set to `true`, indicating the store is in the process of initialization.
- **`bees`**, **`activeBees`**, **`inActiveBees`**: Arrays initialized as empty, to later be populated with bees.

### Actions

- **`createBee`**: Adds a new bee to the store.
- **`deleteBee`**: Removes a bee from the store by its ID.
- **`initializeBees`**: Fetches all bees and updates the state accordingly.
- **`setActive`**: Updates the state to mark a specific bee as active.
- **`setInActive`**: Updates the state to mark a specific bee as inactive.
- **`startPolling`**: Continuously updates the bee data at a predefined interval.
- **`stopPolling`**: Stops the ongoing polling operation.

## Utility Functions

- **`updateBeesState`**: Fetches all bees and updates active/inactive states. Used within actions to keep the store current.

### Example Usage

```typescript
useBeeStore.getState().createBee({ id: 1, name: "Buzz", isActive: true });
useBeeStore.getState().setActive(1);
```

### Notes

- Ensure that the **`IBee`** interface is correctly defined in `@shared/interfaces` for seamless integration.
- Adjust the `pollingInterval` within `../consts` as required for your application needs.

This concludes the documentation for `useBeeStore.ts`. For further inquiries or contributions, please refer to the project's contribution guidelines.
