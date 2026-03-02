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

Dizi, aynı tipte verileri ardışık bellekte tutar.

```java
int[] notlar = {85, 90, 78, 92};
System.out.println(notlar[0]); // 85
```

### Dizi Özellikleri

- Boyut oluşturulurken belirlenir, sonradan değişmez.
- İndeksleme ile erişim çok hızlıdır: `O(1)`
- Bellek düzeni sadedir.

### Ne zaman iyi?

- Eleman sayısı yaklaşık belliyse
- Performans kritikse
- Basit, sabit yapılı veri tutuyorsan

### Ne zaman yetersiz?

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

### ArrayList Performans Mantığı

- Sona ekleme: ortalama hızlı (`O(1)` amortized)
- İndeksle erişim: hızlı (`O(1)`)
- Araya ekleme/silme: maliyetli (`O(n)`), çünkü kaydırma gerekir

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

### HashMap Ne Sağlar?

- Anahtarla hızlı erişim (`O(1)` ortalama)
- Esnek, dinamik, çok kullanışlı
- Büyük sistemlerde lookup işlemlerinin omurgasıdır

### Sık Kullanılan Metotlar

```java
ogrenciNoToAd.containsKey(101);   // true/false
ogrenciNoToAd.containsValue("Can");
ogrenciNoToAd.remove(103);
ogrenciNoToAd.putIfAbsent(104, "Mert");
```

## 6) HashMap Iteration (Dolaşma)

```java
for (Map.Entry<Integer, String> entry : ogrenciNoToAd.entrySet()) {
    Integer no = entry.getKey();
    String ad = entry.getValue();
    System.out.println(no + " -> " + ad);
}
```

Bu yapı raporlama, log, veri dönüştürme süreçlerinde sürekli kullanılır.

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
