# usePozyata

> **Filename* `usePozyata.ts`

## Overview

The `usePozyata` hook is a custom React hook designed to manage and mutate settings related to Pozyx data. This hook subscribes to Pozyx data events when the component is mounted and provides a clean-up function to remove the event listener when the component is unmounted.

## Dependencies

The hook leverages several dependencies:

- **React Hooks**:
  - `useState`
  - `useEffect`
- **Interfaces**:
  - `IPozyata` from `@shared/interfaces`
  - `IpcMessageEvent` from `electron`
  - `GridValidRowModel` from `@mui/x-data-grid`

## Hook Details

### **Usage**

Here's how you can use the `usePozyata` hook in a React component:

```tsx
import { usePozyata } from "./usePozyata";

const ExampleComponent = () => {
  const { currentPozyata, gridRows } = usePozyata();

  // Use currentPozyata and gridRows state here
  return <div>{/* Render your component */}</div>;
};
```

### **Hook Function**

```typescript
eort function usePozyata() {
  const [currentPozyata, setCurrentPozyata] = useState<
    Map<string, IPozyata>
  >(new Map<string, IPozyata>());
  const [gridRows, setGridRows] = useState<GridValidRowModel[]>([]);

  useEffect(() => {
    const removeListener = window.kweenb.events.onPozyata(
      (event: IpcMessageEvent, pozyata: Map<string, IPozyata>) => {
        // Calculate the Pozyx data array
        const pozyataArray = Array.from(pozyata.values());
        const pozyxGridRows = pozyataArray.map(({ tagId, data }) => ({
          id: tagId,
          tagId,
          x: data.coordinates.x,
          y: data.coordinates.y,
          z: data.coordinates.z,
        }));

        // Set the raw Pozyx data
        setCurrentPozyata(pozyata);
        // Update grid rows
        setGridRows(pozyxGridRows);
      }
    );

    return removeListener;
  }, []);

  return { currentPozyata, gridRows };
}
```

### **State Values**

- **`currentPozyata`**: A `Map` storing Pozyx data with string keys and `IPozyata` values.
- **`gridRows`**: An array of `GridValidRowModel` objects representing the data in a grid-friendly format.

###  **Key Features**

- **Automatic Subscription**: The hook subscribes to the Pozyx data when mounted and automatically removes the listener on unmount.
- **State Management**: Manages two states, one for raw Pozyx data and another for grid-compatible row data.
- **Flexible Data Handling**: Converts Pozyx data to a grid-friendly format for easy UI rendering.

### **Return Values**

- **`currentPozyata`**: Provides access to the current Pozyx data map.
- **`gridRows`**: Offers a processed array of rows ready for grid display.

---

By using the `usePozyata` hook, developers can effortlessly integrate Pozyx data handling into their React components, ensuring seamless data management and display.
