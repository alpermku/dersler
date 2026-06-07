---
layout: post
title: "Sınıf Diyagramı ve Nesne Yönelimli Analiz: Sistemin İskeletini Görmek"
date: 2026-06-07 12:22:00 +0300
categories: sistem-analizi-ve-tasarimi
course_id: sistem-analizi-ve-tasarimi
tags: [sistem-analizi, uml, sınıf-diyagramı, nesne-yönelimli-analiz, oop, domain-model]
---

Bir yazılım sistemine dışarıdan bakınca ekranlar görünür. Biraz yaklaşınca akışlar görünür. Ama gerçekten içine girdiğinizde, sizi ayakta tutan şeyin bambaşka bir yapı olduğunu fark edersiniz: **sınıflar, sorumluluklar ve ilişkiler**.

İşte **sınıf diyagramı**, bu görünmeyen yapıyı görünür kılar.

Sınıf diyagramı sadece kutular ve çizgiler değildir. O, bir sistemin hangi parçalardan oluştuğunu, bu parçaların ne bildiğini, ne yaptığını ve birbirine ne kadar bağımlı olduğunu anlatır. Eğer use case diyagramı sistemin dışarıdan nasıl göründüğünü gösteriyorsa, sınıf diyagramı da içerideki **iskeleti** gösterir.

Bu derste verdiğiniz dökümandan yararlanarak şu soruların cevabını netleştireceğiz:

- **Sınıf** ile **nesne** arasındaki fark nedir?
- UML sınıf diyagramı neden bu kadar önemlidir?
- **Association, aggregation, composition, inheritance** gibi ilişkiler gerçekten ne anlama gelir?
- **High cohesion / low coupling** neden iyi tasarımın kalbidir?
- Domain model ile teknik sınıf diyagramı arasında nasıl fark vardır?

Kısacası bugün sadece UML öğrenmeyeceğiz. Bugün, bir sistemi **parçalamadan anlamayı** öğreneceğiz.

> “Nesne yönelimli analiz ve tasarım, yazılımı gerçek dünya kavramlarına daha yakın hale getirir; böylece sistem daha anlaşılır, daha genişletilebilir ve daha yönetilebilir olur.”
>
> **Grady Booch**, *Object-Oriented Analysis and Design with Applications* (1994)

---

## Bu Derste Neler Öğreneceksiniz?

Bu bölümün sonunda şunları yapabilir hale gelmeniz hedeflenmektedir:

- Nesne yönelimli düşüncenin temel kavramlarını açıklayabilmek
- **Sınıf (class)** ile **nesne (object)** ayrımını net biçimde yapabilmek
- UML sınıf diyagramındaki nitelik, operasyon ve görünürlük işaretlerini okuyabilmek
- **Association, aggregation, composition, inheritance, dependency, realization** ilişkilerini ayırt edebilmek
- Çokluk (**multiplicity**) notasyonunu doğru yorumlayabilmek
- **High cohesion / low coupling** ilkelerinin neden kritik olduğunu kavrayabilmek
- Dönem projesi için iş odaklı bir **domain model** oluşturabilmek

---

## 1. Nesne Yönelimli Düşünce Neden Ortaya Çıktı?

Nesne yönelimli paradigmanın kökleri 1960’ların sonuna kadar uzanır. İlk ciddi adımlar **Simula** ile atıldı. Sonra **Smalltalk**, bu düşünceyi daha görünür hale getirdi. Daha sonra **C++** ve **Java**, nesne yönelimli yaklaşımı endüstrinin ana omurgasına dönüştürdü.

Peki neden?

Çünkü klasik prosedürel yaklaşımda sistem büyüdükçe şunlar olur:

- veri başka yerde durur,
- davranış başka yerde dağılır,
- değişiklik etkisi tahmin edilemez hale gelir,
- kod okunmaktan çok taşınan yük olur.

Nesne yönelimli yaklaşım ise daha doğal bir model önerir:

> Gerçek dünyada nesneler vardır. Bu nesnelerin özellikleri vardır. Davranışları vardır. Birbirleriyle ilişki kurarlar. Yazılımı da buna benzer şekilde düşünebiliriz.

### OOP’nin Temel İlkeleri

#### Kapsülleme (Encapsulation)
Veri ile o veriye ilişkin davranışı aynı yapıda toplar; erişimi kontrollü yapar.

