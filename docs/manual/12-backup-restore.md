# Backup and restore

The sounds on the bees are valuable: uploading them again takes time, and a bee can break. KweenB can keep a copy of all sounds in two places:

- **on this computer**, in the folder **KweenB Backups** inside your Documents folder
- **in the cloud** of aifoon, so every computer of aifoon can reach the same copy

A backup holds the scenes of each bee, per bee.

## Back up to this computer

Choose **File → Back Up → Back Up to this Computer…**

It starts at once and reads the sounds of every bee that is switched on. The first time this can take a while; the next time only new and changed sounds are saved. **Stop** breaks it off; what was not saved yet is saved the next time.

At the end KweenB tells which bees were saved and in which folder. A bee that was switched off is named too: switch it on and try again.

## The backup key

To use the cloud, KweenB needs a **backup key**: a file that ends in `.kweenbkey`. You get it from whoever looks after the backups at aifoon. Without a key, the cloud choices in the menu are grey.

1. Choose **File → Install a Backup Key…**
2. Click **Choose a backup key…** and pick the file.
3. If the key has a passphrase, type it and click **Activate**.

KweenB then says **The backup key is installed.** You do this once per computer.

:::note
The same key also lets KweenB find new firmware for the bees and the satellite. See [Updates](./13-updates.md).
:::

### Giving the key to someone else

Open **File → Back Up → Back Up to the Cloud…** and click **Backup key…** There you can save the key as a file for another computer.

Give the file a **passphrase** and tell that passphrase another way than the file (not in the same mail). Anyone who has the file and the passphrase can read and change the backups.

## Back up to the cloud

Choose **File → Back Up → Back Up to the Cloud…** The computer has to reach the bees and the internet at the same time.

![Back up to the cloud](/img/manual/backup-cloud.png)

1. **One line per bee:** how many sounds it has, when they were read, and whether the cloud is up to date.
2. **Backup key…** shows the key and lets you install another or save it for someone else.
3. **Back up** reads the bees that are on and brings the cloud up to date.

When no bee is on but this computer holds sounds that are not in the cloud yet, the button reads **Send to the cloud**. When the cloud holds sounds this computer does not have, there is also a button **Get from the cloud**.

:::tip
On tour the bees and the internet are often on different networks. Then do it in two steps: **Back Up to this Computer** while you are with the bees, and **Back Up to the Cloud → Send to the cloud** later, when the computer has internet.
:::

A sound that was removed from a bee stays in the cloud, but is no longer part of the backup of that bee.

## Restore

Restoring puts saved sounds back on bees. Choose **File → Restore → Restore from the Cloud…** or **Restore from this Computer…**

![Restoring sounds](/img/manual/restore.png)

1. **Tick the bees** you want to restore. A bee that is switched off cannot be ticked.
2. **Which backup.** Normally the backup of that same bee. You can also choose the backup of another bee, to make this bee a copy of it.
3. **Make the bees exactly like their backup.** When ticked, sounds that are on the bee but not in the backup are removed from it. When not ticked, they stay.

Click **Restore … bees**. KweenB works through the bees one by one and tells at the end what each bee got.

:::warning
With **Make the bees exactly like their backup** ticked, sounds that are only on the bee are deleted from it. Back up first when you are not sure.
:::

## A new bee gets its sounds automatically

When you set up a new or freshly flashed speaker, KweenB asks whether to put its sounds back, and offers the backup of the bee with that number. See [Flashing and new speakers](./14-flashing.md).
