---
layout: post
title: "Süreç Modelleme: Activity, Sequence ve State Machine Diyagramları"
date: 2026-04-14 11:45:00 +0300
categories: sistem-analizi-ve-tasarimi
---

Bir sistemi analiz etmek yalnızca **ne yapacağını** listelemekten ibaret değildir. Asıl mesele, o davranışların **hangi sırayla**, **hangi koşullarda**, **hangi aktörlerin sorumluluğunda** ve **hangi bileşenler arası iletişimle** gerçekleştiğini görebilmektir.

Use case'ler bize büyük resmi verir. Ama use case tek başına çoğu zaman yeterli değildir. Çünkü "Kullanıcı giriş yapar" cümlesi bize çok şey söyler, fakat şu kritik soruların cevabını tam vermez:

- Hangi adım hangi adımdan sonra gelir?
- Hangi noktada karar verilir?
- Hangi işlemler paralel yürütülür?
- Sistem içinde hangi bileşen kime mesaj gönderir?
- Bir nesne zaman içinde hangi durumlar arasında geçiş yapar?

İşte bu noktada devreye üç güçlü UML davranış modeli girer:

- **Activity Diagram**
- **Sequence Diagram**
- **State Machine Diagram**

Bu derste bu üç diyagramı birlikte ele alacağız. Çünkü bunlar rakip değil, birbirini tamamlayan araçlardır. Activity diyagramı akışı görselleştirir, Sequence diyagramı iletişim sırasını açığa çıkarır, State Machine ise bir nesnenin yaşam döngüsünü görünür hale getirir.

---

## Bu Derste Neler Öğreneceksiniz?

Bu bölümün sonunda şunları yapabiliyor olmanız hedeflenmektedir:

- UML Activity Diagram'ın mantığını ve kullanım alanlarını açıklayabilmek
- Karar, paralellik, birleşme ve swimlane notasyonlarını doğru okuyup çizebilmek
- UML Sequence Diagram'da lifeline, aktivasyon kutusu ve mesaj türlerini ayırt edebilmek
- Activity ve Sequence diyagramlarının hangi durumda tercih edilmesi gerektiğini açıklayabilmek
- State Machine diyagramı ile bir nesnenin durum geçişlerini modelleyebilmek
- Bir use case senaryosunu uygun UML diyagramlarına dönüştürebilmek

Kısacası bu dersin amacı, yazılım analizini statik bir belge olmaktan çıkarıp **hareket eden bir modele** dönüştürmektir.

---

## 1. Neden Süreç Modelleme?

Bir use case yazdığınızda genellikle sistemin amacını anlatırsınız. Örneğin:

- Sisteme giriş yap
- İlan oluştur
- Sipariş ver
- Rapor görüntüle

Bunlar çok değerlidir, ama hâlâ üst düzey tanımlardır. Gerçek sistem tasarımında ise şu detaylar önem kazanır:

- Kullanıcı giriş yaptıktan sonra sistem hangi kontrolü yapar?
- Hatalı veri gelirse ne olur?
- E-posta bildirimi ne zaman gönderilir?
- Hangi işlem paralel çalışabilir?
- Sistem hangi servisleri hangi sırayla çağırır?
- Bir ilan taslaktan yayına, yayından satıldı durumuna nasıl geçer?

İşte süreç modelleme, bu sorulara cevap verir.

### Süreç Modelleme Ne Kazandırır?

- Belirsizliği azaltır
- Ekip içi ortak anlayış üretir
- Gereksinimleri test edilebilir hale getirir
- Hata akışlarını görünür kılar
- Tasarım öncesinde mantık hatalarını yakalamayı sağlar
- Öğrencinin, analistin ve geliştiricinin aynı sistemi aynı gözle görmesini kolaylaştırır

Bir başka deyişle süreç modelleme, yazılımın davranışını çizerek düşünme becerisidir.

---

## 2. Activity Diagram: Akışın Haritası

**Activity Diagram**, bir iş sürecinin veya operasyonun adım adım nasıl aktığını gösteren UML davranış diyagramıdır. Bu diyagram özellikle şunları modellemek için çok güçlüdür:

