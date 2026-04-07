---
layout: post
title: "Java Swing ile 2D Grafik Çizim İşlemleri: Şekillerle Kodun Büyüsü"
date: 2026-04-07
categories: nesne-tabanli-programlama-ii
---

Bir düşünün: yazdığınız her satır kod, ekranda gerçek bir şekle, renge, görüntüye dönüşüyor. Yüzlerce piksel, sizin komutunuzla hareket ediyor. Programlama soyut bir kavramken, grafik kodlamada her şey gözlerinizin önünde canlanıyor. Bu ders tam olarak o kapıyı aralıyor — Java Swing ile 2D grafik dünyasına hoş geldiniz.

Bu derste şu konuları öğreneceğiz:

- JFrame penceresi oluşturma ve yapılandırma
- `JPanel`'i miras alarak özel çizim sınıfı yazma
- `Graphics2D` ile dikdörtgen, oval, yuvarlak köşeli dikdörtgen ve yay çizme
- Renk belirleme: hem hazır sabitler hem de özel RGB değerleri
- İçi dolu ve içi boş şekiller arasındaki fark

---

## Java'da Grafik: Neden Öğrenmeliyiz?

Algoritmalar, döngüler, koşullar... Bunları çoğu zaman terminal ekranında siyah-beyaz metinlerle test ederiz. Ama aynı yapıları grafik bir ekrana taşıdığınızda bir şey değişir: **ne yaptığınızı görebilirsiniz.**

Bir döngü ekrana 50 dikdörtgen çizdiğinde, döngünün gücünü soyut olarak değil, gözlerinizle hissedersiniz. Bu yüzden grafik programlama, algoritma öğrenmenin en etkili yollarından biridir.

---

## Projeyi Kuralım

İlk olarak bir Java projesi oluşturalım ve iki temel sınıf yazalım:

```
proje/
 ├── CizimPenceresi.java   → JFrame'i oluşturur, pencereyi yönetir
 └── CizimAlani.java       → JPanel'den miras alır, şekilleri çizer
```

Bu iki sınıflı yapı, sorumlulukları güzelce ayırır: biri pencereyi yönetir, diğeri çizim yapar. Tam da nesne tabanlı programlamanın bize öğrettiği gibi.

---

## Adım 1: Pencereyi Oluşturalım — `CizimPenceresi.java`

```java
import javax.swing.JFrame;

public class CizimPenceresi {

    public static void main(String[] args) {

        // Pencereyi oluştur
        JFrame pencere = new JFrame("2D Çizim Uygulaması");

        // Boyutu belirle: genişlik x yükseklik (piksel)
        pencere.setSize(800, 600);

        // Pencere kapatıldığında program sonlansın
        pencere.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        // Çizim alanını pencereye ekle
        CizimAlani alan = new CizimAlani();
        pencere.add(alan);

        // Pencereyi ekrana ortala
        pencere.setLocationRelativeTo(null);

        // Pencereyi görünür yap
        pencere.setVisible(true);
    }
}
```

**Neler oluyor burada?**

- `JFrame` → Java Swing'in pencere sınıfıdır. Her GUI uygulaması bir JFrame ile başlar.
- `setSize(800, 600)` → Pencerenin piksel cinsinden genişlik ve yüksekliğini belirler.
- `setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE)` → Sağ üstteki X'e basıldığında program tamamen kapanır; bu satır olmadan pencere kapanır ama program arka planda çalışmaya devam eder.
- `setLocationRelativeTo(null)` → Pencereyi ekranın tam ortasına hizalar.
- `setVisible(true)` → Bu satır olmadan pencere görünmez; ekrana çıkış komutu budur.

---

## Adım 2: Çizim Alanı — `CizimAlani.java`

İşte konunun özü burada başlıyor. `JPanel`'i miras alarak kendi çizim sınıfımızı yaratıyoruz ve `paintComponent` metodunu **geçersiz kılıyoruz (override)**.

