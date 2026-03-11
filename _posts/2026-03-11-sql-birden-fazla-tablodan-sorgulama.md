---
layout: post
title: "SQL'de Birden Fazla Tablodan Sorgulama: Tabloları Birleştirmek"
date: 2026-03-11 16:00:00 +0300
categories: veri-tabani-yonetim-sistemleri-ii
---

Şimdiye kadar hep tek bir tablo üzerinde çalıştık. Ama gerçek dünyada veriler **tek tabloda tutulmaz**. Bir üniversite veritabanında öğrenci bilgileri bir tabloda, bölüm bilgileri başka bir tabloda, dersler üçüncü bir tablodadır. Peki bu tablolardaki verileri bir arada nasıl sorgularız?

İşte bu derste **birden fazla tabloyu birleştirerek** sorgulama yapmayı öğreneceğiz.

---

## 1. Neden Birden Fazla Tablo?

Diyelim ki tüm bilgileri tek tabloda tutmaya çalıştık:

```
| ogr_no | adsoyad      | bolum_id | bolum_adi                   |
|--------|-------------|----------|-----------------------------|
| 09001  | Ahmet Demir | 1        | İşletme                     |
| 09002  | Büşra Uçar  | 1        | İşletme                     |
| 09003  | Fuat Cebe   | 3        | Maliye                      |
```

Sorun nerede?

### Veri Tekrarı (Redundancy)

"İşletme" kelimesi **iki kez** yazılmış. 500 İşletme öğrencisi olsa, "İşletme" 500 kez tekrarlanacak. Bu:

- **Depolama israfı** — aynı veri gereksiz yere yer kaplar
- **Güncelleme riski** — bölüm adı değişirse 500 satırı tek tek güncellemek gerekir
- **Tutarsızlık tehlikesi** — bazı satırlarda "İşletme", bazılarında "işletme" veya "Isletme" yazılabilir

### Çözüm: Tabloları Ayırmak (Normalizasyon)

Veritabanı tasarımında bu sorunu çözmek için veriler **ilişkili tablolara** ayrılır. Bu işleme **normalizasyon** denir.

```
ogrenciler tablosu:              bolumler tablosu:
| ogr_no | adsoyad    | bolum_id |    | bolum_id | bolum_adi  |
|--------|-----------|----------|    |----------|------------|
| 09001  | Ahmet     | 1        |    | 1        | İşletme    |
| 09002  | Büşra     | 1        |    | 2        | YBS        |
| 09003  | Fuat      | 3        |    | 3        | Maliye     |
         │                                 ↑
         └──── bolum_id ile bağlantı ─────┘
```

"İşletme" artık **tek bir yerde** yazılı. 500 öğrencinin hepsi sadece `bolum_id = 1` değerini tutuyor. Bölüm adı değişirse, **tek bir satırı** güncellemek yeterli.

Ama şimdi yeni bir sorun var: "Ahmet Demir hangi bölümde?" sorusuna cevap vermek için **iki tabloya birden** bakmak gerekiyor. İşte burada tablolar arası sorgulama devreye girer.

---

## 2. Çalışma Tabloları

```sql
CREATE TABLE ogrenciler (
    ogr_no VARCHAR(10),
    adsoyad VARCHAR(100),
    bolum_id INT
);

CREATE TABLE bolumler (
    bolum_id INT,
    bolum_adi VARCHAR(50)
);

INSERT INTO ogrenciler (ogr_no, adsoyad, bolum_id) VALUES 
('09001', 'Ahmet Demir', 1),
('09002', 'Büşra Uçar', 1),
('09003', 'Fuat Cebe', 3);

INSERT INTO bolumler (bolum_id, bolum_adi) VALUES
(1, 'İşletme'),
(2, 'Yönetim Bilişim Sistemleri'),
(3, 'Maliye');
```

### ogrenciler tablosu

| ogr_no | adsoyad | bolum_id |
|--------|---------|----------|
| 09001 | Ahmet Demir | 1 |
| 09002 | Büşra Uçar | 1 |
| 09003 | Fuat Cebe | 3 |

### bolumler tablosu

| bolum_id | bolum_adi |
|----------|-----------|
| 1 | İşletme |
| 2 | Yönetim Bilişim Sistemleri |
| 3 | Maliye |

