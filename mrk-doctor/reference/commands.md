---
description: "Commands available to server administrators."
icon: terminal
---

# Commands

All commands require `mrkdoctor.view`. Permissions default to operators. See [permissions](permissions.md) before delegating access.

| Command | Use | Additional permission |
| --- | --- | --- |
| `/doctor` | Open the in-game overview; show status in console. | — |
| `/doctor status` | Show current health and runtime information. | — |
| `/doctor health` | Show the same health summary. | — |
| `/doctor incidents` | List open incidents. | — |
| `/doctor changes` | Show recent tracked changes. | — |
| `/doctor timeline` | Show the recent-change list in Universal. | — |
| `/doctor permission <player> <node>` | Check an online player's permission. | — |
| `/doctor command <player> <command>` | Check a command's owner and access. | — |
| `/doctor snapshot` | Save a diagnostic snapshot. | — |
| `/doctor report` | Generate a report file. | `mrkdoctor.report` |
| `/doctor dashboard` | Show the configured embedded dashboard address. | `mrkdoctor.dashboard` |
| `/doctor dashboard setup` | Create and immediately activate a new dashboard credential. | `mrkdoctor.dashboard` |
| `/doctor reload` | Reload configuration values; some changes still require restart. | `mrkdoctor.admin` |

Use exact online player names for player checks. The address printed by `/doctor dashboard` uses the configured bind address; replace `127.0.0.1` or `0.0.0.0` with the public hostname when opening it remotely.

The optimized Paper edition additionally offers `/doctor plugin <plugin>` for a plugin summary. This command is not available in Universal.

`/doctor trace` only displays an availability notice in this release; it does not start a trace. There are no automatic update or rollback commands.
