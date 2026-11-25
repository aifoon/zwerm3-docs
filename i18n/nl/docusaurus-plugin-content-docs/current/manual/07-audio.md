# Audio

De pagina **Audio** gaat over de geluiden die op de bees bewaard zijn: ze afspelen, nieuwe erop zetten, ze verwijderen, en het volume en de klank van de bees instellen.

Ze heeft vier tabbladen: **Trigger**, **Files**, **Mixer** en **Tests**.

:::note
Een geluid afspelen werkt pas na **Connect** (een van beide keuzes). Daarvoor staan de bees in stand-by en spelen ze niet.
:::

## Trigger: een scène afspelen

![Het tabblad Trigger](/img/manual/audio-trigger.png)

1. **De scènes** die op de bees staan, als een boom. Klik op een scène om ze te selecteren. Een naam met underscores wordt getoond als mappen: `walk_part1_birds` is de scène **birds** in de map **walk → part1**.
2. **All** speelt de geselecteerde scène op elke bee die ze heeft. Het vierkantje ernaast stopt ze.
3. **Eén knop per bee** speelt de scène alleen op die bee. Het vierkantje ernaast stopt die bee.

Een bee die uitstaat houdt haar knop, maar in het grijs: je ziet dat ze de scène heeft, en je kan er niet op drukken. **All** speelt op de bees die aanstaan.

Hoofdletters maken geen verschil voor de mappen: `Walk_birds` en `walk_wind` staan in dezelfde map.

De lijst wordt om de paar seconden vernieuwd zolang deze pagina open is.

## Files: geluiden op de bees zetten

![Het tabblad Files](/img/manual/audio-files.png)

1. **Delete** verwijdert de scènes die je aangevinkt hebt.
2. **Refresh** leest de lijst opnieuw.
3. **Upload Scene** zet een nieuwe scène op de bees.
4. **De bees die aanstaan.** Klik op een bee om de scènes erop te zien.

### Een scène voorbereiden

Een scène is een map op je computer met één geluidsbestand per bee. De bestanden krijgen als naam het nummer van de bee:

```
my-scene/
  1.wav      → gaat naar bee 1
  2.wav      → gaat naar bee 2
  7.wav      → gaat naar bee 7
```

Elk bestand gaat alleen naar de bee met dat nummer, en alleen als die bee aanstaat. Een bee zonder bestand krijgt de scène niet. De bestanden moeten WAV-bestanden zijn; `1.wav` en `1.WAV` zijn allebei goed.

### Uploaden

![Een scène uploaden](/img/manual/audio-upload.png)

1. **Name.** De naam van de scène. Gebruik underscores om mappen te maken, bijvoorbeeld `walk_part1_birds`.
2. **Select.** Kies de map met de geluidsbestanden.
3. **Start Upload.** KweenB stuurt elk bestand naar zijn bee en toont hoe ver het staat. **Cancel** stopt het.

Is een bee bijna vol, dan zegt KweenB je welke: verwijder er eerst enkele scènes van.

### Verwijderen

Vink een of meer scènes aan en klik op **Delete**. Zet in het venster dat opent **Delete on all bees** aan om de scènes van elke bee te verwijderen, niet alleen van de bee die je bekijkt. Klik dan op **Remove Scene(s)**.

:::warning
Een verwijderde scène is weg van de bee. Maak eerst een back-up als je ze misschien nog nodig hebt: zie [Back-up en herstellen](./12-backup-restore.md).
:::

## Mixer: volume en klank

![Het tabblad Mixer](/img/manual/audio-mixer.png)

1. **Master** werkt op alle bees in één keer.
2. **Eén strook per actieve bee.**

Elke strook heeft vier schuifregelaars:

| Schuifregelaar | Wat hij doet | Bereik |
| --- | --- | --- |
| **Low** | De lage tonen | 0 tot 2, normaal is 1 |
| **Mid** | De middentonen | 0 tot 2, normaal is 1 |
| **High** | De hoge tonen | 0 tot 2, normaal is 1 |
| **Vol** | Het volume | 0 tot 100 |

Een wijziging wordt naar de bee gestuurd wanneer je de schuifregelaar loslaat.

:::note
De schuifregelaars tonen wat je in deze sessie ingesteld hebt. KweenB leest de waarden niet terug van de bees. Na het herstarten van KweenB staan de schuifregelaars dus weer in het midden, terwijl de bees houden wat ze hadden.
:::

## Tests: werkt elke bee?

![Het tabblad Tests](/img/manual/audio-tests.png)

1. **All Bees** speelt een testgeluid op elke actieve bee.
2. **speaker ready** speelt het testgeluid met die naam.
3. **sample** speelt een tweede testgeluid.

Daaronder staan dezelfde knoppen voor elke bee apart. Gebruik dit tabblad na het opstellen, om te horen dat elke speaker werkt en staat waar je denkt dat hij staat.
