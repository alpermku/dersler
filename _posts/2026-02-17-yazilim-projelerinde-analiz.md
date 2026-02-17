---
layout: post
title: "Yazılım Projelerinde Analiz ve Örnek Vaka Çalışması"
date: 2026-02-17
categories: sistem-analizi-ve-tasarimi
---

Yazılım geliştirme sadece kodlamaktan ibaret değildir. Bir problemin çözümü olarak nitelediğimiz yazılımların **ne yapacağını** ve **nasıl yapacağını** belirlediğimiz, yani problemi tanımladığımız aşama **"Analiz"** aşamasıdır.

Yazdığınız kod ancak isteneni doğru bir biçimde yerine getiriyorsa başarılı bir yazılımdır. Bu nedenle öncelikle yazılımdan ne istendiğinin doğru bir biçimde tanımlanması gerekir.

> **Altın Kural:** Yanlış şeyi mükemmel kodlamak, doğru şeyi kötü kodlamaktan daha tehlikelidir. Analiz hataları, geliştirme aşamasında değil genellikle **teslimat sırasında** ortaya çıkar — ve maliyeti katlanarak artar.

---

## Analiz Neden Bu Kadar Önemli?

Bir araştırmaya göre yazılım projelerinin başarısız olma nedenlerinin **%60'ından fazlası** teknik yetersizlik değil, **eksik veya yanlış analizdir**. Şu senaryoyu düşünün:

- Müşteri "basit bir randevu sistemi" istedi
- Siz 3 ay kodladınız
- Teslimde müşteri: *"SMS bildirimi yok mu? Ben onu en başta söylemiştim!"*
- Siz: *"Hayır, söylemediniz."*
- Müşteri: *"Söyledim, siz not almadınız."*

**Kim haklı?** Önemli değil. Ortada yazılı bir analiz dokümanı yoksa, ikisi de haklı ve ikisi de haksız. İşte bu yüzden analiz sadece "anlamak" değil, **anlaşılanı yazıya dökmektir.**

---

## Analiz Süreci Nasıl İşler?

Analiz tek seferlik bir toplantı değildir. Bir **süreçtir** ve şu adımlardan oluşur:

### 1. Kapsam Belirleme (Scope Definition)

Projenin **neleri içerip neleri içermeyeceğinin** net olarak belirlenmesi. Bu adım atlanırsa "scope creep" (kapsam kayması) denen ve projeleri öldüren hastalık başlar.

**Kapsam kayması nedir?**
> Müşteri: "He bir de şunu ekleyelim..."
> Müşteri: "Aslında bir de rapor çıksa güzel olur..."
> Müşteri: "Mobil uygulaması da olsun mu?"

Her "he bir de" projeyi 2-3 hafta uzatır. Bunu kontrol etmenin tek yolu: **yazılı kapsam dokümanı.**

### 2. Gereksinim Toplama (Requirements Gathering)

Yazılımın yerine getireceği işlevlerin belirlenmesi. İki türü vardır:

| Tür | Açıklama | Örnek |
|-----|----------|-------|
| **Fonksiyonel** | Sistem ne yapacak? | "Hasta randevu alabilmeli" |
| **Fonksiyonel Olmayan** | Sistem nasıl yapacak? | "Sayfa 3 saniyede yüklenmeli" |

### 3. Analiz ve Modelleme

Toplanan gereksinimlerin **yapısal hale** getirilmesi. Araçlar:
- **Use Case Diyagramları** — Kim ne yapacak?
- **Veri Akış Diyagramları (DFD)** — Veri nereden nereye gidecek?
- **ER Diyagramları** — Veriler nasıl ilişkilenecek?
- **Mockup/Wireframe** — Ekranlar nasıl görünecek?

### 4. Doğrulama ve Onay

Analiz dokümanı müşteriyle birlikte gözden geçirilir ve **yazılı onay** alınır. Bu adım sizi ileride "ben bunu istememiştim" tartışmalarından kurtarır.

---

## Gereksinim Toplama Teknikleri

Gereksinimleri nasıl toplarsınız? Müşteriye "ne istiyorsun?" deyip cevabı yazmak **yeterli değildir.** Çünkü müşteriler genellikle:

