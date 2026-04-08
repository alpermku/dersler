---
layout: post
title: "C'de Struct ve Enum: Veriyi Anlamlı Hale Getirme Sanatı"
date: 2026-04-07 10:00:00 +0300
categories: algoritma-ve-programlama-ii
---

Şimdi bir an için gözlerinizi kapatın ve şunu hayal edin: elinizde bir şirketin tüm çalışan verileri var. Her çalışanın adı, soyadı, sicil numarası, maaşı, departmanı, işe giriş tarihi var. Bunu şimdiye kadar öğrendiklerimizle nasıl tutardınız?

```c
int sicil1 = 1001;
char ad1[30] = "Ahmet";
char soyad1[30] = "Yılmaz";
float maas1 = 15000.0;
int departman1 = 2;

int sicil2 = 1002;
char ad2[30] = "Fatma";
// ... bu böyle sonsuza kadar devam eder
```

100 çalışan için 600 ayrı değişken. Karmaşık, okunaksız, yönetilemez. Bir veri değiştiğinde hangisini güncelleyeceğinizi bilemezsiniz.

İşte tam bu noktada C dili size iki güçlü silah sunar: **`struct`** ve **`enum`**. Bu ikili, ham veriyi **anlamlı, organize ve yönetilebilir** hale getirir. YBS öğrencisi olarak hayatınız boyunca veriyle çalışacaksınız — bu ders, o veriye hükmetmenin başlangıcı.

---

## BÖLÜM 1: STRUCT — Veriyi Bir Arada Tutmak

### Struct Nedir?

**Struct** (yapı), birden fazla ve **farklı tipte** değişkeni tek bir çatı altında toplamamızı sağlayan veri yapısıdır.

Gerçek hayat analojisi şudur: bir personel kartı düşünün. O kartın üzerinde hem isim (metin) hem sicil numarası (sayı) hem de maaş (ondalıklı) bilgisi vardır. Hepsini ayrı ayrı kâğıtlara yazmak yerine tek bir karta yazarsınız. `struct` tam olarak bu: **programlama dünyasındaki personel kartı**.

```
┌─────────────────────────────────────┐
│          PERSONEL KARTI             │
├─────────────────────────────────────┤
│  Sicil No : 1001                    │
│  Ad       : Ahmet                   │
│  Soyad    : Yılmaz                  │
│  Maaş     : 15000.00 TL             │
│  Departman: Muhasebe                │
└─────────────────────────────────────┘
```

### Struct Nasıl Tanımlanır?

```c
struct PersonelKarti {
    int    sicilNo;
    char   ad[30];
    char   soyad[30];
    float  maas;
    char   departman[40];
};
```

**Sözdiziminin anatomisi:**

```
struct   PersonelKarti   {      ...      };
  ↑            ↑          ↑              ↑
anahtar    yapı adı    açılış         kapanış
kelime                 parantezi    + noktalı virgül
```

> **Kritik not:** Kapanış `}` parantezinden sonra gelen **noktalı virgülü** unutmayın. C'de struct tanımı bir ifadedir ve noktalı virgülle biter. Bu en sık yapılan hatalardan biridir.

### Struct Değişkeni Oluşturma

Struct'ı tanımlamak, sadece bir *şablon* oluşturmaktır. Tıpkı boş bir personel kartı tasarımı gibi — henüz içinde veri yok. Veri girmek için bir *değişken* oluşturmalıyız:

```c
struct PersonelKarti calisan1;
struct PersonelKarti calisan2;
```

Artık `calisan1` ve `calisan2`, her biri kendi sicil numarası, adı, maaşı olan ayrı "kartlar"dır.

### Alanlara Erişim: Nokta Operatörü `.`

Bir struct değişkeninin alanlarına **nokta operatörü (`.`)** ile erişilir:

```c
#include <stdio.h>
#include <string.h>

struct PersonelKarti {
    int   sicilNo;
    char  ad[30];
    char  soyad[30];
    float maas;
    char  departman[40];
};

int main() {

    struct PersonelKarti calisan1;

    // Değer atama
    calisan1.sicilNo = 1001;
    strcpy(calisan1.ad, "Ahmet");         // char dizileri için strcpy!
    strcpy(calisan1.soyad, "Yılmaz");
    calisan1.maas = 15000.0;
    strcpy(calisan1.departman, "Muhasebe");

    // Değerleri okuma
    printf("Sicil No  : %d\n",   calisan1.sicilNo);
    printf("Ad Soyad  : %s %s\n", calisan1.ad, calisan1.soyad);
    printf("Maaş      : %.2f TL\n", calisan1.maas);
    printf("Departman : %s\n",   calisan1.departman);

    return 0;
}
```

