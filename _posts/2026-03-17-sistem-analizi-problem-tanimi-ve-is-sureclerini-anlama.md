---
layout: post
title: "Problem Tanımı ve İş Süreçlerini Anlama"
date: 2026-03-17
categories: sistem-analizi-ve-tasarimi
---

Bir yazılım projesi başarısızlıkla sonuçlandığında, sebebin genellikle kodlama hatası olmadığını biliyor muydunuz? Projelerin çoğu **yanlış problemi çözdüğü için** başarısız olur. Mükemmel biçimde yazılmış, zamanında teslim edilmiş, bütçesinde tamamlanmış — ama hiçbir işe yaramayan bir sistem. Kulağa paradoks gibi geliyor, ama yazılım dünyasının en sık tekrarlanan trajedisi tam olarak budur.

Bu derste, o trajediden kaçınmanın yolunu öğreneceğiz: **problemi doğru tanımlamak**.

> *"Yanlış soruya doğru yanıt vermekten tehlikeli bir şey yoktur."*
> — **Peter Drucker**, Management Challenges for the 21st Century

---

## 1. Problemin Doğru Tanımlanması

### 1.1 Neden Problem Tanımı Bu Kadar Önemlidir?

Bir doktor düşünün. Hasta karın ağrısından şikâyet ediyor. Doktor hastayı muayene etmeden, test istemeden direkt ilaç yazsa ne olur? Belki şanslıdır ve ağrı geçer. Ama büyük ihtimalle yanlış tedavi uygular — çünkü **teşhis koymadan tedaviye başlamıştır**.

Yazılım geliştirme de tıp gibidir. **Problem tanımı teşhistir.** Teşhis yanlışsa, tedavi (yazılım) ne kadar iyi olursa olsun hastayı (organizasyonu) iyileştiremez.

Problem tanımı sürecinde üç temel soruya yanıt aranır:

1. **Mevcut durum nedir?** (As-Is — "şu an nasıl?")
2. **Hedeflenen durum nedir?** (To-Be — "nasıl olmalı?")
3. **Aradaki uçurum (gap) neden var ve nasıl kapatılabilir?**

Bu üç soru, bir köprü inşa etmeye benzer. Bir kıyıda duruyorsunuz (mevcut durum), karşı kıyıya geçmek istiyorsunuz (hedef durum). Köprünün uzunluğu = gap. Köprüyü inşa etmek = projenin kendisi.

### 1.2 Problem Bildirimi (Problem Statement)

İyi bir problem bildirimi, belirsizliği ortadan kaldıran **yapılandırılmış bir ifadedir**. Beş temel unsur içerir:

| Unsur | Açıklama | Örnek |
|-------|----------|-------|
| **Problemi yaşayan taraf** | Hangi aktör veya kullanıcı grubu bu sorunu deneyimliyor? | Kampüs öğrencileri |
| **Problemin ne olduğu** | Etkisi ve sonucu nedir? Ölçülebilir mi? | İkinci el ürün alışverişinde güvensizlik ve verimsizlik |
| **Bağlam** | Problem hangi ortamda, hangi koşullarda ortaya çıkıyor? | Sosyal medya grupları üzerinden yapılan alışveriş |
| **Mevcut çözümlerin yetersizliği** | Var olan alternatifler neden işe yaramıyor? | Genel platformlar (letgo, sahibinden) kampüse özgü doğrulama sunmuyor |
| **Başarılı çözümün görünümü** | Çözüldüğünde nasıl bir sonuç bekleniyor? | Güvenli, hızlı, şeffaf kampüs içi alışveriş |

Bu beş unsurdan **herhangi birinin eksik olması**, ileride değişen gereksinimlere dönüşür. "Biz bunu konuşmamıştık" cümlesini duyduğunuz her an, eksik bir problem bildirimi unsuruna bakıyorsunuzdur.

#### Örnek: Kampüs İkinci El Platformu — Problem Bildirimi

> "Kampüs öğrencileri, mevcut durumda ikinci el ürünlerini sosyal medya grupları üzerinden satmaktadır. Bu yöntemin temel sorunları şunlardır: arama ve filtreleme imkânının olmaması, alıcı-satıcı arasında güvensizlik ve ürün takibinin imkânsızlığı. Piyasadaki genel amaçlı uygulamalar (letgo, sahibinden) kampüs topluluğuna özgü doğrulama mekanizmaları sunmamaktadır. Geliştirilecek platform, bu sorunları çözerek kampüs içi alışverişi güvenli, hızlı ve şeffaf hâle getirecektir."

