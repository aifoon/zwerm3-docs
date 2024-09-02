# Components

:::note
Below is a list of all the React components. While not every component is individually documented, the code is intended to be self-explanatory.

Some components utilize [Material UI](https://mui.com/). Since this was an architectural decision made after the initial development phase, you may find that some components include custom code.

To change the visual look of MUI components, you'll need to change the theme in [the shared components](../sharedcomponents) folder.
:::

- **Audio**
  - Audio
  - AudioFiles
  - AudioMixer
  - AudioTest
  - AudioTrigger
- **BeeConfig**
  - BeeConfig
  - BeeConfigActions
  - BeeConfigActionsRunJack
  - BeeConfigActionsRunJacktrip
  - BeeConfigActionsSection
  - BeeConfigConfig
  - BeeConfigSettings
- **BeePoller**
  - BeePoller
- **DesignSystem**
  - ColorCircle
  - DesignSystem
  - Row
- **Layout**
  - GlobalAppComponents
  - Z3Navigation
  - Z3Sidebar
- **ManageBees**
  - AddBeeModal
  - BeeCardWithPolling
  - ManageBees
  - NoBees
- **Menu**
  - ConnectBeesMenu
- **Mixer**
  - BeeAudioMixer
- **Modals**
  - AboutKweenBModal
  - ConnectBeesModalHub
  - ConnectBeesModalP2P
  - DisconnectBeesModal
  - TriggerOnlyModal
  - UploadAudioFilesSettings
- **Positioning**
  - Positioning
  - PositioningData
  - **PositioningModules**
    - PositioningModules
    - SwarmGroups
    - VolumeControl
  - PositioningMqttBrokerConnect
  - PositioningRouting
- **Settings**
  - Settings
  - SettingsBees
  - SettingsKweenB
  - SettingsPositioning
- **Tools**
  - **Actions**
    - ActiveBeesOnline
    - DisconnectP2PAudioConnectionsOnKweenB
    - IsZwerm3ApiRunningOnBees
    - KillAllBeeProcesses
    - KillAllKweenBProcesses
    - MakeHubAudioConnections
    - MakeP2PAudioConnectionOnActiveBees
    - MakeP2PAudioConnectionsOnKweenB
    - StartJackWithJacktripHubClientOnActiveBees
    - StartJackWithJacktripHubClientOnKweenB
    - StartJackWithJacktripP2PClientsOnKweenB
    - StartJackWithJacktripP2PServerOnActiveBees
    - StartJacktripHubServer
    - StartPureDataOnActiveBees
  - Tools
