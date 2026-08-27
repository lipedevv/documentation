---
description: "Give staff only the access they need."
icon: user-shield
---

# Permissions

All MRK Doctor permissions default to operators. `mrkdoctor.view` is required for every command, including those with an additional permission.

| Permission | Access |
| --- | --- |
| `mrkdoctor.view` | View diagnostics, list incidents and changes, create snapshots, and perform permission/command checks. |
| `mrkdoctor.report` | Create reports. |
| `mrkdoctor.dashboard` | View dashboard connection details and replace its credential. |
| `mrkdoctor.admin` | Administrative access, including reload and the permissions above. |

{% hint style="warning" %}
Do not grant diagnostic permissions to ordinary players. Reports and connection settings may contain sensitive information.
{% endhint %}

The reserved nodes `mrkdoctor.trace`, `mrkdoctor.rollback`, and `mrkdoctor.update` do not unlock tracing, rollback, or automatic updates in this release.
