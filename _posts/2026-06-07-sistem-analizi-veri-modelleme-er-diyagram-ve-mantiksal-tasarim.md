---
layout: post
title: "Veri Modelleme, ER Diyagram ve Mantıksal Tasarım: Sistemin Hafızasını Kurmak"
date: 2026-06-07 12:05:00 +0300
categories: sistem-analizi-ve-tasarimi
course_id: sistem-analizi-ve-tasarimi
tags: [sistem-analizi, veri-modelleme, er-diyagram, mantıksal-tasarım, normalizasyon, veritabanı]
---

Bir yazılımı ayakta tutan şey ekranlar değildir. Butonlar da değildir. Hatta çoğu zaman kodun kendisi bile değildir. Asıl omurga, **verinin nasıl düşünüldüğüdür**. Çünkü kötü modellenmiş veri, başta masum görünür; sonra sistemi içten içe çürütür. Aynı bilgi üç yerde tutulur, güncellemeler çakışır, raporlar tutarsızlaşır, geliştirici her yeni özellikte duvara çarpar.

İşte **veri modelleme** tam burada devreye girer. Veri modelleme, sadece tablo çizmek değildir. Gerçek dünyanın dağınık, belirsiz ve bol istisnalı yapısını; düzenli, tutarlı ve sürdürülebilir bir sisteme dönüştürme sanatıdır.

Bu derste, verdiğiniz dökümandaki çerçeveyi temel alarak veri modellemenin özünü adım adım kuracağız:

- Veri neden bu kadar kritiktir?
- **Varlık, nitelik, ilişki ve kardinalite** tam olarak ne demektir?
- **ER diyagram** nasıl okunur ve nasıl çizilir?
- **Normalizasyon** neden gereklidir?
- Kavramsal model, nasıl **ilişkisel şemaya** dönüştürülür?

Kısacası bugün bir veritabanına tablo eklemeyi değil, **bir sistemin hafızasını inşa etmeyi** öğreneceğiz.

> “Entity-Relationship Model, gerçek dünya verilerini birleşik, tutarlı ve anlaşılabilir biçimde temsil etmenin yolunu sağlar.”
>
> **Peter Chen**, *The Entity-Relationship Model* (1976)

---

## Bu Derste Neler Öğreneceksiniz?

Bu bölümün sonunda şunları yapabilir hale gelmeniz hedeflenmektedir:

- Veri modellemenin neden analiz ve tasarımın merkezinde olduğunu açıklayabilmek
- **Varlık (entity), nitelik (attribute), ilişki (relationship), kardinalite (cardinality)** kavramlarını ayırt edebilmek
- Bir problemi ER diyagram mantığıyla parçalayabilmek
- **Chen notasyonu** ile **Crow’s Foot notasyonu** arasındaki farkı anlayabilmek
- **1NF, 2NF, 3NF** düzeyinde normalizasyon mantığını yorumlayabilmek
- ER diyagramını **ilişkisel tablo tasarımına** dönüştürebilmek
- Dönem projeniz için anlamlı bir veritabanı taslağı oluşturabilmek

Bu konu, yalnızca veritabanı dersi için değil; yazılım analizi, backend geliştirme, raporlama ve sürdürülebilir sistem tasarımı için de temel yapı taşıdır.

---

## 1. Verinin Değeri: Sistemin Sessiz Merkezi

Günümüzde sık duyulan bir ifade var: **“Veri yeni petroldür.”** Ama bu cümle eksik. Ham petrol doğrudan işe yaramadığı gibi, ham veri de tek başına değer üretmez. Veri ancak işlendiğinde, ilişkilendirildiğinde ve anlamlandırıldığında **bilgiye** dönüşür.

Bir yazılım sistemini düşünün:

- E-ticaret sitesi müşteri, ürün ve sipariş verisiyle yaşar.
- Hastane sistemi hasta, doktor ve randevu verisiyle çalışır.
- Üniversite sistemi öğrenci, ders ve not verisiyle ayakta durur.

Arayüz değişebilir. Teknoloji değişebilir. Framework değişebilir. Ama veri bozuksa sistemin tamamı bozulur.

