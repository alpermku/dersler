---
layout: post
title: "SQL JOIN İşlemleri: Tabloları Birleştirme Sanatı"
date: 2026-03-25 15:00:00 +0300
categories: veri-tabani-yonetim-sistemleri-ii
---

Bir veritabanında veriler **tek bir tabloda** tutulmaz. Öğrenciler bir tabloda, bölümler başka bir tabloda, dersler üçüncü bir tablodadır. Peki bu tabloları nasıl birbirine bağlarız? Cevap: **JOIN**.

JOIN, SQL'in en güçlü özelliklerinden biridir — ve aynı zamanda en çok kafa karıştıran. Ama bu dersin sonunda, JOIN'leri bir satranç oyuncusunun hamleleri gibi **sezgisel** olarak kullanıyor olacaksınız.

---

## Hazırlık: Veritabanımızı Kuralım

Önce üzerinde çalışacağımız tabloları oluşturalım. Bir üniversite veritabanı düşünün:

### Bölümler Tablosu

```sql
CREATE TABLE bolumler (
    bolum_id INT PRIMARY KEY,
    bolum_adi VARCHAR(50),
    fakulte VARCHAR(50)
);

INSERT INTO bolumler (bolum_id, bolum_adi, fakulte) VALUES
(1, 'Bilgisayar Mühendisliği', 'Mühendislik Fakültesi'),
(2, 'Elektrik Elektronik Mühendisliği', 'Mühendislik Fakültesi'),
(3, 'İşletme', 'İktisadi ve İdari Bilimler Fakültesi'),
(4, 'Psikoloji', 'Fen Edebiyat Fakültesi'),
(5, 'Makine Mühendisliği', 'Mühendislik Fakültesi');
```

| bolum_id | bolum_adi | fakulte |
|:--------:|-----------|---------|
| 1 | Bilgisayar Mühendisliği | Mühendislik Fakültesi |
| 2 | Elektrik Elektronik Müh. | Mühendislik Fakültesi |
| 3 | İşletme | İktisadi ve İdari Bilimler Fak. |
| 4 | Psikoloji | Fen Edebiyat Fakültesi |
| 5 | Makine Mühendisliği | Mühendislik Fakültesi |

### Öğrenciler Tablosu

```sql
CREATE TABLE ogrenciler (
    ogrenci_id INT PRIMARY KEY,
    ad VARCHAR(50),
    soyad VARCHAR(50),
    bolum_id INT
);

INSERT INTO ogrenciler (ogrenci_id, ad, soyad, bolum_id) VALUES
(101, 'Ahmet', 'Yılmaz', 1),
(102, 'Ayşe', 'Demir', 3),
(103, 'Mehmet', 'Kaya', 2),
(104, 'Elif', 'Çelik', 4),
(105, 'Can', 'Şahin', 5),
(106, 'Zeynep', 'Arslan', 1),
(107, 'Ali', 'Öztürk', NULL),
(108, 'Fatma', 'Koç', 99);
```

| ogrenci_id | ad | soyad | bolum_id |
|:----------:|-----|-------|:--------:|
| 101 | Ahmet | Yılmaz | 1 |
| 102 | Ayşe | Demir | 3 |
| 103 | Mehmet | Kaya | 2 |
| 104 | Elif | Çelik | 4 |
| 105 | Can | Şahin | 5 |
| 106 | Zeynep | Arslan | 1 |
| 107 | Ali | Öztürk | NULL |
| 108 | Fatma | Koç | 99 |

> **Dikkat:** Son iki öğrenciye dikkat edin. Ali'nin `bolum_id`'si **NULL** (bölümü atanmamış), Fatma'nın ise **99** (var olmayan bir bölüm). Bu "sorunlu" kayıtlar, JOIN türleri arasındaki farkları göstermek için mükemmel.

---

## INNER JOIN — "Sadece Eşleşenler"

INNER JOIN, her iki tabloda da **eşleşen** kayıtları döndürür. Eşleşmeyen? Onlar **yok sayılır**.

Bunu şöyle düşünün: bir düğün organizasyonunda davetiye listesi ve katılım listesini karşılaştırıyorsunuz. INNER JOIN size **hem davet edilmiş hem de gelmiş** olan kişileri verir.

