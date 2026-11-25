# Reference

## The File menu

| Item | What it does | Chapter |
| --- | --- | --- |
| **New Speaker…** | Gives a number to a speaker that has none yet. | [Flashing and new speakers](./14-flashing.md) |
| **Adopt from Network…** | Looks for bees that are on and adds them to KweenB. | [Swarm](./04-swarm.md) |
| **Flash → A Speaker…** | Puts a fresh system on a speaker. | [Flashing and new speakers](./14-flashing.md) |
| **Flash → A Satellite…** | Puts a fresh system on the SD card of a satellite. | [Flashing and new speakers](./14-flashing.md) |
| **Back Up → Back Up to the Cloud…** | Saves the sounds of the bees in the cloud of aifoon. | [Backup and restore](./12-backup-restore.md) |
| **Back Up → Back Up to this Computer…** | Saves the sounds of the bees on this computer. | [Backup and restore](./12-backup-restore.md) |
| **Restore → Restore from the Cloud…** | Puts sounds from the cloud back on bees. | [Backup and restore](./12-backup-restore.md) |
| **Restore → Restore from this Computer…** | Puts sounds from this computer back on bees. | [Backup and restore](./12-backup-restore.md) |
| **Remote Interface…** | Shows the code and address of the trigger page for a phone. | [Remote interface](./10-remote-interface.md) |
| **Send to Satellite…** | Fills the satellite and fetches what was made on it. | [Satellite](./11-satellite.md) |
| **Check for Updates…** | Shows new versions of KweenB and new firmware. | [Updates](./13-updates.md) |
| **Download Assets…** | Opens the protected folder of aifoon with the images and the backup key. | [Flashing and new speakers](./14-flashing.md) |
| **Install a Backup Key…** | Installs the key for the cloud. Only shown while no key is installed. | [Backup and restore](./12-backup-restore.md) |
| **Import → Bees… / Settings…** | Reads a list of bees or the settings from a file. | [Settings](./09-settings.md) |
| **Export → Bees… / Settings…** | Saves the list of bees or the settings as a file. | [Settings](./09-settings.md) |

## Shortcuts

| Keys | What |
| --- | --- |
| **⌘ N** | New Speaker… |
| **⌘ S** | Back Up to this Computer… |
| **⌃ ⌘ F** | Full screen |
| **⌘ Q** | Quit KweenB |

## Standard settings

| Setting | Standard value |
| --- | --- |
| Sample rate | 44100 |
| Block size | 512 |
| Bit depth | 16 |
| Network buffer | 30 ms |
| Sound card buffer | 3 blocks |
| Audio device | KweenB Swarm (64 channels) |
| Send each packet | 1 time |
| Latency with these values | about 108 ms |
| Mode | Hub |

## Numbers and addresses

| What | Value |
| --- | --- |
| Name of a bee | `bee` + its number in two digits: `bee01` … `bee99` |
| Address of a bee on the network | `192.168.50.` followed by 100 + its number. Bee 7 is `192.168.50.107`. |
| Trigger page of KweenB | `http://` + the address of the computer + `:5050` (shown in **File → Remote Interface…**) |
| Trigger page of the satellite | `http://satellite.local` |
| Channels of KweenB Swarm | 64 |
| Folder of the backups on this computer | Documents → KweenB Backups |
| SD card of the satellite | 8 GB or more |

## The states of a bee

| State | Meaning |
| --- | --- |
| **Offline** | Not reachable. |
| **Standby** | On, waiting for Connect. |
| **Starting…** | Starting its sound. |
| **Streaming** | Receiving the stream. |
| **Ready for triggers** | Plays its own sounds when triggered. |
| **Problem** | Its sound has a problem. |

## Word list

| Word | Meaning |
| --- | --- |
| **Active bee** | A bee you use now. |
| **Bee** | One speaker of the swarm. |
| **Backup key** | The file that gives KweenB access to the cloud of aifoon. |
| **Composition** | A saved set-up of the trigger page. |
| **Cord** | A connection on the Routing page between a channel and a bee. |
| **Firmware** | The software of aifoon on a bee or satellite, updated over the network. |
| **Flashing** | Putting a fresh image on a device. |
| **Hub / P2P** | The two ways a stream travels to the bees. |
| **Image** | The complete system of a bee or satellite. |
| **KweenB Swarm** | The sound device of KweenB that your audio software plays to. |
| **Late packet** | A piece of sound that arrived too late over the Wi-Fi. |
| **Latency** | The delay between your audio software and the speaker. |
| **Satellite** | The small box that serves the trigger page without the computer. |
| **Scene** | A sound stored on the bees, one file per bee. |
| **Swarm** | All the bees together. |
| **Trigger** | Starting a scene with a button. |