### Veri Modelleme Neden Önemlidir?

Çünkü iyi bir veri modeli:

- Veri tekrarını azaltır
- Tutarsızlığı önler
- Güncellemeyi güvenli hale getirir
- Sorguları anlamlı hale getirir
- Yeni özellik eklemeyi kolaylaştırır
- Sistemin uzun ömürlü olmasını sağlar

Kötü bir veri modeli ise başlangıçta hızlı görünür, sonra pahalıya patlar.

> Veri modelleme, gelecekte çıkacak sorunları bugünden görme disiplinidir.

---

## 2. Veri Modelleme Nedir?

Veri modelleme, gerçek dünyadaki nesneleri, olayları ve bunlar arasındaki ilişkileri sistematik biçimde tanımlama sürecidir.

Başka bir ifadeyle:

> “Gerçek dünyada ne var, bunlar hakkında ne biliyoruz ve bunlar birbirleriyle nasıl bağlı?”

sorusuna verilen düzenli yanıttır.

Örneğin bir kampüs ikinci el satış platformu tasarlıyorsak şu soruları sormamız gerekir:

- Sistemde hangi temel nesneler var?
- Kullanıcı hakkında hangi bilgileri tutacağız?
- Bir ürün birden fazla kategoriye ait olabilir mi?
- Bir kullanıcının kaç mesajı olabilir?
- Değerlendirme, kullanıcıyla nasıl ilişkilenecek?

Bu soruların cevabı kod değil; önce **model** üretir.

---

## 3. ER Diyagramın Temel Bileşenleri

ER diyagramın omurgası dört temel kavram üzerine kurulur:

1. **Varlık (Entity)**
2. **Nitelik (Attribute)**
3. **İlişki (Relationship)**
4. **Kardinalite (Cardinality)**

Bu dördünü gerçekten kavramadan sağlıklı veritabanı tasarımı yapmak zordur.

---

## 4. Varlık (Entity): Sistem İçindeki “Şey”

Varlık, gerçek dünyada birbirinden ayırt edilebilen ve hakkında veri saklanan nesnedir.

### Örnekler

- **KULLANICI**
- **ÜRÜN**
- **KATEGORİ**
- **SİPARİŞ**
- **MESAJ**

Bu isimlerin ortak noktası şudur: Her biri sistemde ayrı kayıtlar halinde tutulabilir.

### Varlık Kümesi (Entity Set)

Tek tek bir kullanıcı değil, sistemdeki tüm kullanıcılar birlikte bir **varlık kümesi** oluşturur. Aynı mantık ürünler, siparişler, mesajlar için de geçerlidir.

### Güçlü Varlık ve Zayıf Varlık

#### Güçlü Varlık
Kendi anahtarıyla tek başına tanımlanabilen varlıktır.

**Örnek:**
- KULLANICI
- ÜRÜN
- KATEGORİ

#### Zayıf Varlık
Tek başına tam anlamlı olmayan, başka bir varlığa bağımlı yaşayan varlıktır.

**Örnek:**
- **SİPARİŞ_KALEMİ**
- **ÜRÜN_RESMİ** (bazen ayrı ele alınabilir)

Örneğin bir sipariş kalemi, tek başına anlamsızdır. Hangi siparişe ait olduğu bilinmeden o kayıt eksiktir.

> Güçlü varlık kendi kimliğiyle yaşar. Zayıf varlık başkasının bağlamında anlam kazanır.

---

## 5. Nitelik (Attribute): Varlığın Özellikleri

Nitelik, varlığı tanımlayan bilgi alanıdır.

Örneğin **KULLANICI** varlığının nitelikleri şunlar olabilir:

- kullanici_id
- ad
- soyad
- email
- sifre_hash
- kayit_tarihi
- durum

### Nitelik Türleri

#### 5.1 Basit (Atomik) Nitelik
Daha küçük mantıklı parçalara ayrılamayan niteliktir.

**Örnek:**
- fiyat
- puan
- kullanici_id

#### 5.2 Bileşik (Composite) Nitelik
Daha küçük anlamlı alt parçalara ayrılabilir.

**Örnek:**
- adres = sokak + ilçe + şehir
- ad_soyad = ad + soyad

