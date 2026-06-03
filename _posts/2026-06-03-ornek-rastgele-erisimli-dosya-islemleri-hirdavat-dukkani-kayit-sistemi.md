---
layout: post
title: "Örnek Rastgele Erişimli Dosya İşlemleri: Hırdavat Dükkanı Kayıt Sistemi"
date: 2026-06-03 09:50:00 +0300
categories: algoritma-ve-programlama-ii
---

Bir dosya sistemi konusunu gerçekten anladığınızı gösteren yer, `fopen()` fonksiyonunu ezberlediğiniz an değildir. Asıl kırılma noktası şudur: **Bir kayda doğrudan nasıl gideceğinizi** kavradığınız an, dosya işlemleri sizin için ezber olmaktan çıkar ve mantığa dönüşür.

Bu derste tam da bunu yapacağız.

Elimizde bir **Hırdavat Dükkanı Kayıt Sistemi** var. Bu uygulama ürün ekliyor, ürün güncelliyor, ürün siliyor ve tüm ürünleri listeliyor. Ama bu işlemleri sıradan bir metin dosyasında satır satır gezerek yapmıyor. Bunun yerine, her ürün için dosyada sabit büyüklükte bir alan ayırıyor ve `fseek()` ile doğrudan ilgili kaydın bulunduğu adrese sıçrıyor.

Yani bu dersin kalbi tek cümlede şudur:

> Dosyada 37. kaydı aramak için ilk 36 kaydı okumak zorunda değiliz.

İşte rastgele erişim tam olarak budur.

Bu yazıda kodu sadece göstermekle kalmayacağız. Her satırın neden var olduğunu, programın bellekte ve dosyada nasıl düşündüğünü, öğrencinin zihninde tek bir boşluk kalmayacak şekilde adım adım çözeceğiz.

---

## Bu Derste Neler Öğreneceksiniz?

Bu dersin sonunda şunları yapabiliyor olmanız beklenmektedir:

- Rastgele erişimli dosya mantığını gerçek bir uygulama üzerinden açıklayabilmek
- `struct` kullanarak sabit uzunluklu kayıt tasarlayabilmek
- `fseek()`, `fread()`, `fwrite()`, `rewind()` ve `fflush()` fonksiyonlarının neden kullanıldığını anlayabilmek
- Dosyada belirli bir kayıt numarasına doğrudan erişim yapabilmek
- Kayıt ekleme, güncelleme, silme ve listeleme işlemlerini mantıksal olarak çözümleyebilmek
- Binary dosya ile çalışan bir menü tabanlı uygulamanın akışını yorumlayabilmek

---

## 1. Problem Nedir?

Bir hırdavat dükkânı düşünün. Dükkânda vidalar, matkap uçları, pense, çekiç, tornavida setleri, anahtar takımları gibi çok sayıda ürün var.

Her ürün için şu bilgileri saklamak istiyoruz:

- Kayıt numarası
- Ürün adı
- Miktar
- Ücret

Şimdi önemli soruya gelelim:

Bu ürünleri dosyada nasıl tutacağız?

Eğer metin dosyasına satır satır yazarsak listeleme kolay olabilir. Ama diyelim ki kullanıcı doğrudan **25 numaralı ürünü güncellemek** istiyor. O zaman metin dosyasında çoğu zaman baştan sona kadar arama yapmak gerekir.

Bu yavaşlar. Daha da önemlisi, mantık dağılır.

Biz burada daha profesyonel bir yaklaşım kullanıyoruz:

- Her kayıt **aynı boyutta** olacak
- Dosyada **100 kayıtlık sabit alan** ayrılacak
- `kNo` bilgisine göre ilgili kaydın byte adresi hesaplanacak
- Program doğrudan o kayda gidecek

Yani dosya bir metin akışı gibi değil, bir **raf sistemi** gibi davranacak.

---

## 2. Rastgele Erişim Mantığını Zihinde Netleştirelim

Bu konunun düğüm noktası burasıdır.

Diyelim ki her kayıt bir kutu olsun. Her kutunun genişliği aynı olsun. 1. kutu ilk rafta, 2. kutu onun yanında, 3. kutu onun yanında diye devam etsin.

Eğer her kutunun genişliği eşitse, 40. kutunun nerede olduğunu bulmak için tüm kutuları tek tek açmamıza gerek kalmaz. Şunu deriz:

- 1 kutu = `sizeof(struct Hirdavat)` kadar yer kaplıyor
- 40. kutuya gitmek için `(40 - 1) * sizeof(struct Hirdavat)` kadar ilerle

İşte `fseek()` tam olarak bunu yapar.

Formülümüz:

```c
(kNo - 1) * sizeof(struct Hirdavat)
```

Buradaki mantık çok kritik:

- `kNo` = kayıt numarası
- `kNo - 1` = dizisel mantıkta kaç kayıt atlanacağı
- `sizeof(struct Hirdavat)` = her kaydın byte cinsinden büyüklüğü
- çarpım sonucu = dosyada gidilecek byte konumu

Bu formülü anlamadan rastgele erişim tam oturmaz.

---

## 3. Programın Tam Kodu

Aşağıda uygulamanın tamamı yer alıyor:

```c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define MAKS_KAYIT 100
#define MAKS_AD_UZUNLUK 30

struct Hirdavat
{
    int kayitNo;
    char ad[MAKS_AD_UZUNLUK];
    int miktar;
    float ucret;
};

void dosyayiBaslat(FILE *dosyaPtr);
void kayitEkle(FILE *dosyaPtr);
void kayitGuncelle(FILE *dosyaPtr);
void kayitSil(FILE *dosyaPtr);
void kayitlariListele(FILE *dosyaPtr);

int main()
{
    FILE *dosyaPtr;
    int secim = -1;

    dosyaPtr = fopen("hirdavat.dat", "rb+");

    if (dosyaPtr == NULL)
    {
        dosyaPtr = fopen("hirdavat.dat", "wb+");

        if (dosyaPtr != NULL)
        {
            dosyayiBaslat(dosyaPtr);
            printf("Yeni hirdavat.dat dosyasi olusturuldu.\n");
        }
    }

    if (dosyaPtr == NULL)
    {
        printf("Dosya acilamadi!\n");
        return 1;
    }

    while (secim != 0)
    {
        printf("\n");
        printf("=========================================\n");
        printf(" HIRDAVAT DUKKANI ENVANTER SISTEMI\n");
        printf("=========================================\n");
        printf("1. Yeni urun ekle\n");
        printf("2. Urun guncelle\n");
        printf("3. Urun sil\n");
        printf("4. Tum urunleri listele\n");
        printf("0. Cikis\n");
        printf("Seciminiz: ");

        if (scanf("%d", &secim) != 1)
        {
            printf("Hatali giris yaptiniz!\n");

            while (getchar() != '\n');

            secim = -1;
        }
        else
        {
            if (secim == 1)
            {
                kayitEkle(dosyaPtr);
            }
            else if (secim == 2)
            {
                kayitGuncelle(dosyaPtr);
            }
            else if (secim == 3)
            {
                kayitSil(dosyaPtr);
            }
            else if (secim == 4)
            {
                kayitlariListele(dosyaPtr);
            }
            else if (secim != 0)
            {
                printf("Gecersiz menu secimi!\n");
            }
        }
    }

    fclose(dosyaPtr);

    printf("Program sonlandirildi.\n");

    return 0;
}

void dosyayiBaslat(FILE *dosyaPtr)
{
    struct Hirdavat bosKayit = {0, "", 0, 0.0f};
    int i;

    rewind(dosyaPtr);

    for (i = 0; i < MAKS_KAYIT; i++)
    {
        fwrite(&bosKayit, sizeof(struct Hirdavat), 1, dosyaPtr);
    }

    fflush(dosyaPtr);
}

void kayitEkle(FILE *dosyaPtr)
{
    struct Hirdavat urun;
    int kNo;

    printf("Kayit numarasi (1-%d): ", MAKS_KAYIT);
    scanf("%d", &kNo);

    if (kNo < 1 || kNo > MAKS_KAYIT)
    {
        printf("Gecersiz kayit numarasi!\n");
        return;
    }

    fseek(dosyaPtr, (kNo - 1) * sizeof(struct Hirdavat), SEEK_SET);

    if (fread(&urun, sizeof(struct Hirdavat), 1, dosyaPtr) != 1)
    {
        printf("Dosya okuma hatasi!\n");
        return;
    }

    if (urun.kayitNo != 0)
    {
        printf("Bu kayit dolu. Guncelleme menusunu kullanin.\n");
        return;
    }

    urun.kayitNo = kNo;

    printf("Urun adi: ");
    scanf(" %29[^\n]", urun.ad);

    printf("Miktar: ");
    scanf("%d", &urun.miktar);

    if (urun.miktar < 0)
    {
        printf("Miktar negatif olamaz!\n");
        return;
    }

    printf("Ucret: ");
    scanf("%f", &urun.ucret);

    if (urun.ucret < 0)
    {
        printf("Ucret negatif olamaz!\n");
        return;
    }

    fseek(dosyaPtr, (kNo - 1) * sizeof(struct Hirdavat), SEEK_SET);

    if (fwrite(&urun, sizeof(struct Hirdavat), 1, dosyaPtr) != 1)
    {
        printf("Dosyaya yazma hatasi!\n");
        return;
    }

    fflush(dosyaPtr);

    printf("Yeni urun basariyla eklendi.\n");
}

void kayitGuncelle(FILE *dosyaPtr)
{
    struct Hirdavat urun;
    int kNo;

    printf("Guncellenecek kayit numarasi (1-%d): ", MAKS_KAYIT);
    scanf("%d", &kNo);

    if (kNo < 1 || kNo > MAKS_KAYIT)
    {
        printf("Gecersiz kayit numarasi!\n");
        return;
    }

    fseek(dosyaPtr, (kNo - 1) * sizeof(struct Hirdavat), SEEK_SET);

    if (fread(&urun, sizeof(struct Hirdavat), 1, dosyaPtr) != 1)
    {
        printf("Dosya okuma hatasi!\n");
        return;
    }

    if (urun.kayitNo == 0)
    {
        printf("Bu kayit bos.\n");
        return;
    }

    printf("\nMevcut Bilgiler\n");
    printf("------------------------------\n");
    printf("Urun Adi : %s\n", urun.ad);
    printf("Miktar   : %d\n", urun.miktar);
    printf("Ucret    : %.2f\n", urun.ucret);

    printf("\nYeni urun adi: ");
    scanf(" %29[^\n]", urun.ad);

    printf("Yeni miktar: ");
    scanf("%d", &urun.miktar);

    if (urun.miktar < 0)
    {
        printf("Miktar negatif olamaz!\n");
        return;
    }

    printf("Yeni ucret: ");
    scanf("%f", &urun.ucret);

    if (urun.ucret < 0)
    {
        printf("Ucret negatif olamaz!\n");
        return;
    }

    fseek(dosyaPtr, (kNo - 1) * sizeof(struct Hirdavat), SEEK_SET);

    if (fwrite(&urun, sizeof(struct Hirdavat), 1, dosyaPtr) != 1)
    {
        printf("Dosyaya yazma hatasi!\n");
        return;
    }

    fflush(dosyaPtr);

    printf("Kayit basariyla guncellendi.\n");
}

void kayitSil(FILE *dosyaPtr)
{
    struct Hirdavat urun;
    struct Hirdavat bosKayit = {0, "", 0, 0.0f};
    int kNo;

    printf("Silinecek kayit numarasi (1-%d): ", MAKS_KAYIT);
    scanf("%d", &kNo);

    if (kNo < 1 || kNo > MAKS_KAYIT)
    {
        printf("Gecersiz kayit numarasi!\n");
        return;
    }

    fseek(dosyaPtr, (kNo - 1) * sizeof(struct Hirdavat), SEEK_SET);

    if (fread(&urun, sizeof(struct Hirdavat), 1, dosyaPtr) != 1)
    {
        printf("Dosya okuma hatasi!\n");
        return;
    }

    if (urun.kayitNo == 0)
    {
        printf("Bu kayit zaten bos.\n");
        return;
    }

    fseek(dosyaPtr, (kNo - 1) * sizeof(struct Hirdavat), SEEK_SET);

    if (fwrite(&bosKayit, sizeof(struct Hirdavat), 1, dosyaPtr) != 1)
    {
        printf("Dosyaya yazma hatasi!\n");
        return;
    }

    fflush(dosyaPtr);

    printf("%d numarali kayit silindi.\n", kNo);
}

void kayitlariListele(FILE *dosyaPtr)
{
    struct Hirdavat urun;
    int i;

    printf("\n");
    printf("================================================================\n");
    printf("%-10s %-25s %-10s %-10s\n", "KayitNo", "Urun Adi", "Miktar", "Ucret");
    printf("================================================================\n");

    rewind(dosyaPtr);

    for (i = 0; i < MAKS_KAYIT; i++)
    {
        if (fread(&urun, sizeof(struct Hirdavat), 1, dosyaPtr) != 1)
        {
            printf("Dosya okuma hatasi!\n");
            return;
        }

        if (urun.kayitNo != 0)
        {
            printf("%-10d %-25s %-10d %-10.2f\n",
                   urun.kayitNo,
                   urun.ad,
                   urun.miktar,
                   urun.ucret);
        }
    }
}
```

