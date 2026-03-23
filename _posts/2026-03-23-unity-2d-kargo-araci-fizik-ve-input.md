---
layout: post
title: "Unity 2D Kargo Aracı: Fizik, Çarpışma ve Input Sistemi"
date: 2026-03-23 16:00:00 +0300
categories: oyun-programlama
---

Bir saniye durun ve şunu düşünün: ekranınızdaki o küçük kargo aracı, her saniye **60 kez** yeniden çiziliyor. Her karede fizik hesaplanıyor, çarpışmalar kontrol ediliyor, kamera pozisyonu güncelleniyor. Ve tüm bunlar, yazdığınız **birkaç satır C# kodu** sayesinde oluyor. Bugün o birkaç satırın arkasındaki büyüyü çözeceğiz.

Bu derste **2D bir kargo aracı oyunu** geliştirirken Unity'nin en temel yapı taşlarını öğreneceğiz: aracı hareket ettirmek, nesnelerle etkileşim kurmak ve kameranın aracı takip etmesini sağlamak.

---

## Proje Yapısı

Projemizde şu an iki C# script dosyası var:

| Dosya | Görev | Bağlandığı Nesne |
|-------|-------|-------------------|
| `Surucu.cs` | Aracın hareketi ve dönüşü | Kargo aracı (Player) |
| `Carp.cs` | Çarpışma ve temas algılama | Kargo aracı veya hedef nesneler |

Bir de Unity'nin **Input System** yapılandırma dosyası (`InputSystem_Actions.inputactions`) var — ama henüz onu doğrudan kullanmıyoruz. Şimdilik klavye ile direkt input okuyoruz.

---

## Bölüm 1: Aracın Hareket Sistemi — `Surucu.cs`

### Tam Kaynak Kodu

```csharp
using UnityEngine;
using UnityEngine.InputSystem;

public class Surucu : MonoBehaviour
{
    [SerializeField] float hareketHizi = 10f;
    [SerializeField] float donusHizi = 200f;

    void Update()
    {
        float hareket = 0;
        float donus = 0;

        if (Keyboard.current.upArrowKey.isPressed)
        {
            hareket = 1;
        }
        if (Keyboard.current.downArrowKey.isPressed)
        {
            hareket = -1;
        }
        if (Keyboard.current.rightArrowKey.isPressed)
        {
            donus = -1;
        }
        if (Keyboard.current.leftArrowKey.isPressed)
        {
            donus = 1;
        }

        float hareketMiktari = hareket * hareketHizi * Time.deltaTime;
        float donusMiktari = donus * donusHizi * Time.deltaTime;

        transform.Rotate(0, 0, donusMiktari);
        transform.Translate(0, hareketMiktari, 0);
    }
}
```

Bu 35 satırlık kod, aslında bir **araç simülasyonunun kalbi**. Satır satır açıklayalım.

---

### `[SerializeField]` — Inspector'dan Ayar Yapma

```csharp
[SerializeField] float hareketHizi = 10f;
[SerializeField] float donusHizi = 200f;
```

`[SerializeField]` ne yapar? Normalde `private` olan bir değişkeni Unity Inspector panelinde **görünür ve düzenlenebilir** hale getirir.

Neden `public` yapmıyoruz? Çünkü bu değişkenlere **başka script'lerin erişmesini istemiyoruz** — ama Unity editöründe hızla değiştirmek istiyoruz. Bu, yazılım mühendisliğinde **kapsülleme** (encapsulation) prensibidir.

> **Oyun tasarımı ipucu:** `[SerializeField]` sayesinde oyunu çalıştırırken hız değerlerini canlı olarak değiştirebilirsiniz. Aracınız çok hızlı mı? Inspector'dan `hareketHizi`'ni 5'e düşürün. Çok yavaş dönüyor mu? `donusHizi`'ni 300'e çıkarın. Kodu durdurup yeniden yazmaya gerek yok!

