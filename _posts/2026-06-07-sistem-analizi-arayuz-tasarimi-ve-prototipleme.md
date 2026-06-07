---
layout: post
title: "Arayüz Tasarımı ve Prototipleme: Kullanıcının Sisteme Dokunduğu Yer"
date: 2026-06-07 12:52:00 +0300
categories: sistem-analizi-ve-tasarimi
course_id: sistem-analizi-ve-tasarimi
tags: [sistem-analizi, ui, ux, prototipleme, wireframe, mockup, erişilebilirlik]
---

Bir yazılım sistemi teknik olarak kusursuz olabilir. Veritabanı sağlam olabilir. Mimari temiz olabilir. API hızlı olabilir. Ama kullanıcı ekrana baktığında ne yapacağını anlamıyorsa, bütün o teknik başarı sessizce duvara çarpar.

Çünkü yazılımın kullanıcıyla gerçek karşılaşma noktası **arayüzdür**.

Arayüz, sadece butonların dizildiği yer değildir. O, sistemin karakteridir. Kullanıcıya neyin önemli olduğunu, neyin mümkün olduğunu, neyin tehlikeli olduğunu ve bir sonraki adımda ne yapması gerektiğini fısıldayan katmandır. İyi tasarlanmış bir arayüz, kullanıcıyı zorlamaz; yönlendirir. Kötü tasarlanmış bir arayüz ise her tıklamada küçük bir sürtünme üretir.

Bu derste verdiğiniz dökümandan yararlanarak şu hattı kuracağız:

- **UI** ile **UX** arasındaki fark nedir?
- İyi bir arayüzü iyi yapan temel ilkeler nelerdir?
- **Wireframe, mockup ve prototip** neden aynı şey değildir?
- Form tasarımında yapılan temel hatalar nelerdir?
- **Validation** nasıl kullanıcıyı cezalandırmadan yardımcı olur?
- **Erişilebilirlik**, neden “ekstra özellik” değil doğrudan tasarımın parçasıdır?

Bugün piksel boyamayı değil, kullanıcının sistemle kurduğu ilişkinin nasıl tasarlandığını konuşacağız.

> “Tasarım salt nasıl göründüğü değildir. Tasarım, nasıl çalıştığıdır.”
>
> **Steve Jobs** (2003)

---

## Bu Derste Neler Öğreneceksiniz?

Bu bölümün sonunda şunları yapabilir hale gelmeniz hedeflenmektedir:

- **UI** ve **UX** kavramlarını karıştırmadan açıklayabilmek
- Nielsen’ın kullanılabilirlik sezgilerini arayüz üzerinde yorumlayabilmek
- Gestalt ilkelerinin görsel düzen üzerindeki etkisini anlayabilmek
- **Wireframe, mockup, prototip** farkını doğru kurabilmek
- Form tasarımında doğru alan sırası, etiket kullanımı ve validation stratejisi belirleyebilmek
- Erişilebilirlik (a11y) konusunda temel kararları fark edebilmek
- 2–3 ekranlık işlevsel bir prototip düşüncesi kurabilmek

---

## 1. UI ve UX: Aynı Şey Değil, Aynı Takım

Bu iki kavram sürekli birbirine karıştırılır. Karıştırılması normal; çünkü aynı ürünün içinde birlikte çalışırlar. Ama aynı şey değillerdir.

### UI (User Interface)
Kullanıcının gördüğü ve dokunduğu yüzdür.

Şunlarla ilgilenir:
- renkler
- tipografi
- butonlar
- spacing
- ikonlar
- hizalama
- görsel hiyerarşi

Yani kabaca şu soruya odaklanır:

> “Nasıl görünüyor?”

### UX (User Experience)
Kullanıcının sistemle kurduğu deneyimdir.

Şunlarla ilgilenir:
- akış
- görev tamamlama kolaylığı
- zihinsel yük
- hata anları
- güven hissi
- öğrenilebilirlik
- sürtünme noktaları

Yani şu soruya odaklanır:

> “Nasıl hissettiriyor? Nasıl deneyimleniyor?”

### Kısa Ayrım