Bu bildirimi inceleyin: beş unsurun hepsi mevcut. Kim? Öğrenciler. Ne? Güvensizlik ve verimsizlik. Nerede? Sosyal medya gruplarında. Neden mevcut çözümler yetmiyor? Kampüse özgü doğrulama yok. Çözülünce ne olur? Güvenli, hızlı, şeffaf alışveriş.

---

## 2. İş Hedefleri, Kapsam, Varsayımlar ve Kısıtlar

### 2.1 İş Hedefleri (Business Objectives)

İş hedefleri, sistemin **neden** geliştirildiğini iş perspektifinden açıklar. Teknik gereksinimler *nasıl* yapılacağını söylerken, iş hedefleri *neden* yapıldığını ortaya koyar.

İyi bir iş hedefi **SMART** kriterlerine uygun olmalıdır:

- **S**pecific (Özgül): "Satışları artırmak" değil, "online satışları artırmak"
- **M**easurable (Ölçülebilir): "%25 artış" gibi somut bir rakam
- **A**chievable (Ulaşılabilir): Mevcut kaynaklar ve zaman dilimiyle gerçekçi
- **R**elevant (İlgili): Organizasyonun stratejik hedefleriyle uyumlu
- **T**ime-bound (Zamanlı): "6 ay içinde" gibi net bir zaman çerçevesi

| Hedef Türü | Kötü Örnek ❌ | İyi Örnek ✅ |
|------------|-------------|-------------|
| Maliyet azaltma | "Maliyetleri düşürmek" | "Manuel süreçleri %40 azaltarak yıllık 200.000 TL tasarruf" |
| Gelir artışı | "Daha çok satmak" | "Online satışların 6 ayda %25 artışı" |
| Süre kısaltma | "Daha hızlı olmak" | "Sipariş işleme süresinin 2 günden 4 saate indirilmesi" |
| Kullanıcı memnuniyeti | "Müşterileri mutlu etmek" | "NPS skorunun 6 ayda 30 puan artırılması" |
| Uyumluluk | "Yasalara uymak" | "KVKK/GDPR gerekliliklerinin Q3'e kadar karşılanması" |

### 2.2 Kapsam (Scope)

Kapsam, sistemin neleri kapsadığını ve — kritik olarak — **neleri kapsamadığını** tanımlar. İkinci boyut çoğunlukla ihmal edilir ve proje yönetiminin en yaygın hastalığına yol açar: **kapsam sürünmesi** (scope creep).

#### Kapsam Sürünmesi Nedir?

Proje devam ederken, başlangıçta planlanmamış özelliklerin yavaş yavaş eklenmesidir. Her biri "küçük bir şey"dir. Ama on tane "küçük şey" toplandığında proje %30-50 büyümüş olur.

**PMI'ın (Project Management Institute) 2021 verilerine göre:**
- Projelerin **%52'si** yetersiz kapsam tanımı yüzünden hedeflerini kaçırmaktadır.
- Her onaylı "küçük ek özellik" tahminen **%3-5 ek efor** anlamına gelir.

Bir proje yöneticisinin en güçlü silahı "Hayır" diyebilmektir — ama bunu yapabilmek için neye "Evet" dendiğinin yazılı olması gerekir.

**Kapsam belgesi iki liste içermelidir:**

| Kapsam İÇİNDE ✅ | Kapsam DIŞINDA ❌ |
|-------------------|-------------------|
| Ürün listeleme | Ödeme sistemi entegrasyonu |
| Arama/filtreleme | Kargo takibi |
| Kullanıcı mesajlaşması | Mobil uygulama *(ilk sürüm için)* |
| Yönetici paneli | Yapay zekâ destekli fiyat önerisi |

"Kapsam dışında" listesi, "bunu asla yapmayacağız" demek değildir. "Bunu **bu sürümde** yapmayacağız" demektir. Gelecek sürümlere kapı açık bırakılır, ama şimdiki taahhüt sınırlıdır.

### 2.3 Varsayımlar ve Kısıtlar

**Varsayım (Assumption):** Projenin devam edebilmesi için doğru kabul edilen, ancak henüz doğrulanmamış ifadedir. Her varsayım bir potansiyel risktir — doğrulanana kadar tehlike listesinde kalır.

