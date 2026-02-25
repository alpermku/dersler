---
layout: post
title: "Uygulama Projesi: Depo Müdürü — 7 Günlük Stok Yönetimi Oyunu"
date: 2026-02-25
categories: algoritma-ve-programlama-ii
---

Bu derste, şimdiye kadar öğrendiğimiz tüm konuları tek bir projede birleştiriyoruz: **Depo Müdürü** oyunu. Bir şirketin depo müdürü olarak 7 gün boyunca stok yönetimi yapacak, müşteri siparişlerini karşılayacak ve dönem sonunda performansınızı analiz edeceksiniz.

> **Hedef:** Bu oyun sıfırdan yazılmıştır ve yalnızca derste işlediğimiz konuları kullanır. Her satırda hangi kavramın uygulandığını göreceksiniz.

---

## Oyunda Kullanılan Ders Konuları

| Ders Konusu | Oyundaki Kullanımı |
|---|---|
| `#define` ve sabitler | Ürün sayısı, gün sayısı, başlangıç stoğu gibi oyun parametreleri |
| Dizi tanımlama ve sıfırlama | Stok miktarları, satış sayaçları, ürün kodları |
| Döngülerle dizi işleme | Günlük sipariş döngüsü, stok kontrolü, rapor yazdırma |
| Dizi sınır ihlali koruması | Kullanıcı girişi doğrulama (geçersiz ürün numarası) |
| Frekans analizi | Günlük ve toplam satış istatistikleri |
| Karakter dizileri | Ürün adlarının saklanması ve gösterilmesi |
| `rand()` ve `srand()` | Rastgele müşteri siparişleri |

---

## Oyunun Kuralları

1. Depoda **6 farklı ürün** bulunur. Her ürünün bir kodu (karakter) ve bir adı vardır.
2. Oyun **7 gün** sürer. Her gün rastgele **3-5 müşteri siparişi** gelir.
3. Sipariş gelen ürün stokta varsa satış gerçekleşir; yoksa **kayıp satış** olarak kaydedilir.
4. Her günün sonunda **stok durumunu** görürsünüz ve **tedarik kararı** verirsiniz: hangi ürüne kaç adet eklemek istediğinizi seçersiniz.
5. Tedarik bütçeniz günlük **10 birimdir** (toplamda 70 birim).
6. 7. günün sonunda **performans raporu** çıkar: toplam satış, kayıp satış, en çok satan ürün, stok devir hızı.

---

## Tam Kaynak Kod

Aşağıdaki programı bölüm bölüm inceleyeceğiz. Önce kodun tamamını verelim, sonra her bölümü tek tek açıklayalım.

