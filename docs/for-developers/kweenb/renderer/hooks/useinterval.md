# useInterval

The **`useInterval`** hook provides an easy way to set up recurring intervals in your React components, similar to `setInterval` in vanilla JavaScript. This hook ensures your interval functions are managed correctly in a React environment, where component lifecycle and dependency management are crucial.

---

## **Imports**

```typescript
import { useEffect, useLayoutEffect, useRef } from "react";
```

- **`useEffect`**: Handles side effects in function components.
- **`useLayoutEffect`**: Similar to `useEffect` but fires synchronously after all DOM mutations.
- **`useRef`**: Returns a mutable ref object whose `.current` property is initialized to the passed argument.

---

## **Hook Function Signature**

```typescript
eort const useInterval = (callback: () => void, delay: number | null) => {
```

- **`callback: () => void`**: The function to be executed at each interval tick.
- **`delay: number | null`**: The delay in milliseconds for the interval; if null, the interval is not set.

---

## **Implementation Details**

### **1. Save the Callback**

```typescript
const savedCallback = useRef(callback);

// Remember the latest callback if it changes.
useLayoutEffect(() => {
  savedCallback.current = callback;
}, [callback]);
```

- The **`useRef`** is used to keep a mutable reference to the callback function, ensuring that the latest function is called in the interval.
- The **`useLayoutEffect`** is employed to update the **`savedCallback`** whenever the `callback` changes, maintaining synchronization.

### **2. Set Up the Interval**

```typescript
useEffect(() => {
  // Don't schedule if no delay is specified.
  // Note: 0 is a valid value for delay.
  if (!delay && delay !== 0) {
    return undefined;
  }

  const id = setInterval(() => savedCallback.current(), delay);
  return () => clearInterval(id);
}, [delay]);
```

- The **`useEffect`** sets up the interval using `setInterval`, calling the current `savedCallback`.
- If `delay` is **`null`**, the interval is not set. However, a delay of **`0`** is considered valid, meaning the callback will execute as quickly as possible, akin to `setImmediate`.

### **. Clean Up**

- The `useEffect` return value is a cleanup function that clears the interval using `clearInterval(id)` when either:
  - The component unmounts.
  - The `delay` changes.

---

## **Usage**

To use this custom hook, simply import it and pass the desired `callback` function and `delay`:

```typescript
import useInterval from "./useInterval";

const MyComponent = () => {
  useInterval(() => {
    console.log("This function runs every second!");
  }, 1000);

  return <div>Check the console for messages every second!</div>;
};
```

In this example, the callback function logs a message to the console every second.

---

## **Summary**

The **`useInterval`** hook is a powerful abstraction for managing intervals in React functional components, ensuring effective and efficient execution with React's lifecycle in mind. 

- **Efficient**: Keeps your intervals in sync with component updates.
- **Flexible**: Supports dynamic delay changes, including immediate execution with a delay of `0`.
- **Safe**: Automatically cleans up intervals to prevent memory leaks or uneected behavior.
