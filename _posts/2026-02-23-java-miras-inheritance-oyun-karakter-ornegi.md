---
layout: post
title: "Java'da Miras (Inheritance): Oyun Karakter Hiyerarşisi ile Kapsamlı Anlatım"
date: 2026-02-23
categories: nesne-tabanli-programlama-ii
---

Bu derste Java'nın en temel nesne yönelimli programlama (OOP) kavramlarından biri olan **miras (inheritance)** konusunu, bir **oyun karakter sistemi** üzerinden adım adım öğreneceğiz. Konuyu sıfırdan ele alacağız; ders sonunda miras mekanizmasını tam olarak kavramış olacaksınız.

## Miras (Inheritance) Nedir?

Miras, bir sınıfın başka bir sınıftan **özellik ve davranışları devralması** anlamına gelir.

Gerçek hayattan bir benzetme yapalım:

> Bir "Canlı" sınıfı düşünün: nefes alır, hareket eder. "İnsan" sınıfı Canlı'dan miras alır — nefes almayı ve hareket etmeyi tekrar yazmaya gerek yoktur. İnsan bunlara ek olarak konuşabilir, yazabilir.

Java'da miras `extends` anahtar kelimesiyle sağlanır:

```java
public class Alt extends Ust {
    // Alt sınıf, Üst sınıfın tüm özellik ve metotlarını devralır
}
```

## Neden Miras Kullanılır?

1. **Kod tekrarını önler:** Ortak özellikler bir kez yazılır, tüm alt sınıflar devralır.
2. **Hiyerarşik düzen kurar:** Gerçek dünyadaki "... bir türüdür" ilişkisini modeller.
3. **Bakımı kolaylaştırır:** Ortak bir değişiklik tek yerden yapılır.
4. **Genişletilebilirlik sağlar:** Yeni alt sınıflar eklemek mevcut kodu bozmaz.

## Senaryo: Oyun Karakter Sistemi

Bir oyun geliştirdiğimizi düşünelim. Oyunda farklı karakter tipleri var:

- **Tüm karakterlerin** ortak özellikleri: can, hız, isim; yürüyebilir, durabilir.
- **İyi karakterlerin** ek özelliği: uçuş hızı; uçabilir.
- **Düşman karakterlerin** ek özelliği: vuruş gücü; saldırabilir.

Bu yapıyı miras kullanmadan yazmaya kalksak, `can`, `hiz`, `adi`, `yuru()`, `dur()` gibi ortak kodları **her sınıfta tekrar** yazmak zorunda kalırdık. Miras bizi bu tekrardan kurtarır.

## Sınıf Hiyerarşisi

```text
                  Karakter (Üst Sınıf)
                 ┌───────────────────┐
                 │ can, hiz, adi     │
                 │ yuru(), dur()     │
                 └────────┬──────────┘
                          │
              ┌───────────┴───────────┐
              │                       │
   ┌──────────┴──────────┐  ┌────────┴──────────┐
   │   IyiKarakter       │  │  DusmanKarakter    │
   │   ucusHizi           │  │  vurusGucu         │
   │   uc()              │  │  vur()             │
   └─────────────────────┘  └────────────────────┘
```

## Paket Yapısı

Sınıflarımızı düzenli bir paket yapısında organize ediyoruz:

```text
edu/mku/oyun/
 ├── karakter/
 │    ├── Karakter.java
 │    ├── IyiKarakter.java
 │    └── DusmanKarakter.java
 └── test/
      └── Test.java
```

## Adım 1: Üst Sınıf — `Karakter`

Önce tüm karakterlerin ortak noktalarını içeren **üst sınıfı (superclass)** yazalım:

