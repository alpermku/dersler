---
layout: post
title: "Unity Temel Kavramlar: Asset, Hierarchy, Inspector, Sprite, Transform ve Order in Layer"
date: 2026-02-23
categories: oyun-programlama
---

Bu derste Unity oyun motorunun en temel yapı taşlarını öğreneceğiz. Bir oyun sahnesini oluşturan öğelerin ne olduğunu, nerede durduğunu, nasıl göründüğünü ve nasıl yönetildiğini kavramak, Unity ile oyun geliştirmenin ilk ve en kritik adımıdır.

## 1. Asset Nedir?

**Asset**, Unity projesinde kullanılan **her türlü dosya ve kaynaktır.** Bir oyunu oluşturan tüm malzemeler asset olarak adlandırılır.

### Asset Örnekleri

| Asset Türü | Açıklama | Dosya Uzantısı |
|------------|----------|----------------|
| Sprite (Görsel) | 2D karakter, arka plan, buton görseli | `.png`, `.jpg`, `.psd` |
| Ses | Müzik, efekt sesleri | `.mp3`, `.wav`, `.ogg` |
| Script | C# ile yazılmış oyun kodları | `.cs` |
| Prefab | Önceden hazırlanmış tekrar kullanılabilir nesne | `.prefab` |
| Sahne | Oyunun bir bölümü/ekranı | `.unity` |
| Animasyon | Karakter veya nesne animasyonları | `.anim`, `.controller` |
| Font | Yazı tipleri | `.ttf`, `.otf` |
| Material | 3D nesnelerin yüzey özellikleri | `.mat` |

### Project Penceresi

Asset'ler Unity'de **Project** penceresinde görünür. Bu pencere, bilgisayarınızdaki dosya gezgininin Unity içindeki karşılığıdır.

```text
Assets/
 ├── Sprites/
 │    ├── player.png
 │    ├── enemy.png
 │    └── background.png
 ├── Scripts/
 │    ├── PlayerController.cs
 │    └── EnemyAI.cs
 ├── Audio/
 │    ├── jump.wav
 │    └── music.mp3
 └── Scenes/
      └── MainScene.unity
```

### Asset Yönetimi İpuçları

- Dosyalarınızı **klasörlerle organize edin** — proje büyüdükçe düzen hayat kurtarır.
- Asset isimlendirmesinde **tutarlı bir kural** belirleyin (ör. `player_idle.png`, `player_run.png`).
- Unity dışından dosya taşımak yerine, **Project penceresine sürükle-bırak** yapın.
- Kullanılmayan asset'leri projede bırakmayın — build boyutunu şişirir.

> **Önemli:** Asset'ler tek başına sahnede görünmez. Bir asset'in oyunda görünmesi için onu bir **GameObject** olarak sahneye eklemeniz gerekir.

---

## 2. Hierarchy Nedir?

**Hierarchy** penceresi, o anda açık olan sahnedeki **tüm GameObject'lerin listesidir.** Sahnenizdeki her şey — kamera, ışık, karakter, zemin, düşman — burada görünür.

### GameObject Nedir?

Unity'de sahnedeki her şey bir **GameObject**'tir. Tek başına bir GameObject boş bir kutudur; ona **bileşen (component)** ekleyerek işlevsel hâle getirirsiniz.

```text
Hierarchy
 ├── Main Camera
 ├── Directional Light
 ├── Background
 ├── Player
 │    ├── Weapon
 │    └── Shield
 ├── Enemy_01
 ├── Enemy_02
 └── UI_Canvas
      ├── ScoreText
      └── HealthBar
```

### Ebeveyn-Çocuk (Parent-Child) İlişkisi

Hierarchy'deki en güçlü özellik **iç içe geçme (nesting)** yapısıdır:

- Bir GameObject'i başka birinin üzerine sürüklediğinizde **çocuk (child)** olur.
- Ebeveyn (parent) hareket ettiğinde, çocukları da **birlikte hareket eder**.
- Çocuğun Transform değerleri, ebeveynine **göreceli (relative)** olur.

**Örnek:**

```text
Player (ebeveyn)
 ├── Weapon (çocuk)
 └── Shield (çocuk)
```