- İş akışları
- Karar noktaları
- Alternatif yollar
- Paralel süreçler
- Aktör sorumlulukları

Activity Diagram şu soruya cevap verir:

> **"Ne oluyor?"**

Yani sistemde olayların sırasını, dallanmaları ve birleşmeleri görünür hale getirir.

### 2.1 Nerede Kullanılır?

Activity Diagram şu tür durumlarda çok işe yarar:

- Bir kullanıcı işleminin uçtan uca akışını göstermek
- Bir iş sürecini modellemek
- Algoritmik akışları görselleştirmek
- Paralel işlemleri göstermek
- Hangi aktörün hangi adımdan sorumlu olduğunu ayırmak

Örneğin:

- Öğrencinin sisteme giriş süreci
- Ürünün siparişten teslimata kadar akışı
- Bir ilanın oluşturulup onaylanıp yayınlanması
- Kayıt yenileme veya danışman onay süreci

---

## 3. Activity Diagram Temel Notasyonları

Bir diyagramı doğru çizmek için önce alfabesini bilmek gerekir.

| Öğe | Açıklama | Ne İşe Yarar? |
|-----|----------|---------------|
| Başlangıç düğümü | Dolu siyah daire | Akışın başladığı noktayı gösterir |
| Bitiş düğümü | İç içe daire | Sürecin tamamen bittiğini gösterir |
| Aktivite | Yuvarlatılmış dikdörtgen | Yapılan işi, eylemi gösterir |
| Karar düğümü | Baklava şekli | Koşula göre dallanma yapar |
| Birleşme düğümü | Baklava şekli | Alternatif yolları tekrar birleştirir |
| Fork | Kalın çizgi | Tek akışı paralel kollara ayırır |
| Join | Kalın çizgi | Paralel akışların bitmesini bekleyip birleştirir |
| Swimlane | Şeritli bölüm | Aktör veya sistem sorumluluklarını ayırır |
| Nesne düğümü | Dikdörtgen | Veri veya nesne akışını gösterir |

Bu notasyonların gücü, süreci sadece metin olarak değil, **mantıksal yapı** olarak gösterebilmesidir.

---

## 4. Karar Düğümü ve Guard Condition

Bir süreçte her şey tek doğrusal çizgide akmaz. Çoğu zaman bir noktada karar verilir.

Örneğin:

- Şifre doğru mu?
- Kullanıcı yetkili mi?
- Form eksiksiz mi?
- Fotoğraf boyutu sınırı aşıyor mu?

Bu tür noktalar **karar düğümü** ile gösterilir.

Karar düğümünden çıkan her okun üzerinde genellikle bir **guard condition** bulunur:

- `[Evet]`
- `[Hayır]`
- `[Geçerli]`
- `[Geçersiz]`
- `[Stok var]`
- `[Stok yok]`

### Örnek: Sisteme Giriş Yap

Basit bir giriş akışı şu şekilde modellenebilir:

1. Kullanıcı e-posta ve şifre girer.
2. Sistem kimlik doğrulama kontrolü yapar.
3. **Karar:** Bilgiler doğru mu?
   - `[Evet]` → Ana sayfaya yönlendir
   - `[Hayır]` → Hata mesajı göster
4. **Karar:** Başarısız deneme sayısı 3'ü geçti mi?
   - `[Evet]` → Hesabı geçici kilitle
   - `[Hayır]` → Giriş ekranına dön

Bu yapı, tek bir "giriş başarısız olabilir" cümlesinden çok daha açık ve test edilebilirdir.

### Neden Guard Condition Önemli?

Çünkü guard condition yazılmamış bir karar düğümü eksik düşünülmüş karar düğümüdür. Öğrenci diyagramda baklava çizer ama çıkış koşullarını yazmazsa, diyagram görsel olarak vardır ama mantıksal olarak yarımdır.

---

## 5. Paralel Akışlar: Fork ve Join

Gerçek dünyadaki süreçlerin önemli kısmı sıralı değil, **paralel** işler içerir.