```java
package edu.mku.oyun.karakter;

public class Karakter {

    private int can;
    private int hiz;
    private String adi;

    // --- Getter ve Setter Metotları ---

    public int getCan() {
        return can;
    }

    public void setCan(int can) {
        this.can = can;
    }

    public int getHiz() {
        return hiz;
    }

    public void setHiz(int hiz) {
        this.hiz = hiz;
    }

    public String getAdi() {
        return adi;
    }

    public void setAdi(String adi) {
        this.adi = adi;
    }

    // --- Ortak Davranışlar ---

    public void yuru() {
        System.out.println("Ben " + adi + ", yürüyorum.");
    }

    public void dur() {
        System.out.println("Ben " + adi + ", durdum.");
    }
}
```

**Dikkat edilecek noktalar:**

- Alanlar `private` tanımlandı → **kapsülleme (encapsulation)** ilkesine uygun.
- Dışarıdan erişim getter/setter ile sağlanıyor.
- `yuru()` ve `dur()` tüm karakterlerin yapabileceği ortak davranışlar.

## Adım 2: Alt Sınıf — `IyiKarakter`

İyi karakter, `Karakter`'den miras alır ve uçma yeteneği ekler:

```java
package edu.mku.oyun.karakter;

public class IyiKarakter extends Karakter {

    private int ucusHizi;

    public int getUcusHizi() {
        return ucusHizi;
    }

    public void setUcusHizi(int ucusHizi) {
        this.ucusHizi = ucusHizi;
    }

    public void uc() {
        System.out.println("Ben " + getAdi() + ", " + ucusHizi + " km hızla uçuyorum!");
    }
}
```

**Burada neler oluyor?**

- `extends Karakter` → `IyiKarakter`, `Karakter`'in tüm alanlarını ve metotlarını **devralır**.
- `ucusHizi` ve `uc()` → yalnızca iyi karakterlere özgü ek özellik ve davranış.
- `getAdi()` metodu `IyiKarakter` içinde tanımlanmadı ama **miras yoluyla** kullanılabiliyor.

> **Önemli:** `adi` alanı `private` olduğu için alt sınıftan doğrudan `adi` yazarak erişilemez. Bu yüzden `getAdi()` kullanıyoruz. Eğer `protected` olsaydı doğrudan erişilebilirdi.

## Adım 3: Alt Sınıf — `DusmanKarakter`

Düşman karakter de `Karakter`'den miras alır ve saldırı yeteneği ekler:

```java
package edu.mku.oyun.karakter;

public class DusmanKarakter extends Karakter {

    private int vurusGucu;

    public int getVurusGucu() {
        return vurusGucu;
    }

    public void setVurusGucu(int vurusGucu) {
        this.vurusGucu = vurusGucu;
    }

    public void vur(IyiKarakter hedef) {
        System.out.println(getAdi() + ", " + hedef.getAdi() + "'ye saldırdı!");
        hedef.setCan(hedef.getCan() - vurusGucu);
        System.out.println(hedef.getAdi() + "'nin kalan canı: " + hedef.getCan());
    }
}
```

**İlginç detay:** `vur()` metodu parametre olarak `IyiKarakter` alıyor. Bu, iki farklı alt sınıfın **birbirleriyle etkileşime girebildiğini** gösterir.

## Adım 4: Test Sınıfı — Her Şeyi Bir Araya Getirme

```java
package edu.mku.oyun.test;

import edu.mku.oyun.karakter.IyiKarakter;
import edu.mku.oyun.karakter.DusmanKarakter;

public class Test {

    public static void main(String[] args) {

        // --- İyi Karakter Oluştur ---
        IyiKarakter kahraman = new IyiKarakter();
        kahraman.setAdi("Hayri");
        kahraman.setCan(100);
        kahraman.setHiz(10);
        kahraman.setUcusHizi(20);

        // --- Düşman Karakter Oluştur ---
        DusmanKarakter canavar = new DusmanKarakter();
        canavar.setAdi("Gölge");
        canavar.setCan(80);
        canavar.setHiz(8);
        canavar.setVurusGucu(35);

        // --- Miras Yoluyla Gelen Davranışlar ---
        kahraman.yuru();    // Karakter'den miras
        kahraman.dur();     // Karakter'den miras

        // --- Alt Sınıfa Özgü Davranışlar ---
        kahraman.uc();      // IyiKarakter'e özgü

        // --- Karakterler Arası Etkileşim ---
        canavar.vur(kahraman);
        canavar.vur(kahraman);

        // --- Son Durum ---
        System.out.println(kahraman.getAdi() + "'nin kalan canı: " + kahraman.getCan());
    }
}
```