Burada kritik soru şudur: Bu parçaları sistemde ayrı ayrı kullanacak mıyız?
Eğer kullanacaksak, bileşik yapıyı çoğu zaman alt alanlara bölmek daha doğrudur.

#### 5.3 Çok Değerli (Multi-valued) Nitelik
Bir kayıt için birden fazla değer alabilen niteliktir.

**Örnek:**
- telefon numaraları
- ürün etiketleri
- kullanıcının ilgi alanları

Bunlar çoğu zaman doğrudan tek sütunda tutulmamalıdır. Çünkü bu yapı normalizasyon sorunları üretir.

#### 5.4 Türetilmiş (Derived) Nitelik
Başka bir nitelikten hesaplanabilir.

**Örnek:**
- yaş → doğum tarihinden hesaplanır
- toplam_tutar → birim_fiyat × miktar

Bu tür alanlar her zaman fiziksel olarak saklanmak zorunda değildir.

#### 5.5 Anahtar Nitelik (Key Attribute)
Her kaydı benzersiz biçimde tanımlar.

**Örnek:**
- kullanici_id
- urun_id
- siparis_id

Bu alan, tabloda birincil anahtar (primary key) olur.

#### 5.6 Null Olabilen Nitelik
Her kayıt için zorunlu olmayan niteliktir.

**Örnek:**
- ikinci_telefon
- profil_foto
- aciklama

Ama dikkat: “Null bırakılabilir” demek, “anlamsız tasarla” demek değildir. İş kuralları iyi düşünülmelidir.

---

## 6. İlişki (Relationship): Varlıklar Neden Yalnız Değildir?

Sistemdeki asıl anlam, çoğu zaman tek tek varlıklarda değil, **varlıkların birbirine bağlanma biçiminde** oluşur.

İlişki, iki veya daha fazla varlık kümesi arasındaki anlamlı bağlantıdır.

### Örnekler

- KULLANICI **oluşturur** ÜRÜN
- ÜRÜN **aittir** KATEGORİ
- KULLANICI **gönderir** MESAJ
- KULLANICI **verir** DEĞERLENDİRME

Bu ilişkiler olmadan sistem yalnızca dağınık tablolar yığınına döner.

### İlişkinin de Niteliği Olabilir

İlişkiler bazen yalnızca bağ kurmaz; kendileri de bilgi taşır.

Örnek:

- KULLANICI **oluşturur** ÜRÜN
- Bu ilişkinin niteliği: **olusturma_tarihi** olabilir

Ya da bir öğrenci-ders ilişkisinde:

- ÖĞRENCİ **alır** DERS
- Bu ilişkinin nitelikleri: **vize_notu, final_notu, devamsizlik** olabilir

Bu durumda ilişki, sıradan bir çizgi olmaktan çıkar; veri taşıyan yapıya dönüşür.

---

## 7. Kardinalite (Cardinality): Kaç Tane?

Kardinalite, bir varlığın başka bir varlıkla **kaç kez** ilişkilenebileceğini tanımlar.

Bu, ER diyagramın en kritik noktalarından biridir. Çünkü iş kurallarının büyük bölümü burada saklıdır.

### 7.1 Bire-Bir (1:1)
Bir kayıt, karşı tarafta en fazla bir kayıtla ilişkilidir.

**Örnek:**
- KİŞİ — PASAPORT

Her kişinin bir pasaportu vardır, her pasaport da tek bir kişiye aittir.

### 7.2 Bire-Çok (1:N)
Bir kayıt, karşı tarafta birçok kayıtla ilişkilidir.

**Örnek:**
- KULLANICI — ÜRÜN

Bir kullanıcı çok ürün ilanı verebilir. Ama her ürünün tek bir satıcısı vardır.

### 7.3 Çoka-Çok (M:N)
Her iki taraf da karşı tarafta birden fazla kayıtla ilişkilidir.

**Örnek:**
- ÖĞRENCİ — DERS
- ÜRÜN — ETİKET

Bir öğrenci çok ders alabilir, bir ders çok öğrenci tarafından alınabilir.

