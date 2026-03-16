---
layout: post
title: "Java Swing'de Olay Yönetimi: ActionListener, İkonlu Butonlar ve Diyalog Pencereleri"
date: 2026-03-16
categories: nesne-tabanli-programlama-ii
---

Bir butona basıyorsunuz. Bir şey oluyor. Basit görünüyor, değil mi?

Ama arkada olan şey basit değil. O buton, tıklandığı anda bir **olay (event)** üretir. Bu olay bir **olay dinleyicisine (listener)** iletilir. Dinleyici, önceden tanımladığınız kodu çalıştırır. Bu mekanizmaya **olay güdümlü programlama (event-driven programming)** denir ve modern yazılım geliştirmenin temel taşıdır.

Bugün bu mekanizmayı parçalarına ayıracağız. Her parçayı anlayacak, birleştirecek ve sonunda tam çalışan iki uygulama inşa edeceğiz: bir **Kişi Yönetim Formu** ve bir **Resim Galerisi**.

---

## 1. Olay Güdümlü Programlama Nedir?

Geleneksel programlamada kod yukarıdan aşağıya sırayla çalışır. Ama görsel uygulamalarda bu işe yaramaz — çünkü kullanıcı **ne zaman** neye tıklayacağını siz bilemezsiniz. Program "bekler" ve kullanıcı bir şey yaptığında (buton tıklama, metin girme, pencere kapatma) **tepki verir**.

Bu yaklaşıma **olay güdümlü programlama** denir.

### Üç Temel Bileşen

| Bileşen | Görevi | Örnek |
|---------|--------|-------|
| **Olay Kaynağı (Event Source)** | Olayı üreten görsel eleman | `JButton`, `JTextField`, `JMenuItem` |
| **Olay Nesnesi (Event Object)** | Olayın bilgilerini taşıyan nesne | `ActionEvent`, `MouseEvent`, `KeyEvent` |
| **Olay Dinleyicisi (Event Listener)** | Olaya tepki veren kod bloğu | `ActionListener`, `MouseListener`, `KeyListener` |

Düşünce şekli şöyle: buton bir **alarm** gibidir. Alarm çaldığında (olay üretildiğinde), itfaiye (dinleyici) harekete geçer. Ama itfaiyeyi önce alarma **bağlamanız** gerekir — yoksa alarm çalar, kimse gelmez.

---

## 2. ActionListener: Olayları Dinlemek

`ActionListener`, Java Swing'de en sık kullanılan olay dinleyicisidir. Tek bir metodu vardır:

```java
public interface ActionListener {
    void actionPerformed(ActionEvent e);
}
```

Bu arayüzü **implemente** ettiğinizde, `actionPerformed` metodunun içine "bu olay olunca ne yapılsın" kodunu yazarsınız.

### 2.1 İsimli ActionListener Nesnesi Oluşturma

En açık ve okunabilir yöntem: dinleyiciyi ayrı bir nesne olarak oluşturup, sonra butona eklemek.

```java
// 1. Adım: ActionListener nesnesini oluştur
ActionListener kapatActionListener = new ActionListener() {
    @Override
    public void actionPerformed(ActionEvent e) {
        System.exit(0);  // Programı tamamen sonlandır
    }
};

// 2. Adım: Bu dinleyiciyi butona bağla
iptalButton.addActionListener(kapatActionListener);
```

**Ne oluyor burada?**

1. `ActionListener` bir **arayüzdür** (interface). Doğrudan `new ActionListener()` diyemezsiniz — ama **anonim iç sınıf (anonymous inner class)** sözdizimi ile oluşturabilirsiniz.
2. `kapatActionListener` artık bir nesnedir. İçinde `actionPerformed` metodu bulunur.
3. `addActionListener()` metodu ile bu nesneyi butona bağlarız.
4. Artık buton her tıklandığında, `actionPerformed` içindeki kod çalışır.

**Avantajı:** Dinleyici nesnesinin bir ismi var (`kapatActionListener`). Birden fazla butona aynı dinleyiciyi ekleyebilirsiniz:

```java
iptalButton.addActionListener(kapatActionListener);
kapatButton.addActionListener(kapatActionListener);  // Aynı dinleyici, farklı buton
```

### 2.2 Anonim (İsimsiz) ActionListener

Eğer dinleyiciyi sadece tek bir butona ekleyecekseniz, isme gerek yok. Doğrudan `addActionListener()` içinde tanımlayabilirsiniz:

```java
iptalButton.addActionListener(new ActionListener() {
    @Override
    public void actionPerformed(ActionEvent e) {
        System.exit(0);
    }
});
```

**Bu nedir?** Aynı şeyin **kısaltılmış** hali. İki adımı (oluştur + bağla) tek satırda birleştiriyoruz. Nesnenin ismi yok — bu yüzden **anonim** (isimsiz) deniyor.

**Karşılaştırma:**

| Özellik | İsimli Dinleyici | Anonim Dinleyici |
|---------|-----------------|-----------------|
| Okunabilirlik | Daha açık | Daha kompakt |
| Tekrar kullanım | Birden fazla butona eklenebilir | Tek butona özel |
| Bakım kolaylığı | Kolay bulunur ve değiştirilir | Karmaşık olabilir |
| Tercih durumu | Aynı davranış paylaşılacaksa | Tek seferlik işlemler |

> **Pratik kural:** Dinleyici sadece bir yerde kullanılacaksa → anonim. Birden fazla yerde kullanılacaksa → isimli.

---

## 3. System.exit() vs dispose(): Kapatma Stratejileri

Bir pencereyi kapatmanın iki yolu vardır ve ikisi **çok farklı** şeyler yapar:

### 3.1 System.exit(0)

```java
System.exit(0);
```

Bu komut **tüm Java uygulamasını sonlandırır**. JVM (Java Virtual Machine) tamamen kapanır. Açık olan tüm pencereler, arka plan iş parçacıkları, veritabanı bağlantıları — hepsi anında sonlanır.

- `0` parametresi: "Normal çıkış" anlamına gelir (hata yok).
- `1` veya başka sayılar: "Hatalı çıkış" anlamına gelir.

**Ne zaman kullanılır?** Tek pencereli uygulamalarda, "Çıkış" butonunda.

### 3.2 dispose()

```java
anaPencereFrame.dispose();
```

Bu komut **sadece o pencereyi kapatır**. Pencere bellekten temizlenir, ama uygulama çalışmaya devam eder. Eğer başka açık pencereler varsa, onlar etkilenmez.

**Ne zaman kullanılır?** Çok pencereli uygulamalarda. Örneğin bir "Ayarlar" penceresi kapatıldığında ana pencere açık kalmalıdır.

**Kritik fark:**

```java
// Senaryo: Ana pencere + Ayarlar penceresi açık

System.exit(0);           // İkisi de kapanır. Uygulama biter.
ayarlarFrame.dispose();   // Sadece ayarlar kapanır. Ana pencere açık kalır.
```

**Örnek: dispose() ile pencere kapatma**

```java
iptalButton.addActionListener(new ActionListener() {
    @Override
    public void actionPerformed(ActionEvent e) {
        anaPencereFrame.dispose();  // Pencereyi kapat, uygulamayı sonlandırma
    }
});
```

> **Dikkat:** `dispose()` kullandığınızda, eğer başka açık pencere yoksa ve `setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE)` ayarlanmamışsa, JVM arka planda çalışmaya devam edebilir. Bu durumda programınız "gizlice" hayatta kalır. Task Manager'dan kontrol edin!

---

## 4. İkonlu Butonlar: Görsel Zenginlik

Düz metin butonlar işlevseldir ama sıkıcıdır. `ImageIcon` sınıfı ile butonlara görsel ikon ekleyebilirsiniz.

### 4.1 ImageIcon Oluşturma

```java
ImageIcon ekleIcon = new ImageIcon("ikonlar/ekle.png");
```

Bu satır, `ikonlar` klasöründeki `ekle.png` dosyasını bir ikon nesnesine dönüştürür.

**Dosya yolu kuralları:**
- **Göreceli yol:** `"ikonlar/ekle.png"` → Projenin kök dizinine göre
- **Mutlak yol:** `"C:/proje/ikonlar/ekle.png"` → Sabit konum (taşınabilirlik sorunu!)
- **Classpath:** `new ImageIcon(getClass().getResource("/ikonlar/ekle.png"))` → JAR dosyası içinden (en güvenilir yöntem)

### 4.2 İkonu Butona Ekleme

```java
// Sadece ikon
JButton silButton = new JButton(silIcon);

// Metin + ikon birlikte
JButton ekleButton = new JButton("Ekle", ekleIcon);
```

### 4.3 İkon ve Metin Pozisyonlarını Ayarlama

Varsayılan olarak ikon solda, metin sağda görünür. Bunu değiştirebilirsiniz:

```java
ekleButton.setVerticalTextPosition(AbstractButton.CENTER);    // Metin dikeyde ortada
ekleButton.setHorizontalTextPosition(AbstractButton.RIGHT);   // Metin yatayda sağda (ikon solda)
```

**Olası pozisyon kombinasyonları:**

```
[İkon]  Metin    →  LEFT + CENTER (varsayılan)
Metin  [İkon]    →  RIGHT + CENTER
      [İkon]
      Metin      →  CENTER + BOTTOM
      Metin
      [İkon]     →  CENTER + TOP
```

### 4.4 Klavye Kısayolu (Mnemonic)

Kullanıcılar her zaman fareye uzanmak istemez. `setMnemonic()` ile **Alt + Harf** kısayolu tanımlayabilirsiniz:

```java
ekleButton.setMnemonic(KeyEvent.VK_E);    // Alt+E → Ekle butonunu tetikler
iptalButton.setMnemonic(KeyEvent.VK_P);   // Alt+P → İptal butonunu tetikler
```

Mnemonic atandığında, buton metnindeki ilgili harf **altı çizili** görünür — kullanıcıya kısayolun varlığını gösterir.

---

## 5. JOptionPane: Diyalog Pencereleri

Kullanıcıdan onay almak, bilgi göstermek veya girdi istemek için `JOptionPane` sınıfı kullanılır. Bu sınıf, hazır diyalog pencereleri sunar — sıfırdan JFrame oluşturmanıza gerek kalmaz.

### 5.1 showConfirmDialog: Onay Penceresi

```java
int durum = JOptionPane.showConfirmDialog(
    anaPencereFrame,                          // Üst pencere (parent)
    "Gerçekten çıkmak istiyor musunuz?",      // Mesaj
    "Çıkış",                                  // Başlık
    JOptionPane.YES_NO_OPTION,                // Buton tipi
    JOptionPane.QUESTION_MESSAGE,             // İkon tipi
    evetIcon                                  // Özel ikon (opsiyonel)
);
```

**Parametreler detaylı:**

| Parametre | Açıklama | Değerler |
|-----------|----------|----------|
| `parent` | Diyaloğun bağlı olduğu pencere | Herhangi bir `JFrame` veya `null` |
| `message` | Gösterilecek mesaj | `String` |
| `title` | Pencere başlığı | `String` |
| `optionType` | Buton kombinasyonu | `YES_NO_OPTION`, `YES_NO_CANCEL_OPTION`, `OK_CANCEL_OPTION` |
| `messageType` | Varsayılan ikon | `QUESTION_MESSAGE`, `WARNING_MESSAGE`, `ERROR_MESSAGE`, `INFORMATION_MESSAGE`, `PLAIN_MESSAGE` |
| `icon` | Özel ikon | `ImageIcon` nesnesi veya `null` |

### 5.2 Dönüş Değerini Kontrol Etme

`showConfirmDialog` bir **int** döndürür:

| Dönüş Değeri | Sabit | Anlam |
|--------------|-------|-------|
| `0` | `JOptionPane.YES_OPTION` | Kullanıcı "Evet" tıkladı |
| `1` | `JOptionPane.NO_OPTION` | Kullanıcı "Hayır" tıkladı |
| `2` | `JOptionPane.CANCEL_OPTION` | Kullanıcı "İptal" tıkladı |
| `-1` | `JOptionPane.CLOSED_OPTION` | Kullanıcı X ile kapattı |

**Doğru kullanım:**

```java
if (durum == JOptionPane.YES_OPTION) {
    System.exit(0);  // Sadece "Evet" tıklandıysa çık
}
// "Hayır" veya X tıklandıysa hiçbir şey olmaz — pencere açık kalır
```

> **İpucu:** Sabit isimleri (`JOptionPane.YES_OPTION`) kullanmak, sihirli sayılardan (`0`, `1`) çok daha okunabilirdir. `if (durum == 0)` yerine `if (durum == JOptionPane.YES_OPTION)` yazın.

### 5.3 Diğer Diyalog Türleri

```java
// Bilgi mesajı
JOptionPane.showMessageDialog(frame, "Kayıt başarılı!", "Bilgi", 
    JOptionPane.INFORMATION_MESSAGE);

// Hata mesajı
JOptionPane.showMessageDialog(frame, "Dosya bulunamadı!", "Hata", 
    JOptionPane.ERROR_MESSAGE);

// Metin girdisi alma
String isim = JOptionPane.showInputDialog(frame, "Adınızı girin:");
```

---

## 6. Uygulama 1: Kişi Yönetim Formu