```java
import javax.swing.JPanel;
import java.awt.Graphics;
import java.awt.Graphics2D;
import java.awt.Color;
import java.awt.RenderingHints;

public class CizimAlani extends JPanel {

    @Override
    protected void paintComponent(Graphics g) {
        super.paintComponent(g);

        // Graphics'i daha güçlü Graphics2D'ye dönüştürüyoruz
        Graphics2D g2d = (Graphics2D) g;

        // Kenar yumuşatma (anti-aliasing) — şekiller daha pürüzsüz görünür
        g2d.setRenderingHint(RenderingHints.KEY_ANTIALIASING,
                             RenderingHints.VALUE_ANTIALIAS_ON);

        // --- Buraya çizim kodlarını yazacağız ---
    }
}
```

**Kritik bilgi:** `paintComponent` metodu, pencere her gösterildiğinde veya yenilendiğinde Java tarafından otomatik olarak çağrılır. Biz bu metodu override ederek "Ekrana şunu çiz!" diyoruz.

> **`super.paintComponent(g)` neden yazmalıyız?**
> Bu çağrı, üst sınıf olan `JPanel`'in arka planı temizleme görevini yerine getirmesini sağlar. Yazmazsanız eski çizimler üste biner ve ekran "kirli" görünür.

---

## Java 2D Koordinat Sistemi

Çizime geçmeden önce koordinat sistemini anlamak şart. Matematikte y ekseni yukarı doğru artar; Java'da tam tersi:

```
(0,0) ─────────────── x artar →
  │
  │       (100, 50)
  │
  y artar
  ↓
```

Yani ekranın **sol üst köşesi (0, 0) noktasıdır**, x sağa doğru, y aşağı doğru artar.

---

## Şekil 1: Dikdörtgen Çizimi

Java'da dikdörtgen için iki temel metot var:

| Metot | Açıklama |
|-------|----------|
| `drawRect(x, y, genişlik, yükseklik)` | Sadece kenarları çizer (içi boş) |
| `fillRect(x, y, genişlik, yükseklik)` | İçi dolu dikdörtgen çizer |

### İçi Dolu Dikdörtgen

```java
// Kırmızı, içi dolu bir dikdörtgen
g2d.setColor(Color.RED);
g2d.fillRect(30, 20, 50, 120);
// Anlamı: x=30, y=20 noktasından başla, genişlik=50, yükseklik=120
```

### İçi Boş Dikdörtgen

```java
// Mavi, sadece kenarları çizili dikdörtgen
g2d.setColor(Color.BLUE);
g2d.drawRect(130, 20, 80, 120);
```

### Birden Fazla Dikdörtgen

```java
// Birinci dikdörtgen — kırmızı, içi dolu
g2d.setColor(Color.RED);
g2d.fillRect(30, 20, 50, 120);

// İkinci dikdörtgen — farklı renk, farklı konum
g2d.setColor(new Color(0, 100, 200)); // Özel mavi tonu
g2d.fillRect(130, 20, 70, 90);

// Üçüncü dikdörtgen — yeşil
g2d.setColor(new Color(34, 139, 34));
g2d.fillRect(250, 50, 100, 60);
```

> **`new Color(r, g, b)` ile istediğiniz rengi üretebilirsiniz.** r (kırmızı), g (yeşil), b (mavi) değerlerinin her biri 0-255 arasındadır. Örneğin `new Color(255, 165, 0)` tam turuncu verir.

---

## Şekil 2: Yuvarlak Köşeli Dikdörtgen

Bazen köşeleri yumuşatılmış dikdörtgenler çizmek isteriz — modern UI tasarımında bu çok yaygındır.

```java
// drawRoundRect(x, y, genişlik, yükseklik, yayGenişliği, yayYüksekliği)
g2d.setColor(new Color(102, 51, 153)); // Mor tonu
g2d.fillRoundRect(50, 200, 150, 80, 25, 25);
```

Son iki parametre — `arcWidth` ve `arcHeight` — köşelerin ne kadar yuvarlanacağını belirler. 25, 25 değeri hoş ve belirgin yuvarlaklık verir. 0, 0 değeri normal dikdörtgene döner.

```java
// İçi boş yuvarlak köşeli dikdörtgen
g2d.setColor(Color.ORANGE);
g2d.drawRoundRect(250, 200, 150, 80, 40, 40);
// 40, 40 daha fazla yuvarlaklık — neredeyse kapsül şeklinde!
```

---

## Şekil 3: Oval ve Daire Çizimi