---

## 4. Sabitler Neden Tanımlanmış?

Programın başında şu iki tanım var:

```c
#define MAKS_KAYIT 100
#define MAKS_AD_UZUNLUK 30
```

Bunlar çok küçük görünüyor ama tasarımın omurgası bunlardır.

### `MAKS_KAYIT`

Bu değer bize şunu söyler:

- Dosyada en fazla 100 kayıt olacak
- Program kayıt numarasını 1 ile 100 arasında kabul edecek
- Dosya ilk oluşturulduğunda 100 adet boş kayıt hazırlanacak

Bu, rastgele erişim için çok kullanışlıdır. Çünkü alan baştan ayrılmış olur.

### `MAKS_AD_UZUNLUK`

Bu değer de ürün adının dizide kaç karakter kaplayacağını belirler.

```c
char ad[MAKS_AD_UZUNLUK];
```

Bu ne sağlar?

- Her kayıtta ürün adı için aynı uzunlukta alan ayrılır
- Böylece `struct Hirdavat` her zaman aynı boyutta olur
- Her kayıt sabit boyutlu olduğu için byte adresi hesaplanabilir

Eğer kayıtların boyutu değişken olsaydı, `fseek()` ile doğrudan kayda gitmek çok daha zor olurdu.

---

## 5. `struct Hirdavat` Yapısını Parçalayalım