#### Kalıtım (Inheritance)
Bir sınıfın başka bir sınıfın özelliklerini devralabilmesini sağlar.

#### Çok Biçimlilik (Polymorphism)
Aynı arayüzün farklı sınıflarda farklı davranabilmesini mümkün kılar.

#### Soyutlama (Abstraction)
Gereksiz ayrıntıyı gizleyip kritik yapıya odaklanmayı sağlar.

Bu dört ilke, sınıf diyagramını okurken sadece teori değildir; çizdiğiniz her çizginin arkasında bu mantık vardır.

---

## 2. Sınıf (Class) Nedir?

Sınıf, aynı türden nesnelerin ortak özelliklerini ve davranışlarını tanımlayan bir şablondur.

Örneğin bir **Kullanici** sınıfı düşünelim.

Bu sınıf şunları tanımlayabilir:

- kullaniciId
- ad
- email
- sifreHash
- kayitTarihi

ve şu davranışları içerebilir:

- girisYap()
- profilGuncelle()
- mesajGonder()

Burada kritik nokta şu:

**Sınıf, tek bir gerçek kullanıcı değildir.**
Sınıf, benzer kullanıcıların ortak kalıbıdır.

### UML’de Sınıf Nasıl Gösterilir?

UML’de sınıf, üç bölümlü dikdörtgenle gösterilir:

1. **Üst bölüm:** Sınıf adı
2. **Orta bölüm:** Nitelikler (attributes)
3. **Alt bölüm:** Operasyonlar / metotlar (methods/operations)

Örnek gösterim:

```text
Kullanici
-------------------------
- kullaniciId: int
- ad: String
- email: String
-------------------------
+ girisYap(): Boolean
+ profilGuncelle(): void
```

Bu küçük kutu aslında sınıfın kamusal yüzünü verir.

---

## 3. Nesne (Object) Nedir?

Nesne, bir sınıfın **çalışma zamanındaki somut örneğidir**.

Sınıf şablondur, nesne ise o şablondan üretilmiş canlı örnektir.

### Örnek

- `Kullanici` → sınıf
- `ali:Kullanici` → nesne

Burada `ali`, artık gerçek değerlere sahiptir:

- ad = Ali
- email = ali@example.com
- durum = AKTIF

### Kısa Hafıza Kancası

- **Sınıf = plan**
- **Nesne = o plandan üretilmiş gerçek örnek**

Bu ayrımı oturtmadan sınıf diyagramı genelde karışır. Çünkü öğrenciler bazen varlık, sınıf ve nesne kavramlarını birbirine yapıştırır.

---

## 4. Görünürlük Belirteçleri: Kim Neye Dokunabilir?

UML sınıf diyagramında nitelik ve operasyonların başında bazı semboller görürsünüz. Bunlar erişim seviyesini gösterir.

| Sembol | Görünürlük | Anlam |
|--------|------------|-------|
| `+` | Public | Her yerden erişilebilir |
| `-` | Private | Yalnızca sınıf içinden erişilebilir |
| `#` | Protected | Sınıf ve alt sınıflar erişebilir |
| `~` | Package | Aynı paket içinden erişilebilir |

### Neden Önemli?

Çünkü iyi tasarım, her şeyi herkese açmak değildir. Tam tersine, hangi bilginin dış dünyaya açık olacağını bilinçli seçmektir.

Örneğin `sifreHash` alanını public yapmak teknik olarak da mantıksızdır, tasarım olarak da tehlikelidir.

> UML görünürlük işaretleri, sadece syntax değil; güvenlik ve kapsülleme kararlarının çizim üzerindeki ifadesidir.

---

## 5. Nitelik (Attribute) ve Operasyon (Method)

Bir sınıfı anlamanın en temel yolu şudur:

- **Ne biliyor?** → nitelikler
- **Ne yapıyor?** → operasyonlar

### Nitelik
Sınıfın taşıdığı veridir.

Örnek:

- `email: String`
- `fiyat: Decimal`
- `durum: KullaniciDurum`

### Operasyon
Sınıfın yerine getirdiği davranıştır.

Örnek:

- `girisYap(email, sifre): Boolean`
- `ilanOlustur(dto): Urun`
- `mesajGonder(aliciId, icerik): Mesaj`

### Sık Hata
Öğrenciler bazen sınıfı sadece veri torbası gibi çizer.

Bu kötü işarettir.

