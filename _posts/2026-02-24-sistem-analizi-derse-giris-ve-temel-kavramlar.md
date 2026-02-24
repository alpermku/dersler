---
layout: post
title: "Hafta 1 — Derse Giriş ve Temel Kavramlar"
date: 2026-02-24
categories: sistem-analizi-ve-tasarimi
---

Bu bölümde sistem kavramının kökeninden SDLC'ye, bilgi sistemlerinden proje türlerine kadar dersin temelini oluşturan kavramları ele alıyoruz.

## Bu Bölümde Neler Öğreneceksiniz?

- Sistem kavramının kökenini, tarihsel gelişimini ve farklı disiplinlerdeki kullanımını anlayacaksınız.
- Bilgi sistemi ve yazılım sistemi arasındaki farkları kavrayacaksınız.
- Sistem analizi ile sistem tasarımının rollerini ve aralarındaki ilişkiyi öğreneceksiniz.
- SDLC'nin ne olduğunu, neden ortaya çıktığını ve temel aşamalarını kavrayacaksınız.
- Proje türlerini (web, mobil, masaüstü, kurumsal) karşılaştırabileceksiniz.
- Dönem projenizi planlayacaksınız.

---

## 1.1 Sistem Nedir? — Kavramın Kökü ve Derinliği

Sözcük ilk bakışta sıradan görünür: *sistem*. Gündelik dilde "bir düzen", "bir bütün" anlamında kullanılır. Oysa bu kavram, düşünce tarihi boyunca felsefeden mühendisliğe, biyolojiden bilgisayar bilimine uzanan muazzam bir yolculuk yapmış; her durağında yeni anlam katmanları kazanmıştır.

Eski Yunanca **σύστημα** (systema) sözcüğünden gelen bu terim, "bir araya getirilmiş parçalar" anlamına gelir. Antik Yunan'da Aristoteles, *Metafizik* adlı eserinde şu saptamayı yapmıştır:

> "Bütün, parçalarının toplamından fazladır."
> — Aristoteles, *Metafizik*, M.Ö. yaklaşık 350

Bu kısa cümle, binlerce yıl sonra "sistem düşüncesi"nin temel taşı hâline gelecekti. Çünkü bir sistemi anlamak için yalnızca parçalarını saymak yetmez; parçaların birbirleriyle kurduğu ilişkileri, bu ilişkilerin doğurduğu yeni özellikleri (*emergent properties*) kavramak gerekir.

### 1.1.1 Genel Sistem Teorisi: Ludwig von Bertalanffy

20. yüzyılın ortasında Avusturyalı biyolog **Ludwig von Bertalanffy**, farklı bilim dallarındaki ortak yapı örüntülerini fark ederek 1968 yılında *Genel Sistem Teorisi* (General Systems Theory) adlı çığır açan eserini yayımladı. Bertalanffy'ye göre:

> "Canlı organizmalar, toplumlar, makineler — hepsi açık sistemlerdir. Çevrelerinden enerji, madde veya bilgi alarak varlıklarını sürdürürler; denge değil, dinamik bir akış içinde var olurlar."
> — Ludwig von Bertalanffy, *General System Theory*, 1968

Bu bakış açısı, yazılım sistemlerini anlamak için de son derece değerlidir. Bir muhasebe programı, bir e-ticaret platformu ya da bir hastane bilgi sistemi — hepsi dış dünyadan (kullanıcılar, diğer sistemler, veritabanları) veri alır; bu veriyi işleyerek yeni bilgi üretir ve çıktı olarak sunar.

### 1.1.2 Sistem Tanımının Bileşenleri

Bilgisayar biliminde sistem kavramını tanımlamak için şu dört temel bileşen kullanılır:

1. **Girdiler (Inputs):** Sistemin dışarıdan aldığı veriler, komutlar veya kaynaklar.
2. **İşlemler (Processes):** Girdileri çıktılara dönüştüren işlem adımları.
3. **Çıktılar (Outputs):** Sistemin ürettiği sonuçlar, raporlar, eylemler.
4. **Geri Bildirim (Feedback):** Çıktıların sistemi düzeltmek amacıyla yeniden girdi olarak döndürülmesi.

