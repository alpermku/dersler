---
layout: post
title: "C'de 2 Boyutlu Diziler, Fonksiyonlar ve Konsol Oyunu Geliştirme"
date: 2026-03-11
categories: algoritma-ve-programlama-ii
---

Bu derste C'de **2 boyutlu dizilerin** nasıl çalıştığını, bu dizilerin **fonksiyonlara nasıl parametre olarak geçirildiğini** ve tüm bu bilgiyi birleştirerek **konsol tabanlı bir oyun** nasıl yapıldığını adım adım öğreneceğiz.

Önce temel versiyonu inceleyeceğiz, sonra onu gerçek bir oyuna dönüştüreceğiz.

---

## 1. 2 Boyutlu Dizi Nedir?

Tek boyutlu dizi bir **satır** gibidir:

```
int notlar[5] = {80, 90, 70, 85, 95};

→  [80] [90] [70] [85] [95]
```

2 boyutlu dizi ise bir **tablo** (matris) gibidir — satır ve sütunlardan oluşur:

```
int tablo[3][4];

→  Satır 0:  [ ][ ][ ][ ]
   Satır 1:  [ ][ ][ ][ ]
   Satır 2:  [ ][ ][ ][ ]
```

### Bellekteki Yerleşim

C'de 2 boyutlu diziler bellekte aslında **tek satır halinde** (row-major order) tutulur:

```
tablo[3][4] bellekte şöyle durur:

[0][0] [0][1] [0][2] [0][3] [1][0] [1][1] [1][2] [1][3] [2][0] [2][1] [2][2] [2][3]
|______ Satır 0 ______| |______ Satır 1 ______| |______ Satır 2 ______|
```

Bu bilgi önemli çünkü bir fonksiyona 2 boyutlu dizi geçirirken **sütun sayısının bilinmesi zorunludur** — derleyici bellekteki atlama miktarını hesaplamak için buna ihtiyaç duyar.

### Erişim

```c
tablo[satır][sütun]
```

- İlk indeks → **satır** (dikey, yukarıdan aşağı)
- İkinci indeks → **sütun** (yatay, soldan sağa)
- İndeksler **0'dan** başlar

```
tablo[0][0] → Sol üst köşe
tablo[2][3] → Sağ alt köşe (3 satır, 4 sütun için)
```

---

## 2. Temel Uygulama — Karakter Hareket Ettirme

Aşağıdaki program, konsol ekranında **21×21'lik bir oyun alanı** oluşturur ve kullanıcının WASD tuşlarıyla bir karakteri hareket ettirmesini sağlar. Basit ama 2 boyutlu dizilerin ve fonksiyonların birlikte kullanımını mükemmel şekilde gösterir.

### Tam Kod

```c
#include <stdio.h>
#include <stdlib.h>
#define BOYUT 21

void ekranaBas(int satir, int sutun, char dizi[satir][sutun]);

int main() {

    char ekran[BOYUT][BOYUT] = {0};
    int x, y;
    int karSatir = 10, karSutun = 10;
    char basilanKarakter;

    // İlk ve son satırı yıldız karakterleri ile doldurur
    for(x = 0; x < BOYUT; x++){
        ekran[0][x] = '*';
        ekran[BOYUT-1][x] = '*';
    }

    // Orta satırları doldurur (kenarlar yıldız, içi boşluk)
    for(x = 1; x < BOYUT - 1; x++){
        for(y = 0; y < BOYUT; y++){
            if(y == 0 || y == BOYUT - 1){
                ekran[x][y] = '*';
            } else {
                ekran[x][y] = ' ';
            }
        }
    }

    // İlk ekran çizimi
    ekranaBas(BOYUT, BOYUT, ekran);

    // Karakteri başlangıç noktasına yerleştir
    ekran[karSatir][karSutun] = 'O';

    system("cls");
    ekranaBas(BOYUT, BOYUT, ekran);

    // Sonsuz oyun döngüsü
    while(1){
        basilanKarakter = getch();

        if(basilanKarakter == 'w' || basilanKarakter == 'W'){
            ekran[karSatir][karSutun] = ' ';
            karSatir--;
            ekran[karSatir][karSutun] = 'O';
            system("cls");
            ekranaBas(BOYUT, BOYUT, ekran);

        } else if(basilanKarakter == 's' || basilanKarakter == 'S'){
            ekran[karSatir][karSutun] = ' ';
            karSatir++;
            ekran[karSatir][karSutun] = 'O';
            system("cls");
            ekranaBas(BOYUT, BOYUT, ekran);

        } else if(basilanKarakter == 'a' || basilanKarakter == 'A'){
            ekran[karSatir][karSutun] = ' ';
            karSutun--;
            ekran[karSatir][karSutun] = 'O';
            system("cls");
            ekranaBas(BOYUT, BOYUT, ekran);

        } else if(basilanKarakter == 'd' || basilanKarakter == 'D'){
            ekran[karSatir][karSutun] = ' ';
            karSutun++;
            ekran[karSatir][karSutun] = 'O';
            system("cls");
            ekranaBas(BOYUT, BOYUT, ekran);
        }
    }

    return 0;
}

void ekranaBas(int satir, int sutun, char dizi[satir][sutun]){
    int x, y;
    for(x = 0; x < satir; x++){
        for(y = 0; y < sutun; y++){
            printf("%c ", dizi[x][y]);
        }
        printf("\n");
    }
}
```

