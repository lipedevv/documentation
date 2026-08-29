---
description: "Investigar un problema de acceso de los jugadores en línea."
icon: user-shield
---

> [English source](../../../mrk-doctor/permissions/permission-doctor.md) · [Language home](../../README.md) · Machine-translated edition


<a id="check-permissions-and-commands"></a>
# Verifique los permisos y comandos

El jugador objetivo debe estar en línea.

```text
/doctor permission Steve essentials.warp
/doctor command Steve warp
```

El primer comando verifica el permiso especificado. El segundo ayuda a identificar el plugin del comando y comprobar el acceso. Proporcione el nombre del comando solo, sin argumentos adicionales.

Si el acceso todavía falla, revise la sintaxis del comando, la configuración de grupos de permisos, las restricciones mundiales y las descargas de enfriamiento. MRK Doctor no cambia los permisos de un jugador ni reemplaza a su administrador de permisos.

Estos controles están disponibles para los usuarios con `mrkdoctor.view`, así que conceda ese nodo solo al personal de confianza.
