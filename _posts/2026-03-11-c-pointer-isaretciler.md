---
layout: post
title: "C'de Pointer (İşaretçi) — Belleğin Haritasını Okumak"
date: 2026-03-11 14:00:00 +0300
categories: algoritma-ve-programlama-ii
---

Programlama öğrenirken bir nokta vardır ki, oraya kadar her şey mantıklıdır: değişken tanımlarsın, değer atarsın, fonksiyon yazarsın. Sonra **pointer** denir ve bir anda her şey karışır. Ama korkacak bir şey yok — pointer aslında çok basit bir fikirdir. Sadece anlatımı genellikle karmaşıklaştırılır.

Bu derste pointer'ı **sıfırdan**, adım adım, bol örnekle öğreneceğiz.

---

## 1. Önce Belleği Anlayalım

Pointer'ı anlamak için önce bilgisayarın belleğini (RAM) anlamak gerekir.

RAM'i bir **posta kutusu sırası** gibi düşünün:

```
Adres:    1000    1004    1008    1012    1016    1020
        ┌───────┬───────┬───────┬───────┬───────┬───────┐
        │       │   5   │       │  'A'  │       │       │
        └───────┴───────┴───────┴───────┴───────┴───────┘
          Boş    sayi     Boş    harf     Boş     Boş
```

Her posta kutusunun iki şeyi vardır:

| Özellik | Açıklama | Örnek |
|---------|----------|-------|
| **Adres** | Kutunun numarası — bellekte nerede olduğu | `1004` |
| **İçerik** | Kutunun içindeki değer | `5` |

Bir değişken tanımladığınızda:

```c
int sayi = 5;
```

C derleyicisi şunu yapar:
1. Bellekte boş bir kutu bulur (mesela adres `1004`)
2. `sayi` ismini bu adrese bağlar
3. Kutunun içine `5` değerini yazar

Siz `sayi` dediğinizde, C otomatik olarak `1004` adresine gidip oradaki değeri (`5`) getirir. Perde arkasında her şey adreslerle döner — siz sadece isimleri kullanırsınız.

**Peki ya o adresi doğrudan elde etmek istersek?**

İşte pointer tam burada devreye girer.

---

## 2. Pointer Nedir?

Pointer, **bir değişkenin bellekteki adresini tutan değişkendir**.

Normal değişken bir **değer** tutar. Pointer ise bir **adres** tutar.

```
Normal değişken:
  sayi  →  kutunun İÇİNDEKİ değer  →  5

Pointer değişken:
  ptr   →  kutunun ADRESİ           →  1004
```

### Günlük Hayat Analojisi

- **Normal değişken:** "Ali'nin telefon numarası 0555-123-4567'dir"
  - Doğrudan bilgiyi tutuyorsunuz
- **Pointer:** "Ali'nin numarası, şu kağıtta yazıyor" *(kağıdın adresi)*
  - Bilgiyi değil, bilginin **nerede olduğunu** tutuyorsunuz

Her iki durumda da Ali'nin numarasına ulaşabilirsiniz. Ama pointer ile bir ekstra adım vardır: önce kağıda bakarsınız, sonra numarayı okursunuz.

---

## 3. İki Kritik Operatör: `&` ve `*`

Pointer dünyasının tamamı iki operatör üzerine kuruludur:

### `&` — Adres Operatörü ("nerede?")

Bir değişkenin **bellekteki adresini** verir.

```c
int sayi = 5;
printf("%p", &sayi);    // Çıktı: 0x7ffd1004 (örnek adres)
```

`&sayi` demek: "sayi değişkeni bellekte **nerede** duruyor?"

### `*` — Dereference Operatörü ("ne var orada?")

Bir adresin **içindeki değeri** okur (veya yazar).

```c
int sayi = 5;
int *ptr = &sayi;
printf("%d", *ptr);     // Çıktı: 5
```

`*ptr` demek: "ptr'nin gösterdiği adrese git ve orada **ne varsa** getir."

