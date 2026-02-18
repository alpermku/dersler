---
layout: post
title: "MySQL'de Metin Parçalama: SUBSTRING ve SUBSTR Fonksiyonları"
date: 2026-02-18 11:15:00 +0300
categories: veri-tabani-yonetim-sistemleri-ii
course_id: veri-tabani-yonetim-sistemleri-ii
tags: [sql, mysql, substring, substr, string-fonksiyonlari]
---

# Metinlerin İçinden Parça Çekmek

Veritabanında bazen bir metnin tamamına değil, sadece belirli bir kısmına ihtiyaç duyarız. Örneğin:
*   Bir TC Kimlik numarasının sadece ilk 3 hanesini gizlemek.
*   Bir e-posta adresinden sadece kullanıcı adını (@ işaretinden öncesini) almak.
*   Bir ürün kodunun (Örn: `ABC-1234`) sadece seri numarasını (`1234`) okumak.

İşte bu tür durumlarda `SUBSTRING` (veya kısa adıyla `SUBSTR`) fonksiyonu kullanılır.

## Sözdizimi (Syntax)

```sql
SUBSTRING(metin, baslangic_konumu, uzunluk)
-- veya
SUBSTR(metin, baslangic_konumu, uzunluk)
```

*   **metin:** Parçalanacak ana metin veya sütun adı.
*   **baslangic_konumu:** Kaçıncı karakterden başlanacak? (Dikkat: SQL'de indeksler **1'den başlar**, 0'dan değil!)
*   **uzunluk (Opsiyonel):** Kaç karakter alınacak? Eğer belirtilmezse, başlangıçtan metnin sonuna kadar alır.

> **Bilgi:** `SUBSTR` ile `SUBSTRING` tamamen aynıdır. `SUBSTR`, `SUBSTRING`'in takma adıdır (alias).

---

## Örnekler

### 1. Belirli Bir Uzunlukta Kesme

Metnin 2. karakterinden başlayıp 3 karakter alalım.

```sql
SELECT SUBSTRING('OpenClaw', 2, 3);
-- Çıktı: 'pen'
-- Açıklama: 2. karakter 'p'. Buradan itibaren 3 karakter say: p, e, n.
```

### 2. Sonuna Kadar Alma (Uzunluk Belirtmeden)

Sadece başlangıç verip, uzunluk vermezsek ne olur?

```sql
SELECT SUBSTR('VeriTabanı', 5);
-- Çıktı: 'Tabanı'
-- Açıklama: 5. karakter 'T'. Buradan başla ve sonuna kadar git.
```

### 3. Sondan Başlayarak Kesme (Negatif İndeks)

Eğer başlangıç konumunu **negatif** verirseniz, saymaya **sondan** başlar.

```sql
SELECT SUBSTRING('Merhaba Dünya', -5);
-- Çıktı: 'Dünya'
-- Açıklama: Sondan 5. karakter 'D' harfidir. Buradan başla ve sona kadar git.
```

```sql
SELECT SUBSTR('123456789', -4, 2);
-- Çıktı: '67'
-- Açıklama: Sondan 4. karakter '6'. Buradan itibaren 2 karakter al: 6, 7.
```

---

## Gerçek Hayat Senaryosu: E-Posta Gizleme

Kullanıcıların e-posta adreslerini veritabanında saklıyoruz ama raporda sadece ilk 3 harfini gösterip gerisini `***` ile gizlemek istiyoruz.

Tablomuz (`kullanicilar`):
| id | email |
|---|---|
| 1 | ahmet@mail.com |
| 2 | elif.yilmaz@test.com |

**Sorgu:**
```sql
SELECT 
    email,
    CONCAT(SUBSTR(email, 1, 3), '***') AS GizliEmail 
FROM kullanicilar;
```

**Sonuç:**
| email | GizliEmail |
|---|---|
| ahmet@mail.com | ahm*** |
| elif.yilmaz@test.com | eli*** |

Bu örnekte `SUBSTR` ile ilk 3 harfi aldık, sonra `CONCAT` ile sonuna yıldız ekledik.

## Özet

*   `SUBSTRING` ve `SUBSTR` aynıdır.
*   İndeksler **1'den başlar**.
*   Pozitif sayı: Baştan sayar.
*   Negatif sayı: Sondan sayar.
*   Uzunluk belirtilmezse sona kadar alır.

Bir sonraki derste metinlerin içindeki karakterleri değiştiren `REPLACE` ve `INSERT` fonksiyonlarını inceleyeceğiz.
