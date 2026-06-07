---
layout: post
title: "Proje Yönetimi, Risk ve Dokümantasyon: İyi Fikirleri Yolda Kaybetmemek"
date: 2026-06-07 13:22:00 +0300
categories: sistem-analizi-ve-tasarimi
course_id: sistem-analizi-ve-tasarimi
tags: [sistem-analizi, proje-yönetimi, risk-analizi, wbs, dokümantasyon, git]
---

Bir yazılım projesi sadece kod yazarak başarıya ulaşmaz.

Hatta bazen tam tersi olur: Teknik olarak yetenekli ekipler, kötü planlama yüzünden projeyi dağıtır. Gereksinimler kayar, teslim tarihi sislenir, herkes başka bir şeyi “öncelik” sanır, yeni istekler sessizce projeye sızar, riskler konuşulmadığı için kriz olarak patlar ve en sonunda ortada çalışan parçalar olur ama yönetilen bir ürün olmaz.

İşte bu yüzden **proje yönetimi**, yazılım geliştirmede lüks değil; doğrudan hayatta kalma disiplinidir.

Proje yönetimi, yaratıcı enerjiyi boğmak için değil; dağılmasını önlemek için vardır. Risk yönetimi, korkaklık değildir; sürprizleri küçültme sanatıdır. Dokümantasyon ise gereksiz evrak değil; ekip hafızasının yazılı biçimidir.

Bu derste verdiğiniz dökümandan yararlanarak şu omurgayı netleştireceğiz:

- Yazılım proje yönetimi neden teknik ekipler için bile kritiktir?
- **Kapsam**, neden en hızlı kontrolden çıkan şeydir?
- **WBS (İş Kırılım Yapısı)**, büyük işi nasıl yönetilebilir hale getirir?
- **Risk analizi** neden felaket tellallığı değil, profesyonelliktir?
- **Değişiklik yönetimi** olmazsa proje nasıl dağılır?
- **Sürüm kontrolü** ve **dokümantasyon paketi**, neden projenin omurgasıdır?

Bugün aslında şunu konuşacağız: İyi fikirlerin iyi yönetilmediğinde nasıl boşa gittiğini ve bunu nasıl engelleyebileceğimizi.

> “Proje yönetimi, bilgi, beceri, araçlar ve tekniklerin proje faaliyetlerine uygulanmasıdır. Amaç, proje gereksinimlerini karşılamaktır.”
>
> **PMI, PMBOK Guide**

---

## Bu Derste Neler Öğreneceksiniz?

Bu bölümün sonunda şunları yapabilir hale gelmeniz hedeflenmektedir:

- Yazılım proje yönetiminin neden kritik olduğunu açıklayabilmek
- **Kapsam, zaman ve maliyet** arasındaki ilişkiyi yorumlayabilmek
- **Scope creep** tehlikesini tanıyabilmek
- Basit bir **WBS** oluşturabilmek
- Riskleri tanımlayıp **olasılık × etki** mantığıyla değerlendirebilmek
- Temel **risk yanıt stratejileri** geliştirebilmek
- **Change Request** sürecinin neden gerekli olduğunu açıklayabilmek
- Git tabanlı sürümleme mantığını proje disipliniyle ilişkilendirebilmek
- Dönem projesi için anlamlı bir **dokümantasyon paketi** kurgulayabilmek

---

## 1. Yazılım Proje Yönetimi Nedir?

Yazılım proje yönetimi, bir ürünün yalnızca “yapılmasını” değil, **kontrollü biçimde tamamlanmasını** sağlar.

Bu cümledeki kritik kelime kontrollü.

Çünkü yazılım projelerinde şu yanılgı çok yaygındır:

- “Zaten yazarız.”

Evet, yazarsınız. Ama:
- neyi ne zaman yazacaksınız?
- hangi iş önce yapılacak?
- neyin bittiğine kim karar verecek?
- kapsam değişirse ne olacak?
- teslim tarihi kayarsa nasıl tepki verilecek?
- riskler kimin masasındadır?

Bunların cevabı yoksa proje yönetimi de yoktur.

### Neden Bu Kadar Önemli?

Çünkü iyi proje yönetimi şunları sağlar:

- belirsizliği azaltır
- öncelikleri netleştirir
- ekip hizasını korur
- sürprizleri küçültür
- beklentiyi yönetir
- teslim kalitesini yükseltir

