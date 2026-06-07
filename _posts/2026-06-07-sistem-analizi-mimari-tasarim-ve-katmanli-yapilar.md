---
layout: post
title: "Mimari Tasarım ve Katmanlı Yapılar: Yazılımın Taşıyıcı Kolonları"
date: 2026-06-07 12:38:00 +0300
categories: sistem-analizi-ve-tasarimi
course_id: sistem-analizi-ve-tasarimi
tags: [sistem-analizi, yazılım-mimarisi, katmanlı-mimari, mvc, mvvm, restful-api, solid]
---

Bir yazılım projesi küçükken çoğu şey kolay görünür. Dosyalar azdır. Fonksiyonlar birbirini tanır. Bir değişiklik yapılır ve sistem hâlâ nefes alır. Ama proje büyüdükçe görünmeyen bir soru giderek sertleşir:

**Bu sistem neyin üstünde duruyor?**

İşte bu sorunun cevabı, çoğu zaman kod satırlarında değil, **mimaride** gizlidir.

Yazılım mimarisi; sistemin hangi parçalardan oluştuğunu, bu parçaların nasıl konuştuğunu, neyin nereye ait olduğunu ve gelecekteki değişikliklerin sistemi kırıp kırmayacağını belirleyen üst düzey yapıdır. Kısacası mimari, yazılımın sadece bugünkü halini değil, **yarın değişmeye nasıl dayanacağını** belirler.

Bu derste verdiğiniz dökümandan yararlanarak şu omurgayı netleştireceğiz:

- Yazılım mimarisi tam olarak nedir?
- **Katmanlı mimari** neden bu kadar yaygındır?
- **MVC** ve **MVVM** neyi çözer?
- **RESTful API** neden modern sistemlerin ortak dili haline gelmiştir?
- **Modülerlik** ve **bağımlılık yönetimi** neden bakım kabusunu önler?

Bugün tablo çizmekten ya da kod yazmaktan biraz yukarı çıkacağız. Çünkü bu derste meselemiz tek bir fonksiyon değil; **bir yapının ayakta nasıl kalacağı**.

> “Mimari, değiştirilmesi en zor olan kararlardır. Değiştirilmesi kolaysa, zaten önemli bir karar değildir.”
>
> **Martin Fowler**, *Who Needs an Architect?* (2003)

---

## Bu Derste Neler Öğreneceksiniz?

Bu bölümün sonunda şunları yapabilir hale gelmeniz hedeflenmektedir:

- Yazılım mimarisinin ne olduğunu ve neden kritik olduğunu açıklayabilmek
- **Katmanlı mimari** mantığını anlayabilmek
- **UI / Business / Data** ayrımını yerli yerine koyabilmek
- **MVC** ile **MVVM** arasındaki temel farkı kavrayabilmek
- RESTful API tasarımının temel ilkelerini yorumlayabilmek
- Modülerlik, bağımlılık yönetimi ve **SOLID** ilkeleri arasındaki ilişkiyi görebilmek
- Dönem projeniz için mantıklı bir mimari şema tasarlayabilmek

---

## 1. Yazılım Mimarisi Nedir?

Yazılım mimarisi, bir sistemin üst düzey yapısını tanımlar.

Bu tanım kısa ama derindir. Çünkü mimari yalnızca “hangi teknoloji kullanıldı?” sorusuna cevap vermez. Daha önemli şeyleri belirler:

- Sistem hangi bileşenlerden oluşur?
- Bu bileşenler nasıl haberleşir?
- Hangi sorumluluk nereye aittir?
- Hangi katman neyi bilir, neyi bilmez?
- Değişiklik geldiğinde sistem ne kadar sarsılır?

### Mimari Neleri Etkiler?

Mimari kararlar doğrudan şunları etkiler:

- **Ölçeklenebilirlik** → Kaç kullanıcıyı kaldırabilir?
- **Bakım kolaylığı** → Yeni özellik eklemek ne kadar sancılı?
- **Performans** → Yanıt süresi nasıl?
- **Güvenlik** → Saldırı yüzeyi ne kadar kontrollü?
- **Test edilebilirlik** → Parçalar ayrı ayrı sınanabilir mi?
- **Geliştirici deneyimi** → Sisteme yeni giren biri yolu bulabilir mi?

