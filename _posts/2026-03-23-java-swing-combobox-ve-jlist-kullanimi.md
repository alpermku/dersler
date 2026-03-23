---
layout: post
title: "Java Swing'de JComboBox ve JList Kullanımı: Şehir Seçim Uygulaması"
date: 2026-03-23 12:00:00 +0300
categories: nesne-tabanli-programlama-ii
---

Bu derste Java Swing'in iki önemli seçim bileşenini inceleyeceğiz: açılır liste olan **JComboBox** ve çoklu seçime izin veren **JList**. Her iki bileşeni hem **dizi (String[])** hem de **ArrayList** ile nasıl kullanacağımızı, olay dinleyicilerini ve kaydırma çubuğu (JScrollPane) eklemeyi öğreneceğiz.

## JComboBox vs JList — Ne Zaman Hangisi?

| Özellik | JComboBox | JList |
|---------|-----------|-------|
| Görünüm | Açılır menü (dropdown) | Sabit liste |
| Varsayılan seçim | Tek seçim | Tek veya çoklu seçim |
| Alan kullanımı | Az yer kaplar | Daha fazla yer kaplar |
| Kullanım alanı | İl seçimi, kategori filtresi | Dosya listesi, çoklu tercih |
| Düzenlenebilir mi? | Evet (`setEditable(true)`) | Hayır |
| Olay dinleyicisi | `ActionListener` | `ListSelectionListener` |

---

## Uygulama: Şehir Seçimi (Dizi ve ArrayList ile)

Aşağıdaki uygulamada aynı şehir verileri hem JComboBox hem de JList ile gösteriliyor. Kullanıcı seçim yaptığında konsola seçilen şehir ve indeks numarası yazdırılıyor.

### Tam Kaynak Kodu

```java
package com.hmyo.combo.test;

import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.util.ArrayList;

import javax.swing.JComboBox;
import javax.swing.JFrame;
import javax.swing.JList;
import javax.swing.JPanel;
import javax.swing.JScrollPane;
import javax.swing.event.ListSelectionEvent;
import javax.swing.event.ListSelectionListener;

public class Test {
    public static void main(String[] args) {

        JFrame anaPencereFrame = new JFrame("Combo Box");
        JPanel anaPanel = new JPanel();

        // --- YÖNTEM 1: Dizi ile ---
        // String[] sehirlerString = new String[] {
        //     "Adana", "Adıyaman", "Afyon", "Ağrı", "Amasya"
        // };

        // --- YÖNTEM 2: ArrayList ile ---
        ArrayList<String> sehirlerArrayList = new ArrayList<String>();
        sehirlerArrayList.add("Adana");
        sehirlerArrayList.add("Adıyaman");
        sehirlerArrayList.add("Afyon");
        sehirlerArrayList.add("Ağrı");
        sehirlerArrayList.add("Amasya");

        // JComboBox sehirlerBox = new JComboBox(sehirlerString);
        JComboBox sehirlerBox = new JComboBox(sehirlerArrayList.toArray());
        anaPanel.add(sehirlerBox);

        // JList sehirlerJList = new JList(sehirlerString);
        JList sehirlerJList = new JList(sehirlerArrayList.toArray());
        JScrollPane sehirlerPane = new JScrollPane(sehirlerJList);
        sehirlerPane.setVerticalScrollBarPolicy(
            JScrollPane.VERTICAL_SCROLLBAR_ALWAYS
        );
        anaPanel.add(sehirlerPane);

        sehirlerBox.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                System.out.println(
                    sehirlerBox.getSelectedIndex() + " "
                    + sehirlerBox.getSelectedItem()
                );
            }
        });

        sehirlerJList.addListSelectionListener(new ListSelectionListener() {
            @Override
            public void valueChanged(ListSelectionEvent e) {
                System.out.println(
                    sehirlerJList.getSelectedIndex() + " "
                    + sehirlerJList.getSelectedValue()
                );
            }
        });

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
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.util.ArrayList;

import javax.swing.JComboBox;
import javax.swing.JFrame;
import javax.swing.JList;
import javax.swing.JPanel;
import javax.swing.JScrollPane;
import javax.swing.event.ListSelectionEvent;
import javax.swing.event.ListSelectionListener;
```

