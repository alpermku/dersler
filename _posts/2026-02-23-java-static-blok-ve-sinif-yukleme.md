---
layout: post
title: "Java Static Blok (Static Initializer) ve Sinif Yukleme Sureci"
date: 2026-02-23
categories: nesne-tabanli-programlama-ii
---

Bu derste Java'da **static blok** (static initializer block) yapisini, ne zaman calistigini, constructor ile farkini ve sinif yukleme sureciyle iliskisini netlestiriyoruz.

## Static Blok Nedir?

`static { ... }` blogu, bir sinif JVM tarafindan **ilk kez yuklendiginde** otomatik olarak calisan ozel bir bloktur.

Temel ozellikler:

- Sinif yuklenirken calisir
- Genellikle **bir kez** calisir (ilgili class loader icin)
- Nesne olusturmaya gerek yoktur
- Static alanlarin ilklendirilmesinde kullanilir

## Temel Ornek

```java
class Test {
    static {
        System.out.println("Static blok calisti");
    }

    public Test() {
        System.out.println("Constructor calisti");
    }
}

public class Main {
    public static void main(String[] args) {
        Test t1 = new Test();
        Test t2 = new Test();
    }
}
```

Beklenen cikti:

```text
Static blok calisti
Constructor calisti
Constructor calisti
```

Yorum:

- `static` blok 1 kez
- Constructor her nesne olusumunda

## Static Blok Ne Zaman Tetiklenir?

Asagidaki durumlar sinifin yuklenmesini tetikleyebilir:

1. Siniftan nesne olusturma (`new`)
2. Static metoda erisme
3. Static degiskene erisme (compile-time sabitleri haric)
4. `Class.forName("...")` cagrisi

## Nesne Olusturmadan Calisma Ornegi

```java
class Test {
    static {
        System.out.println("Ben calistim");
    }

    static int x = 5;
}

public class Main {
    public static void main(String[] args) {
        System.out.println(Test.x);
    }
}
```

Cikti:

```text
Ben calistim
5
```

## Static Blok Nerede Kullanilir?

### 1) Static veriyi hazirlama

```java
class Veri {
    static int[] numbers;

    static {
        numbers = new int[5];
        for (int i = 0; i < 5; i++) {
            numbers[i] = i * 10;
        }
    }
}
```

### 2) Uygulama baslangic konfigrasyonu

```java
class AppConfig {
    static {
        // Config dosyasi okuma, log sistemi acilis ayarlari vb.
        System.out.println("Baslangic ayarlari yukleniyor...");
    }
}
```

### 3) Reflection ile zorunlu sinif yukleme

```java
public class Main {
    public static void main(String[] args) throws Exception {
        Class.forName("ornek.DriverLoader");
    }
}
```

> Not: Eski JDBC orneklerinde `Class.forName(...)` kullanimi yaygindi.

## Birden Fazla Static Blok

Ayni sinifta birden fazla static blok olabilir. **Yazildigi siraya gore** calisir.

```java
class Demo {
    static { System.out.println("1"); }
    static { System.out.println("2"); }
}
```

Cikti:

```text
1
2
```

## Static Blok vs Constructor

| Ozellik | Static Blok | Constructor |
|--------|-------------|-------------|
| Calisma zamani | Sinif yuklenince | Nesne olusunca |
| Calisma sayisi | Genelde 1 | Her nesne icin |
| Static uyelerle iliski | Dogrudan | Dolayli |
| Nesne gereksinimi | Gerekmez | Gerekir |

## Static Blok vs Instance Initializer Blok

Java'da instance initializer blok da vardir:

```java
class Ornek {
    {
        System.out.println("Instance initializer");
    }

    Ornek() {
        System.out.println("Constructor");
    }
}
```

Nesne olusturuldugunda sira:

1. Instance initializer blok
2. Constructor

## JVM Sinif Yukleme Akisi (Kisa)

Basitlestirilmis surec:

1. **Loading:** `.class` bytecode bellege alinir
2. **Linking:** dogrulama, hazirlama, cozumleme
3. **Initialization:** static alanlar ve static bloklar calisir

Yani static bloklar, class initialization fazinda devreye girer.

## SIK HATA: Buyuk/Kucuk Harf

Java buyuk-kucuk harf duyarlidir:

- Dogru: `System.out.println(...)`
- Yanlis: `system.out.println(...)`

## Mulakat Tipi Tricky Notlar

- `static final int A = 10;` gibi derleme zamani sabitleri bazen sinif yuklemesini tetiklemeden kullanilabilir.
- Ust sinif-static bloklari, alt sinifinkinden once calisir.
- Farkli class loader senaryolarinda static ilklendirme davranisi loader baglamina gore degisebilir.

## Ozet

- `static {}` sinif ilk kez yuklendiginde calisir.
- Constructor nesne olusturuldukca calisir.
- Baslangic ayarlari, static veri ilklendirme ve sinif seviye hazirliklarda static blok cok kullanislidir.
- Dozunda kullanilmali; agir isleri static blokta tutmak acilis maliyetini arttirabilir.

Bir sonraki derste bu konuya bagli olarak **kalitimda static uyelerin davranisi** ve **class loader etkileri** incelenebilir.
