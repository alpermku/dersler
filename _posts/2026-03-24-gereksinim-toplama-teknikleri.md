---
layout: post
title: "Gereksinim Toplama Teknikleri: Kullanıcının Zihnini Okuma Sanatı"
date: 2026-03-24 20:00:00 +0300
categories: sistem-analizi-ve-tasarimi
---

Bir yazılım projesinin başarısızlık hikâyelerinin çoğunda, sorun kodda değildir. Sorun, **hiç kimsenin doğru soruyu sormamış olmasıdır.** Bugün, yazılım mühendisliğinin en az kodlama kadar kritik olan — belki de daha kritik olan — aşamasını öğreneceğiz: **kullanıcıların kafasının içine girmek.**

> *"Kullanıcılar ne istediklerini söyleyemezler — ta ki görmeden önce."*
> — **Gerald Weinberg**, *An Introduction to General Systems Thinking*, 1975

Bu cümleyi bir an için sindirin. 50 yıl önce yazılmış ve hâlâ her projede doğrulanıyor. Demek ki gereksinim toplamak, "ne istiyorsunuz?" diye sormaktan çok daha karmaşık bir iş. Peki nasıl yapılır?

---

## Neden Tek Bir Teknik Yetmez?

Şöyle düşünün: bir suç mahallini araştıran dedektif sadece tanık ifadesi alsa yeter mi? Elbette hayır — parmak izi arar, güvenlik kameralarını inceler, olay yerini gezer, belgeleri karşılaştırır. **Her teknik, bulmacının farklı bir parçasını ortaya çıkarır.**

Gereksinim toplamada da durum aynıdır. Kullanıcılar:

- İhtiyaçlarını **açıkça ifade edemeyebilir** (iletişim sorunu)
- **Gerçek ihtiyaçları ile söyledikleri farklı** olabilir (beklenti-gerçeklik uçurumu)
- **Çatışan çıkarlara** sahip farklı paydaş grupları olabilir
- İş sürecini **"olduğu gibi" değil, "olmasını istedikleri gibi"** anlatabilirler

İşte bu yüzden bir analist, **birden fazla tekniği stratejik olarak birleştiren** bir dedektiftir.

---

## 1. Görüşme (Interview) — En Güçlü Silah

Görüşme, gereksinim toplamada **en yaygın ve en derinlikli** tekniktir. Doğru yapıldığında kullanıcının zihnindeki gizli gereksinimleri gün yüzüne çıkarır. Ama "doğru yapmak" anahtar kelimedir — kötü yapılmış bir görüşme, yanlış gereksinimlerden daha tehlikelidir.

### Görüşme Türleri

| Tür | Nasıl Çalışır? | Ne Zaman Kullanılır? |
|-----|----------------|----------------------|
| **Yapılandırılmış** | Önceden hazırlanmış soru listesi, sırayla sorulur | Çok sayıda kullanıcıyla tutarlı veri toplarken |
| **Yarı Yapılandırılmış** | Ana sorular hazır, ama konuşma akışına göre yeni sorular eklenir | En yaygın tercih — hem derinlik hem tutarlılık |
| **Yapılandırılmamış** | Serbest sohbet, konu kullanıcının yönlendirmesiyle ilerler | Keşif aşamasında, ne bilmediğinizi bilmediğinizde |

### Etkili Görüşme Teknikleri

Şimdi size profesyonel analistlerin kullandığı 6 altın kuralı veriyorum. Bunları ezberleyin değil, **içselleştirin**:

**1. Açık uçlu sorular sor:** "Evet/hayır" ile biten sorular derinlik vermez. "Neden?", "Nasıl?", "Bunu yaşadığınız bir durum anlatabilir misiniz?" — işte bu sorular altın madenidir.

**2. Aktif dinle:** Söylenenin ötesini duy. Kullanıcı duraksadığında, sesini alçalttığında, "aslında..." diye cümleye başladığında — orada bir gizli gereksinim yatıyordur.

**3. Not al ve kaydet:** İzin alarak ses kaydı yapın. Hafıza yanıltıcıdır — görüşmeden 2 saat sonra detayların %40'ını unutursunuz.

**4. 5 Neden (5 Whys) tekniğini uygula:** Yüzeysel soruna takılma, köke in.