Bu derste öncekilerden farklı olan import'lar:

| Import | Paket | İşlevi |
|--------|-------|--------|
| `ArrayList` | `java.util` | Dinamik dizi — eleman ekleme/çıkarma |
| `JComboBox` | `javax.swing` | Açılır liste bileşeni |
| `JList` | `javax.swing` | Sabit liste bileşeni |
| `JScrollPane` | `javax.swing` | Kaydırma çubuğu sarmalayıcı |
| `ListSelectionEvent` | `javax.swing.event` | Liste seçim olayı |
| `ListSelectionListener` | `javax.swing.event` | Liste seçim dinleyicisi |

> **Dikkat:** JComboBox için `ActionListener` (java.awt.event) kullanılırken, JList için `ListSelectionListener` (javax.swing.event) kullanılır. Farklı paketlerden farklı dinleyiciler!

### 2. Veri Kaynağı — Dizi vs ArrayList

Kodda iki yöntem gösteriliyor. Her ikisi de aynı sonucu verir:

#### Yöntem 1: String Dizisi

```java
String[] sehirlerString = new String[] {
    "Adana", "Adıyaman", "Afyon", "Ağrı", "Amasya"
};
```

- **Sabit boyutlu** — oluşturulduktan sonra eleman eklenemez/çıkarılamaz.
- Boyut değişmeyecek verilerde (il plaka kodları, aylar) uygundur.
- JComboBox ve JList **doğrudan** dizi kabul eder.

#### Yöntem 2: ArrayList

```java
ArrayList<String> sehirlerArrayList = new ArrayList<String>();
sehirlerArrayList.add("Adana");
sehirlerArrayList.add("Adıyaman");
sehirlerArrayList.add("Afyon");
sehirlerArrayList.add("Ağrı");
sehirlerArrayList.add("Amasya");
```

- **Dinamik boyutlu** — çalışma zamanında eleman eklenip çıkarılabilir.
- Veritabanından veya API'den gelen verilerde tercih edilir.
- JComboBox ve JList'e verilirken **`toArray()`** ile diziye çevrilmesi gerekir.

| Özellik | String[] (Dizi) | ArrayList |
|---------|:-:|:-:|
| Boyut değişir mi? | ❌ Sabit | ✅ Dinamik |
| Eleman ekleme | ❌ | `add("Hatay")` |
| Eleman silme | ❌ | `remove("Afyon")` |
| JComboBox'a verme | Doğrudan | `toArray()` gerekir |
| Performans | Daha hızlı | Biraz yavaş (esneklik karşılığı) |

### 3. JComboBox Oluşturma

```java
// Dizi ile:
JComboBox sehirlerBox = new JComboBox(sehirlerString);

// ArrayList ile:
JComboBox sehirlerBox = new JComboBox(sehirlerArrayList.toArray());
```

`JComboBox` constructor'ı bir **Object dizisi** kabul eder. ArrayList doğrudan verilemez, `toArray()` metodu ile `Object[]` dizisine dönüştürülür.

> **Tip güvenliği notu:** Yukarıdaki kullanımda generic tip belirtilmemiştir. Daha güvenli yazımı `JComboBox<String>` şeklindedir — böylece `getSelectedItem()` dönüşünde casting gerekmez.

### 4. JList ve JScrollPane

```java
JList sehirlerJList = new JList(sehirlerArrayList.toArray());
JScrollPane sehirlerPane = new JScrollPane(sehirlerJList);
sehirlerPane.setVerticalScrollBarPolicy(
    JScrollPane.VERTICAL_SCROLLBAR_ALWAYS
);
anaPanel.add(sehirlerPane);
```

Üç aşama var:

1. **JList oluşturulur** — tıpkı JComboBox gibi dizi veya `toArray()` ile.
2. **JScrollPane ile sarmalanır** — JList tek başına kaydırma çubuğu göstermez! Uzun listelerde elemanlar kesilir.
3. **Panele JScrollPane eklenir** — JList değil! Panele doğrudan JList eklerseniz kaydırma çubuğu olmaz.

