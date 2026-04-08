---
layout: post
title: "SQL'de Alt Sorgular (Subqueries): Sorgu İçinde Sorgu"
date: 2026-04-08 10:00:00 +0300
categories: veri-tabani-yonetim-sistemleri-ii
---

> *"Soran kişi, cevabı bulmaya en yakın olan kişidir. Doğru soruyu sormak ise, cevabın ta kendisidir."*

Yönetim Bilişim Sistemleri dünyasında veriler, işletmelerin can damarıdır. İkinci sınıf seviyesine gelmiş bir YBS uzman adayı olarak, basit `SELECT` sorgularıyla veritabanından veri çekmenin temellerini zaten aştınız. Ancak gerçek dünya, basit sorularla yetinmez. "En yüksek borcu olan müşteri kim?" sorusu kolaydır. Fakat "Ortalama borç miktarının üzerinde borcu olup, son altı ayda hiç ödeme yapmamış olan müşterilerin bulundukları şehre göre dağılımı nedir?" gibi karmaşık bir iş problemiyle karşılaştığınızda, elinizdeki standart araçlar yetersiz kalmaya başlar.

İşte tam bu noktada SQL'in en güçlü silahlarından biri devreye girer: **Alt Sorgular (Subqueries)**.

Bir matruşka bebeği veya *Inception* filmi gibi düşünün — bir sorgunun içinde başka bir sorgu, onun içinde belki bir başkası daha. Bu ders, veri yığınları arasında adeta bir dedektif gibi iz sürmenizi sağlayacak. Hazırsanız, veritabanının derinliklerine iniyoruz.

---

## Alt Sorgularda Dikkat Edilecek Noktalar

Alt sorgular güçlüdür, ancak büyük güç büyük sorumluluk getirir. SQL motorunun kafasını karıştırmamak ve performans darboğazları yaratmamak için oyunun kurallarını bilmelisiniz.

