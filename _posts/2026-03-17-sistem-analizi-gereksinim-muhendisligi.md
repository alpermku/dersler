---
layout: post
title: "Gereksinim Mühendisliği: Yazılımın DNA'sı"
date: 2026-03-17
categories: sistem-analizi-ve-tasarimi
---

Bir ev inşa etmeyi düşünün. Temel atıldı, duvarlar yükseldi, çatı kapandı. Tam boyama aşamasına geldiniz ki müşteri diyor ki: "Ben üç katlı istemiştim, siz iki kat yapmışsınız." İki kat yıkıp üçüncüyü eklemek mi, sıfırdan mı başlamak? Her iki durumda da felaket.

Bu senaryo yazılım dünyasında **her gün** yaşanıyor. Sebebi basit: gereksinimler doğru toplanmamış, yazılmamış veya yönetilmemiş. Gereksinimler bir yazılım projesinin **DNA'sıdır** — hatalı bir DNA, organizmanın her hücresini etkiler.

> *"Gereksinimler, bir sistemin paydaşlarının ihtiyaçlarını karşılayacak şekilde davranışını, özelliklerini veya kısıtlarını tanımlayan koşullardır."*
> — **IEEE Standard 729-1983**

---

## 1. Gereksinim Nedir ve Neden Bu Kadar Kritiktir?

Gereksinim (requirement), sistemin **ne yapması gerektiğini** veya **nasıl bir özellik taşıması gerektiğini** tanımlayan bir ifadedir. Tanım yalın görünse de pratikte gereksinimleri toplamak, yazmak ve yönetmek son derece zor ve hassas bir iştir.

### Hatalı Gereksinimlerin Maliyeti

Gereksinimlere neden bu kadar özen gösterilmesi gerektiğini rakamlarla görelim:

| Kaynak | Bulgu |
|--------|-------|
| **IBM Araştırması** | Hatalı bir gereksinimin üretimde düzeltilmesi, gereksinim aşamasındaki maliyetin **100 katına** çıkabilir (**1:100 kuralı**) |
| **Standish Group CHAOS Raporu (2020)** | Proje başarısızlıklarının **%37'sinin** temel nedeni yetersiz gereksinim analizi ve yönetimidir |
| **NIST Araştırması** | ABD'de yazılım hatalarının ekonomik maliyeti yılda **59,5 milyar dolardır**; bu maliyetin büyük bölümü erken aşamalarda önlenebilirdi |

Şunu düşünün: gereksinim aşamasında bir hatayı bulmak 1 saat sürüyorsa, aynı hata tasarım aşamasında 5 saat, kodlama aşamasında 10 saat, test aşamasında 20 saat, üretimde ise **100 saat** alır. Bu bir tahmin değil, onlarca yıllık endüstri verisinin ortalamasıdır.

Gereksinimlere harcanan her saat, ilerleyen aşamalarda **onlarca saat kazandırır**.

---

## 2. Gereksinim Türleri

Gereksinimler iki ana kategoriye ayrılır. Bu ayrım basit görünse de pratikte en sık yapılan hata, ikinci kategoriyi **tamamen ihmal etmektir**.

### 2.1 Fonksiyonel Gereksinimler (Functional Requirements — FR)

Fonksiyonel gereksinimler, sistemin **ne yapacağını** tanımlar: işlevleri, eylemleri ve davranışları kapsar. Bunlar genellikle akla ilk gelen, en "görünür" gereksinimlerdir.

**Örnekler:**

- Kullanıcı, e-posta ve şifre ile sisteme giriş yapabilmelidir.
- Satıcı; ürün adı, açıklama, fiyat ve en az bir fotoğraf girerek ilan oluşturabilmelidir.
- Sistem, kullanıcı aramalarını sorgu alındıktan itibaren 500ms içinde sonuçlandırmalıdır.
- Yönetici, kullanıcı hesaplarını askıya alabilmeli veya silebilmelidir.