```c
struct Hirdavat
{
    int kayitNo;
    char ad[MAKS_AD_UZUNLUK];
    int miktar;
    float ucret;
};
```

Bu yapı, bir ürünün tüm bilgilerini tek pakette toplar.

### Alanlar neyi temsil ediyor?

- `kayitNo`: ürünün sistem içindeki benzersiz numarası
- `ad`: ürün adı
- `miktar`: stok adedi
- `ucret`: ürün fiyatı

Bu yapı neden önemli?

Çünkü dosyaya tek tek alanlar değil, doğrudan bir **kayıt nesnesi** yazıyoruz:

```c
fwrite(&urun, sizeof(struct Hirdavat), 1, dosyaPtr);
```

Yani sistemin mantığı şu:

> Bir ürün = bir `struct Hirdavat` kaydı

Bu fikir netleşirse, `fread()` ve `fwrite()` çok daha anlaşılır hale gelir.

---

## 6. `main()` Fonksiyonu Programın Beynidir

Program ilk açıldığında şu akış çalışır:

1. Dosya var mı diye bakılır
2. Varsa okuma-yazma modunda açılır
3. Yoksa yeni dosya oluşturulur
4. Yeni dosya oluşturulduysa 100 boş kayıtla doldurulur
5. Kullanıcıya menü gösterilir
6. Seçime göre uygun fonksiyon çağrılır

Şu satırla başlıyoruz:

```c
dosyaPtr = fopen("hirdavat.dat", "rb+");
```

### `rb+` ne demek?

- `r` → okuma
- `b` → binary
- `+` → hem okuma hem yazma

Yani bu modda dosya:

- ikili formatta açılır
- içeriği silinmez
- hem okuma hem güncelleme yapılabilir

Ama dosya yoksa bu mod başarısız olur. O yüzden program ikinci bir hamle yapar:

```c
dosyaPtr = fopen("hirdavat.dat", "wb+");
```

### `wb+` ne demek?

- `w` → yazma, gerekirse yeni dosya oluştur
- `b` → binary
- `+` → okuma ve yazma birlikte mümkün olsun

Yani dosya yoksa sistem onu üretir.

Bu bölümdeki asıl güzellik şudur:

> Program ilk çalıştırmada kendi veri dosyasını kendisi hazırlıyor.

Bu gerçek uygulama mantığıdır.

---

## 7. `dosyayiBaslat()` Fonksiyonu Neden Var?

