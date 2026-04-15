---
layout: post
title: "C Programlama ile Sıralı ve Rastgele Erişimli Dosya Sistemleri"
date: 2026-04-15 12:55:00 +0300
categories: algoritma-ve-programlama-ii
---

Bellekte tuttuğunuz veri, program kapandığında kaybolur. Ama gerçek hayattaki yazılımlar sadece ekranda görünen birkaç değişkenden ibaret değildir. Rehberler, öğrenci listeleri, sipariş kayıtları, log dosyaları, muhasebe verileri, hasta kayıtları, stok hareketleri, raporlar... Bunların hepsi program kapandıktan sonra da yaşamaya devam etmek zorundadır.

İşte burada **dosya sistemleri** devreye girer.

C programlama diliyle dosya işlemleri öğrenmek, yalnızca `fopen()` ve `fprintf()` kullanmayı bilmek değildir. Asıl mesele, veriyi **hangi mantıkla sakladığınızı** anlamaktır. Çünkü dosyaya veri yazmak ile dosyayı iyi tasarlamak aynı şey değildir.

Bu derste iki temel yaklaşımı inceleyeceğiz:

- **Sıralı erişimli dosya sistemi (Sequential Access)**
- **Rastgele erişimli dosya sistemi (Random Access / Direct Access)**

Bu iki yaklaşım bazen aynı sorunu çözer, ama çok farklı hız, esneklik ve kullanım mantığına sahiptir. Üstelik bu farkı yalnızca teorik olarak anlatmayacağız. Her biri için tam çalışan birer **telefon rehberi uygulaması** üzerinden ilerleyeceğiz.

Kısacası bugün öğreneceğiniz şey sadece dosya değil, **veriyle düşünme biçimi** olacak.

---

## Bu Derste Neler Öğreneceksiniz?

Bu dersin sonunda şunları yapabiliyor olmanız beklenmektedir:

- C dilinde dosya işlemlerinin temel mantığını açıklayabilmek
- Sıralı erişimli dosya yapısının nasıl çalıştığını anlayabilmek
- Rastgele erişimli dosya yapısının hangi durumlarda avantaj sağladığını açıklayabilmek
- `fprintf`, `fscanf`, `fgets`, `fwrite`, `fread`, `fseek` gibi fonksiyonların kullanım amacını kavrayabilmek
- Her iki model için telefon rehberi mantığını çözümleyebilmek
- Hangi problemde hangi dosya türünün tercih edilmesi gerektiğini yorumlayabilmek

---

## 1. Dosya Kavramı Neden Önemlidir?

C dilinde program yazmaya yeni başlayan öğrenciler çoğu zaman sadece bellekte çalışan örnekler görür. Kullanıcıdan veri al, işlem yap, ekrana yazdır, program bitsin. Bu başlangıç için iyidir. Ama gerçek uygulamalar bu kadar geçici yaşayamaz.

Bir eczane uygulaması yazdığınızı düşünün. Hasta kayıtları program kapandığında silinse ne olur? Bir okul otomasyonu yazdınız diyelim, öğrenci listeleri bilgisayar kapanınca kaybolsa ne anlamı kalır?

Bu nedenle dosya kullanımı, yazılımın "anı kurtaran" yapıdan çıkıp "kalıcı veriyle çalışan" bir yapıya geçmesi demektir.

Dosya işlemleri sayesinde:

- Veriler kalıcı hale gelir
- Kayıtlar sonradan tekrar okunabilir
- Güncelleme yapılabilir
- Arşiv tutulabilir
- Rapor üretilebilir
- Program tekrar çalıştığında eski bilgiler geri alınabilir

Ama burada önemli olan şu sorudur:

> Veriyi dosyada nasıl tutacağız?

Bu sorunun en temel iki cevabı, sıralı ve rastgele erişimli sistemlerdir.

---

## 2. Sıralı Erişimli Dosya Sistemi Nedir?

