---
description: "Megfoglalja a diagnosztikai információkat, mielőtt változtatásokat tesz."
icon: camera
---

> [English source](../../../mrk-doctor/recovery/snapshots.md) · [Language home](../../README.md) · Machine-translated edition


<a id="save-a-diagnostic-snapshot"></a>
# Tartsa meg a diagnosztikai képet

Futtassa ki az `/doctor snapshot`. A parancs az `plugins/MRKDoctor/snapshots/`generált fájlt jelzi .

Tartsa meg egy pillanatnyilvántartást, amikor egy problémát vizsgál vagy mielőtt megváltoztatná a plugin konfigurációt.

{% hint style="warning" %}
A pillanatnyilvántartás egy diagnosztikai rekord, nem egy szerver biztonsági mentés. Nem tudja helyreállítani a világokat, a plugin fájlokat, a konfigurációt vagy a teljes MRK Doctor adatlapot.
{% endhint %}
