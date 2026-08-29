---
description: "A diagnosztikai hozzáférést titokban tartsa."
icon: shield-halved
---

> [English source](../../../mrk-doctor/dashboard/security.md) · [Language home](../../README.md) · Machine-translated edition


<a id="dashboard-security"></a>
# A kézi táblázat biztonsági

- Csak megbízható adminisztrátorokkal kell megosztani a hozzáférést.
- Használja a HTTPS-et a webes műszerpulthoz és biztonságos kapcsolatot biztosít a szolgáltatásaival.
- Tartsd a default helyi kötődéset, ha a szolgáltatások ugyanazon a host-on futnak.
- A tárolt elosztásokat védjük a tűzfal és a megbízatási szabályok segítségével.
- A jelvényet `/doctor dashboard setup` -val fordítsák, ha kitéve van.
- Ellenőrizd a jelentéseket és a képernyőképet, mielőtt elküldi őket bárkinek.

Soha ne takarítson be egy mérőpult jelképet egy nyilvános kérdésbe, Discord csatornába vagy konfigurációs példába. Ha nem kell web hozzáférés, letiltsa az `doctor.dashboard.enabled` -t és indítsa újra.