- Ne istediklerini tam olarak **bilmezler**
- Bildiklerini tam olarak **ifade edemezler**
- İfade ettiklerini tam olarak **kastetmezler**

Bu yüzden profesyonel teknikler kullanılır:

### Mülakat (Interview)
Müşteriyle birebir görüşme. En yaygın teknik ama en çok hata yapılanı.

**Kötü soru:** "Sistem nasıl olsun?"
**İyi soru:** "Bir hasta randevu almak istediğinde şu an hangi adımları izliyor?"

> **İpucu:** Açık uçlu sorular ("Anlatır mısınız...") ile başlayın, kapalı uçlu sorular ("SMS mi email mi?") ile detaylandırın.

### Gözlem (Observation)
Mevcut süreci yerinde izlemek. Müşterinin söylediği ile yaptığı **farklı olabilir.** Mesela diyetisyen "sekreterim randevuları yönetiyor" diyebilir, ama gözlemlediğinizde sekreter defteri diyetisyene sorup sorup yazıyordur.

### Doküman İnceleme
Mevcut formlar, excel dosyaları, defterler. Müşteri 10 yıldır Excel'de tuttuğu hasta listesini gösterdiğinde, hiçbir mülakatın veremeyeceği kadar **veri yapısı bilgisi** edinirsiniz.

### Prototipleme
Basit bir ekran tasarımı gösterin: "Böyle mi olsun?" Müşteriler soyut kavramları anlamakta zorlanır ama **görsel bir şey** gösterdiğinizde "evet/hayır" demek kolaylaşır.

---

## Örnek Vaka: Diyetisyen Randevu Sistemi

Analiz sürecini somutlaştırmak için bir **Diyetisyen Randevu Sistemi** projesi üzerinden ilerleyelim.

### Adım 1: Kapsam Yönetimi

**Diyetisyen ile ilk görüşme:**

> **Diyetisyen:** Hastalarım internet üzerinden randevu alabilmeli. Sekreterim ve ben bunları izleyebilmeliyiz. İptal/erteleme 2 gün önceden yapılabilmeli. Ayrıca hastalara SMS/Email gitmeli. Takvim esnek olmalı. He bir de, hastanın tahlil, diyet ve kişisel bilgilerini de takip etsin.

Klasik bir müşteri davranışı: **"He bir de..."** diyerek projeyi iki katına çıkardı.

**Analist olarak sizin cevabınız:**

> "Anlattıklarınızdan iki ayrı sisteme ihtiyacınız olduğu anlaşılıyor: **Randevu Sistemi** ve **Hasta Takip Sistemi.** İkisinin aynı anda yetişmesi zor. Randevu sistemiyle başlayalım, ikinci aşamada hasta takip ekleriz."

**Neden böyle yaptık?**
- Kapsamı kontrol altına aldık
- Müşteriye "hayır" demedik, **"şimdi değil"** dedik
- Projeyi teslim edilebilir parçalara böldük

Bu yaklaşıma **fazlı teslimat (phased delivery)** denir ve profesyonel projelerde standart yöntemdir.

### Adım 2: Gereksinimlerin Çıkarılması

Doğru soruları sorarak gereksinimleri çıkarıyoruz:

**Soru: Sistem herkes tarafından erişilebilir olmalı mı?**
> **Diyetisyen:** Evet. Web sunucum ve alan adım var.
>
> ✅ **Gereksinim:** Web tabanlı uygulama olacak.

**Soru: Takvimi nasıl yöneteceksiniz? Her gün tek tek mi gireceksiniz?**
> **Diyetisyen:** Hayır, standart saatler (10:00-17:00) olsun, öğle arası (13:00-14:00) düşülsün. Gerektiğinde ek seans açabilelim.
>
> ✅ **Gereksinim:** Otomatik tekrarlayan seans oluşturma + ek seans ekleme.

**Soru: İptal süresi 2 gün dediniz. Bu süre değişebilir mi?**
> **Diyetisyen:** 2 gün standart ama özel durumlarda sekreterim telefonla arayanlar için esneklik yapabilir.
>
> ✅ **Gereksinim:** İptal süresi **parametrik** olmalı + **yetki seviyeleri** farklı olmalı (Hasta vs. Sekreter).