İşte bu yüzden mimari, koddan “daha soyut” görünse de çoğu zaman daha belirleyicidir.

> Kod, mimarinin günlük konuşma biçimidir.

---

## 2. Mimari Neden Erken Düşünülmelidir?

Bir projede her şeyi sonradan toparlayabileceğinizi sanmak cazip bir yanılgıdır.

Başlangıçta insanlar genelde şunu der:

- “Önce çalışsın da sonra temizleriz.”

Bu cümle bazen işe yarar. Ama mimari seviyede çok tekrarlandığında şu sonuca varır:

- arayüz veritabanına doğrudan bağlanır,
- iş kuralları controller içine dökülür,
- aynı mantık üç yerde tekrar eder,
- test yazmak işkence olur,
- küçük değişiklikler bile domino etkisi yaratır.

Yani mimariyi düşünmemek de aslında bir mimari karardır. Genelde kötü olanından.

---

## 3. Katmanlı Mimari: Kaosu Katmanlara Bölmek

Katmanlı mimari, yazılım dünyasının en yaygın mimari örüntülerinden biridir. Basit ama güçlü bir fikri vardır:

> Her şeyi aynı yerde toplama. Sorumlulukları ayır.

Bu yaklaşımda sistem, farklı işlevlere sahip katmanlara ayrılır. Her katman kendi işini yapar ve genellikle sadece bir alt katmanla konuşur.

Bu da sistemi daha anlaşılır ve daha yönetilebilir hale getirir.

---

## 4. Klasik 3 Katmanlı Mimari

En çok görülen yapı şudur:

1. **Sunum Katmanı (Presentation / UI)**
2. **İş Mantığı Katmanı (Business Logic)**
3. **Veri Erişim Katmanı (Data Access)**

### 4.1 Sunum Katmanı (UI)
Bu katman kullanıcıyla konuşur.

Görevi:
- ekran göstermek,
- form almak,
- kullanıcı etkileşimini toplamak,
- sonuçları sunmak.

Örnek bileşenler:
- HTML / CSS
- React / Angular / Vue arayüzleri
- mobil ekranlar
- view şablonları

Bu katman **iş kuralı deposu** olmamalıdır. Ekran, iş mantığını taşımaya başlarsa sistem çabuk çamurlaşır.

### 4.2 İş Mantığı Katmanı (Business Logic)
Sistemin beyni burasıdır.

Görevi:
- iş kurallarını çalıştırmak,
- süreçleri yönetmek,
- hesap yapmak,
- kuralları uygulamak,
- veriye ne olacağına karar vermek.

Örnek:
- `ProductService`
- `UserService`
- `OrderService`
- use case handler’ları

Şu kararlar burada olur:
- kullanıcı bu işlemi yapabilir mi?
- ürün yayına alınabilir mi?
- stok yeterli mi?
- fiyat güncellemesi geçerli mi?

### 4.3 Veri Erişim Katmanı (Data Access)
Bu katman veritabanıyla konuşur.

Görevi:
- CRUD işlemleri yapmak,
- veriyi almak / yazmak,
- sorgu çalıştırmak,
- kayıtları dönüştürmek.

Örnek bileşenler:
- Repository
- DAO
- ORM araçları
- Entity Framework, Hibernate, Sequelize

Bu katman iş kuralı yazma yeri değildir. O iş Business katmanına aittir.

---

## 5. Strict Layering: Herkes Herkesle Konuşamaz

Katmanlı mimarinin önemli ilkelerinden biri şudur:

> Üst katman, doğrudan alt alta atlamamalı.

Yani örneğin:

- UI → Business ile konuşmalı
- Business → Data ile konuşmalı
- UI → doğrudan veritabanına gitmemeli

### Neden?

Çünkü UI katmanını veritabanına bağlarsanız:
- iş kuralları dağılır,
- tekrar oluşur,
- test zorlaşır,
- güvenlik kontrolü gevşer,
- bakım maliyeti patlar.

Katmanlı düşünmek bazen yavaşlatıyormuş gibi görünür, ama orta vadede sistemi kurtarır.

