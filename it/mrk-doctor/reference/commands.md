---
description: "Comandi disponibili per gli amministratori del server."
icon: terminal
---

> [English source](../../../mrk-doctor/reference/commands.md) · [Language home](../../README.md) · Machine-translated edition


<a id="commands"></a>
# Comandi

Tutti i comandi richiedono `mrkdoctor.view`. Permessi predefiniti per gli operatori. Vedi [Permessi](permissions.md) prima di delegare l'accesso.

| Comando | Utilizzare | Permesso aggiuntivo |
| --- | --- | --- |
| `/doctor` | Aprire la panoramica in-game; mostrare lo stato nella console. | — |
| `/doctor status` | Mostra informazioni sull'attuale stato di salute e sul tempo di esecuzione. | — |
| `/doctor health` | Mostra lo stesso riassunto sanitario. | — |
| `/doctor incidents` | Elenca gli incidenti aperti. | — |
| `/doctor changes` | Mostra i recenti cambiamenti tracciati. | — |
| `/doctor timeline` | Mostra la lista dei recenti cambiamenti in Universal. | — |
| `/permesso medico <player> <node>` | Check an online player's permission. | — |
| `/dottor comando <player> <command>` | Check a command's owner and access. | — |
| `/doctor snapshot` | Salva un'istantanea diagnostica. | — |
| `/doctor report` | Generare un file di rapporto. | `mrkdoctor.report` |
| `/doctor dashboard` | Visualizza l'indirizzo di dashboard integrato configurato. | `mrkdoctor.dashboard` |
| `/doctor dashboard setup` | Crea e attiva immediatamente una nuova credenziale della dashboard. | `mrkdoctor.dashboard` |
| `/doctor reload` | Rincaricare i valori di configurazione; alcune modifiche richiedono ancora un riavvio. | `mrkdoctor.admin` |

Utilizzare nomi esatti dei giocatori online per i controlli dei giocatori. L'indirizzo stampato da `/doctor dashboard` utilizza l'indirizzo di bind configurato; sostituire `127.0.0.1` o `0.0.0.0` con il nome dell'host pubblico quando lo si apre in remoto.

L'edizione Paper ottimizzata offre inoltre il plugin `/doctor <plugin>` per un riassunto del plugin. Questo comando non è disponibile in Universal.

`/doctor trace` visualizza solo un avviso di disponibilità in questa versione; non inizia un tracciamento. Non ci sono aggiornamenti automatici o comandi di rollowback.
