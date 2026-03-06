---
layout: post
title: "Vize Hazırlık Sınavı: 20 Soruluk İnteraktif Test"
date: 2026-03-06 14:00:00 +0300
categories: oyun-programlama
course_id: oyun-programlama
tags: [unity, oyun-programlama, sınav, vize, test, çoktan-seçmeli]
---

{% raw %}

Bu interaktif test, Oyun Programlama dersinde şimdiye kadar işlenen tüm konuları kapsamaktadır. Her soruyu yanıtladıktan sonra doğru/yanlış geri bildirim alacak, "Çözümü Göster" butonuyla detaylı açıklamayı görebileceksiniz.

**Kapsanan Konular:** Oyun kavramı ve tarihçesi, Flow teorisi, Gamification, Unity kurulumu, Asset/Hierarchy/Inspector kavramları, Sprite ve Sprite Renderer, Transform bileşeni, Order in Layer ve Sorting Layer, Component-based architecture, MonoBehaviour, Start/Update yaşam döngüsü, Time.deltaTime.

---

<style>
.quiz-container{max-width:800px;margin:0 auto;font-family:inherit}.quiz-question{background:#f8f9fa;border:1px solid #dee2e6;border-radius:10px;padding:20px;margin-bottom:24px}.quiz-question h3{margin-top:0;color:#2c3e50;font-size:1.05em}.quiz-question pre{background:#1e1e2e;color:#cdd6f4;padding:12px;border-radius:6px;overflow-x:auto}.quiz-question code{font-size:.92em}.quiz-options{list-style:none;padding:0;margin:12px 0}.quiz-options li{padding:10px 14px;margin:6px 0;border:2px solid #dee2e6;border-radius:8px;cursor:pointer;transition:all .2s;background:#fff}.quiz-options li:hover{border-color:#6c5ce7;background:#f0edff}.quiz-options li.correct{border-color:#00b894;background:#d4fce8}.quiz-options li.wrong{border-color:#e74c3c;background:#fde8e8}.quiz-options li.disabled{pointer-events:none;opacity:.85}.quiz-feedback{margin-top:12px;padding:10px 14px;border-radius:8px;font-weight:600;display:none}.quiz-feedback.show{display:block}.quiz-feedback.correct-fb{background:#d4fce8;color:#00754a}.quiz-feedback.wrong-fb{background:#fde8e8;color:#c0392b}.solution-toggle{margin-top:10px;background:#6c5ce7;color:#fff;border:none;padding:8px 18px;border-radius:6px;cursor:pointer;font-size:.9em;display:none}.solution-toggle:hover{background:#5a4bd1}.solution-box{display:none;margin-top:12px;padding:14px;background:#eef1ff;border-left:4px solid #6c5ce7;border-radius:6px;line-height:1.6}.solution-box pre{background:#1e1e2e;color:#cdd6f4;padding:10px;border-radius:6px}.quiz-score{text-align:center;padding:24px;background:linear-gradient(135deg,#6c5ce7,#a29bfe);color:#fff;border-radius:12px;margin-top:30px;display:none}.quiz-score h2{margin:0 0 8px}.quiz-score .score-num{font-size:2.4em;font-weight:800}.quiz-progress{text-align:center;margin-bottom:20px;font-size:.95em;color:#636e72}
</style>

<div class="quiz-container" id="quizApp">
<div class="quiz-progress" id="progressBar">Yanıtlanan: 0 / 20</div>

<!-- SORU 1 -->
<div class="quiz-question" id="q1">
<h3>Soru 1 — Oyun Tanımı</h3>
<p>Johan Huizinga'nın oyun için kullandığı "sihirli çember" (magic circle) kavramı neyi ifade eder?</p>
<ul class="quiz-options" data-correct="b">
  <li data-val="a">A) Oyunun dairesel bir harita üzerinde geçmesini</li>
  <li data-val="b">B) Oyunun gerçek hayattan izole, gönüllü ve kurallı bir alan olmasını</li>
  <li data-val="c">C) Oyuncuların bir çember şeklinde oturarak oynamasını</li>
  <li data-val="d">D) Oyun döngüsünün (game loop) sonsuz tekrar etmesini</li>
