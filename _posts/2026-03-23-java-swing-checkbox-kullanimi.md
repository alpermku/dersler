---
layout: post
title: "Java Swing'de JCheckBox Kullanımı: Hobi Seçim Uygulaması"
date: 2026-03-23 10:00:00 +0300
categories: nesne-tabanli-programlama-ii
---

Bu derste Java Swing kütüphanesindeki **JCheckBox** bileşenini detaylı olarak inceleyeceğiz. Kullanıcıdan birden fazla seçim alabilmeyi sağlayan checkbox yapısını, olay dinleyicileriyle (ActionListener) birlikte nasıl kullanacağımızı pratik bir örnek üzerinden öğreneceğiz.

## JCheckBox Nedir?

`JCheckBox`, kullanıcının **birden fazla seçeneği aynı anda** işaretleyebildiği bir Swing bileşenidir. Radio button'dan farkı budur — radio button'da yalnızca bir seçenek işaretlenebilirken, checkbox'ta istediğiniz kadar seçenek işaretleyebilirsiniz.

| Bileşen | Çoklu Seçim | Kullanım Alanı |
|---------|:-----------:|----------------|
| `JCheckBox` | ✅ Evet | Hobiler, tercihler, filtreler |
| `JRadioButton` | ❌ Hayır | Cinsiyet, ödeme yöntemi |

## Uygulama: Hobi Seçim Ekranı

Aşağıdaki uygulamada kullanıcıya 4 hobi sunuluyor. Kullanıcı istediği hobileri işaretleyip **"Seçilenleri Göster"** butonuna bastığında, seçili olan hobiler bir etiket (JLabel) üzerinde gösteriliyor.

### Tam Kaynak Kodu

```java
package com.hassamyo.checkbox.test;

import java.awt.GridLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.JButton;
import javax.swing.JCheckBox;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;

public class Test {
    public static void main(String[] args) {

        JFrame anaPencereFrame = new JFrame("Check Box");

        JPanel anaPanel = new JPanel();
        JPanel hobilerPanel = new JPanel(new GridLayout(6, 1, 5, 5));

        JCheckBox kitapBox = new JCheckBox("Kitap Okumak");
        JCheckBox dagcilikBox = new JCheckBox("Dağcılık Yapmak");
        JCheckBox bisikletBox = new JCheckBox("Bisiklet Sürmek");
        JCheckBox oyunBox = new JCheckBox("Bilgisayar oyunları oynamak");
        JButton gosterButton = new JButton("Seçilenleri Göster");
        JLabel secimJLabel = new JLabel("Seçilenler = ");

        hobilerPanel.add(kitapBox);
        hobilerPanel.add(dagcilikBox);
        hobilerPanel.add(bisikletBox);
        hobilerPanel.add(oyunBox);
        hobilerPanel.add(gosterButton);
        hobilerPanel.add(secimJLabel);

        gosterButton.addActionListener(new ActionListener() {

            @Override
            public void actionPerformed(ActionEvent e) {
                String seciliOlanlarString = "";

                if (kitapBox.isSelected()) {
                    seciliOlanlarString += "Kitap Okumak ";
                }
                if (dagcilikBox.isSelected()) {
                    seciliOlanlarString += "Dağcılık Yapmak ";
                }
                if (bisikletBox.isSelected()) {
                    seciliOlanlarString += "Bisiklet Sürmek ";
                }
                if (oyunBox.isSelected()) {
                    seciliOlanlarString += "Bilgisayar Oyunları ";
                }

                secimJLabel.setText("Seçilenler = " + seciliOlanlarString);
            }
        });

        kitapBox.addActionListener(new ActionListener() {

            @Override
            public void actionPerformed(ActionEvent e) {
                if (kitapBox.isSelected()) {
                    System.out.println("Seçim Yapıldı");
                } else {
                    System.out.println("Seçim Kaldırıldı");
                }
            }
        });

        anaPanel.add(hobilerPanel);

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
import javax.swing.*;
```

