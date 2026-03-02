---
layout: post
title: "Unity Script'lere Giriş: Start ve Update Metotlarını Gerçekten Anlamak"
date: 2026-03-02
categories: oyun-programlama
---

Unity'de oyunun kalbi sahnede değil, **script akışında** atar. Bir objeye script eklediğin anda artık o objenin bir yaşam döngüsü vardır. Bu döngünün iki temel taşı: **Start()** ve **Update()**.

Bu derste sadece "Start bir kez, Update sürekli" demeyeceğiz. Verdiğin script üzerinden:

- satır satır çözümleme,
- çalışma zamanında ne olduğunu gözünde canlandırma,
- performans ve doğru kullanım prensipleri,
- gerçek proje refleksi

hepsini netleştireceğiz.

## 1) Script Nedir, Neden MonoBehaviour'dan Türetiriz?

Unity'de C# scriptleri çoğunlukla `MonoBehaviour` sınıfından türetilir:

```csharp
using UnityEngine;
public class StartVeUpdateFarki : MonoBehaviour
{
    // ...
}
```

Bunun anlamı:

- Bu script bir `GameObject` üzerine bileşen (component) olarak eklenebilir.
- Unity, bu sınıf içindeki özel yaşam döngüsü metotlarını (Start, Update, Awake vb.) otomatik çağırır.
- Sen manuel olarak `Start()` çağırmazsın; Unity çağırır.

## 2) Start ve Update’in Temel Farkı

### Start()

- Script **etkinleştiğinde**, `Update` başlamadan hemen önce,
- **yalnızca bir kez** çalışır.

Kullanım amacı:

- Başlangıç değerleri atamak
- Referansları almak (`GetComponent`, `FindObjectOfType` vb.)
- Oyuna başlarken bir kere yapılacak işler

### Update()

- Oyun çalıştığı sürece,
- **her frame** çağrılır.

Kullanım amacı:

- Sürekli kontrol gerektiren mantık
- Oyuncu input'u
- Hareket, takip, animasyon tetikleme
- Frame bazlı sayaç/izleme

> Kısacası: **Start = kurulum**, **Update = sürekli çalışma alanı**.

## 3) Verilen Script (Düzenli Hali)

```csharp
using UnityEngine;

public class StartVeUpdateFarki : MonoBehaviour
{
    private int frameSayaci = 0;

    // Start metodu, scriptin etkinleştirildiği ilk frame'den hemen önce,
    // Update metodu çalışmaya başlamadan bir kereye mahsus çağrılır.
    // Genellikle başlangıç ayarlarını, değişkenlere ilk değer atamalarını
    // veya oyun başladığında bir kerelik yapılacak işlemleri burada yaparız.
    void Start()
    {
        // Konsola sadece bir kez mesaj yazdırır.
        Debug.Log("Start metodu çalıştı! Bu mesajı sadece bir kere göreceksiniz.");
    }

    // Update metodu, oyunun her bir frame'inde çağrılır.
    // Oyun mantığı, kullanıcı girdisi, karakter hareketleri gibi
    // sürekli güncellenmesi gereken işlemler burada yer alır.
    void Update()
    {
        // Her frame'de sayaç değerini bir artırır.
        frameSayaci++;

        // O anki frame sayısını konsola yazdırır.
        Debug.Log("Update metodu çalışıyor. Frame: " + frameSayaci);
    }
}
```

## 4) Satır Satır Açıklama

### `using UnityEngine;`

Unity API'sine erişim sağlar. `MonoBehaviour`, `Debug.Log`, `Transform` gibi sınıfları kullanabilirsin.

### `public class StartVeUpdateFarki : MonoBehaviour`

Sınıfın Unity yaşam döngüsüne katıldığını bildirir.

### `private int frameSayaci = 0;`

- Sadece bu sınıf içinde erişilen bir sayaç değişkeni.
- Oyun başında 0 ile başlıyor.
- `Update` içinde artacağı için frame sayısını gözlemleyeceğiz.

### `void Start()`

Unity bu metodu sadece bir kere çağırır (script aktifse).

### `Debug.Log("Start metodu çalıştı! ...")`

Console penceresine tek seferlik bir mesaj düşer. Bu, Start'ın bir kez çalıştığının canlı kanıtıdır.

### `void Update()`

Oyun döngüsünde her karede çağrılır.

### `frameSayaci++;`

Her frame'de 1 artış. Örnek: 60 FPS’de 1 saniyede yaklaşık 60 artar.

