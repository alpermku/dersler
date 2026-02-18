---
layout: post
title: "SQL Fonksiyonlarına Giriş: Veriyi İşlemenin Akıllı Yolu"
date: 2026-02-18
categories: veri-tabani-yonetim-sistemleri-ii
course_id: veri-tabani-yonetim-sistemleri-ii
tags: [sql, mysql, fonksiyonlar, string-fonksiyonlari, concat, concat_ws]
---

# SQL'de Fonksiyon Kavramı

Veri Tabanı Yönetim Sistemleri II (VTYS-II) dersinde, veriyi sadece **saklamak** değil, onu **işlemek ve dönüştürmek** de en az saklamak kadar önemlidir. İşte bu noktada **Fonksiyonlar (Functions)** devreye girer.

## Fonksiyon Nedir?

Fonksiyonlar, belirli bir işlemi gerçekleştirmek için önceden yazılmış, parametre alabilen ve geriye bir sonuç döndüren **kod parçacıklarıdır**.

Düşünün ki, her öğrencinin doğum tarihinden yaşını hesaplamanız gerekiyor. Her seferinde `(Bugün - Doğum Tarihi)` formülünü yazmak yerine, `YAS_HESAPLA(dogum_tarihi)` gibi bir fonksiyon kullanmak çok daha pratiktir.

## Neden Kullanırız?

1.  **Kod Tekrarını Önler:** Aynı işlemi defalarca yazmanıza gerek kalmaz.
2.  **Veri Bütünlüğü:** Herkes aynı fonksiyonu kullanırsa, hesaplama her yerde aynı olur (Standartlaşma).
3.  **Karmaşıklığı Gizler:** Karmaşık matematiksel veya metinsel işlemleri tek bir kelimeyle yapmanızı sağlar.
4.  **Performans:** Veritabanı motoruna optimize edilmiş işlemler sunar.

## Fonksiyon Türleri

SQL'de fonksiyonlar genellikle iki ana kategoriye ayrılır:

1.  **Skaler Fonksiyonlar (Scalar Functions):** Her satır için tek bir değer döndürür. (Örn: Metni büyütme `UPPER()`, Mutlak değer `ABS()`)
2.  **Küme Fonksiyonları (Aggregate Functions):** Birden çok satırı alıp tek bir özet değer döndürür. (Örn: Toplam `SUM()`, Ortalama `AVG()`, Sayma `COUNT()`)

Bu dersimizde, **Skaler Fonksiyonlar** kategorisindeki en temel metin (String) fonksiyonlarını inceleyeceğiz.

---

## Metin Birleştirme Fonksiyonları

Veritabanında Ad ve Soyad genellikle ayrı sütunlarda tutulur. Ancak raporlarda bunları "Ad Soyad" şeklinde tek sütunda görmek isteriz. İşte `CONCAT` ve `CONCAT_WS` burada hayat kurtarır.

### 1. CONCAT (Concatenate)

Verilen metinleri veya sütunları **ucuca ekler**. Hiçbir ayraç koymaz.

**Kullanımı:**
```sql
CONCAT(metin1, metin2, metin3, ...)
```

**Örnek:**
```sql
SELECT CONCAT('Veri', 'Tabanı', 'Yönetimi');
-- Çıktı: VeriTabanıYönetimi
```

**Tablo Üzerinde Kullanımı:**
```sql
SELECT CONCAT(ad, soyad) AS TamAd FROM ogrenciler;
-- Çıktı: AhmetYılmaz (Araya boşluk koymadı!)
```

**Sorun:** Eğer araya boşluk koymak isterseniz, boşluğu da parametre olarak vermelisiniz:
```sql
SELECT CONCAT(ad, ' ', soyad) AS TamAd FROM ogrenciler;
-- Çıktı: Ahmet Yılmaz
```

⚠️ **Dikkat:** Eğer birleştirilen değerlerden biri `NULL` ise, sonuç tamamen `NULL` olur!

---

### 2. CONCAT_WS (Concatenate With Separator)

"Ayraçlı Birleştirme" anlamına gelir. İlk parametre **ayraçtır**, sonraki tüm metinlerin arasına bu ayracı koyar.

**Kullanımı:**
```sql
CONCAT_WS(ayrac, metin1, metin2, metin3, ...)
```

**Örnek (Ad Soyad Birleştirme):**
```sql
SELECT CONCAT_WS(' ', ad, soyad) AS TamAd FROM ogrenciler;
-- Çıktı: Ahmet Yılmaz
```

**Örnek (Adres Birleştirme):**
```sql
SELECT CONCAT_WS(', ', mahalle, sokak, no, ilce, il) AS TamAdres FROM adresler;
-- Çıktı: Çiçek Mah., Gül Sok., No:5, Kadıköy, İstanbul
```

✅ **Avantajı:** `NULL` değerleri otomatik olarak atlar (yoksayar), sonucu bozmaz.

---

## Özet

*   **Fonksiyonlar**, veriyi işlemek ve dönüştürmek için kullandığımız araçlardır.
*   **CONCAT**, metinleri yapıştırır (`NULL` varsa sonuç yok olur).
*   **CONCAT_WS**, araya ayraç koyarak birleştirir (`NULL` güvenlidir).

Bir sonraki dersimizde, metinlerin parçalanması (`SUBSTRING`) ve değiştirilmesi (`REPLACE`) konularına değineceğiz.
