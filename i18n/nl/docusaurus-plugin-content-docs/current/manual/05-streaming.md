# Streamen

**Connect** start het geluid op de actieve bees. Dit hoofdstuk legt de twee keuzes achter die knop uit, de twee modi, en wat de vertraging (latency) betekent.

## Stream to the bees

Kies **Connect → Stream to the bees** om het geluid van je audiosoftware naar de bees te sturen.

![KweenB terwijl het verbindt](/img/manual/connecting.png)

KweenB toont telkens één regel terwijl het werkt:

1. Het controleert of zijn eigen geluidsprogramma's er zijn.
2. Het zoekt de actieve bees op.
3. Het controleert of elke actieve bee aanstaat.
4. Het stopt wat nog liep op deze computer.
5. Het start de stream op deze computer en op elke actieve bee.
6. Het maakt de verbindingen tussen de kanalen en de bees.

Wanneer dat allemaal gelukt is, sluit het venster vanzelf en tonen de bees **Streaming**. Gaat er iets mis, dan blijft het venster open met de reden in het rood en een knop **Close**.

Kies na het verbinden **KweenB Swarm** als uitgang in je audiosoftware. Zie [Routing](./06-routing.md).

:::note
Terwijl de bees streamen, kunnen ze nog altijd hun eigen geluiden spelen wanneer je ze triggert. De twee worden op de bee gemengd.
:::

## Trigger only

Kies **Connect → Trigger only** wanneer je helemaal niet streamt. De bees maken zich klaar om hun eigen geluiden te spelen, en tonen **Ready for triggers**. Er reist geen geluid over de wifi, dus dit is de lichtste en meest robuuste manier van werken.

## Disconnect

**Disconnect** stopt het geluid op alle actieve bees en op deze computer. De bees gaan terug naar **Standby**.

Klik op Disconnect voor je de instellingen van de stream verandert, en voor je de bees uitzet.

## Hub en P2P

Het menu **Mode** heeft twee keuzes voor hoe een stream naar de bees reist. De bovenbalk toont welke aanstaat.

| | Hub | P2P |
| --- | --- | --- |
| **Hoe het werkt** | KweenB opent één ontmoetingspunt. Elke bee verbindt zich daarmee. | KweenB opent een aparte verbinding naar elke bee. |
| **Gebruik het voor** | Gewoon gebruik. Dit is de modus die aifoon in voorstellingen gebruikt. | Speciale gevallen, of om uit te zoeken of een probleem bij één bee ligt. |
| **Eén bee is uitgevallen** | Verbind alle bees opnieuw. | Open de pagina van die bee en klik op **Start**. |

KweenB start in **Hub** elke keer dat je het opent. Wil je P2P, kies het dan opnieuw nadat je KweenB gestart hebt.

Verander de modus terwijl je niet verbonden bent. De nieuwe modus wordt gebruikt de volgende keer dat je verbindt.

## Vertraging

De bovenbalk toont **Streaming latency is … ms**. Dat is de tijd tussen het moment waarop je audiosoftware een geluid speelt en het moment waarop het uit een bee komt.

Geluid over wifi heeft altijd een beetje tijd nodig: elke bee houdt een kleine reserve aan geluid, zodat je een moment van slechte wifi niet hoort. Een grotere reserve geeft minder tikjes maar meer vertraging. Met de standaardinstellingen is de vertraging ongeveer 108 ms.

Het getal wordt berekend uit de instellingen op de pagina **Settings**; KweenB meet het niet. Om het te veranderen, zie [Instellingen](./09-settings.md).

:::tip
Alle bees hebben dezelfde vertraging, dus ze blijven onderling gelijk lopen. De vertraging telt alleen wanneer het geluid gelijk moet lopen met iets anders, zoals een performer of een video. Vertraag in dat geval dat andere met dezelfde tijd.
:::

## Als verbinden niet lukt

| KweenB zegt | Wat je doet |
| --- | --- |
| **No active bees found. Please make sure you have at least one active bee.** | Kies eerst bees op de pagina Swarm. |
| **Some bees are offline, please check your network:** gevolgd door namen | Zet die bees aan, of zet ze opzij op de pagina Swarm, en verbind dan opnieuw. |
| **Error while starting Jack, Jacktrip & Pure Data on bees.** gevolgd door een bee en een reden | Die bee kon zijn geluid niet starten. Herstart de bee (zijn pagina, **Restart**) en verbind opnieuw. |
| **Error while starting Jack on kweenb** | Het geluidsapparaat kon niet geopend worden. Controleer **Audio device** op de pagina Settings en of **KweenB Swarm** geïnstalleerd is (pagina Routing). |
