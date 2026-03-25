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
| Aynı isimdeki sütunlarla otomatik eşleştir | `NATURAL JOIN` |
| Tabloyu kendisiyle birleştir | `SELF JOIN` |

---

## NATURAL JOIN — "Otomatik Eşleştirme"

NATURAL JOIN, iki tabloda **aynı isimdeki sütunları** otomatik olarak bulur ve onlar üzerinden eşleştirme yapar. `ON` koşulu yazmaya gerek yoktur — SQL bunu sizin yerinize çözer.

```sql
SELECT o.ad, o.soyad, b.bolum_adi
FROM ogrenciler o
NATURAL JOIN bolumler b;
```

Bu sorgu, `ogrenciler` ve `bolumler` tablolarında ortak olan `bolum_id` sütununu **otomatik tespit eder** ve şunu yazmışsınız gibi davranır:

```sql
-- NATURAL JOIN'in arka planda yaptığı iş:
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

### NATURAL JOIN'in Tuzağı

Kulağa harika geliyor değil mi? Ama **profesyonel projelerde tehlikeli** kabul edilir. Neden?

Diyelim ki ileride `ogrenciler` tablosuna `ad` adında olmasa bile `fakulte` adında bir sütun eklediniz. `bolumler` tablosunda da `fakulte` var. NATURAL JOIN artık **iki sütun** üzerinden eşleştirme yapar — `bolum_id` VE `fakulte` — ve sonuçlar tamamen değişir. Siz hiçbir sorguyu değiştirmediniz, ama sonuçlar yanlış çıkar.

| Özellik | NATURAL JOIN | Açık JOIN (ON ile) |
|---------|:---:|:---:|
| `ON` koşulu gerekir mi? | ❌ Otomatik | ✅ Siz yazarsınız |
| Okunabilirlik | ❌ Hangi sütunla eşleştiği belirsiz | ✅ Açıkça görülür |
| Tablo değişikliğine dayanıklılık | ❌ Yeni sütun eklenmesi sonucu bozar | ✅ Etkilenmez |
| Öğrenme amaçlı | ✅ Basit ve hızlı | — |
| Üretim kodunda | ⚠️ Önerilmez | ✅ Her zaman tercih edin |

> **Kural:** NATURAL JOIN'i **bilmek** önemli — sınavda çıkabilir. Ama gerçek projelerde **her zaman** `ON` koşulunu açıkça yazın. "Açık olmak, akıllı olmaktan iyidir."

---

## SELF JOIN — "Tablo Kendisiyle Buluşuyor"

Şimdiye kadar hep **iki farklı tabloyu** birleştirdik. Peki bir tabloyu **kendisiyle** birleştirmek ne işe yarar? Kulağa tuhaf geliyor, ama gerçek dünyada çok yaygın bir ihtiyaç.

Şöyle düşünün: Bir şirkette her çalışanın bir yöneticisi var. Ama yönetici de aynı tabloda bir çalışan. "Ahmet'in yöneticisi kim?" sorusunu cevaplamak için çalışanlar tablosunu **kendisiyle** birleştirmek gerekir.

### Senaryo: Çalışan-Yönetici İlişkisi

```sql
CREATE TABLE calisanlar (
    calisan_id INT PRIMARY KEY,
    ad VARCHAR(50),
    soyad VARCHAR(50),
    pozisyon VARCHAR(50),
    yonetici_id INT
);

