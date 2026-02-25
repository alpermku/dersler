---
layout: post
title: "Çok Boyutlu Diziler — Düz Çizgiden Tabloya, Tablodan Matrise"
date: 2026-02-25
categories: algoritma-ve-programlama-ii
---

Şimdiye kadar dizileri **tek sıra halinde** öğrendik: bir raf düşünün, üstünde yan yana duran kutular. Bugün o rafı **dolaba** çeviriyoruz — satırlar ve sütunlar, Excel tabloları, piksel gridleri, sınıf not çizelgeleri. C dilinde çok boyutlu dizilere hoş geldiniz.

> ☕ **Uyarı:** Bu konu "iki tane indeks mi olur ya?" diye başlar, "bellekte nasıl düz sıra oluyor?!" diye biter. Kahveniz hazırsa başlayalım.

---

## 1. Neden Çok Boyutlu Dizi?

Tek boyutlu diziyle yapamayacağımız ama günlük hayatta sürekli karşılaştığımız şeyler:

| Gerçek Hayat | Programlama Karşılığı |
|---|---|
| Excel tablosu (satır × sütun) | `int tablo[satir][sutun]` |
| Sınıf not çizelgesi (öğrenci × ders) | `int notlar[ogrenci][ders]` |
| Sinema salonu koltuk planı | `int koltuk[sira][numara]` |
| Piksel ekran (yükseklik × genişlik) | `int ekran[y][x]` |
| Satranç tahtası | `char tahta[8][8]` |

Tek boyutlu dizi bir **liste**, iki boyutlu dizi bir **tablo**, üç boyutlu dizi bir **kutu** gibidir. Biz bu derste ağırlıklı olarak iki boyutlu dizilere odaklanacağız — çünkü pratikteki kullanımların %90'ı budur.

---

## 2. İki Boyutlu Dizi Tanımlama

### 2.1 Temel Söz Dizimi

```c
int ikiBoyutluDizi[satir_sayisi][sutun_sayisi];
```

Bunu şöyle okuyun: **"satır sayısı kadar sıra, her sırada sütun sayısı kadar eleman."**

Örneğin `int ikiBoyutluDizi[2][3]` demek:

```
         Sütun 0   Sütun 1   Sütun 2
Satır 0 [   ?    |   ?    |   ?    ]
Satır 1 [   ?    |   ?    |   ?    ]
```

Toplam eleman sayısı: 2 × 3 = **6 adet `int`**.

### 2.2 Tanımlama ve Başlatma

```c
int ikiBoyutluDizi[2][3] = {
    {1, 5, 8},    // Satır 0
    {3, 7, 9}     // Satır 1
};
```

Burada dış süslü parantez **tüm tabloyu**, iç süslü parantezler ise **her bir satırı** temsil eder. Görsel olarak:

```
         Sütun 0   Sütun 1   Sütun 2
Satır 0 [   1    |   5    |   8    ]
Satır 1 [   3    |   7    |   9    ]
```

> 🎯 **Hafıza hilesi:** İlk indeks **satır** (aşağı-yukarı), ikinci indeks **sütun** (sola-sağa). Bunu "apartman" gibi düşünün: `dizi[kat][daire]`. Önce kata çıkarsınız, sonra daireyi bulursunuz.

---

## 3. Elemanlara Erişim

### 3.1 Okuma ve Yazma

```c
#include <stdio.h>

int main()
{
    int ikiBoyutluDizi[2][3] = {{1, 5, 8}, {3, 7, 9}};

    /* Okuma: dizi[satır][sütun] */
    printf("%d\n", ikiBoyutluDizi[0][0]);  // 1  (Satır 0, Sütun 0)
    printf("%d\n", ikiBoyutluDizi[1][2]);  // 9  (Satır 1, Sütun 2)

    /* Yazma: istediğimiz hücreyi değiştirebiliriz */
    ikiBoyutluDizi[1][1] = 0;
    printf("%d\n", ikiBoyutluDizi[1][1]);  // 0  (eskiden 7'ydi)

    return 0;
}
```

**Adım adım:**

| İfade | Satır | Sütun | Değer |
|---|---|---|---|
| `ikiBoyutluDizi[0][0]` | 0 | 0 | **1** |
| `ikiBoyutluDizi[1][2]` | 1 | 2 | **9** |
| `ikiBoyutluDizi[1][1] = 0` | 1 | 1 | 7 → **0** |

Değişiklik sonrası tablomuz:

