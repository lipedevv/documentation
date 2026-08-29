---
description: "A beállítások beállítása a telepítés zavarása nélkül."
icon: sliders
---

> [English source](../../../mrk-doctor/configuration/overview.md) · [Language home](../../README.md) · Machine-translated edition


<a id="configuration"></a>
# A konfiguráció

A `plugins/MRKDoctor/config.yml` -t egy YAML-érzékelt szövegszerkesztővel szerkesztse. Először készítsen egy biztonsági mentést és tartsa meg a bejegyzést.

A alapértelmezett konfiguráció jó kiindulópont. Csak a szükséges beállítások módosítása, mint például a szerver címke, a megfigyelési időszakok, a paneli hozzáférés vagy a történelem megőrzése.

A `/doctor dashboard setup` által generált dashboard-hitelesítések azonnal aktívak. Újraindítsa a kötőcímek, portok, engedélyezett állapot vagy a megfigyelési beállítások megváltoztatása után. A `/doctor reload` nem helyettesíti a teljes újraindítást a kapcsolat és az életciklus változásai miatt.

Az [konfigurációs hivatkozás](../reference/configuration.md) alkalmazása a Universal Edition esetében. Ne másolja a további beállítások egy másik kiadástól, és feltételezze, hogy új funkciók lesznek engedélyezve.
