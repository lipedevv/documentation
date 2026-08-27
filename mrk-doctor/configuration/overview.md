---
description: "Adjust settings without disrupting your installation."
icon: sliders
---

# Configuration

Edit `plugins/MRKDoctor/config.yml` with a YAML-aware text editor. Make a backup first and preserve indentation.

The default configuration is a good starting point. Change only settings you need, such as the server label, monitoring intervals, dashboard access, or history retention.

Restart after changing dashboard credentials, bind addresses, ports, or monitoring settings. `/doctor reload` is not a substitute for a full restart for these changes.

Use the [configuration reference](../reference/configuration.md) for the Universal edition. Do not copy additional settings from another edition and assume they will enable new features.
