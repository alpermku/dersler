---
layout: post
title: "Sunum Hazırlama ve Sunma Rehberi: Sahneye Çıkmadan Önce Bilmeniz Gereken Her Şey"
date: 2026-03-10
categories: genel-kultur
---

Bir projeniz var. Harika çalıştınız. Ama jürinin önüne geçtiğinizde eliniz titriyor, slaytlarınız duvar gibi metin dolu ve 5 dakika sonra dinleyiciler telefonlarına bakıyor. Tanıdık geldi mi?

**Sunum yapmak bir yetenektir — ama doğuştan gelen türden değil.** Öğrenilebilir, pratik edilebilir ve sistematik olarak geliştirilebilir. Bu rehberde, dünyanın en iyi sunum yapan insanlarının tekniklerini öğrenecek ve bir daha asla "slayta bakarak okuma" yapmayacaksınız.

---

## 1. Sunum Neden Bu Kadar Önemli?

Yazılım sektöründe teknik beceri tek başına yetmez. Fikirlerinizi **anlatabilmeniz** gerekir:

- Staj/iş mülakatlarında kendinizi sunarsınız
- Sprint demo'larında yaptığınız işi ekibe gösterirsiniz
- Mezuniyet projesinde jüriye savunma yaparsınız
- Bir gün kendi startup'ınızı yatırımcıya pitch edersiniz

> "Dünyayı değiştirecek bir fikriniz olabilir, ama onu insanlara anlatamıyorsanız hiçbir önemi yoktur."
> — **Steve Jobs**, Apple kurucusu

Araştırmalar, iş dünyasında **terfi alan kişilerin %70'inin** iyi sunum ve iletişim becerilerine sahip olduğunu gösteriyor (Prezi, 2024 State of Presentations raporu). Yani sunum becerisi sadece okul ödevi değil — **kariyer hızlandırıcısıdır**.

---

## 2. HAZIRLIK — Slayttan Önce Yapılacaklar

Çoğu insan sunuma PowerPoint'i açarak başlar. Bu en büyük hatadır.

> "Asla bilgisayarın başında oturarak sunuma başlamayın. Önce kağıt ve kalemle düşünün. Slaytlar fikirlerinizi destekler — fikrin kendisi değildir."
> — **Nancy Duarte**, *Resonate* ve *Slide:ology* yazarı, Duarte Design kurucusu

### 2.1 Üç Temel Soruyu Cevaplayın

Tek bir slayt tasarlamadan önce şu üç soruya net cevap verin:

| Soru | Ne Demek? | Örnek |
|------|-----------|-------|
| **Kim dinliyor?** | Dinleyici kitlesi kim? Teknik bilgileri ne düzeyde? | Hoca + jüri mi? Teknik ekip mi? Yönetici mi? |
| **Ne istiyorum?** | Sunum sonunda dinleyicinin ne yapmasını istiyorsunuz? | Projeyi onaylasın? Teknik yaklaşımı anlasın? İşe alsın? |
| **Neden önemsesinler?** | Dinleyici neden vaktini ayırsın? Onlara ne faydası var? | "Bu proje sipariş süresini %40 kısaltıyor" |

> "Bir sunumu hazırlarken kendinizi değil, dinleyiciyi düşünün. Her slayt şu soruya cevap vermeli: 'Bu dinleyicinin işine nasıl yarıyor?'"
> — **Garr Reynolds**, *Presentation Zen* yazarı, sunum tasarımı uzmanı

### 2.2 Mesajınızı Bir Cümleye Sığdırın

Sunumunuzun **tek bir ana mesajı** olmalı. Buna "Big Idea" denir.

**Test:** Birisi asansörde "sunumun ne hakkındaydı?" diye sorsa, tek cümleyle cevap verebiliyor musunuz?

```
❌ "Java ile bir şeyler yaptık, veritabanı da var, API de yazdık,
    arayüz de var, hepsini anlattık"

✅ "Spring Boot ile geliştirdiğimiz REST API, mevcut sipariş
    sürecini 3 adıma indiriyor ve işlem süresini yarıya düşürüyor"
```