**Dikkat:** Her fonksiyonel gereksinim bir **giriş** (input), bir **işlem** (process) ve bir **çıkış** (output) üçlüsünü ima eder. "Kullanıcı giriş yapabilmeli" derken kastedilen: kullanıcı e-posta ve şifre **girer** (input), sistem doğrulama **yapar** (process), başarılıysa ana sayfaya **yönlendirir** (output).

### 2.2 Fonksiyonel Olmayan Gereksinimler (Non-Functional Requirements — NFR)

Fonksiyonel olmayan gereksinimler, sistemin **nasıl çalışacağını** — yani kalite özelliklerini — tanımlar. Bu gereksinimler genellikle "-ilities" (kalite nitelikleri) olarak anılır.

> *"Fonksiyonel olmayan gereksinimler, çoğu zaman fonksiyonel gereksinimlerden daha kritiktir. Bir sistem doğru işi yapabilir; ama yavaş, güvensiz ya da kullanılamaz olduğunda başarısız sayılır."*
> — **Ian Sommerville**, Software Engineering, 10. Baskı

Bir araba düşünün: A noktasından B noktasına götürmek fonksiyonel gereksinimidir. Ama güvenli mi? Hızlı mı? Yakıt cimrisi mi? Konforlu mu? Bunların hepsi fonksiyonel olmayan gereksinimlerdir — ve çoğu zaman bir arabayı **seçme** kararınızı bu özellikler belirler, fonksiyonel özellik değil.

| NFR Kategorisi | Örnek | Neden Önemli? |
|----------------|-------|---------------|
| **Performans** | Sayfa yüklenme süresi < 2 saniye (95. yüzdelik dilim) | Google araştırması: 3 saniyeden uzun yükleme, kullanıcıların %53'ünü kaybettirir |
| **Güvenilirlik** | Sistem yılda %99,9 uptime sağlamalı (≈ 8,7 saat kesinti) | E-ticaret sitesinde 1 saatlik kesinti = binlerce TL kayıp |
| **Güvenlik** | Parolalar bcrypt ile hashlenmelidir (salt rounds ≥ 12) | Düz metin şifre = bir ihlalde tüm kullanıcı verileri çalınır |
| **Ölçeklenebilirlik** | Eş zamanlı 10.000 kullanıcıyı desteklemeli | Başarılı bir lansman, hazırlıksız bir sistemi çökertebilir |
| **Kullanılabilirlik** | Yeni kullanıcı 5 dakikada temel işlemleri tamamlayabilmeli | Karmaşık arayüz = kullanıcı alternatife gider |
| **Bakım Yapılabilirlik** | Kod dokümante edilmiş; birim test kapsamı %80+ | Bakımı zor kod, 2 yılda teknik borca dönüşür |
| **Taşınabilirlik** | Chrome, Firefox ve Safari'nin son 2 sürümünde tam çalışmalı | Tek tarayıcıya bağımlılık = kullanıcı kaybı |
| **Erişilebilirlik** | WCAG 2.1 AA standardına uymalı | Yasal zorunluluk (AB) + etik sorumluluk |

**⚠️ Kritik Uyarı:** "Sistem güvenli olmalı" bir gereksinim **değildir** — bir dilektir. NFR'ler de en az FR'ler kadar somut ve ölçülebilir yazılmalıdır. Bunu nasıl yapacağımızı SMART bölümünde göreceğiz.

---

## 3. Gereksinim Hiyerarşisi

Gereksinimler, soyutlama düzeylerine göre üç katmanda ele alınır. Her katman bir alttaki katmana rehberlik eder. Bu bir piramit gibidir — tepedeki iş hedeflerinden, tabandaki teknik detaylara iner.

```
          ┌─────────────────────┐
          │   İŞ GEREKSİNİMLERİ │  ← NEDEN inşa ediyoruz?
          │   (Business)        │     Yöneticiler, sponsorlar
          └──────────┬──────────┘
                     │
          ┌──────────▼──────────┐
          │ KULLANICI GEREKSİNİM│  ← NE yapılacak?
          │ (User)              │     Son kullanıcılar, analistler
          └──────────┬──────────┘
                     │
          ┌──────────▼──────────┐
          │  SİSTEM GEREKSİNİM  │  ← NASIL yapılacak?
          │  (System)           │     Geliştiriciler, mimarlar
          └─────────────────────┘
```