```
         Sütun 0   Sütun 1   Sütun 2
Satır 0 [   1    |   5    |   8    ]
Satır 1 [   3    |   0    |   9    ]
                      ↑
                  eskiden 7'ydi
```

### 3.2 İndeksleme Kuralları

Tek boyutlu dizilerdeki kurallar aynen geçerli:

- Satır indeksi: **0**'dan **(satır sayısı - 1)**'e kadar
- Sütun indeksi: **0**'dan **(sütun sayısı - 1)**'e kadar
- Sınır dışına çıkmak → **tanımsız davranış** (dizi sınır ihlali!)

```c
int d[2][3];

d[0][0]  // ✅ İlk eleman
d[1][2]  // ✅ Son eleman
d[2][0]  // ❌ Satır 2 yok! (0 ve 1 var)
d[0][3]  // ❌ Sütun 3 yok! (0, 1, 2 var)
d[-1][0] // ❌ Negatif indeks!
```

---

## 4. Eksik Değer Atama: C Ne Yapar?

Bir satırın tüm elemanlarını doldurmadan bırakırsak ne olur?

```c
#include <stdio.h>

int main()
{
    int ikiBoyutluDizi[2][3] = {
        {1},        // Sadece [0][0] = 1, geri kalanlar?
        {3, 7}      // [1][0] = 3, [1][1] = 7, [1][2]?
    };

    printf("%d\n", ikiBoyutluDizi[0][0]);  // 1
    printf("%d\n", ikiBoyutluDizi[0][1]);  // 0 (otomatik sıfırlandı!)
    printf("%d\n", ikiBoyutluDizi[0][2]);  // 0
    printf("%d\n", ikiBoyutluDizi[1][0]);  // 3
    printf("%d\n", ikiBoyutluDizi[1][1]);  // 7
    printf("%d\n", ikiBoyutluDizi[1][2]);  // 0 (otomatik sıfırlandı!)

    return 0;
}
```

**Kural:** Kısmen başlatılmış dizilerde, **verilmeyen elemanlar otomatik olarak 0 yapılır.** Bu, tek boyutlu dizilerdeki `= {0}` kuralının aynısıdır.

```
         Sütun 0   Sütun 1   Sütun 2
Satır 0 [   1    |   0    |   0    ]  ← sadece 1 verildi
Satır 1 [   3    |   7    |   0    ]  ← 3 ve 7 verildi
```

Bu kuralı kullanarak tüm tabloyu sıfırlamak çok kolay:

```c
int tablo[10][10] = {0};  // 100 elemanın hepsi 0
```

> **Dikkat:** Bu kural sadece **başlatma (initialization)** sırasında geçerlidir. Daha sonra `int tablo[10][10];` yazıp başlatmazsanız, elemanlar **çöp değer** içerir — otomatik sıfırlama olmaz!

---

## 5. İç İçe Döngülerle Tablo İşleme

İki boyutlu dizilerin **en temel işleme kalıbı** iç içe iki döngüdür: dış döngü satırları, iç döngü sütunları gezer.

### 5.1 Tablo Yazdırma

```c
#include <stdio.h>

int main()
{
    int ikiBoyutluDizi[3][5] = {
        {21,  5,   2,  3,  6},
        {45, 55,  21, 22,  3},
        {25, 25, 256, 65, 45}
    };

    int i, j;

    /* Tabloyu yazdır */
    for (i = 0; i < 3; i++) {          // Her satır için
        for (j = 0; j < 5; j++) {      // Her sütun için
            printf("%5d", ikiBoyutluDizi[i][j]);
        }
        printf("\n");                   // Satır bitti, alt satıra geç
    }

    return 0;
}
```

Çıktı:

```
   21    5    2    3    6
   45   55   21   22    3
   25   25  256   65   45
```

`%5d` format belirleyicisi her sayıyı **5 karakter genişliğinde** yazdırır — böylece sütunlar düzgün hizalanır. Bu küçük detay, çıktının okunabilirliği için kritik önem taşır.

### 5.2 Döngü Anatomisi

Bu kalıbı iyi anlamak gerekiyor çünkü bundan sonra çok boyutlu dizilerde **her işlem** bu yapıyla yapılacak:

```
i=0: j=0,1,2,3,4  →  Satır 0'ın tüm sütunları
i=1: j=0,1,2,3,4  →  Satır 1'in tüm sütunları
i=2: j=0,1,2,3,4  →  Satır 2'nin tüm sütunları
```

