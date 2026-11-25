# Zwerm

De pagina **Swarm** toont alle bees die KweenB kent, en laat je kiezen welke je gebruikt.

![De pagina Swarm](/img/manual/swarm.png)

1. **Use bees.** Snelle keuzes: **1–4** gebruikt bee 1 tot 4 en zet alle andere opzij. Hetzelfde geldt voor **1–8**, **1–12** en **1–16**. **All** gebruikt elke bee, **None** zet elke bee opzij.
2. **Live meters.** Toont op elke kaart hoe luid die bee speelt, tien keer per seconde. Het is bedoeld voor een controle voor de voorstelling. Zet het daarna uit: het neemt plaats in op de wifi.
3. **Weergave.** De linkse knop geeft kleine kaarten (**Compact**), de rechtse grotere kaarten met meer details en knoppen (**Detailed**).
4. **Een actieve bee.** Een bee die je nu gebruikt.
5. **drop inactive bee.** Sleep een bee uit de lijst rechts naar hier om hem te gebruiken.
6. **drop an active bee.** Sleep een kaart naar hier om die bee opzij te zetten.
7. **De inactieve bees.** Bees die KweenB kent maar die je nu niet gebruikt.

## Actief en inactief

KweenB stuurt alleen geluid naar de **actieve** bees. Connect, de pagina Audio, de pagina Routing en de remote interface werken allemaal alleen met de actieve bees.

Om één bee te verplaatsen, sleep je hem, of **dubbelklik** je erop.

## Wat een kaart je vertelt

Elke kaart toont de naam van de bee, een gekleurd bolletje met een woord, en enkele kleine tekens.

| Woord | Betekenis |
| --- | --- |
| **Offline** | KweenB hoort deze bee niet. Hij staat uit, is buiten bereik van de wifi, of zijn batterij is leeg. |
| **Standby** | De bee staat aan en wacht tot je verbindt. |
| **Starting…** | De bee start zijn geluid. |
| **Streaming** | De bee ontvangt de stream. |
| **Ready for triggers** | De bee speelt zijn eigen geluiden wanneer je ze triggert (na **Trigger only**). |
| **Problem** | Er is iets mis met het geluid van deze bee. Hou de muis boven het woord (of gebruik de weergave Detailed) om te lezen wat. |

De kleur van het bolletje en van de linkerrand van de kaart:

- **Groen**: alles is in orde.
- **Grijs**: stand-by.
- **Oranje**: aan het starten, of de batterij raakt leeg.
- **Rood**: offline, een probleem, of de batterij is bijna leeg.

De kleine tekens op een bee die aanstaat:

- **Wifi-streepjes.** Vier streepjes is sterk, één is zwak. Zwak staat in het oranje. Naast de streepjes zegt **6G** of **5G** op welk van de twee netwerken van de zwerm de bee zit.
- **Geluidsbalkje.** Toont of er geluid uit de speaker komt.
- **Batterij.** Alleen op bees die hun batterij kunnen meten. Groen is goed, oranje raakt leeg, rood is bijna leeg.

Hou de muis boven een teken om de precieze waarde te lezen.

### 6G of 5G

De router van de zwerm heeft twee netwerken voor de bees, en de zwerm is over beide verdeeld. Eén netwerk kan niet alle bees tegelijk aan: het geluid zou te laat aankomen.

- Bees met een **even** nummer gebruiken **6G**.
- Bees met een **oneven** nummer gebruiken **5G**.

Een bee gaat zelf naar haar netwerk, binnen de minuut na het aanzetten. Een bee voor 6G die te ver van de router staat gebruikt 5G, omdat 5G verder reikt.

Een bee verandert nooit van netwerk terwijl ze streamt of speelt, want dat zou je horen. Ze wacht tot je de verbinding verbreekt. Een bee met een even nummer die tijdens een voorstelling **5G** toont staat dus te ver van de router: zet ze de volgende keer dichter.

## De batterij van een bee

Een bee die zijn batterij kan meten, toont op zijn kaart een kleine batterij, met hoe vol ze is.

