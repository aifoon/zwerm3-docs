# useAudioMixerStore

Welcome to the documentation for the **`useAudioMixerStore.ts`** file. This file is part of a project utilizing **Zustand** to manage state for an audio mixer interface, particularly focusing on audio parameters for bees. 

## Overview

The `useAudioMixerStore` allows you to manage and control audio parameters for a collection of bees. This includes the **master** audio settings as well as individual settings for each bee.

## Interfaces and Types

### **`AudioMixerState`**

This type defines the state structure for the audio mixer store.

| Property         | Type                                                                            | Description                                |
| ---------------- | ------------------------------------------------------------------------------- | ------------------------------------------ |
| `masterVolume`   | `number`                                                                        | Volume level for the master.               |
| `masterMid`      | `number`                                                                        | Mid-level for the master.                  |
| `masterHigh`     | `number`                                                                        | High-level for the master.                 |
| `masterLow`      | `number`                                                                        | Low-level for the master.                  |
| `beeAudioParams` | `Array<{ bee: IBee; low: number; high: number; mid: number; volume: number; }>` | Array holding audio settings for each bee. |

### **`AudioMixerAction`**

This type defines the actions that can be performed on the audio mixer state.

| Action            | Parameters                 | Description                                     |
| ----------------- | -------------------------- | ----------------------------------------------- |
| `setMasterVolume` | `value: number`            | Sets the master volume across all bees.         |
| `setMasterMid`    | `value: number`            | Sets the master mid parameter across all bees.  |
| `setMasterHigh`   | `value: number`            | Sets the master high parameter across all bees. |
| `setMasterLow`    | `value: number`            | Sets the master low parameter across all bees.  |
| `setBeeVolume`    | `bee: IBee, value: number` | Sets the volume for a specific bee.             |
| `setBeeMid`       | `bee: IBee, value: number` | Sets the mid parameter for a specific bee.      |
| `setBeeHigh`      | `bee: IBee, value: number` | Sets the high parameter for a specific bee.     |
| `setBeeLow`       | `bee: IBee, value: number` | Sets the low parameter for a specific bee.      |

## Code Usage

The primary eort of this file is the **`useAudioMixerStore`**, which is a Zustand store combining both state and actions. Below is an example of how to use this store:

```typescript
import { useAudioMixerStore } from "./useAudioMixerStore";

// Set the master volume to 75
useAudioMixerStore.getState().setMasterVolume(75);

// Set specific bee audio parameters
const bee = { id: "bee1", name: "Buzz" }; // Assume this bee conforms to IBee
useAudioMixerStore.getState().setBeeVolume(bee, 60);
```

## Methods and Implementation

### **Master Audio Controls**

These methods affect all bees in terms of volume, mid, high, and low.

- **`setMasterVolume(value)`**:

  - Adjusts the master volume control.

- **`setMasterMid(value)`**:

  - Adjusts the master mid control.

- **`setMasterHigh(value)`**:

  - Adjusts the master high control.

- **`setMasterLow(value)`**:
  - Adjusts the master low control.

### **Individual Bee Controls**

These methods allow for control of audio parameters for individual bees:

- **`setBeeVolume(bee, value)`**:

  - Adjusts the volume for a specific bee.

- **`setBeeMid(bee, value)`**:

  - Adjusts the mid-level for a specific bee.

- **`setBeeHigh(bee, value)`**:

  - Adjusts the high-level for a specific bee.

- **`setBeeLow(bee, value)`**:
  - Adjusts the low-level for a specific bee.

## Enums and Dependencies

### **`PDAudioParam`**

An enum used for specifying audio parameters:

- **`VOLUME`**
- **`MID`**
- **`HIGH`**
- **`LOW`**

### **Dependencies**

- **`zustand`**: For state management.
- **`@shared/interfaces`**: Contains the `IBee` interface.
- **`@shared/enums`**: Contains the `PDAudioParam` enum.

This documentation provides a comprehensive overview of how to use and extend the `useAudioMixerStore` for audio parameter management. 