Player sağa hareket ederse, Weapon ve Shield de birlikte sağa kayar. Ayrı ayrı hareket ettirmenize gerek kalmaz.

### Hierarchy Kullanım İpuçları

- Nesneleri **mantıksal gruplar** hâlinde düzenleyin (boş bir GameObject oluşturup çocukları altına atabilirsiniz).
- İsimlendirme önemlidir: `GameObject (1)` yerine `Enemy_Skeleton_01` gibi açıklayıcı isimler verin.
- Sahnede bir nesneyi seçmek için Hierarchy'de tıklamak, Scene penceresinde aramaktan çok daha hızlıdır.

---

## 3. Inspector Nedir?

**Inspector** penceresi, Hierarchy'de seçili olan GameObject'in **tüm bileşenlerini (component) ve özelliklerini** gösteren detay paneldir.

### Bir GameObject'i Seçtiğinizde Inspector'da Görecekleriniz

```text
┌─────────────────────────────────┐
│ ☑ Player                        │  ← GameObject adı ve aktiflik durumu
├─────────────────────────────────┤
│ Transform                       │  ← Konum, döndürme, ölçek
│  Position: X:0  Y:1  Z:0       │
│  Rotation: X:0  Y:0  Z:0       │
│  Scale:    X:1  Y:1  Z:1       │
├─────────────────────────────────┤
│ Sprite Renderer                 │  ← Görsel bileşen
│  Sprite: player_idle            │
│  Color: (255, 255, 255, 255)    │
│  Order in Layer: 2              │
├─────────────────────────────────┤
│ Box Collider 2D                 │  ← Fizik çarpışma alanı
│  Size: X:1  Y:1.5              │
├─────────────────────────────────┤
│ Rigidbody 2D                    │  ← Fizik motoru bileşeni
│  Mass: 1                        │
│  Gravity Scale: 1               │
├─────────────────────────────────┤
│ PlayerController (Script)       │  ← Sizin yazdığınız C# scripti
│  Speed: 5                       │
│  Jump Force: 10                 │
└─────────────────────────────────┘
```

### Bileşen (Component) Sistemi

Unity'nin temel felsefesi **bileşen tabanlı mimari (component-based architecture)** üzerine kuruludur:

- Bir GameObject'e **istediğiniz kadar bileşen** ekleyebilirsiniz.
- Her bileşen belirli bir sorumluluk taşır.
- `Transform` bileşeni **zorunludur** — her GameObject'te bulunur, kaldırılamaz.

| Bileşen | Görevi |
|---------|--------|
| `Transform` | Konum, döndürme, ölçek |
| `Sprite Renderer` | 2D görsel gösterme |
| `Rigidbody 2D` | Fizik simülasyonu |
| `Collider 2D` | Çarpışma algılama |
| `Animator` | Animasyon kontrolü |
| `Audio Source` | Ses çalma |
| `Script (C#)` | Özel oyun mantığı |

### Inspector'da Değer Değiştirme

Inspector'daki değerleri **oyun çalışırken bile** değiştirebilirsiniz. Bu, hızlı test ve ayarlama (tweaking) için mükemmeldir.

> **Dikkat:** Oyun çalışırken yaptığınız değişiklikler, oyunu durdurduğunuzda **kaybolur**. Bu, Unity'nin en sık düşülen tuzaklarından biridir!

---

## 4. Sprite Nedir?

**Sprite**, 2D oyunlarda kullanılan **düz görsellerdir.** Karakter, düşman, arka plan, mermi, buton — 2D oyundaki her görsel öğe bir sprite'tır.

### Sprite vs Texture

| Kavram | Açıklama |
|--------|----------|
| **Texture** | Ham görsel dosyası (`.png`, `.jpg`) |
| **Sprite** | Unity'nin bu görseli 2D oyun nesnesi olarak kullanılabilir hâle getirmiş biçimi |

Bir `.png` dosyasını Unity'ye import ettiğinizde, Inspector'da **Texture Type** ayarını `Sprite (2D and UI)` olarak seçmeniz gerekir.

### Sprite Import Ayarları

