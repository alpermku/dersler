---
layout: post
title: "Algoritma ve Programlama II: C Programlama Dilinde Diziler"
date: 2026-02-18
categories: algoritma-ve-programlama-ii
course_id: algoritma-ve-programlama-ii
tags: [c-programlama, diziler, veri-yapilari, algoritma]
---

# C Dilinde Diziler (Arrays)

Algoritma ve Programlama II dersinin temel taşlarından biri olan **Diziler (Arrays)** konusuna hoş geldiniz. Bu yazıda, dizilerin ne olduğunu, bellekte nasıl tutulduğunu ve C programlama dilinde nasıl kullanıldığını detaylıca inceleyeceğiz.

## Dizi Nedir?

Bir dizi, **aynı veri tipine** sahip birden fazla değişkeni, **tek bir isim** altında saklamamızı sağlayan veri yapısıdır.

Düşünün ki 100 öğrencinin notunu saklamak istiyorsunuz. `not1`, `not2`, ..., `not100` şeklinde 100 ayrı değişken tanımlamak hem zahmetli hem de yönetilemezdir. Bunun yerine, `notlar` adında 100 elemanlı tek bir dizi tanımlarız.

### Bellek Yapısı (Memory Layout)

Diziler bellekte **ardışık (contiguous)** olarak saklanır. Yani bir dizinin ilk elemanı `0x100` adresindeyse ve her eleman 4 byte (int) ise, ikinci eleman `0x104`, üçüncü eleman `0x108` adresindedir. Bu özellik, dizilere erişimin çok hızlı olmasını sağlar.

## Dizilerin Tanımlanması (Declaration)

C dilinde bir dizi tanımlamak için şu sözdizimi kullanılır:

```c
veri_tipi dizi_adi[boyut];
```

Örnekler:

```c
int sayilar[5];       // 5 adet tamsayı tutan dizi
float notlar[10];     // 10 adet ondalıklı sayı tutan dizi
char isim[20];        // 20 karakterlik dizi (String olarak da kullanılır)
```

## Başlangıç Değeri Atama (Initialization)

Bir diziyi tanımlarken içine başlangıç değerleri verebiliriz:

```c
// Boyut belirterek atama
int puanlar[5] = {10, 20, 30, 40, 50};

// Boyut belirtmeden atama (Derleyici boyutu otomatik hesaplar: 3)
int koordinatlar[] = {5, 8, 2};

// Kısmi atama (Geriye kalanlar 0 olur)
int veriler[5] = {1, 2}; // {1, 2, 0, 0, 0}
```

## Dizi Elemanlarına Erişim

Dizi elemanlarına **indeks (index)** numaraları ile erişilir. C dilinde (ve çoğu modern dilde) indeksler **0'dan başlar**.

*   İlk eleman: `dizi[0]`
*   İkinci eleman: `dizi[1]`
*   Son eleman: `dizi[boyut - 1]`

```c
int sayilar[5] = {10, 20, 30, 40, 50};

printf("%d", sayilar[0]); // Çıktı: 10
printf("%d", sayilar[4]); // Çıktı: 50

sayilar[2] = 99; // 3. elemanı (30) 99 olarak değiştirir.
```

> **⚠️ Önemli Uyarı:** C dilinde dizi sınır kontrolü (bounds checking) yoktur. Eğer 5 elemanlı bir dizinin 10. elemanına erişmeye çalışırsanız (`dizi[10]`), programınız hata vermeyebilir ancak bellekteki başka bir veriyi bozabilir veya "Segmentation Fault" ile çökebilir.

## Döngülerle Dizi İşlemleri

Dizilerin en büyük gücü, döngülerle birlikte kullanıldığında ortaya çıkar.

### Örnek: Dizi Elemanlarını Toplama

```c
#include <stdio.h>

int main() {
    int sayilar[5] = {10, 20, 30, 40, 50};
    int toplam = 0;
    int i;

    for (i = 0; i < 5; i++) {
        toplam += sayilar[i];
    }

    printf("Toplam: %d\n", toplam);
    printf("Ortalama: %.2f\n", (float)toplam / 5);

    return 0;
}
```

## Çok Boyutlu Diziler (Matrisler)

C dilinde dizilerin dizilerini oluşturabiliriz. En yaygın örneği **iki boyutlu diziler (matrisler)**dir.

Tanımlama:
```c
int matris[3][4]; // 3 satır, 4 sütun
```

Görselleştirme:
```text
      Sütun 0   Sütun 1   Sütun 2   Sütun 3
Satır 0: [0][0]    [0][1]    [0][2]    [0][3]
Satır 1: [1][0]    [1][1]    [1][2]    [1][3]
Satır 2: [2][0]    [2][1]    [2][2]    [2][3]
```

### Örnek: Matris Yazdırma

```c
#include <stdio.h>

int main() {
    int matris[2][3] = {
        {1, 2, 3}, // Satır 0
        {4, 5, 6}  // Satır 1
    };

    int i, j;
    for (i = 0; i < 2; i++) {       // Satırları gez
        for (j = 0; j < 3; j++) {   // Sütunları gez
            printf("%d ", matris[i][j]);
        }
        printf("\n"); // Her satır bitince alt satıra geç
    }
    
    return 0;
}
```

## Özet

*   **Diziler**, aynı türden verileri gruplamak için kullanılır.
*   Bellekte **ardışık** yer kaplarlar.
*   İndeksler **0'dan başlar**.
*   **Boyut sabittir**, çalışma zamanında (runtime) değiştirilemez (dinamik bellek yönetimi konusuna kadar).
*   Döngüler (`for`, `while`) ile elemanlar üzerinde işlem yapmak çok kolaydır.

Bir sonraki derste **Karakter Dizileri (Strings)** ve **Dizilerle Fonksiyon Kullanımı** konularına değineceğiz. İyi kodlamalar!