Daire ve oval çizimi için `drawOval` ve `fillOval` metotları kullanılır. Parametreler dikdörtgenle aynıdır — çünkü arka planda bir dikdörtgenin içine sığan oval çizilir:

```java
// drawOval(x, y, genişlik, yükseklik)
// x ve y, ovalin sol üst köşesinin koordinatıdır (merkezin değil!)

// İçi dolu oval
g2d.setColor(Color.CYAN);
g2d.fillOval(50, 350, 100, 60);
// 100 genişlik, 60 yükseklik → yatay oval

// Mükemmel daire: genişlik = yükseklik
g2d.setColor(new Color(220, 50, 50));
g2d.fillOval(200, 340, 80, 80);
// 80 = 80 → tam daire!

// İçi boş oval
g2d.setColor(Color.DARK_GRAY);
g2d.drawOval(330, 330, 120, 90);
```

> **İpucu:** Daire çizmek istiyorsanız genişlik ve yüksekliği **eşit** verin. `fillOval(x, y, 80, 80)` mükemmel bir daire üretir.

---

## Şekil 4: Yay (Arc) Çizimi

Yay, dairenin bir parçasıdır. Pizza dilimi, saat kadranı, ilerleme çubuğu — hepsinin temelinde yay vardır.

```java
// drawArc(x, y, genişlik, yükseklik, başlangıçAçısı, taramaAçısı)
// Açılar derece cinsindendir
// 0° → sağ (saat 3 yönü)
// 90° → yukarı (saat 12 yönü)
// 180° → sol (saat 9 yönü)
// 270° → aşağı (saat 6 yönü)

// Yarım daire (180°)
g2d.setColor(new Color(50, 120, 200));
g2d.drawArc(50, 450, 100, 100, 0, 180);

// Dörtte üç daire (270°)
g2d.setColor(Color.MAGENTA);
g2d.fillArc(200, 440, 80, 80, 0, 270);

// Üçte bir daire (120°)
g2d.setColor(new Color(255, 140, 0));
g2d.drawArc(330, 440, 100, 100, 45, 120);
```

**Açı mantığını görselleştirin:**

```
        90°
         ↑
  180° ←   → 0°
         ↓
        270°
```

`fillArc(200, 440, 80, 80, 0, 270)` → 0°'den başlayıp 270° ilerler, yani tam dairenin ¾'ü dolu olur.

---

## Renk Yönetimi

Renk belirlemek için iki yol vardır:

### Hazır Renk Sabitleri

```java
g2d.setColor(Color.RED);
g2d.setColor(Color.BLUE);
g2d.setColor(Color.GREEN);
g2d.setColor(Color.YELLOW);
g2d.setColor(Color.ORANGE);
g2d.setColor(Color.PINK);
g2d.setColor(Color.CYAN);
g2d.setColor(Color.MAGENTA);
g2d.setColor(Color.WHITE);
g2d.setColor(Color.BLACK);
g2d.setColor(Color.GRAY);
g2d.setColor(Color.DARK_GRAY);
g2d.setColor(Color.LIGHT_GRAY);
```

### Özel RGB Rengi

```java
// new Color(kırmızı, yeşil, mavi) — her değer 0-255
g2d.setColor(new Color(255, 0, 0));     // Saf kırmızı
g2d.setColor(new Color(0, 255, 0));     // Saf yeşil
g2d.setColor(new Color(0, 0, 255));     // Saf mavi
g2d.setColor(new Color(128, 0, 128));   // Mor
g2d.setColor(new Color(255, 165, 0));   // Turuncu
g2d.setColor(new Color(0, 55, 55));     // Koyu petrol yeşili
```

> **Renk karıştırma kuralı:** Kırmızı + Yeşil = Sarı; Kırmızı + Mavi = Mor; Yeşil + Mavi = Camgöbeği. Üçü birden maksimumda = Beyaz; üçü birden sıfırda = Siyah.

---

## Tüm Şekilleri Bir Arada: Tam Örnek

İşte bütün öğrendiklerimizi birleştiren eksiksiz bir program:

### `CizimAlani.java`

