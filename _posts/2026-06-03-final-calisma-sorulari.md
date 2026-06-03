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

### Kodun Adım Adım Açıklaması

Bu programın omurgası dört ayrı fonksiyon üzerine kuruludur ve bu çok doğru bir tasarımdır. Çünkü soru tek bir hesap istemiyor; veri alma, maksimum bulma, minimum bulma ve ortalama hesaplama gibi **farklı görevler** istiyor.

#### 1. `#define MAKS 100`
Bu sabit, dizinin fiziksel kapasitesini belirler. Program kullanıcıdan en fazla 100 sayı kabul eder. Böylece bellekte ne kadar alan ayrıldığı nettir ve sihirli sayı kullanılmamış olur.

#### 2. `diziDoldur()` fonksiyonu
Bu fonksiyon yalnızca kullanıcıdan verileri alır ve diziye yerleştirir. Dikkat ederseniz hesaplama yapmaz. Bu, tek sorumluluk prensibinin temiz bir örneğidir.

Döngü her turda kullanıcıdan bir sayı ister:
- `i = 0` iken 1. sayı,
- `i = 1` iken 2. sayı,
- ...
- `i = n - 1` iken son sayı alınır.

Yani dizi, sırayla ve kontrollü biçimde doldurulur.

#### 3. `maksimumBul()` nasıl çalışıyor?
Fonksiyon başlangıçta `max = dizi[0]` diyerek ilk elemanı en büyük kabul eder. Bu çok kritik bir tercih. Çünkü eğer `max = 0` denseydi ve bütün sayılar negatif olsaydı sonuç yanlış çıkardı.

Sonra döngü ikinci elemandan başlayarak tüm diziyi tarar. Her eleman için şu soru sorulur:

> “Şu anki eleman mevcut maksimumdan büyük mü?”

Eğer büyükse `max` güncellenir. Döngü bittiğinde elde kalan değer gerçek maksimum olur.

#### 4. `minimumBul()` neden benzer?
Mantık neredeyse aynıdır. Bu kez başlangıçta `min = dizi[0]` alınır ve daha küçük değer görüldükçe `min` güncellenir. Böylece minimum bulunur.

#### 5. `ortalamaBul()` ne yapıyor?
Önce tüm sayılar `toplam` değişkeninde biriktirilir. Sonra:

```c
return (float)toplam / n;
```

satırıyla tamsayı bölmesi tuzağı kırılır. Buradaki `(float)` dönüşümü olmasa, örneğin `7 / 2` sonucu `3` olurdu. Ama dönüşüm sayesinde sonuç `3.50` gibi ondalıklı elde edilir.

#### 6. `main()` bölümünün akışı
`main()` önce kullanıcıdan kaç sayı alınacağını sorar. Ardından bu sayı 1 ile 100 arasında mı diye kontrol eder. Bu kontrol çok önemlidir; aksi halde geçersiz girişler dizi sınır sorununa yol açabilir.

Sonra sırasıyla:
- dizi doldurulur,
- maksimum yazdırılır,
- minimum yazdırılır,
- ortalama yazdırılır.

Buradaki güzellik şu: `main()` her şeyi kendi yapmıyor, sadece süreci yönetiyor.

#### 7. Programın genel mantığı
Bu program öğrenciye şu üç şeyi aynı anda öğretir:
- diziyle çalışma,
- fonksiyonlara bölme,
- hesaplamaları modüler kurma.

Yani bu sadece “maksimum bulma” sorusu değil; küçük ölçekli ama düzgün tasarlanmış bir C programı örneğidir.

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

### Kodun Adım Adım Açıklaması

Bu çözümde asıl fikir, tek bir fonksiyonun dışarıya **iki farklı sonuç** göndermesidir. C dilinde bir fonksiyon yalnızca tek bir değer döndürebildiği için burada pointer kullanımı devreye girer.

#### 1. Fonksiyon prototipi neden böyle?

```c
void tekCiftToplam(int dizi[], int n, int *tekToplam, int *ciftToplam)
```

Burada ilk iki parametre tanıdık:
- `dizi[]` → işlenecek sayılar
- `n` → eleman sayısı

Son iki parametre ise sonuçları dışarı taşımak içindir:
- `*tekToplam` → tek sayıların toplamı yazılacak adres
- `*ciftToplam` → çift sayıların toplamı yazılacak adres

Yani fonksiyon yalnızca veri okumuyor; dışarıdaki değişkenleri de güncelliyor.

#### 2. Neden önce sıfırlama yapıldı?

```c
*tekToplam = 0;
*ciftToplam = 0;
```

Bu satırlar olmasa eski çöp değerler toplamın içine karışabilir. Program önce temiz bir başlangıç zemini kuruyor.

#### 3. Dizide gezinme mantığı
Döngü tüm elemanları sırayla geziyor. Her eleman için şu kontrol yapılıyor:

```c
if (dizi[i] % 2 == 0)
```

Bir sayı 2’ye tam bölünüyorsa çifttir. Çiftse çift toplamına, değilse tek toplamına eklenir.

#### 4. Pointer üzerinden toplama nasıl oluyor?

```c
*ciftToplam += dizi[i];
*tekToplam += dizi[i];
```

Burada `ciftToplam` ve `tekToplam` değişkenin kendisi değil, **adresidir**. Başındaki `*` işareti ise “o adresteki gerçek değeri kullan” demektir. Yani fonksiyon dışarıdaki değişkenleri doğrudan değiştirir.

