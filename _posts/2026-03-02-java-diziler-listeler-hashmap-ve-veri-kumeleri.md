---
layout: post
title: "Java'da Diziler, Listeler, HashMap ve Veri Kümeleri: Gerçek Projeye Hazırlık Rehberi"
date: 2026-03-02
categories: nesne-tabanli-programlama-ii
---

Bir yazılım büyüdüğünde asıl savaş algoritmadan önce şurada başlar: **Veriyi nasıl tutuyorsun?**

Yanlış veri yapısı seçimi, iyi kodu bile hantallaştırır. Doğru seçim ise kodu sadeleştirir, performansı yükseltir ve hata oranını düşürür. Bu derste Java tarafında en kritik veri kümesi araçlarını net bir sistemle öğreneceğiz:

- Dizi (`array`)
- Liste (`ArrayList`, `LinkedList`)
- Küme (`Set`)
- Sözlük/harita (`HashMap`)
- Ne zaman hangisini seçmeliyiz?

Hazırsan başlayalım.

## 1) Dizi (Array): Hızlı, Basit, Sabit Boyutlu

Dizi, aynı tipte verileri ardışık bellekte tutar. Java'da diziyi doğru yazmak temel bir beceridir.

## Dizi Tanımlama Söz Dizimi

En doğru ve yaygın kullanım:

```java
int[] sayilar;        // önerilen stil
String[] isimler;
```

Teknik olarak şu da geçerli:

```java
int sayilar[];
String isimler[];
```

Ama ekip standartlarında genelde `tip[] ad` kullanılır.

## Dizi Oluşturma (new ile)

```java
int[] notlar = new int[4];
notlar[0] = 85;
notlar[1] = 90;
notlar[2] = 78;
notlar[3] = 92;
```

`new int[4]` demek, bellekte 4 elemanlık alan ayırmak demektir.

## Kısa Başlatma (Literal)

```java
int[] notlar = {85, 90, 78, 92};
String[] ogrenciler = {"Ayşe", "Mehmet", "Zeynep"};
```

## Kullanıcının Sorduğu Formun Doğru Hali

`dizi[] isim = new dizi[]` gibi bir yazım Java'da yok; `dizi` bir veri tipi değildir.
Doğru kullanım veri tipine göre olur:

```java
String[] isim = new String[] {"Ali", "Veli", "Ayşe"};
int[] puan = new int[] {10, 20, 30};
```

> Kısa not: Değişkeni aynı satırda tanımlıyorsan çoğu zaman `new String[]` yazmadan da `{...}` kullanabilirsin.

## Diziye Erişim ve Güncelleme

```java
System.out.println(notlar[0]); // ilk eleman
notlar[2] = 88;                // üçüncü elemanı güncelle
```

İndeksler **0'dan başlar**. 4 elemanlı dizide geçerli indeksler `0,1,2,3` olur.

## `length` Özelliği (Çok Önemli)

Dizinin eleman sayısını verir:

```java
int[] sayilar = {3, 5, 7, 9};
System.out.println(sayilar.length); // 4
```

Dikkat:

- Dizide `length` bir **özelliktir** (parantezsiz): `dizi.length`
- String'de `length()` bir **metottur**

```java
String metin = "Java";
System.out.println(metin.length()); // 4
```

## Döngü ile Dizi Kullanımı

### Klasik for

```java
int[] sayilar = {10, 20, 30, 40};
for (int i = 0; i < sayilar.length; i++) {
    System.out.println("indeks=" + i + ", değer=" + sayilar[i]);
}
```

### Gelişmiş for-each

```java
for (int deger : sayilar) {
    System.out.println(deger);
}
```

`for-each` okumada çok temizdir; ama indeks gerektiğinde klasik `for` daha uygundur.

## Çok Boyutlu Dizi (2D)

Tablo/matris gibi yapılarda kullanılır:

```java
int[][] matris = {
    {1, 2, 3},
    {4, 5, 6}
};

System.out.println(matris[1][2]); // 6
```

Java'da 2D diziler satır bazlıdır; satır uzunlukları farklı da olabilir (jagged array).

## Varsayılan Değerler

`new` ile oluşturulan dizilerde elemanlar varsayılan değerle gelir:

- `int` -> `0`
- `double` -> `0.0`
- `boolean` -> `false`
- Referans tipleri (`String`, nesne) -> `null`

```java
int[] a = new int[3];
System.out.println(a[0]); // 0
```

## Sık Hata: ArrayIndexOutOfBoundsException

```java
int[] a = {1, 2, 3};
System.out.println(a[3]); // HATA: son indeks 2
```

Korunma yolu: sınırı hep `i < dizi.length` ile kur.

## `Arrays` Sınıfı ile Pratik İşlemler

```java
import java.util.Arrays;

int[] sayilar = {5, 1, 9, 3};
Arrays.sort(sayilar); // [1,3,5,9]
System.out.println(Arrays.toString(sayilar));

int idx = Arrays.binarySearch(sayilar, 5); // 2
int[] kopya = Arrays.copyOf(sayilar, sayilar.length);
```

## Dizi Özellikleri (Özet)

- Boyut oluşturulurken belirlenir, sonradan değişmez.
- İndeksleme ile erişim çok hızlıdır: `O(1)`
- Bellek düzeni sadedir.
- `length` ile boyut bilgisi alınır.

## Ne zaman iyi?

- Eleman sayısı yaklaşık belliyse
- Performans kritikse
- Basit, sabit yapılı veri tutuyorsan

## Ne zaman yetersiz?

- Sürekli eleman ekleyip çıkarıyorsan
- Veri boyutu dinamikse

## 2) ArrayList: En Pratik Dinamik Liste

`ArrayList`, dizinin büyüyebilen versiyonu gibi düşünülebilir.

```java
import java.util.ArrayList;
import java.util.List;

List<String> ogrenciler = new ArrayList<>();
ogrenciler.add("Ayşe");
ogrenciler.add("Mehmet");
ogrenciler.add("Zeynep");

System.out.println(ogrenciler.get(1)); // Mehmet
```

### ArrayList'te Bilinmesi Gereken Temel Metotlar

```java
ogrenciler.add("Ece");                // sona ekle
ogrenciler.add(1, "Can");             // indekse ekle
ogrenciler.set(0, "Ayşe Nur");        // güncelle
ogrenciler.remove("Mehmet");          // değere göre sil
ogrenciler.remove(2);                  // indekse göre sil
ogrenciler.contains("Zeynep");        // var mı?
ogrenciler.size();                     // eleman sayısı
ogrenciler.isEmpty();                  // boş mu?
ogrenciler.clear();                    // hepsini temizle
```

### ArrayList Performans Mantığı

- Sona ekleme: ortalama hızlı (`O(1)` amortized)
- İndeksle erişim: hızlı (`O(1)`)
- Araya ekleme/silme: maliyetli (`O(n)`), çünkü kaydırma gerekir

### Dolaşma (Iteration)

```java
for (int i = 0; i < ogrenciler.size(); i++) {
    System.out.println(i + " -> " + ogrenciler.get(i));
}

for (String ogrenci : ogrenciler) {
    System.out.println(ogrenci);
}
```

### Kritik Not

`ArrayList` her zaman mükemmel değil; özellikle listenin ortasında çok oynuyorsan `LinkedList` daha uygun olabilir.

## 3) LinkedList: Sık Ekle/Çıkar Senaryoları

`LinkedList`, elemanları zincir gibi tutar.

```java
import java.util.LinkedList;

LinkedList<String> kuyruk = new LinkedList<>();
kuyruk.add("1. müşteri");
kuyruk.add("2. müşteri");
kuyruk.addFirst("VIP müşteri");

System.out.println(kuyruk);
```

### LinkedList Metotları (Detay)

```java
kuyruk.addLast("3. müşteri");
kuyruk.getFirst();
kuyruk.getLast();
kuyruk.removeFirst();
kuyruk.removeLast();
kuyruk.peek();      // ilk elemanı silmeden göster
kuyruk.poll();      // ilk elemanı al + sil (boşsa null)
```

### Nerede güçlü?

- Baş/son ekleme-çıkarma işlemleri sık ise
- Kuyruk/stack benzeri yapılarda

### Nerede zayıf?

