---
layout: post
title: "C'de Tek Boyutlu Dizi ile Tekrar Eden Sayıları Eleme (10-100 Aralığı)"
date: 2026-03-04
categories: algoritma-ve-programlama-ii
---

Bu derste, tek boyutlu bir dizi kullanarak tekrar eden sayıları eleme problemini adım adım çözeceğiz. Hem verdiğiniz çözümü analiz edeceğiz hem de daha efektif alternatifleri karşılaştıracağız.

> **Problem:** Kullanıcı 10 ile 100 arasında toplam 20 sayı girer. Her sayı girildiği anda, daha önce girilmediyse ekrana yazdırılır.

---

## 1) Problemin Mantığı

İstediğimiz davranış şu:

1. Her girişte sayı aralık kontrolünden geçmeli (`10 <= sayi <= 100`).
2. Sayı daha önce girildiyse tekrar yazdırılmamalı.
3. İlk kez giriliyorsa ekrana anında yazdırılmalı.
4. En kötü durumda 20 farklı sayı girilebileceği için bunu desteklemeli.

Bu problem için en temel yaklaşım:

- Girilen benzersiz değerleri tek bir dizide tut.
- Yeni gelen sayıyı, dizideki mevcut benzersiz değerlerle karşılaştır.
- Yoksa ekle, varsa geç.

---

## 2) Verilen Çözümün Analizi

Verdiğiniz kod çalışır; ancak birkaç noktada gereksiz maliyet ve küçük tasarım problemi var:

### Güçlü yanları

- Aralık kontrolü doğru.
- Tekrar kontrolü mantığı doğru.
- Yeni sayı ilk kez girildiyse yazdırma işlemi doğru.

### İyileştirme gereken yanları

1. **Tüm dizi boyunca arama yapılıyor (`0..19`)**
   - Oysa sadece doldurulan kısım (`0..siradakiIndex-1`) taranmalı.
2. **Sıfırla başlatma (`{0}`) gereksiz güven hissi veriyor**
   - Problem aralığı 10-100 olduğu için `0` sentineli tesadüfen güvenli ama yöntemsel olarak temiz değil.
3. **Sonda tüm 20 elemanı yazdırmak anlamsız**
   - Kullanılmayan yerler için anlamsız değerler görünebilir.
4. **`bool kontrol` her turda resetleniyor**
   - Doğru ama daha okunur bir yapı ile fonksiyonlaştırılabilir.

---

## 3) Ana Çözüm (En Küçük Dizi, Temiz Yaklaşım)

Bu çözümde sadece **20 elemanlı tek dizi** kullanıyoruz. Çünkü en fazla 20 giriş var; benzersiz değerler de en fazla 20 olabilir.

```c
#include <stdio.h>
#include <stdbool.h>

#define GIRIS_ADEDI 20
#define MIN 10
#define MAX 100

int main(void)
{
    int benzersiz[GIRIS_ADEDI];   // Sadece tek boyutlu ve minimal dizi
    int benzersizAdet = 0;

    for (int i = 0; i < GIRIS_ADEDI; i++) {
        int sayi;

        do {
            printf("%d. sayiyi giriniz (%d-%d): ", i + 1, MIN, MAX);
            scanf("%d", &sayi);
        } while (sayi < MIN || sayi > MAX);

        bool tekrar = false;

        // Sadece dolu kısmı tara
        for (int j = 0; j < benzersizAdet; j++) {
            if (benzersiz[j] == sayi) {
                tekrar = true;
                break;
            }
        }

        if (!tekrar) {
            benzersiz[benzersizAdet] = sayi;
            benzersizAdet++;
            printf("Yeni sayi: %d\n", sayi);
        }
    }

    printf("\nBenzersiz sayilar: ");
    for (int i = 0; i < benzersizAdet; i++) {
        printf("%d ", benzersiz[i]);
    }
    printf("\n");

    return 0;
}
```

### Neden bu çözüm doğru?

- Her yeni sayı, daha önceki benzersizler içinde aranıyor.
- Bulunursa tekrar sayılıyor, yazdırılmıyor.
- Bulunmazsa diziye ekleniyor ve anında yazdırılıyor.

### Karmaşıklık

- Zaman: En kötü durumda yaklaşık `20 * 20` karşılaştırma (O(n²), n=20 olduğu için pratikte küçük)
- Alan: `int[20]` (minimal ve yeterli)

---

## 4) Daha Efektif Alternatif 1: Doğrudan Erişim Tablosu (`seen`)

Hız açısından daha iyi yöntem: sayıyı doğrudan indeks olarak kullanmak.

- Aralık 10-100 → toplam 91 sayı var.
- `seen[91]` dizisinde `sayi - 10` indeksine bakılır.

```c
#include <stdio.h>
#include <stdbool.h>

#define GIRIS_ADEDI 20
#define MIN 10
#define MAX 100
#define ARALIK (MAX - MIN + 1)  // 91

int main(void)
{
    bool seen[ARALIK] = { false }; // Tek boyutlu dizi

    for (int i = 0; i < GIRIS_ADEDI; i++) {
        int sayi;

        do {
            printf("%d. sayiyi giriniz (%d-%d): ", i + 1, MIN, MAX);
            scanf("%d", &sayi);
        } while (sayi < MIN || sayi > MAX);

        int idx = sayi - MIN;
        if (!seen[idx]) {
            seen[idx] = true;
            printf("Yeni sayi: %d\n", sayi);
        }
    }

    return 0;
}
```