| UI | UX |
|----|----|
| Görsel yüz | Deneyim akışı |
| Piksel kararı | Kullanıcı hissi |
| Butonun şekli | Butonun mantıklı yerde olup olmaması |
| Görsel estetik | Kullanım kolaylığı |

Ama bunları birbirinden tamamen koparmak da hatadır.

Güzel görünen ama karıştıran arayüz iyi değildir.
Kullanışlı ama darmadağın görünen arayüz de çoğu zaman güven vermez.

İyi ürünlerde UI ve UX kavga etmez; birlikte çalışır.

---

## 2. İyi Arayüz Neden Önemlidir?

Çünkü kullanıcı sistemin mimarisini görmez. ORM’yi bilmez. Servis katmanını umursamaz. O, şunu yaşar:

- Aradığımı bulabiliyor muyum?
- Nereden başlayacağımı anlıyor muyum?
- Hata yaptığımda sistem beni tokatlıyor mu, yardım mı ediyor?
- Bu ürün bana güven veriyor mu?

Yani kullanıcı yazılımla teknik değil, davranışsal ilişki kurar.

İyi arayüz şu faydaları sağlar:

- öğrenme süresini düşürür
- hata oranını azaltır
- görev tamamlama süresini kısaltır
- güven hissini artırır
- terk oranını düşürür
- memnuniyeti yükseltir

Kötü arayüz ise şunu yapar: Kullanıcıyı problem çözmek yerine arayüz çözmeye zorlar.

---

## 3. Nielsen’ın 10 Kullanılabilirlik Sezgisi

Jakob Nielsen’in 1994’te formüle ettiği kullanılabilirlik sezgileri, bugün hâlâ taş gibi ayakta. Çünkü teknoloji değişse de insan zihninin sınırları çok değişmiyor.

Şimdi bunları “ezber listesi” gibi değil, gerçek ürün kararı gibi düşünelim.

### 3.1 Sistemin Durumunun Görünürlüğü
Kullanıcı, sistemde ne olduğunu anlamalıdır.

Örnek:
- yükleniyor göstergesi
- başarı mesajı
- işlem tamamlandı bildirimi
- adım adım ilerleme çubuğu

Sessiz sistem, kullanıcıyı huzursuz eder.

### 3.2 Sistem ile Gerçek Dünya Arasındaki Uyum
Sistem kullanıcının dilini konuşmalıdır.

“İşlem başarısız oldu” yerine:
- “E-posta adresi geçersiz”
- “Fotoğraf yüklenemedi, dosya çok büyük”

İnsan, makine dilini çözmek zorunda kalmamalı.

### 3.3 Kullanıcı Kontrolü ve Özgürlüğü
Yanlış tıklama hayatın gerçeğidir.

Bu yüzden:
- geri al,
- iptal,
- çıkış,
- düzenleme,
- silmeden önce onay

gibi kaçış yolları olmalıdır.

### 3.4 Tutarlılık ve Standartlar
Aynı şey, aynı şekilde davranmalıdır.

Bir ekranda mavi buton kaydetmeyi, başka ekranda silmeyi yapıyorsa kullanıcıyı ters köşe atıyorsunuz demektir.

### 3.5 Hataları Önleme
İyi sistem, hata olduktan sonra ağlamaz; hata olmadan önce önler.

Örnek:
- geçersiz tarih seçimini engellemek
- boş zorunlu alanı erkenden belirtmek
- yanlış format girişini sınırlamak

### 3.6 Tanıma, Hatırlamaktan Yeğdir
Kullanıcı seçenekleri ekranda görmelidir; hafızasından çağırmak zorunda kalmamalıdır.

Menüler, görünen filtreler, açık etiketler bu yüzden değerlidir.

### 3.7 Esneklik ve Verimlilik
Yeni kullanıcıyı ezmeden, deneyimli kullanıcıyı yavaşlatmadan tasarlamak gerekir.

### 3.8 Estetik ve Minimalist Tasarım
Gereksiz bilgi, estetik kusurdan öte; bilişsel gürültüdür.