Örneğin bir ilan yayınlandığında sistem aynı anda şunları yapabilir:

- Veritabanına kaydeder
- Arama indeksini günceller
- E-posta bildirimi tetikler
- Bildirim merkezine mesaj düşer

Bu işlemler birbirinden bağımsız yürüyebiliyorsa, diyagramda **fork** ile ayrılır.

### Fork Nedir?

Tek bir akışı birden fazla paralel kola böler.

### Join Nedir?

Bu paralel kolların tamamlanmasını bekler ve sonra akışı devam ettirir.

### Önemli Tasarım Notu

Paralellik güçlüdür ama bedelsiz değildir. Eğer bir join düğümü kullanıyorsanız, sistem tüm paralel kolların tamamlanmasını bekler. Bu da şu anlama gelir:

> Paralel dallardan birinin yavaş olması, tüm akışın tamamını yavaşlatabilir.

Bu nedenle uzun süren veya kritik olmayan işlemler bazen asenkronlaştırılmalı, ana kullanıcı akışını bloke etmemelidir.

Bu fark, analiz ile performans tasarımının kesiştiği noktadır.

---

## 6. Swimlane: Sorumlulukların Ayrılması

**Swimlane** kullanımı, Activity Diagram'ı çok daha anlamlı hale getirir. Çünkü sadece ne olduğunu değil, **kimin yaptığını** da gösterir.

Swimlane yapısı özellikle çok aktörlü sistemlerde çok değerlidir.

Örneğin **İlan Oluştur** senaryosunda üç şerit kullanılabilir:

- **Satıcı**
- **Sistem**
- **E-posta Servisi**

### Olası Akış

**Satıcı şeridi:**
- Formu aç
- Alanları doldur
- Fotoğraf yükle
- Gönder düğmesine tıkla

**Sistem şeridi:**
- Formu doğrula
- İş kurallarını kontrol et
- Veritabanına kaydet
- Bildirim sürecini tetikle
- İlan sayfasına yönlendir

**E-posta Servisi şeridi:**
- Onay e-postasını gönder

### Swimlane Neden Güçlü?

Çünkü şu hataları yakalatır:

- Aktör sorumluluklarının karışması
- Sistemin kullanıcı yerine karar veriyor gibi modellenmesi
- Dış servislerin sistemin iç parçası gibi çizilmesi
- Kimin ne yaptığına dair belirsizlik

İyi bir swimlane diyagramı, proje toplantısında yarım saatlik tartışmayı tek bakışta çözer.

---

## 7. Sequence Diagram: Kim Kime Ne Zaman Mesaj Gönderiyor?

**Sequence Diagram**, sistem içindeki nesneler veya bileşenler arasındaki mesajlaşmanın zaman içindeki sırasını gösterir.

Bu diyagram şu soruya cevap verir:

> **"Nasıl oluyor?"**

Activity Diagram akışı gösterirken, Sequence Diagram iletişim zincirini gösterir.

Örneğin bir kullanıcı giriş yaptığında şu bileşenler rol alabilir:

- Kullanıcı
- Browser
- AuthController
- UserService
- Database

Sequence Diagram bize bu bileşenlerin hangi sırayla mesajlaştığını anlatır.

---

## 8. Sequence Diagram Temel Notasyonları

| Öğe | Açıklama | İşlevi |
|-----|----------|--------|
| Lifeline | Üstte kutu, aşağı doğru kesik çizgi | Katılımcıyı temsil eder |
| Aktivasyon kutusu | Lifeline üzerinde ince dikdörtgen | Nesnenin aktif çalıştığı süreyi gösterir |
| Senkron mesaj | Dolu ok başı | Yanıt beklenen çağrı |
| Asenkron mesaj | Açık ok başı | Yanıt beklenmeyen çağrı |
| Dönüş mesajı | Kesik çizgi | Sonuç veya cevap dönüşü |
| Self-call | Kendine dönen ok | Nesnenin kendi metodunu çağırması |
| `alt` bloğu | Alternatif akış | if-else mantığını gösterir |
| `opt` bloğu | Opsiyonel akış | Belirli koşulda çalışan blok |
| `loop` bloğu | Tekrarlı akış | Döngüyü gösterir |
| `ref` bloğu | Referans blok | Başka diyagrama gönderme yapar |

