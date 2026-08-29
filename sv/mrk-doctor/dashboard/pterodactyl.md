---
description: "Förbereda värdtilldelningar för instrumentpanelen."
icon: cubes
---

> [English source](../../../mrk-doctor/dashboard/pterodactyl.md) · [Language home](../../README.md) · Machine-translated edition


<a id="pterodactyl-hosting"></a>
# Pterodactyl -hosting

Välj en tillgänglig allokering i din serverpanel, till exempel `7854`, och ställa in `doctor.dashboard.port` på den porten.

Använd bindadressen som krävs av ditt värdnätverk. En behållare lokalhostadress kan inte nås från en separat behållare. Om din värd kräver `0.0.0.0`, se till att allokeringarna är skyddade av sin brandväggar eller säker proxy innan du aktiverar åtkomst.

Webb-dashboardet serveras direkt av plugin. Följ [första inställningen](initial-setup.md), starta om efter att ha ändrat bindadress eller port och testa sidan med den tilldelade adressen.

{% hint style="warning" %}
Öppna inte obegränsade porter för att lösa ett anslutningsproblem. Om din plan inte låter dig välja eller exponera en allokering, kan endast värdleverantören göra en inbound-dashboard-port tillgänglig. Plugin kan inte kringgå värdbrannväggen.
{% endhint %}