```java
import javax.swing.JPanel;
import java.awt.Graphics;
import java.awt.Graphics2D;
import java.awt.Color;
import java.awt.RenderingHints;

public class CizimAlani extends JPanel {

    @Override
    protected void paintComponent(Graphics g) {
        super.paintComponent(g);
        Graphics2D g2d = (Graphics2D) g;

        // Pürüzsüz kenarlar için anti-aliasing
        g2d.setRenderingHint(RenderingHints.KEY_ANTIALIASING,
                             RenderingHints.VALUE_ANTIALIAS_ON);

        // ── ARKA PLAN ─────────────────────────────────────────
        g2d.setColor(new Color(240, 240, 245));
        g2d.fillRect(0, 0, getWidth(), getHeight());

        // ── DİKDÖRTGENLER ─────────────────────────────────────

        // İçi dolu kırmızı dikdörtgen
        g2d.setColor(new Color(220, 50, 50));
        g2d.fillRect(30, 30, 80, 130);

        // İçi dolu mavi dikdörtgen
        g2d.setColor(new Color(50, 100, 220));
        g2d.fillRect(130, 30, 80, 90);

        // İçi boş yeşil dikdörtgen
        g2d.setColor(new Color(34, 139, 34));
        g2d.drawRect(230, 30, 80, 110);

        // ── YUVARLIK KÖŞELİ DİKDÖRTGENLER ───────────────────

        // İçi dolu, hafif yuvarlak
        g2d.setColor(new Color(150, 50, 200));
        g2d.fillRoundRect(30, 200, 130, 70, 20, 20);

        // İçi dolu, çok yuvarlak (kapsül benzeri)
        g2d.setColor(new Color(255, 140, 0));
        g2d.fillRoundRect(180, 200, 160, 60, 60, 60);

        // İçi boş yuvarlak köşeli
        g2d.setColor(new Color(0, 150, 150));
        g2d.drawRoundRect(360, 195, 120, 70, 30, 30);

        // ── OVALLer VE DAİRELER ───────────────────────────────

        // Yatay oval
        g2d.setColor(new Color(0, 180, 180));
        g2d.fillOval(30, 320, 150, 80);

        // Mükemmel daire
        g2d.setColor(new Color(220, 80, 80));
        g2d.fillOval(210, 310, 100, 100);

        // İçi boş büyük oval
        g2d.setColor(new Color(80, 80, 200));
        g2d.drawOval(330, 310, 160, 100);

        // ── YAYLAR ───────────────────────────────────────────

        // Yarım daire (içi boş)
        g2d.setColor(new Color(200, 100, 50));
        g2d.drawArc(30, 460, 120, 120, 0, 180);

        // Dörtte üç daire (içi dolu)
        g2d.setColor(new Color(50, 150, 50));
        g2d.fillArc(180, 460, 100, 100, 90, 270);

        // Üçte bir daire (içi boş)
        g2d.setColor(new Color(200, 50, 150));
        g2d.drawArc(310, 460, 110, 110, 30, 120);
    }
}
```

### `CizimPenceresi.java`

```java
import javax.swing.JFrame;

public class CizimPenceresi {

    public static void main(String[] args) {
        JFrame pencere = new JFrame("2D Çizim Uygulaması");
        pencere.setSize(550, 650);
        pencere.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        pencere.add(new CizimAlani());
        pencere.setLocationRelativeTo(null);
        pencere.setVisible(true);
    }
}
```

Bu kodu çalıştırdığınızda, ekranda kırmızı ve mavi dikdörtgenlerden yuvarlak köşeli şekillere, dairelerden yaylara uzanan renkli bir kompozisyon belirecek.

---

## Metot Özet Tablosu

| Metot | Parametre Sırası | Açıklama |
|-------|-----------------|----------|
| `drawRect(x, y, w, h)` | sol-üst köşe, genişlik, yükseklik | İçi boş dikdörtgen |
| `fillRect(x, y, w, h)` | sol-üst köşe, genişlik, yükseklik | İçi dolu dikdörtgen |
| `drawRoundRect(x, y, w, h, aw, ah)` | + yay genişliği, yay yüksekliği | İçi boş yuvarlak köşeli dikdörtgen |
| `fillRoundRect(x, y, w, h, aw, ah)` | + yay genişliği, yay yüksekliği | İçi dolu yuvarlak köşeli dikdörtgen |
| `drawOval(x, y, w, h)` | sınırlayıcı kutu sol-üstü, genişlik, yükseklik | İçi boş oval/daire |
| `fillOval(x, y, w, h)` | sınırlayıcı kutu sol-üstü, genişlik, yükseklik | İçi dolu oval/daire |
| `drawArc(x, y, w, h, start, arc)` | + başlangıç açısı, tarama açısı | İçi boş yay |
| `fillArc(x, y, w, h, start, arc)` | + başlangıç açısı, tarama açısı | İçi dolu yay (pasta dilimi) |

