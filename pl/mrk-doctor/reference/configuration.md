---
description: "Wspierane ustawienia klienta dla edycji Uniwersalnej."
icon: sliders
---

> [English source](../../../mrk-doctor/reference/configuration.md) · [Language home](../../README.md) · Machine-translated edition


<a id="configuration-reference"></a>
# Odniesienie do konfiguracji

Ta odniesienie obejmuje `plugins/MRKDoctor/config.yml` w edycji Uniwersalnej. Następny start po edycji, chyba że zweryfikowano zachowanie ponownego ładowania ustawień.

| Ustawienie | Wypłaty | Celem |
| --- | --- | --- |
| `doctor.server-id` | `standalone` | Etagla użyta na tym serwerze. |
| `doctor.performance.healthy-sample-seconds` | `15` | Interwał monitorowania podczas normalnego działania. |
| `doctor.performance.incident-sample-seconds` | `5` | Interwał monitorowania podczas incydentu. |
| `doctor.changes.enabled` | `true` | Umożliwić monitorowanie ostatnich zmian. |
| `doctor.changes.interval-seconds` | `30` | Interwał kontroli zmian; użyj co najmniej 10 sekund. |
| `doctor.changes.max-file-bytes` | `1048576` | Ograniczenie wielkości dla szczegółowych porównania plików tekstowych. |
| `doctor.dashboard.enabled` | `true` | Włącz podłączenie do deski. |
| `doctor.dashboard.bind` | `0.0.0.0` | Użyj `127.0.0.1` , gdy dostęp musi przejść przez odwrotny proxy. |
| `doctor.dashboard.port` | `7854` | Jedynki port wykorzystywany przez wbudowany desek napędowy i jego uwierzytelniony API. |
| `doctor.dashboard.cors-origin` | `http://127.0.0.1:7854` | Wybór dozwolony pochodzenia dla zaawansowanych implementacji proxy; dostęp z tym samym pochodzeniem nie wymaga oddzielnego adresu frontend. |
| `doctor.dashboard.token-hash` | Puste | Zarządzany przez `/doctor dashboard setup`; nie edytuj ręcznie. |
| `storage.raw-retention-hours` | `24` | Okres przechowywania szczegółowej historii metrycznej. |
| `logging.debug` | `false` | Zostaw w domyślnym miejscu; nie umożliwia dodatkowego zapisu w tym wydaniu. |

Wykorzystanie pozytywnych interwał monitorowania i ważnego portu deski napędowej.

{% hint style="warning" %}
Nie wkładaj tokenu deski rozdzielczej do przykładów konfiguracji.
{% endhint %}
