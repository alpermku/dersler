---
layout: post
title: "Hafta 2 — Süreç Modelleri ve Yaklaşımlar (Waterfall, V-Model, Prototipleme, Agile, Scrum, Kanban)"
date: 2026-03-03
categories: sistem-analizi-ve-tasarimi
---

Bu derste yazılım süreç modellerinin **neden ortaya çıktığını**, hangi bağlamda **hangisinin doğru tercih** olduğunu ve proje yönetiminde bu modellerin nasıl somut kararlar doğurduğunu ele alıyoruz.

Ayrıca derste kullanılan kaynak dokümanı indirilebilir olarak ekledim:

- [Hafta 2 Kaynak Dokümanı (DOCX)]({{ '/assets/files/sistem-analizi/hafta-2/sistem-analizi-hafta-2-surec-modelleri-ve-yaklasimlar.docx' | relative_url }})

---

## Bu Bölümde Neler Öğreneceksiniz?

- Yazılım süreç modellerinin tarihsel gelişimini
- Waterfall modelinin güçlü ve zayıf yönlerini
- V-Model’de geliştirme-test eşleşmesinin mantığını
- Prototipleme yaklaşımının doğru kullanımını
- Agile felsefesinin temel değerlerini
- Scrum ve Kanban’ın pratik farklarını
- Kendi projeniz için model seçme kriterlerini

---

## 2.1 Süreç Modellerinin Tarihi: Kaos’tan Mühendisliğe

1960’larda yazılım geliştirme büyük ölçüde plansız, belgeye dayanmayan bir pratikti. Projeler büyüdükçe “yazılım krizi” ortaya çıktı: projeler zamanında bitmiyor, bütçeyi aşıyor, beklentiyi karşılamıyordu.

1968 NATO Konferansı’nda bu durum “software crisis” olarak isimlendirildi. Sonuç netti: yazılım işi, deneme-yanılma yerine **mühendislik disiplini** ile yürütülmeliydi.

Süreç modelleri bu ihtiyacın ürünüdür:

- Belirsizliği azaltmak
- Planlamayı güçlendirmek
- Kaliteyi sistematik hale getirmek
- Riskleri erken görmek

---

## 2.2 Waterfall (Şelale) Modeli

### Temel mantık

Aşamalar sıralıdır; bir aşama tamamlanmadan sonrakine geçilmez.

1. Gereksinim Analizi
2. Sistem Tasarımı
3. Ayrıntılı Tasarım
4. Kodlama
5. Test
6. Dağıtım
7. Bakım

### Avantajlar

- Planı ve takvimi anlatması kolaydır.
- Dokümantasyon disiplini yüksektir.
- Regülasyon gerektiren projelerde izlenebilirlik sağlar.

### Dezavantajlar

- Gereksinimler başta tam net değilse hızla kırılır.
- Değişiklik maliyeti yüksektir.
- Kullanıcı çalışan ürünü geç görür.

### Ne zaman uygundur?

- Gereksinimler çok netse
- Değişiklik ihtimali düşükse
- Sözleşme ve uyumluluk (compliance) kritikse

**Örnek:** Medikal cihaz yazılımı, savunma projeleri, kamu ihale projeleri.

---

## 2.3 V-Model

V-Model, Waterfall’ın test boyutu güçlendirilmiş halidir.

Ana fikir:

- Sol kolda geliştirme adımları
- Sağ kolda bu adımların test karşılıkları

| Geliştirme (Sol Kol) | Test (Sağ Kol) |
|---|---|
| Gereksinim Analizi | Kabul Testi (UAT) |
| Sistem Tasarımı | Sistem Testi |
| Mimari Tasarım | Entegrasyon Testi |
| Modül Tasarımı | Birim Testi |
| Kodlama | V’nin tabanı |

### Neden önemli?

V-Model şunu öğretir: **Test sona bırakılmaz, baştan tasarlanır.**

Bu yaklaşım özellikle hata maliyetinin yüksek olduğu projelerde kritik avantaj sağlar.

---

## 2.4 Prototipleme Modeli

Gereksinimler bulanıksa kullanıcıya erken örnek göstermek en akıllı adımdır.

### Prototip türleri

1. **Throw-away (Atılabilir):** Sadece ihtiyaç keşfi için üretilir, çöpe atılır.
2. **Evolutionary (Evrimsel):** Her iterasyonda gelişir, ürüne dönüşür.
3. **Horizontal:** Sistemin geniş görünümü (arayüz akışı gibi).
4. **Vertical:** Tek özelliğin uçtan uca derin gösterimi.

