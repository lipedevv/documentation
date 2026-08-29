---
description: "Geef het personeel alleen de toegang die ze nodig hebben."
icon: user-shield
---

> [English source](../../../mrk-doctor/reference/permissions.md) · [Language home](../../README.md) · Machine-translated edition


<a id="permissions"></a>
# Vergunningen

Alle MRK Doctor-toestemmingen zijn standaard voor gebruikers. `mrkdoctor.view` is vereist voor elk commando, inclusief die met een extra toestemming.

| Vergunning | Toegang |
| --- | --- |
| `mrkdoctor.view` | Bekijk diagnostics, maak een lijst van incidenten en wijzigingen, maak snapshots en voer toestemming/commandocontroles uit. |
| `mrkdoctor.report` | Maak rapporten. |
| `mrkdoctor.dashboard` | Bekijk de details van de verbinding op het dashboard en vervang de referentie. |
| `mrkdoctor.admin` | Administreerbare toegang, met inbegrip van herladen en bovenstaande toestemming. |

{% hint style="warning" %}
Geef geen diagnostische toestemming aan gewone spelers. Rapporten en verbindingsinstellingen kunnen gevoelige informatie bevatten.
{% endhint %}

De gereserveerde nodes `mrkdoctor.trace`, `mrkdoctor.rollback`en `mrkdoctor.update` maken geen tracing, rollback of automatische updates in deze release vrij.
