---
layout: post
title: "Final Çalışma Soruları"
date: 2026-06-03 10:18:00 +0300
categories: algoritma-ve-programlama-ii
course_id: algoritma-ve-programlama-ii
tags: [c-programlama, final, çalışma-soruları, açık-uçlu, rehber]
---

Finale çalışırken öğrencilerin en sık yaptığı hata şudur: konuları tek tek okurlar ama **sorunun aslında ne istediğini çözmeyi** ihmal ederler. Sonra soru biraz şekil değiştirince panik başlar.

Bu yazıyı o paniği dağıtmak için hazırladım.

Aşağıdaki çalışma soruları, klasik “şunu kodlayınız” cümlesinden biraz daha fazlasıdır. Her bir soruyu:

- daha anlaşılır hâle getirdim,
- gerekiyorsa düzelttim,
- ölçmek istediği kavramı netleştirdim,
- ve her biri için **adım adım düşünme yolu** ekledim.

Yani burada amaç sadece soru listesi vermek değil. Amaç, öğrencinin şunu diyebilmesi:

> “Hocam, bu soru bana yabancı gelmiyor. Ne yapacağımı biliyorum.”

Bu rehber özellikle şu başlıkları kapsar:

- Diziler
- Fonksiyonlar
- İşaretçiler
- Dinamik bellek
- String işlemleri
- Struct yapıları
- Dosya işlemleri
- Rastgele erişimli kayıt mantığı

---

## Final İçin Altın Kurallar

Sorulara geçmeden önce şu omurgayı zihninize çakın:

### 1. `main()` her şeyi yapan çöplük fonksiyon olmayacak
`main()` mümkün olduğunca sade kalmalı. Veri alma, hesaplama, yazdırma, dosya açma, kontrol etme gibi işler tek bir yere yığılmamalı.

### 2. Her fonksiyonun tek bir görevi olmalı
Bir fonksiyon aynı anda hem veri alıyor hem hesap yapıyor hem yazdırıyorsa tasarım kirlenir.

### 3. Dizi ve string sorularında sınır kontrolü hayatidir
`i < n` ile `i <= n` arasındaki fark, bazen programı doğru çalıştırır, bazen de duvara çarptırır.

### 4. Pointer sorularında sihir şurada değildir: `*` ve `&`
Asıl mesele, bir fonksiyonun dışarıdaki veriyi değiştirmesi gerekip gerekmediğini anlamaktır.

### 5. Dosya sorularında önce veri modelini kurun
Dosyaya ne yazacağınızı bilmeden `fopen()` çağırmak, evin temelini atmadan çatı dikmeye benzer.

---

## Bölüm A — Diziler ve Fonksiyonlar

---

## Soru 1: Dizi İstatistikleri

### Problem
Kullanıcıdan `N` adet tam sayı alınız. Bu sayıları bir dizide saklayınız. Daha sonra ayrı fonksiyonlar kullanarak:

1. diziyi doldurunuz,
2. maksimum değeri bulunuz,
3. minimum değeri bulunuz,
4. ortalamayı hesaplayınız.

### Neyi ölçüyor?
Bu soru, öğrencinin şunları anlayıp anlamadığını ölçer:

- dizi tanımlama,
- diziyi fonksiyona gönderme,
- döngü ile gezinme,
- tek sorumluluklu fonksiyon yazma.

### Adım adım nasıl düşünülür?

#### Adım 1: Veri nerede tutulacak?
Önce bir tam sayı dizisi gerekir.

```c
int sayilar[100];
```

Ama burada kritik soru şu:

> Gerçekten 100 sayı mı alınacak, yoksa kullanıcıdan gelen `N` kadar mı kullanılacak?

Doğru cevap: Dizi 100 elemanlı olabilir, ama işlenen aktif eleman sayısı `N` olur.

#### Adım 2: Fonksiyonları ayır
Bu soru tek fonksiyonla çözülmemeli. Örneğin:

- `void diziDoldur(int dizi[], int n);`
- `int maksimumBul(int dizi[], int n);`
- `int minimumBul(int dizi[], int n);`
- `float ortalamaBul(int dizi[], int n);`

