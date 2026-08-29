---
description: "Mantenga el acceso de diagnóstico privado."
icon: shield-halved
---

> [English source](../../../mrk-doctor/dashboard/security.md) · [Language home](../../README.md) · Machine-translated edition


<a id="dashboard-security"></a>
# Seguridad del panel de instrumentos

- Compartir el acceso sólo con administradores de confianza.
- Utilice HTTPS para el panel de control de la web y conexiones seguras a sus servicios.
- Mantenga la vinculación local predeterminada cuando los servicios se ejecutan en el mismo host.
- Proteja las asignaciones alojadas con firewall y reglas de proxy.
- Gira el token con `/doctor dashboard setup` si está expuesto. El reemplazo está activo inmediatamente.
- Revise los informes y las capturas de pantalla antes de enviarlas a alguien.

Nunca ponga un token de dashboard en un problema público, canal Discord o ejemplo de configuración. Si no necesita acceso a la web, deshabilite `doctor.dashboard.enabled` y reinicie.
