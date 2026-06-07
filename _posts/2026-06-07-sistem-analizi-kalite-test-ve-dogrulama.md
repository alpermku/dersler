---
layout: post
title: "Kalite, Test ve Doğrulama: Yazılımın Gerçekten Çalıştığını Nasıl Anlarız?"
date: 2026-06-07 13:06:00 +0300
categories: sistem-analizi-ve-tasarimi
course_id: sistem-analizi-ve-tasarimi
tags: [sistem-analizi, yazılım-kalitesi, test, doğrulama, test-case, regresyon]
---

Bir yazılımın çalışıyor görünmesiyle gerçekten güvenilir olması aynı şey değildir.

Ekran açılabilir. Buton tıklanabilir. Kayıt ekleniyor gibi görünebilir. Ama kullanıcı yanlış veri girdiğinde ne oluyor? Sistem yoğun yük altında nefes alabiliyor mu? Yeni eklenen bir özellik eski çalışan yapıyı bozdu mu? Hata verdiğinde neden verdiği anlaşılabiliyor mu? Ve en önemlisi: **yazılım, vaat ettiği şeyi tutarlı biçimde yerine getiriyor mu?**

İşte kalite, test ve doğrulama tam burada devreye girer.

Test, geliştirmenin sonuna iliştirilen formalite değildir. Kalitenin görünür hale gelme yöntemidir. Bir yazılımın ne kadar “iyi” olduğunu yalnızca kodun güzelliği belirlemez; o kodun farklı koşullarda ne kadar dayanıklı, ölçülebilir ve doğrulanabilir olduğu belirler.

Bu derste verdiğiniz dökümandan yararlanarak şu hattı kuracağız:

- **Yazılım kalitesi** tam olarak nedir?
- **Birim, entegrasyon, sistem ve kabul testleri** nasıl ayrılır?
- İyi bir **test case** nasıl yazılır?
- Gereksinim ile test arasında neden **izlenebilirlik** kurulmalıdır?
- **Bug raporu** neden teknik hafızadır?
- **Regresyon testi**, neden profesyonel ekiplerin can damarıdır?

Bugün amaç “birkaç test yazalım” demek değil. Amaç, kalitenin şans işi olmadığını görmek.

> “Test, hataların varlığını gösterebilir; ama yokluklarını asla kanıtlayamaz.”
>
> **Edsger W. Dijkstra**

---

## Bu Derste Neler Öğreneceksiniz?

Bu bölümün sonunda şunları yapabilir hale gelmeniz hedeflenmektedir:

- Yazılım kalitesinin yalnızca “çalışıyor/çalışmıyor” ikiliğinden ibaret olmadığını açıklayabilmek
- **Test piramidi** mantığını anlayabilmek
- **Birim, entegrasyon, sistem, kabul testi** seviyelerini ayırt edebilmek
- Yapılandırılmış bir **test case** yazabilmek
- Pozitif, negatif, sınır değer ve eşdeğerlik testlerini örnekleyebilmek
- Gereksinim-test ilişkisini **izlenebilirlik matrisi** üzerinden kurabilmek
- Etkili bir **hata raporu** oluşturabilmek
- Regresyon testinin neden kritik olduğunu kavrayabilmek

---

## 1. Yazılım Kalitesi Nedir?

Yazılım kalitesi, bir ürünün yalnızca belirtilen gereksinimleri karşılaması değil; kullanıcı beklentilerini tutarlı biçimde karşılayabilmesi, güven vermesi ve bakım yapılabilir bir yapıda olmasıdır.

Kısacası kalite şu sorunun cevabıdır:

> “Bu sistem, doğru şeyi, doğru koşullarda, sürdürülebilir biçimde yapabiliyor mu?”

### ISO/IEC 25010 Perspektifi

Yazılım kalitesini düşünürken en güçlü çerçevelerden biri **ISO/IEC 25010** modelidir. Bu model kaliteyi 8 ana karakteristik üzerinden ele alır:

| Kalite Karakteristiği | Ne Anlatır? |
|-----------------------|-------------|
| Fonksiyonel uygunluk | Sistem gereken işi doğru yapıyor mu? |
| Performans verimliliği | Hız, kapasite, kaynak kullanımı nasıl? |
| Uyumluluk | Diğer sistemlerle çalışabiliyor mu? |
| Kullanılabilirlik | İnsanlar rahat anlayıp kullanabiliyor mu? |
| Güvenilirlik | Kararlı mı, çöküyor mu, hata toleransı var mı? |
| Güvenlik | Veri ve erişim güvenli mi? |
| Bakım yapılabilirlik | Değiştirmek ve anlamak ne kadar kolay? |
| Taşınabilirlik | Farklı ortamlara uyum sağlayabiliyor mu? |

