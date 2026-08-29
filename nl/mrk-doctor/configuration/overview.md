---
description: "Stel de instellingen aan zonder de installatie te verstoren."
icon: sliders
---

> [English source](../../../mrk-doctor/configuration/overview.md) · [Language home](../../README.md) · Machine-translated edition


<a id="configuration"></a>
# Configuratie

Bewerk `plugins/MRKDoctor/config.yml` met een YAML-bewuste teksteditor. Maak eerst een back-up en bewaren de indentatie.

De standaardconfiguratie is een goed uitgangspunt. Verander alleen de instellingen die je nodig hebt, zoals het serverlabel, monitoringintervallen, dashboardtoegang of het bewaren van geschiedenis.

Dashboard-credentials die worden gegenereerd door `/doctor dashboard setup` worden onmiddellijk actief. Herstarten na het veranderen van bindadressen, poorten, geactiveerde staat of monitoringinstellingen. `/doctor reload` is geen vervanging voor een volledige herstarten van die verbinding en levenscycluswijzigingen.

Gebruik de [configuratieverwijzing](../reference/configuration.md) voor de Universele editie. Kopieer geen extra instellingen uit een andere editie en neem aan dat ze nieuwe functies zullen mogelijk maken.
