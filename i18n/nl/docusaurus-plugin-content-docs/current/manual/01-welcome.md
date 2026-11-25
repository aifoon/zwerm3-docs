# Welkom

Dit is de handleiding van **Zwerm3**, de zwerm draadloze speakers van aifoon, en van **KweenB**, het programma waarmee je die bestuurt.

Ze is geschreven voor de mensen die met de zwerm werken: kunstenaars, technici en iedereen bij aifoon. Je hoeft niet te weten hoe het systeem gebouwd is om het te gebruiken. Elk hoofdstuk behandelt één deel van KweenB, met afbeeldingen van het scherm en nummers die aanwijzen waarover de tekst gaat.

## De onderdelen van het systeem

| Onderdeel | Wat het is |
| --- | --- |
| **Bee** | Eén speaker. Hij heeft een kleine computer, een wifiverbinding en een batterij. Elke bee heeft een nummer en is ernaar genoemd: `bee01`, `bee02`, enzovoort. |
| **Zwerm** | Alle bees samen. |
| **Router** | Het toestel dat het wifinetwerk van de zwerm maakt. De bees, de computer met KweenB en de satelliet zitten allemaal op dit netwerk. |
| **KweenB** | Het programma op de computer (een Mac). Je gebruikt het om voor de bees te zorgen, om geluid naar ze te sturen en om de geluiden te triggeren die erop bewaard zijn. |
| **Satelliet** | Een klein toestel (een Raspberry Pi) aan de router. Daarmee trigger je geluiden vanaf een telefoon of tablet wanneer de computer met KweenB er niet bij is, bijvoorbeeld op een wandeling. |

## Twee manieren om geluid te maken

De zwerm kan op twee manieren geluid maken, en je kunt beide tegelijk gebruiken.

- **Streamen.** Het geluid van je audiosoftware (Reaper, Ableton Live, Max, …) gaat live over de wifi naar de bees. Elke bee krijgt zijn eigen kanaal.
- **Triggeren.** Geluiden die vooraf op de bees gezet zijn, start je met een knop. Zo'n geluid heet een **scène**. Het speelt vanaf de bee zelf, dus het hangt tijdens het spelen niet af van de wifi.

## Woorden in deze handleiding

| Woord | Betekenis |
| --- | --- |
| **Actieve bee** | Een bee die je nu wilt gebruiken. KweenB stuurt alleen geluid naar de actieve bees. |
| **Scène** | Een geluid dat op de bees bewaard is, met één geluidsbestand per bee. |
| **Compositie** | Een bewaarde opstelling van de triggerpagina: welke bee welke scène speelt, en of ze in een lus speelt. |
| **Connect** | Het geluid op de bees starten: een stream, of alleen triggeren. |
| **Hub en P2P** | Twee manieren waarop de stream naar de bees reist. Zie [Streamen](./05-streaming.md). |
| **Firmware** | De software van aifoon op een bee of op de satelliet. KweenB kan ze over het netwerk bijwerken. |
| **Image** | Het volledige systeem van een bee of de satelliet. Een nieuwe image op een toestel zetten heet **flashen**. |

## Hoe je de afbeeldingen leest

De afbeeldingen zijn echte schermafbeeldingen van KweenB. Een gele cirkel met een nummer wijst een deel van het scherm aan. De lijst onder de afbeelding zegt wat elk nummer is.

Namen van knoppen en menu's staan in het **vet**, precies zoals op het scherm. Een menupad schrijven we zo: **File → Check for Updates…**

:::note
KweenB is in het Engels. De Nederlandse versie van deze handleiding houdt de namen van knoppen en menu's in het Engels, zodat ze overeenkomen met wat je ziet.
:::
