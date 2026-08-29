---
description: "Impostazioni dei clienti supportate per l'edizione universale."
icon: sliders
---

> [English source](../../../mrk-doctor/reference/configuration.md) · [Language home](../../README.md) · Machine-translated edition


<a id="configuration-reference"></a>
# Referenza di configurazione

Questo riferimento copre `plugins/MRKDoctor/config.yml` nell'edizione universale. Riinizio dopo l'editing a meno che non abbia verificato il comportamento di ricarica dell'impostazione.

| Impostazione | Per impostazione predefinita | Scopo |
| --- | --- | --- |
| `doctor.server-id` | `standalone` | L'etichetta usata per questo server. |
| `doctor.performance.healthy-sample-seconds` | `15` | Intervallo di monitoraggio durante il normale funzionamento. |
| `doctor.performance.incident-sample-seconds` | `5` | Intervallo di monitoraggio durante un incidente. |
| `doctor.changes.enabled` | `true` | Abilitare il monitoraggio dei cambiamenti recenti. |
| `doctor.changes.interval-seconds` | `30` | Intervallo di controllo delle variazioni; utilizzare almeno 10 secondi. |
| `doctor.changes.max-file-bytes` | `1048576` | Limite di dimensione per i dettagliati confronti di file di testo. |
| `doctor.dashboard.enabled` | `true` | Abilita la connettività della dashboard. |
| `doctor.dashboard.bind` | `0.0.0.0` | Usate `127.0.0.1` quando l'accesso deve passare attraverso un proxy inverso dello stesso host. |
| `doctor.dashboard.port` | `7854` | Port unico utilizzato dalla dashboard incorporata e dalla sua API autenticata. |
| `doctor.dashboard.cors-origin` | `http://127.0.0.1:7854` | Origine consentita opzionale per le implementazioni proxy avanzate; l'accesso con la stessa origine non richiede un indirizzo frontend separato. |
| `doctor.dashboard.token-hash` | Vaga | Gestito da `/doctor dashboard setup`; non modificare a mano. |
| `storage.raw-retention-hours` | `24` | Periodo di conservazione per la cronologia metrica dettagliata. |
| `logging.debug` | `false` | Lascia per impostazione predefinita; non consente di registrare ulteriori dati in questa versione. |

Utilizzare intervalli di monitoraggio positivi e una porta di pannello di controllo valida. Riduzione degli intervalli aumenta il lavoro di monitoraggio; testare le modifiche su un server di staging prima.

{% hint style="warning" %}
Non incollare il token della dashboard in esempi di configurazione. Generare credenziali tramite il comando e mantenere protetto il porto diagnostico.
{% endhint %}
