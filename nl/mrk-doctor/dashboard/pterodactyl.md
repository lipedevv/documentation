---
description: "Bereid de hosting toewijzingen voor het dashboard voor."
icon: cubes
---

> [English source](../../../mrk-doctor/dashboard/pterodactyl.md) · [Language home](../../README.md) · Machine-translated edition


# Pterodactyl hosting

Selecteer een beschikbare toewijzing in uw serverpaneel, zoals `7854`, en stel `doctor.dashboard.port` op die port. Er is geen aparte webtoepassing of tweede toewijzing nodig.

Gebruik het bind-adres dat door uw hostingnetwerk wordt vereist. Het localhost-adres van een container is niet bereikbaar vanaf een aparte container. Als uw host `0.0.0.0`nodig heeft, zorg ervoor dat de toewijzingen worden beschermd door zijn firewall of beveiligde proxy voordat u toegang toeneemt.

Het web dashboard wordt direct bediend door de plugin. Volg de eerste setup [initial setup](initial-setup.md), herstart na het veranderen van het bind-adres of de poort en test de pagina met het toegewezen adres.

{% hint style="warning" %}
Open geen onbeperkte poorten om een verbindingsprobleem op te lossen. Als je plan je geen toewijzing laat selecteren of blootstellen, kan alleen de hostingprovider een inkomende dashboardpoort toegankelijk maken; de plugin kan de hostfirewall niet omzeilen.
{% endhint %}
