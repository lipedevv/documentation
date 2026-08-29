---
description: "Támogatott ügyfél beállításai az egyetemes kiadáshoz."
icon: sliders
---

> [English source](../../../mrk-doctor/reference/configuration.md) · [Language home](../../README.md) · Machine-translated edition


<a id="configuration-reference"></a>
# A konfigurációs hivatkozás

Ez a hivatkozás `plugins/MRKDoctor/config.yml` -ot tartalmazza az egyetemes kiadásban. Újra indítsa be a szerkesztés után, hacsak nem ellenőrizte a beállítás újratöltési viselkedését.

| Beállítása | Előzetes | Cél |
| --- | --- | --- |
| `doctor.server-id` | `standalone` | A szerverre használt címke. |
| `doctor.performance.healthy-sample-seconds` | `15` | A normális működés során megfigyelési időtartam. |
| `doctor.performance.incident-sample-seconds` | `5` | A megfigyelési időtartam egy incidens alatt. |
| `doctor.changes.enabled` | `true` | Lehetővé teszi a közelmúltbeli változások megfigyelését. |
| `doctor.changes.interval-seconds` | `30` | A módosítás-ellenőrzési időtartam; legalább 10 másodperc. |
| `doctor.changes.max-file-bytes` | `1048576` | A részletes szöveges fájl összehasonlításhoz szükséges méretkorlátozás. |
| `doctor.dashboard.enabled` | `true` | Kapcsolják a dashboard csatlakozást. |
| `doctor.dashboard.bind` | `0.0.0.0` | `127.0.0.1` -t használhatsz, ha a hozzáférés ugyanazon a host-on keresztül kell történnie. |
| `doctor.dashboard.port` | `7854` | Az beágyazott képernyő és az API-je által használt egyetlen port. |
| `doctor.dashboard.cors-origin` | `http://127.0.0.1:7854` | Előzetes proxy-kibocsátás esetén választható engedélyezett eredet; a azonos eredetű hozzáférés nem igényel külön frontend címet. |
| `doctor.dashboard.token-hash` | Üres | `/doctor dashboard setup`által kezelhető; kézzel ne szerkesztse. |
| `storage.raw-retention-hours` | `24` | A részletes metrikus történelem tárolási ideje. |
| `logging.debug` | `false` | A szabvány alapértelmezett állapotában hagyja el; ez nem teszi lehetővé a további regisztrációt ebben a kiadásban. |

A pozitív megfigyelési intervallumokat és egy érvényes képernyőportot használjuk.

{% hint style="warning" %}
Ne takarja be a műszerpult jelzőjét a konfigurációs példákba. A parancson keresztül generálja a hitelesítési adatokat, és védje a diagnosztikai kikötőt.
{% endhint %}
