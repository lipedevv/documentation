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
| `doctor.dashboard.bind` | `127.0.0.1` | Listening address; keep local unless your secure hosting setup requires otherwise. |
| `doctor.dashboard.port` | `7854` | First service port; reserve the following port too. |
| `doctor.dashboard.cors-origin` | `http://127.0.0.1:3000` | Exact web dashboard origin. |
| `doctor.dashboard.token-hash` | Empty | Managed by `/doctor dashboard setup`; do not edit by hand. |
| `storage.raw-retention-hours` | `24` | Retention period for detailed metric history. |
| `logging.debug` | `false` | Leave at its default; it does not enable additional logging in this release. |

Use positive monitoring intervals and a valid port pair. Reducing intervals increases monitoring work; test changes on a staging server first.

{% hint style="warning" %}
Do not paste the dashboard token into configuration examples. Generate credentials through the command, and keep diagnostic ports protected.
{% endhint %}
