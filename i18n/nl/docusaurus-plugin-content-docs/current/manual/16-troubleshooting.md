# Problemen oplossen

Begin bij de pagina **Monitor**: die noemt meestal het probleem. Dit hoofdstuk somt op wat het vaakst misgaat, volgens wat je merkt.

## Een bee toont Offline

1. Staat hij aan, en is zijn batterij opgeladen?
2. Is hij binnen bereik van de router? Muren, mensen en afstand verzwakken de wifi.
3. Zit deze computer op het netwerk van de zwerm? Zijn **alle** bees offline, dan ligt het probleem bijna altijd bij de computer of de router, niet bij de bees.
4. Wacht een halve minuut: zo lang heeft een bee nodig na het aanzetten.
5. Zet de bee uit en weer aan.

## Geen geluid uit de bees

Werk dit af van boven naar beneden.

1. **Zijn de bees actief?** Pagina Swarm: de bees die je wilt, moeten links staan.
2. **Heb je verbonden?** De bees moeten **Streaming** (of **Ready for triggers**) tonen, niet **Standby**.
3. **Streamen: speelt je audiosoftware naar "KweenB Swarm"?** Controleer het uitgangsapparaat in je audiosoftware.
4. **Streamen: bewegen de balkjes op de pagina Routing?** Zo niet, dan komt er geen geluid bij KweenB aan: het probleem zit in je audiosoftware. Bewegen ze wel, controleer dan of er een kabel van dat kanaal naar de bee loopt.
5. **Staat het volume open?** Pagina Audio, tabblad Mixer.
6. **Speelt er een testgeluid?** Pagina Audio, tabblad Tests. Speelt het testgeluid wel maar je scène niet, dan staat de scène niet op die bee.

## Tikjes of gaatjes in het geluid

Open de Monitor en klik op de bee.

| De Monitor toont | Oorzaak | Wat je doet |
| --- | --- | --- |
| Veel **Late packets** (late pakketten) op één bee | Die bee heeft een zwakke wifiverbinding. | Zet hem dichter bij de router, of haal weg wat ertussen staat. |
| Veel **Late packets** op alle bees | De wifi is te druk, of de router staat slecht. | Controleer **Wi-Fi in use** op het tabblad Network. Zet de router hoger en in het midden. Verhoog **Network buffer** in de Settings. |
| **Sound card dropouts** | De bee kan niet volgen. | Verhoog **Sound card buffer** van 3 naar 4 in de Settings. |
| **Restarts** | De bee herstartte zijn geluid vanzelf. | Eén keer is geen probleem. Blijft het gebeuren, herstart dan die bee. |

Getriggerde geluiden spelen vanaf de bee zelf en hebben geen last van de wifi. Mag een stuk in geen geval tikken, zet het dan als scène op de bees en trigger het.

## Connect mislukt

Zie de lijst aan het einde van [Streamen](./05-streaming.md). In het kort: de rode tekst noemt de bee en de reden. Herstart die bee, of zet hem opzij op de pagina Swarm, en verbind opnieuw.

## De remote interface of de satelliet gaat niet open

- De telefoon moet op de **wifi van de zwerm** zitten, niet op mobiele data of een ander netwerk.
- Voor de remote interface moet KweenB open zijn. Gebruik het adres uit **File → Remote Interface…**
- Voor de satelliet: probeer **http://satellite.local** opnieuw na een minuut. Controleer zijn netwerkkabel en stroom.
- **Een oranje balk** op de pagina betekent dat de verbinding verbroken is. Ze komt vanzelf terug; intussen doen de knoppen niets.

## De satelliet toont geen bees, of oude scènes

De satelliet kent alleen wat KweenB de laatste keer gestuurd heeft. Kies de juiste bees in KweenB en doe **File → Send to Satellite…** opnieuw. Tik op de pagina scene trigger op **Select Scenes → Reload Cache** om de lijst op die telefoon te vernieuwen.

## De bees spelen niet vanaf de satelliet

Tik op de titel **kweenb-S** en dan op **Start Triggering**. De regel onder de knop zegt welke bees gestart zijn en welke niet.

## KweenB vindt geen nieuwe firmware

- Er moet een **back-upsleutel** geïnstalleerd zijn: **File → Install a Backup Key…**
- De computer heeft op dat moment **internet** nodig. Firmware die eerder opgehaald is, blijft beschikbaar zonder internet.

## Een bee start niet meer

Flash hem: zie [Flashen en nieuwe speakers](./14-flashing.md). Zet daarna zijn geluiden terug vanuit de back-up.

## Hulp vragen

Wanneer je aifoon om hulp vraagt, stuur dan mee:

- wat je deed en wat je zag, met een schermafbeelding van de melding
- het logboek van de Monitor: **Monitor → Save log…**
- het logboek van KweenB: **Help → Show App Logging**
- de versie van KweenB: **kweenb → About kweenb**