Buna bir de **Sınır (Boundary)** ve **Çevre (Environment)** kavramlarını ekleriz. Sınır, sistemin nerede bitip dış dünyanın nerede başladığını belirler. Yazılım projelerinde bu sınır, çoğu zaman *kapsam (scope)* kavramıyla örtüşür — ilerleyen haftalarda bu konuya derinlemesine döneceğiz.

### 1.1.3 Sistem Türleri

Sistemler pek çok farklı biçimde sınıflandırılabilir. Yazılım mühendisliği açısından en işlevsel sınıflandırma şöyledir:

| Sistem Türü | Örnekler |
|---|---|
| Fiziksel Sistem | Fabrika üretim hattı, bina ısıtma sistemi |
| Soyut Sistem | Matematiksel model, algoritma, iş süreci |
| Açık Sistem | Web uygulaması, API entegrasyonu |
| Kapalı Sistem | Gömülü yazılım (çevre ile sınırlı etkileşim) |
| İnsan-Makine Sistemi | Hastane yönetim yazılımı, ERP sistemi |
| Sosyo-teknik Sistem | Organizasyon + yazılım + insanların bütünü |

Yazılım geliştirme pratiğinde neredeyse her zaman **açık, insan-makine, sosyo-teknik** sistemlerle uğraşırız. Bu gerçek, tasarım kararlarımızı derinden etkiler: sistemi yalnızca teknik açıdan değil, insanın nasıl kullandığı, organizasyonun nasıl çalıştığı ve dış çevrenin nasıl değiştiği açısından da düşünmek zorundayız.

---

## 1.2 Bilgi Sistemi (Information System)

Bilgi sistemi, verileri toplayıp saklayan, işleyen ve karar vericilere anlamlı bilgi sunan örgütsel bir altyapıdır. Bu tanım yalın görünse de içinde **insan, teknoloji ve süreç** üçgenini barındırır.

Klasik tanımı Kenneth C. Laudon ve Jane P. Laudon'ın dünyaca ünlü ders kitabına dayanır:

> "Bilgi sistemi; bir örgütte karar almayı, koordinasyonu, kontrolü, analizi ve görselleştirmeyi desteklemek amacıyla bilgi toplayan, işleyen, saklayan ve dağıtan birbiriyle ilişkili bileşenler kümesidir."
> — Laudon & Laudon, *Management Information Systems*, 16. Baskı, 2023

### 1.2.1 Bilgi Sistemi Bileşenleri

Laudon & Laudon modelinde bir bilgi sisteminin üç temel boyutu vardır:

1. **Organizasyon (Organization):** İş süreçleri, hiyerarşi, kültür, politikalar.
2. **Yönetim (Management):** Stratejik kararlar, kaynakların yönlendirilmesi.
3. **Teknoloji (Technology):** Donanım, yazılım, veri yönetimi, ağ altyapısı.

Bu üç boyutun kesişim noktası "bilgi sistemi"dir. Yalnızca teknolojiyi düşünmek yetersizdir; teknolojiyi insanların ve süreçlerin gerçekliğine uygun biçimde tasarlamak şarttır.

### 1.2.2 Bilgi Sistemleri Türleri

Örgütlerde kullanılan bilgi sistemleri, işlevlerine göre aşağıdaki gibi sınıflandırılır:

| Sistem Türü | İşlevi ve Örneği |
|---|---|
| TPS — İşlem İşleme Sistemi | Günlük operasyonlar: POS cihazı, bordro sistemi |
| MIS — Yönetim Bilgi Sistemi | Orta yönetim raporları: satış özeti, stok raporu |
| DSS — Karar Destek Sistemi | Yarı yapılandırılmış kararlar: fiyatlandırma modeli |
| ESS — Yönetici Destek Sistemi | Üst yönetim panoları, trend analizleri |
| ERP — Kurumsal Kaynak Planlaması | SAP, Oracle: tüm departmanları entegre eder |
| CRM — Müşteri İlişkileri Yönetimi | Salesforce, HubSpot: müşteri verisi merkezi |

