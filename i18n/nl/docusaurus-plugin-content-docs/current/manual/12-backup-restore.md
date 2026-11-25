# Back-up en herstellen

De geluiden op de bees zijn waardevol: ze opnieuw uploaden kost tijd, en een bee kan stukgaan. KweenB kan een kopie van alle geluiden bewaren op twee plaatsen:

- **op deze computer**, in de map **KweenB Backups** in je map Documenten
- **in de cloud** van aifoon, zodat elke computer van aifoon aan dezelfde kopie kan

Een back-up bevat de scènes van elke bee, per bee.

## Een back-up maken op deze computer

Kies **File → Back Up → Back Up to this Computer…**

Het start meteen en leest de geluiden van elke bee die aanstaat. De eerste keer kan dit een tijdje duren; de volgende keer worden alleen nieuwe en veranderde geluiden bewaard. **Stop** breekt het af; wat nog niet bewaard was, wordt de volgende keer bewaard.

Aan het einde zegt KweenB welke bees bewaard zijn en in welke map. Een bee die uitstond, wordt ook genoemd: zet hem aan en probeer opnieuw.

## De back-upsleutel

Om de cloud te gebruiken, heeft KweenB een **back-upsleutel** nodig: een bestand dat eindigt op `.kweenbkey`. Je krijgt hem van wie bij aifoon voor de back-ups zorgt. Zonder sleutel zijn de cloudkeuzes in het menu grijs.

1. Kies **File → Install a Backup Key…**
2. Klik op **Choose a backup key…** en kies het bestand.
3. Heeft de sleutel een wachtwoordzin, typ die dan en klik op **Activate**.

KweenB zegt daarna **The backup key is installed.** Je doet dit één keer per computer.

:::note
Met dezelfde sleutel kan KweenB ook nieuwe firmware vinden voor de bees en de satelliet. Zie [Updates](./13-updates.md).
:::

### De sleutel aan iemand anders geven

Open **File → Back Up → Back Up to the Cloud…** en klik op **Backup key…** Daar kun je de sleutel als een bestand bewaren voor een andere computer.

Geef het bestand een **wachtwoordzin** (passphrase) en bezorg die wachtwoordzin langs een andere weg dan het bestand (niet in dezelfde mail). Wie het bestand en de wachtwoordzin heeft, kan de back-ups lezen en veranderen.

## Een back-up maken in de cloud

Kies **File → Back Up → Back Up to the Cloud…** De computer moet tegelijk aan de bees en aan het internet kunnen.

![Een back-up maken in de cloud](/img/manual/backup-cloud.png)

1. **Eén regel per bee:** hoeveel geluiden hij heeft, wanneer ze gelezen zijn, en of de cloud bijgewerkt is.
2. **Backup key…** toont de sleutel en laat je een andere installeren of hem bewaren voor iemand anders.
3. **Back up** leest de bees die aanstaan en werkt de cloud bij.

Staat er geen enkele bee aan, maar heeft deze computer geluiden die nog niet in de cloud staan, dan staat op de knop **Send to the cloud**. Heeft de cloud geluiden die deze computer niet heeft, dan is er ook een knop **Get from the cloud**.

:::tip
Op tournee zitten de bees en het internet vaak op verschillende netwerken. Doe het dan in twee stappen: **Back Up to this Computer** terwijl je bij de bees bent, en **Back Up to the Cloud → Send to the cloud** later, wanneer de computer internet heeft.
:::

Een geluid dat van een bee verwijderd is, blijft in de cloud, maar hoort niet meer bij de back-up van die bee.

## Herstellen

Herstellen zet bewaarde geluiden terug op bees. Kies **File → Restore → Restore from the Cloud…** of **Restore from this Computer…**

![Geluiden herstellen](/img/manual/restore.png)

1. **Vink de bees aan** die je wilt herstellen. Een bee die uitstaat, kun je niet aanvinken.
2. **Welke back-up.** Normaal de back-up van diezelfde bee. Je kunt ook de back-up van een andere bee kiezen, om van deze bee een kopie daarvan te maken.
3. **Make the bees exactly like their backup.** Is dit aangevinkt, dan worden geluiden die op de bee staan maar niet in de back-up zitten ervan verwijderd. Is het niet aangevinkt, dan blijven ze staan.

Klik op **Restore … bees**. KweenB werkt de bees een voor een af en zegt aan het einde wat elke bee gekregen heeft.

:::warning
Is **Make the bees exactly like their backup** aangevinkt, dan worden geluiden die alleen op de bee staan ervan verwijderd. Maak eerst een back-up als je niet zeker bent.
:::

## Een nieuwe bee krijgt zijn geluiden automatisch

Wanneer je een nieuwe of pas geflashte speaker instelt, vraagt KweenB of het zijn geluiden moet terugzetten, en stelt het de back-up voor van de bee met dat nummer. Zie [Flashen en nieuwe speakers](./14-flashing.md).
