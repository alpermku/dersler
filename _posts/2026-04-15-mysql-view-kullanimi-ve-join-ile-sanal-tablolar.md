---
layout: post
title: "MySQL'de VIEW Kullanımı ve JOIN ile Sanal Tablolar"
date: 2026-04-15 14:35:00 +0300
categories: veri-tabani-yonetim-sistemleri-ii
---

Veritabanı derslerinde öğrencilerin en sık yaptığı şeylerden biri şudur: sorguyu yazmak. Ama daha kritik olan şey, aynı sorguyu tekrar tekrar yazmak zorunda kalmadan **tasarlayabilmektir**.

İşte burada **VIEW** kavramı devreye girer.

View, ilk bakışta küçük bir konu gibi görünür. Hatta bazı öğrenciler onu sadece "hazır sorgu kaydetme" aracı sanır. Ama gerçekte view, veritabanında soyutlama, güvenlik, okunabilirlik ve yeniden kullanım açısından son derece önemli bir yapıdır.

Özellikle çoklu tablo birleştirmelerinde, raporlama işlemlerinde ve kullanıcıya sadece belirli sütunları göstermek istediğiniz senaryolarda hayat kurtarır.

Bu derste konuyu iki aşamada işleyeceğiz:

1. Önce tek tablo üzerinden basit view mantığını kuracağız
2. Sonra **JOIN içeren view** yapısına geçip daha gerçekçi kullanım senaryolarını inceleyeceğiz

Üstelik bunu sadece komut ezberi olarak değil, neden böyle yapıldığını açıklayarak ele alacağız.

---

## Bu Derste Neler Öğreneceksiniz?

Bu dersin sonunda şunları yapabiliyor olmanız beklenmektedir:

- MySQL'de VIEW kavramını açıklayabilmek
- Tek tablo üzerinden view oluşturabilmek
- View'ları filtreleme, sıralama ve tekrar kullanım amaçlı sorgulayabilmek
- `CREATE VIEW`, `CREATE OR REPLACE VIEW` ve `DROP VIEW` komutlarını doğru kullanabilmek
- JOIN içeren view'ların neden önemli olduğunu açıklayabilmek
- View kullanımının avantaj ve sınırlamalarını yorumlayabilmek
- Raporlama ve veri erişim kontrolü açısından view mantığını kavrayabilmek

---

## 1. VIEW Nedir?

**VIEW (görünüm)**, bir sorgunun sonucunu sanal tablo gibi kullanmamızı sağlayan veritabanı nesnesidir.

Buradaki kritik ifade şudur:

> View gerçek veri tutmaz, sorguyu tutar.

Yani view oluşturduğunuzda verinin ikinci bir kopyasını oluşturmazsınız. Sadece bir sorguyu isimlendirirsiniz. Daha sonra o sorguyu tekrar tekrar yazmak yerine, view adını kullanarak çağırırsınız.

### Kısaca düşünelim

Şu sorguyu sürekli yazdığınızı düşünün:

```sql
SELECT ad, soyad, bolum, ortalama
FROM ogrenciler
WHERE ortalama >= 3.00;
```

Bu sorguyu her defasında yeniden yazmak yerine, bunu bir view olarak tanımlarsınız ve sonra şunu dersiniz:

```sql
SELECT * FROM basarili_ogrenciler;
```

Daha kısa, daha temiz ve daha yönetilebilir.

---

## 2. VIEW Neden Kullanılır?

View kullanımı sadece "kolaylık" için değildir. Birden fazla gerçek sebebi vardır.

### 2.1 Karmaşık sorguları sadeleştirir

Özellikle JOIN içeren, filtreli veya hesaplamalı sorgular çok uzayabilir. View ile bu karmaşıklık tek bir isim altında gizlenir.

### 2.2 Güvenlik sağlar