#### 5. `main()` kısmı ne yapıyor?
Önce dizi doldurulur. Sonra iki ayrı değişken tanımlanır:
- `tekToplam`
- `ciftToplam`

Fonksiyon çağrılırken bu değişkenlerin kendileri değil, adresleri gönderilir:

```c
tekCiftToplam(dizi, n, &tekToplam, &ciftToplam);
```

`&` işareti “adresini ver” demektir. İşte pointer mantığının kırıldığı yer tam olarak burasıdır.

#### 6. Program neden öğretici?
Çünkü öğrenci burada şu çok önemli gerçeği kavrar:

> Eğer bir fonksiyon dışarıdaki birden fazla sonucu değiştirecekse, adresle çalışmak çoğu zaman en doğru yoldur.

Bu yüzden bu soru, pointer konusunun temel taşlarından biridir.

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

### Kodun Adım Adım Açıklaması

Bu sorunun sinsi tarafı şudur: tekrar eden sayıyı bulmak kolaydır, ama onu **yalnızca bir kez** yazdırmak biraz daha dikkat ister. Kod bu problemi iki aşamada çözüyor.

#### 1. `dahaOnceVarMi()` fonksiyonu ne işe yarıyor?
Bu yardımcı fonksiyon, dizinin başından `son` indeksine kadar gidip verilen değerin daha önce görülüp görülmediğini kontrol eder.

Yani şu soruyu sorar:

> “Bu sayıyı ben daha önce zaten işledim mi?”

Eğer evetse `1`, değilse `0` döndürür.

Bu sayede aynı tekrar eden değer ikinci kez yazdırılmaz.

#### 2. `main()` içinde veri girişi
Program önce kullanıcıdan eleman sayısını alır, sonra diziye sırayla değerleri yerleştirir. Bu kısım klasik ama gereklidir; çünkü analiz yapabilmek için veri tabanı gibi davranan bir diziye ihtiyacımız var.

#### 3. Asıl tarama mantığı
Dış döngü her elemanı sırayla ele alır:

```c
for (i = 0; i < n; i++)
```

Ama hemen yazdırmaz. Önce şu kontrol gelir:

```c
if (!dahaOnceVarMi(dizi, i, dizi[i]))
```

Bu ne demek?

- Eğer bu değer daha önce incelenmemişse devam et
- incelendiyse atla

Bu adım, aynı değeri tekrar tekrar yazdırmayı engeller.

#### 4. İç döngü ne yapıyor?
İç döngü, `dizi[i]` değerinin sonraki elemanlarda tekrar geçip geçmediğini arar.

```c
for (j = i + 1; j < n; j++)
```

Eğer eşit bir değer bulunursa bu sayı tekrar ediyor demektir. O anda sayı ekrana yazdırılır ve `bulundu = 1` yapılır.

#### 5. `break` burada neden mantıklı?
Bir eşleşme bulunduğu anda aynı sayının tekrar ettiğini anlamış oluyoruz. Daha fazlasını aramaya gerek yok. Bu yüzden iç döngü kırılır.

#### 6. Hiç tekrar yoksa ne olur?
`bulundu` değişkeni başlangıçta `0`’dır. Eğer hiç tekrar eden eleman çıkmazsa program sonunda:

```c
Tekrar eden eleman yok.
```

mesajını verir.

#### 7. Kavramsal kazanç
Bu program öğrenciye yalnızca karşılaştırma yaptırmaz. Aynı zamanda veri analizinde şu ayrımı da öğretir:
- **tekrar eden elemanı bulmak**
- **aynı sonucu birden fazla kez raporlamamak**

İşte sorunun gerçek matematiği burada yatıyor.

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

### Kodun Adım Adım Açıklaması

Bu programın güzelliği şurada: ikinci bir dizi kullanmadan, yani ek bellek ayırmadan diziyi ters çeviriyor. Buna **in-place reversal** denir.

#### 1. `tersCevir()` fonksiyonu neden ayrı?
Çünkü ters çevirme işlemi bağımsız bir görevdir. `main()` içinde gömülü yapılabilirdi ama bu durumda kodun okunabilirliği düşerdi. Ayrı fonksiyon daha temiz ve öğreticidir.

#### 2. Döngü neden `n / 2` kadar dönüyor?
Dizi ters çevrilirken her değişimde iki eleman aynı anda yer değiştirir:
- baştaki
- sondaki

Bu yüzden dizinin tamamını gezmeye gerek yoktur. Yarısına kadar gitmek yeterlidir.

Örneğin 6 elemanlı dizide:
- 0 ↔ 5
- 1 ↔ 4
- 2 ↔ 3

Sonra işlem tamamlanır.

#### 3. Geçici değişken neden şart?

```c
gecici = dizi[i];
dizi[i] = dizi[n - 1 - i];
dizi[n - 1 - i] = gecici;
```

Eğer geçici değişken kullanılmazsa ilk değer ezilir ve kaybolur. Bu, klasik swap mantığıdır.

#### 4. `n - 1 - i` neyi temsil ediyor?
Bu ifade sondan gelen indeksi hesaplar.

Örnek: `n = 5`
- `i = 0` → `4`
- `i = 1` → `3`

Yani soldan ilerlerken aynı anda sağdan eşlenik eleman bulunur.