### 3.1 İş Gereksinimleri (Business Requirements)

En üst düzeydir. Projenin **iş gerekçesini** ve üst düzey hedefleri tanımlar. **Neden** inşa ediyoruz sorusuna yanıt verir.

**Örnek:**
> "Kampüs içi ikinci el ticareti, sistem devreye girdiğinden 12 ay sonra toplam işlem hacminin %50'si platform üzerinden gerçekleştirilmelidir."

### 3.2 Kullanıcı Gereksinimleri (User Requirements)

Kullanıcıların sistemden beklentilerini doğal dilde ifade eder. **Ne** yapılacağına yanıt verir. Teknik olmayan paydaşların anlayabileceği dilde yazılmalıdır.

**Örnek (User Story formatında):**
> "Ben bir öğrenci satıcı olarak, ürünlerimi platforma ekleyebilmek istiyorum; böylece kampüs içindeki diğer öğrenciler görebilsin ve benimle iletişime geçebilsin."

User Story formatı: **"Ben bir [rol] olarak, [işlev] istiyorum; böylece [fayda]."**

### 3.3 Sistem Gereksinimleri (System Requirements)

En alt düzeydir ve **teknik ayrıntıları** içerir. Geliştiricilere rehber olur. **Nasıl** yapılacağına zemin hazırlar.

**Örnek:**
> "POST `/api/products` endpoint'i; `title` (string, max 100 karakter), `description` (text, max 2000 karakter), `price` (decimal, pozitif), `images` (dizi, max 5 adet, JPEG/PNG, max 5MB/adet) parametrelerini alacak ve başarıyla oluşturma durumunda `201 Created` ile ürün ID'sini döndürecektir."

**Katmanlar arası ilişki:** Bir iş gereksinimi birden fazla kullanıcı gereksinimine, her kullanıcı gereksinimi de birden fazla sistem gereksinimine ayrılabilir. Bu, bir ağaç yapısıdır:

```
İş: "İşlem hacminin %50'si platform üzerinden"
├── Kullanıcı: "Satıcı ürün ekleyebilmeli"
│   ├── Sistem: POST /api/products endpoint
│   ├── Sistem: Fotoğraf yükleme servisi (max 5MB)
│   └── Sistem: Kategori validasyonu
├── Kullanıcı: "Alıcı arama yapabilmeli"
│   ├── Sistem: Elasticsearch entegrasyonu
│   └── Sistem: Filtre API'si
└── Kullanıcı: "Kullanıcılar mesajlaşabilmeli"
    ├── Sistem: WebSocket bağlantısı
    └── Sistem: Mesaj veritabanı şeması
```

---

## 4. SMART Gereksinim Yazımı

İyi bir gereksinim yazmanın altın standardı **SMART** kriterleridir. Bu kriterler, her gereksinimin belirsizlikten arındırılmış, doğrulanabilir ve eyleme dönüştürülebilir olmasını güvence altına alır.

| Harf | Kriter | Açıklama | Soru |
|------|--------|----------|------|
| **S** | Specific (Özgül) | Belirsizlik içermeyen net ifade | "Tam olarak ne?" |
| **M** | Measurable (Ölçülebilir) | Sayısal veya doğrulanabilir başarı kriteri | "Nasıl doğrulayacağız?" |
| **A** | Achievable (Erişilebilir) | Mevcut teknolojiyle gerçekleştirilebilir | "Yapabilir miyiz?" |
| **R** | Relevant (İlgili) | Proje hedefleriyle doğrudan bağlantılı | "Bu neden gerekli?" |
| **T** | Time-bound (Zamanlı) | Hangi sürümde karşılanacağı belirtilmiş | "Ne zaman hazır?" |

### İyi ve Kötü Gereksinim Karşılaştırması

