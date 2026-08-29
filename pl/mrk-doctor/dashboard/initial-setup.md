---
description: "Konfigurować bezpieczny dostęp do deski kontrolnej."
icon: plug
---

> [English source](../../../mrk-doctor/dashboard/initial-setup.md) · [Language home](../../README.md) · Machine-translated edition


<a id="connect-the-dashboard"></a>
# Podłącz panel

{% stepper %}
{% step %}
<a id="create-a-credential"></a>
#### Utworz akredytację
Uruchomić `/doctor dashboard setup` jako operator.
{% endstep %}
{% step %}
<a id="configure-the-address"></a>
#### Konfiguracja adresu
W `plugins/MRKDoctor/config.yml`ustawić `doctor.dashboard.port` do przydzielonego portu. Domyślny `0.0.0.0` bind słucha na przydział serwera; zmienić go na `127.0.0.1` , gdy odwrotny proxy na tym samym host powinien być jedynym bezpośrednim klientem.
{% endstep %}
{% step %}
<a id="open-the-embedded-dashboard"></a>
#### Otwórz wbudowany desek napędowy
Otwórz `http://SERVER_ADDRESS:PORT` w przeglądarce i wprowadź token. Użytkownik widokowy, API i automatyczne aktualizacje używają tego pojedynczego skonfigurowanego portu.
{% endstep %}
{% step %}
<a id="restart-only-after-connection-setting-changes"></a>
#### Po zmianie ustawień łączenia uruchomić ponownie
Nowo generowany token jest aktywny natychmiast. ponownie uruchomić serwer Minecraft tylko po zmianie adresu bind, portu lub włączonego stanu.
{% endstep %}
{% endstepper %}

{% hint style="danger" %}
Nie pozostawiaj portów diagnostycznych bez zabezpieczeń w publicznym internecie. Ochroni zdalny dostęp za pomocą wiarygodnego proxy odwrotnego, TLSi zapory zapalne. Nie traktuj ustawień pochodzenia sieci jako substytutu uwierzytelniania.
{% endhint %}

Creating another token replaces the credential immediately. Update trusted browsers with the new token. See [Pterodactyl](pterodactyl.md) and [security](security.md).
