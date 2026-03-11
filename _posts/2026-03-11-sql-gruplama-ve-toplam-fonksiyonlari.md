---
layout: post
title: "SQL'de Gruplandırma ve Toplam Fonksiyonları: GROUP BY, HAVING ve Aggregate Functions"
date: 2026-03-11 15:00:00 +0300
categories: veri-tabani-yonetim-sistemleri-ii
---

Şimdiye kadar SQL ile tek tek satırları sorguladık, filtreledik, sıraladık. Ama gerçek dünyada genellikle şu tür sorular sorulur:

- "Her bölümde kaç çalışan var?"
- "Görevlere göre ortalama maaş ne?"
- "Hangi müşterinin 1000 TL'den fazla borcu var?"

Bu soruların ortak noktası: **tekil satırlar değil, gruplar üzerinde hesaplama** yapmak istiyoruz. İşte `GROUP BY`, `HAVING` ve **toplam fonksiyonları** (aggregate functions) tam bunu sağlar.

---

## 1. Toplam Fonksiyonları (Aggregate Functions) Nedir?

Toplam fonksiyonları, birden fazla satırı alıp **tek bir sonuç** döndüren özel SQL fonksiyonlarıdır.

| Fonksiyon | Ne Yapar | Örnek Kullanım |
|-----------|----------|---------------|
| `COUNT()` | Satır sayısını sayar | Kaç çalışan var? |
| `SUM()` | Sayısal değerleri toplar | Toplam maaş ne kadar? |
| `AVG()` | Ortalama hesaplar | Ortalama maaş ne? |
| `MAX()` | En büyük değeri bulur | En yüksek maaş ne? |
| `MIN()` | En küçük değeri bulur | En düşük maaş ne? |

**Analoji:** Bir sınıftaki notları düşünün:

| Fonksiyon | Soru | Cevap |
|-----------|------|-------|
| `COUNT(*)` | "Kaç öğrenci sınava girdi?" | 30 |
| `SUM(not)` | "Tüm notların toplamı?" | 2250 |
| `AVG(not)` | "Sınıf ortalaması?" | 75 |
| `MAX(not)` | "En yüksek not?" | 98 |
| `MIN(not)` | "En düşük not?" | 32 |

Bu fonksiyonlar tek başlarına tüm tabloya uygulanabilir. Ama asıl güçleri `GROUP BY` ile birlikte kullanıldıklarında ortaya çıkar.

---

## 2. Çalışma Tablosu: personel

Önce üzerinde çalışacağımız tabloyu oluşturalım:

```sql
CREATE TABLE personel (
    ad VARCHAR(50),
    soyad VARCHAR(50),
    gorev VARCHAR(50),
    maas DECIMAL(10, 2)
);

INSERT INTO personel (ad, soyad, gorev, maas) VALUES 
('Ali', 'Murat', 'Teknisyen', 1200.00),
('Mustafa', 'Yılmaz', 'Teknisyen', 1400.00),
('Ayşe', 'Demir', 'Hizmetli', 900.00),
('Fuat', 'Çakır', 'Mühendis', 2100.00),
('Dursun', 'Aydın', 'Mühendis', 2500.00),
('Mete', 'Cuma', 'Hizmetli', 800.00);
```

Tablomuz şöyle görünüyor:

| ad | soyad | gorev | maas |
|----|-------|-------|------|
| Ali | Murat | Teknisyen | 1200.00 |
| Mustafa | Yılmaz | Teknisyen | 1400.00 |
| Ayşe | Demir | Hizmetli | 900.00 |
| Fuat | Çakır | Mühendis | 2100.00 |
| Dursun | Aydın | Mühendis | 2500.00 |
| Mete | Cuma | Hizmetli | 800.00 |

3 farklı görev var: Teknisyen (2 kişi), Hizmetli (2 kişi), Mühendis (2 kişi).

---

## 3. GROUP BY — Gruplama

`GROUP BY`, tabloyu belirtilen sütundaki değerlere göre **alt gruplara** ayırır. Ardından her grup üzerinde toplam fonksiyonları çalıştırılır.

### Nasıl Çalışır?

`GROUP BY gorev` dediğimizde SQL, tabloyu şöyle parçalar:

```
Tüm tablo
    │
    ├── Grup 1: gorev = 'Teknisyen'
    │     ├── Ali Murat     1200.00
    │     └── Mustafa Yılmaz 1400.00
    │
    ├── Grup 2: gorev = 'Hizmetli'
    │     ├── Ayşe Demir     900.00
    │     └── Mete Cuma       800.00
    │
    └── Grup 3: gorev = 'Mühendis'
          ├── Fuat Çakır    2100.00
          └── Dursun Aydın  2500.00
```

Sonra her gruba toplam fonksiyonu uygulanır ve **her grup için tek bir satır** döndürülür.

---

### Sorgu 1: Görevlere Göre Ortalama Maaş

```sql
SELECT gorev, AVG(maas) AS ortalama 
FROM personel 
GROUP BY gorev;
```

**Sonuç:**

| gorev | ortalama |
|-------|----------|
| Teknisyen | 1300.00 |
| Hizmetli | 850.00 |
| Mühendis | 2300.00 |

**Ne oldu?**

1. `GROUP BY gorev` → Tablo 3 gruba ayrıldı
2. `AVG(maas)` → Her grubun maaş ortalaması hesaplandı
3. `AS ortalama` → Sonuç sütununa "ortalama" takma adı verildi

**Hesaplama detayı:**

```
Teknisyen: (1200 + 1400) / 2 = 1300.00
Hizmetli:  (900 + 800) / 2   = 850.00
Mühendis:  (2100 + 2500) / 2 = 2300.00
```

> **`AS` (Alias) Nedir?** `AS` ile sonuç sütununa okunabilir bir isim verirsiniz. `AVG(maas)` yerine çıktıda `ortalama` yazması çok daha anlaşılırdır. `AS` yazmak zorunlu değildir ama **her zaman yazılması** önerilir.

---

### Sorgu 2: Her Görevdeki Personel Sayısı

```sql
SELECT gorev, COUNT(gorev) AS personel_sayisi 
FROM personel 
GROUP BY gorev 
ORDER BY gorev;
```

**Sonuç:**

| gorev | personel_sayisi |
|-------|----------------|
| Hizmetli | 2 |
| Mühendis | 2 |
| Teknisyen | 2 |

**Ne oldu?**

1. `GROUP BY gorev` → 3 grup oluştu
2. `COUNT(gorev)` → Her gruptaki satır sayısı sayıldı
3. `ORDER BY gorev` → Sonuç görev adına göre **alfabetik** sıralandı

### `COUNT(*)` vs `COUNT(sütun)` Farkı

| Kullanım | Ne Sayar | NULL Değerler |
|----------|----------|--------------|
| `COUNT(*)` | **Tüm satırları** sayar | NULL olsa bile sayar |
| `COUNT(sütun)` | O sütunda **değer olan** satırları sayar | NULL olanları **saymaz** |

Örnek:

```
Tablo:
| ad    | gorev     |
|-------|-----------|
| Ali   | Teknisyen |
| Ayşe  | NULL      |
| Fuat  | Mühendis  |

COUNT(*)     → 3  (tüm satırlar)
COUNT(gorev) → 2  (NULL olan satır sayılmaz)
```

Bu fark kritiktir. Eğer tabloda `NULL` değerler varsa ve **tüm satırları** saymak istiyorsanız `COUNT(*)` kullanın.

---

### Sorgu 3: En Yüksek Maaş (GROUP BY Olmadan)

```sql
SELECT MAX(maas) AS en_yuksek_maas FROM personel;
```

**Sonuç:**

| en_yuksek_maas |
|---------------|
| 2500.00 |

Bu sorguda `GROUP BY` yok — yani toplam fonksiyonu **tüm tabloya** uygulanır. Tablo tek bir grup olarak değerlendirilir ve en yüksek maaş döner.

> **Önemli:** `GROUP BY` olmadan bir sorguda toplam fonksiyonunu toplam fonksiyonu olmayan bir sütunla birlikte kullanamazsınız:
>
> ```sql
> -- ❌ HATALI
> SELECT gorev, MAX(maas) AS en_yuksek_maas FROM personel;
> ```
>
> Bu sorgu bazı veritabanlarında çalışsa bile **mantıksal olarak yanlıştır**. `MAX(maas)` tüm tablodan tek bir değer döndürür ama `gorev` hangi satırdan gelecek? SQL bunu bilemez. Doğru kullanım:
>
> ```sql
> -- ✅ DOĞRU
> SELECT gorev, MAX(maas) AS en_yuksek_maas 
> FROM personel 
> GROUP BY gorev;
> ```

---

### Sorgu 4: Çoklu Toplam Fonksiyonu — Tek Sorguda Birden Fazla Hesaplama

