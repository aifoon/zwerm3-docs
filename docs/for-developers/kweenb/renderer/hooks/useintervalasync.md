# useIntervalAsync

The `useIntervalAsync` custom Hook allows you to asynchronously set up an interval in a React component. It leverages the `setIntervalAsync` and `clearIntervalAsync` functions from the `set-interval-async` library. This hook is particularly useful when you need to perform an asynchronous task at regular intervals. Below is a structured documentation of the code with examples and usage elanations.

## Import Statements

```typescript
import { useEffect, useLayoutEffect, useRef } from "react";
import { setIntervalAsync, clearIntervalAsync } from "set-interval-async";
```

### **Libraries Used*

- **React Hooks**:

  - `useEffect`
  - `useLayoutEffect`
  - `useRef`

- **set-interval-async**:
  - `setIntervalAsync`
  - `clearIntervalAsync`

## Hook Definition: `useIntervalAsync`

```typescript
eort const useIntervalAsync = (
  callback: () => void,
  delay: number | null
) => {
  const savedCallback = useRef(callback);

  useLayoutEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (!delay && delay !== 0) {
      return undefined;
    }

    let isRunning = true;
    const interval = setIntervalAsync(() => {
      if (!isRunning) {
        if (interval) clearIntervalAsync(interval);
      }
      return savedCallback.current();
    }, delay);

    return () => {
      isRunning = false;
    };
  }, [delay]);
};

eort default useIntervalAsync;
```

## **Parameters**

| Parameter  | Type             | Description                                                          |
| ---------- | ---------------- | -------------------------------------------------------------------- |
| `callback` | `() => void`     | **Function** to be executed at each interval.                        |
| `delay`    | `number \| null` | **Time delay** (in milliseconds) for intervals. Use `null` to pause. |

## **Usage**

### **Setting Up an Interval**

To set up an asynchronous interval, use the `useIntervalAsync` hook in your component:

```typescript
import useIntervalAsync from "./useIntervalAsync";

const MyComponent = () => {
  const myCallbackFunction = () => {
    console.log("Interval running asynchronously! ");
  };

  useIntervalAsync(myCallbackFunction, 1000); // Executes every second

  return <div>Check your console for interval logs! </div>;
};
```

### **Pausing the Interval**

To pause the interval, simply set the delay to `null`:

```typescript
useIntervalAsync(myCallbackFunction, null); // Interval paused
```

## **Key Features**

- **Asynchronous Intervals**: Leverages `setIntervalAsync` for non-blocking intervals.
- **React Integration**: Uses `useEffect` and `useLayoutEffect` for optimal performance within React's lifecycle.
- **Callback Updating**: The hook ensures that the latest version of the callback is used.

## **Considerations**

- **Zero Delay**: A delay of `0` is valid and will execute the callback immediately on each render.
- **Cleaning Up**: The interval is cleaned up automatically when the component unmounts or the delay changes.

 **Tip**: Always ensure your `callback` function is resilient and can handle being invoked as eected by the interval logic.

By using `useIntervalAsync`, you can efficiently manage asynchronous operations at intervals in your React applications, enhancing both performance and user eerience.