- `GridLayout`: Bileşenleri satır-sütun düzeninde dizer.
- `ActionEvent` ve `ActionListener`: Butona tıklama gibi olayları yakalamak için kullanılır.
- `javax.swing.*`: JFrame, JPanel, JCheckBox, JButton, JLabel gibi tüm GUI bileşenlerini sağlar.

### 2. Ana Pencere ve Paneller

```java
JFrame anaPencereFrame = new JFrame("Check Box");
JPanel anaPanel = new JPanel();
JPanel hobilerPanel = new JPanel(new GridLayout(6, 1, 5, 5));
```

- **JFrame**: Uygulamanın ana penceresidir. Başlık çubuğunda "Check Box" yazar.
- **anaPanel**: Varsayılan `FlowLayout` ile oluşturulur — içindeki bileşenleri yan yana veya akış düzeninde yerleştirir.
- **hobilerPanel**: `GridLayout(6, 1, 5, 5)` ile oluşturulur — **6 satır, 1 sütun**, yatay ve dikey boşluk **5 piksel**.

> **GridLayout(rows, cols, hgap, vgap)** — Tüm bileşenler eşit boyutta hücrelere yerleştirilir. Satır sayısı 0 ise sınırsız satır, sütun sayısı 0 ise sınırsız sütun anlamına gelir.

### 3. Bileşenlerin Oluşturulması

```java
JCheckBox kitapBox = new JCheckBox("Kitap Okumak");
JCheckBox dagcilikBox = new JCheckBox("Dağcılık Yapmak");
JCheckBox bisikletBox = new JCheckBox("Bisiklet Sürmek");
JCheckBox oyunBox = new JCheckBox("Bilgisayar oyunları oynamak");
JButton gosterButton = new JButton("Seçilenleri Göster");
JLabel secimJLabel = new JLabel("Seçilenler = ");
```

| Bileşen | Tür | Açıklama |
|---------|-----|----------|
| `kitapBox` | JCheckBox | İşaretlenebilir onay kutusu |
| `dagcilikBox` | JCheckBox | İşaretlenebilir onay kutusu |
| `bisikletBox` | JCheckBox | İşaretlenebilir onay kutusu |
| `oyunBox` | JCheckBox | İşaretlenebilir onay kutusu |
| `gosterButton` | JButton | Tıklanabilir buton |
| `secimJLabel` | JLabel | Sonuç metni gösterir |

### 4. Bileşenlerin Panele Eklenmesi

```java
hobilerPanel.add(kitapBox);
hobilerPanel.add(dagcilikBox);
hobilerPanel.add(bisikletBox);
hobilerPanel.add(oyunBox);
hobilerPanel.add(gosterButton);
hobilerPanel.add(secimJLabel);
```

`GridLayout(6, 1)` olduğu için bileşenler **alt alta** sıralanır. Ekleme sırası = görüntülenme sırası.

### 5. Butona ActionListener Eklenmesi

```java
gosterButton.addActionListener(new ActionListener() {
    @Override
    public void actionPerformed(ActionEvent e) {
        String seciliOlanlarString = "";

        if (kitapBox.isSelected()) {
            seciliOlanlarString += "Kitap Okumak ";
        }
        if (dagcilikBox.isSelected()) {
            seciliOlanlarString += "Dağcılık Yapmak ";
        }
        // ... diğer checkbox'lar

        secimJLabel.setText("Seçilenler = " + seciliOlanlarString);
    }
});
```

Bu kod bloğu **anonim iç sınıf** (anonymous inner class) kullanır:

1. Butona tıklandığında `actionPerformed` metodu çalışır.
2. Boş bir `String` oluşturulur.
3. Her checkbox için `isSelected()` metodu kontrol edilir — `true` dönerse o hobinin adı string'e eklenir.
4. Sonuç `secimJLabel.setText()` ile ekranda gösterilir.