Bu sistemlerin tamamı; analistlerin, tasarımcıların ve geliştiricilerin ortaklaşa çalışmasıyla hayat bulur. "Sistem Analizi ve Tasarımı" dersi, tam da bu ortak dilin öğrenildiği yerdir.

---

## 1.3 Yazılım Sistemi

Bir yazılım sistemi, belirli bir problemi çözmek veya işlevi yerine getirmek üzere tasarlanmış, birbirleriyle etkileşen yazılım bileşenleri (modüller, servisler, kütüphaneler, veritabanları) bütünüdür.

IEEE Standardı 1471-2000'e göre bir yazılım sistemi şu şekilde karakterize edilir:

- Belirli bir **amaca** hizmet eder (*purpose*).
- **Çevresiyle** (*environment*) etkileşim içindedir.
- Bir veya birden fazla **paydaşın** (*stakeholder*) ilgisini çeker.
- Bir **mimari** (*architecture*) üzerinde inşa edilir.

### 1.3.1 Karmaşıklık ve Ölçek

Yazılım sistemlerinin ayırt edici özelliği, karmaşıklıklarının zaman içinde **eksponansiyel** biçimde büyüyebilmesidir. Fred Brooks, 1975 yılında yayımladığı ve bugün hâlâ "kutsal kitap" olarak okunan *The Mythical Man-Month* eserinde bu durumu şöyle ifade etmiştir:

> "Büyük yazılım projelerinde özgünlük (essence) ve kazara oluşan karmaşıklık (accidental complexity) iç içe geçer. Gümüş kurşun yoktur: Hiçbir tek araç ya da teknik, yazılım geliştirme verimliliğini tek başına büyük ölçüde artıramaz."
> — Fred Brooks, *The Mythical Man-Month*, 1975 (Anniversary Edition 1995)

Brooks'un bu tespiti, günümüz büyük ölçekli sistemlerinde — milyonlarca satır kod içeren bulut platformlarında, yapay zekâ destekli uygulamalarda — hâlâ geçerliliğini korumaktadır. İşte bu yüzden sistem analizi ve tasarımı disiplini, karmaşıklığı yönetmenin sistematik yollarını öğretir.

---

## 1.4 Sistem Analizi ve Sistem Tasarımı: Fark Nedir?

Birçok öğrenci bu iki kavramı başlangıçta karıştırır. Oysa ayrımları hem mantıksal hem de pratik açıdan son derece belirgindir.

### 1.4.1 Sistem Analizi

Sistem analizi, mevcut durumu ya da problemin özünü anlamaya yönelik süreçtir. Analist şu soruları sorar:

- Mevcut sistemde (veya süreçte) ne işliyor, ne işlemiyor?
- Kullanıcıların gerçek ihtiyaçları neler?
- Paydaşların beklentileri neler?
- Sistemin sınırları (scope) nerede?
- Hangi kısıtlar (teknik, bütçe, zaman) var?

Analiz sonunda ortaya çıkan belge genellikle **Gereksinim Spesifikasyonu** (*Requirements Specification*) veya **SRS — Software Requirements Specification** adını alır. Bu belge, tasarım için temel oluşturur.

### 1.4.2 Sistem Tasarımı

Sistem tasarımı ise analizde ortaya çıkan gereksinimleri karşılayan bir çözümün mimarisi ve ayrıntılarının belirlenmesidir. Tasarımcı şu sorulara yanıt arar:

- Sistemi hangi bileşenlerden oluşturacağız?
- Veriler nasıl saklanacak?
- Kullanıcı arayüzü nasıl görünecek?
- Bileşenler birbirleriyle nasıl iletişim kuracak?
- Performans, güvenlik, ölçeklenebilirlik gereksinimleri nasıl karşılanacak?

| Sistem Analizi | Sistem Tasarımı |
|---|---|
| Ne yapılmalı? (*What*) | Nasıl yapılmalı? (*How*) |
| Problem odaklı | Çözüm odaklı |
| Kullanıcı perspektifi | Geliştirici perspektifi |
| Gereksinim dokümanı üretir | Mimari/tasarım dokümanı üretir |
| Sorunları ortaya koyar | Sorunlara çözüm sunar |

