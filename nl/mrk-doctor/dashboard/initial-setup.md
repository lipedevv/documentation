---
description: "Configureer beveiligde toegang tot het web dashboard."
icon: plug
---

> [English source](../../../mrk-doctor/dashboard/initial-setup.md) · [Language home](../../README.md) · Machine-translated edition


<a id="connect-the-dashboard"></a>
# Verbind het dashboard

{% stepper %}
{% step %}
<a id="create-a-credential"></a>
#### Een geloofsbrief maken
Run `/doctor dashboard setup` als operator. Kopieer de getoonde token onmiddellijk en bewaar het veilig.
{% endstep %}
{% step %}
<a id="configure-the-address"></a>
#### Configureer het adres
In `plugins/MRKDoctor/config.yml`, stel `doctor.dashboard.port` in op de toegewezen poort. De standaard `0.0.0.0` bind hoort op de server toewijzing; verander het naar `127.0.0.1` wanneer een omgekeerde proxy op dezelfde host de enige directe client zou moeten zijn.
{% endstep %}
{% step %}
<a id="open-the-embedded-dashboard"></a>
#### Open het ingebouwde dashboard
Open `http://SERVER_ADDRESS:PORT` in een browser en voer de token in. De dashboard UI, API en automatische updates gebruiken deze enkele geconfigureerde poort.
{% endstep %}
{% step %}
<a id="restart-only-after-connection-setting-changes"></a>
#### Alleen opnieuw starten na wijzigingen in de verbindingsinstellingen
Een nieuw gegenereerde token wordt onmiddellijk actief. Start de Minecraft -server alleen opnieuw nadat u het bindadres, de port of de geactiveerde staat hebt veranderd.
{% endstep %}
{% endstepper %}

{% hint style="danger" %}
Laat de diagnostische poort niet onbeschermd op het openbare internet. Bescherm afstandsbericht met een betrouwbare reverse proxy, TLS, en een firewall.
{% endhint %}

Het maken van een andere token vervangt de credentials onmiddellijk. Upgrade vertrouwde browsers met de nieuwe token. Zie [Pterodactyl](pterodactyl.md) en [beveiliging](security.md).
