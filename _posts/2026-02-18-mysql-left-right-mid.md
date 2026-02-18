---
layout: post
title: "Metinleri Kesip Biçmek: LEFT, RIGHT ve MID Fonksiyonları"
date: 2026-02-18
categories: veri-tabani-yonetim-sistemleri-ii
course_id: veri-tabani-yonetim-sistemleri-ii
tags: [sql, mysql, left, right, mid, string-fonksiyonlari]
---

# Metinlerin Sağı, Solu ve Ortası

Bir önceki dersimizde `SUBSTRING` fonksiyonunu görmüştük. Ancak bazen sadece "soldan 3 harf al" veya "sağdan 2 rakam getir" gibi daha spesifik isteklerimiz olur. İşte bu durumlar için MySQL bize `LEFT`, `RIGHT` ve `MID` fonksiyonlarını sunar.

Bu fonksiyonlar, özellikle sabit formatlı veri (TCKN, Telefon No, Ürün Kodu vb.) üzerinde çalışırken çok pratiktir.

---

## 1. LEFT (Soldan Kesme)

Bir metnin en başından (solundan) başlayarak belirtilen sayıda karakteri alır.

**Sözdizimi:**
```sql
LEFT(metin, uzunluk)
```

**Örnek:**
```sql
SELECT LEFT('Veri Tabanı', 4);
-- Çıktı: 'Veri'
-- Açıklama: En soldan başla, 4 karakter say ve al.
```

**Gerçek Hayat Örneği (Ülke Kodu):**
Uluslararası telefon numaralarından ülke kodunu (+90) ayıklamak isteyelim.

```sql
SELECT LEFT('+905551234567', 3);
-- Çıktı: '+90'
```

---

## 2. RIGHT (Sağdan Kesme)

Bir metnin en sonundan (sağından) başlayarak belirtilen sayıda karakteri alır.

**Sözdizimi:**
```sql
RIGHT(metin, uzunluk)
```

**Örnek:**
```sql
SELECT RIGHT('Veri Tabanı', 6);
-- Çıktı: 'Tabanı'
-- Açıklama: En sağdan başla, geriye doğru 6 karakter say ve al.
```

**Gerçek Hayat Örneği (Dosya Uzantısı):**
Dosya adlarından uzantıyı (.jpg, .pdf) bulmak için kullanabiliriz.

```sql
SELECT RIGHT('rapor.pdf', 3);
-- Çıktı: 'pdf'
```

---

## 3. MID (Ortadan Kesme)

Aslında `MID` fonksiyonu, daha önce öğrendiğimiz **`SUBSTRING` fonksiyonunun aynısıdır (eşanlamlısıdır)**. Ancak bazı programlama dillerinden (özellikle Basic ve Excel) gelen alışkanlık nedeniyle `MID` ismi de desteklenir.

Belirli bir başlangıç noktasından itibaren belirli sayıda karakteri alır.

**Sözdizimi:**
```sql
MID(metin, baslangic, uzunluk)
```

**Örnek:**
```sql
SELECT MID('Veri Tabanı Yönetimi', 6, 6);
-- Çıktı: 'Tabanı'
-- Açıklama: 6. karakterden başla ('T'), 6 karakter ilerle.
```

---

## Özet Tablo

| Fonksiyon | Ne Yapar? | Örnek (`'ABC-123'`) | Sonuç |
| :--- | :--- | :--- | :--- |
| **LEFT** | Soldan al | `LEFT(..., 3)` | `'ABC'` |
| **RIGHT** | Sağdan al | `RIGHT(..., 3)` | `'123'` |
| **MID** | Ortadan al | `MID(..., 5, 1)` | `'1'` |

Bu fonksiyonlar, veri temizleme ve raporlama süreçlerinde en büyük yardımcılarınızdır. Bir sonraki dersimizde metinlerin uzunluğunu ölçen `LENGTH` ve `CHAR_LENGTH` fonksiyonlarını inceleyeceğiz.
