---
description: "Hou de diagnostische toegang privé."
icon: shield-halved
---

> [English source](../../../mrk-doctor/dashboard/security.md) · [Language home](../../README.md) · Machine-translated edition


<a id="dashboard-security"></a>
# Beveiliging van het dashboard

- Deel alleen toegang met vertrouwde beheerders.
- HTTPS gebruiken voor het web dashboard en beveiligen verbindingen met de diensten.
- Houd de standaard lokale bind bij wanneer diensten op dezelfde host worden uitgevoerd.
- Bescherm gehoste toewijzingen met firewall en proxy regels.
- Draai de token met `/doctor dashboard setup` als deze wordt blootgesteld.
- Bekijk rapporten en screenshots voordat je ze naar iemand stuurt.

Leg nooit een dashboard token in een publieke issue, Discord-kanaal of configuratie voorbeeld. Als u geen webtoegang nodig hebt, deactiveer `doctor.dashboard.enabled` en start opnieuw.
