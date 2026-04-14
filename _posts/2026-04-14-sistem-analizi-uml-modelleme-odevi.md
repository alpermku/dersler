---
layout: post
title: "Ödev: Projeniz İçin UML Modelleme Dosyası Hazırlama"
date: 2026-04-14 12:00:00 +0300
categories: sistem-analizi-ve-tasarimi
---

Bu ödevde artık genel örneklerden çıkıyoruz ve doğrudan **kendi projenize** dönüyoruz. Her öğrencinin dönem boyunca geliştirmekte olduğu proje farklı olabilir. Kimi bir satış sistemi tasarlıyor, kimi randevu sistemi, kimi okul otomasyonu, kimi kütüphane ya da sipariş uygulaması. Konularınız farklı olabilir, ama analiz mantığı aynıdır.

Bu nedenle bu ödevin amacı sadece diyagram çizmek değildir. Amaç, kendi projenizi bir analist gibi düşünmeniz ve sisteminizi **kullanıcı bakış açısından**, **süreç akışları açısından** ve **durum geçişleri açısından** modellemenizdir.

Bu çalışma, projenizin yazılım öncesi düşünme aşamasını oluşturur. Yani burada hazırladığınız dosya, daha sonra yapacağınız tasarım, ekran planlama, veritabanı düşüncesi ve geliştirme sürecinin temelini atacaktır.

> Kısacası bu ödev, "bir şey çizdim" ödevi değil; **kendi projesini kavradığını gösterme** ödevidir.

---

## Ödevin Amacı

Bu ödevin amacı, öğrencinin kendi projesi için:

- sistemde yer alan temel aktörleri belirlemesi,
- ana kullanım senaryolarını (Use Case) tanımlaması,
- bu kullanım senaryoları için süreç akışlarını modellemesi,
- sistem bileşenleri arasındaki mesajlaşma sırasını göstermesi,
- gerekli görülen durumlarda nesnelerin yaşam döngülerini State Machine ile ifade etmesi,
- bütün bunları düzenli, anlaşılır ve çıktı alınabilir tek bir dosyada toplamasıdır.

Bu nedenle sizden beklenen şey yalnızca birkaç UML şekli çizmek değil, projenizi tutarlı bir analiz dosyasına dönüştürmenizdir.

---

## Sizden Ne İsteniyor?

Her öğrenci, **kendi dönem projesi** için bir UML modelleme ödevi hazırlayacaktır.

Hazırlanacak ödev dosyasında aşağıdaki bölümler **zorunlu** olacaktır:

1. **Proje Tanıtımı**
2. **Aktörlerin Belirlenmesi**
3. **Use Case Listesi**
4. **Use Case Diyagramı**
5. **Seçilen Use Case'ler için Activity Diyagramları**
6. **Seçilen Use Case'ler için Sequence Diyagramları**
7. **Gerekli ise State Machine Diyagramı**
8. **Kısa Değerlendirme ve Sonuç**

Aşağıda bu bölümlerin her birini nasıl hazırlamanız gerektiği ayrıntılı şekilde açıklanmıştır.

---

## 1. Proje Tanıtımı

Ödevinizin başında projenizi kısa ama net biçimde tanıtmalısınız.

Bu bölümde aşağıdaki sorulara cevap verilmelidir:

- Projenizin adı nedir?
- Projeniz hangi problemi çözmektedir?
- Hedef kullanıcı kitlesi kimdir?
- Sistem genel olarak ne yapmaktadır?
- Projenin temel amacı nedir?

### Beklenen uzunluk

Yaklaşık **1 sayfa** yeterlidir.

### Örnek yaklaşım

> "Bu proje, üniversite öğrencilerinin kampüs içinde ikinci el ürün alıp satabilmesi için geliştirilen bir web tabanlı platformdur. Sistem; kullanıcı kayıt, giriş, ilan oluşturma, ürün arama, mesajlaşma ve raporlama gibi temel işlevlere sahiptir. Hedef kullanıcı kitlesi öğrenciler ve sistem yöneticileridir."

Bu bölüm, tüm diyagramların hangi bağlam içinde okunacağını belirlediği için önemlidir.

---

## 2. Aktörlerin Belirlenmesi

Projenizde sistemle etkileşim kuran tüm temel aktörleri belirleyiniz.

