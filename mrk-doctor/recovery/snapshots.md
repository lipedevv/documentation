---
description: "Capture diagnostic information before making changes."
icon: camera
---

# Save a diagnostic snapshot

Run `/doctor snapshot`. The command reports the path of the generated file in `plugins/MRKDoctor/snapshots/`.

Keep a snapshot when investigating a problem or before changing a plugin configuration. Review it for sensitive information before sharing it.

{% hint style="warning" %}
A snapshot is a diagnostic record, not a server backup. It cannot restore worlds, plugin files, configuration, or the complete MRK Doctor data folder. Maintain separate backups.
{% endhint %}
