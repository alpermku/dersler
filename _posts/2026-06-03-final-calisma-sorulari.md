---
layout: post
title: "Final Çalışma Soruları"
date: 2026-06-03 10:18:00 +0300
categories: algoritma-ve-programlama-ii
course_id: algoritma-ve-programlama-ii
tags: [c-programlama, final, çalışma-soruları, açık-uçlu, rehber]
---

Finale çalışırken en büyük problem, öğrencinin soruyu okuyup hemen koda atlamasıdır. Oysa iyi çözüm şu sırayla doğar:

1. Sorunun ne istediğini çöz.
2. Hangi veri yapısını kullanacağını belirle.
3. Fonksiyonları ayır.
4. Sınır ve hata kontrollerini düşün.
5. Sonra kodu yaz.

Bu yüzden bu rehberi sadece açıklama metni olarak bırakmadım. Her sorunun altına **tam çalışır C kodu** ekledim. Yani öğrenci burada yalnızca mantığı değil, o mantığın çalışan programa nasıl dönüştüğünü de görecek.

---

## Final İçin Altın Kurallar

- `main()` sade kalmalı.
- Her fonksiyonun tek bir görevi olmalı.
- Dizi ve string sorularında sınır kontrolü unutulmamalı.
- Pointer sorularında adres ile değer farkı net bilinmeli.
- Dosya sorularında önce veri modeli kurulmalı.

---

## Bölüm A — Diziler ve Fonksiyonlar

---

## Soru 1: Dizi İstatistikleri

### Problem
Kullanıcıdan `N` adet tam sayı alınız. Diziyi doldurunuz, maksimumu, minimumu ve ortalamayı ayrı fonksiyonlarla bulunuz.

### Mantık
Bu soru tek sorumluluklu fonksiyon yazmayı ölçer. Maksimum ve minimum başlangıçta ilk elemana eşit alınmalıdır. Ortalama hesabında tür dönüşümü unutulmamalıdır.

### Tam Çalışır C Kodu

```c
#include <stdio.h>

#define MAKS 100

void diziDoldur(int dizi[], int n)
{
    int i;
    for (i = 0; i < n; i++)
    {
        printf("%d. sayi: ", i + 1);
        scanf("%d", &dizi[i]);
    }
}

int maksimumBul(int dizi[], int n)
{
    int i, max = dizi[0];
    for (i = 1; i < n; i++)
    {
        if (dizi[i] > max)
            max = dizi[i];
    }
    return max;
}

int minimumBul(int dizi[], int n)
{
    int i, min = dizi[0];
    for (i = 1; i < n; i++)
    {
        if (dizi[i] < min)
            min = dizi[i];
    }
    return min;
}

float ortalamaBul(int dizi[], int n)
{
    int i, toplam = 0;
    for (i = 0; i < n; i++)
        toplam += dizi[i];
    return (float)toplam / n;
}

int main()
{
    int sayilar[MAKS];
    int n;

    printf("Kac sayi gireceksiniz (1-%d): ", MAKS);
    scanf("%d", &n);

    if (n < 1 || n > MAKS)
    {
        printf("Gecersiz eleman sayisi!\n");
        return 1;
    }

    diziDoldur(sayilar, n);

    printf("Maksimum: %d\n", maksimumBul(sayilar, n));
    printf("Minimum : %d\n", minimumBul(sayilar, n));
    printf("Ortalama: %.2f\n", ortalamaBul(sayilar, n));

    return 0;
}
```

---

## Soru 2: Çift ve Tek Sayıların Toplamı

### Problem
Bir dizideki tek sayıların ve çift sayıların toplamını aynı fonksiyon içinde hesaplayınız.

### Mantık
Tek bir fonksiyon iki farklı sonucu döndüremeyeceği için pointer parametreleri kullanılmalıdır.

### Tam Çalışır C Kodu

```c
#include <stdio.h>

void tekCiftToplam(int dizi[], int n, int *tekToplam, int *ciftToplam)
{
    int i;
    *tekToplam = 0;
    *ciftToplam = 0;

    for (i = 0; i < n; i++)
    {
        if (dizi[i] % 2 == 0)
            *ciftToplam += dizi[i];
        else
            *tekToplam += dizi[i];
    }
}

int main()
{
    int dizi[100], n, i;
    int tekToplam, ciftToplam;

    printf("Eleman sayisi: ");
    scanf("%d", &n);

    for (i = 0; i < n; i++)
    {
        printf("%d. sayi: ", i + 1);
        scanf("%d", &dizi[i]);
    }

    tekCiftToplam(dizi, n, &tekToplam, &ciftToplam);

    printf("Tek sayilarin toplami : %d\n", tekToplam);
    printf("Cift sayilarin toplami: %d\n", ciftToplam);

    return 0;
}
```

