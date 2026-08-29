---
description: "Sólo dé al personal el acceso que necesiten."
icon: user-shield
---

> [English source](../../../mrk-doctor/reference/permissions.md) · [Language home](../../README.md) · Machine-translated edition


<a id="permissions"></a>
# Permisos

Todos los permisos de MRK Doctor son de uso predeterminado para los operadores. `mrkdoctor.view` es necesario para todos los comandos, incluidos los que tienen un permiso adicional.

| Permiso | Acceso |
| --- | --- |
| `mrkdoctor.view` | Visualizar diagnósticos, enumerar incidentes y cambios, crear instantáneas y realizar controles de permisos/comando. |
| `mrkdoctor.report` | Crear informes. |
| `mrkdoctor.dashboard` | Ver los detalles de conexión del panel y reemplazar su credencial. |
| `mrkdoctor.admin` | Acceso administrativo, incluida la recarga y los permisos anteriores. |

{% hint style="warning" %}
No otorgue permisos de diagnóstico a los jugadores comunes.
{% endhint %}

Los nodos reservados `mrkdoctor.trace`, `mrkdoctor.rollback`y `mrkdoctor.update` no desbloquean el rastreo, el retroceso o las actualizaciones automáticas en esta versión.