> "İyi bir analist, kullanıcının söylediklerinin ötesine geçerek ne kastettiğini, hatta söylemediği şeyleri bile anlayabilen kişidir."
> — Ian Sommerville, *Software Engineering*, 10. Baskı, 2016

---

## 1.5 SDLC — Yazılım Geliştirme Yaşam Döngüsü

**SDLC** (Software Development Life Cycle — Yazılım Geliştirme Yaşam Döngüsü), bir yazılım sisteminin fikir aşamasından emekliye ayrılmasına kadar geçirdiği tüm evreleri kapsayan yapılandırılmış süreçtir.

SDLC kavramının resmi olarak gündeme gelmesi **1960'lara** dayanır. IBM'in büyük iş bilgisayarları için geliştirme süreçlerini standartlaştırma çabaları, ilk belgelenmiş SDLC modellerini doğurdu. 1970'lerde **Winston Royce**'un yayımladığı makale, bugün "Waterfall Modeli" olarak bilinen yapıyı (her ne kadar Royce bu modeli eleştirmek için tanımlamış olsa da) yazılım endüstrisine kazandırdı.

### 1.5.1 Klasik SDLC Aşamaları

1. **Planlama (Planning):** Projenin fizibilite analizi, kaynak planı, zaman tahmini.
2. **Analiz (Analysis):** Gereksinimlerin toplanması ve belgelenmesi.
3. **Tasarım (Design):** Sistem mimarisi, veri modeli, arayüz tasarımı.
4. **Geliştirme/Kodlama (Implementation):** Kaynak kodun yazılması.
5. **Test (Testing):** Hata tespiti, doğrulama ve geçerleme.
6. **Dağıtım (Deployment):** Sistemin canlı ortama alınması.
7. **Bakım (Maintenance):** Hata düzeltme, geliştirme, güncelleme.

Bu aşamaların hiçbiri birbirinden bağımsız değildir. Geliştirme sırasında tespit edilen bir sorun, tasarım kararını geri sorgulatabilir; test aşamasında bulunan bir hata, analiz belgesinde gözden kaçırılmış bir gereksinimi gün yüzüne çıkarabilir.

### 1.5.2 SDLC'nin Önemi — Rakamlarla

SDLC'nin neden önemli olduğunu somutlaştırmak için bazı araştırma bulgularına bakalım:

- **Standish Group'un 2020 CHAOS Raporu'na** göre yazılım projelerinin yalnızca **%31'i** bütçe ve zamana uygun olarak teslim edilmektedir.
- **IBM Systems Sciences Institute** araştırmasına göre üretim aşamasında düzeltilen bir hata, gereksinim aşamasında düzeltilenden **100 kat** daha maliyetlidir.
- **McKinsey & Company'nin 2022 araştırması**, büyük teknoloji projelerinin **%45'inin** bütçesini aştığını ve **%7'sinin** hiç tamamlanamadığını göstermektedir.

Bu rakamlar, yapılandırılmış bir geliştirme sürecinin — yani SDLC'nin — neden vazgeçilmez olduğunu açıkça ortaya koyar. Pahalı hataları önlemenin yolu, onları erken aşamalarda tespit etmekten geçer.

---

## 1.6 Proje Türleri

Yazılım geliştirme pratiğinde farklı platformlara yönelik farklı proje türleri vardır. Her tür, kendine özgü teknik gereksinimler, kullanıcı beklentileri ve analiz/tasarım yaklaşımları içerir.

| Proje Türü | Kritik Analiz Boyutu |
|---|---|
| Web | Kullanıcı akışları, API tasarımı, SEO/performans |
| Mobil | Cihaz kısıtları, UX pattern'leri, çevrimdışı çalışma |
| Masaüstü | İşletim sistemi entegrasyonu, offline veri |
| Kurumsal | Süreç entegrasyonu, yetkilendirme, ölçeklenebilirlik |

### 1.6.1 Web Uygulamaları

Web uygulamaları, tarayıcı üzerinden erişilen, sunucu taraflı (back-end) ve istemci taraflı (front-end) bileşenlerden oluşan sistemlerdir. Günümüzün en yaygın proje türüdür.