Dış döngünün her adımında iç döngü **baştan sona** çalışır. Bunu bir daktiloya benzetin: her satırı soldan sağa yazarsınız, satır bitince bir alt satıra geçersiniz.

> 🖨️ **Daktilo kuralı:** Dış döngü = satır değiştirme (enter tuşu), iç döngü = soldan sağa yazma.

### 5.3 Tabloyu Sıfırlama

```c
    /* Tüm elemanları sıfırla */
    for (i = 0; i < 3; i++) {
        for (j = 0; j < 5; j++) {
            ikiBoyutluDizi[i][j] = 0;
        }
    }
```

Yazdırma ile aynı kalıp — tek fark, `printf` yerine **atama** yapılması. Sıfırlama sonrası tabloyu tekrar yazdırırsak:

```
    0    0    0    0    0
    0    0    0    0    0
    0    0    0    0    0
```

### 5.4 Tam Program: Yazdır, Sıfırla, Tekrar Yazdır

```c
#include <stdio.h>

int main()
{
    int ikiBoyutluDizi[3][5] = {
        {21,  5,   2,  3,  6},
        {45, 55,  21, 22,  3},
        {25, 25, 256, 65, 45}
    };

    int i, j;

    printf("=== Orijinal Tablo ===\n");
    for (i = 0; i < 3; i++) {
        for (j = 0; j < 5; j++) {
            printf("%5d", ikiBoyutluDizi[i][j]);
        }
        printf("\n");
    }

    /* Sıfırlama */
    for (i = 0; i < 3; i++) {
        for (j = 0; j < 5; j++) {
            ikiBoyutluDizi[i][j] = 0;
        }
    }

    printf("\n=== Sifirlanmis Tablo ===\n");
    for (i = 0; i < 3; i++) {
        for (j = 0; j < 5; j++) {
            printf("%5d", ikiBoyutluDizi[i][j]);
        }
        printf("\n");
    }

    return 0;
}
```

Çıktı:

```
=== Orijinal Tablo ===
   21    5    2    3    6
   45   55   21   22    3
   25   25  256   65   45

=== Sifirlanmis Tablo ===
    0    0    0    0    0
    0    0    0    0    0
    0    0    0    0    0
```

---

## 6. Bellekte Gerçekte Ne Oluyor?

Şimdi kafanızı karıştıracak — ama aydınlatacak — bir gerçek: **Bellekte iki boyutlu dizi diye bir şey yoktur.**

Bilgisayarın belleği düz bir şerittir — tek boyutlu. İki boyutlu dizi tanımladığınızda C, satırları **arka arkaya** dizer:

```c
int d[2][3] = {{1, 5, 8}, {3, 7, 9}};
```

Bellekteki gerçek düzen:

```
Adres:  1000  1004  1008  1012  1016  1020
Değer:  [  1  |  5  |  8  |  3  |  7  |  9  ]
         ↑ Satır 0 ↑       ↑ Satır 1 ↑
```

Satır 0'ın elemanları (`1, 5, 8`) bellekte ardışık, hemen arkasından Satır 1'in elemanları (`3, 7, 9`) gelir. Buna **satır-öncelikli (row-major order)** düzen denir.

`d[1][2]`'ye eriştiğinizde C şu hesabı yapar:

```
adres = başlangıç + (satır × sütun_sayısı + sütun) × sizeof(int)
      = 1000     + (1     × 3              + 2     ) × 4
      = 1000     + 5 × 4
      = 1020
```

Değer: **9**. ✅

> 🧠 **Neden bilmek önemli?** Çünkü döngü sırasını etkiler. Satırları dış döngüde, sütunları iç döngüde gezmek (ki biz hep böyle yapıyoruz) belleği **ardışık** okur — bu hızlıdır. Tersini yaparsanız (sütun dışta, satır içte) bellek erişimi **zikzak** çizer ve büyük dizilerde belirgin şekilde yavaşlar.

---

## 7. `#define` ile Daha Temiz Kod

Sayıları kodun içine serpiştirmek yerine sabitler kullanalım:

```c
#include <stdio.h>

#define SATIR 3
#define SUTUN 5

int main()
{
    int tablo[SATIR][SUTUN] = {
        {21,  5,   2,  3,  6},
        {45, 55,  21, 22,  3},
        {25, 25, 256, 65, 45}
    };

    int i, j;

    for (i = 0; i < SATIR; i++) {
        for (j = 0; j < SUTUN; j++) {
            printf("%5d", tablo[i][j]);
        }
        printf("\n");
    }

    return 0;
}
```

