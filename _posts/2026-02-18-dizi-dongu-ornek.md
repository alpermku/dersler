---
layout: post
title: "Uygulama: Dizilerde Döngü Kullanımı (Okuma ve Sıfırlama)"
date: 2026-02-18
categories: algoritma-ve-programlama-ii
course_id: algoritma-ve-programlama-ii
tags: [c-programlama, diziler, donguler, for-dongusu]
---

# Diziler ve Döngüler: Ayrılmaz İkili

Diziler (Arrays) ve Döngüler (Loops), programlamada genellikle birlikte kullanılır. Bir dizinin tüm elemanlarına tek tek işlem yapmak istediğimizde, `for` döngüsü en pratik çözümdür.

Aşağıdaki örnekte, önce dolu bir diziyi ekrana yazdıracağız, ardından bir döngü yardımıyla **içini sıfırlayacağız** ve son olarak sıfırlandığını teyit etmek için tekrar ekrana yazdıracağız.

## Örnek Kod

```c
#include <stdio.h>

int main() {
    // 5 elemanlı bir dizi tanımlayıp içini dolduruyoruz
    int sayilar[5] = {10, 20, 30, 40, 50};
    int i;

    // 1. ADIM: Dizi Elemanlarını Okuma (Yazdırma)
    printf("--- Baslangic Durumu ---\n");
    for (i = 0; i < 5; i++) {
        // i değişkeni 0'dan 4'e kadar artar, böylece
        // sayilar[0], sayilar[1]... şeklinde tüm elemanlara erişiriz.
        printf("%d. eleman = %d'dir\n", i, sayilar[i]);
    }

    // 2. ADIM: Dizi Elemanlarını Sıfırlama
    // Aynı döngü yapısını bu kez değer atamak için kullanıyoruz.
    for (i = 0; i < 5; i++) {
        sayilar[i] = 0; // O anki indeksteki elemanı 0 yap
    }

    printf("\n-------------------------\n");
    printf("--- Sifirlama Sonrasi ---\n");

    // 3. ADIM: Son Durumu Kontrol Etme
    // Dizinin gerçekten sıfırlandığını görmek için tekrar yazdırıyoruz.
    for (i = 0; i < 5; i++) {
        printf("%d. eleman = %d'dir\n", i, sayilar[i]);
    }

    return 0;
}
```

## Program Çıktısı

Kodu derleyip çalıştırdığınızda şu sonucu göreceksiniz:

```text
--- Baslangic Durumu ---
0. eleman = 10'dir
1. eleman = 20'dir
2. eleman = 30'dir
3. eleman = 40'dir
4. eleman = 50'dir

-------------------------
--- Sifirlama Sonrasi ---
0. eleman = 0'dir
1. eleman = 0'dir
2. eleman = 0'dir
3. eleman = 0'dir
4. eleman = 0'dir
```

## Neden Döngü Kullanıyoruz?

Eğer bu işlemi döngüsüz yapsaydık, 5 satır `printf` ve 5 satır `sayilar[i] = 0;` yazmamız gerekirdi. Dizi boyutu 100 veya 1000 olduğunda bu imkansız hale gelirdi. Döngü sayesinde sadece **döngü sınırını** değiştirerek milyonlarca elemanı yönetebiliriz.

İyi çalışmalar!
