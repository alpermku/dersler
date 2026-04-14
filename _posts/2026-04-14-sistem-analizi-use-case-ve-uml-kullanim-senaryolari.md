---
layout: post
title: "Kullanım Senaryoları ve UML Use Case Diyagramları: Sistemi Dışarıdan Görmeyi Öğrenmek"
date: 2026-04-14 11:30:00 +0300
categories: sistem-analizi-ve-tasarimi
---

Bir yazılım projesi tasarlarken en büyük tuzaklardan biri şudur: sistemin içinde kaybolmak. Veritabanı tablolarını, ekranları, butonları, teknik katmanları konuşuruz, ama asıl soruyu kaçırırız: **Kullanıcı bu sistemle ne başarmak istiyor?**

İşte **use case** yaklaşımı tam burada devreye girer. Use case, sistemi içeriden değil dışarıdan görmemizi sağlar. Kodun nasıl yazılacağını değil, kullanıcının sistemle hangi hedefe ulaşacağını anlatır. Bu yüzden use case yazmak, sadece diyagram çizmek değildir. Aynı zamanda kullanıcı niyetini, iş hedefini ve sistem davranışını ortak bir dilde görünür kılmaktır.

Bu derste, use case kavramının tarihsel doğuşundan UML Use Case diyagramlarına, include ve extend ilişkilerinden hata akışlarına kadar konuyu uçtan uca işleyeceğiz. Üstelik bunu yalnızca tanım vererek değil, gerçek bir dönem projesi bağlamında düşüneceğiz.

> "Use case'ler, sistemi dışarıdan görmemizi sağlar: kullanıcının perspektifinden, kullanıcının hedeflerine dayalı biçimde. Bu bakış açısı olmaksızın, geliştiriciler çoğu zaman kullanıcının değil kendi hayallerinin peşine düşer."
>
> **Ivar Jacobson**, *Object-Oriented Software Engineering* (1992)

---

## Bu Derste Neler Öğreneceksiniz?

Bu bölümün sonunda şunları yapabilir hale gelmeniz hedeflenmektedir:

- Use case kavramının tarihini ve neden ortaya çıktığını açıklayabilmek
- Aktör, use case, temel akış, alternatif akış ve istisna akışı gibi temel bileşenleri doğru tanımlayabilmek
- UML Use Case diyagramı çizim kurallarını uygulayabilmek
- **include** ve **extend** ilişkilerini karıştırmadan kullanabilmek
- Hata durumlarını ve sınır koşullarını senaryo formatında yazabilmek
- Dönem projeniz için eksiksiz bir use case seti hazırlayabilmek

Bu konu, ileride sınıf diyagramı, etkinlik diyagramı ve test senaryosu yazımı için de temel oluşturur. Kısacası burada ne kadar sağlam durursanız, sonraki tasarım aşamaları o kadar net akar.

---

## 1. Use Case Kavramının Doğuşu: Ivar Jacobson ve Büyük Kırılma

Use case kavramı, 1986-1987 yıllarında İsveçli yazılım mühendisi **Ivar Jacobson** tarafından Ericsson'daki çalışmaları sırasında geliştirildi. O dönemde yazılım projeleri ağırlıklı olarak teknik bakış açısıyla tanımlanıyordu. Sistemden bahsedildiğinde konuşulan şeyler genellikle veri yapıları, modüller ve iç mimariydi.

Ama Jacobson kritik bir şeyi fark etti: Bir sistemin başarısı, geliştiricinin içeride ne kurduğundan çok, kullanıcının dışarıdan ne yapabildiğiyle ilgilidir.

Bu düşünce, 1992 yılında yayımlanan **Object-Oriented Software Engineering: A Use-Case Driven Approach** kitabıyla tüm dünyaya yayıldı. Sonrasında UML'in parçası haline geldi ve yazılım mühendisliğinde en yaygın modelleme araçlarından biri oldu.

### Neden Bu Kadar Önemliydi?

Çünkü use case yaklaşımı şunu yaptı:

- Sistemi kullanıcı hedefleri üzerinden konuşulabilir hale getirdi
- Analist, müşteri ve geliştirici arasında ortak bir dil kurdu
- "Sistem ne yapacak?" sorusunu teknik dilden çıkarıp iş diline taşıdı
- Test senaryoları ve gereksinim dokümanları için güçlü bir temel sundu

Bir başka deyişle use case, yazılımı makine bakış açısından çıkarıp **insan etkileşimi merkezli** hale getirdi.

---

## 2. Use Case Nedir?

Bir **use case**, bir aktörün sistem aracılığıyla elde etmek istediği anlamlı sonucu tanımlayan davranış birimidir.

Daha basit söylersek:

> Bir kullanıcı sistemle ne yapmak istiyor ve sistem buna nasıl karşılık veriyor?

Örneğin:

- Sisteme giriş yap
- İlan oluştur
- Ürün ara
- Satıcıya mesaj gönder
- Raporları görüntüle

Bunların her biri birer use case olabilir.

### İyi Bir Use Case Adı Nasıl Olmalı?

Use case adları genellikle:

- **Eylem fiili + nesne** biçiminde olmalıdır
- Kullanıcının yapmak istediği işi doğrudan anlatmalıdır
- Teknik değil iş odaklı olmalıdır

**Doğru örnekler:**

- Sisteme Giriş Yap
- İlan Oluştur
- Siparişi Onayla
- Raporu Görüntüle

**Zayıf örnekler:**

- Kullanıcı İşlemleri
- Veri Girişi
- Modül 1
- Auth Süreci

Kötü isimlendirilmiş bir use case, analiz belgesinin başında zihni dağıtır. İyi isimlendirilmiş bir use case ise tek satırda niyeti yakalatır.

---

## 3. Use Case Bileşenleri

Use case yalnızca bir elips çizmekten ibaret değildir. Sağlam bir kullanım senaryosu, birkaç temel bileşenin birlikte düşünülmesiyle oluşur.

### 3.1 Aktör (Actor)

Aktör, sistemin dışında bulunan ve sistemle etkileşim kuran varlıktır. Aktör her zaman insan olmak zorunda değildir.

| Aktör Türü | Açıklama | Örnek |
|-----------|----------|-------|
| İnsan aktör (birincil) | Sistemi doğrudan kullanan kişi | Öğrenci, Satıcı, Yönetici |
| İnsan aktör (ikincil) | Süreci destekleyen kişi | Destek personeli |
| Sistem aktörü | Dış sistem veya servis | Ödeme API'si, E-posta servisi |
| Zaman aktörü | Zamana bağlı tetikleyici | Gece yarısı çalışan görev |

UML'de aktörler çoğunlukla çöp adam notasyonuyla gösterilir. İnsan olmayan aktörler için bazen `<<system>>` veya `<<timer>>` stereotipleri kullanılır.

### 3.2 Sistem Sınırı

Use case diyagramında sistemin kendisi genellikle bir dikdörtgen sınır içinde gösterilir. Bu sınırın içindeki use case'ler, sistemin sorumluluğundadır. Dışındaki aktörler ise sistem dış dünyasını temsil eder.

Bu ayrım kritiktir. Çünkü birçok öğrenci şu hatayı yapar: aktör ile sistemi birbirine karıştırır. Eğer bir şey sistemin dışında karar alıyor veya etkileşim kuruyorsa aktördür, sistemin parçası değildir.

### 3.3 Use Case

Use case, sistem sınırının içinde yer alır ve elipsle gösterilir. Her use case bir değere karşılık gelmelidir. Yani kullanıcı için somut bir çıktı üretmelidir.

Örneğin "Veritabanına bağlan" bir kullanıcı use case'i değildir. Çünkü kullanıcı hedefi değildir. Ama "İlan Oluştur" kullanıcı için açık bir değerdir.

### 3.4 Senaryo Akışları