#### 5. `main()` kısmı ne yapıyor?
Önce kullanıcıdan dizi alınır. Sonra `tersCevir()` çağrılır. Ardından yeni sıra ekrana yazdırılır. Burada yazdırma işlemi sonuca görsel güven kazandırır.

#### 6. Programın öğretici özü
Bu soru öğrenciye indekslerle düşünmeyi öğretir. Dizi işlemlerinin büyük kısmı zaten bu disipline dayanır. İndeks kontrolü net değilse, ters çevirme gibi sorular hemen dağılır.

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

### Kodun Adım Adım Açıklaması

`swap` sorusu küçük görünür ama pointer mantığını anlamak için altın değerindedir. Çünkü burada fonksiyonun dışındaki iki değişkenin gerçek değerleri değiştirilmektedir.

#### 1. Fonksiyonun parametreleri neden `int *a, int *b`?
Çünkü `a` ve `b` doğrudan sayı değil, sayıların adresleridir. Eğer fonksiyon yalnızca `int a, int b` alsaydı kopyalar üzerinde çalışırdı ve dışarıdaki değişkenler değişmezdi.

#### 2. Takas işlemi nasıl gerçekleşiyor?

```c
int gecici = *a;
*a = *b;
*b = gecici;
```

Burada:
- `*a` → birinci adresteki gerçek değer
- `*b` → ikinci adresteki gerçek değer

Önce birinci değer `gecici` değişkende saklanır. Sonra birinci yere ikinci değer yazılır. Son olarak ikinci yere saklanan eski birinci değer konur.

#### 3. `main()` tarafında neden `&x` ve `&y` gönderildi?

```c
swap(&x, &y);
```

Çünkü fonksiyon adres istiyor. `&x`, `x` değişkeninin bellekteki adresidir. Aynı mantık `y` için de geçerlidir.

#### 4. Öğrencilerin sık karıştırdığı nokta
Adresleri değil, değerleri yer değiştiriyoruz. Yani `x` ve `y` farklı yerlerde durmaya devam eder; sadece içlerindeki sayılar değişir.

#### 5. Programın kavramsal değeri
Bu küçük örnek, pointer konusundaki şu dev kapıyı açar:

> “Fonksiyon dışarıdaki veriyi gerçekten değiştirecekse, çoğu zaman adresle çalışmalıyım.”

Swap sorusu basit değil; pointer düşüncesinin en berrak örneklerinden biridir.

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

### Kodun Adım Adım Açıklaması

Bu sorunun olayı `[]` kullanmadan dizi üzerinde işlem yapmaktır. Yani öğrenci, dizinin aslında bellekte yan yana duran elemanlar olduğunu pointer ile hissetmelidir.

#### 1. `toplamBul(int *ptr, int n)` ne demek?
Buradaki `ptr`, dizinin ilk elemanını gösterir. C’de bir dizi fonksiyona gönderildiğinde aslında ilk elemanın adresi taşınır. Yani bu fonksiyon diziyle dolaylı biçimde çalışır.

#### 2. Toplama nasıl erişiyoruz?

```c
toplam += *(ptr + i);
```

Bu ifade çok önemlidir. Çünkü:

- `ptr + i` → i. elemana kadar ilerle
- `*(ptr + i)` → o konumdaki gerçek değeri al

Bu, `dizi[i]` ile aynı anlama gelir. Yani soru öğrenciye işaretçi aritmetiğinin dizi indekslemeyle eşdeğer olduğunu gösterir.

#### 3. Döngü neden normal çalışıyor?
Pointer kullanılıyor diye döngü mantığı değişmez. Yine `0`’dan `n-1`’e kadar gideriz. Değişen tek şey elemanlara erişme biçimidir.

#### 4. `main()` ne yapıyor?
Kullanıcıdan sayıları alır, sonra `toplamBul(dizi, n)` çağrısı yapar. Burada `dizi` adı zaten ilk elemanın adresi gibi davranır.

#### 5. Öğretici tarafı
Bu program öğrenciye şunu net gösterir:

> Dizi indeksleri ile pointer aritmetiği birbirinden kopuk iki dünya değildir; aynı yapının iki farklı gösterimidir.

Bu fark bir kez oturunca pointer soruları çok daha az korkutucu olur.

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

### Kodun Adım Adım Açıklaması

Bu çözümün en güçlü yanı, yalnızca en büyük değeri bulmakla kalmayıp onun **adresini** döndürmesidir. Böylece pointer kullanımı göstermelik olmaktan çıkar, gerçekten anlamlı hâle gelir.

#### 1. Başlangıçta neden ilk elemanın adresi alınıyor?

```c
int *maksAdres = &dizi[0];
```

Program başlangıçta en büyük elemanın ilk eleman olduğunu varsayar. Bu mantıklıdır; çünkü karşılaştırma için bir referans noktası gerekir.

#### 2. Döngü ne yapıyor?

```c
if (dizi[i] > *maksAdres)
    maksAdres = &dizi[i];
```

Burada `*maksAdres`, o ana kadar bulunan en büyük değerdir. Eğer yeni eleman ondan büyükse, artık yeni maksimumun adresi saklanır.

Yani program yalnızca değeri değil, değerin bellekteki konumunu da takip eder.