Kötü proje yönetimi ise teknik olarak güçlü ekipleri bile aşağı çeker.

---

## 2. Proje Üçgeni: Her Şey Birbirine Bağlı

Proje yönetiminin klasik çekirdeği **üç temel kısıta** dayanır:

- **Kapsam (Scope)** → Ne yapılacak?
- **Zaman (Time)** → Ne kadar sürecek?
- **Maliyet (Cost)** → Ne kadar kaynak harcanacak?

Bunlar birbirinden bağımsız değildir.

### Basit Gerçek

Kapsam artarsa genellikle:
- zaman uzar,
- maliyet artar,
- ya da kalite baskı altına girer.

Bu yüzden “bir özellik daha ekleyelim, küçük iş” cümlesi çoğu zaman masum değildir.

### Acı Ama Gerçek Denklem

“Hızlı, ucuz, kaliteli” üçlüsünün üçünü birden aynı anda istemek çoğu zaman gerçekçi değildir.

İkisini seçersiniz, biri baskılanır.

Bu yüzden proje yönetimi yalnızca takvim tutmak değildir; **denge kurma işidir**.

---

## 3. Kapsam Yönetimi: Ne Yapacağınızı Bilmezseniz Her Şey Yapılacakmış Gibi Olur

Kapsam, projenin sınırıdır.

Yani şu sorunun net cevabıdır:

> “Bu projede ne var, ne yok?”

Bu sınır net değilse ekip sürekli belirsizlik içinde kalır. O zaman herkes iyi niyetle yeni bir şey ekler. Sonra proje sessizce şişer.

İşte bu noktada en sinsi düşman çıkar:

---

## 4. Scope Creep: Projeye Gizlice Sızan Genişleme

**Kapsam sürünmesi (scope creep)**, kontrol dışı ve resmi onay olmadan projeye yeni işlerin sızmasıdır.

Bunun kötü yanı şudur:

- tek bir anlık büyük patlama gibi gelmez,
- küçük küçük olur,
- ama sonunda proje başka bir şeye dönüşür.

### Nasıl Görünür?

- “Şunu da ekleyelim”
- “Bu da olsa fena olmaz”
- “Madem bunu yapıyoruz, şunu da yapalım”
- “Zaten çok sürmez”

İşte proje mezarlıklarının yarısı bu cümlelerle dolu.

### Scope Creep’i Önleme Yolları

- Başta kapsamı net yaz
- Paydaş onayı al
- Her yeni isteği **Change Request** sürecine sok
- Etki analizi yap
- Backlog’u sürekli önceliklendir

Yani mesele “değişiklik olmasın” demek değil; **değişiklik kontrolsüz olmasın** demektir.

---

## 5. WBS: Büyük İşi Isırılabilir Parçalara Ayırmak

**WBS (Work Breakdown Structure / İş Kırılım Yapısı)**, proje kapsamını yönetilebilir küçük iş paketlerine bölen hiyerarşik yapıdır.

Bir projeye bütünden bakınca insanın gözü korkabilir. Ama parçalarsanız iş görünür hale gelir.

### WBS Ne İşe Yarar?

- işi somutlaştırır
- sorumluluk atamayı kolaylaştırır
- ilerlemeyi ölçülebilir yapar
- eksikleri görünür kılar
- planlamayı kolaylaştırır

### İyi WBS Nasıl Olur?

En alt düzeydeki her iş paketi:
- atanabilir olmalı,
- ölçülebilir olmalı,
- tamamlandı / tamamlanmadı diye izlenebilir olmalı.

### Örnek Mantık

Bir kampüs ikinci el platformunu düşünelim.

Üst seviye başlıklar:
- Proje Yönetimi
- Gereksinim Analizi
- Tasarım
- Geliştirme
- Test
- Dağıtım

Sonra bunlar aşağı doğru bölünür:
- Use case yazımı
- ER diyagramı
- sınıf diyagramı
- kullanıcı modülü
- mesajlaşma modülü
- UAT
- prod dağıtımı

Böylece sisli bir fikir, izlenebilir bir iş listesine dönüşür.

---

## 6. WBS Neden Öğrenci Projelerinde de Kritik?

Çünkü öğrenci projelerinde en sık görülen hata şudur:

- herkes projeyi biliyor sanır,
- ama kim ne yapacak tam belli değildir,
- son hafta panik başlar,
- bazı işler iki kez yapılır,
- bazı işler hiç yapılmaz.

WBS, sadece büyük kurumsal yapıların oyuncağı değildir. Küçük ekipte bile düzen sağlar.

WBS varsa:
- iş bölünür,
- sahiplik netleşir,
- ilerleme görünür olur,
- son hafta sürprizi azalır.

---

## 7. Risk Yönetimi: Paranoya Değil Hazırlık

Risk yönetimi bazen yanlış anlaşılır. İnsanlar bunu gereksiz karamsarlık gibi görebilir.

Oysa risk yönetimi şu soruyu erkenden sormaktır:

> “Ne ters gidebilir, ve giderse ne yapacağız?”

Bu, korku değil olgunluktur.

Tom DeMarco ve Timothy Lister’in sözünü boşuna sevmiyoruz:

> “Riskleri yönetemeyen, sadece krizleri yönetir.”

Yani risk konuşmazsanız risk yok olmaz. Sadece sizi hazırlıksız yakalar.

---

## 8. Risk Analizi Süreci

Risk yönetimi rastgele “birkaç ihtimal söyleme” işi değildir. Düzenli bir süreçtir.

### 8.1 Risk Tanımlama
Önce olası riskleri listelersiniz.

Örnek:
- gereksinimler net değil
- ekipten biri ayrılabilir
- üçüncü taraf API değişebilir
- performans sorunu çıkabilir
- teslim tarihi sıkışabilir

### 8.2 Risk Değerlendirme
Her risk için şu iki soruyu sorarsınız:
- gerçekleşme olasılığı nedir?
- etkisi ne kadar büyüktür?

### 8.3 Risk Yanıt Planı
Risk olursa ne yapılacağını ya da olmaması için ne yapılacağını planlarsınız.

### 8.4 Risk İzleme
Risk listesi canlı tutulur. Bir kez yazılıp unutulmaz.

---

## 9. Olasılık × Etki Matrisi

Riskleri değerlendirmek için en pratik yöntemlerden biri **olasılık × etki** matrisidir.

Mantık şudur:

- yüksek olasılık + yüksek etki = kritik risk
- düşük olasılık + düşük etki = kabul edilebilir risk

### Neden İşe Yarar?

Çünkü her riske aynı enerjiyi harcamak mantıksızdır.

Bazı riskler:
- izlenir,
- bazıları için önlem alınır,
- bazıları için ciddi azaltma planı gerekir.

Bu matris, ekibin enerjisini doğru yere yönlendirir.

---

## 10. Risk Yanıt Stratejileri

Risk belirlendi. Peki sonra?

Dört temel strateji vardır:

### 10.1 Kaçınma (Avoid)
Riski doğuran şeyi değiştirirsiniz.

Örnek:
- aşırı belirsiz yeni teknoloji yerine daha bilinen teknoloji seçmek

### 10.2 Azaltma (Mitigate)
Riski tamamen yok edemiyorsanız olasılığını veya etkisini düşürürsünüz.

Örnek:
- erken prototip yapmak
- yük testi yapmak
- bilgi paylaşımı artırmak

### 10.3 Transfer (Transfer)
Riski başka bir tarafa devredersiniz.

Örnek:
- dış kaynak kullanmak
- SLA sözleşmesi
- sigorta

### 10.4 Kabul (Accept)
Risk küçüktür ya da kaçınılmazdır; izlenir ve gerçekleşirse tepki verilir.

Buradaki kilit nokta şu:

**Kabul**, “umursamamak” değildir.
Kabul, “farkındayız ve bilinçli olarak taşıyoruz” demektir.

---

## 11. Örnek Risk Kaydı Mantığı

İyi bir risk kaydı şu tür alanlar içerir:

- risk ID
- açıklama
- olasılık
- etki
- strateji
- sorumlu kişi
- durum

Örnek düşünce:

- Gereksinimler belirsiz → yüksek olasılık, yüksek etki → prototip + UAT ile azalt
- Kilit geliştirici ayrılabilir → orta olasılık, yüksek etki → bilgi paylaşımı ve dokümantasyon
- API değişebilir → düşük olasılık, orta etki → sözleşme / alternatif plan

Bu yaklaşım projeyi sakinleştirir. Çünkü belirsizlik görünür hale gelir.

---