Bu tablo çok önemli. Çünkü kaliteyi sadece “bug var mı?” sorusuna indirgemek eksik kalır.

Çünkü bazen yazılım hatasız gibi görünür ama:
- çok yavaştır,
- değiştirilemez durumdadır,
- yeni kullanıcıyı kaybettirir,
- ölçeklenemez,
- güvenlik açığı taşır.

Yani kalite çok boyutludur.

---

## 2. Test Neden Geliştirmenin Kalbidir?

Testin temel amacı yalnızca hatayı bulmak değildir. Test aynı zamanda şunları sağlar:

- sistem davranışını görünür kılar,
- beklentiyi somutlaştırır,
- değişiklikten korkmadan ilerlemeyi kolaylaştırır,
- teslim öncesi güven seviyesini artırır,
- ekibin “çalışıyor” kelimesini ölçülebilir hale getirmesini sağlar.

Test olmayan ekiplerde “çalışıyor” cümlesi çoğu zaman sezgisel olur.

Test olan ekiplerde ise bu cümle şu anlama gelir:

- belirli senaryolar denendi,
- beklenen sonuçlar doğrulandı,
- önceki davranışlar korunuyor,
- kritik iş akışları kontrol altında.

---

## 3. Test Piramidi: Her Şeyi E2E ile Çözmeye Çalışma

Mike Cohn’un popülerleştirdiği **test piramidi**, test seviyeleri arasında nasıl denge kurulması gerektiğini anlatır.

Mantık basit ama güçlüdür:

- altta çok sayıda hızlı test,
- ortada orta düzey test,
- üstte az sayıda pahalı test.

### Piramidin Katmanları

#### Birim Testleri — yaklaşık %70
- en hızlı
- en ucuz
- en fazla sayıda

#### Entegrasyon Testleri — yaklaşık %20
- orta sayıda
- bileşenler arası etkileşimi kontrol eder

#### Uçtan Uca / UI Testleri — yaklaşık %10
- en yavaş
- en kırılgan
- en pahalı

### Neden Bu Denge Önemlidir?

Çünkü her şeyi UI testine yüklemek şuna yol açar:
- testler geç çalışır,
- kırılganlaşır,
- hata kaynağını bulmak zorlaşır,
- bakım maliyeti yükselir.

Sadece birim testine abanmak da yetmez. Çünkü parçalar tek başına güzel çalışırken birlikte patlayabilir.

Yani mesele sadece çok test yazmak değil; **doğru seviyede test yazmaktır**.

---

## 4. Test Seviyeleri: Nerede Ne Test Edilir?

Yazılım testinde farklı seviyeler, farklı sorulara cevap verir.

---

## 5. Birim Testi (Unit Test)

Birim testi, en küçük test birimidir.

Amaç:
- tek bir fonksiyonu,
- tek bir metodu,
- tek bir sınıf davranışını
izole biçimde test etmektir.

### Örnek

Bir `calculateDiscount()` fonksiyonu düşünün.

Birim testi şu soruyu sorar:

- %10 indirim gerçekten doğru hesaplanıyor mu?
- sınır değerlerde beklenen sonuç geliyor mu?
- null / boş durumlar uygun ele alınıyor mu?

### FIRST İlkesi
İyi bir birim testi genelde şu özellikleri taşır:

| İlke | Anlam |
|------|-------|
| Fast | Hızlı çalışmalı |
| Isolated | Diğer testlerden bağımsız olmalı |
| Repeatable | Her seferinde aynı sonucu vermeli |
| Self-validating | Otomatik geçer/kalır diyebilmeli |
| Timely | Geç kalmadan, geliştirmeye yakın yazılmalı |

### Neden Değerlidir?

Çünkü hata en erken ve en ucuz burada yakalanır.

---

## 6. Entegrasyon Testi (Integration Test)

Parçalar tek başına doğru çalışabilir. Ama asıl hayat, parçalar konuşmaya başladığında başlar.

Entegrasyon testi tam olarak bunu kontrol eder.

### Ne Test Eder?

- servis + veritabanı
- API + iş mantığı
- mesajlaşan iki modül
- dış servis entegrasyonu

### Örnek

`ProductService` doğru çalışıyor olabilir.
Ama veritabanına kayıt atarken mapping bozuksa sistem yine başarısız olur.