Yeni dosya oluştuğu anda içi boş bir dosya elde ederiz. Ama bizim rastgele erişim yapabilmemiz için dosyanın içinde 100 kayıtlık alan olması gerekir.

İşte bu fonksiyon bunu yapıyor:

```c
void dosyayiBaslat(FILE *dosyaPtr)
{
    struct Hirdavat bosKayit = {0, "", 0, 0.0f};
    int i;

    rewind(dosyaPtr);

    for (i = 0; i < MAKS_KAYIT; i++)
    {
        fwrite(&bosKayit, sizeof(struct Hirdavat), 1, dosyaPtr);
    }

    fflush(dosyaPtr);
}
```

### Buradaki kritik fikir

`bosKayit` şudur:

- `kayitNo = 0`
- `ad = ""`
- `miktar = 0`
- `ucret = 0.0`

Program bunu **boş kayıt işareti** olarak kullanıyor.

Yani daha sonra bir kayıt okunduğunda:

- `kayitNo == 0` ise o alan boş kabul ediliyor
- `kayitNo != 0` ise o alan dolu kabul ediliyor

Bu çok temiz bir yöntemdir. Çünkü ayrı bir “dolu mu boş mu” dizisine ihtiyaç bırakmaz.

### `rewind(dosyaPtr)` neden kullanıldı?

Dosya imlecini başa alır. Böylece boş kayıtları en baştan yazmaya başlarız.

### `fflush(dosyaPtr)` neden var?

Yazılan verilerin tamponda beklemek yerine gerçekten dosyaya aktarılmasını garanti etmeye çalışır. Özellikle yazma sonrası verinin fiziksel olarak dosyaya gitmesi açısından güven verici bir adımdır.

---

## 8. Menü Mantığı Çok Değerli

Program sonsuz döngüye benzer bir kullanıcı etkileşimi kuruyor:

```c
while (secim != 0)
```

Yani kullanıcı `0` girene kadar sistem çalışmaya devam eder.

Menü tabanlı uygulamaların öğretici tarafı şudur:

- Kullanıcı akışı nettir
- Her seçenek bir fonksiyona karşılık gelir
- Kod parçalı ve okunur olur

Burada ayrıca giriş kontrolü de yapılmış:

```c
if (scanf("%d", &secim) != 1)
```

Bu, kullanıcı sayı yerine metin girerse programın saçmalamasını önler.

Ardından şu satır dikkat çekicidir:

```c
while (getchar() != '\n');
```

Bu, giriş tamponunda kalan hatalı karakterleri temizler. Öğrencilerin sıklıkla atladığı ama gerçek programlarda çok işe yarayan bir detaydır.

---

## 9. `kayitEkle()` Fonksiyonu: Yeni Ürünün Dosyadaki Yerini Hesaplamak

Bu fonksiyonun temel görevi şudur:

- Kullanıcıdan kayıt numarası al
- O numaraya ait alan boş mu kontrol et
- Boşsa ürün bilgilerini al
- Doğrudan ilgili konuma yaz

İlk kritik kontrol:

```c
if (kNo < 1 || kNo > MAKS_KAYIT)
```

Bu neden şart?

Çünkü kullanıcı 0, -5 ya da 500 gibi değer girerse dosyada geçersiz konuma gitmeye çalışırız. Bu da mantık hatasıdır.

### Dosyada ilgili kayda gitme anı

```c
fseek(dosyaPtr, (kNo - 1) * sizeof(struct Hirdavat), SEEK_SET);
```

Bu satır dersin kalbidir.

`SEEK_SET` demek, konumu dosyanın başından itibaren ayarlamak demektir.

Örnek:

- `kNo = 1` ise ofset = 0
- `kNo = 2` ise ofset = 1 kayıt boyu
- `kNo = 10` ise ofset = 9 kayıt boyu

Yani 10. ürün için doğrudan 10. ürün kutusuna gidiyoruz.

### Neden önce `fread()` yapılıyor?

```c
if (fread(&urun, sizeof(struct Hirdavat), 1, dosyaPtr) != 1)
```

Çünkü sistem önce o alanın boş mu dolu mu olduğunu görmek istiyor.

Ardından şu kontrol geliyor:

```c
if (urun.kayitNo != 0)
```

Bu ne demek?

