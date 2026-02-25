---
layout: post
title: "INSTR, REVERSE, Matematik Fonksiyonları ve Tarih/Saat Fonksiyonları"
date: 2026-02-25
categories: veri-tabani-yonetim-sistemleri-ii
---

{% raw %}

Bugün SQL'in alet çantasını açıyoruz: metin içinde dedektiflik yapan **INSTR**, kelimeleri aynadaki gibi tersine çeviren **REVERSE**, sayılarla dans eden **matematik fonksiyonları** ve zamanın efendisi **tarih/saat fonksiyonları**. Kemer bağlayın — bu dersten sonra SQL sorgularınız bambaşka görünecek.

---

## BÖLÜM 1: Metin Fonksiyonları

---

## 1. INSTR — Metin İçinde Dedektiflik

### 1.1 INSTR Ne Yapar?

`INSTR` fonksiyonu, bir metnin **içinde başka bir metni arar** ve bulursa **kaçıncı karakterde başladığını** döndürür. Bulamazsa **0** döndürür.

```sql
INSTR(aranacak_metin, aranan_ifade)
```

> 🔍 **Analoji:** Bir kitapta "Ctrl+F" yapıp bir kelime aramak gibi düşünün. INSTR size o kelimenin hangi sayfada (karakter pozisyonunda) olduğunu söyler.

### 1.2 Temel Kullanım

```sql
SELECT INSTR('Merhaba Dünya', 'Dünya');
-- Sonuç: 9
```

Neden **9**? Sayalım:

| Pozisyon | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Karakter | M | e | r | h | a | b | a | (boşluk) | **D** | **ü** | **n** | **y** | **a** |

