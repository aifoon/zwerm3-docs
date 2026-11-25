# Troubleshooting

Start with the **Monitor** page: it usually names the problem. This chapter lists what goes wrong most often, by what you notice.

## A bee shows Offline

1. Is it switched on, and is its battery charged?
2. Is it within reach of the router? Walls, people and distance weaken the Wi-Fi.
3. Is this computer on the network of the swarm? If **all** bees are offline, the problem is almost always the computer or the router, not the bees.
4. Wait half a minute: a bee needs that long after switching on.
5. Switch the bee off and on.

## No sound from the bees

Work through this from top to bottom.

1. **Are the bees active?** Swarm page: the bees you want must be on the left.
2. **Did you connect?** The bees must show **Streaming** (or **Ready for triggers**), not **Standby**.
3. **Streaming: does your audio software play to "KweenB Swarm"?** Check the output device in your audio software.
4. **Streaming: do the bars move on the Routing page?** If not, no sound reaches KweenB: the problem is in your audio software. If they do, check that a cord runs from that channel to the bee.
5. **Is the volume up?** Audio page, Mixer tab.
6. **Does a test sound play?** Audio page, Tests tab. If the test sound plays but your scene does not, the scene is not on that bee.

## Clicks or gaps in the sound

Open the Monitor and click the bee.

| The Monitor shows | Cause | What to do |
| --- | --- | --- |
| Many **late packets** on one bee | That bee has a weak Wi-Fi connection. | Move it closer to the router, or take away what is between them. |
| Many **late packets** on all bees | The Wi-Fi is too busy, or the router stands badly. | Check **Wi-Fi in use** on the Network tab. Put the router higher and in the middle. Raise **Network buffer** in the Settings. |
| **Sound card dropouts** | The bee cannot keep up. | Raise **Sound card buffer** from 3 to 4 in the Settings. |
| **Restarts** | The bee restarted its sound by itself. | Once is not a problem. If it keeps happening, restart that bee. |

Triggered sounds play from the bee itself and do not suffer from the Wi-Fi. If a piece must not click under any condition, put it on the bees as a scene and trigger it.

## Connect fails

See the list at the end of [Streaming](./05-streaming.md). The short version: the red text names the bee and the reason. Restart that bee, or put it aside on the Swarm page, and connect again.

## The remote interface or the satellite does not open

- The phone has to be on the **Wi-Fi of the swarm**, not on mobile data or another network.
- For the remote interface, KweenB has to be open. Use the address from **File → Remote Interface…**
- For the satellite, try **http://satellite.local** again after a minute. Check its network cable and power.
- **An orange bar** on the page means the connection was lost. It comes back by itself; buttons do nothing in the meantime.

## The satellite shows no bees, or old scenes

The satellite only knows what KweenB sent the last time. Choose the right bees in KweenB and do **File → Send to Satellite…** again. On the scene trigger page, tap **Select Scenes → Reload Cache** to refresh the list on that phone.

## The bees do not play from the satellite

Tap the title **kweenb-S**, then **Start Triggering**. The line under the button tells which bees started and which did not.

## KweenB does not find new firmware

- A **backup key** has to be installed: **File → Install a Backup Key…**
- The computer needs **internet** at that moment. Firmware that was fetched before stays available without internet.

## A bee does not start any more

Flash it: see [Flashing and new speakers](./14-flashing.md). Put its sounds back from the backup afterwards.

## Asking for help

When you ask aifoon for help, send along:

- what you did and what you saw, with a screenshot of the message
- the log of the Monitor: **Monitor → Save log…**
- the log of KweenB: **Help → Show App Logging**
- the version of KweenB: **kweenb → About kweenb**
