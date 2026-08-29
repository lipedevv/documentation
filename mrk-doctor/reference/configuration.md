---
description: "Supported customer settings for the Universal edition."
icon: sliders
---

# Configuration reference

This reference covers `plugins/MRKDoctor/config.yml` in the Universal edition. Restart after editing unless you have verified the setting's reload behavior.

| Setting | Default | Purpose |
| --- | --- | --- |
| `doctor.server-id` | `standalone` | Label used for this server. |
| `doctor.performance.healthy-sample-seconds` | `15` | Monitoring interval during normal operation. |
| `doctor.performance.incident-sample-seconds` | `5` | Monitoring interval during an incident. |
| `doctor.changes.enabled` | `true` | Enable recent-change monitoring. |
| `doctor.changes.interval-seconds` | `30` | Change-check interval; use at least 10 seconds. |
| `doctor.changes.max-file-bytes` | `1048576` | Size limit for detailed text-file comparisons. |
| `doctor.dashboard.enabled` | `true` | Enable dashboard connectivity. |
| `doctor.dashboard.bind` | `0.0.0.0` | Listen on the server allocation. Use `127.0.0.1` when access must go through a same-host reverse proxy. |
| `doctor.dashboard.port` | `7854` | Single port used by the embedded dashboard and its authenticated API. |
| `doctor.dashboard.cors-origin` | `http://127.0.0.1:7854` | Optional allowed origin for advanced proxy deployments; same-origin access needs no separate frontend address. |
| `doctor.dashboard.token-hash` | Empty | Managed by `/doctor dashboard setup`; do not edit by hand. |
| `storage.raw-retention-hours` | `24` | Retention period for detailed metric history. |
| `logging.debug` | `false` | Leave at its default; it does not enable additional logging in this release. |

Use positive monitoring intervals and a valid dashboard port. Reducing intervals increases monitoring work; test changes on a staging server first.

{% hint style="warning" %}
Do not paste the dashboard token into configuration examples. Generate credentials through the command, and keep the diagnostic port protected.
{% endhint %}