</ul>
<div class="quiz-feedback" id="fb1"></div>
<button class="solution-toggle" id="st1" onclick="toggleSolution('sol1')">Çözümü Göster</button>
<div class="solution-box" id="sol1">
<strong>Doğru Cevap: B)</strong><br><br>
Johan Huizinga'ya göre oyun, <strong>"sihirli bir çember" (magic circle)</strong> içinde gerçekleşen, gönüllü, kuralları olan ve gerçek hayattan izole edilmiş bir eylemdir. Bu kavram, oyunun günlük yaşamdan ayrı bir dünya yarattığını vurgular. Oyuncu çembere girdiğinde farklı kurallar geçerlidir — gerçek dünya sonuçları askıya alınır.
</div>
</div>

<!-- SORU 2 -->
<div class="quiz-question" id="q2">
<h3>Soru 2 — Flow Teorisi</h3>
<p>Csikszentmihalyi'nin Flow (Akış) teorisine göre, ideal oyun deneyimi nasıl oluşur?</p>
<ul class="quiz-options" data-correct="c">
  <li data-val="a">A) Zorluk sürekli artmalı, oyuncu baskı altında olmalı</li>
  <li data-val="b">B) Oyun mümkün olduğunca kolay olmalı ki herkes oynayabilsin</li>
  <li data-val="c">C) Zorluk ve yetenek dengede olmalı — çok kolay sıkıntı, çok zor kaygı yaratır</li>
  <li data-val="d">D) Oyun tamamen rastgele olmalı, sonuç tahmin edilmemeli</li>
</ul>
<div class="quiz-feedback" id="fb2"></div>
<button class="solution-toggle" id="st2" onclick="toggleSolution('sol2')">Çözümü Göster</button>
<div class="solution-box" id="sol2">
<strong>Doğru Cevap: C)</strong><br><br>
Mihaly Csikszentmihalyi'nin Flow teorisi, oyunun nihai amacını tanımlar:<br>
- <strong>Çok kolay</strong> = Sıkıntı (boredom)<br>
- <strong>Çok zor</strong> = Kaygı (anxiety)<br>
- <strong>Denge</strong> = Akış (flow) — yeteneklerimiz ile karşılaştığımız zorluğun mükemmel dengede olduğu an.<br><br>
Bu teori, modern oyun tasarımında "dinamik zorluk ayarlama" (DDA) mekaniklerinin temelini oluşturur.
</div>
</div>

<!-- SORU 3 -->
<div class="quiz-question" id="q3">
<h3>Soru 3 — Gamification</h3>
<p>Gerçek hayatı oyun gibi kurgulamak (Gamification) için gereken üç temel bileşen hangileridir?</p>
<ul class="quiz-options" data-correct="a">
  <li data-val="a">A) Net hedef, Anlık geri bildirim, Ödül/Ceza</li>
  <li data-val="b">B) Grafik, Ses, Fizik motoru</li>
  <li data-val="c">C) Başlangıç, Gelişme, Sonuç</li>
  <li data-val="d">D) Input, Process, Output</li>
</ul>
<div class="quiz-feedback" id="fb3"></div>
<button class="solution-toggle" id="st3" onclick="toggleSolution('sol3')">Çözümü Göster</button>
<div class="solution-box" id="sol3">
<strong>Doğru Cevap: A)</strong><br><br>
Gamification'ın üç temel bileşeni:<br>
1. <strong>Net Hedef:</strong> Örn: "10.000 adım at"<br>
2. <strong>Anlık Geri Bildirim:</strong> Örn: Akıllı saatin titremesi<br>
3. <strong>Ödül/Ceza:</strong> Örn: "Başardın" rozeti veya "Zinciri kırdın" uyarısı<br><br>
Bu üç bileşen, insan beyninin motivasyon ve tatmin döngüsünü tetikler.
</div>
</div>

<!-- SORU 4 -->
<div class="quiz-question" id="q4">
<h3>Soru 4 — Unity Hub</h3>
<p>Unity kurulumunda neden önce Unity Hub kurulur?</p>
<ul class="quiz-options" data-correct="d">
  <li data-val="a">A) Unity Hub olmadan C# kodu yazılamaz</li>
  <li data-val="b">B) Unity Hub, Unity'nin eski adıdır</li>
  <li data-val="c">C) Unity Hub, VS Code'un bir eklentisidir</li>
  <li data-val="d">D) Unity Hub, farklı Unity Editor sürümlerini yönetmek için kullanılır</li>