---

## Soru 3: Tekrar Eden Elemanları Bulma

### Problem
Bir dizi içindeki tekrar eden elemanları yalnızca bir kez ekrana yazdırınız.

### Mantık
Aynı değeri iki kez yazdırmamak için “daha önce görülmüş mü” kontrolü gerekir.

### Tam Çalışır C Kodu

```c
#include <stdio.h>

int dahaOnceVarMi(int dizi[], int son, int deger)
{
    int i;
    for (i = 0; i < son; i++)
    {
        if (dizi[i] == deger)
            return 1;
    }
    return 0;
}

int main()
{
    int dizi[100], n, i, j;
    int bulundu = 0;

    printf("Eleman sayisi: ");
    scanf("%d", &n);

    for (i = 0; i < n; i++)
    {
        printf("%d. eleman: ", i + 1);
        scanf("%d", &dizi[i]);
    }

    printf("Tekrar eden sayilar:\n");

    for (i = 0; i < n; i++)
    {
        if (!dahaOnceVarMi(dizi, i, dizi[i]))
        {
            for (j = i + 1; j < n; j++)
            {
                if (dizi[i] == dizi[j])
                {
                    printf("%d\n", dizi[i]);
                    bulundu = 1;
                    break;
                }
            }
        }
    }

    if (!bulundu)
        printf("Tekrar eden eleman yok.\n");

    return 0;
}
```

---

## Soru 4: Diziyi Tersine Çevirme

### Problem
Ek dizi kullanmadan bir diziyi kendi üzerinde ters çeviriniz.

### Mantık
İlk ile son, ikinci ile sondan bir önceki eleman yer değiştirir. Döngü yarıya kadar gider.

### Tam Çalışır C Kodu

```c
#include <stdio.h>

void tersCevir(int dizi[], int n)
{
    int i, gecici;
    for (i = 0; i < n / 2; i++)
    {
        gecici = dizi[i];
        dizi[i] = dizi[n - 1 - i];
        dizi[n - 1 - i] = gecici;
    }
}

int main()
{
    int dizi[100], n, i;

    printf("Eleman sayisi: ");
    scanf("%d", &n);

    for (i = 0; i < n; i++)
    {
        printf("%d. eleman: ", i + 1);
        scanf("%d", &dizi[i]);
    }

    tersCevir(dizi, n);

    printf("Ters cevrilmis dizi: ");
    for (i = 0; i < n; i++)
        printf("%d ", dizi[i]);
    printf("\n");

    return 0;
}
```

---

## Bölüm B — İşaretçiler ve Bellek Yönetimi

---

## Soru 5: Swap Fonksiyonu

### Problem
İki tamsayının değerlerini yer değiştiriniz.

### Mantık
Fonksiyon dışarıdaki gerçek değerleri değiştireceği için pointer gerekir.

### Tam Çalışır C Kodu

```c
#include <stdio.h>

void swap(int *a, int *b)
{
    int gecici = *a;
    *a = *b;
    *b = gecici;
}

int main()
{
    int x, y;

    printf("Birinci sayi: ");
    scanf("%d", &x);
    printf("Ikinci sayi: ");
    scanf("%d", &y);

    swap(&x, &y);

    printf("Swap sonrasi x = %d, y = %d\n", x, y);
    return 0;
}
```

---

## Soru 6: İşaretçi Aritmetiği ile Dizi Toplamı

### Problem
`[]` kullanmadan, sadece işaretçi aritmetiği ile dizi toplamını hesaplayınız.

### Tam Çalışır C Kodu

```c
#include <stdio.h>

int toplamBul(int *ptr, int n)
{
    int i, toplam = 0;
    for (i = 0; i < n; i++)
        toplam += *(ptr + i);
    return toplam;
}

int main()
{
    int dizi[100], n, i;

    printf("Eleman sayisi: ");
    scanf("%d", &n);

    for (i = 0; i < n; i++)
    {
        printf("%d. eleman: ", i + 1);
        scanf("%d", &dizi[i]);
    }

    printf("Toplam = %d\n", toplamBul(dizi, n));
    return 0;
}
```