> 💡 **Alt Sorgu Kuralları**
>
> 1. **Parantezlerin Gücü:** Her alt sorgu mutlaka parantezler `( )` içine alınmalıdır.
> 2. **Sütun Uyumsuzluğu:** Eğer bir eşitleme (`=`, `>`, `<`) yapıyorsanız, alt sorgu **sadece tek bir sütun** ve **tek bir değer (skaler)** döndürmelidir.
> 3. **ORDER BY Kısıtlaması:** Alt sorguların içinde genellikle `ORDER BY` kullanılmaz (MySQL'de `LIMIT` ile birlikte kullanılmadığı sürece). Çünkü alt sorgunun amacı sıralı bir liste sunmak değil, dış sorguya bir veri kümesi aktarmaktır. Sıralama işlemi en son, ana (dış) sorguda yapılır.

---

## Alt Sorgu Oluşturulması

Alt sorgular, genellikle ana (dış) sorgu çalıştırılmadan önce hesaplanır ve elde edilen sonuç dış sorguya bir parametre gibi aktarılır.

Bunu klasik bir *veresiye defteri* veritabanı üzerinden düşünelim. `Musteriler` ve `Veresiye_Islemleri` tablolarımız olsun.

**Soru:** İşletmedeki *ortalama* borç miktarından daha fazla borcu olan müşteriler kimlerdir?

Burada iki adım var: önce ortalamayı bul (iç sorgu), sonra bu ortalamadan büyük olanları listele (dış sorgu).

```sql
SELECT MusteriAd, MusteriSoyad, ToplamBorc
FROM Musteriler
WHERE ToplamBorc > (
    -- İÇ SORGU: ortalamayı hesaplar ve dış sorguya aktarır
    SELECT AVG(ToplamBorc)
    FROM Musteriler
);
```

SQL motoru önce parantez içini çalıştırır. Varsayalım ortalama 5000 TL çıktı — sorgu anında şuna dönüşür: `WHERE ToplamBorc > 5000`. Kusursuz ve dinamik bir çözüm!

---

## Alt Sorgularda IN ve NOT IN Kullanımı

Eşittir (`=`) operatörü sadece tek bir değerle başa çıkabilir. Peki ya alt sorgunuz birden fazla satır döndürürse? O zaman sahneye `IN` ve `NOT IN` operatörleri çıkar.

**Soru:** Bir klinik otomasyonunda, sistemde *bugün* için randevusu olan doktorların isimlerini listelemek istiyoruz.

```sql
-- IN: Listede yer alan doktorları getirir
SELECT DoktorAd, UzmanlikAlani
FROM Doktorlar
WHERE DoktorID IN (
    -- Bugün randevusu olan DoktorID'leri döndürür
    SELECT DISTINCT DoktorID
    FROM Randevular
    WHERE RandevuTarihi = CURDATE()
);
```

`NOT IN` ile tam tersini yaparız — *"Bugün hiç randevusu olmayan, yani boşta olan doktorları"* buluruz:

```sql
-- NOT IN: Listede YER ALMAYAN doktorları getirir
SELECT DoktorAd, UzmanlikAlani
FROM Doktorlar
WHERE DoktorID NOT IN (
    SELECT DISTINCT DoktorID
    FROM Randevular
    WHERE RandevuTarihi = CURDATE()
);
```

İşletme mantığı açısından paha biçilemez bir esneklik — aynı sorgu şablonundan, tek bir anahtar kelime değişikliğiyle tamamen zıt sonuçlar elde edebiliyorsunuz.

---

## Alt Sorgularda GROUP BY ve HAVING Kullanımı

Alt sorguların içinde kümeleme fonksiyonlarını (`SUM`, `COUNT`, `MAX` vb.) kullanarak çok daha rafine filtreler oluşturabilirsiniz.

**Soru:** Şirketteki departmanlar arasında, *en düşük ortalama maaşa* sahip departmandan daha yüksek ortalama maaşı olan departmanları bulun.

```sql
SELECT DepartmanID, AVG(Maas) AS OrtalamaMaas
FROM Personel
GROUP BY DepartmanID
HAVING AVG(Maas) > (
    -- En düşük departman ortalamasını bulur
    SELECT MIN(OrtMaas)
    FROM (
        SELECT AVG(Maas) AS OrtMaas
        FROM Personel
        GROUP BY DepartmanID
    ) AS DepartmanOrtalama
);
```

Burada `HAVING` cümlesini, bir alt sorgunun ürettiği dinamik bir değerle besledik. Normalizasyon kurallarına uygun tasarlanmış bir veritabanında bu sorgular adeta şiir gibi çalışır.

---

## Alt Sorgularda ANY ve ALL Kullanımı

Bu iki operatör, bir değeri bir liste dolusu değerle karşılaştırırken *"Nasıl karşılaştırayım?"* sorusuna cevap verir.

- `> ANY (...)` → Listenin içindeki **herhangi bir** değerden büyükse şart sağlanır (listenin en küçük elemanından büyük olması yeterlidir).
- `> ALL (...)` → Listenin içindeki **tüm** değerlerden büyükse şart sağlanır (listenin en büyük elemanından bile büyük olmalıdır).

**ANY Örneği:** 'Satış' departmanındaki *herhangi bir* personelden daha yüksek maaş alan 'Pazarlama' personellerini bul:

```sql
SELECT PersonelAd, Maas
FROM Personel
WHERE Departman = 'Pazarlama'
  AND Maas > ANY (
    SELECT Maas
    FROM Personel
    WHERE Departman = 'Satış'
);
-- Sonuç: Satıştaki en düşük maaştan fazla kazanan tüm Pazarlama personeli
```

**ALL Örneği:** 'Satış' departmanındaki *tüm* personelden daha yüksek maaş alan 'Pazarlama' personellerini bul (yani Satış'ın zirvesini bile geçenler):

```sql
SELECT PersonelAd, Maas
FROM Personel
WHERE Departman = 'Pazarlama'
  AND Maas > ALL (
    SELECT Maas
    FROM Personel
    WHERE Departman = 'Satış'
);
-- Sonuç: Satıştaki en yüksek maaştan bile fazla kazanan Pazarlama personeli
```

**Kısa Fark Tablosu:**

| Operatör | Koşul | Eşdeğeri |
|----------|-------|----------|
| `> ANY` | Listenin en küçüğünden büyük | `> MIN(...)` |
| `> ALL` | Listenin en büyüğünden büyük | `> MAX(...)` |
| `= ANY` | Listede en az bir eşleşme var | `IN (...)` |

---

## Alt Sorgularda EXISTS ve NOT EXISTS Kullanımı

> ⚠️ **Performansın Altın Anahtarı**
>
> Veritabanı büyüdükçe, `IN` operatörü hantallaşabilir. Büyük veri setlerinde varlık kontrolü yaparken `EXISTS` kullanmak, sorgu performansını dramatik ölçüde artırır. Çünkü `EXISTS`, eşleşen **ilk kaydı bulduğu an aramayı durdurur** (`TRUE` döner), `IN` ise tüm listeyi taramaya devam edebilir.

`EXISTS`, genellikle **İlişkili Alt Sorgular (Correlated Subqueries)** ile kullanılır — yani iç sorgu, çalışabilmek için dış sorgudan bir veriye ihtiyaç duyar.

**EXISTS Örneği:** Bugüne kadar en az bir kez sipariş vermiş (aktif) müşterileri getir:

```sql
SELECT MusteriAd, Sehir
FROM Musteriler M
WHERE EXISTS (
    SELECT 1
    FROM Siparisler S
    WHERE S.MusteriID = M.MusteriID  -- Dış sorgu ile bağlantı burada!
);
```

Sorgu motoru her müşteri için `Siparisler` tablosuna bakar. İlk siparişi gördüğü an "Bu müşteri aktif" der ve diğer siparişlerine bakmadan bir sonraki müşteriye geçer. Sistem kaynaklarını yormayan zarif bir yapı.

**NOT EXISTS Örneği:** Hiç sipariş vermemiş (pasif) müşterileri getir:

```sql
SELECT MusteriAd, Sehir
FROM Musteriler M
WHERE NOT EXISTS (
    SELECT 1
    FROM Siparisler S
    WHERE S.MusteriID = M.MusteriID
);
-- Sonuç: Siparisler tablosunda kaydı BULUNMAYAN müşteriler
```

Pazarlama departmanı bu listeyi alır, pasif müşterilere özel kampanya gönderir. Gerçek iş değeri, doğrudan bu sorgudan doğar.

---

## Sütun İfadesinde (SELECT) Alt Sorgu Kullanımı

Alt sorguları sadece `WHERE` veya `HAVING` içinde kullanmak zorunda değilsiniz. Doğrudan `SELECT` ifadesinin yanına, yeni bir sütun üretiyormuş gibi de yazabilirsiniz.

**Kural:** Buraya yazacağınız alt sorgu **kesinlikle tek bir hücre (skaler değer)** döndürmelidir.

**Soru:** Bir okul yönetim sisteminde öğrencilerin notlarını listelerken, hemen yanında sınıfın genel ortalamasını ve ortalamadan farkını da göstermek istiyoruz:

```sql
SELECT
    OgrenciNo,
    Ad,
    MatematikNotu,
    (SELECT AVG(MatematikNotu) FROM Ogrenciler) AS SinifOrtalamasi,
    MatematikNotu - (SELECT AVG(MatematikNotu) FROM Ogrenciler) AS OrtalamadanFark
FROM Ogrenciler;
```

Bu sayede her satırda öğrencinin notunu genel ortalama ile yan yana görebilir, aradaki farkı anında hesaplatabilirsiniz. Raporlama ekranları tasarlarken bu veri formatı hayat kurtarır.

---

## FROM İfadesinde Alt Sorgu: Türetilmiş Tablolar

SQL'in en büyüleyici özelliklerinden biri şudur: bir sorgunun sonucunu, sanki fiziksel bir tabloymuş gibi `FROM` ifadesinin içinde kullanabilirsiniz. Buna **Türetilmiş Tablo (Derived Table)** denir.

**Kural:** `FROM` içinde kullanılan her alt sorguya mutlaka bir takma isim (alias) verilmelidir.

**Örnek:** Sadece 2025 yılında işe girenleri geçici bir tablo gibi tutup, departman bazında gruplayalım:

```sql
SELECT YeniPersonel.Departman, COUNT(*) AS KisiSayisi
FROM (
    -- Bu sorgunun sonucu sanal bir tabloya dönüşür
    SELECT PersonelID, Departman
    FROM Personel
    WHERE YEAR(IseGirisTarihi) = 2025
) AS YeniPersonel          -- ← Takma isim zorunlu!
GROUP BY YeniPersonel.Departman;
```

Karmaşık hesaplamaları adım adım parçalara bölerken veriyi manipüle etmek için mükemmel bir yöntemdir. CTE (Common Table Expression) öğrenmeden önce türetilmiş tablolar, bu ihtiyacı karşılamanın en temiz yoludur.

---

## Bölüm Özeti

Bu derste SQL mimarisinin yapı taşlarından olan alt sorguları inceledik.

- İç içe yapıların veritabanında nasıl esneklik sağladığını gördük.
- `WHERE` ile filtreleme yaparken statik değerler yerine **dinamik hesaplamalar** kullandık.
- Birden fazla değer dönen durumlarda `IN` / `NOT IN` ve `ANY` / `ALL` mekanizmalarını karşılaştırdık.
- Milyonlarca satırlık veritabanlarında performans darboğazlarını aşmak için `EXISTS` ve `NOT EXISTS` komutlarının gücünü keşfettik.
- Sadece filtrelemede değil, veri görselleştirmesinde (`SELECT` sütunları) ve sanal tablolar oluşturmada (`FROM`) alt sorguların nasıl kullanılacağını pekiştirdik.

Unutmayın: iyi bir YBS uzmanı sadece kod yazan kişi değil, arka plandaki veri yapısını ve sorgu maliyetini düşünerek en verimli, en temiz kodu yazan kişidir.

---

## Çalışma Soruları

Öğrendiklerinizi pratiğe dökme vakti! Aşağıdaki senaryoları doğru veritabanı kurallarını göz önünde bulundurarak MySQL'de çözmeye çalışın.

1. **Fiyat Analizi:** `Urunler` tablosunda, kendi kategorisindeki ortalama ürün fiyatından *daha pahalıya* satılan ürünlerin adını, fiyatını ve kategorisini listeleyin (`WHERE` içinde alt sorgu kullanarak).

2. **Pasif Müşteriler:** `Musteriler` tablosunda olup `Satislar` tablosunda hiçbir hareketi bulunmayan müşterileri `NOT EXISTS` komutunu kullanarak listeleyiniz.

3. **Türetilmiş Rapor:** Müşterilerin toplam alışveriş tutarlarını bir alt sorgu ile hesaplayıp (`FROM` içinde türetilmiş tablo), sadece 10.000 TL üzerinde toplam alışveriş yapanları ana sorguda gruplayan kodu yazınız.

4. **Muhakeme Sorusu:** Bir alt sorgunun `IN` operatörü yerine `EXISTS` ile kullanılmasının tercih edildiği durumlar nelerdir? İşletme performansına etkisini açıklayınız.