**Çıktı:**
```
Sicil No  : 1001
Ad Soyad  : Ahmet Yılmaz
Maaş      : 15000.00 TL
Departman : Muhasebe
```

> **Neden `strcpy`?** C'de char dizilerine direkt `=` ile değer atayamazsınız. `calisan1.ad = "Ahmet"` yazmak **derleme hatası** verir. Bunun yerine `<string.h>` kütüphanesinden `strcpy()` fonksiyonunu kullanırsınız.

### Tanımlarken Başlangıç Değeri Vermek

Değerleri tek tek atamak yerine, struct değişkenini tanımlarken de değer verebilirsiniz:

```c
struct PersonelKarti calisan2 = {1002, "Fatma", "Kaya", 18500.0, "İnsan Kaynakları"};
```

Alanlar, struct içindeki **sırayla** eşleştirilir. Bu yöntem kısa ama dikkat ister — bir alan atlarsanız sonrakiler kayar.

---

## `typedef` ile Daha Temiz Sözdizimi

Her seferinde `struct PersonelKarti` yazmak yorucudur. `typedef` ile daha kısa bir isim verebilirsiniz:

```c
typedef struct {
    int   sicilNo;
    char  ad[30];
    char  soyad[30];
    float maas;
    char  departman[40];
} Personel;
```

Artık `struct PersonelKarti` yerine sadece `Personel` yazılır:

```c
Personel calisan1;
Personel calisan2;
```

Bu yöntem profesyonel C kodlarında çok daha yaygındır ve okunabilirliği büyük ölçüde artırır. Bundan sonra örneklerimizde `typedef` kullanacağız.

---

## Struct Dizisi: Tüm Personel Tablosu

Gerçek gücü şimdi görün. Tek bir struct şablonu ve bir dizi ile tüm şirketin personel tablosunu tutabilirsiniz:

```c
#include <stdio.h>
#include <string.h>

typedef struct {
    int   sicilNo;
    char  ad[30];
    char  soyad[30];
    float maas;
} Personel;

int main() {

    // 5 çalışanlık bir personel tablosu
    Personel tablo[5] = {
        {1001, "Ahmet",   "Yılmaz",  15000.0},
        {1002, "Fatma",   "Kaya",    18500.0},
        {1003, "Mehmet",  "Demir",   12000.0},
        {1004, "Zeynep",  "Arslan",  22000.0},
        {1005, "Mustafa", "Çelik",   16750.0}
    };

    int i;
    float toplamMaas = 0.0;

    printf("%-10s %-15s %-15s %12s\n", "Sicil", "Ad", "Soyad", "Maaş (TL)");
    printf("%-10s %-15s %-15s %12s\n", "----------", "---------------",
           "---------------", "------------");

    for (i = 0; i < 5; i++) {
        printf("%-10d %-15s %-15s %12.2f\n",
               tablo[i].sicilNo,
               tablo[i].ad,
               tablo[i].soyad,
               tablo[i].maas);
        toplamMaas += tablo[i].maas;
    }

    printf("%-10s %-15s %-15s %12s\n", "----------", "---------------",
           "---------------", "------------");
    printf("%-40s %12.2f\n", "TOPLAM MAAŞ:", toplamMaas);
    printf("%-40s %12.2f\n", "ORTALAMA MAAŞ:", toplamMaas / 5);

    return 0;
}
```

**Çıktı:**
```
Sicil      Ad              Soyad              Maaş (TL)
---------- --------------- ---------------  ------------
1001       Ahmet           Yılmaz           15000.00
1002       Fatma           Kaya             18500.00
1003       Mehmet          Demir            12000.00
1004       Zeynep          Arslan           22000.00
1005       Mustafa         Çelik            16750.00
---------- --------------- ---------------  ------------
TOPLAM MAAŞ:                               84250.00
ORTALAMA MAAŞ:                             16850.00
```

Bu 5 çalışan yerine 500 çalışan olsaydı, tek satır bile değiştirmeyecektiniz — sadece `5`'i `500` yapardınız. İşte struct + dizi kombinasyonunun gücü budur.

