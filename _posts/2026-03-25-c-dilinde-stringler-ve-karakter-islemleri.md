---
layout: post
title: "C Dilinde Stringler: Karakterlerin Gizli Dünyası"
date: 2026-03-25 12:00:00 +0300
categories: algoritma-ve-programlama-ii
---

C dilinde bir string nedir, biliyor musunuz? Aslında **string diye bir veri tipi yoktur.** Evet, doğru okudunuz. Python'da `str`, Java'da `String` sınıfı var — ama C'de string, sadece **sonunda `\0` (null karakter) bulunan bir karakter dizisidir.** Bu basit gerçek, C'yi hem güçlü hem tehlikeli kılan şeyin ta kendisidir.

Bugün stringlerin nasıl tanımlandığını, karakter kütüphanesinin sunduğu süper güçleri, tür dönüşüm fonksiyonlarını, giriş/çıkış işlemlerini ve string kütüphanesinin tüm fonksiyonlarını öğreneceğiz.

---

## 1. String Tanımlama — 4 Farklı Yol

Aynı kelimeyi C'de 4 farklı şekilde tanımlayabilirsiniz. Her biri aynı sonucu verir, ama farklı bir bakış açısı sunar:

```c
#include <stdio.h>

int main() {
    // Yöntem 1: String literali ile
    char kelime[] = "Alper";

    // Yöntem 2: Karakter dizisi olarak (tek tek karakterler)
    char kelime2[] = {'A', 'l', 'p', 'e', 'r', '\0'};

    // Yöntem 3: ASCII kodları ile
    char kelime3[] = {65, 108, 112, 101, 114, 0};

    // Yöntem 4: Pointer ile
    char* kelime4 = "Alper";

    printf("%s\n%s\n%s\n%s\n", kelime, kelime2, kelime3, kelime4);

    // Hepsinin ilk elemanını okuyalım
    printf("%c\n", kelime[0]);   // A
    printf("%c\n", kelime2[0]);  // A
    printf("%c\n", kelime3[0]);  // A
    printf("%c\n", kelime4[0]);  // A

    return 0;
}
```

### Her Yöntemin Açıklaması

| Yöntem | Kod | Ne Oluyor? |
|--------|-----|------------|
| String literali | `char kelime[] = "Alper";` | Derleyici `\0`'ı **otomatik** ekler |
| Karakter dizisi | `{'A','l','p','e','r','\0'}` | `\0`'ı **siz** eklemelisiniz! |
| ASCII kodları | `{65, 108, 112, 101, 114, 0}` | Her karakter aslında bir sayıdır |
| Pointer | `char* kelime4 = "Alper";` | Sadece okuma amaçlı, **değiştirilemez** |

> **Kritik fark:** İlk üç yöntemde `kelime[0] = 'B';` yazabilirsiniz — string değişir. Ama 4. yöntemde (`char*`) bunu yaparsanız program **çöker**! Çünkü pointer, hafızanın salt okunur (read-only) bölgesini gösterir.

### `\0` — Null Karakter Neden Bu Kadar Önemli?

C'de stringin nerede bittiğini gösteren tek şey `\0` karakteridir (ASCII değeri: 0). Eğer `\0` yoksa, `printf("%s")` hafızada rastgele çöp veriler bulana kadar okumaya devam eder — bu **tanımsız davranış** (undefined behavior) denen o korkunç şeydir.

```
Bellekte "Alper" stringi:

İndeks:  [0]  [1]  [2]  [3]  [4]  [5]
Değer:    A    l    p    e    r   \0
ASCII:   65   108  112  101  114   0
                                   ↑
                              String burada biter!
```

---

## 2. Karakter Kütüphanesi (`<ctype.h>`) — Dedektiflik Zamanı

`<ctype.h>` kütüphanesi, bir karakterin ne olduğunu sorgulamanızı sağlar: harf mi, rakam mı, büyük mü, küçük mü? Şimdi bunu bir **şifre çözme** uygulamasıyla öğrenelim.

### Şifre Çözme: Rakamları Ayıklama

Elimizde şifrelenmiş bir metin var: `"A4l8p1er987K2ah82ra2ma9n"`. İçindeki rakamları atıp sadece harfleri çıkarsak gerçek isim ortaya çıkar:

```c
#include <stdio.h>
#include <ctype.h>

int main() {
    char karakterler[] = "A4l8p1er987K2ah82ra2ma9n";
    int sayac = 0;

    while (karakterler[sayac] != '\0') {
        if (isalpha(karakterler[sayac])) {  // Harf mi?
            printf("%c", karakterler[sayac]);
        }
        sayac++;
    }

    printf("\n");  // Çıktı: AlperKahraman
    return 0;
}
```

Aynı işi `isdigit()` ile ters mantıkla da yapabilirdik:

```c
if (isdigit(karakterler[sayac]) == 0) {  // Rakam DEĞİLSE
    printf("%c", karakterler[sayac]);
}
```

> Her iki yaklaşım da aynı sonucu verir — ama `isalpha()` ile sormak daha **okunabilir** bir koddur. "Bu harf mi?" sorusu, "Bu rakam değil mi?" sorusundan daha nettir.

### Karakter Sınıflandırma: Tam Analiz

Her karakterin türünü tespit eden bir program:

```c
#include <stdio.h>
#include <ctype.h>

int main() {
    char karakterler[] = "A4l8p1er987K2ah82ra2ma9n";
    int sayac = 0;

    while (karakterler[sayac] != '\0') {
        if (islower(karakterler[sayac])) {
            printf("%c - Küçük harf\n", karakterler[sayac]);
        } else if (isupper(karakterler[sayac])) {
            printf("%c - Büyük harf\n", karakterler[sayac]);
        } else if (isdigit(karakterler[sayac])) {
            printf("%c - Rakam\n", karakterler[sayac]);
        }
        sayac++;
    }

    return 0;
}
```

Çıktı:

```
A - Büyük harf
4 - Rakam
l - Küçük harf
8 - Rakam
p - Küçük harf
...
```

### Büyük/Küçük Harf Dönüşümü

```c
#include <stdio.h>
#include <ctype.h>

int main() {
    // Hepsini BÜYÜK harfe çevir
    char metin[] = "AlPeR kAhRaman";
    int i = 0;

    while (metin[i] != '\0') {
        if (islower(metin[i])) {
            metin[i] = toupper(metin[i]);
        }
        i++;
    }
    printf("%s\n", metin);  // ALPER KAHRAMAN

    // Hepsini küçük harfe çevir
    char metin2[] = "AlPeR kAhRaman";
    i = 0;

    while (metin2[i] != '\0') {
        if (isupper(metin2[i])) {
            metin2[i] = tolower(metin2[i]);
        }
        i++;
    }
    printf("%s\n", metin2);  // alper kahraman

    return 0;
}
```

### `<ctype.h>` Fonksiyonları Tam Tablosu

| Fonksiyon | Ne Kontrol Eder? | Örnek (`true`) | Örnek (`false`) |
|-----------|------------------|:-:|:-:|
| `isalpha(c)` | Harf mi? | `'A'`, `'z'` | `'5'`, `'#'` |
| `isdigit(c)` | Rakam mı? | `'0'`, `'9'` | `'A'`, `'!'` |
| `isalnum(c)` | Harf veya rakam mı? | `'A'`, `'5'` | `'#'`, `' '` |
| `islower(c)` | Küçük harf mi? | `'a'`, `'z'` | `'A'`, `'5'` |
| `isupper(c)` | Büyük harf mi? | `'A'`, `'Z'` | `'a'`, `'5'` |
| `isspace(c)` | Boşluk karakteri mi? | `' '`, `'\t'`, `'\n'` | `'A'`, `'5'` |
| `ispunct(c)` | Noktalama işareti mi? | `';'`, `'#'`, `'!'` | `'A'`, `'5'` |
| `isprint(c)` | Yazdırılabilir mi? | `'A'`, `'$'`, `' '` | `'\n'`, `'\a'` |
| `isgraph(c)` | Görünür karakter mi? (boşluk hariç) | `'A'`, `'$'` | `' '`, `'\n'` |
| `iscntrl(c)` | Kontrol karakteri mi? | `'\n'`, `'\t'` | `'A'`, `'$'` |
| `toupper(c)` | Büyük harfe çevir | `'a'` → `'A'` | `'5'` → `'5'` |
| `tolower(c)` | Küçük harfe çevir | `'A'` → `'a'` | `'5'` → `'5'` |