Kullanıcıya tablonun tüm sütunlarını göstermek istemeyebilirsiniz. Örneğin öğrenci tablosunda adres, telefon, TC no gibi alanlar olabilir. Ama kullanıcıya yalnızca ad, soyad ve bölüm bilgisini göstermek isteyebilirsiniz.

### 2.3 Tekrar kullanılabilirlik sağlar

Aynı sorguyu farklı yerlerde tekrar tekrar yazmak yerine bir kez tanımlarsınız.

### 2.4 Kod okunabilirliğini artırır

`SELECT * FROM v_ogrenci_detaylari` ifadesi, çoğu zaman 10 satırlık JOIN sorgusundan çok daha anlaşılırdır.

### 2.5 Standartlaştırma sağlar

Örneğin tam adı `CONCAT(ad, ' ', soyad)` ile her yerde birleştirmek yerine bunu bir view içinde tanımlarsınız. Böylece tüm raporlar aynı mantığı kullanır.

---

## 3. Tek Tablo Üzerinden VIEW Mantığı

Önce işi sade kuralım. Elimizde sadece bir tane `ogrenciler` tablosu olsun.

---

## 4. Veritabanı ve Tablo Oluşturma

Aşağıdaki adımlarla örnek veritabanımızı hazırlayalım.

### 4.1 Yeni veritabanı oluşturma

```sql
CREATE DATABASE okul_db;
```

Bu komut, `okul_db` adında yeni bir veritabanı oluşturur.

### 4.2 Veritabanını seçme

```sql
USE okul_db;
```

Bu komuttan sonra işlemlerimiz `okul_db` üzerinde yürür.

### 4.3 Öğrenciler tablosunu oluşturma

```sql
CREATE TABLE ogrenciler (
    id INT AUTO_INCREMENT PRIMARY KEY,
    ad VARCHAR(50),
    soyad VARCHAR(50),
    bolum VARCHAR(50),
    sinif INT,
    ortalama DECIMAL(4,2)
);
```

### Tablo alanlarının anlamı

| Alan | Açıklama |
|------|----------|
| `id` | Her öğrenci için benzersiz numara |
| `ad` | Öğrencinin adı |
| `soyad` | Öğrencinin soyadı |
| `bolum` | Öğrencinin okuduğu bölüm |
| `sinif` | Kaçıncı sınıfta olduğu |
| `ortalama` | Genel not ortalaması |

Burada `AUTO_INCREMENT`, her eklenen kayda otomatik artan ID verilmesini sağlar.

---

## 5. Örnek Kayıtlar Ekleme

Tablomuz boşsa view'ların anlamı da yoktur. O yüzden önce veri ekleyelim.

```sql
INSERT INTO ogrenciler (ad, soyad, bolum, sinif, ortalama) VALUES
('Ahmet', 'Yılmaz', 'Bilgisayar', 1, 3.20),
('Ayşe', 'Demir', 'Matematik', 2, 2.80),
('Mehmet', 'Kara', 'Bilgisayar', 3, 3.75),
('Zeynep', 'Çelik', 'Fizik', 1, 3.50),
('Ali', 'Koç', 'Matematik', 4, 2.40),
('Elif', 'Şahin', 'Bilgisayar', 2, 3.90);
```

Şimdi tabloyu kontrol edelim:

```sql
SELECT * FROM ogrenciler;
```

Bu sorgu bize tablodaki tüm kayıtları gösterir.

---

## 6. İlk VIEW'larımızı Oluşturalım

Şimdi asıl konuya giriyoruz.

---

## 7. VIEW 1: Bilgisayar Bölümü Öğrencileri

Sadece Bilgisayar bölümündeki öğrencileri sık sık görmek istediğimizi düşünelim.

```sql
CREATE VIEW bilgisayar_ogrencileri AS
SELECT ad, soyad, sinif, ortalama
FROM ogrenciler
WHERE bolum = 'Bilgisayar';
```

### Bu view ne yapıyor?

