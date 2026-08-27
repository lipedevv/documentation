---
description: "Check changes around the time a problem began."
icon: code-compare
---

# Review recent changes

Run `/doctor changes` or use the dashboard to review available plugin and configuration changes. `/doctor timeline` currently shows the same recent-change list in the Universal edition.

Compare timestamps with the reported problem. A change occurring near an incident is useful context, but does not prove it caused the problem.

MRK Doctor does not watch every file or replace an external backup system. To undo a change, stop the server and follow the affected plugin vendor's supported recovery procedure using your own backup.

Change tracking can be enabled or disabled in [configuration](../configuration/overview.md).