Artık tabloyu `4×6` yapmak isterseniz sadece iki satırı değiştirmeniz yeterli. Kodun geri kalanı `SATIR` ve `SUTUN` sabitlerini kullandığı için otomatik uyum sağlar.

---

## 8. Pratik Uygulamalar

### 8.1 Satır Toplamları ve Sütun Toplamları

YBS öğrencileri için tanıdık bir senaryo: bir şirketin 3 şubesinin 4 çeyreklık satış verileri.

```c
#include <stdio.h>

#define SUBE_SAYISI   3
#define CEYREK_SAYISI 4

int main()
{
    int satis[SUBE_SAYISI][CEYREK_SAYISI] = {
        {120, 135, 148, 162},   // Şube 0: İstanbul
        { 85,  92,  88,  95},   // Şube 1: Ankara
        { 70,  78,  82,  91}    // Şube 2: İzmir
    };

    char subeAdi[SUBE_SAYISI][12] = {"Istanbul", "Ankara", "Izmir"};

    int i, j;

    /* Tablo başlığı */
    printf("%-12s", "Sube");
    for (j = 0; j < CEYREK_SAYISI; j++) {
        printf("  Q%d  ", j + 1);
    }
    printf("  TOPLAM\n");
    printf("---------------------------------------------\n");

    /* Her şubenin satış verisi ve satır toplamı */
    for (i = 0; i < SUBE_SAYISI; i++) {
        printf("%-12s", subeAdi[i]);

        int satirToplam = 0;

        for (j = 0; j < CEYREK_SAYISI; j++) {
            printf("%6d", satis[i][j]);
            satirToplam = satirToplam + satis[i][j];
        }

        printf("%8d\n", satirToplam);
    }

    /* Sütun toplamları (çeyrek bazında) */
    printf("---------------------------------------------\n");
    printf("%-12s", "TOPLAM");

    int genelToplam = 0;

    for (j = 0; j < CEYREK_SAYISI; j++) {
        int sutunToplam = 0;

        for (i = 0; i < SUBE_SAYISI; i++) {
            sutunToplam = sutunToplam + satis[i][j];
        }

        printf("%6d", sutunToplam);
        genelToplam = genelToplam + sutunToplam;
    }

    printf("%8d\n", genelToplam);

    return 0;
}
```

Çıktı:

```
Sube          Q1    Q2    Q3    Q4    TOPLAM
---------------------------------------------
Istanbul     120   135   148   162     565
Ankara        85    92    88    95     360
Izmir         70    78    82    91     321
---------------------------------------------
TOPLAM       275   305   318   348    1246
```

**Önemli gözlem:** Satır toplamlarında dış döngü `i` (satır), iç döngü `j` (sütun). Sütun toplamlarında ise **tam tersi**: dış döngü `j` (sütun), iç döngü `i` (satır). Çünkü bu sefer aynı sütundaki farklı satırları topluyoruz.

> 📊 Bu çıktı, Excel'deki **PivotTable**'ın C dilindeki ilkel hâlidir. YBS'de ileride öğreneceğiniz iş zekâsı (BI) araçlarının temelinde bu mantık yatar: veriyi satır ve sütun bazında grupla, topla, karşılaştır.

### 8.2 Matris Çarpımı Değil — Ama Eleman Bazlı Toplama

İki tabloyu eleman eleman toplama (mesela iki ayın satış verilerini birleştirme):

```c
#include <stdio.h>

#define SATIR 2
#define SUTUN 3

int main()
{
    int ocak[SATIR][SUTUN] = {{10, 20, 30}, {40, 50, 60}};
    int subat[SATIR][SUTUN] = {{15, 25, 35}, {45, 55, 65}};
    int toplam[SATIR][SUTUN];

    int i, j;

    /* Eleman eleman topla */
    for (i = 0; i < SATIR; i++) {
        for (j = 0; j < SUTUN; j++) {
            toplam[i][j] = ocak[i][j] + subat[i][j];
        }
    }

    /* Sonucu yazdır */
    printf("Ocak + Subat = Toplam\n\n");
    for (i = 0; i < SATIR; i++) {
        for (j = 0; j < SUTUN; j++) {
            printf("%5d", toplam[i][j]);
        }
        printf("\n");
    }

    return 0;
}
```

Çıktı:

```
Ocak + Subat = Toplam

   25   45   65
   85  105  125
```

