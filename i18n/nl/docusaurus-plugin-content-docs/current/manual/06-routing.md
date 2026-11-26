# Routing

De pagina **Routing** bepaalt welk kanaal van je audiosoftware naar welke bee gaat. Ze werkt als een patchpaneel: kanalen links, bees rechts, kabels ertussen.

![De pagina Routing](/img/manual/routing.png)

1. **Channels.** Hoeveel kanalen de pagina toont: 20, 32 of alle 64.
2. **All bees: mono of stereo.** Stelt alle bees in één keer in. Een mono bee speelt zijn ene kanaal aan beide kanten. Een stereo bee heeft een linker- en een rechterkanaal.
3. **Cords.** Snelle manieren om alle kabels in één keer in te pluggen (zie hieronder).
4. **Een kanaal** van het geluidsapparaat. Het balkje ervoor beweegt wanneer je audiosoftware op dat kanaal speelt.
5. **Een kabel.** Klik op een kabel om hem te selecteren (hij licht op) en druk op Delete om hem uit te pluggen. Een klik op het bolletje in het midden plugt hem meteen uit.
6. **De ingang van een bee.** Een mono bee heeft één ingang, **sound**. Een stereo bee heeft er twee: **left** en **right**.
7. **mono / stereo** alleen voor deze bee. Klik om te wisselen.

## Het geluidsapparaat "KweenB Swarm"

KweenB brengt zijn eigen geluidsapparaat mee, met de naam **KweenB Swarm**. Het heeft 64 kanalen. Je audiosoftware speelt ernaar alsof het een geluidskaart is, en KweenB geeft het geluid door aan de bees.

De eerste keer toont de pagina Routing een kaart **KweenB Swarm is not installed yet** met een knop **Install**. Het installeren vraagt het wachtwoord van je Mac, en het geluid van de Mac stopt even. Je doet dit maar één keer per computer.

Wanneer een nieuwere KweenB een nieuwere versie van het apparaat meebrengt, toont dezelfde kaart **Update**. Klik eerst op Disconnect.

Daarna, in je audiosoftware:

1. Open de audio-instellingen.
2. Kies **KweenB Swarm** als uitgangsapparaat.
3. Stuur elk spoor naar het kanaal van de bee waarvoor het bedoeld is.

:::note
Kies je een ander apparaat bij **Audio device** op de pagina Settings, dan luistert KweenB naar dat apparaat. De pagina Routing toont dan de kanalen van dat apparaat.
:::

## Kabels pluggen

- **Inpluggen:** sleep van het bolletje van een kanaal naar de ingang van een bee.
- **Uitpluggen:** klik op een kabel zodat hij oplicht en druk op Delete (of Backspace). Of klik op het bolletje in het midden van de kabel.

De drie knoppen bij **Cords** doen het voor alle bees in één keer:

| Knop | Wat hij doet |
| --- | --- |
| **in order** | De eerste bee krijgt kanaal 1, de volgende bee het volgende vrije kanaal. Een stereo bee neemt twee kanalen. |
| **by number** | Kanaal 7 gaat naar bee 7, enzovoort. Alleen aanwezig wanneer geen enkele bee stereo is. |
| **unplug all** | Trekt elke kabel uit. Geen enkele bee krijgt geluid van je audiosoftware. |

Terwijl de bees streamen, werkt een kabel die je verplaatst meteen.

## Mono en stereo

Als je een bee tussen mono en stereo wisselt terwijl hij streamt, is die bee enkele seconden stil: zijn stream start opnieuw met het andere aantal kanalen.

## Goed om te weten

- De pagina toont alleen de **actieve** bees. Staat er "There are no bees in use", kies dan bees op de pagina Swarm.
- De balkjes tonen alleen het geluid van je audiosoftware. Geluiden die je triggert, spelen op de bees zelf en zie je hier niet.
- Zegt KweenB dat het apparaat minder kanalen heeft dan een kabel nodig heeft, dan krijgt die bee geen geluid. Zijn kabel komt terug wanneer je een apparaat met genoeg kanalen kiest.