> "Eğer mesajınızı bir cümleye sığdıramıyorsanız, sunumunuz için hazır değilsiniz."
> — **Guy Kawasaki**, Apple'ın ilk evangelisti, *The Art of the Start* yazarı

### 2.3 Yapıyı Kurgulayın — Hikaye Anlatın

İnsan beyni listeyi değil, **hikayeyi** hatırlar. Stanford Üniversitesi'nde yapılan bir araştırma, hikaye formatında sunulan bilgilerin listelerden **22 kat daha fazla** hatırlandığını ortaya koymuştur.

#### Klasik 3 Perdeli Yapı

Her iyi sunum, her iyi film gibi üç perdeden oluşur:

```
┌─────────────────────────────────────────────────────┐
│                                                       │
│  PERDE 1: SORUN          "Dünya böyle — ve bu kötü"  │
│  ──────────────                                       │
│  Mevcut durumu anlatın.                               │
│  Dinleyicinin hissettiği acıyı/sorunu tanımlayın.    │
│  Merak uyandırın.                                     │
│                                                       │
│  PERDE 2: ÇÖZÜM          "Ama başka bir yol var"     │
│  ──────────────                                       │
│  Çözümünüzü sunun.                                    │
│  Demo/kanıt gösterin.                                 │
│  Teknik detayları verin.                              │
│                                                       │
│  PERDE 3: SONUÇ          "İşte böyle daha iyi olur"  │
│  ──────────────                                       │
│  Faydaları özetleyin.                                 │
│  Eylem çağrısı yapın (call to action).                │
│  Akılda kalıcı bir kapanış.                           │
│                                                       │
└─────────────────────────────────────────────────────┘
```

> "Her büyük sunum aslında bir dönüşüm hikayesidir. 'Dünya böyleydi, ama biz bunu değiştirdik' — bu yapı binlerce yıldır işliyor."
> — **Nancy Duarte**, TED konuşması, *The Secret Structure of Great Talks*

#### Örnek: Bitirme Projesi Sunumu

| Perde | İçerik | Süre |
|-------|--------|------|
| **1 — Sorun** | "KOBİ'lerin %60'ı hâlâ siparişleri Excel'de takip ediyor. Bu ayda ortalama 5 saat kayıp ve %12 hata oranı demek." | 2 dk |
| **2 — Çözüm** | "Spring Boot + React ile geliştirdiğimiz sistem: otomatik sipariş takibi, anlık stok güncelleme, 3 adımlık akış." [Canlı demo] | 8 dk |
| **3 — Sonuç** | "Test sonuçları: hata oranı %12'den %1'e düştü, işlem süresi %55 azaldı. Bir sonraki adım: mobil uygulama." | 2 dk |

---

## 3. SLAYT TASARIMI — Az Çoktur

### 3.1 Guy Kawasaki'nin 10/20/30 Kuralı

> "Bir sunumda **10 slayttan** fazla olmamalı, **20 dakikadan** fazla sürmemeli ve font boyutu **30 puntodan** küçük olmamalı."
> — **Guy Kawasaki**

Bu kural özellikle proje sunumları ve pitch'ler için altın standarttır. Neden?

| Kural | Gerekçe |
|-------|---------|
| **10 slayt** | İnsan beyni bir oturumda 10'dan fazla kavramı işleyemez |
| **20 dakika** | Dikkat süresi 18-20 dakikada çöker (TED de bu yüzden 18 dk) |
| **30 punto** | Sizi slayta metin doldurmaktan alıkoyar. Az metin = çok konuşma |

### 3.2 Slayt Tasarım İlkeleri

#### Bir Slayt = Bir Fikir

> "Slaytlarınızı billboard gibi düşünün. Bir billboard'da kaç kelime olur? Altı. Araba geçerken okunabilecek kadar az, merak edecek kadar çekici."
> — **Seth Godin**, pazarlama gurusu, *Really Bad PowerPoint* yazarı

