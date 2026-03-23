---
layout: post
title: "Java Swing'de JRadioButton Kullanımı: Askerlik Durumu Seçimi"
date: 2026-03-23 11:00:00 +0300
categories: nesne-tabanli-programlama-ii
---

Bu derste Java Swing kütüphanesindeki **JRadioButton** bileşenini detaylı olarak inceleyeceğiz. Bir önceki derste öğrendiğimiz JCheckBox'tan farklı olarak, radio button **yalnızca bir seçeneğin** işaretlenmesine izin verir. Bunu sağlayan kilit yapı ise **ButtonGroup** sınıfıdır.

## JRadioButton Nedir?

`JRadioButton`, bir grup seçenek arasından **yalnızca birinin** seçilebileceği durumlarda kullanılan Swing bileşenidir. Tıpkı eski radyolardaki kanal düğmeleri gibi — birine basınca diğeri otomatik kalkar.

| Bileşen | Çoklu Seçim | Kullanım Alanı |
|---------|:-----------:|----------------|
| `JCheckBox` | ✅ Evet | Hobiler, tercihler, filtreler |
| `JRadioButton` | ❌ Hayır | Cinsiyet, askerlik durumu, ödeme yöntemi |

> **Önemli:** JRadioButton tek başına çoklu seçimi engellemez! Bunu sağlayan `ButtonGroup` sınıfıdır. ButtonGroup olmadan radio button'lar checkbox gibi davranır.

## Uygulama: Askerlik Durumu Seçimi

Aşağıdaki uygulamada kullanıcıya 4 askerlik durumu sunuluyor. Kullanıcı yalnızca birini seçebilir ve her seçim değişikliğinde konsola bilgi yazdırılır.

### Tam Kaynak Kodu

```java
package com.hmyo.radiobutton.test;

import java.awt.GridLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.ButtonGroup;
import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.JRadioButton;

public class Test {
    public static void main(String[] args) {

        JFrame anaPencereFrame = new JFrame("Radio Button");

        JPanel anaPanel = new JPanel();
        JPanel askerlikPanel = new JPanel(new GridLayout(4, 1, 5, 5));

        JRadioButton yaptiJRadioButton = new JRadioButton("Askerlik Yaptı");
        JRadioButton yapmadiJRadioButton = new JRadioButton("Askerlik Yapmadı");
        JRadioButton muafJRadioButton = new JRadioButton("Askerlikten Muaf");
        JRadioButton tecilliJRadioButton = new JRadioButton("Tecilli");

        askerlikPanel.add(yaptiJRadioButton);
        askerlikPanel.add(yapmadiJRadioButton);
        askerlikPanel.add(muafJRadioButton);
        askerlikPanel.add(tecilliJRadioButton);

        ButtonGroup buttonGroup = new ButtonGroup();
        buttonGroup.add(yaptiJRadioButton);
        buttonGroup.add(yapmadiJRadioButton);
        buttonGroup.add(muafJRadioButton);
        buttonGroup.add(tecilliJRadioButton);

        yaptiJRadioButton.setSelected(true);

        yaptiJRadioButton.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                if (yaptiJRadioButton.isSelected()) {
                    System.out.println("Askerlik Yaptı Seçildi");
                }
            }
        });

        tecilliJRadioButton.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                if (tecilliJRadioButton.isSelected()) {
                    System.out.println("Tecilli Seçildi");
                }
            }
        });

        yapmadiJRadioButton.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                if (yapmadiJRadioButton.isSelected()) {
                    System.out.println("Askerlik Yapmadı Seçildi");
                }
            }
        });

        muafJRadioButton.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                if (muafJRadioButton.isSelected()) {
                    System.out.println("Muaf Seçildi");
                }
            }
        });

        anaPanel.add(askerlikPanel);

        anaPencereFrame.add(anaPanel);
        anaPencereFrame.setSize(500, 500);
        anaPencereFrame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        anaPencereFrame.setLocationRelativeTo(null);
        anaPencereFrame.setVisible(true);
    }
}
```

---

## Kodun Adım Adım Açıklaması

### 1. Import İfadeleri

```java
import java.awt.GridLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.ButtonGroup;
import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.JRadioButton;
```