---

## Soru 7: İşaretçi ile Maksimum Değeri Bulma

### Problem
Bir dizideki en büyük elemanın adresini döndüren fonksiyon yazınız.

### Tam Çalışır C Kodu

```c
#include <stdio.h>

int *maksAdresBul(int dizi[], int n)
{
    int i;
    int *maksAdres = &dizi[0];

    for (i = 1; i < n; i++)
    {
        if (dizi[i] > *maksAdres)
            maksAdres = &dizi[i];
    }

    return maksAdres;
}

int main()
{
    int dizi[100], n, i;
    int *adres;

    printf("Eleman sayisi: ");
    scanf("%d", &n);

    for (i = 0; i < n; i++)
    {
        printf("%d. eleman: ", i + 1);
        scanf("%d", &dizi[i]);
    }

    adres = maksAdresBul(dizi, n);
    printf("En buyuk deger: %d\n", *adres);
    printf("Bellek adresi : %p\n", (void *)adres);

    return 0;
}
```

---

## Soru 8: Dinamik Bellek Yönetimi

### Problem
Kullanıcıdan `N` alınız, `malloc` ile dinamik dizi oluşturunuz, toplam ve ortalamayı hesaplayınız, sonra belleği serbest bırakınız.

### Tam Çalışır C Kodu

```c
#include <stdio.h>
#include <stdlib.h>

int main()
{
    int *dizi;
    int n, i, toplam = 0;
    float ortalama;

    printf("Kac sayi gireceksiniz: ");
    scanf("%d", &n);

    if (n <= 0)
    {
        printf("Gecersiz deger!\n");
        return 1;
    }

    dizi = (int *)malloc(n * sizeof(int));
    if (dizi == NULL)
    {
        printf("Bellek ayrilamadi!\n");
        return 1;
    }

    for (i = 0; i < n; i++)
    {
        printf("%d. sayi: ", i + 1);
        scanf("%d", &dizi[i]);
        toplam += dizi[i];
    }

    ortalama = (float)toplam / n;

    printf("Toplam   : %d\n", toplam);
    printf("Ortalama : %.2f\n", ortalama);

    free(dizi);
    return 0;
}
```

---

## Bölüm C — String İşleme

---

## Soru 9: Metin Analizörü

### Problem
Bir cümledeki harf, rakam ve boşluk sayısını bulunuz.

### Mantık
Tam cümle alınacağı için `scanf("%s")` yerine `fgets()` tercih edilmelidir.

### Tam Çalışır C Kodu

```c
#include <stdio.h>
#include <ctype.h>

int main()
{
    char metin[200];
    int i = 0, harf = 0, rakam = 0, bosluk = 0;

    printf("Bir cumle giriniz: ");
    fgets(metin, sizeof(metin), stdin);

    while (metin[i] != '\0')
    {
        if (isalpha((unsigned char)metin[i]))
            harf++;
        else if (isdigit((unsigned char)metin[i]))
            rakam++;
        else if (isspace((unsigned char)metin[i]))
            bosluk++;
        i++;
    }

    printf("Harf sayisi  : %d\n", harf);
    printf("Rakam sayisi : %d\n", rakam);
    printf("Bosluk sayisi: %d\n", bosluk);

    return 0;
}
```

---

## Soru 10: Palindrom Kontrolü

### Problem
Bir kelimenin palindrom olup olmadığını test ediniz.

### Tam Çalışır C Kodu

```c
#include <stdio.h>
#include <string.h>

int palindromMu(char kelime[])
{
    int sol = 0;
    int sag = strlen(kelime) - 1;

    while (sol < sag)
    {
        if (kelime[sol] != kelime[sag])
            return 0;
        sol++;
        sag--;
    }
    return 1;
}

int main()
{
    char kelime[100];

    printf("Kelime giriniz: ");
    scanf("%99s", kelime);

    if (palindromMu(kelime))
        printf("Palindromdur.\n");
    else
        printf("Palindrom degildir.\n");

    return 0;
}
```

---

## Soru 11: Kendi `strlen` Fonksiyonunu Yazma

### Problem
Hazır `strlen()` kullanmadan string uzunluğunu pointer ile hesaplayınız.