```c
#include <stdio.h>
#include <stdlib.h>
#include <time.h>

/* ============================================================
   BÖLÜM 1: SABİTLER (#define)
   Konu: #define ve Sabitler
   ============================================================ */
#define URUN_SAYISI     6
#define GUN_SAYISI      7
#define BASLANGIC_STOK  5
#define GUNLUK_BUTCE    10
#define MIN_SIPARIS     3
#define MAX_SIPARIS     5

/* ============================================================
   BÖLÜM 2: ANA PROGRAM
   ============================================================ */
int main()
{
    /* --------------------------------------------------------
       BÖLÜM 3: DİZİ TANIMLAMA VE SIFIRLAMA
       Konu: Dizi tanımlama, değer atama, sıfırlama
       -------------------------------------------------------- */

    /* Stok miktarları dizisi — her ürün başlangıçta BASLANGIC_STOK adet */
    int stok[URUN_SAYISI];

    /* Toplam satış sayacı — frekans dizisi olarak kullanılacak */
    int toplamSatis[URUN_SAYISI] = {0};

    /* Kayıp satış sayacı — stokta olmadığı için kaçırılan satışlar */
    int kayipSatis[URUN_SAYISI] = {0};

    /* Günlük satış sayacı — her gün sıfırlanacak */
    int gunlukSatis[URUN_SAYISI];

    /* Stokları başlangıç değerine ayarla */
    int i;
    for (i = 0; i < URUN_SAYISI; i++) {
        stok[i] = BASLANGIC_STOK;
    }

    /* --------------------------------------------------------
       BÖLÜM 4: KARAKTER DİZİLERİ
       Konu: char dizileri, string sabitleri, null karakter
       -------------------------------------------------------- */

    /* Ürün kodları — tek karakterlik dizi */
    char urunKodu[URUN_SAYISI] = {'K', 'M', 'D', 'T', 'Y', 'B'};

    /* Ürün adları — her biri null-terminated string
       YBS öğrencileri için tanıdık iş dünyası ürünleri */
    char urunAdi[URUN_SAYISI][20] = {
        "Klavye",
        "Mouse",
        "Docking St.",
        "Termal Macun",
        "Yedek Batarya",
        "Bileklik Pad"
    };
    /* Not: İki boyutlu karakter dizisi henüz derste işlenmedi.
       Bunu şöyle düşünün: 6 adet string yan yana dizilmiş.
       Her satır (urunAdi[0], urunAdi[1]...) bir ürünün adı. */

    /* --------------------------------------------------------
       BÖLÜM 5: RASTGELE SAYI ÜRETECİ
       Konu: srand(), rand(), mod işlemi
       -------------------------------------------------------- */
    srand(time(NULL));

    /* Oyun değişkenleri */
    int gun;
    int siparisSayisi;
    int siparisNo;
    int secilen;
    int toplamKar = 0;
    int toplamKayip = 0;
    int harcananButce = 0;

    /* --------------------------------------------------------
       BAŞLANGIÇ EKRANI
       -------------------------------------------------------- */
    printf("=============================================\n");
    printf("    DEPO MUDURU: 7 Gunluk Stok Yonetimi\n");
    printf("=============================================\n");
    printf("Bir BT tedarik deposunun mudurusunuz.\n");
    printf("%d gun boyunca musteri siparislerini\n", GUN_SAYISI);
    printf("karsilayacak ve stok kararlarinizi vereceksiniz.\n");
    printf("Gunluk tedarik butceniz: %d birim\n", GUNLUK_BUTCE);
    printf("=============================================\n\n");

    /* ============================================================
       BÖLÜM 6: ANA OYUN DÖNGÜSÜ
       Konu: Döngülerle dizi işleme, frekans sayma
       ============================================================ */
    for (gun = 1; gun <= GUN_SAYISI; gun++) {

        printf("\n--- GUN %d/%d ---\n\n", gun, GUN_SAYISI);

        /* Günlük satış sayacını sıfırla
           Konu: Dizi sıfırlama (döngüyle) */
        for (i = 0; i < URUN_SAYISI; i++) {
            gunlukSatis[i] = 0;
        }

        /* Bugünkü sipariş sayısını belirle (3 ile 5 arası)
           Konu: rand() % N + min formülü */
        siparisSayisi = rand() % (MAX_SIPARIS - MIN_SIPARIS + 1) + MIN_SIPARIS;
        printf("Bugun %d musteri siparisi geldi!\n\n", siparisSayisi);

        /* Her siparişi işle */
        for (siparisNo = 1; siparisNo <= siparisSayisi; siparisNo++) {

            /* Rastgele bir ürün seçilir (0 ile URUN_SAYISI-1 arası)
               Konu: Diziye indeks olarak rastgele erişim */
            secilen = rand() % URUN_SAYISI;

            printf("  Siparis #%d: %c - %s",
                   siparisNo, urunKodu[secilen], urunAdi[secilen]);

            /* Stok kontrolü
               Konu: Dizi elemanına erişim ve koşul kontrolü */
            if (stok[secilen] > 0) {
                stok[secilen]--;
                gunlukSatis[secilen]++;
                toplamSatis[secilen]++;
                toplamKar++;
                printf(" -> SATILDI (kalan stok: %d)\n", stok[secilen]);
            } else {
                kayipSatis[secilen]++;
                toplamKayip++;
                printf(" -> STOK YOK! (kayip satis)\n");
            }
        }

        /* --------------------------------------------------------
           BÖLÜM 7: GÜN SONU STOK RAPORU
           Konu: Döngüyle dizi yazdırma, frekans gösterimi
           -------------------------------------------------------- */
        printf("\n  --- Gun Sonu Stok Durumu ---\n");
        printf("  %4s  %-15s  %5s  %5s\n", "Kod", "Urun", "Stok", "Satis");

        for (i = 0; i < URUN_SAYISI; i++) {
            printf("  [%c]  %-15s  %5d  %5d",
                   urunKodu[i], urunAdi[i], stok[i], gunlukSatis[i]);

            /* Düşük stok uyarısı */
            if (stok[i] <= 1) {
                printf("  ⚠ KRITIK!");
            }
            printf("\n");
        }

        /* --------------------------------------------------------
           BÖLÜM 8: TEDARİK KARARI (Kullanıcı Girişi)
           Konu: Dizi sınır ihlali koruması, döngü kontrolü
           -------------------------------------------------------- */
        if (gun < GUN_SAYISI) {
            int kalanButce = GUNLUK_BUTCE;
            int urunNo;
            int miktar;

            printf("\n  --- Tedarik Zamani (Butce: %d birim) ---\n", kalanButce);
            printf("  Urun no (0-%d) ve miktar girin. -1 ile bitirin.\n",
                   URUN_SAYISI - 1);

            while (kalanButce > 0) {
                printf("  Urun no (-1=bitti): ");
                scanf("%d", &urunNo);

                /* Çıkış koşulu */
                if (urunNo == -1) {
                    break;
                }

                /* DİZİ SINIR İHLALİ KORUMASI
                   Konu: Kullanıcı girişiyle dizi erişiminde
                   sınır kontrolü yapmak zorunludur! */
                if (urunNo < 0 || urunNo >= URUN_SAYISI) {
                    printf("  Gecersiz urun numarasi! (0-%d arasi girin)\n",
                           URUN_SAYISI - 1);
                    continue;
                }

                printf("  Miktar (kalan butce: %d): ", kalanButce);
                scanf("%d", &miktar);

                if (miktar <= 0) {
                    printf("  Miktar pozitif olmali!\n");
                    continue;
                }

                if (miktar > kalanButce) {
                    printf("  Butce yetersiz! En fazla %d birim alabilirsiniz.\n",
                           kalanButce);
                    continue;
                }

                /* Tedarik işlemi — diziye ekleme */
                stok[urunNo] = stok[urunNo] + miktar;
                kalanButce = kalanButce - miktar;
                harcananButce = harcananButce + miktar;

                printf("  %s icin +%d eklendi. Yeni stok: %d\n",
                       urunAdi[urunNo], miktar, stok[urunNo]);
            }

            if (kalanButce > 0 && kalanButce < GUNLUK_BUTCE) {
                printf("  Kullanilmayan butce: %d birim (kayboldu)\n",
                       kalanButce);
            }
        }
    } /* Ana oyun döngüsü sonu */

    /* ============================================================
       BÖLÜM 9: FİNAL PERFORMANS RAPORU
       Konu: Frekans analizi, dizi üzerinde max bulma
       ============================================================ */
    printf("\n=============================================\n");
    printf("       DONEM SONU PERFORMANS RAPORU\n");
    printf("=============================================\n\n");

    /* Toplam satış tablosu */
    printf("%-15s  %6s  %6s  %6s\n", "Urun", "Satis", "Kayip", "Stok");
    printf("-----------------------------------------------\n");

    /* En çok satan ürünü bul
       Konu: Dizide maksimum değer arama */
    int enCokSatanIndeks = 0;
    int enCokKayipIndeks = 0;

    for (i = 0; i < URUN_SAYISI; i++) {
        printf("%-15s  %6d  %6d  %6d\n",
               urunAdi[i], toplamSatis[i], kayipSatis[i], stok[i]);

        if (toplamSatis[i] > toplamSatis[enCokSatanIndeks]) {
            enCokSatanIndeks = i;
        }
        if (kayipSatis[i] > kayipSatis[enCokKayipIndeks]) {
            enCokKayipIndeks = i;
        }
    }

    printf("-----------------------------------------------\n");

    /* Görsel frekans grafiği (histogram)
       Konu: Frekans verisini görselleştirme */
    printf("\n  Satis Dagilimi (Histogram):\n");
    for (i = 0; i < URUN_SAYISI; i++) {
        printf("  %c | ", urunKodu[i]);
        int j;
        for (j = 0; j < toplamSatis[i]; j++) {
            printf("#");
        }
        printf(" (%d)\n", toplamSatis[i]);
    }

    /* Genel istatistikler */
    printf("\n  --- Genel Istatistikler ---\n");
    printf("  Toplam satis:           %d adet\n", toplamKar);
    printf("  Toplam kayip satis:     %d adet\n", toplamKayip);
    printf("  Karsilama orani:        %%%.1f\n",
           (toplamKar + toplamKayip) > 0
               ? (toplamKar * 100.0 / (toplamKar + toplamKayip))
               : 0.0);
    printf("  Harcanan tedarik:       %d birim\n", harcananButce);
    printf("  En cok satan:           %s (%d adet)\n",
           urunAdi[enCokSatanIndeks], toplamSatis[enCokSatanIndeks]);
    printf("  En cok kaybedilen:      %s (%d adet)\n",
           urunAdi[enCokKayipIndeks], kayipSatis[enCokKayipIndeks]);

    /* Skor hesaplama */
    int skor = toplamKar * 10 - toplamKayip * 15;
    printf("\n  SKOR: %d puan\n", skor);

    if (skor >= 200) {
        printf("  Degerlendirme: MUKEMMEL! Depo yoneticisi olarak terfi!\n");
    } else if (skor >= 100) {
        printf("  Degerlendirme: BASARILI. Istikrarli bir performans.\n");
    } else if (skor >= 0) {
        printf("  Degerlendirme: ORTALAMA. Stok planlamanizi gozden gecirin.\n");
    } else {
        printf("  Degerlendirme: BASARISIZ. Cok fazla kayip satis!\n");
    }

    printf("\n=============================================\n");
    printf("  Tesekkurler! Oyun bitti.\n");
    printf("=============================================\n");

    return 0;
}
```

