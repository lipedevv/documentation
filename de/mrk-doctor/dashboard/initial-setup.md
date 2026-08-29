---
description: "Konfiguration eines sicheren Zugriffs auf das Web-Dashboard."
icon: plug
---

> [English source](../../../mrk-doctor/dashboard/initial-setup.md) · [Language home](../../README.md) · Machine-translated edition


<a id="connect-the-dashboard"></a>
# Schließen Sie das Dashboard an

{% stepper %}
{% step %}
<a id="create-a-credential"></a>
#### Erstellen Sie eine Auskunftserklärung
Führen Sie `/doctor dashboard setup` als Operator aus, kopieren Sie das angezeigte Token sofort und speichern Sie es sicher.
{% endstep %}
{% step %}
<a id="configure-the-address"></a>
#### Konfiguration der Adresse
In `plugins/MRKDoctor/config.yml`wird `doctor.dashboard.port` auf den zugewiesenen Port gesetzt. Der Standard `0.0.0.0` bind hört auf der Serverzuweisung; ändern Sie ihn auf `127.0.0.1` , wenn ein Reverse Proxy auf demselben Host der einzige direkte Client sein sollte.
{% endstep %}
{% step %}
<a id="open-the-embedded-dashboard"></a>
#### Öffnen Sie das eingebettete Dashboard
Öffnen Sie `http://SERVER_ADDRESS:PORT` in einem Browser und geben Sie das Token ein. Die Dashboard-UI, API und automatische Updates verwenden diesen einzigen konfigurierten Port.
{% endstep %}
{% step %}
<a id="restart-only-after-connection-setting-changes"></a>
#### Neustart erst nach Änderungen der Verbindungs-Einstellungen
Ein neu erzeugtes Token wird sofort aktiviert. Neustart den Minecraft -Server erst nach Änderung der bind-Adresse, des Ports oder des aktivierten Zustands.
{% endstep %}
{% endstepper %}

{% hint style="danger" %}
Lassen Sie den Diagnosemodus nicht ungeschützt im öffentlichen Internet. Schützen Sie den Fernzugriff mit einem vertrauenswürdigen Reverse Proxy, TLS, und einer Firewall. Behandeln Sie keine Web-Origin-Einstellung als Ersatz für die Authentifizierung.
{% endhint %}

Die Erstellung eines weiteren Tokens ersetzt die Anmeldeinformationen sofort. Aktualisieren Sie vertrauenswürdige Browser mit dem neuen Token. Siehe [Pterodactyl](pterodactyl.md) und [Sicherheit](security.md).