---

### Satır Satır Detaylı Açıklama

#### Ön İşlemci ve Sabit Tanımı

```c
#include <stdio.h>    // printf, getch gibi giriş/çıkış fonksiyonları
#include <stdlib.h>   // system("cls") için
#define BOYUT 21      // Oyun alanı boyutu (21x21)
```

`#define BOYUT 21` bir **sembolik sabit** tanımlar. Kodun her yerinde `BOYUT` yazdığımızda derleyici bunu `21` ile değiştirir. Neden sabit kullanıyoruz?

- Boyutu değiştirmek istediğimizde **tek bir yeri** değiştirmemiz yeterli
- Kodda `21` yerine `BOYUT` yazmak **okunabilirliği** artırır
- **Sihirli sayı** (magic number) kullanmaktan kaçınmış oluruz

#### Fonksiyon Prototipi (İleri Bildirim)

```c
void ekranaBas(int satir, int sutun, char dizi[satir][sutun]);
```

Bu satır `main()` fonksiyonundan **önce** yazılmıştır. Neden? Çünkü C derleyicisi yukarıdan aşağıya okur. `main()` içinde `ekranaBas()` çağrıldığında, derleyicinin bu fonksiyonun var olduğunu ve parametre tiplerini bilmesi gerekir.

> **Kural:** Fonksiyon tanımı `main()`'den sonra yazılıyorsa, **prototip** (bildirim) `main()`'den önce yazılmalıdır.

#### 2 Boyutlu Dizi Oluşturma

```c
char ekran[BOYUT][BOYUT] = {0};
```

Bu satır ne yapıyor?

| Parça | Anlam |
|-------|-------|
| `char` | Her hücre bir karakter tutar (1 byte) |
| `ekran` | Dizinin adı |
| `[BOYUT][BOYUT]` | 21 satır × 21 sütun = 441 hücre |
| `= {0}` | **Tüm hücreleri sıfırla** (NULL karakteri, `'\0'`) |