---

## Kodun Bölüm Bölüm Açıklaması

### Bölüm 1: Sabitler (`#define`)

```c
#define URUN_SAYISI     6
#define GUN_SAYISI      7
#define BASLANGIC_STOK  5
#define GUNLUK_BUTCE    10
```

Derste öğrendiğimiz gibi, `#define` ile tanımlanan sabitler kodun **okunabilirliğini** ve **değiştirilebilirliğini** artırır. Oyunun dengesini ayarlamak istediğinizde tek yapmanız gereken bu değerleri değiştirmek — kodun geri kalanına dokunmanıza gerek kalmaz.

**Neden önemli:** Eğer `6` sayısını kodun 15 farklı yerine yazmış olsaydık ve ürün sayısını 8'e çıkarmak isteseydik, 15 yeri tek tek bulmamız ve değiştirmemiz gerekirdi. `URUN_SAYISI` sabiti bu sorunu tamamen ortadan kaldırır.

> **Hatırlatma:** `#define` bir atama değildir; derleme öncesi metin değiştirme (preprocessor) işlemidir. Sonunda noktalı virgül (`;`) konmaz.

### Bölüm 3: Dizi Tanımlama ve Sıfırlama

```c
int stok[URUN_SAYISI];
int toplamSatis[URUN_SAYISI] = {0};
int kayipSatis[URUN_SAYISI] = {0};
int gunlukSatis[URUN_SAYISI];
```