### Örnek 1: Temel Eşleştirme

```sql
SELECT o.ad, o.soyad, b.bolum_adi
FROM ogrenciler o
INNER JOIN bolumler b ON o.bolum_id = b.bolum_id;
```

**Sonuç:**

| ad | soyad | bolum_adi |
|----|-------|-----------|
| Ahmet | Yılmaz | Bilgisayar Mühendisliği |
| Ayşe | Demir | İşletme |
| Mehmet | Kaya | Elektrik Elektronik Müh. |
| Elif | Çelik | Psikoloji |
| Can | Şahin | Makine Mühendisliği |
| Zeynep | Arslan | Bilgisayar Mühendisliği |

**6 satır.** Ama öğrenci tablomuzda 8 kişi vardı! Ali (`bolum_id = NULL`) ve Fatma (`bolum_id = 99`) sonuçta **yok** — çünkü bolumler tablosunda eşleşen bir kayıt bulunamadı.

> **`JOIN` yazmak ile `INNER JOIN` yazmak aynı şeydir.** `INNER` kelimesi varsayılandır, yazmasanız da INNER JOIN çalışır. Ama okunabilirlik için yazmak iyi bir alışkanlıktır.

### Örnek 2: Filtre ile INNER JOIN (WHERE)

Sadece Mühendislik Fakültesi öğrencilerini görelim:

```sql
SELECT o.ad, o.soyad, b.bolum_adi
FROM ogrenciler o
INNER JOIN bolumler b ON o.bolum_id = b.bolum_id
WHERE b.fakulte = 'Mühendislik Fakültesi';
```

**Sonuç:**

| ad | soyad | bolum_adi |
|----|-------|-----------|
| Ahmet | Yılmaz | Bilgisayar Mühendisliği |
| Mehmet | Kaya | Elektrik Elektronik Müh. |
| Can | Şahin | Makine Mühendisliği |
| Zeynep | Arslan | Bilgisayar Mühendisliği |

Önce JOIN eşleştirme yapıyor, sonra WHERE filtre uyguluyor. İki aşamalı bir süreç.

### Örnek 3: Sayma İşlemi (COUNT + GROUP BY)

Her bölümde kaç öğrenci var?

```sql
SELECT b.bolum_adi, COUNT(o.ogrenci_id) AS ogrenci_sayisi
FROM bolumler b
INNER JOIN ogrenciler o ON b.bolum_id = o.bolum_id
GROUP BY b.bolum_adi;
```

**Sonuç:**

| bolum_adi | ogrenci_sayisi |
|-----------|:--------------:|
| Bilgisayar Mühendisliği | 2 |
| Elektrik Elektronik Müh. | 1 |
| İşletme | 1 |
| Psikoloji | 1 |
| Makine Mühendisliği | 1 |

> **Soru:** Makine Mühendisliği 0 öğrencili olsaydı bu listede görünür müydü? **Hayır!** INNER JOIN eşleşme bulamayınca o satırı atar. 0 öğrencili bölümleri görmek için LEFT JOIN gerekir — birazdan öğreneceğiz.

### Örnek 4: Alias (Takma İsim) Kullanımı

Sütunlara ve tablolara okunabilir isimler verin:

```sql
SELECT 
    o.ad AS ogrenci_adi,
    o.soyad AS ogrenci_soyadi,
    b.bolum_adi AS bolum
FROM ogrenciler AS o
INNER JOIN bolumler AS b ON o.bolum_id = b.bolum_id;
```

`AS` anahtar kelimesi opsiyoneldir — `ogrenciler o` yazmak da aynı işi görür. Ama `AS` yazmak kodu daha okunabilir kılar.

### Örnek 5: ON İçinde Koşul (JOIN Koşulunda Filtreleme)

WHERE yerine doğrudan JOIN koşuluna filtre eklemek:

```sql
SELECT o.ad, o.soyad, b.bolum_adi
FROM ogrenciler o
INNER JOIN bolumler b 
    ON o.bolum_id = b.bolum_id
    AND b.bolum_adi = 'Bilgisayar Mühendisliği';
```

**Sonuç:**

| ad | soyad | bolum_adi |
|----|-------|-----------|
| Ahmet | Yılmaz | Bilgisayar Mühendisliği |
| Zeynep | Arslan | Bilgisayar Mühendisliği |

