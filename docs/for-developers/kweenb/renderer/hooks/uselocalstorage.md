# useLocalStorage

The `useLocalStorage` custom hook is a powerful utility for managing state in a React application, with the added benefit of persisting the state to the browser's `localStorage`. This ensures that the state is preserved even after a page refresh. This document provides a comprehensive overview of the hook's functionality, usage, and considerations.

## Table of Contents

- [Introduction](#introduction)
- [Functionality](#functionality)
- [Usage](#usage)
- [Code Breakdown](#code-breakdown)
- [Considerations](#considerations)
- [Conclusion](#conclusion)

## Introduction

This hook is designed to simplify the process of storing state in the browser's `localStorage`. It leverages the React `useState` hook to manage the state and synchronizes it with `localStorage` to persist data across sessions.

## Functionality

- **State Management**: Manages a piece of state within a React component.
- **Persistence**: Saves and retrieves state from `localStorage`.
- **Error Handling**: Contains basic error handling for JSON parsing and `localStorage` access.

## Usage

To utilize the `useLocalStorage` hook, import it into your component and invoke it with a key and an initial value:

```typescript
import { useLocalStorage } from "./useLocalStorage";

// Usage within a component
const [name, setName] = useLocalStorage("name", "Guest");

// Usage Example
setName("John Doe");
```

## Code Breakdown

Below is a detailed breakdown of the `useLocalStorage` code:

```typescript
import { useState } from "react";

/**
 * Hook to manage a stateful value with localStorage persistence
 * @param {string} key - The localStorage key to store the value
 * @param {T} initialValue - The initial value assigned to the state
 * @returns {[T, (value: T | ((val: T) => T)) => void]} - Returns a value and a setter function
 */
eort function useLocalStorage<T>(key: string, initialValue: T) {
  // **State to store the value**
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === "undefined") {
      return initialValue;
    }
    try {
      // **Get from localStorage**
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  // **Setter function that persists to localStorage**
  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue] as const;
}
```

### Key Components

- **Initialization**: The hook initializes state with `useState` and ensures that `localStorage` access logic is executed only once.
- **State Persistence**: The setter function not only updates the state but also writes the updated value to `localStorage`.
- **Error Handling**: Basic error handling is implemented using `try-catch` blocks to manage potential issues with JSON parsing and `localStorage` access.

## Considerations

- **Server-Side Rendering (SSR)**: The hook checks for `'window'` to avoid issues when using SSR frameworks like Next.js.
- **JSON Parsing**: Ensure values stored in `localStorage` can be `JSON.stringify`'ed and `JSON.parse`'d correctly.
- **Error Handling**: Current implementation logs errors; consider more advanced handling strategies for production applications.

## Conclusion

The `useLocalStorage` hook is a convenient and efficient way to manage state that needs to persist across browser sessions. By abstracting the complexity of interacting with `localStorage`, it allows developers to focus on building robust and stateful React applications.