Burada dört farklı dizi tanımlıyoruz ve iki farklı teknik görüyoruz:

| Dizi | Başlatma Yöntemi | Açıklama |
|------|------------------|----------|
| `stok` | Döngüyle atama | Her eleman `BASLANGIC_STOK` değerine ayarlanır |
| `toplamSatis` | `= {0}` ile sıfırlama | Tüm elemanlar otomatik 0 olur |
| `kayipSatis` | `= {0}` ile sıfırlama | Tüm elemanlar otomatik 0 olur |
| `gunlukSatis` | Her gün döngüyle sıfırlanır | Her günün başında tüm elemanlar 0 yapılır |

**Neden `stok` dizisini `= {0}` ile başlatmıyoruz?** Çünkü başlangıç değeri 0 değil, `BASLANGIC_STOK` (yani 5). Bu yüzden döngü kullanıyoruz:

```c
for (i = 0; i < URUN_SAYISI; i++) {
    stok[i] = BASLANGIC_STOK;
}
```

`= {0}` yalnızca tüm elemanları sıfırlamak istediğinizde işe yarar. Farklı bir değerle doldurmak için döngü şarttır.

### Bölüm 4: Karakter Dizileri

```c
char urunKodu[URUN_SAYISI] = {'K', 'M', 'D', 'T', 'Y', 'B'};
```

Bu, derste öğrendiğimiz **karakter dizisi** tanımlama yöntemidir. Her eleman tek tırnak içinde bir `char` değeridir. Bu kodlar, ürünlerin kısaltması olarak kullanılır ve ekrana `%c` ile yazdırılır.

```c
char urunAdi[URUN_SAYISI][20] = {
    "Klavye",
    "Mouse",
    ...
};
```

