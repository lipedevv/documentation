---
description: "Prepare hosting allocations for the dashboard."
icon: cubes
---

# Pterodactyl hosting

Select one available allocation in your server panel, such as `7854`, and set `doctor.dashboard.port` to that port. No separate web application or second allocation is required.

Use the bind address required by your hosting network. A container's localhost address is not reachable from a separate container. If your host requires `0.0.0.0`, ensure the allocations are protected by its firewall or secure proxy before enabling access.

The web dashboard is served directly by the plugin. Follow [initial setup](initial-setup.md), restart after changing the bind address or port, and test the page using the allocated address.

{% hint style="warning" %}
Do not open unrestricted ports to solve a connection problem. If your plan does not let you select or expose an allocation, only the hosting provider can make an inbound dashboard port reachable; the plugin cannot bypass the host firewall.
{% endhint %}