### Tam Çalışır C Kodu

```c
#include <stdio.h>

int benimStrlen(char *ptr)
{
    int uzunluk = 0;
    while (*ptr != '\0')
    {
        uzunluk++;
        ptr++;
    }
    return uzunluk;
}

int main()
{
    char metin[200];

    printf("Metin giriniz: ");
    fgets(metin, sizeof(metin), stdin);

    printf("Uzunluk: %d\n", benimStrlen(metin));
    return 0;
}
```

---

## Soru 12: Karakter Frekansı

### Problem
Bir string içinde belirli bir karakterin kaç kez geçtiğini bulunuz.

### Tam Çalışır C Kodu

```c
#include <stdio.h>

int karakterSay(char metin[], char hedef)
{
    int i = 0, sayac = 0;
    while (metin[i] != '\0')
    {
        if (metin[i] == hedef)
            sayac++;
        i++;
    }
    return sayac;
}

int main()
{
    char metin[200];
    char hedef;

    printf("Cumle giriniz: ");
    fgets(metin, sizeof(metin), stdin);

    printf("Aranan karakter: ");
    scanf(" %c", &hedef);

    printf("'%c' karakteri %d kez geciyor.\n", hedef, karakterSay(metin, hedef));
    return 0;
}
```

---

## Soru 13: Kendi `strcat` Fonksiyonunu Yazma

### Problem
Hazır `strcat()` kullanmadan iki string’i birleştiriniz.

### Tam Çalışır C Kodu

```c
#include <stdio.h>

void benimStrcat(char hedef[], char kaynak[])
{
    int i = 0, j = 0;

    while (hedef[i] != '\0')
        i++;

    while (kaynak[j] != '\0')
    {
        hedef[i] = kaynak[j];
        i++;
        j++;
    }

    hedef[i] = '\0';
}

int main()
{
    char birinci[200], ikinci[100];

    printf("Birinci metin: ");
    fgets(birinci, sizeof(birinci), stdin);

    if (birinci[0] != '\0')
    {
        int i = 0;
        while (birinci[i] != '\0')
            i++;
        if (i > 0 && birinci[i - 1] == '\n')
            birinci[i - 1] = '\0';
    }

    printf("Ikinci metin: ");
    fgets(ikinci, sizeof(ikinci), stdin);

    {
        int i = 0;
        while (ikinci[i] != '\0')
            i++;
        if (i > 0 && ikinci[i - 1] == '\n')
            ikinci[i - 1] = '\0';
    }

    benimStrcat(birinci, ikinci);
    printf("Birlestirilmis metin: %s\n", birinci);

    return 0;
}
```

---

## Bölüm D — Struct Yapıları

---

## Soru 14: Temel `Ogrenci` Yapısı

### Problem
5 öğrencinin `no`, `ad`, `ortalama` bilgilerini struct ile alıp tablo halinde yazdırınız.

### Tam Çalışır C Kodu

```c
#include <stdio.h>

#define OGR_SAYI 5

struct Ogrenci
{
    int no;
    char ad[30];
    float ortalama;
};

int main()
{
    struct Ogrenci ogr[OGR_SAYI];
    int i;

    for (i = 0; i < OGR_SAYI; i++)
    {
        printf("%d. ogrencinin numarasi: ", i + 1);
        scanf("%d", &ogr[i].no);

        printf("%d. ogrencinin adi: ", i + 1);
        scanf(" %29[^\n]", ogr[i].ad);

        printf("%d. ogrencinin ortalamasi: ", i + 1);
        scanf("%f", &ogr[i].ortalama);
    }

    printf("\n%-10s %-30s %-10s\n", "No", "Ad", "Ortalama");
    printf("------------------------------------------------------------\n");

    for (i = 0; i < OGR_SAYI; i++)
        printf("%-10d %-30s %-10.2f\n", ogr[i].no, ogr[i].ad, ogr[i].ortalama);

    return 0;
}
```

---

## Soru 15: En Yüksek ve En Düşük Ortalamalı Öğrenci

### Problem
10 öğrencilik struct dizisinde en yüksek ve en düşük ortalamalı öğrenciyi bulunuz.

### Tam Çalışır C Kodu