INSERT INTO calisanlar VALUES
(1, 'Kemal', 'Özkan', 'Genel Müdür', NULL),
(2, 'Selin', 'Aydın', 'Yazılım Müdürü', 1),
(3, 'Burak', 'Tekin', 'Kıdemli Geliştirici', 2),
(4, 'Deniz', 'Çetin', 'Junior Geliştirici', 2),
(5, 'Aylin', 'Koç', 'İK Müdürü', 1),
(6, 'Emre', 'Sarı', 'İK Uzmanı', 5),
(7, 'Canan', 'Bal', 'Stajyer', 3);
```

| calisan_id | ad | soyad | pozisyon | yonetici_id |
|:---:|------|-------|----------|:---:|
| 1 | Kemal | Özkan | Genel Müdür | NULL |
| 2 | Selin | Aydın | Yazılım Müdürü | 1 |
| 3 | Burak | Tekin | Kıdemli Geliştirici | 2 |
| 4 | Deniz | Çetin | Junior Geliştirici | 2 |
| 5 | Aylin | Koç | İK Müdürü | 1 |
| 6 | Emre | Sarı | İK Uzmanı | 5 |
| 7 | Canan | Bal | Stajyer | 3 |

Dikkat: `yonetici_id` sütunu, **aynı tablodaki** başka bir `calisan_id`'ye işaret ediyor. Kemal'in yöneticisi yok (`NULL`) — çünkü o en tepedeki kişi.

### Örnek 1: Her Çalışanın Yöneticisini Gösterme

```sql
SELECT 
    c.ad AS calisan_adi,
    c.pozisyon AS calisan_pozisyon,
    y.ad AS yonetici_adi,
    y.pozisyon AS yonetici_pozisyon
FROM calisanlar c
LEFT JOIN calisanlar y ON c.yonetici_id = y.calisan_id;
```

**Sonuç:**

| calisan_adi | calisan_pozisyon | yonetici_adi | yonetici_pozisyon |
|-------------|-----------------|--------------|-------------------|
| Kemal | Genel Müdür | **NULL** | **NULL** |
| Selin | Yazılım Müdürü | Kemal | Genel Müdür |
| Burak | Kıdemli Geliştirici | Selin | Yazılım Müdürü |
| Deniz | Junior Geliştirici | Selin | Yazılım Müdürü |
| Aylin | İK Müdürü | Kemal | Genel Müdür |
| Emre | İK Uzmanı | Aylin | İK Müdürü |
| Canan | Stajyer | Burak | Kıdemli Geliştirici |

**Aynı tabloyu iki kez kullanıyoruz** — biri `c` (çalışan olarak), diğeri `y` (yönetici olarak). SQL bunu iki farklı tablo gibi görür. `LEFT JOIN` kullandık çünkü Kemal'in yöneticisi yok — `INNER JOIN` kullansaydık Kemal listede olmazdı.

> **Self Join'in sırrı alias'larda gizli:** Aynı tabloyu farklı takma isimlerle (`c` ve `y`) çağırmak, SQL'e "bu tabloyu iki farklı perspektiften oku" demektir.

### Örnek 2: Belirli Bir Yöneticinin Ekibini Bulmak

Selin'e bağlı çalışanlar kimler?

```sql
SELECT 
    c.ad AS calisan,
    c.pozisyon
FROM calisanlar c
INNER JOIN calisanlar y ON c.yonetici_id = y.calisan_id
WHERE y.ad = 'Selin';
```

**Sonuç:**

| calisan | pozisyon |
|---------|----------|
| Burak | Kıdemli Geliştirici |
| Deniz | Junior Geliştirici |

### Örnek 3: Kaç Kişi Yönetiyorsun?

Her yöneticinin altında kaç çalışan var?

```sql
SELECT 
    y.ad AS yonetici,
    y.pozisyon,
    COUNT(c.calisan_id) AS ekip_buyuklugu
FROM calisanlar c
INNER JOIN calisanlar y ON c.yonetici_id = y.calisan_id
GROUP BY y.calisan_id, y.ad, y.pozisyon
ORDER BY ekip_buyuklugu DESC;
```

**Sonuç:**

| yonetici | pozisyon | ekip_buyuklugu |
|----------|----------|:-:|
| Kemal | Genel Müdür | 2 |
| Selin | Yazılım Müdürü | 2 |
| Burak | Kıdemli Geliştirici | 1 |
| Aylin | İK Müdürü | 1 |

### Örnek 4: Aynı Yöneticiye Bağlı Çalışma Arkadaşları

Deniz'in aynı yöneticiye bağlı meslektaşları kimler?

```sql
SELECT 
    arkadaslar.ad AS meslek_dasi,
    arkadaslar.pozisyon
