---
description: "Håll diagnostillgången privat."
icon: shield-halved
---

> [English source](../../../mrk-doctor/dashboard/security.md) · [Language home](../../README.md) · Machine-translated edition


<a id="dashboard-security"></a>
# Kontrollsystem

- Dela åtkomst endast med betrodda administratörer.
- Använd HTTPS för webbbordet och säkra anslutningar till dess tjänster.
- Håll standard lokal bind när tjänster körs på samma värd.
- Skydda värdtilldelningar med brandväggar och proxyregler.
- Om den är exponerad, rotera tokenen med `/doctor dashboard setup` .
- Se igenom rapporter och skärmbilder innan du skickar dem till någon.

Lämna aldrig en instrumentpanel i ett offentligt problem, Discord-kanal eller konfigurationsexempel. Om du inte behöver webb åtkomst, inaktivera `doctor.dashboard.enabled` och starta om.