```c
#include <stdio.h>

#define N 10

struct Ogrenci
{
    int no;
    char ad[30];
    float ortalama;
};

int enYuksekIndex(struct Ogrenci dizi[], int n)
{
    int i, index = 0;
    for (i = 1; i < n; i++)
        if (dizi[i].ortalama > dizi[index].ortalama)
            index = i;
    return index;
}

int enDusukIndex(struct Ogrenci dizi[], int n)
{
    int i, index = 0;
    for (i = 1; i < n; i++)
        if (dizi[i].ortalama < dizi[index].ortalama)
            index = i;
    return index;
}

int main()
{
    struct Ogrenci ogr[N];
    int i, maxI, minI;

    for (i = 0; i < N; i++)
    {
        printf("%d. ogrenci no: ", i + 1);
        scanf("%d", &ogr[i].no);
        printf("%d. ogrenci ad: ", i + 1);
        scanf(" %29[^\n]", ogr[i].ad);
        printf("%d. ogrenci ortalama: ", i + 1);
        scanf("%f", &ogr[i].ortalama);
    }

    maxI = enYuksekIndex(ogr, N);
    minI = enDusukIndex(ogr, N);

    printf("\nEn yuksek ortalamali ogrenci: %d - %s - %.2f\n", ogr[maxI].no, ogr[maxI].ad, ogr[maxI].ortalama);
    printf("En dusuk ortalamali ogrenci : %d - %s - %.2f\n", ogr[minI].no, ogr[minI].ad, ogr[minI].ortalama);

    return 0;
}
```

---

## Soru 16: Personel Filtreleme Sistemi

### Problem
Maaşı 5000 TL üzerinde olan personelleri listeleyiniz.

### Tam Çalışır C Kodu

```c
#include <stdio.h>

#define N 5

struct Personel
{
    int no;
    char adSoyad[50];
    float maas;
};

int main()
{
    struct Personel p[N];
    int i;

    for (i = 0; i < N; i++)
    {
        printf("%d. personel no: ", i + 1);
        scanf("%d", &p[i].no);
        printf("%d. personel ad soyad: ", i + 1);
        scanf(" %49[^\n]", p[i].adSoyad);
        printf("%d. personel maas: ", i + 1);
        scanf("%f", &p[i].maas);
    }

    printf("\nMaasi 5000 TL uzerinde olan personeller:\n");
    for (i = 0; i < N; i++)
    {
        if (p[i].maas > 5000)
            printf("%d - %s - %.2f TL\n", p[i].no, p[i].adSoyad, p[i].maas);
    }

    return 0;
}
```

---

## Soru 17: Ürün Takip Sistemi

### Problem
Ürün ekleme, listeleme ve toplam envanter değerini hesaplayan struct tabanlı program yazınız.

### Tam Çalışır C Kodu

```c
#include <stdio.h>

#define N 5

struct Urun
{
    int kod;
    char ad[30];
    int stok;
    float fiyat;
};

void urunEkle(struct Urun urunler[], int n)
{
    int i;
    for (i = 0; i < n; i++)
    {
        printf("%d. urun kodu: ", i + 1);
        scanf("%d", &urunler[i].kod);
        printf("%d. urun adi: ", i + 1);
        scanf(" %29[^\n]", urunler[i].ad);
        printf("%d. stok miktari: ", i + 1);
        scanf("%d", &urunler[i].stok);
        printf("%d. fiyat: ", i + 1);
        scanf("%f", &urunler[i].fiyat);
    }
}

void urunleriListele(struct Urun urunler[], int n)
{
    int i;
    printf("\n%-10s %-30s %-10s %-10s\n", "Kod", "Ad", "Stok", "Fiyat");
    printf("---------------------------------------------------------------\n");
    for (i = 0; i < n; i++)
        printf("%-10d %-30s %-10d %-10.2f\n", urunler[i].kod, urunler[i].ad, urunler[i].stok, urunler[i].fiyat);
}

float envanterDegeri(struct Urun urunler[], int n)
{
    int i;
    float toplam = 0;
    for (i = 0; i < n; i++)
        toplam += urunler[i].stok * urunler[i].fiyat;
    return toplam;
}

int main()
{
    struct Urun urunler[N];

    urunEkle(urunler, N);
    urunleriListele(urunler, N);
    printf("\nToplam envanter degeri: %.2f\n", envanterDegeri(urunler, N));

    return 0;
}
```

---

## Bölüm E — Dosya İşlemleri

---

## Soru 18: Ardışık Erişimli Metin Dosyası