`= {0}` kısmı çok önemli. Bunu yazmazsak, dizi **çöp değerlerle** (RAM'de o anda ne varsa) dolar. Ekrana basıldığında rastgele semboller görürsünüz.

#### Harita Oluşturma — Üst ve Alt Duvarlar

```c
for(x = 0; x < BOYUT; x++){
    ekran[0][x] = '*';           // İlk satırın tamamı → yıldız
    ekran[BOYUT-1][x] = '*';    // Son satırın tamamı → yıldız
}
```

Bu döngü, haritanın **üst ve alt kenarlarını** çizer:

```
Satır 0:   * * * * * * * * * * * * * * * * * * * * *
                        ...
Satır 20:  * * * * * * * * * * * * * * * * * * * * *
```

`ekran[0][x]` → ilk satırda x. sütun
`ekran[BOYUT-1][x]` = `ekran[20][x]` → son satırda x. sütun

#### Harita Oluşturma — Yan Duvarlar ve İç Alan

```c
for(x = 1; x < BOYUT - 1; x++){        // Satır 1'den 19'a kadar
    for(y = 0; y < BOYUT; y++){          // Her sütun
        if(y == 0 || y == BOYUT - 1){
            ekran[x][y] = '*';           // Sol ve sağ kenar → yıldız
        } else {
            ekran[x][y] = ' ';           // İç alan → boşluk
        }
    }
}
```

Bu iç içe döngü, orta satırları doldurur:

```
Satır 1:   *                                       *
Satır 2:   *                                       *
   ...
Satır 19:  *                                       *
```

**İç içe döngü mantığı:**
- Dış döngü (`x`) → satırları gezer (1'den 19'a)
- İç döngü (`y`) → her satırdaki sütunları gezer (0'dan 20'ye)
- Eğer sütun ilk (0) veya son (20) ise → duvar (`*`)
- Değilse → boşluk (` `)

Sonuçta tüm harita şöyle görünür:

```
* * * * * * * * * * * * * * * * * * * * *
*                                       *
*                                       *
*                                       *
*                                       *
*                   O                   *
*                                       *
*                                       *
* * * * * * * * * * * * * * * * * * * * *
```

#### Karakter Yerleştirme

```c
int karSatir = 10, karSutun = 10;   // Başlangıç pozisyonu: tam orta
ekran[karSatir][karSutun] = 'O';    // O karakteri diziye yazıldı
```

`karSatir` ve `karSutun` değişkenleri, karakterin **mevcut pozisyonunu** takip eder. Başlangıçta (10, 10) — yani tam ortada.

#### Ekranı Temizleme ve Çizme

```c
system("cls");                        // Konsol ekranını temizle
ekranaBas(BOYUT, BOYUT, ekran);       // Diziyi ekrana bas
```

`system("cls")` → Windows komut satırında ekranı temizler (Linux/Mac'te `system("clear")` kullanılır).

Her tuş basımında bu iki işlem tekrarlanır: önce temizle, sonra yeniden çiz. Bu sayede ekranda **hareket illüzyonu** oluşur.

#### Oyun Döngüsü ve Hareket

```c
while(1){
    basilanKarakter = getch();    // Tuş basımını bekle (Enter gerektirmez)

    if(basilanKarakter == 'w' || basilanKarakter == 'W'){
        ekran[karSatir][karSutun] = ' ';   // 1. Eski pozisyonu temizle
        karSatir--;                         // 2. Satırı 1 azalt (yukarı)
        ekran[karSatir][karSutun] = 'O';   // 3. Yeni pozisyona karakteri koy
        system("cls");                      // 4. Ekranı temizle
        ekranaBas(BOYUT, BOYUT, ekran);     // 5. Yeniden çiz
    }
    // ... diğer yönler aynı mantık
}
```

**Hareket algoritması 5 adımdan oluşur:**

```
Adım 1: Eski pozisyona boşluk yaz    →  ekran[10][10] = ' '
Adım 2: Pozisyon değişkenini güncelle →  karSatir = 9  (yukarı git)
Adım 3: Yeni pozisyona 'O' yaz       →  ekran[9][10] = 'O'
Adım 4: Ekranı temizle               →  system("cls")
Adım 5: Tüm diziyi ekrana bas        →  ekranaBas(...)
```

**Yön kontrolleri:**

| Tuş | Değişen Değişken | İşlem | Ekran Yönü |
|-----|-----------------|-------|------------|
| W | `karSatir--` | Satır azalır | ↑ Yukarı |
| S | `karSatir++` | Satır artar | ↓ Aşağı |
| A | `karSutun--` | Sütun azalır | ← Sola |
| D | `karSutun++` | Sütun artar | → Sağa |

> **Neden satır azalınca yukarı gidiyoruz?** Çünkü dizi 0. satırdan başlıyor ve ekrana yukarıdan aşağıya basılıyor. Satır 0 = en üst, satır 20 = en alt. Satır numarası azalınca karakter ekranda yukarı kayar.

#### `getch()` Fonksiyonu

```c
basilanKarakter = getch();
```

`getch()` fonksiyonu `<conio.h>` kütüphanesinden gelir ve:
- Kullanıcının **tek bir tuş** basmasını bekler
- Basılan tuşu **ekrana yazdırmaz** (sessiz okuma)
- **Enter'a basmaya gerek yoktur**

Bu özellikler onu oyun kontrolü için ideal yapar. `scanf()` kullansaydık, her harekette Enter'a basmak gerekirdi — oyun oynanamazdı.

---

### `ekranaBas` Fonksiyonu — 2 Boyutlu Diziyi Fonksiyona Geçirmek

```c
void ekranaBas(int satir, int sutun, char dizi[satir][sutun]){
    int x, y;
    for(x = 0; x < satir; x++){
        for(y = 0; y < sutun; y++){
            printf("%c ", dizi[x][y]);
        }
        printf("\n");
    }
}
```

Bu fonksiyon, konunun **en kritik kısmını** gösterir: 2 boyutlu diziyi bir fonksiyona parametre olarak geçirmek.

#### Parametre Analizi

```c
void ekranaBas(int satir, int sutun, char dizi[satir][sutun])
```

| Parametre | Tip | Açıklama |
|-----------|-----|----------|
| `satir` | `int` | Dizinin satır sayısı |
| `sutun` | `int` | Dizinin sütun sayısı |
| `dizi[satir][sutun]` | `char[][]` | 2 boyutlu karakter dizisi |

**Önemli:** C'de 2 boyutlu dizi fonksiyona geçirilirken **sütun boyutunun bilinmesi zorunludur**. Çünkü derleyici `dizi[x][y]` ifadesini şöyle hesaplar:

```
Bellek adresi = başlangıç + (x × sütun_sayısı + y) × eleman_boyutu
```

Sütun sayısını bilmeden bu hesap yapılamaz. Bu yüzden parametre olarak `char dizi[satir][sutun]` yazıyoruz — burada `satir` ve `sutun` değerleri önceki parametrelerden geliyor (**Variable Length Array — VLA** özelliği, C99 standardı).

#### Alternatif Fonksiyon İmzaları

```c
// Yöntem 1: VLA (Variable Length Array) — yukarıdaki yöntem
void ekranaBas(int satir, int sutun, char dizi[satir][sutun])

// Yöntem 2: Sabit boyut (BOYUT sabiti tanımlıysa)
void ekranaBas(char dizi[BOYUT][BOYUT])

// Yöntem 3: Sütun boyutu sabit, satır serbest
void ekranaBas(int satir, char dizi[][BOYUT])
```

#### Fonksiyon İçi: İç İçe Döngü ile Ekrana Basma

```c
for(x = 0; x < satir; x++){          // Her satır için
    for(y = 0; y < sutun; y++){       // Her sütun için
        printf("%c ", dizi[x][y]);    // Karakteri bas + boşluk
    }
    printf("\n");                      // Satır sonunda alt satıra geç
}
```

`printf("%c ", ...)` → Her karakterden sonra bir boşluk basılır. Bu, oyun alanının **kare görünmesini** sağlar (terminalde karakterler dikeyden daha geniştir).

#### Fonksiyon Çağrısı

```c
ekranaBas(BOYUT, BOYUT, ekran);
```

Burada `ekran` dizisi fonksiyona **referans (pointer) olarak** geçirilir. Yani dizinin bir kopyası oluşturulmaz — fonksiyon orijinal diziyle çalışır. Bu iki avantaj sağlar:

1. **Bellek tasarrufu** — 441 byte kopyalanmaz
2. **Performans** — kopyalama süresi harcanmaz

> **Dikkat:** Fonksiyon içinde diziyi değiştirirseniz, orijinal dizi de değişir! Çünkü aynı bellek adresine erişiyorsunuz.

---

### Bu Versiyonun Eksiklikleri

Bu temel versiyon çalışır ama bazı sorunları var:

| Sorun | Açıklama |
|-------|----------|
| **Sınır kontrolü yok** | Karakter duvarın içine veya dışına çıkabilir → program çöker |
| **Ekran titremesi** | `system("cls")` + yeniden çizim her seferinde ekranı tamamen temizliyor → göz yorucu titreme |
| **Tek bir karakter** | Oyunda düşman, hedef veya skor yok |
| **Çıkış yolu yok** | `while(1)` sonsuz döngü — programdan çıkmak için pencereyi kapatmak gerekiyor |

Şimdi tüm bu sorunları çözen **gelişmiş versiyona** geçelim.

---

## 3. Gelişmiş Versiyon — Tam Oyun

Aşağıdaki program, temel versiyonu alıp **gerçek bir oyuna** dönüştürür: düşman yapay zekası, hedef toplama, puan sistemi, can mekanizması, sınır kontrolü ve ekran titremesini engelleyen `gotoxy()` tekniği.

### Tam Kod

```c
#include <stdio.h>
#include <stdlib.h>
#include <conio.h>
#include <windows.h>
#include <time.h>

#define BOYUT 21

void gotoxy(int x, int y);
void ekranaBas(char dizi[BOYUT][BOYUT]);

int main(){

    srand(time(NULL));

    while(1){

        char ekran[BOYUT][BOYUT];
        int x, y;

        int karSatir = 10, karSutun = 10;
        int dusmanSatir = 5, dusmanSutun = 5;
        int hedefSatir, hedefSutun;

        int puan = 0;
        int can = 3;

        char tus;

        // Harita oluştur
        for(x = 0; x < BOYUT; x++){
            for(y = 0; y < BOYUT; y++){
                if(x == 0 || x == BOYUT-1 || y == 0 || y == BOYUT-1)
                    ekran[x][y] = '*';
                else
                    ekran[x][y] = ' ';
            }
        }

        // İlk hedefi rastgele yerleştir
        hedefSatir = rand() % (BOYUT-2) + 1;
        hedefSutun = rand() % (BOYUT-2) + 1;

        while(can > 0){

            // Haritanın iç kısmını temizle
            for(x = 1; x < BOYUT-1; x++){
                for(y = 1; y < BOYUT-1; y++){
                    ekran[x][y] = ' ';
                }
            }

            // Nesneleri yerleştir
            ekran[hedefSatir][hedefSutun] = 'D';
            ekran[karSatir][karSutun] = 'O';
            ekran[dusmanSatir][dusmanSutun] = 'X';

            // Ekranı çiz (titremesiz)
            gotoxy(0, 0);
            ekranaBas(ekran);

            printf("\nPuan: %d", puan);
            printf("\nCan: %d", can);
            printf("\nWASD hareket | Q cikis\n");

            // Kullanıcı girdisi
            tus = getch();

            int yeniSatir = karSatir;
            int yeniSutun = karSutun;

            if(tus == 'w' || tus == 'W') yeniSatir--;
            if(tus == 's' || tus == 'S') yeniSatir++;
            if(tus == 'a' || tus == 'A') yeniSutun--;
            if(tus == 'd' || tus == 'D') yeniSutun++;
            if(tus == 'q' || tus == 'Q') return 0;

            // Sınır kontrolü — duvara çarpmayı engelle
            if(ekran[yeniSatir][yeniSutun] != '*'){
                karSatir = yeniSatir;
                karSutun = yeniSutun;
            }

            // Hedef toplama kontrolü
            if(karSatir == hedefSatir && karSutun == hedefSutun){
                puan += 10;
                hedefSatir = rand() % (BOYUT-2) + 1;
                hedefSutun = rand() % (BOYUT-2) + 1;
            }

            // Düşman yapay zekası (%50 ihtimalle hareket eder)
            if(rand() % 2 == 0){
                if(dusmanSatir < karSatir) dusmanSatir++;
                else if(dusmanSatir > karSatir) dusmanSatir--;

                if(dusmanSutun < karSutun) dusmanSutun++;
                else if(dusmanSutun > karSutun) dusmanSutun--;
            }

            // Yakalanma kontrolü
            if(dusmanSatir == karSatir && dusmanSutun == karSutun){
                can--;
                karSatir = 10;
                karSutun = 10;
                dusmanSatir = 5;
                dusmanSutun = 5;
            }

            Sleep(80); // Kare hızı kontrolü
        }

        // Oyun bitti ekranı
        gotoxy(0, 0);
        printf("GAME OVER\n");
        printf("Toplam puan: %d\n", puan);
        printf("Tekrar oynamak icin bir tusa bas...\n");
        getch();
    }

    return 0;
}

void gotoxy(int x, int y){
    COORD c;
    c.X = x;
    c.Y = y;
    SetConsoleCursorPosition(GetStdHandle(STD_OUTPUT_HANDLE), c);
}

void ekranaBas(char dizi[BOYUT][BOYUT]){
    int x, y;
    for(x = 0; x < BOYUT; x++){
        for(y = 0; y < BOYUT; y++){
            printf("%c ", dizi[x][y]);
        }
        printf("\n");
    }
}
```

---

### Yeni Eklenen Kütüphaneler

```c
#include <conio.h>     // getch() — tuş okuma
#include <windows.h>   // gotoxy için Windows API, Sleep()
#include <time.h>      // srand(time(NULL)) — rastgele sayı tohumu
```

| Kütüphane | Fonksiyon | Ne İşe Yarar |
|-----------|-----------|-------------|
| `conio.h` | `getch()` | Enter'sız tuş okuma |
| `windows.h` | `SetConsoleCursorPosition()`, `Sleep()` | İmleç konumu, bekleme |
| `time.h` | `time(NULL)` | Rastgele sayı tohumu (her çalıştırmada farklı sonuç) |

---

### Rastgele Sayı Üretimi

```c
srand(time(NULL));
```

Bu satır **rastgele sayı üretecini tohumlar**. `time(NULL)` şu anki zamanı saniye cinsinden döndürür. Her çalıştırmada farklı bir tohum → farklı rastgele sayılar.

Bunu yazmazsanız, `rand()` her seferinde **aynı** sayıları üretir.

```c
hedefSatir = rand() % (BOYUT-2) + 1;
hedefSutun = rand() % (BOYUT-2) + 1;
```

Bu formül, hedefi **duvarların içinde** rastgele bir yere koyar:

```
rand() % (BOYUT-2)  →  0 ile 18 arası bir sayı
+ 1                  →  1 ile 19 arası bir sayı
```

Neden? Çünkü 0 ve 20 indeksleri duvar. Hedef sadece 1-19 arasında olmalı.

---

### Oyun Döngüsü Yapısı

```
En Dış Döngü: while(1)         →  Tekrar oynama döngüsü
    ├── Harita ve değişkenleri sıfırla
    ├── İç Döngü: while(can > 0)  →  Aktif oyun döngüsü
    │       ├── 1. Haritayı temizle
    │       ├── 2. Nesneleri yerleştir (karakter, düşman, hedef)
    │       ├── 3. Ekranı çiz
    │       ├── 4. Kullanıcı girdisini al
    │       ├── 5. Hareketi uygula (sınır kontrolüyle)
    │       ├── 6. Hedef toplama kontrolü
    │       ├── 7. Düşman hareketini hesapla
    │       ├── 8. Yakalanma kontrolü
    │       └── 9. Sleep(80) — kare hızı
    └── GAME OVER ekranı → getch() → başa dön
```

**İki döngü neden var?**
- **Dış döngü (`while(1)`):** Oyunun tekrar başlatılmasını sağlar. Oyun bitince "Tekrar oynamak ister misin?" mantığı.
- **İç döngü (`while(can > 0)`):** Asıl oyun döngüsü. Can sıfırlanana kadar devam eder.

---

### Harita Temizleme — Her Karede

```c
for(x = 1; x < BOYUT-1; x++){
    for(y = 1; y < BOYUT-1; y++){
        ekran[x][y] = ' ';
    }
}
```

Bu döngü her oyun karesinde **sadece iç alanı** temizler (duvarları korur). Neden gerekli?

Düşünün: Karakter (10,10)'dan (10,11)'e hareket etti. Eski pozisyonda hâlâ `'O'` var. Eğer temizlemezsek, ekranda birden fazla `'O'` görünür. Bu yüzden her karede:

1. İç alanı temizle (`' '`)
2. Tüm nesneleri yeni pozisyonlarına yaz
3. Ekranı çiz

#### Nesne Yerleştirme Sırası

```c
ekran[hedefSatir][hedefSutun] = 'D';    // Önce hedef
ekran[karSatir][karSutun] = 'O';        // Sonra karakter
ekran[dusmanSatir][dusmanSutun] = 'X';  // En son düşman
```

Sıra önemli! Eğer iki nesne aynı hücredeyse, **en son yazılan** görünür. Düşman karakterin üzerine geldiğinde `'X'` görünmesini istiyoruz — bu yüzden düşman en son yazılır.

---

### `gotoxy()` — Ekran Titremesinin Çözümü

```c
void gotoxy(int x, int y){
    COORD c;
    c.X = x;
    c.Y = y;
    SetConsoleCursorPosition(GetStdHandle(STD_OUTPUT_HANDLE), c);
}
```

Bu fonksiyon Windows API kullanarak **konsol imlecini belirtilen koordinata taşır**.

| Kavram | Açıklama |
|--------|----------|
| `COORD` | Windows'un x,y koordinat yapısı (struct) |
| `c.X`, `c.Y` | Hedef sütun ve satır |
| `GetStdHandle(STD_OUTPUT_HANDLE)` | Konsol çıkış penceresi referansı |
| `SetConsoleCursorPosition()` | İmleci belirtilen konuma taşır |

**Temel versiyondaki sorun:**
```
system("cls") → Tüm ekranı sil → Yeniden çiz → GÖZ YORAN TİTREME
```

**Gelişmiş versiyondaki çözüm:**
```
gotoxy(0,0) → İmleci sol üst köşeye taşı → Üzerine yaz → TİTREME YOK
```

`gotoxy(0,0)` demek "imleci ekranın sol üst köşesine götür" demektir. Sonra `ekranaBas()` çağrıldığında, mevcut içeriğin **üzerine yazılır**. Ekran temizlenmediği için titreme olmaz.

---

### Sınır Kontrolü — Duvara Çarpmayı Engelleme

```c
int yeniSatir = karSatir;
int yeniSutun = karSutun;

if(tus == 'w' || tus == 'W') yeniSatir--;
if(tus == 's' || tus == 'S') yeniSatir++;
if(tus == 'a' || tus == 'A') yeniSutun--;
if(tus == 'd' || tus == 'D') yeniSutun++;

// Yeni pozisyon duvar mı kontrol et
if(ekran[yeniSatir][yeniSutun] != '*'){
    karSatir = yeniSatir;
    karSutun = yeniSutun;
}
```

**Temel versiyonda** karakter doğrudan hareket ediyordu — duvarın içine girip programı çökertebilirdi.

**Gelişmiş versiyonda** akıllı bir teknik var:

1. Önce "geçici" değişkenlere hareket et (`yeniSatir`, `yeniSutun`)
2. Yeni pozisyonu kontrol et: duvar (`*`) mı?
3. Duvar değilse → hareketi onayla, pozisyonu güncelle
4. Duvarsa → hiçbir şey yapma, karakter yerinde kalır

Bu tekniğe **"önce kontrol et, sonra hareket et" (look before you leap)** denir ve oyun programlamada çok yaygındır.

---

### Hedef Toplama Sistemi

```c
if(karSatir == hedefSatir && karSutun == hedefSutun){
    puan += 10;                              // 10 puan ekle
    hedefSatir = rand() % (BOYUT-2) + 1;   // Yeni rastgele pozisyon
    hedefSutun = rand() % (BOYUT-2) + 1;
}
```

Karakter `'D'` ile aynı hücreye geldiğinde:
1. Puana 10 eklenir
2. Hedef yeni bir rastgele konuma taşınır

Bu basit ama etkili bir **ödül mekanizmasıdır** — oyuncuya sürekli bir hedef verir.

---

### Düşman Yapay Zekası

```c
if(rand() % 2 == 0){
    if(dusmanSatir < karSatir) dusmanSatir++;
    else if(dusmanSatir > karSatir) dusmanSatir--;

    if(dusmanSutun < karSutun) dusmanSutun++;
    else if(dusmanSutun > karSutun) dusmanSutun--;
}
```

Bu basit ama etkili bir **takip algoritmasıdır**:

**Mantık:**
- Düşman **%50 ihtimalle** hareket eder (`rand() % 2 == 0`). Bu onu yavaşlatır ve kaçma şansı verir.
- Hareket ettiğinde, oyuncuya **doğru yönde** ilerler:
  - Düşman oyuncunun **üstünde** mi? → Aşağı git (`dusmanSatir++`)
  - Düşman oyuncunun **altında** mı? → Yukarı git (`dusmanSatir--`)
  - Aynı mantık yatay eksen için de geçerli

**Görselleştirme:**

```
                O (oyuncu: satır 10, sütun 15)
               ↗
              /
             /
            X (düşman: satır 13, sütun 12)

Düşman kararı:
  dusmanSatir (13) > karSatir (10)  → satır azalt (yukarı)
  dusmanSutun (12) < karSutun (15)  → sütun artır (sağa)
  Sonuç: Düşman çapraz olarak oyuncuya yaklaşır
```

**Neden %50?** Düşman her adımda hareket etseydi, oyuncu asla kaçamazdı — çünkü düşman her turda 1 adım yaklaşır. %50 olasılık, düşmanı **bazen hareketsiz** bırakır, bu da oyuncuya manevra alanı tanır.

---

### Yakalanma ve Can Sistemi

```c
if(dusmanSatir == karSatir && dusmanSutun == karSutun){
    can--;                    // 1 can azalt

    karSatir = 10;            // Oyuncuyu başlangıca döndür
    karSutun = 10;

    dusmanSatir = 5;          // Düşmanı başlangıca döndür
    dusmanSutun = 5;
}
```

Düşman oyuncuyla aynı hücreye geldiğinde:
1. Can 1 azalır
2. Her iki karakter de **başlangıç pozisyonlarına** döner
3. Can 0'a düştüğünde iç döngü sona erer → GAME OVER

Bu mekanizma oyunlarda **respawn (yeniden doğma)** olarak bilinir.

---

### Kare Hızı Kontrolü

```c
Sleep(80);    // 80 milisaniye bekle
```

`Sleep()` fonksiyonu (Windows API, `<windows.h>`) programı belirtilen milisaniye kadar bekletir. Bu neden gerekli?

- `Sleep(80)` → Saniyede yaklaşık 12 kare (80ms × 12 ≈ 1000ms)
- Bu olmadan oyun **çok hızlı** çalışır ve kontrol edilemez
- Değeri artırmak oyunu yavaşlatır, azaltmak hızlandırır

---

### `ekranaBas` — Gelişmiş Versiyon

```c
void ekranaBas(char dizi[BOYUT][BOYUT]){
    int x, y;
    for(x = 0; x < BOYUT; x++){
        for(y = 0; y < BOYUT; y++){
            printf("%c ", dizi[x][y]);
        }
        printf("\n");
    }
}
```

Temel versiyondan farkı: parametreler sadeleştirildi. `BOYUT` zaten `#define` ile tanımlı olduğu için, fonksiyona ayrıca satır/sütun sayısı geçirmek yerine doğrudan `char dizi[BOYUT][BOYUT]` kullanıldı.

**Karşılaştırma:**

```c
// Temel versiyon — esnek, her boyutta çalışır
void ekranaBas(int satir, int sutun, char dizi[satir][sutun])

// Gelişmiş versiyon — sabit boyut, daha basit
void ekranaBas(char dizi[BOYUT][BOYUT])
```

İkisi de doğrudur. İlki daha **geneldir** (farklı boyutlarla çalışabilir), ikincisi daha **basittir** (boyut zaten sabit olduğu için ekstra parametre gereksiz).

---

## 4. İki Versiyon Karşılaştırması

| Özellik | Temel Versiyon | Gelişmiş Versiyon |
|---------|---------------|-------------------|
| **Ekran yenileme** | `system("cls")` — titreme var | `gotoxy(0,0)` — titreme yok |
| **Sınır kontrolü** | Yok — duvarı geçebilir | Var — duvara çarpmaz |
| **Düşman** | Yok | Var — takip eden AI |
| **Hedef** | Yok | Var — rastgele hedef toplama |
| **Puan sistemi** | Yok | Var — hedef başına +10 |
| **Can sistemi** | Yok | Var — 3 can, yakalanınca azalır |
| **Çıkış** | Yok (`while(1)`) | Q tuşu ile çıkış |
| **Tekrar oynama** | Yok | Var — GAME OVER sonrası devam |
| **Kare hızı** | Kontrolsüz | `Sleep(80)` ile kontrollü |
| **Fonksiyon parametresi** | VLA: `char dizi[satir][sutun]` | Sabit: `char dizi[BOYUT][BOYUT]` |

---

## 5. Öğrenilen Kavramlar — Özet

| Kavram | Ne Öğrendik |
|--------|------------|
| **2 boyutlu dizi** | `char ekran[21][21]` — satır × sütun tablo yapısı |
| **Dizi başlatma** | `= {0}` ile tüm hücreleri temizleme |
| **İç içe döngü** | Dış döngü = satır, iç döngü = sütun |
| **Fonksiyona dizi geçirme** | `char dizi[satir][sutun]` (VLA) veya `char dizi[BOYUT][BOYUT]` |
| **Fonksiyon prototipi** | `main()`'den önce bildirim |
| **Diziler referans geçer** | Fonksiyonda değişiklik → orijinal dizi değişir |
| **system("cls") vs gotoxy()** | Temizle-çiz vs. üzerine-yaz yaklaşımı |
| **Rastgele sayı** | `srand(time(NULL))` + `rand() % N` |
| **Sınır kontrolü** | Hareket etmeden önce kontrol et |
| **Oyun döngüsü** | Temizle → Yerleştir → Çiz → Girdi Al → Güncelle → Tekrarla |

---

## 6. Alıştırma Önerileri

Bu kodu anladıysanız, şu geliştirmeleri deneyin:

1. **Birden fazla düşman** ekleyin (dizi kullanarak düşman pozisyonlarını tutun)
2. **Duvar arasında kapılar** açın (belirli hücreleri `' '` yaparak)
3. **Seviye sistemi** ekleyin (her 50 puanda düşman hızlansın)
4. **Güç artırımı (power-up)** ekleyin (toplanan öğe düşmanı yavaşlatsın)
5. **Skor tablosu** tutun (dosyaya yazarak kalıcı hale getirin)

> Bir sonraki derste: **Pointer (İşaretçi) — Bellek Adresleri ve Dinamik Bellek Yönetimi**