- **Teknik yığın (tech stack):** HTML/CSS/JavaScript (front-end), Node.js/Python/Java (back-end), SQL/NoSQL (veri).
- **Analiz odakları:** Kullanıcı akışları, sayfa geçişleri, API entegrasyonları, SEO gereksinimleri.
- **Örnekler:** E-ticaret platformu, sosyal medya uygulaması, online eğitim sistemi.

### 1.6.2 Mobil Uygulamalar

Mobil uygulamalar, akıllı telefon ve tablet platformlarına (iOS, Android) yönelik geliştirilir. Dokunmatik arayüz, bildirim sistemi, GPS, kamera gibi cihaz özellikleriyle derin entegrasyon gerektirir.

- **Native vs. Cross-platform:** Swift/Kotlin (native) vs. Flutter/React Native (cross-platform).
- **Analiz odakları:** Mobil kullanıcı deneyimi, çevrimdışı çalışma gereksinimleri, batarya/veri kullanımı.
- **Örnekler:** Sağlık takip uygulaması, alışveriş uygulaması, harita/navigasyon.

### 1.6.3 Masaüstü Uygulamalar

Masaüstü uygulamalar, Windows, macOS veya Linux işletim sistemi üzerinde çalışır. Genellikle yüksek performans gerektiren profesyonel araçlar (CAD, video düzenleme, muhasebe yazılımı) bu kategoriye girer.

### 1.6.4 Kurumsal Sistemler (Enterprise Systems)

Kurumsal sistemler, büyük organizasyonların tüm iş süreçlerini entegre eden karmaşık, çok kullanıcılı platformlardır. ERP, CRM, SCM (Supply Chain Management) bunların başında gelir.

- Yüksek kullanıcı sayısı, çok departmanlı iş akışları, güçlü raporlama ihtiyacı.
- **Analiz odakları:** İş süreçleri entegrasyonu, veri tutarlılığı, rol tabanlı yetkilendirme.
- **Örnekler:** SAP S/4HANA, Microsoft Dynamics 365, Oracle ERP Cloud.

---

## 1.7 Dönem Projesi Tanıtımı

Bu ders boyunca teorik bilgiler, dönem projesi üzerinden pekiştirilecektir. Her hafta öğrenilen kavramlar projeye adım adım uygulanacak; dönem sonunda eksiksiz bir sistem analizi ve tasarım belgesi ortaya çıkacaktır.

### 1.7.1 Örnek Proje: Kampüs İkinci El Ürün Platformu

Bu ders için önerilen dönem projesi: **Kampüs İkinci El Ürün Platformu**. Üniversite öğrencilerinin birbirlerine kitap, elektronik, kıyafet gibi ürünleri satabildiği, takasa aracılık eden bir web/mobil platformdur.

Bu proje seçiminin gerekçeleri:

1. **Gerçek dünya problemi:** Her öğrenci bu ihtiyacı bizzat hisseder.
2. **Uygun karmaşıklık:** Kullanıcı yönetimi, ürün listeleme, mesajlaşma, arama gibi temel bileşenleri içerir.
3. **Zengin use-case seti:** Satıcı, alıcı, yönetici gibi farklı aktörler mevcuttur.
4. **Genişletilebilir:** İlerleyen haftalarda yeni özellikler eklenebilir.

### 1.7.2 Hafta Hafta Proje Çıktıları

| Hafta | Proje Çıktısı |
|---|---|
| 1 | Proje fikrinin belirlenmesi ve kısa özet |
| 3 | As-Is süreç haritası, paydaş listesi |
| 4 | Gereksinim tablosu (fonksiyonel / fonksiyonel olmayan) |
| 6 | Use Case diyagramı |
| 7 | Activity + Sequence diyagramları |
| 8 | ER diyagramı |
| 9 | Sınıf diyagramı |
| 10 | Mimari şema |
| 11 | Wireframe/prototip |
| 12 | Test senaryoları |
| 13 | Tam dokümantasyon paketi |
| 14 | Sunum ve değerlendirme |

---

## 1.8 Sistem Analizinin Tarihsel Yolculuğu

Sistem analizi disiplini, 1950'lerin sonlarından itibaren yazılım endüstrisinin büyümesiyle paralel bir evrim geçirmiştir. Bu tarihin mihenk taşlarını bilmek, bugün kullandığımız yöntemlerin neden bu biçimi aldığını anlamamızı sağlar.