```sql
SELECT gorev, 
       MAX(maas) AS maksimum, 
       MIN(maas) AS minimum, 
       COUNT(gorev) AS gorevli_sayisi 
FROM personel 
GROUP BY gorev;
```

**Sonuç:**

| gorev | maksimum | minimum | gorevli_sayisi |
|-------|----------|---------|---------------|
| Teknisyen | 1400.00 | 1200.00 | 2 |
| Hizmetli | 900.00 | 800.00 | 2 |
| Mühendis | 2500.00 | 2100.00 | 2 |

Tek bir `SELECT` içinde **birden fazla** toplam fonksiyonu kullanabilirsiniz. Her fonksiyon kendi hesabını yapar:

```
Teknisyen grubu:
  MAX(maas) → max(1200, 1400) = 1400
  MIN(maas) → min(1200, 1400) = 1200
  COUNT     → 2 satır

Hizmetli grubu:
  MAX(maas) → max(900, 800) = 900
  MIN(maas) → min(900, 800) = 800
  COUNT     → 2 satır

Mühendis grubu:
  MAX(maas) → max(2100, 2500) = 2500
  MIN(maas) → min(2100, 2500) = 2100
  COUNT     → 2 satır
```

Bu sorgu tek bakışta her görevin **maaş aralığını** ve **kaç kişi olduğunu** gösterir — yöneticilerin en çok sevdiği türden bir rapor.

---

## 4. Birden Fazla Alana Göre Gruplama

Şimdi tablomuza bir **bölüm** sütunu ekleyelim:

```sql
CREATE TABLE Personel (
    ad VARCHAR(50),
    soyad VARCHAR(50),
    bolum VARCHAR(50),
    gorev VARCHAR(50),
    maas DECIMAL(10, 2)
);

INSERT INTO Personel (ad, soyad, bolum, gorev, maas) VALUES 
('Ali', 'Murat', 'Üretim', 'Teknisyen', 1200.00),
('Mustafa', 'Yılmaz', 'Kontrol', 'Teknisyen', 1400.00),
('Ayşe', 'Demir', 'Kontrol', 'Hizmetli', 900.00),
('Fuat', 'Çakır', 'Üretim', 'Mühendis', 2100.00),
('Dursun', 'Aydın', 'Üretim', 'Mühendis', 2500.00),
('Mete', 'Cuma', 'Üretim', 'Hizmetli', 800.00);
```

| ad | soyad | bolum | gorev | maas |
|----|-------|-------|-------|------|
| Ali | Murat | Üretim | Teknisyen | 1200.00 |
| Mustafa | Yılmaz | Kontrol | Teknisyen | 1400.00 |
| Ayşe | Demir | Kontrol | Hizmetli | 900.00 |
| Fuat | Çakır | Üretim | Mühendis | 2100.00 |
| Dursun | Aydın | Üretim | Mühendis | 2500.00 |
| Mete | Cuma | Üretim | Hizmetli | 800.00 |

### Sorgu: Bölüm ve Göreve Göre Gruplama

```sql
SELECT bolum, 
       gorev, 
       COUNT(gorev) AS bolumdeki_calisan_sayisi, 
       MAX(maas) AS maksimum, 
       MIN(maas) AS minimum
FROM personel
GROUP BY bolum, gorev
ORDER BY bolum;
```

**Sonuç:**

| bolum | gorev | bolumdeki_calisan_sayisi | maksimum | minimum |
|-------|-------|------------------------|----------|---------|
| Kontrol | Hizmetli | 1 | 900.00 | 900.00 |
| Kontrol | Teknisyen | 1 | 1400.00 | 1400.00 |
| Üretim | Hizmetli | 1 | 800.00 | 800.00 |
| Üretim | Mühendis | 2 | 2500.00 | 2100.00 |
| Üretim | Teknisyen | 1 | 1200.00 | 1200.00 |

### Ne Oldu?

`GROUP BY bolum, gorev` dediğimizde SQL, **her benzersiz bölüm + görev kombinasyonu** için ayrı bir grup oluşturur:

```
Tüm tablo
    │
    ├── Grup 1: Kontrol + Hizmetli
    │     └── Ayşe Demir  900.00
    │
    ├── Grup 2: Kontrol + Teknisyen
    │     └── Mustafa Yılmaz  1400.00
    │
    ├── Grup 3: Üretim + Hizmetli
    │     └── Mete Cuma  800.00
    │
    ├── Grup 4: Üretim + Mühendis     ← 2 kişilik tek grup
    │     ├── Fuat Çakır    2100.00
    │     └── Dursun Aydın  2500.00
    │
    └── Grup 5: Üretim + Teknisyen
          └── Ali Murat  1200.00
```

