# Streaming

**Connect** starts the sound on the active bees. This chapter explains the two choices behind that button, the two modes, and what the latency means.

## Stream to the bees

Choose **Connect → Stream to the bees** to send the sound of your audio software to the bees.

![KweenB while it connects](/img/manual/connecting.png)

KweenB shows one line at a time while it works:

1. It checks that its own sound programs are there.
2. It looks up the active bees.
3. It checks that every active bee is on.
4. It stops what was still running on this computer.
5. It starts the stream on this computer and on every active bee.
6. It makes the connections between the channels and the bees.

When all of that worked, the window closes by itself and the bees show **Streaming**. If something goes wrong, the window stays open with the reason in red and a **Close** button.

After connecting, choose **KweenB Swarm** as the output in your audio software. See [Routing](./06-routing.md).

:::note
While the bees stream, they can still play their own sounds when you trigger them. The two are mixed on the bee.
:::

## Trigger only

Choose **Connect → Trigger only** when you do not stream at all. The bees get ready to play their own sounds, and show **Ready for triggers**. No sound travels over the Wi-Fi, so this is the lightest and most robust way to work.

## Disconnect

**Disconnect** stops the sound on all active bees and on this computer. The bees go back to **Standby**.

Disconnect before you change the settings of the stream, and before you switch the bees off.

## Hub and P2P

The **Mode** menu has two choices for how a stream travels to the bees. The top bar shows which one is on.

| | Hub | P2P |
| --- | --- | --- |
| **How it works** | KweenB opens one meeting point. Every bee connects to it. | KweenB opens a separate connection to each bee. |
| **Use it for** | Normal use. This is the mode aifoon uses in shows. | Special cases, or to find out whether a problem lies with one bee. |
| **A single bee dropped out** | Connect all bees again. | Open the page of that bee and click **Start**. |

KweenB starts in **Hub** every time you open it. If you want P2P, choose it again after starting KweenB.

Change the mode while you are disconnected. The new mode is used the next time you connect.

## Latency

The top bar shows **Streaming latency is … ms**. This is the time between the moment your audio software plays a sound and the moment it comes out of a bee.

Sound over Wi-Fi always needs a little time: each bee keeps a small reserve of sound, so that a moment of bad Wi-Fi is not heard. A larger reserve gives fewer clicks but more delay. With the standard settings the latency is about 108 ms.

The number is worked out from the settings on the **Settings** page; KweenB does not measure it. To change it, see [Settings](./09-settings.md).

:::tip
All bees have the same latency, so they stay in time with each other. The delay only matters when the sound has to be in time with something else, such as a performer or a video. In that case, delay the other thing by the same amount.
:::

## If connecting does not work

| KweenB says | What to do |
| --- | --- |
| **No active bees found. Please make sure you have at least one active bee.** | Choose bees on the Swarm page first. |
| **Some bees are offline, please check your network:** followed by names | Switch those bees on, or put them aside on the Swarm page, then connect again. |
| **Error while starting Jack, Jacktrip & Pure Data on bees.** followed by a bee and a reason | That bee could not start its sound. Restart the bee (its page, **Restart**) and connect again. |
| **Error while starting Jack on kweenb** | The sound device could not be opened. Check the **Audio device** on the Settings page and whether **KweenB Swarm** is installed (Routing page). |
