---
description: "Adjon a személyzetnek csak a szükséges hozzáférést."
icon: user-shield
---

> [English source](../../../mrk-doctor/reference/permissions.md) · [Language home](../../README.md) · Machine-translated edition


<a id="permissions"></a>
# Az engedélyek

Az MRK Doctor engedélyezései alapértelmezett módon az operátorok számára. `mrkdoctor.view` minden parancsra szükséges, beleértve azokat is, amelyek további engedélyekkel rendelkeznek.

| Hivatal | A hozzáférés |
| --- | --- |
| `mrkdoctor.view` | A diagnosztikákat nézze, jegyezze fel az eseményeket és a változásokot, készítsen pillanatnyilvántartásokat, és végezze el az engedély/parancsellenőrzéseket. |
| `mrkdoctor.report` | Jelentéseket készítsen. |
| `mrkdoctor.dashboard` | Lásd a dashboard csatlakozási adatait és cserélje a hitelesítő adatokat. |
| `mrkdoctor.admin` | Adminisztratív hozzáférés, beleértve a feltöltést és a fenti engedélyeket. |

{% hint style="warning" %}
A rendszeres játékosok nem adhatnak diagnosztikai engedélyeket.
{% endhint %}

A fenntartott csomópontok `mrkdoctor.trace`, `mrkdoctor.rollback`, és `mrkdoctor.update` nem nyílik a nyomon követés, a visszafordítás vagy az automatikus frissítések ebben a kiadásban.
