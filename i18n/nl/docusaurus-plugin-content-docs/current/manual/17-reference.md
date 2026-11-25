# Naslag

## Het menu File

| Item | Wat het doet | Hoofdstuk |
| --- | --- | --- |
| **New Speaker…** | Geeft een nummer aan een speaker die er nog geen heeft. | [Flashen en nieuwe speakers](./14-flashing.md) |
| **Adopt from Network…** | Zoekt bees die aanstaan en voegt ze toe aan KweenB. | [Zwerm](./04-swarm.md) |
| **Flash → A Speaker…** | Zet een nieuw systeem op een speaker. | [Flashen en nieuwe speakers](./14-flashing.md) |
| **Flash → A Satellite…** | Zet een nieuw systeem op de SD-kaart van een satelliet. | [Flashen en nieuwe speakers](./14-flashing.md) |
| **Back Up → Back Up to the Cloud…** | Bewaart de geluiden van de bees in de cloud van aifoon. | [Back-up en herstellen](./12-backup-restore.md) |
| **Back Up → Back Up to this Computer…** | Bewaart de geluiden van de bees op deze computer. | [Back-up en herstellen](./12-backup-restore.md) |
| **Restore → Restore from the Cloud…** | Zet geluiden uit de cloud terug op bees. | [Back-up en herstellen](./12-backup-restore.md) |
| **Restore → Restore from this Computer…** | Zet geluiden van deze computer terug op bees. | [Back-up en herstellen](./12-backup-restore.md) |
| **Remote Interface…** | Toont de code en het adres van de triggerpagina voor een telefoon. | [Remote interface](./10-remote-interface.md) |
| **Send to Satellite…** | Vult de satelliet en haalt op wat erop gemaakt is. | [Satelliet](./11-satellite.md) |
| **Check for Updates…** | Toont nieuwe versies van KweenB en nieuwe firmware. | [Updates](./13-updates.md) |
| **Download Assets…** | Opent de beveiligde map van aifoon met de images en de back-upsleutel. | [Flashen en nieuwe speakers](./14-flashing.md) |
| **Install a Backup Key…** | Installeert de sleutel voor de cloud. Staat er alleen zolang er geen sleutel geïnstalleerd is. | [Back-up en herstellen](./12-backup-restore.md) |
| **Import → Bees… / Settings…** | Leest een lijst van bees of de instellingen uit een bestand. | [Instellingen](./09-settings.md) |
| **Export → Bees… / Settings…** | Bewaart de lijst van bees of de instellingen als een bestand. | [Instellingen](./09-settings.md) |

## Sneltoetsen

| Toetsen | Wat |
| --- | --- |
| **⌘ N** | New Speaker… |
| **⌘ S** | Back Up to this Computer… |
| **⌃ ⌘ F** | Volledig scherm |
| **⌘ Q** | KweenB afsluiten |

## Standaardinstellingen

| Instelling | Standaardwaarde |
| --- | --- |
| Sample rate | 44100 |
| Block size | 512 |
| Bit depth | 16 |
| Network buffer | 30 ms |
| Sound card buffer | 3 blokken |
| Audio device | KweenB Swarm (64 channels) |
| Send each packet | 1 keer |
| Vertraging (latency) met deze waarden | ongeveer 108 ms |
| Mode | Hub |

## Nummers en adressen

| Wat | Waarde |
| --- | --- |
| Naam van een bee | `bee` + zijn nummer in twee cijfers: `bee01` … `bee99` |
| Adres van een bee op het netwerk | `192.168.50.` gevolgd door 100 + zijn nummer. Bee 7 is `192.168.50.107`. |
| Triggerpagina van KweenB | `http://` + het adres van de computer + `:5050` (te zien in **File → Remote Interface…**) |
| Triggerpagina van de satelliet | `http://satellite.local` |
| Kanalen van KweenB Swarm | 64 |
| Map van de back-ups op deze computer | Documenten → KweenB Backups |
| SD-kaart van de satelliet | 8 GB of meer |

## De toestanden van een bee

| Toestand | Betekenis |
| --- | --- |
| **Offline** | Niet bereikbaar. |
| **Standby** | Staat aan en wacht op Connect. |
| **Starting…** | Start zijn geluid. |
| **Streaming** | Ontvangt de stream. |
| **Ready for triggers** | Speelt zijn eigen geluiden wanneer je ze triggert (klaar voor triggers). |
| **Problem** | Zijn geluid heeft een probleem. |

## Woordenlijst

| Woord | Betekenis |
| --- | --- |
| **Actieve bee** | Een bee die je nu gebruikt. |
| **Bee** | Eén speaker van de zwerm. |
| **Back-upsleutel** | Het bestand dat KweenB toegang geeft tot de cloud van aifoon. |
| **Compositie** | Een bewaarde opstelling van de triggerpagina. |
| **Kabel** | Een verbinding op de pagina Routing tussen een kanaal en een bee. |
| **Firmware** | De software van aifoon op een bee of satelliet, die over het netwerk bijgewerkt wordt. |
| **Flashen** | Een nieuwe image op een toestel zetten. |
| **Hub / P2P** | De twee manieren waarop een stream naar de bees reist. |
| **Image** | Het volledige systeem van een bee of satelliet. |
| **KweenB Swarm** | Het geluidsapparaat van KweenB waarnaar je audiosoftware speelt. |
| **Laat pakket** | Een stukje geluid dat te laat over de wifi aankwam. |
| **Vertraging (latency)** | De tijd tussen je audiosoftware en de speaker. |
| **Satelliet** | Het kleine toestel dat de triggerpagina aanbiedt zonder de computer. |
| **Scène** | Een geluid dat op de bees bewaard is, één bestand per bee. |
| **Zwerm** | Alle bees samen. |
| **Trigger** | Een scène starten met een knop. |