---

## 6. N-Katman Mimarisi: Sistem Büyüyünce Derinlik Artar

Bazı projelerde üç katman yetmez. Sistem büyüdükçe daha ayrıntılı yapı gerekir.

Özellikle kurumsal ya da domain odaklı projelerde şu yapı görülür:

- **Presentation Layer**
- **Application Layer**
- **Domain Layer**
- **Infrastructure Layer**

### Application Layer
Use case akışını yönetir. “Ne yapılacak?” sorusunun orkestrasyon tarafıdır.

### Domain Layer
İş kurallarının kalbidir. Domain nesneleri burada yaşar.

### Infrastructure Layer
Veritabanı, e-posta, dosya sistemi, cache, dış servis bağlantıları burada bulunur.

Bu yaklaşım, özellikle **DDD (Domain-Driven Design)** ve **Clean Architecture** gibi modellerde daha anlamlı hale gelir.

---

## 7. MVC: Eski Ama Hâlâ Güçlü Bir Ayrım

**MVC (Model-View-Controller)**, yazılım dünyasında en çok bilinen yapısal örüntülerden biridir.

Temel fikir şudur:

- veri ve iş mantığı başka yerde olsun,
- kullanıcı arayüzü başka yerde olsun,
- gelen isteği yöneten yapı başka yerde olsun.

### 7.1 Model
Veriyi ve iş mantığını temsil eder.

Örnek:
- ürün verisi
- kullanıcı bilgisi
- iş kuralları
- veritabanı işlemleriyle ilişkili yapı

### 7.2 View
Sunum katmanıdır.

Görevi:
- kullanıcıya sonucu göstermek,
- ekranı oluşturmak,
- görsel temsil sunmak

### 7.3 Controller
İsteği karşılar ve akışı yönetir.

Görevi:
- HTTP isteğini almak,
- ilgili işlemi tetiklemek,
- gerekli modeli çağırmak,
- uygun görünümü döndürmek

### MVC Akışı

Kullanıcı → Controller → Model → View → Kullanıcı

Bu model hâlâ çok güçlüdür çünkü rolleri ayırır.

### Nerelerde Kullanılır?

- ASP.NET MVC
- Spring MVC
- Ruby on Rails
- Laravel

Bu yapılar aynı mantığın farklı uygulamalarıdır.

---

## 8. MVVM: Özellikle Modern Arayüzler İçin Güçlü Bir Yaklaşım

**MVVM (Model-View-ViewModel)**, özellikle modern front-end ve mobil dünyasında çok yaygınlaşmıştır.

MVC’ye benzer ama önemli bir farkı vardır: **ViewModel**, View için hazırlanmış veri ve davranış katmanıdır.

### 8.1 Model
Veri ve iş kurallarıdır.

### 8.2 View
Yalnızca sunumdur.

### 8.3 ViewModel
View’ın ihtiyacı olan veriyi işler, hazırlar ve sunar.

Burada fikir şudur:

- View aptal olsun,
- mantık doğrudan ekranda birikmesin,
- test edilebilir yapı ViewModel’de toplansın.

### MVVM’nin Gücü

- UI mantığı daha temiz ayrılır
- test yazmak kolaylaşır
- veri bağlama (data binding) daha anlamlı hale gelir
- modern framework’lerle daha rahat çalışır

### Nerelerde Görülür?

- Angular
- Vue
- React benzeri state odaklı yaklaşımlar
- Android Jetpack
- SwiftUI

---

## 9. MVC mi, MVVM mi?

Bu sorunun tek kutsal cevabı yok. Bağlama göre karar verilir.

### MVC güçlüdür çünkü:
- basittir,
- uzun yıllardır oturmuştur,
- request-response tabanlı yapılar için doğaldır.

### MVVM güçlüdür çünkü:
- UI state yönetiminde rahattır,
- veri bağlama mantığına daha yatkındır,
- test edilebilir sunum mantığı sağlar.

Önemli olan, örüntüyü ezberlemek değil; **hangi problemi çözdüğünü anlamaktır**.

---

## 10. RESTful API: Modern Sistemlerin Ortak Dili

