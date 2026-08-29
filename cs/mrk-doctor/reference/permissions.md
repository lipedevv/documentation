---
description: "Dejte zaměstnancům přístup, který potřebují."
icon: user-shield
---

> [English source](../../../mrk-doctor/reference/permissions.md) · [Language home](../../README.md) · Machine-translated edition


<a id="permissions"></a>
# Zpovědi

All MRK Doctor permissions default to operators. `mrkdoctor.view` is required for every command, including those with an additional permission.

| Povolení | Přístup |
| --- | --- |
| `mrkdoctor.view` | Představte diagnostiku, seznamte incidenty a změny, vytvořte okamžiky a provedejte kontroly povolení/povědi. |
| `mrkdoctor.report` | Vytvořte zprávy. |
| `mrkdoctor.dashboard` | Podívejte se na podrobnosti o připojení do palubního desku a nahraďte jeho průkaz. |
| `mrkdoctor.admin` | Správní přístup, včetně přepínání a výše uvedených povolení. |

{% hint style="warning" %}
Nedávejte diagnostické povolení obyčejným hráčům.
{% endhint %}

Rezervované uzly `mrkdoctor.trace`, `mrkdoctor.rollback`a `mrkdoctor.update` v tomto vydání neotvírají sledování, zpětné přehrávání nebo automatické aktualizace.