### İki Farklı Bağlamda `*`

`*` sembolü C'de iki farklı yerde kullanılır — bu kafa karıştırabilir:

```c
int *ptr;       // TANIM:   "ptr bir pointer değişkendir" (tip belirteci)
*ptr = 10;      // KULLANIM: "ptr'nin gösterdiği yere 10 yaz" (dereference)
```

| Kullanım | Anlam | Örnek |
|----------|-------|-------|
| Tanımda `int *ptr` | "ptr, int tipinde bir adres tutar" | Pointer bildirimi |
| İfadede `*ptr` | "ptr'nin gösterdiği adresteki değer" | Değere erişim |

---

## 4. İlk Pointer Örneği

```c
#include <stdio.h>

int main(){
    int sayi = 5;
    int *birAdresPtr;

    birAdresPtr = &sayi;

    printf("sayi'nin degeri:         %d\n", sayi);
    printf("sayi'nin adresi:         %p\n", &sayi);
    printf("ptr'nin tuttugu adres:   %p\n", birAdresPtr);
    printf("ptr'nin gosterdigi deger:%d\n", *birAdresPtr);
    printf("ptr'nin kendi adresi:    %p\n", &birAdresPtr);

    return 0;
}
```

### Örnek Çıktı

```
sayi'nin degeri:         5
sayi'nin adresi:         0x7ffd5a3c
ptr'nin tuttugu adres:   0x7ffd5a3c
ptr'nin gosterdigi deger:5
ptr'nin kendi adresi:    0x7ffd5a40
```

### Satır Satır Açıklama

#### 1. Değişken Tanımları

```c
int sayi = 5;
int *birAdresPtr;
```

Bellekte şu durum oluşur:

```
Adres:     0x5a3c          0x5a40
         ┌──────────┐    ┌──────────┐
         │     5     │    │   ????   │
         └──────────┘    └──────────┘
           sayi           birAdresPtr
          (int)           (int *)
```

`int *birAdresPtr` → "birAdresPtr adında bir değişken tanımla. Bu değişken `int` tipinde bir verinin **adresini** tutacak."

Henüz bir adres atanmadı — pointer'ın içi çöp değer. Bu haliyle kullanmak **tehlikelidir** (tanımsız davranış).

#### 2. Adres Atama

```c
birAdresPtr = &sayi;
```

```
Adres:     0x5a3c          0x5a40
         ┌──────────┐    ┌──────────┐
         │     5     │    │  0x5a3c  │───→ sayi'ye işaret ediyor
         └──────────┘    └──────────┘
           sayi           birAdresPtr
```

Artık `birAdresPtr`, `sayi`'nin adresini tutuyor. "sayi nerede?" sorusunun cevabı pointer'ın içinde.

#### 3. Beş printf Satırının Analizi

| Satır | Ne Yazdırılır | Değer | Açıklama |
|-------|--------------|-------|----------|
| `sayi` | sayi'nin değeri | `5` | Doğrudan değişkenin içeriği |
| `&sayi` | sayi'nin adresi | `0x5a3c` | Değişkenin bellekteki konumu |
| `birAdresPtr` | Pointer'ın tuttuğu adres | `0x5a3c` | = &sayi (aynı adres!) |
| `*birAdresPtr` | Pointer'ın gösterdiği değer | `5` | Adrese gidip içeriğini oku |
| `&birAdresPtr` | Pointer'ın kendi adresi | `0x5a40` | Pointer da bir değişken — onun da adresi var |

> **Kilit nokta:** `birAdresPtr` ve `&sayi` aynı değeri verir. İkisi de `sayi`'nin adresini gösterir. Ama `&birAdresPtr` farklıdır — o, pointer **değişkeninin kendisinin** adresidir.

### Adres Yazdırırken `%p` Kullanın

```c
printf("%p\n", &sayi);        // ✅ Doğru — adres için %p
printf("%d\n", &sayi);        // ⚠️ Yanlış — adres bir tam sayı değil
```

