---
layout: post
title: "Dizilerle Frekans Analizi ve Karakter Yönetimi"
date: 2026-02-25
categories: algoritma-ve-programlama-ii
---

Bu derste iki temel konuyu ele alıyoruz: dizileri kullanarak istatistiksel frekans analizi yapmak ve C dilinde karakter (char) veri tipinin dizilerle birlikte nasıl kullanıldığını öğrenmek.

---

## 1. Dizilerle Frekans Analizi

### 1.1 Frekans Analizi Nedir?

Frekans analizi, bir olayın veya değerin belirli bir süre içinde **kaç kez tekrarlandığını** ölçme işlemidir. Günlük hayattan örnekler:

- Bir sınıfta hangi not aralığından kaç öğrenci var?
- Bir metinde hangi harf kaç kez geçiyor?
- Bir zarın her yüzü kaç kez geliyor?

Programlamada frekans analizi için en doğal araç **dizilerdir**. Dizi indekslerini "kategori numarası", dizi elemanlarını ise "sayaç" olarak kullanırız.

### 1.2 Temel Fikir: İndeks = Kategori, Değer = Sayaç

Frekans analizi dizilerinde şu mantık çalışır:

```
dizi[kategori]++
```

Yani bir olay gerçekleştiğinde, o olayın karşılık geldiği indeksteki değeri 1 artırırız. Bu tekniğe **sayma dizisi (counting array)** veya **frekans tablosu** denir.

| İndeks | Temsil Ettiği | Değer (Sayaç) |
|--------|---------------|----------------|
| 0 | (kullanılmıyor) | 0 |
| 1 | Zar yüzü 1 | 1023 |
| 2 | Zar yüzü 2 | 987 |
| 3 | Zar yüzü 3 | 1005 |
| ... | ... | ... |

### 1.3 Uygulama: Zar Frekans Programı

Aşağıdaki program, bir zarı 6000 kez atar ve her yüzün kaç kez geldiğini ölçer:

```c
#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main()
{
    srand(time(NULL));  // Rastgele sayı üretecini başlat

    int gelenZarListesi[7] = {0};  // 7 elemanlı, hepsi 0
    int sayac;
    int gelenZar;

    // 6000 kez zar at
    for (sayac = 0; sayac < 6000; sayac++) {
        gelenZar = rand() % 6 + 1;      // 1-6 arası rastgele sayı
        gelenZarListesi[gelenZar]++;     // İlgili indeksi 1 artır
    }

    // Sonuçları tablo olarak yazdır
    printf("%10s %10s\n", "Zar Yüzü", "Kaç Kez Geldi");

    for (sayac = 1; sayac <= 6; sayac++) {
        printf("%10d %10d\n", sayac, gelenZarListesi[sayac]);
    }

    return 0;
}
```

### 1.4 Satır Satır Analiz

#### `srand(time(NULL));`

`rand()` fonksiyonu aslında **sözde rastgele (pseudo-random)** sayılar üretir. Her çalıştırmada aynı sırayı üretmemesi için bir **tohum değeri (seed)** verilmelidir. `time(NULL)` fonksiyonu, o anki zamanı saniye cinsinden döndürür. Böylece her çalıştırmada farklı bir tohum kullanılır ve farklı sonuçlar elde edilir.

> **Not:** `srand()` programda yalnızca **bir kez** çağrılmalıdır. Döngü içine koyarsanız, aynı saniye içindeki çağrılar aynı tohumu alır ve aynı sayıları üretir.

#### `int gelenZarListesi[7] = {0};`

Neden 7 elemanlı? Çünkü zar yüzleri 1'den 6'ya kadardır. İndeks 0'ı kullanmıyoruz — bu sayede `gelenZarListesi[1]` doğrudan "1 yüzü"nü, `gelenZarListesi[6]` doğrudan "6 yüzü"nü temsil eder. Kod okunabilirliği açısından bu yaygın bir tekniktir.

`= {0}` ifadesi, dizinin **tüm elemanlarını sıfırlar**. Bu kritik önem taşır çünkü sayaç olarak kullanacağımız değerlerin başlangıçta 0 olması gerekir.