Çünkü gerçek nesne yönelimli modelde sınıf sadece bilgi depolamaz; o bilgiyle ne yapılacağını da taşır. Eğer tüm davranış başka yerdeyse, çizdiğiniz şey nesne yönelimli model değil, pasif veri kabı olabilir.

---

## 6. Sınıflar Arası İlişkiler: Çizgiler Gerçekten Ne Anlatır?

Sınıf diyagramının ruhu, sınıfların tek tek kutularında değil; **kutular arasındaki çizgilerde** yaşar.

Bu çizgiler “bunlar bağlı” demekten fazlasını söyler. Bağın türünü, gücünü ve anlamını gösterir.

---

## 7. Association (İlişkilendirme)

Association, iki sınıf arasındaki en genel ilişki türüdür.

Anlamı kabaca şudur:

> A sınıfı, B sınıfıyla anlamlı bir ilişki içindedir.

### Örnek

- `Kullanici ─── Mesaj`

Bu şu anlama gelebilir:

- kullanıcı mesaj gönderir,
- kullanıcı mesaj alır,
- kullanıcı mesajlarla ilişkilidir.

Association, en esnek ilişkidir. Ama bu esneklik yüzünden bazen fazla rahat kullanılır. O yüzden şu soruyu sormak gerekir:

- Bu yalnızca genel ilişki mi?
- Yoksa daha güçlü bir bütün-parça veya tür ilişkisi mi var?

Association sadece “ilişkili” der; sahiplik veya yaşam döngüsü zorunlu anlatmaz.

---

## 8. Aggregation (Zayıf Bütün-Parça)

Aggregation, bir sınıfın başka sınıfları “içerdiği”, ama onların bütünden tamamen bağımlı olmadığı ilişki türüdür.

UML’de **içi boş baklava** ile gösterilir.

### Örnek

- `Universite ◇──── Bolum`

Bu ilişkide üniversite, bölümlerden oluşur gibi düşünebiliriz. Ama bölüm kavramı tamamen yok olmaz; başka bağlamda da var olabilir.

### Ne Anlama Gelir?

- Bütün vardır
- Parçalar vardır
- Ama parçalar bütüne mutlak bağımlı değildir

Aggregation çoğu zaman “has-a” ilişkisinin daha yumuşak versiyonudur.

---

## 9. Composition (Güçlü Bütün-Parça)

Composition, aggregation’dan daha güçlüdür.

Burada bütün yok olursa parça da yok olur.

UML’de **içi dolu baklava** ile gösterilir.

### Örnek

- `Siparis ◆──── SiparisKalemi`

Bu çok güzel örnektir. Çünkü sipariş kalemi, siparişten bağımsız anlam taşımaz. Sipariş silindiğinde sipariş kalemleri de silinmelidir.

### Kısa Fark

- **Aggregation:** parça bağımsız yaşayabilir
- **Composition:** parça bütünden bağımsız yaşayamaz

Bu ayrım, özellikle veritabanı tasarımı ve nesne yaşam döngüsü açısından kritiktir.

---

## 10. Inheritance / Generalization (Kalıtım)

Inheritance, bir sınıfın başka bir sınıfın özelliklerini ve davranışlarını devralmasıdır.

UML’de **içi boş üçgen ok**, üst sınıfa doğru bakar.

### Örnek

- `Yonetici ──△──► Kullanici`

Bu ilişki şunu söyler:

- Yönetici bir kullanıcıdır
- Kullanıcının ortak özelliklerini taşır
- Ama ek davranışlar da sunabilir

Örneğin:

- `girisYap()` tüm kullanıcılarda ortaktır
- `kullaniciBan()` yalnızca yöneticiye özgü olabilir

### Ne Zaman Kullanılmalı?

Kalıtım için sihirli soru şudur:

> “A, gerçekten B’nin bir türü mü?”

Yani:

- Yönetici, kullanıcının bir türüdür → evet
- Mesaj, kullanıcının bir türü müdür → hayır

Yanlış kalıtım, modeli hızlı çirkinleştirir. Kalıtımı sırf tekrar azaltmak için değil, gerçekten **is-a** ilişkisi varsa kullanmak gerekir.

---

## 11. Realization ve Dependency

### Realization
Bir sınıfın bir arayüzü gerçekleştirmesidir.

Kesik çizgi + içi boş üçgen ile gösterilir.

Örnek:

- `BildirimServisi ──..△──► IBildirim`

Bu şu demektir:

- `IBildirim` ne yapılması gerektiğini söyler
- `BildirimServisi` bunu nasıl yapacağını gerçekleştirir

### Dependency
Bir sınıfın başka bir sınıfa geçici veya dolaylı bağımlılığıdır.

Kesik okla gösterilir.

Örnek:

- `RaporServisi ........► PdfOlusturucu`

Bu, tam sahiplik ilişkisi değildir; daha çok “kullanıyor” anlamı taşır.

---

## 12. Çokluk (Multiplicity): Bir Tane mi, Yüz Tane mi?

Sınıflar arasında ilişki çizmek yetmez. Bu ilişkinin **kaç tane** olduğunu da belirtmek gerekir.

| Notasyon | Anlam |
|----------|-------|
| `1` | Tam olarak bir |
| `0..1` | Sıfır ya da bir |
| `0..*` veya `*` | Sıfır ya da çok |
| `1..*` | En az bir |
| `2..5` | 2 ile 5 arası |

### Örnekler

- Bir kullanıcı **0..*** mesaj gönderebilir
- Her mesajın **1** göndereni vardır
- Bir ürünün **1..5** resmi olabilir

Çokluk yazmadan çizilen ilişki, yarım cümle gibidir. Çünkü bağın varlığını söylersiniz ama yoğunluğunu söylemezsiniz.

---

## 13. High Cohesion / Low Coupling: İyi Tasarımın Damarı

Sınıf diyagramı yalnızca “hangi sınıflar var” sorusunu cevaplamaz. Aynı zamanda şu daha sert soruyu da yüzünüze çarpar:

> Bu sınıflar doğru bölünmüş mü?

Burada iki ilke devreye girer:

---

## 14. High Cohesion (Yüksek Uyum)

Bir sınıf, birbiriyle ilgili sorumlulukları taşımalıdır. Her şeyi yapan dev sınıflar iyi tasarım değildir; genelde panik tasarımıdır.

### Kötü Örnek
Bir `Kullanici` sınıfının şunların hepsini yaptığını düşünün:

- giriş kontrolü
- ürün yayınlama
- rapor üretme
- e-posta gönderme
- ödeme alma
- log yazma

Bu sınıf artık sınıf değil, çöp çekmecesi olur.

### İyi Tasarımda Ne Olur?

- Kullanıcı → kullanıcıya ait davranışları taşır
- Mesaj → mesaj davranışını taşır
- RaporServisi → rapor üretir
- BildirimServisi → bildirim yollar

Robert C. Martin’in ifadesiyle:

> “Bir sınıfın yalnızca bir değişim nedeni olmalıdır.”

Bu, **Single Responsibility Principle** ile de doğrudan ilişkilidir.

---

## 15. Low Coupling (Düşük Bağımlılık)

Bir sınıf değiştiğinde on başka sınıf da sallanıyorsa tasarım kırılgandır.

Düşük bağımlılık şunu hedefler:

- sınıflar birbirine mümkün olduğunca az bağlansın,
- değişiklik etkisi sınırlı kalsın,
- test etmek kolaylaşsın,
- yeni özellik eklemek tüm sistemi yıkmasın.

### Yüksek Bağımlılığın Belirtileri

- Tek sınıf değişince birçok dosya etkileniyor
- Ayrı test etmek imkânsızlaşıyor
- Yeni özellik eklemek korku yaratıyor
- Kod tekrar kullanılamıyor

### Güzel Tasarım Nedir?

Güzel tasarım, sınıfların birbirinden habersiz olduğu yer değil; birbirine **gerektiği kadar** bağımlı olduğu yerdir.

---

## 16. UML Sınıf Diyagramı Neyi Gösterir, Neyi Göstermez?

Bunu net bilmek lazım.

### Gösterir
- Sınıfları
- Nitelikleri
- Operasyonları
- Görünürlükleri
- Sınıflar arası ilişkileri
- Çoklukları

### Göstermez
- Zaman içindeki akışı
- Kullanıcının adım adım sistemle etkileşimini
- Algoritmanın ayrıntılı işleyişini
- Arayüz ekranlarını

Yani sınıf diyagramı, sistemin **statik yapısını** gösterir.

Akışı görmek istiyorsanız activity veya sequence diyagramı gerekir. Kullanıcı hedefini görmek istiyorsanız use case gerekir.

---

## 17. Domain Model Nedir?

