---
description: "Держите диагностический доступ частным."
icon: shield-halved
---

> [English source](../../../mrk-doctor/dashboard/security.md) · [Language home](../../README.md) · Machine-translated edition


<a id="dashboard-security"></a>
# Безопасность панели управления

- Обмениваться доступом только с доверенными администраторами.
- Используйте HTTPS для веб-дашборда и защитите подключения к его услугам.
- Сохраняйте дефолтную локальную связь, когда службы работают на том же хосте.
- Защитите хостированные распределения с помощью брандмауэра и прокси-правил.
- Rotate the token with `/doctor dashboard setup` if it is exposed. The replacement is active immediately.
- Проверьте отчеты и скриншоты, прежде чем отправить их кому-либо.

Никогда не вставляйте токен панели управления в публичную проблему, канал Discord или пример конфигурации. Если вам не нужен веб-доступ, отключите `doctor.dashboard.enabled` и запустите его снова.