`%p` format belirteci, adresleri **onaltılık (hexadecimal)** formatta yazdırır (örn: `0x7ffd5a3c`). Adresler için her zaman `%p` kullanılmalıdır.

---

## 5. Pointer ile Değer Değiştirme

Pointer sadece okumak için değildir — gösterdiği adresteki değeri **değiştirebilir** de:

```c
int sayi = 5;
int *ptr = &sayi;

printf("Önce:  %d\n", sayi);    // 5

*ptr = 42;    // ptr'nin gösterdiği adrese (yani sayi'ye) 42 yaz

printf("Sonra: %d\n", sayi);    // 42
```

`*ptr = 42` demek: "ptr'nin tuttuğu adrese git ve oradaki değeri 42 yap."

`sayi` değişkenine hiç dokunmadık — ama değeri değişti! Çünkü `ptr`, `sayi`'nin adresini tutuyor ve `*ptr` o adresteki veriyi değiştiriyor.

```
Önce:                          Sonra:
ptr → [0x5a3c] → [5]          ptr → [0x5a3c] → [42]
                                                  ↑
                                            *ptr = 42 ile değişti
```

Bu özellik, pointer'ları **fonksiyonlarda** çok güçlü kılar (birazdan göreceğiz).

---

## 6. Pointer Neden Gerekli?

"Tamam adres tutuyormuş, ne işime yarar?" Haklı bir soru. İşte pointer'ın **vazgeçilmez** olduğu durumlar:

### 6.1 Fonksiyonlarda Değer Değiştirme

C'de fonksiyonlara parametre geçirme **kopya ile** yapılır (call by value). Yani fonksiyon, orijinal değişkeni değil **kopyasını** alır:

```c
void artir(int x){
    x = x + 1;    // Sadece kopyanın değeri artar
}

int main(){
    int sayi = 5;
    artir(sayi);
    printf("%d", sayi);    // Hâlâ 5! Orijinal değişmedi.
}
```

Pointer ile orijinali değiştirebiliriz:

```c
void artir(int *x){
    *x = *x + 1;    // Orijinal adresteki değer artar
}

int main(){
    int sayi = 5;
    artir(&sayi);          // Adresi gönder
    printf("%d", sayi);    // 6! Orijinal değişti.
}
```

### 6.2 Dizilerle Çalışma

C'de dizi adı zaten bir **pointer'dır** — dizinin ilk elemanının adresini tutar:

```c
int dizi[5] = {10, 20, 30, 40, 50};

printf("%p\n", dizi);      // Dizinin başlangıç adresi
printf("%p\n", &dizi[0]);  // İlk elemanın adresi → aynı şey!
```

### 6.3 Dinamik Bellek Yönetimi

Program çalışırken boyutu belli olmayan veriler için bellek ayırmak gerekir. `malloc()` fonksiyonu bellekte yer ayırır ve o yerin **adresini** döndürür — yani bir pointer verir:

```c
int *dizi = (int *)malloc(100 * sizeof(int));
// 100 elemanlık int dizisi için bellekte yer ayrıldı
// dizi, bu alanın başlangıç adresini tutar
```

### 6.4 String İşlemleri

C'de string diye ayrı bir tip yoktur — string, `char` tipinde bir dizi (veya pointer) olarak tutulur:

```c
char *mesaj = "Merhaba";
// mesaj, 'M' karakterinin adresini tutar
```

---

## 7. Pointer Aritmetiği

Pointer'lar üzerinde toplama ve çıkarma yapılabilir. Ama burada dikkat: pointer aritmetiği **byte değil, eleman** bazındadır.

```c
int dizi[5] = {10, 20, 30, 40, 50};
int *ptr = dizi;    // dizi[0]'ın adresini tutar

printf("%d\n", *ptr);        // 10  (dizi[0])
printf("%d\n", *(ptr + 1));  // 20  (dizi[1])
printf("%d\n", *(ptr + 2));  // 30  (dizi[2])
```

