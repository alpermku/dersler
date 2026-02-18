---
layout: post
title: "C Dilinde Sabitler ve #define Kullanımı: Neden Hayat Kurtarır?"
date: 2026-02-18
categories: algoritma-ve-programlama-ii
course_id: algoritma-ve-programlama-ii
tags: [c-programlama, define, makrolar, temiz-kod, sabitler]
---

# Sihirli Sayılardan (Magic Numbers) Kurtulun!

Programlamada, kodun içine serpiştirilmiş, ne anlama geldiği belirsiz sayılara **"Sihirli Sayılar" (Magic Numbers)** denir. Örneğin bir döngüde `i < 10` yazdığınızda, o `10`'un ne anlama geldiğini (öğrenci sayısı mı? soru sayısı mı? dizi boyutu mu?) sadece siz bilirsiniz. 

Daha kötüsü, bu `10` sayısı kodun 50 farklı yerinde geçiyorsa ve bunu `20` yapmanız gerekirse, 50 satırı tek tek bulup değiştirmeniz gerekir.

İşte `#define` (makro) kullanımı tam bu noktada hayat kurtarır.

## Örnek Kod: #define ile Esnek Programlama

Aşağıdaki program, bir dizinin elemanlarına 2'den başlayarak çift sayıları atar ve bunları tablo şeklinde ekrana basar.

```c
/* 
   Geliştirilmiş C Programı: Diziler ve #define (Sabit) Kullanımı
   Bu program, bir dizinin elemanlarına 2'den 20'ye kadar çift sayıları atar.
*/

#include <stdio.h>

/* 
   NEDEN #DEFINE KULLANIRIZ?
   
   1. Okunabilirlik: '10' yazmak yerine 'BOYUT' yazmak, kodun amacını açıklar.
   2. Tek Noktadan Kontrol: Eğer diziyi 100 elemanlı yapmak istersen, kodun içindeki 
      tüm 10'ları tek tek bulup değiştirmek zorunda kalmazsın. 
      Sadece buradaki rakamı değiştirmen yeterlidir!
   3. Performans: #define bir değişken değil, bir 'önişlemci direktifi'dir.
      Program derlenmeden hemen önce, derleyici tüm BOYUT kelimelerini siler 
      ve yerine 10 yazar. Bilgisayar hafızasında yer kaplamaz.
*/

#define BOYUT 10 

int main(void) {
    
    // Diziyi BOYUT sabitini kullanarak tanımlıyoruz.
    // Eğer BOYUT'u 100 yaparsak, dizi otomatik olarak 100 elemanlı olur.
    int s[BOYUT]; 
    int j;

    /* --- DEĞER ATAMA DÖNGÜSÜ --- */
    // j < BOYUT ifadesi sayesinde döngü sınırını elle değiştirmemize gerek kalmaz.
    for (j = 0; j < BOYUT; j++) {
        /* 
           Matematiksel Formül: s[j] = 2 + 2 * j
           j=0 için -> 2 + 0 = 2
           j=1 için -> 2 + 2 = 4
           ... bu şekilde devam eder.
        */
        s[j] = 2 + 2 * j;
    }

    /* --- BAŞLIKLARI YAZDIRMA --- */
    // %13s: Yazının 13 karakterlik bir alana sağa yaslı yazılmasını sağlar.
    // Bu sayede sütun başlıkları ve sayılar hizalı durur.
    printf("%s %13s\n", "Eleman No", "Deger");

    /* --- DEĞERLERİ LİSTELEME --- */
    for (j = 0; j < BOYUT; j++) {
        /* 
           %7d: İndis numarasını 7 karakterlik boşluğa yazar.
           %13d: Değeri 13 karakterlik boşluğa yazar.
           
           Böylece alt alta gelen sayılar tablo gibi hizalı görünür.
        */
        printf("%7d %13d\n", j, s[j]);
    }

    return 0; // Program başarıyla tamamlandı.
}
```

## Öğrenci İçin Önemli Notlar

### 1. #define vs Değişken

Kodda `int boyut = 10;` yazsaydık da program çalışırdı. Ancak `#define` kullanıldığında bu bir **sabit (constant)** olur. Kodun içinde yanlışlıkla `BOYUT = 20;` yazmaya çalışırsan derleyici hata verir ve güvenliği sağlar. Değişkenlerin değeri değişebilir, ancak sabitlerin değişmez.

### 2. Sütun Hizalaması (Format Specifiers)

Kodun içindeki `%7d` ve `%13d` gibi ifadeler, ekran çıktısının bir tablo gibi düzgün görünmesini sağlar:

```text
Eleman No         Deger
        0             2
        1             4
      ...           ...
```

Bu özellik, özellikle çok sayıda veriyi ekrana basarken okunabilirliği artırır.

### 3. Esneklik Testi

Kendinize şu soruyu sorun: **"Eğer 2'den 200'e kadar yazdırmak isteseydik kodda neleri değiştirmemiz gerekirdi?"**

**Cevap:** Sadece en üstteki `#define BOYUT 10` satırını `#define BOYUT 100` yapmak yeterli! Kodun geri kalanına (döngülere, dizi tanımına, yazdırma işlemlerine) dokunmanıza gerek kalmaz. İşte `#define`'ın gücü budur.
