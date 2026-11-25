# Welcome

This is the manual of **Zwerm3**, the swarm of wireless speakers of aifoon, and of **KweenB**, the program that runs it.

It is written for the people who work with the swarm: artists, technicians and everyone at aifoon. You do not need to know how the system is built to use it. Every chapter covers one part of KweenB, with pictures of the screen and numbers that point at what the text is about.

## The parts of the system

| Part | What it is |
| --- | --- |
| **Bee** | One speaker. It has a small computer, a Wi-Fi connection and a battery. Every bee has a number and is named after it: `bee01`, `bee02`, and so on. |
| **Swarm** | All the bees together. |
| **Router** | The box that makes the Wi-Fi network of the swarm. The bees, the computer with KweenB and the satellite are all on this network. |
| **KweenB** | The program on the computer (a Mac). You use it to look after the bees, to send sound to them and to trigger the sounds that are stored on them. |
| **Satellite** | A small box (a Raspberry Pi) on the router. It lets you trigger sounds from a phone or tablet when the computer with KweenB is not there, for example on a walk. |

## Two ways to make sound

The swarm can make sound in two ways, and you can use both at the same time.

- **Streaming.** The sound of your audio software (Reaper, Ableton Live, Max, …) goes live over the Wi-Fi to the bees. Each bee gets its own channel.
- **Triggering.** Sounds that were put on the bees beforehand are started with a button. Such a sound is called a **scene**. It plays from the bee itself, so it does not depend on the Wi-Fi while it plays.

## Words used in this manual

| Word | Meaning |
| --- | --- |
| **Active bee** | A bee you chose to use now. KweenB only sends sound to the active bees. |
| **Scene** | A sound that is stored on the bees, with one sound file per bee. |
| **Composition** | A saved set-up of the trigger page: which bee plays which scene, and whether it loops. |
| **Connect** | Starting the sound on the bees: a stream, or only triggering. |
| **Hub and P2P** | Two ways in which the stream travels to the bees. See [Streaming](./05-streaming.md). |
| **Firmware** | The software of aifoon on a bee or on the satellite. KweenB can update it over the network. |
| **Image** | The complete system of a bee or the satellite. Putting a new image on a device is called **flashing**. |

## How to read the pictures

The pictures are real screenshots of KweenB. A yellow circle with a number points at a part of the screen. The list under the picture tells what each number is.

Names of buttons and menus are printed in **bold**, exactly as they are on the screen. A menu path is written like this: **File → Check for Updates…**

:::note
KweenB is in English. The Dutch version of this manual keeps the names of buttons and menus in English, so they match what you see.
:::
