# Satellite

The satellite is a small computer (a Raspberry Pi 4) that hangs on the router with a network cable. It serves the same trigger page as KweenB, but **without the computer**. It is made for walks and installations where the laptop stays behind.

## What it does and does not do

- It **triggers** the scenes that are on the bees, sets their volume and tone, and keeps compositions.
- It does **not** stream. For streaming you need KweenB.
- It works on its own. KweenB is only needed to fill it and to bring back what was made on it.

## Setting it up

1. Connect the satellite to the router with a network cable. It does not use Wi-Fi.
2. Give it power. After about a minute it is ready.
3. Put your phone or tablet on the Wi-Fi of the swarm.
4. Open the browser and go to **http://satellite.local**

There is no password and nothing to install.

:::tip
You can pull the plug of the satellite at any time. What it got from KweenB and the compositions made on it are kept.
:::

## Filling it from KweenB

The satellite needs to know your bees, scenes and compositions. KweenB sends them.

1. Make sure the computer with KweenB and the satellite are on the same network.
2. In KweenB, choose **File → Send to Satellite…**
3. Click **Send to satellite**.

![Send to satellite](/img/manual/send-to-satellite.png)

KweenB then tells what the satellite has now: how many bees, scenes and compositions.

What is sent:

- the **active** bees of KweenB (so choose the right bees first)
- the scenes on those bees
- all compositions

The sounds themselves are not sent: they are on the bees.

Do this again whenever something changed: other bees in use, new scenes on the bees, or new compositions.

## The page of the satellite

The page is the one described in [Remote interface](./10-remote-interface.md), with the title **kweenb-S**. Two things are extra.

### Start Triggering

Before the bees can play, they have to be made ready. With KweenB you do that with Connect. On the satellite:

1. Tap the title **kweenb-S** at the top left.
2. Tap **Start Triggering**.

![The settings of the satellite](/img/manual/satellite-settings.png)

1. **Start Triggering** makes all bees ready to play scenes. This can take up to a minute and a half. Afterwards the page says how many bees started, and which did not and why.

Do this once after the bees were switched on.

:::warning
**Start Triggering** stops a stream. A bee that is streaming from KweenB at that moment is taken out of the stream and made ready for triggers instead.
:::

### Sending changes back to KweenB

When you made, changed or deleted compositions on the satellite, a button **Send … changes to KweenB** appears on the single bees page. Tap it when KweenB is open on a computer on the same network. KweenB takes the changes over and sends its own state back; the page then reloads by itself.

You can also start this from KweenB with **File → Send to Satellite…**: it always fetches the changes of the satellite first.

What happens with a composition:

| On the satellite | In KweenB |
| --- | --- |
| New | It is added. |
| Changed | It is updated. |
| Changed, and also changed in KweenB | Both are kept. The one of the satellite gets "(satellite)" behind its name. |
| Deleted | It is deleted in KweenB too, unless it was changed there since. |

If the satellite says **KweenB was not found**, open KweenB on a computer on this network and try again. If it says KweenB is open on more than one computer, close it on all but one.

## Good to know

- **The satellite does not show whether a bee is on.** It treats every bee as present. Use the Monitor of KweenB to check the swarm before a walk.
- **The page of each phone is its own.** See [Remote interface](./10-remote-interface.md).
- **Everything not sent to KweenB lives only on the satellite.** Send the changes back before you flash the satellite again.

## Updating and flashing

The software of the satellite is updated from KweenB, like that of the bees: see [Updates](./13-updates.md). A completely fresh system is put on its SD card by flashing: see [Flashing and new speakers](./14-flashing.md).