| Erişim Yöntemi | Kod Erişimi | Inspector Görünürlüğü | Ne Zaman Kullan? |
|----------------|:-----------:|:---------------------:|------------------|
| `public float hiz;` | ✅ Her yerden | ✅ Görünür | Başka script'ler erişecekse |
| `[SerializeField] float hiz;` | ❌ Sadece bu script | ✅ Görünür | Editörden ayar yapılacaksa |
| `private float hiz;` | ❌ Sadece bu script | ❌ Gizli | Tamamen iç değişkense |

---

### Input Algılama — Klavye Okuma

```csharp
if (Keyboard.current.upArrowKey.isPressed)
{
    hareket = 1;
}
```

Bu kod Unity'nin **yeni Input System** paketini kullanıyor (`UnityEngine.InputSystem`). Eski `Input.GetKey()` yerine `Keyboard.current` üzerinden tuşlara erişiyoruz.

#### Eski vs Yeni Input Sistemi

```csharp
// ESKİ SİSTEM (Input Manager)
if (Input.GetKey(KeyCode.UpArrow))    // Çalışır ama eski

// YENİ SİSTEM (Input System Package)
if (Keyboard.current.upArrowKey.isPressed)    // Modern yaklaşım
```

| Özellik | Eski Input Manager | Yeni Input System |
|---------|:------------------:|:-----------------:|
| Gamepad desteği | Zor | ✅ Kolay |
| Dokunmatik ekran | Manuel | ✅ Otomatik |
| Birden fazla cihaz | Karmaşık | ✅ Basit |
| Tuş atama değiştirme | Kod gerekir | ✅ Asset dosyasından |

> **Neden yeni sistemi kullanıyoruz?** Projede `InputSystem_Actions.inputactions` dosyası var — bu dosya klavye, gamepad, dokunmatik ekran gibi farklı cihazların tuş eşlemelerini tek bir yerde tanımlıyor. İleride bu dosyayı doğrudan kullanarak daha esnek bir input sistemi kuracağız.

#### Input Değerleri Nasıl Çalışıyor?

```
hareket = 1   → İleri git (Yukarı ok)
hareket = -1  → Geri git (Aşağı ok)
hareket = 0   → Dur

donus = 1     → Sola dön (Sol ok)
donus = -1    → Sağa dön (Sağ ok)
donus = 0     → Dönme
```

Dikkat: `donus` değeri **sezgisel olarak ters** görünebilir. Sola dönüş `+1`, sağa dönüş `-1`. Bunun sebebi Unity'nin 2D'de **Z ekseni etrafında dönüş** yapması ve matematiksel olarak pozitif açının **saat yönünün tersine** olmasıdır.

---

### Time.deltaTime — Oyunların Gizli Kahramanı

```csharp
float hareketMiktari = hareket * hareketHizi * Time.deltaTime;
```

**Şimdi dikkatli okuyun, çünkü bu kavram oyun geliştirmenin en kritik kavramlarından biridir.**

`Time.deltaTime` nedir? **Son kare ile şu anki kare arasında geçen süre (saniye cinsinden)**. Yani bir frame'in ne kadar sürdüğü.

#### Time.deltaTime Olmadan Ne Olur?

```csharp
// ❌ YANLIŞ — Time.deltaTime olmadan
transform.Translate(0, hareket * hareketHizi, 0);
```

Bu kod, **her karede** `hareketHizi` kadar hareket eder. Problem:
- 60 FPS'de: saniyede `10 × 60 = 600` birim hareket
- 30 FPS'de: saniyede `10 × 30 = 300` birim hareket

**Aynı oyun, farklı bilgisayarlarda farklı hızda çalışır!** Güçlü bilgisayarda araç uçar, zayıf bilgisayarda sürünür.

#### Time.deltaTime İle

```csharp
// ✅ DOĞRU — Time.deltaTime ile
transform.Translate(0, hareket * hareketHizi * Time.deltaTime, 0);
```

- 60 FPS'de: `deltaTime ≈ 0.0167s` → Her karede `10 × 0.0167 = 0.167` birim
- 30 FPS'de: `deltaTime ≈ 0.0333s` → Her karede `10 × 0.0333 = 0.333` birim

Toplamda her iki durumda da **saniyede 10 birim** hareket! 🎯

