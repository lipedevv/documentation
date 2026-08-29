---
description: "Genel sorunlar için pratik kontroller."
icon: screwdriver-wrench
---

> [English source](../../../mrk-doctor/support/troubleshooting.md) · [Language home](../../README.md) · Machine-translated edition


<a id="troubleshooting"></a>
# Sorun çözümü

<a id="plugin-will-not-start"></a>
## Eklentisi başlatılmayacak

Doğru sürümü ve sadece bir MRK Doctor JAR kurduğunuzu onaylayın. Sunucunun Java gereksinimlerini, boş disk alanını, dosya izinlerini ve ilk ilgili konsol hatasını kontrol edin. Sorunu düzelten sonra normal olarak yeniden başlatın.

<a id="server-is-lagging-or-shows-errors"></a>
## Sunucu geride kalıyor veya hatalar gösteriyor

Sorunun başladığı zamanı kaydet. `/doctor status`, açık olayları ve son değişiklikleri kontrol edin. Etkili eklenti konsol hatalarını gözden geçirin, sonra [bir rapor oluşturur](../reports/creating-reports.md). Bir defter kullanarak bir seferde bir geri dönüştürülebilir değişiklik denemek.

<a id="dashboard-will-not-connect"></a>
## Çubuğu bağlanmayacak

MRK Doctor etkinleştirildiğini ve yapılandırılmış gömülü donanım paneli adresini açtığını onaylayın. Bağlantı adresini, tek barındırma tahsisini, güvenlik duvarını, vekil yolu ve yapılandırılmış portu kontrol edin. Yeni oluşturulan bir token hemen aktifdir. Güvenliği asla devre dışı bırakmayın veya sınırsız bir portu bir çözüm olarak açmayın.

<a id="a-player-cannot-use-a-command"></a>
## Bir oyuncu bir komut kullanamaz.

Tam komutu, oyuncunun izinlerini, dünya kısıtlamalarını ve sahip olan eklentilerin yapılandırmasını kontrol edin. [izin kontrollerini takip edin](../permissions/permission-doctor.md).

<a id="memory-keeps-increasing"></a>
## Hatıra artmaya devam ediyor .

Kullanımı zaman içinde gözlemleyin ve oyuncu etkinliği ile karşılaştırın. Bir yüksek okuma sızıntı veya eklenti sahibilik kanıtı değildir. Daha fazla ayrıntı gerektiğinde sunucunuzun desteklediği profil oluşturma araçlarını kullanın.

<a id="reports-or-history-are-unavailable"></a>
## Raporlar veya tarih mevcut değil

Boş disk alanını ve `plugins/MRKDoctor/`için okuma/yazma izinlerini kontrol edin. Serveri durdurun ve tamir girişiminden önce tüm klasörün yedeklenmesini yapın. Doğrulanmış yedeklenmeden bir sorunu çözmek için veri dosyalarını silmeyin.

<a id="monitoring-overhead-seems-high"></a>
## İzleme maliyeti yüksek görünüyor.

İzleme aralıkları öntanımlı olarak geri döndürülür, gereksiz büyük metin dosyalarını izlemeyi önler ve benzer yük altında performansları karşılaştırır. Eğer devam ederse, ilgili güncellemeleri ve ayarları [desteği aracılığıyla gönderin](../../support.md), tanıtım olmadan.