---

## Struct İçinde Struct: İç İçe Yapılar

Bir struct'ın alanı başka bir struct olabilir. Örneğin, çalışanın adresini de tutmak isteyelim:

```c
typedef struct {
    char sehir[30];
    char ilce[30];
    char sokak[50];
    int  postaKodu;
} Adres;

typedef struct {
    int    sicilNo;
    char   ad[30];
    char   soyad[30];
    float  maas;
    Adres  adres;       // ← İç içe struct!
} Personel;
```

Kullanımı:

```c
Personel calisan;

calisan.sicilNo = 1001;
strcpy(calisan.ad, "Ahmet");
strcpy(calisan.soyad, "Yılmaz");
calisan.maas = 15000.0;

// İç struct'a erişim: iki nokta operatörü
strcpy(calisan.adres.sehir, "İstanbul");
strcpy(calisan.adres.ilce, "Kadıköy");
calisan.adres.postaKodu = 34710;

printf("%s %s — %s / %s\n",
       calisan.ad,
       calisan.soyad,
       calisan.adres.ilce,
       calisan.adres.sehir);
// Çıktı: Ahmet Yılmaz — Kadıköy / İstanbul
```

---

## BÖLÜM 2: ENUM — Seçenekleri Anlamlı Hale Getirmek

### Problem: Sihirli Sayılar

Bir stok yönetim sisteminde ürün durumunu tutan bir değişken düşünün:

```c
int urunDurumu = 2;
```

Bu `2` ne anlama geliyor? Stokta var mı? Tükendi mi? Sipariş aşamasında mı? Kodu 3 ay sonra tekrar açtığınızda bu `2`'nin ne demek olduğunu **hatırlamayacaksınız**. Başkası kodu okursa hiç anlamayacak.

Programlamada bunlara **"sihirli sayılar" (magic numbers)** denir — kodun içinde anlamsızca duran, neyi temsil ettiği belirsiz sayılar. Ve bu, kötü kod yazmanın en klasik yollarından biridir.

### Çözüm: `enum`

**Enum** (enumeration — sayım), birbiriyle ilişkili **sabit değerlere anlamlı isimler vermemizi** sağlar. Sihirli sayıları insanın anlayabileceği kelimelere dönüştürür.

```c
enum UrunDurumu {
    STOKTA_VAR,       // otomatik olarak 0 değerini alır
    TUKENDI,          // otomatik olarak 1 değerini alır
    SIPARIS_BEKLENIYOR, // otomatik olarak 2 değerini alır
    URETIMDE          // otomatik olarak 3 değerini alır
};
```

Artık `2` yerine `SIPARIS_BEKLENIYOR` yazabilirsiniz. Herkes ne anlama geldiğini anlar.

### Enum Nasıl Kullanılır?

```c
#include <stdio.h>

typedef enum {
    STOKTA_VAR,
    TUKENDI,
    SIPARIS_BEKLENIYOR,
    URETIMDE
} UrunDurumu;

int main() {

    UrunDurumu bilgisayar = STOKTA_VAR;
    UrunDurumu klavye     = TUKENDI;
    UrunDurumu mouse      = SIPARIS_BEKLENIYOR;

    // Enum değeri aslında bir tam sayıdır
    printf("STOKTA_VAR     = %d\n", STOKTA_VAR);      // 0
    printf("TUKENDI        = %d\n", TUKENDI);          // 1
    printf("SIPARIS...     = %d\n", SIPARIS_BEKLENIYOR); // 2

    // if ile kullanım
    if (bilgisayar == STOKTA_VAR) {
        printf("Bilgisayar stokta mevcut.\n");
    }

    return 0;
}
```

### Özel Değer Atama

Enum değerlerine istediğiniz tam sayıları atayabilirsiniz:

```c
typedef enum {
    ASISTAN   = 1,
    UZMAN     = 2,
    KIDEMLI   = 3,
    MUDUR     = 4,
    DIREKTOR  = 5,
    GENEL_MUDUR = 6
} Unvan;
```

Bir değer atadığınızda, sonrakiler otomatik olarak devam eder:

```c
typedef enum {
    OCAK = 1,     // 1
    SUBAT,        // 2 (otomatik)
    MART,         // 3 (otomatik)
    NISAN,        // 4 (otomatik)
    // ...
    ARALIK = 12
} Ay;
```

