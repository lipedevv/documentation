---
description: "Przygotuj alokacje hostingu dla deski."
icon: cubes
---

> [English source](../../../mrk-doctor/dashboard/pterodactyl.md) · [Language home](../../README.md) · Machine-translated edition


<a id="pterodactyl-hosting"></a>
# HostającyPterodactyl

Wybierz dostępne alokacje w paneli serwera, takie jak `7854`, i ustaw `doctor.dashboard.port` na port.

Użyj adresu bind wymaganej przez sieć hostingową. adres lokalnego hostu kontenera nie jest dostępny z oddzielnego kontenera. Jeśli host wymaga `0.0.0.0`, upewnij się, że alokacje są chronione przez jego zapalnik firewall lub bezpieczny proxy przed włączeniem dostępu.

Web Dashboard jest obsługiwany bezpośrednio przez wtyczkę. Idź po wstępnej konfiguracji [initial setup](initial-setup.md), uruchomi ponownie po zmianie adresu bind lub portu i przetestować stronę za pomocą przyznanego adresu.

{% hint style="warning" %}
Nie otwieraj nieograniczonych portów w celu rozwiązania problemu połączenia. Jeśli plan nie pozwala wybierać lub ujawnić alokacji, tylko dostawca hostingu może udostępnić port wchodzącego deski napędowej; wtyczka nie może obejść zapory zapalnej hostingu.
{% endhint %}