`ptr + 1` demek "bir sonraki byte'a git" **değil**, "bir sonraki `int` elemana git" demektir.

```
Bellek (int = 4 byte):

Adres:    1000    1004    1008    1012    1016
        ┌───────┬───────┬───────┬───────┬───────┐
        │  10   │  20   │  30   │  40   │  50   │
        └───────┴───────┴───────┴───────┴───────┘
          ptr    ptr+1   ptr+2   ptr+3   ptr+4
         *ptr   *(ptr+1) ...
```

`ptr + 1` aslında `ptr + 1 × sizeof(int)` = `ptr + 4 byte` adresine gider. Ama C bunu otomatik hesaplar — siz sadece `ptr + 1` yazarsınız.

### Pointer ile Dizi Gezme

```c
int dizi[5] = {10, 20, 30, 40, 50};
int *ptr = dizi;

for(int i = 0; i < 5; i++){
    printf("%d ", *(ptr + i));    // 10 20 30 40 50
}
```

Bu, `dizi[i]` yazmakla **tamamen aynıdır**. Aslında C derleyicisi `dizi[i]` ifadesini perde arkasında `*(dizi + i)` olarak çevirir.

| Yazım | Eşdeğeri | Sonuç |
|-------|----------|-------|
| `dizi[0]` | `*(dizi + 0)` = `*dizi` | İlk eleman |
| `dizi[3]` | `*(dizi + 3)` | Dördüncü eleman |
| `ptr[2]` | `*(ptr + 2)` | Üçüncü eleman |

---

## 8. Pointer ve String İşlemleri

C'de stringler `'\0'` (NULL) karakteriyle biten `char` dizileridir. Pointer kullanarak string üzerinde karakter karakter yürüyebiliriz.

### Örnek: Küçük Harfleri Büyük Harfe Çevirme

```c
#include <stdio.h>
#include <ctype.h>

void buyukHarfeCevir(char *sPtr);

int main(){
    char string[] = "karakterler ve $32.98";

    printf("Cevrilmeden once: %s\n", string);

    buyukHarfeCevir(string);

    printf("Cevrildikten sonra: %s\n", string);

    return 0;
}

void buyukHarfeCevir(char *sPtr){
    while(*sPtr != '\0'){
        if(islower(*sPtr)){
            *sPtr = toupper(*sPtr);
        }
        ++sPtr;
    }
}
```

### Çıktı

```
Cevrilmeden once: karakterler ve $32.98
Cevrildikten sonra: KARAKTERLER VE $32.98
```

### Detaylı Açıklama

#### Fonksiyon Çağrısı

```c
char string[] = "karakterler ve $32.98";
buyukHarfeCevir(string);
```

`string` bir `char` dizisidir. Dizi adı fonksiyona geçirildiğinde, otomatik olarak **ilk elemanın adresi** gönderilir. Yani `buyukHarfeCevir(string)` demek, `buyukHarfeCevir(&string[0])` demekle aynıdır.

#### Fonksiyonun İçi — Adım Adım

```c
void buyukHarfeCevir(char *sPtr){
```

`sPtr`, `string` dizisinin **başlangıç adresini** alır. Artık `sPtr` üzerinden orijinal diziye erişebiliriz.

```
Başlangıçta:
sPtr → [ k ] [ a ] [ r ] [ a ] [ k ] ... [ 8 ] [ \0 ]
        ↑
       sPtr burayı gösteriyor
```

#### Döngü

```c
while(*sPtr != '\0'){        // String sonu mu?
    if(islower(*sPtr)){      // Küçük harf mi?
        *sPtr = toupper(*sPtr);  // Büyük harfe çevir (orijinalde!)
    }
    ++sPtr;                  // Bir sonraki karaktere ilerle
}
```

Her turda ne olur:

| Tur | `sPtr` gösteriyor | `*sPtr` | Küçük harf? | İşlem | Sonuç |
|-----|-------------------|---------|-------------|-------|-------|
| 1 | `string[0]` | `'k'` | Evet | `'K'` yaz | K |
| 2 | `string[1]` | `'a'` | Evet | `'A'` yaz | A |
| 3 | `string[2]` | `'r'` | Evet | `'R'` yaz | R |
| ... | ... | ... | ... | ... | ... |
| 15 | `string[14]` | `' '` | Hayır | Atla | (boşluk) |
| 16 | `string[15]` | `'$'` | Hayır | Atla | $ |
| 17 | `string[16]` | `'3'` | Hayır | Atla | 3 |
| ... | ... | ... | ... | ... | ... |
| 21 | `string[20]` | `'\0'` | — | Döngü biter | — |

#### Neden Orijinal Dizi Değişiyor?

```c
*sPtr = toupper(*sPtr);
```

`sPtr`, `string` dizisinin **adresini** tutuyor. `*sPtr` o adresteki veriyi değiştiriyor. Kopyayla değil, **doğrudan orijinal bellekle** çalışıyoruz. Bu yüzden fonksiyon bittikten sonra `main()`'deki `string` dizisi de değişmiş oluyor.

Bu, pointer'ın gücüdür: fonksiyona kopya göndermek yerine **adresi** göndeririz, fonksiyon orijinal veriyi doğrudan değiştirir.

#### `++sPtr` — Pointer İlerletme

```c
++sPtr;    // sPtr = sPtr + 1
```

Pointer'ı bir sonraki `char` adresine kaydırır. `char` 1 byte olduğu için bellekte 1 byte ileri gider → bir sonraki karakter.

```
++sPtr öncesi:   sPtr → [k][a][r]...
                          ↑
++sPtr sonrası:  sPtr → [k][a][r]...
                             ↑
```

Bu işlem sonunda `sPtr`, `'\0'` (NULL) karakterine ulaşır ve `while` döngüsü sona erer. `'\0'`, C'deki her string'in sonunda bulunan özel sonlandırma karakteridir.

---

## 9. Bellek Tarama — Pointer'ın Ham Gücü

Şimdi pointer'ın ne kadar güçlü (ve potansiyel olarak tehlikeli) olduğunu gösteren ilginç bir uygulama görelim. Bu program, bellekteki **rastgele bir bölgeyi tarayarak** orada bulduğu yazdırılabilir karakterleri ekrana basar.

### Kod

```c
#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include <ctype.h>

int main(){
    unsigned char *ptr;
    unsigned long start_address;
    int found_chars;
    int i;
    unsigned char current_byte;

    srand(time(NULL));

    // Mevcut bir değişkenin adresini başlangıç noktası olarak al
    ptr = (unsigned char *)&start_address;

    printf("--- Bellek Tarama Baslatiliyor ---\n");
    printf("Baslangic Adresi: %p\n\n", (void *)ptr);

    found_chars = 0;
    while(found_chars < 100000){
        current_byte = *ptr;

        if(isprint(current_byte)){
            putchar(current_byte);
            found_chars++;

            if(found_chars % 100 == 0){
                printf("\n");
            }
        }

        ptr++;
    }

    printf("\n\n--- Tarama Tamamlandi. 100.000 karakter listelendi. ---\n");

    return 0;
}
```

### Bu Kod Ne Yapıyor?

Bu program, pointer'ı bir **bellek tarayıcısı** olarak kullanıyor. Bellekte byte byte ilerleyerek orada depolanmış verilerin izlerini arıyor.

#### Adım 1: Başlangıç Noktası Belirleme

```c
unsigned char *ptr;
unsigned long start_address;

ptr = (unsigned char *)&start_address;
```

`start_address` sıradan bir `unsigned long` değişkeni. Programın kendi stack belleğinde yer alır. `&start_address` ile adresini alıp, `unsigned char *` tipine çevirerek (cast) pointer'a atıyoruz.