Bir use case yazıldığında yalnızca isim verilmez, senaryosu da yazılır. Bu senaryo genellikle şu akışları içerir:

- **Temel akış (main flow / happy path):** Her şey yolunda giderse ne olur?
- **Alternatif akış:** Başka bir geçerli yol varsa ne olur?
- **İstisna akışı:** Hata veya olağan dışı durum oluşursa ne olur?
- **Ön koşullar:** Senaryo başlamadan önce ne doğru olmalı?
- **Son koşullar:** Senaryo tamamlandığında sistem hangi durumda kalmalı?

İyi bir analist yalnızca başarıyı yazmaz. Başarısızlığı da düşünür. Çünkü gerçek dünya sadece happy path'ten ibaret değildir.

---

## 4. Tam Use Case Şablonu

Bir use case'i profesyonelce yazmak için aşağıdaki şablon kullanılabilir:

| Alan | Açıklama |
|------|----------|
| Use Case ID | UC-001, UC-002 gibi benzersiz kimlik |
| Use Case Adı | Eylem içeren açık isim |
| Birincil Aktör | Süreci başlatan ana aktör |
| Amaç | Aktörün ulaşmak istediği sonuç |
| Ön Koşullar | Senaryo başlamadan önce sağlanmış olması gereken durum |
| Tetikleyici | Use case'i başlatan olay |
| Temel Akış | Ana başarı senaryosu |
| Alternatif Akışlar | Geçerli sapmalar |
| İstisna Akışları | Hata ve beklenmeyen durumlar |
| Son Koşullar | Use case sonunda sistemin durumu |

### Örnek Şablon

**UC-003: İlan Oluştur**

- **Birincil Aktör:** Satıcı
- **Amaç:** Yeni bir ürün ilanı yayınlamak
- **Ön Koşul:** Kullanıcı sisteme giriş yapmış olmalıdır
- **Tetikleyici:** Satıcı, "Yeni İlan Oluştur" düğmesine tıklar

#### Temel Akış

1. Sistem ilan oluşturma formunu görüntüler.
2. Satıcı ürün başlığını girer.
3. Satıcı ürün açıklamasını girer.
4. Satıcı kategori seçer.
5. Satıcı fiyat bilgisini girer.
6. Satıcı en az bir ürün fotoğrafı yükler.
7. Satıcı "İlanı Yayınla" düğmesine tıklar.
8. Sistem tüm alanları doğrular.
9. Sistem ilanı veritabanına kaydeder.
10. Sistem ilan detay sayfasını görüntüler.
11. Sistem kullanıcıya başarı mesajı gösterir.

#### Alternatif Akış

8a. Zorunlu alanlardan biri eksikse sistem eksik alanları işaretler ve kullanıcıdan düzeltme ister.

#### İstisna Akışı

9a. Veritabanı bağlantısı koparsa sistem işlemi durdurur, hata mesajı gösterir ve daha sonra tekrar denemesini ister.

#### Son Koşul

İlan sistemde aktif durumda kayıtlıdır.

Bu şablon, use case'i soyut bir fikir olmaktan çıkarır ve test edilebilir bir senaryoya dönüştürür.

---

## 5. Temel Akış Yazımı: Happy Path Nasıl Yazılır?

Temel akış, her şeyin yolunda gittiği başarı senaryosudur. Öğrencilerin en sık yaptığı hatalardan biri, temel akışı ya fazla kısa ya da fazla teknik yazmaktır.

### İyi Temel Akış İçin Kurallar

- Adımlar numaralandırılmalıdır
- Her adım kısa ve açık olmalıdır
- Eylem fiiliyle yazılmalıdır
- Aktör ve sistem adımları karışmamalıdır
- Teknik implementasyon değil gözlemlenebilir davranış anlatılmalıdır

**Zayıf yazım:**

- Kullanıcı veri girer
- Sistem işler
- Sonuç döner

Bu yazım hiçbir şey anlatmıyor.

**Daha iyi yazım:**