#### 3. Fonksiyon neden `int *` döndürüyor?
Çünkü sonuç sayı değil, sayıdaki adres bilgisidir. Sonra `main()` içinde bu adres iki şekilde kullanılabilir:
- `*adres` ile değeri okumak
- `%p` ile adresi göstermek

#### 4. `main()` kısmında ne oluyor?
Önce dizi dolduruluyor. Sonra:

```c
adres = maksAdresBul(dizi, n);
```

ile en büyük elemanın adresi alınıyor. Ardından hem sayı hem adres ekrana yazdırılıyor. Bu, fonksiyonun gerçekten adres döndürdüğünü çok net hissettiriyor.

#### 5. Programın düşünsel kazancı
Bu soru öğrenciye şu fikri yerleştirir:

> Bazen önemli olan sadece veri değil, verinin bellekte nerede durduğudur.

Pointer konusunun derinliği tam burada başlar.

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

### Kodun Adım Adım Açıklaması

Bu program statik diziden dinamik diziye geçişin en temiz örneklerinden biridir. Yani dizi boyutu artık derleme anında değil, çalışma anında belirleniyor.

#### 1. Neden önce `n` alınıyor?
Çünkü kaç eleman için bellek ayrılacağını bilmeden `malloc` yapılamaz. Boyut kullanıcı tarafından belirlendiği için program esnek hâle gelir.

#### 2. Negatif ya da sıfır kontrolü neden var?

```c
if (n <= 0)
```

Çünkü 0 ya da negatif uzunlukta anlamlı dizi kurulamaz. Bu tür kontroller programın güvenliğini artırır.

#### 3. `malloc` satırı ne yapıyor?

```c
dizi = (int *)malloc(n * sizeof(int));
```

Bu satır, bellekte `n` adet `int` için yer ister. `sizeof(int)` ile doğru byte miktarı hesaplanır. Böylece program farklı sistemlerde de mantıklı çalışır.

#### 4. `NULL` kontrolü neden çok önemli?
Eğer sistem istenen belleği ayıramazsa `malloc` başarısız olur ve `NULL` döner. Bu kontrol yapılmazsa program geçersiz bellek erişimine gidebilir.

#### 5. Veri alma ve toplama aynı anda yapılmış
Döngü her sayıyı alırken hemen toplama ekliyor. Bu verimlidir çünkü ikinci kez dolaşmak gerekmiyor.

#### 6. Ortalama nasıl hesaplanıyor?
Yine tamsayı bölmesi tuzağını önlemek için:

```c
ortalama = (float)toplam / n;
```

kullanılmış.

#### 7. `free(dizi);` neden finalde çok kritik?
Çünkü `malloc` ile alınan bellek, iş bitince sisteme geri verilmelidir. Eğer verilmezse bellek sızıntısı oluşur. Bu küçük programda çok yıkıcı görünmeyebilir ama büyük yazılımlarda ciddi sorun olur.

#### 8. Programın kavramsal önemi
Bu soru öğrencinin belleği yalnızca kullanmayı değil, **yönetmeyi** öğrendiği yerdir.

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

### Kodun Adım Adım Açıklaması

Bu soru string sorusu gibi görünse de aslında karakter sınıflandırma sorusudur. Program, metni tek parça olarak alır ve sonra karakter karakter analiz eder.

#### 1. Neden `fgets()` kullanıldı?

```c
fgets(metin, sizeof(metin), stdin);
```

Çünkü kullanıcıdan cümle alıyoruz. `scanf("%s")` kullanılsaydı ilk boşlukta durur ve tam cümleyi alamazdık. `fgets()` bu soruda doğru araçtır.

#### 2. Sayaçlar neyi temsil ediyor?
- `harf` → alfabetik karakter sayısı
- `rakam` → sayısal karakter sayısı
- `bosluk` → boşluk ve benzeri beyaz karakter sayısı

Bu ayrım analiz mantığını çok net kılar.

#### 3. `while (metin[i] != ' ')` neden kullanıldı?
Çünkü string’in gerçek sonu ` ` karakteridir. Döngü, bu işaret görülene kadar tüm karakterleri işler.

#### 4. `ctype.h` fonksiyonları neden çok temiz bir çözüm?
- `isalpha()` → harf mi?
- `isdigit()` → rakam mı?
- `isspace()` → boşluk/boşluk benzeri karakter mi?

Bu fonksiyonlar ASCII karşılaştırmalarından daha okunur ve daha güvenlidir.

#### 5. Program nasıl karar veriyor?
Her karakter için sırasıyla kontrol yapılıyor. Harfse harf sayacı, rakamsa rakam sayacı, boşluksa boşluk sayacı artıyor. Böylece tek geçişte üç farklı istatistik çıkarılmış oluyor.

#### 6. Öğretici yönü
Bu program öğrenciye şu farkı hissettirir:

> String yalnızca “bir yazı” değildir; karakter karakter işlenebilen bir veri yapısıdır.

Bu fark oturunca string soruları çok daha anlaşılır olur.

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

### Kodun Adım Adım Açıklaması

Palindrom kontrolü, iki uçtan merkeze doğru ilerleyen çok zarif bir mantık içerir. Program tam olarak bu sezgiyi koda dönüştürüyor.

#### 1. `strlen(kelime) - 1` neden sağ indeks?
Çünkü string’de son gerçek karakter, ` `’dan bir önceki konumdadır. Bu yüzden sağ taraftan başlanacak indeks son harfi göstermelidir.

