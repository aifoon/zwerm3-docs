# Updates

Three things can be updated: **KweenB** itself, the **bees** and the **satellite**. One dialog shows all three: **File → Check for Updates…**

KweenB also looks by itself every time it starts. When there is something new, a line appears in the top bar, for example "New firmware for 2 devices". Click it to open the dialog.

![Check for updates](/img/manual/updates.png)

1. **KweenB.** Whether this is the newest version.
2. **Newest firmware.** The newest software for the bees and for the satellite that KweenB could find.
3. **The devices on the network:** every bee and satellite that is on, with the date of its image and the version of its firmware.
4. **The state of that device:** **Up to date**, or a button **Update to …**
5. **Look again** checks everything once more.

## Updating KweenB

When there is a newer KweenB, the dialog says "KweenB … is available" and shows a button **Download KweenB …** This needs internet.

KweenB downloads the installer to your **Downloads** folder and opens it. Then:

1. Quit KweenB.
2. Put the new KweenB in place of the old one (drag it to Applications).
3. Open it again.

Your bees and settings are kept.

## Updating the bees and the satellite

The software of aifoon on a bee or on the satellite is called **firmware**. A new firmware is sent over the network; nothing has to be opened or connected.

1. Click **Update to …** next to a device, or **Update all** at the bottom.
2. KweenB sends the firmware and restarts the device. This takes a few minutes per device. The line shows **Sending the firmware…**, then **Restarting…**, then **Updated ✓**.

You do not have to update version by version: a device that is several versions behind goes to the newest in one step.

:::note
**It is safe.** A device checks a new firmware itself after its restart. When it does not work, the device goes back to the firmware it had, and KweenB tells you so.
:::

### Things to know

- **The sound stops.** A bee that is streaming is silent for about a minute while it updates. KweenB asks first: **Stop the sound and update**, or **Not now**. Do not update during a show.
- **A low battery.** KweenB does not update a bee whose battery is low. Charge it first.
- **A backup key is needed to find new firmware.** The firmware is kept with the backups in the cloud of aifoon. Without a key the dialog says "New firmware only shows when a backup key is installed", with a button **Install a Backup Key…** See [Backup and restore](./12-backup-restore.md).
- **Internet is only needed to find the firmware.** Once KweenB has fetched it, it is kept on this computer. You can then update bees on a network without internet.

### When a device cannot be updated

| The dialog says | Meaning |
| --- | --- |
| "This bee has an image from before firmware could be sent over the network." | The bee has an old system. Flash it once with the new image; from then on it updates over the network. |
| "Firmware … needs the image of … or later." | This firmware needs a newer system than the device has. Flash it with the newest image. |
| "The device did not work with firmware … and went back to …" | The device tried the firmware, found it did not work and went back by itself. Tell aifoon. |
| "The device did not come back after its restart." | Check that it is still switched on, wait a minute and click **Look again**. |

Flashing is described in [Flashing and new speakers](./14-flashing.md).

## Image and firmware: the difference

- The **image** is the complete system of a device. It only changes by flashing, with the device connected to the computer. The dialog shows its date.
- The **firmware** is the part made by aifoon that sits on top. It changes over the network. The dialog shows its version.

Most improvements come as firmware. A new image is only needed now and then.