**Kısıt (Constraint):** Proje üzerindeki kesin ve müzakere edilemez sınırlamadır. Bütçe, süre, teknoloji seçimi, ekip büyüklüğü tipik kısıtlardır. Kısıtlar üzerinde pazarlık yapılamaz; onlarla yaşamak zorundasınızdır.

| Varsayımlar | Kısıtlar |
|-------------|----------|
| Kullanıcılar internet bağlantısına sahip | Bütçe: 50.000 TL |
| Kampüs ağı yeterli kapasitede | Süre: 6 ay |
| Kullanıcılar temel bilgisayar okuryazarlığına sahip | Teknoloji: Mevcut web altyapısı |
| Yönetim platformu aktif kullanmayı taahhüt ediyor | Ekip: 3 geliştirici + 1 analist |

**Kritik fark:** Varsayımlar yanlış çıkabilir (risk); kısıtlar değişmez (sınır). "Kullanıcılar internet bağlantısına sahip" varsayımı yanlış çıkarsa, projenin tüm mimarisi değişebilir. Ama "bütçe 50.000 TL" kısıtı değişmez — o paranın içinde çözüm bulmak zorundasınızdır.

---

## 3. Paydaş Analizi

### 3.1 Paydaş Nedir?

> *"Paydaş, bir sistemin gereksinimleri üzerinde doğrudan ya da dolaylı olarak etkisi olan ya da sistemin faaliyetlerinden doğrudan etkilenen bireyler veya gruplardır."*
> — **Ian Sommerville**, Software Engineering, 10. Baskı

Paydaş analizi yapılmadan toplanan gereksinimler, **önemli bir kesimin ihtiyaçlarını gözden kaçırır**. Düşünün: bir hastane bilgi sistemi geliştiriyorsunuz. Doktorları, hemşireleri ve hastaları düşündünüz. Ama eczacıyı unuttunuz. Sistem canlıya geçtiğinde, eczane entegrasyonu olmadığını fark ediyorsunuz. Tasarım, mimari, teslim takvimi — hepsi alt üst olur. Tek bir unutulan paydaş, projeyi aylarca geri atabilir.

### 3.2 Paydaş Kategorileri

| Kategori | Örnekler | Neden Önemli? |
|----------|----------|---------------|
| **Son Kullanıcılar** | Sistemi doğrudan kullananlar: öğrenci alıcılar, satıcılar | İhtiyaçları karşılanmazsa sistem kullanılmaz |
| **Yöneticiler** | Sistemi satın alan/onaylayan: üniversite rektörlüğü | Bütçe ve onay yetkisine sahipler |
| **İş Analistleri** | Gereksinimleri belgeleyen kişiler | Yanlış belgeleme = yanlış sistem |
| **Geliştiriciler** | Sistemi inşa edenler | Teknik fizibiliteyi belirlerler |
| **Test Uzmanları** | Sistemin kalitesini doğrulayanlar | Hataları canlıya çıkmadan yakalarlar |
| **Destek Personeli** | Sistemi bakıma alanlar | Bakım maliyetini etkilerler |
| **Düzenleyici Kurumlar** | BDDK, KVKK, sektörel regülatörler | Yasal uyumsuzluk = proje durdurma |
| **Dış Sistemler** | Entegre olan üçüncü taraf sistemler | API uyumsuzluğu = entegrasyon çökmesi |

### 3.3 Güç/İlgi Matrisi (Power/Interest Grid)

Tüm paydaşlara eşit zaman ve enerji harcayamazsınız. **Güç/İlgi Matrisi**, paydaşların projeye olan ilgileri ile projedeki etki güçleri arasındaki ilişkiyi dört stratejiye böler:

```
                    İLGİ DÜŞÜK              İLGİ YÜKSEK
                ┌─────────────────────┬─────────────────────┐
   GÜÇ YÜKSEK  │    MEMNUN TUT       │   YAKINDAN YÖNET    │
                │                     │                     │
                │  Önemli kararlardan │  Sürekli iletişim,  │
                │  haberdar et,       │  aktif katılım       │
                │  detaya boğma       │  sağla              │
                ├─────────────────────┼─────────────────────┤
   GÜÇ DÜŞÜK   │    İZLE             │   BİLGİLENDİR       │
                │                     │                     │
                │  Minimum çaba ile   │  Düzenli güncelleme, │
                │  takip et           │  geri bildirim al    │
                └─────────────────────┴─────────────────────┘
```

**Uygulama Örneği — Kampüs İkinci El Platformu:**

