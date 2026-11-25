# Flashen en nieuwe speakers

**Flashen** zet een volledig nieuw systeem (een **image**) op een bee of op de SD-kaart van de satelliet. Je hebt het nodig voor een nieuwe of herstelde speaker, wanneer een update om een nieuwere image vraagt, of wanneer een toestel niet meer start.

Flashen met KweenB werkt op een Mac.

:::warning
Flashen wist alles op het toestel. Voor een bee: maak eerst een back-up van zijn geluiden ([Back-up en herstellen](./12-backup-restore.md)). Voor een satelliet: stuur eerst zijn wijzigingen naar KweenB ([Satelliet](./11-satellite.md)).
:::

## De image ophalen

De images staan in een beveiligde map van aifoon. **File → Download Assets…** opent die in de browser; je hebt het wachtwoord van aifoon nodig. Download:

- de image van de speaker (`zwerm3-speaker-….img.gz`) voor bees
- de image van de satelliet (`zwerm3-satellite-….img.gz`) voor de satelliet

KweenB onthoudt de image die je het laatst gebruikt hebt.

## Een speaker flashen

Je hebt een USB-kabel nodig tussen de speaker en de Mac.

### Stap 1: kies de image

Kies **File → Flash → A Speaker…**

![Een speaker flashen, stap 1](/img/manual/flash-speaker-1.png)

1. **De image** die op de speaker gezet wordt.
2. **Choose another…** kiest een ander bestand.
3. **Next.**

### Stap 2: sluit de speaker aan

Doe wat KweenB toont:

1. Zet de speaker uit en plaats de jumper.
2. Verbind de speaker met deze computer met een USB-kabel.
3. Zet de speaker aan.

![Een speaker flashen, stap 2](/img/manual/flash-speaker-2.png)

KweenB zoekt de speaker en gaat vanzelf verder wanneer het hem vindt. Gebeurt er na een tijdje niets, controleer dan de jumper, steek de kabel rechtstreeks in de computer (niet via een hub), en zet de speaker uit en weer aan.

### Stap 3: wissen en flashen

KweenB toont wat er gewist wordt en vraagt **Erase this speaker and flash it?** Klik op **Erase and flash**. Je Mac vraagt je wachtwoord.

KweenB schrijft de image en controleert ze. Dit duurt enkele minuten. Laat de speaker aan en de kabel aangesloten.

### Stap 4: klaar

Wanneer KweenB **Done. The speaker is flashed.** zegt:

1. Haal de jumper weg.
2. Trek de USB-kabel uit.
3. Zet de speaker aan.
4. Klik op **Set up this speaker** om hem zijn nummer te geven.

## Een nieuwe speaker instellen

Een pas geflashte speaker heeft nog geen nummer. **File → New Speaker…** (of **Set up this speaker** na het flashen) geeft hem er een.

![Een nieuwe speaker instellen](/img/manual/new-speaker.png)

De stappen:

1. **Wacht tot KweenB de speaker vindt.** Hij heeft ongeveer een minuut nodig nadat hij is aangezet. Klik op **Set up** ernaast. Zet telkens één nieuwe speaker aan: zo hou je ze makkelijk uit elkaar.
2. **Kies zijn nummer,** van 1 tot 99. KweenB stelt het laagste vrije nummer voor. Twee speakers kunnen niet hetzelfde nummer hebben. Kies je het nummer van een bee die uitstaat, dan neemt de nieuwe speaker zijn plaats in.
3. **Put its sounds back?** KweenB stelt de back-up voor van de bee met dat nummer, op deze computer of in de cloud. Je kunt ook de geluiden van een andere bee kiezen, of zonder geluiden starten.
4. **Wacht.** KweenB geeft de speaker zijn nummer, wacht tot hij terugkomt, en zet de geluiden erop. Laat de speaker aanstaan.

Wanneer het klaar is, is de speaker een bee in je zwerm.

## Een satelliet flashen

De satelliet bewaart zijn systeem op een SD-kaart van 8 GB of meer. Je hebt een kaartlezer nodig.

![Een satelliet flashen, stap 1](/img/manual/flash-satellite-1.png)

De stappen:

1. Kies **File → Flash → A Satellite…**, kies de image van de satelliet en klik op **Next**.
2. Steek de SD-kaart in de kaartlezer. Bij een kaartlezer op een USB-poort steek je de kaart erin **nadat** KweenB is beginnen zoeken.
3. Controleer de grootte van de kaart die KweenB toont en klik op **Erase and flash**. Je Mac vraagt je wachtwoord.
4. Wacht tot KweenB **Done. The card is flashed.** zegt.
5. Steek de kaart in de Raspberry Pi, verbind hem met de router met een netwerkkabel en zet hem aan.
6. Klik na ongeveer een minuut op **Send to Satellite…** om hem te vullen.

## Als flashen niet lukt

| Wat je ziet | Wat je doet |
| --- | --- |
| KweenB blijft de speaker zoeken | Controleer de jumper. Steek de USB-kabel rechtstreeks in de computer. Zet de speaker uit en weer aan. |
| KweenB blijft de kaart zoeken | Duw de kaart erin tot ze klikt. Een microSD-kaart in een houder moet er helemaal in zitten. Probeer een andere lezer. |
| "This is not an image for a speaker" | Kies een bestand dat eindigt op `.img.gz`. |
| "This is the image of a speaker" (bij het flashen van een satelliet), of omgekeerd | Je koos de image van het andere toestel. Kies de juiste. |
| De kaart kon niet beschreven worden | Controleer of de kaart niet vergrendeld is (het kleine schuifje aan de zijkant). |
| Het stopte halverwege | Begin opnieuw. Een toestel dat maar half geflasht is, start niet tot het volledig geflasht is. |