> **ON vs WHERE farkı:** INNER JOIN'de ikisi aynı sonucu verir. Ama LEFT JOIN'de **çok büyük fark yaratır** — bunu LEFT JOIN bölümünde göreceğiz.

### Örnek 6: Üç Tabloyu Birleştirme

Gerçek dünyada iki tablo yetmez. Bir de dersler tablosu ekleyelim:

```sql
CREATE TABLE dersler (
    ders_id INT PRIMARY KEY,
    ders_adi VARCHAR(50),
    bolum_id INT,
    kredi INT
);

INSERT INTO dersler (ders_id, ders_adi, bolum_id, kredi) VALUES
(1, 'Algoritma', 1, 4),
(2, 'Veritabanı', 1, 3),
(3, 'Devre Analizi', 2, 4),
(4, 'Muhasebe', 3, 3),
(5, 'Davranış Bilimi', 4, 2),
(6, 'Termodinamik', 5, 4);
```

Şimdi üç tabloyu birleştirelim — öğrenci, bölüm ve o bölümün dersleri:

```sql
SELECT 
    o.ad,
    o.soyad,
    b.bolum_adi,
    d.ders_adi
FROM ogrenciler o
INNER JOIN bolumler b 
    ON o.bolum_id = b.bolum_id
INNER JOIN dersler d 
    ON b.bolum_id = d.bolum_id;
```

**Sonuç:**

| ad | soyad | bolum_adi | ders_adi |
|----|-------|-----------|----------|
| Ahmet | Yılmaz | Bilgisayar Müh. | Algoritma |
| Ahmet | Yılmaz | Bilgisayar Müh. | Veritabanı |
| Zeynep | Arslan | Bilgisayar Müh. | Algoritma |
| Zeynep | Arslan | Bilgisayar Müh. | Veritabanı |
| Mehmet | Kaya | Elektrik Elektronik Müh. | Devre Analizi |
| Ayşe | Demir | İşletme | Muhasebe |
| Elif | Çelik | Psikoloji | Davranış Bilimi |
| Can | Şahin | Makine Müh. | Termodinamik |

Ahmet ve Zeynep'in **ikişer satırı** var — çünkü Bilgisayar Mühendisliği'nin 2 dersi var. JOIN, her eşleşme için ayrı bir satır üretir. Bu **kartezyen çarpım** mantığıdır.

```
Ahmet (Bilgisayar) × [Algoritma, Veritabanı] = 2 satır
Zeynep (Bilgisayar) × [Algoritma, Veritabanı] = 2 satır
Mehmet (Elektrik)   × [Devre Analizi]         = 1 satır
...
```

---

## LEFT JOIN — "Soldaki Herkes Gelsin"

İşte INNER JOIN'in yetmediği yer. Diyelim ki **tüm öğrencileri** görmek istiyorsunuz — bölümü olsun ya da olmasın. INNER JOIN, Ali ve Fatma'yı attı. LEFT JOIN onları geri getirir.

LEFT JOIN şunu der: **"Sol tablodaki (FROM'daki) TÜM kayıtları getir. Sağ tabloda eşleşme varsa göster, yoksa NULL yaz."**

### Görsel Açıklama

```
    SOL TABLO           SAĞ TABLO
   (ogrenciler)         (bolumler)
  ┌───────────┐       ┌───────────┐
  │  Ahmet  1 │───────│ 1 Bilg.   │
  │  Ayşe   3 │───────│ 3 İşletme │
  │  Mehmet 2 │───────│ 2 Elektrik│
  │  Elif   4 │───────│ 4 Psikol. │
  │  Can    5 │───────│ 5 Makine  │
  │  Zeynep 1 │───────│           │
  │  Ali  NULL│──✗    │           │  ← Eşleşme yok, NULL döner
  │  Fatma  99│──✗    │           │  ← Eşleşme yok, NULL döner
  └───────────┘       └───────────┘

  INNER JOIN → Sadece ── çizgisi olanlar (6 satır)
  LEFT JOIN  → Sol tablonun TAMAMI (8 satır)
```

### Örnek 1: Tüm Öğrenciler + Bölümleri