Bugün web ve mobil uygulamaların çoğu, ön yüz ile arka yüz arasındaki iletişimi **RESTful API** üzerinden kurar.

REST, Roy Fielding tarafından 2000 yılında tanımlanan bir mimari stildir.

Özü şudur:

> Kaynakları tutarlı bir arayüz üzerinden yönet.

Burada “kaynak” dediğimiz şey örneğin şunlar olabilir:
- kullanıcılar
- ürünler
- mesajlar
- siparişler

---

## 11. REST’in Temel Kısıtları

### Stateless (Durumsuz)
Her istek kendi başına anlamlı olmalıdır.

Sunucu, “bir önceki istekte ne olmuştu?” diye oturum belleğine yaslanmamalıdır.

### Client-Server
İstemci ile sunucu ayrıdır. Biri arayüzdür, diğeri veri ve iş mantığını yönetir.

### Cacheable
Yanıtlar gerektiğinde önbelleğe alınabilir olmalıdır.

### Uniform Interface
Tutarlı URL yapısı, HTTP fiilleri ve veri formatı kullanılmalıdır.

### Layered System
İstemci, arada kaç ara katman olduğunu bilmek zorunda değildir.

Bu yapı, büyük sistemlerde esneklik ve ölçeklenebilirlik sağlar.

---

## 12. HTTP Yöntemleri ve Kaynak Mantığı

REST’te URL’ler genellikle **kaynağı**, HTTP metotları ise **işlemi** temsil eder.

| HTTP Yöntemi | Amaç | Örnek |
|--------------|------|-------|
| GET | Veri okuma | `/api/products` |
| GET | Tek kaynak okuma | `/api/products/42` |
| POST | Yeni kaynak oluşturma | `/api/products` |
| PUT | Tam güncelleme | `/api/products/42` |
| PATCH | Kısmi güncelleme | `/api/products/42/status` |
| DELETE | Silme | `/api/products/42` |

### Çok Önemli Tasarım İlkesi

URL’de **isim** kullan, fiil değil.

**Doğru:**
- `/api/products`
- `/api/users`
- `/api/messages`

**Yanlış:**
- `/api/getProducts`
- `/api/createUser`

Çünkü işlem zaten HTTP metodunda var.

---

## 13. REST API Tasarım İpuçları

İyi REST tasarımı için şu kurallar altın değerindedir:

### 13.1 Çoğul kaynak adları kullan
- `/products`
- `/users`
- `/messages`

### 13.2 HTTP durum kodlarını doğru kullan
- `200 OK`
- `201 Created`
- `400 Bad Request`
- `401 Unauthorized`
- `404 Not Found`
- `500 Internal Server Error`

### 13.3 Sürümleme düşün
- `/api/v1/products`

Bu, gelecekte kırmadan gelişmek için çok işe yarar.

### 13.4 JSON yapısını tutarlı kur
Aynı API içinde:
- alan adları tutarlı olmalı,
- hata yanıtları tek biçimde dönmeli,
- response yapısı gelişi güzel olmamalı.

İyi API, sadece makinenin değil geliştiricinin de rahat okuduğu API’dir.

---

## 14. Modülerlik: Büyük Sistemi Yutulabilir Parçalara Bölmek

Bir sistem büyüdükçe en büyük tehlikelerden biri şudur:

- her şey birbirine girer,
- kod dolaşık hale gelir,
- değişiklik yapmak riskli olur,
- sistem anlaşılmazlaşır.

Bu noktada modülerlik devreye girer.

Modülerlik demek:

- sistemi anlamlı parçalara ayırmak,
- her parçaya net sorumluluk vermek,
- parçalar arası bağımlılığı sınırlamak,
- değişikliği kontrol altına almak

demektir.

### Spaghetti Code Nedir?

Dökümanda geçen bu kavram boşuna meşhur değil.

Spaghetti code, şu belirtilerle kendini belli eder:
- bir fonksiyon her şeyi yapar,
- sınıflar her yere dokunur,
- bağımlılıklar iz sürülemez hale gelir,
- küçük düzeltme başka yerde bug çıkarır.

Modülerlik, bunun panzehiridir.

---

