---
description: "Konfiguráld a webes műszerpulthoz való biztonságos hozzáférést."
icon: plug
---

> [English source](../../../mrk-doctor/dashboard/initial-setup.md) · [Language home](../../README.md) · Machine-translated edition


<a id="connect-the-dashboard"></a>
# Kapcsolja össze a mérőlapot

{% stepper %}
{% step %}
<a id="create-a-credential"></a>
#### Készíts egy hitelesítő dokumentumot
A `/doctor dashboard setup` -t futtasd be operátorként, és azonnal másoladd meg a megjelenített jelzőt, és tárold biztonságosan.
{% endstep %}
{% step %}
<a id="configure-the-address"></a>
#### A cím beállítása
Az `plugins/MRKDoctor/config.yml`-ben az `doctor.dashboard.port` -t az elosztott portra állítsa be. A default `0.0.0.0` bind a szerver elosztáson hallani; módosítsa az `127.0.0.1` -ra, amikor egy másik host-on egy fordított proxy az egyetlen közvetlen ügyfél.
{% endstep %}
{% step %}
<a id="open-the-embedded-dashboard"></a>
#### Nyissa ki a beágyazott panelit
Nyissa meg `http://SERVER_ADDRESS:PORT` -ot egy böngészőben és adja be a jelzőt. A dashboard UI, API és automatikus frissítések ezt az egyetlen konfigurált kikötőt használják.
{% endstep %}
{% step %}
<a id="restart-only-after-connection-setting-changes"></a>
#### Csak a csatlakozási beállítások módosítása után újraindít
Az új generált jelvény azonnal aktiválódik. Csak a bind cím, port vagy engedélyezett állapot megváltoztatása után indítsa újra a Minecraft szervert.
{% endstep %}
{% endstepper %}

{% hint style="danger" %}
Ne hagyja a diagnosztikai kikötőt védtelenül a nyilvános interneten. Védje a távoli hozzáférést egy megbízható visszaforduló proxy, TLS, és egy tűzfal. Ne kezelje a web-indító beállítást mint helyettesítőt az autentifikációra.
{% endhint %}

A másik jelvény létrehozása azonnal helyettesíti a hitelesítési okiratot. Feltételezett böngészőket frissítse az új jelvénysel. Lásd [Pterodactyl](pterodactyl.md) és [biztonsági](security.md).
