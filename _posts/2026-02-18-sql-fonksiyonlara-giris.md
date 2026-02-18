---
layout: post
title: "SQL Fonksiyonlarına Giriş: Veriyi İşlemenin Akıllı Yolu"
date: 2026-02-18 11:00:00 +0300
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

---

## Metin Analizi ve Dönüştürme Fonksiyonları

Veriyi sadece birleştirmek yetmez; bazen içini ölçmek, değiştirmek veya içinde arama yapmak gerekir. İşte bu işler için el aletlerimiz:

### 3. LENGTH (Uzunluk Ölçme)

Bir metnin (veya sütundaki verinin) kaç karakterden oluştuğunu verir. Boşluklar da karakter sayılır!

**Neden Kullanırız?**
*   Veri temizliği: "TC Kimlik No 11 haneli mi?" kontrolü için.
*   Kısıtlama kontrolü: "Kullanıcı adı çok kısa mı?"

**Kullanımı:**
```sql
LENGTH(metin)
```

**Örnek:**
```sql
SELECT LENGTH('Veri Tabanı');
-- Çıktı: 11 (Boşluk dahil!)
```

**Pratik Örnek:**
```sql
-- Telefon numarası 10 haneden eksik/fazla olan hatalı kayıtları bul:
SELECT * FROM musteriler WHERE LENGTH(telefon) != 10;
```

---

### 4. REPLACE (Bul ve Değiştir)

Bir metnin içindeki belirli bir ifadeyi bulup, başka bir ifadeyle değiştirir. Tıpkı Word'deki "Bul ve Değiştir" gibi.

**Neden Kullanırız?**
*   Veri standardizasyonu: "İst" yazanları "İstanbul" yapmak için.
*   Hatalı karakter temizliği: Telefon numaralarındaki boşlukları veya tireleri kaldırmak için.

**Kullanımı:**
```sql
REPLACE(metin, 'aranan', 'yeni_deger')
```

**Örnek:**
```sql
SELECT REPLACE('Veri Tabanı Yönetimi', ' ', '_');
-- Çıktı: Veri_Tabanı_Yönetimi (Boşluklar alt tire oldu)
```

**Pratik Örnek:**
```sql
-- Telefon numaralarındaki tireleri temizle:
UPDATE musteriler SET telefon = REPLACE(telefon, '-', '');
-- '555-123-4567' -> '5551234567' olur.
```

---

### 5. INSTR (Konum Bulma - In String)

Bir metnin içinde, başka bir metnin **kaçıncı karakterden başladığını** verir. Eğer bulamazsa `0` döner.

**Neden Kullanırız?**
*   E-posta adresi geçerli mi? (İçinde '@' var mı?)
*   Bir metni belirli bir karakterden bölmek için o karakterin yerini bulmada.

**Kullanımı:**
```sql
INSTR(ana_metin, 'aranan_metin')
```

**Örnek:**
```sql
SELECT INSTR('bilgi@alyaka.com', '@');
-- Çıktı: 6 (Altıncı karakter '@' işareti)
```

**Pratik Örnek:**
```sql
-- E-posta adresinde '@' işareti olmayan (hatalı) kayıtları bul:
SELECT * FROM uyeler WHERE INSTR(email, '@') = 0;
```

---

### 6. REVERSE (Ters Çevirme)

Adı üzerinde, metni aynadan yansımış gibi ters çevirir.

**Neden Kullanırız?**
*   Genellikle veri şifreleme veya karmaşık string manipülasyonlarında yardımcı olarak kullanılır.
*   Palindrom (tersten okunuşu aynı olan) kelime kontrolü.
*   Dosya uzantısı bulma (Bazen dosya adını ters çevirip ilk noktayı bulmak daha kolaydır).

**Kullanımı:**
```sql
REVERSE(metin)
```

**Örnek:**
```sql
SELECT REVERSE('Veri');
-- Çıktı: ireV
```

**Pratik Örnek (Eğlenceli):**
```sql
-- Adı tersten de aynı olan (palindrom) müşterileri bul (Örn: Ece, Ada):
SELECT ad FROM musteriler WHERE ad = REVERSE(ad);
```

---

## Özet

Bu derste heybemize şunları kattık:

*   **LENGTH**: "Bu veri ne kadar uzun?" (Doğrulama için birebir).
*   **REPLACE**: "Bunu şununla değiştir." (Temizlik işleri).
*   **INSTR**: "Aradığım şey nerede?" (Konum bulma).
*   **REVERSE**: "Ters çevir." (Simetri ve ileri düzey işlemler).

Bir sonraki dersimizde, metinlerin içinden parça koparmamızı sağlayan `SUBSTRING` ve `LEFT/RIGHT` fonksiyonlarına dalacağız. Hazır olun, cerrahi operasyon yapacağız! 🔪