```
→ "Raporlar geç geliyor."
   Neden? → "Excel'de manuel hazırlanıyor."
   Neden? → "Otomatik rapor sistemi yok."
   Neden? → "Eski sistem rapor modülü desteklemiyor."
   Neden? → "10 yıl önce yazılmış, güncellenmemiş."
   Neden? → "Bütçe ayrılmamış."
   
   GERÇEK GEREKSİNİM: Otomatik rapor modülü + bütçe onayı
```

**5. Varsayım yapma:** "Anlattığınız X demek mi?" diye siz çevirmeyin — kullanıcıdan onay alın.

**6. Somut örnek iste:** "Bunu yaşadığınız gerçek bir durum anlatabilir misiniz?" — soyut şikâyetler somut senaryolara dönüştüğünde gereksinimler netleşir.

### Örnek Soru Seti: Kampüs İkinci El Platformu

Diyelim ki üniversite kampüsünde bir ikinci el alışveriş platformu tasarlıyorsunuz. Son kullanıcılarla (öğrenciler) görüşme yapıyorsunuz:

1. Şu an kampüste ikinci el ürün alıp satmak için **hangi yöntemleri** kullanıyorsunuz?
2. Bu yöntemlerde en çok **zorlandığınız durum** nedir? Yaşadığınız bir örnek anlatır mısınız?
3. Bir ürün ararken **en önemli kriter** nedir? (fiyat, durum, kategori, satıcı güvenilirliği?)
4. Bir ürünü satarken **güvende hissediyor musunuz?** Ne olursa kendinizi güvende hissederdiniz?
5. Yeni bir platform kullansanız, en çok **hangi özelliği** görmek isterdiniz?
6. Haftalık **kaç kez** böyle bir platforma girmeyi bekliyorsunuz?
7. Benzer bir platform daha önce kullandınız mı? **Ne iyiydi, ne eksikti?**

> Dikkat edin: Bu sorular "evet/hayır" ile bitmez. Her biri kullanıcıyı **düşünmeye ve anlatmaya** zorlar. İşte görüşmenin gücü budur.

---

## 2. Anket (Survey) — Geniş Kitleye Ulaşma

Anket, **çok sayıda kullanıcıdan kısa sürede** veri toplamak için idealdir. Ama görüşmenin sağladığı derinlikten yoksundur — bu yüzden **tamamlayıcı** bir tekniktir, tek başına yeterli değildir.

| Özellik | Görüşme | Anket |
|---------|:-------:|:-----:|
| Derinlik | ✅ Derin | ❌ Yüzeysel |
| Kapsam | ❌ Az kişi (5-15) | ✅ Çok kişi (100+) |
| Maliyet | Yüksek (zaman) | Düşük |
| Nicel veri | ❌ Zor | ✅ Kolay (istatistik) |
| Nitel veri | ✅ Zengin | ❌ Sınırlı |
| Takip sorusu | ✅ Anında sorulur | ❌ Mümkün değil |

### İyi Anket Tasarımının 4 Kuralı

1. **Likert ölçeği kullan:** "Bu özellik ne kadar önemli?" sorusuna 1-5 arası puan verdirin. Sayısal veriler analiz edilebilir, "önemli" kelimesi belirsizdir.

2. **Çift olumsuzlamadan kaçın:** "Sistemi kullanmamak istemez misiniz?" — Bu soruyu okuyan kişi ne cevap vereceğini bilemez. Basit ve net yazın.

3. **Pilot test yap:** Anketi 5-10 kişiye önce deneyin. "Bu soruyu anladınız mı?" diye sorun. Anlaşılmayan sorular yanlış veri üretir.

4. **10-15 soruyla sınırla:** 50 soruluk anketi kimse tamamlamaz. Tamamlasa bile son sorularda rastgele tıklar. Kısa ve öz tutun.

---

## 3. Gözlem (Observation) — Yalan Söyleyemezsiniz

İşte gereksinim toplama tekniklerinin en acımasız olanı. Çünkü gözlem, kullanıcının **ne söylediğine** değil, **ne yaptığına** bakar. Ve bu ikisi arasında uçurum vardır.

> *"İnsanlar, yaptıklarını söyledikleri ile gerçekte yaptıkları arasındaki tutarsızlığı fark etmezler. Ancak gözlem bu uçurumu gözler önüne serer."*
> — **Don Norman**, *The Design of Everyday Things*, 2013

### Gözlem Teknikleri