#### 2. `sol` ve `sag` ne yapıyor?
- `sol` soldan ilerler
- `sag` sağdan geriler

Her turda iki uçtaki karakter karşılaştırılır.

#### 3. Kritik kontrol

```c
if (kelime[sol] != kelime[sag])
    return 0;
```

Bir eşitsizlik görüldüğü anda artık palindrom olma ihtimali biter. Program doğrudan `0` döndürür.

#### 4. Neden merkeze doğru ilerliyoruz?
Çünkü palindrom olmanın şartı, dıştan içe tüm eş karakterlerin uyuşmasıdır. Bir kez uyuşmazlık çıkarsa daha ileriye bakmanın anlamı yoktur.

#### 5. `main()` tarafı nasıl çalışıyor?
Kullanıcıdan tek kelime alınır. Ardından `palindromMu()` çağrılır. Gelen sonuca göre program ya `Palindromdur.` ya da `Palindrom degildir.` mesajını verir.

#### 6. Pedagojik kazanç
Bu soru yalnızca string karşılaştırması öğretmez. Aynı zamanda iki yönlü tarama mantığını da öğretir. Bu mantık, ileride arama ve kontrol problemlerinde de çok iş görür.

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

### Kodun Adım Adım Açıklaması

Bu çözüm, `strlen()` fonksiyonunun perde arkasını açar. Öğrenci burada string’in gerçek uzunluğunun kapasiteyle değil, ` ` ile ilişkili olduğunu doğrudan görür.

#### 1. Fonksiyon neden pointer alıyor?

```c
int benimStrlen(char *ptr)
```

Çünkü string’in başına işaret eden bir adres veriyoruz. Sonra pointer’ı karakter karakter ilerleterek uzunluğu hesaplıyoruz.

#### 2. Döngü mantığı

```c
while (*ptr != ' ')
```

Bu satır şöyle okunur:

> “Pointer’ın gösterdiği karakter null terminator değilse devam et.”

Her turda:
- uzunluk 1 artar
- pointer bir karakter ilerler

#### 3. Neden bu kadar sade?
Çünkü `strlen()` aslında temel olarak bundan ibarettir. Karmaşık görünen string işlemlerinin çoğu, bu kadar basit bir dolaşma mantığından doğar.

#### 4. `main()` içinde neden `fgets()` kullanıldı?
Çünkü kullanıcı boşluk içeren metin de girebilir. Böylece yalnızca tek kelime değil, daha geniş girişler de desteklenmiş olur.

#### 5. İnce nokta
`fgets()` ile alınan metinde çoğu zaman satır sonu karakteri de bulunabilir. Bu durumda uzunluk hesabına o da dâhil olabilir. Bu, öğrencinin fark etmesi gereken güzel bir detaydır.

#### 6. Asıl kavram
Bu soru öğrencinin şunu anlamasını sağlar:

> String’in boyu, bellekte ayrılan alan değildir; ` ` gelene kadar geçen gerçek karakter sayısıdır.

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

### Kodun Adım Adım Açıklaması

Bu program string içinde hedef bir karakterin kaç kez geçtiğini sayıyor. Yüzeyde basit görünür ama string dolaşma disiplinini oturtmak için çok faydalıdır.

#### 1. `karakterSay()` fonksiyonunun görevi
Fonksiyon yalnızca iki şey alır:
- metin
- aranacak karakter

Ve yalnızca tek şey üretir:
- tekrar sayısı

Bu, fonksiyon tasarımı açısından çok temizdir.

#### 2. Döngü nasıl çalışıyor?

```c
while (metin[i] != ' ')
```

String sonuna kadar bütün karakterler gezilir. Her turda mevcut karakter hedefle karşılaştırılır.

#### 3. Eşleşme olursa ne olur?

```c
if (metin[i] == hedef)
    sayac++;
```

Bu kadar net. Her eşleşme bir artış demektir.

#### 4. `main()` kısmında neden önce cümle, sonra karakter alınıyor?
Çünkü analiz edilecek veri önce metindir. Ardından o metin üzerinde hangi karakterin aranacağı belirlenir.

`scanf(" %c", &hedef);` ifadesindeki boşluk önemlidir; giriş tamponunda kalmış boşluk ya da satır sonu karakterlerini atlamaya yardımcı olur.

#### 5. Öğretici değeri
Bu soru küçük ama çok değerlidir. Çünkü string üzerinde doğrusal tarama yapmayı, koşullu sayma mantığını ve karakter karşılaştırmasını aynı anda oturtur.

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

### Kodun Adım Adım Açıklaması

Bu kod `strcat()` fonksiyonunun özünü elle kuruyor. Yani bir string’in sonuna, ikinci bir string’i karakter karakter ekliyoruz.

#### 1. Neden iki sayaç var?
- `i` → hedef string içinde dolaşır
- `j` → kaynak string içinde dolaşır

Bu ayrım, iki ayrı dizide aynı anda çalışabilmek için gereklidir.

#### 2. İlk döngü ne yapıyor?

```c
while (hedef[i] != ' ')
    i++;
```

Bu döngü, hedef string’in sonunu bulur. Yani ekleme işleminin başlayacağı noktayı belirler.

#### 3. İkinci döngü ne yapıyor?
Kaynak string’in karakterleri tek tek hedefin sonuna kopyalanır:

```c
hedef[i] = kaynak[j];
```