### Detaylı Örnekler: Özel Karakter Türleri

```c
#include <stdio.h>
#include <ctype.h>

int main() {
    // isspace: Boşluk karakterleri
    printf("\\n %s\n", isspace('\n') ? "boşluk karakteridir" : "değildir");
    printf("\\t %s\n", isspace('\t') ? "boşluk karakteridir" : "değildir");
    printf("%%  %s\n\n", isspace('%') ? "boşluk karakteridir" : "değildir");

    // iscntrl: Kontrol karakterleri
    printf("\\n %s\n", iscntrl('\n') ? "kontrol karakteridir" : "değildir");
    printf("$  %s\n\n", iscntrl('$') ? "kontrol karakteridir" : "değildir");

    // ispunct: Noktalama işaretleri
    printf(";  %s\n", ispunct(';') ? "noktalama işaretidir" : "değildir");
    printf("Y  %s\n", ispunct('Y') ? "noktalama işaretidir" : "değildir");
    printf("#  %s\n\n", ispunct('#') ? "noktalama işaretidir" : "değildir");

    // isprint vs isgraph
    printf("$      %s\n", isprint('$') ? "yazdırılabilir" : "yazdırılamaz");
    printf("Alarm  %s\n", isprint('\a') ? "yazdırılabilir" : "yazdırılamaz");
    printf("Q      %s\n", isgraph('Q') ? "görünür karakter" : "değil");
    printf("Boşluk %s\n", isgraph(' ') ? "görünür karakter" : "değil");

    return 0;
}
```

> **`isprint` vs `isgraph` farkı:** Her ikisi de yazdırılabilirliği kontrol eder, ama `isgraph` boşluk karakterini **hariç tutar**. Yani boşluk `isprint`'e göre yazdırılabilir, `isgraph`'a göre değildir.

---

## 3. Tür Dönüşüm Fonksiyonları (`<stdlib.h>`) — Metni Sayıya Çevirme

Kullanıcıdan aldığınız veri her zaman **string** olarak gelir. Ama matematik işlemi yapmanız gerekiyorsa o stringi sayıya çevirmelisiniz. İşte `<stdlib.h>` kütüphanesinin sunduğu dönüşüm fonksiyonları:

### `atoi` — String'den Tam Sayıya (ASCII to Integer)

```c
#include <stdio.h>
#include <stdlib.h>

int main() {
    int i;

    i = atoi("2593");  // "2593" stringini int'e çevir

    printf("String → int: %d\n", i);           // 2593
    printf("593 çıkarılırsa: %d\n", i - 593);  // 2000

    return 0;
}
```

### `atof` — String'den Ondalıklı Sayıya (ASCII to Float)

```c
#include <stdio.h>
#include <stdlib.h>

int main() {
    double d;

    d = atof("99.0");  // "99.0" stringini double'a çevir

    printf("String → double: %.3f\n", d);       // 99.000
    printf("2'ye bölümü: %.3f\n", d / 2.0);     // 49.500

    return 0;
}
```

### `strtod` — Akıllı Dönüşüm (String to Double)

`atof`'tan farkı: string'in **sayı olmayan kısmını da ayırt edebilir**. Bu onu çok daha güçlü kılar:

```c
#include <stdio.h>
#include <stdlib.h>

int main() {
    const char *string = "51.2% kabul edildi";
    char *kalanKisim;

    double d = strtod(string, &kalanKisim);

    printf("Orijinal: \"%s\"\n", string);
    printf("Okunan sayı: %.2f\n", d);           // 51.20
    printf("Kalan kısım: \"%s\"\n", kalanKisim); // "% kabul edildi"

    return 0;
}
```

> **`strtod` nasıl çalışır?** String'in başından itibaren sayı olarak okuyabildiği kadar okur, durduğu yerin adresini `kalanKisim` pointer'ına yazar. Böylece hem sayıyı hem geri kalan metni elde edersiniz.

### Dönüşüm Fonksiyonları Karşılaştırması