**Sıralı erişim**, dosyadaki verilerin baştan sona doğru sırayla okunup işlendiği modeldir.

Yani dosyada üçüncü kaydı okumak istiyorsanız, çoğu durumda birinci ve ikinci kayıtların üzerinden geçmeniz gerekir. Veri akışı bir nehir gibi davranır: baştan girer, sırayla ilerlersiniz.

Bu yaklaşım özellikle metin dosyalarında çok yaygındır.

### Günlük hayattan benzetme

Elinizde alfabetik olmayan bir kağıt telefon listesi olduğunu düşünün. "Ayşe"yi arıyorsunuz. Ne yaparsınız?

- İlk satırdan başlarsınız
- İsimleri tek tek okursunuz
- Aradığınız kişiyi bulana kadar ilerlersiniz

İşte bu mantık sıralı erişimdir.

### Avantajları

- Öğrenmesi kolaydır
- Metin tabanlı saklama yapılabilir
- İnsan gözüyle dosyayı açıp incelemek mümkündür
- Basit raporlama ve listeleme için uygundur
- Küçük verilerde pratiktir

### Dezavantajları

- Belirli bir kayda doğrudan ulaşmak zordur
- Güncelleme işlemleri zahmetli olabilir
- Büyük veri kümelerinde yavaşlar
- Silme/güncelleme çoğu zaman geçici dosya mantığı gerektirir

---

## 3. Rastgele Erişimli Dosya Sistemi Nedir?

**Rastgele erişim**, dosyadaki belirli bir kayda doğrudan gitme mantığına dayanır.

Burada kayıtlar genellikle sabit boyutlu tutulur. Böylece şu mantık kurulabilir:

> "5. kayıt kaçıncı byte'ta başlar?" → doğrudan oraya git.

Bu mantıkta dosyanın başından itibaren her şeyi tek tek okumak gerekmez. `fseek()` gibi fonksiyonlarla doğrudan ilgili kayıt konumuna sıçranır.

### Günlük hayattan benzetme

Bir kitabın sonundaki dizin kısmını düşünün. "Algoritma" kelimesinin geçtiği yeri bulmak için kitabı ilk sayfadan son sayfaya kadar okumazsınız. Dizin size sayfa numarası verir, siz doğrudan oraya gidersiniz.

İşte rastgele erişim tam olarak budur.

### Avantajları

- Belirli bir kayda hızlı ulaşılır
- Güncelleme daha kolaydır
- Büyük veri kümelerinde daha verimlidir
- Kayıt bazlı yönetim yapılabilir

### Dezavantajları

- Tasarımı daha dikkat ister
- Kayıt boyutları ve struct yapısı önemlidir
- İnsan gözüyle açıldığında dosya çoğu zaman okunabilir metin gibi görünmez
- Yanlış struct tasarımı veri bozulmasına yol açabilir

---

## 4. Sıralı ve Rastgele Erişim Arasındaki Temel Fark

Bu iki yaklaşımı karıştırmamak için aşağıdaki tabloyu dikkatlice inceleyin:

| Özellik | Sıralı Erişim | Rastgele Erişim |
|--------|---------------|-----------------|
| Okuma biçimi | Baştan sona sırayla | İstenilen kayda doğrudan |
| Dosya türü | Genellikle metin tabanlı | Genellikle ikili (binary) |
| Uygulama kolaylığı | Daha kolay | Daha dikkatli tasarım ister |
| Arama hızı | Büyük dosyada yavaş | Daha hızlı |
| Güncelleme | Daha zahmetli | Daha pratik |
| İnsan tarafından okunabilirlik | Yüksek | Düşük |
| Küçük projeler için uygunluk | Çok uygun | Orta |
| Büyük kayıt sistemleri için uygunluk | Sınırlı | Daha uygun |

Bu tabloyu ezberlemek değil, mantığını kavramak önemlidir.

---