```sql
SELECT o.ad, o.soyad, b.bolum_adi
FROM ogrenciler o
LEFT JOIN bolumler b ON o.bolum_id = b.bolum_id;
```

**Sonuç:**

| ad | soyad | bolum_adi |
|----|-------|-----------|
| Ahmet | Yılmaz | Bilgisayar Mühendisliği |
| Ayşe | Demir | İşletme |
| Mehmet | Kaya | Elektrik Elektronik Müh. |
| Elif | Çelik | Psikoloji |
| Can | Şahin | Makine Mühendisliği |
| Zeynep | Arslan | Bilgisayar Mühendisliği |
| **Ali** | **Öztürk** | **NULL** |
| **Fatma** | **Koç** | **NULL** |

**8 satır.** Ali ve Fatma da listede — ama bölüm adları `NULL`. Bu, "öğrenci var ama bölümü yok/geçersiz" demektir.

### Örnek 2: Eşleşmeyenleri Bulmak (WHERE IS NULL)

LEFT JOIN'in en güçlü kullanımlarından biri: **eşleşmeyen kayıtları bulmak**.

Bölümü atanmamış veya geçersiz olan öğrencileri bulalım:

```sql
SELECT o.ad, o.soyad, o.bolum_id
FROM ogrenciler o
LEFT JOIN bolumler b ON o.bolum_id = b.bolum_id
WHERE b.bolum_id IS NULL;
```

**Sonuç:**

| ad | soyad | bolum_id |
|----|-------|:--------:|
| Ali | Öztürk | NULL |
| Fatma | Koç | 99 |

Bu sorgu diyor ki: "LEFT JOIN yap, ama sadece sağ tabloda eşleşme **bulunamayan** satırları göster." Veri temizliği ve doğrulama için paha biçilmez bir tekniktir.

### Örnek 3: Her Bölümün Öğrenci Sayısı (0 Dahil!)

INNER JOIN ile yaptığımız COUNT örneğini hatırlayın — 0 öğrencili bölümler listede yoktu. LEFT JOIN ile bu sorunu çözelim:

```sql
SELECT b.bolum_adi, COUNT(o.ogrenci_id) AS ogrenci_sayisi
FROM bolumler b
LEFT JOIN ogrenciler o ON b.bolum_id = o.bolum_id
GROUP BY b.bolum_adi;
```

**Sonuç:**

| bolum_adi | ogrenci_sayisi |
|-----------|:--------------:|
| Bilgisayar Mühendisliği | 2 |
| Elektrik Elektronik Müh. | 1 |
| İşletme | 1 |
| Psikoloji | 1 |
| Makine Mühendisliği | 1 |

Şu an her bölümde öğrenci var. Ama örneğin hiçbir öğrenci Psikoloji'ye kayıtlı olmasaydı, INNER JOIN o satırı atardı — LEFT JOIN ise `Psikoloji | 0` olarak gösterirdi.

> **Dikkat:** `FROM` sonrasındaki tablo **sol tablo**, `LEFT JOIN` sonrasındaki tablo **sağ tablo**dur. Hangisinin "hep görünsün" istediğinize göre tabloların sırasını ayarlayın!

### Örnek 4: ON vs WHERE Tuzağı (Kritik!)

LEFT JOIN'de filtreyi **nereye** koyduğunuz sonucu tamamen değiştirir:

```sql
-- Yöntem 1: Filtre ON'da (JOIN koşulunda)
SELECT o.ad, o.soyad, b.bolum_adi
FROM ogrenciler o
LEFT JOIN bolumler b 
    ON o.bolum_id = b.bolum_id
    AND b.fakulte = 'Mühendislik Fakültesi';
```

| ad | soyad | bolum_adi |
|----|-------|-----------|
| Ahmet | Yılmaz | Bilgisayar Mühendisliği |
| Mehmet | Kaya | Elektrik Elektronik Müh. |
| Can | Şahin | Makine Mühendisliği |
| Zeynep | Arslan | Bilgisayar Mühendisliği |
| Ayşe | Demir | **NULL** |
| Elif | Çelik | **NULL** |
| Ali | Öztürk | **NULL** |
| Fatma | Koç | **NULL** |

**8 satır** — tüm öğrenciler listede. Mühendislik dışı bölümler NULL olarak görünüyor.