Her kopyalamadan sonra hem hedef hem kaynak indeksi ilerletilir.

#### 4. Son ` ` neden şart?

```c
hedef[i] = ' ';
```

Bu satır unutulursa yeni oluşan metin düzgün sonlanmaz ve string bozulur. String işlemlerinde bu satır hayati önemdedir.

#### 5. `main()` içinde neden satır sonu temizleniyor?
`fgets()` ile alınan metinlerin sonunda çoğu zaman `
` bulunur. Bunlar temizlenmezse birleştirme sonucu beklenmedik satır kaymaları oluşabilir.

#### 6. Programın öğretici özü
Bu soru öğrenciye şunu gösterir:

> String birleştirme, hazır fonksiyon çağırmaktan ibaret değildir; aslında bir dizinin sonuna diğer dizinin karakterlerini taşımaktır.

Bu kavrayış, string işlemlerini çok daha somut hâle getirir.

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

### Kodun Adım Adım Açıklaması

Bu program, `struct` kavramının neden gerekli olduğunu çok net gösteriyor: farklı tipte verileri tek bir öğrenci kaydı altında topluyoruz.

#### 1. `struct Ogrenci` ne sağlıyor?
Bir öğrenciyi oluşturan üç farklı alanı tek pakette tutuyor:
- numara
- ad
- ortalama

Bu sayede üç ayrı paralel diziyle uğraşmak zorunda kalmıyoruz.

#### 2. Neden `ogr[OGR_SAYI]` tanımlandı?
Çünkü tek öğrenci değil, 5 öğrenci tutulacak. Bu da bir **yapı dizisi** gerektiği anlamına gelir.

#### 3. Veri girişi nasıl işliyor?
Döngü her öğrenci için sırayla:
- numarayı alır
- adı alır
- ortalamayı alır

`scanf(" %29[^
]", ogr[i].ad);` kullanımı, boşluk içeren isimleri de okuyabildiği için önemlidir.

#### 4. Tablo biçiminde yazdırma neden iyi bir tercih?
Çünkü struct içindeki veriler düzenli biçimde görülür. Öğrenci, bellekte dağınık duran verilerin mantıksal olarak nasıl bir kayıt oluşturduğunu gözle de fark eder.

#### 5. Programın kavramsal katkısı
Bu soru öğrenciye şu fikri yerleştirir:

> Aynı varlığa ait farklı türden bilgileri tek bir çatı altında toplamak için `struct` kullanırız.

Bu, veri modelleme düşüncesinin ilk adımlarından biridir.

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

### Kodun Adım Adım Açıklaması

Bu çözüm, struct dizisi üzerinde arama ve karşılaştırma yapmayı öğretiyor. Burada artık yalnızca sayılar değil, öğrencilerin bütün kayıtlarıyla çalışıyoruz.

#### 1. Neden iki ayrı fonksiyon var?
- `enYuksekIndex()`
- `enDusukIndex()`

Çünkü soru iki ayrı görevi istiyor. Birini diğerine karıştırmadan çözmek kodu daha okunur ve bakımı daha kolay hâle getirir.

#### 2. Fonksiyonlar neden indeks döndürüyor?
Bu çok akıllıca. Çünkü yalnızca ortalama değeri değil, o ortalamaya sahip öğrencinin tüm kaydını kullanmak istiyoruz. İndeks döndürülünce `no`, `ad` ve `ortalama` bilgilerine birlikte erişebiliyoruz.

#### 3. Karşılaştırma mantığı
Başlangıçta ilk öğrenci referans alınır. Sonra dizi dolaşılır:
- daha yüksek ortalama varsa `index` güncellenir
- daha düşük ortalama varsa diğer fonksiyonda yine `index` güncellenir

Bu tam olarak maksimum/minimum mantığının struct dünyasına taşınmış hâlidir.

#### 4. `main()` içinde akış
Önce 10 öğrencinin bilgisi alınır. Sonra her iki fonksiyon çağrılır. Elde edilen indeksler sayesinde ilgili öğrencilerin tüm bilgileri ekrana yazdırılır.

#### 5. Öğretici tarafı
Bu soru öğrenciye şu geçişi yaptırır:

> “Tek bir sayıyı aramaktan, kayıtlar arasında karşılaştırma yapmaya.”

Yani algoritma mantığı aynı kalır, ama veri yapısı zenginleşir.

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

### Kodun Adım Adım Açıklaması

Bu programın özü filtrelemedir. Yani elimizdeki tüm kayıtları alıyoruz, sonra belirli bir koşulu sağlayanları seçiyoruz.

#### 1. `struct Personel` neden gerekli?
Çünkü her personel için:
- numara
- ad soyad
- maaş

bilgileri birlikte tutulmalıdır. Bu veriler tek bir mantıksal kaydı temsil eder.

#### 2. Veri alma aşaması
Döngü tüm personelleri sırayla alır. Böylece elimizde taranabilir bir personel listesi oluşur.

#### 3. Filtreleme kısmı nasıl çalışıyor?

```c
if (p[i].maas > 5000)
```

Soru burada çok nettir: yalnızca 5000’den büyük maaşlar listelenecektir. Eşit olanlar dahil değildir. Bu küçük detay, koşul sorularında puan farkı yaratır.

#### 4. Neden tüm kayıtlar değil, sadece eşleşenler yazdırılıyor?
Çünkü programın amacı veri depolamak değil; veriden anlamlı seçim yapmaktır. Filtreleme sorularının özü budur.

