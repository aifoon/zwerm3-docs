# Updates

Drie dingen kunnen bijgewerkt worden: **KweenB** zelf, de **bees** en de **satelliet**. Eén venster toont ze alle drie: **File → Check for Updates…**

KweenB kijkt ook zelf elke keer dat het start. Is er iets nieuws, dan verschijnt er een regel in de bovenbalk, bijvoorbeeld "New firmware for 2 devices". Klik erop om het venster te openen.

![Check for updates](/img/manual/updates.png)

1. **KweenB.** Of dit de nieuwste versie is.
2. **Newest firmware.** De nieuwste software voor de bees en voor de satelliet die KweenB kon vinden.
3. **De toestellen op het netwerk:** elke bee en satelliet die aanstaat, met de datum van zijn image en de versie van zijn firmware.
4. **De toestand van dat toestel:** **Up to date**, of een knop **Update to …**
5. **Look again** controleert alles nog een keer.

## KweenB bijwerken

Is er een nieuwere KweenB, dan zegt het venster "KweenB … is available" en toont het een knop **Download KweenB …** Hiervoor is internet nodig.

KweenB downloadt het installatiebestand naar je map **Downloads** en opent het. Daarna:

1. Sluit KweenB af.
2. Zet de nieuwe KweenB in de plaats van de oude (sleep hem naar Applications).
3. Open het opnieuw.

Je bees en instellingen blijven behouden.

## De bees en de satelliet bijwerken

De software van aifoon op een bee of op de satelliet heet **firmware**. Nieuwe firmware wordt over het netwerk verstuurd; je hoeft niets open te maken of aan te sluiten.

1. Klik op **Update to …** naast een toestel, of op **Update all** onderaan.
2. KweenB verstuurt de firmware en herstart het toestel. Dit duurt enkele minuten per toestel. De regel toont **Sending the firmware…**, dan **Restarting…**, dan **Updated ✓**.

Je hoeft niet versie per versie bij te werken: een toestel dat meerdere versies achterloopt, gaat in één stap naar de nieuwste.

:::note
**Het is veilig.** Een toestel controleert nieuwe firmware zelf na zijn herstart. Werkt ze niet, dan gaat het toestel terug naar de firmware die het had, en KweenB zegt je dat.
:::

### Goed om te weten

- **Het geluid stopt.** Een bee die streamt, is ongeveer een minuut stil terwijl hij bijgewerkt wordt. KweenB vraagt het eerst: **Stop the sound and update**, of **Not now**. Werk niet bij tijdens een voorstelling.
- **Een lage batterij.** KweenB werkt een bee met een lage batterij niet bij. Laad hem eerst op.
- **Je hebt een back-upsleutel nodig om nieuwe firmware te vinden.** De firmware wordt bij de back-ups bewaard in de cloud van aifoon. Zonder sleutel zegt het venster "New firmware only shows when a backup key is installed", met een knop **Install a Backup Key…** Zie [Back-up en herstellen](./12-backup-restore.md).
- **Internet is alleen nodig om de firmware te vinden.** Zodra KweenB ze opgehaald heeft, blijft ze bewaard op deze computer. Je kunt dan bees bijwerken op een netwerk zonder internet.

### Als een toestel niet bijgewerkt kan worden

| Het venster zegt | Betekenis |
| --- | --- |
| "This bee has an image from before firmware could be sent over the network." | De bee heeft een oud systeem. Flash hem één keer met de nieuwe image; vanaf dan wordt hij over het netwerk bijgewerkt. |
| "Firmware … needs the image of … or later." | Deze firmware heeft een nieuwer systeem nodig dan het toestel heeft. Flash het met de nieuwste image. |
| "The device did not work with firmware … and went back to …" | Het toestel probeerde de firmware, merkte dat ze niet werkte en ging vanzelf terug. Laat het weten aan aifoon. |
| "The device did not come back after its restart." | Controleer of het nog aanstaat, wacht een minuut en klik op **Look again**. |

Flashen staat beschreven in [Flashen en nieuwe speakers](./14-flashing.md).

## Image en firmware: het verschil

- De **image** is het volledige systeem van een toestel. Ze verandert alleen door te flashen, met het toestel aangesloten op de computer. Het venster toont haar datum.
- De **firmware** is het deel dat aifoon gemaakt heeft en dat daarbovenop zit. Ze verandert over het netwerk. Het venster toont haar versie.

De meeste verbeteringen komen als firmware. Een nieuwe image is maar af en toe nodig.
