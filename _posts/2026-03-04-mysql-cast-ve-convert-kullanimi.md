---
layout: post
title: "MySQL'de CAST ve CONVERT: Veri Tipi Dönüştürmenin Ustalık Rehberi"
date: 2026-03-04 14:36:00 +0300
categories: veri-tabani-yonetim-sistemleri-ii
course_id: veri-tabani-yonetim-sistemleri-ii
tags: [sql, mysql, cast, convert, veri-tipi, type-conversion, tarih, sayi, metin]
---

# MySQL'de CAST ve CONVERT Kullanımı (Detaylı Anlatım)

Veritabanı tarafında hataların önemli bir kısmı, veri tipi uyuşmazlıklarından çıkar.

- Metin gibi gelen sayıyla matematik yapmak istersin
- `VARCHAR` tarih alanını tarih gibi sıralamak istersin
- Ondalıklı sayıyı tam sayıya çevirmek istersin
- Binary/metin dönüşümlerinde karakter seti sorunu yaşarsın

Bu noktada iki temel aracın var:

- `CAST(...)`
- `CONVERT(...)`

İkisi de veri tipini dönüştürür; ama kullanım biçimleri ve bazı yetenekleri farklıdır.

---

## 1) Neden veri tipi dönüşümü gerekir?

Aşağıdaki örneği düşün:

```sql
SELECT '10' + '20';
```

MySQL çoğu durumda bunu sayıya zorlar ve `30` döndürür. Güzel gibi görünüyor ama bu **örtük (implicit) dönüşüm** her zaman güvenli değildir.

Veri kirliyse, sürüm/ayar farklıysa, beklenmeyen sonuç alırsın.

**Profesyonel yaklaşım:** Dönüşümü açıkça belirtmek.

```sql
SELECT CAST('10' AS UNSIGNED) + CAST('20' AS UNSIGNED) AS toplam;
```

Bu hem okunabilir hem öngörülebilir.

---

## 2) CAST sözdizimi

```sql
CAST(ifade AS hedef_tur)
```

### Sık kullanılan hedef türler

- `SIGNED` / `UNSIGNED`
- `DECIMAL(p, s)`
- `CHAR(n)`
- `DATE`, `TIME`, `DATETIME`
- `BINARY(n)`
- `JSON` (uygun sürümlerde)

### Örnekler

```sql
SELECT CAST('123' AS UNSIGNED) AS deger;
-- 123

SELECT CAST('123.987' AS DECIMAL(10,2)) AS deger;
-- 123.99

SELECT CAST('2026-03-04' AS DATE) AS tarih;
-- 2026-03-04
```

---

## 3) CONVERT sözdizimi

MySQL'de iki farklı kullanım vardır:

## 3.1 Veri tipi dönüşümü

```sql
CONVERT(ifade, hedef_tur)
```

Örnek:

```sql
SELECT CONVERT('145', UNSIGNED) + 5 AS sonuc;
-- 150
```

## 3.2 Karakter seti dönüşümü

```sql
CONVERT(ifade USING karakter_seti)
```

Örnek:

```sql
SELECT CONVERT(_latin1 'caf\xE9' USING utf8mb4) AS metin;
```

`CAST` karakter seti dönüşümünde bu kadar esnek değil; bu alanda `CONVERT ... USING` daha özeldir.

---

## 4) CAST mı, CONVERT mi?

