---
layout: post
title: "Veri Temizliği: UPPER, LOWER ve TRIM Fonksiyonları ile Veriyi Düzenlemek"
date: 2026-02-18
categories: veri-tabani-yonetim-sistemleri-ii
course_id: veri-tabani-yonetim-sistemleri-ii
tags: [sql, mysql, upper, lower, trim, ltrim, rtrim, string-fonksiyonlari]
---

# Kirli Veriyle Başa Çıkmak

Kullanıcılar veri girişi yaparken hata yaparlar. Adlarını "aHMET" yazabilirler, soyadlarının sonuna yanlışlıkla boşluk bırakabilirler ("YILMAZ ").

Bu tür tutarsızlıklar, veritabanında arama yaparken sorun çıkarır (`'YILMAZ'` ararsınız ama `'YILMAZ '` olduğu için bulamazsınız). İşte bu yüzden veriyi standart hale getirmek (normalize etmek) gerekir.

---

## 1. Büyük/Küçük Harf Dönüşümü

Metinleri tek bir standarda (tamamı büyük veya tamamı küçük) getirmek için kullanılır.

### UPPER (Büyük Harf)

Metindeki tüm harfleri büyütür. Türkçe karakter desteği veritabanı ayarlarına (collation) bağlıdır.

```sql
SELECT UPPER('merhaba dünya');
-- Çıktı: 'MERHABA DÜNYA'
```

### LOWER (Küçük Harf)

Metindeki tüm harfleri küçültür.

```sql
SELECT LOWER('SQL DERSLERİ');
-- Çıktı: 'sql dersleri'
```

---

## 2. Boşluk Temizleme (Trimming)

Metinlerin başında veya sonundaki gereksiz boşlukları silmek için kullanılır.

### LTRIM (Left Trim)

Metnin **solundaki (başındaki)** boşlukları siler.

```sql
SELECT LTRIM('   Veri Tabanı');
-- Çıktı: 'Veri Tabanı' (Başındaki 3 boşluk gitti)
```

### RTRIM (Right Trim)

Metnin **sağındaki (sonundaki)** boşlukları siler.

```sql
SELECT RTRIM('Veri Tabanı   ');
-- Çıktı: 'Veri Tabanı' (Sonundaki 3 boşluk gitti)
```

### TRIM (Her İki Tarafı Temizleme)

Hem baştaki hem de sondaki boşlukları siler. En sık kullanılan yöntemdir.

```sql
SELECT TRIM('   Veri Tabanı   ');
-- Çıktı: 'Veri Tabanı'
```

---

## 3. Gelişmiş TRIM Kullanımı (LEADING, TRAILING, BOTH)

`TRIM` fonksiyonu sadece boşlukları değil, **istediğimiz herhangi bir karakteri** de silebilir!

**Sözdizimi:**
```sql
TRIM([{BOTH | LEADING | TRAILING} [silinecek_karakter] FROM] metin)
```

*   **LEADING:** Sadece baştan sil.
*   **TRAILING:** Sadece sondan sil.
*   **BOTH:** Hem baştan hem sondan sil (Varsayılan).

### Örnek 1: Sadece Sondaki Soru İşaretlerini Silme

```sql
SELECT TRIM(TRAILING '?' FROM 'Nasılsın???');
-- Çıktı: 'Nasılsın'
-- Açıklama: Metnin sonundaki tüm '?' işaretlerini temizledi.
```

### Örnek 2: Baştaki Sıfırları Silme

```sql
SELECT TRIM(LEADING '0' FROM '00012345');
-- Çıktı: '12345'
-- Açıklama: Sayının başındaki gereksiz sıfırları attı.
```

### Örnek 3: Hem Baştaki Hem Sondaki Yıldızları Silme

```sql
SELECT TRIM(BOTH '*' FROM '***DİKKAT***');
-- Çıktı: 'DİKKAT'
```

## Özet

Bu fonksiyonlar, veritabanına gelen ham veriyi işleyip temizlemek ve raporlamaya uygun hale getirmek için vazgeçilmezdir.

*   `UPPER` / `LOWER`: Harf büyüklüğünü standartlaştırır.
*   `TRIM`: Boşlukları veya istenmeyen karakterleri temizler.
*   `LEADING` / `TRAILING`: Temizliğin yönünü belirler.

Bir sonraki derste metinlerin uzunluğunu ölçen `LENGTH` ve `CHAR_LENGTH` fonksiyonlarını inceleyeceğiz.
