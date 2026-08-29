---
description: "Geben Sie dem Personal nur den Zugang, den er braucht."
icon: user-shield
---

> [English source](../../../mrk-doctor/reference/permissions.md) · [Language home](../../README.md) · Machine-translated edition


<a id="permissions"></a>
# Genehmigungen

Alle MRK-Doktor-Zulassungen sind Standard für die Betreiber. `mrkdoctor.view` ist für jeden Befehl erforderlich, auch für diejenigen mit einer zusätzlichen Genehmigung.

| Erlaubnis | Zugriff |
| --- | --- |
| `mrkdoctor.view` | Sie können Diagnostiken anzeigen, Vorfälle und Änderungen auflisten, Schnappschüsse erstellen und Berechtigungs-/Befehlsprüfungen durchführen. |
| `mrkdoctor.report` | Erstellen Sie Berichte. |
| `mrkdoctor.dashboard` | Anzeigen Sie die Verbindungsdaten des Dashboards und ersetzen Sie die Anmeldeinformationen. |
| `mrkdoctor.admin` | Verwaltungsgerechtigter Zugriff, einschließlich Neubau und die oben genannten Berechtigungen. |

{% hint style="warning" %}
Die Diagnoseerlaubnisse für normale Spieler dürfen nicht erteilt werden.
{% endhint %}

Die reservierten Knoten `mrkdoctor.trace`, `mrkdoctor.rollback`und `mrkdoctor.update` lassen in dieser Version keine Tracing-, Rollback- oder automatischen Updates freigeben.
