---
description: "Investigate an online player access problem."
icon: user-shield
---

# Check permissions and commands

The target player must be online. Use the exact player name.

```text
/doctor permission Steve essentials.warp
/doctor command Steve warp
```

The first command checks the specified permission. The second helps identify the command's plugin and check access. Supply the command name only, without additional arguments.

If access still fails, review the command's syntax, permission-group configuration, world restrictions, and cooldowns. MRK Doctor does not change a player's permissions or replace your permission manager.

These checks are available to users with `mrkdoctor.view`, so grant that node only to trusted staff.
