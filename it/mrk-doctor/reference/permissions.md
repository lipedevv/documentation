---
description: "Date al personale solo l'accesso di cui hanno bisogno."
icon: user-shield
---

> [English source](../../../mrk-doctor/reference/permissions.md) · [Language home](../../README.md) · Machine-translated edition


<a id="permissions"></a>
# Permessi

All MRK Doctor permissions default to operators. `mrkdoctor.view` is required for every command, including those with an additional permission.

| Permesso | Accesso |
| --- | --- |
| `mrkdoctor.view` | Visualizza le diagnosi, elenca gli incidenti e le modifiche, crea snapshot e esegue controlli di autorizzazione/comando. |
| `mrkdoctor.report` | Crea rapporti. |
| `mrkdoctor.dashboard` | Visualizza i dettagli della connessione della scheda di controllo e sostituisci la sua credenziale. |
| `mrkdoctor.admin` | Accesso amministrativo, compreso il ricarico e le autorizzazioni di cui sopra. |

{% hint style="warning" %}
Non concedere autorizzazioni diagnostiche ai giocatori ordinari.
{% endhint %}

I nodi riservati `mrkdoctor.trace`, `mrkdoctor.rollback`e `mrkdoctor.update` non sbloccano tracciamento, rolloback o aggiornamenti automatici in questa versione.
