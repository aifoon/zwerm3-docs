# Monitor

De pagina **Monitor** houdt de zwerm voor je in het oog en zegt in gewone woorden hoe het met elke bee gaat. Hou ze open tijdens een voorstelling.

Ze heeft drie tabbladen: **Bees**, **Network** en **Events**.

## Bees

![Het tabblad Bees van de Monitor](/img/manual/monitor-bees.png)

1. **Counting since.** Het moment waarop de tellers het laatst op nul gezet zijn.
2. **Start again** zet alle tellers op nul. Doe dit net voor een voorstelling.
3. **Save log…** bewaart alles wat er gebeurd is als een tekstbestand, bijvoorbeeld om na een probleem naar aifoon te sturen.
4. **De samenvatting:** hoeveel bees in orde zijn, hoeveel je in het oog moet houden, hoeveel je nodig hebben, en hoeveel in stand-by staan.
5. **Eén tegel per bee,** met zijn geluid, wifi, batterij en een oordeel. De kleine balkjes tonen de late pakketten van de laatste 30 minuten.

De Monitor toont **alle** bees, ook de bees die je nu niet gebruikt. Die tonen **Offline** wanneer ze uitstaan.

### Wat de oordelen betekenen

| Oordeel | Kleur | Wat je doet |
| --- | --- | --- |
| **Sound is clean** | groen | Niets. Alles komt op tijd aan. |
| **Ready for triggers** | groen | Niets. De bee speelt zijn eigen geluiden wanneer je ze triggert. |
| **Standby** | grijs | De bee staat aan en wacht tot je verbindt. |
| **Starting…** | oranje | Wacht even. |
| **A few late packets** | oranje | Een deel van het geluid komt laat aan over de wifi (enkele late pakketten). Dat hoor je normaal niet; hou het in het oog. |
| **Battery running low** | oranje | Deze bee moet binnenkort opgeladen worden. |
| **Sound is breaking up** | rood | Veel geluid komt te laat aan (het geluid hapert). Zet de bee dichter bij de router of haal weg wat ertussen staat. |
| **Battery low** | rood | Laad deze bee snel op, anders valt hij uit. |
| **Problem** | rood | Het geluid van deze bee heeft een probleem. De tegel zegt welk. |
| **Offline** | rood | KweenB hoort deze bee niet. Controleer of hij aanstaat, of zijn batterij opgeladen is en of hij binnen bereik van de wifi is. |

:::note
Een **laat pakket** is een heel klein stukje geluid dat te laat over de wifi aankwam om gespeeld te worden. De bee vult het gaatje zo goed mogelijk op. Een paar hoor je niet; veel geven tikjes.
:::

### Eén bee in detail

Klik op een tegel om alles over die bee te zien. **‹ All bees** brengt je terug.

![Eén bee in de Monitor](/img/manual/monitor-bee.png)

1. **Nu:** de late pakketten in de laatste minuut, het geluid dat eruit komt, de wifi en de batterij.
2. **Late packets over the last 30 minutes,** als een grafiek.
3. **Since counting started:** de totalen.
4. **What happened** met deze bee, als een lijst.

De totalen:

| Teller | Betekenis |
| --- | --- |
| **Late packets** | Geluid dat te laat over de wifi aankwam (late pakketten). |
| **Sound card dropouts** | Momenten waarop de geluidskaart van de bee niet kon volgen. |
| **Restarts** | Het aantal keer dat de bee zijn geluid vanzelf herstartte nadat er iets gestopt was. |
| **Times offline** | Het aantal keer dat KweenB de bee kwijt was. |

## Network

![Het tabblad Network van de Monitor](/img/manual/monitor-network.png)

1. **Wi-Fi in use.** Het deel van de tijd op het wifikanaal dat het geluid van alle bees inneemt. Onder 40% is er ruim plaats. Vanaf 40% raakt het vol. Vanaf 70% is het te vol: verwacht tikjes.
2. **To the bees / Back from the bees.** Hoeveel geluid er reist, in Mbit per seconde.
3. **Per bee, right now.** Het verkeer, de snelheid van de verbinding en het deel van de wifitijd voor elke bee.

Eén kanaal geluid is ongeveer 0,7 Mbit per seconde naar een bee en evenveel terug.

Raakt de wifi vol, gebruik dan minder bees in stereo, of stream naar minder bees en trigger de rest.

## Events

![Het tabblad Events van de Monitor](/img/manual/monitor-events.png)

1. **What needs you** toont alleen wat om actie vraagt: een bee die offline ging, geluid dat haperde, een lage batterij.
2. **Everything** toont ook de gewone gebeurtenissen, zoals een bee die startte of terugkwam.

De lijst vult zich naarmate er dingen gebeuren, met het tijdstip en de bee.

## Waarschuwingen over de batterij

De Monitor zegt je wanneer een bee opgeladen moet worden, op alle drie de tabbladen.

![De Monitor met twee bees waarvan de batterij bijna leeg is](/img/manual/battery-monitor.png)

1. **De samenvatting** telt een bee met een bijna lege batterij bij **need you**, en een bee waarvan de batterij leeg raakt bij **to keep an eye on**.
2. **Battery low** (rood): er is minder dan 20% over. Laad deze bee snel op, anders valt hij uit.
3. **Battery running low** (oranje): er is minder dan 40% over.

Een tegel zegt alleen iets over de batterij wanneer er niets dringenders aan de hand is. Een bee die offline is of een probleem heeft, toont dat eerst.

Klik op een tegel voor de bee in detail:

![De batterij van één bee in de Monitor](/img/manual/battery-monitor-bee.png)

1. **Het oordeel,** met wat je moet doen.
2. **Battery:** het percentage, en daaronder **fine**, **running low** of **low**.

Het tabblad **Events** bewaart het moment waarop een batterij in het oranje of het rood kwam:

![Gebeurtenissen over de batterij in de Monitor](/img/manual/battery-events.png)

1. **De bee, wat er gebeurde en wanneer.** "Battery running low" komt er één keer te staan wanneer de batterij onder 40% zakt, "Battery low" één keer wanneer ze onder 20% zakt. Beide staan onder **What needs you**.

:::note
Een bee die zijn batterij in volt toont (een grijze batterij op de pagina Swarm), heeft geen batterij op zijn tegel in de Monitor en geeft geen waarschuwingen over de batterij.
:::
