---
description: "Använd tillgängliga diagnostiker för att planera nästa steg."
icon: magnifying-glass
---

> [English source](../../../mrk-doctor/diagnostics/incident-investigation.md) · [Language home](../../README.md) · Machine-translated edition


<a id="investigate-a-problem"></a>
# Undersök ett problem

1. Bekräfta vad spelarna upplever och notera när det började.
2. Kör `/doctor status` och `/doctor incidents`.
3. Öppna händelsen i instrumentpanelen och läs de tillgängliga detaljerna och föreslagna kontrollerna.
4. Jämför tidpunkten med senaste ändringar [recent changes](../changes/change-tracker.md).
5. Läs relevanta konsolfel och kolla in den berörda pluginens egen dokumentation.
6. Spara en [-rapport](../reports/creating-reports.md) innan du byter server.
7. Gå tillbaka, gör en omvänd förändring och observera resultatet.

{% hint style="warning" %}
Behandla ett misstänkt plugin och alla förtroende indikationer som en utredningsvägledning, inte en garanti. MRK Doctor utför inte reparationer, plugin uppdateringar eller rollback för dig.
{% endhint %}