Tek sütunla gruplama 3 grup oluşturuyordu, iki sütunla **5 grup** oluştu. Her bölüm-görev çifti kendi grubudur.

**Sonuçtan ne okuyoruz?**

- Üretim bölümünde 2 mühendis var, en yüksek maaş 2500 TL
- Kontrol bölümünde her görevden birer kişi var
- Üretim bölümündeki hizmetli (800 TL), Kontrol'deki hizmetliden (900 TL) daha düşük maaş alıyor

`ORDER BY bolum` ile sonuçlar bölüm adına göre alfabetik sıralandı — rapor okunabilirliği için önemli.

> **Kural:** `SELECT` satırında toplam fonksiyonu dışında yazılan her sütun, `GROUP BY`'da da yer almalıdır. Aksi halde SQL hangi satırın değerini göstereceğini bilemez.
>
> ```sql
> -- ❌ HATALI: bolum SELECT'te var ama GROUP BY'da yok
> SELECT bolum, gorev, COUNT(*) FROM personel GROUP BY gorev;
>
> -- ✅ DOĞRU: SELECT'teki tüm normal sütunlar GROUP BY'da var
> SELECT bolum, gorev, COUNT(*) FROM personel GROUP BY bolum, gorev;
> ```

---

## 5. HAVING — Gruplara Koşul Koymak

`WHERE`, **satırları** süzer. Peki grupları süzmek istersek? Yani "sadece ortalaması 1000'den büyük olan görevleri göster" gibi bir koşul?

`WHERE` bunu yapamaz çünkü `WHERE`, `GROUP BY`'dan **önce** çalışır — henüz gruplar oluşmamıştır.

İşte `HAVING`, **gruplar oluştuktan sonra** onlara koşul uygular.

### WHERE vs HAVING

| Özellik | WHERE | HAVING |
|---------|-------|--------|
| **Ne süzer?** | Tekil satırları | Grupları |
| **Ne zaman çalışır?** | `GROUP BY`'dan **önce** | `GROUP BY`'dan **sonra** |
| **Toplam fonksiyonu kullanabilir mi?** | Hayır ❌ | Evet ✅ |
| **Örnek** | `WHERE maas > 1000` | `HAVING AVG(maas) > 1000` |

### SQL Çalışma Sırası

Bu sırayı bilmek çok önemlidir:

```
1. FROM      → Hangi tablodan?
2. WHERE     → Hangi satırlar? (gruplamadan ÖNCE filtre)
3. GROUP BY  → Nasıl grupla?
4. HAVING    → Hangi gruplar? (gruplamadan SONRA filtre)
5. SELECT    → Hangi sütunları göster?
6. ORDER BY  → Nasıl sırala?
```

Dikkat edin: `WHERE` 2. adımda, `HAVING` 4. adımda çalışır. `GROUP BY` ikisinin arasındadır.

### Yeni Tablo: cari (Müşteri Hesapları)

```sql
CREATE TABLE cari (
    musteri VARCHAR(100),
    borc DECIMAL(15, 2),
    alacak DECIMAL(15, 2)
);

INSERT INTO cari (musteri, borc, alacak) VALUES 
('Ali Murat', 1900.00, 800.00),
('Mustafa Kuş', 2500.00, 2100.00),
('Ayşe Demir', 1400.00, 200.00),
('Mustafa Kuş', 1000.00, 0.00),
('Ali Murat', 900.00, 0.00),
('Ayşe Demir', 0.00, 150.00);
```

| musteri | borc | alacak |
|---------|------|--------|
| Ali Murat | 1900.00 | 800.00 |
| Mustafa Kuş | 2500.00 | 2100.00 |
| Ayşe Demir | 1400.00 | 200.00 |
| Mustafa Kuş | 1000.00 | 0.00 |
| Ali Murat | 900.00 | 0.00 |
| Ayşe Demir | 0.00 | 150.00 |

Dikkat: Aynı müşterinin **birden fazla kaydı** var. Bu, gerçek dünyada çok yaygındır — her fatura, her ödeme ayrı bir satırdır.

### Sorgu: Bakiyesi 1000 TL'den Fazla Olan Müşteriler