Bu ayrım çok önemlidir. Çünkü öğrenci burada sadece kod yazmıyor; **programı parçalara ayırmayı** öğreniyor.

#### Adım 3: Maksimum ve minimum için başlangıç değeri nasıl seçilir?
En sık yapılan hata, maksimum için `0` ile başlamaktır. Bu yanlıştır. Çünkü dizi tamamen negatif olabilir.

Doğru yaklaşım:

```c
int max = dizi[0];
int min = dizi[0];
```

Sonra diğer elemanlarla karşılaştırılır.

#### Adım 4: Ortalama hesabında tür dönüşümünü unutma
Toplam `int`, sonuç `float` olmalıdır. Eğer dikkat etmezseniz tamsayı bölmesi yaparsınız.

```c
ortalama = (float)toplam / n;
```

### Öğrenciye kritik uyarı
Bu soruda asıl puan sadece sonucu bulmakta değil, **fonksiyon tasarımında** saklıdır.

---

## Soru 2: Çift ve Tek Sayıların Toplamı

### Problem
Bir dizi içerisindeki çift sayıların toplamını ve tek sayıların toplamını aynı fonksiyonda hesaplayınız.

### Düzeltme ve pedagojik netleştirme
Bu soru pointer mantığını öğretmek için çok iyi bir sorudur. Çünkü fonksiyon tek bir `return` değeri döndürebilir. İki farklı sonucu dışarı çıkarmak için adres gönderilmelidir.

### Adım adım düşünce

#### Adım 1: Neden iki `return` yok?
C’de bir fonksiyon bir tane değer döndürür. Ama elimizde iki sonuç var:

- çift toplam
- tek toplam

O yüzden adres göndeririz.

#### Adım 2: Prototip nasıl olabilir?

```c
void tekCiftToplam(int dizi[], int n, int *tekToplam, int *ciftToplam);
```

#### Adım 3: Fonksiyon içinde ne yapacağız?
- Başlangıçta her iki toplamı sıfırla
- Diziyi dolaş
- `dizi[i] % 2 == 0` ise çift toplama ekle
- değilse tek toplama ekle

#### Adım 4: Dışarıdaki değişkenler nasıl güncelleniyor?
Çünkü fonksiyona onların adresleri gidiyor:

```c
*tekToplam += dizi[i];
*ciftToplam += dizi[i];
```

### Kavramsal öz
Bu soru aslında şu cümleyi öğretir:

> “Fonksiyon dışarıdaki veriyi değiştirecekse, çoğu zaman adresle çalışırız.”

---

## Soru 3: Tekrar Eden Elemanları Bulma

### Problem
Bir dizi içindeki tekrar eden elemanları bulunuz ve her bir tekrar eden sayıyı **yalnızca bir kez** ekrana yazdırınız.

### Buradaki kritik düzeltme
Ham soru metni bazen öğrenciyi yanıltır. Eğer dikkat edilmezse aynı sayı birden fazla kez yazdırılabilir.

Örnek:

`{1, 5, 3, 5, 7, 1, 5}`

Naif çözüm bazen şöyle sonuç verir:

- 1
- 5
- 5

Bu yanlış olur. Aynı tekrar eden değer tek kez yazılmalıdır.

### Adım adım düşünce

#### Yöntem 1: İç içe döngü
- Dış döngü her elemanı gezer
- İç döngü, o elemandan sonra aynı değeri arar
- Ama yazdırmadan önce bu sayı daha önce yazdırıldı mı diye kontrol etmek gerekir

#### Yöntem 2: Frekans mantığı
Dizide her elemanın kaç kez geçtiğini sayarsın. Sayı 2 veya daha fazlaysa ekrana basarsın. Ama yine bir kere basarsın.

### Öğrencinin anlaması gereken ince nokta
Sorunun amacı sadece “aynı sayıyı yakalamak” değildir. Amaç, **tekrar eden değeri mantıklı biçimde raporlamaktır**.

---

## Soru 4: Diziyi Ters Çevirme

### Problem
Bir diziyi ek dizi kullanmadan kendi üzerinde ters çeviriniz.