| Kötü Gereksinim ❌ | Sorun | İyi Gereksinim ✅ |
|-------------------|-------|------------------|
| "Sistem hızlı olmalı" | "Hızlı" ne demek? 1 saniye mi, 10 saniye mi? | "Arama sonuçları, sorgu alındıktan itibaren 500ms içinde kullanıcıya sunulmalı (95. yüzdelik dilimde)" |
| "Sistem güvenli olmalı" | "Güvenli" subjektif | "Kullanıcı parolaları min 8 karakter, en az 1 büyük harf ve 1 rakam içermeli; bcrypt (salt rounds=12) ile hashlenmelidir" |
| "Kullanıcı ürün ekleyebilmeli" | Detay eksik — kaç adımda? Hangi alanlar zorunlu? | "Kayıtlı kullanıcı, 5 adımı aşmayan bir form aracılığıyla, en az 1 en fazla 5 fotoğraf ve zorunlu başlık/fiyat alanlarıyla ürün ilanı oluşturabilmelidir (v1.0)" |
| "Sistem kullanıcı dostu olmalı" | Tamamen subjektif | "Yeni bir kullanıcı, herhangi bir eğitim almaksızın ilk ürün ilanını 5 dakika içinde tamamlayabilmelidir (kullanılabilirlik testi ile doğrulanır)" |

**"Salatalık gereksinimi" nedir?** "Sistem kullanıcı dostu olmalı" gibi gereksinimler, dışarıdan yeşil ve taze görünür ama içi boştur. Herkes farklı bir şey anlar, kimse test edemez, herkes memnuniyetsiz kalır. Bu tür ifadeler gereksinim değil **dilektir**.

---

## 5. MoSCoW Önceliklendirme

Tüm gereksinimler eşit öneme sahip değildir. Kaynaklar (zaman, bütçe, ekip) **her zaman** sınırlıdır. Neyin yapılıp neyin erteleneceğini netleştirmek, proje yönetimi açısından hayati önem taşır.

**Dai Clegg** ve **Richard Barker** tarafından geliştirilen MoSCoW tekniği, gereksinimleri dört kategoriye ayırır:

| Kategori | Anlam | Kural | Örnek |
|----------|-------|-------|-------|
| **M**ust Have | Olmazsa olmaz | Bu olmadan sistem değer taşımaz | Kullanıcı giriş/çıkış, ilan oluşturma |
| **S**hould Have | Önemli ama zorunlu değil | Mümkünse olmalı, çıkarılabilir | Ürün yorumları, e-posta bildirimi |
| **C**ould Have | Güzel olur | Zaman/bütçe kalırsa eklenir | Dark mode, favoriler listesi |
| **W**on't Have | Bu sürümde yok | İleride değerlendirilebilir | Ödeme sistemi, mobil uygulama |

**Scrum'da kullanımı:** MoSCoW analizi, Ürün Sahibinin (Product Owner) backlog önceliklendirmesinde sıklıkla kullanılır. "Must Have" maddeler her zaman Sprint'e alınırken "Could Have" maddeler yalnızca kapasite kalırsa eklenir. Bu, ekibin en yüksek değerli işi her zaman önce tamamlamasını güvence altına alır.

**Pratik kural:** Must Have gereksinimleri, toplam gereksinim listesinin **%60'ını geçmemelidir**. Eğer her şey "olmazsa olmaz" ise, hiçbir şey gerçekten olmazsa olmaz değildir.

### 5.1 Değer/Efor Matrisi

MoSCoW'u tamamlayan bir diğer yöntem, gereksinimleri **değer** ve **efor** boyutlarında değerlendirmektir:

```
                    EFOR DÜŞÜK              EFOR YÜKSEK
                ┌─────────────────────┬─────────────────────┐
   DEĞER YÜKSEK │   🎯 QUICK WINS     │   🏗️ BÜYÜK PROJE    │
                │                     │                     │
                │  Hemen yap!         │  Dikkatlice planla,  │
                │  En yüksek ROI      │  iteratif ilerle     │
                ├─────────────────────┼─────────────────────┤
   DEĞER DÜŞÜK  │   📋 DOLDURUCU      │   🚫 KAÇIN          │
                │                     │                     │
                │  Zaman kalırsa      │  Neden bu işi        │
                │  değerlendir        │  yapıyoruz?          │
                └─────────────────────┴─────────────────────┘
```

