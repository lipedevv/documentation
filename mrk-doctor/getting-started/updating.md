---
description: "Replace an existing MRK Doctor installation."
icon: arrows-rotate
---

# Updating

1. Back up the server and the complete `plugins/MRKDoctor/` folder.
2. Stop the server normally.
3. Replace the old JAR with the new release of the same edition. Keep only one copy.
4. Review the release notes and compare the supplied configuration with your existing settings.
5. Start the server and check `/doctor status`, the dashboard, and the console.

{% hint style="warning" %}
A diagnostic snapshot is not a backup. Do not assume that missing configuration options will be added to an existing file automatically.
{% endhint %}