### Problem
20 sayıyı `sayilar.txt` dosyasına yazınız, sonra dosyadan okuyup toplam ve ortalama hesaplayınız.

### Tam Çalışır C Kodu

```c
#include <stdio.h>

int main()
{
    FILE *dosya;
    int sayi, i, toplam = 0;
    float ortalama;

    dosya = fopen("sayilar.txt", "w");
    if (dosya == NULL)
    {
        printf("Dosya olusturulamadi!\n");
        return 1;
    }

    for (i = 0; i < 20; i++)
    {
        printf("%d. sayi: ", i + 1);
        scanf("%d", &sayi);
        fprintf(dosya, "%d\n", sayi);
    }
    fclose(dosya);

    dosya = fopen("sayilar.txt", "r");
    if (dosya == NULL)
    {
        printf("Dosya acilamadi!\n");
        return 1;
    }

    for (i = 0; i < 20; i++)
    {
        fscanf(dosya, "%d", &sayi);
        toplam += sayi;
    }
    fclose(dosya);

    ortalama = (float)toplam / 20;
    printf("Toplam   : %d\n", toplam);
    printf("Ortalama : %.2f\n", ortalama);

    return 0;
}
```

---

## Soru 19: Binary Dosyada Öğrenci Kaydı

### Problem
Öğrenci kayıtlarını `ogrenciler.dat` dosyasına binary olarak yazınız ve tekrar okuyup listeleyiniz.

### Tam Çalışır C Kodu

```c
#include <stdio.h>

#define N 3

struct Ogrenci
{
    int no;
    char ad[30];
    float ortalama;
};

int main()
{
    FILE *dosya;
    struct Ogrenci ogr[N];
    struct Ogrenci okunan;
    int i;

    for (i = 0; i < N; i++)
    {
        printf("%d. ogrenci no: ", i + 1);
        scanf("%d", &ogr[i].no);
        printf("%d. ogrenci ad: ", i + 1);
        scanf(" %29[^\n]", ogr[i].ad);
        printf("%d. ogrenci ortalama: ", i + 1);
        scanf("%f", &ogr[i].ortalama);
    }

    dosya = fopen("ogrenciler.dat", "wb");
    if (dosya == NULL)
    {
        printf("Dosya acilamadi!\n");
        return 1;
    }

    fwrite(ogr, sizeof(struct Ogrenci), N, dosya);
    fclose(dosya);

    dosya = fopen("ogrenciler.dat", "rb");
    if (dosya == NULL)
    {
        printf("Dosya acilamadi!\n");
        return 1;
    }

    printf("\nKayitlar:\n");
    while (fread(&okunan, sizeof(struct Ogrenci), 1, dosya) == 1)
        printf("%d - %s - %.2f\n", okunan.no, okunan.ad, okunan.ortalama);

    fclose(dosya);
    return 0;
}
```

---

## Soru 20: Rastgele Erişimli Dosya Envanteri

### Problem
`fseek`, `fread`, `fwrite` kullanarak rastgele erişimli bir ürün kayıt sistemi yazınız.

### Mantık
Bu soru finalin en kuvvetli dosya sorusudur. Sabit boyutlu kayıt mantığı kurulmadan doğru çözüm çıkmaz.

### Tam Çalışır C Kodu