İşte entegrasyon testi şu soruyu sorar:

> “Bu bileşenler birlikte gerçekten düzgün çalışıyor mu?”

### Yaklaşımlar

- **Big Bang** → Her şeyi bir anda birleştirme
- **Incremental** → Parça parça entegre etme
- **Top-Down / Bottom-Up** → Yönlü ilerleme
- **Sandwich** → Karma yaklaşım

Pratikte kademeli entegrasyon genelde daha kontrollü ve anlamlıdır.

---

## 7. Sistem Testi (System Test)

Burada artık tek birim veya küçük birleşimler değil, **tüm sistem** test edilir.

Soru şudur:

> “Bu ürün, bütün halinde beklendiği gibi çalışıyor mu?”

### Neleri İçerebilir?

- fonksiyonel test
- performans testi
- stres testi
- güvenlik testi
- kullanılabilirlik testi

### Örnek Sorular

- Sistem 1000 kullanıcı altında nasıl davranıyor?
- Yük artınca yanıt süresi ne oluyor?
- Güvenlik açığı var mı?
- Kullanıcı temel görevleri tamamlayabiliyor mu?

Sistem testi, ürünün gerçek hayattaki duruşuna daha yakındır.

---

## 8. Kabul Testi (Acceptance Test / UAT)

Kabul testi, işin son kapısıdır.

Burada soru teknik değildir:

> “Bu sistem müşteri veya kullanıcı beklentisini gerçekten karşılıyor mu?”

Yani sistem teknik olarak sağlam olsa da iş ihtiyacını karşılamıyorsa kabul testi başarısız sayılabilir.

### UAT’nin Önemi

- iş gereksinimleri doğrulanır
- teslim öncesi son güvence sağlanır
- müşteri tarafı “evet, bu istediğimiz şey” diyebilir

### BDD Yaklaşımı

Kabul kriterlerini daha okunur kılmak için davranış odaklı anlatımlar kullanılabilir:

- **Koşul:** Kullanıcı kayıtlı ve aktif
- **Eylem:** Geçerli e-posta ve şifre ile giriş yapar
- **Beklenen:** Ana sayfaya yönlendirilir

Bu yapı, teknik ekip ile iş tarafı arasında ortak dil kurar.

---

## 9. Test Case Nedir?

Test case, belirli bir koşulda sistemin nasıl test edileceğini, ne beklendiğini ve sonucun ne olduğunu sistematik biçimde tanımlayan yapıdır.

“Biraz deneriz” yaklaşımı test değildir.

Test case şu avantajları sağlar:
- tekrar edilebilirlik,
- izlenebilirlik,
- netlik,
- ekip içi ortak anlayış.

### İyi Bir Test Case Alanları

| Alan | İçerik |
|------|--------|
| TC-ID | Benzersiz kimlik |
| İlgili gereksinim | Hangi requirement/use case ile ilgili |
| Test başlığı | Ne test ediliyor |
| Ön koşullar | Testten önce gereken durum |
| Adımlar | Uygulanacak net test akışı |
| Beklenen sonuç | Sistem ne yapmalı |
| Gerçek sonuç | Testte ne oldu |
| Durum | Geçti / Kaldı |
| Öncelik | Yüksek / Orta / Düşük |
| Ortam | Tarayıcı, OS, sürüm vb. |

---

## 10. İyi Test Case Nasıl Yazılır?

İyi test case:
- açık olur,
- tekrar edilebilir olur,
- yoruma fazla alan bırakmaz,
- ölçülebilir sonuç üretir.

Kötü test case örneği:
- “Giriş yapılabiliyor mu bak.”

Bu çok gevşek.

İyi test case örneği:
- Giriş sayfasına git
- Geçerli e-posta gir
- Geçerli şifre gir
- Giriş yap butonuna tıkla
- Kullanıcı ana sayfaya yönlendirilmeli
- Header’da kullanıcı adı görünmeli

Bu daha nettir. Aynı senaryoyu farklı kişiler test ettiğinde aynı sonucu bekler.

---

## 11. Test Case Türleri

Farklı test türleri, farklı hata sınıflarını yakalar.

### 11.1 Pozitif Test
Doğru girdiler verildiğinde sistem beklenen davranışı üretiyor mu?

### 11.2 Negatif Test
Eksik, yanlış ya da geçersiz girdilerde sistem düzgün hata veriyor mu?

### 11.3 Sınır Değer Analizi
Hatalar çoğu zaman sınır çizgilerinde çıkar.

