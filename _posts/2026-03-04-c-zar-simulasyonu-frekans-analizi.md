---
layout: post
title: "C'de Zar Simülasyonu ve Frekans Analizi (3.600.000 Deneme)"
date: 2026-03-04
categories: algoritma-ve-programlama-ii
---

Bu derste iki zar atma simülasyonunu, frekans hesabını ve verdiğiniz kodun güçlü/zayıf yönlerini detaylı biçimde inceleyeceğiz.

Verilen kodun amacı:

- 2 zarı çok sayıda atmak,
- toplamı bulmak,
- her toplamın kaç kez geldiğini bir dizide tutmak.

---

## 1) Kodun Genel Mantığı

İki adım var:

1. **Simülasyon döngüsü** (3.600.000 kez):
   - `zar1` üret
   - `zar2` üret
   - `toplam = zar1 + zar2`
   - `zarFrekans[toplam]++`

2. **Raporlama döngüsü**:
   - Dizi içindeki frekansları ekrana yazdır

---

## 2) Satır Satır Açıklama

```c
#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
#include <time.h>
```

- `stdio.h`: `printf`
- `stdlib.h`: `rand`, `srand`
- `stdbool.h`: `bool` tipi (bu kodda aslında kullanılmıyor)
- `time.h`: `time(NULL)` ile tohum üretimi

```c
int zar1 = 0, zar2 = 0;
int toplam;
int sayac;
int zarFrekans[13] = {0};
```

- `zar1`, `zar2`: 1–6 arası değer alacak.
- `toplam`: 2–12 arası olacak.
- `zarFrekans[13]`: indeksleri 0..12.
  - Gerçekte sadece 2..12 kullanılır.
  - `0` ve `1` indeksi her zaman 0 kalır.

```c
srand(time(NULL));
```

- Rastgele üreticiyi başlatır.
- Program her çalıştığında farklı sonuçlar üretilmesi için gerekli.

```c
for(sayac = 0; sayac < 3600000; sayac ++){
    zar1 = rand() % 6 + 1;
    zar2 = rand() % 6 + 1;
    toplam = zar1 + zar2;

    printf("1. Zar = %d\n2. Zar = %d\nToplam = %d\n", zar1, zar2, toplam);

    zarFrekans[toplam] ++;
}
```

- 3.600.000 deneme yapılır.
- Her denemede iki bağımsız zar üretilir.
- Frekans dizisinde ilgili toplam bir artırılır.

```c
for(sayac = 0; sayac < 13; sayac ++){
    printf("%d. gelen zar frakansi = %d' dir\n", sayac, zarFrekans[sayac]);
}
```

- 0'dan 12'ye kadar yazdırır.
- 0 ve 1 anlamsız olduğu için raporlamada `2..12` yazdırmak daha doğrudur.

---

## 3) Bu Kodda Kritik Problem

Kodun temel problemi şu satır:

```c
printf("1. Zar = %d\n2. Zar = %d\nToplam = %d\n", zar1, zar2, toplam);
```

Bu satır **3.600.000 kez** çalışıyor.

- Her turda 3 satır basıyor.
- Toplamda yaklaşık **10.800.000 satır çıktı** üretir.
- Programın asıl maliyeti hesaplama değil, terminale yazma olur.

Yani simülasyon doğru ama performans gereksiz yere düşer.

---

## 4) Düzeltilmiş ve Öğretici Sürüm

Aşağıdaki sürüm, aynı işi doğru ve hızlı yapar; ayrıca olasılık yüzdelerini de gösterir.

```c
#include <stdio.h>
#include <stdlib.h>
#include <time.h>

#define DENEME_SAYISI 3600000

int main(void)
{
    int zarFrekans[13] = {0};

    srand((unsigned)time(NULL));

    for (int i = 0; i < DENEME_SAYISI; i++) {
        int zar1 = rand() % 6 + 1;
        int zar2 = rand() % 6 + 1;
        int toplam = zar1 + zar2;
        zarFrekans[toplam]++;
    }

    printf("Toplam\tFrekans\tYuzde\n");
    for (int toplam = 2; toplam <= 12; toplam++) {
        double yuzde = 100.0 * zarFrekans[toplam] / DENEME_SAYISI;
        printf("%d\t%d\t%.4f%%\n", toplam, zarFrekans[toplam], yuzde);
    }

    return 0;
}
```