| Fonksiyon | Dönüş Tipi | Kalan Kısmı Verir mi? | Hata Kontrolü |
|-----------|------------|:---------------------:|:-------------:|
| `atoi("123")` | `int` | ❌ | ❌ Zayıf |
| `atof("3.14")` | `double` | ❌ | ❌ Zayıf |
| `strtod("3.14abc", &ptr)` | `double` | ✅ | ✅ Güçlü |
| `strtol("123abc", &ptr, 10)` | `long` | ✅ | ✅ Güçlü |

> **Profesyonel kod yazarken** `atoi/atof` yerine `strtol/strtod` tercih edin. Çünkü `atoi("")` veya `atoi("abc")` gibi hatalı girişlerde 0 döndürür — gerçek bir 0 ile hata arasında ayrım yapamazsınız!

---

## 4. Standart Giriş/Çıkış Fonksiyonları — Karakter Karakter Okuma

### `getchar` ve `putchar` — Tek Karakter İşlemleri

```c
#include <stdio.h>

int main() {
    char c;
    char cumle[80];
    int i = 0;

    puts("Metin girişi yapınız:");

    // Enter'a basılana kadar karakterleri tek tek oku
    while ((c = getchar()) != '\n') {
        if (i < 79) {           // Dizi taşmasını önle!
            cumle[i++] = c;
        }
    }

    cumle[i] = '\0';  // String'i sonlandır

    puts("\nGirilen metin:");
    puts(cumle);

    return 0;
}
```

### Standart G/Ç Fonksiyonları Tablosu

| Fonksiyon | Ne Yapar? | Örnek |
|-----------|-----------|-------|
| `getchar()` | Klavyeden **tek karakter** okur | `c = getchar();` |
| `putchar(c)` | Ekrana **tek karakter** yazar | `putchar('A');` |
| `gets(s)` | Satır sonuna kadar string okur | ⚠️ **Kullanmayın!** (güvensiz) |
| `puts(s)` | String'i yazdırır + satır sonu ekler | `puts("Merhaba");` |
| `sprintf(s, fmt, ...)` | `printf` gibi ama **string'e** yazar | `sprintf(buf, "%d", 42);` |
| `sscanf(s, fmt, ...)` | `scanf` gibi ama **string'den** okur | `sscanf("42", "%d", &n);` |

> ⚠️ **`gets()` fonksiyonu C11 standardında kaldırılmıştır!** Tampon taşmasına (buffer overflow) karşı hiçbir koruma sağlamaz. Yerine `fgets(s, boyut, stdin)` kullanın.

### `sprintf` ve `sscanf` — String Üzerinde Formatlı İşlem

```c
char tampon[100];
int yas = 21;
float not_ort = 3.45;

// sprintf: Değişkenleri string'e yaz
sprintf(tampon, "Yaş: %d, Ortalama: %.2f", yas, not_ort);
printf("%s\n", tampon);  // "Yaş: 21, Ortalama: 3.45"

// sscanf: String'den değişkenlere oku
char veri[] = "Alper 21 3.45";
char isim[20];
int y;
float n;
sscanf(veri, "%s %d %f", isim, &y, &n);
printf("%s → yaş: %d, not: %.2f\n", isim, y, n);
```

---

## 5. String İşleme Fonksiyonları (`<string.h>`)

`<string.h>` kütüphanesi, stringlerle çalışmanın **İsviçre çakısıdır**: kopyalama, birleştirme, karşılaştırma, arama — her şey burada.

### Kopyalama ve Birleştirme

```c
#include <stdio.h>
#include <string.h>

int main() {
    char hedef[50];
    char kaynak[] = "Merhaba";

    // strcpy: Komple kopyala
    strcpy(hedef, kaynak);
    printf("strcpy: %s\n", hedef);  // Merhaba

    // strncpy: En fazla n karakter kopyala (güvenli)
    char hedef2[50];
    strncpy(hedef2, "Dünya", 3);
    hedef2[3] = '\0';  // strncpy null eklemeyebilir!
    printf("strncpy: %s\n", hedef2);  // Dün

    // strcat: Sona ekle (birleştir)
    strcat(hedef, " Dünya");
    printf("strcat: %s\n", hedef);  // Merhaba Dünya

    // strncat: En fazla n karakter ekle (güvenli)
    char mesaj[50] = "Selam";
    strncat(mesaj, " Dünyalılar!!!", 9);
    printf("strncat: %s\n", mesaj);  // Selam Dünyalıl

    return 0;
}
```

