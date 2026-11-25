# The KweenB window

KweenB has one window. The bar at the top is always there; the list on the left takes you to the pages.

![The KweenB window](/img/manual/kweenb-window.png)

1. **The pages.** Swarm, Audio, Routing, Monitor and Settings. Each has its own chapter.
2. **Mode.** Shows **HUB** or **P2P**: the way the stream travels to the bees. You change it in the **Mode** menu. See [Streaming](./05-streaming.md).
3. **Streaming latency.** The delay between your audio software and the speaker, worked out from the settings. It is an estimate, not a measurement, and it is also shown when nothing is connected.
4. **Disconnect.** Stops the sound on all active bees.
5. **Connect.** Starts the sound on the active bees. It opens a small menu with two choices.
6. **Power button.** Closes KweenB, or restarts or switches off all bees.

## Connect

![The Connect menu](/img/manual/connect-menu.png)

1. **Stream to the bees.** Sends the sound of your audio software to the bees. They can still play their own sounds when triggered.
2. **Trigger only.** No stream: the bees only play their own sounds when triggered.

Both are explained in [Streaming](./05-streaming.md).

## The power button

![The power dialog](/img/manual/power.png)

1. **Close KweenB.** Quits the program. KweenB first stops the sound on the bees.
2. **Reboot all bees.** Restarts every bee that is on.
3. **Shutdown all bees.** Switches off every bee that is on. Wait a few seconds afterwards before you switch off their batteries.

:::warning
**Reboot all bees** and **Shutdown all bees** work on every bee that is switched on, also the ones you are not using right now.
:::

## The menus

The menu bar at the top of the screen holds everything that is not on a page.

| Menu | What is in it |
| --- | --- |
| **kweenb** | **About kweenb** (the version) and **Quit**. |
| **File** | Adding speakers, flashing, backups, the remote interface, the satellite and updates. The full list is in [Reference](./17-reference.md). |
| **Mode** | **Hub** or **P2P**. |
| **View** | **Toggle Full Screen**, and a tick per page to show or hide it in the list on the left. **Positioning** is hidden until you tick it. |
| **Help** | **Show App Logging** opens the log file of KweenB. It is useful to send along when you ask for help. |

## Messages

KweenB tells you what happened in a small message at the top right of the window. It disappears by itself after a few seconds. A red message is an error and usually names the bee it is about, for example `bee03: …`.