**Altın kural:** Her zaman sol üst köşeden başlayın (Quick Wins). Minimum eforla maksimum değeri yakalayın. Sağ alt köşe (düşük değer + yüksek efor) ise projenin **kara deliğidir** — kaynaklarınızı yutar, hiçbir şey üretmez.

---

## 6. Gereksinim İzlenebilirliği (Traceability)

### 6.1 İzlenebilirlik Nedir?

**Gereksinim izlenebilirliği**, her gereksinimin:
- Hangi **iş hedefinden** kaynaklandığını,
- Hangi **tasarım kararlarıyla** karşılandığını,
- Hangi **test senaryolarıyla** doğrulandığını

takip etme yeteneğidir. İzlenebilirlik iki yönde çalışır:

- **İleri izlenebilirlik (forward):** Gereksinim → Tasarım → Kod → Test. "Bu gereksinim nerede gerçekleştirildi?"
- **Geri izlenebilirlik (backward):** Test → Kod → Tasarım → Gereksinim. "Bu test senaryosu hangi gereksinimden geliyor?"

Neden önemli? Bir gereksinim değiştiğinde, ondan etkilenen **tüm bileşenleri** hızla tespit edebilmek için. Bir müşteri "arama sonuçlarının 500ms değil 200ms'de gelmesini istiyorum" dediğinde, bu değişiklikten etkilenen kodu, testleri ve belgeleri anında bulmanız gerekir.

### 6.2 İzlenebilirlik Matrisi

| Gereksinim ID | Gereksinim | Use Case | Test Senaryosu |
|---------------|-----------|----------|----------------|
| FR-01 | Kullanıcı giriş yapabilmeli | UC-001 | TS-001, TS-002 |
| FR-02 | Ürün ilanı oluşturulabilmeli | UC-003 | TS-005, TS-006 |
| FR-03 | Kategori filtresiyle arama yapılabilmeli | UC-004 | TS-007, TS-008 |
| NFR-01 | Sayfa yüklenme < 2 saniye | — | TS-P001 |
| NFR-02 | Parolalar bcrypt ile hashlenmelidir | — | TS-S001 |

**Matristeki boş hücre tehlike işaretidir.** Eğer bir gereksinimin karşısında test senaryosu yoksa, o gereksinim asla doğrulanmayacak demektir. Eğer bir test senaryosunun karşısında gereksinim yoksa, o test gereksiz olabilir.

**Araçlar:** IBM DOORS, Jira, Confluence, Azure DevOps ve Polarion gibi araçlar izlenebilirlik matrisini otomatize eder. Küçük projelerde bir **elektronik tablo (spreadsheet)** yeterlidir. Asıl önemli olan araç değil, **disiplindir**: her gereksinimin bir ID'si olmalı ve bu ID belge boyunca tutarlı kullanılmalıdır.

---

## 7. SRS Belgesi (Software Requirements Specification)

Gereksinim mühendisliğinin en önemli çıktısı, **Yazılım Gereksinimleri Spesifikasyonu (SRS)** belgesidir. IEEE 830 standardı, SRS belgesinin yapısını tanımlar:

| § | Bölüm | İçerik |
|---|-------|--------|
| 1 | **Giriş** | Amaç, kapsam, tanımlar, kısaltmalar, genel bakış |
| 2 | **Genel Açıklama** | Ürün perspektifi, işlevler, kullanıcı grupları, kısıtlar, varsayımlar |
| 3 | **Özel Gereksinimler** | Fonksiyonel gereksinimler, NFR'ler, dış arayüz gereksinimleri |
| Ek A | **Veri Sözlüğü** | Sistemde kullanılan kavram ve veri tiplerinin tanımları |
| Ek B | **Modeller** | Use case diyagramları, ER diyagramları, prototip ekran görüntüleri |

### Agile Bağlamında SRS

Geleneksel SRS, büyük ve sıralı (waterfall) projelerde hâlâ geçerlidir. Ancak Agile bağlamlarda aynı amaç farklı araçlarla karşılanır:

