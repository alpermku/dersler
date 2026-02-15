---
layout: post
title: "Tasarim Desenleri: Singleton ve Factory"
date: 2026-02-16
categories: nesne-tabanli-programlama-ii
---

Bu hafta Nesne Tabanli Programlama-II dersinde iki onemli tasarim desenini inceliyoruz: Singleton ve Factory.

## Singleton Deseni

Singleton deseni, bir sinifin yalnizca **tek bir orneginin** olusturulmasini garanti eder ve bu ornege global bir erisim noktasi saglar.

### Ne Zaman Kullanilir?

- Veritabani baglanti yoneticisi
- Yapilandirma (configuration) yoneticisi
- Log servisleri

### Java Ornegi

```java
public class DatabaseConnection {
    private static DatabaseConnection instance;

    private DatabaseConnection() {
        // Private constructor
    }

    public static DatabaseConnection getInstance() {
        if (instance == null) {
            instance = new DatabaseConnection();
        }
        return instance;
    }
}
```

## Factory Deseni

Factory deseni, nesne olusturma islemini soyutlastirarak, istemci kodun hangi sinifin orneklendigini bilmesine gerek kalmadan nesne olusturmasini saglar.

### Java Ornegi

```java
public interface Sekil {
    void ciz();
}

public class Daire implements Sekil {
    public void ciz() {
        System.out.println("Daire cizildi");
    }
}

public class Kare implements Sekil {
    public void ciz() {
        System.out.println("Kare cizildi");
    }
}

public class SekilFactory {
    public Sekil sekilOlustur(String tip) {
        if (tip.equals("daire")) return new Daire();
        if (tip.equals("kare")) return new Kare();
        return null;
    }
}
```

> Tasarim desenleri, tekrar eden yazilim problemlerine kanitlanmis cozumler sunar.

Gelecek hafta **Observer ve Strategy** desenlerini inceleyecegiz.