**Neden böyle?** Tamamen rastgele bir adres (mesela `0x12345678`) kullanmak tehlikelidir — o adres programımıza ait olmayabilir ve işletim sistemi **segmentation fault** hatası verir. Kendi değişkenimizin adresinden başlayarak, en azından programın bellek alanında kalma şansımız artar.

**Neden `unsigned char *`?** Çünkü `char` 1 byte'tır. Bu pointer her `ptr++` işleminde tam 1 byte ilerler — byte byte tarama yapabiliriz.

#### Adım 2: Byte Byte Okuma

```c
while(found_chars < 100000){
    current_byte = *ptr;    // ptr'nin gösterdiği adresteki byte'ı oku
```

`*ptr` → pointer'ın gösterdiği bellekteki 1 byte'ı okur. Bu byte herhangi bir şey olabilir: bir değişkenin parçası, bir string'in karakteri, derleyicinin koyduğu bir veri veya tamamen anlamsız çöp.

#### Adım 3: Yazdırılabilir mi Kontrol Et

```c
    if(isprint(current_byte)){
        putchar(current_byte);
        found_chars++;
    }
```

`isprint()` fonksiyonu, bir byte'ın **yazdırılabilir bir ASCII karakter** olup olmadığını kontrol eder (ASCII 32-126: harfler, rakamlar, noktalama işaretleri, boşluk).

Yazdırılamayan karakterler (kontrol karakterleri, 0-31 arası) atlanır — bunları ekrana basmak terminali bozabilir.

#### Adım 4: İlerle

```c
    ptr++;    // Bir sonraki byte'a geç
}
```

Her adımda pointer 1 byte ilerler. Program bellekte **lineer** olarak ilerleyerek 100.000 yazdırılabilir karakter bulana kadar devam eder.

### Örnek Çıktı (Her Seferinde Farklı)

```
--- Bellek Tarama Baslatiliyor ---
Baslangic Adresi: 0x7ffd5a3c0010

H@.P..e.l.l.o...W.o.r.l.d...%d.%s.printf.scanf.main.
__libc_start_main.GLIBC_2.17./lib/x86_64-linux-gnu/li
bc.so.6...GCC: (Ubuntu 11.4.0-1ubuntu1~22.04) 11.4.0.
.symtab..strtab..shstrtab..interp..note.gnu.property..
```

Gördüğünüz gibi bellekte programın kendi kodunun izleri, kütüphane adları, format stringleri gibi veriler bulunabiliyor. Bu, pointer'ın **belleğe doğrudan erişim** sağladığının en somut kanıtıdır.

### ⚠️ Uyarı: Tehlikeli Bölge

Bu program eğitim amaçlıdır. Gerçek uygulamalarda **rastgele bellek adreslerini okumak**:

- **Segmentation fault** (program çökmesi) ile sonuçlanabilir
- İşletim sistemi bunu güvenlik ihlali olarak algılayabilir
- Modern işletim sistemleri **ASLR** (Address Space Layout Randomization) kullanarak bunu zorlaştırır
- **Asla** başka programların belleğini okumaya çalışmayın

Bu örneğin amacı, pointer'ın belleğe nasıl doğrudan eriştiğini **kavramsal olarak** göstermektir.

---

## 10. Pointer Kullanırken Yapılan Hatalar

### Hata 1: Başlatılmamış Pointer

```c
int *ptr;        // ptr çöp bir adres tutuyor!
*ptr = 10;       // ❌ KIYAMET — bilinmeyen bir adrese yazıyorsunuz
```

**Çözüm:** Pointer'ı her zaman ya bir adresle ya da `NULL` ile başlatın:

```c
int *ptr = NULL;       // Güvenli — hiçbir yeri göstermiyor
int sayi = 5;
ptr = &sayi;           // Şimdi güvenli bir adresi gösteriyor
```

### Hata 2: NULL Pointer'ı Dereference Etmek

