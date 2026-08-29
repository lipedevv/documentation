---
description: "Undersök ett problem med tillgång till online-spelare."
icon: user-shield
---

> [English source](../../../mrk-doctor/permissions/permission-doctor.md) · [Language home](../../README.md) · Machine-translated edition


<a id="check-permissions-and-commands"></a>
# Kontrollera behörigheter och kommandon

- Målet måste vara online.

```text
/doctor permission Steve essentials.warp
/doctor command Steve warp
```

Det första kommandot kontrollerar den angivna behörigheten. Det andra hjälper till att identifiera kommandot plugin och kontrollera åtkomst.

Om åtkomst fortfarande misslyckas, se över kommandets syntax, behörighetsgruppkonfiguration, världsbegränsningar och nedkylningar. MRK Doctor ändrar inte en spelare behörigheter eller ersätter din behörighetshanterare.

Dessa kontroller är tillgängliga för användare med `mrkdoctor.view`, så ge den knuten endast till betrodd personal.
