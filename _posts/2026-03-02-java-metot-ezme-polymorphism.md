---
layout: post
title: "Java'da Metot Ezme (Method Overriding): Polimorfizmin Sahadaki Gücü"
date: 2026-03-02
categories: nesne-tabanli-programlama-ii
---

Bir oyunda tüm karakterlerin `hareketEt()` metodu olduğunu düşün: şövalye yürür, büyücü ışınlanır, okçu takla atar. İsim aynı, davranış farklı. İşte bu sihirli yapı **metot ezme (method overriding)** ile gelir.

Bu derste sadece tanım değil; **neden kullanılır, nasıl doğru kullanılır, nerede patlar, nasıl temiz tasarlanır** hepsini göreceğiz.

## Metot Ezme Nedir?

**Metot ezme**, alt sınıfın (child/subclass), üst sınıftan (parent/superclass) miras aldığı bir metodu **aynı imza ile yeniden yazmasıdır**.

Kısa tanım:

- Üst sınıfta metot var.
- Alt sınıf “ben bunu kendi davranışımla çalıştıracağım” der.
- Aynı metot adı + aynı parametre listesi + uyumlu dönüş tipi ile yeni gövde yazar.

## Overloading ile Karıştırma (En Sık Hata)

Öğrencilerin en çok karıştırdığı kısım burası:

| Kavram | Nerede olur? | Ne değişir? |
|---|---|---|
| **Overloading (Aşırı yükleme)** | Aynı sınıfta (genelde) | Parametre listesi değişir |
| **Overriding (Ezme)** | Kalıtımda | Davranış (metot gövdesi) değişir |

> Overloading = "aynı isim, farklı imza"  
> Overriding = "aynı imza, farklı davranış"

## Gerçekçi Bir Örnek: Oyun Karakter Sistemi

```java
class Karakter {
    public void saldir() {
        System.out.println("Karakter temel saldırı yaptı.");
    }
}

class Savascı extends Karakter {
    @Override
    public void saldir() {
        System.out.println("Savaşçı kılıç savurdu!");
    }
}

class Buyucu extends Karakter {
    @Override
    public void saldir() {
        System.out.println("Büyücü ateş topu fırlattı!");
    }
}

public class Main {
    public static void main(String[] args) {
        Karakter k1 = new Savascı();
        Karakter k2 = new Buyucu();

        k1.saldir();
        k2.saldir();
    }
}
```

Çıktı:

```text
Savaşçı kılıç savurdu!
Büyücü ateş topu fırlattı!
```

Buradaki kritik nokta: Değişken tipi `Karakter` olsa da JVM, gerçek nesnenin tipine bakar. Buna **runtime polymorphism** denir.

## Metot Ezmenin Kuralları

Java'da overriding yaparken şu kurallar geçerlidir:

1. **Metot adı aynı olmalı**
2. **Parametre listesi aynı olmalı**
3. **Dönüş tipi aynı veya kovaryant olmalı**
4. **Erişim belirleyici daraltılamaz** (ör. `public` olanı `protected` yapamazsın)
5. **`final` metot override edilemez**
6. **`static` metot override değil, hide edilir**
7. **`private` metot miras alınmaz, override edilemez**

## `@Override` Anotasyonu Neden Şart Gibi?

`@Override` yazmazsan kod çalışabilir, ama büyük hata riskine girersin.

Yanlış yazılmış bir örnek:

```java
class Hayvan {
    public void sesCikar() {
        System.out.println("Genel ses");
    }
}

class Kedi extends Hayvan {
    // @Override yok
    public void sescikar() { // küçük-büyük harf hatası!
        System.out.println("Miyav");
    }
}
```

Bu durumda override olmadı, yeni bir metot tanımlandı. Sessiz bir hata.

Doğrusu:

```java
class Kedi extends Hayvan {
    @Override
    public void sesCikar() {
        System.out.println("Miyav");
    }
}
```

`@Override` derleyiciye “ben bilinçli şekilde eziyorum” demektir. Derleyici de seni korur.

## `super` ile Üst Sınıf Davranışını Korumak

Bazen metodu tamamen değiştirmek değil, üst davranışı genişletmek isteriz.

```java
class Bildirim {
    public void gonder() {
        System.out.println("Temel bildirim gönderildi.");
    }
}

class EmailBildirim extends Bildirim {
    @Override
    public void gonder() {
        super.gonder();
        System.out.println("E-posta içeriği oluşturuldu ve iletildi.");
    }
}
```

