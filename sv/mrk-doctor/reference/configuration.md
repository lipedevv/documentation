---
description: "Stödda kundinställningar för den universella utgåvan."
icon: sliders
---

> [English source](../../../mrk-doctor/reference/configuration.md) · [Language home](../../README.md) · Machine-translated edition


<a id="configuration-reference"></a>
# Konfigurationsreferens

Denna referens omfattar `plugins/MRKDoctor/config.yml` i den universella utgåvan. Start igen efter redigering om du inte har verifierat inställningens laddning.

| Inställning | Förstblandning | Syftet |
| --- | --- | --- |
| `doctor.server-id` | `standalone` | Etikett som används för denna server. |
| `doctor.performance.healthy-sample-seconds` | `15` | Kontrollintervall under normal drift. |
| `doctor.performance.incident-sample-seconds` | `5` | Monitoringintervall under en incident. |
| `doctor.changes.enabled` | `true` | Möjliggöra övervakning av nyligen genomförda förändringar. |
| `doctor.changes.interval-seconds` | `30` | Ändringskontrollintervall; använd minst 10 sekunder. |
| `doctor.changes.max-file-bytes` | `1048576` | Gränsbegränsning för detaljerade jämförelser av textfiler. |
| `doctor.dashboard.enabled` | `true` | Aktiverar instrumentpanelanslutning. |
| `doctor.dashboard.bind` | `0.0.0.0` | Lyssna på servertilldelningen. Använd `127.0.0.1` när åtkomst måste gå genom en omvänd proxy. |
| `doctor.dashboard.port` | `7854` | En enkel port som används av den inbäddade instrumentpanelen och dess autentifierade API. |
| `doctor.dashboard.cors-origin` | `http://127.0.0.1:7854` | Tillåtna ursprung för avancerade proxy-utbyggnader; åtkomst med samma ursprung behöver inte ha en separat frontendadress. |
| `doctor.dashboard.token-hash` | Tömt | Förvaltas av `/doctor dashboard setup`; redigera inte manuellt. |
| `storage.raw-retention-hours` | `24` | Förvaringsperiod för detaljerad metrisk historia. |
| `logging.debug` | `false` | Lämna det i standardform; det tillåter inte ytterligare loggning i denna release. |

Använd positiva övervakningsintervall och en giltig instrumentpanelport.

{% hint style="warning" %}
Lämna inte instrumentpanelen i konfigurationsexemplar. Generera legitimationer genom kommandan och håll den diagnostiska hamnen skyddad.
{% endhint %}