- Rastgele indeks erişimi (`get(i)`) pahalıdır (`O(n)`)

> Özet: Sık indeks erişimi = `ArrayList`, sık ekle/çıkar operasyonu = `LinkedList`.

## 4) Set: Tekrarsız Veri Yönetimi

`Set` aynı elemanı birden fazla tutmaz.

```java
import java.util.HashSet;
import java.util.Set;

Set<String> etiketler = new HashSet<>();
etiketler.add("java");
etiketler.add("oop");
etiketler.add("java"); // tekrar, eklenmez

System.out.println(etiketler); // [java, oop] gibi
```

### Set Metotları

```java
etiketler.add("collections");
etiketler.remove("oop");
etiketler.contains("java");
etiketler.size();
etiketler.isEmpty();
etiketler.clear();
```

### Set Türleri (Kısa Karşılaştırma)

- `HashSet`: Sıra garantisi yok, hızlı
- `LinkedHashSet`: Eklenme sırasını korur
- `TreeSet`: Sıralı tutar (doğal sıra veya comparator)

### Neden önemli?

- Etiket, kullanıcı adı, ID gibi tekrar etmeyecek veri kümelerinde mükemmel
- "Bu eleman var mı?" kontrolü hızlıdır

## 5) HashMap: Anahtar-Değer Mimarisi (En Güçlü Araçlardan Biri)

Kullanıcının kimlik numarasından bilgisine ulaşmak gibi düşün:

```java
import java.util.HashMap;
import java.util.Map;

Map<Integer, String> ogrenciNoToAd = new HashMap<>();
ogrenciNoToAd.put(101, "Elif");
ogrenciNoToAd.put(102, "Can");
ogrenciNoToAd.put(103, "Deniz");

System.out.println(ogrenciNoToAd.get(102)); // Can
```

### HashMap'te Kritik Metotlar (put/remove/clear dahil)

```java
ogrenciNoToAd.put(104, "Mert");                 // ekle / varsa güncelle
ogrenciNoToAd.putIfAbsent(104, "Ahmet");        // yoksa ekle
ogrenciNoToAd.get(101);                           // değeri getir
ogrenciNoToAd.getOrDefault(999, "Bilinmiyor");  // yoksa default dön
ogrenciNoToAd.containsKey(102);                   // key var mı?
ogrenciNoToAd.containsValue("Can");             // value var mı?
ogrenciNoToAd.remove(103);                        // key ile sil
ogrenciNoToAd.remove(104, "Mert");               // key+value eşleşirse sil
ogrenciNoToAd.replace(102, "Caner");             // değer güncelle
ogrenciNoToAd.size();
ogrenciNoToAd.isEmpty();
ogrenciNoToAd.clear();                            // tüm map'i boşalt
```

### HashMap Ne Sağlar?

- Anahtarla hızlı erişim (`O(1)` ortalama)
- Esnek, dinamik, çok kullanışlı
- Büyük sistemlerde lookup işlemlerinin omurgasıdır

## 6) HashMap Dolaşma Teknikleri

### entrySet ile (en yaygın)

```java
for (Map.Entry<Integer, String> entry : ogrenciNoToAd.entrySet()) {
    Integer no = entry.getKey();
    String ad = entry.getValue();
    System.out.println(no + " -> " + ad);
}
```

### Sadece key'ler

```java
for (Integer key : ogrenciNoToAd.keySet()) {
    System.out.println(key);
}
```

### Sadece value'lar

```java
for (String value : ogrenciNoToAd.values()) {
    System.out.println(value);
}
```

### forEach (lambda)

```java
ogrenciNoToAd.forEach((no, ad) ->
    System.out.println(no + " numaralı öğrenci: " + ad)
);
```

## 7) HashMap ve Null Konusu

`HashMap` bir `null` key ve birden fazla `null` value kabul eder. Ama bu esnekliği dikkatli kullan.

- Gereksiz `null` tasarımı, hatayı gizler.
- Mümkünse veri doğrulaması yap.

Öneri:

```java
String ad = ogrenciNoToAd.get(999);
if (ad == null) {
    System.out.println("Öğrenci bulunamadı");
}
```

Ek güvenli kullanım:

```java
if (!ogrenciNoToAd.containsKey(999)) {
    System.out.println("Bu anahtar map içinde yok");
}
```

## 8) Comparable Senaryo: Neyi Ne Zaman Seçeyim?

| İhtiyaç | Önerilen Yapı | Neden |
|---|---|---|
| Sabit boyutlu not listesi | `int[]` | En yalın ve hızlı |
| Dinamik öğrenci listesi | `ArrayList<Ogrenci>` | Ekleme kolay, erişim hızlı |
| Tekrarsız etiket seti | `HashSet<String>` | Tekrarı otomatik engeller |
| No -> öğrenci eşlemesi | `HashMap<Integer, Ogrenci>` | Anahtardan hızlı erişim |
| Kuyruk sistemi | `LinkedList<T>` | Baş/son işlemleri uygun |

## 9) OOP ile Birleşim: Sınıf Nesneleriyle Koleksiyon Kullanımı

Asıl güç, ilkel tiplerden çok nesnelerle ortaya çıkar.

```java
class Urun {
    int id;
    String ad;
    double fiyat;

    Urun(int id, String ad, double fiyat) {
        this.id = id;
        this.ad = ad;
        this.fiyat = fiyat;
    }

    @Override
    public String toString() {
        return id + " - " + ad + " (" + fiyat + " TL)";
    }
}
```

```java
import java.util.*;

public class MarketApp {
    public static void main(String[] args) {
        List<Urun> urunler = new ArrayList<>();
        urunler.add(new Urun(1, "Klavye", 799.0));
        urunler.add(new Urun(2, "Mouse", 349.0));

        Map<Integer, Urun> urunIndex = new HashMap<>();
        for (Urun u : urunler) {
            urunIndex.put(u.id, u);
        }

        System.out.println("ID=2 -> " + urunIndex.get(2));
    }
}
```

Bu model gerçek dünyadaki e-ticaret, okul otomasyonu, oyun envanteri gibi sistemlerin temelini oluşturur.

## 10) Öğrencilerin Yaptığı Klasik Hatalar

1. `int[]` ile başlayıp sonradan dinamik ihtiyaçta zorlanmak
2. `ArrayList` içinde yanlış indeks kullanıp `IndexOutOfBoundsException` almak
3. `HashMap`’te key çakışmalarını fark etmeden veri ezmek
4. `equals()` ve `hashCode()` bilmeden özel nesneleri `Set/Map` içinde kullanmak

## 11) `equals()` ve `hashCode()` Neden Hayati?

Özel sınıflarını `HashSet` veya `HashMap` key olarak kullanacaksan bu iki metodu doğru yazman gerekir.

```java
import java.util.Objects;

class Ogrenci {
    int no;
    String ad;

    Ogrenci(int no, String ad) {
        this.no = no;
        this.ad = ad;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Ogrenci)) return false;
        Ogrenci ogrenci = (Ogrenci) o;
        return no == ogrenci.no;
    }

    @Override
    public int hashCode() {
        return Objects.hash(no);
    }
}
```

Bunu yazmazsan aynı mantıksal öğrenci, sistem tarafından farklı nesneler gibi görülebilir.

## 12) Mini Proje Ödevi (Merak Tetikleyen)

Bir "Görev Takip Sistemi" yaz:

- `ArrayList<Gorev>`: tüm görevler
- `HashMap<Integer, Gorev>`: ID ile hızlı erişim
- `HashSet<String>`: etiket yönetimi (tekrarsız)

İstenen işlemler:

1. Görev ekleme
2. ID ile görev bulma
3. Görev silme
4. Etikete göre filtreleme
5. Tamamlanan görev sayısı raporu

Ekstra challenge:

- Önceliğe göre sıralama (`Comparator`)
- `LocalDate` ile son tarih takibi

## Kapanış

Java’da veri yapıları sadece “konu” değil, yazılım mühendisliğinin omurgasıdır. Hangi yapıyı neden seçtiğini bilen öğrenci, sınavı da projeyi de farklı seviyede geçer.

Bir sonraki derste bu yapıları **Generics + Comparator + Stream API** ile birleştirip profesyonel seviyeye taşıyacağız.