| Teknik | Nasıl Çalışır? | Avantajı |
|--------|----------------|----------|
| **Doğrudan Gözlem** | Analist kullanıcının yanında oturur, süreci izler | Doğal ortamda gerçek davranış |
| **Düşünce Sesli Protokol (Think-Aloud)** | Kullanıcı yaparken düşüncelerini sesli söyler | Karar süreçleri ortaya çıkar |
| **Gölge Çalışma (Shadowing)** | Kullanıcıyla gün boyu birlikte çalışılır | Bağlamın tamamı kavranır |

### Gözlemin Gücü: Gerçek Bir Senaryo

Bir hastane bilgi sistemi projesinde, hemşireler görüşmede "sistemi kullanıyoruz, sorun yok" demişler. Ama gözlem yapıldığında ortaya çıkan:

- Hemşirelerin %60'ı sisteme veri girdikten sonra **aynı bilgiyi kâğıda da yazıyordu** (güvenmiyorlar)
- İlaç takip ekranını açmak **12 tıklama** gerektiriyordu (3 tıklamada olmalı)
- Acil durumlarda sistemi **tamamen atlayıp** telefon kullanıyorlardı

Bu gereksinimlerin hiçbiri görüşmede ortaya çıkmamıştı. Gözlem olmasa, yeni sistem de aynı hataları tekrarlayacaktı.

---

## 4. Doküman Analizi — Geçmişin Mirası

Mevcut dokümanlar — formlar, raporlar, prosedürler, eski sistem kılavuzları, iş kuralı belgeleri — **altın değerinde** bilgi kaynakları içerir. Özellikle mevcut bir sistemi yenilemek için gereksinimleri toplarken, bu dokümanlar başlangıç noktanızdır.

### Ne İncelenir?

| Doküman Türü | Ne Öğrenirsiniz? |
|-------------|------------------|
| **Mevcut form tasarımları** | Hangi veriler toplanıyor? Hangi alanlar zorunlu? |
| **Raporlar** | Hangi bilgiler hangi biçimde sunuluyor? Kim okuyor? |
| **İş kuralları kılavuzu** | İşletmenin mantığı nedir? (indirim kuralları, onay süreçleri) |
| **Yasal mevzuat** | Sistemi etkileyen regülasyonlar (KVKK, GDPR, vergi mevzuatı) |
| **Hata/şikâyet kayıtları** | Mevcut sistemin en çok nerede acı verdiği |

> **Pro tip:** Eski sistemin hata logları ve destek talepleri, kullanıcıların asla söylemeyeceği ama her gün yaşadığı sorunları ortaya koyar.

---

## 5. Workshop ve Beyin Fırtınası — Herkes Aynı Odada

Birden fazla paydaş grubu **çatışan gereksinimlere** sahip olduğunda, hepsini aynı odaya (veya aynı Miro/FigJam panosuna) toplamak gerekir. İşte workshop tekniği burada devreye girer.

**JAD (Joint Application Development)**, IBM tarafından 1970'lerde geliştirilen ve bugün hâlâ kullanılan bir workshop tekniğidir. Araştırmalar, JAD'ın geleneksel görüşme yöntemine kıyasla gereksinim toplama süresini **%15-20 kısalttığını** göstermektedir.

### Workshop Yönetimi: 5 Altın Kural

1. **Katılımcı sayısını 5-12 ile sınırla:** 20 kişilik toplantıda herkes konuşamaz, sessizler ezilir.

2. **Kolaylaştırıcı (facilitator) ata:** Bu kişi tarafsız kalmalı ve hiçbir fikre taraf olmamalı. Görevi: herkesin sesini duyurmak.

3. **Araçları hazırla:** Whiteboard, Post-it notlar, dijital araçlar (Miro, FigJam). Fikirlerin görselleştirilmesi tartışmayı somutlaştırır.

4. **Önce ıraksak, sonra yakınsak düşün:**
   - **Iraksak (divergent):** Tüm fikirleri topla, eleştirme, "kötü fikir" deme. Amaç: miktar.
   - **Yakınsak (convergent):** Topladıkların arasında ele, önceliklendir, grupla. Amaç: kalite.

5. **Gerçek zamanlı dokümante et:** Toplantıdan çıkıp "ne konuştuk?" dememek için kararları ve tartışmaları anlık kaydet.

---

## 6. Prototip ile Gereksinim Netleştirme — "Gördüğümde Anlıyorum"