| Fonksiyon | İşlevi | Güvenli mi? |
|-----------|--------|:-----------:|
| `strcpy(s1, s2)` | s2'yi s1'e kopyalar | ❌ Taşma riski |
| `strncpy(s1, s2, n)` | En fazla n karakter kopyalar | ✅ Ama `\0` eklemeyebilir! |
| `strcat(s1, s2)` | s2'yi s1'in sonuna ekler | ❌ Taşma riski |
| `strncat(s1, s2, n)` | En fazla n karakter ekler | ✅ Null ekler |

> **Altın kural:** `strcpy` ve `strcat` yerine **her zaman** `strncpy` ve `strncat` kullanın. Tampon taşması (buffer overflow), tarihin en büyük güvenlik açıklarının sebebidir.

### Karşılaştırma

```c
#include <stdio.h>
#include <string.h>

int main() {
    char s1[] = "Alper";
    char s2[] = "Alper";
    char s3[] = "Ahmet";

    // strcmp: Tam karşılaştırma
    printf("strcmp: %d\n", strcmp(s1, s2));  // 0 (eşit)
    printf("strcmp: %d\n", strcmp(s1, s3));  // > 0 (s1 > s3)

    // strncmp: İlk n karakter karşılaştır
    printf("strncmp: %d\n", strncmp(s1, s3, 1));  // 0 (ilk harf aynı: 'A')
    printf("strncmp: %d\n", strncmp(s1, s3, 2));  // > 0 (ikinci harf farklı)

    return 0;
}
```

| Dönüş Değeri | Anlamı |
|:---:|--------|
| `0` | Stringler **eşit** |
| `< 0` | s1, s2'den **küçük** (sözlük sırasında önce) |
| `> 0` | s1, s2'den **büyük** (sözlük sırasında sonra) |

> **Dikkat:** `==` operatörü ile string karşılaştırması **yapamazsınız!** `s1 == s2` stringlerin içeriğini değil, **adreslerini** karşılaştırır. Her zaman `strcmp` kullanın.

### Arama Fonksiyonları

```c
#include <stdio.h>
#include <string.h>

int main() {
    char metin[] = "Algoritma ve Programlama";

    // strchr: Karakter ara (ilk bulunan)
    char *sonuc = strchr(metin, 'v');
    if (sonuc) printf("strchr: '%s'\n", sonuc);  // "ve Programlama"

    // strrchr: Karakter ara (sondan)
    char *sondan = strrchr(metin, 'a');
    if (sondan) printf("strrchr: '%s'\n", sondan);  // "a"

    // strstr: Alt string ara
    char *alt = strstr(metin, "Program");
    if (alt) printf("strstr: '%s'\n", alt);  // "Programlama"

    // strlen: String uzunluğu
    printf("strlen: %lu\n", strlen(metin));  // 24

    return 0;
}
```

### Arama Fonksiyonları Tam Tablosu

| Fonksiyon | Ne Yapar? | Dönüş |
|-----------|-----------|-------|
| `strchr(s, c)` | `c` karakterinin **ilk** konumunu bulur | Pointer veya `NULL` |
| `strrchr(s, c)` | `c` karakterinin **son** konumunu bulur | Pointer veya `NULL` |
| `strstr(s1, s2)` | `s2` alt stringini `s1` içinde arar | Pointer veya `NULL` |
| `strpbrk(s1, s2)` | `s2`'deki herhangi bir karakteri `s1`'de arar | Pointer veya `NULL` |
| `strcspn(s1, s2)` | `s1`'de `s2` karakterlerinden **hiçbirini içermeyen** kısmın uzunluğu | `size_t` |
| `strspn(s1, s2)` | `s1`'de **sadece** `s2` karakterlerinden oluşan kısmın uzunluğu | `size_t` |
| `strtok(s1, s2)` | String'i `s2`'deki ayraçlara göre **parçalara** böler | Pointer veya `NULL` |
| `strlen(s)` | String uzunluğunu döndürür (`\0` hariç) | `size_t` |

### `strtok` — String'i Parçalara Bölme

`strtok`, bir string'i belirli ayraç karakterlerine göre parçalara (token) ayırır. **Cümleyi kelimelere bölmek** için mükemmeldir:

