---
layout: post
title: "Java'da Görsel Arayüzler: JFrame, Panel ve Layout Yönetimi"
date: 2026-03-09
categories: nesne-tabanli-programlama-ii
---

Bir program ne kadar güçlü olursa olsun, kullanıcı onunla etkileşime geçemiyorsa anlamsızdır. İşte **kullanıcı arayüzü (User Interface - UI)** tam burada devreye girer. Bu derste önce arayüz türlerini tanıyacağız, sonra Java Swing ile adım adım görsel bir uygulama inşa edeceğiz.

---

## 1. Kullanıcı Arayüzü Nedir?

Kullanıcı arayüzü, **insan ile yazılım arasındaki iletişim katmanıdır**. Kullanıcının programa komut vermesini ve programın sonuçları göstermesini sağlar.

Dört temel arayüz türü vardır:

### 1.1 Karakter Kullanıcı Arayüzü (Character User Interface - CUI)

En eski arayüz tipi. Kullanıcı komutları **metin olarak yazar**, program da metin olarak yanıt verir.

**Örnekler:**
- Terminal / Komut Satırı (Windows CMD, Linux Bash)
- Java'da `Scanner` ile girdi alma

**Özellikler:**
- Tamamen metin tabanlı
- Fare kullanılmaz, sadece klavye
- Hızlı ve hafif
- Sistem yöneticileri ve geliştiriciler hâlâ aktif olarak kullanır

```
> javac Test.java
> java Test
Adınızı girin: Alper
Merhaba, Alper!
```

**Ne zaman kullanılır?** Sunucu yönetimi, otomasyon scriptleri, kaynak kısıtlı ortamlar.

### 1.2 Web Kullanıcı Arayüzü (Web User Interface - WUI)

Tarayıcı üzerinden çalışan arayüzler. HTML, CSS ve JavaScript ile oluşturulur.

**Örnekler:**
- Gmail, YouTube, e-Devlet
- Spring Boot + Thymeleaf ile Java web uygulamaları

**Özellikler:**
- Platform bağımsız (tarayıcı olan her yerde çalışır)
- Kurulum gerektirmez
- HTTP/HTTPS üzerinden istemci-sunucu mimarisi
- Responsive tasarım ile farklı ekran boyutlarına uyum

**Ne zaman kullanılır?** Geniş kullanıcı kitlesine ulaşılması gereken uygulamalar, SaaS hizmetleri.

### 1.3 Grafik Kullanıcı Arayüzü (Graphical User Interface - GUI)

Masaüstü uygulamalarında kullanılan, **pencere, buton, metin kutusu** gibi görsel bileşenlerle etkileşim sağlayan arayüz.

**Örnekler:**
- IntelliJ IDEA, Eclipse
- Windows Hesap Makinesi
- Java Swing ve JavaFX uygulamaları

**Özellikler:**
- Pencere tabanlı (window-based)
- Fare + klavye etkileşimi
- Görsel bileşenler: buton, label, text field, liste, menü...
- Olay güdümlü programlama (event-driven programming)

**Ne zaman kullanılır?** Masaüstü uygulamaları, IDE'ler, grafik editörleri.

### 1.4 Mobil Kullanıcı Arayüzü

Akıllı telefon ve tabletlere özel tasarlanmış arayüzler.

**Örnekler:**
- Android (Java/Kotlin + XML Layout)
- iOS (Swift + SwiftUI)
- Flutter, React Native (cross-platform)

**Özellikler:**
- Dokunmatik etkileşim (tap, swipe, pinch)
- Küçük ekran alanı → tasarım önceliği
- Sensörler (GPS, kamera, ivmeölçer) ile entegrasyon
- Platform kurallarına uyum (Material Design, Human Interface Guidelines)

**Ne zaman kullanılır?** Kullanıcının hareket hâlinde olduğu tüm senaryolar.

---

### Arayüz Türleri Karşılaştırma Tablosu

| Özellik | CUI | WUI | GUI | Mobil UI |
|---------|-----|-----|-----|----------|
| **Etkileşim** | Klavye (metin) | Fare + Klavye | Fare + Klavye | Dokunmatik |
| **Platform** | Terminal | Tarayıcı | Masaüstü (OS'e bağlı) | Mobil (OS'e bağlı) |
| **Kurulum** | Yok | Yok | Gerekli | Gerekli (app store) |
| **Öğrenme eğrisi** | Yüksek | Düşük | Düşük | Düşük |
| **Kaynak kullanımı** | Çok düşük | Orta | Orta-Yüksek | Orta |
| **Java teknolojisi** | Scanner, System.out | JSP, Spring MVC | **Swing, JavaFX** | Android SDK |

