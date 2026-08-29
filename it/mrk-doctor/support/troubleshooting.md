---
description: "Controlli pratici per problemi comuni."
icon: screwdriver-wrench
---

> [English source](../../../mrk-doctor/support/troubleshooting.md) · [Language home](../../README.md) · Machine-translated edition


<a id="troubleshooting"></a>
# Soluzionamento dei problemi

<a id="plugin-will-not-start"></a>
## Il plugin non si avvierà

Confirmare di aver installato la corretta edizione e solo un MRK Doctor JAR. Controllare i requisiti Java del server, spazio su disco libero, permessi di file e il primo errore della console pertinente. Riprendere normalmente dopo aver corretto il problema.

<a id="server-is-lagging-or-shows-errors"></a>
## Il server è in ritardo o mostra errori

Registrare quando è iniziato il problema. Controllare `/doctor status`, incidenti aperti e modifiche recenti. Rivudire gli errori della console del plugin interessato, quindi [creare un rapporto](../reports/creating-reports.md). Provare una modifica reversibile alla volta utilizzando un backup.

<a id="dashboard-will-not-connect"></a>
## Il dashboard non si connetterà

Confirma che MRK Doctor è abilitato e apri l'indirizzo di pannello di controllo integrato configurato. Controlla l'indirizzo di bind, l'assegnazione di single hosting, il firewall, il percorso proxy e la porta configurata. Un token appena generato è attivato immediatamente. Mai disabilitare la sicurezza o esporre una porta non limitata come soluzione.

<a id="a-player-cannot-use-a-command"></a>
## Un giocatore non può usare un comando

Check the exact command, the player's permission, world restrictions, and the owning plugin's configuration. Follow [permission checks](../permissions/permission-doctor.md).

<a id="memory-keeps-increasing"></a>
## La memoria continua ad aumentare

Osservare l'uso nel tempo e confrontarlo con l'attività del giocatore. Una lettura elevata non è la prova di una perdita o proprietà di plugin. Utilizzare gli strumenti di profilazione supportati del tuo server quando è necessario più dettaglio.

<a id="reports-or-history-are-unavailable"></a>
## Non sono disponibili rapporti o dati

Controllare lo spazio libero sul disco e i permessi di lettura/scrittura per `plugins/MRKDoctor/`. Fermare il server e fare un backup della cartella completa prima di tentare le riparazioni. Non eliminare i file di dati per risolvere un problema senza un backup verificato.

<a id="monitoring-overhead-seems-high"></a>
## Il costo di monitoraggio sembra alto.

Return monitoring intervals to their defaults, avoid tracking unnecessarily large text files, and compare performance under similar load. If it persists, send relevant logs and settings through [support](../../support.md), without credentials.