```sql
-- Yöntem 2: Filtre WHERE'de
SELECT o.ad, o.soyad, b.bolum_adi
FROM ogrenciler o
LEFT JOIN bolumler b ON o.bolum_id = b.bolum_id
WHERE b.fakulte = 'Mühendislik Fakültesi';
```

| ad | soyad | bolum_adi |
|----|-------|-----------|
| Ahmet | Yılmaz | Bilgisayar Mühendisliği |
| Mehmet | Kaya | Elektrik Elektronik Müh. |
| Can | Şahin | Makine Mühendisliği |
| Zeynep | Arslan | Bilgisayar Mühendisliği |

**4 satır** — WHERE, JOIN'den sonra çalışır ve NULL olanları eler. LEFT JOIN'in amacı boşa gider!

> **Kural:** LEFT JOIN'de sağ tabloya ait filtreleri **ON**'a koyun, sol tabloya ait filtreleri **WHERE**'e koyun. Aksi halde LEFT JOIN'iniz gizlice INNER JOIN'e dönüşür.

---

## RIGHT JOIN — "Sağdaki Herkes Gelsin"

RIGHT JOIN, LEFT JOIN'in ayna görüntüsüdür. **Sağ tablodaki** (JOIN'den sonraki) tüm kayıtları getirir, sol tabloda eşleşme yoksa NULL yazar.

```
  LEFT JOIN:  Sol tablonun TAMAMI + sağdan eşleşenler
  RIGHT JOIN: Sağ tablonun TAMAMI + soldan eşleşenler
```

### Örnek 1: Tüm Bölümler + Öğrencileri

```sql
SELECT o.ad, o.soyad, b.bolum_adi
FROM ogrenciler o
RIGHT JOIN bolumler b ON o.bolum_id = b.bolum_id;
```

**Sonuç:**

| ad | soyad | bolum_adi |
|----|-------|-----------|
| Ahmet | Yılmaz | Bilgisayar Mühendisliği |
| Zeynep | Arslan | Bilgisayar Mühendisliği |
| Mehmet | Kaya | Elektrik Elektronik Müh. |
| Ayşe | Demir | İşletme |
| Elif | Çelik | Psikoloji |
| Can | Şahin | Makine Mühendisliği |

Tüm bölümler listede. Eğer bir bölümde hiç öğrenci olmasaydı, o bölüm `NULL | NULL | Bölüm Adı` şeklinde görünürdü.

> Ama Ali ve Fatma listede **yok** — çünkü RIGHT JOIN sağ tabloyu (bolumler) korur, sol tablodaki eşleşmeyenleri atar.

### Örnek 2: Öğrencisi Olmayan Bölümleri Bulmak

```sql
SELECT b.bolum_adi
FROM ogrenciler o
RIGHT JOIN bolumler b ON o.bolum_id = b.bolum_id
WHERE o.ogrenci_id IS NULL;
```