> **Bu derste odağımız:** Java Swing ile **GUI (Grafik Kullanıcı Arayüzü)** geliştirme.

---

## 2. Java'da Görsel Arayüz: Swing

Java'da GUI geliştirmek için iki ana kütüphane vardır:

| Kütüphane | Dönem | Durum |
|-----------|-------|-------|
| **AWT** (Abstract Window Toolkit) | Java 1.0 (1995) | Eski, temel |
| **Swing** (`javax.swing`) | Java 1.2 (1998) | Yaygın, öğretimde standart |
| **JavaFX** | Java 8+ | Modern, daha az yaygın |

Swing, AWT'nin üzerine inşa edilmiştir. AWT'nin bileşenlerini genişletir ve **platform bağımsız** (look and feel) görsel bileşenler sunar. Swing bileşenlerinin başına genellikle **J** harfi eklenir: `JFrame`, `JButton`, `JLabel`, `JTextField`...

---

## 3. JFrame — Pencere Sınıfı

`JFrame`, Swing'in **temel pencere sınıfıdır**. Bir GUI uygulamasının kök (root) konteynerıdır. Her Swing uygulaması en az bir `JFrame` ile başlar.

### 3.1 İlk Pencere

```java
package com.alyaka.gorsel.test;

import javax.swing.JFrame;

public class Test {
    public static void main(String[] args) {
        JFrame anaPencereFrame = new JFrame();

        anaPencereFrame.setTitle("Ana Pencere");

        anaPencereFrame.setSize(500, 500);
        anaPencereFrame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        anaPencereFrame.setLocationRelativeTo(null);

        anaPencereFrame.setVisible(true);
    }
}
```

### Satır Satır Açıklama

| Metot | Ne Yapar? |
|-------|-----------|
| `new JFrame()` | Boş bir pencere nesnesi oluşturur |
| `setTitle("Ana Pencere")` | Pencere başlık çubuğundaki metni ayarlar |
| `setSize(500, 500)` | Pencere boyutunu piksel cinsinden belirler (genişlik × yükseklik) |
| `setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE)` | Pencere kapatıldığında programın tamamen sonlanmasını sağlar |
| `setLocationRelativeTo(null)` | Pencereyi **ekranın tam ortasına** konumlandırır |
| `setVisible(true)` | Pencereyi görünür kılar — **bu satır olmadan pencere açılmaz!** |

> ⚠️ **Kritik:** `setVisible(true)` her zaman **en son** çağrılmalıdır. Daha önce çağrılırsa, sonradan eklenen bileşenler görünmeyebilir.

### Kapatma Davranışları

`setDefaultCloseOperation` için kullanılabilecek sabitler:

| Sabit | Davranış |
|-------|----------|
| `JFrame.EXIT_ON_CLOSE` | Programı tamamen sonlandırır |
| `JFrame.HIDE_ON_CLOSE` | Pencereyi gizler ama program çalışmaya devam eder |
| `JFrame.DISPOSE_ON_CLOSE` | Pencereyi yok eder, diğer pencereler varsa program devam eder |
| `JFrame.DO_NOTHING_ON_CLOSE` | Hiçbir şey yapmaz (özel kapatma mantığı yazılacaksa) |

---

## 4. JFrame'in İç Yapısı: Content Pane ve getRootPane()

Bu kısım çok önemli çünkü burada Swing'in **katmanlı yapısını** anlıyoruz.

### JFrame Aslında Tek Bir Kutu Değil

Bir JFrame, iç içe geçmiş **birden fazla katmandan** oluşur:

```
JFrame (en dış çerçeve)
 └── JRootPane
      ├── GlassPane (şeffaf üst katman — özel efektler için)
      ├── LayeredPane (katmanlı panel)
      │    └── ContentPane ← BİLEŞENLERİ BURAYA EKLERSİNİZ
      └── MenuBar (menü çubuğu, varsa)
```

**Content Pane**, bileşenlerin (buton, text field, panel vb.) eklendiği asıl alandır.

### getContentPane() Kullanımı

