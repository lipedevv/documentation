---
description: "Los comandos disponibles para los administradores del servidor."
icon: terminal
---

> [English source](../../../mrk-doctor/reference/commands.md) · [Language home](../../README.md) · Machine-translated edition


<a id="commands"></a>
# Los comandos

Todos los comandos requieren `mrkdoctor.view`. Permisos por defecto para los operadores. Ver permisos [permissions](permissions.md) antes de delegar el acceso.

| El mando | Uso | Permiso adicional |
| --- | --- | --- |
| `/doctor` | Abre la visión general del juego; muestra el estado en la consola. | — |
| `/doctor status` | Muestre información de salud y tiempo de ejecución. | — |
| `/doctor health` | Muestre el mismo resumen de salud. | — |
| `/doctor incidents` | Enumera los incidentes abiertos. | — |
| `/doctor changes` | Muestre los cambios recientes rastreados. | — |
| `/doctor timeline` | Muestre la lista de cambios recientes en Universal. | — |
| `/permiso médico <player> <node>` |Compruebe el permiso de un jugador en línea. | — |
| `/doctor comando <player> <command>` | Check a command's owner and access. | — |
| `/doctor snapshot` | Guarde una instantánea de diagnóstico. | — |
| `/doctor report` | Generar un archivo de informe. | `mrkdoctor.report` |
| `/doctor dashboard` | Muestre la dirección de panel de control integrado configurada. | `mrkdoctor.dashboard` |
| `/doctor dashboard setup` | Crea y activa inmediatamente una nueva credencial de panel. | `mrkdoctor.dashboard` |
| `/doctor reload` | Remplazar valores de configuración; algunos cambios aún requieren reinicio. | `mrkdoctor.admin` |

Utilice los nombres exactos de los jugadores en línea para las comprobaciones de los jugadores. La dirección impresa por `/doctor dashboard` utiliza la dirección de enlace configurada; reemplaza `127.0.0.1` o `0.0.0.0` con el nombre de host público cuando se abre de forma remota.

La edición optimizada de papel también ofrece el plugin `/doctor <plugin>` para un resumen del plugin. Este comando no está disponible en Universal.

`/doctor trace` sólo muestra un aviso de disponibilidad en esta versión; no inicia un rastreo. No hay actualizaciones automáticas o comandos de retroceso.
