---
description: "Verificación práctica de problemas comunes."
icon: screwdriver-wrench
---

> [English source](../../../mrk-doctor/support/troubleshooting.md) · [Language home](../../README.md) · Machine-translated edition


<a id="troubleshooting"></a>
# Solución de problemas

<a id="plugin-will-not-start"></a>
## El plug-in no se inicia

Confirme que ha instalado la edición correcta y solo un MRK Doctor JAR. Compruebe los requisitos de Java del servidor, el espacio en disco libre, los permisos de archivo y el primer error de consola relevante. Reinicie normalmente después de corregir el problema.

<a id="server-is-lagging-or-shows-errors"></a>
## El servidor está atrasado o muestra errores

Registra el inicio del problema. Compruebe `/doctor status`, incidentes abiertos y cambios recientes. Revise los errores de la consola del plugin afectado, luego [crea un informe](../reports/creating-reports.md). Prueba un cambio reversible a la vez utilizando una copia de seguridad.

<a id="dashboard-will-not-connect"></a>
## El panel no se conecta

Confirmar MRK Doctor está habilitado y abrir la dirección de la pizarra integrada configurada. Compruebe la dirección de enlace, asignación de alojamiento único, cortafuegos, ruta de proxy y puerto configurado. Un token recién generado se activa de inmediato. Nunca deshabilite la seguridad o exponga un puerto sin restricciones como solución de solución.

<a id="a-player-cannot-use-a-command"></a>
## Un jugador no puede usar un comando

Check the exact command, the player's permission, world restrictions, and the owning plugin's configuration. Follow [permission checks](../permissions/permission-doctor.md).

<a id="memory-keeps-increasing"></a>
## La memoria sigue aumentando

Observe el uso a lo largo del tiempo y compártala con la actividad del jugador. Una lectura alta no es prueba de una filtración o propiedad de un plugin. Utilice las herramientas de perfilado de su servidor cuando se necesite más detalles.

<a id="reports-or-history-are-unavailable"></a>
## No hay informes o historial disponibles

Compruebe el espacio libre en el disco y los permisos de lectura/escritura para `plugins/MRKDoctor/`. Detenga el servidor y haga una copia de seguridad de la carpeta completa antes de intentar las reparaciones. No elimine los archivos de datos para solucionar un problema sin una copia de seguridad verificada.

<a id="monitoring-overhead-seems-high"></a>
## El coste de vigilancia parece alto .

Regresar los intervalos de monitoreo a sus valores predeterminados, evitar el seguimiento de archivos de texto innecesariamente grandes y comparar el rendimiento bajo carga similar. Si persiste, envíe registros y configuraciones relevantes a través de [soporte](../../support.md), sin credenciales.