---

## BÖLÜM 3: STRUCT + ENUM = Gerçek Güç

İkisini birleştirdiğinizde, gerçek dünya uygulamalarına çok yakın bir veri modeli elde edersiniz.

### Örnek: Kapsamlı Stok Yönetim Sistemi

YBS öğrencisi olarak stok yönetimi, ERP sistemleri ve veritabanı tasarımı konularıyla yakından ilgileneceksiniz. Aşağıdaki örnek, struct ve enum'un birlikte nasıl kullanıldığını tam olarak gösteriyor:

```c
#include <stdio.h>
#include <string.h>

// ── ENUM'LAR ──────────────────────────────────────────────────────────────

typedef enum {
    ELEKTRONIK,
    OFIS_MALZEMESI,
    MOBILYA,
    TEMIZLIK
} UrunKategorisi;

typedef enum {
    STOKTA_VAR,
    KRITIK_SEVIYE,    // az kaldı, sipariş verilmeli
    TUKENDI,
    SIPARIS_VERILDI
} StokDurumu;

// ── STRUCT'LAR ────────────────────────────────────────────────────────────

typedef struct {
    int    urunKodu;
    char   urunAdi[50];
    float  birimFiyat;
    int    stokMiktari;
    int    kritikEsik;        // bu miktarın altına düşünce alarm
    UrunKategorisi kategori;
    StokDurumu     durum;
} Urun;

// ── YARDIMCI FONKSİYONLAR ────────────────────────────────────────────────

const char* kategoriAdi(UrunKategorisi k) {
    switch (k) {
        case ELEKTRONIK:    return "Elektronik";
        case OFIS_MALZEMESI: return "Ofis Malzemesi";
        case MOBILYA:       return "Mobilya";
        case TEMIZLIK:      return "Temizlik";
        default:            return "Bilinmiyor";
    }
}

const char* durumAdi(StokDurumu d) {
    switch (d) {
        case STOKTA_VAR:      return "✓ Stokta Var";
        case KRITIK_SEVIYE:   return "⚠ Kritik Seviye";
        case TUKENDI:         return "✗ Tükendi";
        case SIPARIS_VERILDI: return "→ Sipariş Verildi";
        default:              return "Bilinmiyor";
    }
}

// Stok durumunu otomatik hesapla
StokDurumu durumHesapla(Urun u) {
    if (u.stokMiktari == 0)              return TUKENDI;
    if (u.stokMiktari <= u.kritikEsik)   return KRITIK_SEVIYE;
    return STOKTA_VAR;
}

// Stok raporu yazdır
void stokRaporuYazdir(Urun depo[], int adet) {
    int i;
    float toplamDeger = 0.0;

    printf("\n═══════════════════════════════════════════════════════════════\n");
    printf("                      STOK DURUM RAPORU                      \n");
    printf("═══════════════════════════════════════════════════════════════\n");
    printf("%-6s %-20s %-14s %6s %10s %s\n",
           "Kod", "Ürün Adı", "Kategori", "Miktar", "Değer(TL)", "Durum");
    printf("───────────────────────────────────────────────────────────────\n");

    for (i = 0; i < adet; i++) {
        // Durumu güncelle
        depo[i].durum = durumHesapla(depo[i]);

        float urunDegeri = depo[i].stokMiktari * depo[i].birimFiyat;
        toplamDeger += urunDegeri;

        printf("%-6d %-20s %-14s %6d %10.2f %s\n",
               depo[i].urunKodu,
               depo[i].urunAdi,
               kategoriAdi(depo[i].kategori),
               depo[i].stokMiktari,
               urunDegeri,
               durumAdi(depo[i].durum));
    }

    printf("───────────────────────────────────────────────────────────────\n");
    printf("%-48s %10.2f TL\n", "TOPLAM STOK DEĞERİ:", toplamDeger);
    printf("═══════════════════════════════════════════════════════════════\n\n");
}

// Kritik ürünleri listele
void kritikUrunleriListele(Urun depo[], int adet) {
    int i, bulunanVar = 0;

    printf("⚠  KRİTİK/TÜKENMİŞ ÜRÜNLER — ACİL SİPARİŞ GEREKİYOR:\n");
    printf("───────────────────────────────────────────────\n");

    for (i = 0; i < adet; i++) {
        if (depo[i].durum == KRITIK_SEVIYE || depo[i].durum == TUKENDI) {
            printf("  • %s (Kod: %d) — Mevcut: %d adet\n",
                   depo[i].urunAdi,
                   depo[i].urunKodu,
                   depo[i].stokMiktari);
            bulunanVar = 1;
        }
    }

    if (!bulunanVar) {
        printf("  Kritik ürün yok, stok durumu iyi.\n");
    }
    printf("\n");
}

// ── ANA FONKSİYON ─────────────────────────────────────────────────────────

int main() {

    // Depo kaydı oluştur
    Urun depo[6] = {
        {1001, "Dizüstü Bilgisayar", 25000.0,  15, 5,  ELEKTRONIK,     STOKTA_VAR},
        {1002, "Kablosuz Mouse",      350.0,     3, 10, ELEKTRONIK,     STOKTA_VAR},
        {1003, "A4 Kağıt (500lü)",    85.0,      0, 20, OFIS_MALZEMESI, STOKTA_VAR},
        {1004, "Ergonomik Sandalye", 4500.0,    8, 3,  MOBILYA,        STOKTA_VAR},
        {1005, "Toner Kartuşu",      1200.0,    2, 5,  OFIS_MALZEMESI, STOKTA_VAR},
        {1006, "El Dezenfektanı",     45.0,     120, 30, TEMIZLIK,     STOKTA_VAR}
    };

    // Durumları hesapla ve raporu yazdır
    stokRaporuYazdir(depo, 6);
    kritikUrunleriListele(depo, 6);

    return 0;
}
```