Bu nokta çok kritik.

**Domain model**, çözüm uzayını değil; **sorun uzayını** temsil eder.

Yani domain modelde şunlar yer alır:

- Kullanici
- Urun
- Siparis
- Mesaj
- Degerlendirme
- Kategori

Ama şunlar genelde yer almaz:

- ButtonManager
- ApiClient
- MainForm
- SqlConnectionHelper
- LoginPageController

Çünkü domain model, işin özündeki kavramları gösterir; teknolojik detayları değil.

### Domain Model Neden Önemlidir?

Çünkü çok erken teknik detaylara dalan ekipler, sorunun kendisini bulanıklaştırır.

Önce şu görülmelidir:

- Sistemde hangi gerçek iş kavramları var?
- Bunlar nasıl ilişki kuruyor?
- Hangi roller var?
- Hangi nesneler hangi sorumluluğu taşıyor?

Bu görüldükten sonra teknik sınıflara geçmek daha sağlıklı olur.

---

## 18. Domain Modelde Hangi Tür Sınıflar Aranır?

Dökümandaki çerçeve burada gayet iyi. Domain model oluştururken şu sınıf ailelerini aramak çok işe yarar:

### İşletme Nesneleri
Sistemin ana kavramlarıdır.

Örnek:
- Kullanici
- Urun
- Siparis
- Kategori

### İşlem Nesneleri
Süreç ve etkileşim taşıyan yapılardır.

Örnek:
- Mesaj
- Degerlendirme
- Sikayet

### Açıklama Nesneleri
Tanım veya açıklama odaklı yapılardır.

Örnek:
- UrunBilgisi
- KategoriTanimi

### Rol Nesneleri
Aynı temel yapıdan türeyen ama farklı yetkiler taşıyan sınıflardır.

Örnek:
- Satici
- Alici
- Yonetici

Bu sınıfları doğru yakalamak, sistemin analiz kalitesini ciddi biçimde artırır.

---

## 19. Uygulama: Kampüs Platformu İçin Sınıf Diyagramı Mantığı

Bir kampüs ikinci el platformu düşünelim.

### Temel Sınıflar

- Kullanici
- Satici
- Alici
- Yonetici
- Urun
- Kategori
- Mesaj
- Degerlendirme

### Olası Yapı

#### Kullanici
Nitelikler:
- id
- ad
- email
- sifre

Operasyonlar:
- girisYap()
- profilGuncelle()

#### Satici
Kullanici’dan kalıtım alır.

Ek davranışlar:
- ilanOlustur()
- ilanGuncelle()

#### Alici
Kullanici’dan kalıtım alır.

Ek davranışlar:
- ara()
- mesajGonder()

#### Yonetici
Kullanici’dan kalıtım alır.

Ek davranışlar:
- kullaniciBan()
- raporGor()

#### Urun
Nitelikler:
- id
- baslik
- fiyat
- durum

Operasyonlar:
- yayinla()
- guncelle()
- sil()

#### Kategori
Nitelikler:
- id
- ad
- ustKategori

Operasyonlar:
- altKategorileriGetir()

#### Mesaj
Nitelikler:
- id
- icerik
- tarih

Operasyonlar:
- gonder()
- oku()

#### Degerlendirme
Nitelikler:
- id
- puan
- yorum

Operasyonlar:
- kaydet()
- hesaplaOrtalama()

Burada güzel olan şey şu: Sistem, ekranlara bakmadan bile anlamlı hale geliyor.

İşte iyi sınıf diyagramı budur. Çalışan ekran görmeden bile zihinde sistem kurulur.

---

## 20. Enumeration Kullanımı

Bazı alanlar serbest metin olmamalıdır. Sabit değer kümesi ile ifade edilmelidir.

Örneğin:

```text
<<enumeration>>
KullaniciDurum
-----------------
AKTIF
ASKIDA
SILINMIS
```

Bu yaklaşım iki açıdan güçlüdür:

- veri tutarlılığı sağlar,
- modeli daha açık hale getirir.

Aynı mantık ürün durumu, sipariş durumu, şikâyet durumu gibi alanlarda da kullanılabilir.

---

## 21. Sınıf Diyagramı Çizerken Sık Yapılan Hatalar

Bu kısım önemli. Çünkü teori güzel, hata daha öğretici.

### 1. Her şeyi sınıf yapmak
Her isim gördüğünüz şeyi sınıf yaparsanız model şişer. Anlamlı kavramları seçmek gerekir.

