---
description: "Sunucu yöneticileri için mevcut komutlar."
icon: terminal
---

> [English source](../../../mrk-doctor/reference/commands.md) · [Language home](../../README.md) · Machine-translated edition


<a id="commands"></a>
# Komutlar

All commands require `mrkdoctor.view`. Permissions default to operators. See [permissions](permissions.md) before delegating access.

| Komutanlık | Kullanım | Ek izin |
| --- | --- | --- |
| `/doctor` | Oyun içi genel bakış aç; konsolda durum göster. | — |
| `/doctor status` | Güncel sağlık ve çalışma süresi bilgileri göster. | — |
| `/doctor health` | Aynı sağlık özetini göster. | — |
| `/doctor incidents` | Açık olayları listele. | — |
| `/doctor changes` | Son izlenen değişiklikleri göster. | — |
| `/doctor timeline` | Universal'de son değişiklikler listesini göster. | — |
| `/doktor izni <player> <node>` |Bir çevrimiçi oyuncunun izinini kontrol edin. | — |
| `/doctor komut <player> <command>` |Komut sahibi ve erişimini kontrol edin. | — |
| `/doctor snapshot` | - Diagnostik bir anlık fotoğraf kaydet. | — |
| `/doctor report` | Rapor dosyası oluşturun. | `mrkdoctor.report` |
| `/doctor dashboard` | Yapılandırılmış gömülü ekran adresini göster. | `mrkdoctor.dashboard` |
| `/doctor dashboard setup` | Yeni bir dashboard kimliği oluşturup hemen etkinleştir. | `mrkdoctor.dashboard` |
| `/doctor reload` | Yapılandırma değerlerini yeniden yükle; bazı değişiklikler hala yeniden başlatılmalıdır. | `mrkdoctor.admin` |

`/doctor dashboard` tarafından yazdırılan adres, yapılandırılmış bağlama adresini kullanır; uzaktan açıldığında `127.0.0.1` veya `0.0.0.0` 'i kamu host adı ile değiştirir.

Optimized Paper Edition ayrıca `/doctor eklentisini sunar <plugin>` bir eklenti özet için. Bu komut Universal'de mevcut değildir.

`/doctor trace` sadece bu sürümde bir kullanılabilirlik bildirimi görüntüler; izleme başlatmaz. Otomatik güncelleme veya geri dönüş komutları yoktur.
