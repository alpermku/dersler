---
layout: post
title: "Java'da Paket Yönetimi: Katmanlı Mimari ile Telefon Rehberi Örneği"
date: 2026-02-23
categories: nesne-tabanli-programlama-ii
---

Bu derste Java'da **paket (package) yönetimi** konusunu, gerçek hayata yakın bir **Telefon Rehberi** uygulaması üzerinden detaylı inceleyeceğiz.

Amacımız sadece `package` yazmayı öğrenmek değil; kodu **düzenli, bakımı kolay ve büyümeye uygun** şekilde nasıl organize edeceğimizi kavramak.

## Paket (Package) Nedir?

Paket, Java'da sınıfları mantıksal olarak grupladığımız isim alanıdır (namespace).

Paket kullanmanın faydaları:

- Sınıf isim çakışmalarını önler
- Kod tabanını modüler hâle getirir
- Takım çalışmasında düzen sağlar
- Katmanlı mimari kurmayı kolaylaştırır

## Neden Paketleme Gerekli?

Küçük bir projede tüm sınıfları tek klasöre atmak ilk başta kolay görünür. Ama proje büyüdükçe şu sorunlar başlar:

- Hangi sınıf ne işe yarıyor belli olmaz
- UI, iş kuralları ve veri erişim kodu birbirine girer
- Test yazmak ve hata ayıklamak zorlaşır

Çözüm: Başlangıçtan itibaren doğru paket yapısı.

## Örnek Senaryo: Telefon Rehberi Uygulaması

Kurumsal bir yapı düşünelim. Ana paketimiz:

`com.firmaadi.rehber`

Bunun altında katmanlara göre alt paketler oluşturalım.

```text
com/firmaadi/rehber/
 ├── ui/
 │    └── RehberConsoleUI.java
 ├── domain/
 │    └── Kisi.java
 ├── service/
 │    └── RehberService.java
 ├── repository/
 │    └── KisiRepository.java
 ├── exception/
 │    └── KisiBulunamadiException.java
 └── app/
      └── Main.java
```

## Paketlerin Sorumlulukları

### 1) `ui` paketi

Kullanıcıdan girdi alma ve çıktı gösterme katmanıdır.

- Ekrana yazdırma
- Menü gösterme
- Kullanıcı seçimlerini alma

> UI katmanı iş kuralı yazmaz; sadece kullanıcı ile etkileşimi yönetir.

### 2) `domain` paketi

Sistemin çekirdek varlıklarını (entity/model) tutar.

- `Kisi`
- `Adres`
- `Telefon` (gerekiyorsa)

Bu sınıflar alanlar (fields), constructor, getter/setter ve temel davranışları barındırır.

### 3) `service` paketi

İş kurallarının olduğu yerdir.

- Kişi ekleme
- Kişi silme
- Numaraya göre arama
- İş kuralı doğrulamaları

### 4) `repository` paketi

Veri saklama/erişim burada toplanır.

- Bellekte liste
- Dosya tabanlı saklama
- Veritabanı bağlantısı

### 5) `exception` paketi

Projeye özel hata tipleri burada bulunur.

- `KisiBulunamadiException`
- `GecersizTelefonException`

### 6) `app` paketi

Uygulamanın giriş noktası (`main`) bu pakette tutulur.

## Kod Örneği - Domain Sınıfı

`com.firmaadi.rehber.domain.Kisi`

```java
package com.firmaadi.rehber.domain;

public class Kisi {
    private String ad;
    private String telefon;

    public Kisi(String ad, String telefon) {
        this.ad = ad;
        this.telefon = telefon;
    }

    public String getAd() {
        return ad;
    }

    public String getTelefon() {
        return telefon;
    }

    @Override
    public String toString() {
        return ad + " - " + telefon;
    }
}
```

## Kod Örneği - Repository Katmanı

`com.firmaadi.rehber.repository.KisiRepository`

```java
package com.firmaadi.rehber.repository;

import com.firmaadi.rehber.domain.Kisi;
import java.util.ArrayList;
import java.util.List;

public class KisiRepository {
    private final List<Kisi> kisiler = new ArrayList<>();

    public void ekle(Kisi kisi) {
        kisiler.add(kisi);
    }

    public List<Kisi> tumu() {
        return new ArrayList<>(kisiler);
    }
}
```