```c
#include <stdio.h>

#define MAKS_KAYIT 100
#define AD_UZUNLUK 30

struct Urun
{
    int kayitNo;
    char ad[AD_UZUNLUK];
    int miktar;
    float fiyat;
};

void dosyaBaslat(FILE *dosya)
{
    struct Urun bos = {0, "", 0, 0.0f};
    int i;
    rewind(dosya);
    for (i = 0; i < MAKS_KAYIT; i++)
        fwrite(&bos, sizeof(struct Urun), 1, dosya);
}

void kayitEkle(FILE *dosya)
{
    struct Urun u;
    int no;

    printf("Kayit no (1-%d): ", MAKS_KAYIT);
    scanf("%d", &no);

    if (no < 1 || no > MAKS_KAYIT)
    {
        printf("Gecersiz kayit no!\n");
        return;
    }

    fseek(dosya, (no - 1) * sizeof(struct Urun), SEEK_SET);
    fread(&u, sizeof(struct Urun), 1, dosya);

    if (u.kayitNo != 0)
    {
        printf("Bu kayit dolu!\n");
        return;
    }

    u.kayitNo = no;
    printf("Urun adi: ");
    scanf(" %29[^\n]", u.ad);
    printf("Miktar: ");
    scanf("%d", &u.miktar);
    printf("Fiyat: ");
    scanf("%f", &u.fiyat);

    fseek(dosya, (no - 1) * sizeof(struct Urun), SEEK_SET);
    fwrite(&u, sizeof(struct Urun), 1, dosya);
    fflush(dosya);

    printf("Kayit eklendi.\n");
}

void kayitGuncelle(FILE *dosya)
{
    struct Urun u;
    int no;

    printf("Guncellenecek kayit no: ");
    scanf("%d", &no);

    fseek(dosya, (no - 1) * sizeof(struct Urun), SEEK_SET);
    fread(&u, sizeof(struct Urun), 1, dosya);

    if (u.kayitNo == 0)
    {
        printf("Kayit bos.\n");
        return;
    }

    printf("Yeni urun adi: ");
    scanf(" %29[^\n]", u.ad);
    printf("Yeni miktar: ");
    scanf("%d", &u.miktar);
    printf("Yeni fiyat: ");
    scanf("%f", &u.fiyat);

    fseek(dosya, (no - 1) * sizeof(struct Urun), SEEK_SET);
    fwrite(&u, sizeof(struct Urun), 1, dosya);
    fflush(dosya);

    printf("Kayit guncellendi.\n");
}

void kayitSil(FILE *dosya)
{
    struct Urun bos = {0, "", 0, 0.0f};
    struct Urun u;
    int no;

    printf("Silinecek kayit no: ");
    scanf("%d", &no);

    fseek(dosya, (no - 1) * sizeof(struct Urun), SEEK_SET);
    fread(&u, sizeof(struct Urun), 1, dosya);

    if (u.kayitNo == 0)
    {
        printf("Kayit zaten bos.\n");
        return;
    }

    fseek(dosya, (no - 1) * sizeof(struct Urun), SEEK_SET);
    fwrite(&bos, sizeof(struct Urun), 1, dosya);
    fflush(dosya);

    printf("Kayit silindi.\n");
}

void listele(FILE *dosya)
{
    struct Urun u;
    int i;

    rewind(dosya);
    printf("\n%-10s %-25s %-10s %-10s\n", "KayitNo", "Ad", "Miktar", "Fiyat");
    printf("------------------------------------------------------------\n");

    for (i = 0; i < MAKS_KAYIT; i++)
    {
        fread(&u, sizeof(struct Urun), 1, dosya);
        if (u.kayitNo != 0)
            printf("%-10d %-25s %-10d %-10.2f\n", u.kayitNo, u.ad, u.miktar, u.fiyat);
    }
}

int main()
{
    FILE *dosya;
    int secim = -1;

    dosya = fopen("envanter.dat", "rb+");
    if (dosya == NULL)
    {
        dosya = fopen("envanter.dat", "wb+");
        if (dosya != NULL)
            dosyaBaslat(dosya);
    }

    if (dosya == NULL)
    {
        printf("Dosya acilamadi!\n");
        return 1;
    }

    while (secim != 0)
    {
        printf("\n1. Ekle\n2. Guncelle\n3. Sil\n4. Listele\n0. Cikis\nSecim: ");
        scanf("%d", &secim);

        if (secim == 1)
            kayitEkle(dosya);
        else if (secim == 2)
            kayitGuncelle(dosya);
        else if (secim == 3)
            kayitSil(dosya);
        else if (secim == 4)
            listele(dosya);
    }

    fclose(dosya);
    return 0;
}
```

---

## Bonus Soru 21: Kütüphane Otomasyon Sistemi

### Problem
Struct, pointer, dosya ve menü mantığını bir araya getiren küçük bir otomasyon yazınız.

### Mantık
Bu soru artık tek konu sorusu değil; mini proje sorusudur.

### Tam Çalışır C Kodu

