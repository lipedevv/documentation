---
description: "Ondersteunde klantinstellingen voor de Universele editie."
icon: sliders
---

> [English source](../../../mrk-doctor/reference/configuration.md) · [Language home](../../README.md) · Machine-translated edition


<a id="configuration-reference"></a>
# Configuratieverwijzing

Deze verwijzing omvat `plugins/MRKDoctor/config.yml` in de Universele editie. Herstarte na bewerking tenzij u het herladen gedrag van de instelling hebt geverifieerd.

| Inrichting | Default | Doel |
| --- | --- | --- |
| `doctor.server-id` | `standalone` | Het etiket dat voor deze server is gebruikt. |
| `doctor.performance.healthy-sample-seconds` | `15` | Monitoringinterval tijdens de normale werking. |
| `doctor.performance.incident-sample-seconds` | `5` | Monitoringinterval tijdens een incident. |
| `doctor.changes.enabled` | `true` | Bevat de monitoring van recente veranderingen. |
| `doctor.changes.interval-seconds` | `30` | Veranderingsinterval; gebruik ten minste 10 seconden. |
| `doctor.changes.max-file-bytes` | `1048576` | Grootte limiet voor gedetailleerde tekstbestandvergelijkingen. |
| `doctor.dashboard.enabled` | `true` | Dashboard-connectiviteit mogelijk maken. |
| `doctor.dashboard.bind` | `0.0.0.0` | Gebruik `127.0.0.1` als de toegang moet gaan via een omgekeerde proxy van dezelfde host. |
| `doctor.dashboard.port` | `7854` | Een enkele poort die wordt gebruikt door het ingebouwde dashboard en zijn geautenticeerde API. |
| `doctor.dashboard.cors-origin` | `http://127.0.0.1:7854` | Optional toegestane oorsprong voor geavanceerde proxy-implementaties; toegang met dezelfde oorsprong heeft geen apart frontend-adres nodig. |
| `doctor.dashboard.token-hash` | Vloeg | Beheerbaar door `/doctor dashboard setup`; handmatig niet bewerken. |
| `storage.raw-retention-hours` | `24` | Behoudstermijn voor gedetailleerde metrische geschiedenis. |
| `logging.debug` | `false` | Laat het standaard achter; het maakt geen extra logging mogelijk in deze release. |

Gebruik positieve monitoringintervallen en een geldige dashboardpoort.

{% hint style="warning" %}
Pas de dashboard-token niet in configuratie voorbeelden.
{% endhint %}
