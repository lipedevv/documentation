---
description: "Nastavte bezpečný přístup k webovému palubnímu desku."
icon: plug
---

> [English source](../../../mrk-doctor/dashboard/initial-setup.md) · [Language home](../../README.md) · Machine-translated edition


<a id="connect-the-dashboard"></a>
# Přidružte palubní desku

{% stepper %}
{% step %}
<a id="create-a-credential"></a>
#### Vytvořte pověření
Vytvořte `/doctor dashboard setup` jako operátor, okamžitě kopírujte zobrazený token a uchováváte ho bezpečně.
{% endstep %}
{% step %}
<a id="configure-the-address"></a>
#### Nastavte adresu
V `plugins/MRKDoctor/config.yml`nastavíte `doctor.dashboard.port` na přidělený port. Předchozí kód `0.0.0.0` bind se vyslechne na serverovém přidělení; změňte ho na `127.0.0.1` , když by byl reverzní proxy na stejném hostitu jediný přímý klient.
{% endstep %}
{% step %}
<a id="open-the-embedded-dashboard"></a>
#### Otevřete vestavěnou palubní desku
Otevřete `http://SERVER_ADDRESS:PORT` v prohlížeči a zadáte token. UI palubní desky, API a automatické aktualizace používají tento jediný konfigurovaný port.
{% endstep %}
{% step %}
<a id="restart-only-after-connection-setting-changes"></a>
#### Opětovné spuštění pouze po změně nastavení připojení
Nově vytvořený token je okamžitě aktivní. Zpětovně spuštějte server Minecraft pouze po změně adresy, portu nebo aktivovaného stavu.
{% endstep %}
{% endstepper %}

{% hint style="danger" %}
Neodejte diagnostický port na veřejném internetu neochráněný. Ochraňte vzdálený přístup důvěryhodným reverzním proxy, TLSa firewallem. Nezajímajte nastavení webového původu jako náhradu pro autentizaci.
{% endhint %}

Vytvoření jiného tokenu okamžitě nahrazuje akreditaci. Aktualizujte důvěryhodné prohlížeče novým tokenem. Viz [Pterodactyl](pterodactyl.md) a [bezpečnost](security.md).