```
❌ KÖTÜ SLAYT:
┌──────────────────────────────────────────┐
│ Proje Hakkında                            │
│                                           │
│ Bu proje kapsamında Java programlama      │
│ dili kullanılarak bir web uygulaması      │
│ geliştirilmiştir. Uygulama Spring Boot    │
│ framework'ü üzerinde çalışmaktadır.       │
│ Veritabanı olarak MySQL tercih            │
│ edilmiştir. Frontend tarafında React      │
│ kütüphanesi kullanılmıştır. Proje        │
│ Agile metodolojisi ile yönetilmiştir.    │
│ Toplam 8 haftalık bir süreçte             │
│ tamamlanmıştır. Test coverage oranı       │
│ %78'dir. Deployment Docker ile            │
│ yapılmaktadır...                          │
│                                           │
└──────────────────────────────────────────┘
Dinleyici düşüncesi: "Bunu okuyacak mıyım şimdi?"


✅ İYİ SLAYT:
┌──────────────────────────────────────────┐
│                                           │
│                                           │
│         İşlem süresi %55 azaldı.          │
│                                           │
│              📉  12dk → 5dk               │
│                                           │
│                                           │
└──────────────────────────────────────────┘
Dinleyici düşüncesi: "Vay, nasıl başardılar?"
```

#### Altı Altı Kuralı (6×6)

Eğer 30 punto kuralı size fazla geliyorsa, en azından şunu uygulayın:

- Bir satırda en fazla **6 kelime**
- Bir slayttta en fazla **6 satır**

Bu bile sizi paragraf yazmaktan kurtarır.

#### Görsel Hiyerarşi

| Öğe | Boyut | Renk |
|-----|-------|------|
| Başlık | 36-44pt | Koyu, dikkat çekici |
| Alt başlık | 24-28pt | Orta ton |
| Madde metni | 20-24pt | Normal |
| Kaynak/not | 14-16pt | Açık gri |

#### Renk Kullanımı

> "Renk bir süs değil, bilgi taşıyıcısıdır. Her rengin bir anlamı olmalı — yoksa gürültüdür."
> — **Edward Tufte**, veri görselleştirme uzmanı, Yale Üniversitesi

- **3 renkle sınırlı kalın:** Ana renk + vurgu rengi + nötr (beyaz/koyu gri)
- Arka plan beyaz veya çok açık gri — koyu arka plan okunabilirliği düşürür
- Kırmızıyı sadece uyarı/önemli veri için kullanın, her yere serpmeyeyin

#### Font Seçimi

| ✅ Kullanın | ❌ Kaçının |
|------------|-----------|
| Calibri, Arial, Helvetica | Comic Sans, Papyrus |
| Segoe UI, Inter | Times New Roman (ekranda kötü okunur) |
| Roboto, Open Sans | Dekoratif/el yazısı fontlar |

**Tek font ailesi** yeterli. Başlıklarda kalın (bold), gövdede normal ağırlık.

### 3.3 Görsel Kullanımı

> "Bir resim bin kelimeye bedeldir — ama yanlış resim bin kelimelik karışıklığa bedeldir."
> — **Garr Reynolds**, *Presentation Zen*

**Kullanın:**
- Yüksek çözünürlüklü, konuyla ilgili fotoğraflar
- Basit ve temiz diyagramlar
- Veriyi görselleştiren grafikler (çubuk, çizgi, pasta)
- İkon setleri (tutarlı stil)