## 5. C Dilinde Dosya İşlemlerinin Temel Araçları

Her iki yaklaşımda da bazı temel fonksiyonlar karşımıza çıkar.

### Sık kullanılan dosya fonksiyonları

| Fonksiyon | Görev |
|----------|-------|
| `fopen()` | Dosya açar |
| `fclose()` | Dosyayı kapatır |
| `fprintf()` | Metin dosyasına biçimli veri yazar |
| `fscanf()` | Metin dosyasından veri okur |
| `fgets()` | Satır okur |
| `fwrite()` | İkili dosyaya veri yazar |
| `fread()` | İkili dosyadan veri okur |
| `fseek()` | Dosyada istenen byte konumuna gider |
| `ftell()` | Mevcut konumu verir |
| `rewind()` | Dosyayı başa alır |

### Açma modları

| Mod | Anlamı |
|-----|--------|
| `r` | Okuma |
| `w` | Yazma, varsa siler |
| `a` | Sona ekleme |
| `rb` | Binary okuma |
| `wb` | Binary yazma |
| `ab` | Binary sona ekleme |
| `r+` | Okuma + yazma |
| `rb+` | Binary okuma + yazma |

Buradaki en kritik ayrım şudur:

- **Sıralı erişimde** çoğunlukla metin tabanlı işlemler kullanılır
- **Rastgele erişimde** çoğunlukla `struct` + binary dosya mantığı kullanılır

---

## 6. Uygulama 1: Sıralı Erişimli Telefon Rehberi

Şimdi konuyu gerçek kodla görelim.

Bu uygulamada her kayıt metin dosyasına satır satır yazılacaktır. Her satır bir kişiyi temsil edecektir.

Örnek kayıt yapısı şöyle olabilir:

`ad;telefon`

Örnek:

`Ahmet Yılmaz;05321234567`

### Bu uygulama neleri yapacak?

- Yeni kayıt ekleme
- Tüm kayıtları listeleme
- Ada göre arama yapma

### Programın mantığı

- Dosya metin dosyasıdır
- Veri satır satır tutulur
- Arama yapılırken dosya baştan sona okunur
- İstenen isim bulunana kadar sıralı ilerlenir

### Tam C Kodu

```c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define DOSYA_ADI "rehber_sirali.txt"
#define MAX 100

void kayitEkle() {
    FILE *dosya = fopen(DOSYA_ADI, "a");
    if (dosya == NULL) {
        printf("Dosya acilamadi!\n");
        return;
    }

    char ad[MAX];
    char telefon[MAX];

    printf("Ad Soyad: ");
    getchar();
    fgets(ad, MAX, stdin);
    ad[strcspn(ad, "\n")] = 0;

    printf("Telefon: ");
    fgets(telefon, MAX, stdin);
    telefon[strcspn(telefon, "\n")] = 0;

    fprintf(dosya, "%s;%s\n", ad, telefon);
    fclose(dosya);

    printf("Kayit eklendi.\n");
}

void kayitlariListele() {
    FILE *dosya = fopen(DOSYA_ADI, "r");
    if (dosya == NULL) {
        printf("Kayit bulunamadi.\n");
        return;
    }

    char satir[200];
    printf("\n--- TELEFON REHBERI ---\n");
    while (fgets(satir, sizeof(satir), dosya) != NULL) {
        printf("%s", satir);
    }
    fclose(dosya);
}

void kayitAra() {
    FILE *dosya = fopen(DOSYA_ADI, "r");
    if (dosya == NULL) {
        printf("Dosya acilamadi.\n");
        return;
    }

    char aranan[MAX];
    char satir[200];
    int bulundu = 0;

    printf("Aranacak ad: ");
    getchar();
    fgets(aranan, MAX, stdin);
    aranan[strcspn(aranan, "\n")] = 0;

    while (fgets(satir, sizeof(satir), dosya) != NULL) {
        char ad[MAX], telefon[MAX];
        sscanf(satir, "%[^;];%[^\n]", ad, telefon);

        if (strcmp(ad, aranan) == 0) {
            printf("Kayit bulundu: %s - %s\n", ad, telefon);
            bulundu = 1;
            break;
        }
    }

    if (!bulundu) {
        printf("Kayit bulunamadi.\n");
    }

    fclose(dosya);
}

int main() {
    int secim;

    do {
        printf("\n--- SIRALI ERISIMLI TELEFON REHBERI ---\n");
        printf("1. Kayit Ekle\n");
        printf("2. Kayitlari Listele\n");
        printf("3. Kayit Ara\n");
        printf("0. Cikis\n");
        printf("Seciminiz: ");
        scanf("%d", &secim);

        switch (secim) {
            case 1:
                kayitEkle();
                break;
            case 2:
                kayitlariListele();
                break;
            case 3:
                kayitAra();
                break;
            case 0:
                printf("Program sonlandi.\n");
                break;
            default:
                printf("Gecersiz secim!\n");
        }
    } while (secim != 0);

    return 0;
}
```

