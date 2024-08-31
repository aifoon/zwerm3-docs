# useSettings

This document provides an overview of the **`useSettings`** hook implemented in the `useSettings.ts` file. This hook is designed to interface with a SQLite database to fetch and update settings managed by your application.

## **Overview**

The **`useSettings`** hook is a custom React hook that provides functionalities to:

- **Fetch** settings from the SQLite database.
- **Update** existing settings.
- Automatically **reload** settings when they are imported.

## **Table of Contents**

1. [Installation](#installation)
2. [Usage](#usage)
. [API](#api)
4. [Example](#example)
5. [Dependencies](#dependencies)

## **Installation**

To utilize the `useSettings` hook, ensure that the necessary packages are installed in your project.

## **Usage**

Import the `useSettings` hook into your component to manage application settings effectively.

```typescript
import { useSettings } from "./useSettings";
```

## **API**

The hook returns an object containing the following properties and methods:

| **Property/Method** | **Type**    | **Description**                                                                     |
| ------------------- | ----------- | ----------------------------------------------------------------------------------- |
| `loading`           | `boolean`   | Indicates whether the settings are being fetched or updated.                        |
| `settings`          | `ISettings` | The current settings fetched from the database.                                     |
| `updateSetting`     | `function`  | Updates a specific setting in the database. Accepts a parameter of type `ISetting`. |
| `reloadSettings`    | `function`  | Reloads the settings from the database.                                             |

### **Methods**

#### `updateSetting(setting: ISetting)`

- **Description**: Updates a given setting in the database.
- **Parameters**:
  - `setting`: An object conforming to the `ISetting` interface.

#### `reloadSettings()`

- **Description**: Fetches the latest settings from the database, ensuring the local state is updated.

## **Example**

Here's a simple example demonstrating how to use the `useSettings` hook:

```javascript
import React from "react";
import { useSettings } from "./useSettings";

function SettingsComponent() {
  const { loading, settings, updateSetting, reloadSettings } = useSettings();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Settings</h1>
      <pre>{JSON.stringify(settings, null, 2)}</pre>
      <button onClick={reloadSettings}>Reload Settings</button>
    </div>
  );
}
```

## **Dependencies**

The `useSettings` hook relies on the following packages:

- **React**: To manage state and lifecycle methods.
- **@shared/interfaces**: For type definitions of `ISettings` and `ISetting` interfaces.

## **Events Listening**

The hook listens for settings import events, ensuring the UI is always in sync with the latest data.

- **Event**: `onImportedSettings`
  - **Description**: Triggers a settings reload when settings are imported.

## **Lifecycle**

- **Mounting**: Fetches all settings when the component is first mounted.
- **Updating**: Listens to and updates upon settings import.

With this setup, the **`useSettings`** hook provides a robust solution for managing application settings, ensuring they are always in sync with the database and providing an easy interface for updates. 