### Güçlü tarafı

- Kullanıcı “ne istediğini” daha net ifade eder.

### Tehlike

- “Prototip tamam, ürün bitti” yanılgısı.

Bunu önlemek için her prototipte etiketi net koyun:

- Bu bir kavram doğrulama mı?
- Bu üretime taşınacak çekirdek mi?

---

## 2.5 Agile Felsefe

2001 Agile Manifesto ile yazılım dünyası süreç merkezinden değer merkezine kaydı.

Öne çıkan değerler:

- Süreç ve araçlardan çok bireyler ve etkileşim
- Kapsamlı dokümandan çok çalışan yazılım
- Sözleşme pazarlığından çok müşteri iş birliği
- Plana kör bağlılıktan çok değişime yanıt

Agile “plansızlık” değildir. Agile, planı kısa döngülerle yaşayan bir yapıya dönüştürür.

---

## 2.6 Scrum ve Kanban: Aynı Değil

### Scrum

- Sprint tabanlıdır (genelde 2 hafta)
- Roller nettir: Product Owner, Scrum Master, Development Team
- Törenler vardır: Sprint Planning, Daily Scrum, Review, Retrospective

### Kanban

- Akış tabanlıdır (sabit sprint zorunlu değil)
- Görselleştirme güçlüdür (To Do / In Progress / Done)
- WIP (Work In Progress) limiti ile darboğaz yönetir

### Hızlı kıyas

| Durum | Tercih |
|---|---|
| Düzenli sprint ritmi isteniyorsa | Scrum |
| Sürekli iş akışı varsa | Kanban |
| Karma yaklaşım gerekiyorsa | Scrumban |

---

## 2.7 İteratif ve Artımlı Geliştirme

- **İteratif:** Aynı özelliği tekrarlı döngülerle iyileştirme
- **Artımlı:** Ürüne parça parça yeni fonksiyon ekleme

Gerçek projelerde çoğu takım bu ikisini birlikte kullanır:

- İlk sürüm: temel kayıt/giriş
- Sonraki sürüm: bildirim
- Sonraki sürüm: raporlama

Her artım geri bildirimle iteratif olarak güçlenir.

---

## 2.8 Hangi Projeye Hangi Model?

Model seçimi bir “moda” değil, **bağlam kararıdır**.

Aşağıdaki soruları sorun:

1. Gereksinimler ne kadar net?
2. Değişim sıklığı yüksek mi?
3. Regülasyon baskısı var mı?
4. Kullanıcı geri bildirimi erken alınmalı mı?
5. Ekip tecrübesi hangi yöntemde güçlü?
6. Teslim tarihi ne kadar esnek?

### Hızlı karar rehberi

- Net gereksinim + düşük değişim + ağır dokümantasyon: **Waterfall / V-Model**
- Belirsiz ihtiyaç + yoğun kullanıcı geri bildirimi: **Prototipleme + Agile**
- Hızlı teslim + ürün evrimi: **Agile (Scrum/Kanban)**

---

## 2.9 Hafta 2 Uygulama Çalışması (Öğrenci Görevi)

Dönem projeniz için 1 sayfalık “Süreç Modeli Seçim Notu” hazırlayın.

### İçermesi gerekenler

- Proje adı
- Seçilen süreç modeli (veya hibrit model)
- Neden bu model?
- Beklenen riskler
- Risk azaltma stratejisi
- 2 haftalık örnek mini plan

### Değerlendirme ölçütü

- Model seçimi gerekçesi güçlü mü?
- Projenin gerçekliğiyle uyumlu mu?
- Riskleri görmüş mü?
- Plan uygulanabilir mi?

---

## 2.10 Sık Yanlışlar

- Agile’ı “plansız çalışmak” sanmak
- Waterfall’ı “eski olduğu için kötü” diye etiketlemek
- Prototipi gerçek ürün sanmak
- Testi geliştirme bittiğinde başlatmak
- Model seçimini ekip yetkinliğinden bağımsız yapmak

---

## Sonuç

Doğru süreç modeli, projeyi uçurur; yanlış model, en iyi ekibi bile yorar.

Bu haftanın özeti tek cümle:

> “Model, projeye uymalı; proje modele zorla uydurulmamalı.”

Hafta 3’te bu temeli gereksinim analizi teknikleriyle birleştirip proje kararlarınızı daha ölçülebilir hale getireceğiz.