> **Bunu şöyle düşünün:** Time.deltaTime olmadan yazmak, bir tarifteki malzemeleri "bir avuç un" diye ölçmek gibidir — herkesin avucu farklı büyüklükte. Time.deltaTime ise "150 gram un" diye ölçmektir — kim yaparsa yapsın sonuç aynı.

| | Time.deltaTime Yok | Time.deltaTime Var |
|--|:--:|:--:|
| 60 FPS | 600 birim/sn | 10 birim/sn |
| 30 FPS | 300 birim/sn | 10 birim/sn |
| 144 FPS | 1440 birim/sn | 10 birim/sn |
| **Sonuç** | ❌ Tutarsız | ✅ Her yerde aynı |

---

### Transform — Hareket ve Dönüş

```csharp
transform.Rotate(0, 0, donusMiktari);
transform.Translate(0, hareketMiktari, 0);
```

Her GameObject'in bir **Transform** bileşeni vardır — pozisyon, rotasyon ve ölçek bilgisini tutar.

- **`transform.Rotate(x, y, z)`**: Nesneyi eksenleri etrafında döndürür. 2D'de sadece **Z ekseni** kullanılır (ekrana dik eksen).
- **`transform.Translate(x, y, z)`**: Nesneyi **kendi yerel koordinat** sisteminde hareket ettirir. `y = hareketMiktari` olduğu için araç **kendi baktığı yöne** doğru ilerler.

> **Kritik detay:** `Translate` varsayılan olarak **yerel koordinat** (local space) kullanır. Yani araç hangi yöne bakıyorsa o yöne gider. Bu, bir araba sürmek gibidir — direksiyonu çevirdiğinizde arabanın "ileri"si değişir.

```
Dünya koordinatı (World Space):
→ Yukarı her zaman ekranın yukarısı

Yerel koordinat (Local Space):
→ Yukarı, nesnenin baktığı yön
→ Araç sola dönünce "ileri" de sola döner
```

---

## Bölüm 2: Çarpışma Sistemi — `Carp.cs`

### Tam Kaynak Kodu

```csharp
using UnityEngine;

public class Carp : MonoBehaviour
{
    private void OnCollisionEnter2D(Collision2D other)
    {
        Debug.Log("Şununla Çarpıştı: " + other.gameObject.name);
    }

    private void OnTriggerEnter2D(Collider2D other)
    {
        Debug.Log("Şununla Temas Etti: " + other.gameObject.name);
    }
}
```

Bu 15 satırlık scriptte iki farklı çarpışma yöntemi var. Aralarındaki fark **oyun tasarımının temel taşlarından biridir**.

---

### Collision vs Trigger — İki Farklı Dünya

Şunu hayal edin: kargo aracınız bir duvara çarpıyor. Ne olmalı?

**Senaryo 1 — Collision (Çarpışma):** Araç durur, geri seker, belki hasar alır. **Fiziksel temas** var.

**Senaryo 2 — Trigger (Tetikleme):** Araç bir teslimat noktasına giriyor. İçinden geçer, skor artar, paket teslim edilir. **Fiziksel engel yok**, ama bir olay tetiklenir.

```csharp
// Fiziksel çarpışma — araç durur/seker
private void OnCollisionEnter2D(Collision2D other)
{
    Debug.Log("Şununla Çarpıştı: " + other.gameObject.name);
}

// Tetikleyici bölge — araç içinden geçer
private void OnTriggerEnter2D(Collider2D other)
{
    Debug.Log("Şununla Temas Etti: " + other.gameObject.name);
}
```

| Özellik | OnCollisionEnter2D | OnTriggerEnter2D |
|---------|:------------------:|:----------------:|
| Fiziksel tepki | ✅ Çarpar, seker | ❌ İçinden geçer |
| Parametre tipi | `Collision2D` | `Collider2D` |
| Collider ayarı | `Is Trigger` = ❌ | `Is Trigger` = ✅ |
| Kullanım alanı | Duvar, engel, araç | Checkpoint, coin, teslimat noktası |
| Rigidbody gerekli mi? | ✅ En az birinde | ✅ En az birinde |