Bu yapı doğrudan tabloya çevrildiğinde ara tablo gerektirir.

---

## 8. Katılım Kısıtı: Zorunlu mu, Opsiyonel mi?

Kardinalite tek başına yetmez. Şu soru da önemlidir:

> Her kayıt bu ilişkiye katılmak zorunda mı?

### Toplam Katılım (Total Participation)
Varlığın her örneği ilişkiye dahil olmak zorundadır.

**Örnek:**
Her siparişin en az bir müşteriyle ilişkili olması gerekir.

### Kısmi Katılım (Partial Participation)
İlişki zorunlu değildir.

**Örnek:**
Her kullanıcı henüz ürün ilanı vermemiş olabilir.

Bu ayrım, iş kurallarını doğru yansıtmak için çok önemlidir.

---

## 9. Chen ve Crow’s Foot Notasyonu

ER diyagramlarda iki yaygın yaklaşım vardır:

### 9.1 Chen Notasyonu
Daha kavramsaldır.

- Varlık → dikdörtgen
- Nitelik → elips
- İlişki → baklava

Bu notasyon, özellikle eğitsel ve teorik anlatımda çok güçlüdür. Çünkü yapıyı çok açık gösterir.

### 9.2 Crow’s Foot Notasyonu
Daha pratik ve endüstri odaklıdır.

- Varlıklar tablo gibi kutularda gösterilir
- Nitelikler kutu içinde listelenir
- Kardinalite, çizgi uçlarındaki sembollerle gösterilir

Draw.io, MySQL Workbench, Lucidchart gibi araçlarda bununla daha sık karşılaşılır.

### Karşılaştırma

| Öğe | Chen | Crow’s Foot |
|-----|------|-------------|
| Odak | Kavramsal model | Mantıksal/fiziksel model |
| Nitelik gösterimi | Elips | Sütun listesi |
| İlişki gösterimi | Baklava | Çizgi ve karga ayağı |
| Eğitimde kullanımı | Çok uygun | Uygulamada daha yaygın |

### Hangisini Kullanmalıyız?

- Konuyu ilk öğrenirken **Chen** çok açıklayıcıdır.
- Gerçek veritabanı şemasına yaklaşırken **Crow’s Foot** daha pratiktir.

Doğrusu biri “iyi”, diğeri “kötü” değildir. Bağlama göre ikisi de değerlidir.

---

## 10. Örnek Problem: Kampüs İkinci El Platformu

Şimdi bu teoriyi gerçek bir sistem üstünde düşünelim.

Bir **kampüs ikinci el satış platformu** tasarladığımızı varsayalım.

### Olası Varlıklar

- **KULLANICI**
- **URUN**
- **KATEGORI**
- **RESIM**
- **MESAJ**
- **DEGERLENDIRME**
- **SIKAYET**

### KULLANICI
Örnek nitelikler:

- kullanici_id
- ad
- soyad
- email
- sifre_hash
- profil_foto
- kayit_tarihi
- durum

### URUN
Örnek nitelikler:

- urun_id
- baslik
- aciklama
- fiyat
- durum
- olusturma_tarihi
- kategori_id
- satici_id

### KATEGORI
Örnek nitelikler:

- kategori_id
- ad
- ust_kategori_id

### Temel İlişkiler

| İlişki | Tür | Açıklama |
|--------|-----|----------|
| KULLANICI oluşturur URUN | 1:N | Bir kullanıcı çok ürün ekleyebilir |
| URUN aittir KATEGORI | N:1 | Her ürün bir kategoriye bağlıdır |
| URUN içerir RESIM | 1:N | Bir ürünün birden çok resmi olabilir |
| KULLANICI gönderir MESAJ | 1:N | Kullanıcı çok mesaj gönderebilir |
| KULLANICI verir DEGERLENDIRME | 1:N | Bir kullanıcı çok değerlendirme yapabilir |
| KATEGORI içerir alt KATEGORI | 1:N | Öz-ilişki ile hiyerarşi kurulabilir |

Burada tasarımcı gibi düşünmek gerekir.

Örneğin şu sorular kritiktir:

- Bir ürün birden fazla kategoriye ait olabilir mi?
- Bir mesaj mutlaka bir ürüne bağlı mı, yoksa genel sohbet de olabilir mi?
- Değerlendirme kullanıcıya mı verilir, ürüne mi verilir, yoksa her ikisine de mi?

İyi veri modeli, bu soruları ertelemez. Daha en başta yüzeye çıkarır.

---

## 11. Normalizasyon: Veriyi Şişmekten ve Bozulmaktan Kurtarmak

Normalizasyon, veri tekrarını azaltmak ve güncelleme anomalilerini önlemek için tabloları daha sağlıklı yapıya kavuşturma sürecidir.

Bu iş bazen öğrenciler için fazla teorik görünür. Ama aslında çok pratik bir derdi çözer:

> Aynı bilgiyi tekrar tekrar tutarsan, bir gün mutlaka çelişki üretirsin.

### Neden Normalizasyon Gereklidir?

Çünkü kötü tablo tasarımı şunlara yol açar:

- Aynı veri birden fazla yerde tekrar eder
- Bir güncelleme yapılır, diğeri unutulur
- Veri silinince istemeden başka anlamlar da yok olur
- Kayıt eklemek için ilgisiz alanları doldurmak gerekir

Bunlara genel olarak **güncelleme anomalileri** denir.

---

## 12. Birinci Normal Form (1NF)

### Kural
- Her sütun **atomik** değer içermelidir
- Her hücrede tek değer bulunmalıdır
- Her satır benzersiz olmalıdır

### Hatalı Örnek

| urun_id | baslik | kategoriler |
|--------|--------|-------------|
| 1 | Python Kitabı | Kitap, Eğitim, Akademik |
| 2 | Laptop | Elektronik, Bilgisayar |

Buradaki sorun açık:

- `kategoriler` alanı tek bir değer değil, liste tutuyor

Bu yapı 1NF’yi ihlal eder.

### Çözüm

- Ya ürün tek kategoriye bağlanır
- Ya da **URUN_KATEGORI** adında ara tablo oluşturulur

Yani veriyi virgülle doldurup geçmek çözüm değil; çoğu zaman ileride patlayan bir tembelliktir.

---

## 13. İkinci Normal Form (2NF)

### Kural
- Önce 1NF sağlanmalıdır
- Anahtar olmayan her alan, birincil anahtarın **tamamına** bağlı olmalıdır

Bu sorun özellikle **bileşik anahtar** kullanılan tablolarda çıkar.

### Örnek

`SIPARIS_URUN(siparis_id, urun_id, urun_adi, miktar)`

Burada birincil anahtar bileşik olabilir: `(siparis_id, urun_id)`

Ama `urun_adi` sadece `urun_id`'ye bağlıdır.
Yani anahtarın tamamına değil, bir parçasına bağlıdır.

Bu da **kısmi bağımlılık** demektir.

### Çözüm

- `URUN(urun_id, urun_adi, ...)` ayrı tutulur
- `SIPARIS_URUN(siparis_id, urun_id, miktar)` ara tablo olur

> 2NF, “alanlar gerçekten doğru tabloya mı ait?” diye sorar.

---

## 14. Üçüncü Normal Form (3NF)

### Kural
- Önce 2NF sağlanmalıdır
- Anahtar olmayan alanlar birbirine bağımlı olmamalıdır

Yani anahtar dışı bir alan, başka bir anahtar dışı alana bağlı olmamalıdır.

### Örnek

`CALISAN(calisan_id, ad, departman_id, departman_adi)`

Burada:

- `departman_adi`, doğrudan `calisan_id`'ye değil
- `departman_id`'ye bağlıdır

Bu **geçişli bağımlılık** üretir.

### Çözüm

- `CALISAN(calisan_id, ad, departman_id)`
- `DEPARTMAN(departman_id, departman_adi)`

Böylece veri hem daha tutarlı hale gelir hem gereksiz tekrar azalır.

---

## 15. Normal Formların Kısa Özeti

| Normal Form | Çözdüğü Problem |
|-------------|-----------------|
| 1NF | Tekrarlayan gruplar, çok değerli alanlar |
| 2NF | Kısmi bağımlılık |
| 3NF | Geçişli bağımlılık |
| BCNF | Daha katı anahtar bağımlılığı sorunları |

