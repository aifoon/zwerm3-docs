# Instellingen

De pagina **Settings** bevat de instellingen van de stream. De standaardwaarden zijn zo gekozen dat ze goed werken; verander ze alleen wanneer je een reden hebt.

![De pagina Settings](/img/manual/settings-audio.png)

Een veld wordt bewaard zodra je erbuiten klikt. Wijzigingen worden gebruikt de volgende keer dat je op **Connect** klikt. Klik dus eerst op Disconnect, verander, en verbind opnieuw.

## Stream

Deze drie gelden voor deze computer en voor elke bee.

1. **Sample rate.** Het aantal geluidssamples per seconde. Standaard: **44100**. Stel je audiosoftware in op dezelfde waarde.
2. **Block size.** Het geluid reist in kleine blokken; dit is de grootte van één blok. Standaard: **512**. Kleiner geeft minder vertraging (latency) maar vraagt meer van de wifi en de computers; groter is rustiger maar trager.
3. **Bit depth.** De precisie van elke sample. Standaard: **16**. Hogere waarden nemen meer plaats in op de wifi.

## Bees

Het getal rechtsboven op deze kaart is de vertraging die deze instellingen geven.

4. **Network buffer (ms).** De reserve aan geluid die elke bee houdt, in milliseconden. Ze overbrugt korte haperingen van de wifi. Standaard: **30**, tussen 5 en 500. Verhoog ze wanneer de Monitor veel late pakketten toont; verlaag ze wanneer je minder vertraging nodig hebt en de wifi goed is.
5. **Sound card buffer (blocks).** Hoeveel blokken de geluidskaart van een bee klaarhoudt. Standaard: **3**, tussen 2 en 8. Verhoog dit wanneer de Monitor toont dat de geluidskaart niet kon volgen (Sound card dropouts).

## KweenB

6. **Audio device.** Het geluidsapparaat waarnaar KweenB luistert. Standaard: **KweenB Swarm (64 channels)**, het apparaat waarnaar je audiosoftware speelt. Je kunt in de plaats een andere ingang van de computer kiezen, bijvoorbeeld een geluidskaart met een mengtafel eraan. Een apparaat dat eerder gekozen was maar nu niet verbonden is, staat er met "(not connected)".
7. **Send each packet (times).** Hoe vaak elk stukje geluid verstuurd wordt. Standaard: **1**, tussen 1 en 5. Met 2 wordt elk stukje twee keer verstuurd, zodat je een verloren stukje niet mist, maar de stream neemt dan dubbel zoveel plaats in op de wifi.

## Wat verander je wanneer

| Je merkt | Probeer |
| --- | --- |
| Tikjes, en de Monitor toont late pakketten | Verhoog **Network buffer**, bijvoorbeeld van 30 naar 60. Controleer **Wi-Fi in use** op de Monitor. |
| Tikjes, en de Monitor toont dat de geluidskaart niet kon volgen (Sound card dropouts) | Verhoog **Sound card buffer** van 3 naar 4. |
| Te veel vertraging, de wifi is goed | Verlaag **Network buffer**, of halveer **Block size**. |
| De wifi is te vol | Gebruik minder stereo bees, hou **Bit depth** op 16 en **Send each packet** op 1. |

Elke wijziging van deze instellingen verandert de vertraging. De nieuwe waarde staat meteen in de bovenbalk.

## Positiebepaling

Het tweede tabblad, **Positioning**, heeft één instelling voor het optionele systeem voor positiebepaling. Zie [Positiebepaling](./15-positioning.md).

## Instellingen meenemen naar een andere computer

**File → Export → Settings…** bewaart de instellingen als een bestand. **File → Import → Settings…** leest zo'n bestand in op een andere computer. Hetzelfde bestaat voor de lijst van bees: **File → Export → Bees…** en **File → Import → Bees…**
