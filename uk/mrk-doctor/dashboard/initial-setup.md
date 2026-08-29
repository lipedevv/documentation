---
description: "Конфігуруйте безпечний доступ до веб-парату."
icon: plug
---

> [English source](../../../mrk-doctor/dashboard/initial-setup.md) · [Language home](../../README.md) · Machine-translated edition


<a id="connect-the-dashboard"></a>
# З'єднати панель

{% stepper %}
{% step %}
<a id="create-a-credential"></a>
#### Створення акредитації
Запустити `/doctor dashboard setup` як оператор, скопіювати відображений токен негайно і зберігати його безпечно.
{% endstep %}
{% step %}
<a id="configure-the-address"></a>
#### Конфігуруйте адресу
У `plugins/MRKDoctor/config.yml`, встановити `doctor.dashboard.port` на виділений порт. Позаймовний `0.0.0.0` зв'язок слухає на розподіл сервера; змінити його на `127.0.0.1` , коли зворотний прокси на одному хості повинен бути єдиним прямим клієнтом.
{% endstep %}
{% step %}
<a id="open-the-embedded-dashboard"></a>
#### Відкрити вбудовану панель
Відкрийте `http://SERVER_ADDRESS:PORT` в браузері і введіть токен.
{% endstep %}
{% step %}
<a id="restart-only-after-connection-setting-changes"></a>
#### Відновлюйте тільки після змін налаштування підключення
Нові ж генеруються токенів, що активно працюють відразу. Відновлюйте сервер Minecraft тільки після зміни адреси зв'язку, порту або включеного стану.
{% endstep %}
{% endstepper %}

{% hint style="danger" %}
Не залишайте діагностичний порт незахищеним в громадському інтернеті. Захистійте віддалений доступ надійним реверсним прокси, TLS, і брандмауэром. Не розглядайте настройки веб-походження як заміну для аутентифікації.
{% endhint %}

Створення іншого токену негайно замінює акредитацію. Обновлення довіреного браузера новим токеном. Гляньте [Pterodactyl](pterodactyl.md) і [безпека](security.md).
