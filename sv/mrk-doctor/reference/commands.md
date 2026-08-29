---
description: "Kommandon tillgängliga för serveradministratörer."
icon: terminal
---

> [English source](../../../mrk-doctor/reference/commands.md) · [Language home](../../README.md) · Machine-translated edition


<a id="commands"></a>
# Kommandon

Alla kommandon kräver `mrkdoctor.view`. Tillåtelser som standard för operatörer. Se [tillåtelser](permissions.md) innan du delegerar åtkomst.

| Kommandot | Användning | Ytterligare tillstånd |
| --- | --- | --- |
| `/doctor` | Öppna spelinsiktningen och visa status i konsolen. | — |
| `/doctor status` | Visa aktuell hälso- och driftsinformation. | — |
| `/doctor health` | Visa samma hälsouppfattning. | — |
| `/doctor incidents` | Lista öppna incidenter. | — |
| `/doctor changes` | Visa nyligen spårade förändringar. | — |
| `/doctor timeline` | Visa listan över nyligen ändrade ändringar i Universal. | — |
| `/läkare tillstånd <player> <node>` | Check an online player's permission. | — |
| `/doktor kommando <player> <command>` | Check a command's owner and access. | — |
| `/doctor snapshot` | Spara ett diagnostiskt ögonblick. | — |
| `/doctor report` | Skapa en rapportfil. | `mrkdoctor.report` |
| `/doctor dashboard` | Visa den konfigurerade inbäddade instrumentpanelen adress. | `mrkdoctor.dashboard` |
| `/doctor dashboard setup` | Skapa och aktivera omedelbart ett nytt instrumentpanel. | `mrkdoctor.dashboard` |
| `/doctor reload` | Överla konfigurationsvärden; vissa ändringar kräver fortfarande omstart. | `mrkdoctor.admin` |

Use exact online player names for player checks. The address printed by `/doctor dashboard` uses the configured bind address; replace `127.0.0.1` or `0.0.0.0` with the public hostname when opening it remotely.

Den optimerade Paper -utgåvan erbjuder dessutom `/doctor-plugin <plugin>` för en sammanfattning av ett plugin.

`/doctor trace` visar endast ett tillgänglighetsanmällande i denna version; det startar inte spårning. Det finns inga automatiska uppdateringar eller rollback-kommandon.
