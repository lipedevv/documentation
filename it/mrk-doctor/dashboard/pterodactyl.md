---
description: "Preparare le allocazioni di hosting per la dashboard."
icon: cubes
---

> [English source](../../../mrk-doctor/dashboard/pterodactyl.md) · [Language home](../../README.md) · Machine-translated edition


# Pterodactyl hosting

Selezionare una distribuzione disponibile nel pannello del server, come `7854`, e impostare `doctor.dashboard.port` a quella porta. Non è richiesta alcuna applicazione web separata o seconda distribuzione.

Utilizzare l'indirizzo di bind richiesto dalla rete di hosting. L'indirizzo localhost di un container non è raggiungibile da un container separato. Se il tuo host richiede `0.0.0.0`, assicurati che le assegnazioni siano protette dal suo firewall o proxy sicuro prima di abilitare l'accesso.

Il dashboard web è servito direttamente dal plugin. Seguire la configurazione iniziale [initial setup](initial-setup.md), riavviare dopo aver cambiato l'indirizzo di bind o la porta, e testare la pagina utilizzando l'indirizzo assegnato.

{% hint style="warning" %}
Non aprire porte illimitate per risolvere un problema di connessione. Se il tuo piano non ti permette di selezionare o esporre un'alloggio, solo il provider di hosting può rendere accessibile un porto di dashboard in entrata; il plugin non può bypassare il firewall dell'host.
{% endhint %}