Şimdi öğrendiğimiz her şeyi birleştirip tam bir uygulama yazalım. Bu uygulama:
- Üstte bir form (ad, soyad, telefon)
- Ortada bir kişi listesi
- Altta ikonlu butonlar (Ekle, Düzenle, Sil, İptal)
- İptal butonunda onay diyaloğu

### Tam Kaynak Kod

```java
package com.alyaka.gorsel.test;

import java.awt.BorderLayout;
import java.awt.GridLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.KeyEvent;

import javax.swing.AbstractButton;
import javax.swing.ImageIcon;
import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JList;
import javax.swing.JOptionPane;
import javax.swing.JPanel;
import javax.swing.JScrollPane;
import javax.swing.JTextField;

public class Test {
    public static void main(String[] args) {
        // === PENCERE OLUŞTURMA ===
        JFrame anaPencereFrame = new JFrame();
        anaPencereFrame.setTitle("Ana Pencere");
        anaPencereFrame.setSize(500, 500);
        anaPencereFrame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        anaPencereFrame.setLocationRelativeTo(null);  // Ekranın ortasında aç

        // === PANEL MİMARİSİ ===
        // Ana panel: BorderLayout ile üst, orta ve alt bölgelere ayırıyoruz
        JPanel anaJPanel = new JPanel(new BorderLayout());

        // Üst panel: 3 satır, 2 sütun grid (etiket + alan çiftleri)
        JPanel ustPanel = new JPanel(new GridLayout(3, 2, 5, 5));

        // Alt panel: 2 satır, 2 sütun grid (4 buton)
        JPanel altJPanel = new JPanel(new GridLayout(2, 2, 5, 5));

        anaPencereFrame.add(anaJPanel);
        anaJPanel.add(ustPanel, BorderLayout.NORTH);
        anaJPanel.add(altJPanel, BorderLayout.SOUTH);

        // === FORM ALANLARI ===
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

        // === İKONLAR ===
        ImageIcon ekleImageIcon = new ImageIcon("ikonlar/ekle.png");
        ImageIcon silImageIcon = new ImageIcon("ikonlar/sil.png");
        ImageIcon duzenleImageIcon = new ImageIcon("ikonlar/duzenle.png");
        ImageIcon iptalImageIcon = new ImageIcon("ikonlar/iptal.png");
        ImageIcon evetIcon = new ImageIcon("ikonlar/evet.png");

        // === İKONLU BUTONLAR ===
        JButton ekleButton = new JButton("Ekle", ekleImageIcon);
        JButton silButton = new JButton("Sil", silImageIcon);
        JButton duzenleButton = new JButton("Düzenle", duzenleImageIcon);
        JButton iptalButton = new JButton("İptal", iptalImageIcon);

        // === BUTON ÖZELLEŞTİRME ===
        // İkon-metin pozisyonu
        ekleButton.setVerticalTextPosition(AbstractButton.CENTER);
        ekleButton.setHorizontalTextPosition(AbstractButton.RIGHT);

        // Klavye kısayolları
        ekleButton.setMnemonic(KeyEvent.VK_E);      // Alt+E
        iptalButton.setMnemonic(KeyEvent.VK_P);      // Alt+P

        // === OLAY DİNLEYİCİSİ: İPTAL BUTONU ===
        iptalButton.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                // Onay diyaloğu göster
                int durum = JOptionPane.showConfirmDialog(
                    anaPencereFrame,
                    "Gerçekten çıkmak istiyor musunuz?",
                    "Çıkış",
                    JOptionPane.YES_NO_OPTION,
                    JOptionPane.QUESTION_MESSAGE,
                    evetIcon
                );

                // Sadece "Evet" tıklandıysa çık
                if (durum == JOptionPane.YES_OPTION) {
                    System.exit(0);
                }
            }
        });

        // === BUTONLARI PANELE EKLE ===
        altJPanel.add(ekleButton);
        altJPanel.add(duzenleButton);
        altJPanel.add(silButton);
        altJPanel.add(iptalButton);

        // === KİŞİ LİSTESİ ===
        JList<String> kisilerJList = new JList<>();
        JScrollPane kisilerPane = new JScrollPane(kisilerJList);
        kisilerPane.setVerticalScrollBarPolicy(JScrollPane.VERTICAL_SCROLLBAR_ALWAYS);
        anaJPanel.add(kisilerPane, BorderLayout.CENTER);

        // === PENCEREYİ GÖSTER ===
        anaPencereFrame.setVisible(true);
    }
}
```

