---
description: "Byta ut en befintlig MRK Doctor -installation."
icon: arrows-rotate
---

> [English source](../../../mrk-doctor/getting-started/updating.md) · [Language home](../../README.md) · Machine-translated edition


<a id="updating"></a>
# Uppdatering

1. Bakപ്പ് server och den kompletta `plugins/MRKDoctor/` -mappen.
2. Stäng av servern normalt.
3. Ersätt den gamla JAR med den nya utgåvan av samma utgåva.
4. Övervaka release noterna och jämföra den levererade konfigurationen med dina befintliga inställningar.
5. Start servern och kolla `/doctor status`, instrumentpanelen och konsolen.

{% hint style="warning" %}
Ett diagnostiskt snapshot är inte en säkerhetskopiering. Anta inte att saknade konfigurationsalternativ automatiskt läggs till en befintlig fil.
{% endhint %}