**Kaçının:**
- Clip art (2005'te kaldı)
- Watermark'lı stok fotoğraflar
- Düşük çözünürlüklü / bulanık görseller
- Animasyonlu GIF'ler (profesyonel sunumda yeri yok)
- Her slayta farklı tarzda görsel

**Ücretsiz görsel kaynakları:**
- [Unsplash](https://unsplash.com) — yüksek kalite fotoğraf
- [Pexels](https://pexels.com) — ücretsiz stok fotoğraf
- [Flaticon](https://flaticon.com) — ikon setleri
- [Undraw](https://undraw.co) — SVG illüstrasyonlar
- [Canva](https://canva.com) — hazır şablonlar

---

## 4. SLAYT YAPISI — 10 Slaytlık Şablon

Aşağıdaki şablon, öğrenci projesi veya staj sunumu için idealdir:

| # | Slayt | İçerik | Süre |
|---|-------|--------|------|
| 1 | **Kapak** | Proje adı, isimler, tarih, üniversite logosu | 30 sn |
| 2 | **Problem** | Çözdüğünüz sorun nedir? Neden önemli? | 2 dk |
| 3 | **Mevcut Durum** | Şu an bu sorun nasıl çözülüyor? Eksiklikler neler? | 1.5 dk |
| 4 | **Çözüm Özeti** | Sizin yaklaşımınız — tek cümle + görsel | 1 dk |
| 5 | **Mimari / Teknik** | Sistem mimarisi diyagramı, teknoloji stack'i | 2 dk |
| 6 | **Demo / Ekran Görüntüleri** | Canlı demo veya ekran görüntüleri | 3 dk |
| 7 | **Sonuçlar** | Sayılarla sonuç: performans, test, metrikler | 1.5 dk |
| 8 | **Öğrenilenler** | Ne öğrendiniz? Zorluklar neydi? Tekrar yapsan ne değiştirirdin? | 1.5 dk |
| 9 | **Gelecek Planı** | Sonraki adımlar, genişletme planları | 1 dk |
| 10 | **Sorular** | "Teşekkürler — Sorularınız?" + iletişim bilgileri | — |

> "Sunum slaytlarınız bir teleprompt değildir. Slaytlarda yazanı okumayın — slaytlar sizin söylediklerinizi **destekler**, siz slaytları desteklemezsiniz."
> — **Chris Anderson**, TED küratörü, *TED Talks: The Official TED Guide to Public Speaking* yazarı

---

## 5. DEMO — Sunumun Kalbi

Teknik bir sunum yapıyorsanız, **canlı demo** en güçlü silahınızdır. Ama aynı zamanda en tehlikeli olanıdır.

### Demo Kuralları

> "Demo tanrıları acımasızdır. Murphy Yasası en çok canlı demo sırasında işler."
> — Yazılım sektörü atasözü

| Kural | Neden |
|-------|-------|
| **Her zaman yedek plan** | İnternet kesilir, sunucu çöker, kod hata verir. Ekran kayıt videosu hazır olsun |
| **Senaryo belirle** | "Şimdi bir kullanıcı ekleyelim, sonra siparişe bakalım" — adım adım planla |
| **Veriyi önceden hazırla** | Boş veritabanı ile demo yapma. Gerçekçi test verisi olsun |
| **Font boyutunu büyüt** | IDE'de 18-20pt, terminal'de 16-18pt. Arka sıradan okunmalı |
| **Bildirimleri kapat** | Sunum sırasında WhatsApp mesajı pop-up'ı → felaket |
| **2 dakikayı geçmesin** | Demo kısa ve vurucu olmalı. "Bakın her şey çalışıyor" yeterli |

### Video Yedek Planı

Demo öncesi mutlaka çalışan bir ekran kaydı alın:

- **Windows:** Xbox Game Bar (Win+G) veya OBS Studio
- **Mac:** QuickTime Player → Yeni Ekran Kaydı
- **Linux:** OBS Studio veya SimpleScreenRecorder

Demo çalışmazsa: "Canlı demoda teknik bir sorun yaşandı, izninizle kaydedilmiş demoyu göstereyim" — profesyonel ve soğukkanlı.

---

## 6. SUNMA TEKNİKLERİ — Sahne Performansı

Slaytlar hazır. Şimdi **siz** sahnedesiniz.

### 6.1 İlk 30 Saniye — Altın Zaman

> "Bir sunumun ilk 30 saniyesi, dinleyicinin 'dinleyeceğim mi yoksa telefonuma mı bakacağım' kararını verdiği andır."
> — **Carmine Gallo**, *Talk Like TED* yazarı

**İlk 30 saniyede yapmanız gerekenler:**

```
❌ "Merhaba, ben Ahmet, bugün sizlere projemizi anlatacağım,
    projemizin adı şu, bu teknolojiyi kullandık..."

✅ "Türkiye'deki KOBİ'lerin %60'ı siparişlerini hâlâ Excel'de
    takip ediyor. Bu yılda ortalama 240 saat kayıp demek.
    Biz bu sorunu 3 adıma indirdik."
```

**Etkili açılış teknikleri:**

| Teknik | Örnek |
|--------|-------|
| **Şaşırtıcı istatistik** | "Her gün 2.5 milyar satır kod yazılıyor. Bunun %85'i bir yıl içinde çöpe gidiyor." |
| **Soru sorma** | "Son bir hafta içinde kaç saatinizi bug aramakla geçirdiniz?" |
| **Kısa hikaye** | "Geçen ay bir KOBİ sahibiyle konuştum. 'Siparişleri Excel'de tutuyoruz ama her ay en az 3 sipariş kaybediyoruz' dedi." |
| **Provokasyon** | "PowerPoint sunumları insanlığın en büyük verimlilik katilidir. Ve şu an ben de bir tane yapıyorum." |

> "Asla 'kendimi tanıtarak başlayayım' demeyin. Hikayeyle veya veriyle başlayın. Kendinizi tanıtma zamanı zaten gelecek."
> — **Brené Brown**, Houston Üniversitesi profesörü, 65M+ izlenen TED konuşmacısı

### 6.2 Ses ve Beden Dili

Söyledikleriniz mesajın sadece **%7'sini** oluşturur. Geri kalanı ses tonu (%38) ve beden dilidir (%55) — bu Mehrabian'ın iletişim modeline dayanır.

#### Ses

| Teknik | Nasıl | Neden |
|--------|-------|-------|
| **Hız değişimi** | Önemli noktalarda yavaşlayın | Vurgu ve dikkat çekme |
| **Ses tonu değişimi** | Monoton konuşmayın, melodi gibi iniş çıkış olsun | Monoton = uyku ilacı |
| **Stratejik sessizlik** | Önemli bir şey söylemeden önce 2-3 saniye durun | Merak ve beklenti yaratır |
| **Ses seviyesi** | Arka sıranın duyabileceği kadar yüksek | Güven ve otorite sinyali |

> "Sessizlik, bir konuşmacının en güçlü aracıdır. Çoğu insan sessizlikten korkar — ama dinleyici sessizlikte düşünür."
> — **Julian Treasure**, ses ve iletişim uzmanı, TED konuşmacısı

#### Beden Dili

| Yapın ✅ | Yapmayın ❌ |
|---------|------------|
| Ayakta durun (mümkünse) | Masanın arkasına saklanmayın |
| Göz teması kurun (her bölgeye) | Sadece hocaya/tek kişiye bakmayın |
| Avuç içi açık jestler | Ceplerde el, kollar kavuşturma |
| Sahneyi kullanın (2-3 adım) | Bir noktada çakılıp kalmayın |
| Gülümseyin (doğal) | Yere veya tavana bakmayın |
| Dik duruş, omuzlar açık | Ekrana dönük konuşmayın |

> "Vücut konuşmaya başlamadan önce konuşur. Sahneye çıktığınız an — henüz ağzınızı açmadan — dinleyici sizin hakkınızda bir karar veriyor."
> — **Amy Cuddy**, Harvard sosyal psikoloğu, *Presence* yazarı

### 6.3 "Eee... Şey... Yani..." Hastalığı

Dolgu kelimeleri (filler words) güvensizlik sinyali gönderir. Tamamen yok edemezsiniz ama azaltabilirsiniz:

**Teknik:** "Eee" diyeceğiniz yerde **nefes alın**. Sessizlik, "eee"den her zaman daha iyidir.

**Pratik yöntemi:**
1. Sunumunuzu telefonla kaydedin
2. Dinleyin ve "eee/şey/yani" sayısını not edin
3. Aynı sunumu tekrar yapın — bu sefer her "eee" yerine 1 saniye sessizlik bırakın
4. Tekrar kaydedin ve karşılaştırın

3-4 tekrarda belirgin fark göreceksiniz.

### 6.4 Soru-Cevap Yönetimi

Sunum bitti, sorular başladı. Birçok insan için en stresli kısım burası.

> "Bir soruya cevabınızı bilmemek utanılacak bir şey değildir. 'Bilmiyorum ama araştırıp döneyim' demek, uydurarak cevap vermekten her zaman daha profesyoneldir."
> — **Hans Rosling**, İsveçli istatistikçi, *Factfulness* yazarı

**Soru-cevap taktikleri:**

| Durum | Ne Yapmalı |
|-------|-----------|
| Cevabı biliyorsunuz | Kısa ve net cevap verin. Hikaye anlatmayın |
| Cevabı bilmiyorsunuz | "Harika soru. Bu konuyu detaylıca araştırıp size döneceğim" |
| Soru aslında eleştiri | "Bu geçerli bir nokta. Biz de X yaklaşımını değerlendirdik ve Y sebebiyle bu yolu tercih ettik" |
| Çok uzun/karmaşık soru | "Doğru anladığımdan emin olmak istiyorum — siz X'i mi soruyorsunuz?" |
| Konu dışı soru | "Bu çok ilginç bir konu. Sunum sonrası detaylıca konuşabiliriz" |

---

## 7. GENEL HATALAR ve DÜZELTMELERİ

| # | Hata | Etki | Düzeltme |
|---|------|------|----------|
| 1 | Slaytı okumak | Dinleyici "bunu ben de okuyabilirdim" der | Slayta anahtar kelime koy, detayı sen anlat |
| 2 | 40+ slaytlık sunum | Bilgi bombardımanı → hiçbir şey hatırlanmaz | 10-15 slayt, her biri tek fikir |
| 3 | 8pt fontla tablo koymak | Okunmaz, güven düşer | Tablo yerine 3-4 madde, büyük font |
| 4 | "Bunu muhtemelen göremiyorsunuz ama..." | Neden koydun o zaman? | Gösteremeyeceğin şeyi koyma |
| 5 | Süreyi aşmak | Saygısızlık, dikkat kaybı | Prova yapın, kronometre tutun |
| 6 | Özür dilerek başlamak | Güvensizlik sinyali | "Hazır değilim" yerine hazırlıklı gelin |
| 7 | Ekrana dönük konuşmak | Dinleyiciyle bağ kopuyor | Monitör/notları önünüze koyun |
| 8 | Animasyon çılgınlığı | Dikkat dağıtıcı, amatör görünüm | Sadece "Appear" ve "Fade" yeterli |

---

## 8. PROVA — En Çok İhmal Edilen Adım

> "Bir sunumun her dakikası için en az bir saat hazırlık yapılmalıdır."
> — **Dale Carnegie**, *The Art of Public Speaking* yazarı, modern sunum eğitiminin babası

Bu abartı gibi görünüyor ama Steve Jobs bile her Apple keynote'u için **haftalarca** prova yapardı.

### Prova Yöntemi

1. **Sessiz okuma (1. tur):** Slaytları baştan sona okuyun. Akış mantıklı mı?
2. **Sesli prova (2. tur):** Ayakta, sesli yapın. Süreyi ölçün.
3. **Kayıtlı prova (3. tur):** Telefona kaydedin. İzleyin. Utanacaksınız — bu normal.
4. **Seyircili prova (4. tur):** Bir arkadaşınıza yapın. Geri bildirim isteyin.
5. **Mekan provası (5. tur):** Mümkünse sunum yapacağınız yerde bir kez daha çalışın.

> "Prova yapmak sunumu ezberlemeek demek değildir. Prova, fikirleri o kadar iyi bilmektir ki onları herhangi bir sırayla, herhangi bir şekilde anlatabilirsiniz."
> — **Chris Anderson**, TED küratörü

### Süre Yönetimi

| Verilen Süre | Gerçek Konuşma | Soru-Cevap İçin Bırakın |
|-------------|----------------|--------------------------|
| 10 dakika | 7-8 dakika | 2-3 dakika |
| 15 dakika | 11-12 dakika | 3-4 dakika |
| 20 dakika | 15-16 dakika | 4-5 dakika |

**Altın kural:** Verilen sürenin **%75-80'ini** konuşma, **%20-25'ini** soru-cevap için ayırın. Süreyi aşmak, slaytı okumaktan bile daha büyük bir hatadır.

---

## 9. TEKNİK DETAYLAR — Sunum Günü

### Sunum Öncesi Kontrol Listesi

- [ ] Sunum dosyası USB'de VE bulutta (Google Drive / OneDrive)
- [ ] PDF versiyonu da var (PowerPoint açılmazsa diye)
- [ ] Laptop şarjı %100 veya şarj kablosu yanımda
- [ ] Demo için internet bağlantısı test edildi
- [ ] Video yedek plan hazır
- [ ] Telefon sessizde, bildirimler kapalı
- [ ] Su şişesi yanımda
- [ ] Presenter/kumanda varsa pili kontrol ettim
- [ ] Font'lar gömülü (başka bilgisayarda açılacaksa)
- [ ] Projeksiyon/ekran ile uyumluluk test edildi

### PowerPoint vs. Google Slides vs. Diğerleri

| Araç | Avantaj | Dezavantaj |
|------|---------|------------|
| **PowerPoint** | En yaygın, zengin özellik | Dosya boyutu büyük, versiyon sorunları |
| **Google Slides** | Bulut tabanlı, işbirliği kolay | İnternet gerekli, sınırlı animasyon |
| **Canva** | Güzel şablonlar, kolay tasarım | Ücretsiz versiyonda sınırlı |
| **reveal.js** | Kod tabanlı, geek-friendly | Öğrenme eğrisi var |
| **PDF** | Her yerde açılır, font sorunu yok | Düzenlenemez, animasyon yok |

**Tavsiye:** Google Slides + PDF yedek. İşbirliği kolaylığı + her yerde açılabilirlik.

---

## 10. SUNUM PSİKOLOJİSİ — Sahne Korkusunu Yenmek

> "Araştırmalara göre insanların en büyük korkusu ölüm değil, topluluk önünde konuşmaktır. Yani cenazede tabuttaki olmaktansa, methiye okuyanı olmayı tercih ediyorsunuz."
> — **Jerry Seinfeld**, komedyen

Sahne korkusu (glossophobia) nüfusun **%75'ini** etkiler. Bu normal. Ve yönetilebilir.

### Korku Yönetim Teknikleri

#### 1. Yeniden Çerçeveleme

Korkuyu "heyecan" olarak yeniden adlandırın. Fizyolojik belirtiler (kalp çarpıntısı, terleme) korku ve heyecan için **aynıdır**. Beyninize "korkuyorum" yerine "heyecanlıyım" deyin.

> "Kaygıyı bastırmaya çalışmayın — onu heyecana dönüştürün. 'Sakin ol' demek işe yaramaz. 'Heyecanlıyım' demek işe yarar."
> — **Alison Wood Brooks**, Harvard Business School profesörü

#### 2. Nefes Tekniği (4-7-8)

Sahneye çıkmadan 2 dakika önce:
- 4 saniye **nefes al**
- 7 saniye **tut**
- 8 saniye **yavaşça ver**
- 3 kez tekrarla

Bu teknik parasempatik sinir sistemini aktive eder ve kalp atış hızını düşürür.

#### 3. Güç Pozu

Amy Cuddy'nin araştırmasına göre, sahneye çıkmadan önce 2 dakika boyunca "güç pozu" (eller belde, ayaklar omuz genişliğinde) yapmak kortizol seviyesini düşürür ve testosteron seviyesini artırır → daha güvenli hissedersiniz.

#### 4. Hazırlık = Güven

Sahne korkusunun en etkili ilacı **hazırlıktır**. Malzemenizi ne kadar iyi bilirseniz, o kadar az korkarsınız. Prova, prova, prova.

---

## 11. KAPANIŞ — Hatırda Kalanlar

> "İnsanlar söylediklerinizi unutur, yaptıklarınızı unutur, ama onlara **nasıl hissettirdiğinizi** asla unutmaz."
> — **Maya Angelou**, Amerikalı yazar ve şair

Bir sunum sırasında dinleyiciler her şeyi hatırlamaz. Araştırmalara göre en çok hatırlanan iki an vardır:

1. **Başlangıç** (primacy effect)
2. **Bitiş** (recency effect)

Bu yüzden kapanışınız en az açılışınız kadar güçlü olmalı.

### Etkili Kapanış Teknikleri

| Teknik | Örnek |
|--------|-------|
| **Ana mesajı tekrarla** | "Hatırlayın: 3 adım, %55 hız artışı, sıfır Excel" |
| **Eylem çağrısı** | "Bu projeyi denemek isterseniz, GitHub linkini paylaşıyorum" |
| **Gelecek vizyonu** | "6 ay sonra bu sistemi 500 KOBİ kullanıyor olabilir" |
| **Döngüsel kapanış** | Açılıştaki hikaye/soruya geri dönün ve cevabı verin |

```
❌ "Evet, sunumum bu kadardı, teşekkürler, sorusu olan var mı?"

✅ "Başta bir soru sormuştum: KOBİ'ler neden hâlâ Excel kullanıyor?
    Cevap basit — çünkü daha iyisini görmemişlerdi.
    Artık gördüler. Teşekkürler."
```

---

## 12. SON KONTROL LİSTESİ

### Hazırlık Aşaması
- [ ] Dinleyici analizi yapıldı (kim, ne biliyor, ne istiyor)
- [ ] Ana mesaj tek cümleye sığdırıldı
- [ ] 3 perdeli yapı kurgulandı (sorun → çözüm → sonuç)
- [ ] Slaytlar 10-15 adet, her biri tek fikir
- [ ] Font boyutu 24pt üstü, metin minimal
- [ ] Görseller yüksek kaliteli ve konuyla ilgili
- [ ] Demo senaryosu hazır + video yedek plan var

### Prova Aşaması
- [ ] En az 3 kez sesli prova yapıldı
- [ ] Süre ölçüldü — verilen sürenin %80'inde bitiyor
- [ ] Kayıt izlendi, dolgu kelimeleri not edildi
- [ ] Bir arkadaşa/aileye yapıldı, geri bildirim alındı

### Sunum Günü
- [ ] Dosya USB + bulutta
- [ ] PDF yedek var
- [ ] Telefon sessizde
- [ ] Su şişesi yanımda
- [ ] 4-7-8 nefes tekniği yapıldı
- [ ] İlk cümle ezber — gerisini biliyorum

---

## Alıntılanan Uzmanlar — Okuma Listesi

Bu rehberdeki tavsiyeleri derinleştirmek isterseniz:

| Uzman | Kitap / Kaynak | Odak |
|-------|----------------|------|
| **Nancy Duarte** | *Resonate*, *Slide:ology* | Sunum tasarımı ve hikaye anlatımı |
| **Garr Reynolds** | *Presentation Zen* | Minimal slayt tasarımı |
| **Guy Kawasaki** | *The Art of the Start* | 10/20/30 kuralı, pitch |
| **Chris Anderson** | *TED Talks: The Official Guide* | TED formatında sunum |
| **Carmine Gallo** | *Talk Like TED* | TED konuşmacılarının 9 sırrı |
| **Dale Carnegie** | *The Art of Public Speaking* | Klasik sunum teknikleri |
| **Amy Cuddy** | *Presence* | Beden dili ve güven |
| **Seth Godin** | *Really Bad PowerPoint* (ücretsiz e-book) | Slayt tasarım hataları |
| **Edward Tufte** | *The Visual Display of Quantitative Information* | Veri görselleştirme |
| **Julian Treasure** | TED konuşmaları (YouTube'da ücretsiz) | Ses ve dinleme |
| **Brené Brown** | TED konuşması: *The Power of Vulnerability* | Sahne cesareti |
| **Hans Rosling** | *Factfulness* + TED konuşmaları | Veriyle sunum |

---

> "Bir sonraki sunumunuzda şunu hatırlayın: siz bir sunum **yapmıyorsunuz** — bir deneyim **yaratıyorsunuz**. Slaytlar unutulur, sayılar solar. Ama insanlara nasıl hissettirdiğiniz? O kalır."

Bir sonraki yazıda: **Git ve GitHub — Sıfırdan Gerçek Dünya Kullanımına**