## Kod Örneği - Service Katmanı

`com.firmaadi.rehber.service.RehberService`

```java
package com.firmaadi.rehber.service;

import com.firmaadi.rehber.domain.Kisi;
import com.firmaadi.rehber.repository.KisiRepository;
import java.util.List;

public class RehberService {
    private final KisiRepository repository;

    public RehberService(KisiRepository repository) {
        this.repository = repository;
    }

    public void kisiEkle(String ad, String telefon) {
        if (ad == null || ad.isBlank()) {
            throw new IllegalArgumentException("Ad boş olamaz");
        }
        if (telefon == null || telefon.isBlank()) {
            throw new IllegalArgumentException("Telefon boş olamaz");
        }
        repository.ekle(new Kisi(ad, telefon));
    }

    public List<Kisi> tumKisiler() {
        return repository.tumu();
    }
}
```

## Kod Örneği - UI Katmanı

`com.firmaadi.rehber.ui.RehberConsoleUI`

```java
package com.firmaadi.rehber.ui;

import com.firmaadi.rehber.domain.Kisi;
import com.firmaadi.rehber.service.RehberService;
import java.util.List;

public class RehberConsoleUI {
    private final RehberService service;

    public RehberConsoleUI(RehberService service) {
        this.service = service;
    }

    public void demoCalistir() {
        service.kisiEkle("Ayşe", "05001112233");
        service.kisiEkle("Mehmet", "05004445566");

        List<Kisi> kisiler = service.tumKisiler();
        for (Kisi kisi : kisiler) {
            System.out.println(kisi);
        }
    }
}
```

## Kod Örneği - Main (Giriş Noktası)

`com.firmaadi.rehber.app.Main`

```java
package com.firmaadi.rehber.app;

import com.firmaadi.rehber.repository.KisiRepository;
import com.firmaadi.rehber.service.RehberService;
import com.firmaadi.rehber.ui.RehberConsoleUI;

public class Main {
    public static void main(String[] args) {
        KisiRepository repository = new KisiRepository();
        RehberService service = new RehberService(repository);
        RehberConsoleUI ui = new RehberConsoleUI(service);

        ui.demoCalistir();
    }
}
```

## Import Mantığı ve Bağımlılık Yönetimi

Paketleme yaparken şu kuralı benimseyin:

- `ui` -> `service` kullanır
- `service` -> `repository` ve `domain` kullanır
- `repository` -> `domain` kullanır
- `domain` mümkün olduğunca bağımsız kalır

Bu bağımlılık yönü tersine dönerse (ör. domain'in ui'ya bağlanması) mimari bozulur.

## Sık Yapılan Hatalar

1. Tüm sınıfları tek pakette toplamak
2. `util` paketini çöp kutusuna çevirmek
3. UI katmanında veritabanı kodu yazmak
4. Service katmanını atlayıp doğrudan repository kullanmak
5. Paket isimlerinde büyük harf veya Türkçe karakter kullanmak

## Paket İsimlendirme Kuralları

Java'da yaygın konvansiyon:

- Tamamı küçük harf
- Şirket/alan adının tersinden başlar
- Anlamlı alt paketler kullanılır

Örnek:

- `com.firmaadi.rehber`
- `com.universite.obs.ogrenci`
- `org.ornek.proje.service`

## Kısa Ödev

Aşağıdaki paketleri oluşturup mini bir rehber uygulaması yazın:

1. `domain` -> `Kisi` (ad, soyad, telefon)
2. `repository` -> `KisiRepository` (listeye ekle, listele)
3. `service` -> `RehberService` (ad boş ise hata ver)
4. `ui` -> Konsolda menü bastırın
5. `app` -> `Main` ile uygulamayı çalıştırın

Ek görev: `exception` paketinde `KisiZatenVarException` sınıfı tanımlayın.

## Özet

- Paket yönetimi, büyük projelerde düzeni korumanın temelidir.
- `com.firmaadi.rehber` gibi ana paket altında katmanlara ayrım yapmak profesyonel yaklaşımdır.
- UI, domain, service, repository ayrımı hem okunabilirliği hem test edilebilirliği ciddi artırır.
- Telefon rehberi gibi küçük bir örnek bile doğru paketleme ile kurumsal kaliteye yaklaşır.