## 15. SOLID İlkeleri: Bağımlılık Yönetiminin Omurgası

Robert C. Martin’in derlediği **SOLID** ilkeleri, nesne yönelimli tasarımın en güçlü çerçevelerinden biridir.

### S — Single Responsibility Principle
Bir sınıfın tek bir değişim nedeni olmalıdır.

### O — Open/Closed Principle
Sınıf genişlemeye açık, değişime kapalı olmalıdır.

### L — Liskov Substitution Principle
Alt sınıf, üst sınıfın yerine geçebilmelidir.

### I — Interface Segregation Principle
Büyük, şişkin arayüzler yerine küçük ve odaklı arayüzler tercih edilmelidir.

### D — Dependency Inversion Principle
Yüksek seviyeli modüller, düşük seviyeli detaylara doğrudan bağımlı olmamalıdır.

Bu ilkeler teorik poster süsü değildir. Mimariyi çökerten hataların çoğu, bunların ihlaliyle başlar.

---

## 16. Mikroservis mi, Monolit mi?

Dökümanda buna kısa ama yerinde bir bakış vardı. Onu netleştirelim.

### Monolitik Mimari
Tüm sistem tek büyük uygulama olarak çalışır.

#### Güçlü Yanları
- başlamak kolaydır,
- deployment basittir,
- küçük ekipler için pratiktir.

#### Zayıf Yanları
- sistem büyüdükçe hantallaşabilir,
- tek parçanın değişimi tüm sistemi etkileyebilir,
- seçici ölçekleme zordur.

### Mikroservis Mimarisi
Sistem, bağımsız dağıtılabilen küçük servislerden oluşur.

#### Güçlü Yanları
- servis bazlı ölçekleme yapılabilir,
- ekipler paralel çalışabilir,
- teknoloji seçimi servis bazında esneyebilir.

#### Zayıf Yanları
- altyapı karmaşıktır,
- gözlemleme, loglama, servis iletişimi zordur,
- küçük projelerde gereksiz yük olabilir.

### Kısa Gerçeklik Kontrolü

Küçük/orta ölçekli öğrenci veya yeni ürün projelerinde çoğu zaman iyi tasarlanmış bir **modüler monolit**, kötü kurulmuş mikroservisten daha iyidir.

Mikroservis havalı diye seçilmez. İhtiyaç varsa seçilir.

---

## 17. Dönem Projesi İçin Mantıklı Bir Mimari Örnek

Kampüs ikinci el platformu için dökümandaki öneri mantıklı bir temel sunuyor.

### Ön Yüz
- React.js
- Tailwind CSS

### API Katmanı
- Node.js
- Express.js
- RESTful API

### İş Mantığı
- `ProductService`
- `UserService`
- `MessageService`
- `NotificationService`

### Veri Erişim
- Sequelize ORM
- PostgreSQL

### Yardımcı Servisler
- AWS S3 / MinIO → ürün fotoğrafları
- JWT → kimlik doğrulama
- Nodemailer + SMTP → e-posta
- Redis → arama/cache

### Neden Güzel Bir Örnek?

Çünkü sorumlulukları ayırıyor:

- arayüz başka yerde,
- iş kuralı başka yerde,
- veri erişimi başka yerde,
- dış servis entegrasyonları kontrollü yerde.

Bu, büyümeye açık ve öğrencinin mimariyi somut düşünmesini sağlayan temiz bir çerçeve.

---

## 18. Mimari Şema Çizerken Sorulması Gereken Sorular

Bir sistem için mimari tasarım yaparken şu soruları sormadan geçmeyin:

- Kullanıcı arayüzü ile iş mantığı gerçekten ayrılmış mı?
- İş kuralları controller veya ekrana sızmış mı?
- Veritabanı erişimi merkezi mi, dağınık mı?
- Dış servis bağımlılıkları izole edilmiş mi?
- Test yazmak için parçalar yeterince ayrık mı?
- Kimlik doğrulama hangi katmanda yönetiliyor?
- Dosya depolama ve cache mimaride nereye oturuyor?
- Bu yapı 10 kullanıcıdayken de 10.000 kullanıcıdayken de nefes alabilir mi?

