---
description: "Nyomozzunk egy online játékos hozzáférési problémát."
icon: user-shield
---

> [English source](../../../mrk-doctor/permissions/permission-doctor.md) · [Language home](../../README.md) · Machine-translated edition


<a id="check-permissions-and-commands"></a>
# Ellenőrizze a jogosultságokat és a parancsokat

A céljátékosnak online kell lennie.

```text
/doctor permission Steve essentials.warp
/doctor command Steve warp
```

Az első parancs ellenőrzi a megadott engedélyeket. A második segít azonosítani a parancs plugin és ellenőrzi a hozzáférést. Csak a parancs nevét adja meg, további érv nélkül.

Ha a hozzáférés még mindig nem sikerül, ellenőrizze a parancs szintaxisát, a jogosultságcsoport konfigurációját, a világkorlátozásait és a hűtéseket.

Ezek a ellenőrzések a `mrkdoctor.view`-es felhasználók számára állnak rendelkezésre, ezért a csomópontot csak megbízható személyzetnek kell megadni.
