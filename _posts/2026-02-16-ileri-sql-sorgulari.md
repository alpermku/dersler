---
layout: post
title: "Ileri SQL Sorgulari ve Optimizasyon"
date: 2026-02-16
categories: veri-tabani-yonetim-sistemleri-ii
---

Bu hafta Veri Tabani Yonetim Sistemleri II dersinde ileri SQL sorgulari ve sorgu optimizasyonu konularini isliyoruz.

## Alt Sorgular (Subqueries)

Alt sorgular, bir SQL sorgusu icinde yer alan baska bir SQL sorgusudur.

### Skaler Alt Sorgu

```sql
SELECT ad, soyad,
  (SELECT AVG(not_ortalamasi)
   FROM notlar
   WHERE notlar.ogrenci_id = ogrenciler.id) AS ortalama
FROM ogrenciler;
```

### Koreli (Correlated) Alt Sorgu

```sql
SELECT *
FROM ogrenciler o
WHERE not_ortalamasi > (
  SELECT AVG(not_ortalamasi)
  FROM ogrenciler
  WHERE bolum_id = o.bolum_id
);
```

## JOIN Cesitleri

| JOIN Tipi | Aciklama |
|-----------|----------|
| INNER JOIN | Iki tabloda eslesenleri getirir |
| LEFT JOIN | Sol tablodaki tum kayitlari getirir |
| RIGHT JOIN | Sag tablodaki tum kayitlari getirir |
| FULL OUTER JOIN | Her iki tablodaki tum kayitlari getirir |
| CROSS JOIN | Kartezyen carpim olusturur |

## Sorgu Optimizasyonu

Performansli sorgular yazmak icin dikkat edilmesi gerekenler:

1. **Index kullanimi:** Sik sorgulanan sutunlara index ekleyin
2. **SELECT * kullanmayin:** Sadece gerekli sutunlari secin
3. **WHERE kosullari:** Mumkun oldugunca erken filtreleyin
4. **EXPLAIN ANALYZE:** Sorgu planini inceleyin

```sql
-- Yavas
SELECT * FROM siparisler WHERE YEAR(tarih) = 2026;

-- Hizli
SELECT * FROM siparisler
WHERE tarih >= '2026-01-01' AND tarih < '2027-01-01';
```

> Iyi bir veritabani tasarimi, performansli sorgularin temelidir. Normalizasyon kurallarini unutmayin!

Gelecek hafta **stored procedures ve triggers** konusunu isleyecegiz.
