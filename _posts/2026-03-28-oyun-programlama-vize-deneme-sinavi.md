---
layout: post
title: "Vize Deneme Sınavı: Açık Uçlu 20 Soru"
date: 2026-03-28 13:00:00 +0300
categories: oyun-programlama
course_id: oyun-programlama
tags: [unity, oyun-programlama, sınav, vize, açık-uçlu, deneme]
---

Bu deneme sınavı, Oyun Programlama dersinde işlenen tüm konuları kapsayan **açık uçlu** sorulardan oluşmaktadır. Her sorunun altındaki **"Çözümü Göster"** butonuna tıklayarak detaylı çözümü görebilirsiniz.

**Süre:** 90 dakika | **Toplam:** 20 soru | **Zorluk:** Orta-İleri

**Kapsanan Konular:** Oyun kavramı ve tarihçesi, Flow teorisi, Gamification, Unity kurulumu ve arayüzü, Asset/GameObject/Component kavramları, Hierarchy ve Parent-Child ilişkisi, Inspector, Sprite ve Sprite Renderer, Transform (Position/Rotation/Scale), Sorting Layer ve Order in Layer, Pixels Per Unit (PPU), MonoBehaviour, Start/Update yaşam döngüsü, Time.deltaTime, C# scripting temelleri.

---

{% raw %}