- Eğer kayıt numarası sıfır değilse burada zaten bir ürün var
- Aynı alanın üstüne yeni kayıt yazmak istemiyoruz
- Kullanıcıya “güncelleme menüsünü kullan” deniyor

Bu, veri güvenliği açısından doğru yaklaşım.

### Ürün adı nasıl okunuyor?

```c
scanf(" %29[^\n]", urun.ad);
```

Bu satır ilk bakışta korkutucu gelebilir ama parçalayınca çok mantıklıdır:

- Baştaki boşluk: önceki girişten kalan boşlukları atla
- `%29[^\n]`: en fazla 29 karakter oku, satır sonuna kadar devam et

Bu sayede kullanıcı boşluk içeren ürün adları da girebilir:

- `Yildiz Tornavida Seti`
- `10 mm Matkap Ucu`

Ayrıca 29 sınırı, dizinin taşmasını önler. Çünkü dizimiz 30 elemanlıdır ve son karakter `\0` için boş kalmalıdır.

### Neden negatif kontrolü yapılıyor?

```c
if (urun.miktar < 0)
if (urun.ucret < 0)
```

Çünkü stok miktarı ve fiyatın negatif olması mantıksızdır. Bu tür kontroller sadece programı değil, öğrencinin problem çözme disiplinini de güçlendirir.

### Neden tekrar `fseek()` yapılıyor?

Çok önemli nokta.

İlk `fseek()` sonrası `fread()` yapıldı. `fread()` dosya imlecini ileri taşır. Eğer hiç geri gitmeden `fwrite()` yaparsak yanlış yere yazabiliriz. O yüzden yazmadan önce tekrar aynı konuma dönüyoruz:

```c
fseek(dosyaPtr, (kNo - 1) * sizeof(struct Hirdavat), SEEK_SET);
```

Bu detay gözden kaçarsa kayıtlar kayabilir.

---

## 10. `kayitGuncelle()` Fonksiyonu: Var Olan Kaydı Değiştirmek

Bu fonksiyonun mantığı şudur:

1. Kullanıcı hangi kaydı güncellemek istediğini söyler
2. Program doğrudan o kayda gider
3. Önce mevcut veriyi okur
4. Kayıt boşsa güncelleme yapmaz
5. Doluysa yeni bilgileri alır
6. Aynı konuma geri yazar

Buradaki en güzel öğretici noktalardan biri şu bölüm:

```c
printf("\nMevcut Bilgiler\n");
printf("------------------------------\n");
printf("Urun Adi : %s\n", urun.ad);
printf("Miktar   : %d\n", urun.miktar);
printf("Ucret    : %.2f\n", urun.ucret);
```

Bu, kullanıcıya mevcut kaydı gösteriyor. Böylece “körü körüne güncelleme” yapılmıyor.

### Mantıksal kazanım

Öğrenci şunu fark etmelidir:

- Güncelleme = dosyanın tamamını yeniden kurmak değildir
- Güncelleme = ilgili kaydı okuyup aynı yere yeni hâlini yazmaktır

Rastgele erişimin asıl gücü burada ortaya çıkar.

---

## 11. `kayitSil()` Fonksiyonu: Gerçekten Silmiyoruz, Boşaltıyoruz

Birçok öğrenci “silme” deyince dosyadan fiziksel olarak veri çıkarıldığını sanır. Bu programda olan şey bu değil.

Buradaki silme işlemi şu mantıkla yapılıyor:

- Silinecek kayıt bulunur
- Eğer doluysa üzerine boş kayıt yazılır

Yani:

```c
struct Hirdavat bosKayit = {0, "", 0, 0.0f};
```

sonra bu kayıt dosyada ilgili konuma yazılır.

Bu yüzden şunu net söyleyelim:

> Bu uygulamada silme işlemi, kaydın yerini kaldırmak değil; o kaydın alanını yeniden boş kayıt hâline getirmektir.

Bu neden güzel?

- Dosya boyutu sabit kalır
- Kayıt numaraları sistemi bozulmaz
- Rastgele erişim düzeni korunur
- Silinen alan daha sonra tekrar kullanılabilir

Bu, sabit kayıt yapılarında çok yaygın ve mantıklı bir tekniktir.

---

## 12. `kayitlariListele()` Fonksiyonu: Neden Baştan Sona Okuyoruz?

Burada çok önemli bir ayrım var.