| Paydaş | Güç | İlgi | Bölge | Strateji |
|--------|-----|------|-------|----------|
| Rektörlük | Yüksek | Düşük | Memnun tut | Aylık özet rapor |
| Öğrenciler (kullanıcılar) | Düşük | Yüksek | Bilgilendir | Beta testi, anket |
| IT departmanı | Yüksek | Yüksek | Yakından yönet | Haftalık toplantı |
| Kampüs güvenlik | Düşük | Düşük | İzle | Gerekirse bilgilendir |

**⚠️ Önemli:** Güç/İlgi Matrisi **statik değildir**. Projenin ilerleyen aşamalarında bir paydaş bölge değiştirebilir. Yeni atanan bir yönetici, düşük güç bölgesinden yüksek güç bölgesine taşınabilir. Matrisi her sprint veya her önemli kilometre taşında güncelleyin.

---

## 4. İş Süreçleri: As-Is / To-Be Yaklaşımı

İş süreci analizi, mevcut organizasyonun nasıl çalıştığını anlamanın sistematik yoludur. Bu analiz yapılmadan geliştirilen yazılımlar çoğunlukla mevcut sorunları **derinleştirir**.

Yazılım mühendisliğinde sık tekrarlanan bir uyarı vardır:

> **"Berbat bir süreci otomatikleştirmek, yalnızca berbat bir otomasyondur."**

Analist, varolan süreci *anlamak* için As-Is haritasını çıkarır — ama *kopyalamak* için değil. Asıl hedef, To-Be tasarımında değer katmayan adımları elemek ve sürtünmeyi azaltmaktır.

### 4.1 As-Is Süreç: Mevcut Durumun Haritası

As-Is analizi şu soruları yanıtlar:

- Süreç şu anda **nasıl** işliyor?
- Süreçte hangi **adımlar**, **kararlar** ve **aktörler** var?
- **Darboğazlar**, tekrarlar ve verimsizlikler nerede?
- Hangi süreçler **manuel**, hangisi **otomatik**?

#### Örnek: Kampüs İkinci El — Mevcut Süreç (WhatsApp Tabanlı)

```
┌────────────────────┬────────────────────┬────────────────────┐
│     SATICI          │     ALICI          │     (YOK)          │
│     ÖĞRENCİ        │     ÖĞRENCİ        │     SİSTEM         │
├────────────────────┼────────────────────┼────────────────────┤
│                    │                    │                    │
│  ① WhatsApp        │                    │                    │
│  grubuna ürün      │                    │                    │
│  fotoğrafı +       │                    │                    │
│  fiyat gönderir    │                    │                    │
│         │          │                    │                    │
│         ▼          │                    │                    │
│                    │  ② Özel mesaj      │                    │
│                    │  atar              │                    │
│         │          │         │          │                    │
│         ▼          │         │          │                    │
│  ③ Mesajları       │         │          │                    │
│  takip eder,       │         │          │                    │
│  ilk gelene        │         │          │                    │
│  yanıt verir       │         │          │                    │
│         │          │         │          │                    │
│         ▼          │         ▼          │                    │
│  ④ Buluşma yeri    │  ④ Buluşma yeri    │                    │
│  ve zamanı         │  ve zamanı         │                    │
│  üzerinde anlaşır  │  üzerinde anlaşır  │                    │
│         │          │         │          │                    │
│         ▼          │         ▼          │                    │
│  ⑤ Nakit ödeme     │  ⑤ Nakit ödeme     │                    │
│  yapılır           │  yapılır           │                    │
│                    │                    │                    │
└────────────────────┴────────────────────┴────────────────────┘

⚠️ SORUNLAR:
• Ürün arama imkânsız (scroll ile 500 mesaj tarama)
• Güvenilirlik belirsiz (satıcı kim? Gerçek mi?)
• Eski ilanlar silinmiyor (geçen ayın ilanı hâlâ duruyor)
• Anlaşmazlıklarda çözüm mekanizması yok
```

### 4.2 To-Be Süreç: Hedef Durumun Tasarımı

To-Be analizi, **nasıl olmasını istediğimizi** tanımlar. As-Is'teki her sorunun To-Be'de bir çözümü olmalıdır.

#### Örnek: Kampüs İkinci El — Hedef Süreç (Platform Tabanlı)