## 12. Değişiklik Yönetimi: Değişim Kaçınılmaz, Kaos Şart Değil

Yazılım projelerinde değişiklik olur. Nokta.

Müşteri fikrini değiştirir.
Yeni gereksinim çıkar.
Teknik engel görülür.
Pazar koşulu değişir.

Mesele değişiklik olmaması değil; değişikliğin **yönetilmesidir**.

### Change Request Süreci Neden Gerekli?

Çünkü her değişiklik:
- kapsamı etkiler,
- zamanı etkiler,
- maliyeti etkiler,
- teknik riski etkiler.

Eğer değişiklik kapıdan sessizce içeri alınırsa proje görünmeden bozulur.

### Sağlıklı Akış

1. Değişiklik isteği yazılır
2. Etki analizi yapılır
3. Onay / red / erteleme kararı verilir
4. Plan güncellenir
5. Geliştirme + test + dokümantasyon yapılır

Bu disiplin, projeyi sertleştirmez; savrulmaktan korur.

---

## 13. Sürümleme: Kim Ne Değiştirdi, Ne Zaman, Neden?

Sürüm kontrolü, modern yazılım projelerinin omurgalarından biridir.

Sadece kod saklama aracı değildir. Aynı zamanda proje hafızasıdır.

### Neden Hayati?

Çünkü sürümleme sayesinde:
- geçmişe dönersiniz,
- değişiklikleri izlersiniz,
- ekip paralel çalışabilir,
- hataları izole edersiniz,
- yayın sürecini yönetirsiniz.

### Git Akışının Mantığı

Dökümandaki hat üzerinden düşünürsek:

- `main/master` → stabil, yayınlanabilir kod
- `develop` → aktif geliştirme hattı
- `feature/*` → yeni özellikler
- `hotfix/*` → acil düzeltmeler
- `release/*` → sürüm hazırlığı

Bu yapı, ekipte “herkes her yere bir şey atıyor” kaosunu azaltır.

### Commit Mesajı Disiplini

İyi commit mesajı önemlidir.

Örnek:
- `feat: add product search by category`
- `fix: resolve login case sensitivity bug`
- `docs: update API endpoint descriptions`
- `test: add unit tests for UserService`

İyi commit mesajı, gelecekteki kendinize saygıdır.

---

## 14. Dokümantasyon: Projenin Yazılı Hafızası

Dokümantasyon bazen “sonradan toparlanacak rapor yükü” sanılır. Bu büyük hata.

İyi dokümantasyon şunları sağlar:
- ortak anlayış oluşturur,
- ekip bilgisini kişiden bağımsızlaştırır,
- bakım ve devir sürecini kolaylaştırır,
- test ve teslim sürecini netleştirir,
- proje kararlarını görünür kılar.

Kod her şeyi anlatmaz. Özellikle neden öyle yapıldığını çoğu zaman hiç anlatmaz.

---

## 15. İyi Bir Dokümantasyon Paketi Neler İçerir?

Dökümandaki paket yapısı bayağı yerinde. Sistem Analizi dersi için güçlü bir teslim seti oluşturuyor.

### 15.1 SRS — Yazılım Gereksinimleri Spesifikasyonu
İçermesi beklenenler:
- problem tanımı
- proje kapsamı
- paydaş analizi
- fonksiyonel gereksinimler
- fonksiyonel olmayan gereksinimler
- varsayımlar ve kısıtlar
- önceliklendirme

Bu belge, projenin “ne yapacağını” en resmi biçimde tanımlar.

### 15.2 UML Diyagram Seti
- use case diyagramı
- use case senaryoları
- activity diyagramı
- sequence diyagramı
- sınıf diyagramı
- ER diyagramı

Bunlar birlikte sistemin hem iş akışını hem yapısal mantığını görünür kılar.

### 15.3 Veri Sözlüğü
Veri sözlüğü, sistemdeki veri elemanlarının sözlüğüdür.

Örnek bilgiler:
- tablo adı
- sütun adı
- veri tipi
- açıklama
- kısıtlar

Bu belge özellikle veritabanı netliği ve ekip içi tutarlılık için çok değerlidir.

### 15.4 Mimari Dokümantasyon
- katmanlı mimari şeması
- bileşen ilişkileri
- API endpoint listesi
- deployment bilgisi

Bu da sistemin nasıl kurulduğunu ve nasıl çalıştığını anlatır.

