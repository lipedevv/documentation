---
description: "Unterstützte Kunden-Einstellungen für die Universal-Ausgabe."
icon: sliders
---

> [English source](../../../mrk-doctor/reference/configuration.md) · [Language home](../../README.md) · Machine-translated edition


<a id="configuration-reference"></a>
# Konfigurationsreferenz

Diese Referenz umfasst `plugins/MRKDoctor/config.yml` in der Universal-Ausgabe. Neustart nach Bearbeitung, es sei denn, Sie haben das Neustellverhalten der Einstellung überprüft.

| Einrichtung | Vorgegeben | Zweck |
| --- | --- | --- |
| `doctor.server-id` | `standalone` | Kennzeichnung für diesen Server. |
| `doctor.performance.healthy-sample-seconds` | `15` | Überwachungsintervall während des normalen Betriebs. |
| `doctor.performance.incident-sample-seconds` | `5` | Überwachungsintervall während eines Vorfalls. |
| `doctor.changes.enabled` | `true` | Einführung der Überwachung der jüngsten Veränderungen. |
| `doctor.changes.interval-seconds` | `30` | Wechseluntersuchungsintervall; verwenden Sie mindestens 10 Sekunden. |
| `doctor.changes.max-file-bytes` | `1048576` | Größengrenze für detaillierte Textdateienvergleiche. |
| `doctor.dashboard.enabled` | `true` | Aktivieren Sie die Dashboard-Verbindung. |
| `doctor.dashboard.bind` | `0.0.0.0` | Listen on the server allocation. Use `127.0.0.1` when access must go through a same-host reverse proxy. |
| `doctor.dashboard.port` | `7854` | Ein einheitlicher Port, der von dem eingebetteten Dashboard und seiner authentifizierten API verwendet wird. |
| `doctor.dashboard.cors-origin` | `http://127.0.0.1:7854` | Optional erlaubte Herkunft für fortgeschrittene Proxy-Input-Möglichkeiten; Zugriff mit gleicher Herkunft erfordert keine separate Frontend-Adresse. |
| `doctor.dashboard.token-hash` | Leere | Verwaltet von `/doctor dashboard setup`; nicht manuell bearbeiten. |
| `storage.raw-retention-hours` | `24` | Aufbewahrungsfrist für detaillierte Metriken. |
| `logging.debug` | `false` | Verlassen Sie die Daten nach Standard; Sie ermöglichen keine zusätzliche Logging in dieser Version. |

Verwenden Sie positive Überwachungsintervalle und einen gültigen Dashboard-Port. Durch die Verringerung von Intervallen wird die Überwachungsarbeit erhöht; erst werden Änderungen auf einem Staging-Server getestet.

{% hint style="warning" %}
Passen Sie das Dashboard-Token nicht in Konfigurationsbeispiele ein. Erstellen Sie durch den Befehl Anmeldeinformationen und schützen Sie den Diagnosticport.
{% endhint %}
