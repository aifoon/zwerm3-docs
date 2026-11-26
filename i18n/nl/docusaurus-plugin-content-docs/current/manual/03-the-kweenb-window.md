# Het venster van KweenB

KweenB heeft één venster. De balk bovenaan is er altijd; de lijst links brengt je naar de pagina's.

![Het venster van KweenB](/img/manual/kweenb-window.png)

1. **De pagina's.** Swarm, Audio, Routing, Monitor en Settings. Elke pagina heeft haar eigen hoofdstuk.
2. **Mode.** Toont **HUB** of **P2P**: de manier waarop de stream naar de bees reist. Je verandert dit in het menu **Mode**. Zie [Streamen](./05-streaming.md).
3. **Streaming latency.** De vertraging (latency) tussen je audiosoftware en de speaker, berekend uit de instellingen. Het is een schatting, geen meting, en ze staat er ook wanneer er niets verbonden is.
4. **Disconnect.** Stopt het geluid op alle actieve bees.
5. **Connect.** Start het geluid op de actieve bees. Er opent een klein menu met twee keuzes.
6. **Aan/uit-knop.** Sluit KweenB, of herstart alle bees of zet ze uit.

## Connect

![Het menu Connect](/img/manual/connect-menu.png)

1. **Stream to the bees.** Stuurt het geluid van je audiosoftware naar de bees. Ze kunnen nog altijd hun eigen geluiden spelen wanneer je ze triggert.
2. **Trigger only.** Geen stream: de bees spelen alleen hun eigen geluiden wanneer je ze triggert.

Beide worden uitgelegd in [Streamen](./05-streaming.md).

## De aan/uit-knop

![Het aan/uit-venster](/img/manual/power.png)

1. **Close KweenB.** Sluit het programma af. De bees blijven zoals ze zijn, zodat iemand anders op het netwerk ermee kan verder werken. Om het geluid op de bees te stoppen, druk je op **Disconnect** voor je afsluit.
2. **Reboot all bees.** Herstart elke bee die aanstaat.
3. **Shutdown all bees.** Zet elke bee uit die aanstaat. Wacht daarna enkele seconden voor je hun batterijen uitzet.

:::warning
**Reboot all bees** en **Shutdown all bees** werken op elke bee die aanstaat, ook op de bees die je nu niet gebruikt.
:::

## De menu's

De menubalk bovenaan het scherm bevat alles wat niet op een pagina staat.

| Menu | Wat erin zit |
| --- | --- |
| **kweenb** | **About kweenb** (de versie) en **Quit**. |
| **File** | Speakers toevoegen, flashen, back-ups, de remote interface, de satelliet en updates. De volledige lijst staat in [Naslag](./17-reference.md). |
| **Mode** | **Hub** of **P2P**. |
| **View** | **Toggle Full Screen**, en een vinkje per pagina om ze in de lijst links te tonen of te verbergen. **Positioning** is verborgen tot je het aanvinkt. |
| **Help** | **Show App Logging** opent het logbestand van KweenB. Het is nuttig om mee te sturen wanneer je hulp vraagt. |

## Meldingen

KweenB zegt je wat er gebeurd is in een kleine melding rechtsboven in het venster. Ze verdwijnt vanzelf na enkele seconden. Een rode melding is een fout en noemt meestal de bee waarover het gaat, bijvoorbeeld `bee03: …`.