> **Dikkat!** Parametre tipleri farklı: Collision**2D** vs Collider**2D**. Bunları karıştırmak derlenme hatasına yol açar.

---

### Çarpışma İçin Gerekli Bileşenler

Unity'de çarpışma algılamanın çalışması için **iki bileşen** şarttır:

#### 1. Collider2D — "Çarpışma Sınırı"

Collider, nesnenin **fiziksel sınırını** tanımlar. Sprite'ın şekliyle aynı olmak zorunda değildir — aslında genellikle **daha basit** bir şekil kullanılır (performans için).

| Collider Tipi | Şekil | Ne Zaman Kullan? |
|---------------|-------|------------------|
| `BoxCollider2D` | Dikdörtgen | Kutular, binalar, platformlar |
| `CircleCollider2D` | Daire | Toplar, coinler, yuvarlak nesneler |
| `PolygonCollider2D` | Çokgen | Karmaşık şekiller (pahalı!) |
| `CapsuleCollider2D` | Kapsül | Karakterler |
| `EdgeCollider2D` | Çizgi | Zemin, yüzeyler |

#### 2. Rigidbody2D — "Fizik Motoru Bağlantısı"

Rigidbody, bir nesneyi **fizik motoruna** bağlar. Yerçekimi, kütle, sürtünme gibi fizik özelliklerini aktif eder.

| Body Type | Davranış | Kullanım |
|-----------|----------|----------|
| `Dynamic` | Fizikten etkilenir (yerçekimi, kuvvet) | Oyuncu, düşmanlar, toplar |
| `Kinematic` | Fizikten etkilenmez, kod ile hareket eder | Hareketli platformlar, asansörler |
| `Static` | Hiç hareket etmez | Duvarlar, zemin |

> **Projemizde:** Kargo aracının Rigidbody2D'si muhtemelen **Kinematic** olarak ayarlanmış — çünkü `transform.Translate` ile hareket ediyoruz, fizik motoruna bırakmıyoruz. Eğer `Dynamic` olsaydı, yerçekimi aracı aşağı çekerdi!

---

### Çarpışma Olaylarının Tam Ailesi

Unity'de sadece `Enter` değil, üç farklı an yakalanabilir:

```csharp
// İlk temas anı — bir kez tetiklenir
void OnCollisionEnter2D(Collision2D other) { }
void OnTriggerEnter2D(Collider2D other) { }

// Temas devam ederken — her karede tetiklenir
void OnCollisionStay2D(Collision2D other) { }
void OnTriggerStay2D(Collider2D other) { }

// Temas bittiğinde — bir kez tetiklenir
void OnCollisionExit2D(Collision2D other) { }
void OnTriggerExit2D(Collider2D other) { }
```

| Olay | Ne Zaman? | Kaç Kez? | Örnek Kullanım |
|------|-----------|----------|----------------|
| `Enter` | İlk temas anı | 1 kez | Çarpışma hasarı, coin toplama |
| `Stay` | Temas sürerken | Her kare | Zehirli bölgede sürekli hasar |
| `Exit` | Temas bitince | 1 kez | Güvenli bölgeden çıkış uyarısı |

---

## Bölüm 3: Cinemachine — Akıllı Kamera Takibi

Projede henüz bir kamera script'i yok, ama derste **Cinemachine** kavramını öğrendik. Cinemachine nedir?

Normal bir kamerayı düşünün: aracı takip etmesi için her karede kameranın pozisyonunu güncellemeniz gerekir:

```csharp
// ❌ Manuel kamera takibi — sert ve rahatsız edici
void LateUpdate()
{
    transform.position = new Vector3(
        hedef.position.x, 
        hedef.position.y, 
        -10f
    );
}
```

**Cinemachine** ise Unity'nin **profesyonel kamera sistemidir**. Tek yapmanız gereken:

1. `Cinemachine` paketini yükleyin (Package Manager)
2. Sahneye bir **CinemachineCamera** ekleyin (eski versiyonda Virtual Camera)
3. `Follow` alanına kargo aracını sürükleyin
4. **Bitti!** Kamera aracı yumuşak geçişlerle takip eder.

