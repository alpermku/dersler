---
layout: post
title: "Genel Kültür: Yazılımcının Hayatta Kalma Rehberi"
date: 2026-03-09
categories: genel-kultur
---

Teknik bilgi sizi işe alır. Genel kültür sizi **orada tutar**.

Bu bölümde ders müfredatının dışında kalan ama yazılım dünyasında işinize yarayacak her şeyi paylaşacağız: araçlar, ipuçları, kariyer tavsiyeleri, sektör gerçekleri ve "keşke bunu daha önce bilseydim" dedirtecek bilgiler.

---

## Bu Bölümde Neler Olacak?

### 🛠️ Araçlar ve Ortamlar
- Git & GitHub kullanımı (sadece `commit-push` değil, gerçek workflow)
- IDE kısayolları ve verimlilik hileleri
- Terminal kullanımı ve temel komutlar
- Markdown ile dokümantasyon yazma

### 💼 Kariyer ve Sektör
- Staj bulma stratejileri
- CV ve portföy hazırlama
- Teknik mülakat süreçleri
- Freelance vs. kurumsal çalışma

### 🧠 Düşünme Biçimleri
- Problem çözme yaklaşımları
- Algoritmik düşünce günlük hayatta
- Debugging zihniyeti: hata aramak bir yaşam becerisidir
- Rubber duck debugging ve diğer garip ama işe yarayan teknikler

### 🌍 Yazılım Kültürü
- Açık kaynak dünyası ve katkı yapma
- Stack Overflow kültürü ve doğru soru sorma sanatı
- Hackathon'lar ve topluluk etkinlikleri
- Yazılımda etik ve sorumluluk

### 📚 Öğrenme Kaynakları
- Ücretsiz kurs platformları
- Takip edilmesi gereken YouTube kanalları ve bloglar
- Kitap önerileri (teknik + teknik olmayan)
- Podcast ve bülten önerileri

---

## İlk İpucu: "Öğrenmeyi Öğrenin"

Üniversitede size bir programlama dili öğretiliyor. Ama gerçek dünyada **6 ayda bir yeni bir şey öğrenmeniz** gerekecek. Framework değişecek, dil güncellenecek, paradigma kayacak. Bu yüzden en önemli beceri herhangi bir dil veya araç değil — **öğrenmeyi öğrenmektir**.

### Feynman Tekniği

Nobel ödüllü fizikçi Richard Feynman'ın öğrenme yöntemi 4 adımdan oluşur:

1. **Bir konu seçin** — mesela "Java'da polymorphism"
2. **Bir çocuğa anlatır gibi yazın** — jargon yok, basit kelimeler
3. **Takıldığınız yeri bulun** — anlatamadığınız kısım, anlamadığınız kısımdır
4. **Kaynağa dönün ve sadeleştirin** — tekrar okuyun, tekrar yazın, tekrar anlatın

> Eğer bir şeyi basitçe açıklayamıyorsanız, onu yeterince anlamamışsınız demektir. — Richard Feynman

### Aktif Öğrenme vs. Pasif Öğrenme

| Pasif (Düşük Etki) | Aktif (Yüksek Etki) |
|---------------------|---------------------|
| Video izlemek | Kodu elinizle yazmak |
| Slayt okumak | Kendi notlarınızı oluşturmak |
| Çözülmüş örneğe bakmak | Çözümü kapatıp kendiniz denemek |
| "Anladım" demek | Birine anlatmak |

Araştırmalar, **aktif öğrenmenin bilgi tutma oranını %50-90** aralığına çıkardığını gösteriyor. Pasif öğrenme %5-30 aralığında kalıyor.

### Pomodoro Tekniği

Uzun saatler çalışmak yerine:

- **25 dakika** odaklanarak çalış
- **5 dakika** mola ver (gerçekten mola — ekrandan kalk)
- Her 4 pomodoro'dan sonra **15-30 dakika** uzun mola

Bu teknik özellikle kodlama ve algoritma çalışırken çok etkili. Beyin sürekli tam güçte çalışamaz — düzenli molalar hem odağı hem yaratıcılığı artırır.

---

## İkinci İpucu: Google'ı Kullanmayı Bilin

Ciddi söylüyorum. Yazılımcıların %90'ı aynı şeyleri arar. Fark, **nasıl aradığınızdadır**.

### Kötü Arama
```
java hata
```

### İyi Arama
```
java NullPointerException ArrayList get index
```

### Profesyonel Arama
```
java.lang.NullPointerException at ArrayList.get site:stackoverflow.com
```

### Google Arama Operatörleri

| Operatör | Ne Yapar | Örnek |
|----------|----------|-------|
| `"..."` | Tam eşleşme arar | `"cannot resolve symbol"` |
| `site:` | Belirli bir sitede arar | `site:stackoverflow.com java stream` |
| `-` | Sonuçtan çıkarır | `java list -ArrayList` |
| `filetype:` | Dosya tipine göre arar | `java cheat sheet filetype:pdf` |
| `after:` | Belirli tarihten sonra | `java 21 features after:2024` |

> Bu operatörleri öğrenmek, yazılım kariyerinizde onlarca saat kazandırır. Şaka değil.

---

## Üçüncü İpucu: Hata Mesajlarını Okuyun

Bu kulağa bariz geliyor ama çoğu öğrenci hata mesajını **okumadan** "çalışmıyor hocam" der. Hata mesajı düşmanınız değil — en iyi arkadaşınız.

### Bir Java Hata Mesajını Okuma

```
Exception in thread "main" java.lang.ArrayIndexOutOfBoundsException: Index 5 out of bounds for length 5
    at Test.main(Test.java:8)
```

Bu mesaj size **her şeyi** söylüyor:

| Parça | Anlam |
|-------|-------|
| `ArrayIndexOutOfBoundsException` | Dizi sınır aşımı hatası |
| `Index 5` | 5. indekse erişmeye çalıştınız |
| `out of bounds for length 5` | Ama dizi uzunluğu 5 (geçerli indeksler: 0-4) |
| `Test.java:8` | Hata 8. satırda oluştu |

**Hata mesajını okuyan kişi, sorunu genellikle 30 saniyede çözer. Okumayan kişi 30 dakika harcar.**

---

## Sırada Ne Var?

Bu bölüm canlı bir bölümdür — düzenli olarak yeni içerikler eklenecek. Aklınıza takılan, merak ettiğiniz veya "keşke bunu biri anlatsaydı" dediğiniz konuları iletebilirsiniz.

Bir sonraki gönderide: **Git ve GitHub — Sıfırdan Gerçek Dünya Kullanımına**.

> "Bir yazılımcının en değerli becerisi kod yazmak değil, **ne zaman durup düşüneceğini** bilmektir."
