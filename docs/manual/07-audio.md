# Audio

The **Audio** page is about the sounds that are stored on the bees: playing them, putting new ones on, removing them, and setting the volume and tone of the bees.

It has four tabs: **Trigger**, **Files**, **Mixer** and **Tests**.

:::note
Playing a sound only works after **Connect** (either choice). Before that, the bees are in standby and do not play.
:::

## Trigger: play a scene

![The Trigger tab](/img/manual/audio-trigger.png)

1. **The scenes** that are on the bees, as a tree. Click a scene to select it. A name with underscores is shown as folders: `walk_part1_birds` is the scene **birds** in the folder **walk → part1**.
2. **All** plays the selected scene on every bee that has it. The square next to it stops it.
3. **One button per bee** plays the scene on that bee only. The square next to it stops that bee.

A bee that is switched off keeps its button, but greyed out: you see that it has the scene, and you can not press it. **All** plays on the bees that are on.

Capital letters make no difference for the folders: `Walk_birds` and `walk_wind` are in the same folder.

The list is refreshed every few seconds while this page is open.

## Files: put sounds on the bees

![The Files tab](/img/manual/audio-files.png)

1. **Delete** removes the scenes you ticked.
2. **Refresh** reads the list again.
3. **Upload Scene** puts a new scene on the bees.
4. **The bees that are on.** Click a bee to see the scenes on it.

### Preparing a scene

A scene is a folder on your computer with one sound file per bee. The files are named after the number of the bee:

```
my-scene/
  1.wav      → goes to bee 1
  2.wav      → goes to bee 2
  7.wav      → goes to bee 7
```

Each file only goes to the bee with that number, and only if that bee is switched on. A bee without a file does not get the scene. The files have to be WAV files; `1.wav` and `1.WAV` are both fine.

### Uploading

![Uploading a scene](/img/manual/audio-upload.png)

1. **Name.** The name of the scene. Use underscores to make folders, for example `walk_part1_birds`.
2. **Select.** Choose the folder with the sound files.
3. **Start Upload.** KweenB sends each file to its bee and shows how far it is. **Cancel** stops it.

If a bee is almost full, KweenB tells you which one: remove some scenes from it first.

### Removing

Tick one or more scenes and click **Delete**. In the window that opens, switch on **Delete on all bees** to remove the scenes from every bee, not only from the one you are looking at. Then click **Remove Scene(s)**.

:::warning
A removed scene is gone from the bee. Make a backup first if you may need it again: see [Backup and restore](./12-backup-restore.md).
:::

## Mixer: volume and tone

![The Mixer tab](/img/manual/audio-mixer.png)

1. **Master** works on all bees at once.
2. **One strip per active bee.**

Each strip has four sliders:

| Slider | What it does | Range |
| --- | --- | --- |
| **Low** | The low tones | 0 to 2, normal is 1 |
| **Mid** | The middle tones | 0 to 2, normal is 1 |
| **High** | The high tones | 0 to 2, normal is 1 |
| **Vol** | The volume | 0 to 100 |

A change is sent to the bee when you let go of the slider.

:::note
The sliders show what you set in this session. KweenB does not read the values back from the bees, so after restarting KweenB the sliders stand in the middle again, while the bees keep what they had.
:::

## Tests: is every bee working?

![The Tests tab](/img/manual/audio-tests.png)

1. **All Bees** plays a test sound on every active bee.
2. **speaker ready** plays the test sound with that name.
3. **sample** plays a second test sound.

Below are the same buttons for each bee apart. Use this tab after setting up, to hear that every speaker works and stands where you think it stands.