Eğer öğrencisi olmayan bir bölüm olsaydı (örneğin Makine'de kimse kayıtlı olmasaydı), burada listelenirdi. Şu anki verimizde her bölümde en az 1 öğrenci olduğu için sonuç boş döner.

### Örnek 3: Fakülte Bazında Bölüm ve Öğrenci Listesi

```sql
SELECT b.fakulte, b.bolum_adi, o.ad, o.soyad
FROM ogrenciler o
RIGHT JOIN bolumler b ON o.bolum_id = b.bolum_id
ORDER BY b.fakulte, b.bolum_adi;
```

Bu sorgu tüm bölümleri fakültelerine göre sıralar ve varsa öğrencilerini gösterir.

### LEFT JOIN vs RIGHT JOIN: Aynı Sonuç, Farklı Perspektif

Aslında her RIGHT JOIN, tabloların sırasını değiştirerek LEFT JOIN olarak yazılabilir:

```sql
-- Bu RIGHT JOIN...
SELECT o.ad, b.bolum_adi
FROM ogrenciler o
RIGHT JOIN bolumler b ON o.bolum_id = b.bolum_id;

-- ...bu LEFT JOIN ile AYNI sonucu verir:
SELECT o.ad, b.bolum_adi
FROM bolumler b
LEFT JOIN ogrenciler o ON b.bolum_id = o.bolum_id;
```

> **Pratikte:** Çoğu geliştirici sadece **LEFT JOIN** kullanır ve tablo sırasını ayarlar. RIGHT JOIN daha az yaygındır ama sınavda mutlaka bilin!

---

## FULL OUTER JOIN — "Herkes Gelsin, Kimsesiz Kalmasın"

FULL OUTER JOIN, her iki tablodaki **tüm kayıtları** getirir. Eşleşme yoksa karşı tarafta NULL yazar. LEFT ve RIGHT JOIN'in **birleşimidir**.

```
INNER JOIN → Sadece eşleşenler
LEFT JOIN  → Sol hepsi + sağdan eşleşenler
RIGHT JOIN → Sağ hepsi + soldan eşleşenler
FULL OUTER → Herkes — eşleşsin ya da eşleşmesin
```

### Görsel

```
    ogrenciler              bolumler
  ┌───────────┐          ┌───────────┐
  │ Ahmet   1 │──────────│ 1 Bilg.   │  ← Her iki tabloda var
  │ Ayşe    3 │──────────│ 3 İşletme │
  │ Ali  NULL │          │           │  ← Sadece solda
  │ Fatma  99 │          │           │  ← Sadece solda
  │           │          │ 6 Tarih   │  ← Sadece sağda (varsayalım)
  └───────────┘          └───────────┘

  FULL OUTER JOIN → HEPSİ (eşleşen + sadece solda + sadece sağda)
```

### Örnek 1: Tüm Öğrenciler ve Tüm Bölümler

```sql
-- MySQL'de FULL OUTER JOIN doğrudan desteklenmez!
-- Alternatif: LEFT JOIN UNION RIGHT JOIN

SELECT o.ad, o.soyad, b.bolum_adi
FROM ogrenciler o
LEFT JOIN bolumler b ON o.bolum_id = b.bolum_id

UNION

SELECT o.ad, o.soyad, b.bolum_adi
FROM ogrenciler o
RIGHT JOIN bolumler b ON o.bolum_id = b.bolum_id;
```

> ⚠️ **MySQL notu:** MySQL, `FULL OUTER JOIN` sözdizimini **desteklemez!** Yukarıdaki `UNION` yöntemi aynı sonucu verir. PostgreSQL ve SQL Server'da doğrudan `FULL OUTER JOIN` yazabilirsiniz.

**PostgreSQL/SQL Server sözdizimi:**

```sql
SELECT o.ad, o.soyad, b.bolum_adi
FROM ogrenciler o
FULL OUTER JOIN bolumler b ON o.bolum_id = b.bolum_id;
```

**Sonuç:**

| ad | soyad | bolum_adi |
|----|-------|-----------|
| Ahmet | Yılmaz | Bilgisayar Mühendisliği |
| Ayşe | Demir | İşletme |
| Mehmet | Kaya | Elektrik Elektronik Müh. |
| Elif | Çelik | Psikoloji |
| Can | Şahin | Makine Mühendisliği |
| Zeynep | Arslan | Bilgisayar Mühendisliği |
| Ali | Öztürk | **NULL** |
| Fatma | Koç | **NULL** |

Eğer öğrencisi olmayan bir bölüm olsaydı, o da `NULL | NULL | Bölüm Adı` şeklinde görünürdü.

### Örnek 2: Eşleşmeyen Tüm Kayıtları Bulma

Hem bölümsüz öğrencileri hem öğrencisiz bölümleri tek sorguda bulmak:

```sql
SELECT o.ad, o.soyad, b.bolum_adi
FROM ogrenciler o
LEFT JOIN bolumler b ON o.bolum_id = b.bolum_id
WHERE b.bolum_id IS NULL

UNION

SELECT o.ad, o.soyad, b.bolum_adi
FROM ogrenciler o
RIGHT JOIN bolumler b ON o.bolum_id = b.bolum_id
WHERE o.ogrenci_id IS NULL;
```

Bu sorgu, veritabanındaki **tüm "öksüz" kayıtları** bulur — veri bütünlüğü kontrolü için mükemmeldir.

### Örnek 3: Tam Durum Raporu

```sql
SELECT 
    COALESCE(o.ad, '—') AS ogrenci,
    COALESCE(b.bolum_adi, 'Bölüm Atanmamış') AS bolum,
    CASE
        WHEN o.ogrenci_id IS NOT NULL AND b.bolum_id IS NOT NULL 
            THEN 'Eşleşti'
        WHEN o.ogrenci_id IS NOT NULL AND b.bolum_id IS NULL 
            THEN 'Bölümsüz Öğrenci'
        WHEN o.ogrenci_id IS NULL AND b.bolum_id IS NOT NULL 
            THEN 'Öğrencisiz Bölüm'
    END AS durum
FROM ogrenciler o
LEFT JOIN bolumler b ON o.bolum_id = b.bolum_id

UNION

SELECT 
    COALESCE(o.ad, '—'),
    COALESCE(b.bolum_adi, 'Bölüm Atanmamış'),
    CASE
        WHEN o.ogrenci_id IS NULL AND b.bolum_id IS NOT NULL 
            THEN 'Öğrencisiz Bölüm'
    END
FROM ogrenciler o
RIGHT JOIN bolumler b ON o.bolum_id = b.bolum_id
WHERE o.ogrenci_id IS NULL;
```

> **`COALESCE(a, b)`** fonksiyonu: `a` NULL ise `b`'yi döndürür. NULL değerleri kullanıcı dostu metinlerle değiştirmek için kullanılır.

---

## Büyük Karşılaştırma Tablosu

| JOIN Türü | Sol Tablo | Sağ Tablo | Eşleşme Yoksa |
|-----------|:---------:|:---------:|----------------|
| **INNER JOIN** | Sadece eşleşenler | Sadece eşleşenler | Satır **atılır** |
| **LEFT JOIN** | **Tüm** kayıtlar | Sadece eşleşenler | Sağ taraf **NULL** |
| **RIGHT JOIN** | Sadece eşleşenler | **Tüm** kayıtlar | Sol taraf **NULL** |
| **FULL OUTER** | **Tüm** kayıtlar | **Tüm** kayıtlar | Karşı taraf **NULL** |

---

## CROSS JOIN — Bonus: Kartezyen Çarpım

Eşleştirme koşulu **olmadan** iki tabloyu birleştirmek:

```sql
SELECT o.ad, b.bolum_adi
FROM ogrenciler o
CROSS JOIN bolumler b;
```

Bu, her öğrenciyi her bölümle eşleştirir: 8 öğrenci × 5 bölüm = **40 satır**. Pratikte nadiren kullanılır, ama test verisi üretmek veya kombinasyon listesi oluşturmak için işe yarar.

---

## Ne Zaman Hangi JOIN?

| Senaryo | Kullanılacak JOIN |
|---------|-------------------|
| Sadece eşleşen kayıtları göster | `INNER JOIN` |
| Tüm öğrencileri göster (bölümsüzler dahil) | `LEFT JOIN` (öğrenciler solda) |
| Tüm bölümleri göster (öğrencisizler dahil) | `LEFT JOIN` (bölümler solda) veya `RIGHT JOIN` |
| Eşleşmeyen kayıtları bul | `LEFT JOIN` + `WHERE ... IS NULL` |
| Her iki taraftaki tüm kayıtlar | `FULL OUTER JOIN` |
| Her kombinasyonu üret | `CROSS JOIN` |

---

## Özet

- **INNER JOIN**: İki tabloda eşleşen kayıtları birleştirir. Eşleşmeyenler atılır.
- **LEFT JOIN**: Sol tablonun tamamını korur. Sağda eşleşme yoksa NULL döner. Eşleşmeyenleri bulmak için `WHERE ... IS NULL` ile güçlü bir araç.
- **RIGHT JOIN**: LEFT JOIN'in ayna görüntüsü. Pratikte tablo sırasını değiştirip LEFT JOIN yazmak daha yaygın.
- **FULL OUTER JOIN**: Her iki tablonun tamamını getirir. MySQL'de `UNION` ile simüle edilir.
- **ON vs WHERE farkı**: INNER JOIN'de fark etmez; LEFT JOIN'de **hayati** fark yaratır — filtreyi yanlış yere koymak LEFT JOIN'i INNER JOIN'e dönüştürür.
- Üç veya daha fazla tablo birleştirmek için JOIN'ler **zincirlenir**: `FROM a JOIN b ON ... JOIN c ON ...`
