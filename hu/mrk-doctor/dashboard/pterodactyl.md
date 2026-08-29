---
description: "Készítsd fel a kezelőasztalhoz a tárhelyet."
icon: cubes
---

> [English source](../../../mrk-doctor/dashboard/pterodactyl.md) · [Language home](../../README.md) · Machine-translated edition


<a id="pterodactyl-hosting"></a>
# Pterodactyl szállító

Válassza ki a szerverpanelben rendelkezésre álló elosztást, például `7854`-t, és állítsa be az `doctor.dashboard.port` -et a portra.

Használja a tárolóhálózatának megkövetelt bind címét. A tartályok helyi tárolóhálózatának címét nem lehet külön tartályból elérni. Ha a hosted `0.0.0.0`-t igényel, győződjön meg róla, hogy a hozzárendelések a tűzfal vagy a biztonságos proxy által védettek, mielőtt engedélyezné az hozzáférést.

A webes panelit közvetlenül a plugin szolgálja. Kövesse az [kezdeti beállítást](initial-setup.md), indítsa újra a bind cím vagy port megváltoztatása után, és tesztelje a oldalt az elosztott cím segítségével.

{% hint style="warning" %}
Ha a terv nem teszi lehetővé a kijelölés kiválasztását vagy feltárását, csak a hosting szolgáltató teszi elérhetővé a beérkező paneli portot; a plugin nem tudja megkerülni a host tűzfalot.
{% endhint %}
