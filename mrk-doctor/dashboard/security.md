---
description: "Keep diagnostic access private."
icon: shield-halved
---

# Dashboard security

- Share access only with trusted administrators.
- Use HTTPS for the web dashboard and secure connections to its services.
- Keep the default local bind when services run on the same host.
- Protect hosted allocations with firewall and proxy rules.
- Rotate the token with `/doctor dashboard setup` if it is exposed, then restart.
- Review reports and screenshots before sending them to anyone.

Never paste a dashboard token into a public issue, Discord channel, or configuration example. If you do not need web access, disable `doctor.dashboard.enabled` and restart.