#### `gelenZar = rand() % 6 + 1;`

Bu ifadeyi parçalayalım:

| Adım | İşlem | Sonuç Aralığı |
|------|-------|---------------|
| 1 | `rand()` | 0 ile RAND_MAX arası (çok büyük bir sayı) |
| 2 | `% 6` (mod alma) | 0, 1, 2, 3, 4, 5 |
| 3 | `+ 1` | 1, 2, 3, 4, 5, 6 |

> **Genel formül:** `rand() % N + min` ifadesi, `min` ile `min + N - 1` arasında rastgele tam sayı üretir.

#### `gelenZarListesi[gelenZar]++;`

İşte programın kalbi burası. Diyelim ki `gelenZar = 4` geldi. Bu durumda:
- `gelenZarListesi[4]` değeri 1 artırılır.
- 4 yüzü bir kez daha gelmiş olarak kaydedilir.

Bu işlem 6000 kez tekrarlandığında, her yüzün toplam kaç kez geldiği dizide birikmiş olur.

#### `printf("%10s %10s\n", ...)`

`%10s` ve `%10d` format belirleyicilerindeki `10` sayısı, çıktının **en az 10 karakter genişliğinde** olmasını sağlar. Bu sayede tablo düzgün hizalanır.

### 1.5 Beklenen Çıktı

Adil bir zar için her yüzün gelme olasılığı 1/6'dır. 6000 atışta her yüzün yaklaşık **1000 kez** gelmesini bekleriz:

```
  Zar Yüzü Kaç Kez Geldi
         1         1023
         2          987
         3         1005
         4          998
         5         1012
         6          975
```

> **Düşünme sorusu:** Atış sayısını 60'a düşürürseniz sonuçlar ne kadar dengesiz olur? 600.000'e çıkarırsanız? Bu, istatistikteki **Büyük Sayılar Yasası**nın pratikte gözlemlenmesidir: örneklem büyüdükçe sonuçlar beklenen değere yakınsar.

### 1.6 Alıştırma: İki Zarın Toplamı

Frekans analizinin gücünü görmek için bir adım ileri gidelim. İki zarın toplamının frekansını ölçen program:

```c
#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main()
{
    srand(time(NULL));

    int toplamFrekansi[13] = {0};  // İndeks 2-12 arası kullanılacak
    int sayac;
    int zar1, zar2, toplam;

    for (sayac = 0; sayac < 36000; sayac++) {
        zar1 = rand() % 6 + 1;
        zar2 = rand() % 6 + 1;
        toplam = zar1 + zar2;
        toplamFrekansi[toplam]++;
    }

    printf("%10s %10s %10s\n", "Toplam", "Frekans", "Yüzde");

    for (sayac = 2; sayac <= 12; sayac++) {
        double yuzde = toplamFrekansi[sayac] * 100.0 / 36000;
        printf("%10d %10d %9.2f%%\n", sayac, toplamFrekansi[sayac], yuzde);
    }

    return 0;
}
```

Bu programda dikkat edilmesi gerekenler:

- Dizi boyutu **13** çünkü iki zarın toplamı en fazla 12 olabilir (indeks 0 ve 1 kullanılmaz).
- 36.000 atış yapılır (6×6×1000) — böylece her kombinasyon yeterince temsil edilir.
- 7 toplamı en sık gelen değer olmalıdır (6 farklı kombinasyonla elde edilir: 1+6, 2+5, 3+4, 4+3, 5+2, 6+1).

---

## 2. Karakter Yönetimi

### 2.1 `char` Veri Tipi

C dilinde `char` veri tipi, **tek bir karakter** saklamak için kullanılır. Ancak işin perde arkasında `char` aslında bir **tam sayıdır**: her karakter, **ASCII tablosundaki** sayısal karşılığıyla saklanır.

| Karakter | ASCII Kodu | İkili (Binary) |
|----------|------------|-----------------|
| 'A' | 65 | 01000001 |
| 'B' | 66 | 01000010 |
| 'a' | 97 | 01100001 |
| 'z' | 122 | 01111010 |
| '0' | 48 | 00110000 |
| '9' | 57 | 00111001 |