1. Satıcı, ana sayfada "Yeni İlan Oluştur" düğmesine tıklar.
2. Sistem, ilan oluşturma formunu görüntüler.
3. Satıcı, başlık ve açıklama alanlarını doldurur.
4. Satıcı, kategori ve fiyat bilgisini girer.
5. Satıcı, ürün fotoğrafını yükler.
6. Satıcı, "İlanı Yayınla" düğmesine tıklar.
7. Sistem bilgileri doğrular ve ilanı kaydeder.
8. Sistem başarı mesajı gösterir.

Gördüğünüz gibi burada olay akışı net, takip edilebilir ve test edilebilir.

---

## 6. UML Use Case Diyagramı

Use case diyagramı, sistemdeki aktörleri, use case'leri ve bu use case'ler arasındaki ilişkileri üst düzeyde gösterir. Bu diyagram kodu anlatmaz. Akışı ayrıntılı olarak da anlatmaz. Ama sistemin kapsamını ve kullanıcı etkileşimlerini kuşbakışı görmeyi sağlar.

### 6.1 Diyagramın Temel Elemanları

| Öğe | Gösterim | Açıklama |
|-----|----------|----------|
| Aktör | Çöp adam | Sistem dışındaki varlık |
| Use Case | Elips | Kullanıcının gerçekleştirmek istediği davranış |
| Sistem Sınırı | Dikdörtgen | Sistem kapsamı |
| Association | Düz çizgi | Aktör ile use case arasındaki ilişki |
| Include | Kesik ok + `<<include>>` | Zorunlu alt davranış |
| Extend | Kesik ok + `<<extend>>` | Koşullu genişleme |
| Generalization | İçi boş ok | Kalıtım benzeri genelleme |

### 6.2 Use Case Diyagramı Ne İşe Yarar?

- Paydaşlara sistem kapsamını hızlıca anlatır
- Fonksiyonları üst düzeyde sınıflandırır
- Eksik aktör veya eksik işlev fark etmeyi kolaylaştırır
- Toplantılarda ortak tartışma zemini oluşturur
- Sonraki detaylı senaryo yazımını destekler

Ama şunu unutmayın: **diyagram, senaryonun yerine geçmez.**

Sadece diyagram çizip use case yazmayan ekipler, görsel olarak düzgün ama içerik olarak boş modeller üretir.

---

## 7. Include ve Extend İlişkileri

Bu iki ilişki, use case konusunun öğrencileri en çok ters köşe yaptığı noktadır. İsimleri benzer görünür ama mantıkları farklıdır.

### 7.1 Include İlişkisi

**Include**, bir use case'in başka bir use case'i **her zaman** çağırdığını gösterir. Genellikle ortak davranışları tekrar tekrar yazmamak için kullanılır.

Örnek:

- "İlan Oluştur" use case'i
- "Mesaj Gönder" use case'i
- Her ikisi de "Kimlik Doğrula" davranışını zorunlu olarak kullanıyorsa

ilişki şöyle gösterilir:

- İlan Oluştur `<<include>>` Kimlik Doğrula
- Mesaj Gönder `<<include>>` Kimlik Doğrula

### Include ne zaman kullanılır?

- Davranış her seferinde çalışıyorsa
- Ortak alt işlev birden fazla use case tarafından kullanılıyorsa
- Tekrarı azaltmak istiyorsanız

### 7.2 Extend İlişkisi

**Extend**, bir use case'in belirli bir koşul oluştuğunda başka bir use case'i genişlettiğini gösterir.

Örnek:

- Temel use case: İlan Oluştur
- Koşullu uzantı: Promo Kodu Uygula

Eğer kullanıcı promo kodu girmişse, sistem temel akışın belirli bir noktasında ek adımlar çalıştırır.

Bu durumda:

- Promo Kodu Uygula `<<extend>>` İlan Oluştur

### Extend ne zaman kullanılır?

- Davranış her zaman değil, belirli koşullarda devreye giriyorsa
- Temel use case onsuz da anlamlıysa
- Ek özellik veya opsiyonel senaryo söz konusuysa

