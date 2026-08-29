---
description: "Configurar acceso seguro al panel de control web."
icon: plug
---

> [English source](../../../mrk-doctor/dashboard/initial-setup.md) · [Language home](../../README.md) · Machine-translated edition


<a id="connect-the-dashboard"></a>
# Conecta el panel de control

{% stepper %}
{% step %}
<a id="create-a-credential"></a>
#### Crear una credencial
ejecuta `/doctor dashboard setup` como operador, copia el token mostrado inmediatamente y almacenalo de forma segura.
{% endstep %}
{% step %}
<a id="configure-the-address"></a>
#### Configurar la dirección
En `plugins/MRKDoctor/config.yml`, configure `doctor.dashboard.port` en el puerto asignado. El enlace `0.0.0.0` predeterminado se escucha en la asignación del servidor; cambie a `127.0.0.1` cuando un proxy inverso en el mismo host debe ser el único cliente directo.
{% endstep %}
{% step %}
<a id="open-the-embedded-dashboard"></a>
#### Abre el panel de control incrustado
Abre `http://SERVER_ADDRESS:PORT` en un navegador e ingresa el token. La interfaz de usuario del panel, la API y las actualizaciones automáticas utilizan este puerto configurado único.
{% endstep %}
{% step %}
<a id="restart-only-after-connection-setting-changes"></a>
#### Reiniciar sólo después de cambios en la configuración de conexión
Un token recién generado se activa inmediatamente. Reinicia el servidor Minecraft solo después de cambiar la dirección de enlace, puerto o estado habilitado.
{% endstep %}
{% endstepper %}

{% hint style="danger" %}
No deje el puerto de diagnóstico desprotegido en Internet público. Proteja el acceso remoto con un proxy inverso de confianza, TLS, y un firewall. No trate un entorno de origen web como un sustituto de la autenticación.
{% endhint %}

La creación de otro token reemplaza inmediatamente la credencial. Actualizar navegadores de confianza con el nuevo token. Ver [Pterodactyl](pterodactyl.md) y [seguridad](security.md).