Bu, C dilinin en güçlü özelliklerinden biridir: **karakter ile sayı arasında doğrudan geçiş yapabilirsiniz.**

### 2.2 Karakter Tanımlama: İki Yol

#### Yol 1: Karakter Sabiti ile

```c
#include <stdio.h>

int main()
{
    char harf = 'A';       // Tek tırnak ile karakter sabiti
    printf("%c\n", harf);  // Çıktı: A
    printf("%d\n", harf);  // Çıktı: 65 (ASCII kodu)

    return 0;
}
```

#### Yol 2: ASCII Kodu ile

```c
#include <stdio.h>

int main()
{
    char harf = 65;        // ASCII kodu doğrudan atanır
    printf("%c\n", harf);  // Çıktı: A
    printf("%d\n", harf);  // Çıktı: 65

    return 0;
}
```

Her iki yol da **aynı sonucu** verir çünkü bellekte saklanan değer aynıdır: **65**. `%c` format belirleyicisi bu sayıyı karakter olarak, `%d` ise tam sayı olarak yazdırır.

> **Pratik ipucu:** `'A' + 1` ifadesi `'B'` değerini verir (65 + 1 = 66). Bu özellik, harf dönüşümleri ve alfabe işlemleri için çok kullanışlıdır.

### 2.3 Karakter Aritmetiği

Karakterlerin sayısal doğası sayesinde aritmetik işlemler yapılabilir:

```c
#include <stdio.h>

int main()
{
    char buyukHarf = 'A';
    char kucukHarf = buyukHarf + 32;  // 'a' = 65 + 32 = 97

    printf("Büyük: %c (%d)\n", buyukHarf, buyukHarf);  // A (65)
    printf("Küçük: %c (%d)\n", kucukHarf, kucukHarf);  // a (97)

    // Büyük-küçük harf farkı her zaman 32'dir
    // 'A'=65, 'a'=97  → fark 32
    // 'B'=66, 'b'=98  → fark 32
    // 'Z'=90, 'z'=122 → fark 32

    // Tüm büyük harfleri yazdır
    char c;
    for (c = 'A'; c <= 'Z'; c++) {
        printf("%c ", c);
    }
    printf("\n");

    return 0;
}
```

---

## 3. Karakter Dizileri (String'lerin Temeli)

### 3.1 Karakter Dizisi Oluşturma

C dilinde "string" diye ayrı bir veri tipi yoktur. String, aslında bir **karakter dizisidir (char array)**. Karakter dizisi oluşturmanın birkaç yolu vardır:

#### Yol 1: Karakter karakter tanımlama

```c
char kelime[] = {'i', 'k', 't', 'i', 's', 'a', 't'};
```

Bu dizi **7 elemanlıdır** ve sadece bu 7 karakteri içerir. Sonunda **null karakter yoktur** — bu önemli bir ayrımdır ve ileride göreceğiz.

#### Yol 2: İndeks ile tek tek atama

```c
char baskaKelime[5];
baskaKelime[0] = 'A';
baskaKelime[1] = 'L';
baskaKelime[2] = 'P';
baskaKelime[3] = 'E';
baskaKelime[4] = 'R';
```

#### Yol 3: ASCII kodları ile

```c
char abcKelimesi[] = {'a', 'b', 'c'};           // Karakter sabitleri
char abcKelimesiYeniden[] = {97, 98, 99};        // ASCII kodları
// Her iki dizi de bellekte aynıdır: [97, 98, 99]
```

### 3.2 Karakter Dizisini Yazdırma

Karakter karakter tanımlanmış dizileri yazdırmanın güvenli yolu, `for` döngüsüyle eleman eleman yazdırmaktır:

```c
#include <stdio.h>

int main()
{
    char kelime[] = {'i', 'k', 't', 'i', 's', 'a', 't'};
    int sayac;

    for (sayac = 0; sayac < 7; sayac++) {
        printf("%c", kelime[sayac]);
    }
    printf("\n");  // Çıktı: iktisat

    return 0;
}
```

