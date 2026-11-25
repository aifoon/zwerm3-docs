# Flashing and new speakers

**Flashing** puts a completely fresh system (an **image**) on a bee or on the SD card of the satellite. You need it for a new or repaired speaker, when an update asks for a newer image, or when a device does not start any more.

Flashing with KweenB works on a Mac.

:::warning
Flashing erases everything on the device. For a bee: back up its sounds first ([Backup and restore](./12-backup-restore.md)). For a satellite: send its changes to KweenB first ([Satellite](./11-satellite.md)).
:::

## Getting the image

The images are in a protected folder of aifoon. **File → Download Assets…** opens it in the browser; you need the password of aifoon. Download:

- the image of the speaker (`zwerm3-speaker-….img.gz`) for bees
- the image of the satellite (`zwerm3-satellite-….img.gz`) for the satellite

KweenB remembers the image you used last.

## Flashing a speaker

You need a USB cable between the speaker and the Mac.

### Step 1: choose the image

Choose **File → Flash → A Speaker…**

![Flashing a speaker, step 1](/img/manual/flash-speaker-1.png)

1. **The image** that will be put on the speaker.
2. **Choose another…** picks another file.
3. **Next.**

### Step 2: connect the speaker

Do what KweenB shows:

1. Switch the speaker off and set the jumper.
2. Connect the speaker to this computer with a USB cable.
3. Switch the speaker on.

![Flashing a speaker, step 2](/img/manual/flash-speaker-2.png)

KweenB looks for the speaker and goes on by itself when it finds it. If nothing happens after a while, check the jumper, plug the cable straight into the computer (not through a hub), and switch the speaker off and on.

### Step 3: erase and flash

KweenB shows what will be erased and asks **Erase this speaker and flash it?** Click **Erase and flash**. Your Mac asks for your password.

KweenB writes the image and checks it. This takes a few minutes. Leave the speaker on and the cable connected.

### Step 4: done

When KweenB says **Done. The speaker is flashed.**:

1. Remove the jumper.
2. Unplug the USB cable.
3. Switch the speaker on.
4. Click **Set up this speaker** to give it its number.

## Setting up a new speaker

A freshly flashed speaker has no number yet. **File → New Speaker…** (or **Set up this speaker** after flashing) gives it one.

![Setting up a new speaker](/img/manual/new-speaker.png)

The steps:

1. **Wait until KweenB finds the speaker.** It needs about a minute after it is switched on. Click **Set up** next to it. Switch on one new speaker at a time: that makes it easy to tell them apart.
2. **Choose its number,** from 1 to 99. KweenB proposes the lowest free number. Two speakers cannot have the same number. If you choose the number of a bee that is switched off, the new speaker takes its place.
3. **Put its sounds back?** KweenB offers the backup of the bee with that number, on this computer or in the cloud. You can also choose the sounds of another bee, or start without sounds.
4. **Wait.** KweenB gives the speaker its number, waits until it comes back, and puts the sounds on it. Leave the speaker switched on.

When it is done, the speaker is a bee in your swarm.

## Flashing a satellite

The satellite keeps its system on an SD card of 8 GB or more. You need a card reader.

![Flashing a satellite, step 1](/img/manual/flash-satellite-1.png)

The steps:

1. Choose **File → Flash → A Satellite…**, choose the image of the satellite and click **Next**.
2. Put the SD card in the card reader. With a card reader on a USB port, put the card in **after** KweenB started looking.
3. Check the size of the card KweenB shows and click **Erase and flash**. Your Mac asks for your password.
4. Wait until KweenB says **Done. The card is flashed.**
5. Put the card in the Raspberry Pi, connect it to the router with a network cable and switch it on.
6. After about a minute, click **Send to Satellite…** to fill it.

## If flashing does not work

| What you see | What to do |
| --- | --- |
| KweenB keeps looking for the speaker | Check the jumper. Plug the USB cable straight into the computer. Switch the speaker off and on. |
| KweenB keeps looking for the card | Push the card in until it clicks. A microSD card in a holder has to sit all the way in. Try another reader. |
| "This is not an image for a speaker" | Choose a file that ends in `.img.gz`. |
| "This is the image of a speaker" (while flashing a satellite), or the other way round | You chose the image of the other device. Choose the right one. |
| The card could not be written | Check that the card is not locked (the small switch on its side). |
| It stopped halfway | Start again. A device that was flashed halfway does not start until it is flashed completely. |
