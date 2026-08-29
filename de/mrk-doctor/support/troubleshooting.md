---
description: "Praktische Kontrollen für häufige Probleme."
icon: screwdriver-wrench
---

> [English source](../../../mrk-doctor/support/troubleshooting.md) · [Language home](../../README.md) · Machine-translated edition


<a id="troubleshooting"></a>
# Fehlerbehebung

<a id="plugin-will-not-start"></a>
## Plugin wird nicht gestartet

Bestätigen Sie, dass Sie die richtige Ausgabe und nur eine MRK Doctor JAR installiert haben. Überprüfen Sie die Java-Anforderungen des Servers, freien Festplattenplatz, Dateierlaubnisse und den ersten relevanten Konsolenfehler. Restart normal nach der Korrektur des Problems.

<a id="server-is-lagging-or-shows-errors"></a>
## Server ist zu spät oder zeigt Fehler an

Erfassen Sie, wann das Problem begann. Überprüfen Sie `/doctor status`, offene Vorfälle und jüngste Änderungen. Überprüfen Sie die Fehler der Konsolen des betroffenen Plugins, dann erstellt [einen Bericht](../reports/creating-reports.md). Testen Sie eine reversible Änderung nach einer Zeit mit einer Sicherung.

<a id="dashboard-will-not-connect"></a>
## Das Dashboard wird nicht verbunden

Bestätigen Sie, dass MRK Doctor aktiviert ist und die konfigurierte eingebettete Dashboard-Adresse öffnen. Überprüfen Sie die Bind-Adresse, die einzelne Hosting-Zuteilung, die Firewall, die Proxy-Route und den konfigurierten Port. Ein neu erzeugtes Token wird sofort aktiviert. Deaktivieren Sie niemals die Sicherheit oder stellen Sie einen unbeschränkten Port als Lösung dar.

<a id="a-player-cannot-use-a-command"></a>
## Ein Spieler kann keinen Befehl verwenden.

Check the exact command, the player's permission, world restrictions, and the owning plugin's configuration. Follow [permission checks](../permissions/permission-doctor.md).

<a id="memory-keeps-increasing"></a>
## Das Gedächtnis wächst immer weiter

Beobachten Sie die Nutzung im Laufe der Zeit und vergleichen Sie sie mit der Aktivität des Spielers. Ein hohes Lies ist kein Beweis für ein Leck oder einen Pluginbesitz.

<a id="reports-or-history-are-unavailable"></a>
## Berichte oder Geschichte nicht verfügbar

Überprüfen Sie den freien Festplattspaß und die Les- und Schreibberechtigungen für `plugins/MRKDoctor/`. Haltet den Server und sichern Sie den kompletten Ordner ab, bevor Sie Reparaturen anfangen. Löschen Sie keine Datendateien, um ein Problem ohne eine verifizierte Sicherung zu beheben.

<a id="monitoring-overhead-seems-high"></a>
## Die Überwachungskosten scheinen hoch zu sein.

Return monitoring intervals to their defaults, avoid tracking unnecessarily large text files, and compare performance under similar load. If it persists, send relevant logs and settings through [support](../../support.md), without credentials.