Burada üçüncü bir dizi (`toplam`) kullanarak iki tablonun karşılıklı elemanlarını topluyoruz. Aynı indeksler, aynı iç içe döngü kalıbı — sadece gövdedeki işlem farklı.

### 8.3 Sinema Salonu — Koltuk Rezervasyon Sistemi

İki boyutlu dizinin görsel olarak en kolay anlaşılacağı örnek:

```c
#include <stdio.h>

#define SIRA_SAYISI  5
#define KOLTUK_SAYISI 8

int main()
{
    /* 0 = boş, 1 = dolu */
    int salon[SIRA_SAYISI][KOLTUK_SAYISI] = {0};

    /* Bazı koltukları dolu işaretle */
    salon[0][3] = 1;
    salon[0][4] = 1;
    salon[1][2] = 1;
    salon[1][3] = 1;
    salon[1][4] = 1;
    salon[2][0] = 1;
    salon[3][6] = 1;
    salon[3][7] = 1;

    int i, j;
    int bos = 0, dolu = 0;

    /* Koltuk planını çiz */
    printf("      ");
    for (j = 0; j < KOLTUK_SAYISI; j++) {
        printf(" %d ", j + 1);
    }
    printf("\n");

    printf("     +");
    for (j = 0; j < KOLTUK_SAYISI; j++) {
        printf("---");
    }
    printf("+\n");

    for (i = 0; i < SIRA_SAYISI; i++) {
        printf(" %c   |", 'A' + i);

        for (j = 0; j < KOLTUK_SAYISI; j++) {
            if (salon[i][j] == 0) {
                printf(" O ");   /* Boş koltuk */
                bos++;
            } else {
                printf(" X ");   /* Dolu koltuk */
                dolu++;
            }
        }

        printf("|\n");
    }

    printf("     +");
    for (j = 0; j < KOLTUK_SAYISI; j++) {
        printf("---");
    }
    printf("+\n");

    printf("\n         [ PERDE ]\n\n");

    printf("O = Bos, X = Dolu\n");
    printf("Bos koltuk: %d, Dolu koltuk: %d\n", bos, dolu);
    printf("Doluluk orani: %%%.0f\n", dolu * 100.0 / (SIRA_SAYISI * KOLTUK_SAYISI));

    return 0;
}
```

Çıktı:

```
       1  2  3  4  5  6  7  8
     +------------------------+
 A   | O  O  O  X  X  O  O  O |
 B   | O  O  X  X  X  O  O  O |
 C   | X  O  O  O  O  O  O  O |
 D   | O  O  O  O  O  O  X  X |
 E   | O  O  O  O  O  O  O  O |
     +------------------------+

         [ PERDE ]

O = Bos, X = Dolu
Bos koltuk: 32, Dolu koltuk: 8
Doluluk orani: %20
```

Bu örnekte dikkat edin:
- `'A' + i` ifadesi ile satır harflerini otomatik üretiyoruz (karakter aritmetiği — önceki dersimiz!)
- `= {0}` ile tüm koltuklar başlangıçta boş
- İç içe döngüde hem görselleştirme hem de sayma (frekans analizi) aynı anda yapılıyor

---

## 9. Boyut Bildirme Kuralları

### İlk boyut opsiyonel, ikinci boyut zorunlu

```c
// ✅ İlk boyutu yazmayabiliriz — derleyici satır sayısını sayar
int d[][3] = {{1,2,3}, {4,5,6}};  // 2 satır, 3 sütun

// ❌ İkinci boyut YAZILMAK ZORUNDA
int d[][] = {{1,2,3}, {4,5,6}};   // Derleme hatası!
```

**Neden?** Derleyicinin bellek hesabı yapabilmesi için her satırın kaç eleman içerdiğini bilmesi gerekir. Satır sayısını başlatma listesinden sayabilir ama sütun sayısını tahmin edemez.

> 🏢 **Analoji:** Bir otele "kaç katlı?" diye sormadan da toplam oda sayısını hesaplayabilirsiniz — yeter ki her katta kaç oda olduğunu bilin. Ama her kattaki oda sayısını bilmezseniz hiçbir hesap yapılamaz.

---

## 10. İki Boyutlu Karakter Dizisi (String Tablosu)

Önceki örneklerde zaten kullandık ama açıkça işleyelim:

```c
char sehirler[4][10] = {
    "Istanbul",
    "Ankara",
    "Izmir",
    "Bursa"
};
```

Bu tanım, 4 satır ve her satırda en fazla 10 karakter (null dahil) saklayabilen bir tablodur:

```
sehirler[0] → "Istanbul\0" (8 harf + null = 9, kalan 1 byte boş)
sehirler[1] → "Ankara\0"   (6 harf + null = 7, kalan 3 byte boş)
sehirler[2] → "Izmir\0"    (5 harf + null = 6, kalan 4 byte boş)
sehirler[3] → "Bursa\0"    (5 harf + null = 6, kalan 4 byte boş)
```

Her `sehirler[i]` bir string olarak `%s` ile yazdırılabilir:

```c
int i;
for (i = 0; i < 4; i++) {
    printf("%s\n", sehirler[i]);
}
```

İkinci boyuttaki `10` sayısı, **en uzun stringin uzunluğu + 1** (null karakter için) olmalıdır. Fazla vermek sorun yaratmaz (boş yer kalır), az vermek **taşma** yaratır.

---

## 11. Sık Yapılan Hatalar

### Hata 1: İndeks sırasını karıştırmak

```c
int d[3][5];

d[j][i]  // ⚠️ Eğer j sütun, i satır ise YANLIŞ sıra!
d[i][j]  // ✅ i=satır, j=sütun
```

C'de kural: **`[satır][sütun]`**. Matematikteki matris notasyonuyla aynı: `A[i][j]` = i. satır, j. sütun.

### Hata 2: İç içe döngü sınırlarını çaprazlamak

```c
int tablo[3][5];

// ❌ YANLIŞ: Satır sınırına 5, sütun sınırına 3 yazılmış
for (i = 0; i < 5; i++)        // 5 satır yok, 3 satır var!
    for (j = 0; j < 3; j++)    // 3 sütun yok, 5 sütun var!

// ✅ DOĞRU
for (i = 0; i < 3; i++)        // 3 satır
    for (j = 0; j < 5; j++)    // 5 sütun
```

`#define SATIR 3` ve `#define SUTUN 5` kullanmak bu hatayı ortadan kaldırır.

### Hata 3: Tek indeks kullanmak

```c
int d[2][3] = {{1,2,3},{4,5,6}};

printf("%d", d[1]);  // ❌ Bu bir adres yazdırır, değer değil!
printf("%d", d[1][0]); // ✅ Bu değer yazdırır: 4
```

İki boyutlu dizide eleman okumak için **her zaman iki indeks** gerekir.

---

## 12. Özet

| Konu | Kural / Bilgi |
|---|---|
| Tanımlama | `int d[satir][sutun];` |
| Başlatma | `= {{...}, {...}}` — iç parantezler satırları temsil eder |
| Erişim | `d[satir_indeks][sutun_indeks]` — her zaman iki indeks |
| Eksik değer | Verilmeyen elemanlar otomatik **0** olur |
| İç içe döngü | Dış = satır (`i`), İç = sütun (`j`) → standart kalıp |
| Bellekte düzen | Satırlar arka arkaya dizilir (row-major order) |
| Boyut bildirme | İlk boyut opsiyonel, **ikinci boyut zorunlu** |
| `#define` kullanımı | `SATIR` ve `SUTUN` sabitleri → temiz, hatasız kod |
| Toplam eleman | `satir × sutun` |
| Karakter tablosu | `char isimler[N][MAX]` — N adet string |

---

## 13. Düşünme Soruları

1. `int d[3][4] = {{1}, {2,3}, {4,5,6}};` tanımında `d[0][3]`, `d[1][2]`, `d[2][3]` değerleri nedir? Kağıt üzerinde tablonu çiz.

2. Aşağıdaki iç içe döngü kaç kez çalışır?

```c
int d[4][6];
int i, j, sayac = 0;
for (i = 0; i < 4; i++)
    for (j = 0; j < 6; j++)
        sayac++;
// sayac = ?
```

3. Bir `int d[5][5]` dizisinin **köşegen** elemanlarını (d[0][0], d[1][1], d[2][2], ...) yazdırmak için kaç döngü gerekir? İç içe döngü zorunlu mu?

4. Sinema salonu örneğindeki `salon` dizisine kullanıcıdan sıra ve koltuk numarası alıp, boşsa dolduran bir **rezervasyon sistemi** ekleyin. Dizi sınır kontrolü yapmayı unutmayın!

5. **Bonus:** `int d[2][3]` dizisinin elemanlarını tek bir `for` döngüsüyle (iç içe olmadan) yazdırabilir misiniz? (İpucu: Bölüm 6'daki bellek düzeni bilgisini kullanın.)