| Geleneksel (Waterfall) | Agile |
|----------------------|-------|
| SRS belgesi | Product Backlog |
| Gereksinim maddesi | User Story |
| Test planı | Acceptance Criteria |
| Değişiklik kontrol kurulu | Sprint Review |

Her iki yaklaşım da meşrudur. Kritik olan, gereksinimlerin **eksiksiz, izlenebilir ve doğrulanabilir** biçimde belgelenmesidir — araç değil disiplin önemlidir.

---

## 8. Özet

Bu derste gereksinim mühendisliğinin temel kavramlarını inceledik:

**Gereksinim türleri:** Fonksiyonel gereksinimler sistemin *ne yaptığını*, fonksiyonel olmayan gereksinimler ise *nasıl yaptığını* tanımlar. İkisi de eşit önemdedir — NFR'leri ihmal etmek, "doğru işi yapan ama kullanılamaz" bir sistem demektir.

**Gereksinim hiyerarşisi:** İş gereksinimleri (neden?), kullanıcı gereksinimleri (ne?) ve sistem gereksinimleri (nasıl?) birbiri üzerine inşa edilir. Piramit tepeden tabana doğru somutlaşır.

**SMART yazımı**, belirsiz gereksinimleri ölçülebilir ve doğrulanabilir ifadelere dönüştürür. "Sistem hızlı olmalı" değil, "Arama sonuçları 500ms içinde sunulmalı" yazın. Salatalık gereksinimleri projenizi çürütür.

**MoSCoW** ve **Değer/Efor Matrisi**, sınırlı kaynakların doğru gereksinimlere yönlendirilmesini sağlar. Her şey "Must Have" olamaz.

**İzlenebilirlik**, her gereksinimin iş hedefinden test senaryosuna uzanan bağlantısını korur. Matristeki boş hücre tehlike işaretidir.

> Hatalı bir gereksinim üretimde düzeltildiğinde maliyeti **100 kata** çıkabilir. Bu derste öğrenilen teknikler, o kar topu daha yuvarlananamadan yok etmek için tasarlanmıştır.

---

## 9. Kaynaklar ve İleri Okuma

- IEEE. (1983). *IEEE Standard Glossary of Software Engineering Terminology* (Std 729-1983).
- Sommerville, I. (2016). *Software Engineering* (10. baskı). Pearson. — Bölüm 4.
- Robertson, S. & Robertson, J. (2012). *Mastering the Requirements Process* (3. baskı). Addison-Wesley.
- Wiegers, K. & Beatty, J. (2013). *Software Requirements* (3. baskı). Microsoft Press.
- Cockburn, A. (2001). *Writing Effective Use Cases.* Addison-Wesley.
- Standish Group. (2020). *CHAOS Report.* The Standish Group International.

---

## 10. Alıştırmalar

**Alıştırma 1 — SMART Dönüşümü:**
Aşağıdaki gereksinimleri SMART biçiminde yeniden yazın:
- (a) "Sistem mobil cihazlarda çalışmalı."
- (b) "Kullanıcı verilerinin güvende tutulması gerekiyor."
- (c) "Raporlar hızlı üretilmeli."

**Alıştırma 2 — Gereksinim Listesi:**
Bir kütüphane yönetim sistemi için 5 fonksiyonel ve 3 fonksiyonel olmayan gereksinim yazın. NFR'ler için ölçülebilir değerler belirleyin.

**Alıştırma 3 — MoSCoW Önceliklendirme:**
Bir online sınav sistemi projesinin gereksinimlerini MoSCoW yöntemiyle önceliklendirin. En az 3 gereksinim her kategoriye (Must/Should/Could/Won't) girecek şekilde listeleyin.

**Alıştırma 4 — İzlenebilirlik Zinciri:**
"Öğrenci sınav sonuçlarını PDF olarak indirebilmelidir" gereksinimi için izlenebilirlik zincirini oluşturun. İş hedefinden test senaryosuna tüm bağlantıları belirtin.

**Alıştırma 5 — Salatalık Avı:**
"Sistem kullanıcı dostu olmalıdır" gereksiniminin neden yetersiz olduğunu açıklayın ve onu SMART biçiminde **üç farklı** ölçülebilir gereksinime dönüştürün.