Çoğu uygulama için 3NF düzeyi güçlü bir temel sağlar. Ama performans ve kullanım senaryosuna göre bazen kontrollü denormalizasyon da yapılabilir. Yani normalizasyon kutsal dogma değil, bilinçli tasarım aracıdır.

---

## 16. ER Diyagramdan İlişkisel Şemaya Geçiş

Kavramsal model çizdik. Güzel. Peki bunu tabloya nasıl dönüştüreceğiz?

İşte temel dönüşüm kuralları:

### 16.1 Her Güçlü Varlık → Bir Tablo

Örnek:

- KULLANICI → `kullanici`
- URUN → `urun`
- KATEGORI → `kategori`

Ve varlığın anahtar niteliği, tablonun **PRIMARY KEY** alanı olur.

### 16.2 1:N İlişki → N Tarafına Yabancı Anahtar

Örnek:

- Bir kullanıcı çok ürün oluşturabilir

Bu durumda `urun` tablosuna:

- `satici_id` alanı eklenir

ve bu alan `kullanici(kullanici_id)`'ye bağlanır.

### 16.3 M:N İlişki → Ara Tablo

Örnek:

- ÜRÜN ↔ ETİKET

Bu durumda doğrudan bir alan ekleyemeyiz. Ara tablo gerekir:

- `urun_etiket(urun_id, etiket_id)`

### 16.4 1:1 İlişki → Genellikle Bir Tarafa FK

Örnek:

- KULLANICI ↔ PROFIL_DETAY

Bir tabloda diğerinin anahtarını tutmak yeterli olabilir.

### 16.5 Bileşik Nitelik → Parçalara Ayrılır

Örnek:

- adres → il, ilce, sokak, posta_kodu

### 16.6 Çok Değerli Nitelik → Yeni Tablo

Örnek:

- kullanici telefonları

Doğrudan `telefonlar` diye tek alan açmak yerine:

- `kullanici_telefon(kullanici_id, telefon_no)`

oluşturmak daha doğrudur.

---

## 17. Basit SQL Şema Örneği

Aşağıdaki örnek, kavramsal modelin mantıksal tabloya dönüşümünü gösterir:

```sql
CREATE TABLE kullanici (
    kullanici_id INT PRIMARY KEY AUTO_INCREMENT,
    ad VARCHAR(50) NOT NULL,
    soyad VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    sifre_hash CHAR(60) NOT NULL,
    kayit_tarihi TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    durum VARCHAR(20) NOT NULL
);
```

Bu küçük örnek bile bize birkaç önemli şeyi gösterir:

- Her kayıt için benzersiz anahtar vardır
- E-posta alanı tekrarsızdır
- Zorunlu alanlar `NOT NULL` ile tanımlanmıştır
- Tarih bilgisi sistem tarafından otomatik üretilebilir

Yani SQL, sadece teknik sözdizimi değil; analiz aşamasında verilen kararların somutlaşmış halidir.

---

## 18. Veri Modelleme Yaparken Sorulması Gereken Kritik Sorular

İyi analist, tablo çizmeden önce doğru soruları sorar.

### Mutlaka Sorulması Gereken Sorular

- Sistemdeki temel varlıklar gerçekten neler?
- Bu varlıkların anahtar alanları ne olacak?
- Hangi nitelikler zorunlu, hangileri opsiyonel?
- Hangi ilişkiler 1:1, 1:N, M:N?
- Çok değerli alanlar var mı?
- Hangi bilgiler hesaplanmalı, hangileri saklanmalı?
- Silme işlemlerinde ne olacak?
- Alt kategori gibi öz-ilişkiler var mı?
- Bu model gelecekte büyümeye dayanıklı mı?

Bu sorular sorulmadan çizilen ER diyagram genelde güzel görünür ama kısa ömürlü olur.

---

## 19. Sık Yapılan Hatalar

Bu konuda öğrencilerin en sık düştüğü çukurlar şunlar:

### 1. Varlık ile niteliği karıştırmak
Örneğin “adres” bazen tek alan olabilir, bazen ayrı modelleme gerektirir. Bağlama göre düşünmek gerekir.

### 2. Çok değerli alanları tek sütunda tutmak
Virgülle veri depolamak kısa yoldur ama çoğu zaman kötü tasarımdır.

### 3. M:N ilişkiyi doğrudan tek tabloyla çözmeye çalışmak
Bu genelde ileride sorgu ve tutarlılık sorunları doğurur.

### 4. Gereksiz tekrar içeren tablo kurmak
Aynı kategori adı yüzlerce kez yazılıyorsa tasarım sizi uyarmaya başlamış demektir.

### 5. Kardinaliteyi ezbere vermek
“Bir kullanıcının tek ilanı olur” gibi hatalı varsayımlar sistemi gereksiz kısıtlar.

### 6. Normalizasyonu sadece sınav konusu sanmak
Normalizasyon, gerçek projede veri bozulmasını engelleyen pratik araçtır.

---

## 20. Bölüm Özeti

Bu derste şunu gördük:

- Yazılım sistemlerinin kalbinde veri vardır.
- Veri modelleme, gerçek dünyayı sistematik yapıya dönüştürme sürecidir.
- ER diyagram; **varlık, nitelik, ilişki ve kardinalite** üzerinden düşünmeyi sağlar.
- Güçlü ve zayıf varlık ayrımı, modelin bağımlılıklarını görünür kılar.
- Kardinalite ve katılım kısıtları, iş kurallarının iskeletidir.
- Chen ve Crow’s Foot, aynı düşüncenin farklı gösterim biçimleridir.
- Normalizasyon; tekrar, kısmi bağımlılık ve geçişli bağımlılık sorunlarını temizler.
- ER diyagram, doğru kurallarla ilişkisel şemaya dönüştürülebilir.

Kısacası veri modelleme, yazılımın arka tarafındaki teknik detaylardan biri değil; sistemin **mantıksal omurgasıdır**.

Ekranlar sonradan değişir. Kod yeniden yazılır. Teknolojiler modası geçer. Ama iyi düşünülmüş bir veri modeli, sistemi yıllarca ayakta tutar.

---

## 21. Mini Alıştırmalar

### Alıştırma 1
Bir **öğrenci bilgi sistemi** için en az 6 varlık belirleyiniz ve her biri için 3 nitelik yazınız.

### Alıştırma 2
Aşağıdaki ilişkilerin kardinalitesini belirleyiniz:

- Öğrenci — Ders
- Bölüm — Öğrenci
- Kullanıcı — Profil
- Ürün — Resim

### Alıştırma 3
Aşağıdaki tabloyu neden 1NF ihlali sayacağınızı açıklayınız:

| ogrenci_id | ad | aldigi_dersler |
|-----------|----|----------------|
| 1 | Ayşe | Matematik, Fizik, Programlama |

### Alıştırma 4
Bir kampüs ikinci el platformu için şu yapıları tabloya dönüştürünüz:

- KULLANICI
- URUN
- KATEGORI
- MESAJ
- DEGERLENDIRME

Her tablo için:
- birincil anahtar
- gerekli yabancı anahtarlar
- en az 4 sütun
belirleyiniz.

---

## Kaynaklar

- Chen, P. P. S. (1976). *The Entity-Relationship Model*. ACM Transactions on Database Systems, 1(1).
- Codd, E. F. (1970). *A Relational Model of Data for Large Shared Data Banks*. Communications of the ACM, 13(6).
- Date, C. J. (2003). *An Introduction to Database Systems* (8th ed.). Addison-Wesley.
- Elmasri, R. & Navathe, S. (2016). *Fundamentals of Database Systems* (7th ed.). Pearson.
- Connolly, T. & Begg, C. (2015). *Database Systems* (6th ed.). Pearson.

---

Bu konuyu gerçekten kavradığınız anda şunu fark edersiniz: Veritabanı tasarımı, tablo ezberleme işi değildir. O, bir sistemin gerçeği nasıl düşündüğünü görünür kılma işidir. Ve iyi kurulan her sistem, önce kendi verisini doğru düşünmeyi öğrenir.
