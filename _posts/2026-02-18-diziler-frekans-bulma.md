---
layout: post
title: "Dizilerin Gücü: İf-Else Zincirinden Kurtulmak ve Frekans (Histogram) Hesabı"
date: 2026-02-18
categories: algoritma-ve-programlama-ii
course_id: algoritma-ve-programlama-ii
tags: [c-programlama, diziler, optimizasyon, histogram, frekans]
---

# 100 Tane İf Yazmak İster Misiniz?

Bir veri setindeki elemanların kaç kez tekrar ettiğini (frekansını) bulmak, programlamada çok sık karşılaşılan bir problemdir. Örneğin 40 öğrencinin 1 ile 10 arasında verdiği puanları analiz etmek isteyelim.

Aşağıdaki kodu inceleyelim. Çalışıyor mu? Evet. Ama **iyi bir kod mu? Kesinlikle hayır.**

## Kötü Kod Örneği (Anti-Pattern)

Bu kodda her ihtimal için ayrı bir `if-else` yazılmıştır. Eğer puanlar 1 ile 10 değil de, 1 ile 100 arasında olsaydı, bu kodu yazmak saatler sürerdi!

```c
#include <stdio.h>

int main(void) {
    // 40 adet anket cevabı (1-10 arası puanlar)
    int cevaplar[40] = {1,6,5,9,10,2,4,5,6,6,1,6,5,9,10, 
                        2,4,5,6,6,1,6,5,9,10,2,4,5,6,6,
                        1,6,5,9,10,2,4,5,6,6};
    
    // Frekansları tutacak dizi (0. indisi kullanmayacağız, 1-10 arası için boyut 11)
    int frekans[11] = {0}; 
    int i;

    /* --- VERİMSİZ YÖNTEM --- */
    for(i = 0; i < 40; i++) {
        // Her ihtimali tek tek kontrol etmek:
        if(cevaplar[i] == 1) {
            frekans[1]++;
        } else if(cevaplar[i] == 2) {
            frekans[2]++;
        } else if(cevaplar[i] == 3) {
            frekans[3]++;
        } 
        /* ... ve böyle devam edip gidiyor ... */
        else if(cevaplar[i] == 10) {
            frekans[10]++;
        } else {
            printf("Yanlis giris: %d\n", cevaplar[i]);
        }
    }
    /* ------------------------ */

    // Sonuçları Yazdırma
    printf("%s %17s\n", "Puan", "Frekans");
    for(i = 1; i <= 10; i++) {
        printf("%4d %17d\n", i, frekans[i]);
    }

    return 0;
}
```

## Akıllı Çözüm: Diziyi İndeks Olarak Kullanmak

Programlamada veri, **dizinin indeksi** olabilir.

`cevaplar[i]` değeri zaten 1 ile 10 arasında bir sayı değil mi? O zaman bu değeri **doğrudan `frekans` dizisinin indeksi** olarak kullanabiliriz!

Yani:
*   Cevap **3** ise -> `frekans[3]` artmalı.
*   Cevap **7** ise -> `frekans[7]` artmalı.
*   Cevap **X** ise -> `frekans[X]` artmalı.

İşte "Mühendis Yöntemi" ile yazılmış, temiz ve esnek kod:

```c
#include <stdio.h>
#define CEVAP_SAYISI 40
#define FREKANS_BOYUTU 11

int main(void) {
    int cevaplar[CEVAP_SAYISI] = {1,6,5,9,10,2,4,5,6,6,1,6,5,9,10, 
                                  2,4,5,6,6,1,6,5,9,10,2,4,5,6,6,
                                  1,6,5,9,10,2,4,5,6,6};
                                  
    // Tüm frekansları 0 ile başlatıyoruz
    int frekans[FREKANS_BOYUTU] = {0}; 
    int i;

    /* --- AKILLI YÖNTEM (TEK SATIR!) --- */
    for(i = 0; i < CEVAP_SAYISI; i++) {
        
        // Hata Kontrolü (İyi Mühendislik)
        // Gelen cevap 1-10 aralığında mı?
        if(cevaplar[i] >= 1 && cevaplar[i] <= 10) {
            
            // İşte sihirli satır:
            // Cevabı al, o indisteki frekansı 1 artır.
            frekans[ cevaplar[i] ]++; 
            
        } else {
            printf("Gecersiz veri: %d\n", cevaplar[i]);
        }
    }
    /* ---------------------------------- */

    // Sonuçları Yazdırma (Tablo Düzeni)
    printf("%s %17s\n", "Puan", "Frekans");
    printf("---- -----------------\n");
    
    for(i = 1; i < FREKANS_BOYUTU; i++) {
        printf("%4d %17d\n", i, frekans[i]);
    }

    return 0;
}
```

### Neden Bu Yöntem Daha İyi?

1.  **Kısa ve Temiz:** 20 satırlık `if-else` bloğu tek satıra indi.
2.  **Ölçeklenebilir:** Puanlar 1-10 değil, 1-1000 olsaydı bile kodda **hiçbir değişiklik yapmanıza gerek kalmazdı** (sadece dizi boyutunu artırırdınız).
3.  **Hızlı:** İşlemci `if` kontrolleriyle vakit kaybetmez, doğrudan bellek adresine gidip artırma işlemini yapar (O(1) erişim).

**Ders Çıkarımı:** Veriyi sadece saklamak için değil, **erişim anahtarı (key/index)** olarak kullanmak için de düşünün. Bu, sizi kod hamallığından kurtarır.