**Dikkat:** `bolumler` tablosunda `bolum_id = 2` (YBS) var ama hiçbir öğrenci bu bölümde değil. Ve hiçbir öğrencinin `bolum_id`'si 2 değil. Bu detay birazdan önemli olacak.

---

## 3. Tabloları Tek Tek Sorgulamak

Her tabloyu ayrı ayrı sorguladığımızda:

```sql
SELECT * FROM ogrenciler;
```

| ogr_no | adsoyad | bolum_id |
|--------|---------|----------|
| 09001 | Ahmet Demir | 1 |
| 09002 | Büşra Uçar | 1 |
| 09003 | Fuat Cebe | 3 |

```sql
SELECT * FROM bolumler;
```

| bolum_id | bolum_adi |
|----------|-----------|
| 1 | İşletme |
| 2 | Yönetim Bilişim Sistemleri |
| 3 | Maliye |

Her iki tablo da kendi başına bilgi verir. Ama "Ahmet Demir hangi bölümde?" sorusuna cevap vermek için iki tabloyu **birleştirmemiz** gerekir.

---

## 4. Cartesian Product — İki Tabloyu Koşulsuz Birleştirmek

İki tabloyu `FROM`'a birlikte yazıp `WHERE` koşulu **koymazsak** ne olur?

```sql
SELECT * FROM ogrenciler, bolumler;
```

**Sonuç:**

| ogr_no | adsoyad | bolum_id | bolum_id | bolum_adi |
|--------|---------|----------|----------|-----------|
| 09001 | Ahmet Demir | 1 | 1 | İşletme |
| 09001 | Ahmet Demir | 1 | 2 | Yönetim Bilişim Sistemleri |
| 09001 | Ahmet Demir | 1 | 3 | Maliye |
| 09002 | Büşra Uçar | 1 | 1 | İşletme |
| 09002 | Büşra Uçar | 1 | 2 | Yönetim Bilişim Sistemleri |
| 09002 | Büşra Uçar | 1 | 3 | Maliye |
| 09003 | Fuat Cebe | 3 | 1 | İşletme |
| 09003 | Fuat Cebe | 3 | 2 | Yönetim Bilişim Sistemleri |
| 09003 | Fuat Cebe | 3 | 3 | Maliye |

**9 satır!** Her öğrenci her bölümle eşleştirildi. Buna **Kartezyen çarpım (Cartesian product)** denir.

**Formül:** `3 öğrenci × 3 bölüm = 9 kombinasyon`

Bu sonuç tamamen **anlamsızdır**. Ahmet Demir Maliye bölümünde değil — ama Kartezyen çarpım bunu bilmiyor, körü körüne her satırı birbiriyle eşleştiriyor.

```
Kartezyen çarpım = Her şeyi her şeyle eşleştir
                 = Anlamsız kombinasyonlar üretir
                 = İstemediğimiz sonuç!
```

> ⚠️ **Tehlike:** Büyük tablolarda Kartezyen çarpım felakettir. 1000 satırlık iki tablo birleştirilirse 1.000.000 satır üretilir. Sunucu kilitlenebilir. `FROM`'a iki tablo yazdığınızda `WHERE` koşulunu **asla unutmayın**.

---

## 5. Doğru Birleştirme — WHERE ile Eşleştirme

Kartezyen çarpımdan kurtulmak için iki tablodaki **ortak sütunu** `WHERE` koşuluyla eşleştiririz:

```sql
SELECT ogrenciler.adsoyad, bolumler.bolum_adi 
FROM ogrenciler, bolumler 
WHERE ogrenciler.bolum_id = bolumler.bolum_id;
```

**Sonuç:**

| adsoyad | bolum_adi |
|---------|-----------|
| Ahmet Demir | İşletme |
| Büşra Uçar | İşletme |
| Fuat Cebe | Maliye |

Şimdi **anlamlı** bir sonuç aldık. Her öğrenci kendi bölümüyle eşleşti.

### Bu Sorgu Nasıl Çalışıyor?

#### Adım 1: `FROM ogrenciler, bolumler`

SQL önce iki tablonun Kartezyen çarpımını oluşturur (9 satır).

#### Adım 2: `WHERE ogrenciler.bolum_id = bolumler.bolum_id`

Sonra bu 9 satırdan sadece `bolum_id` değerleri **eşleşenleri** süzer:

```
09001 | Ahmet | 1  ←→  1 | İşletme         ✅ 1 = 1 EŞLEŞTİ
09001 | Ahmet | 1  ←→  2 | YBS             ❌ 1 ≠ 2
09001 | Ahmet | 1  ←→  3 | Maliye          ❌ 1 ≠ 3
09002 | Büşra | 1  ←→  1 | İşletme         ✅ 1 = 1 EŞLEŞTİ
09002 | Büşra | 1  ←→  2 | YBS             ❌ 1 ≠ 2
09002 | Büşra | 1  ←→  3 | Maliye          ❌ 1 ≠ 3
09003 | Fuat  | 3  ←→  1 | İşletme         ❌ 3 ≠ 1
09003 | Fuat  | 3  ←→  2 | YBS             ❌ 3 ≠ 2
09003 | Fuat  | 3  ←→  3 | Maliye          ✅ 3 = 3 EŞLEŞTİ
```

9 satırdan sadece 3'ü koşulu sağladı → 3 satırlık anlamlı sonuç.

#### Adım 3: `SELECT ogrenciler.adsoyad, bolumler.bolum_adi`

Eşleşen satırlardan sadece istenen sütunlar gösterilir: öğrenci adı ve bölüm adı.

### Neden `tablo.sütun` Yazıyoruz?

```sql
SELECT ogrenciler.adsoyad, bolumler.bolum_adi
```

İki tabloda aynı isimde sütun olabilir (bu örnekte `bolum_id` her iki tabloda da var). SQL'in hangi tablonun sütununu kastettiğimizi bilmesi için `tablo_adı.sütun_adı` formatını kullanırız.

```sql
-- ❌ Belirsiz — bolum_id hangi tablonun?
SELECT bolum_id FROM ogrenciler, bolumler 
WHERE bolum_id = bolum_id;

-- ✅ Net — her sütunun hangi tablodan geldiği belli
SELECT ogrenciler.bolum_id FROM ogrenciler, bolumler 
WHERE ogrenciler.bolum_id = bolumler.bolum_id;
```

