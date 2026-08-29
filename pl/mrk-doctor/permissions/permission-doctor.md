---
description: "Sprawdź problem z dostępem do gracza online."
icon: user-shield
---

> [English source](../../../mrk-doctor/permissions/permission-doctor.md) · [Language home](../../README.md) · Machine-translated edition


<a id="check-permissions-and-commands"></a>
# Sprawdź uprawnienia i polecenia

Gracz docelowy musi być w sieci.

```text
/doctor permission Steve essentials.warp
/doctor command Steve warp
```

Pierwsza polecenie sprawdza określone zezwolenie. Druga pomaga zidentyfikować wtyczkę polecenia i sprawdzić dostęp.

Jeśli dostęp nadal nie uszła, sprawdź syntaks polecenia, konfigurację grupy zezwoleń, ograniczenia świata i odstępów. MRK Doctor nie zmienia uprawnień gracza ani nie zastępuje menedżera zezwoleń.

Te kontrole są dostępne dla użytkowników z `mrkdoctor.view`, więc przyznaj ten węzeł tylko do zaufanych pracowników.