### 3.9 Hataları Tanıma, Teşhis Etme ve Kurtarma
Hata mesajı kullanıcıyı utandırmamalı; yol göstermelidir.

### 3.10 Yardım ve Dokümantasyon
Mükemmel sistemde bile bazen açıklama gerekir.

---

## 4. Gestalt İlkeleri: Gözün Nasıl Grupladığını Anlamak

Gestalt ilkeleri, insanların görsel ögeleri nasıl algıladığını açıklar. Bu teori eski olabilir, ama tasarım pratiğinde hâlâ çok canlıdır.

### 4.1 Yakınlık (Proximity)
Birbirine yakın olan ögeler, ilişkili gibi algılanır.

Bu yüzden form etiketini kendi alanından uzağa koyarsanız kullanıcıyı zorlarsınız.

### 4.2 Benzerlik (Similarity)
Benzer görünen ögeler aynı gruba ait sanılır.

Butonlarınız farklı ekranlarda farklı tavırlar sergiliyorsa beynin kurduğu örüntü kırılır.

### 4.3 Süreklilik (Continuity)
Göz, akıcı hizalanmış yapıları izlemeyi sever.

Dağınık grid, kullanıcıyı fark ettirmeden yorar.

### 4.4 Tamamlama (Closure)
İnsan zihni eksik yapıları tamamlamaya çalışır.

Bu yüzden tasarımda bazen her şeyi bağırarak anlatmak yerine düzenli bir yapı kurmak yeterlidir.

### 4.5 Şekil-Zemin (Figure-Ground)
Ana öge ile arka plan net ayrışmalıdır.

CTA butonu arka plana gömülüyorsa, tasarım estetik olabilir ama işlevsel olarak zayıftır.

---

## 5. Wireframe, Mockup, Prototip: Aynı Yolun Farklı Durakları

Bu üç kavram sık sık birbirine karıştırılır. Oysa her biri farklı bir soruya cevap verir.

### Wireframe
Düşük doğruluklu (low fidelity) iskelet çalışmasıdır.

Sorusu:

> “Bu ekranda ne nereye yerleşecek?”

Özellikleri:
- çoğunlukla gri tonlar
- görsel detay yok
- düzen ve hiyerarşi odaklı
- hızlı üretilir

### Mockup
Görsel açıdan daha gerçekçi sunumdur.

Sorusu:

> “Bu ekran yaklaşık nasıl görünecek?”

Özellikleri:
- renkler vardır
- fontlar vardır
- spacing daha nettir
- görsel onay için iyidir

### Prototip
Etkileşimli modeldir.

Sorusu:

> “Bu ürün nasıl çalışacak?”

Özellikleri:
- tıklanabilir akışlar
- ekranlar arası geçiş
- kullanıcı testi için uygun yapı

### Kısa Özet

| Aşama | Asıl Soru |
|-------|-----------|
| Wireframe | Nerede ne var? |
| Mockup | Nasıl görünüyor? |
| Prototip | Nasıl çalışıyor? |

Bu sıralamayı atlayıp direkt parlak mockup’a atlamak sık yapılan bir hatadır. Çünkü daha düzen sorusu çözülmeden boya işine girilmiş olur.

---

## 6. Wireframe Best Practices

İyi bir wireframe, sıkıcı görünse bile çok değerlidir. Çünkü tartışmayı doğru yerde yapar.

### İyi Wireframe İçin Kurallar

- Renk yerine yapı düşün
- İçerik hiyerarşisine odaklan
- Grid sistemi kullan
- Her ekranın kullanıcı hedefini bil
- Gerekirse anotasyon ekle
- Fazla görsel detayla dikkati dağıtma

Wireframe’in işi güzel görünmek değil; **düşünceyi netleştirmektir**.

---

## 7. Kampüs Platformu İçin Kritik Ekranlar

Dökümandaki örnek çok yerinde: Bir sistemin en kritik ekranlarını seçmek, tasarım düşüncesini gereksiz dağılmaktan kurtarır.

### 7.1 Ana Sayfa / Keşfet
Amaç:
- kullanıcıya içerik göstermek,
- aramayı başlatmak,
- kategori keşfini kolaylaştırmak.

