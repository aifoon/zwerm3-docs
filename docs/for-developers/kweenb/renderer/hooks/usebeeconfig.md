# useBeeConfig

This document provides a detailed description of the `useBeeConfig.ts` file, which implements a custom React hook to manage the configuration of a bee device using the `IBeeConfig` interface. This hook leverages state management and side effects to fetch and store configuration data.

##  Overview

The `useBeeConfig` hook is designed to interact with a bee device configuration by fetching it based on a provided `id`. This hook makes use of React hooks such as `useState`, `useEffect`, and `useCallback` to manage state and side effects efficiently.

##  Interface

The hook uses the following imported interface:

```typescript
import { IBeeConfig } from "shared/interfaces";
```

### `IBeeConfig` Definition

| **Property**  | **Type**  | **Description**               |
| ------------- | --------- | ----------------------------- |
| `useMqtt`     | `boolean` | Indicates if MQTT is used.    |
| `mqttBroker`  | `string`  | The MQTT broker URL.          |
| `mqttChannel` | `string`  | The MQTT channel name.        |
| `device`      | `string`  | The identifier of the device. |

##  Dependencies

- **React Hooks**:
  - `useState` for state management.
  - `useCallback` to memoize the fetch function.
  - `useEffect` to fetch configuration on component mount.

```typescript
import { useCallback, useEffect, useState } from "react";
```

##  Hook Implementation

```typescript
eort function useBeeConfig(id: number) {
  const [beeConfig, setBeeConfig] = useState<IBeeConfig>({
    useMqtt: false,
    mqttBroker: "",
    mqttChannel: "",
    device: "",
  });

  /**
   * **Fetch bee config**
   *
   * Fetches the bee configuration using the provided `id`.
   */
  const fetchBeeConfig = useCallback(async () => {
    const fetchedBeeConfig = await window.kweenb.methods.getBeeConfig(id);
    setBeeConfig(fetchedBeeConfig);
  }, []);

  useEffect(() => {
    fetchBeeConfig();
  }, []);

  return { beeConfig };
}
```

##  Description

### **Function**: `useBeeConfig`

- **Parameters**:

  - `id`: `number` - The identifier for the bee configuration.

- **State**:

  - `beeConfig`: `IBeeConfig` - Initial state is set to default values (`useMqtt: false`, empty `mqttBroker`, `mqttChannel`, and `device`).

- **Fetch Function**: `fetchBeeConfig`

  - **Purpose**: To asynchronously fetch and update the `beeConfig` using `window.kweenb.methods.getBeeConfig`.
  - **Attributes**:
    - Wrapped with `useCallback` to prevent unnecessary re-creation of the function.

- **Effect Hook**:
  - Executes `fetchBeeConfig` on component mount to ensure `beeConfig` is fetched when the component using this hook renders.

##  Return Value

- **Returns** an object containing:
  - `beeConfig`: The current configuration object.

##  Usage Example

Here's an example of how to use the `useBeeConfig` hook within a functional component:

```typescript
import React from "react";
import { useBeeConfig } from "./useBeeConfig";

const BeeConfigComponent = ({ id }) => {
  const { beeConfig } = useBeeConfig(id);

  return (
    <div>
      <h1>Bee Device Configuration</h1>
      <ul>
        <li>
          <strong>Use MQTT:</strong> {beeConfig.useMqtt ? "Yes" : "No"}
        </li>
        <li>
          <strong>MQTT Broker:</strong> {beeConfig.mqttBroker}
        </li>
        <li>
          <strong>MQTT Channel:</strong> {beeConfig.mqttChannel}
        </li>
        <li>
          <strong>Device:</strong> {beeConfig.device}
        </li>
      </ul>
    </div>
  );
};

eort default BeeConfigComponent;
```

---

This documentation provides a comprehensive guide to understanding and utilizing the `useBeeConfig.ts` file. By leveraging this hook, developers can easily manage bee device configurations within their React applications. 