- `ogrenciler` tablosundan veri alıyor
- Sadece `Bilgisayar` bölümünü filtreliyor
- Tüm sütunları değil, yalnızca gerekli sütunları gösteriyor

### Kullanımı

```sql
SELECT * FROM bilgisayar_ogrencileri;
```

### Ne kazandık?

Artık her seferinde `WHERE bolum = 'Bilgisayar'` yazmak zorunda değiliz.

---

## 8. VIEW 2: Başarılı Öğrenciler

Şimdi not ortalaması 3.00 ve üzeri olan öğrencileri bir görünüm haline getirelim.

```sql
CREATE VIEW basarili_ogrenciler AS
SELECT ad, soyad, bolum, ortalama
FROM ogrenciler
WHERE ortalama >= 3.00;
```

### Kullanımı

```sql
SELECT * FROM basarili_ogrenciler;
```

### Neden faydalı?

Bu tür bir view:

- başarı raporlarında,
- burs değerlendirmelerinde,
- danışman ekranlarında

tekrar tekrar kullanılabilir.

---

## 9. VIEW 3: Bölümlere Göre Ortalama

Bu kez satır bazlı filtreleme değil, özet bilgi üretelim.

```sql
CREATE VIEW bolum_ortalama AS
SELECT bolum, AVG(ortalama) AS ortalama_not
FROM ogrenciler
GROUP BY bolum;
```

### Kullanımı

```sql
SELECT * FROM bolum_ortalama;
```

### Burada ne oldu?

Bu view artık tek tek öğrencileri değil, bölümleri özetleyen bir rapor üretmektedir.

Örneğin sonuç şöyle görünebilir:

| bolum | ortalama_not |
|-------|--------------|
| Bilgisayar | 3.62 |
| Matematik | 2.60 |
| Fizik | 3.50 |

Bu da bize şunu gösterir:

> View sadece kayıt filtrelemek için değil, toplulaştırılmış raporlar için de kullanılabilir.

---

## 10. VIEW'leri Tekrar Kullanma

View oluşturduktan sonra onu normal tablo gibi kullanabilirsiniz.

İşte burada iş gerçekten güzelleşir.

### Örnek 1: Başarılı Bilgisayar Öğrencileri

```sql
SELECT *
FROM bilgisayar_ogrencileri
WHERE ortalama > 3.50;
```

Bu sorgu, zaten filtrelenmiş view üzerinde bir filtre daha uygular.

### Örnek 2: Başarılı öğrencileri sıralama

```sql
SELECT *
FROM basarili_ogrenciler
ORDER BY ortalama DESC;
```

Bu da başarılı öğrencileri en yüksek ortalamadan düşüğe doğru sıralar.

### Örnek 3: Bölüm ortalaması 3'ten büyük olanlar

```sql
SELECT *
FROM bolum_ortalama
WHERE ortalama_not > 3.00;
```

Yani view oluşturduktan sonra onu son nokta değil, yeni başlangıç noktası olarak kullanabilirsiniz.

---

## 11. VIEW Güncelleme ve Silme

Veritabanı tasarımı yaşayan bir yapıdır. View tanımı da zamanla değişebilir.

### 11.1 View güncelleme

Örneğin "başarılı öğrenci" tanımını 3.00 yerine 3.50 yapmak istiyorsak:

```sql
CREATE OR REPLACE VIEW basarili_ogrenciler AS
SELECT ad, soyad, bolum, ortalama
FROM ogrenciler
WHERE ortalama >= 3.50;
```

Bu komut mevcut view'ı yeni tanımla değiştirir.

### 11.2 View silme

```sql
DROP VIEW bilgisayar_ogrencileri;
```

Bu komut görünümü siler. Ana tabloya dokunmaz.

Bu önemli bir noktadır:

> View silinirse veri silinmez. Çünkü veri view içinde değil, tablonun kendisindedir.

---

## 12. Bu Kısma Kadar Ne Öğrendik?