</ul>
<div class="quiz-feedback" id="fb4"></div>
<button class="solution-toggle" id="st4" onclick="toggleSolution('sol4')">Çözümü Göster</button>
<div class="solution-box" id="sol4">
<strong>Doğru Cevap: D)</strong><br><br>
Unity Editor doğrudan kurulmaz; önce <strong>Unity Hub</strong> kurulur. Hub'ın görevleri:<br>
- Farklı Unity Editor sürümlerini yönetmek (kurma, kaldırma, güncelleme)<br>
- Projeleri organize etmek<br>
- Lisans aktivasyonu yapmak<br>
- Platforma özel modülleri (Android, WebGL vb.) eklemek<br><br>
Kurulumda LTS (Long Term Support) sürümü seçmek en kararlı deneyimi sağlar.
</div>
</div>

<!-- SORU 5 -->
<div class="quiz-question" id="q5">
<h3>Soru 5 — Asset Kavramı</h3>
<p>Unity'de aşağıdakilerden hangisi bir Asset <strong>değildir</strong>?</p>
<ul class="quiz-options" data-correct="c">
  <li data-val="a">A) Sprite (.png dosyası)</li>
  <li data-val="b">B) C# Script (.cs dosyası)</li>
  <li data-val="c">C) Hierarchy penceresindeki bir GameObject</li>
  <li data-val="d">D) Ses dosyası (.wav dosyası)</li>
</ul>
<div class="quiz-feedback" id="fb5"></div>
<button class="solution-toggle" id="st5" onclick="toggleSolution('sol5')">Çözümü Göster</button>
<div class="solution-box" id="sol5">
<strong>Doğru Cevap: C)</strong><br><br>
<strong>Asset</strong> = Projede kullanılan dosya ve kaynaklar (sprite, script, ses, prefab, sahne vb.). Bunlar <strong>Project</strong> penceresinde görünür.<br><br>
<strong>GameObject</strong> ise sahnedeki bir nesnedir ve <strong>Hierarchy</strong> penceresinde listelenir. Asset'ler tek başına sahnede görünmez — bir asset'in oyunda görünmesi için onu bir GameObject olarak sahneye eklemeniz gerekir.<br><br>
Kısaca: Asset = malzeme (projede), GameObject = nesne (sahnede).
</div>
</div>

<!-- SORU 6 -->
<div class="quiz-question" id="q6">
<h3>Soru 6 — Hierarchy ve Parent-Child</h3>
<p>Unity'de bir Player GameObject'inin Position'ı (5, 0, 0), çocuğu Weapon'ın Position'ı (1, 0, 0) ise Weapon'ın dünya koordinatları nedir?</p>
<ul class="quiz-options" data-correct="b">
  <li data-val="a">A) (1, 0, 0)</li>
  <li data-val="b">B) (6, 0, 0)</li>
  <li data-val="c">C) (5, 0, 0)</li>
  <li data-val="d">D) (4, 0, 0)</li>
</ul>
<div class="quiz-feedback" id="fb6"></div>
<button class="solution-toggle" id="st6" onclick="toggleSolution('sol6')">Çözümü Göster</button>
<div class="solution-box" id="sol6">
<strong>Doğru Cevap: B) (6, 0, 0)</strong><br><br>
Çocuk nesnenin Transform değerleri, ebeveynine <strong>göreceli (relative)</strong> olur:<br>
- Player (ebeveyn) dünya konumu: (5, 0, 0)<br>
- Weapon (çocuk) yerel konumu: (1, 0, 0)<br>
- Weapon'ın dünya konumu = 5 + 1 = <strong>(6, 0, 0)</strong><br><br>
Bu, Parent-Child ilişkisinin en temel özelliğidir: ebeveyn hareket ettiğinde çocuklar da birlikte hareket eder.
</div>
</div>

<!-- SORU 7 -->
<div class="quiz-question" id="q7">
<h3>Soru 7 — Component-Based Architecture</h3>
<p>Unity'de her GameObject'te bulunan, kaldırılamayan zorunlu bileşen hangisidir?</p>
<ul class="quiz-options" data-correct="a">
  <li data-val="a">A) Transform</li>
  <li data-val="b">B) Sprite Renderer</li>
  <li data-val="c">C) Rigidbody 2D</li>
  <li data-val="d">D) Box Collider 2D</li>