> **`isSelected()` metodu**: JCheckBox'ın işaretli olup olmadığını döndürür. İşaretliyse `true`, değilse `false`.

### 6. Checkbox'a Kendi ActionListener'ı

```java
kitapBox.addActionListener(new ActionListener() {
    @Override
    public void actionPerformed(ActionEvent e) {
        if (kitapBox.isSelected()) {
            System.out.println("Seçim Yapıldı");
        } else {
            System.out.println("Seçim Kaldırıldı");
        }
    }
});
```

Bu kısım, **checkbox'ın kendisine** bir dinleyici ekler. Butona basılmasını beklemeden, checkbox her tıklandığında konsola mesaj yazar. Bu iki farklı yaklaşımı gösterir:

| Yaklaşım | Ne Zaman Tetiklenir | Nerede Gösterir |
|-----------|---------------------|-----------------|
| Buton dinleyicisi | "Göster" butonuna tıklandığında | JLabel üzerinde |
| Checkbox dinleyicisi | Checkbox işaretlendiğinde/kaldırıldığında | Konsola (System.out) |

### 7. Pencere Ayarları

```java
anaPanel.add(hobilerPanel);
anaPencereFrame.add(anaPanel);
anaPencereFrame.setSize(500, 500);
anaPencereFrame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
anaPencereFrame.setLocationRelativeTo(null);
anaPencereFrame.setVisible(true);
```

| Metot | İşlevi |
|-------|--------|
| `setSize(500, 500)` | Pencere boyutunu 500x500 piksel yapar |
| `setDefaultCloseOperation(EXIT_ON_CLOSE)` | Pencere kapatılınca program sonlanır |
| `setLocationRelativeTo(null)` | Pencereyi ekranın ortasına konumlar |
| `setVisible(true)` | Pencereyi görünür yapar — **bu satır olmadan pencere açılmaz!** |

---

## Panel Hiyerarşisi

Uygulamadaki bileşen yapısı şu şekildedir:

```
JFrame (anaPencereFrame)
└── JPanel (anaPanel) — FlowLayout
    └── JPanel (hobilerPanel) — GridLayout(6,1)
        ├── JCheckBox (kitapBox)
        ├── JCheckBox (dagcilikBox)
        ├── JCheckBox (bisikletBox)
        ├── JCheckBox (oyunBox)
        ├── JButton (gosterButton)
        └── JLabel (secimJLabel)
```

> **Neden iki panel?** `anaPanel` dış çerçeveyi oluştururken, `hobilerPanel` içindeki bileşenleri düzenli bir grid'de tutar. Bu katmanlı yapı, karmaşık arayüzlerde bileşenleri bölgelere ayırmak için yaygın bir tekniktir.

---

## JCheckBox'ın Temel Metotları

| Metot | Dönüş Tipi | Açıklama |
|-------|------------|----------|
| `isSelected()` | `boolean` | Checkbox işaretli mi? |
| `setSelected(true/false)` | `void` | Programatik olarak işaretle/kaldır |
| `getText()` | `String` | Checkbox'ın metnini döndürür |
| `setText(String)` | `void` | Checkbox metnini değiştirir |
| `addActionListener(ActionListener)` | `void` | Tıklama olayını dinler |
| `addItemListener(ItemListener)` | `void` | Durum değişikliğini dinler |

---

## Önemli Kavramlar Özeti

- **JCheckBox** çoklu seçim için kullanılır, **JRadioButton** tekli seçim için.
- **`isSelected()`** ile bir checkbox'ın durumu kontrol edilir.
- **Anonim iç sınıf** (anonymous inner class) ile `ActionListener` doğrudan `addActionListener` içinde tanımlanır — ayrı bir sınıf dosyası gerekmez.
- **GridLayout** tüm bileşenleri eşit boyutlu hücrelere yerleştirir ve sıralı bir görünüm sağlar.
- Bir bileşene birden fazla dinleyici eklenebilir ve farklı bileşenler farklı dinleyici stratejileri kullanabilir.