```
┌────────────────────┬────────────────────┬────────────────────┐
│     SATICI          │     ALICI          │     SİSTEM         │
│     ÖĞRENCİ        │     ÖĞRENCİ        │     (PLATFORM)     │
├────────────────────┼────────────────────┼────────────────────┤
│                    │                    │                    │
│  ① Platforma       │                    │                    │
│  giriş yapar,      │                    │                    │
│  ürün bilgisi      │                    │  ② Ürünü kataloga  │
│  girer (fotoğraf,  │                    │  ekler, arama      │
│  açıklama, fiyat,  │                    │  indeksine         │
│  kategori)         │                    │  kaydeder          │
│                    │                    │         │          │
│                    │  ③ Platforma       │         ▼          │
│                    │  giriş yapar,      │                    │
│                    │  kategori/fiyat    │                    │
│                    │  filtresiyle       │                    │
│                    │  arama yapar       │                    │
│                    │         │          │                    │
│                    │         ▼          │                    │
│                    │  ④ Ürünü bulur,    │                    │
│         ◄──────────│  satıcıya platform │                    │
│                    │  üzerinden mesaj   │                    │
│                    │  yollar            │                    │
│         │          │         │          │                    │
│         ▼          │         ▼          │                    │
│  ⑤ Anlaşma        │  ⑤ Anlaşma        │  ⑤ Ürün "rezerve"  │
│  sağlanır          │  sağlanır          │  olarak            │
│                    │                    │  işaretlenir       │
│         │          │         │          │         │          │
│         ▼          │         ▼          │         ▼          │
│  ⑥ Buluşma sonrası│  ⑥ Buluşma sonrası│  ⑦ İşlem           │
│  karşılıklı       │  karşılıklı       │  arşivlenir        │
│  değerlendirme    │  değerlendirme    │                    │
│                    │                    │                    │
└────────────────────┴────────────────────┴────────────────────┘

✅ ÇÖZÜMLER:
• Kategori/fiyat filtreli arama motoru
• Kullanıcı değerlendirme sistemi (güvenilirlik)
• Otomatik ilan süresi dolma mekanizması
• Platform içi mesajlaşma + şikâyet/moderasyon sistemi
```

**Dikkat edin:** To-Be sürecinde üçüncü bir aktör belirdi — **Sistem**. Mevcut süreçte sistem yoktu (her şey manueldi). Yeni süreçte sistem aktif bir katılımcı: indeksliyor, filtreliyor, rezerve ediyor, arşivliyor. Bu, dijital dönüşümün özüdür: **insanların yaptığı tekrarlayan işleri sisteme devretmek**.

### 4.3 Gap Analizi

As-Is ile To-Be arasındaki farkı ortaya koyan çalışmaya **Gap Analizi** denir. Bu analiz, projenin kapsamını ve önceliklerini belirlemede kritik rol oynar.

| As-Is Sorunu | To-Be Çözümü | Öncelik |
|--------------|-------------|---------|
| Ürün arama imkânsız | Kategori/fiyat filtreli arama motoru | 🔴 Yüksek |
| Güvenilirlik belirsiz | Kullanıcı değerlendirme sistemi | 🔴 Yüksek |
| Eski ilanlar silinmiyor | Otomatik ilan süresi dolma mekanizması | 🟡 Orta |
| Anlaşmazlık çözümü yok | Şikâyet ve moderasyon sistemi | 🟡 Orta |

Gap analizi, **hangi özelliklerin önce geliştirilmesi gerektiğini** de belirler. Yüksek öncelikli gap'ler ilk sprint'e, orta öncelikli olanlar sonraki sprint'lere yerleştirilir.

---

## 5. Süreç Haritalama Araçları

Süreçleri görselleştirmek için çeşitli standart araçlar kullanılır. Araç seçimi, sürecin karmaşıklığına ve hedef kitleye göre değişir:

| Araç | Ne Zaman Kullanılır? | Karmaşıklık |
|------|---------------------|-------------|
| **Swimlane Diyagram** | Birden fazla aktörün katıldığı süreçler | ⭐⭐ Orta |
| **Flowchart (Akış Diyagramı)** | Basit süreç adımları ve karar noktaları | ⭐ Düşük |
| **BPMN** | Standart iş süreci notasyonu; yazılım araçlarıyla işlenebilir | ⭐⭐⭐ Yüksek |
| **Value Stream Map** | Lean/Agile bağlamında değer akışı ve israf analizi | ⭐⭐ Orta |
| **UML Activity Diagram** | Nesne yönelimli süreç modelleme | ⭐⭐⭐ Yüksek |

Bu derste **Swimlane diyagramları** üzerinde yoğunlaştık. UML Activity Diyagramları ilerleyen bölümlerde ayrıntılandırılacaktır.