Bu derste yeni olan import: **`javax.swing.ButtonGroup`**. Bu sınıf, radio button'ları mantıksal bir grup altında toplar ve "bir anda yalnızca biri seçili" kuralını uygular.

| Import | Nereden | İşlevi |
|--------|---------|--------|
| `GridLayout` | `java.awt` | Izgara düzeni (satır × sütun) |
| `ActionEvent`, `ActionListener` | `java.awt.event` | Olay yakalama mekanizması |
| `ButtonGroup` | `javax.swing` | Radio button'ları gruplar |
| `JRadioButton` | `javax.swing` | Tekli seçim bileşeni |

### 2. Ana Pencere ve Panel Yapısı

```java
JFrame anaPencereFrame = new JFrame("Radio Button");
JPanel anaPanel = new JPanel();
JPanel askerlikPanel = new JPanel(new GridLayout(4, 1, 5, 5));
```

- **JFrame**: Ana pencere. Başlık: "Radio Button".
- **anaPanel**: Varsayılan `FlowLayout` — bileşenleri akış düzeninde yerleştirir.
- **askerlikPanel**: `GridLayout(4, 1, 5, 5)` — **4 satır, 1 sütun**, 5 piksel boşlukla. 4 radio button alt alta sıralanacak.

### 3. Radio Button'ların Oluşturulması

```java
JRadioButton yaptiJRadioButton = new JRadioButton("Askerlik Yaptı");
JRadioButton yapmadiJRadioButton = new JRadioButton("Askerlik Yapmadı");
JRadioButton muafJRadioButton = new JRadioButton("Askerlikten Muaf");
JRadioButton tecilliJRadioButton = new JRadioButton("Tecilli");
```

Her `JRadioButton`, constructor'a verilen metin ile oluşturulur. Bu aşamada henüz hiçbiri seçili değildir ve herhangi bir gruba dahil edilmemiştir.

### 4. Panele Ekleme

```java
askerlikPanel.add(yaptiJRadioButton);
askerlikPanel.add(yapmadiJRadioButton);
askerlikPanel.add(muafJRadioButton);
askerlikPanel.add(tecilliJRadioButton);
```

`GridLayout(4, 1)` olduğu için 4 radio button **alt alta** sıralanır. Ekleme sırası = ekrandaki sıra.

### 5. ButtonGroup — Kritik Adım!

```java
ButtonGroup buttonGroup = new ButtonGroup();
buttonGroup.add(yaptiJRadioButton);
buttonGroup.add(yapmadiJRadioButton);
buttonGroup.add(muafJRadioButton);
buttonGroup.add(tecilliJRadioButton);
```

**Bu kodun en önemli kısmı budur.** `ButtonGroup`:

- Görsel bir bileşen **değildir** — ekranda görünmez.
- Mantıksal bir gruplamadır — "bu 4 buton aynı soruya ait" der.
- Bir radio button seçildiğinde, gruptaki diğerlerinin seçimini **otomatik olarak kaldırır**.

> ⚠️ **ButtonGroup olmadan ne olur?** Tüm radio button'lar bağımsız çalışır — hepsini aynı anda işaretleyebilirsiniz. Bu durumda checkbox'tan farkı kalmaz!

### 6. Varsayılan Seçim

```java
yaptiJRadioButton.setSelected(true);
```

Program açıldığında "Askerlik Yaptı" seçeneği **otomatik olarak işaretli** gelir. Bu, kullanıcı deneyimi açısından önemlidir — form hiçbir seçim yapılmadan gösterilmemelidir.

### 7. Her Radio Button'a ActionListener Eklenmesi

```java
yaptiJRadioButton.addActionListener(new ActionListener() {
    @Override
    public void actionPerformed(ActionEvent e) {
        if (yaptiJRadioButton.isSelected()) {
            System.out.println("Askerlik Yaptı Seçildi");
        }
    }
});
```

Her radio button'a ayrı bir anonim `ActionListener` ekleniyor. Kullanıcı bir seçeneğe tıkladığında:

1. `actionPerformed` metodu tetiklenir.
2. `isSelected()` ile seçili olup olmadığı kontrol edilir.
3. Konsola ilgili mesaj yazdırılır.

Bu yapı 4 radio button için tekrarlanıyor:

| Radio Button | Konsol Çıktısı |
|-------------|----------------|
| `yaptiJRadioButton` | "Askerlik Yaptı Seçildi" |
| `yapmadiJRadioButton` | "Askerlik Yapmadı Seçildi" |
| `muafJRadioButton` | "Muaf Seçildi" |
| `tecilliJRadioButton` | "Tecilli Seçildi" |

### 8. Pencere Ayarları

```java
anaPanel.add(askerlikPanel);
anaPencereFrame.add(anaPanel);
anaPencereFrame.setSize(500, 500);
anaPencereFrame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
anaPencereFrame.setLocationRelativeTo(null);
anaPencereFrame.setVisible(true);
```

| Metot | İşlevi |
|-------|--------|
| `setSize(500, 500)` | Pencere boyutu: 500×500 piksel |
| `setDefaultCloseOperation(EXIT_ON_CLOSE)` | Pencere kapatılınca program sonlanır |
| `setLocationRelativeTo(null)` | Pencereyi ekranın ortasına konumlar |
| `setVisible(true)` | Pencereyi görünür yapar |

---

## Panel Hiyerarşisi

```
JFrame (anaPencereFrame)
└── JPanel (anaPanel) — FlowLayout
    └── JPanel (askerlikPanel) — GridLayout(4,1)
        ├── JRadioButton (yaptiJRadioButton) ──┐
        ├── JRadioButton (yapmadiJRadioButton) ┤ ButtonGroup
        ├── JRadioButton (muafJRadioButton) ───┤ (mantıksal grup)
        └── JRadioButton (tecilliJRadioButton) ┘
```

> **Dikkat:** `ButtonGroup` panele eklenmez! Panel görsel yerleşimi, ButtonGroup ise mantıksal gruplamayı sağlar. İkisi farklı işler yapar.

---

## JCheckBox vs JRadioButton Karşılaştırması

| Özellik | JCheckBox | JRadioButton |
|---------|-----------|--------------|
| Çoklu seçim | ✅ Birden fazla seçilebilir | ❌ Yalnızca bir tane |
| ButtonGroup gerekli mi? | Hayır | **Evet** (tek seçim için şart) |
| `isSelected()` | Her birinde bağımsız | Gruptaki sadece birinde `true` |
| Kullanım senaryosu | Hobiler, filtreler | Cinsiyet, askerlik, ödeme türü |
| Varsayılan seçim | Genelde seçimsiz başlar | Genelde biri seçili başlar |

---

## JRadioButton'ın Temel Metotları

| Metot | Dönüş Tipi | Açıklama |
|-------|------------|----------|
| `isSelected()` | `boolean` | Radio button seçili mi? |
| `setSelected(true/false)` | `void` | Programatik olarak seç/kaldır |
| `getText()` | `String` | Butonun metnini döndürür |
| `setText(String)` | `void` | Buton metnini değiştirir |
| `addActionListener(ActionListener)` | `void` | Tıklama olayını dinler |
| `setEnabled(true/false)` | `void` | Butonu aktif/pasif yapar |

## ButtonGroup'un Temel Metotları

| Metot | Dönüş Tipi | Açıklama |
|-------|------------|----------|
| `add(AbstractButton)` | `void` | Gruba buton ekler |
| `remove(AbstractButton)` | `void` | Gruptan buton çıkarır |
| `getSelection()` | `ButtonModel` | Seçili butonun modelini döndürür |
| `clearSelection()` | `void` | Tüm seçimleri temizler |
| `getButtonCount()` | `int` | Gruptaki buton sayısını döndürür |

---

## Önemli Kavramlar Özeti

- **JRadioButton** tek seçim için kullanılır — birini seçince diğeri otomatik kalkar.
- **ButtonGroup** görsel değil mantıksal bir gruplamadır — ekranda görünmez ama tek seçim kuralını uygular.
- ButtonGroup **olmadan** radio button'lar checkbox gibi davranır — hepsi aynı anda seçilebilir.
- **`setSelected(true)`** ile varsayılan seçim belirlenebilir — formlarda kullanıcıya bir başlangıç değeri sunmak iyi pratiktir.
- Her radio button'a **ayrı ActionListener** eklenebilir veya tek bir listener ile `getActionCommand()` kullanılarak hangi butonun tıklandığı tespit edilebilir.
