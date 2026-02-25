---
layout: post
title: "Dizileri Fonksiyona Geçirme — Büyük Güç, Büyük Sorumluluk"
date: 2026-02-25
categories: algoritma-ve-programlama-ii
---

Kahvenizi alın, arkanıza yaslanın — bu ders biraz farklı olacak. Bugün dizilerin fonksiyonlarla nasıl çalıştığını öğreneceğiz ve C dilinin en tehlikeli ama en güçlü özelliklerinden biriyle tanışacağız: **diziler fonksiyona geçirildiğinde kopyalanmaz, orijinal gönderilir.**

Evet, doğru okudunuz. Fonksiyona gönderdiğiniz dizi, bir fotokopi değil — **orijinalin ta kendisi**. Fonksiyon içinde yaptığınız her değişiklik, çağıran taraftaki diziye de yansır. Bu, bir arkadaşınıza ev anahtarınızı vermek gibidir: güvenirseniz harika, güvenmezseniz felaket.

---

## 1. Normal Değişkenler vs. Diziler: Büyük Fark

Önce bir hatırlama yapalım. Normal bir değişkeni fonksiyona gönderdiğinizde ne olur?

```c
void degerArtir(int x) {
    x = x + 100;
    printf("Fonksiyon icinde: %d\n", x);  // 105
}

int main() {
    int sayi = 5;
    degerArtir(sayi);
    printf("Main icinde: %d\n", sayi);     // 5 (degismedi!)
    return 0;
}
```

`sayi` hâlâ 5. Fonksiyon, `sayi`'nın **fotokopisini** aldı, fotokopinin üzerine yazdı ve fotokopi çöpe gitti. Orijinale dokunulmadı. Buna **değer ile geçirme (pass by value)** denir.

Ama dizilerde durum **tamamen farklıdır:**

```c
void diziyiDoldur(int dizi[], int boyut) {
    dizi[0] = 999;
}

int main() {
    int sayilar[3] = {1, 2, 3};
    printf("Once: %d\n", sayilar[0]);     // 1
    diziyiDoldur(sayilar, 3);
    printf("Sonra: %d\n", sayilar[0]);    // 999 (degisti!)
    return 0;
}
```

**Neden?** Çünkü C dilinde bir diziyi fonksiyona geçirdiğinizde, dizinin kendisi kopyalanmaz — **bellekteki adresini** gönderirsiniz. Fonksiyon bu adresi kullanarak orijinal veriye doğrudan erişir.

> 🏠 **Analoji:** Normal değişken göndermek = arkadaşınıza evinizin fotoğrafını göstermek (bakabilir ama bir şey yapamaz). Dizi göndermek = arkadaşınıza ev anahtarını vermek (içeri girip mobilyaları değiştirebilir).

---

## 2. Dizileri Fonksiyona Geçirmenin Söz Dizimi

### 2.1 Fonksiyon Prototipi (Bildirimi)

```c
void fonksiyonAdi(int[], int);
//                 ↑       ↑
//              dizi    boyut
```

Prototipte dizi parametresi `int[]` olarak yazılır — köşeli parantezin içi **boş bırakılır**. Çünkü fonksiyon dizinin boyutunu bilmez; boyutu ayrı bir parametre olarak göndermeniz gerekir.

**Neden boyut ayrı gönderilir?** C'de diziler kendi boyutlarını taşımaz. Bir dizi bellekte sadece art arda dizilmiş sayılardır — nerede bittiğini bilen bir mekanizma yoktur (stringlerdeki `'\0'` hariç). Bu yüzden boyutu her zaman yanında taşımak zorundasınız, cüzdanınızdaki kimlik kartı gibi.

### 2.2 Fonksiyon Tanımı

```c
void fonksiyonAdi(int islenecekDizi[], int boyut) {
    // islenecekDizi üzerinde işlem yap
}
```

Tanımda parametre adını yazarsınız. Bu ad, fonksiyon içinde diziyi temsil eder. Ama unutmayın: bu yeni bir dizi değil, **orijinal diziye takma ad (alias)** vermek gibidir.

