---
description: "Ajuste las configuraciones sin interrumpir la instalación."
icon: sliders
---

> [English source](../../../mrk-doctor/configuration/overview.md) · [Language home](../../README.md) · Machine-translated edition


<a id="configuration"></a>
# Configuración

Editar `plugins/MRKDoctor/config.yml` con un editor de texto consciente de YAML. Hacer una copia de seguridad primero y conservar la incisión.

La configuración predeterminada es un buen punto de partida. Cambiar sólo las configuraciones que necesita, como la etiqueta del servidor, los intervalos de monitoreo, el acceso al panel de instrumentos o la retención de historial.

Las credenciales de dashboard generadas por `/doctor dashboard setup` se activan inmediatamente. Reiniciar después de cambiar las direcciones de enlace, puertos, estado habilitado o configuraciones de monitoreo. `/doctor reload` no sustituye un reinicio completo para esos cambios de conexión y ciclo de vida.

Utilice la referencia de configuración [configuration reference](../reference/configuration.md) para la edición Universal. No copie configuraciones adicionales de otra edición y asuma que habilitarán nuevas funciones.