Rastgele erişim demek her zaman tek bir kayda gideceğiz demek değildir. Bazen tüm kayıtları görmek isteriz. İşte o durumda dosyanın başına döner ve sırayla okuruz:

```c
rewind(dosyaPtr);
```

Sonra döngü içinde 100 kez okuma yaparız:

```c
for (i = 0; i < MAKS_KAYIT; i++)
```

Her kayıtta şu kontrol yapılır:

```c
if (urun.kayitNo != 0)
```

Yani sadece dolu kayıtlar ekrana basılır.

Buradan önemli bir zihinsel sonuç çıkar:

- **Tek kayıt işlemleri** → `fseek()` ile doğrudan erişim
- **Toplu listeleme** → baştan sona dolaşma

Yani rastgele erişim sistemi içinde bile bazen sıralı dolaşma kullanılır. Bu bir çelişki değil, doğru araç seçmektir.

---

## 13. Programın Dosya Üzerindeki Davranışını Somutlaştıralım

Diyelim ki her kayıt 44 byte yer kaplasın. Bu sayı derleyiciye göre değişebilir ama mantık aynıdır.

O zaman dosyada kayıtların yerleri kabaca şöyle düşünülür:

- 1. kayıt → 0. byte
- 2. kayıt → 44. byte
- 3. kayıt → 88. byte
- 4. kayıt → 132. byte
- ...

Mesela kullanıcı 8 numaralı kaydı güncellemek istiyorsa program şu mantığı izler:

```text
(8 - 1) * 44 = 308
```

Sonra dosyada 308. byte konumuna gider ve oradaki kaydı okur/yazar.

İşte dosya işlemlerinin büyüsü burada. Program satır aramıyor, doğrudan adrese gidiyor.

---

## 14. Neden Binary Dosya Kullanıldı?

Program `rb+` ve `wb+` modlarıyla çalıştığı için binary dosya kullanıyor.

Bunun nedeni açık:

- `struct` kayıtları doğrudan yazmak kolaylaşır
- Sabit boyutlu kayıtlar korunur
- `fseek()` ile byte bazlı atlama mantıklı olur
- Metin ayrıştırma derdi azalır

Ama bunun bir bedeli de vardır:

- Dosya metin editöründe açıldığında okunabilir görünmez
- İçerik insanlar için değil, program için düzenlenmiştir

Bu yüzden binary dosyalar genelde performans ve yapı kontrolü için tercih edilir.

---

## 15. Örnek Bir Senaryo Üzerinden Yürüyelim

Diyelim ki kullanıcı programı ilk kez açtı.

### Adım 1: Dosya oluşturulur

- `hirdavat.dat` yoktur
- Program dosyayı `wb+` ile açar
- `dosyayiBaslat()` çağrılır
- Dosya içine 100 boş kayıt yazılır

### Adım 2: Kullanıcı 5 numaralı ürünü eklemek ister

Girdi:

- kayıt no = 5
- ürün adı = `Matkap Ucu`
- miktar = 12
- ücret = 45.50

Program ne yapar?

1. 5 numaranın geçerli olduğunu kontrol eder
2. 5. kayıt konumuna gider
3. Oradaki kaydı okur
4. Boş olduğunu görür
5. Yeni bilgileri `urun` yapısına doldurur
6. Tekrar 5. kayıt konumuna gider
7. Kaydı dosyaya yazar

### Adım 3: Kullanıcı 5 numaralı ürünü güncellemek ister

Yeni değerler:

- ürün adı = `Matkap Ucu Seti`
- miktar = 18
- ücret = 79.90

Program doğrudan 5. kayda gider ve aynı konumdaki veriyi yeniler.

### Adım 4: Kullanıcı ürünü silmek ister

Bu kez sistem 5. kayıt alanına boş kayıt yazar.

Yani 5 numaralı raf boşalmış olur.

---

## 16. Bu Programda Öğrencilerin En Çok Kaçırdığı İnce Noktalar

Burayı özellikle dikkatle okuyun.

### 1. `fseek()` sadece bir kez kullanılmıyor

Çünkü okuma yaptıktan sonra imleç yer değiştirir. Yazmadan önce aynı yere tekrar dönmek gerekir.

### 2. `kayitNo == 0` boşluk işaretidir

Bu programın “silinmiş/boş” mantığı bu tek kurala dayanıyor.

### 3. Sabit uzunluk olmazsa rastgele erişim mantığı dağılır