```c
int *ptr = NULL;
*ptr = 10;           // ❌ Segmentation fault!
```

`NULL`, "hiçbir yeri göstermiyorum" demektir. Hiçbir yere gidip değer yazmak → çökme.

**Çözüm:** Kullanmadan önce kontrol edin:

```c
if(ptr != NULL){
    *ptr = 10;       // ✅ Güvenli
}
```

### Hata 3: Yanlış Tip Eşleşmesi

```c
double pi = 3.14;
int *ptr = &pi;      // ⚠️ Uyarı — double adresini int pointer'a atıyorsunuz
```

**Çözüm:** Pointer tipi, gösterdiği değişkenin tipiyle eşleşmeli:

```c
double pi = 3.14;
double *ptr = &pi;   // ✅ Doğru
```

### Hata 4: Fonksiyon İçi Yerel Değişkenin Adresini Döndürmek

```c
int *tehlikeliFonksiyon(){
    int x = 42;
    return &x;       // ❌ x fonksiyon bitince yok olur!
}
```

Fonksiyon bitince `x` bellekten silinir. Döndürülen adres artık geçersizdir — o adreste ne olduğu belirsizdir.

---

## 11. Özet Tablosu

| İfade | Okunuşu | Anlamı | Örnek Sonuç |
|-------|---------|--------|-------------|
| `int sayi = 5;` | "sayi 5'tir" | Değişken tanımla, değer ata | — |
| `int *ptr;` | "ptr bir int pointer'dır" | Pointer değişken tanımla | — |
| `ptr = &sayi;` | "ptr, sayi'nin adresini tutsun" | Adres ata | — |
| `sayi` | "sayi'nin değeri" | Değeri oku | `5` |
| `&sayi` | "sayi'nin adresi" | Adresi al | `0x5a3c` |
| `ptr` | "ptr'nin tuttuğu adres" | Pointer'ın değeri | `0x5a3c` |
| `*ptr` | "ptr'nin gösterdiği değer" | Dereference | `5` |
| `&ptr` | "ptr'nin kendi adresi" | Pointer'ın kendi konumu | `0x5a40` |
| `*ptr = 10` | "ptr'nin gösterdiği yere 10 yaz" | Dolaylı değer atama | sayi artık 10 |
| `ptr++` | "ptr'yi bir eleman ilerlet" | Pointer aritmetiği | Bir sonraki eleman |

---

## 12. Anahtar Kavramlar

| Kavram | Açıklama |
|--------|----------|
| **Pointer** | Bir bellek adresini tutan değişken |
| **& (address-of)** | Değişkenin bellekteki adresini verir |
| **\* (dereference)** | Adresin gösterdiği değere erişir |
| **NULL** | "Hiçbir yeri göstermiyorum" anlamına gelen özel değer |
| **Pointer aritmetiği** | `ptr + n` → n eleman ileriye git (byte değil, eleman!) |
| **Call by reference** | Fonksiyona adres göndererek orijinal veriyi değiştirme |
| **Segmentation fault** | Erişim izni olmayan bellek adresine erişme hatası |

---

## 13. Alıştırmalar

1. İki `int` değişken tanımlayın. Pointer kullanarak (geçici değişken olmadan) ikisinin değerini **takas** eden bir fonksiyon yazın: `void takas(int *a, int *b)`

2. Bir `int` dizisi ve boyutunu alan, dizinin **en büyük elemanının adresini** döndüren bir fonksiyon yazın: `int *enBuyukBul(int *dizi, int boyut)`

3. Bir string alan ve içindeki **sesli harf sayısını** pointer aritmetiği ile sayan bir fonksiyon yazın: `int sesliSay(char *str)`

4. Bir `int` dizisini ve boyutunu alan, tüm elemanları **tersine çeviren** bir fonksiyon yazın. Sadece pointer kullanın, indeks (`[]`) kullanmayın.

> Bir sonraki derste: **Dinamik Bellek Yönetimi — malloc, calloc, realloc ve free**
