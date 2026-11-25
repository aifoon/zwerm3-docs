# Positiebepaling

KweenB kan werken met een systeem voor positiebepaling van **Pozyx**, dat tags door de ruimte volgt. KweenB kan dan het volume veranderen volgens de afstand: hoe dichter een tag bij een bee komt, hoe luider.

Dit onderdeel is optioneel en is niet nodig voor gewoon gebruik. Het is verborgen tot je het aanzet met **View → Positioning**.

## Verbinden

Open de pagina **Positioning**. Typ het adres van de Pozyx-broker in **Pozyx MQTT broker** (bijvoorbeeld `mqtt://127.0.0.1:1883`) en klik op **Connect**. KweenB zegt "Connected to MQTT broker". Om te stoppen, klik je op **Disconnect Pozyx**.

## De tabbladen

| Tabblad | Wat het toont |
| --- | --- |
| **Data** | De tags die het systeem ziet, met hun positie. |
| **Routing** | Welke tag bij welke actieve bee hoort. |
| **Modules** | **Volume Control:** kies de tag die het volume regelt, de bees waarop hij werkt, en de afstand waarbinnen hij werkt. |

Het volume wordt over OSC naar je audiosoftware gestuurd (naar **Reaper**, of naar een OSC-monitor), niet rechtstreeks naar de bees.

## De instelling

Op de pagina **Settings**, tabblad **Positioning**, stelt **Update Rate (ms)** in hoe vaak KweenB de posities verwerkt, van 50 tot 1000 milliseconden. Je kunt dit alleen veranderen terwijl Pozyx niet verbonden is.
