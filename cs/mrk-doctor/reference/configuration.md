---
description: "Podporované nastavení zákazníků pro univerzální edici."
icon: sliders
---

> [English source](../../../mrk-doctor/reference/configuration.md) · [Language home](../../README.md) · Machine-translated edition


<a id="configuration-reference"></a>
# Odkaz na konfiguraci

Tento odkaz se vztahuje na `plugins/MRKDoctor/config.yml` v univerzálním vydání. Opětovné spuštění po úpravě, pokud jste ověřili nastavení přepínání.

| Nastavení | Zvypadné | Účelem |
| --- | --- | --- |
| `doctor.server-id` | `standalone` | Na serveru použité označení. |
| `doctor.performance.healthy-sample-seconds` | `15` | Průchodní interval během běžného provozu. |
| `doctor.performance.incident-sample-seconds` | `5` | Monitorovací interval během incidentu. |
| `doctor.changes.enabled` | `true` | Umožnit sledování nedávných změn. |
| `doctor.changes.interval-seconds` | `30` | Interval změny; použít alespoň 10 sekund. |
| `doctor.changes.max-file-bytes` | `1048576` | Omezení velikosti pro podrobné srovnání textových souborů. |
| `doctor.dashboard.enabled` | `true` | Vypnout připojení k palubní desce. |
| `doctor.dashboard.bind` | `0.0.0.0` | Použijte `127.0.0.1` , když přístup musí jít přes reverzní proxy stejného hostitele. |
| `doctor.dashboard.port` | `7854` | Jednotný port používaný vestavěnou palubní deskou a její autentifikovanou API. |
| `doctor.dashboard.cors-origin` | `http://127.0.0.1:7854` | Vyběrný povolený původ pro pokročilé proxy nasazení; přístup stejného původu nepotřebuje samostatnou frontendovou adresu. |
| `doctor.dashboard.token-hash` | Prázdné | Správce `/doctor dashboard setup`; ručně neřídit. |
| `storage.raw-retention-hours` | `24` | Dlouhodobá databáze pro detailní metrickou historii. |
| `logging.debug` | `false` | Zanechte se podle předchozího nastavení; v tomto vydání není umožněno další zaznamenávání. |

Použijte pozitivní intervaly monitorování a platný port palubní desky.

{% hint style="warning" %}
Nepomeňte přilepovat symbol v příkladu konfigurace.
{% endhint %}
