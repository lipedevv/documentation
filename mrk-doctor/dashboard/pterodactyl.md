---
description: "Prepare hosting allocations for the dashboard."
icon: cubes
---

# Pterodactyl hosting

Ask your host for two adjacent service allocations, such as `7854` and `7855`. Set `doctor.dashboard.port` to the first allocation.

Use the bind address required by your hosting network. A container's localhost address is not reachable from a separate container. If your host requires `0.0.0.0`, ensure the allocations are protected by its firewall or secure proxy before enabling access.

The web dashboard still needs separate hosting. Follow [initial setup](initial-setup.md), restart the Minecraft server, and test the page from the address your administrators will actually use.

{% hint style="warning" %}
Do not open unrestricted ports to solve a connection problem. Ask the host to confirm the private route and HTTPS configuration.
{% endhint %}