</ul>
<div class="quiz-feedback" id="fb7"></div>
<button class="solution-toggle" id="st7" onclick="toggleSolution('sol7')">Çözümü Göster</button>
<div class="solution-box" id="sol7">
<strong>Doğru Cevap: A) Transform</strong><br><br>
Unity'nin bileşen tabanlı mimarisinde (component-based architecture) her GameObject'e istediğiniz kadar bileşen ekleyebilirsiniz. Ancak <strong>Transform bileşeni zorunludur</strong> — her GameObject'te bulunur ve kaldırılamaz.<br><br>
Transform'un üç özelliği: <strong>Position</strong> (konum), <strong>Rotation</strong> (döndürme), <strong>Scale</strong> (ölçek). Diğer bileşenler (Sprite Renderer, Rigidbody, Collider vb.) isteğe bağlıdır.
</div>
</div>

<!-- SORU 8 -->
<div class="quiz-question" id="q8">
<h3>Soru 8 — Inspector Tuzağı</h3>
<p>Unity'de oyun çalışırken Inspector'dan bir değeri değiştirirseniz ne olur?</p>
<ul class="quiz-options" data-correct="d">
  <li data-val="a">A) Değişiklik kalıcıdır, kaydedilir</li>
  <li data-val="b">B) Unity hata verir, değişikliğe izin vermez</li>
  <li data-val="c">C) Oyun otomatik olarak duraklar</li>
  <li data-val="d">D) Değişiklik anlık uygulanır ama oyunu durdurduğunuzda kaybolur</li>
</ul>
<div class="quiz-feedback" id="fb8"></div>
<button class="solution-toggle" id="st8" onclick="toggleSolution('sol8')">Çözümü Göster</button>
<div class="solution-box" id="sol8">
<strong>Doğru Cevap: D)</strong><br><br>
Bu, Unity'nin <strong>en sık düşülen tuzaklarından</strong> biridir! Oyun çalışırken Inspector'daki değerleri değiştirebilirsiniz — değişiklik anlık olarak uygulanır ve hızlı test/ayarlama (tweaking) için mükemmeldir.<br><br>
Ancak oyunu <strong>durdurduğunuzda tüm değişiklikler kaybolur</strong> ve değerler Play'e basmadan önceki haline döner. Kalıcı olmasını istediğiniz değişiklikleri oyunu durdurup sonra yapın.
</div>
</div>

<!-- SORU 9 -->
<div class="quiz-question" id="q9">
<h3>Soru 9 — Sprite ve Texture Farkı</h3>
<p>Unity'de bir .png dosyasını 2D oyunda kullanmak için Texture Type ayarı ne olmalıdır?</p>
<ul class="quiz-options" data-correct="c">
  <li data-val="a">A) Default</li>
  <li data-val="b">B) Normal Map</li>
  <li data-val="c">C) Sprite (2D and UI)</li>
  <li data-val="d">D) Cursor</li>
</ul>
<div class="quiz-feedback" id="fb9"></div>
<button class="solution-toggle" id="st9" onclick="toggleSolution('sol9')">Çözümü Göster</button>
<div class="solution-box" id="sol9">
<strong>Doğru Cevap: C) Sprite (2D and UI)</strong><br><br>
Bir .png dosyası import edildiğinde ham haliyle <strong>Texture</strong>'dır. Unity'nin bunu 2D oyun nesnesi olarak kullanabilmesi için Inspector'da Texture Type'ı <strong>"Sprite (2D and UI)"</strong> olarak seçmeniz gerekir.<br><br>
Texture = ham görsel dosyası. Sprite = Unity'nin bu görseli 2D oyun nesnesi olarak kullanabilir hâle getirmiş biçimi.
</div>
</div>

<!-- SORU 10 -->
<div class="quiz-question" id="q10">
<h3>Soru 10 — Pixels Per Unit (PPU)</h3>
<p>100x100 piksel bir sprite'ın PPU değeri 50 ise, Unity dünyasında kaç birim yer kaplar?</p>
<ul class="quiz-options" data-correct="b">
  <li data-val="a">A) 1x1 birim</li>
  <li data-val="b">B) 2x2 birim</li>
  <li data-val="c">C) 0.5x0.5 birim</li>
  <li data-val="d">D) 100x100 birim</li>
</ul>
<div class="quiz-feedback" id="fb10"></div>
<button class="solution-toggle" id="st10" onclick="toggleSolution('sol10')">Çözümü Göster</button>
<div class="solution-box" id="sol10">
<strong>Doğru Cevap: B) 2x2 birim</strong><br><br>
PPU (Pixels Per Unit) = 1 Unity birimindeki piksel sayısı.<br>
- 100 piksel genişlik ÷ PPU 50 = <strong>2 birim</strong><br>
- 100 piksel yükseklik ÷ PPU 50 = <strong>2 birim</strong><br><br>
PPU=100 olsaydı 1x1, PPU=200 olsaydı 0.5x0.5 birim olurdu. Piksel art oyunlarda genellikle PPU=16 veya PPU=32 kullanılır ki görseller daha büyük görünsün.
</div>
</div>