---

## 7. Bu Uygulamanın Ayrıntılı Analizi

Bu program küçük görünür ama çok şey öğretir.

### 7.1 Neden `a` modu kullanıldı?

Çünkü yeni kayıtları dosyanın sonuna eklemek istiyoruz. Mevcut kayıtları silmeden devam etmek için `append` mantığı kullanılır.

### 7.2 Neden arama yavaşlayabilir?

Çünkü dosyada yüzlerce kayıt varsa, program istenen kişiyi bulmak için satır satır ilerlemek zorundadır. Kayıt listenin sonundaysa tüm dosya neredeyse okunmuş olur.

### 7.3 Bu yapı ne için iyidir?

- Küçük rehber sistemleri
- Basit log dosyaları
- Rapor kayıtları
- Metin temelli arşivler

### 7.4 Bu yapının zayıf noktası nedir?

Bir kaydı güncellemek veya silmek istediğinizde iş zorlaşır. Genelde şu yöntem gerekir:

- Eski dosyayı oku
- Yeni geçici dosya oluştur
- İstenmeyen kayıtları atla veya güncellenmiş haliyle yaz
- Eski dosyayı sil / yeniden adlandır

Yani doğrudan kayıt üstüne atlama mantığı yoktur.

---

## 8. Uygulama 2: Rastgele Erişimli Telefon Rehberi

Şimdi daha güçlü bir yapıya geçelim.

Burada verileri bir `struct` içinde tutacağız ve dosyaya binary olarak yazacağız. Böylece her kayıt aynı boyutta olacak ve belirli bir kayıt numarasına doğrudan gidebileceğiz.

### Mantık

Her kişi için şu alanları tutalım:

- kayıt numarası
- ad
- telefon

Burada kullanıcı kayıt numarasını biliyorsa ilgili kayda doğrudan erişebileceğiz.

### Struct yapısı

```c
struct Kisi {
    int id;
    char ad[50];
    char telefon[20];
};
```

Bu yapı sabit boyutlu kayıt mantığına uygundur.

### Bu uygulama neleri yapacak?

- Belirli ID ile kayıt ekleme
- Tüm kayıtları listeleme
- ID'ye göre doğrudan kayıt okuma
- ID'ye göre kayıt güncelleme

### Tam C Kodu

