# useBee

This document provides a detailed overview of the `useBee` hook, which is responsible for interacting with a bee entity stored in an SQLite database. It provides various functionalities to manage the state and behavior of the bee.

## **Table of Contents**

- [**Overview**](#overview)
- [**Dependencies**](#dependencies)
- [**Hook Usage**](#hook-usage)
- [**Functions**](#functions)
  - [fetchBee](#fetchbee)
  - [reconnect](#reconnect)
  - [killJack](#killjack)
  - [killJacktrip](#killjacktrip)
  - [killJackAndJacktrip](#killjackandjacktrip)
  - [startJack](#startjack)
  - [updateBeeSetting](#updatebeesetting)
  - [saveConfig](#saveconfig)
- [**API**](#api)
- [**Usage Example**](#usage-example)

## **Overview**

The `useBee` hook is designed to manage the lifecycle and operations related to a bee in the application. It provides functions to fetch, update, and control the bee's state, as well as handle audio connections through various modes.

## **Dependencies**

- **React**: `useCallback`, `useEffect`, `useRef`, `useState`
- **Interfaces**: `IBee`, `IBeeConfig`
- **Enums**: `ChannelType`, `AppMode`
- **Custom Hooks**: `useAppStore`, `useIntervalAsync`
- **Constants**: `pollingInterval`

## **Hook Usage**

```typescript
eort function useBee(id: number) {
  // Hook implementation...
}
```

- **Parameters**: `id` - The unique identifier for the bee.
- **Returns**: An object with methods and properties to manage the bee.

## **Functions**

### **fetchBee**

Fetches the bee data from the database.

```typescript
const fetchBee = useCallback(async () => {
  const fetchedBee = await window.kweenb.methods.fetchBee(id);
  if (isMounted.current) {
    setBee(fetchedBee);
  }
  return fetchedBee;
}, [bee]);
```

### **reconnect**

Reconnects the bee based on the application mode (Hub or P2P).

```typescript
const reconnect = useCallback(async () => {
  // Reconnection logic...
}, [bee]);
```

### **killJack**

Terminates the Jack server for the bee.

```typescript
const killJack = useCallback(async () => {
  // Killing Jack server logic...
}, [bee]);
```

### **killJacktrip**

Terminates the Jacktrip process for the bee.

```typescript
const killJacktrip = useCallback(async () => {
  // Killing Jacktrip logic...
}, [bee]);
```

### **killJackAndJacktrip**

Stops both Jack and Jacktrip for the bee.

```typescript
const killJackAndJacktrip = useCallback(async () => {
  // Killing Jack and Jacktrip logic...
}, [bee]);
```

### **startJack**

Starts the Jack server for the bee.

```typescript
const startJack = useCallback(async () => {
  // Starting Jack logic...
}, [bee]);
```

### **updateBeeSetting**

Updates the bee settings.

```typescript
const updateBeeSetting = useCallback(
  (updatedBee: Partial<IBee>) => {
    window.kweenb.methods.updateBee({ id, ...updatedBee });
  },
  [bee]
);
```

### **saveConfig**

Saves the configuration for the bee.

```typescript
const saveConfig = useCallback(
  (config: Partial<IBeeConfig>) => {
    window.kweenb.methods.saveConfig(bee, config);
  },
  [bee]
);
```

## **API**

| **Function**            | **Description**                               |
| ----------------------- | --------------------------------------------- |
| **fetchBee**            | Fetches the bee data from the database.       |
| **reconnect**           | Reconnects the bee based on application mode. |
| **killJack**            | Stops the Jack server for the bee.            |
| **killJacktrip**        | Stops the Jacktrip process for the bee.       |
| **killJackAndJacktrip** | Stops both Jack and Jacktrip for the bee.     |
| **startJack**           | Starts the Jack server for the bee.           |
| **updateBeeSetting**    | Updates settings of the bee.                  |
| **saveConfig**          | Saves configuration settings for the bee.     |

## **Usage Example**

```typescript
import { useBee } from "./useBee";

function BeeComponent({ id }) {
  const { bee, reconnect, killJack } = useBee(id);

  return (
    <div>
      <h1>Bee: {bee.name}</h1>
      <button onClick={reconnect}>Reconnect</button>
      <button onClick={killJack}>Kill Jack</button>
    </div>
  );
}
```

---

This document should give you a comprehensive understanding of the `useBee` hook and how it operates within the application. Feel free to elore each function and customize according to your needs. Happy coding! 