**Soru: Bir seans kaç dakika? Seanslar arası boşluk var mı?**
> **Diyetisyen:** 45 dakika seans, 15 dakika ara.
>
> ✅ **Gereksinim:** Seans süresi ve ara süresi ayarlanabilir olmalı.

> **💡 Kritik:** Bu soruyu sormasaydık, yazılım bittiğinde diyetisyen "E ben nefes almadan mı çalışacağım?" diyecekti ve tüm takvim yapısını **baştan kodlamamız** gerekecekti.

### Adım 3: İş Kurallarının Belirlenmesi (Business Rules)

İş kuralları, sistemin **karar verme mantığını** belirler. Bunları yakalamak analiz sürecinin en incelikli kısmıdır.

| Kural No | İş Kuralı | Etkilenen Kullanıcı |
|----------|-----------|---------------------|
| IK-01 | Hasta, randevusunu en geç 2 gün önce iptal edebilir | Hasta |
| IK-02 | Sekreter, herhangi bir randevuyu süre kısıtı olmadan iptal edebilir | Sekreter |
| IK-03 | İptal edilen randevu için hastaya SMS/Email gönderilir | Sistem |
| IK-04 | Aynı saate birden fazla hasta kaydedilemez | Sistem |
| IK-05 | Seanslar 45 dk seans + 15 dk ara formatında otomatik oluşturulur | Sistem |
| IK-06 | Çalışma saatleri dışında seans oluşturulamaz (ek seans hariç) | Diyetisyen |

### Adım 4: Fonksiyonel Gereksinimlerin Listelenmesi

Görüşme ve iş kurallarından çıkan **fonksiyonel gereksinimler:**

#### A. Diyetisyen ve Sekreter İşlevleri

| No | İşlev | Açıklama | Öncelik |
|----|-------|----------|---------|
| F-01 | Yönetici girişi | Kullanıcı adı/parola ile giriş | Yüksek |
| F-02 | Çalışma zamanı ayarları | Gün ve saat aralıklarını belirleme | Yüksek |
| F-03 | Otomatik seans oluşturma | Kurallara göre (45+15 dk) boş seansları oluşturma | Yüksek |
| F-04 | Ek seans ekleme | Standart dışı saatte seans açma | Orta |
| F-05 | Tekil seans iptali | Tek bir seansı iptal etme + bildirim | Yüksek |
| F-06 | Toplu seans iptali | Bir günün tüm seanslarını iptal etme | Orta |
| F-07 | Doluluk izleme | Takvimde randevu durumlarını görme | Yüksek |

#### B. Hasta İşlevleri

| No | İşlev | Açıklama | Öncelik |
|----|-------|----------|---------|
| F-08 | Randevu alma | Ad, soyad, telefon ile boş seansa kayıt | Yüksek |
| F-09 | Randevu iptal/erteleme | Telefon no ile doğrulama + süre kontrolü | Yüksek |
| F-10 | Boş seans sorgulama | Uygun tarih ve saatleri listeleme | Yüksek |

#### C. Sistem İşlevleri

| No | İşlev | Açıklama | Öncelik |
|----|-------|----------|---------|
| F-11 | SMS bildirimi | Randevu alma/iptal durumunda SMS gönderme | Yüksek |
| F-12 | Email bildirimi | Randevu alma/iptal durumunda email gönderme | Orta |
| F-13 | Hatırlatma | Randevudan 1 gün önce otomatik hatırlatma | Düşük |

### Adım 5: Fonksiyonel Olmayan Gereksinimler

Sistemin **nasıl** çalışacağına dair kısıtlar:

| Kategori | Gereksinim |
|----------|-----------|
| **Performans** | Sayfa yüklenme süresi 3 saniyeyi geçmemeli |
| **Güvenlik** | Yönetici paneli şifreli olmalı, hasta verileri korunmalı |
| **Erişilebilirlik** | Mobil cihazlardan da kullanılabilmeli (responsive) |
| **Uyumluluk** | Chrome, Firefox, Safari, Edge desteklenmeli |
| **Yedekleme** | Veriler günlük olarak yedeklenmeli |

### Adım 6: Ekran Tasarımları (Wireframes)

Analiz çıktısı olarak hangi ekranların gerektiğini belirleriz:

**Yönetim Tarafı:**
- Giriş ekranı
- Takvim ayarları ekranı
- Haftalık/aylık takvim görünümü
- Seans detay ekranı

**Hasta Tarafı:**
- Boş randevu sorgulama ekranı
- Randevu alma formu
- İptal/erteleme ekranı
- Onay sayfası

> **Not:** Bu aşamada "güzel tasarım" değil, **işlevsel yerleşim** önemlidir. Wireframe'ler siyah-beyaz ve basit olmalıdır. Amaç müşteriyle ekran akışını doğrulamaktır.

---

## MoSCoW Önceliklendirme Yöntemi

Gereksinimleri topladıktan sonra hepsini aynı anda yapmak mümkün olmayabilir. **MoSCoW** yöntemi gereksinimleri önceliklendirir:

| Kategori | Anlamı | Örnek |
|----------|--------|-------|
| **Must have** | Olmazsa olmaz | Randevu alma, takvim oluşturma |
| **Should have** | Olmalı ama ilk sürümde olmasa da olur | Email bildirimi |
| **Could have** | Olsa iyi olur | Randevu hatırlatma |
| **Won't have** | Bu sürümde olmayacak | Hasta takip sistemi |

Bu yöntem sayesinde müşteriye "her şeyi yapacağız ama **sırayla**" mesajını verebilirsiniz.

---

## Analiz Dokümanı Nasıl Yazılır?

Profesyonel bir analiz dokümanının temel bölümleri:

```
1. Proje Tanımı ve Amacı
2. Kapsam (Dahil olan / Olmayan)
3. Paydaş Listesi (Kim kullanacak?)
4. Fonksiyonel Gereksinimler
5. Fonksiyonel Olmayan Gereksinimler
6. İş Kuralları
7. Ekran Tasarımları / Wireframe'ler
8. Veri Modeli (Hangi veriler tutulacak?)
9. Kısıtlar ve Varsayımlar
10. Onay ve İmza
```

> **Sınavda çıkabilecek soru:** "Fonksiyonel ve fonksiyonel olmayan gereksinimler arasındaki farkı örnekle açıklayınız." Bu soruya diyetisyen örneğinden yola çıkarak cevap verebilirsiniz.

---

## Sık Yapılan Analiz Hataları

| Hata | Sonucu | Çözümü |
|------|--------|--------|
| Gereksinimleri yazıya dökmemek | "Ben onu kastetmemiştim" tartışması | Her toplantıdan sonra yazılı özet |
| Müşterinin her dediğini kabul etmek | Kapsam kayması, proje gecikmesi | MoSCoW ile önceliklendirme |
| Sadece müşteriyle konuşmak | Son kullanıcının ihtiyaçlarını kaçırmak | Gözlem + son kullanıcı mülakatı |
| "Bunu sonra hallederiz" demek | Sonra hiç gelmez | Her belirsizliği o an kayıt altına almak |
| Teknik çözümü analize karıştırmak | "MySQL mı PostgreSQL mi?" analiz değil | Önce NE, sonra NASIL |

---

## Özet: Analizin 5 Altın Kuralı

1. **Dinle, not al, doğrula.** Müşterinin söylediğini anladığınızı varsaymayın, teyit edin.
2. **Kapsamı yazıya dök.** Yazılmayan şey, anlaşılmamış demektir.
3. **"He bir de" tuzağına düşme.** Her yeni istek kapsamı genişletir — bilinçli karar ver.
4. **Önce NE, sonra NASIL.** Analiz aşamasında teknoloji seçmeyin.
5. **Varsayımları öldür.** Analiz, varsayımları ortadan kaldırma sanatıdır.

---

## Tartışma Soruları

1. Diyetisyen "hasta takip sistemi de olsun" dediğinde neden hemen kabul etmedik? Başka nasıl bir yaklaşım izlenebilirdi?
2. "Seanslar arası 15 dakika boşluk" gereksinimini sormamış olsaydık, yazılımda ne gibi sorunlar çıkardı?
3. Fonksiyonel olmayan gereksinimler neden genellikle göz ardı edilir? Bunun sonuçları neler olabilir?
4. Kendi günlük hayatınızdan bir "kapsam kayması" örneği verebilir misiniz? (İpucu: Ev tadilatı, tatil planlaması, ödev...)
