---
description: "Configure secure access to the web dashboard."
icon: plug
---

# Connect the dashboard

{% stepper %}
{% step %}
#### Create a credential
Run `/doctor dashboard setup` as an operator. Copy the displayed token immediately and store it securely.
{% endstep %}
{% step %}
#### Configure the addresses
In `plugins/MRKDoctor/config.yml`, keep `doctor.dashboard.bind` as `127.0.0.1` when the web proxy runs on the same host. The default service ports are `7854` and `7855`. Set `doctor.dashboard.cors-origin` to the exact web dashboard address, including scheme and any port.
{% endstep %}
{% step %}
#### Configure the web application
The administrator hosting the dashboard must set `NEXT_PUBLIC_DOCTOR_API` and `NEXT_PUBLIC_DOCTOR_WS` to the reachable service addresses before building the web application. Use HTTPS and WSS for remote access.
{% endstep %}
{% step %}
#### Restart and connect
Restart the Minecraft server after credential or connection-setting changes. Open the dashboard and enter the token.
{% endstep %}
{% endstepper %}

{% hint style="danger" %}
Never expose the diagnostic ports directly to the public internet. Protect remote access with a trusted reverse proxy, TLS, and a firewall. Do not treat a web-origin setting as a substitute for authentication.
{% endhint %}

Creating another token replaces the credential after restart. Update trusted browsers with the new token. See [Pterodactyl](pterodactyl.md) and [security](security.md).