Örnek:
- minimum 1 karakter
- maksimum 100 karakter

Bu durumda kritik testler:
- 0
- 1
- 99
- 100
- 101

### 11.4 Eşdeğerlik Bölümlendirme
Aynı tür davranış üreten giriş kümelerini gruplarsınız.

Bu sayede her olasılığı tek tek test etmek yerine mantıklı temsilciler seçersiniz.

Bu yaklaşım, test maliyetini düşürürken kapsamı korumaya yardım eder.

---

## 12. Örnek: Giriş Use Case’i İçin Test Düşüncesi

Bir giriş ekranı için düşünelim.

### Pozitif Senaryo
- doğru e-posta
- doğru şifre
- başarılı yönlendirme

### Negatif Senaryolar
- yanlış şifre
- kayıtlı olmayan e-posta
- boş e-posta
- boş şifre
- askıya alınmış hesap

### Sınır / Davranış Senaryoları
- e-posta büyük/küçük harf farkı
- art arda başarısız denemeler
- hesap kilitleme

İşte burada test yaklaşımı genişlemeye başlar. Çünkü “giriş çalışıyor mu?” tek başına test düşüncesi değildir. Gerçek test düşüncesi, farklı durumları sistemli biçimde taramaktır.

---

## 13. Gereksinim ↔ Test İzlenebilirlik Matrisi

Bu yapı çok değerlidir ama öğrenciler bazen gereksiz dokümantasyon sanır. Aslında değildir.

İzlenebilirlik matrisi şunu gösterir:

- her gereksinim en az bir testle doğrulanıyor mu?
- her test gerçekten bir gereksinime dayanıyor mu?

### Neden Önemli?

Çünkü aksi durumda iki büyük risk doğar:

1. Bazı gereksinimler hiç test edilmez
2. Bazı testler gereksiz yere yapılır ama kritik ihtiyaçlar boş kalır

### Basit Mantık

| Gereksinim | Testler |
|-----------|---------|
| FR-01 Kullanıcı giriş yapabilmeli | TC-001, TC-002, TC-003... |
| FR-03 İlan oluşturulabilmeli | TC-020, TC-021... |
| NFR-01 Sayfa yüklenme < 2 sn | performans testi |

Bu tablo, kalite ile analiz arasındaki bağı görünür hale getirir.

---

## 14. Bug Raporu: Teknik Hafıza

Bir hata bulunduğunda “abi bozuk” demek yetmez.

Profesyonel ekipte hata raporu, sorunun yeniden üretilebilir ve çözülebilir hale getirilmiş halidir.

### İyi Bug Raporu Ne İçerir?

- benzersiz bug ID
- kısa ve net başlık
- şiddet (severity)
- öncelik (priority)
- yeniden üretme adımları
- gerçek davranış
- beklenen davranış
- ortam bilgisi
- mümkünse ekran görüntüsü / log

### Örnek İyi Başlık
- “Giriş formunda büyük harf içeren e-posta yanlış biçimde reddediliyor”

Bu başlık, “login bozuk”tan çok daha değerlidir.

---

## 15. Hata Yaşam Döngüsü

Hata bulmak tek başına yeterli değildir. Hatanın süreç içindeki hareketi de yönetilmelidir.

Tipik akış:

- **New** → hata raporlandı
- **Assigned** → geliştiriciye atandı
- **In Progress** → çözüm üzerinde çalışılıyor
- **Fixed** → düzeltildi deniyor
- **Retest** → yeniden test ediliyor
- **Closed** → gerçekten çözüldü
- **Reopened** → çözülmedi, tekrar açıldı

Bu akış, kaosu azaltır. Özellikle çok geliştiricili projelerde kritik öneme sahiptir.

---

## 16. Regresyon Testi: Dünün Çalışanı Bugün Ölmesin

Bir şeyi düzeltirsiniz. Sonra başka bir şey bozulur.

İşte regresyon testi tam olarak bunu kontrol eder.

Tanım:

> Sistemde yapılan değişikliklerin, daha önce çalışan işlevleri bozup bozmadığını kontrol etmek için eski testlerin yeniden çalıştırılmasıdır.

### Neden Kritik?

Çünkü yazılım yaşayan bir yapıdır. Her değişiklik potansiyel yan etki taşır.

Örnek:
- giriş ekranı düzeldi
- ama şifre sıfırlama bozuldu
- ilan yükleme optimize edildi
- ama filtreleme çalışmaz oldu

Regresyon testleri yoksa ekip sürekli görünmez mayınlara basar.