> **İyi alışkanlık:** Sütun adı benzersiz olsa bile (mesela `adsoyad` sadece `ogrenciler`'de var), yine de `ogrenciler.adsoyad` yazmak kodun **okunabilirliğini** artırır.

---

## 6. Takma Ad (Alias) ile Kısaltma

Tablo adlarını her seferinde yazmak uzun sorguları okunaksız yapar. **Takma ad (alias)** ile kısaltabiliriz:

```sql
SELECT o.adsoyad, b.bolum_adi 
FROM ogrenciler o, bolumler b 
WHERE o.bolum_id = b.bolum_id;
```

| Tam Yazım | Alias | Nasıl? |
|-----------|-------|--------|
| `ogrenciler.adsoyad` | `o.adsoyad` | `FROM ogrenciler o` → "o" takma adı |
| `bolumler.bolum_adi` | `b.bolum_adi` | `FROM bolumler b` → "b" takma adı |

Sonuç tamamen aynıdır. Alias sadece **yazım kolaylığı** sağlar. Özellikle 3-4 tablo birleştirildiğinde hayat kurtarır.

---

## 7. JOIN Söz Dizimi — Modern Standart

Az önce kullandığımız yöntem (tablolar `FROM`'da virgülle, koşul `WHERE`'de) **eski stil** olarak bilinir. Çalışır, ama modern SQL standardı **JOIN** söz dizimini önerir:

### Eski Stil (Implicit Join)

```sql
SELECT o.adsoyad, b.bolum_adi 
FROM ogrenciler o, bolumler b 
WHERE o.bolum_id = b.bolum_id;
```

### Modern Stil (Explicit JOIN)

```sql
SELECT o.adsoyad, b.bolum_adi 
FROM ogrenciler o
INNER JOIN bolumler b ON o.bolum_id = b.bolum_id;
```

**İkisi de aynı sonucu verir.** Ama `JOIN` söz diziminin avantajları:

| Özellik | Eski Stil | JOIN Stili |
|---------|-----------|------------|
| Birleştirme koşulu nerede? | `WHERE`'de (filtre koşullarıyla karışır) | `ON`'da (ayrı ve net) |
| `WHERE` unutulursa? | Kartezyen çarpım → felaket | Derleyici hata verir |
| Okunabilirlik | Orta | Yüksek |
| LEFT/RIGHT JOIN desteği | Zor | Kolay |

### INNER JOIN Ne Demek?

`INNER JOIN`, iki tabloda da **eşleşen** satırları getirir. Eşleşmeyen satırlar sonuçta **görünmez**.

Hatırlayın: `bolumler` tablosunda `bolum_id = 2` (Yönetim Bilişim Sistemleri) var ama hiçbir öğrenci bu bölümde kayıtlı değil. `INNER JOIN` sonucunda YBS **görünmez** — çünkü eşleşen öğrenci yok.

```
ogrenciler:                    bolumler:
09001 | bolum_id=1  ──────→   1 | İşletme          ✅ Eşleşti
09002 | bolum_id=1  ──────→   1 | İşletme          ✅ Eşleşti
09003 | bolum_id=3  ──────→   3 | Maliye            ✅ Eşleşti
                               2 | YBS               ❌ Eşleşen yok → sonuçta görünmez
```

---

## 8. JOIN Türleri — Görsel Rehber

SQL'de 4 temel JOIN türü vardır. Her birinin farklı bir amacı var:

### INNER JOIN — Sadece Eşleşenler

```sql
SELECT o.adsoyad, b.bolum_adi 
FROM ogrenciler o
INNER JOIN bolumler b ON o.bolum_id = b.bolum_id;
```

```
     ogrenciler          bolumler
    ┌──────────┐       ┌──────────┐
    │          │       │          │
    │    ┌─────┼───────┼─────┐    │
    │    │/////│ INNER │/////│    │
    │    │/////│       │/////│    │
    │    └─────┼───────┼─────┘    │
    │          │       │          │
    └──────────┘       └──────────┘
         Sadece kesişim (eşleşenler)
```

| adsoyad | bolum_adi |
|---------|-----------|
| Ahmet Demir | İşletme |
| Büşra Uçar | İşletme |
| Fuat Cebe | Maliye |

YBS bölümü görünmez (eşleşen öğrenci yok).

### LEFT JOIN — Sol Tablonun Tamamı

```sql
SELECT o.adsoyad, b.bolum_adi 
FROM ogrenciler o
LEFT JOIN bolumler b ON o.bolum_id = b.bolum_id;
```

```
     ogrenciler          bolumler
    ┌──────────┐       ┌──────────┐
    │//////////│       │          │
    │//////////┼───────┼─────┐    │
    │//////////│ LEFT  │/////│    │
    │//////////│       │/////│    │
    │//////////┼───────┼─────┘    │
    │//////////│       │          │
    └──────────┘       └──────────┘
     Sol tablo komple + eşleşenler
```

Sol tablodaki (ogrenciler) tüm satırlar gelir. Eşleşmeyen sağ tablo sütunları `NULL` olur.

Bu örnekte tüm öğrencilerin bölümü var, dolayısıyla sonuç INNER JOIN ile aynı. Ama eğer bir öğrencinin `bolum_id`'si hiçbir bölümle eşleşmeseydi, o öğrenci de görünür ama `bolum_adi` sütunu `NULL` olurdu.

### RIGHT JOIN — Sağ Tablonun Tamamı

```sql
SELECT o.adsoyad, b.bolum_adi 
FROM ogrenciler o
RIGHT JOIN bolumler b ON o.bolum_id = b.bolum_id;
```

```
     ogrenciler          bolumler
    ┌──────────┐       ┌──────────┐
    │          │       │//////////│
    │    ┌─────┼───────┼//////////│
    │    │/////│ RIGHT │//////////│
    │    │/////│       │//////////│
    │    └─────┼───────┼//////////│
    │          │       │//////////│
    └──────────┘       └──────────┘
      Eşleşenler + sağ tablo komple
```

| adsoyad | bolum_adi |
|---------|-----------|
| Ahmet Demir | İşletme |
| Büşra Uçar | İşletme |
| NULL | Yönetim Bilişim Sistemleri |
| Fuat Cebe | Maliye |

YBS bölümü **görünüyor** — ama eşleşen öğrenci olmadığı için `adsoyad` sütunu `NULL`.

Bu, "hiç öğrencisi olmayan bölümler hangileri?" sorusuna cevap verir.

### FULL OUTER JOIN — Her İki Tablonun Tamamı

```sql
SELECT o.adsoyad, b.bolum_adi 
FROM ogrenciler o
FULL OUTER JOIN bolumler b ON o.bolum_id = b.bolum_id;
```

```
     ogrenciler          bolumler
    ┌──────────┐       ┌──────────┐
    │//////////│       │//////////│
    │//////////┼───────┼//////////│
    │//////////│ FULL  │//////////│
    │//////////│       │//////////│
    │//////////┼───────┼//////////│
    │//////////│       │//////////│
    └──────────┘       └──────────┘
        Her iki tablo komple
```

Her iki tablodaki tüm satırlar gelir. Eşleşmeyen yerler `NULL`.

> **Not:** MySQL, `FULL OUTER JOIN`'i doğrudan desteklemez. `LEFT JOIN` ve `RIGHT JOIN`'i `UNION` ile birleştirerek aynı sonuç elde edilebilir.

### Özet Tablo

| JOIN Türü | Sol Tablo | Sağ Tablo | Eşleşmeyen |
|-----------|-----------|-----------|------------|
| **INNER JOIN** | Sadece eşleşenler | Sadece eşleşenler | Görünmez |
| **LEFT JOIN** | Tamamı | Sadece eşleşenler | Sol tablo satırları kalır, sağ = NULL |
| **RIGHT JOIN** | Sadece eşleşenler | Tamamı | Sağ tablo satırları kalır, sol = NULL |
| **FULL OUTER JOIN** | Tamamı | Tamamı | Her iki taraf da kalır, eşleşmeyen = NULL |

---

## 9. Pratik Örnekler

### Örnek 1: Öğrenci Numarası ile Birlikte

```sql
SELECT o.ogr_no, o.adsoyad, b.bolum_adi 
FROM ogrenciler o
INNER JOIN bolumler b ON o.bolum_id = b.bolum_id
ORDER BY o.ogr_no;
```

| ogr_no | adsoyad | bolum_adi |
|--------|---------|-----------|
| 09001 | Ahmet Demir | İşletme |
| 09002 | Büşra Uçar | İşletme |
| 09003 | Fuat Cebe | Maliye |

### Örnek 2: Bölüme Göre Öğrenci Sayısı

```sql
SELECT b.bolum_adi, COUNT(o.ogr_no) AS ogrenci_sayisi
FROM bolumler b
LEFT JOIN ogrenciler o ON b.bolum_id = o.bolum_id
GROUP BY b.bolum_adi
ORDER BY ogrenci_sayisi DESC;
```

| bolum_adi | ogrenci_sayisi |
|-----------|---------------|
| İşletme | 2 |
| Maliye | 1 |
| Yönetim Bilişim Sistemleri | 0 |

**Neden LEFT JOIN?** `INNER JOIN` kullansaydık, YBS bölümü sonuçta görünmezdi (öğrencisi yok). `LEFT JOIN` sayesinde tüm bölümler görünüyor ve öğrencisi olmayanlar 0 olarak gösteriliyor.

### Örnek 3: Belirli Bölümdeki Öğrenciler

```sql
SELECT o.adsoyad, b.bolum_adi
FROM ogrenciler o
INNER JOIN bolumler b ON o.bolum_id = b.bolum_id
WHERE b.bolum_adi = 'İşletme';
```

| adsoyad | bolum_adi |
|---------|-----------|
| Ahmet Demir | İşletme |
| Büşra Uçar | İşletme |

`JOIN` ile `WHERE` birlikte kullanılabilir. `ON` birleştirme koşulunu, `WHERE` ek filtreleri belirtir.

---

## 10. Ortak Sütun — İlişkisel Veritabanının Temeli

İki tablonun birleştirilebilmesi için aralarında **ortak bir sütun** olması gerekir. Bu sütun genellikle:

| Terim | Hangi Tabloda | Açıklama |
|-------|--------------|----------|
| **Primary Key (PK)** | Ana tablo (`bolumler`) | Tablodaki her satırı benzersiz tanımlar |
| **Foreign Key (FK)** | Bağlı tablo (`ogrenciler`) | Başka tablonun PK'sına referans verir |

```
bolumler tablosu:
  bolum_id (PK) ← Bu sütun her bölümü benzersiz tanımlar
  bolum_adi

ogrenciler tablosu:
  ogr_no
  adsoyad
  bolum_id (FK) ← Bu sütun bolumler tablosundaki bolum_id'ye referans verir
```

Bu ilişki sayesinde:
- `bolumler` tablosuna yeni bölüm eklenebilir (öğrenci tablosunu etkilemez)
- Bölüm adı değiştirildiğinde **tek bir yerde** güncelleme yeterli
- Aynı bölüm kodu birden fazla öğrencide kullanılabilir (bire-çok ilişki)

```
bolumler (1) ───────── (N) ogrenciler
  Bir bölümde          Birden fazla
  tek kayıt            öğrenci olabilir
```

---

## 11. Üç veya Daha Fazla Tabloyu Birleştirmek

Gerçek projelerde genellikle 2'den fazla tablo birleştirilir. Diyelim bir de `dersler` tablomuz var:

```sql
CREATE TABLE dersler (
    ders_id INT,
    ders_adi VARCHAR(100),
    bolum_id INT
);

INSERT INTO dersler (ders_id, ders_adi, bolum_id) VALUES
(101, 'Muhasebe', 1),
(102, 'Veritabanı', 2),
(103, 'Vergi Hukuku', 3);
```

Üç tabloyu birleştirerek "hangi öğrenci hangi bölümde ve o bölümün dersleri neler" sorusuna cevap verebiliriz:

```sql
SELECT o.adsoyad, b.bolum_adi, d.ders_adi
FROM ogrenciler o
INNER JOIN bolumler b ON o.bolum_id = b.bolum_id
INNER JOIN dersler d ON b.bolum_id = d.bolum_id;
```

| adsoyad | bolum_adi | ders_adi |
|---------|-----------|----------|
| Ahmet Demir | İşletme | Muhasebe |
| Büşra Uçar | İşletme | Muhasebe |
| Fuat Cebe | Maliye | Vergi Hukuku |

Her `JOIN` bir önceki sonuca yeni bir tablo ekler. Zincir halinde istediğiniz kadar tablo birleştirebilirsiniz:

```
ogrenciler ──JOIN── bolumler ──JOIN── dersler
     │                  │                │
  öğrenci           bölüm adı        ders adı
  bilgisi           eklendi          eklendi
```

---

## 12. Sık Yapılan Hatalar

| # | Hata | Sonuç | Çözüm |
|---|------|-------|-------|
| 1 | `WHERE` koşulunu unutmak (eski stil) | Kartezyen çarpım — milyonlarca satır | Her zaman birleştirme koşulu yazın veya `JOIN` söz dizimi kullanın |
| 2 | Hangi tablonun sütunu olduğunu belirtmemek | "Ambiguous column" hatası | `tablo.sütun` veya alias kullanın |
| 3 | Yanlış sütunları eşleştirmek | Anlamsız sonuçlar | PK-FK ilişkisini kontrol edin |
| 4 | Her yerde INNER JOIN kullanmak | Eşleşmeyen veriler kaybolur | İhtiyaca göre LEFT/RIGHT JOIN kullanın |
| 5 | `ON` ile `WHERE` karıştırmak | Yanlış filtreleme | `ON` = birleştirme koşulu, `WHERE` = ek filtre |

---

## 13. Özet

| Kavram | Açıklama |
|--------|----------|
| **Kartezyen çarpım** | İki tablonun koşulsuz birleşimi — her satır birbiriyle eşleşir |
| **INNER JOIN** | Sadece eşleşen satırları getirir |
| **LEFT JOIN** | Sol tablonun tamamı + eşleşen sağ tablo satırları |
| **RIGHT JOIN** | Sağ tablonun tamamı + eşleşen sol tablo satırları |
| **ON** | Birleştirme koşulunu belirtir |
| **Alias (AS/kısaltma)** | Tablo veya sütuna takma ad verir |
| **Primary Key** | Tablodaki her satırı benzersiz tanımlayan sütun |
| **Foreign Key** | Başka tablonun PK'sına referans veren sütun |

### Altın Kurallar

1. **İki tablo birleştirirken her zaman birleştirme koşulu yazın** (Kartezyen çarpımdan kaçının)
2. **Ortak sütun adlarında `tablo.sütun` formatını kullanın** (belirsizliği önleyin)
3. **JOIN türünü ihtiyaca göre seçin** — eşleşmeyenleri de görmek istiyorsanız LEFT/RIGHT JOIN
4. **`ON` birleştirme içindir, `WHERE` filtreleme içindir** — karıştırmayın
5. **Alias kullanın** — sorguyu kısa ve okunabilir tutun

> Bir sonraki derste: **Alt Sorgu (Subquery) — Sorgu İçinde Sorgu**