Eğer her kayıt farklı boyutta olursa 17. kaydın nerede başladığını kolayca hesaplayamazsınız.

### 4. Listeleme işlemi yine sıralı olabilir

Rastgele erişim sistemi kurmuş olmanız, her zaman tek tek atlayacağınız anlamına gelmez.

### 5. Binary dosya, metin dosyasından farklı düşünülmelidir

Burada satır, kelime, ayraç değil; doğrudan byte düzeni ve kayıt boyutu önemlidir.

---

## 17. Bu Kodun Güçlü Yönleri

Bu uygulama eğitim açısından çok iyi bir örnektir. Çünkü:

- Menü tabanlıdır
- Gerçek problem çözer
- Dosya yoksa oluşturur
- Boş kayıt mantığını öğretir
- `struct` kullanımını somutlaştırır
- `fseek()` konusunu gerçekten gösterir
- Ekleme, güncelleme, silme ve listeleme işlemlerini aynı yapı üzerinde toplar

Kısacası bu program sadece dosya işlemi anlatmıyor; **kayıt tabanlı düşünmeyi** öğretiyor.

---

## 18. Geliştirilmek İstenirse Neler Yapılabilir?

Gerçek bir ödev ya da proje devamında şu geliştirmeler yapılabilir:

- Ürünü kayıt numarası yerine ada göre arama
- Sadece stokta olan ürünleri listeleme
- Belirli fiyat aralığındaki ürünleri gösterme
- Silmeden önce onay isteme
- Aynı ürün adını tekrar eklemeyi engelleme
- Giriş doğrulamalarını daha güçlü hâle getirme
- Türkçe karakter ve taşma kontrollerini daha güvenli yöntemlerle yönetme (`fgets` gibi)

Yani bu uygulama final değil; çok sağlam bir temel.

---

## 19. Kafa Karıştıran Sorulara Kısa ve Net Cevaplar

### Soru 1: Neden dizi değil de dosya kullanıyoruz?

Çünkü dizi bellektedir ve program kapanınca kaybolur. Dosya kalıcıdır.

### Soru 2: Neden metin dosyası değil de binary dosya kullandık?

Çünkü sabit boyutlu kayıtlarla doğrudan erişim yapmak daha kolaydır.

### Soru 3: Neden 100 tane boş kayıt yazıyoruz?

Çünkü rastgele erişim için her kayıt alanının baştan belirlenmiş olması gerekir.

### Soru 4: Silme neden gerçek silme değil?

Çünkü sabit kayıt mantığında alanı kaldırmak yerine boş kayıtla işaretlemek daha pratiktir.

### Soru 5: `sizeof(struct Hirdavat)` neden bu kadar önemli?

Çünkü dosyada bir kaydın kaç byte kapladığını o belirler. Adres hesabı onunla yapılır.

---

## 20. Sonuç

Bu uygulama küçük görünüyor olabilir. Ama aslında dosya sistemleri dersinin en kritik eşiğini temsil ediyor.

Çünkü burada öğrendiğiniz şey sadece “dosyaya yazmak” değildir. Öğrendiğiniz şey şudur:

- Veriyi kayıt olarak tasarlamak
- Her kayda sabit alan ayırmak
- Dosyada fiziksel konum hesabı yapmak
- İstenen kayda doğrudan erişmek
- Güncellemeyi tüm dosyayı bozmadan yapmak

Eğer bu mantığı gerçekten kavradıysanız, artık rastgele erişimli dosya işlemleri sizin için sisli bir konu olmaktan çıktı.

Ve dürüst olayım: bu konuyu anlayan öğrenci, C’de dosya işlemlerinin en tatsız görünen bölümünü kırmış olur. Gerisi teknik tekrar ve pratik meselesidir.

---

## Mini Ödev

Aşağıdaki geliştirmeleri kendiniz yapmayı deneyin:

1. `5. Urun ara` seçeneği ekleyin
2. Kullanıcıdan kayıt numarası alıp sadece o kaydı gösterin
3. `miktar < 5` olan ürünleri “stok az” şeklinde ayrı listeleyin
4. Kayıt eklerken aynı kayıt numarası doluysa kullanıcıya mevcut bilgileri de gösterin

Bu dört adımı yapabilirseniz, konuyu gerçekten içselleştirmişsiniz demektir.
