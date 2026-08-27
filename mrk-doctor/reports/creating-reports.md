---
description: "Prepare a useful report for support."
icon: file-lines
---

# Create and share a report

Run `/doctor report` as an operator or staff member with `mrkdoctor.report`. Wait for the completion message and open the reported file from `plugins/MRKDoctor/reports/`.

The Universal edition produces an HTML report that can be opened in a browser. The optimized Paper edition also produces a JSON companion.

Before sharing:

1. Read the complete report and remove unrelated information.
2. Look for credentials, private addresses, file paths, player details, and sensitive configuration values.
3. Share only the information required to investigate the issue.
4. Use a verified support destination.

{% hint style="danger" %}
Automatic masking does not guarantee that a report contains no secrets. Always review it yourself. Rotate any credential that has been exposed.
{% endhint %}

Include your Minecraft version, MRK Doctor version, a short description, reproduction steps, and the time the problem occurred. See [support](../../support.md).