---

## 5) Neden 7 En Çok Gelir?

İki zarın toplamları eşit olasılıklı değildir.

- Toplam 2: sadece `(1,1)` → 1 kombinasyon
- Toplam 7: `(1,6),(2,5),(3,4),(4,3),(5,2),(6,1)` → 6 kombinasyon
- Toplam 12: sadece `(6,6)` → 1 kombinasyon

Toplam kombinasyon sayısı 36 olduğu için:

- `P(7) = 6/36 = 1/6 ≈ %16.67`
- `P(2) = 1/36 ≈ %2.78`
- `P(12)= 1/36 ≈ %2.78`

Simülasyon sonucu bu teorik değerlere yakınsar.

---

## 6) Teorik ve Deneysel Sonuç Karşılaştırma

| Toplam | Teorik Olasılık | Beklenen Davranış |
|---|---:|---|
| 2 | 1/36 ≈ %2.78 | az |
| 3 | 2/36 ≈ %5.56 | düşük |
| 4 | 3/36 ≈ %8.33 | artar |
| 5 | 4/36 ≈ %11.11 | artar |
| 6 | 5/36 ≈ %13.89 | yüksek |
| 7 | 6/36 ≈ %16.67 | en yüksek |
| 8 | 5/36 ≈ %13.89 | tekrar düşer |
| 9 | 4/36 ≈ %11.11 | düşer |
| 10 | 3/36 ≈ %8.33 | daha az |
| 11 | 2/36 ≈ %5.56 | düşük |
| 12 | 1/36 ≈ %2.78 | az |

Bu tablo çan eğrisi benzeri simetrik bir dağılım verir.

---

## 7) Alternatif ve Daha Efektif İyileştirmeler

## Alternatif A — Fonksiyonlara Bölmek (okunabilirlik)

Kod şu fonksiyonlara ayrılabilir:

- `zarAt()` → 1-6 döndürür
- `simulasyonYap(frekans, deneme)`
- `raporYazdir(frekans, deneme)`

Bu yaklaşım sınavda puan kazandırır çünkü yapı temiz görünür.

## Alternatif B — `rand()%6` yerine daha kaliteli RNG

Akademik doğruluk için çok büyük simülasyonlarda daha kaliteli rastgele üreteçler tercih edilir. Ama ders seviyesinde `rand()` yeterlidir.

## Alternatif C — `long long` frekans

Deneme sayısı çok büyürse (`100 milyon+`) `int` yerine `long long` güvenli olur:

```c
long long zarFrekans[13] = {0};
```

---

## 8) Sık Yapılan Hatalar

1. `srand` çağrısını döngü içinde yapmak (yanlış)
   - Aynı saniyede aynı seed ile tekrar eden sayı üretimi olur.
2. `zarFrekans` dizisini sıfırlamamak
3. 0 ve 1 toplamlarını anlamlı sanmak
4. Aşırı `printf` kullanıp programı yavaşlatmak

---

## 9) Mini Ödevler (Bu Konuyu Derinleştirmek İçin)

1. Programı, sadece **çift toplamların** frekansını raporlayacak şekilde değiştirin.
2. Deneme sayısını kullanıcıdan alın ve sonuçları teorik olasılıkla aynı tabloda kıyaslayın.
3. En büyük mutlak hatayı hesaplayın:
   - `|deneysel_olasılık - teorik_olasılık|`

---

## 10) Kısa Özet

- Kodun temel fikri doğru: iki zarı simüle edip toplam frekansını tutuyor.
- En büyük sorun: döngü içinde gereksiz çıktı.
- Frekans analizi ve olasılık karşılaştırması eklendiğinde, konu yalnızca "dizi" değil aynı zamanda "istatistiksel düşünme" egzersizine dönüşür.