### 7.3 Include ve Extend Karşılaştırması

| Soru | Include | Extend |
|------|---------|--------|
| Çağrı zorunlu mu? | Evet | Hayır |
| Davranış ne tür? | Ortak ve tekrar eden | Koşullu ve opsiyonel |
| Ok yönü | Temel use case'ten yardımcı use case'e | Uzantıdan temel use case'e |
| Temel use case tek başına çalışır mı? | Genelde bu alt işlev olmadan eksik kalır | Evet, çalışır |

### Hızlı hafıza kancası

- **Include = her zaman içeri al**
- **Extend = gerekirse uzat**

Bu basit cümle bile çoğu karışıklığı çözer.

---

## 8. Hata Durumları ve Sınır Koşulları

Bir analiz dokümanı yalnızca başarı hikâyesi yazıyorsa eksiktir. Çünkü gerçek yazılım projeleri, kenar durumları yönetme becerisiyle olgunlaşır.

Aşağıdaki sorular tam da bu yüzden sorulmalıdır:

- Kullanıcı geçersiz e-posta ile giriş yaparsa ne olur?
- Fotoğraf boyutu izin verilen sınırı aşarsa ne olur?
- Negatif fiyat girilirse sistem ne yapar?
- Aynı ürün iki kullanıcı tarafından aynı anda rezerve edilirse ne olur?
- Veritabanı bağlantısı koparsa işlem nasıl sonlandırılır?

Bu soruların her biri, use case'e şu yapılardan biri olarak eklenmelidir:

- **Alternatif akış**
- **İstisna akışı**
- **İş kuralı notu**

### Neden Bu Kadar Önemli?

Çünkü test senaryoları büyük ölçüde buradan türetilir.

Eğer siz analiz aşamasında hata akışını yazmazsanız:

- Geliştirici ne yapacağını varsayar
- Test uzmanı neyi deneyeceğini eksik bilir
- Kullanıcı hatayla karşılaştığında sistem beklenmedik davranır

Yani hata akışı yazmak karamsarlık değil, profesyonelliktir.

> Her use case için en az bir alternatif akış ve en az bir istisna akışı düşünmek iyi bir analiz alışkanlığıdır.

---

## 9. Uygulama: Kampüs İkinci El Platformu İçin Use Case Seti

Şimdi konuyu somutlaştıralım. Dönem projeniz olarak bir **Kampüs İkinci El Platformu** geliştirdiğinizi düşünelim.

Bu sistem için temel use case seti şöyle olabilir:

| ID | Use Case Adı | Birincil Aktör |
|----|--------------|----------------|
| UC-001 | Sisteme Kayıt Ol | Ziyaretçi |
| UC-002 | Sisteme Giriş Yap | Kullanıcı |
| UC-003 | İlan Oluştur | Satıcı |
| UC-004 | İlan Düzenle | Satıcı |
| UC-005 | İlan Sil | Satıcı |
| UC-006 | Ürün Ara | Alıcı |
| UC-007 | İlan Detayı Gör | Alıcı |
| UC-008 | Satıcıya Mesaj Gönder | Alıcı |
| UC-009 | Kullanıcıyı Değerlendir | Kullanıcı |
| UC-010 | İlanı Şikâyet Et | Kullanıcı |
| UC-011 | Kullanıcıyı Askıya Al | Yönetici |
| UC-012 | Raporları Görüntüle | Yönetici |

Bu tablo ne sağlar?

- Sistem kapsamı görünür hale gelir
- Hangi aktörün hangi işlemleri yaptığı netleşir
- Sonraki diyagram çizimlerine temel oluşturur
- Eksik fonksiyonları fark etmeyi kolaylaştırır

Örneğin burada ödeme sistemi, bildirim yönetimi veya şifre sıfırlama gibi ek use case'ler yoksa, bu ya bilinçli kapsam kararıdır ya da eksikliktir. Analistin görevi bunları sorgulamaktır.