### 3.3 Tehlikeli Bölge: `%s` ile Yazdırma

Aşağıdaki kodu inceleyelim:

```c
char baskaKelime[5];
baskaKelime[0] = 'A';
baskaKelime[1] = 'L';
baskaKelime[2] = 'P';
baskaKelime[3] = 'E';
baskaKelime[4] = 'R';

printf("%s\n", baskaKelime);  // ⚠️ Tehlikeli!
```

`%s` format belirleyicisi, bellekte **null karakter (`'\0'`)** bulana kadar okumaya devam eder. Ancak `baskaKelime` dizisinde null karakter yok! Bu durumda `printf`, dizinin sonundan taşarak bellekteki rastgele verileri de yazdırabilir. Bu, **tanımsız davranıştır (undefined behavior)** ve programın çökmesine neden olabilir.

> **Kural:** `%s` ile yazdıracaksanız, dizinin sonunda mutlaka `'\0'` (null karakter) olmalıdır.

Güvenli versiyon:

```c
char baskaKelime[6];  // 5 harf + 1 null = 6 eleman
baskaKelime[0] = 'A';
baskaKelime[1] = 'L';
baskaKelime[2] = 'P';
baskaKelime[3] = 'E';
baskaKelime[4] = 'R';
baskaKelime[5] = '\0';  // Null karakter eklendi

printf("%s\n", baskaKelime);  // ✅ Güvenli: ALPER
```

---

## 4. String Sabitleri ve Null Karakter

### 4.1 Çift Tırnak ile String Tanımlama

C dilinde çift tırnak (`"..."`) ile tanımlanan stringler, derleyici tarafından otomatik olarak sonuna **null karakter (`'\0'`)** eklenir:

```c
char cumle[] = "Merhaba";
// Bellekteki gerçek içerik: {'M','e','r','h','a','b','a','\0'}
// Dizi boyutu: 8 (7 harf + 1 null)
```

Bu, tek tek karakter atamaya göre çok daha güvenli ve pratiktir.

### 4.2 Null Karakter Nedir?

Null karakter (`'\0'`), ASCII tablosunda **0 numaralı** karakterdir. Ekranda görünmez ama bellekte 1 byte yer kaplar. C dilinde **stringin nerede bittiğini** işaret eder. Bu yüzden C'deki stringlere **null-terminated string** denir.

| Tanımlama Şekli | Null Karakter | `%s` ile Güvenli mi? |
|---|---|---|
| `char a[] = {'A','B','C'};` | Yok ❌ | Hayır ⚠️ |
| `char a[] = {'A','B','C','\0'};` | Var ✅ | Evet ✅ |
| `char a[] = "ABC";` | Otomatik eklenir ✅ | Evet ✅ |

### 4.3 Uygulama: Stringi Karakter Karakter Okuma

Aşağıdaki program, bir stringin tüm karakterlerini null karaktere kadar tek tek yazdırır:

```c
#include <stdio.h>

int main()
{
    char cumle[] = "Merhaba bu cok uzun bir cumle, "
                   "dizilerle tek tek yazdirmak icin "
                   "harfleri saymana gerek yok sadece "
                   "dosya sonu karakterini araman yeterli";

    int sayac;

    for (sayac = 0; cumle[sayac] != '\0'; sayac++) {
        printf("%c\n", cumle[sayac]);
    }

    printf("\nToplam karakter sayısı: %d\n", sayac);

    return 0;
}
```

Döngü koşulundaki `cumle[sayac] != '\0'` ifadesi, "mevcut karakter null değilse devam et" demektir. Bu, C'de string üzerinde gezinmenin **standart yöntemidir**.

> **Not:** Uzun string sabitleri, yukarıdaki gibi alt alta yazılabilir. C derleyicisi, art arda gelen string sabitlerini otomatik olarak birleştirir.

### 4.4 String Uzunluğunu Hesaplama

Null karakter sayesinde, dizinin boyutunu bilmeden string uzunluğunu bulabiliriz:

```c
#include <stdio.h>

int main()
{
    char metin[] = "Algoritma";
    int uzunluk = 0;

    while (metin[uzunluk] != '\0') {
        uzunluk++;
    }

    printf("Metin: %s\n", metin);              // Algoritma
    printf("Uzunluk: %d\n", uzunluk);          // 9
    printf("Dizi boyutu: %lu\n", sizeof(metin)); // 10 (9 + null)

    return 0;
}
```

`sizeof(metin)` ile `uzunluk` arasındaki 1 fark, null karakterden kaynaklanır. Bu ayrımı kavramak, ileride `strlen()` gibi standart kütüphane fonksiyonlarını anlamak için temel oluşturur.

---

## 5. Karakter Dizileriyle Frekans Analizi

İki konuyu birleştiren bir örnek: bir metindeki her harfin kaç kez geçtiğini sayan program.

```c
#include <stdio.h>

int main()
{
    char metin[] = "Sistem Analizi ve Tasarimi";
    int frekans[26] = {0};  // 26 harf için sayaç dizisi
    int sayac;

    // Her harfi say
    for (sayac = 0; metin[sayac] != '\0'; sayac++) {
        char c = metin[sayac];

        // Büyük harfi küçüğe çevir
        if (c >= 'A' && c <= 'Z') {
            c = c + 32;
        }

        // Sadece harfleri say (boşluk, noktalama vb. atla)
        if (c >= 'a' && c <= 'z') {
            frekans[c - 'a']++;  // 'a'=0, 'b'=1, ..., 'z'=25
        }
    }

    // Sonuçları yazdır (frekansı 0'dan büyük olanları)
    printf("%6s %8s\n", "Harf", "Frekans");
    for (sayac = 0; sayac < 26; sayac++) {
        if (frekans[sayac] > 0) {
            printf("%6c %8d\n", 'a' + sayac, frekans[sayac]);
        }
    }

    return 0;
}
```

Bu programdaki kilit nokta `frekans[c - 'a']++` satırıdır. `c - 'a'` ifadesi, harfin alfabedeki sırasını verir:
- `'a' - 'a'` = 0
- `'b' - 'a'` = 1
- `'z' - 'a'` = 25

Bu teknik, zar frekans programındaki `gelenZarListesi[gelenZar]++` ile **aynı mantığı** kullanır: indeks = kategori, değer = sayaç.

---

## 6. Özet

| Konu | Temel Bilgi |
|------|-------------|
| Frekans dizisi | `dizi[kategori]++` ile sayma tekniği |
| `srand(time(NULL))` | Rastgele sayı üretecini zamanla tohumla |
| `rand() % N + min` | min ile min+N-1 arası rastgele sayı |
| `char` tipi | Hem karakter hem tam sayı olarak kullanılır |
| ASCII | Her karakterin sayısal karşılığı (A=65, a=97) |
| Karakter dizisi | `char dizi[] = {'a','b','c'}` — null karakter içermez |
| String sabiti | `char dizi[] = "abc"` — null karakter otomatik eklenir |
| Null karakter `'\0'` | Stringin bitişini işaret eder, ASCII değeri 0 |
| `%c` vs `%s` | `%c` tek karakter, `%s` null'a kadar tüm string |

---

## 7. Düşünme Soruları

1. `int dizi[7] = {0};` ifadesinde neden sadece ilk elemana 0 yazıyoruz ama tüm dizi sıfırlanıyor? Bu C dilinin hangi kuralıyla ilgili?
2. Zar programında diziyi `int gelenZarListesi[6]` olarak tanımlasaydık ne olurdu? Program çalışır mıydı?
3. `char harf = 'A' + 25;` ifadesi hangi karakteri verir? Neden?
4. `char isim[] = "Ali"` ile `char isim[] = {'A','l','i'}` arasındaki fark nedir? `sizeof` ile boyutlarını kontrol edin.
5. Bir metindeki sesli harf sayısını bulan programı yazın. (İpucu: sesli harfleri bir karakter dizisinde tutun ve her karakteri bu diziyle karşılaştırın.)
