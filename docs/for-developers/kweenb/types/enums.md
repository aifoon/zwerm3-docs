# Enumerations

Enums are useful for defining a set of named constants, which makes the code more understandable and easier to maintain. Instead of using raw strings or numbers throughout the application, we can use these enums to ensure that we are using valid values.

## `BeeActiveState`

```typescript
export enum BeeActiveState {
  INACTIVE = 0,
  ACTIVE = 1,
  ALL = 2,
}
```

Represents the active state of a "bee" device in the KweenB system.

- `INACTIVE`: The bee is currently not active.
- `ACTIVE`: The bee is currently operational.
- `ALL`: Refers to both active and inactive states.

## `AppMode`

```typescript
export enum AppMode {
  Hub = "hub",
  P2P = "p2p",
}
```

Defines modes of operation for the application.

- `Hub`: Indicates that the application is running in hub mode for managing connections among multiple bees.
- `P2P`: Indicates that the application is operating in peer-to-peer mode for direct communications.

## `PDAudioParam`

```typescript
export enum PDAudioParam {
  VOLUME = "volume",
  LOW = "low",
  MID = "mid",
  HIGH = "high",
  USE_EQ = "use_eq",
  FILE_LOOP = "file_loop",
}
```

Contains parameters related to audio settings in the context of Pure Data (Pd) integration.

- `VOLUME`: Represents the volume level.
- `LOW`: Refers to low frequency audio parameters.
- `MID`: Represents mid-range frequency settings.
- `HIGH`: Concerns high frequency parameters.
- `USE_EQ`: Option to use equalization.
- `FILE_LOOP`: Option indicating whether to loop the audio file.

## `ChannelType`

```typescript
export enum ChannelType {
  MONO = "mono",
  STEREO = "stereo",
}
```

Represents types of audio channels.

- `MONO`: Single-channel audio.
- `STEREO`: Two-channel audio format, typically for a richer sound experience.