Bu diyagramlarda zaman yukarıdan aşağı akar. Yani yukarıdaki mesaj önce, aşağıdaki mesaj sonra gerçekleşir.

---

## 9. Örnek: Sisteme Giriş Yap Sequence Diyagramı

Aşağıdaki katılımcıları düşünelim:

- Kullanıcı
- Browser
- AuthController
- UserService
- Database

### Mesaj Akışı

1. Kullanıcı → Browser: `loginForm.submit(email, password)`
2. Browser → AuthController: `POST /api/auth/login`
3. AuthController → UserService: `authenticate(email, password)`
4. UserService → Database: `findUserByEmail(email)`
5. Database → UserService: `User` kaydını döndürür
6. UserService → UserService: `verifyPassword(password, hash)`

### Alternatif Akışlar

**Başarılı giriş:**

7. UserService → AuthController: `success`
8. AuthController → AuthController: `generateJWT(userId)`
9. AuthController → Browser: `200 OK + token`
10. Browser → Kullanıcı: Ana sayfaya yönlendir

**Başarısız giriş:**

7'. UserService → AuthController: `failure`
8'. AuthController → Browser: `401 Unauthorized`
9'. Browser → Kullanıcı: Hata mesajı göster

Bu yapı, sistemin yalnızca ne yaptığını değil, **hangi katmanda hangi sorumluluğun bulunduğunu** da açık eder.

---

## 10. Mesaj Türleri ve Tasarım Yorumu

Sequence diyagramlarını güçlü yapan şey, sadece ok çizmek değil, o okun türünü doğru seçmektir.

### 10.1 Senkron Mesaj

Gönderici yanıt bekler. Bu çoğu klasik metot çağrısında ve HTTP isteğinde görülür.

Örnek:

- Controller → Service
- Service → Repository
- Browser → API

### 10.2 Asenkron Mesaj

Gönderici yanıt beklemeden devam eder.

Örnek:

- E-posta kuyruğuna mesaj bırakma
- Arka plan işine görev gönderme
- Event yayınlama

### 10.3 Return Mesajı

İşlem sonucunun döndüğünü gösterir. Her zaman çizmek zorunlu değildir, ama karmaşık akışlarda çok açıklayıcı olur.

### Tasarım Açısından Önemi

Mesaj tipini doğru seçmek, öğrencinin sistem davranışını gerçekten anlayıp anlamadığını gösterir. Çünkü bir e-posta gönderimini senkron tasarlarsanız kullanıcı gereksiz yere bekletilebilir. Ama bunu asenkron düşünürseniz kullanıcı deneyimi daha akıcı hale gelir.

Burada UML, sadece görsel model değil, aynı zamanda düşünme biçimidir.

---

## 11. Activity ve Sequence Diyagramları Arasındaki Fark

Bu iki diyagram sık karıştırılır. Halbuki odakları farklıdır.

| Boyut | Activity Diagram | Sequence Diagram |
|------|------------------|------------------|
| Odak | İş akışı | Bileşenler arası iletişim |
| Temel soru | Ne oluyor? | Kim kime ne zaman mesaj gönderiyor? |
| Zaman boyutu | Dolaylı sıra var | Açık şekilde yukarıdan aşağı akar |
| Karar yapıları | Çok güçlü | `alt`, `opt`, `loop` blokları ile gösterilir |
| Paralellik | Fork/Join ile güçlü | Daha sınırlı, mesaj odaklı |
| Kullanım alanı | İş analizi, süreç gösterimi | Sistem tasarımı, servis akışı, API davranışı |

### Hangisini Önce Çizmeliyim?

Pratikte en sağlıklı yaklaşım şudur:

1. Önce **Activity Diagram** ile büyük resmi kur
2. Karar noktalarını ve sorumlulukları netleştir
3. Sonra kritik senaryolar için **Sequence Diagram** çiz
4. Gerekirse nesnenin yaşam döngüsü için **State Machine** ekle