Buraya kadar gördüğümüz view'lar tek tablo üstünden çalışıyordu. Bu başlangıç için iyidir. Ama gerçek veritabanı sistemlerinde asıl güç, **çoklu tablo birleştirme** ile ortaya çıkar.

Çünkü çoğu zaman bilgiler tek bir tabloda tutulmaz.

Örneğin:

- Öğrenci bilgileri bir tabloda
- Bölüm bilgileri başka tabloda
- Danışman bilgileri başka tabloda
- Ders bilgileri başka tabloda olabilir

Bu durumda view, JOIN sorgularının karmaşıklığını gizlemek için müthiş bir araç haline gelir.

---

## 13. İkinci Senaryo: JOIN İçeren VIEW

Şimdi daha gerçekçi bir veritabanı tasarımına geçelim.

Elimizde iki tablo olsun:

- `ogrenciler`
- `bolumler`

Bu yapıda öğrenci tablosu sadece bölüm kimliğini tutar, bölüm adını değil.

Bu daha doğru bir veritabanı tasarımıdır. Çünkü bölüm adını her satırda tekrar tekrar saklamak yerine ayrı tabloda tutarız.

---

## 14. Tablo Yapıları

### 14.1 Bölümler tablosu

```sql
CREATE TABLE bolumler (
    id INT AUTO_INCREMENT PRIMARY KEY,
    bolum_adi VARCHAR(100),
    fakulte VARCHAR(100)
);
```

### 14.2 Öğrenciler tablosu (ilişkili sürüm)

```sql
CREATE TABLE ogrenciler (
    id INT AUTO_INCREMENT PRIMARY KEY,
    ad VARCHAR(50),
    soyad VARCHAR(50),
    bolum_id INT,
    FOREIGN KEY (bolum_id) REFERENCES bolumler(id)
);
```

Burada `bolum_id`, öğrencinin hangi bölüme bağlı olduğunu belirtir.

---

## 15. JOIN Sorgusu ile Öğrenci Detayı Alma

Eğer öğrencinin hangi bölümde ve hangi fakültede olduğunu görmek istersek şu sorguyu yazarız:

```sql
SELECT
    o.id,
    o.ad,
    o.soyad,
    b.bolum_adi,
    b.fakulte
FROM ogrenciler o
LEFT JOIN bolumler b ON o.bolum_id = b.id;
```

Bu sorgu gayet doğrudur. Ama şunu düşünün:

- bunu raporlama ekranında kullanıyorsunuz,
- öğrenci panelinde kullanıyorsunuz,
- danışman listesinde kullanıyorsunuz,
- yönetim panelinde kullanıyorsunuz.

Her yerde aynı JOIN sorgusunu tekrar tekrar yazmak hem yorucudur hem hata riskini artırır.

İşte bu yüzden view kullanırız.

---

## 16. JOIN İçeren VIEW Oluşturma

```sql
CREATE VIEW v_ogrenci_detaylari AS
SELECT
    o.id AS ogrenci_no,
    CONCAT(o.ad, ' ', o.soyad) AS tam_ad,
    b.bolum_adi,
    b.fakulte
FROM ogrenciler o
INNER JOIN bolumler b ON o.bolum_id = b.id;
```

### Bu view ne sağladı?

- Öğrenci numarasını daha açıklayıcı bir adla sundu: `ogrenci_no`
- Ad ve soyadı tek sütunda birleştirdi: `tam_ad`
- Bölüm ve fakülte bilgilerini JOIN ile dahil etti
- Uzun sorguyu bir isim altında topladı

### Kullanımı

```sql
SELECT * FROM v_ogrenci_detaylari;
```

Gördüğünüz gibi artık uzun JOIN yerine tek satırla sorgulama yapabiliyoruz.

---

## 17. JOIN İçeren VIEW'ların Asıl Gücü

Bu yapının gücü özellikle şu senaryolarda ortaya çıkar:

### 17.1 Belirli bölüme göre filtreleme

```sql
SELECT *
FROM v_ogrenci_detaylari
WHERE bolum_adi = 'Bilgisayar Mühendisliği';
```

### 17.2 Fakülte bazlı listeleme

```sql
SELECT *
FROM v_ogrenci_detaylari
WHERE fakulte = 'Mühendislik Fakültesi';
```

### 17.3 Ad sıralaması

```sql
SELECT *
FROM v_ogrenci_detaylari
ORDER BY tam_ad ASC;
```

Bu noktada kullanıcı artık JOIN bilmese bile view üzerinden veriyi rahatça kullanabilir.

---

## 18. JOIN İçeren VIEW'larda Dikkat Edilmesi Gerekenler

Şimdi işin kritik tarafına gelelim. View kullanmak güzel, ama bilinçsiz kullanılırsa sorun da çıkarabilir.

### 18.1 View sanaldır

View her çağrıldığında arkasındaki sorgu tekrar çalışır.

Bu ne demek?

- Veri güncelse, view de günceldir
- Ama ağır JOIN'ler varsa performans maliyeti oluşabilir

Yani view, önceden hesaplanmış fiziksel kopya değildir.

### 18.2 İsim çakışmalarına dikkat edin

JOIN yapılan tablolarda aynı isimli sütunlar olabilir. Mesela hem `ogrenciler` hem `bolumler` tablosunda `id` alanı vardır.

Bu durumda `AS` kullanmak iyi bir pratiktir.

Örnek:

```sql
o.id AS ogrenci_no
```

Aksi halde sonuç kümesinde belirsizlik ve karışıklık oluşabilir.

### 18.3 Güncellenebilirlik sınırlıdır

Basit bazı view'lar üzerinden `UPDATE` veya `INSERT` işlemi yapılabilse de, JOIN içeren view'larda bu genellikle önerilmez.

Çünkü şu soru ortaya çıkar:

> Bu satır değiştiğinde hangi tablo güncellenmiş olacak?

Bu nedenle JOIN içeren view'lar çoğunlukla **raporlama ve okuma amaçlı** düşünülmelidir.

### 18.4 Performans konusu önemlidir

Çok büyük tablolarda view içindeki JOIN'ler sık kullanılıyorsa indeksleme ve sorgu maliyeti düşünülmelidir.

Yani view, kodu kısaltır ama fizik kurallarını ortadan kaldırmaz.

---

## 19. Tek Tablo VIEW ile JOIN VIEW Arasındaki Fark

| Özellik | Tek Tablo View | JOIN İçeren View |
|--------|----------------|------------------|
| Kurulum kolaylığı | Daha kolay | Daha karmaşık |
| Kullanım amacı | Filtreleme, özetleme | İlişkili veri sunma |
| Performans maliyeti | Daha düşük | Daha yüksek olabilir |
| Okunabilirlik katkısı | Orta | Çok yüksek |
| Raporlama değeri | İyi | Çok güçlü |
| Güncelleme riski | Daha düşük | Daha dikkatli kullanılmalı |

Bu tablo bize şunu söyler:

> View konusu, sadece küçük filtre görünümü oluşturmaktan ibaret değildir. Asıl gücü, ilişkisel yapının karmaşıklığını sadeleştirmektir.

---

## 20. Öğrenciler İçin Kritik Yorum

Bu dersin en önemli noktası şudur:

Bir veritabanı uzmanı sadece tablo oluşturmaz. Aynı zamanda veriye **nasıl erişileceğini tasarlar**.

View kullanımı tam da bu noktada devreye girer.

Eğer siz bir sistemde kullanıcıların hep aynı tür bilgileri görmek istediğini biliyorsanız, o bilgiyi her seferinde dağınık sorgularla çağırmak yerine, view ile düzenli ve güvenli bir erişim katmanı oluşturabilirsiniz.