```c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define DOSYA_ADI "rehber_rastgele.dat"
#define MAX_KAYIT 100

struct Kisi {
    int id;
    char ad[50];
    char telefon[20];
};

void dosyaHazirla() {
    FILE *dosya = fopen(DOSYA_ADI, "rb");
    if (dosya == NULL) {
        dosya = fopen(DOSYA_ADI, "wb");
        if (dosya == NULL) {
            printf("Dosya olusturulamadi!\n");
            return;
        }

        struct Kisi bos;
        bos.id = -1;
        strcpy(bos.ad, "");
        strcpy(bos.telefon, "");

        for (int i = 0; i < MAX_KAYIT; i++) {
            fwrite(&bos, sizeof(struct Kisi), 1, dosya);
        }
    }

    fclose(dosya);
}

void kayitEkle() {
    FILE *dosya = fopen(DOSYA_ADI, "rb+");
    if (dosya == NULL) {
        printf("Dosya acilamadi!\n");
        return;
    }

    struct Kisi kisi;
    printf("Kayit ID (0-%d): ", MAX_KAYIT - 1);
    scanf("%d", &kisi.id);

    if (kisi.id < 0 || kisi.id >= MAX_KAYIT) {
        printf("Gecersiz ID!\n");
        fclose(dosya);
        return;
    }

    getchar();
    printf("Ad Soyad: ");
    fgets(kisi.ad, sizeof(kisi.ad), stdin);
    kisi.ad[strcspn(kisi.ad, "\n")] = 0;

    printf("Telefon: ");
    fgets(kisi.telefon, sizeof(kisi.telefon), stdin);
    kisi.telefon[strcspn(kisi.telefon, "\n")] = 0;

    fseek(dosya, kisi.id * sizeof(struct Kisi), SEEK_SET);
    fwrite(&kisi, sizeof(struct Kisi), 1, dosya);

    fclose(dosya);
    printf("Kayit eklendi/guncellendi.\n");
}

void kayitListele() {
    FILE *dosya = fopen(DOSYA_ADI, "rb");
    if (dosya == NULL) {
        printf("Dosya acilamadi!\n");
        return;
    }

    struct Kisi kisi;
    printf("\n--- RASTGELE ERISIMLI TELEFON REHBERI ---\n");

    for (int i = 0; i < MAX_KAYIT; i++) {
        fread(&kisi, sizeof(struct Kisi), 1, dosya);
        if (kisi.id != -1) {
            printf("ID: %d | Ad: %s | Tel: %s\n", kisi.id, kisi.ad, kisi.telefon);
        }
    }

    fclose(dosya);
}

void kayitAra() {
    FILE *dosya = fopen(DOSYA_ADI, "rb");
    if (dosya == NULL) {
        printf("Dosya acilamadi!\n");
        return;
    }

    int id;
    struct Kisi kisi;

    printf("Aranacak ID: ");
    scanf("%d", &id);

    if (id < 0 || id >= MAX_KAYIT) {
        printf("Gecersiz ID!\n");
        fclose(dosya);
        return;
    }

    fseek(dosya, id * sizeof(struct Kisi), SEEK_SET);
    fread(&kisi, sizeof(struct Kisi), 1, dosya);

    if (kisi.id == -1) {
        printf("Kayit bulunamadi.\n");
    } else {
        printf("Kayit bulundu: ID=%d | %s | %s\n", kisi.id, kisi.ad, kisi.telefon);
    }

    fclose(dosya);
}

void kayitGuncelle() {
    printf("Guncelleme islemi, ayni ID ile yeniden kayit yazarak yapilir.\n");
    kayitEkle();
}

int main() {
    int secim;
    dosyaHazirla();

    do {
        printf("\n--- RASTGELE ERISIMLI REHBER ---\n");
        printf("1. Kayit Ekle\n");
        printf("2. Kayitlari Listele\n");
        printf("3. ID ile Kayit Ara\n");
        printf("4. Kayit Guncelle\n");
        printf("0. Cikis\n");
        printf("Seciminiz: ");
        scanf("%d", &secim);

        switch (secim) {
            case 1:
                kayitEkle();
                break;
            case 2:
                kayitListele();
                break;
            case 3:
                kayitAra();
                break;
            case 4:
                kayitGuncelle();
                break;
            case 0:
                printf("Program sonlandi.\n");
                break;
            default:
                printf("Gecersiz secim!\n");
        }
    } while (secim != 0);

    return 0;
}
```