### 2.3 Fonksiyon Çağrısı

```c
int degerler[5];
fonksiyonAdi(degerler, 5);
//            ↑         ↑
//        dizi adı    boyut
```

Çağrırken dizi adının yanına `[]` **yazılmaz**. Sadece dizi adı yeterlidir — dizi adı zaten bellekteki adresi temsil eder.

| Durum | Yazım | Doğru mu? |
|---|---|---|
| Prototip | `void f(int[], int);` | ✅ |
| Tanım | `void f(int dizi[], int n) { }` | ✅ |
| Çağrı | `f(degerler, 5);` | ✅ |
| Çağrı | `f(degerler[], 5);` | ❌ Hata! |

---

## 3. Tam Uygulama: Dizileri Fonksiyonlarla Yönetmek

Şimdi tüm bu bilgileri bir arada görelim. Aşağıdaki program üç farklı fonksiyon kullanarak bir diziyi yönetir:

```c
#include <stdio.h>
#include <stdlib.h>
#include <time.h>

/* Fonksiyon prototipleri */
void diziyeDegerleriGir(int[], int);
void diziDegerleriniEkranaYazdir(int[], int);
void diziyiSifirla(int[], int);

int main()
{
    srand(time(NULL));

    int degerler[5];

    /* 1. Adım: Rastgele değerler ata */
    diziyeDegerleriGir(degerler, 5);
    diziDegerleriniEkranaYazdir(degerler, 5);
    printf("\n");

    /* 2. Adım: Diziyi sıfırla */
    diziyiSifirla(degerler, 5);
    printf("\n");
    diziDegerleriniEkranaYazdir(degerler, 5);

    /* 3. Adım: Tekrar rastgele değerler ata */
    diziyeDegerleriGir(degerler, 5);
    printf("\n");
    diziDegerleriniEkranaYazdir(degerler, 5);
    printf("\n");

    return 0;
}

/* Diziye 1-100 arası rastgele değerler atar */
void diziyeDegerleriGir(int islenecekDizi[], int boyut)
{
    int sayac;
    for (sayac = 0; sayac < boyut; sayac++) {
        islenecekDizi[sayac] = rand() % 100 + 1;
    }
}

/* Dizi elemanlarını ekrana yazdırır */
void diziDegerleriniEkranaYazdir(int degeriYazilacakDizi[], int boyut)
{
    int sayac = 0;
    while (sayac < boyut) {
        printf("%d ", degeriYazilacakDizi[sayac]);
        sayac++;
    }
}

/* Dizinin tüm elemanlarını sıfırlar */
void diziyiSifirla(int degeriYazilacakDizi[], int boyut)
{
    int sayac = 0;
    while (sayac < boyut) {
        degeriYazilacakDizi[sayac] = 0;
        sayac++;
    }
}
```

### Örnek Çıktı

```
47 82 15 93 61
0 0 0 0 0
28 56 74 11 39
```

İlk satırda rastgele 5 sayı görüyoruz. Sonra `diziyiSifirla` çağrılıyor ve **aynı dizi** sıfırlanıyor — ikinci satırda hepsi 0. Sonra tekrar rastgele değerler atanıyor ve üçüncü satırda yeni sayılar çıkıyor. Hep **aynı `degerler` dizisi** üzerinde çalışıyoruz.

---

## 4. Satır Satır Derinlemesine Analiz

### Fonksiyon Prototipleri

```c
void diziyeDegerleriGir(int[], int);
void diziDegerleriniEkranaYazdir(int[], int);
void diziyiSifirla(int[], int);
```

Üç fonksiyonun da dönüş tipi `void` — yani bir değer döndürmüyorlar. Zaten döndürmelerine gerek yok: diziyi doğrudan değiştirebildikleri için sonucu geri "taşımak" zorunda değiller. **Dizi zaten orijinal olduğu için, değişiklik anında yansır.**

