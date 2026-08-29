---
description: "Befehle für Serveradministratoren."
icon: terminal
---

> [English source](../../../mrk-doctor/reference/commands.md) · [Language home](../../README.md) · Machine-translated edition


<a id="commands"></a>
# Befehle

Alle Befehle erfordern `mrkdoctor.view`. Berechtigungen sind Standard für die Betreiber. Siehe [Berechtigungen](permissions.md) vor der Delegierung von Zugriff.

| Kommando | Verwendung | Zusätzliche Genehmigung |
| --- | --- | --- |
| `/doctor` | Öffnen Sie die Spielübersicht; zeigen Sie den Status in der Konsole. | — |
| `/doctor status` | Zeigen Sie aktuelle Gesundheits- und Laufzeitinformationen an. | — |
| `/doctor health` | Zeigen Sie die gleiche Gesundheitsübersicht. | — |
| `/doctor incidents` | Liste offene Vorfälle. | — |
| `/doctor changes` | Zeigen Sie die jüngsten Änderungen. | — |
| `/doctor timeline` | Zeigen Sie die Liste der jüngsten Änderungen in Universal. | — |
| `/Arztgenehmigung <player> <node>` | Check an online player's permission. | — |
| `/arztbefehl <player> <command>` | Check a command's owner and access. | — |
| `/doctor snapshot` | Speichern Sie einen Diagnose-Snapshot. | — |
| `/doctor report` | Erstellen Sie eine Berichtsdatei. | `mrkdoctor.report` |
| `/doctor dashboard` | Anzeigen Sie die konfigurierte eingebettete Dashboard-Adresse. | `mrkdoctor.dashboard` |
| `/doctor dashboard setup` | Erstellen und aktivieren Sie sofort eine neue Dashboard-Zuglaufe. | `mrkdoctor.dashboard` |
| `/doctor reload` | Neubau Konfigurationswerte; einige Änderungen erfordern noch einen Neustart. | `mrkdoctor.admin` |

Die von `/doctor dashboard` gedruckte Adresse verwendet die konfigurierte Bind-Adresse; ersetzen Sie `127.0.0.1` oder `0.0.0.0` mit dem öffentlichen Hostname, wenn Sie es ferngemäß öffnen.

Die optimierte Papier-Ausgabe bietet zusätzlich `/doctor-Plugin <plugin>` für eine Plugin-Übersicht. Dieser Befehl ist nicht in Universal verfügbar.

`/doctor trace` zeigt nur eine Verfügbarkeitsbenachrichtigung in dieser Version an; sie startet keine Spur. Es gibt keine automatischen Updates oder Rollback-Befehle.