---

## 9. Bu Uygulamanın Ayrıntılı Analizi

Bu programda asıl sihir `fseek()` ile olur.

### 9.1 `fseek()` ne yapıyor?

Şu satıra dikkat edin:

```c
fseek(dosya, kisi.id * sizeof(struct Kisi), SEEK_SET);
```

Bu ifade şunu söyler:

- Dosyanın başından başla (`SEEK_SET`)
- `id` kadar kayıt ilerle
- Her kayıt `sizeof(struct Kisi)` byte yer kaplıyor
- Tam olarak ilgili kaydın bulunduğu noktaya git

Yani 20. kaydı bulmak için ilk 19 kaydı tek tek okumuyoruz. Doğrudan ilgili konuma ışınlanıyoruz.

### 9.2 Neden boş kayıtlar için `id = -1` kullanıldı?

Çünkü dosya başta 100 boş kayıtla hazırlanıyor. Eğer bir kaydın boş olup olmadığını ayırt etmek istiyorsak bir işaret değeri gerekir. `-1`, "burada geçerli kayıt yok" anlamında kullanılmıştır.

### 9.3 Bu yapı hangi durumlarda çok işe yarar?

- Öğrenci kayıt sistemi
- Personel kart sistemi
- Ürün stok dosyası
- Sabit boyutlu kayıt sistemleri
- Doğrudan kayıt güncelleme gereken uygulamalar

### 9.4 Bu yapının dikkat isteyen tarafı nedir?

- Kayıt düzeni bozulmamalıdır
- Struct alan uzunlukları iyi planlanmalıdır
- Dosyadaki kayıt boyutu değişirse eski verilerle uyumsuzluk oluşabilir
- Yanlış `fseek()` hesabı farklı kayıtların üzerine yazabilir

Yani burada hız kazanırken sorumluluk da artar.

---

## 10. Bu İki Telefon Rehberi Uygulaması Arasında Gerçek Fark Ne?

Şimdi teorik farkı değil, gerçek yazılım farkını konuşalım.

### Sıralı erişimli rehber

- Dosya içerikleri insanlar tarafından okunabilir
- Ekleme kolaydır
- Mantığı basittir
- Küçük veri kümeleri için gayet yeterlidir
- Ada göre arama yapılabilir ama tüm dosya taranır
- Güncelleme/silme işlemleri zahmetlidir

### Rastgele erişimli rehber

- Kayıt mantığı daha profesyoneldir
- Belirli kayıt numarasına anında ulaşılır
- Güncelleme daha kolaydır
- Daha büyük sistem mantığına yakındır
- Ama tasarım daha dikkat ister
- Metin gibi doğrudan okunması kolay değildir

### En kritik fark

Sıralı erişimde arama mantığı:

> "Oku, karşılaştır, değilse devam et."

Rastgele erişimde arama mantığı:

> "Konumu hesapla, doğrudan git, oku."

Bu fark küçük görünür ama büyük veri sistemlerinde oyunun kurallarını değiştirir.

---

## 11. Öğrenciler İçin Derin Yorum: Hangi Durumda Hangisi Kullanılır?

Bir öğrencinin burada sadece kodu ezberlemesi değil, karar verebilmesi gerekir.

### Sıralı erişim tercih edilir, eğer:

- Veri azsa
- Dosya insan tarafından okunabilir olsun isteniyorsa
- Basit arşiv mantığı yeterliyse
- Listeleme ana işlemse
- Güncelleme çok sık yapılmıyorsa

### Rastgele erişim tercih edilir, eğer:

- Belirli kayda hızlı erişim gerekiyorsa
- Kayıt bazlı güncelleme sık yapılacaksa
- Veri yapısı sabit boyutlu tutulabiliyorsa
- Performans önemliyse
- Daha ciddi kayıt sistemi kuruluyorsa

### Ama dikkat

