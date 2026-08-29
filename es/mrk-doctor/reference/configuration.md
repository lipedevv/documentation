---
description: "Se soportan las configuraciones del cliente para la edición universal."
icon: sliders
---

> [English source](../../../mrk-doctor/reference/configuration.md) · [Language home](../../README.md) · Machine-translated edition


<a id="configuration-reference"></a>
# Referencia de configuración

Esta referencia cubre `plugins/MRKDoctor/config.yml` en la edición universal. Reinicia después de editar a menos que haya verificado el comportamiento de recarga de la configuración.

| Configuración | Por defecto | Propósito |
| --- | --- | --- |
| `doctor.server-id` | `standalone` | Etiqueta utilizada para este servidor. |
| `doctor.performance.healthy-sample-seconds` | `15` | Intervalo de seguimiento durante el funcionamiento normal. |
| `doctor.performance.incident-sample-seconds` | `5` | Intervalo de seguimiento durante un incidente. |
| `doctor.changes.enabled` | `true` | Habilitar el seguimiento de cambios recientes. |
| `doctor.changes.interval-seconds` | `30` | Intervalo de control de cambios; utilice al menos 10 segundos. |
| `doctor.changes.max-file-bytes` | `1048576` | Limite de tamaño para las comparaciones detalladas de archivos de texto. |
| `doctor.dashboard.enabled` | `true` | Habilitar la conectividad del panel. |
| `doctor.dashboard.bind` | `0.0.0.0` | Escucha la asignación del servidor. Usa `127.0.0.1` cuando el acceso debe pasar a través de un proxy inverso del mismo host. |
| `doctor.dashboard.port` | `7854` | Puerto único utilizado por el panel de control integrado y su API autenticada. |
| `doctor.dashboard.cors-origin` | `http://127.0.0.1:7854` | Origen permitido opcional para implementaciones avanzadas de proxy; el acceso de la misma origen no requiere una dirección frontend separada. |
| `doctor.dashboard.token-hash` | En vacío | Administrado por `/doctor dashboard setup`; no se edite a mano. |
| `storage.raw-retention-hours` | `24` | Periodo de retención para el historial métrico detallado. |
| `logging.debug` | `false` | Deje en su estado predeterminado; no permite registro adicional en esta versión. |

Utilice intervalos de monitoreo positivos y un puerto de panel válido. Reducir los intervalos aumenta el trabajo de monitoreo; primero, prueba los cambios en un servidor de puesta en escena.

{% hint style="warning" %}
No pongan el token del panel de control en ejemplos de configuración. Generar credenciales a través del comando, y mantener el puerto de diagnóstico protegido.
{% endhint %}