### Öğrencilerin düştüğü çukur
Birçok öğrenci ikinci bir dizi tanımlar. Ama soru özellikle **in-place** istemektedir. Yani aynı belleğin içinde işlem yapılmalıdır.

### Adım adım düşünce

#### Adım 1: Hangi elemanlar yer değiştirecek?
- ilk ile son
- ikinci ile sondan bir önceki
- üçüncü ile sondan ikinci

#### Adım 2: Kaç kere döngü dönecek?
Dizinin tamamı kadar değil, yarısı kadar.

```c
for (i = 0; i < n / 2; i++)
```

#### Adım 3: Geçici değişken neden gerekli?
Çünkü doğrudan yazarsanız bir değeri ezersiniz.

```c
gecici = dizi[i];
dizi[i] = dizi[n - 1 - i];
dizi[n - 1 - i] = gecici;
```

### Kavramsal öz
Bu soru, öğrencinin indeks mantığını gerçekten anlayıp anlamadığını anında ortaya çıkarır.

---

## Bölüm B — İşaretçiler ve Bellek Yönetimi

---

## Soru 5: Swap Fonksiyonu

### Problem
İki tamsayının değerlerini yer değiştiriniz.

### Prototip

```c
void swap(int *a, int *b);
```

### Neden pointer şart?
Çünkü fonksiyon içinden dışarıdaki değişkenlerin gerçek değerlerini değiştirmek istiyoruz.

### Adım adım düşünce

- `a` bir adres tutar
- `*a`, o adresteki gerçek değerdir
- aynı mantık `b` için de geçerlidir

İşlem:

```c
int gecici = *a;
*a = *b;
*b = gecici;
```

### Sık hata
Bazı öğrenciler `a` ile `b` adreslerini değiştirir gibi düşünür. Oysa burada yer değiştiren şey adres değil, **adreslerde duran değerlerdir**.

---

## Soru 6: İşaretçi Aritmetiği ile Dizi Toplamı

### Problem
Bir dizinin toplamını hesaplayınız ama `[]` operatörünü kullanmayınız.

### Ölçtüğü şey
Bu soru öğrencinin şu eşdeğerliği kavrayıp kavramadığını ölçer:

```c
dizi[i] == *(dizi + i)
```

### Adım adım düşünce

- Bir işaretçi dizinin ilk elemanını göstersin
- Döngüde pointer ilerletilsin
- Her adımda işaret edilen değer toplanıp ilerlenilsin

Örneğin:

```c
int toplam = 0;
int *ptr = dizi;
int i;

for (i = 0; i < n; i++)
{
    toplam += *(ptr + i);
}
```

veya doğrudan pointer artırmalı yaklaşım da kurulabilir.

### Öğrenciye püf nokta
İşaretçi aritmetiği byte byte değil, gösterdiği veri tipinin boyutu kadar ilerler.

Yani `ptr + 1`, bir sonraki `int` elemana gider.

---

## Soru 7: İşaretçi ile Maksimum Değeri Bulma

### Problem
Bir dizideki en büyük elemanın değerini ya da adresini pointer kullanarak bulunuz.

### Daha iyi soru biçimi
Bu soruyu şu şekilde netleştirmek daha öğreticidir:

> Dizideki en büyük elemanın **adresini döndüren** bir fonksiyon yazınız.

Çünkü bu, pointer kullanımını gerçekten anlamlı kılar.

### Prototip önerisi

```c
int *maksAdresBul(int dizi[], int n);
```

### Düşünce akışı
- En büyük elemanın adresi başlangıçta ilk elemanın adresidir
- Dizi dolaşılır
- Daha büyük eleman bulunursa adres güncellenir
- Sonunda bu adres döndürülür

### Neden güzel soru?
Çünkü dönen sonuç bir sayı değil, sayının **bellekteki yeri** olur.

---

## Soru 8: Dinamik Bellek Yönetimi

### Problem
Kullanıcıdan `N` alın, `N` elemanlı dinamik dizi oluşturun, toplam ve ortalamayı hesaplayın, sonra belleği serbest bırakın.

