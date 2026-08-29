---
description: "Halten Sie den Zugang zur Diagnose privat."
icon: shield-halved
---

> [English source](../../../mrk-doctor/dashboard/security.md) · [Language home](../../README.md) · Machine-translated edition


<a id="dashboard-security"></a>
# Dashboardsicherheit

- Geben Sie den Zugriff nur an vertrauenswürdige Administratoren.
- HTTPS für das Web-Dashboard und sichere Verbindungen zu seinen Diensten.
- Behalten Sie die Standard-Local-Bindung bei der Ausführung von Diensten auf demselben Host.
- Schützen Sie gehostete Zuweisungen mit Firewall und Proxy-Regeln.
- Drehen Sie das Token mit `/doctor dashboard setup` um, wenn es ausgesetzt ist. Der Ersatz wird sofort aktiviert.
- Überprüfen Sie Berichte und Screenshots, bevor Sie sie an jemanden senden.

Ein Dashboard-Token wird niemals in ein öffentliches Problem, einen Discord-Kanal oder ein Konfigurationsbeispiel eingefügt. Wenn Sie keinen Webzugang benötigen, deaktivieren Sie `doctor.dashboard.enabled` und starten Sie erneut.
