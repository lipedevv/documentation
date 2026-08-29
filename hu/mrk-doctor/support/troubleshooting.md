---
description: "Praktikus ellenőrzések a gyakori problémákra."
icon: screwdriver-wrench
---

> [English source](../../../mrk-doctor/support/troubleshooting.md) · [Language home](../../README.md) · Machine-translated edition


<a id="troubleshooting"></a>
# Problémák megoldása

<a id="plugin-will-not-start"></a>
## A plugin nem indul

Ellenőrizze, hogy a helyes kiadásot és csak egy MRK Doctor JAR-t telepítette. Ellenőrizze a szerver Java-követelményét, a szabad lemezteret, a fájlengedélyeket és az első releváns konzoló hibát. Újraindítsa normálisan a probléma javítása után.

<a id="server-is-lagging-or-shows-errors"></a>
## A szerver késik vagy hibákat mutat

Figyelembe vegye, hogy mikor kezdődött a probléma. Ellenőrizze az `/doctor status`, az nyitott incidenceket és a legutóbbi változások. Ellenőrizze az érintett plugin konzol hibáit, majd az [jelentést készít](../reports/creating-reports.md). Teszelje meg egy időben egy visszafordítható változást biztonsági mentéssel.

<a id="dashboard-will-not-connect"></a>
## A képernyő nem csatlakozik

A MRK Doctor-t erősítse meg, és nyissa ki a beágyazott dashboard címet. Ellenőrizze a kötőcímet, az egyetlen hosting elosztást, a tűzfalot, a proxy útvonalat és a beállítást. Az újonnan létrehozott jelvény azonnal aktiválódik. Soha nem lehet letiltani a biztonságot vagy a korlátlan kikötőt a megoldásként.

<a id="a-player-cannot-use-a-command"></a>
## Egy játékos nem használhat parancsot.

Check the exact command, the player's permission, world restrictions, and the owning plugin's configuration. Follow [permission checks](../permissions/permission-doctor.md).

<a id="memory-keeps-increasing"></a>
## A memória egyre nagyobb.

A felhasználás idővel történő megfigyelése és a játékosok tevékenységével való összehasonlítása. Egy magas olvasás nem bizonyítja a szivárgást vagy a plugin tulajdonságot. Használja a szerver támogatott profiltartási eszközöket, amikor további részletekre van szükség.

<a id="reports-or-history-are-unavailable"></a>
## A jelentések vagy a történelem nem állnak rendelkezésre

Ellenőrizze a szabad lemezterületet és az `plugins/MRKDoctor/`olvasási/írási engedélyeket. Állítsa le a szervert és készítsen biztonsági mentést a teljes mappáról, mielőtt megcsinálja a javítást. Ne törölje a adatfájlokat, hogy a probléma megoldása érdekében ellenőrizhető biztonsági mentés nélkül.

<a id="monitoring-overhead-seems-high"></a>
## A felügyeleti felső költségek magasnak tűnnek.

Visszaállítsa a felügyeleti intervallumokat a alapértelmezett állapotba, kerülje a szükségtelenül nagy szöveges fájlok nyomon követését, és hasonlítson a teljesítményre hasonló terhelés alatt. Ha ez fennmarad, küldje az [támogatása révén a releváns naplókat és beállításokot](../../support.md), hitelesítő adat nélkül.