<!-- SORU 11 -->
<div class="quiz-question" id="q11">
<h3>Soru 11 — Sorting Layer ve Order in Layer</h3>
<p>Aşağıdaki tabloya göre ekranda en önde hangi nesne görünür?</p>
<pre><code>| Nesne    | Sorting Layer | Order in Layer |
|----------|--------------|----------------|
| Gökyüzü  | Background   | 0              |
| Zemin    | Ground       | 0              |
| Düşman   | Characters   | 0              |
| Oyuncu   | Characters   | 1              |</code></pre>
<ul class="quiz-options" data-correct="d">
  <li data-val="a">A) Gökyüzü</li>
  <li data-val="b">B) Zemin</li>
  <li data-val="c">C) Düşman</li>
  <li data-val="d">D) Oyuncu</li>
</ul>
<div class="quiz-feedback" id="fb11"></div>
<button class="solution-toggle" id="st11" onclick="toggleSolution('sol11')">Çözümü Göster</button>
<div class="solution-box" id="sol11">
<strong>Doğru Cevap: D) Oyuncu</strong><br><br>
Çizim sırası iki düzeyde belirlenir:<br>
1. <strong>Sorting Layer:</strong> Listedeki sıra (Background → Ground → Characters). Characters en önde.<br>
2. <strong>Order in Layer:</strong> Aynı Sorting Layer içinde yüksek numara = daha önde.<br><br>
Düşman ve Oyuncu aynı "Characters" katmanında ama Oyuncu'nun Order'ı 1, Düşman'ınki 0. Dolayısıyla Oyuncu en önde çizilir.
</div>
</div>

<!-- SORU 12 -->
<div class="quiz-question" id="q12">
<h3>Soru 12 — Transform Scale ile Aynalama</h3>
<p>Bir 2D karakterin sola bakmasını sağlamak için Transform'un hangi değeri değiştirilir?</p>
<ul class="quiz-options" data-correct="a">
  <li data-val="a">A) Scale X = -1 yapılır</li>
  <li data-val="b">B) Rotation Z = 180 yapılır</li>
  <li data-val="c">C) Position X negatif yapılır</li>
  <li data-val="d">D) Scale Y = -1 yapılır</li>
</ul>
<div class="quiz-feedback" id="fb12"></div>
<button class="solution-toggle" id="st12" onclick="toggleSolution('sol12')">Çözümü Göster</button>
<div class="solution-box" id="sol12">
<strong>Doğru Cevap: A) Scale X = -1 yapılır</strong><br><br>
<code>Scale: -1, 1, 1</code> → X ekseninde aynalama yaparak sprite'ı yatay olarak ters çevirir. Bu, ayrı bir "sola bakan" sprite dosyasına ihtiyaç duymadan karakterin yönünü değiştirmenin en pratik yoludur.<br><br>
Rotation Z = 180 karakteri baş aşağı çevirir. Position X konumunu değiştirir, yön değil. Scale Y = -1 ise dikey aynalama yapar (baş aşağı).
</div>
</div>

<!-- SORU 13 -->
<div class="quiz-question" id="q13">
<h3>Soru 13 — MonoBehaviour</h3>
<p>Unity'de bir C# scriptini GameObject'e bileşen olarak ekleyebilmek için ne gerekir?</p>
<ul class="quiz-options" data-correct="b">
  <li data-val="a">A) Sınıf static olarak tanımlanmalıdır</li>
  <li data-val="b">B) Sınıf MonoBehaviour'dan türetilmelidir</li>
  <li data-val="c">C) Sınıf abstract olmalıdır</li>
  <li data-val="d">D) Sınıf içinde Main() metodu olmalıdır</li>