---

## Döngülerle Grafik: Sıradaki Adım

Şimdiye kadar şekilleri tek tek, elle yazdık. Ama döngülerle birleştiğinde grafik programlamanın gerçek gücü ortaya çıkar. Bir `for` döngüsü ile ekrana 20 daire çizmek, 3 satır kod meselesidir:

```java
// Bir sonraki dersimizden ön bakış:
for (int i = 0; i < 20; i++) {
    int x = 20 + i * 35;
    int renk = i * 12;
    g2d.setColor(new Color(renk, 100, 200 - renk));
    g2d.fillOval(x, 250, 30, 30);
}
```

Bu küçük döngü ekrana renk renk 20 daire çizer — ve hepsinin rengi farklıdır. Bir döngü değişkeni hem konumu hem rengi kontrol eder. İşte **grafik + algoritma = sihir** budur.

---

## Sık Yapılan Hatalar

| Hata | Sebebi | Çözümü |
|------|--------|--------|
| Şekiller görünmüyor | `setColor()` unutuldu | Her şekil öncesi renk belirleyin |
| Ekran titreyor | `super.paintComponent(g)` yok | Mutlaka ilk satıra ekleyin |
| Şekiller üst üste biriyor | `super.paintComponent(g)` yok | Aynı çözüm: `super` çağrısı |
| Daire değil oval çıkıyor | Genişlik ≠ yükseklik | `fillOval(x, y, 80, 80)` — eşit değer |
| `paintComponent` tetiklenmiyor | `setVisible(true)` unutuldu | Pencereyi görünür yapın |

---

## Nesne Tabanlı Bağlantı: Miras Burada Ne Yapıyor?

Fark ettiniz mi? `CizimAlani extends JPanel` satırı bu dersin gizli kahramanı. **Miras** sayesinde:

- `JPanel`'in tüm özelliklerini (boyut yönetimi, layout, arka plan) **bedavaya** alıyoruz.
- Sadece tek bir metodu — `paintComponent` — geçersiz kılarak çizim davranışını özelleştiriyoruz.
- Nesnemiz hem bir `JPanel` hem de `CizimAlani`; `pencere.add(alan)` çalışıyor çünkü Java "bu bir JPanel" diyor.

Geçen hafta öğrendiğimiz miras ve `@Override` kavramları, bu derste somut ve görsel bir uygulama buldu.

---

## Özet

Bu derste Java Swing ile 2D grafik çiziminin temellerini attık. `JFrame` ile pencere açmayı, `JPanel`'i miras alarak özel çizim sınıfı yazmayı ve `Graphics2D` ile dikdörtgen, yuvarlak köşeli dikdörtgen, oval, daire ve yay çizmeyi öğrendik. Renk yönetiminde hem hazır `Color` sabitlerini hem de `new Color(r, g, b)` ile özel renk üretimini gördük.

Bir sonraki adımda bu şekilleri **döngülerle** üretip ekranda örüntüler ve animasyonlar oluşturacağız.

---

## Pratik Ödev

Kendi çizim programınızı yazın:

1. En az 5 farklı şekil çizin (farklı türlerde olsun).
2. Her şekle farklı bir renk verin — hazır sabit ve `new Color(r,g,b)` ikisini de kullanın.
3. Ekrana bir **Türk Bayrağı** çizmeyi deneyin: kırmızı arka plan, beyaz ay (yay) ve beyaz yıldız (beş parça `fillArc` ile çizilebilir).
4. **Bonus:** Aynı çizimi `for` döngüsü kullanarak yinelemeli hale getirin — örneğin 10 farklı boyutta iç içe daire.