Inspector'da bir sprite seçtiğinizde göreceğiniz temel ayarlar:

| Ayar | Açıklama |
|------|----------|
| **Texture Type** | `Sprite (2D and UI)` olmalı |
| **Sprite Mode** | `Single` (tek görsel) veya `Multiple` (sprite sheet) |
| **Pixels Per Unit (PPU)** | 1 Unity birimindeki piksel sayısı (varsayılan 100) |
| **Pivot** | Sprite'ın dönüş/konum merkezi (Center, Bottom, Custom...) |
| **Filter Mode** | `Point` (piksel art için keskin) veya `Bilinear` (yumuşak) |

### Pixels Per Unit (PPU)

PPU, sprite'ınızın Unity dünyasındaki boyutunu belirler:

- 100x100 piksel bir sprite, PPU=100 ise → Unity'de **1x1 birim** kaplar.
- Aynı sprite, PPU=50 ise → **2x2 birim** kaplar (daha büyük görünür).
- Piksel art oyunlarda genellikle PPU=16 veya PPU=32 kullanılır.

### Sprite Renderer Bileşeni

Bir sprite'ı sahnede göstermek için GameObject'e **Sprite Renderer** bileşeni eklenir:

```text
Sprite Renderer
 ├── Sprite: [atanmış görsel]
 ├── Color: görseli renklendirme (tint)
 ├── Flip: X veya Y ekseninde aynalama
 ├── Sorting Layer: hangi katmanda
 └── Order in Layer: katman içi sıralama
```

> **İpucu:** `Color` özelliğini kullanarak aynı sprite'ı farklı renklerde gösterebilirsiniz. Örneğin beyaz bir düşman sprite'ına kırmızı tint vererek "hasar almış" efekti yaratabilirsiniz.

---

## 5. Transform Bileşeni

**Transform**, Unity'deki **en temel ve zorunlu bileşendir.** Her GameObject'in sahnedeki konumunu, döndürmesini ve boyutunu tanımlar.

### Transform'un Üç Özelliği

```text
Transform
 ├── Position  (Konum)    → X, Y, Z
 ├── Rotation  (Döndürme) → X, Y, Z (derece cinsinden)
 └── Scale     (Ölçek)    → X, Y, Z
```

### Position (Konum)

Nesnenin **dünya koordinatlarındaki** (veya ebeveynine göreceli) konumudur.

- 2D oyunlarda genellikle **X** (yatay) ve **Y** (dikey) kullanılır.
- **Z** ekseni 2D'de genellikle kamera derinliği için kullanılır (ama biz bunu daha çok Order in Layer ile yönetiriz).

```text
Position: X:3  Y:2  Z:0
→ Nesne, sahnenin merkezinden 3 birim sağda, 2 birim yukarıda.
```

### Rotation (Döndürme)

Nesnenin eksenleri etrafındaki dönüş açısıdır.

- 2D oyunlarda genellikle sadece **Z rotation** kullanılır (ekran düzleminde dönüş).

```text
Rotation: X:0  Y:0  Z:45
→ Nesne saat yönünün tersine 45° döndürülmüş.
```

### Scale (Ölçek)

Nesnenin orijinal boyutuna göre büyütme/küçültme oranıdır.

