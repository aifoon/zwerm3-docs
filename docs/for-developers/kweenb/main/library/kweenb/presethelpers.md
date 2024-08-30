# PresetHelpers

The `PresetHelpers.ts` module is responsible for managing audio presets in the KweenB application. This includes functionality for activating presets, initializing the presets folder, and retrieving available audio presets. This module works closely with the `SettingHelpers` and `BeeHelpers` modules for updating settings and managing bee configurations.

## Functions

### `activatePreset`

```typescript
export const activatePreset = async (fileName: string): Promise<IError>
```

Activates a specific audio preset by updating the relevant settings for bees and KweenB configurations.

**Parameters:**

- `fileName`: The name of the preset file to activate.

**Returns:**

- A promise that resolves to an `IError` object indicating the success or failure of the operation.

**Behavior:**

1.  Reads the preset file from the `PRESETS_FOLDER_PATH`.
2.  Parses the preset using YAML.
3.  Checks if the number of active bees does not exceed the allowed maximum for the preset.
4.  Updates the settings for the bees based on the preset values.
5.  Returns an error message if the preset cannot be activated.

### `initPresetsFolder`

```typescript
export const initPresetsFolder = () =>
```

Initializes the presets folder by creating it if it does not exist and populating it with default preset files.

**Behavior:**

1.  Checks if the presets folder exists.
2.  If it does not exist, it creates the folder and copies default presets from `resourcesPath`.
3.  If it exists, it checks whether each default preset already exists in the presets folder and copies any missing presets.

### `getAudioPresets`

```typescript
export const getAudioPresets = async (
  appMode: AppMode = DEFAULT_APP_MODE
): Promise<IAudioPreset[]>
```

Retrieves audio presets from the presets folder based on the specified application mode.

**Parameters:**

- `appMode`: The application mode to filter the audio presets (defaults to `DEFAULT_APP_MODE`).

**Returns:**

- A promise that resolves to an array of `IAudioPreset` objects.

**Behavior:**

1.  Reads all YAML files in the presets folder.
2.  Parses these files to create audio preset objects.
3.  Calculates and adds latency information for each preset.
4.  Filters the presets based on the specified application mode.
5.  Returns an array of audio presets sorted by name.