Bu, normal değişkenlerden farklıdır. Bir `int` değişkeni fonksiyon içinde değiştirip sonucu geri almak isterseniz `return` kullanmanız gerekir. Ama dizilerde `return`'e gerek yok — dizi zaten paylaşılıyor.

### `diziyeDegerleriGir` Fonksiyonu

```c
void diziyeDegerleriGir(int islenecekDizi[], int boyut)
{
    int sayac;
    for (sayac = 0; sayac < boyut; sayac++) {
        islenecekDizi[sayac] = rand() % 100 + 1;
    }
}
```

Bu fonksiyon, kendisine gönderilen dizinin her elemanına 1-100 arası rastgele bir sayı atar. `islenecekDizi` parametresi, `main`'deki `degerler` dizisinin **takma adıdır**. `islenecekDizi[0]` demek, aslında `degerler[0]` demektir.

> 🎭 **Analoji:** Telefonunuzdaki rehberde "Annem" yazan numara ile "05XX..." yazan numara aynı kişiye gider. `islenecekDizi` ve `degerler` de aynı diziye gider — sadece isim farklı.

### `diziDegerleriniEkranaYazdir` Fonksiyonu

```c
void diziDegerleriniEkranaYazdir(int degeriYazilacakDizi[], int boyut)
{
    int sayac = 0;
    while (sayac < boyut) {
        printf("%d ", degeriYazilacakDizi[sayac]);
        sayac++;
    }
}
```

Bu fonksiyon diziyi **sadece okur**, hiçbir elemanı değiştirmez. Ama C bunu bilmez — fonksiyona verilen dizi erişimi tam yetkilidir, istese değiştirebilir. Bu, potansiyel bir risk oluşturur. İleride `const` anahtar kelimesini öğrendiğimizde bu riski nasıl ortadan kaldıracağımızı göreceğiz.

Ayrıca dikkat edin: bu fonksiyon `for` yerine `while` döngüsü kullanıyor. İkisi de aynı işi yapar — sadece yazım stili farklı.

| Döngü Tipi | Ne Zaman Tercih Edilir |
|---|---|
| `for` | Sayaç değişkeni varsa ve kaç kez döneceği belliyse |
| `while` | Koşula bağlı, kaç kez döneceği önceden bilinmiyorsa |

Bu örnekte `for` daha uygun olurdu (çünkü kaç kez döneceği belli), ama `while` da gayet çalışır. Önemli olan mantığı kavramak.

### `diziyiSifirla` Fonksiyonu

```c
void diziyiSifirla(int degeriYazilacakDizi[], int boyut)
{
    int sayac = 0;
    while (sayac < boyut) {
        degeriYazilacakDizi[sayac] = 0;
        sayac++;
    }
}
```

Bu fonksiyon dizinin her elemanını 0 yapar. Daha önce `main` içinde döngüyle yaptığımız sıfırlama işlemini artık bir fonksiyona taşıdık. Avantajı ne? **Bir kere yazıyorsun, istediğin kadar çağırıyorsun.** 5 farklı diziyi sıfırlamanız gerekse, her seferinde döngü yazmak yerine:

```c
diziyiSifirla(dizi1, 10);
diziyiSifirla(dizi2, 20);
diziyiSifirla(dizi3, 5);
```

Üç satır. Temiz, okunabilir, hata yapma ihtimali düşük.

---

## 5. Bellek Düzeyinde Ne Oluyor?

Bu kısmı anlamak zorunlu değil ama anlayanlar "aha!" diyecek.

```
main() çağrıldığında:
┌─────────────────────────────┐
│  degerler[0] = ?            │  adres: 1000
│  degerler[1] = ?            │  adres: 1004
│  degerler[2] = ?            │  adres: 1008
│  degerler[3] = ?            │  adres: 1012
│  degerler[4] = ?            │  adres: 1016
└─────────────────────────────┘

diziyeDegerleriGir(degerler, 5) çağrıldığında:
islenecekDizi → adres 1000'i gösteriyor (aynı yer!)

islenecekDizi[0] = 47  →  adres 1000'e yaz  →  degerler[0] = 47
islenecekDizi[1] = 82  →  adres 1004'e yaz  →  degerler[1] = 82
...
```

