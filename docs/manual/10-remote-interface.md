# Remote interface

The remote interface lets you trigger scenes and set the volume of the bees from a phone or tablet. It is a web page that KweenB serves itself; nothing has to be installed on the phone.

The phone has to be on the same network as the computer, and **KweenB has to stay open**. To work without the computer, use the [satellite](./11-satellite.md): it shows the same page.

## Opening it

Choose **File → Remote Interface…**

![The Remote interface dialog](/img/manual/remote-interface.png)

1. **The code.** Scan it with the camera of the phone.
2. **The address.** Or type this in the browser of the phone.
3. **Open on this computer** opens the same page in the browser of this computer.

If KweenB says that this computer is not on a network, connect it to the network of the swarm and open the dialog again.

## The page

The page has two parts, chosen with the buttons at the top right: **single bees** and **scene trigger**. Both have the same bar at the bottom, which works on all bees.

It shows the **active** bees of KweenB.

## Single bees

On this page each bee has its own card, so each bee can play a different scene.

*The picture shows the page of the satellite. The page of KweenB is the same, with "kweenb" as its title.*

![The single bees page](/img/manual/satellite-single-bees.png)

1. **The title.** On the satellite, tapping it opens the settings.
2. **The two pages.**
3. **Save To New Composition** saves the cards as they are now.
4. **Compositions** opens a saved set-up.
5. **The volume** of this bee.
6. **Play** the scene of this bee.
7. **Choose a scene** for this bee.
8. **The master bar,** for all bees at once.

### The card of a bee

![The card of one bee](/img/manual/satellite-bee-card.png)

1. **Volume** of this bee, from 0 to 100.
2. **− and +** change the volume in small steps.
3. **Play** the chosen scene on this bee.
4. **Stop** this bee.
5. **Loop.** When on, the scene starts again when it ends.
6. **Clear.** Stops the bee and takes the scene off its card.
7. **Folder.** Opens the list of scenes that are on this bee.

Under the buttons is the name of the chosen scene, or **No Scene Selected**. Until a scene is chosen, the first four buttons do nothing.

### Choosing a scene

![Choosing a scene](/img/manual/satellite-select-scene.png)

Tap the folder on a card. The list shows the scenes on that bee. Type in the field at the top to search, then tap a scene. Close the list with the cross.

### The master bar

![The master bar](/img/manual/satellite-master.png)

1. **The slider** sets what is chosen at number 2, for all bees.
2. **What the slider sets:** the volume (the speaker sign), the low tones (**LOW**) or the high tones (**HIGH**).
3. **Play** starts every bee that has a scene, all at once.
4. **Stop** stops all bees.
5. **Loop** switches the loop of all bees on or off.
6. **Clear** stops all bees, empties all cards and closes the composition. The saved composition itself is kept.

## Compositions

A **composition** is a saved set-up of the single bees page: which bee has which scene, and whether it loops.

- **Save To New Composition:** give it a name and tap **Save**.
- **Compositions:** tap a composition to open it. All bees stop, and the cards are filled in. Tap **Play** in the master bar to start it.

While a composition is open, its name stands at the top of the page, and **every change you make to a card is saved into it at once**. There is no separate save step.

![The list of compositions](/img/manual/satellite-compositions.png)

1. **Delete Mode.** When this is on, tapping a composition **deletes it at once, without asking**. Switch it off again when you are done.

:::warning
Opening a composition stops all bees. Do not open one in the middle of a piece that has to keep playing.
:::

## Scene trigger

This page is for starting one scene on **all bees at the same time**, with one big button per scene.

![The scene trigger page](/img/manual/satellite-scene-trigger.png)

1. **Select Scenes** adds a scene to the page.
2. **A scene.** Tap it to play that scene on every bee that has it.
3. **The arrows** move the button; **the cross** takes it off the page.
4. **The master bar.** The same as on the other page, without Play.

![Adding scenes to the page](/img/manual/satellite-select-scenes.png)

1. **Reload Cache.** The phone remembers the list of scenes. Tap this after new scenes were put on the bees.

Tapping a scene here closes an open composition.

## Good to know

- **Each phone remembers its own page.** The chosen scenes and the scene buttons are kept in the browser of that phone. Another phone can show something else.
- **The master sliders start in the middle** every time the page is loaded, whatever the bees are set to.
- **An orange bar at the top** means the page lost its connection. Buttons do nothing until the bar is gone.
