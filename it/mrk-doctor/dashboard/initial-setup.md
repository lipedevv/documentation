---
description: "Configurazione di accesso sicuro alla dashboard web."
icon: plug
---

> [English source](../../../mrk-doctor/dashboard/initial-setup.md) · [Language home](../../README.md) · Machine-translated edition


<a id="connect-the-dashboard"></a>
# Connettere il pannello di controllo

{% stepper %}
{% step %}
<a id="create-a-credential"></a>
#### Crea una credenziale
Eseguire `/doctor dashboard setup` come operatore, copiare immediatamente il token visualizzato e memorizzarlo in modo sicuro.
{% endstep %}
{% step %}
<a id="configure-the-address"></a>
#### Configurazione dell' indirizzo
In `plugins/MRKDoctor/config.yml`, impostare `doctor.dashboard.port` alla porta assegnata. Il bind predefinito `0.0.0.0` ascolta sull'allocazione del server; cambiarlo in `127.0.0.1` quando un proxy inverso sullo stesso host dovrebbe essere l'unico client diretto.
{% endstep %}
{% step %}
<a id="open-the-embedded-dashboard"></a>
#### Aprire la scheda di controllo integrata
Aprire `http://SERVER_ADDRESS:PORT` in un browser e inserire il token. L'UI del dashboard, l'API e gli aggiornamenti automatici utilizzano questa porta singola configurata.
{% endstep %}
{% step %}
<a id="restart-only-after-connection-setting-changes"></a>
#### Riprendere solo dopo che le impostazioni di connessione sono state modificate
Un token appena generato è attivato immediatamente. Riprendi il server Minecraft solo dopo aver cambiato l'indirizzo di bind, il porto o lo stato abilitato.
{% endstep %}
{% endstepper %}

{% hint style="danger" %}
Non lasciare il portico diagnostico non protetto su Internet pubblico. Proteggere l'accesso remoto con un proxy inverso di fiducia, TLS, e un firewall. Non trattare una impostazione di origine web come un sostituto dell'autenticazione.
{% endhint %}

Creazione di un altro token sostituisce immediatamente la credenziale. Aggiorna i browser di fiducia con il nuovo token. Vedi [Pterodactyl](pterodactyl.md) e [sicurezza](security.md).