Temel bileşenler:
- arama çubuğu
- kategori filtreleri
- öne çıkan ilanlar
- ilan kartları

### 7.2 İlan Oluşturma Formu
Amaç:
- kullanıcının hızlı ve güvenli biçimde ilan oluşturmasını sağlamak.

Temel alanlar:
- başlık
- açıklama
- kategori
- fiyat
- fotoğraf yükleme
- yayınla butonu

### 7.3 İlan Detay Sayfası
Amaç:
- ürünün güvenilir ve ikna edici biçimde sunulması,
- kullanıcıyı mesaj gönderme gibi aksiyona yönlendirmek.

Temel bileşenler:
- fotoğraf galerisi
- ürün bilgisi
- satıcı bilgisi
- CTA: Mesaj Gönder

Bu üç ekran genelde sistemin omurgasını oluşturur. Doğru tasarlarsanız geri kalan yapı da daha tutarlı akar.

---

## 8. Form Tasarımı: Kullanıcının En Çok Yorulduğu Yer

Formlar, kullanıcıyla sistemin en yoğun sürtüştüğü noktadır.

Kötü form tasarımı şunlara yol açar:
- kullanıcı bırakır,
- hata yapar,
- güvensizlik hisseder,
- sistemi terk eder.

### 8.1 Etiketleri Doğru Konumlandır
En güvenli yaklaşım çoğu zaman etiketleri alanın üstüne koymaktır.

Çünkü:
- tarama daha kolaydır,
- mobil uyumluluk daha iyidir,
- hizalama daha doğal olur.

### 8.2 Alan Sırası Mantıklı Olsun
İnsanların kafasında doğal bir akış vardır.

Örneğin:
- ad
- e-posta
- şifre

veya ilan formunda:
- başlık
- açıklama
- kategori
- fiyat
- görseller

Bu akış bozulursa kullanıcı her alanda yeniden düşünmek zorunda kalır.

### 8.3 Placeholder Etiket Değildir
Placeholder kaybolur. Etiket kalıcıdır.

Bu yüzden placeholder’ı açıklayıcı ipucu gibi kullanın; etiketin yerine değil.

### 8.4 Submit Butonu Açıklayıcı Olsun
“Gönder” zayıf bir metindir.

Daha iyi:
- “İlanı Yayınla”
- “Kaydı Tamamla”
- “Mesajı Gönder”

Kullanıcı butona basınca ne olacağını açıkça bilmelidir.

---

## 9. Validation: Kullanıcıyı Cezalandırmadan Düzeltmek

Validation sadece hata yakalama değildir; aynı zamanda kullanıcıya rehberlik etme işidir.

### 9.1 Gerçek Zamanlı (Inline) Validation
Kullanıcı alandan çıkınca geri bildirim verilir.

Avantajı:
- anlık düzeltme sağlar

Dezavantajı:
- fazla agresif kullanılırsa stres yaratır

### 9.2 Submit Sonrası Validation
Kullanıcı formu bitirir, sonra sistem tüm hataları gösterir.

Avantajı:
- daha geleneksel ve toplu düzeltme sağlar

Dezavantajı:
- kullanıcı formu bitirip sonra bir sürü hata görünce yorulabilir

### 9.3 Hibrit Yaklaşım
Genellikle en mantıklı yoldur.

- kritik alanlar anlık kontrol edilir
- diğerleri submit aşamasında toparlanır

Bu yaklaşım hem erken yardım eder hem aşırı baskı yaratmaz.

---

## 10. İyi Hata Mesajı Nasıl Yazılır?

Kötü hata mesajı:
- “Hata oluştu”
- “Geçersiz giriş”
- “İşlem başarısız”

Bunlar neredeyse hiçbir şey söylemez.

İyi hata mesajı:
- “E-posta adresi @ karakteri içermelidir.”
- “Şifre en az 8 karakter olmalıdır.”
- “Fotoğraf boyutu 5 MB sınırını aşıyor.”

### İyi Hata Mesajı Kuralları

- açık olmalı
- suçlayıcı olmamalı
- alanın yakınında görünmeli
- mümkünse çözüm yönlendirmeli