İşte en ilginç teknik. Kullanıcılar genellikle soyut bir konsepti değerlendirmekte zorlanır. Ama bir **wireframe** ya da **tıklanabilir prototip** gördüklerinde bambaşka bir insan olurlar:

> *"Tam da bunu istiyordum!"* veya *"Hayır hayır, bu hiç öyle değil!"*

Bu fenomenin bir adı bile var: **IKIWISI** — *"I Know It When I See It"* (Gördüğümde ne istediğimi anlıyorum).

### Prototipleme Araçları

| Araç | Tür | Öğrenme Eşiği |
|------|-----|:-------------:|
| **Kâğıt-kalem** | Düşük sadakat (lo-fi) | ⭐ Çok kolay |
| **Balsamiq** | Wireframe | ⭐⭐ Kolay |
| **Figma** | Yüksek sadakat (hi-fi) | ⭐⭐⭐ Orta |
| **Adobe XD** | Yüksek sadakat | ⭐⭐⭐ Orta |

### Dikkat: Prototip Tuzağı!

Prototipin ciddi bir riski var: kullanıcı prototipi **gerçek sistem sanabilir.** "Aaa zaten bitmişsiniz!" diyebilir veya prototipteki bir detaya takılıp asıl gereksinimleri gözden kaçırabilir.

**Çözüm:** Her görüşmenin başında şunu vurgulayın: *"Bu bir taslaktır, her şey değişebilir. Amacımız bitmiş ürün göstermek değil, fikirlerinizi almaktır."*

---

## 7. Use Case vs User Story — İki Farklı Dil

Gereksinimleri belgelemenin iki popüler yöntemi vardır. Hangisini kullanacağınız, proje metodolojinize bağlıdır.

### Use Case (Kullanım Senaryosu)

**Ivar Jacobson** tarafından 1987'de geliştirilen use case, bir aktörün belirli bir amacı gerçekleştirmek için sistemle nasıl etkileşime girdiğini anlatan **senaryo tabanlı** bir gereksinim ifadesidir.

```
Use Case: Ürün İlanı Oluştur
───────────────────────────────
Aktör:        Satıcı (Öğrenci)
Ön Koşul:     Kullanıcı sisteme giriş yapmış olmalı
Tetikleyici:  Satıcı "Yeni İlan" butonuna tıklar

Ana Akış:
  1. Sistem, ilan oluşturma formunu gösterir.
  2. Satıcı başlık, açıklama, fiyat ve kategori girer.
  3. Satıcı en az 1 fotoğraf yükler.
  4. Satıcı "Yayınla" butonuna tıklar.
  5. Sistem ilanı kaydeder ve detay sayfasını gösterir.

Alternatif Akış:
  3a. Fotoğraf boyutu 5 MB'ı aşarsa → sistem uyarı verir.
  4a. Zorunlu alan eksikse → sistem kırmızı hata mesajı gösterir.

Son Koşul:    İlan aktif olarak yayınlanmış durumda.
```

### User Story (Kullanıcı Hikâyesi)

Agile/Scrum dünyasının dili. **Mike Cohn**'un 2004'te standartlaştırdığı format:

```
"Ben bir [kullanıcı rolü] olarak, 
 [hedef/ihtiyaç] için 
 [özellik/işlev] yapabilmek istiyorum."
```

**Örnek:**
> *"Ben bir satıcı olarak, ürünümü platforma ekleyebilmek için ilan oluşturma formu kullanabilmek istiyorum."*

Ve her user story'ye **kabul kriterleri** (acceptance criteria) eklenir:

- ✅ Forma başlık, açıklama, fiyat ve en az 1 fotoğraf girildiğinde form gönderilebilir.
- ✅ Eksik zorunlu alan varsa kullanıcı kırmızı hata mesajıyla uyarılır.
- ✅ Başarılı kayıt sonrası kullanıcı ilanının detay sayfasına yönlendirilir.

### Karşılaştırma

| Özellik | Use Case | User Story |
|---------|:--------:|:----------:|
| Detay seviyesi | ✅ Çok detaylı | ❌ Kısa ve öz |
| Alternatif akışlar | ✅ Tanımlanır | ❌ Ayrı story'lerde |
| Metodoloji | Waterfall / RUP | Agile / Scrum |
| Yazım süresi | Uzun | Kısa |
| Değişime uyum | Zor (büyük doküman) | Kolay (küçük kartlar) |
| Paydaş anlayabilirliği | Orta (teknik) | ✅ Yüksek (herkes anlar) |