Bu yaklaşım, mevcut sistemi bozmadan yeni özellik eklemeyi sağlar.

## Polimorfizm ile Güçlü Tasarım

Aynı metodu ortak bir referans listesi üzerinden çağırabildiğimizde kod ciddi sadeleşir:

```java
import java.util.*;

class Arac {
    public void calistir() {
        System.out.println("Araç çalışıyor.");
    }
}

class Araba extends Arac {
    @Override
    public void calistir() {
        System.out.println("Araba motoru çalıştı.");
    }
}

class Motosiklet extends Arac {
    @Override
    public void calistir() {
        System.out.println("Motosiklet çalıştı.");
    }
}

public class Test {
    public static void main(String[] args) {
        List<Arac> araclar = Arrays.asList(new Araba(), new Motosiklet());

        for (Arac arac : araclar) {
            arac.calistir();
        }
    }
}
```

Yeni bir araç türü eklendiğinde mevcut döngüyü değiştirmezsin. Bu, temiz mimarinin temelidir.

## Anonim Sınıf ile Anlık Metot Ezme (Pratik Kullanım)

Bazen tek seferlik, hızlı bir davranış değişikliği gerekir. Böyle durumlarda **anonim sınıf** ile nesne üretirken metodu anında ezebilirsin:

```java
DusmanKarakter dusmanKarakter = new DusmanKarakter() {
    @Override
    public void yuru() {
        System.out.println("Dusman portaldan kaçtı");
    }
};

dusmanKarakter.yuru();
```

Bu kullanımın mantığı:

- `DusmanKarakter` sınıfından kalıtım alan **isimsiz** bir alt sınıf oluşturulur.
- `yuru()` metodu sadece bu nesne için özelleştirilir.
- Kod hızlı prototipleme, event/callback ve kısa süreli davranış değişikliklerinde çok işe yarar.

> Not: Sık ve karmaşık kullanımda okunabilirlik düşebilir. Uzun vadede ayrı bir sınıf açmak genelde daha temizdir.

## Sınavda ve Projede Sık Gelen Tuzaklar

### 1) Parametreyi değiştirip override yaptığını sanmak

```java
// Bu overriding DEGIL, overloading
public void saldir(int hasar) { ... }
```

### 2) Erişim seviyesini daraltmak

```java
// Parent: public
// Child: protected   -> HATA
```

### 3) `static` metodun override olduğunu sanmak

`static` metotlar sınıfa aittir, nesneye değil. Bu yüzden override değil, **method hiding** olur.

### 4) `equals()` gibi kritik metotları yanlış imzayla yazmak

```java
// Dogru imza:
@Override
public boolean equals(Object obj) { ... }
```

## Ne Zaman Override Yapmalı, Ne Zaman Yapmamalı?

Override yap:

- Alt sınıfın davranışı gerçekten farklıysa
- Ortak sözleşme korunup detay değişecekse
- Polimorfik kullanım hedefleniyorsa

Yapma:

- Sadece "farklı olsun" diye gereksiz değişiklik yapacaksan
- Alt sınıf, üst sınıf davranışını bozacaksan
- Kodun anlaşılabilirliğini düşüreceksen

> İyi override, sistemi esnetir. Kötü override, sistemi sürprizlerle doldurur.

## Mini Uygulama Görevi (Ders Sonu)

Aşağıdaki sınıf yapısını kur:

1. `Sekil` sınıfı → `alanHesapla()` metodu (temel mesaj döndürsün)
2. `Daire`, `Dikdortgen`, `Ucgen` sınıfları → `alanHesapla()` metodunu override etsin
3. `List<Sekil>` içinde nesneleri dolaşıp alanları yazdır

Ek görev (puan artırır):

- `toString()` metodunu da override ederek okunabilir çıktı ver
- Hatalı değer (negatif yarıçap vb.) için doğrulama ekle

## Kapanış

Metot ezme, nesne tabanlı programlamanın “sadece miras” değil, **davranış tasarımı** olduğunu gösterir. Kodunuzu büyütürken sizi kurtaran şey; az satır değil, doğru soyutlamadır.

Bir sonraki derste bunu bir adım ileri taşıyıp **arayüz (interface) + overriding + çok biçimlilik** kombinasyonuyla gerçek proje kurgusu yapacağız.