#### 5. Programın pedagojik değeri
Bu çözüm struct dizileri üzerinde koşullu tarama mantığını yerleştirir. Bu beceri, çok daha büyük veri işleme problemlerinin temelidir.

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

### Kodun Adım Adım Açıklaması

Bu çözüm, struct dizileriyle yalnızca veri saklamayı değil, veri üzerinde işlem yapmayı da öğretiyor. Üç ayrı görev üç ayrı fonksiyonla çözülmüş.

#### 1. `urunEkle()` fonksiyonu
Bu fonksiyon bütün ürün bilgilerini kullanıcıdan alıp diziye yerleştirir. Kodun veri girişinden sorumlu bölümü burasıdır.

#### 2. `urunleriListele()` fonksiyonu
Burada amaç, kayıtları okunur bir tablo halinde göstermektir. Bu hem kullanıcı deneyimi açısından hem de verinin doğru tutulduğunu görmek açısından önemlidir.

#### 3. `envanterDegeri()` fonksiyonu neyi hesaplıyor?
Her ürün için:

```text
stok × fiyat
```

hesaplanır ve bunların hepsi toplanır. Böylece depodaki toplam parasal değer bulunur.

#### 4. Neden bu soru öğretici?
Çünkü öğrenciyi salt veri girişinden çıkarıp, veriden **iş değeri olan bir sonuç üretmeye** zorlar. İşte bu sonuç toplam envanter değeridir.

#### 5. `main()` akışı
- ürünler eklenir
- listelenir
- toplam değer hesaplanır

Bu akış, fonksiyonların birbirine nasıl uyumla bağlandığını gösterir.

#### 6. Programın temel mesajı
Struct yalnızca veri toplamak için değil, o veriyi anlamlı iş süreçlerine bağlamak için de kullanılır.

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

### Kodun Adım Adım Açıklaması

Bu program ardışık erişimli metin dosyasının klasik mantığını gösterir: veri dosyaya sırayla yazılır, sonra yine sırayla okunur.

#### 1. `fopen("sayilar.txt", "w")` ne yapıyor?
Dosyayı yazma modunda açar. Eğer yoksa oluşturur, varsa içeriğini temizleyip yeniden başlar. Bu yüzden dikkatli kullanılmalıdır.

#### 2. Yazma aşaması
Döngü 20 kez çalışır. Her seferinde kullanıcıdan alınan sayı:

```c
fprintf(dosya, "%d
", sayi);
```

ile metin olarak dosyaya yazılır. Her sayı yeni satıra konur. Bu, sonradan okumayı kolaylaştırır.

#### 3. Neden dosya kapatılıp tekrar açılıyor?
Çünkü yazma işlemi bittikten sonra en temiz ve güvenli yaklaşım budur. Böylece dosya içeriği tam olarak diske yazılmış olur ve okuma için imleç baştan başlar.

#### 4. Okuma aşaması nasıl işliyor?
Bu kez dosya `r` modunda açılır. Sonra `fscanf()` ile her sayı çekilir ve `toplam` değişkenine eklenir.

#### 5. Ortalama hesabı
Toplam 20 sayıya bölünür. Yine `(float)` dönüşümüyle ondalıklı sonuç korunur.

#### 6. Öğrenci ne öğreniyor?
Bu soru dosya işlemlerinin en temel akışını çok net gösterir:
- aç
- yaz
- kapat
- tekrar aç
- oku
- işle
- kapat

Dosya mantığının iskeleti budur.

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

### Kodun Adım Adım Açıklaması

Bu çözüm, metin dosyasından binary dosyaya geçişi gösteriyor. Burada veriler satır satır yazılmıyor; doğrudan struct kayıtları halinde saklanıyor.

#### 1. `struct Ogrenci` neden burada daha da önemli?
Çünkü artık dosyaya tek tek alan yazmak yerine bütün kaydı bir kerede yazabiliyoruz.

#### 2. Veri girişi aşaması
Önce `ogr[N]` dizisi doldurulur. Yani bellekte hazır bir kayıt kümesi oluşturulur.

#### 3. `fwrite(ogr, sizeof(struct Ogrenci), N, dosya)` ne yapıyor?
Bu satır çok güçlüdür. `ogr` dizisinin içindeki `N` adet öğrenci kaydını, her biri `sizeof(struct Ogrenci)` boyutunda olacak şekilde dosyaya binary olarak yazar.

Yani program satır üretmiyor; doğrudan ham kayıt saklıyor.

#### 4. Okuma tarafı nasıl çalışıyor?

```c
while (fread(&okunan, sizeof(struct Ogrenci), 1, dosya) == 1)
```

Bu döngü her turda bir öğrenci kaydı okur. Başarıyla okuyabildiği sürece devam eder. Her kayıt okununca alanları ekrana basılır.

#### 5. Binary dosyanın avantajı ne?
- struct ile uyumlu çalışma
- daha hızlı kayıt okuma/yazma
- metin ayrıştırma derdinin azalması

Ama insan gözüyle açıldığında okunabilirliği düşüktür. Çünkü dosya program için düzenlenmiştir.

#### 6. Programın öğretici özü
Bu soru öğrenciye şunu öğretir:

> Metin dosyasında veri insanlar için görünürdür; binary dosyada veri program için düzenlidir.

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