FROM calisanlar ben
INNER JOIN calisanlar arkadaslar 
    ON ben.yonetici_id = arkadaslar.yonetici_id
    AND ben.calisan_id != arkadaslar.calisan_id
WHERE ben.ad = 'Deniz';
```

**Sonuç:**

| meslek_dasi | pozisyon |
|-------------|----------|
| Burak | Kıdemli Geliştirici |

`AND ben.calisan_id != arkadaslar.calisan_id` koşulu önemli — yoksa Deniz kendini de "arkadaş" olarak bulur!

### SELF JOIN Nerelerde Kullanılır?

| Senaryo | İlişki |
|---------|--------|
| Çalışan → Yönetici | `yonetici_id → calisan_id` |
| Kategori → Üst Kategori | `ust_kategori_id → kategori_id` |
| Arkadaşlık ilişkisi | `kullanici1_id, kullanici2_id` |
| Ürün karşılaştırma | Aynı kategorideki farklı ürünler |
| Uçuş rotası | Kalkış şehri → Varış şehri (aynı şehirler tablosu) |

> **Özet:** SELF JOIN, bir tablonun kendisiyle **hiyerarşik** (ağaç yapısı) veya **ilişkisel** (eşleştirme) bir bağ kurması gerektiğinde kullanılır. Farklı alias'lar vererek aynı tabloyu iki farklı rolde kullanırsınız.

---

## Ortak Sütunu Olmayan Tabloları Birleştirme — Non-Equi JOIN

Şimdiye kadar tüm JOIN'lerde eşleştirme koşulu hep **eşitlik** (`=`) üzerindeydi: `ON o.bolum_id = b.bolum_id`. Peki ya iki tablo arasında ortak bir sütun yoksa? Eşleştirme eşitlikle değil, bir **aralık kontrolü** ile yapılacaksa?

İşte gerçek dünyadan mükemmel bir örnek: **Öğrenci notlarını harf notuna çevirmek.**

### Senaryo: Not Tabloları

Elimizde iki tablo var — ve aralarında **hiçbir ortak sütun** yok:

**`ogr_notlar` Tablosu** — Öğrencilerin sayısal notları:

```sql
CREATE TABLE ogr_notlar (
    ogr_no VARCHAR(10),
    ders VARCHAR(30),
    notu INT
);

INSERT INTO ogr_notlar VALUES
('09001', 'Matematik', 75),
('09002', 'Matematik', 53),
('09003', 'Matematik', 46),
('09004', 'Matematik', 77),
('09005', 'Matematik', 65),
('09006', 'Matematik', 56),
('09007', 'Matematik', 90),
('09008', 'Matematik', 25),
('09009', 'Matematik', 72),
('09010', 'Matematik', 64),
('09011', 'Matematik', 82);
```

| ogr_no | ders | notu |
|:------:|------|:----:|
| 09001 | Matematik | 75 |
| 09002 | Matematik | 53 |
| 09003 | Matematik | 46 |
| 09004 | Matematik | 77 |
| 09005 | Matematik | 65 |
| 09006 | Matematik | 56 |
| 09007 | Matematik | 90 |
| 09008 | Matematik | 25 |
| 09009 | Matematik | 72 |
| 09010 | Matematik | 64 |
| 09011 | Matematik | 82 |

**`notlar` Tablosu** — Harf notu aralıkları:

```sql
CREATE TABLE notlar (
    h_kar VARCHAR(5),
    ilk INT,
    son INT
);

