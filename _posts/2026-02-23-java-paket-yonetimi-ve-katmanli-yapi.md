---
layout: post
title: "Java'da Paket Yonetimi: Katmanli Mimari ile Telefon Rehberi Ornegi"
date: 2026-02-23
categories: nesne-tabanli-programlama-ii
---

Bu derste Java'da **paket (package) yonetimi** konusunu, gercek hayata yakin bir **Telefon Rehberi** uygulamasi uzerinden detayli inceleyecegiz.

Amacimiz sadece `package` yazmayi ogrenmek degil; kodu **duzenli, bakimi kolay ve buyumeye uygun** sekilde nasil organize edecegimizi kavramak.

## Paket (Package) Nedir?

Paket, Java'da siniflari mantiksal olarak grupladigimiz isim alanidir (namespace).

Paket kullanmanin faydalari:

- Sinif isim cakismalarini onler
- Kod tabanini moduler hale getirir
- Takim calismasinda duzen saglar
- Katmanli mimari kurmayi kolaylastirir

## Neden Paketleme Gerekli?

Kucuk bir projede tum siniflari tek klasore atmak ilk basta kolay gorunur. Ama proje buyudukce su sorunlar baslar:

- Hangi sinif ne ise yariyor belli olmaz
- UI, is kurallari ve veri erisim kodu birbirine girer
- Test yazmak ve hata ayiklamak zorlasir

Cozum: Baslangictan itibaren dogru paket yapisi.

## Ornek Senaryo: Telefon Rehberi Uygulamasi

Kurumsal bir yapi dusunelim. Ana paketimiz:

`com.firmaadi.rehber`

Bunun altinda katmanlara gore alt paketler olusturalim.

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

## Paketlerin Sorumluluklari

### 1) `ui` paketi

Kullanicidan girdi alma ve cikti gosterme katmanidir.

- Ekrana yazdirma
- Menu gosterme
- Kullanici secimlerini alma

> UI katmani is kurali yazmaz; sadece kullanici ile etkilesimi yonetir.

### 2) `domain` paketi

Sistemin cekirdek varliklarini (entity/model) tutar.

- `Kisi`
- `Adres`
- `Telefon` (gerekiyorsa)

Bu siniflar alanlar (fields), constructor, getter/setter ve temel davranislari barindirir.

### 3) `service` paketi

Is kurallarinin oldugu yerdir.

- Kisi ekleme
- Kisi silme
- Numaraya gore arama
- Is kurali validasyonlari

### 4) `repository` paketi

Veri saklama/erisimi burada toplanir.

- Bellekte liste
- Dosya tabanli saklama
- Veritabani baglantisi

### 5) `exception` paketi

Projeye ozel hata tipleri burada bulunur.

- `KisiBulunamadiException`
- `GecersizTelefonException`

### 6) `app` paketi

Uygulamanin giris noktasi (`main`) bu pakette tutulur.

## Kod Ornegi - Domain Sinifi

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

## Kod Ornegi - Repository Katmani

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

## Kod Ornegi - Service Katmani

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
            throw new IllegalArgumentException("Ad bos olamaz");
        }
        if (telefon == null || telefon.isBlank()) {
            throw new IllegalArgumentException("Telefon bos olamaz");
        }
        repository.ekle(new Kisi(ad, telefon));
    }

    public List<Kisi> tumKisiler() {
        return repository.tumu();
    }
}
```

## Kod Ornegi - UI Katmani

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
        service.kisiEkle("Ayse", "05001112233");
        service.kisiEkle("Mehmet", "05004445566");

        List<Kisi> kisiler = service.tumKisiler();
        for (Kisi kisi : kisiler) {
            System.out.println(kisi);
        }
    }
}
```

## Kod Ornegi - Main (Giris Noktasi)

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

## Import Mantigi ve Bagimlilik Yonetimi

Paketleme yaparken su kurali benimseyin:

- `ui` -> `service` kullanir
- `service` -> `repository` ve `domain` kullanir
- `repository` -> `domain` kullanir
- `domain` mumkun oldugunca bagimsiz kalir

Bu bagimlilik yonu tersine donerse (or. domain'in ui'ya baglanmasi) mimari bozulur.

## Sik Yapilan Hatalar

1. Tum siniflari tek pakette toplamak
2. `util` paketini cop kutusuna cevirmek
3. UI katmaninda veritabani kodu yazmak
4. Service katmanini atlayip dogrudan repository kullanmak
5. Paket isimlerinde buyuk harf veya Turkce karakter kullanmak

## Paket Isimlendirme Kurallari

Java'da yaygin konvansiyon:

- Tamami kucuk harf
- Sirket/alan adinin tersinden baslar
- Anlamli alt paketler kullanilir

Ornek:

- `com.firmaadi.rehber`
- `com.universite.obs.ogrenci`
- `org.ornek.proje.service`

## Kisa Odev

Asagidaki paketleri olusturup mini bir rehber uygulamasi yazin:

1. `domain` -> `Kisi` (ad, soyad, telefon)
2. `repository` -> `KisiRepository` (listeye ekle, listele)
3. `service` -> `RehberService` (ad bos ise hata ver)
4. `ui` -> Konsolda menu bastirin
5. `app` -> `Main` ile uygulamayi calistirin

Ek gorev: `exception` paketinde `KisiZatenVarException` sinifi tanimlayin.

## Ozet

- Paket yonetimi, buyuk projelerde duzeni korumanin temelidir.
- `com.firmaadi.rehber` gibi ana paket altinda katmanlara ayrim yapmak profesyonel yaklasimdir.
- UI, domain, service, repository ayrimi hem okunabilirligi hem test edilebilirligi ciddi artirir.
- Telefon rehberi gibi kucuk bir ornek bile dogru paketleme ile kurumsal kaliteye yaklasir.