Yani:

- Activity = analiz tarafı ağır basar
- Sequence = tasarım tarafı ağır basar

---

## 12. State Machine Diagram: Nesnenin Hayat Hikâyesi

Buraya kadar süreç akışını ve iletişim sırasını gördük. Şimdi üçüncü bakış açısına geçelim:

> Bir nesne zaman içinde hangi durumlarda bulunur ve hangi olaylarla başka durumlara geçer?

Bu sorunun cevabı **State Machine Diagram** ile verilir.

State Machine, özellikle bir nesnenin yaşam döngüsünü modellemek için kullanılır.

### Ne Tür Nesnelerde Anlamlıdır?

- İlan
- Sipariş
- Kullanıcı hesabı
- Ödeme
- Başvuru
- Destek talebi

Bu nesneler sadece veri taşımaz, **durum değiştirirler**. O yüzden State Machine çok değerlidir.

---

## 13. State Machine Temel Notasyonları

| Öğe | Açıklama |
|------|----------|
| Başlangıç durumu | Nesnenin yaşam döngüsünün ilk noktası |
| Bitiş durumu | Sürecin sona erdiği nokta |
| State | Nesnenin içinde bulunduğu durum |
| Transition | Bir durumdan diğerine geçiş |
| Event | Geçişi tetikleyen olay |
| Guard condition | Geçişin gerçekleşmesi için gereken koşul |
| Action | Geçiş sırasında yapılan işlem |

State Machine şu soruları cevaplar:

- Bu nesne şu anda hangi durumda?
- Hangi olay bu durumu değiştirir?
- Her geçiş her zaman mümkün mü?
- Bazı geçişler belirli koşullara mı bağlı?

---

## 14. Örnek: İlan Nesnesinin Yaşam Döngüsü

Bir kampüs ikinci el platformunda ilan nesnesi için şu durumlar düşünülebilir:

- **Taslak**
- **İncelemede**
- **Yayında**
- **Satıldı**
- **Silindi**

### Olası Geçişler

- Taslak → İncelemede
  - Olay: Satıcı "Yayınla" düğmesine basar
- İncelemede → Yayında
  - Olay: Moderatör onaylar
- İncelemede → Taslak
  - Olay: Moderatör reddeder
- Yayında → Satıldı
  - Olay: Satıcı "Satıldı" olarak işaretler
- Yayında → Silindi
  - Olay: Kullanıcı siler veya süre dolar
- Satıldı → Silindi
  - Olay: Arşiv süresi tamamlanır

Bu diyagram bize, ilan nesnesinin davranışsal kurallarını netleştirir.

### Neden Çok Değerli?

Çünkü çoğu hata burada çıkar:

- Satılmış ilanın tekrar düzenlenip düzenlenemeyeceği
- Taslak ilanın görünür olup olmayacağı
- Silinmiş ilanın geri dönüp dönemeyeceği
- Moderasyon reddi sonrası hangi duruma dönüleceği

Bu sorular kod yazarken değil, analizde çözülmelidir. Yoksa proje ilerledikçe "ama bunu hiç konuşmamıştık" cümlesi başlar.

---

## 15. Üç Diyagramı Birlikte Düşünmek

Aynı senaryoyu üç farklı diyagramla modellediğinizde sistemi üç boyutlu görmeye başlarsınız.

### Örnek: "İlan Oluştur" Senaryosu

**Activity Diagram** size şunu gösterir:
- Form doldurulur
- Doğrulama yapılır
- Hata varsa geri dönülür
- Başarılıysa kayıt yapılır
- Bildirim süreci başlar

**Sequence Diagram** şunu gösterir:
- Browser, ProductController'a istek atar
- Controller, ProductService'i çağırır
- Service, Database ile konuşur
- NotificationService devreye girer

**State Machine** ise ilgili nesne için şunu gösterir:
- İlan önce taslaktır
- Yayınlama isteğiyle incelemede durumuna geçer
- Onay alınca yayında olur

Yani:

- Activity = süreç mantığı
- Sequence = teknik etkileşim
- State Machine = nesne yaşam döngüsü

Üçü birlikte kullanıldığında analiz ciddi biçimde güçlenir.

---

## 16. Use Case'ten Diyagrama Dönüşüm Yöntemi

Bir senaryoyu diyagrama çevirmek için şu sistematik yolu izleyin:

### Adım 1: Use case metnini cümle cümle ayırın
Her cümle potansiyel bir aktivitedir.

### Adım 2: Aktörleri belirleyin
Kim başlatıyor, kim cevap veriyor, hangi dış sistem var?

### Adım 3: Karar noktalarını bulun
"Eğer", "değilse", "başarısız olursa", "uygunsa" gibi ifadeler karar noktasıdır.

### Adım 4: Paralel adımları ayıklayın
Birbirinden bağımsız yürüyebilecek işler varsa fork/join düşünün.

### Adım 5: Sequence için katılımcıları seçin
Browser, controller, service, database, external service gibi lifeline'ları tanımlayın.

### Adım 6: Mesaj sırasını yukarıdan aşağı kurun
Kim kimi çağırıyor, yanıt nereye dönüyor, hata nerede oluşuyor?

### Adım 7: State Machine gerekiyorsa nesne durumlarını çıkarın
Her nesne için değil, anlamlı durum değişimi olan nesneler için yapın.

Bu yöntem, çizimi rastgele değil analitik hale getirir.

---

## 17. Uygulama Ödevi

Aşağıdaki çalışmaları yapınız:

### Ödev 1
**UC-003 "İlan Oluştur"** için swimlane'li bir Activity Diagram hazırlayınız.

Şeritler:
- Satıcı
- Sistem
- E-posta Servisi

### Ödev 2
Aynı senaryo için bir Sequence Diagram çiziniz.

Lifeline'lar:
- Satıcı
- Browser
- ProductController
- ProductService
- Database
- NotificationService

### Ödev 3
Sequence Diagram'da aşağıdaki alternatif akışları `alt` blokları ile gösteriniz:

- Eksik zorunlu alan
- Fotoğraf boyutu sınırı aşımı
- Başarılı kayıt

### Ödev 4
Bir ATM "Para Çekme" senaryosu için Activity Diagram çiziniz.
Aşağıdaki durumları dahil ediniz:

- Hatalı PIN
- Yetersiz bakiye
- Kart bloke

### Ödev 5
Bir "İlan" nesnesi için State Machine Diagram hazırlayınız.
Durumlar arasında en az şu geçişleri modelleyiniz:

- Taslak
- İncelemede
- Yayında
- Satıldı
- Silindi

---

## 18. Bölüm Özeti

Bu derste yazılım analizinde davranışı modellemek için kullanılan üç güçlü UML aracını inceledik.

- **Activity Diagram**, iş akışını, karar noktalarını, paralel süreçleri ve aktör sorumluluklarını gösterir.
- **Sequence Diagram**, sistem bileşenleri arasındaki mesajlaşmanın zaman sırasını ortaya koyar.
- **State Machine Diagram**, bir nesnenin durumlarını ve bu durumlar arasındaki geçişleri modeller.

Bu üçü birlikte kullanıldığında bir sistemin sadece ne yaptığı değil, nasıl aktığı, hangi bileşenlerin nasıl konuştuğu ve nesnelerin zaman içinde nasıl değiştiği açık biçimde anlaşılır.

Kısacası iyi analiz, sadece liste yapmak değildir. **Akışı, etkileşimi ve durumu birlikte görebilmektir.**

---

## Kaynaklar ve İleri Okuma

- OMG. (2017). *UML Specification Version 2.5.1*. Object Management Group.
- Fowler, M. (2003). *UML Distilled* (3. bs.). Addison-Wesley.
- Larman, C. (2004). *Applying UML and Patterns* (3. bs.). Prentice Hall.
- Ambler, S. W. (2004). *The Object Primer* (3. bs.). Cambridge University Press.
- Pilone, D. & Pitman, N. (2005). *UML 2.0 in a Nutshell*. O'Reilly Media.