```java
package com.alyaka.gorsel.test;

import java.awt.FlowLayout;
import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JTextField;

public class Test {
    public static void main(String[] args) {
        JFrame anaPencereFrame = new JFrame();

        anaPencereFrame.setTitle("Ana Pencere");
        anaPencereFrame.setSize(500, 500);
        anaPencereFrame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        anaPencereFrame.setLocationRelativeTo(null);

        anaPencereFrame.setLayout(new FlowLayout());

        JButton denemeButton = new JButton("Deneme Buton");
        anaPencereFrame.getContentPane().add(denemeButton);

        JTextField girisField = new JTextField(15);
        anaPencereFrame.getContentPane().add(girisField);

        anaPencereFrame.setVisible(true);
    }
}
```

### Ne Değişti?

1. **`setLayout(new FlowLayout())`** — Pencereye bir yerleşim düzeni atandı (bileşenler soldan sağa sıralanır)
2. **`getContentPane().add(...)`** — Bileşenler doğrudan JFrame'e değil, onun **Content Pane**'ine eklendi
3. **`JTextField(15)`** — 15 karakter genişliğinde bir metin giriş kutusu oluşturuldu

### getRootPane() Ne İşe Yarar?

`getRootPane()`, JFrame'in **kök paneline** (JRootPane) erişim sağlar. Genellikle şu durumlar için kullanılır:

- **Varsayılan buton atamak** (Enter tuşuna basınca tetiklenen buton):

```java
anaPencereFrame.getRootPane().setDefaultButton(denemeButton);
// Artık kullanıcı Enter'a basınca "Deneme Buton" tıklanmış gibi davranır
```

- **Glass Pane'e erişmek** (şeffaf üst katmanda çizim veya olay yakalama):

```java
anaPencereFrame.getRootPane().getGlassPane().setVisible(true);
```

> **Kısa kural:** Bileşen eklemek için `getContentPane()`, pencere düzeyinde özel davranış için `getRootPane()` kullanılır.

### Önemli Not: add() Kısayolu

Java 5 ve sonrasında `anaPencereFrame.add(buton)` yazıldığında, Swing bunu otomatik olarak `anaPencereFrame.getContentPane().add(buton)` şeklinde yorumlar. İkisi aynı işi yapar. Ama **getContentPane() yazmak daha açık ve anlaşılırdır** — özellikle öğrenme aşamasında.

---

## 5. Paneller ve Layout Yönetimi

Burası dersin **en kritik kısmı**. Çünkü gerçek bir arayüz tek bir bileşen dizisinden oluşmaz — **farklı bölgelerde, farklı düzenlerde, iç içe geçmiş panel yapıları** gerektirir.

### 5.1 Pencere → Panel → Layout İlişkisi

Bu üçlü ilişkiyi doğru anlamak, tüm Swing geliştirmenin temelidir:

```
┌─────────────────────────────────────────┐
│ JFrame (Pencere)                        │
│  "Bina"                                 │
│                                         │
│  ┌──────────────────────────────────┐   │
│  │ JPanel (Panel)                   │   │
│  │  "Oda"                           │   │
│  │                                  │   │
│  │  Layout Manager = "Mobilya       │   │
│  │  düzeni / oda planı"             │   │
│  │                                  │   │
│  │  [Buton] [Label] [TextField]     │   │
│  │   "Mobilyalar"                   │   │
│  └──────────────────────────────────┘   │
│                                         │
│  ┌──────────────────────────────────┐   │
│  │ Başka bir JPanel                 │   │
│  │  Farklı bir Layout              │   │
│  │  [Buton] [Buton] [Buton]        │   │
│  └──────────────────────────────────┘   │
│                                         │
└─────────────────────────────────────────┘
```

**Analoji ile açıklama:**

| Kavram | Gerçek Dünya Karşılığı | Görevi |
|--------|------------------------|--------|
| **JFrame** | Bina | Her şeyi barındıran en dış yapı. Tek başına bir uygulama penceresi. |
| **JPanel** | Oda | Bileşenleri gruplar. Bir binada birden fazla oda olabilir. |
| **Layout Manager** | Oda planı / mobilya düzeni | Odadaki bileşenlerin **nereye, nasıl** yerleşeceğini belirler. |
| **JButton, JLabel...** | Mobilyalar | Kullanıcının etkileşimde olduğu somut bileşenler. |

> 🔑 **Altın kural:** Her JPanel'in kendi Layout Manager'ı olabilir. Bu sayede aynı pencerede farklı bölgelerde farklı düzenler kullanabilirsiniz.

### 5.2 Layout Manager Türleri

#### FlowLayout — Akış Düzeni