### `Debug.Log("Update metodu çalışıyor. Frame: " + frameSayaci);`

Her frame log basar; bu yüzden konsol çok hızlı akar.

## 5) Unity Çalışma Sırası (Bu Script Özelinde)

Sahneyi çalıştırdığında tipik akış:

1. Script yüklenir.
2. `Start()` bir kez çağrılır → tek log
3. Her frame `Update()` çağrılır → art arda loglar

Örnek Console akışı:

```text
Start metodu çalıştı! Bu mesajı sadece bir kere göreceksiniz.
Update metodu çalışıyor. Frame: 1
Update metodu çalışıyor. Frame: 2
Update metodu çalışıyor. Frame: 3
...
```

## 6) Neden Bu Örnek Pedagojik Olarak Güçlü?

Bu script, öğrencinin en kritik zihinsel modeli kurmasını sağlar:

- Unity zamanla akar.
- Bazı işler tek seferliktir (başlatma).
- Bazı işler sürekli akar (oyun döngüsü).

Bu modeli kurmadan hareket sistemi, input sistemi, AI davranışı doğru oturmaz.

## 7) Gerçek Projede Nerede Start, Nerede Update?

### Start'a yaz

- Başlangıç can değeri belirleme
- Silah referansı alma
- UI öğesi bağlama
- Oyun başladığında bir kez müzik başlatma

### Update'e yaz

- `Input.GetKey` kontrolleri
- Karakteri frame frame hareket ettirme
- Kamera takip güncellemesi
- Zamanla değişen durumlar

## 8) Çok Kritik Performans Uyarısı

`Update()` içine ağır işler koymak oyunu kasar.

Özellikle şunları her frame yapma:

- Gereksiz `Debug.Log`
- Sürekli `Find` çağrıları
- Büyük döngüler
- Pahalı hesaplamalar

Bu dersteki örnekte `Debug.Log` eğitim amaçlıdır. Gerçek projede log'u azaltmalısın.

## 9) FPS'e Bağlılık ve Delta Time

`Update()` frame'e bağlı çalıştığı için farklı cihazlarda çağrılma sayısı değişir.

Hareket gibi işlemlerde cihaz bağımsız davranış için:

```csharp
transform.Translate(Vector3.right * hiz * Time.deltaTime);
```

- `Time.deltaTime`: bir frame'in kaç saniye sürdüğü
- Böylece düşük FPS / yüksek FPS farkı azalır

## 10) Scripti Bir Adım İleri Taşıyalım

Aynı örneği daha kontrollü loglama ile iyileştirebiliriz:

```csharp
using UnityEngine;

public class StartVeUpdateFarki : MonoBehaviour
{
    private int frameSayaci = 0;

    void Start()
    {
        Debug.Log("Start çalıştı: Başlangıç kurulumları tamam.");
    }

    void Update()
    {
        frameSayaci++;

        // Her frame değil, her 60 frame'de bir log
        if (frameSayaci % 60 == 0)
        {
            Debug.Log("Update devam ediyor. Frame: " + frameSayaci);
        }
    }
}
```

Bu sürüm, hem öğretici hem performans açısından daha temizdir.

## 11) Sık Yapılan Hatalar

1. Start içinde sürekli kontrol yazmak
2. Update içinde başlangıç kurulumunu tekrar tekrar yapmak
3. `Time.deltaTime` kullanmadan hareket yazmak
4. Her frame yoğun log atıp performansı bozmak

## 12) Mini Uygulama Görevi

Aşağıdaki adımlarla kendi testini yap:

1. Boş bir GameObject oluştur (`ScriptTest`)
2. Bu scripti ekle
3. Play'e bas
4. Console'da Start mesajının bir kez, Update mesajlarının sürekli geldiğini gözlemle
5. Sonra `Update` içinde her 120 frame'de bir log basacak şekilde kodu düzenle

Ek görev:

- `float gecenSure` değişkeni ekle
- `gecenSure += Time.deltaTime;`
- Her 1 saniyede bir log at

## Kapanış

Start ve Update farkını gerçekten kavradığında Unity artık "sihirli" değil, **öngörülebilir bir sistem** olur. Oyun programlamada fark yaratan nokta da tam burasıdır: motorun yaşam döngüsünü ezberlemek değil, **davranışını modelleyebilmek**.

Sonraki derste bu temeli `FixedUpdate`, `LateUpdate` ve fizik güncellemeleriyle birleştirip profesyonel oyun döngüsü disiplinine taşıyacağız.
