# Swarm

The **Swarm** page shows all the bees KweenB knows, and lets you choose which ones you use.

![The Swarm page](/img/manual/swarm.png)

1. **Use bees.** Quick choices: **1–4** uses bees 1 to 4 and puts all others aside. The same goes for **1–8**, **1–12** and **1–16**. **All** uses every bee, **None** puts every bee aside.
2. **Live meters.** Shows on each card how loud that bee plays, ten times a second. It is meant for a check before the show. Switch it off afterwards: it takes room on the Wi-Fi.
3. **View.** The left button gives small cards (**Compact**), the right one larger cards with more details and buttons (**Detailed**).
4. **An active bee.** A bee you use now.
5. **drop inactive bee.** Drag a bee from the list on the right to here to use it.
6. **drop an active bee.** Drag a card to here to put that bee aside.
7. **The inactive bees.** Bees KweenB knows but that you do not use now.

## Active and inactive

KweenB only sends sound to the **active** bees. Connect, the Audio page, the Routing page and the remote interface all work with the active bees only.

To move a single bee, drag it, or **double-click** it.

## What a card tells you

Each card shows the name of the bee, a coloured dot with a word, and a few small signs.

| Word | Meaning |
| --- | --- |
| **Offline** | KweenB does not hear this bee. It is switched off, out of reach of the Wi-Fi, or its battery is empty. |
| **Standby** | The bee is on and waits until you connect. |
| **Starting…** | The bee is starting its sound. |
| **Streaming** | The bee receives the stream. |
| **Ready for triggers** | The bee plays its own sounds when you trigger them (after **Trigger only**). |
| **Problem** | Something is wrong with the sound of this bee. Hold the mouse over the word (or use the Detailed view) to read what. |

The colour of the dot and of the left edge of the card:

- **Green**: all is well.
- **Grey**: standby.
- **Orange**: starting, or the battery is running low.
- **Red**: offline, a problem, or the battery is low.

The small signs on a bee that is on:

- **Wi-Fi bars.** Four bars is strong, one is weak. Weak is shown in orange. Next to the bars, **6G** or **5G** tells which of the two networks of the swarm the bee is on.
- **Sound bar.** Shows whether sound is coming out of the speaker.
- **Battery.** Only on bees that can measure their battery. Green is fine, orange is running low, red is low.

Hold the mouse over a sign to read the exact value.

### 6G or 5G

The router of the swarm has two networks for the bees. A bee chooses by itself:

- **6G** is the one a bee prefers: it is the quietest, so the sound arrives best. A bee moves to it within a minute after it is switched on.
- **5G** reaches further. A bee that stands too far from the router for 6G uses this one.

A bee never changes network while it is streaming or playing, because you would hear that. It waits until you disconnect. So a bee that shows **5G** with few bars during a show is a bee to put closer to the router next time.

## The battery of a bee

A bee that can measure its battery shows a small battery on its card, with how full it is.

![Bee cards with their battery](/img/manual/battery-swarm.png)

1. **Green: fine.** 40% or more is left.
2. **Orange: running low.** Less than 40% is left. The dot and the left edge of the card turn orange too. This bee will need charging before long.
3. **Red: low.** Less than 20% is left. The dot and the edge turn red. Charge this bee soon, or it will switch off.
4. **Grey, with volts.** The bee measures its battery but can not say yet how full that is, so it shows the voltage instead. A grey battery never turns orange or red: watch such a bee yourself.

Good to know:

- Hold the mouse over the battery to read it in words, for example "Battery is running low".
- A card without a battery belongs to a bee that can not measure it. A bee that is off shows no battery either.
- The percentage moves slowly on purpose. The battery dips for a moment when a speaker plays loud, and KweenB does not let that make the number jump.
- KweenB does not update the software of a bee whose battery is low (see [Updates](./13-updates.md)).
- The [Monitor](./08-monitor.md) warns you when a battery runs low, so you do not have to watch the cards.

:::tip
Look at the batteries before the audience comes in. A bee in orange at the start of a long show is better swapped or charged first.
:::

## The Detailed view

![A card in the Detailed view](/img/manual/swarm-detailed.png)

1. **The bin** removes the bee from KweenB. KweenB asks "Know what you're doing, you're about to kill a bee. Are you sure?" The bee itself is not changed; you can add it again later.
2. **The gear** opens the page of that bee. It is only there when the bee is on.
3. **The state** of the bee.
4. **Wi-Fi, sound and battery** in words.
5. **The address** of the bee on the network.

## The page of one bee

![The page of one bee](/img/manual/bee-page.png)

1. **Stop.** Stops the sound on this bee only.
2. **Restart.** Restarts this bee.
3. **Switch off.** Switches this bee off.
4. **IP Address.** The address of the bee on the network.
5. **Name.** The name of the bee: `bee` followed by its number in two digits, for example `bee07`.

In P2P mode there is one more button: **Start**, behind "Connect this bee again". It brings one bee back into the stream without connecting all bees again.

The address and the name are saved as soon as you click outside the field. You normally never change them: KweenB fills them in when it finds a bee.

To go back, click **Swarm** in the list on the left.

## Adding bees

A new or freshly flashed bee has to be added once.

- **File → Adopt from Network…** looks for bees that are switched on and already have a number, and adds them. Use this on a computer where KweenB does not know the swarm yet.
- **File → New Speaker…** gives a number to a speaker that has none yet, for example after flashing. This is described in [Flashing and new speakers](./14-flashing.md).

![Adopt bees from the network](/img/manual/adopt.png)

When KweenB does not know any bee yet, the Swarm page shows a welcome screen with the same two choices as buttons.

:::tip
If no bees are found, check that they are switched on and that this computer is on their network. A bee needs about half a minute after it is switched on.
:::