### 2. Veri modelini olduğu gibi sınıf modeline kopyalamak
Sınıf diyagramı, veritabanı şemasının birebir kopyası olmak zorunda değildir. Davranış boyutu da vardır.

### 3. Tüm operasyonları bir sınıfa yığmak
Bu cohesion felaketidir.

### 4. Aggregation ve composition’ı rastgele kullanmak
Parçanın yaşam döngüsü gerçekten bütüne mi bağlı, önce bunu düşünmek gerekir.

### 5. Kalıtımı sadece kod tekrarını azaltmak için kullanmak
Gerçek bir **is-a** ilişkisi yoksa kalıtım kötü kokudur.

### 6. Çoklukları yazmamak
İlişki var ama kaç tane belli değilse model yarımdır.

### 7. Domain model içine UI veya teknik altyapı sınıfları doldurmak
Bu, analizi erken teknik borca boğar.

---

## 22. Bölüm Özeti

Bu derste şunları netleştirdik:

- Nesne yönelimli yaklaşım, yazılımı gerçek dünya kavramlarına daha yakın modellemeyi amaçlar.
- **Sınıf**, bir şablondur; **nesne**, onun çalışma zamanındaki somut örneğidir.
- UML sınıf diyagramı; sınıfları, nitelikleri, operasyonları ve ilişkileri gösterir.
- **Association** genel ilişkiyi, **aggregation** zayıf bütün-parçayı, **composition** güçlü bütün-parçayı, **inheritance** tür ilişkisini anlatır.
- Çokluk notasyonu, ilişkilerin niceliğini görünür kılar.
- **High cohesion** ve **low coupling**, sürdürülebilir tasarımın omurgasıdır.
- **Domain model**, çözümün teknik ayrıntılarını değil, problemin iş kavramlarını gösterir.

Kısacası sınıf diyagramı, bir sistemin yalnızca parçalarını değil; bu parçaların **nasıl akıllıca bölündüğünü** gösterir.

İyi çizilmiş bir sınıf diyagramı, geliştiriciye yön verir. Kötü çizilmiş biri ise daha kod yazılmadan borç üretir.

---

## 23. Mini Alıştırmalar

### Alıştırma 1
Aşağıdaki ilişkilerin hangisi association, hangisi aggregation, hangisi composition olur? Neden?

- Üniversite — Bölüm
- Sipariş — Sipariş Kalemi
- Kullanıcı — Mesaj

### Alıştırma 2
Bir e-ticaret sistemi için şu sınıfları içeren basit bir domain model tasarlayın:

- Kullanici
- Urun
- Sepet
- Siparis
- Odeme

Her sınıf için:
- en az 3 nitelik,
- en az 1 operasyon,
- diğer sınıflarla ilişki türü
belirleyin.

### Alıştırma 3
Aşağıdaki ifadede cohesion sorunu var mı? Varsa neden?

> `Kullanici` sınıfı; giriş yapıyor, ürün siliyor, rapor oluşturuyor, e-posta gönderiyor, PDF basıyor, ödeme çekiyor.

### Alıştırma 4
Bir kampüs ikinci el platformu için `Kullanici`, `Satici`, `Alici`, `Yonetici` yapısını kalıtım ilişkisiyle çiziniz ve her alt sınıfa en az bir özgün operasyon ekleyiniz.

---

## Kaynaklar

- Booch, G. (1994). *Object-Oriented Analysis and Design with Applications* (2nd ed.). Addison-Wesley.
- Martin, R. C. (2008). *Clean Code*. Prentice Hall.
- Larman, C. (2004). *Applying UML and Patterns* (3rd ed.). Prentice Hall.
- Fowler, M. (2002). *Patterns of Enterprise Application Architecture*. Addison-Wesley.
- OMG. (2017). *UML Specification Version 2.5.1*.
- Gamma, E., Helm, R., Johnson, R., & Vlissides, J. (1994). *Design Patterns*. Addison-Wesley.

---

İyi bir sınıf diyagramına baktığınızda şunu hissedersiniz: Sistem artık sisli değildir. Parçalar yerli yerindedir. Kim ne bilir, kim ne yapar, kim kime ne kadar bağlıdır görünür hale gelmiştir. Yazılım işte o anda karmaşık bir yığın olmaktan çıkar, düşünülmüş bir yapıya dönüşür.