Bileşenleri **soldan sağa** sıralar. Satır dolunca bir alt satıra geçer. `JPanel`'in **varsayılan** layout'udur.

```java
panel.setLayout(new FlowLayout());
```

```
[ Buton1 ] [ Buton2 ] [ Buton3 ]
        [ Buton4 ] [ Buton5 ]
```

**Ne zaman kullanılır?** Basit, sıralı bileşen dizileri. Araç çubukları.

#### GridLayout — Izgara Düzeni

Bileşenleri **eşit boyutlu hücrelere** yerleştirir. Satır ve sütun sayısı belirtilir.

```java
panel.setLayout(new GridLayout(3, 2, 5, 5));
//                              ↑  ↑  ↑  ↑
//                          satır sütun yatayBoşluk dikeyBoşluk
```

```
[ Hücre(0,0) ] [ Hücre(0,1) ]
[ Hücre(1,0) ] [ Hücre(1,1) ]
[ Hücre(2,0) ] [ Hücre(2,1) ]
```

**Ne zaman kullanılır?** Form düzenleri (label + input çiftleri), hesap makinesi tuşları, düğme grupları.

#### BorderLayout — Kenar Düzeni

Alanı **5 bölgeye** ayırır: NORTH, SOUTH, EAST, WEST, CENTER. `JFrame`'in Content Pane'inin **varsayılan** layout'udur.

```java
panel.setLayout(new BorderLayout());
panel.add(bileşen, BorderLayout.NORTH);
panel.add(bileşen, BorderLayout.CENTER);
```

```
┌─────────────────────────┐
│         NORTH            │
├──────┬──────────┬───────┤
│ WEST │  CENTER  │ EAST  │
├──────┴──────────┴───────┤
│         SOUTH            │
└─────────────────────────┘
```

**Önemli özellikler:**
- CENTER bölgesi **kalan tüm alanı** kaplar
- Her bölgeye **en fazla bir bileşen** eklenebilir (ama o bileşen bir JPanel olabilir!)
- Bölge belirtilmezse varsayılan olarak CENTER'a eklenir

**Ne zaman kullanılır?** Ana sayfa düzenleri. Üstte menü, altta durum çubuğu, ortada ana içerik.

### 5.3 Layout Karşılaştırma

| Layout | Varsayılan | Kullanım | Hücre Boyutu |
|--------|-----------|----------|-------------|
| **FlowLayout** | JPanel | Basit sıralı dizilim | Bileşenin kendi boyutu |
| **GridLayout** | — | Eşit hücreli ızgara | Tüm hücreler eşit |
| **BorderLayout** | JFrame | 5 bölgeli ana düzen | Bölgeye göre değişir |

---

## 6. Tam Örnek: Kişi Rehberi Arayüzü

Şimdi tüm öğrendiklerimizi birleştirip gerçek bir arayüz inşa edelim. Bu örnek, **iç içe panel yapısını ve farklı layout'ların birlikte kullanımını** gösterir.

### Hedef Tasarım

```
┌──────────────────────────────────────┐
│             ANA PENCERE               │
│                                       │
│  ┌─ ustPanel (GridLayout 3×2) ─────┐ │  ← NORTH
│  │ Adı:      [ __________ ]        │ │
│  │ Soyadı:   [ __________ ]        │ │
│  │ Telefonu: [ __________ ]        │ │
│  └──────────────────────────────────┘ │
│                                       │
│  ┌─ kisilerPane (JScrollPane) ─────┐ │  ← CENTER
│  │                                  │ │
│  │  (Kişi Listesi - JList)         │ │
│  │                                  │ │
│  └──────────────────────────────────┘ │
│                                       │
│  ┌─ altPanel (GridLayout 2×2) ─────┐ │  ← SOUTH
│  │ [ Ekle ]    [ Düzenle ]         │ │
│  │ [ Sil  ]    [ İptal   ]        │ │
│  └──────────────────────────────────┘ │
│                                       │
└──────────────────────────────────────┘
```

### Kod