| Dönem | Gelişme |
|---|---|
| 1950–60'lar | İlk büyük iş sistemleri; COBOL, batch processing |
| 1970'ler | Royce'un Waterfall makalesi; yapısal analiz (DFD) |
| 1980'ler | Nesne yönelimli düşünce; OMT, Booch notasyonu |
| 1990'lar | UML standardı (Booch, Rumbaugh, Jacobson — "Üç Amigo") |
| 2000'ler | Agile Manifesto (2001); Scrum, XP yaygınlaşması |
| 2010'lar | DevOps, CI/CD; mikro servis mimarisi |
| 2020'ler | AI destekli geliştirme araçları; low-code/no-code platformları |

1994 yılında **Grady Booch**, **Ivar Jacobson** ve **James Rumbaugh** bir araya gelerek UML'in (Unified Modeling Language) temellerini attı. Bu "Üç Amigo", farklı nesne yönelimli notasyonları birleştirerek yazılım dünyasına ortak bir dil kazandırdı. UML, bu ders boyunca temel görsel iletişim aracımız olacak.

> "UML bir programlama dili değildir; bir modelleme dilidir. Sistemi farklı perspektiflerden görmeyi sağlayan bir araç kutusudur."
> — Grady Booch, UML'in mimarlarından, 1999

---

## 1.9 Özet ve Temel Kavramlar Sözlüğü

| Kavram | Kısa Tanım |
|---|---|
| Sistem | Ortak bir amaç için birlikte çalışan birbiriyle ilişkili bileşenler bütünü |
| Bilgi Sistemi | Veri toplayan, işleyen, saklayan ve dağıtan örgütsel altyapı |
| Yazılım Sistemi | Yazılım bileşenlerinden oluşan, belirli bir amaca hizmet eden bütün |
| Sistem Analizi | Problemin ve gereksinimlerin sistematik olarak incelenmesi |
| Sistem Tasarımı | Gereksinimleri karşılayan çözümün mimarisinin belirlenmesi |
| SDLC | Yazılım Geliştirme Yaşam Döngüsü — planlama'dan bakıma uzanan süreç |
| Paydaş (Stakeholder) | Sistemden etkilenen veya sistemi etkileyen her birey ya da grup |
| Kapsam (Scope) | Sistemin neyi kapsayıp neyi kapsamadığının tanımı |
| UML | Yazılım sistemlerini modellemeye yarayan Birleşik Modelleme Dili |

---

## 1.10 Düşünme Soruları ve Ödevler

1. Günlük hayatınızdan bir örnek seçerek bunu bir "sistem" olarak tanımlayın: girdileri, çıktıları, süreçleri ve geri bildirim mekanizmalarını belirtin.
2. SDLC aşamaları olmadan geliştirilen bir yazılımda hangi sorunlar ortaya çıkabilir? Bunları madde madde sıralayın.
3. Kullandığınız bir web ya da mobil uygulamayı seçin. Bu uygulamanın hangi bilgi sistemi türüne girdiğini Laudon & Laudon sınıflandırmasına göre açıklayın.
4. Dönem projeniz için bir fikir belirleyin. Bu fikri: problem tanımı, hedef kullanıcı kitlesi, çözdüğü temel sorun ve proje türü (web/mobil/masaüstü) başlıkları altında bir paragraf olarak yazın.

---

## Kaynaklar ve İleri Okuma

- Bertalanffy, L. von (1968). *General System Theory*. George Braziller.
- Brooks, F. P. (1975/1995). *The Mythical Man-Month*. Addison-Wesley.
- Laudon, K. C., & Laudon, J. P. (2023). *Management Information Systems* (16th ed.). Pearson.
- Sommerville, I. (2016). *Software Engineering* (10th ed.). Pearson.
- Booch, G., Rumbaugh, J., & Jacobson, I. (2005). *The Unified Modeling Language User Guide* (2nd ed.). Addison-Wesley.
- Standish Group. (2020). *CHAOS Report*. The Standish Group International.
- Royce, W. W. (1970). *Managing the Development of Large Software Systems*. IEEE WESCON.
