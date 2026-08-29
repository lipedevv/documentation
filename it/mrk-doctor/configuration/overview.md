---
description: "Aggiusta le impostazioni senza interrompere l'installazione."
icon: sliders
---

> [English source](../../../mrk-doctor/configuration/overview.md) · [Language home](../../README.md) · Machine-translated edition


<a id="configuration"></a>
# Configurazione

Edit `plugins/MRKDoctor/config.yml` con un editor di testo YAML-consapevole. Fare un backup prima e conservare l'indentation.

La configurazione predefinita è un buon punto di partenza. Modificare solo le impostazioni necessarie, come l'etichetta del server, gli intervalli di monitoraggio, l'accesso alla dashboard o la conservazione della cronologia.

Le credenziali di dashboard generate da `/doctor dashboard setup` diventano immediatamente attive. Riprendi dopo aver cambiato indirizzi di bind, porte, stato abilitato o impostazioni di monitoraggio. `/doctor reload` non sostituisce il riprendimento completo di tali modifiche di connessione e ciclo di vita.

Utilizzare il riferimento di configurazione [configuration reference](../reference/configuration.md) per l'edizione universale. Non copiare le impostazioni aggiuntive da un'altra edizione e supporre che consentano nuove funzionalità.
