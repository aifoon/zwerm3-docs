# Satelliet

De satelliet is een kleine computer (een Raspberry Pi 4) die met een netwerkkabel aan de router hangt. Hij biedt dezelfde triggerpagina aan als KweenB, maar **zonder de computer**. Hij is gemaakt voor wandelingen en installaties waarbij de laptop achterblijft.

## Wat hij wel en niet doet

- Hij **triggert** de scènes die op de bees staan, stelt hun volume en klank in, en bewaart composities.
- Hij streamt **niet**. Om te streamen heb je KweenB nodig.
- Hij werkt op zichzelf. KweenB is alleen nodig om hem te vullen en om terug te halen wat erop gemaakt is.

## Opstellen

1. Verbind de satelliet met de router met een netwerkkabel. Hij gebruikt geen wifi.
2. Geef hem stroom. Na ongeveer een minuut is hij klaar.
3. Zet je telefoon of tablet op de wifi van de zwerm.
4. Open de browser en ga naar **http://satellite.local**

Er is geen wachtwoord en je hoeft niets te installeren.

:::tip
Je mag de stekker van de satelliet op elk moment uittrekken. Wat hij van KweenB kreeg en de composities die erop gemaakt zijn, blijven bewaard.
:::

## Vullen vanuit KweenB

De satelliet moet je bees, scènes en composities kennen. KweenB stuurt ze.

1. Zorg dat de computer met KweenB en de satelliet op hetzelfde netwerk zitten.
2. Kies in KweenB **File → Send to Satellite…**
3. Klik op **Send to satellite**.

![Send to satellite](/img/manual/send-to-satellite.png)

KweenB zegt daarna wat de satelliet nu heeft: hoeveel bees, scènes en composities.

Wat er verstuurd wordt:

- de **actieve** bees van KweenB (kies dus eerst de juiste bees)
- de scènes op die bees
- alle composities

De geluiden zelf worden niet verstuurd: die staan op de bees.

Doe dit opnieuw telkens wanneer er iets veranderd is: andere bees in gebruik, nieuwe scènes op de bees, of nieuwe composities.

## De pagina van de satelliet

De pagina is die uit [Remote interface](./10-remote-interface.md), met de titel **kweenb-S**. Twee dingen zijn extra.

### Start Triggering

Voor de bees kunnen spelen, moeten ze klaargezet worden. Met KweenB doe je dat met Connect. Op de satelliet:

1. Tik linksboven op de titel **kweenb-S**.
2. Tik op **Start Triggering**.

![De instellingen van de satelliet](/img/manual/satellite-settings.png)

1. **Start Triggering** zet alle bees klaar om scènes te spelen. Dit kan tot anderhalve minuut duren. Daarna zegt de pagina hoeveel bees gestart zijn, en welke niet en waarom.

Doe dit één keer nadat de bees aangezet zijn.

:::warning
**Start Triggering** stopt een stream. Een bee die op dat moment vanuit KweenB streamt, wordt uit de stream gehaald en in de plaats klaargezet voor triggers.
:::

### Wijzigingen terugsturen naar KweenB

Wanneer je op de satelliet composities gemaakt, veranderd of verwijderd hebt, verschijnt op de pagina single bees een knop **Send … changes to KweenB**. Tik erop wanneer KweenB open is op een computer op hetzelfde netwerk. KweenB neemt de wijzigingen over en stuurt zijn eigen toestand terug; de pagina laadt daarna vanzelf opnieuw.

Je kunt dit ook vanuit KweenB starten met **File → Send to Satellite…**: dat haalt altijd eerst de wijzigingen van de satelliet op.

Wat er met een compositie gebeurt:

| Op de satelliet | In KweenB |
| --- | --- |
| Nieuw | Ze wordt toegevoegd. |
| Veranderd | Ze wordt bijgewerkt. |
| Veranderd, en ook veranderd in KweenB | Beide blijven behouden. Die van de satelliet krijgt "(satellite)" achter haar naam. |
| Verwijderd | Ze wordt ook in KweenB verwijderd, tenzij ze daar sindsdien veranderd is. |

Zegt de satelliet **KweenB was not found**, open dan KweenB op een computer op dit netwerk en probeer opnieuw. Zegt hij dat KweenB op meer dan één computer open is, sluit het dan overal behalve op één.

## Goed om te weten

- **De satelliet toont niet of een bee aanstaat.** Hij behandelt elke bee als aanwezig. Gebruik de Monitor van KweenB om de zwerm te controleren voor een wandeling.
- **De pagina van elke telefoon staat op zichzelf.** Zie [Remote interface](./10-remote-interface.md).
- **Alles wat niet naar KweenB gestuurd is, bestaat alleen op de satelliet.** Stuur de wijzigingen terug voor je de satelliet opnieuw flasht.

## Bijwerken en flashen

De software van de satelliet werk je bij vanuit KweenB, net als die van de bees: zie [Updates](./13-updates.md). Een volledig nieuw systeem zet je op zijn SD-kaart door te flashen: zie [Flashen en nieuwe speakers](./14-flashing.md).
