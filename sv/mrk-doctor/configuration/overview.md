---
description: "Anpassa inställningarna utan att störa installationen."
icon: sliders
---

> [English source](../../../mrk-doctor/configuration/overview.md) · [Language home](../../README.md) · Machine-translated edition


<a id="configuration"></a>
# Konfiguration

Redigera `plugins/MRKDoctor/config.yml` med en YAML-medveten textredigerare. Gör en säkerhetskopiering först och bevara intag.

Standardkonfigurationen är en bra utgångspunkt. Ändra bara de inställningar du behöver, till exempel serveretiketten, övervakningsintervall, instrumentpanelen eller lagring av historia.

Dashboard-uppgifter som genereras av `/doctor dashboard setup` aktiveras omedelbart. Start igen efter att ha ändrat bindadresser, portar, aktiverat tillstånd eller övervakningsinställningar. `/doctor reload` är inte ett ersättare för en fullständig start för dessa anslutnings- och livscykeländringar.

Använd [konfigurationsreferens](../reference/configuration.md) för den universella utgåvan. Kopia inte ytterligare inställningar från en annan utgåva och anta att de kommer att möjliggöra nya funktioner.