Bu yapı, **iki boyutlu karakter dizisi** gibi görünür ama aslında "6 adet string yan yana dizilmiş" olarak düşünebilirsiniz. Her `urunAdi[i]`, null-terminated bir string'dir ve `%s` ile güvenle yazdırılabilir — çünkü çift tırnak ile tanımlandığı için derleyici otomatik olarak `'\0'` ekler.

### Bölüm 5: Rastgele Sayı Üretimi

```c
srand(time(NULL));
siparisSayisi = rand() % (MAX_SIPARIS - MIN_SIPARIS + 1) + MIN_SIPARIS;
```

Zar frekans programından tanıdık formül: `rand() % N + min`. Burada:
- `MAX_SIPARIS - MIN_SIPARIS + 1` = `5 - 3 + 1` = `3` (olası değer sayısı)
- `+ MIN_SIPARIS` = `+ 3` (minimum değer)
- Sonuç: 3, 4 veya 5

### Bölüm 6: Frekans Sayma (Oyunun Kalbi)

```c
secilen = rand() % URUN_SAYISI;

if (stok[secilen] > 0) {
    stok[secilen]--;
    gunlukSatis[secilen]++;
    toplamSatis[secilen]++;
}
```

Bu üç satır, zar frekans programındaki `gelenZarListesi[gelenZar]++` ile **aynı mantığı** kullanır:

- `secilen` → hangi ürün (indeks = kategori)
- `toplamSatis[secilen]++` → o ürünün satış sayacını artır (değer = frekans)

Tek fark: burada stok kontrolü var. Zarda sınırsız atış yapabilirsiniz ama depoda sınırlı stok var. Bu, **koşullu frekans artırma** örneğidir.

### Bölüm 8: Dizi Sınır İhlali Koruması

```c
if (urunNo < 0 || urunNo >= URUN_SAYISI) {
    printf("Gecersiz urun numarasi!\n");
    continue;
}
```

Derste öğrendiğimiz en kritik konulardan biri: **C dili dizi sınır ihlalini kontrol etmez.** Kullanıcı `99` girerse, `stok[99]` bellekte bilinmeyen bir alana erişir. Bu program çökebilir, yanlış veri yazabilir veya güvenlik açığı oluşturabilir.

Bu yüzden kullanıcıdan alınan her indeks değerini **kullanmadan önce** kontrol etmek zorunludur. Bu kontrol, profesyonel yazılımda **giriş doğrulama (input validation)** olarak adlandırılır ve YBS alanında kritik bir güvenlik prensibidir.

### Bölüm 9: Frekans Raporu ve Histogram

```c
for (i = 0; i < URUN_SAYISI; i++) {
    printf("  %c | ", urunKodu[i]);
    int j;
    for (j = 0; j < toplamSatis[i]; j++) {
        printf("#");
    }
    printf(" (%d)\n", toplamSatis[i]);
}
```

Bu, frekans verisinin **görsel histogram** olarak yazdırılmasıdır. İç içe iki döngü kullanılır:
- Dış döngü: her ürün için bir satır
- İç döngü: satış sayısı kadar `#` karakteri yazdırır

Örnek çıktı:

```
  K | ###### (6)
  M | ######### (9)
  D | ### (3)
  T | ####### (7)
  Y | ##### (5)
  B | #### (4)
```

Bu teknik, metin tabanlı veri görselleştirmenin en temel formudur. İş zekâsı (BI) araçlarındaki grafiklerin mantığı da aynıdır: bir değeri, o değer kadar tekrarlanan bir görsel öğeyle temsil etmek.

---

## Örnek Oyun Akışı

```
=============================================
    DEPO MUDURU: 7 Gunluk Stok Yonetimi
=============================================
Bir BT tedarik deposunun mudurusunuz.
7 gun boyunca musteri siparislerini
karsilayacak ve stok kararlarinizi vereceksiniz.
Gunluk tedarik butceniz: 10 birim
=============================================

--- GUN 1/7 ---

Bugun 4 musteri siparisi geldi!

  Siparis #1: M - Mouse -> SATILDI (kalan stok: 4)
  Siparis #2: K - Klavye -> SATILDI (kalan stok: 4)
  Siparis #3: M - Mouse -> SATILDI (kalan stok: 3)
  Siparis #4: T - Termal Macun -> SATILDI (kalan stok: 4)

  --- Gun Sonu Stok Durumu ---
  Kod   Urun             Stok  Satis
  [K]  Klavye               4      1
  [M]  Mouse                3      2
  [D]  Docking St.          5      0
  [T]  Termal Macun         4      1
  [Y]  Yedek Batarya        5      0
  [B]  Bileklik Pad         5      0

  --- Tedarik Zamani (Butce: 10 birim) ---
  Urun no (0-5) ve miktar girin. -1 ile bitirin.
  Urun no (-1=bitti): 1
  Miktar (kalan butce: 10): 5
  Mouse icin +5 eklendi. Yeni stok: 8
  Urun no (-1=bitti): -1

--- GUN 2/7 ---
...
```

