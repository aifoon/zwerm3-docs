# Settings

The **Settings** page holds the settings of the stream. The standard values are chosen to work well; change them only when you have a reason.

![The Settings page](/img/manual/settings-audio.png)

A field is saved as soon as you click outside it. Changes are used the next time you **Connect**, so disconnect first, change, and connect again.

## Stream

These three apply to this computer and to every bee.

1. **Sample rate.** The number of sound samples per second. Standard: **44100**. Set your audio software to the same value.
2. **Block size.** The sound travels in small blocks; this is the size of one block. Standard: **512**. Smaller gives less delay but asks more of the Wi-Fi and the computers; larger is calmer but slower.
3. **Bit depth.** The precision of each sample. Standard: **16**. Higher values take more room on the Wi-Fi.

## Bees

The number at the top right of this card is the latency these settings give.

4. **Network buffer (ms).** The reserve of sound each bee keeps, in milliseconds. It bridges short hiccups of the Wi-Fi. Standard: **30**, between 5 and 500. Raise it when the Monitor shows many late packets; lower it when you need less delay and the Wi-Fi is good.
5. **Sound card buffer (blocks).** How many blocks the sound card of a bee holds ready. Standard: **3**, between 2 and 8. Raise it when the Monitor shows sound card dropouts.

## KweenB

6. **Audio device.** The sound device KweenB listens to. Standard: **KweenB Swarm (64 channels)**, the device your audio software plays to. You can choose another input of the computer instead, for example a sound card with a mixing desk on it. A device that was chosen before but is not connected now is shown with "(not connected)".
7. **Send each packet (times).** How often each piece of sound is sent. Standard: **1**, between 1 and 5. With 2, every piece is sent twice, so a lost one is not missed, but the stream takes twice the room on the Wi-Fi.

## What to change when

| You notice | Try |
| --- | --- |
| Clicks, and the Monitor shows late packets | Raise **Network buffer**, for example from 30 to 60. Check **Wi-Fi in use** on the Monitor. |
| Clicks, and the Monitor shows sound card dropouts | Raise **Sound card buffer** from 3 to 4. |
| Too much delay, the Wi-Fi is good | Lower **Network buffer**, or halve the **Block size**. |
| The Wi-Fi is too full | Use fewer stereo bees, keep **Bit depth** at 16 and **Send each packet** at 1. |

Every change of these settings changes the latency. The new value shows at once in the top bar.

## Positioning

The second tab, **Positioning**, has one setting for the optional positioning system. See [Positioning](./15-positioning.md).

## Taking settings to another computer

**File → Export → Settings…** saves the settings as a file. **File → Import → Settings…** reads such a file on another computer. The same exists for the list of bees: **File → Export → Bees…** and **File → Import → Bees…**