Kullanıcı hata yaptığında sistem onu aptal hissettirmemeli.

---

## 11. Erişilebilirlik (Accessibility): Ekstra Değil, Temel Şart

Erişilebilirlik çoğu ekipte ne yazık ki “sonradan bakarız” klasörüne atılır. Bu yanlış.

Erişilebilirlik, sistemin herkes tarafından kullanılabilmesi demektir.

Buna şunlar dahildir:
- görme engeli olan kullanıcılar
- işitme engeli olan kullanıcılar
- motor beceri kısıtı olan kullanıcılar
- bilişsel yükten etkilenen kullanıcılar
- geçici engel yaşayan kullanıcılar
- küçük ekran, kötü ışık, kötü internet gibi bağlamsal kısıtlar yaşayan kullanıcılar

Tim Berners-Lee’nin sözü burada çok net:

> Web’in gücü evrenselliğindedir. Herkes için erişilebilir olmak temel ilkedir.

---

## 12. WCAG 2.1 ve POUR Mantığı

WCAG, erişilebilirlik için temel standartlardan biridir. Dört ana ilkeye dayanır:

### Perceivable (Algılanabilir)
İçerik farklı kullanıcılar tarafından algılanabilir olmalıdır.

### Operable (İşletilebilir)
Arayüz sadece fareyle değil, klavyeyle de kullanılabilmelidir.

### Understandable (Anlaşılabilir)
Dil, yapı ve hata mesajları anlaşılır olmalıdır.

### Robust (Sağlam)
Farklı tarayıcılar ve yardımcı teknolojilerle çalışabilmelidir.

Bu dört ilke, erişilebilirliğin özünü çok iyi toplar.

---

## 13. Temel Erişilebilirlik Kontrol Listesi

### 13.1 Görsellere Alt Metin
Her anlamlı görselin `alt` açıklaması olmalıdır.

### 13.2 Kontrast Yeterli Olmalı
Metin ile zemin birbirine karışmamalıdır.

### 13.3 Form Alanlarının Etiketi Olmalı
`label` olmadan alanlar özellikle ekran okuyucu kullanıcılar için ciddi sorun çıkarır.

### 13.4 Klavye Navigasyonu Çalışmalı
Tab tuşuyla tüm etkileşimli ögelere ulaşılabilmelidir.

### 13.5 Dinamik İçerik Duyurulmalı
Geri bildirimler sadece görsel olmamalıdır; yardımcı teknolojilere de iletilebilmelidir.

### 13.6 Font Büyüyünce Tasarım Dağılmamalı
Sayfa %200 büyütüldüğünde kullanılabilir kalmalıdır.

Bunlar lüks değil, temel tasarım kalitesidir.

---

## 14. Prototipleme Neden Hayat Kurtarır?

Kod yazmadan önce prototip üretmek, yanlış kararları ucuzken yakalamaktır.

Çünkü:
- ekran akışı erkenden test edilir,
- kullanıcı nerede takılıyor görülür,
- ekip ortak dil kurar,
- yanlış yönler daha az maliyetle düzeltilir.

Kodlanmış hatayı düzeltmek pahalıdır.
Tıklanabilir prototipte yakalanan hata ise ucuzdur.

Prototip, hayali görünür hale getirir.

---

## 15. Kampüs Platformu İçin Prototip Akışı

Dökümandaki örnek ekranlar üzerinden düşünürsek mantıklı bir başlangıç seti şudur:

### Giriş Ekranı
- e-posta
- şifre
- giriş yap butonu
- şifremi unuttum

### İlan Listesi
- arama çubuğu
- filtre alanı
- kategori seçimi
- kart yapısı

### İlan Oluşturma Formu
- başlık
- açıklama
- kategori
- fiyat
- fotoğraf yükleme
- yayınla CTA

Her ekran için mutlaka şu üç şey düşünülmelidir:

1. Kullanıcının hedefi ne?
2. O hedefe en kısa, en temiz yol ne?
3. O yolda hata olursa sistem nasıl yardım edecek?