```sql
SELECT musteri, 
       SUM(borc) AS toplam_borc,
       SUM(alacak) AS toplam_alacak,
       (SUM(borc) - SUM(alacak)) AS bakiye 
FROM cari 
GROUP BY musteri 
HAVING (SUM(borc) - SUM(alacak)) > 1000;
```

**Adım Adım İşleyiş:**

#### Adım 1: GROUP BY ile Gruplama

```
Ali Murat grubu:
  Satır 1: borc=1900, alacak=800
  Satır 2: borc=900,  alacak=0

Mustafa Kuş grubu:
  Satır 1: borc=2500, alacak=2100
  Satır 2: borc=1000, alacak=0

Ayşe Demir grubu:
  Satır 1: borc=1400, alacak=200
  Satır 2: borc=0,    alacak=150
```

#### Adım 2: Her Grup İçin Toplam Hesaplama

| musteri | SUM(borc) | SUM(alacak) | Bakiye (borc - alacak) |
|---------|-----------|-------------|------------------------|
| Ali Murat | 1900 + 900 = **2800** | 800 + 0 = **800** | 2800 - 800 = **2000** |
| Mustafa Kuş | 2500 + 1000 = **3500** | 2100 + 0 = **2100** | 3500 - 2100 = **1400** |
| Ayşe Demir | 1400 + 0 = **1400** | 200 + 150 = **350** | 1400 - 350 = **1050** |

#### Adım 3: HAVING Filtresi

`HAVING (SUM(borc) - SUM(alacak)) > 1000` koşulunu uygula:

- Ali Murat: 2000 > 1000 ✅ **Göster**
- Mustafa Kuş: 1400 > 1000 ✅ **Göster**
- Ayşe Demir: 1050 > 1000 ✅ **Göster**

**Sonuç:**

| musteri | toplam_borc | toplam_alacak | bakiye |
|---------|-------------|---------------|--------|
| Ali Murat | 2800.00 | 800.00 | 2000.00 |
| Mustafa Kuş | 3500.00 | 2100.00 | 1400.00 |
| Ayşe Demir | 1400.00 | 350.00 | 1050.00 |

Bu örnekte tüm müşterilerin bakiyesi 1000'i geçiyor. Eğer koşulu `> 1500` yapsaydık, sadece Ali Murat görünürdü.

### WHERE ve HAVING Birlikte Kullanımı

İkisi aynı sorguda birlikte kullanılabilir:

```sql
SELECT musteri, 
       (SUM(borc) - SUM(alacak)) AS bakiye 
FROM cari 
WHERE borc > 0                                    -- Önce: sadece borç kaydı olan satırları al
GROUP BY musteri 
HAVING (SUM(borc) - SUM(alacak)) > 1000;          -- Sonra: bakiyesi 1000'den büyük grupları göster
```

