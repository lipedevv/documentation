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
#### Configure the address
In `plugins/MRKDoctor/config.yml`, set `doctor.dashboard.port` to the allocated port. The default `0.0.0.0` bind listens on the server allocation; change it to `127.0.0.1` when a reverse proxy on the same host should be the only direct client.
{% endstep %}
{% step %}
#### Open the embedded dashboard
Open `http://SERVER_ADDRESS:PORT` in a browser and enter the token. The dashboard UI, API, and automatic updates use this single configured port.
{% endstep %}
{% step %}
#### Restart only after connection-setting changes
A newly generated token is active immediately. Restart the Minecraft server only after changing the bind address, port, or enabled state.
{% endstep %}
{% endstepper %}

{% hint style="danger" %}
Do not leave the diagnostic port unprotected on the public internet. Protect remote access with a trusted reverse proxy, TLS, and a firewall. Do not treat a web-origin setting as a substitute for authentication.
{% endhint %}

Creating another token replaces the credential immediately. Update trusted browsers with the new token. See [Pterodactyl](pterodactyl.md) and [security](security.md).
