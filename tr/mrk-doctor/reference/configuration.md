---
description: "Universal baskısı için müşteri ayarları desteklenir."
icon: sliders
---

> [English source](../../../mrk-doctor/reference/configuration.md) · [Language home](../../README.md) · Machine-translated edition


<a id="configuration-reference"></a>
# Yapılandırma referansı

Bu referans, `plugins/MRKDoctor/config.yml` 'i Evrensel baskıda kapsar. Ayarın yeniden yüklenme davranışını doğrulmadığınız sürece düzenlemeden sonra yeniden başlatın.

| Yapılandırma | Öntanımlı | Amaç |
| --- | --- | --- |
| `doctor.server-id` | `standalone` | Bu sunucu için kullanılan etiket. |
| `doctor.performance.healthy-sample-seconds` | `15` | Normal çalışma sırasında izleme aralığı. |
| `doctor.performance.incident-sample-seconds` | `5` | Bir olay sırasında izleme aralığı. |
| `doctor.changes.enabled` | `true` | Son değişikliklerin izlenmesini sağlayın. |
| `doctor.changes.interval-seconds` | `30` | Değişiklik kontrol aralığı; en az 10 saniye kullanın. |
| `doctor.changes.max-file-bytes` | `1048576` | Detaylı metin dosya karşılaştırmaları için boyut sınırı. |
| `doctor.dashboard.enabled` | `true` | Çubuğu bağlantısını etkinleştir. |
| `doctor.dashboard.bind` | `0.0.0.0` | Server tahsisini dinle. erişim aynı host'taki ters vekil aracılığıyla geçmesi gerektiğinde `127.0.0.1` kullan. |
| `doctor.dashboard.port` | `7854` | Eklemiş donanım tablosunun ve doğrulanmış API'nin kullandığı tek port. |
| `doctor.dashboard.cors-origin` | `http://127.0.0.1:7854` | Gelişmiş proxy dağıtımları için seçeneği uygun olan kaynak; aynı kaynak erişiminin ayrı ön uç adresi gerekmez. |
| `doctor.dashboard.token-hash` | Boş | `/doctor dashboard setup`tarafından yönetilir; elle düzenleme yapmayın. |
| `storage.raw-retention-hours` | `24` | Detaylı metrik geçmiş için saklama süresi. |
| `logging.debug` | `false` | Öntanımlı olarak bırak; bu yayında ek kayıt yapımı mümkün değildir. |

Pozitif izleme aralıkları ve geçerli bir kontrol paneli portu kullanın. Aralıkları azaltmak izleme işini artırır; önce bir aşama sunucusunda test değişiklikleri.

{% hint style="warning" %}
Tablo belirtilerini yapılandırma örneklerine yapıştırmayın. Komut aracılığıyla yetenekler oluşturun ve teşhis limanını koruyun.
{% endhint %}