Aktörler yalnızca insan olmak zorunda değildir. Gerekirse dış sistemler de aktör olabilir.

### Örnek aktör türleri

- Öğrenci
- Yönetici
- Satıcı
- Alıcı
- Öğretmen
- Sekreter
- Kütüphaneci
- Misafir kullanıcı
- Ödeme servisi
- E-posta servisi
- Zamanlayıcı sistem

### Bu bölümde beklenenler

Her aktör için kısa açıklama yazınız:

| Aktör | Açıklama |
|------|----------|
| Öğrenci | Sistemde ürün arayan ve ilan veren kullanıcı |
| Yönetici | Sistemi yöneten, raporları görüntüleyen ve kullanıcı işlemlerini denetleyen kişi |
| E-posta Servisi | Bildirim iletilerini gönderen dış servis |

### Dikkat

- Kişi adı yazmayın, **rol** yazın
- Aktör ile sistem bileşenini karıştırmayın
- Gerçekte sistemle etkileşim kurmayan şeyleri aktör yapmayın

---

## 3. Use Case Listesi

Sistemin sunduğu temel kullanım senaryolarını belirleyiniz.

Her use case, kullanıcının sistem aracılığıyla gerçekleştirmek istediği anlamlı bir işi temsil etmelidir.

### En az kaç tane olmalı?

Her öğrenci projesi için en az **8 adet Use Case** belirlenmelidir.

Proje kapsamı genişse bu sayı daha fazla olabilir.

### Her use case için aşağıdaki tabloyu kullanınız

| Use Case ID | Use Case Adı | Birincil Aktör | Kısa Açıklama |
|-------------|--------------|----------------|---------------|
| UC-001 | Sisteme Giriş Yap | Kullanıcı | Kullanıcının sisteme kimlik bilgileriyle giriş yapması |
| UC-002 | Ürün Ara | Alıcı | Kullanıcının ürünleri filtreleyerek araması |
| UC-003 | İlan Oluştur | Satıcı | Kullanıcının yeni ürün ilanı eklemesi |

### Dikkat edilmesi gerekenler

- Use case adları **eylem fiili + nesne** biçiminde olmalıdır
- "İşlemler", "Yönetim", "Panel" gibi belirsiz ifadeler kullanmayın
- Her use case, gerçekten kullanıcıya değer sunan bir davranış olmalıdır

---

## 4. Use Case Diyagramı

Belirlediğiniz aktörler ve use case'leri kullanarak sisteminizin genel bir **Use Case Diyagramı**nı çiziniz.

Bu diyagramda şunlar açıkça görülmelidir:

- Aktörler
- Sistem sınırı
- Use case'ler
- Aktör-use case ilişkileri
- Varsa include / extend ilişkileri

### Bu bölümde dikkat edilecek noktalar

- Diyagram düzenli ve okunabilir olmalıdır
- Gereksiz kalabalık oluşturmayın
- Sadece gerçekten önemli use case'leri ekleyin
- Aktörleri sistem sınırının dışına yerleştirin
- Use case'leri sistem sınırı içinde gösterin

### Include ve Extend kullanımı

Eğer bazı use case'ler ortak alt davranışlar içeriyorsa `include`, koşullu genişlemeler varsa `extend` kullanabilirsiniz.

**Örnek:**
- "İlan Oluştur" `include` → "Kimlik Doğrula"
- "İndirim Kodu Uygula" `extend` → "Sipariş Oluştur"

Ama sırf kullanmış olmak için include/extend koymayın. Gerekliyse kullanın.

---

## 5. Activity Diyagramları

Belirlediğiniz use case'ler arasından **en az 3 tanesi** için **Activity Diagram** hazırlayınız.

Bu diyagramlar, seçilen kullanım senaryolarının adım adım süreç akışını göstermelidir.

### Her activity diyagramında mümkün olduğunca şunlar yer almalıdır

- Başlangıç düğümü
- Aktivite adımları
- Karar düğümleri
- Guard condition ifadeleri
- Gerekliyse paralel akışlar (fork/join)
- Gerekliyse swimlane kullanımı
- Bitiş düğümü

### Hangi use case'ler seçilebilir?

Bu seçim proje türüne göre değişir. Örneğin:

- Sisteme Giriş Yap
- Randevu Oluştur
- Kitap Ödünç Al
- Sipariş Ver
- İlan Oluştur
- Şikâyet Oluştur
- Kullanıcı Kaydı Yap

### Zorunlu kalite ölçütü

Activity diyagramlarınız sadece düz bir ok dizisi olmamalıdır. En azından:

- bir karar noktası,
- bir hata/alternatif durum,
- mümkünse bir sorumluluk ayrımı

içermelidir.

---

## 6. Sequence Diyagramları

Activity diyagramı hazırladığınız use case'lerden **en az 2 tanesi** için ayrıca **Sequence Diagram** oluşturunuz.

Bu diyagramlar, sistem içindeki bileşenlerin birbirleriyle hangi sırayla haberleştiğini göstermelidir.

### Sequence diyagramında beklenenler

- Lifeline'lar açıkça yazılmalı
- Mesajlar yukarıdan aşağı doğru mantıklı sırada verilmelidir
- Gerekirse dönüş mesajları eklenmelidir
- Uygunsa `alt`, `opt` veya `loop` blokları kullanılmalıdır
- Bileşenler gerçekçi seçilmelidir

### Örnek lifeline yapıları

Projeye göre aşağıdaki gibi lifeline'lar olabilir:

- Kullanıcı
- Browser / Mobil Uygulama
- Controller
- Service
- Database
- NotificationService
- PaymentService
- MailService

### Dikkat

Sequence diyagramı, Activity diyagramının tekrar çizilmiş hali olmamalıdır. Burada süreç değil, **iletişim sırası** gösterilmelidir.

---

## 7. State Machine Diyagramı (Gerekliyse Zorunlu)

Eğer projenizde yaşam döngüsü önemli olan nesneler varsa, bunlar için **en az 1 adet State Machine Diyagramı** hazırlayınız.

Bu bölüm bazı projelerde çok kritik, bazı projelerde ise daha az gerekli olabilir. Ama aşağıdaki türden nesneler varsa State Machine kullanmanız beklenir:

- Sipariş
- İlan
- Başvuru
- Destek talebi
- Kullanıcı hesabı
- Rezervasyon
- Ödeme

### State Machine'de beklenenler

- Başlangıç durumu
- En az 4 anlamlı durum
- Geçişler
- Geçişi tetikleyen olaylar
- Gerekliyse guard condition
- Gerekliyse geçiş eylemi

### Örnek

Bir sipariş sistemi için durumlar şu şekilde olabilir:

- Oluşturuldu
- Onay Bekliyor
- Ödendi
- Hazırlanıyor
- Kargoda
- Tamamlandı
- İptal Edildi

### Ne zaman çizilmeli?

Eğer sisteminizde nesne davranışı gerçekten durum değiştiriyorsa çizilmelidir. Basit veri giriş sistemlerinde sırf ödev tamamlansın diye uydurma state machine çizmeyin. Ama projenizde anlamlı bir nesne yaşam döngüsü varsa bunu atlamayın.

---

## 8. Kısa Açıklama ve Sonuç Bölümü

Ödevinizin sonunda kısa bir değerlendirme bölümü bulunmalıdır.

Bu bölümde şu sorulara cevap veriniz:

- Projenizde en kritik use case hangisiydi?
- Hangi diyagramı hazırlamak daha zorlayıcı oldu?
- Süreç modelleme sırasında hangi eksikleri fark ettiniz?
- Diyagramlar projenizi daha net görmenizi sağladı mı?

Bu bölüm, öğrencinin sadece çizim yapmadığını, düşündüğünü gösterir.

Yaklaşık **yarım sayfa ile 1 sayfa** arası yeterlidir.

---

## Teslim Formatı

Bu ödevin teslimi **çıktı alınabilir düzenli bir dosya** şeklinde yapılmalıdır.

### Beklenen teslim biçimi

- Tek bir **PDF dosyası** olarak teslim ediniz
- Sayfalar sıralı ve düzenli olmalıdır
- Diyagramlar okunabilir çözünürlükte olmalıdır
- Elle çizilmiş diyagram kabul edilecekse temiz taranmış veya net fotoğraflanmış olmalıdır
- Her diyagramın altında başlık bulunmalıdır

### Dosya adı formatı

Aşağıdaki format kullanılsın:

`AdSoyad_ogrNo_uml_odevi.pdf`