### Bu soru neden önemli?
Bu soru statik dizi mantığından çıkıp çalışma anında boyutu belli olan verilerle çalışmayı öğretir.

### Adım adım düşünce

#### Adım 1: Kullanıcıdan boyut al

```c
scanf("%d", &n);
```

#### Adım 2: Bellek ayır

```c
int *dizi = (int *)malloc(n * sizeof(int));
```

veya `calloc` da olabilir.

#### Adım 3: `NULL` kontrolü yap
Bu adımı atlayan öğrenci eksik çözüm yapmış olur.

```c
if (dizi == NULL)
{
    printf("Bellek ayrılamadı!\n");
}
```

#### Adım 4: Değerleri doldur
Artık dizi normal bir dizi gibi kullanılabilir.

#### Adım 5: İşlem sonunda `free(dizi);`
Bu adım unutulursa bellek sızıntısı oluşur.

### Kavramsal öz
Bu soru bize şunu öğretir:

> Bellek sadece kullanmak için değil, işi bitince düzgünce geri bırakmak için de yönetilir.

---

## Bölüm C — String İşleme

---

## Soru 9: Metin Analizörü

### Problem
Kullanıcıdan bir cümle alınız. Cümledeki:

- harf sayısını,
- rakam sayısını,
- boşluk sayısını
hesaplayınız.

### Düzeltme ve netleştirme
Burada `scanf("%s")` kullanmak yanlış olur. Çünkü bu sadece ilk boşluğa kadar okur.

Doğru yaklaşım `fgets()` kullanmaktır.

### Adım adım düşünce

#### Adım 1: Cümleyi tam al

```c
fgets(metin, sizeof(metin), stdin);
```

#### Adım 2: Karakter karakter dolaş
Bir döngü ile her karakter kontrol edilir.

#### Adım 3: Sınıflandır
- harf mi?
- rakam mı?
- boşluk mu?

İster `ctype.h` kullan, ister ASCII mantığıyla çöz.

### Öğrencinin fark etmesi gereken şey
Bu soru string sorusu gibi görünür ama aslında **karakter seviyesinde analiz** sorusudur.

---

## Soru 10: Palindrom Kontrolü

### Problem
Bir kelimenin ya da uygun biçimde temizlenmiş bir ifadenin palindrom olup olmadığını test ediniz.

### Küçük ama önemli iyileştirme
Sadece `KABAK` gibi örnekler kolaydır. Ama öğretici yaklaşım şunu da konuşturur:

- büyük-küçük harf farkı olacak mı?
- boşluklar dikkate alınacak mı?

Final düzeyi için en temiz sürüm şu olabilir:

> Tek kelimelik bir string’in palindrom olup olmadığını kontrol ediniz.

### Adım adım düşünce
- soldan bir indis başlat
- sağdan bir indis başlat
- karşılaştır
- eşit değilse palindrom değildir
- eşitse içe doğru ilerle

### Mantık özü
Bu soru, iki uçtan merkeze ilerleyen kontrol mantığını öğretir.

---

## Soru 11: Kendi `strlen` Fonksiyonunu Yazma

### Problem
Hazır `strlen()` kullanmadan string uzunluğunu hesaplayınız.

### Ne ölçüyor?
String’in aslında karakter dizisi olduğunu ve `\0` ile bittiğini anlayıp anlamadığınızı.

### Adım adım düşünce
- Bir pointer string’in başını göstersin
- `\0` görülene kadar ilerle
- Kaç karakter geçildiğini say

Örneğin fikir şu:

```c
while (*ptr != '\0')
{
    sayac++;
    ptr++;
}
```

### En kritik nokta
String uzunluğu, dizinin kapasitesi değil; `\0` öncesindeki gerçek karakter sayısıdır.

---

## Soru 12: Karakter Frekansı

### Problem
Bir string içinde belirli bir karakterin kaç kez geçtiğini bulunuz.

### Adım adım düşünce
- kullanıcıdan bir metin alın
- aranacak karakteri alın
- tüm karakterleri dolaşın
- eşitse sayacı artırın

### İyileştirme önerisi
İsterseniz bu soruyu daha öğretici yapmak için şu ayrımı da ekleyebilirsiniz:

- büyük/küçük harf duyarlı arama
- duyarsız arama

Ama temel final seviyesinde duyarlı arama yeterlidir.

---

## Soru 13: Kendi `strcat` Fonksiyonunu Yazma

### Problem
Hazır `strcat()` kullanmadan iki string’i birleştiriniz.

### Adım adım düşünce

#### Adım 1: İlk string’in sonunu bul
Yani `\0` karakterine kadar git.

#### Adım 2: İkinci string’i oradan itibaren kopyala
Her karakter sırayla aktarılır.

#### Adım 3: En sona yeni `\0` koy
Bu adım unutulursa string bozulur.

### Öğrencinin anlaması gereken esas fikir
String birleştirme, sihirli fonksiyon çağırmak değil; bir dizinin sonundan itibaren diğer dizinin karakterlerini taşımaktır.

---

## Bölüm D — Struct Yapıları

---

## Soru 14: Temel `Ogrenci` Yapısı

### Problem
`no`, `ad`, `ortalama` alanlarını içeren bir `Ogrenci` yapısı tanımlayınız. 5 öğrencinin bilgilerini alıp tablo biçiminde yazdırınız.

### Adım adım düşünce

#### Adım 1: Yapıyı tanımla

```c
struct Ogrenci
{
    int no;
    char ad[30];
    float ortalama;
};
```

#### Adım 2: Yapı dizisi kur

```c
struct Ogrenci ogrenciler[5];
```

#### Adım 3: Giriş alırken isim için dikkat
`scanf("%s")` yalnızca tek kelime alır. Ad soyad alınacaksa `fgets()` daha uygundur.

### Neyi ölçüyor?
Bu soru, öğrencinin birden fazla farklı veri tipini tek kayıt altında toplayıp toplayamadığını ölçer.

---

## Soru 15: En Yüksek ve En Düşük Ortalamayı Bulma

### Problem
10 öğrencilik yapı dizisinde en yüksek ve en düşük ortalamalı öğrenciyi bulunuz.

### Adım adım düşünce
- İlk öğrenciyi başlangıç kabul et
- Diziyi dolaş
- Daha büyük ortalama görünce en yüksek öğrenciyi güncelle
- Daha küçük ortalama görünce en düşük öğrenciyi güncelle

### Güzel tasarım önerisi
İki ayrı fonksiyon yazılması doğru tercihtir:

- `enYuksekOgrenciBul(...)`
- `enDusukOgrenciBul(...)`

Çünkü soru özellikle modüler düşünmeyi ölçüyor.

---

## Soru 16: Personel Filtreleme Sistemi

### Problem
Personelleri struct ile tutunuz ve maaşı 5000 TL üzerinde olanları listeleyiniz.

### Dikkat edilmesi gereken ince nokta
Bu soru hesaplama sorusu değil, **koşullu filtreleme** sorusudur.

### Adım adım düşünce
- `struct Personel` tanımla
- diziye kayıtları al
- döngü ile tüm kayıtları gez
- `if (maas > 5000)` koşulunu sağlayanları yazdır

### Neyi ölçüyor?
- struct dizisi kullanma
- koşullu seçim yapma
- belirli kayıtları ayıklama

---

## Soru 17: Ürün Takip Sistemi

### Problem
`Urun Kodu`, `Urun Adi`, `Stok Miktari`, `Fiyat` alanlarını tutan bir ürün sistemi yazınız.

### Gerekli fonksiyonlar
1. ürün ekleme
2. ürün listeleme
3. toplam envanter değerini hesaplama

### Adım adım düşünce

#### Toplam envanter değeri nedir?
Her ürün için:

```text
stok miktarı × fiyat
```

Tüm ürünler için bunların toplamı alınır.

### Öğrenciye kritik not
Burada sadece veriyi saklamak yetmez. Veriden **anlamlı sonuç üretmek** gerekir. O sonuç da toplam depo değeridir.

---

## Bölüm E — Dosya İşlemleri

---

## Soru 18: Ardışık Erişimli Metin Dosyası

### Problem
20 tam sayıyı `sayilar.txt` dosyasına yazınız. Sonra aynı dosyayı okuyup toplam ve ortalama hesaplayınız.