### Cinemachine'in Süper Güçleri

| Özellik | Manuel Kamera | Cinemachine |
|---------|:---:|:---:|
| Yumuşak takip (damping) | Kod yazmalı | ✅ Otomatik |
| Ekran sınırları (dead zone) | Çok kod | ✅ Slider ile ayarla |
| Kamera sarsıntısı (shake) | Karmaşık | ✅ Noise profili seç |
| Birden fazla kamera arası geçiş | Çok zor | ✅ Priority ile otomatik |
| Zoom in/out | Manuel | ✅ Lens ayarı |

> **Dead Zone nedir?** Oyuncu küçük hareketler yaptığında kameranın onu takip etmemesi gereken bölge. Dead zone olmadan kamera her mikro harekette titrer ve oyuncu mide bulanır. Cinemachine bunu bir kaydırıcıyla ayarlamanıza izin verir.

### Unity 6 Farkı: CinemachineCamera

Unity 6 ve Cinemachine 3.x ile birlikte isimlendirme değişti:

| Eski (Cinemachine 2.x) | Yeni (Cinemachine 3.x) |
|-------------------------|------------------------|
| `CinemachineVirtualCamera` | `CinemachineCamera` |
| `CinemachineBrain` | Otomatik (Main Camera'da) |
| `Follow` + `LookAt` ayrı | `Tracking Target` birleşik |

---

## Bölüm 4: Büyük Resim — Bileşenler Nasıl Birlikte Çalışıyor?

```
┌─────────────────────────────────────────────┐
│              OYUN DÖNGÜSÜ (Her Kare)        │
│                                             │
│  1. INPUT   → Keyboard.current okunur       │
│       ↓                                     │
│  2. UPDATE  → Surucu.cs hareket hesaplar    │
│       ↓       (Time.deltaTime ile)          │
│       ↓                                     │
│  3. FİZİK   → Collider'lar kontrol edilir   │
│       ↓       OnCollision / OnTrigger       │
│       ↓                                     │
│  4. KAMERA  → Cinemachine aracı takip eder  │
│       ↓                                     │
│  5. RENDER  → Ekrana çizilir                │
└─────────────────────────────────────────────┘
```

Her şey bu döngüde gerçekleşir. **Saniyede 60 kez.** Ve oyuncu bunun hiçbirini fark etmez — sadece sorunsuz çalışan bir oyun görür. İşte oyun programlamanın güzelliği budur.

---

## Özet Tablosu — Bu Derste Öğrendiklerimiz

| Kavram | Ne İşe Yarar | Anahtar Bilgi |
|--------|-------------|---------------|
| `[SerializeField]` | Inspector'dan değer ayarla | `public` yerine güvenli alternatif |
| `Keyboard.current` | Yeni Input System ile tuş okuma | `isPressed`, `wasPressedThisFrame` |
| `Time.deltaTime` | Kare bağımsız hareket | Her cihazda aynı hız |
| `transform.Translate` | Yerel koordinatta hareket | Nesnenin baktığı yöne gider |
| `transform.Rotate` | Z ekseni etrafında dönüş | 2D'de sadece Z kullanılır |
| `OnCollisionEnter2D` | Fiziksel çarpışma | Nesne durur/seker |
| `OnTriggerEnter2D` | Tetikleyici bölge | Nesne içinden geçer |
| `Collider2D` | Çarpışma sınırı | Box, Circle, Polygon... |
| `Rigidbody2D` | Fizik motoru bağlantısı | Dynamic, Kinematic, Static |
| `Cinemachine` | Profesyonel kamera takibi | Dead zone, damping, shake |

---

## Gelecek Hafta

Kargo aracımız şu an hareket edebiliyor ve çarpışmaları algılayabiliyor. Ama bir kargo aracının asıl işi ne? **Teslimat yapmak!** Gelecek hafta:

- Teslimat noktaları ve paket toplama sistemi
- Skor mekanizması
- UI ile teslimat durumu gösterimi

Kargo aracımız artık sadece sürmüyor — **iş yapıyor** olacak. 📦