</ul>
<div class="quiz-feedback" id="fb13"></div>
<button class="solution-toggle" id="st13" onclick="toggleSolution('sol13')">Çözümü Göster</button>
<div class="solution-box" id="sol13">
<strong>Doğru Cevap: B) MonoBehaviour'dan türetilmelidir</strong><br><br>
<pre><code>public class PlayerController : MonoBehaviour</code></pre>
MonoBehaviour'dan türetmek şu anlama gelir:<br>
- Script bir GameObject üzerine bileşen olarak eklenebilir<br>
- Unity, sınıf içindeki yaşam döngüsü metotlarını (Start, Update, Awake vb.) <strong>otomatik</strong> çağırır<br>
- Start() veya Update() metodunu siz manuel çağırmazsınız; Unity çağırır<br><br>
Static sınıflar bileşen olarak eklenemez. Main() metodu Unity'de kullanılmaz.
</div>
</div>

<!-- SORU 14 -->
<div class="quiz-question" id="q14">
<h3>Soru 14 — Start vs Update</h3>
<p>Aşağıdakilerden hangisi Start() içinde <strong>değil</strong>, Update() içinde yapılmalıdır?</p>
<ul class="quiz-options" data-correct="c">
  <li data-val="a">A) Başlangıç can değeri atama</li>
  <li data-val="b">B) GetComponent ile referans alma</li>
  <li data-val="c">C) Oyuncu input kontrolü (tuşa basma)</li>
  <li data-val="d">D) Oyun başında bir kez müzik başlatma</li>
</ul>
<div class="quiz-feedback" id="fb14"></div>
<button class="solution-toggle" id="st14" onclick="toggleSolution('sol14')">Çözümü Göster</button>
<div class="solution-box" id="sol14">
<strong>Doğru Cevap: C) Oyuncu input kontrolü</strong><br><br>
<strong>Start() = kurulum</strong> (bir kez çalışır):<br>
- Başlangıç değerleri atama ✓<br>
- Referans alma (GetComponent) ✓<br>
- Tek seferlik müzik başlatma ✓<br><br>
<strong>Update() = sürekli çalışma</strong> (her frame çağrılır):<br>
- Input kontrolü (Input.GetKey) ✓<br>
- Karakter hareketi ✓<br>
- Kamera takibi ✓<br><br>
Input kontrolü her frame kontrol edilmeli ki tuşa basıldığı an yakalanabilsin.
</div>
</div>

<!-- SORU 15 -->
<div class="quiz-question" id="q15">
<h3>Soru 15 — Frame Sayacı</h3>
<p>Aşağıdaki kod çalıştırıldığında, 60 FPS'de 2 saniye sonra Console'da kaç adet "Update çalışıyor" mesajı görünür?</p>
<pre><code>void Update()
{
    frameSayaci++;
    if (frameSayaci % 60 == 0)
        Debug.Log("Update çalışıyor. Frame: " + frameSayaci);
}</code></pre>
<ul class="quiz-options" data-correct="b">
  <li data-val="a">A) 120</li>
  <li data-val="b">B) 2</li>
  <li data-val="c">C) 60</li>
  <li data-val="d">D) 0</li>
</ul>
<div class="quiz-feedback" id="fb15"></div>
<button class="solution-toggle" id="st15" onclick="toggleSolution('sol15')">Çözümü Göster</button>
<div class="solution-box" id="sol15">
<strong>Doğru Cevap: B) 2</strong><br><br>
Adım adım:<br>
- 60 FPS × 2 saniye = 120 frame çalışır<br>
- <code>frameSayaci % 60 == 0</code> koşulu yalnızca 60'ın katlarında doğrudur<br>
- 120 frame'de bu koşul frame 60 ve frame 120'de sağlanır<br>
- Toplam <strong>2 adet</strong> log mesajı görünür<br><br>
Bu teknik, performansı koruyarak kontrollü loglama yapmayı sağlar. Her frame log basmak yerine belirli aralıklarla basmak doğru yaklaşımdır.
</div>
</div>

<!-- SORU 16 -->
<div class="quiz-question" id="q16">
<h3>Soru 16 — Time.deltaTime</h3>
<p>Hareket kodunda <code>Time.deltaTime</code> kullanmanın amacı nedir?</p>
<ul class="quiz-options" data-correct="a">
  <li data-val="a">A) Farklı FPS'lerde tutarlı hareket hızı sağlamak</li>
  <li data-val="b">B) Oyunu yavaşlatmak</li>
  <li data-val="c">C) Oyunun toplam süresini ölçmek</li>
  <li data-val="d">D) Animasyon hızını iki katına çıkarmak</li>
