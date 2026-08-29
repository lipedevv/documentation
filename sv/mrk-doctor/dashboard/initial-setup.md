---
description: "Konfigurera säker åtkomst till webb- instrumentpanelen."
icon: plug
---

> [English source](../../../mrk-doctor/dashboard/initial-setup.md) · [Language home](../../README.md) · Machine-translated edition


<a id="connect-the-dashboard"></a>
# Anslut instrumentpanelen

{% stepper %}
{% step %}
<a id="create-a-credential"></a>
#### Skapa ett legitimationsbevis
Kör `/doctor dashboard setup` som operatör, kopiera den visas token omedelbart och lagra den säkert.
{% endstep %}
{% step %}
<a id="configure-the-address"></a>
#### Konfigurera adressen
I `plugins/MRKDoctor/config.yml`, ställa in `doctor.dashboard.port` till den tilldelade hamnen. Standard `0.0.0.0` bind lyssnar på server tilldelaktighet; ändra det till `127.0.0.1` när en omvänd proxy på samma värd ska vara den enda direkta klienten.
{% endstep %}
{% step %}
<a id="open-the-embedded-dashboard"></a>
#### Öppna inbyggd instrumentbord
Öppna `http://SERVER_ADDRESS:PORT` i en webbläsare och ange tokenen. Dashboard UI, API och automatiska uppdateringar använder denna enda konfigurerade port.
{% endstep %}
{% step %}
<a id="restart-only-after-connection-setting-changes"></a>
#### Återstarter endast efter att anslutningsinställningarna ändrats
A newly generated token is active immediately. Restart the Minecraft server only after changing the bind address, port, or enabled state.
{% endstep %}
{% endstepper %}

{% hint style="danger" %}
Lämna inte den diagnostiska hamnen oskyddad på det offentliga internet. Skydda fjärråtkomst med en pålitlig omvänd proxy, TLS, och en brandvägg.
{% endhint %}

Att skapa en annan token ersätter legitimation omedelbart. Uppdatera betrodda webbläsare med den nya tokenen. Se [Pterodactyl](pterodactyl.md) och [säkerhet](security.md).
