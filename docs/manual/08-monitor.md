# Monitor

The **Monitor** page watches the swarm for you and says in plain words how each bee is doing. Keep it open during a show.

It has three tabs: **Bees**, **Network** and **Events**.

## Bees

![The Bees tab of the Monitor](/img/manual/monitor-bees.png)

1. **Counting since.** The moment the counters were last set to zero.
2. **Start again** sets all counters to zero. Do this just before a show.
3. **Save log…** saves everything that happened as a text file, for example to send to aifoon after a problem.
4. **The summary:** how many bees are fine, how many to keep an eye on, how many need you, and how many are on standby.
5. **One tile per bee,** with its sound, Wi-Fi, battery and a verdict. The small bars show the late packets of the last 30 minutes.

The Monitor shows **all** bees, also the ones you do not use now. Those show as **Offline** when they are switched off.

### What the verdicts mean

| Verdict | Colour | What to do |
| --- | --- | --- |
| **Sound is clean** | green | Nothing. Everything arrives in time. |
| **Ready for triggers** | green | Nothing. The bee plays its own sounds when you trigger them. |
| **Standby** | grey | The bee is on and waits until you connect. |
| **Starting…** | orange | Wait a moment. |
| **A few late packets** | orange | Some sound arrives late over the Wi-Fi. That is normally not heard; keep an eye on it. |
| **Battery running low** | orange | This bee will need charging before long. |
| **Sound is breaking up** | red | A lot of sound arrives too late. Move the bee closer to the router or take away what is between them. |
| **Battery low** | red | Charge this bee soon, or it will switch off. |
| **Problem** | red | The sound of this bee has a problem. The tile says which. |
| **Offline** | red | KweenB does not hear this bee. Check that it is switched on, that its battery is charged and that it is within reach of the Wi-Fi. |

:::note
A **late packet** is a tiny piece of sound that arrived too late over the Wi-Fi to be played. The bee fills the gap as well as it can. A few are not heard; many give clicks.
:::

### One bee in detail

Click a tile to see everything about that bee. **‹ All bees** takes you back.

![One bee in the Monitor](/img/manual/monitor-bee.png)

1. **Now:** the late packets in the last minute, the sound coming out, the Wi-Fi and the battery.
2. **Late packets over the last 30 minutes,** as a graph.
3. **Since counting started:** the totals.
4. **What happened** to this bee, as a list.

The totals:

| Counter | Meaning |
| --- | --- |
| **Late packets** | Sound that arrived too late over the Wi-Fi. |
| **Sound card dropouts** | Moments the sound card of the bee could not keep up. |
| **Restarts** | Times the bee restarted its sound by itself after something stopped. |
| **Times offline** | Times KweenB lost the bee. |

## Network

![The Network tab of the Monitor](/img/manual/monitor-network.png)

1. **Wi-Fi in use.** The share of the time on the Wi-Fi channel that the sound of all bees takes. Under 40% there is plenty of room. From 40% it is getting full. From 70% it is too full: expect clicks.
2. **To the bees / Back from the bees.** How much sound travels, in Mbit per second.
3. **Per bee, right now.** The traffic, the link speed and the share of Wi-Fi time for each bee.

One channel of sound is about 0.7 Mbit per second to a bee and the same back.

When the Wi-Fi is getting full, use fewer bees in stereo, or stream to fewer bees and trigger the rest.

## Events

![The Events tab of the Monitor](/img/manual/monitor-events.png)

1. **What needs you** shows only what asks for action: a bee that went offline, sound that broke up, a low battery.
2. **Everything** also shows the normal events, such as a bee that started or came back.

The list fills as things happen, with the time and the bee.

## Battery warnings

The Monitor tells you when a bee needs charging, on all three tabs.

![The Monitor with two bees that have a low battery](/img/manual/battery-monitor.png)

1. **The summary** counts a bee with a low battery under **need you**, and a bee whose battery is running low under **to keep an eye on**.
2. **Battery low** (red): less than 20% is left. Charge this bee soon, or it will switch off.
3. **Battery running low** (orange): less than 40% is left.

A tile only says something about the battery when nothing more urgent is going on. A bee that is offline or has a problem shows that first.

Click a tile for the bee in detail:

![The battery of one bee in the Monitor](/img/manual/battery-monitor-bee.png)

1. **The verdict,** with what to do.
2. **Battery:** the percentage, and under it **fine**, **running low** or **low**.

The **Events** tab keeps the moment a battery got into orange or red:

![Battery events in the Monitor](/img/manual/battery-events.png)

1. **The bee, what happened and when.** "Battery running low" is written once when the battery drops under 40%, "Battery low" once when it drops under 20%. Both are under **What needs you**.

:::note
A bee that shows its battery in volts (a grey battery on the Swarm page) has no battery on its Monitor tile and gives no battery warnings.
:::
