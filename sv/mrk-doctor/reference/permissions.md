---
description: "Ge personal bara den tillgång de behöver."
icon: user-shield
---

> [English source](../../../mrk-doctor/reference/permissions.md) · [Language home](../../README.md) · Machine-translated edition


<a id="permissions"></a>
# Tillstånd

Alla MRK Doctor -tillstånd är standard för operatörer. `mrkdoctor.view` krävs för varje kommandon, inklusive dem med ytterligare tillstånd.

| Tillstånd | Tillträde |
| --- | --- |
| `mrkdoctor.view` | Visa diagnostik, lista händelser och förändringar, skapa snapshots och utföra tillstånd/kommandokontroller. |
| `mrkdoctor.report` | Skapa rapporter. |
| `mrkdoctor.dashboard` | Visa anslutningsdetaljerna i instrumentpanelen och ersätta dess legitimation. |
| `mrkdoctor.admin` | Administrativ tillgång, inklusive omladdning och ovanstående tillstånd. |

{% hint style="warning" %}
Ge inte diagnostiska tillstånd till vanliga spelare. Rapporter och anslutningsinställningar kan innehålla känslig information.
{% endhint %}

De reserverade knuterna `mrkdoctor.trace`, `mrkdoctor.rollback`och `mrkdoctor.update` låser inte spårning, rollback eller automatiska uppdateringar i denna release.