</ul>
<div class="quiz-feedback" id="fb16"></div>
<button class="solution-toggle" id="st16" onclick="toggleSolution('sol16')">Çözümü Göster</button>
<div class="solution-box" id="sol16">
<strong>Doğru Cevap: A)</strong><br><br>
<code>Time.deltaTime</code> = bir frame'in kaç saniye sürdüğünü verir.<br><br>
Update() frame'e bağlı çalıştığı için:<br>
- 30 FPS'de frame başına daha fazla hareket<br>
- 120 FPS'de frame başına daha az hareket<br>
böylece toplam hız eşitlenir.<br><br>
<pre><code>transform.Translate(Vector3.right * hiz * Time.deltaTime);</code></pre>
Bu olmadan güçlü bilgisayarda karakter hızlı, zayıfta yavaş hareket eder — cihaz bağımsızlık bozulur.
</div>
</div>

<!-- SORU 17 -->
<div class="quiz-question" id="q17">
<h3>Soru 17 — Unity Performans</h3>
<p>Update() içinde yapılmaması gereken şey hangisidir?</p>
<ul class="quiz-options" data-correct="d">
  <li data-val="a">A) Input.GetKey kontrolü</li>
  <li data-val="b">B) Transform.position güncelleme</li>
  <li data-val="c">C) Koşullu durum kontrolü (if/else)</li>
  <li data-val="d">D) Her frame Find() ve gereksiz Debug.Log çağrısı</li>
</ul>
<div class="quiz-feedback" id="fb17"></div>
<button class="solution-toggle" id="st17" onclick="toggleSolution('sol17')">Çözümü Göster</button>
<div class="solution-box" id="sol17">
<strong>Doğru Cevap: D)</strong><br><br>
Update() her frame çağrıldığı için ağır işlemler performansı bozar. Kaçınılması gerekenler:<br>
- <strong>Sürekli Find() çağrıları</strong> — referansı Start()'ta alıp saklayın<br>
- <strong>Gereksiz Debug.Log</strong> — eğitim amaçlı kullanılır, gerçek projede kaldırın<br>
- <strong>Büyük döngüler</strong> ve pahalı hesaplamalar<br><br>
Input kontrolü, position güncelleme ve if/else kontrolleri Update()'te olması gereken normal işlemlerdir.
</div>
</div>

<!-- SORU 18 -->
<div class="quiz-question" id="q18">
<h3>Soru 18 — Sprite Renderer Özellikleri</h3>
<p>Bir beyaz düşman sprite'ına hasar efekti vermek için Sprite Renderer'ın hangi özelliği kullanılır?</p>
<ul class="quiz-options" data-correct="c">
  <li data-val="a">A) Flip X</li>
  <li data-val="b">B) Order in Layer</li>
  <li data-val="c">C) Color (tint)</li>
  <li data-val="d">D) Sorting Layer</li>
</ul>
<div class="quiz-feedback" id="fb18"></div>
<button class="solution-toggle" id="st18" onclick="toggleSolution('sol18')">Çözümü Göster</button>
<div class="solution-box" id="sol18">
<strong>Doğru Cevap: C) Color (tint)</strong><br><br>
Sprite Renderer'ın <strong>Color</strong> özelliği, görseli renklendirme (tinting) yapmanızı sağlar. Aynı sprite'ı farklı renklerde gösterebilirsiniz.<br><br>
Örneğin beyaz bir düşman sprite'ına kırmızı tint vererek "hasar almış" efekti yaratabilirsiniz. Bu teknik, ek sprite dosyası gerektirmeden görsel geri bildirim sağlar.<br><br>
Flip X yatay aynalama, Order in Layer çizim sırası, Sorting Layer katman grubudur.
</div>
</div>

<!-- SORU 19 -->
<div class="quiz-question" id="q19">
<h3>Soru 19 — Oyun Tarihçesi</h3>
<p>Dijital oyunların başlangıcı sayılan ilk oyunlar hangi döneme aittir?</p>
<ul class="quiz-options" data-correct="b">
  <li data-val="a">A) 1920'ler — Mekanik kutu oyunları</li>
  <li data-val="b">B) 1950'ler — Tennis for Two ve Pong</li>
  <li data-val="c">C) 1990'ler — 3D grafik devrimi</li>
  <li data-val="d">D) 2000'ler — Mobil oyun patlaması</li>