```c
#include <stdio.h>

#define MAKS 50
#define AD_UZ 50
#define YAZAR_UZ 50

struct Kitap
{
    int no;
    char ad[AD_UZ];
    char yazar[YAZAR_UZ];
    int stok;
};

void kitapEkle(struct Kitap kitaplar[], int *adet)
{
    if (*adet >= MAKS)
    {
        printf("Daha fazla kitap eklenemez.\n");
        return;
    }

    printf("Kitap no: ");
    scanf("%d", &kitaplar[*adet].no);
    printf("Kitap adi: ");
    scanf(" %49[^\n]", kitaplar[*adet].ad);
    printf("Yazar: ");
    scanf(" %49[^\n]", kitaplar[*adet].yazar);
    printf("Stok miktari: ");
    scanf("%d", &kitaplar[*adet].stok);
    (*adet)++;
}

void kitapListele(struct Kitap kitaplar[], int adet)
{
    int i;
    printf("\n%-10s %-30s %-25s %-10s\n", "No", "Kitap Adi", "Yazar", "Stok");
    printf("--------------------------------------------------------------------------\n");
    for (i = 0; i < adet; i++)
        printf("%-10d %-30s %-25s %-10d\n", kitaplar[i].no, kitaplar[i].ad, kitaplar[i].yazar, kitaplar[i].stok);
}

void kitapGuncelle(struct Kitap kitaplar[], int adet)
{
    int no, i, bulundu = 0;
    printf("Guncellenecek kitap no: ");
    scanf("%d", &no);

    for (i = 0; i < adet; i++)
    {
        if (kitaplar[i].no == no)
        {
            printf("Yeni kitap adi: ");
            scanf(" %49[^\n]", kitaplar[i].ad);
            printf("Yeni yazar: ");
            scanf(" %49[^\n]", kitaplar[i].yazar);
            printf("Yeni stok: ");
            scanf("%d", &kitaplar[i].stok);
            bulundu = 1;
        }
    }

    if (!bulundu)
        printf("Kitap bulunamadi.\n");
}

void kitapSil(struct Kitap kitaplar[], int *adet)
{
    int no, i, j, bulundu = 0;
    printf("Silinecek kitap no: ");
    scanf("%d", &no);

    for (i = 0; i < *adet; i++)
    {
        if (kitaplar[i].no == no)
        {
            for (j = i; j < *adet - 1; j++)
                kitaplar[j] = kitaplar[j + 1];
            (*adet)--;
            bulundu = 1;
            break;
        }
    }

    if (!bulundu)
        printf("Kitap bulunamadi.\n");
}

void dosyayaYaz(struct Kitap kitaplar[], int adet)
{
    FILE *dosya = fopen("kitaplik.dat", "wb");
    if (dosya == NULL)
    {
        printf("Dosya yazilamadi.\n");
        return;
    }
    fwrite(&adet, sizeof(int), 1, dosya);
    fwrite(kitaplar, sizeof(struct Kitap), adet, dosya);
    fclose(dosya);
}

void dosyadanOku(struct Kitap kitaplar[], int *adet)
{
    FILE *dosya = fopen("kitaplik.dat", "rb");
    if (dosya == NULL)
    {
        *adet = 0;
        return;
    }
    fread(adet, sizeof(int), 1, dosya);
    fread(kitaplar, sizeof(struct Kitap), *adet, dosya);
    fclose(dosya);
}

int main()
{
    struct Kitap kitaplar[MAKS];
    int adet = 0;
    int secim = -1;

    dosyadanOku(kitaplar, &adet);

    while (secim != 0)
    {
        printf("\n1. Kitap ekle\n2. Guncelle\n3. Sil\n4. Listele\n0. Cikis\nSecim: ");
        scanf("%d", &secim);

        if (secim == 1)
            kitapEkle(kitaplar, &adet);
        else if (secim == 2)
            kitapGuncelle(kitaplar, adet);
        else if (secim == 3)
            kitapSil(kitaplar, &adet);
        else if (secim == 4)
            kitapListele(kitaplar, adet);

        dosyayaYaz(kitaplar, adet);
    }

    return 0;
}
```

---

## Son Söz

Bu yazı artık sadece soru listesi değil; aynı zamanda **çalışan çözüm arşivi** oldu.

Ama öğrencinin şunu unutmaması gerekir:

- Kodu görmek faydalıdır.
- Kodu anlamak daha faydalıdır.
- Kodu bakmadan tekrar yazabilmek ise oyunu gerçekten kazandığınız yerdir.

Bu yüzden her soruda şu yöntemi izleyin:

1. Önce açıklamayı okuyun.
2. Sonra kodu inceleyin.
3. Sonra kodu kapatın.
4. Kendiniz yeniden yazın.

Asıl öğrenme orada başlar.
