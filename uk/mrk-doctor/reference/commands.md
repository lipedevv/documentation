---
description: "Поручення доступні для адміністраторів сервера."
icon: terminal
---

> [English source](../../../mrk-doctor/reference/commands.md) · [Language home](../../README.md) · Machine-translated edition


<a id="commands"></a>
# Поручення

All commands require `mrkdoctor.view`. Permissions default to operators. See [permissions](permissions.md) before delegating access.

| Командування | Використання | Додаткове дозволення |
| --- | --- | --- |
| `/doctor` | Відкрити обзор ігри; показати стан в консолі. | — |
| `/doctor status` | Покажіть інформацію про стан здоров'я та час роботи. | — |
| `/doctor health` | Покажіть те ж резюме здоров'я. | — |
| `/doctor incidents` | Перелік відкритих інцидентів. | — |
| `/doctor changes` | Покажіть останні відстеження змін. | — |
| `/doctor timeline` | Покажіть список останніх змін в Universal. | — |
| `/дозвол лікаря <player> <node>` | Check an online player's permission. | — |
| `/доктор <player> <command>` | Check a command's owner and access. | — |
| `/doctor snapshot` | Зберігайте діагностичний снинок. | — |
| `/doctor report` | Створюйте файл звіту. | `mrkdoctor.report` |
| `/doctor dashboard` | Покажіть налаштований адресу вбудованої панелі панелі. | `mrkdoctor.dashboard` |
| `/doctor dashboard setup` | Створюйте і негайно активізуйте новий відомий номер панелі. | `mrkdoctor.dashboard` |
| `/doctor reload` | Перевантаження значень конфігурації; деякі зміни все ще вимагають перезавантаження. | `mrkdoctor.admin` |

Використовуйте точні імена онлайн-іграчів для перевірки гравців. Адреса, надрукована `/doctor dashboard` , використовує налаштований адрес зв'язку; заміньте `127.0.0.1` або `0.0.0.0` на публічне ім'я хостинг при відкритті його віддалено.

Оптимізована версія Paper також пропонує `/doctor плагин <plugin>` для резюме плагіну. Ця команда не доступна в Universal.

`/doctor trace` відображає лише повідомлення про доступність в цьому випуску; він не запускає відстеження.