**Çıktı:**
```
═══════════════════════════════════════════════════════════════
                      STOK DURUM RAPORU
═══════════════════════════════════════════════════════════════
Kod    Ürün Adı             Kategori        Miktar  Değer(TL) Durum
───────────────────────────────────────────────────────────────
1001   Dizüstü Bilgisayar   Elektronik          15  375000.00 ✓ Stokta Var
1002   Kablosuz Mouse       Elektronik           3    1050.00 ⚠ Kritik Seviye
1003   A4 Kağıt (500lü)     Ofis Malzemesi       0       0.00 ✗ Tükendi
1004   Ergonomik Sandalye   Mobilya              8   36000.00 ✓ Stokta Var
1005   Toner Kartuşu        Ofis Malzemesi       2    2400.00 ⚠ Kritik Seviye
1006   El Dezenfektanı      Temizlik           120    5400.00 ✓ Stokta Var
───────────────────────────────────────────────────────────────
TOPLAM STOK DEĞERİ:                              419850.00 TL
═══════════════════════════════════════════════════════════════

⚠  KRİTİK/TÜKENMİŞ ÜRÜNLER — ACİL SİPARİŞ GEREKİYOR:
───────────────────────────────────────────────
  • Kablosuz Mouse (Kod: 1002) — Mevcut: 3 adet
  • A4 Kağıt (500lü) (Kod: 1003) — Mevcut: 0 adet
  • Toner Kartuşu (Kod: 1005) — Mevcut: 2 adet
```

---

## Struct ile Fonksiyon Kullanımı

Struct değerleri fonksiyonlara parametre olarak gönderilebilir.

### Değer ile Gönderme (Kopyalama)

```c
void personelYazdir(Personel p) {
    // 'p' burada orijinalin bir kopyasıdır
    // p üzerinde yapılan değişiklikler orijinali etkilemez
    printf("%d - %s %s (%.2f TL)\n", p.sicilNo, p.ad, p.soyad, p.maas);
}

// Kullanım:
personelYazdir(calisan1);
```

### Pointer ile Gönderme (Değiştirebilir)

Büyük struct'ları kopyalamak yerine pointer (adres) gönderip doğrudan değiştirmek çok daha verimlidir:

```c
void zamYap(Personel *p, float oran) {
    // '*p' ile orijinal struct'a erişiyoruz
    // '->' operatörü: pointer üzerinden alana erişim
    p->maas = p->maas * (1.0 + oran / 100.0);
}

// Kullanım:
zamYap(&calisan1, 15.0);  // %15 zam yaptık
```

**`->` operatörü:** Bir pointer üzerinden struct alanına erişimde `->` kullanılır. `p->maas` ile `(*p).maas` tamamen aynı anlama gelir; ama `->` çok daha okunabilirdir.

