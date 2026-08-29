---
description: "Anpassen Sie die Einstellungen, ohne die Installation zu stören."
icon: sliders
---

> [English source](../../../mrk-doctor/configuration/overview.md) · [Language home](../../README.md) · Machine-translated edition


<a id="configuration"></a>
# Konfiguration

Bearbeiten Sie `plugins/MRKDoctor/config.yml` mit einem YAML-bewussten Texteditor. Erst ein Backup und speichern Sie die Einzige.

Die Standardkonfiguration ist ein guter Ausgangspunkt. Ändern Sie nur die benötigten Einstellungen, wie z. B. das Server-Label, die Überwachungsintervalle, den Dashboard-Zugriff oder die Erhaltung der Historie.

Die Dashboard-Anmeldeinformationen, die von `/doctor dashboard setup` generiert werden, werden sofort aktiviert. Neustart nach Änderung von Bindadressen, Ports, aktiviertem Zustand oder Überwachungseinstellungen. `/doctor reload` ist kein Ersatz für einen vollständigen Neustart für diese Verbindungs- und Lebenszyklusänderungen.

Verwenden Sie die [Konfigurationsreferenz](../reference/configuration.md) für die Universal-Edition. Kopieeren Sie keine zusätzlichen Einstellungen aus einer anderen Edition und nehmen Sie an, dass sie neue Funktionen aktivieren.