```c
#include <stdio.h>
#include <string.h>

int main() {
    char cumle[] = "Algoritma,ve,Programlama,II";
    char *token;

    // İlk çağrı: string'i ver
    token = strtok(cumle, ",");

    while (token != NULL) {
        printf("Token: %s\n", token);
        // Sonraki çağrılar: NULL ver
        token = strtok(NULL, ",");
    }

    return 0;
}
```

Çıktı:

```
Token: Algoritma
Token: ve
Token: Programlama
Token: II
```

> ⚠️ **`strtok` orijinal string'i değiştirir!** Ayraç karakterlerini `\0` ile değiştirir. Orijinal string'e ihtiyacınız varsa önce kopyasını alın.

---

## 6. Hafıza Fonksiyonları — Düşük Seviye Güç

`<string.h>` içindeki `mem*` fonksiyonları, **ham hafıza blokları** üzerinde çalışır. Sadece stringlerle değil, herhangi bir veri tipiyle kullanılabilirler:

| Fonksiyon | Ne Yapar? |
|-----------|-----------|
| `memcpy(s1, s2, n)` | `s2`'den `s1`'e `n` byte kopyalar (çakışma olmamalı) |
| `memmove(s1, s2, n)` | `s2`'den `s1`'e `n` byte kopyalar (çakışma güvenli) |
| `memcmp(s1, s2, n)` | İlk `n` byte'ı karşılaştırır |
| `memchr(s, c, n)` | İlk `n` byte içinde `c`'yi arar |
| `memset(s, c, n)` | İlk `n` byte'ı `c` değeriyle doldurur |

```c
#include <stdio.h>
#include <string.h>

int main() {
    char kaynak[] = "Merhaba Dünya";
    char hedef[50];

    // memcpy: 7 byte kopyala
    memcpy(hedef, kaynak, 7);
    hedef[7] = '\0';
    printf("memcpy: %s\n", hedef);  // Merhaba

    // memset: Diziyi sıfırla
    int dizi[10];
    memset(dizi, 0, sizeof(dizi));  // Tüm elemanlar 0
    printf("memset: %d\n", dizi[5]);  // 0

    // memcmp: İlk 3 byte karşılaştır
    int sonuc = memcmp("ABC", "ABD", 3);
    printf("memcmp: %d\n", sonuc);  // < 0 (C < D)

    return 0;
}
```

> **`memcpy` vs `memmove`:** Kaynak ve hedef hafıza bölgeleri **çakışıyorsa** (overlapping), `memcpy` yanlış sonuç verebilir — `memmove` güvenlidir çünkü önce geçici bir alana kopyalar.

### `strerror` — Hata Mesajı Çözümleme

```c
#include <stdio.h>
#include <string.h>

int main() {
    printf("Hata 2: %s\n", strerror(2));   // No such file or directory
    printf("Hata 5: %s\n", strerror(5));   // Input/output error
    printf("Hata 12: %s\n", strerror(12)); // Cannot allocate memory

    return 0;
}
```

---

## Özet: Bu Derste Öğrendiklerimiz

| Konu | Kütüphane | Anahtar Fonksiyonlar |
|------|-----------|---------------------|
| String tanımlama | — | `char[]`, `char*`, `\0` |
| Karakter kontrol | `<ctype.h>` | `isalpha`, `isdigit`, `toupper`, `tolower` |
| Tür dönüşümü | `<stdlib.h>` | `atoi`, `atof`, `strtod` |
| Giriş/Çıkış | `<stdio.h>` | `getchar`, `puts`, `sprintf`, `sscanf` |
| String işleme | `<string.h>` | `strcpy`, `strcat`, `strcmp`, `strlen` |
| String arama | `<string.h>` | `strchr`, `strstr`, `strtok` |
| Hafıza işlemleri | `<string.h>` | `memcpy`, `memset`, `memcmp` |

> **Bir cümleyle:** C'de string, sonunda `\0` olan bir karakter dizisidir. Bu basit yapının üzerine kurulu yüzlerce fonksiyon, C'nin metin işleme gücünü oluşturur. Ama bu güç, sorumluluk getirir — tampon taşması, null karakter unutma ve pointer hataları, C programcısının en büyük düşmanlarıdır.
