---
description: "A szerver-kezelők rendelkezésére álló parancsok."
icon: terminal
---

> [English source](../../../mrk-doctor/reference/commands.md) · [Language home](../../README.md) · Machine-translated edition


<a id="commands"></a>
# Parancs

Minden parancsnak `mrkdoctor.view`szükséges. A jogosultságokat alapértelmezett módon az operátorok számára kell megadni. Lásd az [jogosultságokat](permissions.md) hozzáférést átadása előtt.

| Parancsnok | Használat | További engedély |
| --- | --- | --- |
| `/doctor` | Nyissa ki a játékon belüli áttekintést; mutassa a konzol állapotát. | — |
| `/doctor status` | A jelenlegi egészségügyi és futási időbeli információk megjelenítése. | — |
| `/doctor health` | Mutasd meg ugyanazt az egészségfelfogást. | — |
| `/doctor incidents` | Számoljon fel a nyitott incidenseket. | — |
| `/doctor changes` | Mutasd a legutóbbi követett változások. | — |
| `/doctor timeline` | Mutasd meg a legutóbbi változások listáját a Universalben. | — |
| `/orvos engedélye <player> <node>` | Check an online player's permission. | — |
| `/gyógyász parancs <player> <command>` | Check a command's owner and access. | — |
| `/doctor snapshot` | - Tartsa meg a diagnosztikai lemezt. | — |
| `/doctor report` | Generáljon egy jelentés fájlt. | `mrkdoctor.report` |
| `/doctor dashboard` | A beágyazott vezérlőlap címének beállítása. | `mrkdoctor.dashboard` |
| `/doctor dashboard setup` | Hozz létre és azonnal aktiváld az új dashboard hitelesítő adatot. | `mrkdoctor.dashboard` |
| `/doctor reload` | Újra töltsd be a konfigurációs értékeket; néhány változás még mindig újraindításra van szükség. | `mrkdoctor.admin` |

A játékosok ellenőrzéseihez használja a pontos online játékos neveket. A `/doctor dashboard` által nyomtatott cím az konfigurált kötőcímet használja; a távoli megnyitásakor a `127.0.0.1` vagy `0.0.0.0` -t a nyilvános hostnévvel cserélje ki.

A papírt kiadás optimális formájában is kínál a `/doctor plugin <plugin>` egy plugin összefoglaló. Ez a parancs nem áll rendelkezésre a Universalben.

A`/doctor trace` csak a rendelkezésre állási értesítést jeleníti meg ebben a kiadásban; nem indít nyomon követést. Nincs automatikus frissítés vagy visszafordítási parancs.