### Avantaj

- Kontrol O(1): tek adımda "daha önce girildi mi" öğrenilir.

### Dezavantaj

- `20` yerine `91` elemanlık dizi gerekir.
- Bellek hassasiyeti varsa minimal değildir.

---

## 5) Daha Efektif Alternatif 2: Bitset (Hem Hızlı Hem Bellek-Verimli)

`seen[91]` yerine bit düzeyinde işaretleme yapılır.

- 91 bit ≈ 12 byte yeter.
- C'de pratikte 3 adet `unsigned int` ile temsil edebiliriz (platforma bağlı olarak 96 bit civarı).

```c
#include <stdio.h>

#define GIRIS_ADEDI 20
#define MIN 10
#define MAX 100
#define ARALIK (MAX - MIN + 1)

int main(void)
{
    unsigned int bitset[3] = {0}; // 3 * 32 = 96 bit (91 bit yeter)

    for (int i = 0; i < GIRIS_ADEDI; i++) {
        int sayi;

        do {
            printf("%d. sayiyi giriniz (%d-%d): ", i + 1, MIN, MAX);
            scanf("%d", &sayi);
        } while (sayi < MIN || sayi > MAX);

        int k = sayi - MIN;
        int word = k / 32;
        int bit  = k % 32;

        if ((bitset[word] & (1u << bit)) == 0) {
            bitset[word] |= (1u << bit);
            printf("Yeni sayi: %d\n", sayi);
        }
    }

    return 0;
}
```

### Ne zaman tercih edilir?

- Hız + düşük bellek birlikte isteniyorsa.
- Düşük seviyeli programlama pratiği yapmak için çok iyi bir egzersizdir.

---

## 6) Çözümlerin Karşılaştırması

| Yöntem | Zaman | Bellek | Okunabilirlik | Not |
|---|---|---|---|---|
| `benzersiz[20]` + lineer arama | O(n²) (n=20) | Düşük | Çok iyi | Ders için en temiz/minimal yaklaşım |
| `seen[91]` | O(n) | Orta | Çok iyi | Daha hızlı, daha fazla alan |
| Bitset | O(n) | Çok düşük | Orta | En teknik ve verimli çözüm |

**Ders önerisi:**
- Önce `benzersiz[20]` yaklaşımını öğretmek en doğru adım.
- Sonra `seen[91]` ve bitset ile optimizasyon fikrine geçmek pedagojik olarak güçlü olur.

---

## 7) Bu Sorunun Üzerine Ekleyebileceğiniz Yeni Sorular (Çözümleriyle)

Bu derse ileride yeni sorular ekleyeceğiniz için aynı temada 3 ek soru bırakıyorum.

## Soru 1 — Kaç farklı sayı girildi?

**İstenen:** 20 giriş sonunda farklı sayı adedini yazdır.

### Çözüm fikri
- Ana çözümdeki `benzersizAdet` zaten bu bilgiyi tutuyor.
- Sonda `printf("Farkli sayi adedi: %d", benzersizAdet);` yeterli.

---

## Soru 2 — En çok tekrar edilen sayı hangisi?

**İstenen:** 10-100 aralığında en çok girilen sayıyı ve tekrar sayısını bul.

### Çözüm (frekans dizisi ile)

```c
#include <stdio.h>

#define GIRIS_ADEDI 20
#define MIN 10
#define MAX 100
#define ARALIK (MAX - MIN + 1)

int main(void)
{
    int frekans[ARALIK] = {0};

    for (int i = 0; i < GIRIS_ADEDI; i++) {
        int sayi;
        do {
            printf("%d. sayi (%d-%d): ", i + 1, MIN, MAX);
            scanf("%d", &sayi);
        } while (sayi < MIN || sayi > MAX);

        frekans[sayi - MIN]++;
    }

    int enCok = 0;
    int deger = MIN;

    for (int i = 0; i < ARALIK; i++) {
        if (frekans[i] > enCok) {
            enCok = frekans[i];
            deger = i + MIN;
        }
    }

    printf("En cok tekrar eden sayi: %d (%d kez)\n", deger, enCok);
    return 0;
}
```

---

## Soru 3 — Sıralı benzersiz liste üret

**İstenen:** Tekrarları eleyip kalan benzersiz sayıları küçükten büyüğe yazdır.

### Çözüm adımları

1. `benzersiz[20]` yöntemiyle tekrarları ele.
2. `benzersizAdet` kadar eleman için basit bir sıralama (selection/bubble) uygula.
3. Sıralı listeyi yazdır.

Bu soru, dizi + arama + sıralama konularını tek bir problemde birleştirdiği için çok iyi bir haftalık ödev olur.

---

## 8) Kapanış

Bu problem küçük görünüyor ama C öğrenirken kritik üç beceriyi aynı anda geliştiriyor:

- doğrulama (input validation),
- tekrar kontrolü (duplicate detection),
- bellek/verimlilik dengesi (trade-off).

Bir sonraki adımda bu yapıyı fonksiyonlara ayırıp (`sayiOku`, `dahaOnceVarMi`, `benzersizEkle`) daha modüler hale getirebiliriz. Böylece kod hem sınavlık hem gerçek proje kalitesine yaklaşır.
