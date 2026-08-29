---
description: "Investiga un problema di accesso al giocatore online."
icon: user-shield
---

> [English source](../../../mrk-doctor/permissions/permission-doctor.md) · [Language home](../../README.md) · Machine-translated edition


<a id="check-permissions-and-commands"></a>
# Controllare le autorizzazioni e i comandi

Il giocatore bersaglio deve essere online.

```text
/doctor permission Steve essentials.warp
/doctor command Steve warp
```

Il primo comando verifica l'autorizzazione specificata. Il secondo aiuta a identificare il plugin del comando e controllare l'accesso. Fornisci solo il nome del comando, senza argomenti aggiuntivi.

Se l'accesso non riesce ancora, controlla la sintassi del comando, la configurazione di gruppo di autorizzazioni, le restrizioni mondiali e i rilassamenti. MRK Doctor non cambia i permessi di un giocatore o sostituisce il gestore delle autorizzazioni.

Questi controlli sono disponibili per gli utenti con `mrkdoctor.view`, quindi concedi il nodo solo al personale di fiducia.