### Adım adım düşünce

#### Yazma kısmı
- dosyayı `w` modunda aç
- 20 sayıyı al
- her birini dosyaya yaz

#### Okuma kısmı
- dosyayı `r` modunda aç
- sayıları teker teker çek
- toplama ekle
- sayaç tut

### En sık hata
Öğrenciler dosyaya yazdıktan sonra kapatmadan ya da konum sıfırlamadan okumaya geçmeye çalışır. En temiz çözüm:

- kapat
- tekrar `r` modunda aç

### Neyi ölçüyor?
Bu soru sıralı erişimli dosya mantığını ölçer. Yani veri baştan sona akar.

---

## Soru 19: Binary Dosyada Öğrenci Kaydı

### Problem
`Numara`, `Ad`, `Ortalama` alanlarını içeren öğrenci kayıtlarını `ogrenciler.dat` dosyasına yazınız ve geri okuyunuz.

### Bu soru neden farklı?
Çünkü burada metin değil, doğrudan yapı kayıtları yazılır.

### Adım adım düşünce

#### Adım 1: Struct kur
Öğrenci kaydını tek paket hâline getir.

#### Adım 2: `wb` ile yaz

```c
fwrite(&ogrenci, sizeof(struct Ogrenci), 1, dosyaPtr);
```

#### Adım 3: `rb` ile oku

```c
fread(&ogrenci, sizeof(struct Ogrenci), 1, dosyaPtr);
```

### En önemli kavram
Metin dosyasında veriyi insanlar rahat okur. Binary dosyada ise veriyi program rahat işler.

---

## Soru 20: Rastgele Erişimli Dosya Envanteri

### Problem
Sabit uzunluklu kayıtlardan oluşan bir envanter sistemi geliştiriniz.

Alanlar:

- kayıt no
- ürün adı
- miktar
- fiyat

Menü seçenekleri:

1. yeni kayıt
2. kayıt güncelleme
3. kayıt silme
4. kayıtları listeleme

### Bu soru finalin yıldız sorusudur
Çünkü burada birçok konu birleşir:

- struct
- dosya
- binary yazma/okuma
- `fseek`
- menü
- veri doğrulama

### Adım adım düşünce

#### Adım 1: Kayıtların boyutu sabit olacak
Bu sayede dosyada belirli bir kayda doğrudan gidebiliriz.

#### Adım 2: Formülü kur

```c
(kNo - 1) * sizeof(struct Urun)
```

Bu bize ilgili kaydın dosyadaki byte konumunu verir.

#### Adım 3: `fseek()` ile o noktaya git
İşte rastgele erişim burada doğar.

#### Adım 4: `fread()` ile mevcut kaydı kontrol et
Boş mu dolu mu anlamak gerekir.

#### Adım 5: `fwrite()` ile güncelle ya da ekle
Doğrudan aynı noktaya yazılır.

#### Adım 6: Silme nasıl olur?
Genelde fiziksel çıkarma yapılmaz; ilgili kaydın yerine boş kayıt yazılır.

### Öğrencinin burada anlaması gereken şey
Bu soru sadece dosya sorusu değildir. Bu soru, **kayıt tabanlı düşünme** sorusudur.

---

## Bonus Soru 21: Kütüphane Otomasyon Sistemi

### Problem
Kitap bilgilerini struct ile tutan, dosya üzerinde kalıcı çalışan, ekleme-güncelleme-silme-listeleme yapabilen bir sistem tasarlayınız.

### Neden bonus düzeyinde?
Çünkü bu soru dönem boyunca öğrendiğiniz hemen her şeyi aynı çatıda ister:

- fonksiyonlara ayırma
- pointer ile veri geçirme
- struct dizileri
- dosya işlemleri
- menü mantığı
- veri doğrulama

### Adım adım proje aklı

#### 1. Önce veri modelini kur
Kitap için alanlar:

- kitap no
- kitap adı
- yazar
- stok miktarı

#### 2. Sonra menü tasarla
- ekle
- güncelle
- sil
- listele
- çıkış