```java
package com.alyaka.gorsel.test;

import java.awt.BorderLayout;
import java.awt.GridLayout;

import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JList;
import javax.swing.JPanel;
import javax.swing.JScrollPane;
import javax.swing.JTextField;

public class Test {
    public static void main(String[] args) {
        // 1. PENCERE (Bina)
        JFrame anaPencereFrame = new JFrame();
        anaPencereFrame.setTitle("Ana Pencere");
        anaPencereFrame.setSize(500, 500);
        anaPencereFrame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        anaPencereFrame.setLocationRelativeTo(null);

        // 2. ANA PANEL (Binanın iç düzeni)
        JPanel anaJPanel = new JPanel(new BorderLayout());

        // 3. ÜST PANEL — Form Alanı (GridLayout: 3 satır, 2 sütun)
        JPanel ustPanel = new JPanel(new GridLayout(3, 2, 5, 5));

        // 4. ALT PANEL — Butonlar (GridLayout: 2 satır, 2 sütun)
        JPanel altJPanel = new JPanel(new GridLayout(2, 2, 5, 5));

        // 5. PANELLERİ ANA PANEL'E EKLE
        anaPencereFrame.add(anaJPanel);
        anaJPanel.add(ustPanel, BorderLayout.NORTH);
        anaJPanel.add(altJPanel, BorderLayout.SOUTH);

        // 6. FORM BİLEŞENLERİ
        JLabel adiJLabel = new JLabel("Adı");
        JTextField adiField = new JTextField(15);

        JLabel soyadiJLabel = new JLabel("Soyadı");
        JTextField soyadiField = new JTextField(15);

        JLabel telefonuJLabel = new JLabel("Telefonu");
        JTextField telefonuField = new JTextField(15);

        ustPanel.add(adiJLabel);
        ustPanel.add(adiField);
        ustPanel.add(soyadiJLabel);
        ustPanel.add(soyadiField);
        ustPanel.add(telefonuJLabel);
        ustPanel.add(telefonuField);

        // 7. BUTONLAR
        JButton ekleButton = new JButton("Ekle");
        JButton silButton = new JButton("Sil");
        JButton duzenleButton = new JButton("Düzenle");
        JButton iptalButton = new JButton("İptal");

        altJPanel.add(ekleButton);
        altJPanel.add(duzenleButton);
        altJPanel.add(silButton);
        altJPanel.add(iptalButton);

        // 8. ORTADAKI LİSTE (ScrollPane ile sarılmış)
        JList kisilerJList = new JList();
        JScrollPane kisilerPane = new JScrollPane(kisilerJList);
        kisilerPane.setVerticalScrollBarPolicy(
            JScrollPane.VERTICAL_SCROLLBAR_ALWAYS
        );
        anaJPanel.add(kisilerPane, BorderLayout.CENTER);

        // 9. PENCEREYI GÖRÜNÜR YAP (en son!)
        anaPencereFrame.setVisible(true);
    }
}
```

### Kodun Anatomisi — Adım Adım

#### Adım 1-2: Pencere ve Ana Panel

```java
JFrame anaPencereFrame = new JFrame();       // Bina kuruldu
JPanel anaJPanel = new JPanel(new BorderLayout()); // İç düzen: 5 bölgeli
anaPencereFrame.add(anaJPanel);               // Panel pencereye eklendi
```

`anaJPanel`, BorderLayout kullanır. Bu sayede 3 bölgeye farklı paneller atayabiliyoruz: üst (NORTH), orta (CENTER), alt (SOUTH).

#### Adım 3-5: Alt Paneller

```java
JPanel ustPanel = new JPanel(new GridLayout(3, 2, 5, 5));
JPanel altJPanel = new JPanel(new GridLayout(2, 2, 5, 5));

anaJPanel.add(ustPanel, BorderLayout.NORTH);   // Form → Üst bölge
anaJPanel.add(altJPanel, BorderLayout.SOUTH);  // Butonlar → Alt bölge
```

Her alt panelin **kendi layout'u** var. `ustPanel` 3×2 ızgara (3 satır form), `altJPanel` 2×2 ızgara (4 buton). İkisi de `anaJPanel`'in farklı bölgelerine yerleşti.

#### Adım 6-7: Bileşenleri Panellere Ekleme

```java
ustPanel.add(adiJLabel);    // GridLayout: Hücre (0,0)
ustPanel.add(adiField);     // GridLayout: Hücre (0,1)
ustPanel.add(soyadiJLabel); // GridLayout: Hücre (1,0)
ustPanel.add(soyadiField);  // GridLayout: Hücre (1,1)
// ...
```

GridLayout'ta ekleme sırası önemlidir — bileşenler **soldan sağa, yukarıdan aşağıya** sıralanır.

#### Adım 8: JList + JScrollPane