---

## Konu Haritası: Kodun Neresinde Ne Var?

Aşağıdaki tablo, programdaki her kavramın hangi satırlarda geçtiğini özetler. Kodu okurken bu tabloyu referans olarak kullanın:

| Kavram | Programdaki Yeri |
|---|---|
| `#define` sabitleri | Programın başı — tüm oyun parametreleri |
| `= {0}` ile dizi sıfırlama | `toplamSatis` ve `kayipSatis` tanımı |
| Döngüyle dizi başlatma | `stok` dizisini `BASLANGIC_STOK` ile doldurma |
| Döngüyle dizi sıfırlama | Her günün başında `gunlukSatis` dizisi |
| Karakter dizisi (`char[]`) | `urunKodu` dizisi — tek karakter tanımlama |
| String dizisi (`char[][20]`) | `urunAdi` dizisi — çift tırnak ile string |
| `srand(time(NULL))` | Programın başında, bir kez |
| `rand() % N + min` | Sipariş sayısı ve ürün seçimi |
| `dizi[indeks]++` (frekans) | `toplamSatis[secilen]++`, `kayipSatis[secilen]++` |
| Dizi sınır kontrolü | Kullanıcı tedarik girişinde `urunNo` doğrulama |
| `%c` ile karakter yazdırma | Ürün kodlarının gösterimi |
| `%s` ile string yazdırma | Ürün adlarının gösterimi |
| İç içe döngü + frekans | Histogram çizimi (`#` tekrarı) |
| Dizide max bulma | En çok satan ve en çok kaybedilen ürün |

---

## Deney Önerileri

Bu oyunu derleyip çalıştırdıktan sonra şu deneyleri yapın:

1. **Parametre değiştirme:** `BASLANGIC_STOK` değerini 2'ye düşürün. Kayıp satışlar nasıl değişir? `GUNLUK_BUTCE` değerini 20'ye çıkarın — skor nasıl etkilenir?

2. **Ürün ekleme:** `URUN_SAYISI`'nı 8'e çıkarıp iki yeni ürün ekleyin. `#define` sayesinde kaç yeri değiştirmeniz gerekiyor? (İpucu: sadece dizi tanımlarını genişletmeniz yeterli.)

3. **Strateji geliştirme:** Hangi strateji daha iyi skor verir? Her ürüne eşit dağıtmak mı, yoksa satış verisine bakıp çok satana çok vermek mi? Bu, YBS'deki **veri odaklı karar verme** prensibinin minyatür hâlidir.

4. **Sınır testi:** Tedarik ekranında `-5`, `100`, `0` gibi değerler girin. Program sağlam mı? Hangi kontroller sizi koruyor?

---

## Özet: Bir Oyunda Tüm Konular

Bu oyun, aslında iş dünyasındaki bir **Envanter Yönetim Sistemi'nin** basitleştirilmiş hâlidir. Gerçek ERP sistemleri de aynı temeller üzerine kuruludur: dizilerde stok tutma, frekans analizi ile satış trendleri izleme, kullanıcı girişi doğrulama ile veri bütünlüğünü koruma.

Yönetim Bilişim Sistemleri öğrencisi olarak şunu unutmayın: bugün `stok[secilen]--` yazdığınız satır, yarın SAP'taki bir stok hareketi transaction'ı ile aynı mantığı taşır. Ölçek değişir, prensip aynı kalır.

> **Gelecek ders:** Fonksiyonlar (functions) konusunu öğrendiğimizde, bu oyundaki tekrar eden kod bloklarını (stok yazdırma, tedarik alma, rapor oluşturma) ayrı fonksiyonlara taşıyarak kodu çok daha temiz hâle getireceğiz.