Rastgele erişim her zaman "daha iyi" değildir. Küçük bir günlük not defteri uygulamasında binary random access kurmak bazen gereksiz karmaşıklıktır. Doğru çözüm, probleme uygun çözümdür.

Bu yüzden yazılımda en önemli soru şudur:

> "Bunu yapabilir miyim?" değil, **"Bunu neden bu şekilde yapıyorum?"**

---

## 12. Sık Yapılan Hatalar

Bu konuda öğrencilerin en sık düştüğü çukurlar şunlardır:

### 12.1 `fopen()` kontrolü yapmamak

Dosya açılamazsa program çökebilir veya saçma sonuç üretir.

### 12.2 `scanf()` sonrası tampon belleği temizlememek

`getchar()` veya benzeri önlemler alınmazsa `fgets()` boş satır okuyabilir.

### 12.3 Struct alan boyutlarını plansız seçmek

Çok küçük seçilirse veri kesilir, çok büyük seçilirse dosya şişer.

### 12.4 Rastgele erişimde yanlış offset hesabı

Yanlış hesap, yanlış kaydı okur veya başka kaydın üstüne yazar.

### 12.5 Metin ve binary mantığını karıştırmak

`fprintf()` ile yazılan dosyaya `fread()` ile dalmaya çalışmak felaket getirir.

Bu nedenle araçları değil, mantığı öğrenmek gerekir.

---

## 13. Bölüm Özeti

Bu derste C programlama dili ile iki temel dosya erişim modelini inceledik:

- **Sıralı erişim**, veriyi baştan sona doğru okuyarak işler. Özellikle metin tabanlı küçük sistemlerde pratiktir.
- **Rastgele erişim**, belirli bir kayda doğrudan gitmeyi sağlar. Kayıt bazlı işlemlerde çok güçlüdür.

Ayrıca her iki yaklaşımı somutlaştırmak için iki ayrı telefon rehberi uygulaması gördük:

- Metin dosyası kullanan sıralı erişimli rehber
- Binary dosya ve `struct` kullanan rastgele erişimli rehber

Bu iki yaklaşım arasında seçim yaparken tek ölçüt hız değildir. Veri büyüklüğü, güncelleme ihtiyacı, okunabilirlik, bakım kolaylığı ve problem türü birlikte düşünülmelidir.

Kısacası dosya işlemleri, sadece veri yazmak değil; **veriyi doğru modelde saklamayı seçmek** demektir.

---

## 14. Alıştırmalar

### Alıştırma 1
Sıralı erişimli telefon rehberine aşağıdaki özellikleri ekleyin:

- telefon numarasına göre arama
- kayıt silme
- kayıt güncelleme

### Alıştırma 2
Rastgele erişimli rehber uygulamasına şu özelliği ekleyin:

- silinen kaydı `id = -1` yaparak boşaltma

### Alıştırma 3
Aşağıdaki soruya yazılı cevap verin:

> 10 kayıtlı bir dosya ile 1 milyon kayıtlı bir dosyada sıralı ve rastgele erişim davranışı neden farklı hissedilir?

### Alıştırma 4
Bir öğrenci bilgi sistemi tasarladığınızı düşünün. Hangi verileri sıralı, hangilerini rastgele erişimli dosyada tutmayı tercih ederdiniz? Neden?

### Alıştırma 5
Rastgele erişimli rehber uygulamasında ada göre arama yapmak istersek neden yine dosyanın tamamını taramak gerekebilir? Açıklayınız.

---

## Kaynaklar ve İleri Okuma

- Deitel, P. & Deitel, H. (2016). *C How to Program*. Pearson.
- Kernighan, B. W. & Ritchie, D. M. (1988). *The C Programming Language* (2nd ed.). Prentice Hall.
- Schildt, H. (2007). *C: The Complete Reference*. McGraw-Hill.
- King, K. N. (2008). *C Programming: A Modern Approach* (2nd ed.). W. W. Norton.