![Kaarten van bees met hun batterij](/img/manual/battery-swarm.png)

1. **Groen: goed.** Er is 40% of meer over.
2. **Oranje: raakt leeg.** Er is minder dan 40% over. Ook het bolletje en de linkerrand van de kaart worden oranje. Deze bee moet binnenkort opgeladen worden.
3. **Rood: bijna leeg.** Er is minder dan 20% over. Het bolletje en de rand worden rood. Laad deze bee snel op, anders valt hij uit.
4. **Grijs, met volt.** De bee meet zijn batterij maar kan nog niet zeggen hoe vol ze is, en toont daarom de spanning. Een grijze batterij wordt nooit oranje of rood: hou zo'n bee zelf in het oog.

Goed om te weten:

- Hou de muis boven de batterij om het in woorden te lezen, bijvoorbeeld "Battery is running low".
- Een kaart zonder batterij is van een bee die ze niet kan meten. Ook een bee die uitstaat, toont geen batterij.
- Het percentage beweegt met opzet traag. De batterij zakt even wanneer een speaker luid speelt, en KweenB laat het getal daardoor niet springen.
- KweenB werkt de software niet bij van een bee waarvan de batterij bijna leeg is (zie [Updates](./13-updates.md)).
- De [Monitor](./08-monitor.md) waarschuwt je wanneer een batterij leeg raakt, zodat je niet naar de kaarten hoeft te kijken.

:::tip
Kijk naar de batterijen voor het publiek binnenkomt. Een bee die bij het begin van een lange voorstelling in het oranje staat, vervang of laad je beter eerst.
:::

## De weergave Detailed

![Een kaart in de weergave Detailed](/img/manual/swarm-detailed.png)

1. **De vuilnisbak** verwijdert de bee uit KweenB. KweenB vraagt "Know what you're doing, you're about to kill a bee. Are you sure?" De bee zelf verandert niet; je kunt hem later opnieuw toevoegen.
2. **Het tandwiel** opent de pagina van die bee. Het is er alleen wanneer de bee aanstaat.
3. **De toestand** van de bee.
4. **Wifi, geluid en batterij** in woorden.
5. **Het adres** van de bee op het netwerk.

## De pagina van één bee

![De pagina van één bee](/img/manual/bee-page.png)

1. **Stop.** Stopt het geluid alleen op deze bee.
2. **Restart.** Herstart deze bee.
3. **Switch off.** Zet deze bee uit.
4. **IP Address.** Het adres van de bee op het netwerk.
5. **Name.** De naam van de bee: `bee` gevolgd door zijn nummer in twee cijfers, bijvoorbeeld `bee07`.

In de modus P2P is er nog een knop: **Start**, achter "Connect this bee again". Die brengt één bee terug in de stream zonder alle bees opnieuw te verbinden.

Het adres en de naam worden bewaard zodra je buiten het veld klikt. Normaal verander je ze nooit: KweenB vult ze in wanneer het een bee vindt.

Om terug te gaan, klik je op **Swarm** in de lijst links.

## Bees toevoegen

Een nieuwe of pas geflashte bee moet je één keer toevoegen.

- **File → Adopt from Network…** zoekt bees die aanstaan en al een nummer hebben, en voegt ze toe. Gebruik dit op een computer waar KweenB de zwerm nog niet kent.
- **File → New Speaker…** geeft een nummer aan een speaker die er nog geen heeft, bijvoorbeeld na het flashen. Dit staat beschreven in [Flashen en nieuwe speakers](./14-flashing.md).

![Bees van het netwerk overnemen](/img/manual/adopt.png)

Wanneer KweenB nog geen enkele bee kent, toont de pagina Swarm een welkomstscherm met dezelfde twee keuzes als knoppen.

:::tip
Worden er geen bees gevonden, controleer dan of ze aanstaan en of deze computer op hun netwerk zit. Een bee heeft ongeveer een halve minuut nodig nadat hij is aangezet.
:::