Özellikle şu tür sistemlerde view çok değerlidir:

- Öğrenci bilgi sistemleri
- Personel otomasyonları
- Hastane bilgi sistemleri
- Muhasebe raporları
- Yönetim panelleri
- Dashboard ekranları

Çünkü bu sistemlerde kullanıcı çoğu zaman ham tabloyu değil, işlenmiş bilgiyi görmek ister.

---

## 21. Sık Yapılan Hatalar

### 21.1 View ile tabloyu aynı şey sanmak

Hayır. View veri tutmaz, sorgu tutar.

### 21.2 Performans maliyetini yok saymak

View yazınca sorgu sihirli şekilde hızlanmaz. Özellikle JOIN içeren büyük yapılarda arkadaki sorgu maliyeti hâlâ vardır.

### 21.3 `SELECT *` bağımlılığı oluşturmak

View içinde gerekli olmayan sütunları taşımak ileride bakım sorunları çıkarabilir. Mümkün olduğunca bilinçli sütun seçmek daha iyidir.

### 21.4 Güncelleme beklentisini yanlış kurmak

JOIN içeren view üzerinden veri güncellemenin her durumda kolay veya doğru olacağını sanmak hatadır.

### 21.5 İsimlendirmeyi özensiz yapmak

`view1`, `yeniview`, `tablo2` gibi isimler yerine anlamlı isimler kullanın:

- `basarili_ogrenciler`
- `v_ogrenci_detaylari`
- `bolum_ortalama`

---

## 22. Bölüm Özeti

Bu derste MySQL'de **VIEW** kavramını ayrıntılı biçimde inceledik.

Önce tek tablo üzerinde:

- veritabanı oluşturduk,
- `ogrenciler` tablosunu tanımladık,
- örnek veriler ekledik,
- en az 3 view oluşturduk,
- bu view'ları tekrar tekrar kullandık,
- güncelleme ve silme işlemlerini gördük.

Ardından daha gerçekçi senaryoya geçerek:

- `ogrenciler` ve `bolumler` tablolarını ilişkilendirdik,
- JOIN sorgusu yazdık,
- bu JOIN sorgusunu bir view haline getirdik,
- view ile karmaşık sorguları sadeleştirdik,
- güvenlik, tekrar kullanım ve okunabilirlik avantajlarını değerlendirdik.

Kısacası view, yalnızca bir SQL konusu değil; aynı zamanda veriye erişim tasarımının önemli bir parçasıdır.

---

## 23. Alıştırmalar

### Alıştırma 1
`ogrenciler` tablosu üzerinde şu view'ı oluşturunuz:

- sadece 2. sınıf öğrencilerini göstersin
- ad, soyad, bölüm alanlarını içersin

### Alıştırma 2
`ogrenciler` tablosu üzerinde bölüm bazlı öğrenci sayısını veren bir view oluşturunuz.

### Alıştırma 3
`basarili_ogrenciler` görünümünü bu kez sadece ortalaması `3.50` ve üzeri olan öğrencileri gösterecek şekilde yeniden tanımlayınız.

### Alıştırma 4
`ogrenciler` ve `bolumler` tablolarını kullanarak, sadece `tam_ad` ve `bolum_adi` alanlarını döndüren bir view oluşturunuz.

### Alıştırma 5
Aşağıdaki soruya yazılı cevap veriniz:

> JOIN içeren bir view neden raporlama için çok uygun, ama veri güncelleme için her zaman uygun değildir?

---

## Kaynaklar ve İleri Okuma

- Elmasri, R. & Navathe, S. B. (2016). *Fundamentals of Database Systems*. Pearson.
- Coronel, C. & Morris, S. (2019). *Database Systems: Design, Implementation, & Management*. Cengage.
- MySQL Documentation. *CREATE VIEW Statement*.
- Silberschatz, A., Korth, H. F. & Sudarshan, S. (2019). *Database System Concepts*. McGraw-Hill.