İyi arayüz tasarımı tam olarak bu üç sorunun disiplinidir.

---

## 16. Sık Yapılan Hatalar

### 1. UI ile UX’i aynı şey sanmak
Güzel görünüm ile iyi deneyim aynı şey değildir.

### 2. Wireframe aşamasını atlamak
Direkt renkli tasarıma geçmek, yapısal sorunları gizler.

### 3. Placeholder’ı etiket yerine kullanmak
Bu çok yaygın ve can sıkıcı bir hatadır.

### 4. Belirsiz hata mesajları yazmak
Kullanıcıya hiçbir yardım etmez.

### 5. Formu gereksiz alanlarla şişirmek
Her alan, kullanıcıdan ekstra enerji ister.

### 6. Klavye ve erişilebilirliği unutmak
Bu hem etik hem pratik açıdan ciddi eksikliktir.

### 7. Her şeyi aynı görsel ağırlıkta sunmak
Hiyerarşi kaybolunca kullanıcı neyin önemli olduğunu seçemez.

---

## 17. Bölüm Özeti

Bu derste şunu gördük:

- **UI** görsel yüzdür, **UX** deneyim akışıdır.
- İyi ürün, bu ikisini birbirinden koparmadan birlikte çalıştırır.
- Nielsen’ın kullanılabilirlik sezgileri bugün hâlâ güçlü bir yol göstericidir.
- Gestalt ilkeleri, görsel algının arayüz kararlarını nasıl etkilediğini açıklar.
- **Wireframe, mockup ve prototip** farklı sorulara cevap veren farklı tasarım aşamalarıdır.
- Form tasarımı ve validation, kullanıcı deneyiminin en hassas alanlarındandır.
- Erişilebilirlik, ekstra süs değil; temel kalite şartıdır.
- Prototipleme, yanlışları kod yazmadan önce görmeyi sağlar.

Kısacası arayüz tasarımı, estetik makyaj değil; kullanıcıyla sistem arasındaki sürtünmeyi azaltma sanatıdır.

İyi arayüz bağırmaz. Yol gösterir. Kendini anlatmak için kullanıcıyı zorlamaz. Onu sezgisel biçimde taşır.

---

## 18. Mini Alıştırmalar

### Alıştırma 1
Bir ilan oluşturma formu için en az 6 alan belirleyin. Her alan için:
- etiket,
- zorunlu/opsiyonel bilgisi,
- olası hata mesajı
oluşturun.

### Alıştırma 2
Wireframe, mockup ve prototip arasındaki farkı bir e-ticaret uygulamasının ürün detay sayfası üzerinden açıklayın.

### Alıştırma 3
Kampüs ikinci el platformu için şu 3 ekranın düşük doğruluklu wireframe’ini tasarlayın:
- giriş ekranı
- ilan listesi
- ilan detay sayfası

### Alıştırma 4
Nielsen’ın 10 sezgisinden en az 3 tanesini kullanarak bir “İlan Oluştur” ekranında hangi tasarım kararlarını vereceğinizi yazın.

### Alıştırma 5
Bir sayfayı erişilebilir yapmak için uygulanacak en az 5 kontrol maddesi yazın.

---

## Kaynaklar

- Nielsen, J. (1994). *Usability Engineering*. Morgan Kaufmann.
- Norman, D. (2013). *The Design of Everyday Things* (Revised ed.). Basic Books.
- Krug, S. (2014). *Don’t Make Me Think, Revisited*. New Riders.
- W3C. (2018). *Web Content Accessibility Guidelines (WCAG) 2.1*.
- Tidwell, J., Brewer, C., & Valencia, A. (2020). *Designing Interfaces* (3rd ed.). O’Reilly.
- Cooper, A., Reimann, R., & Cronin, D. (2007). *About Face 3*. Wiley.

---

Bir ürünün kullanıcıdaki ilk cümlesi çoğu zaman kodla değil, arayüzle kurulur. O ilk bakışta kullanıcı ya “tamam, bunu anladım” der ya da sessizce uzaklaşır. İşte arayüz tasarımı, o ilk cümlenin tonunu belirler.
