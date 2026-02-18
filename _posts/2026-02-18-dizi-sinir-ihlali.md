---
layout: post
title: "Tehlikeli Sular: C Dilinde Dizi Sınır İhlali (Array Out of Bounds)"
date: 2026-02-18 09:45:00 +0300
categories: algoritma-ve-programlama-ii
course_id: algoritma-ve-programlama-ii
tags: [c-programlama, diziler, hata-yonetimi, buffer-overflow, guvenlik]
---

# C Dilinin En Tehlikeli Özelliği: Sınır Kontrolü Yok!

Java, C# veya Python gibi modern dillerde, 5 elemanlı bir dizinin 10. elemanına erişmeye çalışırsanız program anında hata verir (IndexOutOfBoundsException). Ancak **C dilinde bu koruma mekanizması yoktur.**

C derleyicisi, programcıya sonsuz bir güven duyar. "Eğer 10. elemana erişmek istiyorsan, bir bildiğin vardır" der ve bellekte o adrese gider. Ancak o adres diziye ait değilse, felaket başlar.

## Hatalı Örnek Kod Analizi

Aşağıdaki kodda, 5 elemanlı bir dizi tanımlanmış ancak döngüler 8 ve 10'a kadar devam ettirilmiştir.

```c
#include <stdio.h>

int main() {
    // 5 Elemanlı bir dizi tanımlıyoruz (İndeksler: 0, 1, 2, 3, 4)
    int sayilar[5] = {10, 20, 30, 40, 50};
    int i;

    // 1. ADIM: Normal Okuma (Sorunsuz)
    printf("--- Normal Okuma ---\n");
    for (i = 0; i < 5; i++) {
        printf("%d. eleman = %d'dir\n", i, sayilar[i]);
    }

    // 2. ADIM: Hatalı Yazma (Sınır İhlali!)
    // Dizi boyutu 5 ama döngü 8'e kadar gidiyor.
    // sayilar[5], sayilar[6] ve sayilar[7] bellekte diziye ait olmayan yerlerdir!
    printf("\n--- Hatali Sifirlama (Out of Bounds Write) ---\n");
    for (i = 0; i < 8; i++) {
        sayilar[i] = 0; 
        // DİKKAT: Burada bellekteki başka değişkenleri (örneğin 'i' değişkenini)
        // veya programın çalışması için kritik verileri bozabilirsiniz.
    }

    printf("-------------------------\n");

    // 3. ADIM: Hatalı Okuma (Out of Bounds Read)
    // Dizi boyutu 5 ama döngü 10'a kadar gidiyor.
    printf("--- Hatali Okuma ---\n");
    for (i = 0; i < 10; i++) {
        // 5. indeksten sonra "Çöp Değer" (Garbage Value) okuyacaksınız.
        // Şanssızsanız program çöker (Segmentation Fault).
        printf("%d. eleman = %d'dir\n", i, sayilar[i]);
    }

    /*
      ÖNEMLİ NOT:
      C derleyicisi index taşmalarını takip etmez.
      Bu kontrol tamamen programcının sorumluluğundadır.
    */

    return 0;
}
```

## Bu Kod Çalıştırıldığında Ne Olur?

Sonuç **Tanımsızdır (Undefined Behavior)**. Yani her bilgisayarda farklı sonuç verebilir.

Olası senaryolar:
1.  **Program Çöker (Segmentation Fault):** İşletim sistemi, programın kendisine ait olmayan bir belleğe eriştiğini fark edip programı sonlandırır.
2.  **Saçma Değerler Basar:** Ekranda `32767`, `-192934` gibi rastgele sayılar görürsünüz. Bunlar bellekte o an bulunan "çöp" verilerdir.
3.  **Sessizce Yanlış Çalışır:** Belki de `sayilar[5]` aslında `i` değişkeninin olduğu bellek adresine denk gelir. Siz oraya `0` yazdığınızda döngü değişkeni sıfırlanır ve **sonsuz döngüye** girersiniz!

## Güvenlik Riski: Buffer Overflow

Bu hata türü, siber güvenlik dünyasındaki meşhur **Buffer Overflow** zafiyetlerinin temelidir. Kötü niyetli bir kişi, dizi sınırını aşarak belleğe kendi zararlı kodunu yazabilir ve programın akışını değiştirebilir.

**Ders Çıkarımı:** Dizi boyutlarını her zaman kontrol edin ve döngülerinizi dizi boyutuna göre (`< boyut`) ayarladığınızdan emin olun.
