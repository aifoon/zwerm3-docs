# Positioning

KweenB can work with a **Pozyx** positioning system, which follows tags through the room. KweenB can then change the volume by distance: the closer a tag comes to a bee, the louder.

This part is optional and is not needed for normal use. It is hidden until you switch it on with **View → Positioning**.

## Connecting

Open the **Positioning** page. Type the address of the Pozyx broker in **Pozyx MQTT broker** (for example `mqtt://127.0.0.1:1883`) and click **Connect**. KweenB says "Connected to MQTT broker". To stop, click **Disconnect Pozyx**.

## The tabs

| Tab | What it shows |
| --- | --- |
| **Data** | The tags the system sees, with their position. |
| **Routing** | Which tag belongs to which active bee. |
| **Modules** | **Volume Control:** choose the tag that controls the volume, the bees it works on, and the distance within which it works. |

The volume is sent to your audio software over OSC (to **Reaper**, or to an OSC monitor), not to the bees directly.

## The setting

On the **Settings** page, tab **Positioning**, **Update Rate (ms)** sets how often KweenB handles the positions, from 50 to 1000 milliseconds. It can only be changed while Pozyx is not connected.