### CI/CD ile İlişkisi

Modern ekiplerde regresyon testleri mümkün olduğunca otomatik çalıştırılır.

Bu sayede:
- commit sonrası erken uyarı alınır
- üretime bozuk kod çıkma riski düşer
- değişiklik yapma cesareti artar

---

## 17. Kalite Şans İşi Değildir

Bu cümle önemli.

Kaliteli yazılım genelde şunların ürünüdür:
- net gereksinim,
- iyi tasarım,
- disiplinli geliştirme,
- ölçülebilir test,
- düzgün hata yönetimi,
- tekrar eden doğrulama.

Eğer ekip kaliteyi yalnızca finalde düşünürse, genelde kalite pahalı hale gelir.

Kalite erken düşünülürse, sorunlar daha ucuz çözülür.

---

## 18. Sık Yapılan Hatalar

### 1. Testi geliştirme bittikten sonra akla getirmek
Bu, hataları pahalı yakalar.

### 2. Sadece pozitif senaryo test etmek
Gerçek hayat negatif durumlarla doludur.

### 3. Beklenen sonucu belirsiz yazmak
Belirsiz test, belirsiz sonuç üretir.

### 4. Gereksinim-test bağını kurmamak
Bu durumda boşluklar görünmez hale gelir.

### 5. Bug raporunu özensiz yazmak
İyi hata yakalanmış olsa bile kötü rapor çözümü yavaşlatır.

### 6. Regresyonu ihmal etmek
Yeni özellik eklerken eski sistem sessizce bozulabilir.

### 7. Her şeyi manuel test etmek
Bazı alanlarda manuel test gerekir; ama tekrarlanan kritik akışlarda otomasyon hayat kurtarır.

---

## 19. Bölüm Özeti

Bu derste şunu gördük:

- Yazılım kalitesi çok boyutlu bir kavramdır; yalnızca hata sayısından ibaret değildir.
- **Test piramidi**, test seviyeleri arasında doğru denge kurmayı önerir.
- **Birim, entegrasyon, sistem ve kabul testi** farklı sorulara cevap verir.
- İyi yazılmış bir **test case**, doğrulamayı tekrar edilebilir hale getirir.
- Pozitif, negatif, sınır değer ve eşdeğerlik testleri farklı hata sınıflarını ortaya çıkarır.
- **İzlenebilirlik matrisi**, gereksinimle test arasındaki bağı görünür kılar.
- **Bug raporu**, sorunu ekip hafızasına çevrir.
- **Regresyon testi**, değişimin yan etkilerini kontrol altında tutar.

Kısacası kalite tesadüf değildir. Kalite, sistematik dikkat ve doğrulama disiplininin sonucudur.

---

## 20. Mini Alıştırmalar

### Alıştırma 1
Bir giriş ekranı için en az 8 test case yazın:
- 2 pozitif
- 4 negatif
- 2 sınır/özel durum

### Alıştırma 2
Bir “İlan Oluştur” use case’i için şu alanları içeren test case şablonu doldurun:
- TC-ID
- ön koşul
- adımlar
- beklenen sonuç
- öncelik

### Alıştırma 3
Aşağıdaki gereksinimler için mini izlenebilirlik matrisi oluşturun:
- kullanıcı giriş yapabilmeli
- ilan oluşturabilmeli
- arama sonuçları 2 saniye altında gelmeli

### Alıştırma 4
Bir hata raporu yazın:
Senaryo: Kullanıcı büyük harf içeren e-posta ile giriş yapınca sistem yanlış biçimde reddediyor.

### Alıştırma 5
Bir projede regresyon testinin neden kritik olduğunu 5 cümleyle açıklayın.

---

## Kaynaklar

- Dijkstra, E. W. (1970). *Notes on Structured Programming*.
- Cohn, M. (2009). *Succeeding with Agile*. Addison-Wesley.
- Myers, G., Sandler, C., & Badgett, T. (2011). *The Art of Software Testing* (3rd ed.). Wiley.
- ISO/IEC 25010:2011. *Systems and Software Quality Requirements and Evaluation (SQuaRE)*.
- ISTQB. (2018). *Foundation Level Syllabus*.

---

Kaliteli yazılım, tesadüfen doğru çalışan yazılım değildir. O; beklentisi tanımlanmış, davranışı sınanmış, hataları görünür hale getirilmiş ve değişim karşısında tekrar tekrar doğrulanmış yazılımdır. Sistem işte o zaman sadece “çalışıyor” olmaktan çıkar, güvenilir hale gelir.
