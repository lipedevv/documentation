---
description: "Tenete il controllo diagnostico privato."
icon: shield-halved
---

> [English source](../../../mrk-doctor/dashboard/security.md) · [Language home](../../README.md) · Machine-translated edition


<a id="dashboard-security"></a>
# Sicurezza del dashboard

- Condividere l'accesso solo con gli amministratori di fiducia.
- Utilizzare HTTPS per il dashboard web e connettere con sicurezza i suoi servizi.
- Tenere il locale di default legate quando i servizi vengono eseguiti sullo stesso host.
- Proteggere le assegnazioni ospitate con firewall e regole proxy.
- Rotare il token con `/doctor dashboard setup` se viene esposto.
- Rivista i rapporti e le screenshot prima di inviarli a chiunque.

Non incolla mai un token di dashboard in un problema pubblico, un canale Discord o un esempio di configurazione. Se non hai bisogno di accesso al web, disabilitare `doctor.dashboard.enabled` e riavviare.