#### 3. Ardından kalıcılığı seç
- sıralı dosya mı?
- rastgele erişimli binary dosya mı?

Final düzeyinde daha etkileyici çözüm genelde binary + kayıt mantığıdır.

#### 4. İşlevleri parçalara ayır
Her iş için ayrı fonksiyon kur.

### Bu sorunun asıl dersi
Bu, artık tek bir konu sorusu değildir. Bu, **küçük çaplı yazılım tasarımı** sorusudur.

---

## Çalışırken Sıralamayı Nasıl Kurmalısınız?

Eğer öğrenciler “nereden başlayayım?” diyorsa, doğru sıra bence şu:

1. Diziler ve fonksiyonlar
2. Pointer ve swap mantığı
3. String işlemleri
4. Struct soruları
5. Metin dosyası
6. Binary dosya
7. Rastgele erişimli kayıt sistemi

Çünkü dosya işlemleri, alttaki temel kavramlar oturmadan tam oturmaz.

---

## En Sık Yapılan Hatalar

### 1. `scanf("%s")` ile cümle almaya çalışmak
Bu, ilk boşlukta keser.

### 2. `for (i = 0; i <= n; i++)` yazmak
Son elemandan bir fazla gider, sınır ihlali olur.

### 3. Pointer gönderilmesi gereken yerde değeri göndermek
Fonksiyon dışarıdaki değişkeni değiştiremez.

### 4. `malloc` sonrası `NULL` kontrolü yapmamak
Eksik ve güvensiz çözümdür.

### 5. `free()` unutmak
Dinamik bellekte klasik hatadır.

### 6. Binary dosyada `sizeof(struct ...)` mantığını karıştırmak
Rastgele erişim sorularında bu doğrudan puan kaybettirir.

### 7. String sonunda `\0` mantığını ihmal etmek
`strlen`, `strcat`, karakter sayma gibi sorularda büyük problem çıkarır.

---

## Sınavda Soruyu Görünce Ne Yapmalısınız?

Koda atlamadan önce kendinize şu 5 soruyu sorun:

1. Bu soru hangi veri yapısını istiyor?
2. Bu veri tek bir değer mi, dizi mi, struct mı?
3. Bu işlem için fonksiyon gerekir mi?
4. Fonksiyon dışarıdaki veriyi değiştirecek mi?
5. Veri kalıcı mı olacak, dosyaya mı yazılacak?

Bu beş sorunun cevabı netleşirse kodun yarısı zaten zihninizde kurulmuş olur.

---

## Sonuç

Bu çalışma rehberi, “soruları çoğaltmak” için değil, **soruların içindeki mantığı görünür kılmak** için hazırlandı.

Bir öğrenci finalde başarılı olacaksa bunu sadece çok soru ezberleyerek değil, şu farkı anlayarak yapar:

- Dizi sorusu hangi mantığı ölçüyor?
- Pointer sorusunda neden adres gidiyor?
- String neden `\0` ile bitiyor?
- Struct neden gerekli?
- Dosyada neden kayıt tasarımı önemli?

Bu soruları gerçekten çözebilen öğrenci, finalde birebir aynı sorular gelmese bile ayakta kalır.

Çünkü artık sadece cevabı değil, **cevaba giden düşünme yolunu** biliyordur.

İşte olay tam olarak bu.

---

## Mini Çalışma Planı

### 1. Gün
- Dizi istatistikleri
- tek/çift toplamı
- tekrar eden elemanlar
- ters çevirme

### 2. Gün
- swap
- pointer ile toplam
- maksimum adres bulma
- dinamik bellek

### 3. Gün
- metin analizi
- palindrom
- özel `strlen`
- özel `strcat`

### 4. Gün
- `Ogrenci` yapıları
- personel filtreleme
- ürün takip sistemi

### 5. Gün
- metin dosyası
- binary dosya
- rastgele erişimli kayıt sistemi

Bu sırayla giderseniz konular üst üste mantıklı biçimde oturur.

Finalden önce özellikle **Soru 20** tipini en az iki kez elde yazarak çözün. Çünkü o soru, dosya + struct + menü + kayıt mantığını tek yumrukta ölçer.
