---
layout: post
title: "Süreç Modelleri ve Yaklaşımlar (Waterfall, V-Model, Prototipleme, Agile, Scrum, Kanban)"
date: 2026-03-03
categories: sistem-analizi-ve-tasarimi
---

Yazılım projeleri iki şekilde batar: **ya hiç plan yoktur**, ya da plan gerçeğe hiç dokunmuyordur.

Süreç modelleri, işte bu iki uçurumun arasına kurulan köprüdür. Bu derste modelleri ezberlemek için değil, **doğru bağlamda doğru modeli seçebilmek** için inceleyeceğiz.

> “The major fallacy is that software development is a purely technical activity.”  
> — Barry W. Boehm

Yani mesele sadece kod değil; belirsizlik, insan, iletişim, risk ve karar yönetimi.

---

## Bu Bölümde Ne Kazanacaksınız?

Bu dersin sonunda:

- Süreç modellerinin tarihsel nedenlerini anlayacaksınız.
- Waterfall ve V-Model’in nerede güçlü kaldığını net göreceksiniz.
- Prototiplemenin doğru/yanlış kullanımını ayırabileceksiniz.
- Agile değerlerini “slogan” değil “işletim sistemi” olarak okuyacaksınız.
- Scrum ile Kanban’ı araç düzeyinde değil, yönetim felsefesi düzeyinde kıyaslayacaksınız.
- Kendi dönem projeniz için model seçim kararı üretebileceksiniz.

---

## 1) Neden Süreç Modeli Diye Bir Şey Var?

1960’ların sonunda yazılım projeleri büyüdükçe klasik sorunlar patladı:

- geciken teslimler,
- şişen bütçeler,
- testte yakalanan kritik hatalar,
- kullanıcı beklentisi ile ürünün uyuşmaması.

Bu durum, 1968 NATO Konferansı’nda “software crisis” olarak adlandırıldı.

Buradaki temel ders şuydu:

> Yazılım üretimi, bireysel “usta işi”nden kurumsal “mühendislik disiplini”ne geçmek zorundadır.

Süreç modelleri tam olarak bunun için doğdu:

- Tahmin edilebilirlik
- İzlenebilirlik
- Kalite güvence
- Risk azaltma

---

## 2) Waterfall (Şelale) Modeli

### 2.1 Mantık

Aşamalar lineer ilerler:

1. Gereksinim Analizi
2. Sistem Tasarımı
3. Ayrıntılı Tasarım
4. Geliştirme (Kodlama)
5. Test
6. Dağıtım
7. Bakım

Bir aşamanın çıktısı, bir sonrakinin girdisidir.

### 2.2 Nerede işe yarar?

- Gereksinimler baştan netse
- Değişim maliyeti çok yüksekse
- Ağır dokümantasyon/regülasyon gerekiyorsa

Örnek alanlar: savunma, medikal, havacılık, kamu ihale projeleri.

### 2.3 Güçlü yönler

- Yönetmesi ve raporlaması kolaydır.
- Kilometre taşları (milestone) nettir.
- Sözleşmeye bağlanabilir yapı sağlar.

### 2.4 Zayıf yönler

- Erken gereksinim hatası, geç aşamada pahalı patlar.
- Değişime dirençlidir.
- Kullanıcı çalışan ürünü geç görür.

> “A primary source of difficulty is that the customer does not know what he wants.”  
> — Fred Brooks, *The Mythical Man-Month*

Waterfall’ın en büyük kırılganlığı tam burada: müşteri başta her şeyi net anlatamıyorsa model zorlanır.

---

## 3) V-Model

V-Model, Waterfall’ın test disiplinini kuvvetlendiren versiyonudur.

Temel fikir: Her geliştirme adımının bir test karşılığı olmalı.

| Geliştirme | Doğrulama/Test |
|---|---|
| Gereksinim Analizi | Kabul Testi (UAT) |
| Sistem Tasarımı | Sistem Testi |
| Mimari Tasarım | Entegrasyon Testi |
| Modül Tasarımı | Birim Testi |
| Kodlama | V tabanı |

### Kritik katkısı

Testi sona bırakmaz, baştan planlar.

Bu yaklaşım şu iki kavramı güçlendirir:

- **Verification:** “Doğru ürünü mü geliştiriyoruz?”
- **Validation:** “Geliştirdiğimiz ürün doğru mu çalışıyor?”

### Nerede çok iyi?

- İzlenebilir test gerektiren projelerde
- Gereksinim-test matrisi çıkarılması gereken ortamlarda

---

## 4) Prototipleme Modeli

Gereksinimler sisliyse yapılacak en iyi şey: **göster, konuş, düzelt**.

### 4.1 Prototip türleri

- **Throw-away prototip:** Keşif için üretilir, ürün olmaz.
- **Evolutionary prototip:** Evrilerek gerçek ürüne dönüşür.
- **Horizontal prototip:** Arayüz akışını genişçe gösterir.
- **Vertical prototip:** Belirli bir özelliği uçtan uca çalıştırır.

### 4.2 Gücü

- Kullanıcı geri bildirimi erken alınır.
- Yanlış gereksinimlerin erken fark edilmesini sağlar.

### 4.3 Tuzağı

Prototip teknik borçla üretildiyse, onu direkt ürüne çevirmek kaliteyi gömer.

Kural net:

- Prototipin amacı belgelenmeli
- “Atılabilir mi, evrimsel mi?” en başta yazılmalı

---

## 5) Agile Felsefesi

Agile, “plansızlık” değil; planı kısa çevrimlerle sürekli güncelleyebilen bir çalışma biçimidir.

2001 Agile Manifesto’nun özü:

- Bireyler ve etkileşimler
- Çalışan yazılım
- Müşteri iş birliği
- Değişime yanıt

> “Responding to change over following a plan.”  
> — Agile Manifesto

Bu cümle “plan yapma” demiyor; “planı putlaştırma” diyor.

### Agile’ın omurgası

- kısa teslim döngüleri,
- sürekli geri bildirim,
- teknik kalite disiplini,
- görünür iş akışı.

---

## 6) Scrum: Zaman Kutulu Çevik Yönetim

Scrum, çerçevedir; metodoloji kitabı değildir.

### Roller

- **Product Owner:** İş değerini ve önceliği yönetir.
- **Scrum Master:** Takımın akışını korur, engelleri kaldırır.
- **Geliştirme Ekibi:** Teslimatı üretir.

### Olaylar

- Sprint Planning
- Daily Scrum
- Sprint Review
- Sprint Retrospective

### Artefaktlar

- Product Backlog
- Sprint Backlog
- Increment

### Ne zaman iyi çalışır?

- Ürün yönü gelişerek netleşiyorsa
- Takım ritmik teslimata uygunsa
- İş değerini adım adım ölçmek isteniyorsa

---

## 7) Kanban: Akış Odaklı Yönetim

Kanban’ın ana sorusu: “İş akışımız nerede tıkanıyor?”

### Ana prensipler

- İşi görselleştir
- WIP (eşzamanlı iş) limit koy
- Akışı ölç
- Sürekli iyileştir

### Ne zaman güçlü?

- Destek/operasyon takımlarında
- Sürekli gelen iş trafiğinde
- Sprint ritmine uymayan ortamlarda

> “Stop starting, start finishing.”  
> — Kanban topluluklarında yaygın ilke

Bu ilke, üretkenlik yanılsamasını kırar: Çok işe başlamak değil, işi bitirmek değer üretir.

---

## 8) Scrum vs Kanban — Pratik Karar

| Kriter | Scrum | Kanban |
|---|---|---|
| Zaman yapısı | Sprint (sabit periyot) | Sürekli akış |
| Planlama | Sprint başında yoğun | Sürekli öncelik güncelleme |
| Değişiklik yönetimi | Sprint içinde sınırlı | Daha esnek |
| Ölçüm | Velocity, sprint hedefi | Cycle time, throughput |
| Uygun senaryo | Ürün geliştirme | Operasyon + bakım + destek |

Hibrit gerekirse: **Scrumban**.

---

## 9) İteratif ve Artımlı Geliştirme (Karıştırılan İkili)

- **İteratif:** Aynı çözümü tekrar tekrar iyileştirmek
- **Artımlı:** Ürünü parça parça büyütmek

Modern ürün geliştirmede ikisi birlikte kullanılır:

- Artım: “Bildirim modülü eklendi”
- İterasyon: “Bildirim modülü 3 tur geri bildirimle iyileştirildi”

---

## 10) Model Seçimi İçin Karar Matrisi

Aşağıdaki sorulara dürüst cevap verin:

1. Gereksinimler net mi, sisli mi?
2. Değişim hızı ne kadar yüksek?
3. Hata maliyeti ne kadar ağır?
4. Regülasyon ve denetim seviyesi nedir?
5. Kullanıcı geri bildirimi ne sıklıkta alınacak?
6. Ekip deneyimi hangi modelde güçlü?
7. Teslim baskısı ve tarih esnekliği ne durumda?

### Hızlı seçim

- **Net gereksinim + yüksek uyumluluk ihtiyacı:** Waterfall / V-Model
- **Belirsiz ihtiyaç + yoğun kullanıcı etkileşimi:** Prototipleme + Agile
- **Sürekli akışlı bakım/operasyon:** Kanban
- **Ürün odaklı çevik teslimat:** Scrum

---

## 11) Mini Vaka: Üniversite Kulüp Etkinlik Sistemi

### Senaryo

- Gereksinimler başlangıçta kısmen belirsiz
- Kullanıcı geri bildirimi önemli (öğrenci/akademisyen)
- Dönem içinde çalışan sürüm isteniyor

### Uygun yaklaşım

- Başlangıçta **Horizontal prototip** (ekran akışı)
- Sonra **Scrum ile 2 haftalık sprintler**
- Destek taleplerinde **Kanban panosu**

Bu hibrit yaklaşım, hem keşif hem teslimat hem bakım dengesini kurar.

---

## 12) Öğrenciler İçin Uygulama Görevi

Dönem projeniz için “Süreç Modeli Seçim Raporu” hazırlayın (1–2 sayfa):

- Proje adı ve kısa bağlam
- Seçtiğiniz model (tek/hibrid)
- Neden bu model?
- 3 risk + 3 önlem
- 2 haftalık örnek plan
- Başarı metrikleri (örn. teslim oranı, hata sayısı, çevrim süresi)

### Değerlendirme

- Gerekçe kalitesi
- Proje-model uyumu
- Risk farkındalığı
- Planın uygulanabilirliği

---

## 13) Sık Yapılan Hatalar

- Agile = plansızlık sanmak
- Waterfall = demode deyip bağlamı görmezden gelmek
- Prototipi ürün gibi yayına almak
- Testi en sona bırakmak
- Modeli ekip yetkinliğinden bağımsız seçmek

---

## Kapanış

Süreç modeli, proje için bir “dini inanç” değil, bir “stratejik araçtır”.

> “Plans are useless, but planning is indispensable.”  
> — Dwight D. Eisenhower

Yani tek bir plana kör bağlanmak değil, planlama kasını güçlü tutmak gerekir.

Bu dersin ana mesajı:

**Model seçimi, teknik bir tercih değil; risk, insan, zaman ve değer yönetimi kararıdır.**