Bu soruların yarısı bile doğru cevaplanırsa sistem daha doğmadan güçlenir.

---

## 19. Sık Yapılan Hatalar

### 1. UI katmanına iş mantığı doldurmak
Formun içinde iş kuralı biriktirmek, kısa vadede hızlı; uzun vadede toksiktir.

### 2. Controller’ı şişirmek
Her şeyi controller’a koymak, MVC’yi sadece isimde bırakır.

### 3. Veritabanına her yerden dokunmak
Repository veya servis katmanı devre dışı kalınca tutarlılık da gider.

### 4. Katmanlı mimari deyip katmanları delmek
UI → Data doğrudan bağlanıyorsa katmanlı yapı tabelada kalmıştır.

### 5. Mikroservisi erken seçmek
İhtiyaç yokken mikroservis seçmek, problemi çözmeden altyapı yükü ekler.

### 6. REST’te URL’leri fiille doldurmak
Bu, API’yi zamanla dağınık hale getirir.

### 7. Modülerlik konuşup bağımlılıkları yönetememek
Parça parça görünen ama içeride birbirine yapışmış yapı, sadece organize kaostur.

---

## 20. Bölüm Özeti

Bu derste şunu netleştirdik:

- Yazılım mimarisi, sistemin üst düzey yapısını ve temel kararlarını belirler.
- Mimari; ölçeklenebilirlikten güvenliğe, bakımdan geliştirici deneyimine kadar her şeyi etkiler.
- **Katmanlı mimari**, sorumlulukları ayırarak sistemi yönetilebilir kılar.
- **MVC** ve **MVVM**, arayüz ile mantık arasındaki yükü doğru dağıtmak için kullanılır.
- **RESTful API**, modern istemci-sunucu iletişiminin en yaygın dilidir.
- **Modülerlik** ve **SOLID**, sistemin büyürken çamura dönüşmesini engeller.
- Mikroservis güçlüdür ama herkes için varsayılan doğru değildir.

Kısacası mimari, sistemin süslü diyagramı değil; **gelecekte kırılmadan yaşayabilme planıdır**.

Kod yazmak binayı dikmektir. Mimari ise kolonların nereye oturacağını belirlemektir.

---

## 21. Mini Alıştırmalar

### Alıştırma 1
Bir e-ticaret sistemi için şu katmanları ayırın:
- UI
- Business Logic
- Data Access

Her katmanda en az 3 sorumluluk yazın.

### Alıştırma 2
Aşağıdaki işlemleri hangi HTTP metoduyla tasarlayacağınızı yazın:
- tüm ürünleri listeleme
- tek ürün görüntüleme
- yeni ürün ekleme
- ürün durumunu güncelleme
- ürün silme

### Alıştırma 3
Aşağıdaki yapıda hangi mimari hata vardır?

> React bileşeni doğrudan SQL sorgusu yazıyor, kullanıcı doğrulamasını kendi içinde yapıyor, veriyi doğrudan veritabanından çekiyor.

### Alıştırma 4
Kampüs ikinci el platformu için şu bileşenleri içeren basit mimari şema kurun:
- Front-End
- API
- Auth
- ProductService
- MessageService
- PostgreSQL
- File Storage
- Cache

Her bileşenin hangi katmanda olduğunu ve kimlerle konuştuğunu belirtin.

---

## Kaynaklar

- Fowler, M. (2002). *Patterns of Enterprise Application Architecture*. Addison-Wesley.
- Fielding, R. (2000). *Architectural Styles and the Design of Network-based Software Architectures*. Doctoral Dissertation, UC Irvine.
- Martin, R. C. (2017). *Clean Architecture*. Prentice Hall.
- Richardson, C. (2018). *Microservices Patterns*. Manning.
- Newman, S. (2021). *Building Microservices* (2nd ed.). O’Reilly.

---

İyi mimari, göz boyayan karmaşıklık değildir. Aksine, karmaşıklığın içinden gereksiz olanı söküp atan disiplindir. Sisteme baktığınızda neyin nerede durduğunu, neden orada durduğunu ve bir şey değiştiğinde neyin etkileneceğini görebiliyorsanız, mimari işini yapıyordur.