> ⚠️ **Yaygın hata:** `anaPanel.add(sehirlerJList)` yazarsanız kaydırma çubuğu görünmez. Her zaman `anaPanel.add(sehirlerPane)` yazın.

#### Kaydırma Çubuğu Politikaları

```java
sehirlerPane.setVerticalScrollBarPolicy(JScrollPane.VERTICAL_SCROLLBAR_ALWAYS);
```

| Politika | Sabit Değer | Davranış |
|----------|-------------|----------|
| `VERTICAL_SCROLLBAR_ALWAYS` | Her zaman göster | İçerik kısa da olsa çubuk görünür |
| `VERTICAL_SCROLLBAR_AS_NEEDED` | Gerektiğinde göster | İçerik taşarsa çubuk belirir (varsayılan) |
| `VERTICAL_SCROLLBAR_NEVER` | Hiç gösterme | Kaydırma çubuğu gizlenir |

Yatay kaydırma çubuğu için aynı politikalar `HORIZONTAL_SCROLLBAR_*` ile uygulanır.

### 5. JComboBox Olay Dinleyicisi — ActionListener

```java
sehirlerBox.addActionListener(new ActionListener() {
    @Override
    public void actionPerformed(ActionEvent e) {
        System.out.println(
            sehirlerBox.getSelectedIndex() + " "
            + sehirlerBox.getSelectedItem()
        );
    }
});
```

JComboBox'ta bir eleman seçildiğinde `ActionListener` tetiklenir:

- **`getSelectedIndex()`** → Seçili elemanın **indeks numarasını** döndürür (0'dan başlar).
- **`getSelectedItem()`** → Seçili elemanın **kendisini** (Object olarak) döndürür.

Örnek konsol çıktısı:

```
0 Adana
2 Afyon
4 Amasya
```

### 6. JList Olay Dinleyicisi — ListSelectionListener

```java
sehirlerJList.addListSelectionListener(new ListSelectionListener() {
    @Override
    public void valueChanged(ListSelectionEvent e) {
        System.out.println(
            sehirlerJList.getSelectedIndex() + " "
            + sehirlerJList.getSelectedValue()
        );
    }
});
```

JList'te `ActionListener` yerine **`ListSelectionListener`** kullanılır:

- **`getSelectedIndex()`** → Seçili elemanın indeksini döndürür.
- **`getSelectedValue()`** → Seçili elemanın kendisini döndürür (JComboBox'taki `getSelectedItem()`'ın karşılığı).

> **Önemli fark:** `valueChanged` metodu, fare basıldığında **ve** bırakıldığında olmak üzere **iki kez** tetiklenebilir. Bunu önlemek için:
>
> ```java
> public void valueChanged(ListSelectionEvent e) {
>     if (!e.getValueIsAdjusting()) {  // Sadece bırakıldığında çalışır
>         System.out.println(sehirlerJList.getSelectedValue());
>     }
> }
> ```

---

## Panel Hiyerarşisi

```
JFrame (anaPencereFrame)
└── JPanel (anaPanel) — FlowLayout
    ├── JComboBox (sehirlerBox) — Açılır liste
    └── JScrollPane (sehirlerPane) — Kaydırma sarmalayıcı
        └── JList (sehirlerJList) — Sabit liste
```

---

## Ek Yöntemler ve İpuçları

### JComboBox'ı Düzenlenebilir Yapma

```java
sehirlerBox.setEditable(true);
```

Bu ayar aktifken kullanıcı listedeki elemanlardan birini seçebileceği gibi, **kendi değerini de yazabilir**. Arama kutusu mantığıyla çalışır.

### JList'te Çoklu Seçim

```java
// Varsayılan: SINGLE_SELECTION (tek seçim)
sehirlerJList.setSelectionMode(
    javax.swing.ListSelectionModel.MULTIPLE_INTERVAL_SELECTION
);
```

| Seçim Modu | Sabit | Davranış |
|------------|-------|----------|
| `SINGLE_SELECTION` | Tek eleman | Bir elemanı tıklayın |
| `SINGLE_INTERVAL_SELECTION` | Ardışık aralık | Shift + tıklama ile ardışık seçim |
| `MULTIPLE_INTERVAL_SELECTION` | Birden fazla aralık | Ctrl + tıklama ile dağınık seçim |

Çoklu seçimde seçilen değerleri almak:

```java
// Tek seçim
String secili = (String) sehirlerJList.getSelectedValue();

// Çoklu seçim — tüm seçilenleri al
java.util.List<String> seciliListe = sehirlerJList.getSelectedValuesList();
for (String sehir : seciliListe) {
    System.out.println(sehir);
}
```

### Programatik Eleman Ekleme/Çıkarma (JComboBox)

```java
// Eleman ekleme
sehirlerBox.addItem("Hatay");
sehirlerBox.insertItemAt("Ankara", 0); // Başa ekle

// Eleman çıkarma
sehirlerBox.removeItem("Afyon");
sehirlerBox.removeItemAt(2); // İndeks ile çıkar

// Tüm elemanları temizle
sehirlerBox.removeAllItems();

// Eleman sayısı
int toplam = sehirlerBox.getItemCount();
```

### Programatik Seçim

```java
// JComboBox — indeks ile seçim
sehirlerBox.setSelectedIndex(2); // 3. elemanı seç

// JComboBox — değer ile seçim
sehirlerBox.setSelectedItem("Ağrı");

// JList — indeks ile seçim
sehirlerJList.setSelectedIndex(0); // İlk elemanı seç

// JList — birden fazla indeks seç
sehirlerJList.setSelectedIndices(new int[]{0, 2, 4});
```

---

## JComboBox Temel Metotları

| Metot | Dönüş Tipi | Açıklama |
|-------|------------|----------|
| `getSelectedItem()` | `Object` | Seçili elemanı döndürür |
| `getSelectedIndex()` | `int` | Seçili elemanın indeksini döndürür |
| `setSelectedIndex(int)` | `void` | İndeks ile seçim yapar |
| `setSelectedItem(Object)` | `void` | Değer ile seçim yapar |
| `addItem(Object)` | `void` | Sona eleman ekler |
| `insertItemAt(Object, int)` | `void` | Belirli konuma eleman ekler |
| `removeItem(Object)` | `void` | Elemanı değerine göre siler |
| `removeItemAt(int)` | `void` | Elemanı indeksine göre siler |
| `removeAllItems()` | `void` | Tüm elemanları temizler |
| `getItemCount()` | `int` | Toplam eleman sayısı |
| `setEditable(boolean)` | `void` | Metin girişine izin verir |

## JList Temel Metotları

| Metot | Dönüş Tipi | Açıklama |
|-------|------------|----------|
| `getSelectedValue()` | `Object` | Seçili elemanı döndürür |
| `getSelectedIndex()` | `int` | Seçili elemanın indeksini döndürür |
| `getSelectedValuesList()` | `List` | Çoklu seçimde tüm seçilenleri döndürür |
| `setSelectedIndex(int)` | `void` | İndeks ile seçim yapar |
| `setSelectedIndices(int[])` | `void` | Birden fazla indeks seçer |
| `setSelectionMode(int)` | `void` | Seçim modunu belirler |
| `setVisibleRowCount(int)` | `void` | Görünür satır sayısını ayarlar |
| `clearSelection()` | `void` | Tüm seçimleri temizler |

---

## Önemli Kavramlar Özeti

- **JComboBox** az yer kaplayan açılır liste, **JList** sabit görünür listedir.
- Her iki bileşen de hem **String dizisi** hem de **ArrayList** (`.toArray()` ile) kabul eder.
- **JScrollPane** olmadan JList kaydırma çubuğu göstermez — JList'i her zaman JScrollPane ile sarmalayın.
- JComboBox **ActionListener**, JList ise **ListSelectionListener** kullanır — farklı paketlerden farklı dinleyiciler.
- JList'in `valueChanged` metodu çift tetiklenebilir — `e.getValueIsAdjusting()` kontrolü eklemek iyi pratiktir.
- `setEditable(true)` ile JComboBox'a kullanıcı girişi de kabul ettirilebilir.
- JList **çoklu seçimi** destekler — `setSelectionMode()` ve `getSelectedValuesList()` ile.