### Mimari Analiz

Bu uygulamanın panel hiyerarşisi şöyle çalışır:

```
JFrame (anaPencereFrame)
└── JPanel (anaJPanel) [BorderLayout]
    ├── NORTH → JPanel (ustPanel) [GridLayout 3×2]
    │   ├── JLabel("Adı")      + JTextField
    │   ├── JLabel("Soyadı")   + JTextField
    │   └── JLabel("Telefonu") + JTextField
    ├── CENTER → JScrollPane
    │   └── JList (kişi listesi)
    └── SOUTH → JPanel (altJPanel) [GridLayout 2×2]
        ├── JButton("Ekle")     [ikon + mnemonic]
        ├── JButton("Düzenle")  [ikon]
        ├── JButton("Sil")      [ikon]
        └── JButton("İptal")    [ikon + mnemonic + ActionListener]
```

**Neden iç içe paneller?** Tek bir `BorderLayout` tüm bileşenleri düzgün yerleştiremez. `NORTH` bölgesine tek bir bileşen ekleyebilirsiniz — ama biz 6 bileşen (3 etiket + 3 alan) eklemek istiyoruz. Bu yüzden `NORTH` bölgesine bir `GridLayout` panel koyuyoruz. Bu tekniğe **panel iç içe geçirme (panel nesting)** denir ve profesyonel arayüz tasarımının temelidir.

---

## 7. Uygulama 2: Resim Galerisi

Şimdi ActionListener'ın gerçek gücünü görelim: butonlarla dinamik içerik değiştirme.

### Konsept

- Üstte 3 küçük resim butonu (thumbnail)
- Ortada büyük resim gösterici
- Hangi butona tıklanırsa, o resmin büyük hali ortada görünsün
- Aktif buton devre dışı kalsın (çift tıklama önleme)

### Tam Kaynak Kod

```java
package com.hassamyo.test;

import java.awt.BorderLayout;
import java.awt.GridLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.ImageIcon;
import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;

public class Test {

    public static void main(String[] args) {

        // === PENCERE ===
        JFrame anaPencereFrame = new JFrame("Ana Pencere");
        anaPencereFrame.setSize(500, 500);
        anaPencereFrame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        anaPencereFrame.setLocationRelativeTo(null);

        // === PANEL YAPISI ===
        JPanel anaPanel = new JPanel(new BorderLayout());
        JPanel ustPanel = new JPanel(new GridLayout(1, 3, 5, 5));
        anaPanel.add(ustPanel, BorderLayout.NORTH);

        // === KÜÇÜK İKONLAR (Thumbnail) ===
        ImageIcon gulenKucukIcon = new ImageIcon("resimler/gulen_kucuk.png");
        ImageIcon somurtanKucukIcon = new ImageIcon("resimler/somurtan_kucuk.png");
        ImageIcon gozatanKucukIcon = new ImageIcon("resimler/gozatan_kucuk.png");

        JButton gulenButton = new JButton(gulenKucukIcon);
        JButton somurtanButton = new JButton(somurtanKucukIcon);
        JButton gozAtanButton = new JButton(gozatanKucukIcon);

        ustPanel.add(gulenButton);
        ustPanel.add(somurtanButton);
        ustPanel.add(gozAtanButton);

        // === BÜYÜK RESİMLER ===
        ImageIcon gulenBuyukIcon = new ImageIcon("resimler/gulen_buyuk.png");
        ImageIcon somurtanBuyukIcon = new ImageIcon("resimler/somurtan_buyuk.png");
        ImageIcon gozatanBuyukIcon = new ImageIcon("resimler/gozatan_buyuk.png");

        // === RESİM GÖSTERİCİ ===
        JLabel resimLabel = new JLabel(gulenBuyukIcon);  // Başlangıçta gülen yüz
        anaPanel.add(resimLabel, BorderLayout.CENTER);

        // Başlangıç durumu: gülen buton devre dışı (zaten seçili)
        gulenButton.setEnabled(false);

        // === OLAY DİNLEYİCİLERİ ===
        gulenButton.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                resimLabel.setIcon(gulenBuyukIcon);       // Büyük resmi değiştir
                gulenButton.setEnabled(false);             // Bu butonu devre dışı bırak
                somurtanButton.setEnabled(true);           // Diğerlerini aktif et
                gozAtanButton.setEnabled(true);
            }
        });

        somurtanButton.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                resimLabel.setIcon(somurtanBuyukIcon);
                gulenButton.setEnabled(true);
                somurtanButton.setEnabled(false);
                gozAtanButton.setEnabled(true);
            }
        });

        gozAtanButton.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                resimLabel.setIcon(gozatanBuyukIcon);
                gulenButton.setEnabled(true);
                somurtanButton.setEnabled(true);
                gozAtanButton.setEnabled(false);
            }
        });

        // === PENCEREYİ GÖSTER ===
        anaPencereFrame.add(anaPanel);
        anaPencereFrame.setVisible(true);
    }
}
```