INSERT INTO notlar VALUES
('AA', 84, 100),
('AB', 77, 83),
('BA', 71, 76),
('BB', 66, 70),
('BC', 61, 65),
('CB', 56, 60),
('CC', 50, 55),
('CD', 46, 49),
('DC', 40, 45),
('DD', 33, 39),
('FF', 0, 32);
```

| h_kar | ilk | son |
|:-----:|:---:|:---:|
| AA | 84 | 100 |
| AB | 77 | 83 |
| BA | 71 | 76 |
| BB | 66 | 70 |
| BC | 61 | 65 |
| CB | 56 | 60 |
| CC | 50 | 55 |
| CD | 46 | 49 |
| DC | 40 | 45 |
| DD | 33 | 39 |
| FF | 0 | 32 |

Şimdi soruyu soralım: `ogr_notlar` tablosunda `notu` var, `notlar` tablosunda `ilk` ve `son` var. Aralarında **eşitlik ilişkisi yok** — ama bir sayısal notun hangi **aralığa düştüğünü** bulmamız gerekiyor.

### Çözüm: BETWEEN ile JOIN

```sql
SELECT onot.ogr_no, onot.ders, dn.h_kar
FROM ogr_notlar onot, notlar dn
WHERE onot.notu BETWEEN dn.ilk AND dn.son;
```

Bu sorgu, `ogr_notlar` tablosundaki her öğrencinin `notu` değerini alır ve `notlar` tablosundaki hangi `ilk`-`son` aralığına düştüğünü kontrol eder. **Eşitlik yerine aralık** kontrolü yapılır — buna **Non-Equi JOIN** denir.

**Sonuç:**

| ogr_no | ders | h_kar |
|:------:|------|:-----:|
| 09001 | Matematik | BA |
| 09002 | Matematik | CC |
| 09003 | Matematik | CD |
| 09004 | Matematik | AB |
| 09005 | Matematik | BC |
| 09006 | Matematik | CB |
| 09007 | Matematik | AA |
| 09008 | Matematik | FF |
| 09009 | Matematik | BA |
| 09010 | Matematik | BC |
| 09011 | Matematik | AB |

75 puan alan 09001 → BA (71-76 aralığı), 25 puan alan 09008 → FF (0-32 aralığı). Her not, doğru harf karşılığını buldu.

### Aynı Sorguyu Modern JOIN Sözdizimi ile Yazmak

Yukarıdaki sorgu **eski sözdizimi** kullanıyor (FROM'da virgülle iki tablo, WHERE'de koşul). Aynı işi modern `JOIN ... ON` ile yapmak daha okunabilir:

```sql
SELECT onot.ogr_no, onot.ders, dn.h_kar
FROM ogr_notlar onot
JOIN notlar dn ON onot.notu BETWEEN dn.ilk AND dn.son;
```

İkisi de aynı sonucu verir. Ama `JOIN ... ON` sözdizimi, **birleştirme koşulunu filtreleme koşulundan ayırdığı için** daha net ve bakımı kolaydır.

### Örnek 2: Notu ve Harf Karşılığını Birlikte Gösterme

```sql
SELECT 
    onot.ogr_no,
    onot.ders,
    onot.notu,
    dn.h_kar,
    CASE 
        WHEN dn.h_kar IN ('AA', 'AB', 'BA', 'BB') THEN 'Geçti (İyi)'
        WHEN dn.h_kar IN ('BC', 'CB', 'CC') THEN 'Geçti'
        WHEN dn.h_kar IN ('CD', 'DC') THEN 'Koşullu Geçti'
        ELSE 'Kaldı'
    END AS durum
FROM ogr_notlar onot
JOIN notlar dn ON onot.notu BETWEEN dn.ilk AND dn.son
ORDER BY onot.notu DESC;
```

**Sonuç:**

| ogr_no | ders | notu | h_kar | durum |
|:------:|------|:----:|:-----:|-------|
| 09007 | Matematik | 90 | AA | Geçti (İyi) |
| 09011 | Matematik | 82 | AB | Geçti (İyi) |
| 09004 | Matematik | 77 | AB | Geçti (İyi) |
| 09001 | Matematik | 75 | BA | Geçti (İyi) |
| 09009 | Matematik | 72 | BA | Geçti (İyi) |
| 09005 | Matematik | 65 | BC | Geçti |
| 09010 | Matematik | 64 | BC | Geçti |
| 09006 | Matematik | 56 | CB | Geçti |
| 09002 | Matematik | 53 | CC | Geçti |
| 09003 | Matematik | 46 | CD | Koşullu Geçti |
| 09008 | Matematik | 25 | FF | Kaldı |

### Örnek 3: Sınıfın Harf Notu Dağılımı

```sql
SELECT 
    dn.h_kar,
    COUNT(onot.ogr_no) AS ogrenci_sayisi
