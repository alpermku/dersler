---
layout: post
title: "C Dilinde Dizi Tanımlama, Değer Atama ve Sıfırlama Yöntemleri"
date: 2026-02-18
categories: algoritma-ve-programlama-ii
course_id: algoritma-ve-programlama-ii
tags: [c-programlama, diziler, baslangic-degeri, sifirlama]
---

# Dizi Tanımlama ve Değer Atama (Array Initialization)

Bir önceki dersimizde dizilerin ne olduğunu öğrenmiştik. Bu dersimizde ise dizileri tanımlarken veya sonrasında nasıl değer atayabileceğimizi, kısmi atama (partial initialization) kavramını ve bir dizinin içeriğini nasıl sıfırlayabileceğimizi kod örnekleriyle inceleyeceğiz.

Aşağıdaki örnek kod, dizilerle çalışırken karşılaşabileceğiniz farklı senaryoları özetlemektedir.

## Örnek Kod Analizi

```c
#include <stdio.h>
#include <stdlib.h>

int main(int argc, char *argv[]) {
    
    // 1. Yöntem: Diziyi Değer Atamadan Bildirme
    // Bellekte yer ayrılır ancak içi "çöp değer" (garbage value) olabilir.
    int sayilar[3]; 
    
    // Elemanlara tek tek erişip değer atama:
    sayilar[0] = 15;  // İlk eleman (İndeks 0)
    sayilar[1] = -5;  // İkinci eleman
    sayilar[2] = 0;   // Üçüncü (son) eleman

    /* 
       Önemli Kural:
       n elemanlı bir dizinin:
       - İlk elemanı: dizi[0]
       - Son elemanı: dizi[n-1] dir.
    */

    // 2. Yöntem: Bildirim Anında Tüm Elemanları Sıfırlama
    // Dizinin tüm elemanlarını 0 yapmak için en pratik yöntemdir.
    int tSayi[15] = {0}; // Tüm 15 eleman 0 olur.

    // Alternatif (Uzun) Yöntem:
    int ts[5] = {0, 0, 0, 0, 0}; // Tek tek 0 yazmak (sadece küçük dizilerde mantıklıdır)

    // 3. Kısmi Başlangıç Değeri Atama (Partial Initialization)
    // Eğer dizi boyutundan daha az sayıda değer girerseniz,
    // derleyici geri kalan elemanları otomatik olarak 0 yapar.
    int sayilarim[4] = {5, 7}; 
    // Sonuç: {5, 7, 0, 0}
    
    // 4. Dolu Bir Diziyi Sonradan Sıfırlama
    int say[4] = {25, 65, 45, 52};

    // Yöntem A: Manuel Sıfırlama (Zahmetli)
    say[0] = 0;
    say[1] = 0;
    say[2] = 0;
    say[3] = 0;

    // Yöntem B: Döngü ile Sıfırlama (Önerilen)
    // Dizi boyutu ne olursa olsun çalışır ve temizdir.
    int sayac;
    for(sayac = 0; sayac < 4; sayac++) {
        say[sayac] = 0;
    }

    return 0;
}
```

## Özet

1.  **Tanımlama:** `int dizi[boyut];`
2.  **Sıfırlama (Init):** `int dizi[boyut] = {0};` (En kolayı)
3.  **Kısmi Atama:** `int dizi[5] = {1, 2};` -> `{1, 2, 0, 0, 0}`
4.  **Döngü:** Var olan bir diziyi temizlemek veya tüm elemanlarına erişmek için `for` döngüsü en iyi dostunuzdur.

Bir sonraki derste görüşmek üzere!