| Kriter | CAST | CONVERT |
|---|---|---|
| ANSI SQL standardına yakınlık | Daha yüksek | Daha düşük (MySQL'e özgü kullanım daha fazla) |
| Okunabilirlik | Genelde daha temiz | Bazen daha teknik |
| Karakter seti dönüşümü (`USING`) | Yok | Var |
| Ekiplerde taşınabilir SQL | Daha uygun | MySQL bağımlılığı artabilir |

**Pratik öneri:**

- Tip dönüşümünde genellikle `CAST`
- Karakter seti için `CONVERT(... USING ...)`

---

## 5) Gerçek senaryolarla detaylı kullanım

## Senaryo A — Metin fiyatları sayıya çevirip hesaplama

Tablo:

```sql
CREATE TABLE urunler (
    id INT PRIMARY KEY AUTO_INCREMENT,
    urun_adi VARCHAR(100),
    fiyat_metin VARCHAR(20)
);
```

Örnek veri:

```sql
INSERT INTO urunler (urun_adi, fiyat_metin) VALUES
('Kulaklık', '1299.90'),
('Klavye', '850.50'),
('Mouse', '499.99');
```

Toplam fiyat:

```sql
SELECT SUM(CAST(fiyat_metin AS DECIMAL(10,2))) AS toplam_fiyat
FROM urunler;
```

> Eğer burada CAST yapmazsan, bazı durumlarda yanlış toplama/karşılaştırma yapabilirsin.

---

## Senaryo B — Metin tarihleri düzgün sıralama

Tablo:

```sql
CREATE TABLE etkinlikler (
    id INT PRIMARY KEY AUTO_INCREMENT,
    ad VARCHAR(100),
    tarih_metin VARCHAR(20)
);
```

Veri:

```sql
INSERT INTO etkinlikler (ad, tarih_metin) VALUES
('Seminer', '2026-03-10'),
('Konferans', '2026-01-02'),
('Atolye', '2026-12-01');
```

Doğru sıralama:

```sql
SELECT ad, tarih_metin
FROM etkinlikler
ORDER BY CAST(tarih_metin AS DATE);
```

Metin sıralaması ile tarih sıralaması aynı şey değildir. Özellikle format farklıysa mutlaka dönüştür.

---

## Senaryo C — JOIN sırasında tip uyuşmazlığı çözme

`musteriler.id` sayısal, `siparisler.musteri_id` metin olabilir.

```sql
SELECT s.id, m.ad
FROM siparisler s
JOIN musteriler m
  ON CAST(s.musteri_id AS UNSIGNED) = m.id;
```

Bu geçici çözüm işe yarar; ama **kalıcı doğru çözüm şema tasarımını düzeltmektir**.

---

## Senaryo D — Ondalıklı değeri biçimlendirme

```sql
SELECT CAST(125.6789 AS DECIMAL(8,2)) AS fiyat;
-- 125.68
```

Raporlamada 2 basamaklı para gösterimi için sık kullanılır.

---

## 6) SIGNED, UNSIGNED ve DECIMAL farkı

## SIGNED
Negatif + pozitif tam sayı.

```sql
SELECT CAST('-42' AS SIGNED);
-- -42
```

## UNSIGNED
Negatif olmayan tam sayı.

```sql
SELECT CAST('42' AS UNSIGNED);
-- 42
```

## DECIMAL(p,s)
Sabit hassasiyetli ondalık.

- `p`: toplam basamak
- `s`: virgülden sonraki basamak

```sql
SELECT CAST('12345.678' AS DECIMAL(8,2));
-- 12345.68
```

Finansal işlemlerde `FLOAT/DOUBLE` yerine çoğunlukla `DECIMAL` tercih edilir.

---

## 7) Tarih/saat dönüşümleri

```sql
SELECT CAST('2026-03-04' AS DATE) AS d;
SELECT CAST('14:30:00' AS TIME) AS t;
SELECT CAST('2026-03-04 14:30:00' AS DATETIME) AS dt;
```

Filtre örneği:

```sql
SELECT *
FROM loglar
WHERE CAST(olusturma_metin AS DATETIME) >= '2026-03-01 00:00:00';
```

---

## 8) Performans notu (çok kritik)

`WHERE` ve `JOIN` içinde sütuna fonksiyon uygulamak, indeks kullanımını düşürebilir.

Örnek (potansiyel yavaş):

```sql
WHERE CAST(kod AS UNSIGNED) = 100
```

**Daha iyi yaklaşım:**

- Veriyi doğru tipte sakla
- Gerekirse ek bir "temiz" kolon üret
- ETL/temizlik aşamasında dönüşüm yap

`CAST/CONVERT` güçlüdür ama şema tasarımının yerini tutmaz.

---

## 9) Hatalar ve dikkat edilmesi gerekenler

1. **Kirli veri**
   - `'12abc'`, `''`, `'--'` gibi değerlerde sonuçlar şaşırtıcı olabilir.
2. **Sessiz dönüşüm riski**
   - MySQL bazı durumlarda uyarı verip devam eder.
3. **SQL_MODE etkisi**
   - `STRICT_TRANS_TABLES` gibi modlarda davranış değişebilir.
4. **Yuvarlama ve kesme farkı**
   - `DECIMAL(10,2)` dönüşümünde yuvarlama olabilir.
5. **Karakter seti bozulmaları**
   - Özellikle farklı encoding kaynaklarında `CONVERT ... USING` gerekir.

---

## 10) CAST ve CONVERT ile mini uygulama örneği

```sql
CREATE TABLE odemeler (
    id INT PRIMARY KEY AUTO_INCREMENT,
    tutar_metin VARCHAR(20),
    tarih_metin VARCHAR(20)
);

INSERT INTO odemeler (tutar_metin, tarih_metin) VALUES
('1200.50', '2026-03-01'),
('950.75',  '2026-03-02'),
('300',     '2026-03-03');

SELECT
    id,
    CAST(tutar_metin AS DECIMAL(10,2)) AS tutar,
    CAST(tarih_metin AS DATE) AS tarih
FROM odemeler
ORDER BY CAST(tarih_metin AS DATE);

SELECT SUM(CAST(tutar_metin AS DECIMAL(10,2))) AS toplam_odeme
FROM odemeler;
```

Bu örnekle aynı tabloda hem tarih hem tutar dönüşümünü birlikte görmüş oldun.

---

## 11) CAST/CONVERT vs FORMAT vs ROUND

Öğrencilerin en çok karıştırdığı yerlerden biri:

- `CAST(... AS DECIMAL(10,2))` → veri tipini dönüştürür
- `ROUND(sayi, 2)` → matematiksel yuvarlama yapar
- `FORMAT(sayi, 2)` → **metin** döndürür (görsel biçimleme)

Rapor ekranı için `FORMAT` iyi olabilir; hesaplama için çoğunlukla `DECIMAL + CAST` daha sağlıklı.

---

## 12) Ödev Soruları

1. `VARCHAR` tipinde tutulan not sütununu `DECIMAL(5,2)`e dönüştürerek sınıf ortalamasını hesaplayın.
2. `VARCHAR` tarih alanını `DATE`e çevirip en yeni 5 kaydı getiren sorguyu yazın.
3. Aynı veriyi hem `CAST` hem `CONVERT` ile dönüştüren iki sorgu yazıp sonuçları karşılaştırın.
4. `CONVERT(... USING utf8mb4)` kullanarak yanlış encoding gelen bir metni düzeltmeyi deneyin.

---

## Kısa Sonuç

- `CAST` ve `CONVERT`, veri tipi çatışmalarını çözmede temel araçlardır.
- Doğru kullanıldığında sorgu güvenilirliğini artırır.
- Yanlış yerde kullanıldığında performansı düşürebilir.
- En iyi strateji: **veriyi doğru tipte sakla**, dönüşümü sadece gerektiğinde ve kontrollü yap.