- `Scale: 1, 1, 1` → Orijinal boyut
- `Scale: 2, 2, 1` → İki katı büyüklükte
- `Scale: -1, 1, 1` → X ekseninde aynalama (sprite'ı ters çevirme)

> **Pratik kullanım:** Bir karakterin sola/sağa bakmasını sağlamak için Scale X değerini `1` ve `-1` arasında değiştirebilirsiniz. Bu, ayrı bir "sola bakan" sprite'a ihtiyaç duymadan çalışır.

### Yerel (Local) vs Dünya (World) Koordinatları

- **Ebeveyn olmayan** bir nesnenin Transform değerleri → dünya koordinatlarıdır.
- **Çocuk** bir nesnenin Transform değerleri → ebeveynine görecelidir.

```text
Player (Position: 5, 0, 0)
 └── Weapon (Position: 1, 0, 0)
     → Weapon'ın dünya konumu: 5+1 = 6, 0, 0
```

### Script'te Transform Kullanımı

```csharp
// Nesneyi sağa hareket ettir
transform.position += new Vector3(speed * Time.deltaTime, 0, 0);

// Nesneyi döndür
transform.Rotate(0, 0, rotationSpeed * Time.deltaTime);

// Nesneyi 2 katına büyüt
transform.localScale = new Vector3(2, 2, 1);

// Başka bir nesneye bak (yönelme)
transform.LookAt(target.transform);
```

---

## 6. Order in Layer ve Sıralama Sistemi

2D oyunlarda **hangi nesnenin hangisinin önünde/arkasında** görüneceğini yönetmek kritik öneme sahiptir. Unity bunu **Sorting Layer** ve **Order in Layer** sistemiyle çözer.

### Problem: Üst Üste Binen Sprite'lar

Bir 2D sahnede arka plan, zemin, karakter ve düşmanlar hep aynı düzlemde durur. Unity hangisinin önde olduğunu nasıl bilecek?

### Sorting Layer (Sıralama Katmanı)

Sorting Layer, sprite'ları **büyük gruplar** hâlinde organize etmenizi sağlar.

**Varsayılan sıralama (arkadan öne):**

```text
Sorting Layers:
 1. Background    ← En arkada
 2. Ground
 3. Characters
 4. Foreground
 5. UI            ← En önde
```

**Sorting Layer oluşturmak için:**
`Edit → Project Settings → Tags and Layers → Sorting Layers`

Listedeki sıra önemlidir: **alttaki katmanlar önde** çizilir.

### Order in Layer (Katman İçi Sıra)

Aynı Sorting Layer içindeki sprite'ların kendi aralarındaki sırasını belirler.

- Daha **yüksek numara** → daha **önde** çizilir.
- Varsayılan değer: `0`

**Örnek Senaryo — Bir Platform Oyunu:**

| Nesne | Sorting Layer | Order in Layer | Sonuç |
|-------|--------------|----------------|-------|
| Gökyüzü | Background | 0 | En arkada |
| Bulutlar | Background | 1 | Gökyüzünün önünde |
| Uzak Dağlar | Background | 2 | Bulutların önünde |
| Zemin Karoları | Ground | 0 | Arka planın önünde |
| Çalılar | Ground | 1 | Zeminin önünde |
| Düşman | Characters | 0 | Zeminin önünde |
| Oyuncu | Characters | 1 | Düşmanın önünde |
| Ağaç Yaprakları | Foreground | 0 | Her şeyin önünde |
| Skor Metni | UI | 0 | Ekranın en önünde |

### Sprite Renderer'da Ayarlama

```text
Sprite Renderer
 ├── Sorting Layer: Characters
 └── Order in Layer: 1
```

### Script'te Sıralama Değiştirme

```csharp
// Sprite Renderer'a erişim
SpriteRenderer sr = GetComponent<SpriteRenderer>();

// Sorting layer değiştirme
sr.sortingLayerName = "Foreground";

// Order in layer değiştirme
sr.sortingOrder = 5;
```

### Dinamik Sıralama (Y-Sorting)

Bazı oyunlarda (top-down RPG gibi) karakterlerin Y konumuna göre sıralanması gerekir. Ekranın altındaki nesne, üstündekinin "önünde" görünmelidir:

```csharp
void Update()
{
    // Y konumuna göre sıralama
    // Y azaldıkça (aşağı gittikçe) order artar → önde görünür
    GetComponent<SpriteRenderer>().sortingOrder = -(int)(transform.position.y * 10);
}
```

### Sık Yapılan Sıralama Hataları

| Hata | Çözüm |
|------|-------|
| Karakter arka planın arkasında kayboluyor | Karakterin Sorting Layer'ını veya Order in Layer'ını artırın |
| İki sprite "titreyerek" yer değiştiriyor | Aynı layer ve order'da iki nesne var — birine farklı order verin |
| UI öğeleri oyun nesnelerinin arkasında | UI için ayrı bir Sorting Layer oluşturun (en önde) |
| Parallax efekti çalışmıyor | Her katman için ayrı Sorting Layer kullanın |

---

## Tüm Kavramları Birleştiren Örnek

Basit bir 2D platform oyunu sahnesi düşünelim:

### Proje Yapısı (Asset'ler)

```text
Assets/
 ├── Sprites/
 │    ├── sky_bg.png        (PPU: 100)
 │    ├── ground_tile.png   (PPU: 32)
 │    ├── player_idle.png   (PPU: 32)
 │    └── coin.png          (PPU: 32)
 └── Scripts/
      └── PlayerController.cs
```

### Sahne Hiyerarşisi (Hierarchy)

```text
Hierarchy
 ├── Main Camera
 ├── Background
 │    └── Sky          [Sprite Renderer: sky_bg, Layer: Background, Order: 0]
 ├── Environment
 │    ├── Ground_01    [Sprite Renderer: ground_tile, Layer: Ground, Order: 0]
 │    ├── Ground_02    [Sprite Renderer: ground_tile, Layer: Ground, Order: 0]
 │    └── Bush         [Sprite Renderer: bush, Layer: Ground, Order: 1]
 ├── Player            [Transform: (0, 1, 0), Sprite Renderer: player_idle, Layer: Characters, Order: 1]
 │    └── Weapon       [Transform: (0.5, 0, 0) — ebeveyne göreceli]
 └── Collectibles
      ├── Coin_01      [Transform: (3, 2, 0), Layer: Characters, Order: 0]
      └── Coin_02      [Transform: (5, 2, 0), Layer: Characters, Order: 0]
```

### Inspector Görünümü (Player Seçili)

```text
┌──────────────────────────────────┐
│ ☑ Player                   Tag: Player
├──────────────────────────────────┤
│ Transform                        │
│  Position:  X: 0   Y: 1   Z: 0  │
│  Rotation:  X: 0   Y: 0   Z: 0  │
│  Scale:     X: 1   Y: 1   Z: 1  │
├──────────────────────────────────┤
│ Sprite Renderer                  │
│  Sprite: player_idle             │
│  Sorting Layer: Characters       │
│  Order in Layer: 1               │
├──────────────────────────────────┤
│ Rigidbody 2D                     │
│  Gravity Scale: 1                │
├──────────────────────────────────┤
│ Box Collider 2D                  │
│  Size: X: 0.8   Y: 1.2          │
├──────────────────────────────────┤
│ PlayerController (Script)        │
│  Speed: 5                        │
│  Jump Force: 12                  │
└──────────────────────────────────┘
```

### Çizim Sırası (Ekranda Görünen Katmanlar)

```text
[En arkada]
  1. Sky (Background / Order 0)
  2. Ground Tiles (Ground / Order 0)
  3. Bush (Ground / Order 1)
  4. Coins (Characters / Order 0)
  5. Player (Characters / Order 1)
[En önde]
```

---

## Özet

| Kavram | Ne İşe Yarar? | Nerede Bulunur? |
|--------|---------------|-----------------|
| **Asset** | Projede kullanılan tüm dosyalar | Project penceresi |
| **Hierarchy** | Sahnedeki tüm nesnelerin listesi | Hierarchy penceresi |
| **Inspector** | Seçili nesnenin bileşen ve özellikleri | Inspector penceresi |
| **Sprite** | 2D görsel öğe | Sprite Renderer bileşeninde |
| **Transform** | Konum, döndürme, ölçek bilgisi | Her GameObject'te zorunlu |
| **Order in Layer** | Sprite'ların çizim sırası | Sprite Renderer bileşeninde |

## Pratik Ödev

1. Yeni bir 2D Unity projesi oluşturun.
2. **3 farklı Sorting Layer** tanımlayın: `Background`, `Ground`, `Characters`.
3. Bir arka plan, zemin ve karakter sprite'ı import edip sahneye ekleyin.
4. Her birinin Sorting Layer ve Order in Layer değerlerini doğru ayarlayın.
5. Karakteri bir boş GameObject'in çocuğu yapın ve ebeveynin Transform'unu değiştirerek çocuğun nasıl etkilendiğini gözlemleyin.
6. Oyun çalışırken Inspector'dan Position değerlerini değiştirip nesneyi hareket ettirin.