---

## 16. Proje Yönetimi ile Dokümantasyon Arasındaki Gizli Bağ

Birçok ekip şunu ayrı sanır:

- proje yönetimi başka şey,
- dokümantasyon başka şey.

Aslında ikisi çok bağlıdır.

Çünkü dokümante edilmeyen kararlar:
- unutulur,
- yanlış hatırlanır,
- kişi bağımlı hale gelir,
- değişiklik geldiğinde ekip tekrar aynı tartışmayı yapar.

İyi proje yönetimi, yazılı iz bırakır.
İyi dokümantasyon da proje yönetimini somutlaştırır.

---

## 17. Öğrenci Projelerinde En Sık Görülen Hatalar

### 1. Kapsamı başta netleştirmemek
Bu, projenin sonlarına doğru panik üretir.

### 2. WBS yapmadan işe dalmak
İş listesi görünmez kalır, sorumluluklar karışır.

### 3. Risk konuşmamak
Sorun çıkınca “kimse bunu öngörmedi” noktasına gelinir.

### 4. Her değişikliği doğrudan kabul etmek
Bu, scope creep için açık davetiyedir.

### 5. Git’i sadece dosya yedekleme gibi kullanmak
Oysa Git proje yönetimi disiplininin de parçasıdır.

### 6. Dokümantasyonu en sona bırakmak
Bu durumda belgeler yaşayan yapı değil, son dakika ödevi olur.

### 7. Bilgiyi sadece bir kişinin kafasında tutmak
Bu, ekip projelerinde tehlikelidir.

---

## 18. Bölüm Özeti

Bu derste şunları netleştirdik:

- Yazılım proje yönetimi, teknik üretimin kontrollü teslimata dönüşmesini sağlar.
- **Kapsam, zaman ve maliyet** birbirine sıkı sıkıya bağlıdır.
- **Scope creep**, projeyi sessizce şişiren en büyük tehlikelerden biridir.
- **WBS**, büyük işleri yönetilebilir paketlere böler.
- **Risk yönetimi**, krizleri beklemek yerine önceden hazırlık yapmaktır.
- **Change Request** süreci, değişimi kaosa değil karara dönüştürür.
- **Sürümleme**, yalnızca kod geçmişi değil proje hafızasıdır.
- **Dokümantasyon paketi**, projenin neyi, neden ve nasıl yaptığını görünür kılar.

Kısacası iyi yönetilen proje, sadece geliştirilen proje değildir; planlanan, izlenen, tartışılan, belgelenen ve gerektiğinde kontrollü biçimde yön değiştirilebilen projedir.

---

## 19. Mini Alıştırmalar

### Alıştırma 1
Bir kampüs ikinci el platformu için 3 seviyeli mini bir WBS oluşturun.

### Alıştırma 2
Aşağıdaki riskler için olasılık, etki ve yanıt stratejisi belirleyin:
- gereksinim belirsizliği
- ekip üyesinin projeyi bırakması
- üçüncü taraf servisin değişmesi
- teslim tarihine yetişememe

### Alıştırma 3
Bir değişiklik isteği örneği yazın:
Senaryo: Projeye “favorilere ekle” özelliği sonradan eklenmek isteniyor.

### Alıştırma 4
Bir dönem projesi için teslim edilmesi gereken dokümantasyon paketini madde madde sıralayın.

### Alıştırma 5
İyi commit mesajının neden önemli olduğunu 5 cümleyle açıklayın.

---

## Kaynaklar

- PMI. (2021). *PMBOK Guide* (7th ed.). Project Management Institute.
- DeMarco, T. & Lister, T. (2003). *Waltzing with Bears*. Dorset House.
- Schwaber, K. (2004). *Agile Project Management with Scrum*. Microsoft Press.
- IEEE. (2011). *IEEE Std 29148-2011, Systems and Software Engineering — Requirements Engineering*.
- Chacon, S. & Straub, B. (2014). *Pro Git* (2nd ed.). Apress.

---

İyi projeler yalnızca iyi fikirlerden doğmaz. İyi projeler, o fikrin etrafına sınır çizebilen, riskini görebilen, değişikliğini yönetebilen ve hafızasını kaybetmeyen ekiplerden doğar. Yazılımın kendisi kadar, onu nasıl yönettiğiniz de sonuçtur.
