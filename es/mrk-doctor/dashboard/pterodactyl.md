---
description: "Prepárese las asignaciones de alojamiento para el panel de control."
icon: cubes
---

> [English source](../../../mrk-doctor/dashboard/pterodactyl.md) · [Language home](../../README.md) · Machine-translated edition


<a id="pterodactyl-hosting"></a>
# Alojamiento dePterodactyl

Seleccione una asignación disponible en el panel de servidor, como `7854`, y configure `doctor.dashboard.port` en ese puerto. No se requiere ninguna aplicación web separada o segunda asignación.

Utilice la dirección de enlace requerida por su red de alojamiento. La dirección localhost de un contenedor no se puede acceder desde un contenedor separado. Si su host requiere `0.0.0.0`, asegúrese de que las asignaciones estén protegidas por su firewall o proxy seguro antes de habilitar el acceso.

El panel web es servidor directamente por el plugin. Siga la configuración inicial de [initial setup](initial-setup.md), reinicie después de cambiar la dirección de enlace o puerto y testee la página utilizando la dirección asignada.

{% hint style="warning" %}
No abra puertos sin restricciones para resolver un problema de conexión. Si su plan no le permite seleccionar o exponer una asignación, solo el proveedor de alojamiento puede hacer accesible un puerto de panel de control entrante; el plugin no puede eludir el firewall del host.
{% endhint %}