### Tasarım Desenini Anlamak

Bu galeri uygulamasında önemli bir desen var: **karşılıklı dışlama (mutual exclusion)**. Her buton tıklandığında:

1. **Kendini devre dışı bırakır** → Zaten seçili olan resme tekrar tıklanamaz
2. **Diğer butonları aktif eder** → Kullanıcı başka bir resme geçebilir

Bu desen, **radyo butonu (radio button)** davranışını taklit eder — bir seferde sadece bir seçenek aktif olabilir.

```
Başlangıç:  [😊 devre dışı]  [😠 aktif]  [👀 aktif]
                                              ↓ tıkla
Sonuç:      [😊 aktif]       [😠 aktif]  [👀 devre dışı]
```

### Kod Tekrarı Sorunu ve Çözümü

Üç butonun dinleyicileri neredeyse aynı — sadece hangi resmin gösterileceği ve hangi butonun devre dışı kalacağı değişiyor. Bu **kod tekrarı (code duplication)** bir tasarım sorunudur.

**Daha temiz versiyon** (ileri seviye — öğrenme amaçlı):

```java
// Yardımcı metot: Tüm butonları aktif et, seçileni devre dışı bırak
private static void resimSec(JLabel label, ImageIcon buyukIcon,
                              JButton aktifButton, JButton... digerler) {
    label.setIcon(buyukIcon);
    aktifButton.setEnabled(false);
    for (JButton btn : digerler) {
        btn.setEnabled(true);
    }
}

// Kullanım:
gulenButton.addActionListener(e -> 
    resimSec(resimLabel, gulenBuyukIcon, gulenButton, somurtanButton, gozAtanButton));
```

Bu, **DRY (Don't Repeat Yourself)** ilkesinin pratikte uygulanmasıdır. Ancak sınavda standart (uzun) versiyonu yazmak daha güvenlidir.

---

## 8. Özet ve Anahtar Kavramlar

| Kavram | Açıklama |
|--------|----------|
| **ActionListener** | Buton tıklama olayını dinleyen arayüz |
| **actionPerformed()** | Olay gerçekleştiğinde çağrılan metot |
| **Anonim iç sınıf** | İsim verilmeden doğrudan oluşturulan sınıf örneği |
| **System.exit(0)** | Tüm uygulamayı sonlandırır |
| **dispose()** | Sadece ilgili pencereyi kapatır |
| **ImageIcon** | Resim dosyasını ikon nesnesine dönüştürür |
| **setMnemonic()** | Alt+Harf klavye kısayolu tanımlar |
| **JOptionPane.showConfirmDialog()** | Evet/Hayır onay penceresi gösterir |
| **setEnabled(false)** | Bileşeni devre dışı bırakır (tıklanamaz) |
| **Karşılıklı dışlama** | Bir seferde sadece bir seçenek aktif olabilir |

---

## 9. Alıştırmalar

**Alıştırma 1 — Hesap Makinesi Temeli:**
İki `JTextField` ve bir `JButton` ("Topla") oluşturun. Butona tıklandığında iki alanın değerini toplayıp sonucu `JOptionPane.showMessageDialog()` ile gösterin.

**Alıştırma 2 — Tema Değiştirici:**
3 buton oluşturun: "Kırmızı", "Mavi", "Yeşil". Her butona tıklandığında ana panelin arka plan rengini değiştirin. (`panel.setBackground(Color.RED)`)

**Alıştırma 3 — Güvenli Çıkış:**
Bir form oluşturun. İptal butonuna tıklandığında, eğer herhangi bir `JTextField` dolu ise "Kaydedilmemiş değişiklikler var! Çıkmak istediğinizden emin misiniz?" diyaloğu gösterin. Tüm alanlar boşsa direkt kapatın.

---

> **Bir sonraki derste:** Lambda ifadeleri ile ActionListener'ı tek satıra indireceğiz, JMenuBar ile menü sistemi oluşturacağız ve dosya seçici (JFileChooser) ile gerçek dosya işlemleri yapacağız.
