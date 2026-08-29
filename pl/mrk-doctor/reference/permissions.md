---
description: "Daj pracownikom tylko dostęp, którego potrzebują."
icon: user-shield
---

> [English source](../../../mrk-doctor/reference/permissions.md) · [Language home](../../README.md) · Machine-translated edition


<a id="permissions"></a>
# Pozwolenia

Wszystkie uprawnienia MRK Doctor są domyślnie używane przez operatorów. `mrkdoctor.view` jest wymagane dla każdej komendy, w tym dla tych z dodatkowym zezwoleniem.

| Pozwolenie | Dostęp |
| --- | --- |
| `mrkdoctor.view` | Zobacz diagnostykę, wypis incydentów i zmian, tworz zdjęcia i przeprowadź kontrole zezwoleń/za poleceń. |
| `mrkdoctor.report` | Tworzyć raporty. |
| `mrkdoctor.dashboard` | Zobacz szczegóły połączenia z deską napędową i zastąp jego akredytację. |
| `mrkdoctor.admin` | Dostęp administracyjny, w tym ponowne ładowanie i uprawnienia powyżej wymienione. |

{% hint style="warning" %}
Nie przyznaj zezwoleń diagnostycznych zwykłym graczom.
{% endhint %}

Zarezerwowane węzły `mrkdoctor.trace`, `mrkdoctor.rollback`i `mrkdoctor.update` nie odblokowują śledzenia, odwrotu lub automatycznych aktualizacji w tym wydaniu.
