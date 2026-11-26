# Routing

The **Routing** page decides which channel of your audio software goes to which bee. It works like a patch bay: channels on the left, bees on the right, cords in between.

![The Routing page](/img/manual/routing.png)

1. **Channels.** How many channels the page shows: 20, 32 or all 64.
2. **All bees: mono or stereo.** Sets all bees at once. A mono bee plays its one channel on both sides. A stereo bee has a left and a right channel.
3. **Cords.** Quick ways to plug everything in at once (see below).
4. **A channel** of the sound device. The bar in front of it moves when your audio software plays on that channel.
5. **A cord.** Click a cord to select it (it lights up) and press Delete to unplug it. A click on the dot in its middle unplugs it at once.
6. **The input of a bee.** A mono bee has one input, **sound**. A stereo bee has two: **left** and **right**.
7. **mono / stereo** for this bee only. Click to switch.

## The sound device "KweenB Swarm"

KweenB brings its own sound device, called **KweenB Swarm**. It has 64 channels. Your audio software plays to it as if it were a sound card, and KweenB passes the sound on to the bees.

The first time, the Routing page shows a card **KweenB Swarm is not installed yet** with an **Install** button. Installing asks for the password of your Mac, and the sound of the Mac stops for a moment. You only do this once per computer.

When a newer KweenB brings a newer version of the device, the same card shows **Update**. Disconnect the bees first.

Then, in your audio software:

1. Open the audio settings.
2. Choose **KweenB Swarm** as the output device.
3. Send each track to the channel of the bee it is meant for.

:::note
If you choose another device under **Audio device** on the Settings page, KweenB listens to that device instead. The Routing page then shows the channels of that device.
:::

## Plugging cords

- **Plug in:** drag from the dot of a channel to the input of a bee.
- **Unplug:** click a cord so it lights up and press Delete (or Backspace). Or click the dot in the middle of the cord.

The three **Cords** buttons do it for all bees at once:

| Button | What it does |
| --- | --- |
| **in order** | The first bee gets channel 1, the next bee the next free channel. A stereo bee takes two channels. |
| **by number** | Channel 7 goes to bee 7, and so on. Only there when no bee is stereo. |
| **unplug all** | Pulls out every cord. No bee gets sound from your audio software. |

While the bees are streaming, a cord you move works at once.

## Mono and stereo

Switching a bee between mono and stereo while it streams makes that bee silent for a few seconds: its stream starts again with the other number of channels.

## Good to know

- The page only shows the **active** bees. If it says "There are no bees in use", choose bees on the Swarm page.
- The bars show the sound of your audio software only. Sounds you trigger play on the bees themselves and do not show here.
- If KweenB says that the device has fewer channels than a cord needs, that bee gets no sound. Its cord comes back when you choose a device with enough channels.