> **Hangisini kullanmalı?** Proje Waterfall veya V-Model ise Use Case. Agile ise User Story. Hibrit projelerde ikisi de kullanılabilir — user story'ler sprint planlamasında, use case'ler detaylı tasarımda.

---

## Teknikleri Birleştirme Stratejisi

İşte usta bir analistin yaklaşımı — tek teknik değil, **strateji**:

```
PROJE BAŞLANGICI
    │
    ├─→ Doküman Analizi (mevcut sistemi anla)
    │
    ├─→ Gözlem (gerçek çalışma ortamını izle)
    │
    ├─→ Görüşmeler (derinlemesine anlayış)
    │       ├── Son kullanıcılar (5-7 kişi)
    │       ├── Yöneticiler (2-3 kişi)
    │       └── Teknik ekip (2-3 kişi)
    │
    ├─→ Workshop (çatışmaları çöz, öncelikleri belirle)
    │
    ├─→ Anket (geniş kitlede doğrula)
    │
    └─→ Prototip (görselleştir, geri bildirim al)
            │
            └─→ İkinci tur görüşme (prototipi tartış)
```

Her teknik bir öncekinin açığını kapatır. Doküman analizi bağlam verir, gözlem gerçeği gösterir, görüşme derinlik katar, workshop çatışmaları çözer, anket geneli doğrular, prototip somutlaştırır.

---

## Uygulama Ödevi: Soru Seti Hazırlama

Kampüs İkinci El Platformu projeniz için aşağıdaki **üç paydaş grubuna** yönelik görüşme soru setleri hazırlayın. Her grup için **en az 5 soru** yazın:

| Paydaş Grubu | Odak Noktası |
|--------------|-------------|
| **Son Kullanıcılar** (alıcı/satıcı öğrenciler) | Günlük alışkanlıklar, sorunlar, beklentiler |
| **Yöneticiler** (platform sahibi / üniversite) | İş hedefleri, başarı kriterleri, kısıtlar |
| **Teknik Ekip** | Mevcut altyapı, entegrasyon noktaları, teknik kısıtlar |

> **İpucu:** Her sorunun "evet/hayır" ile bitmediğinden emin olun. Kullanıcıyı düşünmeye ve anlatmaya zorlayan sorular yazın.

---

## Özet: Bu Derste Öğrendiklerimiz

| Teknik | Güçlü Yönü | Zayıf Yönü | Ne Zaman Kullan? |
|--------|-----------|-----------|------------------|
| **Görüşme** | Derin anlayış, gizli gereksinimler | Zaman alıcı, az kişiye ulaşır | Her projede, kesinlikle |
| **Anket** | Geniş kitle, nicel veri | Yüzeysel, takip sorusu yok | Görüşmeleri doğrulamak için |
| **Gözlem** | Gerçek davranışı ortaya koyar | Gözlemci etkisi, zaman alıcı | Söylenen vs yapılan farkını bulmak için |
| **Doküman Analizi** | Mevcut sistemi anlar | Güncel olmayabilir | Proje başlangıcında bağlam için |
| **Workshop** | Çatışmaları çözer, konsensüs sağlar | Lojistik zorluk, baskın kişilikler | Çok paydaşlı, karmaşık projelerde |
| **Prototip** | Soyutu somutlaştırır | "Bitmiş ürün" yanılgısı | Arayüz gereksinimlerinde |
| **Use Case** | Detaylı senaryo tanımı | Uzun, değişmesi zor | Waterfall / detaylı tasarım |
| **User Story** | Kısa, herkes anlar | Detay eksik kalabilir | Agile / sprint planlama |

---

## Kaynaklar

- Weinberg, G. M. (1975). *An Introduction to General Systems Thinking*. Dorset House.
- Norman, D. (2013). *The Design of Everyday Things* (Revised ed.). Basic Books.
- Cohn, M. (2004). *User Stories Applied*. Addison-Wesley.
- Cockburn, A. (2001). *Writing Effective Use Cases*. Addison-Wesley.
- Wood, J. & Silver, D. (1995). *Joint Application Development* (2nd ed.). Wiley.
- Kotonya, G. & Sommerville, I. (1998). *Requirements Engineering*. Wiley.