<style>
.exam-container{max-width:850px;margin:0 auto;font-family:inherit}
.exam-question{background:var(--bg-alt,#f8f9fa);border:1px solid var(--border,#dee2e6);border-radius:10px;padding:20px;margin-bottom:20px;position:relative}
.exam-question h3{margin-top:0;color:var(--text,#2c3e50);font-size:1em;display:flex;align-items:center;gap:8px}
.exam-question p{color:var(--text,#333);line-height:1.7;margin-bottom:10px}
.exam-question pre{background:#1e1e2e;color:#cdd6f4;padding:14px;border-radius:8px;overflow-x:auto;font-size:.85em;line-height:1.6;margin:10px 0}
.exam-question code{font-size:.88em}
.exam-points{display:inline-block;padding:3px 10px;border-radius:50px;background:color-mix(in srgb,var(--gold,#C9A84C) 15%,var(--bg,#fff));color:var(--text,#856404);font-size:.78em;font-weight:700;margin-left:auto}
.exam-topic{display:inline-block;padding:3px 10px;border-radius:50px;background:color-mix(in srgb,var(--primary,#1B2A4A) 12%,var(--bg,#fff));color:var(--text,#1B2A4A);font-size:.75em;font-weight:600;margin-left:8px}
.solution-btn{margin-top:12px;background:var(--primary,#1B2A4A);color:#fff;border:none;padding:10px 20px;border-radius:8px;cursor:pointer;font-size:.88em;font-weight:600;transition:all .2s;display:inline-flex;align-items:center;gap:6px}
.solution-btn:hover{background:var(--primary-mid,#2C4470);transform:translateY(-1px)}
.solution-btn.open{background:var(--text-muted,#6b7590)}
.solution-box{display:none;margin-top:14px;padding:18px;background:color-mix(in srgb,var(--gold,#C9A84C) 6%,var(--bg,#fff));border-left:4px solid var(--gold,#C9A84C);border-radius:0 8px 8px 0;line-height:1.7;color:var(--text,#333)}
.solution-box.show{display:block}
.solution-box pre{background:#1e1e2e;color:#cdd6f4;padding:14px;border-radius:8px;overflow-x:auto;font-size:.85em;line-height:1.6;margin:10px 0}
.solution-box p{margin-bottom:10px}
.solution-box table{width:100%;border-collapse:collapse;margin:10px 0;font-size:.88em}
.solution-box th,.solution-box td{padding:6px 10px;text-align:left;border:1px solid var(--border,#dee2e6)}
.solution-box th{background:var(--bg-alt,#f0f0f5);font-weight:600}
.solution-box td{background:var(--card-bg,#fff)}
.solution-box .tip{background:color-mix(in srgb,#00b894 10%,var(--bg,#fff));border:1px solid #00b894;border-radius:6px;padding:8px 12px;margin:10px 0;font-size:.88em;color:var(--text,#333)}
.exam-progress{text-align:center;margin-bottom:24px;font-size:.9em;color:var(--text-muted,#636e72);padding:10px;background:var(--bg-alt,#f8f9fa);border-radius:8px;border:1px solid var(--border,#dee2e6)}
</style>

<div class="exam-container">

<div class="exam-progress" id="examProgress">Çözülen: <span id="solvedCount">0</span> / 20</div>

<!-- SORU 1 -->
<div class="exam-question" id="q1">
<h3>📝 Soru 1 <span class="exam-points">5 puan</span> <span class="exam-topic">Oyun Kavramı</span></h3>
<p>Johan Huizinga'nın <strong>"sihirli çember" (magic circle)</strong> kavramını açıklayınız. Bir oyunun teknik tanımındaki üç temel unsuru (hedef, kural, geri bildirim) yazınız ve günlük hayattan oyun olmayan ama bu üç unsuru barındıran bir örnek veriniz.</p>
<button class="solution-btn" onclick="toggleSolution(this)">💡 Çözümü Göster</button>
<div class="solution-box">
<p><strong>Sihirli çember:</strong> Johan Huizinga'ya göre oyun, gerçek hayattan <strong>izole edilmiş</strong>, gönüllü, kuralları olan özel bir alanda gerçekleşir. Bu alana "sihirli çember" denir. Oyuncu çembere girdiğinde farklı kurallar geçerlidir — gerçek dünya sonuçları askıya alınır. Satranç taşını yediğinizde gerçekte kimseyi "öldürmezsiniz"; çemberin içinde bu bir eylemdir.</p>
<p><strong>Üç temel unsur:</strong></p>
<p>1. <strong>Hedef:</strong> Oyuncunun ulaşmaya çalıştığı amaç (ör: tüm düşmanları yenmek, en yüksek skoru almak).<br>
2. <strong>Kural:</strong> Oyuncunun neler yapıp yapamayacağını belirleyen sınırlamalar (ör: sınırlı can, zaman limiti).<br>
3. <strong>Geri bildirim:</strong> Oyuncunun eylemine verilen anlık tepki (ör: puan artışı, ses efekti, can azalması).</p>
<p><strong>Oyun olmayan örnek:</strong> Akıllı saat ile adım sayma — <strong>Hedef:</strong> 10.000 adım at. <strong>Kural:</strong> Sadece yürüme/koşma sayılır. <strong>Geri bildirim:</strong> Saatin titremesi, "başardın" rozeti. Bu bir oyun değildir ama üç unsuru barındırır — buna <strong>gamification</strong> denir.</p>
</div>
</div>

<!-- SORU 2 -->
<div class="exam-question" id="q2">
<h3>📝 Soru 2 <span class="exam-points">5 puan</span> <span class="exam-topic">Flow Teorisi</span></h3>
<p>Mihaly Csikszentmihalyi'nin <strong>Flow (Akış) teorisi</strong>'ni açıklayınız. Zorluk-yetenek dengesinde üç durumu (sıkıntı, akış, kaygı) tanımlayınız. Bir oyun tasarımcısı olarak Flow durumunu sürdürmek için ne yaparsınız?</p>
<button class="solution-btn" onclick="toggleSolution(this)">💡 Çözümü Göster</button>
<div class="solution-box">
<p><strong>Flow teorisi:</strong> Bir oyunun nihai amacı, oyuncuyu "akış" (flow) durumuna sokmaktır. Akış, yeteneklerimiz ile karşılaştığımız zorluğun <strong>mükemmel dengede</strong> olduğu andır. Zaman kavramı kaybolur, tamamen odaklanırsınız.</p>
<p><strong>Üç durum:</strong></p>
<table>
<tr><th>Durum</th><th>Zorluk vs Yetenek</th><th>Sonuç</th></tr>
<tr><td><strong>Sıkıntı (Boredom)</strong></td><td>Zorluk çok düşük, yetenek yüksek</td><td>Oyuncu ilgisini kaybeder, bırakır</td></tr>
<tr><td><strong>Akış (Flow)</strong></td><td>Zorluk ≈ Yetenek (denge)</td><td>Tam odaklanma, zaman kaybolur, ideal deneyim</td></tr>
<tr><td><strong>Kaygı (Anxiety)</strong></td><td>Zorluk çok yüksek, yetenek yetersiz</td><td>Oyuncu hayal kırıklığına uğrar, bırakır</td></tr>
</table>
<p><strong>Tasarımcı olarak:</strong> <strong>Dinamik Zorluk Ayarlama (DDA)</strong> kullanılır — oyuncu sürekli ölüyorsa düşman gücü düşürülür, çok kolay ilerliyorsa zorluk artırılır. Kademeli seviye sistemi (kolay → orta → zor) ile oyuncu yeteneği artarken zorluk da paralel artar.</p>
<p class="tip">💡 <strong>Gerçek dünya örneği:</strong> Mario'nun ilk seviyesi basittir (yetenek öğrenme), son seviyeler çok zordur (ustalaşma gerektirir). Bu artış doğrusal değil, oyuncunun öğrenme eğrisine uyumlu bir artıştır.</p>
</div>
</div>

<!-- SORU 3 -->
<div class="exam-question" id="q3">
<h3>📝 Soru 3 <span class="exam-points">5 puan</span> <span class="exam-topic">Gamification</span></h3>
<p>Gamification (oyunlaştırma) nedir? Üç temel bileşenini yazınız. İnsan biyolojik olarak neden oyun oynar? Bu bilgiyi kullanarak bir <strong>eğitim uygulaması</strong> için gamification tasarımı öneriniz (en az 3 mekanik).</p>
<button class="solution-btn" onclick="toggleSolution(this)">💡 Çözümü Göster</button>
<div class="solution-box">
<p><strong>Gamification:</strong> Oyun mekaniklerini oyun olmayan alanlara (eğitim, sağlık, pazarlama) uygulamaktır.</p>
<p><strong>Üç bileşen:</strong></p>
<p>1. <strong>Net Hedef:</strong> "Bu hafta 50 soru çöz."<br>
2. <strong>Anlık Geri Bildirim:</strong> Doğru cevapta yeşil tik, yanlışta kırmızı uyarı.<br>
3. <strong>Ödül/Ceza:</strong> "5 gün arka arkaya çözdün!" rozeti / "Zinciri kırdın" uyarısı.</p>
<p><strong>İnsan neden oynar?</strong> Biyolojik olarak oyun, <strong>"güvenli alanda hata yapma" simülasyonudur</strong>. Aslan tarafından kovalanmayı öğrenmek için gerçekten kovalanmak gerekmez — "kovalamaca" oynanır. Oyun, hayatta kalma pratiğidir.</p>
<p><strong>Eğitim uygulaması tasarımı:</strong></p>
<p>1. <strong>XP ve Seviye Sistemi:</strong> Her çözülen soru XP kazandırır, yeterli XP ile seviye atlanır (ilerleme hissi).<br>
2. <strong>Günlük Streak:</strong> Arka arkaya giriş yapılan günler sayılır, zincir kırılırsa sıfırlanır (loss aversion — kaybetme korkusu).<br>
3. <strong>Liderlik Tablosu:</strong> Sınıf arkadaşlarıyla haftalık sıralama (sosyal rekabet).<br>
4. <strong>Bonus Soru (Random Reward):</strong> Rastgele zamanlarda ekstra puan kazandıran sürpriz sorular (değişken oranlı pekiştirme — Skinner).</p>
</div>
</div>

<!-- SORU 4 -->
<div class="exam-question" id="q4">
<h3>📝 Soru 4 <span class="exam-points">5 puan</span> <span class="exam-topic">Oyun Tarihçesi</span></h3>
<p>Dijital oyunların tarihsel gelişimini <strong>dört dönem</strong> halinde özetleyiniz. Her dönem için bir örnek oyun veya gelişme veriniz. "Oyun sadece eğlence değildir" ifadesini modern dönemden örneklerle destekleyiniz.</p>
<button class="solution-btn" onclick="toggleSolution(this)">💡 Çözümü Göster</button>
<div class="solution-box">
<table>
<tr><th>Dönem</th><th>Özellik</th><th>Örnek</th></tr>
<tr><td><strong>1. Antik Dönem</strong></td><td>Stratejik düşünme becerisi geliştirme</td><td>Senet (M.Ö. 3100), Go</td></tr>
<tr><td><strong>2. Mekanik Dönem</strong></td><td>Fiziksel beceri ve zekâ</td><td>Satranç otomatları, langırtlar</td></tr>
<tr><td><strong>3. Dijital Devrim (1950'ler)</strong></td><td>Ekran yeni oyun alanı oldu</td><td>Tennis for Two (1958), Pong (1972)</td></tr>
<tr><td><strong>4. Modern Dönem</strong></td><td>Sanat, eğitim, sosyal bağlantı</td><td>Journey (sanat), Minecraft Education (eğitim), Fortnite (sosyal)</td></tr>
</table>
<p><strong>"Sadece eğlence değil":</strong></p>
<p>• <strong>Sanat eseri:</strong> Journey, Gris gibi oyunlar görsel ve müzikal deneyim sunar, müze sergilerine kabul edilmiştir.<br>
• <strong>Eğitim aracı:</strong> Minecraft Education Edition okulda STEM eğitimi için kullanılır.<br>
• <strong>Sosyal bağlantı:</strong> Fortnite, Among Us gibi oyunlar milyonlarca insanı birbirine bağlar.<br>
• <strong>Terapi:</strong> Oyunlar PTSD, anksiyete tedavisinde klinik araç olarak kullanılmaktadır.</p>
</div>
</div>

<!-- SORU 5 -->
<div class="exam-question" id="q5">
<h3>📝 Soru 5 <span class="exam-points">5 puan</span> <span class="exam-topic">Unity Kurulum & Arayüz</span></h3>
<p>Unity kurulumunda neden önce <strong>Unity Hub</strong> kurulur? Hub'ın görevlerini yazınız. Unity Editor arayüzündeki şu dört pencereyi açıklayınız: <strong>Scene</strong>, <strong>Game</strong>, <strong>Hierarchy</strong>, <strong>Inspector</strong>.</p>
<button class="solution-btn" onclick="toggleSolution(this)">💡 Çözümü Göster</button>
<div class="solution-box">
<p><strong>Unity Hub'ın görevleri:</strong></p>
<p>1. Farklı Unity Editor <strong>sürümlerini yönetmek</strong> (kurma, kaldırma, güncelleme).<br>
2. Projeleri <strong>organize etmek</strong> (açma, oluşturma, şablon seçme).<br>
3. <strong>Lisans aktivasyonu</strong> yapmak.<br>
4. Platforma özel <strong>modülleri eklemek</strong> (Android, WebGL, iOS vb.).</p>
<p class="tip">💡 LTS (Long Term Support) sürümü seçmek en kararlı deneyimi sağlar.</p>
<p><strong>Dört pencere:</strong></p>
<table>
<tr><th>Pencere</th><th>Görevi</th></tr>
<tr><td><strong>Scene</strong></td><td>Sahneyi <strong>düzenlersiniz</strong> — nesneleri yerleştirme, döndürme, ölçekleme. Oyunun "atölyesi"dir.</td></tr>
<tr><td><strong>Game</strong></td><td>Oyunu <strong>oyuncunun gözünden</strong> görürsünüz — kameranın gösterdiği son hali. Play tuşuyla test edilir.</td></tr>
<tr><td><strong>Hierarchy</strong></td><td>Sahnedeki tüm <strong>GameObject'lerin listesi</strong> — ağaç yapısında, parent-child ilişkileri burada görünür.</td></tr>
<tr><td><strong>Inspector</strong></td><td>Seçili nesnenin <strong>tüm bileşenlerini ve özelliklerini</strong> gösterir/düzenler — Transform, Sprite Renderer, Script vb.</td></tr>
</table>
</div>
</div>

<!-- SORU 6 -->
<div class="exam-question" id="q6">
<h3>📝 Soru 6 <span class="exam-points">5 puan</span> <span class="exam-topic">Asset vs GameObject</span></h3>
<p><strong>Asset</strong> ile <strong>GameObject</strong> arasındaki farkı açıklayınız. Bir .png dosyasının oyunda görünür hale gelmesi için hangi adımlardan geçmesi gerekir? Her adımı sırasıyla yazınız.</p>
<button class="solution-btn" onclick="toggleSolution(this)">💡 Çözümü Göster</button>
<div class="solution-box">
<p><strong>Fark:</strong></p>
<table>
<tr><th>Kavram</th><th>Tanım</th><th>Nerede Görünür?</th></tr>
<tr><td><strong>Asset</strong></td><td>Projede kullanılan dosya ve kaynaklar (sprite, script, ses, prefab, sahne)</td><td><strong>Project</strong> penceresi</td></tr>
<tr><td><strong>GameObject</strong></td><td>Sahnedeki bir nesne — bileşenlerden (component) oluşur</td><td><strong>Hierarchy</strong> penceresi</td></tr>
</table>
<p><strong>Kısaca:</strong> Asset = malzeme (projede), GameObject = nesne (sahnede). Asset tek başına sahnede görünmez.</p>
<p><strong>.png'nin oyunda görünme adımları:</strong></p>
<p>1. .png dosyası Unity'ye <strong>import</strong> edilir (Project penceresine sürükle-bırak).<br>
2. Inspector'da Texture Type <strong>"Sprite (2D and UI)"</strong> olarak ayarlanır — ham texture'ı sprite'a dönüştürür.<br>
3. <strong>Pixels Per Unit (PPU)</strong> değeri ayarlanır (ör: 100).<br>
4. Apply butonuna basılır.<br>
5. Sprite, Project'ten <strong>Scene'e sürüklenir</strong> — Unity otomatik olarak bir GameObject oluşturur ve Sprite Renderer bileşeni ekler.<br>
6. Artık Hierarchy'de bir GameObject, Scene'de görsel bir nesne olarak görünür.</p>
</div>
</div>

<!-- SORU 7 -->
<div class="exam-question" id="q7">
<h3>📝 Soru 7 <span class="exam-points">5 puan</span> <span class="exam-topic">Component-Based Architecture</span></h3>
<p>Unity'nin <strong>bileşen tabanlı mimari (component-based architecture)</strong> yaklaşımını açıklayınız. Her GameObject'te bulunan zorunlu bileşen hangisidir ve bu bileşenin üç özelliğini yazınız. Bir 2D karakter GameObject'ine hangi bileşenler eklenir?</p>
<button class="solution-btn" onclick="toggleSolution(this)">💡 Çözümü Göster</button>
<div class="solution-box">
<p><strong>Bileşen tabanlı mimari:</strong> Unity'de bir GameObject tek başına "boş bir kutu"dur — ona işlev kazandıran şey üzerine eklenen <strong>bileşenlerdir (component)</strong>. Görünürlük istiyorsanız Sprite Renderer, fizik istiyorsanız Rigidbody, davranış istiyorsanız Script eklersiniz. Bu modüler yapı sayesinde aynı bileşenleri farklı nesnelerde yeniden kullanabilirsiniz.</p>
<p><strong>Zorunlu bileşen: Transform</strong></p>
<p>Her GameObject'te bulunur ve <strong>kaldırılamaz</strong>. Üç özelliği:</p>
<table>
<tr><th>Özellik</th><th>Açıklama</th></tr>
<tr><td><strong>Position</strong></td><td>Nesnenin konumu (X, Y, Z)</td></tr>
<tr><td><strong>Rotation</strong></td><td>Nesnenin döndürme açısı (derece cinsinden)</td></tr>
<tr><td><strong>Scale</strong></td><td>Nesnenin boyut ölçeği (1 = orijinal boyut)</td></tr>
</table>
<p><strong>2D karakter bileşenleri:</strong></p>
<p>• <strong>Transform</strong> — konum, döndürme, boyut (zorunlu)<br>
• <strong>Sprite Renderer</strong> — görselin ekranda çizilmesi<br>
• <strong>Rigidbody 2D</strong> — yerçekimi ve fizik simülasyonu<br>
• <strong>Box Collider 2D / Capsule Collider 2D</strong> — çarpışma algılama<br>
• <strong>C# Script (MonoBehaviour)</strong> — hareket, input, oyun mantığı</p>
</div>
</div>

<!-- SORU 8 -->
<div class="exam-question" id="q8">
<h3>📝 Soru 8 <span class="exam-points">5 puan</span> <span class="exam-topic">Parent-Child İlişkisi</span></h3>
<p>Unity Hierarchy'deki <strong>Parent-Child (ebeveyn-çocuk)</strong> ilişkisini açıklayınız. Aşağıdaki senaryoda Weapon'ın <strong>dünya koordinatları</strong> nedir? Ebeveyn hareket ettiğinde çocuğa ne olur?</p>
<pre><code>Player (Ebeveyn) → Position: (5, 3, 0)
  └── Weapon (Çocuk) → Position: (2, -1, 0)</code></pre>
<button class="solution-btn" onclick="toggleSolution(this)">💡 Çözümü Göster</button>
<div class="solution-box">
<p><strong>Parent-Child ilişkisi:</strong> Hierarchy'de bir GameObject'i başka bir GameObject'in altına sürüklediğinizde çocuk (child) olur. Çocuğun Transform değerleri artık ebeveyne <strong>göreceli (relative/local)</strong> olur — dünya koordinatına değil, ebeveyni referans alır.</p>
<p><strong>Hesaplama:</strong></p>
<p>Weapon'ın dünya koordinatları = Ebeveyn konumu + Çocuğun yerel konumu<br>
X: 5 + 2 = <strong>7</strong><br>
Y: 3 + (-1) = <strong>2</strong><br>
Z: 0 + 0 = <strong>0</strong></p>
<p><strong>Weapon'ın dünya koordinatları: (7, 2, 0)</strong></p>
<p><strong>Ebeveyn hareket ederse:</strong> Çocuk da <strong>birlikte hareket eder</strong>. Yerel konumu (2, -1, 0) sabit kalır ama dünya koordinatları ebeveyne bağlı olarak değişir. Bu, silahın her zaman karakterin yanında kalmasını sağlar — ayrı ayrı hareket ettirmenize gerek kalmaz.</p>
<p class="tip">💡 <strong>Kullanım alanları:</strong> Silah → karakterin çocuğu, tekerlek → arabanın çocuğu, kalkan → savaşçının çocuğu. Ebeveyn dönerse çocuklar da döner.</p>
</div>
</div>

<!-- SORU 9 -->
<div class="exam-question" id="q9">
<h3>📝 Soru 9 <span class="exam-points">5 puan</span> <span class="exam-topic">Sprite & Texture</span></h3>
<p>Unity'de <strong>Texture</strong> ile <strong>Sprite</strong> arasındaki farkı açıklayınız. Bir .png dosyasını 2D oyunda kullanmak için Inspector'da hangi ayar değiştirilmelidir? <strong>Pixels Per Unit (PPU)</strong> kavramını açıklayınız: 200x200 piksel bir sprite PPU=100 ise Unity dünyasında kaç birim yer kaplar? PPU=50 olsaydı?</p>
<button class="solution-btn" onclick="toggleSolution(this)">💡 Çözümü Göster</button>
<div class="solution-box">
<p><strong>Fark:</strong></p>
<p>• <strong>Texture:</strong> Ham görsel dosyasıdır (.png, .jpg). Import edildiğinde varsayılan olarak "Default" texture type'dadır.<br>
• <strong>Sprite:</strong> Unity'nin bu görseli 2D oyun nesnesi olarak kullanabilir hâle getirmiş biçimidir.</p>
<p><strong>Ayar:</strong> Inspector'da <strong>Texture Type → "Sprite (2D and UI)"</strong> seçilmelidir. Bu olmadan görsel 2D sahnede düzgün kullanılamaz.</p>
<p><strong>PPU (Pixels Per Unit):</strong> 1 Unity biriminde kaç piksel olduğunu tanımlar.</p>
<p><strong>Hesaplama:</strong></p>
<table>
<tr><th>PPU</th><th>Hesap</th><th>Sonuç</th></tr>
<tr><td>PPU = 100</td><td>200 ÷ 100 = 2</td><td><strong>2×2 birim</strong></td></tr>
<tr><td>PPU = 50</td><td>200 ÷ 50 = 4</td><td><strong>4×4 birim</strong></td></tr>
</table>
<p><strong>Kural:</strong> PPU düşerse → sprite daha büyük görünür. PPU yükselirse → sprite daha küçük görünür.</p>
<p class="tip">💡 <strong>Pixel art oyunlarda</strong> genellikle PPU=16 veya PPU=32 kullanılır ki görseller daha büyük ve belirgin görünsün.</p>
</div>
</div>

<!-- SORU 10 -->
<div class="exam-question" id="q10">
<h3>📝 Soru 10 <span class="exam-points">5 puan</span> <span class="exam-topic">Sprite Renderer</span></h3>
<p>Sprite Renderer bileşeninin şu dört özelliğini açıklayınız: <strong>(a)</strong> Sprite, <strong>(b)</strong> Color (tint), <strong>(c)</strong> Flip X/Y, <strong>(d)</strong> Sorting Layer + Order in Layer. Bir düşman sprite'ına "hasar aldı" efekti vermek için hangi özelliği kullanırsınız?</p>
<button class="solution-btn" onclick="toggleSolution(this)">💡 Çözümü Göster</button>
<div class="solution-box">
<table>
<tr><th>Özellik</th><th>Açıklama</th></tr>
<tr><td><strong>(a) Sprite</strong></td><td>Hangi görselin çizileceğini belirler. Project'ten bir sprite sürükleyerek atanır.</td></tr>
<tr><td><strong>(b) Color (tint)</strong></td><td>Görseli renklendirme (tinting). Aynı sprite'ı farklı renklerde gösterebilirsiniz. Beyaz = orijinal renk.</td></tr>
<tr><td><strong>(c) Flip X/Y</strong></td><td>Sprite'ı yatay (X) veya dikey (Y) olarak aynalar. Ayrı sprite dosyasına gerek kalmadan yön değiştirir.</td></tr>
<tr><td><strong>(d) Sorting Layer + Order in Layer</strong></td><td>Çizim sırasını belirler. Sorting Layer → katman grubu (Background, Characters vb.), Order in Layer → aynı katman içinde sıra numarası. Yüksek numara = daha önde.</td></tr>
</table>
<p><strong>Hasar efekti:</strong> <strong>Color (tint)</strong> özelliği kullanılır. Sprite'a kırmızı tint vererek "hasar almış" efekti yaratılır. Script ile:</p>
<pre><code>GetComponent&lt;SpriteRenderer&gt;().color = Color.red;
// Kısa süre sonra orijinal renge dön:
GetComponent&lt;SpriteRenderer&gt;().color = Color.white;</code></pre>
<p>Bu teknik, ek sprite dosyası gerektirmeden görsel geri bildirim sağlar.</p>
</div>
</div>

<!-- SORU 11 -->
<div class="exam-question" id="q11">
<h3>📝 Soru 11 <span class="exam-points">5 puan</span> <span class="exam-topic">Sorting Layer & Order in Layer</span></h3>
<p>Aşağıdaki tabloya göre nesnelerin çizim sırasını (arkadan öne) yazınız. Ekranda en önde ve en arkada hangi nesneler görünür?</p>
<pre><code>| Nesne     | Sorting Layer | Order in Layer |
|-----------|--------------|----------------|
| Bulut     | Background   | 1              |
| Dağ       | Background   | 0              |
| Ağaç      | Foreground   | 0              |
| Oyuncu    | Characters   | 1              |
| Düşman    | Characters   | 0              |</code></pre>
<button class="solution-btn" onclick="toggleSolution(this)">💡 Çözümü Göster</button>
<div class="solution-box">
<p><strong>Çizim sıralama mantığı:</strong></p>
<p>1. Önce <strong>Sorting Layer</strong> sırasına bakılır (listedeki sıra: Background → Characters → Foreground).<br>
2. Aynı Sorting Layer içinde <strong>Order in Layer</strong> değerine bakılır — yüksek numara daha önde.</p>
<p><strong>Arkadan öne sıralama:</strong></p>
<p>1. 🔙 <strong>Dağ</strong> (Background, Order: 0) — en arkada<br>
2. <strong>Bulut</strong> (Background, Order: 1)<br>
3. <strong>Düşman</strong> (Characters, Order: 0)<br>
4. <strong>Oyuncu</strong> (Characters, Order: 1)<br>
5. 🔜 <strong>Ağaç</strong> (Foreground, Order: 0) — en önde</p>
<p><strong>En arkada:</strong> Dağ | <strong>En önde:</strong> Ağaç</p>
<p class="tip">💡 <strong>Neden önemli?</strong> Doğru çizim sırası olmadan oyuncu arka planın arkasında kaybolabilir veya düşman ağacın önünde görünebilir. Bu, oyun görselinin "katman kağıdı" mantığıdır.</p>
</div>
</div>

<!-- SORU 12 -->
<div class="exam-question" id="q12">
<h3>📝 Soru 12 <span class="exam-points">5 puan</span> <span class="exam-topic">Transform & Aynalama</span></h3>
<p>Transform bileşeninin <strong>Scale</strong> özelliğini kullanarak bir 2D karakterin sola bakmasını nasıl sağlarsınız? Bu yöntem neden ayrı bir "sola bakan" sprite dosyasına göre avantajlıdır? Aşağıdaki Transform değerlerine sahip bir nesnenin durumunu açıklayınız:</p>
<pre><code>Position: (3, 0, 0)
Rotation: (0, 0, 45)
Scale: (-1, 2, 1)</code></pre>
<button class="solution-btn" onclick="toggleSolution(this)">💡 Çözümü Göster</button>
<div class="solution-box">
<p><strong>Sola baktırma:</strong> Scale X değerini <strong>-1</strong> yaparak X ekseninde aynalama yapılır. Sprite yatay olarak ters çevrilir.</p>
<pre><code>// Sağa bakış:
transform.localScale = new Vector3(1, 1, 1);
// Sola bakış:
transform.localScale = new Vector3(-1, 1, 1);</code></pre>
<p><strong>Avantajı:</strong> Ayrı sprite dosyasına gerek kalmaz → bellek tasarrufu, dosya yönetimi kolaylığı. Tek bir sprite seti hem sağ hem sol bakışı karşılar. Animasyonlu sprite sheet'lerde de aynı mantık çalışır.</p>
<p><strong>Verilen Transform analizi:</strong></p>
<p>• <strong>Position (3, 0, 0):</strong> Nesne X ekseninde 3 birim sağda, Y ve Z'de orijinde.<br>
• <strong>Rotation (0, 0, 45):</strong> Z ekseninde 45° döndürülmüş (2D'de saat yönünün tersine eğik).<br>
• <strong>Scale (-1, 2, 1):</strong> X'te aynalı (sola bakıyor), Y'de 2 kat uzatılmış (dikey boyutu iki katı), Z normal.</p>
</div>
</div>

<!-- SORU 13 -->
<div class="exam-question" id="q13">
<h3>📝 Soru 13 <span class="exam-points">5 puan</span> <span class="exam-topic">Inspector Tuzağı</span></h3>
<p>Unity'de oyun çalışırken (Play modunda) Inspector'dan bir değeri değiştirirseniz ne olur? Bu neden Unity'nin <strong>en sık düşülen tuzaklarından</strong> biridir? Kalıcı değişiklik yapmak istediğinizde ne yapmalısınız?</p>
<button class="solution-btn" onclick="toggleSolution(this)">💡 Çözümü Göster</button>
<div class="solution-box">
<p><strong>Ne olur?</strong> Değişiklik anlık olarak uygulanır — değeri gerçek zamanda görür ve test edersiniz. Bu, hızlı deneme/ayarlama (tweaking) için çok kullanışlıdır.</p>
<p><strong>Tuzak:</strong> Oyunu <strong>durdurduğunuzda (Stop) tüm değişiklikler kaybolur!</strong> Değerler Play'e basmadan önceki haline döner. Bir saat boyunca mükemmel ayarladığınız hız, yerçekimi, boyut değerleri — hepsi uçar.</p>
<p><strong>Neden tehlikeli?</strong> Özellikle yeni kullanıcılar, Play modunda "mükemmel" ayarları bulur ve oyunu durdurduğunda her şeyin sıfırlandığını görüp hayal kırıklığına uğrar. Bu hatayı neredeyse herkes en az bir kez yapar.</p>
<p><strong>Kalıcı değişiklik için:</strong></p>
<p>1. Önce oyunu <strong>durdurun</strong> (Stop).<br>
2. Değişiklikleri yapın.<br>
3. Sonra test için Play'e basın.</p>
<p class="tip">💡 <strong>İpucu:</strong> Play modunda bulduğunuz ideal değerleri hemen bir yere not edin (kâğıt veya not defteri). Oyunu durdurup aynı değerleri tekrar girin. Bazı geliştiriciler Play modunda Inspector'ın rengini değiştirerek (Edit → Preferences → Colors → Playmode tint) kendilerini uyarır.</p>
</div>
</div>

<!-- SORU 14 -->
<div class="exam-question" id="q14">
<h3>📝 Soru 14 <span class="exam-points">5 puan</span> <span class="exam-topic">MonoBehaviour</span></h3>
<p>Unity'de bir C# scriptini GameObject'e bileşen olarak ekleyebilmek için sınıfın hangi sınıftan <strong>türetilmesi</strong> gerekir? Bu türetme ne sağlar? Aşağıdaki kodda <strong>Main() metodu</strong> neden yoktur?</p>
<pre><code>public class PlayerController : MonoBehaviour
{
    void Start()
    {
        Debug.Log("Oyun başladı!");
    }

    void Update()
    {
        // Her frame çalışır
    }
}</code></pre>
<button class="solution-btn" onclick="toggleSolution(this)">💡 Çözümü Göster</button>
<div class="solution-box">
<p><strong>Türetilmesi gereken sınıf: MonoBehaviour</strong></p>
<p><code>public class PlayerController : MonoBehaviour</code></p>
<p><strong>Bu türetme ne sağlar?</strong></p>
<p>1. Script bir GameObject üzerine <strong>bileşen olarak eklenebilir</strong> hale gelir.<br>
2. Unity, sınıf içindeki yaşam döngüsü metotlarını (<code>Start()</code>, <code>Update()</code>, <code>Awake()</code> vb.) <strong>otomatik olarak çağırır</strong>.<br>
3. <code>transform</code>, <code>gameObject</code>, <code>GetComponent()</code> gibi Unity API'lerine erişim sağlar.</p>
<p><strong>Main() neden yok?</strong> Geleneksel C# programlarında <code>Main()</code> giriş noktasıdır. Unity'de ise <strong>giriş noktası Unity Engine'in kendisidir</strong>. Engine, sahnedeki tüm MonoBehaviour scriptlerini bulur ve yaşam döngüsü metotlarını otomatik çağırır. Siz <code>Start()</code> veya <code>Update()</code>'i hiçbir zaman manuel çağırmazsınız — Unity çağırır.</p>
<p class="tip">💡 <strong>Dikkat:</strong> MonoBehaviour'dan türetilmeyen bir sınıf (ör: <code>public class Envanter { ... }</code>) normal C# sınıfıdır ve GameObject'e bileşen olarak eklenemez. Veri modeli, yardımcı sınıf gibi amaçlarla kullanılabilir.</p>
</div>
</div>

<!-- SORU 15 -->
<div class="exam-question" id="q15">
<h3>📝 Soru 15 <span class="exam-points">5 puan</span> <span class="exam-topic">Start() vs Update()</span></h3>
<p><code>Start()</code> ve <code>Update()</code> metotlarının farkını (çalışma zamanı, çalışma sıklığı, kullanım amacı) açıklayınız. Aşağıdaki işlemlerden hangisi <code>Start()</code>'ta, hangisi <code>Update()</code>'te yapılmalıdır? Gerekçenizi yazınız.</p>
<p>(a) Başlangıç can değeri atama<br>
(b) Tuş basma kontrolü (Input.GetKey)<br>
(c) GetComponent ile referans alma<br>
(d) Karakter hareket ettirme<br>
(e) Bir kez ses çalma (oyun başlangıcında)</p>
<button class="solution-btn" onclick="toggleSolution(this)">💡 Çözümü Göster</button>
<div class="solution-box">
<table>
<tr><th>Kriter</th><th>Start()</th><th>Update()</th></tr>
<tr><td>Çalışma zamanı</td><td>İlk frame'den <strong>hemen önce</strong>, bir kez</td><td><strong>Her frame</strong> çağrılır (60 FPS = saniyede 60 kez)</td></tr>
<tr><td>Çalışma sıklığı</td><td><strong>Bir kez</strong></td><td><strong>Sürekli</strong> (oyun durana kadar)</td></tr>
<tr><td>Kullanım amacı</td><td>Kurulum, başlangıç değerleri, referans alma</td><td>Sürekli kontrol: input, hareket, oyun mantığı</td></tr>
</table>
<p><strong>Sınıflandırma:</strong></p>
<table>
<tr><th>İşlem</th><th>Nerede?</th><th>Gerekçe</th></tr>
<tr><td>(a) Başlangıç can değeri</td><td><strong>Start()</strong></td><td>Bir kez atanır, her frame tekrar edilmesine gerek yok</td></tr>
<tr><td>(b) Tuş basma kontrolü</td><td><strong>Update()</strong></td><td>Her frame kontrol edilmeli ki basıldığı an yakalansın</td></tr>
<tr><td>(c) GetComponent referansı</td><td><strong>Start()</strong></td><td>Bir kez alınıp değişkene saklanır, her frame aramak performansı bozar</td></tr>
<tr><td>(d) Karakter hareketi</td><td><strong>Update()</strong></td><td>Sürekli güncellenmeli, akıcı hareket için her frame hesaplanmalı</td></tr>
<tr><td>(e) Tek seferlik ses</td><td><strong>Start()</strong></td><td>Oyun başlangıcında bir kez çalması yeterli</td></tr>
</table>
</div>
</div>

<!-- SORU 16 -->
<div class="exam-question" id="q16">
<h3>📝 Soru 16 <span class="exam-points">5 puan</span> <span class="exam-topic">Time.deltaTime</span></h3>
<p><code>Time.deltaTime</code> nedir ve ne döndürür? Hareket kodunda kullanılmazsa ne olur? Aşağıdaki iki kodu karşılaştırınız — hangi bilgisayarda (30 FPS vs 120 FPS) farklı sonuç üretir?</p>
<pre><code>// Kod A (deltaTime yok):
transform.Translate(Vector3.right * hiz);

// Kod B (deltaTime var):
transform.Translate(Vector3.right * hiz * Time.deltaTime);</code></pre>
<button class="solution-btn" onclick="toggleSolution(this)">💡 Çözümü Göster</button>
<div class="solution-box">
<p><strong>Time.deltaTime:</strong> Bir önceki frame ile mevcut frame arasında geçen süreyi <strong>saniye cinsinden</strong> döndürür. 60 FPS'de ≈ 0.0167 saniye, 30 FPS'de ≈ 0.033 saniye.</p>
<p><strong>Karşılaştırma:</strong></p>
<table>
<tr><th></th><th>Kod A (deltaTime yok)</th><th>Kod B (deltaTime var)</th></tr>
<tr><td><strong>30 FPS bilgisayar</strong></td><td>30 frame × hiz = <strong>30 × hiz</strong> birim/saniye</td><td>30 × hiz × 0.033 ≈ <strong>hiz</strong> birim/saniye</td></tr>
<tr><td><strong>120 FPS bilgisayar</strong></td><td>120 frame × hiz = <strong>120 × hiz</strong> birim/saniye</td><td>120 × hiz × 0.0083 ≈ <strong>hiz</strong> birim/saniye</td></tr>
<tr><td><strong>Sonuç</strong></td><td>120 FPS'de <strong>4 kat hızlı</strong> hareket! ❌</td><td>Her iki FPS'de <strong>aynı hız</strong> ✅</td></tr>
</table>
<p><strong>Kod A'nın sorunu:</strong> Frame sayısına bağımlıdır. Güçlü bilgisayarda karakter çok hızlı, zayıf bilgisayarda çok yavaş hareket eder. Bu, oyunu adaletsiz ve tutarsız kılar.</p>
<p><strong>Kod B'nin çözümü:</strong> <code>Time.deltaTime</code> çarpanı, frame hızı farkını kompanse eder. <strong>Cihaz bağımsız tutarlı hareket</strong> sağlar.</p>
<p class="tip">💡 <strong>Kural:</strong> Update() içinde hareket, döndürme veya zamana bağlı herhangi bir işlem varsa <strong>her zaman Time.deltaTime kullan</strong>.</p>
</div>
</div>

<!-- SORU 17 -->
<div class="exam-question" id="q17">
<h3>📝 Soru 17 <span class="exam-points">5 puan</span> <span class="exam-topic">Frame Sayacı & Performans</span></h3>
<p>Aşağıdaki kodun çıktısını yazınız. Oyun 60 FPS'de çalıştığında <strong>3 saniye</strong> sonra konsola kaç adet mesaj yazdırılır? Bu tekniğin amacı nedir?</p>
<pre><code>int frameSayaci = 0;

void Update()
{
    frameSayaci++;
    if (frameSayaci % 60 == 0)
        Debug.Log("Frame: " + frameSayaci);
}</code></pre>
<button class="solution-btn" onclick="toggleSolution(this)">💡 Çözümü Göster</button>
<div class="solution-box">
<p><strong>Hesaplama:</strong></p>
<p>• 60 FPS × 3 saniye = <strong>180 frame</strong> çalışır.<br>
• <code>frameSayaci % 60 == 0</code> koşulu yalnızca 60'ın katlarında doğrudur.<br>
• 180 frame'de bu koşul frame 60, 120 ve 180'de sağlanır.<br>
• Toplam <strong>3 adet</strong> mesaj yazdırılır.</p>
<p><strong>Konsol çıktısı:</strong></p>
<pre><code>Frame: 60
Frame: 120
Frame: 180</code></pre>
<p><strong>Bu tekniğin amacı:</strong> <strong>Kontrollü loglama (performans koruması).</strong> Her frame'de <code>Debug.Log</code> çağırmak konsolu doldurur ve performansı ciddi şekilde düşürür. Modülo (%) operatörü ile belirli aralıklarla loglama yaparak hem debug bilgisi alınır hem performans korunur.</p>
<p class="tip">💡 <strong>Genel kural:</strong> Update() içinde <code>Find()</code> çağrısı ve gereksiz <code>Debug.Log</code> yapmaktan kaçının. Referansları <code>Start()</code>'ta alın, logları koşullu yapın.</p>
</div>
</div>

<!-- SORU 18 -->
<div class="exam-question" id="q18">
<h3>📝 Soru 18 <span class="exam-points">5 puan</span> <span class="exam-topic">Performans</span></h3>
<p>Aşağıdaki kodda <strong>performans açısından yanlış</strong> olan şeyleri bulunuz ve düzeltiniz. En az 3 sorun tespit ediniz.</p>
<pre><code>void Update()
{
    GameObject dusman = GameObject.Find("Dusman");
    SpriteRenderer sr = dusman.GetComponent&lt;SpriteRenderer&gt;();
    Debug.Log("Düşman pozisyonu: " + dusman.transform.position);

    if (Input.GetKeyDown(KeyCode.Space))
    {
        sr.color = Color.red;
    }
}</code></pre>
<button class="solution-btn" onclick="toggleSolution(this)">💡 Çözümü Göster</button>
<div class="solution-box">
<p><strong>3 performans sorunu:</strong></p>
<p><strong>1. ❌ <code>GameObject.Find()</code> her frame çağrılıyor.</strong> Find() tüm sahneyi tarar, çok pahalı bir işlemdir. <strong>Düzeltme:</strong> Start()'ta bir kez çağır, sonucu değişkende sakla.</p>
<p><strong>2. ❌ <code>GetComponent()</code> her frame çağrılıyor.</strong> Her frame bileşen araması gereksiz. <strong>Düzeltme:</strong> Start()'ta bir kez al.</p>
<p><strong>3. ❌ <code>Debug.Log()</code> her frame çağrılıyor.</strong> 60 FPS'de saniyede 60 log → konsolu doldurur, performansı düşürür. <strong>Düzeltme:</strong> Kaldır veya koşullu yap.</p>
<p><strong>Düzeltilmiş kod:</strong></p>
<pre><code>private GameObject dusman;
private SpriteRenderer sr;

void Start()
{
    dusman = GameObject.Find("Dusman");          // Bir kez
    sr = dusman.GetComponent&lt;SpriteRenderer&gt;();  // Bir kez
}

void Update()
{
    if (Input.GetKeyDown(KeyCode.Space))
    {
        sr.color = Color.red;
        Debug.Log("Hasar verildi!");  // Sadece olay anında
    }
}</code></pre>
</div>
</div>

<!-- SORU 19 -->
<div class="exam-question" id="q19">
<h3>📝 Soru 19 <span class="exam-points">5 puan</span> <span class="exam-topic">Unity Yaşam Döngüsü</span></h3>
<p>Unity'de bir script sahnede etkinleştirildiğinde çalışma sırası nasıldır? Aşağıdaki kodun konsolda ürettiği <strong>ilk 4 satırı</strong> yazınız (60 FPS varsayımıyla):</p>
<pre><code>public class Test : MonoBehaviour
{
    void Start()
    {
        Debug.Log("A: Start çalıştı");
    }

    void Update()
    {
        Debug.Log("B: Update - Frame " + Time.frameCount);
    }
}</code></pre>
<button class="solution-btn" onclick="toggleSolution(this)">💡 Çözümü Göster</button>
<div class="solution-box">
<p><strong>Yaşam döngüsü sırası:</strong></p>
<p>1. Script yüklenir.<br>
2. <strong>Start()</strong> bir kez çağrılır (ilk frame'den hemen önce).<br>
3. <strong>Update()</strong> her frame çağrılır (oyun duruna kadar).</p>
<p><strong>İlk 4 satır:</strong></p>
<pre><code>A: Start çalıştı
B: Update - Frame 1
B: Update - Frame 2
B: Update - Frame 3</code></pre>
<p><strong>Açıklama:</strong> Start() yalnızca bir kez çalışır ve her zaman Update()'ten önce gelir. Sonrasında Update() her frame tekrar eder. <code>Time.frameCount</code> Unity'nin başlangıçtan bu yana toplam frame sayısını verir.</p>
<p class="tip">💡 <strong>Main() yok:</strong> Unity'de giriş noktası engine'in kendisidir. Start ve Update eş zamanlı değil, sıralıdır. Start → Update → Update → Update... şeklinde ilerler.</p>
</div>
</div>

<!-- SORU 20 -->
<div class="exam-question" id="q20">
<h3>📝 Soru 20 <span class="exam-points">5 puan</span> <span class="exam-topic">Bütüncül Senaryo</span></h3>
<p>Basit bir 2D platform oyunu tasarlıyorsunuz. Sahnede şunlar olacak: arka plan görseli, zemin, oyuncu karakter ve bir düşman. Oyuncu ok tuşlarıyla hareket edecek.</p>
<p><strong>(a)</strong> Bu nesnelerin Sorting Layer ve Order in Layer değerlerini nasıl ayarlarsınız? Tablo halinde yazınız.<br>
<strong>(b)</strong> Oyuncu sola döndüğünde sprite'ı aynalama tekniğini yazınız (hangi Transform değeri?).<br>
<strong>(c)</strong> Oyuncu hareketi için yazdığınız Update() kodunda <code>Time.deltaTime</code> kullanmazsanız ne olur?<br>
<strong>(d)</strong> Oyuncu karakterin hareket scriptinin <strong>pseudocode</strong>'unu yazınız (Start + Update).</p>
<button class="solution-btn" onclick="toggleSolution(this)">💡 Çözümü Göster</button>
<div class="solution-box">
<p><strong>(a) Sorting Layer ayarları:</strong></p>
<table>
<tr><th>Nesne</th><th>Sorting Layer</th><th>Order in Layer</th></tr>
<tr><td>Arka plan</td><td>Background</td><td>0</td></tr>
<tr><td>Zemin</td><td>Ground</td><td>0</td></tr>
<tr><td>Düşman</td><td>Characters</td><td>0</td></tr>
<tr><td>Oyuncu</td><td>Characters</td><td>1</td></tr>
</table>
<p>Sorting Layer sırası: Background → Ground → Characters. Oyuncu'nun Order'ı 1 olduğu için düşmanın önünde çizilir.</p>

<p><strong>(b) Aynalama:</strong> <code>Scale X = -1</code> yaparak sprite yatay aynalar (sola bakış). <code>Scale X = 1</code> sağa bakış.</p>

<p><strong>(c) deltaTime olmazsa:</strong> Güçlü bilgisayarda (120 FPS) karakter 4 kat hızlı, zayıf bilgisayarda (30 FPS) 4 kat yavaş hareket eder. Oyun adaletsiz ve tutarsız olur.</p>

<p><strong>(d) Hareket script'i (pseudocode):</strong></p>
<pre><code>public class PlayerController : MonoBehaviour
{
    public float hiz = 5f;
    private SpriteRenderer sr;

    void Start()
    {
        sr = GetComponent&lt;SpriteRenderer&gt;();  // Referans al
    }

    void Update()
    {
        float yatay = Input.GetAxis("Horizontal");

        // Hareket (deltaTime ile cihaz bağımsız)
        transform.Translate(Vector3.right * yatay * hiz
            * Time.deltaTime);

        // Yön aynalama
        if (yatay &lt; 0)
            transform.localScale = new Vector3(-1, 1, 1);
        else if (yatay &gt; 0)
            transform.localScale = new Vector3(1, 1, 1);
    }
}</code></pre>
</div>
</div>

</div>

<script>
function toggleSolution(btn){
  const box=btn.nextElementSibling;
  const isOpen=box.classList.contains('show');
  if(isOpen){
    box.classList.remove('show');
    btn.textContent='💡 Çözümü Göster';
    btn.classList.remove('open');
  }else{
    box.classList.add('show');
    btn.textContent='🔽 Çözümü Gizle';
    btn.classList.add('open');
  }
  updateProgress();
}
function updateProgress(){
  const boxes=document.querySelectorAll('.solution-box');
  let count=0;
  boxes.forEach(b=>{if(b.classList.contains('show'))count++;});
  document.getElementById('solvedCount').textContent=count;
}
</script>

{% endraw %}