**Beklenen çıktı:**

```text
Ben Hayri, yürüyorum.
Ben Hayri, durdum.
Ben Hayri, 20 km hızla uçuyorum!
Gölge, Hayri'ye saldırdı!
Hayri'nin kalan canı: 65
Gölge, Hayri'ye saldırdı!
Hayri'nin kalan canı: 30
Hayri'nin kalan canı: 30
```

## Miras'ın Temel Kuralları

### 1) `extends` ile tek sınıftan miras alınır

Java'da **çoklu miras (multiple inheritance) yoktur**. Bir sınıf yalnızca bir üst sınıftan miras alabilir:

```java
// ✅ Geçerli
public class IyiKarakter extends Karakter { }

// ❌ Geçersiz — Java'da izin verilmez
public class Melez extends IyiKarakter, DusmanKarakter { }
```

### 2) `private` üyeler miras alınmaz (doğrudan erişilemez)

Üst sınıftaki `private` alanlar alt sınıfta **var olmaya devam eder** (bellekte yer kaplar) ama doğrudan erişilemez. Erişim getter/setter ile sağlanır:

```java
// IyiKarakter içinde:
System.out.println(adi);        // ❌ Derleme hatası — private
System.out.println(getAdi());   // ✅ Getter ile erişim
```

### 3) Erişim belirleyicileri ve miras

| Belirleyici | Aynı Sınıf | Aynı Paket | Alt Sınıf | Diğer |
|-------------|:----------:|:----------:|:---------:|:-----:|
| `private`   | ✅ | ❌ | ❌ | ❌ |
| _(varsayılan)_ | ✅ | ✅ | ❌ | ❌ |
| `protected` | ✅ | ✅ | ✅ | ❌ |
| `public`    | ✅ | ✅ | ✅ | ✅ |

> Alt sınıftan doğrudan erişilmesini istediğiniz alanlar için `protected` kullanabilirsiniz; ancak `private` + getter/setter yaklaşımı daha güvenlidir.

### 4) Yapıcı (Constructor) miras alınmaz

Alt sınıf, üst sınıfın yapıcısını **otomatik olarak devralmaz**. Ancak `super()` ile üst sınıfın yapıcısını çağırabilir:

```java
public class Karakter {
    private String adi;

    public Karakter(String adi) {
        this.adi = adi;
    }
}

public class IyiKarakter extends Karakter {

    public IyiKarakter(String adi, int ucusHizi) {
        super(adi);  // Üst sınıfın yapıcısını çağır
        this.ucusHizi = ucusHizi;
    }
}
```

### 5) `super` anahtar kelimesi

`super` iki amaçla kullanılır:

- **`super()`** → Üst sınıfın yapıcısını çağırır (yapıcının ilk satırı olmalı).
- **`super.metotAdi()`** → Üst sınıfın metotunu çağırır (override durumlarında).

## Metot Geçersiz Kılma (Override)

Alt sınıf, üst sınıftan miras aldığı bir metotu **aynı imzayla yeniden yazabilir**:

```java
public class Karakter {
    public void yuru() {
        System.out.println("Ben " + adi + ", yürüyorum.");
    }
}

public class IyiKarakter extends Karakter {

    @Override
    public void yuru() {
        super.yuru();  // Önce üst sınıfın versiyonunu çalıştır
        System.out.println("...ve uçmaya hazırlanıyorum!");
    }
}
```

**`@Override` anotasyonu neden önemli?**

- Derleyiciye "Bu metotu bilinçli olarak geçersiz kılıyorum" der.
- Metot imzasını yanlış yazarsanız derleme hatası verir → hataları erken yakalar.