Örnek:

`AhmetYilmaz_221045067_uml_odevi.pdf`

---

## Ödevin Ortak Taslağı

Aşağıdaki yapıyı aynen kullanarak ödevinizi hazırlayınız:

---

### KAPAK SAYFASI

- Ders Adı: Sistem Analizi ve Tasarımı
- Ödev Adı: UML Modelleme Ödevi
- Öğrenci Adı Soyadı
- Öğrenci Numarası
- Bölüm / Sınıf
- Teslim Tarihi
- Proje Adı

---

### 1. PROJE TANITIMI

- Proje adı
- Projenin amacı
- Hedef kullanıcı kitlesi
- Çözmeye çalıştığı problem
- Sistemin genel açıklaması

---

### 2. AKTÖRLER

| Aktör | Açıklama |
|------|----------|
| ... | ... |

---

### 3. USE CASE LİSTESİ

| Use Case ID | Use Case Adı | Aktör | Açıklama |
|-------------|--------------|-------|----------|
| UC-001 | ... | ... | ... |

---

### 4. USE CASE DİYAGRAMI

- Diyagram görseli
- Gerekliyse kısa açıklama

---

### 5. ACTIVITY DİYAGRAMLARI

Her biri için:

- İlgili Use Case adı
- Diyagram görseli
- Kısa açıklama

En az 3 adet

---

### 6. SEQUENCE DİYAGRAMLARI

Her biri için:

- İlgili Use Case adı
- Lifeline listesi
- Diyagram görseli
- Kısa açıklama

En az 2 adet

---

### 7. STATE MACHINE DİYAGRAMI (VARSA / GEREKLİYSE)

- Seçilen nesne adı
- Durum listesi
- Diyagram görseli
- Kısa açıklama

---

### 8. SONUÇ VE DEĞERLENDİRME

- En kritik use case
- En zor kısım
- Süreçte fark edilen eksikler
- Genel değerlendirme

---

## Minimum Gereklilikler Özeti

Ödevinizin kabul edilebilir sayılması için en az aşağıdaki içerikleri barındırması gerekir:

- 1 proje tanıtımı
- En az 3 aktör
- En az 8 use case
- 1 use case diyagramı
- En az 3 activity diyagramı
- En az 2 sequence diyagramı
- Uygunsa en az 1 state machine diyagramı
- Sonuç/değerlendirme bölümü
- Düzenli tek PDF çıktı

Bu gerekliliklerin altındaki çalışmalar eksik kabul edilir.

---

## Değerlendirme Ölçütleri

Ödevler aşağıdaki ölçütlere göre değerlendirilecektir:

| Ölçüt | Puan |
|------|------|
| Projenin açık ve doğru tanıtılması | 10 |
| Aktörlerin ve use case'lerin doğru belirlenmesi | 15 |
| Use case diyagramının doğruluğu ve düzeni | 15 |
| Activity diyagramlarının mantıksal doğruluğu | 20 |
| Sequence diyagramlarının teknik tutarlılığı | 20 |
| State machine kullanımının uygunluğu | 10 |
| Düzen, okunabilirlik ve çıktı kalitesi | 10 |
| **Toplam** | **100** |

---

## Önemli Uyarılar

- İnternetten rastgele alınmış örnek diyagramlar kabul edilmeyecektir.
- Diyagramlar, **kendi projenize özel** hazırlanmalıdır.
- Aynı diyagramı sadece başlık değiştirerek kullanmanız fark edilir.
- Diyagramlar okunmuyor, karışık veya başlıksız ise puan kırılır.
- Use case ile activity veya sequence arasındaki ilişki kopuk olmamalıdır.
- State machine gerekiyorsa atlanması eksiklik sayılır.

---

## Son Söz

Bu ödevin amacı sizi diyagram ezberlemeye zorlamak değildir. Amaç, kendi projenize dışarıdan bakabilmenizdir. Çünkü bir sistemi gerçekten anlamanın yolu, onu sadece yazmak değil, **modelleyebilmektir**.

İyi hazırlanmış bir UML ödevi, öğrencinin sadece şekil çizebildiğini değil, sistem mantığını kavradığını gösterir.

Şekil çizmek kolaydır. Asıl mesele, doğru şeyi doğru yerde göstermektir.