```java
JList kisilerJList = new JList();
JScrollPane kisilerPane = new JScrollPane(kisilerJList);
kisilerPane.setVerticalScrollBarPolicy(JScrollPane.VERTICAL_SCROLLBAR_ALWAYS);
anaJPanel.add(kisilerPane, BorderLayout.CENTER);
```

- `JList`: Öğelerin listelendiği bileşen
- `JScrollPane`: JList'i saran kaydırma çubuğu konteynerı
- **CENTER** bölgesine eklendi → üst ve alt panellerden **kalan tüm alanı** kaplar

---

## 7. İç İçe Panel Yapısı — Derinlemesine

Bu dersin en önemli kavramı budur. Profesyonel arayüzler **tek bir layout ile yapılmaz**. Birden fazla panel, farklı layout'larla iç içe geçirilir.

### Neden İç İçe Panel?

Tek bir layout ile tüm arayüzü yapmaya çalışmak, tek bir oda ile bir bina inşa etmeye benzer. İşe yaramaz.

```
❌ Yanlış yaklaşım: Tüm bileşenleri tek bir GridLayout'a sıkıştırmak
   → Form alanları, butonlar ve liste hepsi aynı ızgarada
   → Boyutlandırma bozulur, düzen kontrolsüz olur

✅ Doğru yaklaşım: Her bölge için ayrı panel, uygun layout
   → Form → GridLayout (label-input çiftleri düzgün hizalanır)
   → Butonlar → GridLayout (eşit boyutlu butonlar)
   → Genel düzen → BorderLayout (üst-orta-alt bölgeleme)
```

### Hiyerarşi Şeması

```
JFrame
 └── anaJPanel (BorderLayout)
      ├── NORTH → ustPanel (GridLayout 3×2)
      │            ├── JLabel "Adı"
      │            ├── JTextField
      │            ├── JLabel "Soyadı"
      │            ├── JTextField
      │            ├── JLabel "Telefonu"
      │            └── JTextField
      │
      ├── CENTER → JScrollPane
      │             └── JList
      │
      └── SOUTH → altJPanel (GridLayout 2×2)
                   ├── JButton "Ekle"
                   ├── JButton "Düzenle"
                   ├── JButton "Sil"
                   └── JButton "İptal"
```

### Panel İlişkisi Kuralları

1. **Her JPanel kendi Layout Manager'ına sahip olabilir** — bu Swing'in en güçlü özelliğidir
2. **JPanel başka bir JPanel'in içine eklenebilir** — sınır yok, iç içe geçme derinliği esnektir
3. **Layout Manager bileşenlerin boyutunu ve konumunu otomatik yönetir** — piksel piksel konumlandırma yapmak gerekmez
4. **BorderLayout'ta bir bölgeye sadece BİR bileşen eklenir** — ama o bileşen bir JPanel olabilir ve içinde onlarca bileşen barındırabilir

---

## 8. Özet ve Hatırlatmalar

### Temel Akış

```
1. JFrame oluştur (pencere)
2. JPanel'ler oluştur (bölgeler)
3. Her panele uygun Layout ata
4. Bileşenleri (buton, label, field) panellere ekle
5. Panelleri ana panele veya JFrame'e ekle
6. setVisible(true) — EN SON!
```

### Sık Yapılan Hatalar

| Hata | Sonuç | Çözüm |
|------|-------|-------|
| `setVisible(true)`'yı en başta çağırmak | Bileşenler görünmez | En son çağır |
| Layout atamamak | Varsayılan layout kullanılır (beklenmedik düzen) | Her panele açıkça layout ata |
| BorderLayout'ta aynı bölgeye birden fazla bileşen eklemek | İlk eklenen kaybolur | Bir bölgeye bir JPanel ekle, bileşenleri panele koy |
| JList'i doğrudan eklemek (JScrollPane olmadan) | Kaydırma çubuğu olmaz | JScrollPane ile sar |

### Anahtar Kavramlar

- **JFrame** = Pencere (Bina)
- **JPanel** = Panel (Oda)
- **Layout Manager** = Yerleşim düzeni (Oda planı)
- **Content Pane** = Bileşenlerin eklendiği asıl alan
- **getRootPane()** = JFrame'in kök paneli (varsayılan buton, glass pane erişimi)
- **getContentPane()** = Bileşenlerin ekleneceği panel
- **İç içe panel** = Farklı layout'ları birleştirmenin yolu

> **Bir sonraki derste:** Olay yönetimi (Event Handling) — Butona basıldığında ne olacağını nasıl programlarız?