'Dünya' kelimesi **9. pozisyonda** başlıyor. Dikkat: SQL'de pozisyon sayımı **1'den** başlar (programlama dillerindeki 0'dan değil!).

```sql
SELECT INSTR('Merhaba Dünya', 'SQL');
-- Sonuç: 0
```

'SQL' kelimesi metinde yok → sonuç **0**. Bu çok önemli: INSTR hata vermez, sessizce 0 döndürür. Bu özellik onu **WHERE koşullarında** güçlü bir filtre aracı yapar.

### 1.3 INSTR ile Veri Filtreleme — Asıl Güç Burada

Şimdi gerçek dünyaya geçelim. Bir `musteriler` tablonuz var ve sadece **Gmail kullanan müşterileri** bulmak istiyorsunuz:

```sql
SELECT *
FROM musteriler
WHERE INSTR(email, '@gmail.com') > 0;
```

**Bu sorgu ne yapıyor?**

1. `musteriler` tablosundaki **her satırı** tek tek kontrol eder.
2. Her satırın `email` sütunundaki değerde `'@gmail.com'` ifadesini arar.
3. Eğer bulursa → pozisyon numarası döner (1 veya daha büyük) → `> 0` koşulu **TRUE** → satır sonuca dahil edilir.
4. Eğer bulamazsa → 0 döner → `> 0` koşulu **FALSE** → satır elenir.

**Örnek veri:**

| id | ad | email |
|---|---|---|
| 1 | Ahmet | ahmet@gmail.com |
| 2 | Ayşe | ayse@hotmail.com |
| 3 | Mehmet | mehmet@gmail.com |
| 4 | Fatma | fatma@yahoo.com |
| 5 | Ali | ali.gmail@outlook.com |

**Sorgu sonucu:**

| id | ad | email |
|---|---|---|
| 1 | Ahmet | ahmet@gmail.com |
| 3 | Mehmet | mehmet@gmail.com |

**Dikkat!** 5. satırdaki Ali'nin emaili `ali.gmail@outlook.com` — içinde "gmail" geçiyor ama `'@gmail.com'` tam olarak bu şekilde geçmiyor (çünkü "@gmail" değil, ".gmail" var). INSTR **tam eşleşme** arar, parçalı eşleşme yapmaz.

### 1.4 INSTR vs LIKE: Hangisini Ne Zaman Kullanalım?

Aynı sorguyu `LIKE` ile de yazabilirdik:

```sql
-- LIKE ile
SELECT * FROM musteriler WHERE email LIKE '%@gmail.com%';

-- INSTR ile
SELECT * FROM musteriler WHERE INSTR(email, '@gmail.com') > 0;
```

İkisi de aynı sonucu verir. Peki fark ne?

| Özellik | LIKE | INSTR |
|---|---|---|
| Joker karakter | `%` ve `_` kullanır | Kullanmaz |
| Pozisyon bilgisi | Vermez (sadece var/yok) | Kaçıncı karakterde olduğunu söyler |
| Performans | Basit aramada genelde daha hızlı | Büyük metinlerde benzer |
| Esneklik | Sınırlı pattern | Başka fonksiyonlarla birleştirilebilir |

**Kural:** Sadece "var mı yok mu?" sorusuna cevap arıyorsanız `LIKE` yeterli. Pozisyon bilgisi lazımsa veya sonucu başka bir hesapta kullanacaksanız `INSTR` kullanın.

### 1.5 INSTR'ın İleri Kullanımları

**Domaini çıkarmak:**

```sql
SELECT
    email,
    SUBSTRING(email, INSTR(email, '@') + 1) AS domain
FROM musteriler;
```

| email | domain |
|---|---|
| ahmet@gmail.com | gmail.com |
| ayse@hotmail.com | hotmail.com |

Burada INSTR, `@` işaretinin pozisyonunu buluyor ve SUBSTRING ile o noktadan sonraki kısmı kesiyoruz. Tek başına INSTR sıradan, ama diğer fonksiyonlarla birleştiğinde güçlü bir araç.

**Birden fazla koşul:**

```sql
-- Hem gmail hem de 'info' içermeyen emailler
SELECT *
FROM musteriler
WHERE INSTR(email, '@gmail.com') > 0
  AND INSTR(email, 'info') = 0;
```

`INSTR(...) = 0` demek **"bu ifade metinde geçmiyor"** demektir. Yani: Gmail kullanıcıları ama email adresi 'info' içermeyenler.

---

## 2. REVERSE — Metni Ters Çevirmek

### 2.1 REVERSE Ne Yapar?

`REVERSE`, bir metnin karakterlerini **sondan başa** sıralar:

```sql
SELECT REVERSE('Merhaba');
-- Sonuç: 'abahreM'

SELECT REVERSE('12345');
-- Sonuç: '54321'

SELECT REVERSE('kayak');
-- Sonuç: 'kayak'  (palindrom!)
```

### 2.2 Nerelerde Kullanılır?

İlk bakışta "neden bir metni ters çevireyim ki?" diye düşünebilirsiniz. İşte gerçek kullanım alanları:

**Palindrom kontrolü:**

```sql
SELECT kelime,
       CASE
           WHEN kelime = REVERSE(kelime) THEN 'Palindrom'
           ELSE 'Değil'
       END AS sonuc
FROM kelimeler;
```

**Dosya uzantısı bulmak (ters mantık):**

```sql
-- Dosya adının sonundaki uzantıyı bulmak
SELECT
    dosya_adi,
    REVERSE(SUBSTRING(REVERSE(dosya_adi), 1, INSTR(REVERSE(dosya_adi), '.') - 1)) AS uzanti
FROM dosyalar;
```

Bu karmaşık görünüyor ama mantığı şu: dosya adını ters çevir, ilk noktaya kadar kes, tekrar ters çevir. Sonuç: uzantı.

**Email domain kontrolü (REVERSE + INSTR birlikte):**

```sql
-- Sonu '.edu.tr' ile biten emailleri bul
SELECT *
FROM musteriler
WHERE REVERSE(email) LIKE REVERSE('%.edu.tr');
```

> 💡 **İpucu:** REVERSE tek başına sık kullanılmaz ama diğer fonksiyonlarla birleştiğinde yaratıcı çözümler üretir. SQL'de her fonksiyon bir LEGO parçası gibidir — tek başına basit, birleşince güçlü.

---

## BÖLÜM 2: Matematik Fonksiyonları

SQL sadece metin işlemez — sayılarla da dans eder. Finans, istatistik, envanter yönetimi... hepsi matematik fonksiyonlarına dayanır.

---

## 3. ABS — Mutlak Değer

`ABS` fonksiyonu, bir sayının **işaretini kaldırır** — negatifse pozitif yapar, pozitifse dokunmaz.

```sql
SELECT ABS(-15);    -- Sonuç: 15
SELECT ABS(15);     -- Sonuç: 15
SELECT ABS(-3.14);  -- Sonuç: 3.14
```

### 3.1 Gerçek Dünya Kullanımı: İşlem Hacmi

Bir finans tablosunda alımlar negatif, satışlar pozitif olarak kaydedilir. **Toplam işlem hacmini** hesaplamak istediğinizde yönü değil, büyüklüğü önemsiyorsunuz:

```sql
SELECT SUM(ABS(miktar)) AS islem_hacmi
FROM islemler;
```

**Örnek veri (`islemler` tablosu):**

| id | islem | miktar |
|---|---|---|
| 1 | Satış | 500 |
| 2 | Alım | -300 |
| 3 | Satış | 200 |
| 4 | Alım | -150 |

**ABS olmadan:** `SUM(miktar)` = 500 + (-300) + 200 + (-150) = **250** (net bakiye)

**ABS ile:** `SUM(ABS(miktar))` = 500 + 300 + 200 + 150 = **1150** (toplam işlem hacmi)

İkisi **farklı soruların cevabı**: net bakiye mi yoksa toplam hareket mi? Finans raporlarında her ikisi de ayrı ayrı önemlidir.

---

## 4. Yuvarlama Fonksiyonları: CEIL, FLOOR, ROUND

Bu üç fonksiyon, ondalıklı sayıları tam sayıya (veya belirli basamağa) yuvarlar — ama her biri **farklı yöne**:

### 4.1 Karşılaştırma Tablosu

| Fonksiyon | Açıklama | CEIL(4.2) | CEIL(-4.2) | FLOOR(4.8) | FLOOR(-4.8) |
|---|---|---|---|---|---|
| **CEIL / CEILING** | Yukarı yuvarla (tavana) | **5** | **-4** | — | — |
| **FLOOR** | Aşağı yuvarla (tabana) | — | — | **4** | **-5** |

```sql
SELECT CEIL(4.2);      -- 5  (yukarı yuvarla)
SELECT CEILING(4.2);   -- 5  (CEIL ile aynı, uzun yazımı)
SELECT FLOOR(4.8);     -- 4  (aşağı yuvarla)
```

> 🏢 **Analoji:** Asansör düşünün. CEIL sizi **üst kata**, FLOOR **alt kata** bırakır. 4.2. kattaysanız: CEIL → 5. kat, FLOOR → 4. kat. Araya park edemezsiniz!

### 4.2 ROUND — Matematiksel Yuvarlama

`ROUND` en tanıdık yuvarlama yöntemidir: 5'ten küçükse aşağı, 5 ve üstüyse yukarı.

```sql
SELECT ROUND(4.567);       -- 5      (en yakın tam sayı)
SELECT ROUND(4.567, 2);    -- 4.57   (2 ondalık basamak)
SELECT ROUND(4.567, 1);    -- 4.6    (1 ondalık basamak)
SELECT ROUND(4.567, 0);    -- 5      (tam sayıya yuvarla)
SELECT ROUND(1234.567, -2); -- 1200  (yüzler basamağına yuvarla)
```

İkinci parametre:
- **Pozitif** → ondalık basamak sayısı
- **0 veya yok** → tam sayıya yuvarla
- **Negatif** → tam sayı basamaklarına yuvarla (onlar, yüzler...)

### 4.3 Pratik Karşılaştırma

| Değer | CEIL | FLOOR | ROUND |
|---|---|---|---|
| 4.2 | 5 | 4 | 4 |
| 4.5 | 5 | 4 | 5 |
| 4.8 | 5 | 4 | 5 |
| -4.2 | -4 | -5 | -4 |
| -4.5 | -4 | -5 | -5 |
| -4.8 | -4 | -5 | -5 |

**Nerede hangisi kullanılır?**

| Senaryo | Fonksiyon | Neden? |
|---|---|---|
| Fiyat gösterimi (2 ondalık) | `ROUND(fiyat, 2)` | Müşteriye düzgün görünsün |
| Kargo kutusu boyutu hesabı | `CEIL(agirlik)` | Fazladan kutsal, eksik olmasın |
| Stok sayımı (tam birim) | `FLOOR(miktar)` | Yarım ürün satılamaz |
| Vergi hesabı | `ROUND(vergi, 2)` | Yasal zorunluluk: kuruş hassasiyeti |

---

## 5. POWER (POW) ve SQRT — Üs ve Karekök

### 5.1 POWER / POW — Üs Alma

```sql
SELECT POWER(2, 10);   -- 1024  (2 üzeri 10)
SELECT POW(3, 4);      -- 81    (3 üzeri 4)
SELECT POWER(10, 3);   -- 1000  (10 üzeri 3)
```

`POWER` ve `POW` MySQL'de **aynı fonksiyondur** — hangisini yazarsanız yazın çalışır.

### 5.2 SQRT — Karekök

```sql
SELECT SQRT(144);   -- 12
SELECT SQRT(2);     -- 1.4142135623730951
SELECT SQRT(0);     -- 0
SELECT SQRT(-1);    -- NULL (negatif sayının karekökü gerçel sayılarda tanımsız)
```

### 5.3 Bileşik Faiz Hesabı (YBS Klasiği)

```sql
-- Bileşik faiz formülü: A = P * (1 + r)^n
-- 10.000 TL, yıllık %15 faiz, 5 yıl
SELECT
    10000 AS anapara,
    ROUND(10000 * POWER(1.15, 5), 2) AS bitis_tutari,
    ROUND(10000 * POWER(1.15, 5) - 10000, 2) AS toplam_faiz;
```

| anapara | bitis_tutari | toplam_faiz |
|---|---|---|
| 10000 | 20113.57 | 10113.57 |

> 💰 Bu sorgu, Excel'de yaptığınız faiz hesabının SQL karşılığıdır. Binlerce müşterinin yatırım getirisini tek sorguda hesaplayabilirsiniz.

---

## 6. Toplama (Aggregate) Fonksiyonları

Toplama fonksiyonları, birden fazla satırdaki değerleri **tek bir sonuçta** özetler. Bunlar SQL'in **en sık kullanılan** fonksiyonlarıdır.

> ⚡ **Kritik fark:** Önceki fonksiyonlar (ABS, CEIL, ROUND...) **her satıra ayrı ayrı** uygulanır. Toplama fonksiyonları ise **tüm satırları birleştirip tek bir değer** döndürür.

---

### 6.1 SUM — Toplam

Belirli bir sütundaki değerlerin toplamını hesaplar:

```sql
SELECT SUM(Islem_tutari)
FROM islemlerim
WHERE Islem_turu LIKE 'Satis';
```

**Örnek veri (`islemlerim` tablosu):**

| id | Musteri_kod | Islem_turu | Islem_tutari |
|---|---|---|---|
| 1 | M001 | Satis | 1500 |
| 2 | M002 | Alim | 800 |
| 3 | M001 | Satis | 2300 |
| 4 | M003 | Satis | 950 |
| 5 | M002 | Alim | 1200 |
| 6 | M001 | Satis | 1750 |

**Sonuç:** `SUM(Islem_tutari)` WHERE Satis = 1500 + 2300 + 950 + 1750 = **6500**

`LIKE 'Satis'` burada `= 'Satis'` ile aynı işi yapar (joker karakter yok). Ancak `LIKE` kullanırsanız ileride `'Satis%'` gibi esnek aramalara geçiş kolay olur.

### 6.2 AVG — Ortalama

```sql
SELECT AVG(Islem_tutari)
FROM islemlerim
WHERE Islem_turu LIKE 'Alim';
```

Alım işlemleri: 800, 1200 → Ortalama = (800 + 1200) / 2 = **1000**

> **Dikkat:** `AVG` fonksiyonu `NULL` değerleri **atlar**. Eğer 3 satırdan birinde `Islem_tutari` NULL ise, ortalama 3'e değil **2'ye** bölünür. Bu, eksik veri durumunda beklenmedik sonuçlara yol açabilir.

### 6.3 MAX ve MIN — En Büyük ve En Küçük

```sql
SELECT
    MAX(Islem_tutari) AS en_yuksek,
    MIN(Islem_tutari) AS en_dusuk
FROM islemlerim
WHERE Islem_turu LIKE 'Satis';
```

| en_yuksek | en_dusuk |
|---|---|
| 2300 | 950 |

**Tek sorguda birden fazla toplama fonksiyonu** kullanabilirsiniz — bu çok güçlü bir özelliktir:

```sql
SELECT
    SUM(Islem_tutari) AS toplam_satis,
    AVG(Islem_tutari) AS ortalama_satis,
    MAX(Islem_tutari) AS en_buyuk_satis,
    MIN(Islem_tutari) AS en_kucuk_satis,
    COUNT(*)          AS islem_adedi
FROM islemlerim
WHERE Islem_turu LIKE 'Satis';
```

| toplam_satis | ortalama_satis | en_buyuk_satis | en_kucuk_satis | islem_adedi |
|---|---|---|---|---|
| 6500 | 1625 | 2300 | 950 | 4 |

Tek sorgu, beş farklı istatistik. İşte SQL'in gücü.

### 6.4 COUNT — Sayma

`COUNT` fonksiyonu satır sayar. Üç farklı kullanımı vardır ve her biri **farklı bir şeyi** sayar:

```sql
-- 1. Tüm satırları say (NULL dahil)
SELECT COUNT(*) FROM islemlerim;
-- Sonuç: 6

-- 2. NULL olmayan değerleri say
SELECT COUNT(Islem_tutari) FROM islemlerim;
-- Sonuç: 6 (hepsi dolu ise)

-- 3. Benzersiz (tekrarsız) değerleri say
SELECT COUNT(DISTINCT Musteri_kod)
FROM islemlerim
WHERE Islem_turu LIKE 'Satis';
-- Sonuç: 3 (M001, M002 yok çünkü alım, M003)
```

**`COUNT(*)` vs `COUNT(sutun)` vs `COUNT(DISTINCT sutun)`:**

| Kullanım | Ne Sayar? | NULL'ları Sayar mı? |
|---|---|---|
| `COUNT(*)` | Tüm satırlar | Evet (satır varsa sayar) |
| `COUNT(sutun)` | O sütunda NULL olmayan değerler | Hayır |
| `COUNT(DISTINCT sutun)` | Tekrarsız, NULL olmayan değerler | Hayır |

Yukarıdaki örnekte `COUNT(DISTINCT Musteri_kod) WHERE Satis` sorusu şu: **"Kaç farklı müşteri satış yaptı?"**

Satış yapan müşteriler: M001, M001, M003, M001 → Tekrarsız: **M001, M003** = **2**

(M002 sadece alım yaptığı için WHERE koşuluna takılır.)

> 🎯 `DISTINCT` kelimesi çok önemli: "tekrarları say**ma**" demek. YBS'de müşteri sayısı, ürün çeşitliliği, şube sayısı gibi metriklerde sürekli kullanacaksınız.

---

## 7. MOD — Bölümden Kalan

`MOD` fonksiyonu, bir sayının diğerine bölümünden kalanı verir:

```sql
SELECT MOD(17, 5);   -- 2  (17 / 5 = 3, kalan 2)
SELECT MOD(10, 2);   -- 0  (10 / 2 = 5, kalan 0 → çift sayı!)
SELECT MOD(10, 3);   -- 1  (10 / 3 = 3, kalan 1)
SELECT 17 % 5;       -- 2  (alternatif yazım, % operatörü)
```

### 7.1 Pratik Kullanımlar

**Çift/tek ayırma:**

```sql
SELECT id, ad,
       CASE
           WHEN MOD(id, 2) = 0 THEN 'Çift'
           ELSE 'Tek'
       END AS id_tipi
FROM musteriler;
```

**Taksit hesaplama:**

```sql
-- 1000 TL'yi 3 taksite böl (kalanı son taksite ekle)
SELECT
    FLOOR(1000 / 3) AS normal_taksit,      -- 333
    FLOOR(1000 / 3) + MOD(1000, 3) AS son_taksit  -- 334
;
```

**Satır renklendirme (raporlama):**

```sql
-- Her 3. satırı işaretle (zebra striping mantığı)
SELECT id, ad,
       CASE WHEN MOD(id, 3) = 0 THEN '>>>' ELSE '' END AS isaretli
FROM urunler;
```

---

## BÖLÜM 3: Tarih ve Saat Fonksiyonları

Veritabanlarında tarih/saat yönetimi, iş uygulamalarının **bel kemiğidir**: sipariş zamanı, kayıt tarihi, son giriş saati, fatura vadesi... Hepsi tarih fonksiyonlarına dayanır.

---

## 8. Anlık Tarih/Saat: CURRENT_TIMESTAMP, CURDATE, CURTIME

### 8.1 Üç Fonksiyon, Üç Farklı Detay Seviyesi

```sql
SELECT CURRENT_TIMESTAMP;   -- 2026-02-25 13:45:30  (tarih + saat)
SELECT CURDATE();           -- 2026-02-25           (sadece tarih)
SELECT CURTIME();           -- 13:45:30             (sadece saat)
```

| Fonksiyon | Döndürdüğü | Format | Parantez |
|---|---|---|---|
| `CURRENT_TIMESTAMP` | Tarih + Saat | YYYY-MM-DD HH:MM:SS | Parantez yok (SQL standardı) |
| `CURDATE()` | Sadece tarih | YYYY-MM-DD | Parantez gerekli |
| `CURTIME()` | Sadece saat | HH:MM:SS | Parantez gerekli |

> **Dikkat:** `CURRENT_TIMESTAMP` SQL standardıdır ve parantez **almaz**. `CURDATE()` ve `CURTIME()` ise MySQL'e özgü fonksiyonlardır ve parantez **gerektirir**. Bu küçük fark sınavda can yakar!

### 8.2 Kullanım Senaryoları

**Yeni kayıt eklerken:**

```sql
INSERT INTO siparisler (musteri_id, urun, siparis_tarihi)
VALUES (101, 'Laptop', CURDATE());
```

**Bugünkü işlemleri filtreleme:**

```sql
SELECT *
FROM siparisler
WHERE siparis_tarihi = CURDATE();
```

**Son 1 saat içindeki giriş kayıtları:**

```sql
SELECT *
FROM giris_kayitlari
WHERE giris_zamani >= CURRENT_TIMESTAMP - INTERVAL 1 HOUR;
```

**Log tablosuna otomatik zaman damgası:**

```sql
CREATE TABLE sistem_loglari (
    id INT AUTO_INCREMENT PRIMARY KEY,
    olay VARCHAR(200),
    olay_zamani TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Sadece olayı yazın, zaman otomatik eklenir:
INSERT INTO sistem_loglari (olay) VALUES ('Kullanıcı giriş yaptı');
```

---

## 9. EXTRACT — Tarihin İstediğiniz Parçasını Alın

### 9.1 EXTRACT Ne Yapar?

`EXTRACT` fonksiyonu, bir tarih/saat değerinden **belirli bir bileşeni** çeker:

```sql
EXTRACT(bilesken FROM tarih_degeri)
```

### 9.2 Kullanılabilir Bileşenler

| Bileşen | Açıklama | Örnek (2026-02-25 13:45:30 için) |
|---|---|---|
| `YEAR` | Yıl | 2026 |
| `MONTH` | Ay (1-12) | 2 |
| `DAY` | Gün (1-31) | 25 |
| `HOUR` | Saat (0-23) | 13 |
| `MINUTE` | Dakika (0-59) | 45 |
| `SECOND` | Saniye (0-59) | 30 |
| `WEEK` | Yılın kaçıncı haftası | 8 veya 9 (ayara göre) |
| `QUARTER` | Çeyrek (1-4) | 1 |

### 9.3 Temel Kullanım

```sql
SELECT
    id,
    adi,
    EXTRACT(WEEK FROM kayit_tarihi) AS kayit_haftasi
FROM personel_kayit;
```

**Örnek veri ve çıktı:**

| id | adi | kayit_tarihi | kayit_haftasi |
|---|---|---|---|
| 1 | Ahmet | 2026-01-15 | 3 |
| 2 | Ayşe | 2026-02-20 | 8 |
| 3 | Mehmet | 2026-02-25 | 9 |

Bu sorgu, her personelin **yılın kaçıncı haftasında** kayıt olduğunu gösterir. Hafta numarası İK raporlamasında, zaman çizelgelerinde ve dönemsel analizlerde çok kullanılır.

### 9.4 EXTRACT ile Güçlü Sorgular

**Ay bazında satış raporu:**

```sql
SELECT
    EXTRACT(MONTH FROM siparis_tarihi) AS ay,
    COUNT(*) AS siparis_sayisi,
    SUM(tutar) AS toplam_tutar
FROM siparisler
WHERE EXTRACT(YEAR FROM siparis_tarihi) = 2026
GROUP BY EXTRACT(MONTH FROM siparis_tarihi)
ORDER BY ay;
```

| ay | siparis_sayisi | toplam_tutar |
|---|---|---|
| 1 | 145 | 285000 |
| 2 | 132 | 264500 |

**Mesai saati kontrolü (saat bazında filtreleme):**

```sql
-- Mesai dışı (18:00 sonrası) yapılan işlemleri bul
SELECT *
FROM islemler
WHERE EXTRACT(HOUR FROM islem_zamani) >= 18;
```

**Doğum günü hatırlatıcı:**

```sql
-- Bu ay doğum günü olan müşteriler
SELECT ad, soyad, dogum_tarihi
FROM musteriler
WHERE EXTRACT(MONTH FROM dogum_tarihi) = EXTRACT(MONTH FROM CURDATE());
```

**Çeyreklik performans:**

```sql
SELECT
    EXTRACT(QUARTER FROM islem_tarihi) AS ceyrek,
    SUM(tutar) AS toplam
FROM satislar
WHERE EXTRACT(YEAR FROM islem_tarihi) = 2026
GROUP BY EXTRACT(QUARTER FROM islem_tarihi);
```

| ceyrek | toplam |
|---|---|
| 1 | 549500 |

---

## 10. Tüm Fonksiyonların Özet Tablosu

### Metin Fonksiyonları

| Fonksiyon | İşlevi | Örnek | Sonuç |
|---|---|---|---|
| `INSTR(metin, aranan)` | Pozisyon bulma | `INSTR('Merhaba', 'hab')` | 4 |
| `REVERSE(metin)` | Ters çevirme | `REVERSE('SQL')` | 'LQS' |

### Matematik Fonksiyonları

| Fonksiyon | İşlevi | Örnek | Sonuç |
|---|---|---|---|
| `ABS(x)` | Mutlak değer | `ABS(-42)` | 42 |
| `CEIL(x)` / `CEILING(x)` | Yukarı yuvarlama | `CEIL(4.1)` | 5 |
| `FLOOR(x)` | Aşağı yuvarlama | `FLOOR(4.9)` | 4 |
| `ROUND(x, n)` | Matematiksel yuvarlama | `ROUND(4.567, 1)` | 4.6 |
| `POWER(x, y)` / `POW(x, y)` | Üs alma | `POWER(2, 8)` | 256 |
| `SQRT(x)` | Karekök | `SQRT(81)` | 9 |
| `MOD(x, y)` | Kalan | `MOD(17, 5)` | 2 |

### Toplama (Aggregate) Fonksiyonları

| Fonksiyon | İşlevi | NULL Davranışı |
|---|---|---|
| `SUM(sutun)` | Toplam | NULL'ları atlar |
| `AVG(sutun)` | Ortalama | NULL'ları atlar (bölen azalır!) |
| `MAX(sutun)` | En büyük değer | NULL'ları atlar |
| `MIN(sutun)` | En küçük değer | NULL'ları atlar |
| `COUNT(*)` | Tüm satırları sayar | NULL satırları DA sayar |
| `COUNT(sutun)` | NULL olmayan değerleri sayar | NULL'ları atlar |
| `COUNT(DISTINCT sutun)` | Tekrarsız değerleri sayar | NULL'ları atlar |

### Tarih/Saat Fonksiyonları

| Fonksiyon | İşlevi | Örnek Çıktı |
|---|---|---|
| `CURRENT_TIMESTAMP` | Şu anki tarih + saat | 2026-02-25 13:45:30 |
| `CURDATE()` | Şu anki tarih | 2026-02-25 |
| `CURTIME()` | Şu anki saat | 13:45:30 |
| `EXTRACT(X FROM tarih)` | Tarihten bileşen çıkarma | EXTRACT(YEAR FROM ...) → 2026 |

---

## 11. Düşünme Soruları

1. `INSTR('abcabc', 'abc')` sonucu nedir? INSTR ilk eşleşmeyi mi yoksa sonuncuyu mu döndürür?

2. Aşağıdaki sorguda `AVG` sonucu kaç olur? Neden 3'e değil de 2'ye bölünür?

```sql
-- Tablo: notlar
-- id: 1, deger: 80
-- id: 2, deger: NULL
-- id: 3, deger: 60
SELECT AVG(deger) FROM notlar;
```

3. `CEIL(-3.2)` ve `FLOOR(-3.2)` sonuçları nedir? Negatif sayılarda yuvarlama yönünü kağıt üzerinde gösterin.

4. Bir `siparisler` tablosundan **Cuma günleri** verilen siparişleri nasıl bulursunuz? (İpucu: `DAYOFWEEK` veya `EXTRACT` kullanın.)

5. `COUNT(*)` ile `COUNT(email)` arasındaki fark hangi durumda ortaya çıkar? Bir örnek tablo çizerek gösterin.

6. Aşağıdaki ifadenin sonucu nedir? Adım adım hesaplayın:

```sql
SELECT ROUND(SQRT(POWER(3, 4) + POWER(4, 4)), 2);
```

{% endraw %}