Fonksiyon bitip `main`'e dönüldüğünde, `degerler` dizisi artık `{47, 82, 15, 93, 61}` değerlerini taşır. Çünkü fonksiyon aynı bellek adreslerine yazdı.

---

## 6. Sık Yapılan Hatalar

### Hata 1: Çağrırken Köşeli Parantez Yazmak

```c
// ❌ YANLIŞ
diziyeDegerleriGir(degerler[], 5);

// ✅ DOĞRU
diziyeDegerleriGir(degerler, 5);
```

Dizi adı zaten adresi temsil eder. `[]` eklemenize gerek yok — aslında eklerseniz **derleme hatası** alırsınız.

### Hata 2: Boyutu Yanlış Göndermek

```c
int degerler[5];
diziyeDegerleriGir(degerler, 10);  // ⚠️ Tehlike!
```

Dizinin boyutu 5 ama fonksiyona 10 gönderdiniz. Fonksiyon, `degerler[5]`'ten `degerler[9]`'a kadar bellekte diziye ait olmayan yerlere yazacak. Bu, **dizi sınır ihlali** — programın çökmesine, yanlış sonuçlara veya güvenlik açıklarına yol açar. Derste bu konuyu detaylıca işlemiştik.

### Hata 3: Fonksiyonun Diziyi Değiştireceğini Unutmak

```c
void tehlikeliFonksiyon(int dizi[], int boyut) {
    dizi[0] = -1;  // "Sadece okuyacağım" derken...
}

int main() {
    int notlar[3] = {90, 85, 95};
    tehlikeliFonksiyon(notlar, 3);
    // notlar[0] artık -1! Öğrencinin notu silindi!
}
```

Fonksiyon diziyi değiştirmemesi gerekiyorsa bile, **C sizi engellemez.** Dikkatli olmak sizin sorumluluğunuzdadır. (İleride `const` ile bu korumayı mekanik hâle getireceğiz.)

### Hata 4: Fonksiyon İçinde `sizeof` ile Boyut Bulmaya Çalışmak

```c
void yanlisFonksiyon(int dizi[]) {
    int boyut = sizeof(dizi) / sizeof(dizi[0]);
    // ❌ Bu ÇALIŞMAZ! sizeof(dizi) burada dizinin
    // boyutunu değil, adresin boyutunu verir.
}
```

Bu, C'nin en ünlü tuzaklarından biridir. Fonksiyon içinde `sizeof` ile dizi boyutunu hesaplayamazsınız — bu yüzden boyutu ayrı parametre olarak gönderiyoruz.

---

## 7. Pratik Uygulama: Fonksiyonlarla Not Sistemi

Öğrendiğimiz her şeyi kullanan daha kapsamlı bir örnek:

```c
#include <stdio.h>
#include <stdlib.h>
#include <time.h>

#define OGRENCI_SAYISI 10
#define NOT_MIN 40
#define NOT_MAX 100
#define GECME_NOTU 50

/* Fonksiyon prototipleri */
void rastgeleNotUret(int[], int);
void notlariYazdir(int[], int);
void enYuksekVeEnDusukBul(int[], int);
int ortalamaHesapla(int[], int);
int gecenOgrenciSay(int[], int);

int main()
{
    srand(time(NULL));

    int notlar[OGRENCI_SAYISI];

    /* Rastgele notlar üret */
    rastgeleNotUret(notlar, OGRENCI_SAYISI);

    printf("=== SINIF NOT TABLOSU ===\n\n");

    /* Notları yazdır */
    notlariYazdir(notlar, OGRENCI_SAYISI);

    /* İstatistikler */
    printf("\n=== ISTATISTIKLER ===\n");
    enYuksekVeEnDusukBul(notlar, OGRENCI_SAYISI);

    int ort = ortalamaHesapla(notlar, OGRENCI_SAYISI);
    printf("Sinif ortalamasi: %d\n", ort);

    int gecen = gecenOgrenciSay(notlar, OGRENCI_SAYISI);
    printf("Gecen ogrenci: %d / %d (%%%.0f)\n",
           gecen, OGRENCI_SAYISI,
           gecen * 100.0 / OGRENCI_SAYISI);

    return 0;
}

/* Diziye rastgele notlar atar (diziyi DEĞİŞTİRİR) */
void rastgeleNotUret(int notDizisi[], int boyut)
{
    int i;
    for (i = 0; i < boyut; i++) {
        notDizisi[i] = rand() % (NOT_MAX - NOT_MIN + 1) + NOT_MIN;
    }
}

/* Dizi elemanlarını tablo olarak yazdırır (diziyi DEĞİŞTİRMEZ) */
void notlariYazdir(int notDizisi[], int boyut)
{
    int i;
    printf("%-12s %5s %8s\n", "Ogrenci", "Not", "Durum");
    printf("----------------------------\n");
    for (i = 0; i < boyut; i++) {
        printf("Ogrenci #%-3d %5d %8s\n",
               i + 1,
               notDizisi[i],
               notDizisi[i] >= GECME_NOTU ? "GECTI" : "KALDI");
    }
}

/* En yüksek ve en düşük notu bulur (diziyi DEĞİŞTİRMEZ) */
void enYuksekVeEnDusukBul(int notDizisi[], int boyut)
{
    int enYuksek = notDizisi[0];
    int enDusuk = notDizisi[0];
    int i;

    for (i = 1; i < boyut; i++) {
        if (notDizisi[i] > enYuksek) {
            enYuksek = notDizisi[i];
        }
        if (notDizisi[i] < enDusuk) {
            enDusuk = notDizisi[i];
        }
    }

    printf("En yuksek not: %d\n", enYuksek);
    printf("En dusuk not:  %d\n", enDusuk);
}

/* Dizinin ortalamasını hesaplar ve DÖNDÜRÜR (diziyi DEĞİŞTİRMEZ) */
int ortalamaHesapla(int notDizisi[], int boyut)
{
    int toplam = 0;
    int i;

    for (i = 0; i < boyut; i++) {
        toplam = toplam + notDizisi[i];
    }

    return toplam / boyut;
}

/* Geçme notunu aşan öğrenci sayısını DÖNDÜRÜR (diziyi DEĞİŞTİRMEZ) */
int gecenOgrenciSay(int notDizisi[], int boyut)
{
    int gecenSayisi = 0;
    int i;

    for (i = 0; i < boyut; i++) {
        if (notDizisi[i] >= GECME_NOTU) {
            gecenSayisi++;
        }
    }

    return gecenSayisi;
}
```

### Bu Örnekte Dikkat Edilmesi Gerekenler

**1. `void` vs. `int` dönüş tipi:**

| Fonksiyon | Dönüş Tipi | Neden? |
|---|---|---|
| `rastgeleNotUret` | `void` | Diziyi doğrudan değiştirir, geri dönecek bir şey yok |
| `notlariYazdir` | `void` | Sadece ekrana yazar, bir şey hesaplamaz |
| `enYuksekVeEnDusukBul` | `void` | Sonucu ekrana yazdırır (ileride struct ile iki değer döndürmeyi öğreneceğiz) |
| `ortalamaHesapla` | `int` | Tek bir değer hesaplar ve döndürür |
| `gecenOgrenciSay` | `int` | Tek bir değer hesaplar ve döndürür |

**2. Yorum olarak "DEĞİŞTİRİR" / "DEĞİŞTİRMEZ":**

Her fonksiyonun başına diziye ne yaptığını yazdık. Bu, profesyonel bir alışkanlıktır — başkası (veya 3 ay sonraki siz) kodu okuduğunda, fonksiyonun diziyi değiştirip değiştirmediğini anında görür.

**3. `return` kullanan fonksiyonlar:**

`ortalamaHesapla` ve `gecenOgrenciSay` fonksiyonları diziyi değiştirmez — sadece okur, bir sonuç hesaplar ve `return` ile geri döndürür. Bu sonuç `main` içinde bir değişkene atanır:

```c
int ort = ortalamaHesapla(notlar, OGRENCI_SAYISI);
```

---

## 8. Fonksiyonsuz vs. Fonksiyonlu: Farkı Hissedin

Aynı işi fonksiyonsuz yazsaydık `main` nasıl görünürdü?

```c
int main() {
    // 1. Rastgele not üretme (7 satır)
    // 2. Notları yazdırma (8 satır)
    // 3. En yüksek/düşük bulma (12 satır)
    // 4. Ortalama hesaplama (6 satır)
    // 5. Geçen öğrenci sayma (7 satır)
    // TOPLAM: ~40 satır, hepsi iç içe, takip etmesi kabus
}
```

Fonksiyonlarla:

```c
int main() {
    rastgeleNotUret(notlar, OGRENCI_SAYISI);
    notlariYazdir(notlar, OGRENCI_SAYISI);
    enYuksekVeEnDusukBul(notlar, OGRENCI_SAYISI);
    int ort = ortalamaHesapla(notlar, OGRENCI_SAYISI);
    int gecen = gecenOgrenciSay(notlar, OGRENCI_SAYISI);
    // 5 satır. Her biri ne yaptığını adıyla söylüyor.
}
```

Fonksiyonlar kodu kısaltmaz — **okunabilir kılar.** `main`'e bakan biri, kodun ne yaptığını fonksiyon adlarından anlayabilir. Detayları merak ederse fonksiyonun içine bakar. Bu, kitaptaki bölüm başlıkları gibidir: önce içindekiler sayfasına bakarsınız, ilgilendiğiniz bölüme geçersiniz.

---

## 9. Özet Tablosu

| Konu | Kural |
|---|---|
| Dizi parametre söz dizimi | Prototip: `int[]`, Tanım: `int dizi[]`, Çağrı: `diziAdi` |
| Boyut parametresi | Her zaman ayrı `int` olarak gönderilmeli |
| Değer geçirme vs. adres | Normal değişkenler kopyalanır, diziler **kopyalanmaz** |
| Fonksiyon içi değişiklik | Dizi üzerindeki değişiklik **orijinali etkiler** |
| `sizeof` tuzağı | Fonksiyon içinde `sizeof(dizi)` dizi boyutunu vermez |
| `void` fonksiyonlar | Diziyi doğrudan değiştirenler için uygundur |
| `return` fonksiyonlar | Diziden tek bir sonuç hesaplayanlar için uygundur |

---

## 10. Düşünme Soruları

1. Aşağıdaki kodun çıktısı ne olur? Kağıt üzerinde çözün, sonra derleyin:

```c
void gizemli(int d[], int n) {
    int i;
    for (i = 0; i < n / 2; i++) {
        int gecici = d[i];
        d[i] = d[n - 1 - i];
        d[n - 1 - i] = gecici;
    }
}

int main() {
    int x[] = {10, 20, 30, 40, 50};
    gizemli(x, 5);
    // x dizisi şimdi ne?
}
```

2. `diziDegerleriniEkranaYazdir` fonksiyonunda `while` yerine `for` döngüsü kullansaydık, kod nasıl değişirdi? Hangisi bu durumda daha uygun?

3. Neden dizi boyutunu `#define` sabiti yerine fonksiyon parametresi olarak gönderiyoruz? Her ikisinin avantajı ne?

4. İki diziyi parametre olarak alan ve birinin elemanlarını diğerine kopyalayan `diziyiKopyala(int hedef[], int kaynak[], int boyut)` fonksiyonunu yazın. `hedef` dizisi değişmeli, `kaynak` dizisi değişmemeli.

5. **Bonus (meraklısına):** `diziyeDegerleriGir` fonksiyonunun `srand(time(NULL))` satırını `main`'den alıp fonksiyonun içine koysaydık ne olurdu? Fonksiyonu art arda iki kez çağırsaydık sonuçlar neden aynı çıkabilir?