</ul>
<div class="quiz-feedback" id="fb19"></div>
<button class="solution-toggle" id="st19" onclick="toggleSolution('sol19')">Çözümü Göster</button>
<div class="solution-box" id="sol19">
<strong>Doğru Cevap: B) 1950'ler</strong><br><br>
Dijital oyunların tarihçesi:<br>
1. <strong>Antik Dönem:</strong> Senet (M.Ö. 3100), Go — stratejik düşünme<br>
2. <strong>Mekanik Dönem:</strong> Satranç otomatları, langırtlar<br>
3. <strong>Dijital Devrim (1950'ler):</strong> Tennis for Two ve Pong — ekran yeni oyun alanımız oldu<br>
4. <strong>Modern Dönem:</strong> Oyunlar sanat eseri, eğitim aracı ve sosyal bağlantı noktası<br><br>
Tennis for Two (1958) genellikle ilk video oyunu olarak kabul edilir.
</div>
</div>

<!-- SORU 20 -->
<div class="quiz-question" id="q20">
<h3>Soru 20 — Unity Yaşam Döngüsü</h3>
<p>Unity'de bir script eklenip sahne çalıştırıldığında çalışma sırası nasıldır?</p>
<ul class="quiz-options" data-correct="a">
  <li data-val="a">A) Script yüklenir → Start() bir kez çağrılır → Update() her frame çağrılır</li>
  <li data-val="b">B) Update() başlar → Start() çağrılır → Update() devam eder</li>
  <li data-val="c">C) Start() ve Update() eş zamanlı çalışır</li>
  <li data-val="d">D) Main() çalışır → Start() çağrılır → Update() çağrılır</li>
</ul>
<div class="quiz-feedback" id="fb20"></div>
<button class="solution-toggle" id="st20" onclick="toggleSolution('sol20')">Çözümü Göster</button>
<div class="solution-box" id="sol20">
<strong>Doğru Cevap: A)</strong><br><br>
Unity yaşam döngüsü (bu scripte özel):<br>
1. Script yüklenir<br>
2. <strong>Start()</strong> bir kez çağrılır → kurulum işlemleri yapılır<br>
3. <strong>Update()</strong> her frame çağrılır → oyun mantığı sürekli çalışır<br><br>
Console'daki tipik akış:<br>
<pre><code>Start metodu çalıştı! (tek seferlik)
Update çalışıyor. Frame: 1
Update çalışıyor. Frame: 2
Update çalışıyor. Frame: 3
...</code></pre>
Unity'de Main() metodu yoktur. Start ve Update eş zamanlı değil, sıralıdır.
</div>
</div>

<!-- SKOR -->
<div class="quiz-score" id="scoreCard">
  <h2>🎯 Sınav Tamamlandı!</h2>
  <div class="score-num" id="scoreNum"></div>
  <p id="scoreMsg"></p>
</div>

</div>

<script>
(function(){var a=0,c=0,t=20;document.querySelectorAll('.quiz-options').forEach(function(ul){var items=ul.querySelectorAll('li'),cv=ul.getAttribute('data-correct'),num=ul.closest('.quiz-question').id.replace('q','');items.forEach(function(li){li.addEventListener('click',function(){if(ul.classList.contains('answered'))return;ul.classList.add('answered');a++;var ch=li.getAttribute('data-val'),fb=document.getElementById('fb'+num),st=document.getElementById('st'+num);items.forEach(function(i){i.classList.add('disabled');if(i.getAttribute('data-val')===cv)i.classList.add('correct')});if(ch===cv){c++;li.classList.add('correct');fb.textContent='✅ Doğru!';fb.className='quiz-feedback show correct-fb'}else{li.classList.add('wrong');fb.textContent='❌ Yanlış! Doğru cevap: '+cv.toUpperCase();fb.className='quiz-feedback show wrong-fb'}st.style.display='inline-block';document.getElementById('progressBar').textContent='Yanıtlanan: '+a+' / '+t;if(a===t){var sc=document.getElementById('scoreCard');sc.style.display='block';document.getElementById('scoreNum').textContent=c+' / '+t;var p=Math.round(c/t*100),m='';if(p>=90)m='🌟 Mükemmel! Vizeye hazırsın!';else if(p>=70)m='👏 İyi! Birkaç konuyu tekrar et.';else if(p>=50)m='📚 Orta. Ders notlarını gözden geçir.';else m='⚠️ Daha çok çalışman gerekiyor. Ders notlarına dön!';document.getElementById('scoreMsg').textContent=p+'% — '+m;sc.scrollIntoView({behavior:'smooth'})}})})});window.toggleSolution=function(id){var b=document.getElementById(id);b.style.display=b.style.display==='block'?'none':'block'}})();
</script>

{% endraw %}
