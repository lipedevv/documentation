---
description: "Bereiten Sie Hosting-Zuschüsse für das Dashboard vor."
icon: cubes
---

> [English source](../../../mrk-doctor/dashboard/pterodactyl.md) · [Language home](../../README.md) · Machine-translated edition


<a id="pterodactyl-hosting"></a>
# Pterodactyl -Hosting

Wählen Sie eine verfügbare Zuweisung in Ihrem Server-Panel aus, z.B. `7854`, und setzen Sie `doctor.dashboard.port` auf diesen Port. Es ist keine separate Web-Anwendung oder zweite Zuweisung erforderlich.

Verwenden Sie die von Ihrem Hosting-Netzwerk erforderliche Bind-Adresse. Die Localhost-Adresse eines Containers ist nicht von einem separaten Container aus erreichbar. Wenn Ihr Host `0.0.0.0`benötigt, stellen Sie sicher, dass die Zuweisungen durch seine Firewall oder sichere Proxy geschützt sind, bevor Sie den Zugriff aktivieren.

Das Web-Dashboard wird direkt vom Plugin bedient. Folgen Sie der ersten Einstellung [initial setup](initial-setup.md), starten Sie nach Änderung der Bind-Adresse oder des Ports neu und testen Sie die Seite mit der zugewiesenen Adresse.

{% hint style="warning" %}
Öffnen Sie keine unbegrenzten Ports, um ein Verbindungsproblem zu lösen. Wenn Sie nicht in Ihrem Plan eine Zuweisung auswählen oder ausstellen können, kann nur der Hosting-Anbieter einen Inbound-Dashboard-Port zugänglich machen; das Plugin kann die Firewall des Hosts nicht umgehen.
{% endhint %}