FROM notlar dn
LEFT JOIN ogr_notlar onot ON onot.notu BETWEEN dn.ilk AND dn.son
GROUP BY dn.h_kar
ORDER BY dn.ilk DESC;
```

**Sonuç:**

| h_kar | ogrenci_sayisi |
|:-----:|:-:|
| AA | 1 |
| AB | 2 |
| BA | 2 |
| BB | 0 |
| BC | 2 |
| CB | 1 |
| CC | 1 |
| CD | 1 |
| DC | 0 |
| DD | 0 |
| FF | 1 |

LEFT JOIN kullandık — hiç öğrenci düşmeyen harf notları da (BB, DC, DD) listede **0** olarak görünüyor. INNER JOIN kullansaydık bu satırlar kaybolurdu.

### Non-Equi JOIN Ne Zaman Kullanılır?

| Senaryo | Koşul |
|---------|-------|
| Not → Harf notu çevirme | `BETWEEN ilk AND son` |
| Maaş → Vergi dilimi bulma | `BETWEEN alt_sinir AND ust_sinir` |
| Yaş → Yaş grubu eşleme | `BETWEEN min_yas AND max_yas` |
| Tarih → Dönem belirleme | `BETWEEN baslangic AND bitis` |
| Fiyat → İndirim oranı bulma | `BETWEEN min_tutar AND max_tutar` |

> **Anahtar kavram:** `ON` koşulunda sadece `=` kullanmak zorunda değilsiniz. `BETWEEN`, `<`, `>`, `<=`, `>=` ve hatta `<>` (eşit değil) de kullanılabilir. Eşitlik dışı koşullarla yapılan JOIN'lere **Non-Equi JOIN** denir ve ortak sütunu olmayan tabloları birleştirmenin en yaygın yoludur.

---

## Özet

- **INNER JOIN**: İki tabloda eşleşen kayıtları birleştirir. Eşleşmeyenler atılır.
- **LEFT JOIN**: Sol tablonun tamamını korur. Sağda eşleşme yoksa NULL döner. Eşleşmeyenleri bulmak için `WHERE ... IS NULL` ile güçlü bir araç.
- **RIGHT JOIN**: LEFT JOIN'in ayna görüntüsü. Pratikte tablo sırasını değiştirip LEFT JOIN yazmak daha yaygın.
- **FULL OUTER JOIN**: Her iki tablonun tamamını getirir. MySQL'de `UNION` ile simüle edilir.
- **ON vs WHERE farkı**: INNER JOIN'de fark etmez; LEFT JOIN'de **hayati** fark yaratır — filtreyi yanlış yere koymak LEFT JOIN'i INNER JOIN'e dönüştürür.
- **NATURAL JOIN**: Aynı isimdeki sütunları otomatik eşleştirir — pratik ama kırılgan, üretim kodunda önerilmez.
- **SELF JOIN**: Tabloyu kendisiyle birleştirir — çalışan-yönetici, kategori-üst kategori gibi hiyerarşik yapılarda kullanılır.
- **Non-Equi JOIN**: Ortak sütunu olmayan tabloları `BETWEEN`, `<`, `>` gibi koşullarla birleştirir — not-harf dönüşümü, vergi dilimi gibi aralık eşleştirmelerinde kullanılır.
- Üç veya daha fazla tablo birleştirmek için JOIN'ler **zincirlenir**: `FROM a JOIN b ON ... JOIN c ON ...`