---

## 6. Uygulama: As-Is Süreç Çıkarma Adımları

Herhangi bir iş süreci için As-Is haritası çıkarmak istediğinizde şu adımları izleyin:

1. **Bir iş süreci seçin** (örneğin: kütüphanede kitap ödünç alma)
2. **Sürece katılan tüm aktörleri listeleyin** (öğrenci, kütüphaneci, sistem)
3. **Her aktörün sırasıyla ne yaptığını adım adım yazın**
4. **Karar noktalarını belirleyin** (evet/hayır dalları)
5. **Darboğazları veya sorunlu noktaları vurgulayın**
6. **Süreci swimlane diyagram olarak çizin**

#### Örnek: Kütüphane Kitap İadesi As-Is Analizi

**Aktörler:** Öğrenci, Kütüphaneci, Sistem

**Adımlar:**
1. Öğrenci iade gişesine gelir.
2. Kütüphaneci barkod okutarak iade kaydeder.
3. Sistem gecikme var mı kontrol eder.
4. **Karar noktası:**
   - ✅ Gecikme yoksa → kitap rafa kaldırılır.
   - ❌ Gecikme varsa → öğrenciye ceza bilgisi verilir, tahsilat yapılır.

**Tespit edilen sorunlar:**
- Öğrenci sistemi uzaktan göremediğinden son teslim tarihini kaçırıyor
- Gecikme bildirimi e-posta ile geç geliyor
- Manuel barkod okutma sırasında kuyruk oluşuyor

---

## 7. Özet

Bu derste dört temel kavramı derinlemesine inceledik:

**Problem bildirimi** beş unsur içerir: problemi yaşayan taraf, problemin ne olduğu, bağlam, mevcut çözümlerin yetersizliği ve başarılı çözümün görünümü. Eksik kalan her unsur, ileride sürpriz gereksinimlere dönüşür.

**Kapsam yönetimi**, kapsam içi ve kapsam dışı listeleriyle neyin yapılıp neyin yapılmayacağını netleştirir. Kapsam sürünmesi, projelerin yarısından fazlasını etkileyen bir risktir.

**Paydaş analizi**, Güç/İlgi Matrisi aracılığıyla farklı paydaşlarla nasıl ilişki kurulacağını yönlendirir. Bir paydaşı unutmak, projeyi aylarca geri atabilir.

**As-Is / To-Be analizi**, mevcut süreçteki sorunları ortaya çıkarır ve hedef durumu tasarlar. Gap analizi ise ikisi arasındaki köprüyü kurarak projenin kapsam ve öncelik kararlarını besler.

> İyi bir analiz, projenin geri kalanı için sağlam bir zemin oluşturur. Kötü tanımlanmış bir problem, en güçlü teknolojiyle bile çözülemez.

---

## 8. Kaynaklar ve İleri Okuma

- Drucker, P. (1999). *Management Challenges for the 21st Century.* HarperCollins.
- PMI. (2021). *Pulse of the Profession.* Project Management Institute.
- Sommerville, I. (2016). *Software Engineering* (10. baskı). Pearson. — Bölüm 4: Requirements Engineering.
- Harmon, P. (2019). *Business Process Change* (4. baskı). Morgan Kaufmann.
- Sharp, A. & McDermott, P. (2009). *Workflow Modeling* (2. baskı). Artech House.
- Cohn, M. (2004). *User Stories Applied.* Addison-Wesley.

---

## 9. Alıştırmalar

**Alıştırma 1:** Bir üniversite öğrenci kayıt sisteminin As-Is sürecini yazılı olarak tanımlayın. En az üç sorun noktası (darboğaz veya verimsizlik) tespit edin.

**Alıştırma 2:** Bir e-ticaret sipariş yönetim sisteminin paydaş listesini oluşturun. Her paydaşı Güç/İlgi Matrisine yerleştirin ve her biri için önerilen iletişim stratejisini açıklayın.

**Alıştırma 3:** Kampüs ikinci el platformu örneğini genişletin: ödeme sistemi entegrasyonu kapsama alınırsa varsayımlar ve kısıtlar listesi nasıl değişir?

**Alıştırma 4:** As-Is ile To-Be arasındaki gap analizini bir swimlane diyagramıyla görselleştirin. Hangi adımlar ortadan kalktı, hangisi otomatize edildi?

**Alıştırma 5:** Bir hastane randevu sistemi için problem bildirimi yazın. Beş unsuru açıkça belirtin.
