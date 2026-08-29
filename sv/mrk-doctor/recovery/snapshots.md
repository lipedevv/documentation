---
description: "Ta diagnosinformation innan du gör ändringar."
icon: camera
---

> [English source](../../../mrk-doctor/recovery/snapshots.md) · [Language home](../../README.md) · Machine-translated edition


<a id="save-a-diagnostic-snapshot"></a>
# Spara ett diagnostiskt ögonblick

Rör `/doctor snapshot`. Kommandot rapporterar vägen för den genererade filen i `plugins/MRKDoctor/snapshots/`.

Håll en snabbbild när du undersöker ett problem eller innan du ändrar en pluginkonfiguration.

{% hint style="warning" %}
En snapshot är en diagnostisk rekord, inte en server säkerhetskopiering. Den kan inte återställa världar, plugin filer, konfiguration eller den fullständiga MRK Doctor data mapp. Behålla separata säkerhetskopieringar.
{% endhint %}