Bu sorgu:
1. **WHERE** → Borcu 0 olan satırları eler (Ayşe'nin ikinci kaydı gibi)
2. **GROUP BY** → Kalan satırları müşteriye göre gruplar
3. **HAVING** → Bakiyesi 1000'den büyük olan grupları süzer

---

## 6. `COUNT(*)` Kullanımı

`COUNT(*)` özel bir kullanımdır — sütun adı yerine `*` (yıldız) yazılır ve **tüm satırları** sayar.

### Tablodaki Toplam Kayıt Sayısı

```sql
SELECT COUNT(*) AS toplam_kayit FROM personel;
```

**Sonuç:**

| toplam_kayit |
|-------------|
| 6 |

### Gruplarla Birlikte

```sql
SELECT gorev, COUNT(*) AS kisi_sayisi 
FROM personel 
GROUP BY gorev;
```

**Sonuç:**

| gorev | kisi_sayisi |
|-------|------------|
| Teknisyen | 2 |
| Hizmetli | 2 |
| Mühendis | 2 |

### COUNT(*) vs COUNT(sütun) — Kritik Fark

Bu farkı bir örnekle somutlaştıralım. Diyelim tabloda bir kaydın görevi `NULL`:

```
| ad    | gorev     |
|-------|-----------|
| Ali   | Teknisyen |
| Ayşe  | NULL      |
| Fuat  | Mühendis  |
```

```sql
SELECT COUNT(*) FROM personel;         -- Sonuç: 3 (tüm satırlar)
SELECT COUNT(gorev) FROM personel;     -- Sonuç: 2 (NULL sayılmaz)
```

**Kural:** 
- Tüm satırları saymak istiyorsanız → `COUNT(*)`
- Belirli bir sütunda değer olan satırları saymak istiyorsanız → `COUNT(sütun_adı)`

---

## 7. Sorgu Yazım Sırası — Şablon

Her `GROUP BY` sorgusu şu yapıyı takip eder:

```sql
SELECT    sütun(lar), TOPLAM_FONKSİYONU(sütun) AS takma_ad
FROM      tablo_adı
WHERE     satır_filtresi              -- (opsiyonel)
GROUP BY  gruplama_sütun(ları)
HAVING    grup_filtresi               -- (opsiyonel)
ORDER BY  sıralama_sütunu;            -- (opsiyonel)
```

### Somut Örnek — Tüm Yapı Birlikte

"Maaşı 500 TL'nin üzerinde olan personeli göreve göre grupla. Her gruptaki kişi sayısını ve ortalama maaşı göster. Sadece ortalama maaşı 1000 TL'den büyük olan grupları getir. Ortalamaya göre azalan sırala."

```sql
SELECT gorev, 
       COUNT(*) AS kisi_sayisi, 
       AVG(maas) AS ortalama_maas
FROM personel
WHERE maas > 500
GROUP BY gorev
HAVING AVG(maas) > 1000
ORDER BY ortalama_maas DESC;
```

**Çalışma sırası:**

```
1. FROM personel          → Tablo seçildi (6 satır)
2. WHERE maas > 500       → Maaşı 500'den düşük olanlar elendi
3. GROUP BY gorev         → Kalan satırlar göreve göre gruplandı
4. HAVING AVG(maas)>1000  → Ortalaması 1000'den düşük gruplar elendi
5. SELECT ...             → İstenen sütunlar ve hesaplamalar gösterildi
6. ORDER BY ... DESC      → Azalan sıraya dizildi
```

---

## 8. Sık Yapılan Hatalar

| # | Hata | Neden Yanlış | Doğrusu |
|---|------|-------------|---------|
| 1 | `WHERE AVG(maas) > 1000` | WHERE'de toplam fonksiyonu kullanılamaz | `HAVING AVG(maas) > 1000` |
| 2 | SELECT'te sütun var ama GROUP BY'da yok | SQL hangi satırın değerini göstereceğini bilemez | SELECT'teki her normal sütunu GROUP BY'a ekleyin |
| 3 | `GROUP BY` olmadan `HAVING` kullanmak | HAVING gruplar üzerinde çalışır | Önce GROUP BY, sonra HAVING |
| 4 | `COUNT(*)` ile `COUNT(sütun)` karıştırmak | NULL kayıtlarda farklı sonuç verir | Amaca göre doğru olanı seçin |
| 5 | `AS` kullanmamak | Çıktı okunamaz (`AVG(maas)` vs `ortalama`) | Her toplam fonksiyonuna `AS` ile isim verin |

---

## 9. Özet

| Kavram | Ne Yapar | Örnek |
|--------|----------|-------|
| `GROUP BY` | Satırları gruplara ayırır | `GROUP BY gorev` |
| `HAVING` | Gruplara koşul koyar | `HAVING COUNT(*) > 2` |
| `COUNT()` | Sayar | `COUNT(*)`, `COUNT(gorev)` |
| `SUM()` | Toplar | `SUM(maas)` |
| `AVG()` | Ortalama alır | `AVG(maas)` |
| `MAX()` | En büyüğü bulur | `MAX(maas)` |
| `MIN()` | En küçüğü bulur | `MIN(maas)` |
| `AS` | Takma ad verir | `AVG(maas) AS ortalama` |
| `WHERE` | Satırları süzer (GROUP BY'dan önce) | `WHERE maas > 500` |
| `HAVING` | Grupları süzer (GROUP BY'dan sonra) | `HAVING AVG(maas) > 1000` |

### Altın Kurallar

1. **SELECT'te toplam fonksiyonu dışındaki her sütun, GROUP BY'da olmalıdır**
2. **Satır filtresi → WHERE, grup filtresi → HAVING**
3. **COUNT(\*) tüm satırları sayar, COUNT(sütun) NULL'ları atlar**
4. **Her toplam fonksiyonuna AS ile okunabilir bir isim verin**
5. **Çalışma sırası: FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY**

> Bir sonraki derste: **JOIN — Birden Fazla Tabloyu Birleştirme**