### Kodun Adım Adım Açıklaması

Bu program final düzeyinde ağır bir sorudur çünkü dosya, struct, menü ve kayıt mantığını aynı anda birleştirir. Rastgele erişimin gerçek gücü burada görünür.

#### 1. `struct Urun` neden sabit boyutlu tasarlandı?
Alanlar sabit olduğu için her kayıt dosyada aynı kadar yer kaplar. Bu, belirli bir kaydın dosyada kaçıncı byte’ta başladığını hesaplamayı mümkün kılar.

#### 2. `dosyaBaslat()` fonksiyonu ne yapıyor?
Dosya ilk oluşturulduğunda içine 100 adet boş kayıt yazar. Böylece dosyada her kayıt için baştan alan ayrılmış olur.

Boş kaydın `kayitNo = 0` olması çok akıllıcadır; bu, o alanın kullanılmadığını anlamamızı sağlar.

#### 3. `kayitEkle()` mantığı
Önce kullanıcı bir kayıt numarası girer. Sonra şu formülle ilgili noktaya gidilir:

```c
(no - 1) * sizeof(struct Urun)
```

Bu formül sorunun kalbidir. Program bu ofsetle `fseek()` yapar, oradaki kaydı `fread()` ile kontrol eder. Eğer boşsa yeni verileri alır ve aynı yere `fwrite()` ile yazar.

#### 4. `kayitGuncelle()` neden önce okuyor?
Çünkü güncellemeden önce o kayıt gerçekten var mı görmek gerekir. Kayıt boşsa kullanıcıya haber verilir. Doluysa yeni bilgiler alınıp aynı konuma geri yazılır.

#### 5. `kayitSil()` nasıl çalışıyor?
Fiziksel dosya küçültülmez. Bunun yerine ilgili kaydın üstüne boş bir kayıt yazılır. Bu, sabit boyutlu kayıt sistemlerinde çok yaygın ve doğru bir tekniktir.

#### 6. `listele()` neden baştan sona okuyor?
Rastgele erişim var diye her şey tek kayıt üzerinden yapılmaz. Tüm aktif kayıtları göstermek istediğimizde doğal olarak bütün dosyayı dolaşırız. Burada `rewind()` ile başa dönülür ve tüm kayıtlar taranır.

#### 7. `main()` kısmının rolü
`main()` dosyayı açar, gerekirse oluşturur, sonra kullanıcıya menü sunar. Seçime göre ilgili fonksiyonları çağırır. Yani asıl işlevleri kendisi yapmaz; sistemi orkestre eder.

#### 8. Bu programın asıl dersi
Bu çözüm öğrenciye yalnızca dosya açmayı öğretmez. Şunu öğretir:

> Veri dosyada gelişigüzel değil, kayıt mantığıyla ve hesaplanabilir konumlarla tutulursa doğrudan erişim mümkün olur.

Rastgele erişim denen şey tam olarak budur.

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

### Kodun Adım Adım Açıklaması

Bu bonus çözüm küçük çaplı bir yazılım tasarımı örneğidir. Artık tek bir algoritma değil, bir sistem kuruluyor.

#### 1. Veri modeli nasıl kurulmuş?
`struct Kitap` içinde:
- kitap numarası
- kitap adı
- yazar
- stok miktarı

bir araya getirilmiş. Yani her kitap tek kayıt olarak düşünülmüş.

#### 2. `kitapEkle()` fonksiyonu
Yeni bir kitap eklerken önce kapasite kontrolü yapılır. Bu çok önemlidir; çünkü dizi taşmasını önler. Sonra bilgiler son boş konuma yazılır ve `adet` bir artırılır.

#### 3. `kitapListele()` ne yapıyor?
Mevcut kitapları düzenli biçimde ekrana basar. Bu, veri doğrulama açısından da çok yararlıdır.

#### 4. `kitapGuncelle()` nasıl çalışıyor?
Kullanıcıdan kitap numarası alınır. Dizi taranır. Numara eşleşirse o kaydın alanları yeni bilgilerle değiştirilir. Bu, kayıt bazlı güncellemenin temel mantığıdır.

#### 5. `kitapSil()` neden kaydırma yapıyor?
Bu çözüm dosyada sabit kayıt yerine bellekte dizi mantığı kullandığı için silinen elemandan sonraki bütün kayıtlar bir sola kaydırılır. Böylece dizide boş delik bırakılmaz.

#### 6. Dosya fonksiyonları neden önemli?
- `dosyayaYaz()` mevcut kayıtları kalıcı hâle getirir
- `dosyadanOku()` program açıldığında eski kayıtları geri yükler

Burada özellikle önce `adet` değerinin yazılması akıllıcadır; çünkü dosyadan geri okurken kaç kayıt olduğunu bilmek gerekir.

#### 7. Menü döngüsü ne sağlar?
Program tek işlem yapıp kapanmaz. Kullanıcı ekleme, güncelleme, silme ve listeleme işlemlerini tekrar tekrar yapabilir. Bu da programı bir uygulama hissine yaklaştırır.

#### 8. Programın büyük resmi
Bu çözüm şu konuları tek çatı altında birleştirir:
- struct
- dizi
- pointer ile adet güncelleme
- arama
- güncelleme
- silme
- dosyaya kalıcılık
- menü tabanlı akış

Yani bu artık klasik soru çözümü değil, mini otomasyon mantığıdır.

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