```c
// Bu ikisi eşdeğerdir:
p->maas = 1500.0;
(*p).maas = 1500.0;   // Parantez şart, öncelik kuralı
```

---

## Bellekte Struct: Nasıl Saklanır?

Struct'ın bellekte nasıl yer kapladığını anlamak, ileride verimli kod yazmanıza yardımcı olacaktır.

```c
typedef struct {
    int   a;    // 4 byte
    char  b;    // 1 byte
    float c;    // 4 byte
} Ornek;

printf("%zu\n", sizeof(Ornek)); // Beklenen: 9, gerçek: 12
```

**Neden 12?** Çünkü işlemci, verileri belirli adres sınırlarında (genellikle 4'ün katları) okumayı tercih eder. Derleyici bunu sağlamak için boşluk ekler — buna **padding** denir:

```
Bellekte:
┌──────────┬──┬──────┬──────────┐
│ int a    │b │ pad  │ float c  │
│  4 byte  │1 │  3   │  4 byte  │
└──────────┴──┴──────┴──────────┘
  Toplam: 4 + 1 + 3 (dolgu) + 4 = 12 byte
```

---

## Sık Yapılan Hatalar

| Hata | Açıklama | Doğrusu |
|------|----------|---------|
| `struct` sonunda `;` unutmak | Derleme hatası — struct tanımı ifadedir | `} Personel;` veya `};` |
| `char` dizisine `=` ile atama | `calisan.ad = "Ali"` hata verir | `strcpy(calisan.ad, "Ali")` |
| Pointer ile `.` kullanmak | `ptr.alan` çalışmaz | `ptr->alan` kullanın |
| Enum değerini string sanmak | `printf("%s", TUKENDI)` hata verir | `switch` + `return` string fonksiyon yazın |
| `sizeof(struct)` yanlış tahmin | Padding nedeniyle beklenenin üstünde | `sizeof()` ile ölçün |

---

## Özet: Ne Öğrendik?

**`struct`** — Farklı tipte verileri tek çatı altında toplar. Personel kaydı, ürün bilgisi, sipariş detayı gibi gerçek dünya nesnelerini modeller. `.` ile alanlara, `->` ile pointer üzerinden erişilir. `typedef` ile daha temiz yazım sağlanır.

**`enum`** — İlişkili sabitlere anlamlı isim verir. Sihirli sayıları ortadan kaldırır. Kodun okunabilirliğini ve güvenliğini artırır. Arka planda tam sayıdır; `switch` ile mükemmel uyum içinde çalışır.

**İkisi birlikte** — YBS projelerinde müşteri kaydı, stok yönetimi, sipariş takibi, personel sistemi gibi gerçek dünya uygulamalarının temelini oluşturur.

---

## YBS Gözüyle Büyük Resim

Bugün yazdığınız `Urun` struct'ı, bir veritabanı tablosunun satırına karşılık gelir. `UrunKategorisi` enum'u ise o tablonun kategoriye ait sütununda saklanan kısıtlı değerlerin (lookup table) programlama karşılığıdır.

İlerleyen dönemlerde MySQL, SQL Server veya PostgreSQL ile çalışırken göreceksiniz ki bir tablodaki sütunlar, bir struct'ın alanlarına birebir benzer. Bir tabloda `INT`, `VARCHAR`, `FLOAT` gibi tipler kullanırken — C'de `int`, `char[]`, `float` kullanıyorsunuz. Zihninizde bu köprüyü kurun: **struct, tablonun satır şablonudur.**

---

## Pratik Ödev

Bir **müşteri sipariş takip sistemi** yazın:

1. `Musteri` struct'ı: sicilNo, ad, soyad, telefon, sehir
2. `SiparisDetayi` struct'ı: siparisNo, urunAdi, miktar, birimFiyat, toplam
3. `SiparisDurumu` enum: `HAZIRLANIYOR`, `KARGOYA_VERILDI`, `TESLIM_EDILDI`, `IPTAL`
4. `Siparis` struct'ı: siparisNo, musteri (Musteri struct'ı), detay (SiparisDetayi struct'ı), durum (SiparisDurumu enum)
5. En az 4 sipariş içeren bir dizi oluşturun ve siparişleri durumlarına göre gruplandırarak ekrana yazdırın
6. **Bonus:** Teslim edilen siparişlerin toplam gelirini hesaplayan bir fonksiyon yazın