---

## 10. Use Case Yazarken Sık Yapılan Hatalar

Bu bölüm önemli. Çünkü use case konusu teoride kolay görünür ama uygulamada aynı hatalar tekrar tekrar yapılır.

### Sık Hatalar

1. **Teknik ayrıntıyı use case diye yazmak**
   - "SQL sorgusu çalıştır" bir use case değildir.

2. **Aktör yerine rol değil kişi adı yazmak**
   - "Ahmet" aktör değildir, "Öğrenci" aktördür.

3. **Use case adını belirsiz vermek**
   - "İşlemler" yerine "İlan Oluştur" gibi net ifade kullanın.

4. **Sadece happy path yazmak**
   - Hataları düşünmeyen use case yarımdır.

5. **Include ve extend'i karıştırmak**
   - Koşulsuz ortak davranış include, koşullu uzantı extend'dir.

6. **Diyagram çizip senaryo yazmamak**
   - Şık görünen ama içi boş model üretir.

7. **Aktörü sistem sınırının içine koymak**
   - Aktör sistemin dışındadır.

Bu hataları bilmek, yarısını peşinen engeller.

---

## 11. Bölüm Özeti

Bu derste şunları gördük:

- Use case kavramı, Ivar Jacobson tarafından kullanıcı merkezli analiz ihtiyacından doğmuştur.
- Use case, aktörün sistem aracılığıyla elde etmek istediği anlamlı sonucu tanımlar.
- Aktör, sistemin dışında yer alan ve sistemle etkileşime giren varlıktır.
- Bir use case yalnızca isimden ibaret değildir; temel akış, alternatif akış ve istisna akışlarıyla yazılmalıdır.
- UML Use Case diyagramı, sistemin ne yapacağını üst düzeyde göstermenin güçlü bir yoludur.
- **Include**, zorunlu ortak davranışları; **extend**, koşullu uzantıları temsil eder.
- Hata durumları ve sınır koşulları use case'in ayrılmaz parçasıdır.
- Dönem projesi için hazırlanacak use case seti, sonraki analiz ve tasarım aşamalarının omurgasını oluşturur.

Kısacası use case, yazılımın iç mantığını değil, **kullanıcının hedefe ulaşma yolculuğunu** görünür kılar. Bu yüzden iyi yazılmış bir use case seti, hem analistin pusulasıdır hem geliştiricinin yol haritasıdır.

---

## 12. Mini Alıştırmalar

### Alıştırma 1
Aşağıdaki use case adlarından hangileri doğrudur, hangileri zayıftır? Neden?

- Kullanıcı İşlemleri
- Sisteme Giriş Yap
- Veri Girişi
- İlanı Şikâyet Et

### Alıştırma 2
"Kullanıcı Şifre Sıfırla" use case'i için:

- bir birincil aktör,
- bir ön koşul,
- en az 5 adımlık temel akış,
- bir alternatif akış,
- bir istisna akışı

hazırlayınız.

### Alıştırma 3
Aşağıdaki ilişkilerin hangisinde `include`, hangisinde `extend` kullanılması daha uygundur?

- Kullanıcı giriş yapmadan ilan oluşturamasın
- Kullanıcı isterse ilana promo kodu uygulasın
- Kullanıcı mesaj göndermeden önce kimliği doğrulansın

### Alıştırma 4
Kendi dönem projeniz için en az **8 use case** ve bunlara ait birincil aktörleri listeleyiniz.

---

## Kaynaklar

- Jacobson, I. (1992). *Object-Oriented Software Engineering: A Use-Case Driven Approach*. Addison-Wesley.
- Cockburn, A. (2001). *Writing Effective Use Cases*. Addison-Wesley.
- OMG. (2017). *UML Specification Version 2.5.1*. Object Management Group.
- Larman, C. (2004). *Applying UML and Patterns* (3. bs.). Prentice Hall.
- Wiegers, K. & Beatty, J. (2013). *Software Requirements* (3. bs.). Microsoft Press.