## `instanceof` ile Tip Kontrolü

Bir nesnenin hangi sınıfa ait olduğunu çalışma zamanında kontrol edebiliriz:

```java
Karakter k = new IyiKarakter();

if (k instanceof IyiKarakter) {
    System.out.println("Bu bir iyi karakter!");
}

if (k instanceof Karakter) {
    System.out.println("Bu bir karakter!"); // Bu da true — IyiKarakter aynı zamanda Karakter'dir
}
```

## Polimorfizm ile Miras'ın Gücü

Üst sınıf tipinde bir referans, alt sınıf nesnesini tutabilir:

```java
Karakter k1 = new IyiKarakter();
Karakter k2 = new DusmanKarakter();

k1.yuru();  // IyiKarakter override ettiyse, onun versiyonu çalışır
k2.yuru();  // DusmanKarakter override ettiyse, onun versiyonu çalışır
```

Bu sayede farklı alt sınıf nesnelerini **aynı türde** saklayıp işleyebiliriz:

```java
Karakter[] takım = new Karakter[3];
takım[0] = new IyiKarakter();
takım[1] = new DusmanKarakter();
takım[2] = new IyiKarakter();

for (Karakter k : takım) {
    k.yuru();  // Her biri kendi versiyonunu çalıştırır
}
```

## `Object` Sınıfı — Her Şeyin Atası

Java'da her sınıf dolaylı olarak `java.lang.Object` sınıfından miras alır:

```text
Object
 └── Karakter
      ├── IyiKarakter
      └── DusmanKarakter
```

Bu yüzden her nesne `toString()`, `equals()`, `hashCode()` gibi metotlara sahiptir.

## Sık Yapılan Hatalar

| Hata | Açıklama |
|------|----------|
| Alt sınıftan `private` alana erişmeye çalışmak | Getter/setter kullanın |
| `super()` çağrısını yapıcının ilk satırına yazmamak | Derleme hatası verir |
| `@Override` yazmadan metot geçersiz kılmak | Yanlış imza fark edilmez |
| Her yerde miras kullanmak | "is-a" ilişkisi yoksa miras yerine **composition** tercih edin |

## "is-a" Testi

Miras uygulamadan önce şu soruyu sorun:

- "IyiKarakter **bir** Karakter midir?" → Evet ✅ → Miras uygundur.
- "Motor **bir** Araba mıdır?" → Hayır ❌ → Miras değil, **composition** kullanın.

## Özet

- `extends` anahtar kelimesiyle bir sınıf başka bir sınıftan miras alır.
- Üst sınıfın `public` ve `protected` üyeleri doğrudan; `private` üyeleri getter/setter ile kullanılabilir.
- Alt sınıf kendi özel alanlarını ve metotlarını ekleyebilir.
- `@Override` ile üst sınıf metotları geçersiz kılınabilir.
- `super` ile üst sınıfın yapıcısına ve metotlarına erişilir.
- Java'da çoklu miras yoktur; bir sınıf yalnızca bir sınıftan miras alabilir.
- Miras, polimorfizmin temelini oluşturur.
- "is-a" ilişkisi varsa miras; "has-a" ilişkisi varsa composition tercih edilmelidir.

## Pratik Ödev

Yukarıdaki oyun karakter sistemini genişletin:

1. `Karakter` sınıfına `int zirh` alanı ekleyin.
2. `DusmanKarakter`'in `vur()` metodunu zırhı hesaba katacak şekilde güncelleyin: `hedef.setCan(hedef.getCan() - (vurusGucu - hedef.getZirh()))`.
3. `BuyuculuKarakter` adında yeni bir alt sınıf oluşturun: `int buyuGucu` alanı ve `buyuYap(DusmanKarakter hedef)` metodu olsun.
4. `Test` sınıfında tüm karakterleri bir `Karakter[]` dizisine koyup polimorfik şekilde `yuru()` çağırın.
