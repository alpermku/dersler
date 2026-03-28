---
layout: post
title: "Vize Deneme Sınavı: Açık Uçlu 20 Soru"
date: 2026-03-28 10:00:00 +0300
categories: sistem-analizi-ve-tasarimi
course_id: sistem-analizi-ve-tasarimi
tags: [sistem-analizi, sınav, vize, açık-uçlu, deneme]
---

Bu deneme sınavı, Sistem Analizi ve Tasarımı dersinde işlenen tüm konuları kapsayan **açık uçlu** sorulardan oluşmaktadır. Her sorunun altındaki **"Çözümü Göster"** butonuna tıklayarak detaylı çözümü görebilirsiniz.

**Süre:** 90 dakika | **Toplam:** 20 soru | **Zorluk:** Orta-İleri

**Kapsanan Konular:** Sistem kavramı ve türleri, Genel Sistem Teorisi, Bilgi Sistemleri, SDLC, Süreç Modelleri (Waterfall, V-Model, Agile, Scrum, Kanban), Git/GitHub ile proje yönetimi, Problem tanımı, Kapsam yönetimi, Paydaş analizi, As-Is/To-Be analizi, Gereksinim mühendisliği (FR/NFR, SMART, MoSCoW), İzlenebilirlik, SRS belgesi.

---

{% raw %}

<style>
.exam-container{max-width:850px;margin:0 auto;font-family:inherit}
.exam-question{background:var(--bg-alt,#f8f9fa);border:1px solid var(--border,#dee2e6);border-radius:10px;padding:20px;margin-bottom:20px;position:relative}
.exam-question h3{margin-top:0;color:var(--text,#2c3e50);font-size:1em;display:flex;align-items:center;gap:8px}
.exam-question p{color:var(--text,#333);line-height:1.7;margin-bottom:10px}
.exam-question code{background:var(--card-bg,#fff);border:1px solid var(--border,#ddd);padding:2px 6px;border-radius:4px;font-size:.88em;color:var(--text,#c0392b)}
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
<h3>📝 Soru 1 <span class="exam-points">5 puan</span> <span class="exam-topic">Sistem Kavramı</span></h3>
<p>Aristoteles'in "Bütün, parçalarının toplamından fazladır" sözü, sistem düşüncesinin temel taşı kabul edilir. Bu ifadeyi yazılım mühendisliği bağlamında, <strong>emergent properties (ortaya çıkan özellikler)</strong> kavramını kullanarak açıklayınız. Somut bir yazılım sistemi örneği veriniz.</p>
<button class="solution-btn" onclick="toggleSolution(this)">💡 Çözümü Göster</button>
<div class="solution-box">
<p><strong>Çözüm:</strong></p>
<p>Aristoteles'in bu sözü, bir sistemin parçalarını ayrı ayrı incelediğinizde göremeyeceğiniz, ancak parçalar bir araya geldiğinde ortaya çıkan yeni özelliklere (emergent properties) işaret eder.</p>
<p><strong>Yazılım örneği:</strong> Bir e-ticaret platformunu düşünelim. Veritabanı modülü tek başına veri saklar, ödeme modülü tek başına para transferi yapar, arama motoru tek başına metin eşleştirir. Ancak bunlar bir araya geldiğinde hiçbirinin tek başına sahip olmadığı yeni bir özellik ortaya çıkar: <strong>"kullanıcı deneyimi"</strong> — ürün keşfinden satın almaya uzanan bütüncül bir alışveriş akışı. Bu akış, hiçbir modülün tek başına sunabileceği bir şey değildir; bileşenlerin etkileşiminden doğar.</p>
<p><strong>Önemli nokta:</strong> Ludwig von Bertalanffy'nin Genel Sistem Teorisi de bunu destekler — sistemler açık yapılardır, çevrelerinden girdi alır, işleyerek çıktı üretir. Parçalar arasındaki ilişkiler, parçaların kendisi kadar (hatta daha fazla) önemlidir.</p>
</div>
</div>

<!-- SORU 2 -->
<div class="exam-question" id="q2">
<h3>📝 Soru 2 <span class="exam-points">5 puan</span> <span class="exam-topic">Bilgi Sistemleri</span></h3>
<p>Bir üniversitede kullanılan aşağıdaki üç sistemi, bilgi sistemleri sınıflandırmasına göre (TPS, MIS, DSS, ESS) kategorize ediniz ve her birinin <strong>hangi düzeyde karar vermeyi</strong> desteklediğini açıklayınız:</p>
<p>(a) Öğrenci not girişi ve transkript oluşturma sistemi<br>
(b) Bölüm bazında ortalama başarı oranlarını gösteren yönetici panosu<br>
(c) "Hangi bölümlere daha fazla kontenjan açılmalı?" sorusunu analiz eden tahmin modeli</p>
<button class="solution-btn" onclick="toggleSolution(this)">💡 Çözümü Göster</button>
<div class="solution-box">
<p><strong>Çözüm:</strong></p>
<table>
<tr><th>Sistem</th><th>Tür</th><th>Karar Düzeyi</th><th>Açıklama</th></tr>
<tr><td>(a) Not girişi / transkript</td><td><strong>TPS</strong> (Transaction Processing System)</td><td>Operasyonel</td><td>Günlük rutin işlemleri işler: veri giriş, kayıt, belge üretimi. Karar verme gerektirmez, işlemi kaydeder.</td></tr>
<tr><td>(b) Başarı oranı panosu</td><td><strong>MIS</strong> (Management Information System)</td><td>Taktik (orta yönetim)</td><td>TPS'ten gelen verileri özetleyerek yöneticilere raporlar. "Geçen dönem hangi bölümün başarısı düştü?" gibi yapılandırılmış sorulara cevap verir.</td></tr>
<tr><td>(c) Kontenjan tahmin modeli</td><td><strong>DSS</strong> (Decision Support System)</td><td>Stratejik</td><td>Yarı-yapılandırılmış kararları destekler. "What-if" senaryoları oluşturur: "Bilgisayar Müh. kontenjanı %20 artarsa 5 yıl sonraki istihdam projeksiyonu ne olur?" gibi.</td></tr>
</table>
<p class="tip">💡 <strong>İpucu:</strong> ESS (Executive Support System) ise en üst düzeyde stratejik kararlara odaklanır ve genellikle dış kaynaklardan da (piyasa verileri, demografik trendler) beslenir. DSS'ten farkı: ESS yapılandırılmamış kararları destekler.</p>
</div>
</div>

<!-- SORU 3 -->
<div class="exam-question" id="q3">
<h3>📝 Soru 3 <span class="exam-points">5 puan</span> <span class="exam-topic">SDLC</span></h3>
<p>SDLC'nin (Software Development Life Cycle) temel aşamalarını sırasıyla yazınız. Ardından şu senaryoyu değerlendiriniz: Bir ekip, kullanıcıların ne istediğini tam olarak bilmeden doğrudan kodlamaya başlıyor. Bu durum SDLC'nin hangi aşamasının atlanması anlamına gelir ve olası sonuçları nelerdir?</p>
<button class="solution-btn" onclick="toggleSolution(this)">💡 Çözümü Göster</button>
<div class="solution-box">
<p><strong>SDLC Aşamaları:</strong></p>
<p>1. Planlama (Planning)<br>
2. Analiz (Analysis) — Gereksinim toplama<br>
3. Tasarım (Design)<br>
4. Geliştirme (Implementation / Coding)<br>
5. Test (Testing)<br>
6. Dağıtım (Deployment)<br>
7. Bakım (Maintenance)</p>
<p><strong>Atlanan aşama:</strong> Analiz (Gereksinim Mühendisliği) aşaması atlanmıştır.</p>
<p><strong>Olası sonuçlar:</strong></p>
<p>• <strong>Yanlış ürün:</strong> Kullanıcının ihtiyacı bilinmeden üretilen yazılım, kimsenin kullanmadığı bir sistem olabilir.<br>
• <strong>Kapsam sürünmesi:</strong> Gereksinimler belirlenmediği için "şunu da ekleyelim" istekleri sürekli gelir, proje bitmez.<br>
• <strong>Maliyet patlaması:</strong> IBM'in 1:100 kuralı — üretimde keşfedilen bir hata, analiz aşamasında yakalanana göre 100 kat daha maliyetlidir.<br>
• <strong>Yeniden yazım:</strong> Mimari temelsiz kurulduğu için büyük çaplı refactoring veya sıfırdan başlama riski.</p>
</div>
</div>

<!-- SORU 4 -->
<div class="exam-question" id="q4">
<h3>📝 Soru 4 <span class="exam-points">5 puan</span> <span class="exam-topic">Süreç Modelleri</span></h3>
<p>Waterfall (Şelale) modeli ile Agile yaklaşımını aşağıdaki dört kriter üzerinden karşılaştırınız: <strong>(a)</strong> Gereksinim değişikliğine uyum, <strong>(b)</strong> Müşteri katılımı, <strong>(c)</strong> Teslimat sıklığı, <strong>(d)</strong> Dokümantasyon yoğunluğu. Her kriter için hangisinin avantajlı olduğunu belirtiniz.</p>
<button class="solution-btn" onclick="toggleSolution(this)">💡 Çözümü Göster</button>
<div class="solution-box">
<p><strong>Çözüm:</strong></p>
<table>
<tr><th>Kriter</th><th>Waterfall</th><th>Agile</th><th>Avantajlı</th></tr>
<tr><td>(a) Gereksinim değişikliğine uyum</td><td>Düşük — aşamalar lineer, geri dönüş çok maliyetli</td><td>Yüksek — her sprint sonunda yeniden önceliklendirme yapılır</td><td>✅ Agile</td></tr>
<tr><td>(b) Müşteri katılımı</td><td>Başta ve sonda — arada müşteri görünmez</td><td>Her sprint sonunda demo ve geri bildirim</td><td>✅ Agile</td></tr>
<tr><td>(c) Teslimat sıklığı</td><td>Tek büyük teslimat (proje sonunda)</td><td>Her 2-4 haftada çalışan yazılım teslimi</td><td>✅ Agile</td></tr>
<tr><td>(d) Dokümantasyon yoğunluğu</td><td>Kapsamlı — SRS, tasarım dokümanları, test planları</td><td>Hafif — User Story, acceptance criteria odaklı</td><td>✅ Waterfall (regüle sektörler, savunma, sağlık için)</td></tr>
</table>
<p class="tip">💡 <strong>Kritik nokta:</strong> "Agile her zaman daha iyidir" demek yanlıştır. Waterfall, gereksinimlerin baştan kesin olduğu ve değişmeyeceği projelerde (ör. gömülü sistemler, havacılık yazılımı) hâlâ güçlüdür. Agile ise belirsizliğin yüksek olduğu projelerde parlar. Model seçimi bağlama göre yapılır.</p>
</div>
</div>

<!-- SORU 5 -->
<div class="exam-question" id="q5">
<h3>📝 Soru 5 <span class="exam-points">5 puan</span> <span class="exam-topic">Scrum & Kanban</span></h3>
<p>Scrum'daki üç temel rolü (Product Owner, Scrum Master, Development Team) açıklayınız. Ardından şu senaryoyu değerlendiriniz: Bir projede Product Owner, sprint ortasında yeni bir gereksinimi sprint backlog'a eklemeye çalışıyor. Scrum kurallarına göre bu doğru mudur? Neden?</p>
<button class="solution-btn" onclick="toggleSolution(this)">💡 Çözümü Göster</button>
<div class="solution-box">
<p><strong>Scrum Rolleri:</strong></p>
<p><strong>1. Product Owner (Ürün Sahibi):</strong> Ürün backlog'unu yönetir, gereksinimleri önceliklendirir, "ne yapılacak?" kararını verir. İş değerini maksimize etmekten sorumludur.</p>
<p><strong>2. Scrum Master:</strong> Scrum sürecinin doğru işlemesini sağlar, engelleri kaldırır. Yönetici değil, kolaylaştırıcıdır (servant leader). Takımı Scrum kurallarından sapmalara karşı korur.</p>
<p><strong>3. Development Team (Geliştirme Takımı):</strong> Ürünü inşa eder. Kendi kendini organize eden, çapraz fonksiyonel (cross-functional) bir ekiptir. Sprint'te neyi nasıl yapacağına takım karar verir.</p>
<p><strong>Senaryo değerlendirmesi:</strong> <strong>Hayır, doğru değildir.</strong> Scrum'da sprint başladıktan sonra sprint backlog'a yeni iş eklenmez. Sprint'in kapsamı korunur (sprint goal değişmez). Product Owner yeni gereksinimi <strong>product backlog'a</strong> ekleyebilir ve bir sonraki Sprint Planning'de önceliklendirme yapabilir. Sprint ortasında değişiklik ancak sprint'in iptal edilmesi durumunda mümkündür — bu da yalnızca sprint hedefinin tamamen geçersiz hâle gelmesi durumunda yapılır.</p>
<p class="tip">💡 <strong>Kanban farkı:</strong> Kanban'da sprint kavramı yoktur, sürekli akış vardır. WIP (Work in Progress) limiti aşılmadığı sürece yeni iş istediğiniz zaman eklenebilir. Bu yüzden gereksinimlerin sürekli değiştiği destek/bakım projelerinde Kanban, Scrum'a göre daha esnek olabilir.</p>
</div>
</div>

<!-- SORU 6 -->
<div class="exam-question" id="q6">
<h3>📝 Soru 6 <span class="exam-points">5 puan</span> <span class="exam-topic">Süreç Modelleri</span></h3>
<p>V-Model, Waterfall'ın bir uzantısı olarak kabul edilir. V-Model'in Waterfall'dan temel farkı nedir? V-Model'in sol ve sağ kollarının ne anlama geldiğini açıklayınız. Hangi tür projelerde V-Model tercih edilir?</p>
<button class="solution-btn" onclick="toggleSolution(this)">💡 Çözümü Göster</button>
<div class="solution-box">
<p><strong>Çözüm:</strong></p>
<p><strong>Temel fark:</strong> Waterfall'da test, geliştirmeden sonra tek bir aşama olarak yapılır. V-Model'de ise her geliştirme aşamasının karşısında bir test seviyesi vardır — yani test, projenin başından itibaren planlanır.</p>
<p><strong>Sol kol (Tanımlama/Geliştirme):</strong></p>
<p>• Gereksinim Analizi → Sistem Tasarımı → Mimari Tasarım → Modül Tasarımı → Kodlama</p>
<p><strong>Sağ kol (Test/Doğrulama):</strong></p>
<p>• Birim Testi ↔ Modül Tasarımı<br>
• Entegrasyon Testi ↔ Mimari Tasarım<br>
• Sistem Testi ↔ Sistem Tasarımı<br>
• Kabul Testi ↔ Gereksinim Analizi</p>
<p>Her sol kol aşamasında, karşılık gelen sağ kol test senaryoları da yazılır. Bu sayede "testi sonraya bırakma" alışkanlığı ortadan kalkar.</p>
<p><strong>Tercih edildiği projeler:</strong> Gereksinimlerin baştan kesin olduğu, hata toleransının düşük olduğu projeler — özellikle <strong>tıbbi cihaz yazılımları, havacılık, savunma ve gömülü sistemler</strong>. Bu sektörlerde regülatörler (FDA, DO-178C) her seviyede doğrulama kanıtı ister.</p>
</div>
</div>

<!-- SORU 7 -->
<div class="exam-question" id="q7">
<h3>📝 Soru 7 <span class="exam-points">5 puan</span> <span class="exam-topic">Git & Proje Yönetimi</span></h3>
<p>Sistem Analizi perspektifinden Git'in sağladığı dört temel avantajı (izlenebilirlik, sorumluluk, geri alınabilirlik, şeffaf raporlama) birer cümleyle açıklayınız. Ardından şu senaryoda ne yaparsınız: Takım arkadaşınız yanlışlıkla önemli bir dosyayı silip commit etmiş. Git ile bu durumu nasıl geri alırsınız?</p>
<button class="solution-btn" onclick="toggleSolution(this)">💡 Çözümü Göster</button>
<div class="solution-box">
<p><strong>Dört avantaj:</strong></p>
<p><strong>1. İzlenebilirlik (Traceability):</strong> Her değişikliğin ne zaman, kim tarafından ve neden yapıldığı commit geçmişinde kayıtlıdır — gereksinimden koda kadar iz sürülebilir.</p>
<p><strong>2. Sorumluluk (Accountability):</strong> <code>git blame</code> komutu ile herhangi bir satırı kimin, hangi commit'te değiştirdiği görülebilir.</p>
<p><strong>3. Geri alınabilirlik (Rollback):</strong> Hatalı bir değişiklik, <code>git revert</code> ile güvenli şekilde geri alınabilir; projenin geçmiş durumlarına istenildiği zaman dönülebilir.</p>
<p><strong>4. Şeffaf raporlama:</strong> GitHub Pages ile haftalık ilerleme raporları herkese açık yayınlanabilir; proje paydaşları (danışman, ekip üyeleri) ilerlemeyi canlı takip edebilir.</p>
<p><strong>Senaryo çözümü:</strong></p>
<pre><code># Yanlış commit'in hash'ini bulun
git log --oneline

# O commit'i geri alın (yeni bir "ters commit" oluşturur)
git revert &lt;commit-hash&gt;

# Veya dosyanın önceki halini geri getirin
git checkout &lt;önceki-commit-hash&gt; -- dosya_adi.txt
git add dosya_adi.txt
git commit -m "Silinen dosya geri yüklendi"</code></pre>
<p class="tip">💡 <strong>Not:</strong> <code>git revert</code> geçmişi bozmaz (yeni bir commit ekler), <code>git reset --hard</code> ise geçmişi siler. Ekip projelerinde <strong>revert</strong> tercih edilmelidir çünkü push edilmiş commit'leri reset etmek, diğer ekip üyelerinin geçmişiyle çakışır.</p>
</div>
</div>

<!-- SORU 8 -->
<div class="exam-question" id="q8">
<h3>📝 Soru 8 <span class="exam-points">5 puan</span> <span class="exam-topic">Problem Tanımı</span></h3>
<p>İyi bir problem bildirimi (problem statement) beş temel unsur içerir. Bu unsurları yazınız. Ardından aşağıdaki senaryo için eksiksiz bir problem bildirimi oluşturunuz:</p>
<p><em>Senaryo: Bir hastanenin acil servisinde hastalar uzun süre bekliyor, triaj süreci kâğıt üzerinde yürütülüyor ve doktorlar hastaların geçmiş kayıtlarına hızlı erişemiyor.</em></p>
<button class="solution-btn" onclick="toggleSolution(this)">💡 Çözümü Göster</button>
<div class="solution-box">
<p><strong>Beş unsur:</strong></p>
<p>1. <strong>Problemi yaşayan taraf</strong> — Hangi aktör/kullanıcı grubu?<br>
2. <strong>Problemin ne olduğu</strong> — Etkisi, sonucu, ölçülebilir mi?<br>
3. <strong>Bağlam</strong> — Hangi ortamda, hangi koşullarda?<br>
4. <strong>Mevcut çözümlerin yetersizliği</strong> — Alternatifler neden çalışmıyor?<br>
5. <strong>Başarılı çözümün görünümü</strong> — Çözülünce ne olur?</p>
<p><strong>Örnek problem bildirimi:</strong></p>
<p>"Acil servis hastaları ve sağlık personeli, mevcut durumda kâğıt tabanlı triaj süreciyle çalışmaktadır. Bu yöntemin temel sorunları şunlardır: hastaların ortalama bekleme süresinin 45 dakikayı aşması, triaj formlarının kaybolması veya okunamaması ve doktorların hastaların geçmiş tıbbi kayıtlarına anında erişememesi. Hastane bilgi sistemi mevcut olmakla birlikte acil servis modülü bulunmamakta ve kâğıt tabanlı süreçle entegrasyon sağlanamamaktadır. Geliştirilecek dijital triaj sistemi, bekleme süresini %50 azaltarak, hasta kayıtlarına anlık erişim sağlayarak ve triaj sürecini dijitalleştirerek acil servis verimliliğini artıracaktır."</p>
<p class="tip">💡 <strong>Kontrol:</strong> Kim? → Hastalar ve personel. Ne? → Uzun bekleme, kayıp form, erişim sorunu. Nerede? → Kâğıt tabanlı triaj süreci. Neden mevcut çözümler yetmiyor? → Acil servis modülü yok. Çözülünce? → %50 bekleme azalması, anlık erişim.</p>
</div>
</div>

<!-- SORU 9 -->
<div class="exam-question" id="q9">
<h3>📝 Soru 9 <span class="exam-points">5 puan</span> <span class="exam-topic">Kapsam Yönetimi</span></h3>
<p><strong>Kapsam sürünmesi (scope creep)</strong> nedir? PMI verilerine göre projelerin yüzde kaçını etkiler? Bir online sınav sistemi projesi için "kapsam içi" ve "kapsam dışı" listelerini oluşturunuz (her listede en az 4 madde).</p>
<button class="solution-btn" onclick="toggleSolution(this)">💡 Çözümü Göster</button>
<div class="solution-box">
<p><strong>Kapsam sürünmesi:</strong> Proje devam ederken, başlangıçta planlanmamış özelliklerin yavaş yavaş eklenmesidir. Her biri "küçük bir şey"dir, ama toplandığında proje %30-50 büyür. PMI 2021 verilerine göre projelerin <strong>%52'si</strong> yetersiz kapsam tanımı yüzünden hedeflerini kaçırmaktadır.</p>
<p><strong>Online Sınav Sistemi — Kapsam Belgesi:</strong></p>
<table>
<tr><th>Kapsam İÇİNDE ✅</th><th>Kapsam DIŞINDA ❌</th></tr>
<tr><td>Öğretim üyesinin soru havuzu oluşturması</td><td>Yapay zekâ ile otomatik soru üretimi</td></tr>
<tr><td>Çoktan seçmeli ve açık uçlu soru tipleri</td><td>Video tabanlı sınav (gözetmenli)</td></tr>
<tr><td>Otomatik puanlama (MCQ için)</td><td>Mobil uygulama (ilk sürümde yalnızca web)</td></tr>
<tr><td>Öğrenci sonuç görüntüleme</td><td>Üçüncü taraf LMS entegrasyonu (Moodle, Canvas)</td></tr>
<tr><td>Sınav süresi ve erişim kontrolü</td><td>Kopya tespit algoritması</td></tr>
</table>
<p class="tip">💡 <strong>Önemli:</strong> "Kapsam dışında" demek "asla yapmayacağız" demek değildir — "bu sürümde yapmayacağız" demektir. Proje yöneticisinin en güçlü silahı "Hayır" diyebilmektir, ama bunu yapabilmek için neye "Evet" dendiğinin yazılı olması gerekir.</p>
</div>
</div>

<!-- SORU 10 -->
<div class="exam-question" id="q10">
<h3>📝 Soru 10 <span class="exam-points">5 puan</span> <span class="exam-topic">Paydaş Analizi</span></h3>
<p>Güç/İlgi Matrisinin dört bölgesini (Yakından Yönet, Memnun Tut, Bilgilendir, İzle) açıklayınız. Aşağıdaki paydaşları matrise yerleştiriniz ve her biri için uygun iletişim stratejisini belirtiniz:</p>
<p>(a) Rektörlük — projeyi finanse ediyor ama detaylarla ilgilenmiyor<br>
(b) Son kullanıcı öğrenciler — projeyi her gün kullanacak, karar yetkisi yok<br>
(c) IT departmanı — teknik altyapıyı sağlıyor, projeye aktif katılıyor<br>
(d) Kampüs güvenlik birimi — projeden dolaylı etkileniyor</p>
<button class="solution-btn" onclick="toggleSolution(this)">💡 Çözümü Göster</button>
<div class="solution-box">
<p><strong>Matris açıklaması:</strong></p>
<table>
<tr><th></th><th>İlgi Düşük</th><th>İlgi Yüksek</th></tr>
<tr><td><strong>Güç Yüksek</strong></td><td><strong>Memnun Tut</strong> — Önemli kararlardan haberdar et, detaya boğma</td><td><strong>Yakından Yönet</strong> — Sürekli iletişim, aktif katılım sağla</td></tr>
<tr><td><strong>Güç Düşük</strong></td><td><strong>İzle</strong> — Minimum çaba ile takip et</td><td><strong>Bilgilendir</strong> — Düzenli güncelleme, geri bildirim al</td></tr>
</table>
<p><strong>Yerleştirme:</strong></p>
<table>
<tr><th>Paydaş</th><th>Güç</th><th>İlgi</th><th>Bölge</th><th>Strateji</th></tr>
<tr><td>(a) Rektörlük</td><td>Yüksek</td><td>Düşük</td><td>Memnun Tut</td><td>Aylık özet rapor, kritik karar noktalarında bilgilendirme</td></tr>
<tr><td>(b) Öğrenciler</td><td>Düşük</td><td>Yüksek</td><td>Bilgilendir</td><td>Beta testi, anket, düzenli güncelleme duyuruları</td></tr>
<tr><td>(c) IT departmanı</td><td>Yüksek</td><td>Yüksek</td><td>Yakından Yönet</td><td>Haftalık toplantı, teknik karar süreçlerine aktif dahil etme</td></tr>
<tr><td>(d) Kampüs güvenlik</td><td>Düşük</td><td>Düşük</td><td>İzle</td><td>Gerekirse bilgilendir, proaktif iletişim gerekmez</td></tr>
</table>
<p class="tip">💡 <strong>Uyarı:</strong> Güç/İlgi Matrisi statik değildir. Proje ilerledikçe paydaşlar bölge değiştirebilir. Örneğin rektörlük değişirse yeni rektör projeye daha fazla ilgi gösterebilir → "Yakından Yönet" bölgesine taşınır.</p>
</div>
</div>

<!-- SORU 11 -->
<div class="exam-question" id="q11">
<h3>📝 Soru 11 <span class="exam-points">5 puan</span> <span class="exam-topic">As-Is / To-Be Analizi</span></h3>
<p>"Berbat bir süreci otomatikleştirmek, yalnızca berbat bir otomasyondur." Bu ifadeyi As-Is / To-Be analizi bağlamında açıklayınız. Bir analistin As-Is sürecini neden <strong>kopyalamak</strong> yerine <strong>anlamak</strong> için çıkarması gerektiğini, somut bir örnekle destekleyiniz.</p>
<button class="solution-btn" onclick="toggleSolution(this)">💡 Çözümü Göster</button>
<div class="solution-box">
<p><strong>Çözüm:</strong></p>
<p>Bu ifade, mevcut iş sürecini olduğu gibi dijitale taşımanın çoğu zaman verimsizlikleri de dijitale taşımak anlamına geldiğini vurgular. Amaç mevcut süreci birebir yazılıma çevirmek değil, süreçteki <strong>darboğazları, tekrarları ve değer katmayan adımları</strong> tespit ederek To-Be tasarımında bunları elemektir.</p>
<p><strong>Örnek:</strong> Bir üniversite kütüphanesinde kitap iade süreci düşünelim:</p>
<p><strong>As-Is (mevcut):</strong> Öğrenci kütüphaneye fiziksel olarak gelir → kütüphaneci barkod okutarak iade kaydeder → gecikme varsa manuel hesap yaparak ceza yazar → öğrenci vezneye gider → vezne makbuz keser → öğrenci makbuzu kütüphaneye getirir.</p>
<p>Eğer bu süreci birebir dijitale aktarırsak: "Öğrenci iade butonuna tıklar → sistem barkod ister → ceza hesaplar → ayrı ödeme sayfasına yönlendirir → ödeme sonrası makbuzu indirir → makbuzu sisteme yükler." Bu berbat otomasyondur — fiziksel dünyanın gereksiz adımlarını dijitale kopyalamıştır.</p>
<p><strong>To-Be (hedef):</strong> Öğrenci iade butonuna tıklar → sistem otomatik gecikme hesaplar → online ödeme anında tamamlanır → iade kaydı otomatik kapanır. Gereksiz adımlar (vezne, makbuz, geri getirme) elenmiştir.</p>
<p class="tip">💡 <strong>Ders:</strong> Analist As-Is'i çıkarırken asıl sorması gereken soru "bu adım neden var?" ve "bu adım olmasa ne olur?" sorularıdır. Değer katmayan her adım, To-Be'de eleme adayıdır.</p>
</div>
</div>

<!-- SORU 12 -->
<div class="exam-question" id="q12">
<h3>📝 Soru 12 <span class="exam-points">5 puan</span> <span class="exam-topic">Gereksinim Türleri</span></h3>
<p>Fonksiyonel gereksinim (FR) ile fonksiyonel olmayan gereksinim (NFR) arasındaki farkı açıklayınız. Bir e-ticaret platformu için 3 fonksiyonel ve 3 fonksiyonel olmayan gereksinim yazınız. NFR'leriniz <strong>ölçülebilir</strong> olmalıdır.</p>
<button class="solution-btn" onclick="toggleSolution(this)">💡 Çözümü Göster</button>
<div class="solution-box">
<p><strong>Fark:</strong></p>
<p><strong>Fonksiyonel gereksinimler (FR):</strong> Sistemin <strong>ne yapacağını</strong> tanımlar — işlevler, eylemler, davranışlar. Her FR bir giriş-işlem-çıkış üçlüsünü ima eder.</p>
<p><strong>Fonksiyonel olmayan gereksinimler (NFR):</strong> Sistemin <strong>nasıl çalışacağını</strong> tanımlar — kalite özellikleri (-ilities). Performans, güvenlik, kullanılabilirlik gibi.</p>
<p><strong>E-ticaret platformu gereksinimleri:</strong></p>
<table>
<tr><th>Tür</th><th>Gereksinim</th></tr>
<tr><td>FR-01</td><td>Kayıtlı kullanıcı, ürün adı/açıklama/fiyat/fotoğraf girerek ilan oluşturabilmelidir.</td></tr>
<tr><td>FR-02</td><td>Alıcı, kategori ve fiyat aralığına göre ürün arayabilmelidir.</td></tr>
<tr><td>FR-03</td><td>Kullanıcı, satın alma işlemini kredi kartı veya havale ile tamamlayabilmelidir.</td></tr>
<tr><td>NFR-01 (Performans)</td><td>Arama sonuçları, sorgu alındıktan itibaren <strong>500ms</strong> içinde kullanıcıya sunulmalıdır (95. yüzdelik dilim).</td></tr>
<tr><td>NFR-02 (Güvenlik)</td><td>Kullanıcı parolaları bcrypt ile hashlenmelidir (salt rounds ≥ 12); düz metin saklanmamalıdır.</td></tr>
<tr><td>NFR-03 (Kullanılabilirlik)</td><td>Yeni bir kullanıcı, herhangi bir eğitim almaksızın ilk ürün ilanını <strong>5 dakika</strong> içinde tamamlayabilmelidir.</td></tr>
</table>
<p class="tip">💡 <strong>Sık yapılan hata:</strong> "Sistem güvenli olmalı" bir gereksinim değildir — bir dilektir. NFR'ler de en az FR'ler kadar somut ve ölçülebilir yazılmalıdır.</p>
</div>
</div>

<!-- SORU 13 -->
<div class="exam-question" id="q13">
<h3>📝 Soru 13 <span class="exam-points">5 puan</span> <span class="exam-topic">SMART Gereksinimleri</span></h3>
<p>SMART kısaltmasındaki her harfin ne anlama geldiğini yazınız. Ardından aşağıdaki "kötü" gereksinimleri SMART biçiminde yeniden yazınız:</p>
<p>(a) "Sistem hızlı olmalı."<br>
(b) "Kullanıcı verileri güvende tutulmalı."<br>
(c) "Raporlar kolay üretilmeli."</p>
<button class="solution-btn" onclick="toggleSolution(this)">💡 Çözümü Göster</button>
<div class="solution-box">
<p><strong>SMART:</strong></p>
<p><strong>S</strong> — Specific (Özgül): Belirsizlik içermeyen net ifade.<br>
<strong>M</strong> — Measurable (Ölçülebilir): Sayısal veya doğrulanabilir başarı kriteri.<br>
<strong>A</strong> — Achievable (Erişilebilir): Mevcut teknolojiyle gerçekleştirilebilir.<br>
<strong>R</strong> — Relevant (İlgili): Proje hedefleriyle doğrudan bağlantılı.<br>
<strong>T</strong> — Time-bound (Zamanlı): Hangi sürümde karşılanacağı belirtilmiş.</p>
<p><strong>Dönüşümler:</strong></p>
<p><strong>(a)</strong> ❌ "Sistem hızlı olmalı."<br>
✅ "Ana sayfa, kullanıcı isteğinden itibaren <strong>2 saniye</strong> içinde tam yüklenmelidir (95. yüzdelik dilimde, v1.0)."</p>
<p><strong>(b)</strong> ❌ "Kullanıcı verileri güvende tutulmalı."<br>
✅ "Kullanıcı parolaları minimum 8 karakter, en az 1 büyük harf ve 1 rakam içermeli; bcrypt (salt rounds=12) ile hashlenmelidir. Tüm API trafiği HTTPS üzerinden şifrelenmelidir (v1.0)."</p>
<p><strong>(c)</strong> ❌ "Raporlar kolay üretilmeli."<br>
✅ "Yönetici, 3 adımı aşmayan bir arayüz aracılığıyla tarih aralığı ve bölüm filtresi seçerek satış raporunu PDF formatında <strong>10 saniye</strong> içinde oluşturabilmelidir (v1.0)."</p>
<p class="tip">💡 <strong>"Salatalık gereksinimi":</strong> Dışarıdan yeşil ve taze görünen ama içi boş gereksinimlerdir. Herkes farklı anlam çıkarır, kimse test edemez, herkes memnuniyetsiz kalır.</p>
</div>
</div>

<!-- SORU 14 -->
<div class="exam-question" id="q14">
<h3>📝 Soru 14 <span class="exam-points">5 puan</span> <span class="exam-topic">MoSCoW Önceliklendirme</span></h3>
<p>MoSCoW önceliklendirme tekniğindeki dört kategoriyi (Must Have, Should Have, Could Have, Won't Have) açıklayınız. "Must Have gereksinimleri toplam gereksinim listesinin %60'ını geçmemeli" kuralının gerekçesini yazınız. Bir kütüphane otomasyon sistemi için her kategoriden en az 2 gereksinim örneği veriniz.</p>
<button class="solution-btn" onclick="toggleSolution(this)">💡 Çözümü Göster</button>
<div class="solution-box">
<p><strong>Kategoriler:</strong></p>
<p><strong>Must Have (Olmazsa Olmaz):</strong> Bu olmadan sistem değer taşımaz. İlk sprint'e mutlaka alınır.<br>
<strong>Should Have (Önemli ama zorunlu değil):</strong> Mümkünse olmalı, çıkarılabilir. Genellikle 2-3. sprint'te yer alır.<br>
<strong>Could Have (Güzel olur):</strong> Zaman/bütçe kalırsa eklenir. Bonus özelliklerdir.<br>
<strong>Won't Have (Bu sürümde yok):</strong> İleride değerlendirilebilir. Bilinçli bir "hayır"dır.</p>
<p><strong>%60 kuralının gerekçesi:</strong> Eğer her şey "Must Have" ise, hiçbir şey gerçekten olmazsa olmaz değildir. Tüm gereksinimleri Must yaparsanız, bütçe veya süre kısıtıyla karşılaştığınızda neyi keseceğinize karar veremezsiniz. %60 sınırı, ekibi gerçekten kritik olanı ayırt etmeye zorlar ve sprint planlamasında esneklik bırakır.</p>
<p><strong>Kütüphane Otomasyon Sistemi:</strong></p>
<table>
<tr><th>Kategori</th><th>Gereksinimler</th></tr>
<tr><td>Must Have</td><td>• Kitap ödünç alma/iade kaydı<br>• Üye kayıt ve kimlik doğrulama<br>• Kitap arama (ISBN, yazar, başlık)</td></tr>
<tr><td>Should Have</td><td>• Gecikme bildirimi (e-posta/SMS)<br>• Kitap rezervasyon sistemi</td></tr>
<tr><td>Could Have</td><td>• Kitap öneri algoritması<br>• QR kod ile hızlı ödünç alma</td></tr>
<tr><td>Won't Have</td><td>• E-kitap okuyucu entegrasyonu<br>• Kütüphaneler arası ödünç verme (ILL) sistemi</td></tr>
</table>
</div>
</div>

<!-- SORU 15 -->
<div class="exam-question" id="q15">
<h3>📝 Soru 15 <span class="exam-points">5 puan</span> <span class="exam-topic">Gereksinim Hiyerarşisi</span></h3>
<p>Gereksinim hiyerarşisinin üç katmanını (İş, Kullanıcı, Sistem gereksinimleri) açıklayınız. Her katmanın hangi soruya cevap verdiğini ve hangi paydaş grubunun bu katmanla ilgilendiğini belirtiniz. "Kampüs ikinci el platformu" senaryosu için her katmandan birer örnek yazınız.</p>
<button class="solution-btn" onclick="toggleSolution(this)">💡 Çözümü Göster</button>
<div class="solution-box">
<p><strong>Üç katman:</strong></p>
<table>
<tr><th>Katman</th><th>Soru</th><th>Paydaş</th><th>Örnek</th></tr>
<tr><td><strong>İş Gereksinimleri</strong> (Business)</td><td><strong>NEDEN</strong> inşa ediyoruz?</td><td>Yöneticiler, sponsorlar</td><td>"Kampüs içi ikinci el ticaretinin %50'si, sistem devreye girdiğinden 12 ay sonra platform üzerinden gerçekleştirilmelidir."</td></tr>
<tr><td><strong>Kullanıcı Gereksinimleri</strong> (User)</td><td><strong>NE</strong> yapılacak?</td><td>Son kullanıcılar, analistler</td><td>"Ben bir öğrenci satıcı olarak, ürünlerimi platforma ekleyebilmek istiyorum; böylece kampüs içindeki diğer öğrenciler görebilsin."</td></tr>
<tr><td><strong>Sistem Gereksinimleri</strong> (System)</td><td><strong>NASIL</strong> yapılacak?</td><td>Geliştiriciler, mimarlar</td><td>"POST /api/products endpoint'i; title (string, max 100 karakter), price (decimal, pozitif), images (max 5 adet, JPEG/PNG, max 5MB) parametrelerini alacak ve 201 Created döndürecektir."</td></tr>
</table>
<p><strong>İlişki:</strong> Bir iş gereksinimi birden fazla kullanıcı gereksinimine, her kullanıcı gereksinimi de birden fazla sistem gereksinimine ayrılabilir. Piramit tepeden tabana somutlaşır.</p>
<p class="tip">💡 <strong>Kritik:</strong> Üst katman olmadan alt katmanı yazmak, "neden" sorusuna cevap vermeden "nasıl" sorusuna atlamaktır — bu da yanlış ürün inşa etme riskini artırır.</p>
</div>
</div>

<!-- SORU 16 -->
<div class="exam-question" id="q16">
<h3>📝 Soru 16 <span class="exam-points">5 puan</span> <span class="exam-topic">Varsayımlar & Kısıtlar</span></h3>
<p><strong>Varsayım (assumption)</strong> ile <strong>kısıt (constraint)</strong> arasındaki farkı açıklayınız. "Bir varsayım yanlış çıkarsa ne olur?" sorusunu cevaplayınız. Aşağıdaki ifadeleri varsayım veya kısıt olarak sınıflandırınız:</p>
<p>(a) Proje bütçesi 80.000 TL'dir.<br>
(b) Kullanıcıların akıllı telefona sahip olduğu varsayılmaktadır.<br>
(c) Geliştirme ekibi 4 kişiden oluşacaktır.<br>
(d) Hedef kitle temel bilgisayar okuryazarlığına sahiptir.<br>
(e) Proje 4 ay içinde tamamlanmalıdır.</p>
<button class="solution-btn" onclick="toggleSolution(this)">💡 Çözümü Göster</button>
<div class="solution-box">
<p><strong>Fark:</strong></p>
<p><strong>Varsayım:</strong> Projenin devam edebilmesi için doğru kabul edilen, ancak henüz <strong>doğrulanmamış</strong> ifadedir. Her varsayım bir potansiyel risktir.</p>
<p><strong>Kısıt:</strong> Proje üzerindeki kesin ve <strong>müzakere edilemez</strong> sınırlamadır. Bütçe, süre, teknoloji, ekip büyüklüğü gibi.</p>
<p><strong>Varsayım yanlış çıkarsa:</strong> Projenin temel kabulleri çöker. Örneğin "kullanıcılar internet bağlantısına sahip" varsayımı yanlışsa, tüm mimari (bulut tabanlı → offline-first) değişmek zorunda kalır. Bu yüzden her varsayım, doğrulanana kadar <strong>risk listesinde</strong> kalmalıdır.</p>
<p><strong>Sınıflandırma:</strong></p>
<table>
<tr><th>İfade</th><th>Tür</th><th>Gerekçe</th></tr>
<tr><td>(a) Bütçe 80.000 TL</td><td><strong>Kısıt</strong></td><td>Kesin sınır, müzakere edilemez</td></tr>
<tr><td>(b) Akıllı telefon sahipliği</td><td><strong>Varsayım</strong></td><td>Doğrulanmamış kabul — yanlış çıkabilir</td></tr>
<tr><td>(c) Ekip 4 kişi</td><td><strong>Kısıt</strong></td><td>Kaynak sınırlaması, değiştirilemez</td></tr>
<tr><td>(d) Bilgisayar okuryazarlığı</td><td><strong>Varsayım</strong></td><td>Doğrulanmamış kabul — kullanıcı araştırması gerekir</td></tr>
<tr><td>(e) 4 ay süre</td><td><strong>Kısıt</strong></td><td>Zaman sınırlaması, müzakere edilemez</td></tr>
</table>
</div>
</div>

<!-- SORU 17 -->
<div class="exam-question" id="q17">
<h3>📝 Soru 17 <span class="exam-points">5 puan</span> <span class="exam-topic">Gap Analizi</span></h3>
<p>Bir üniversitenin ders kayıt süreci şu anda tamamen manuel yapılmaktadır: öğrenci formu dolduruyor, danışmana onaylatıyor, öğrenci işlerine teslim ediyor. As-Is sürecindeki <strong>en az 3 sorunu</strong> tespit ediniz ve her sorun için To-Be çözümünü yazınız. Gap analiz tablosunu oluşturunuz.</p>
<button class="solution-btn" onclick="toggleSolution(this)">💡 Çözümü Göster</button>
<div class="solution-box">
<p><strong>Gap Analizi:</strong></p>
<table>
<tr><th>As-Is Sorunu</th><th>To-Be Çözümü</th><th>Öncelik</th></tr>
<tr><td>Kâğıt formlar kaybolabiliyor, öğrenci tekrar doldurmak zorunda kalıyor</td><td>Dijital form — sistem üzerinden online başvuru, veriler veritabanında saklanır</td><td>🔴 Yüksek</td></tr>
<tr><td>Danışman onayı için fiziksel buluşma gerekiyor (randevu sorunu, kuyruk)</td><td>Online onay mekanizması — danışman sisteme giriş yaparak tek tıkla onaylar/reddeder</td><td>🔴 Yüksek</td></tr>
<tr><td>Kontenjan bilgisi anlık değil — öğrenci dolu derse kayıt yapmaya çalışıyor</td><td>Gerçek zamanlı kontenjan gösterimi — ders dolduğunda otomatik kapanır</td><td>🔴 Yüksek</td></tr>
<tr><td>Ders çakışması manuel kontrol ediliyor — hataya açık</td><td>Otomatik çakışma kontrolü — sistem, seçilen derslerin saat çakışmasını anında tespit eder</td><td>🟡 Orta</td></tr>
<tr><td>Sonuç bilgisi geç ulaşıyor (günler sonra)</td><td>Anlık bildirim — kayıt onaylandığında/reddedildiğinde e-posta ve sistem bildirimi</td><td>🟡 Orta</td></tr>
</table>
<p class="tip">💡 <strong>Dikkat:</strong> Gap analizi, hangi özelliklerin önce geliştirilmesi gerektiğini de belirler. Yüksek öncelikli gap'ler ilk sprint'e, orta öncelikli olanlar sonraki sprint'lere yerleştirilir. Bu tablo, ürün backlog'unun ilk taslağıdır.</p>
</div>
</div>

<!-- SORU 18 -->
<div class="exam-question" id="q18">
<h3>📝 Soru 18 <span class="exam-points">5 puan</span> <span class="exam-topic">İzlenebilirlik</span></h3>
<p>Gereksinim izlenebilirliği (traceability) nedir? İleri izlenebilirlik (forward) ile geri izlenebilirlik (backward) arasındaki farkı açıklayınız. Bir izlenebilirlik matrisinde <strong>boş hücre</strong> neden tehlike işaretidir? Aşağıdaki 3 gereksinim için izlenebilirlik matrisi oluşturunuz:</p>
<p>FR-01: Kullanıcı sisteme giriş yapabilmeli<br>
FR-02: Öğretmen sınav oluşturabilmeli<br>
NFR-01: Sayfa yüklenme süresi &lt; 3 saniye</p>
<button class="solution-btn" onclick="toggleSolution(this)">💡 Çözümü Göster</button>
<div class="solution-box">
<p><strong>İzlenebilirlik:</strong> Her gereksinimin hangi iş hedefinden kaynaklandığını, hangi tasarım kararlarıyla karşılandığını ve hangi test senaryolarıyla doğrulandığını takip etme yeteneğidir.</p>
<p><strong>İleri izlenebilirlik (forward):</strong> Gereksinim → Tasarım → Kod → Test. "Bu gereksinim nerede gerçekleştirildi?"</p>
<p><strong>Geri izlenebilirlik (backward):</strong> Test → Kod → Tasarım → Gereksinim. "Bu test senaryosu hangi gereksinimden geliyor?"</p>
<p><strong>Boş hücre tehlikesi:</strong> Eğer bir gereksinimin karşısında test senaryosu yoksa, o gereksinim asla doğrulanmayacak demektir. Eğer bir testin karşısında gereksinim yoksa, o test gereksiz olabilir.</p>
<p><strong>Matris:</strong></p>
<table>
<tr><th>Gereksinim ID</th><th>Gereksinim</th><th>Use Case</th><th>Tasarım</th><th>Test Senaryosu</th></tr>
<tr><td>FR-01</td><td>Kullanıcı giriş yapabilmeli</td><td>UC-001</td><td>Login modülü, JWT token</td><td>TS-001 (doğru şifre), TS-002 (yanlış şifre), TS-003 (kilitlenme)</td></tr>
<tr><td>FR-02</td><td>Öğretmen sınav oluşturabilmeli</td><td>UC-005</td><td>Exam creator bileşeni</td><td>TS-010 (sınav oluşturma), TS-011 (validasyon), TS-012 (kaydetme)</td></tr>
<tr><td>NFR-01</td><td>Sayfa yüklenme &lt; 3s</td><td>—</td><td>CDN, lazy loading</td><td>TS-P001 (performans testi, 95. yüzdelik)</td></tr>
</table>
</div>
</div>

<!-- SORU 19 -->
<div class="exam-question" id="q19">
<h3>📝 Soru 19 <span class="exam-points">5 puan</span> <span class="exam-topic">SRS & Agile</span></h3>
<p>IEEE 830 standardına göre SRS (Software Requirements Specification) belgesinin temel bölümlerini yazınız. Ardından Agile bağlamında SRS'in yerini alan araçları (Product Backlog, User Story, Acceptance Criteria, Sprint Review) karşılıklı eşleştiriniz. Her iki yaklaşımın ortak hedefinin ne olduğunu tek cümleyle ifade ediniz.</p>
<button class="solution-btn" onclick="toggleSolution(this)">💡 Çözümü Göster</button>
<div class="solution-box">
<p><strong>SRS bölümleri (IEEE 830):</strong></p>
<table>
<tr><th>Bölüm</th><th>İçerik</th></tr>
<tr><td>§1 Giriş</td><td>Amaç, kapsam, tanımlar, kısaltmalar, genel bakış</td></tr>
<tr><td>§2 Genel Açıklama</td><td>Ürün perspektifi, işlevler, kullanıcı grupları, kısıtlar, varsayımlar</td></tr>
<tr><td>§3 Özel Gereksinimler</td><td>Fonksiyonel gereksinimler, NFR'ler, dış arayüz gereksinimleri</td></tr>
<tr><td>Ek A — Veri Sözlüğü</td><td>Kavram ve veri tiplerinin tanımları</td></tr>
<tr><td>Ek B — Modeller</td><td>Use case diyagramları, ER diyagramları, prototip ekranları</td></tr>
</table>
<p><strong>Waterfall ↔ Agile eşleşme:</strong></p>
<table>
<tr><th>Geleneksel (Waterfall)</th><th>Agile Karşılığı</th></tr>
<tr><td>SRS belgesi</td><td>Product Backlog</td></tr>
<tr><td>Gereksinim maddesi</td><td>User Story</td></tr>
<tr><td>Test planı</td><td>Acceptance Criteria</td></tr>
<tr><td>Değişiklik kontrol kurulu</td><td>Sprint Review</td></tr>
</table>
<p><strong>Ortak hedef:</strong> Her iki yaklaşım da gereksinimlerin <strong>eksiksiz, izlenebilir ve doğrulanabilir</strong> biçimde belgelenmesini hedefler — araç farklıdır, disiplin aynıdır.</p>
</div>
</div>

<!-- SORU 20 -->
<div class="exam-question" id="q20">
<h3>📝 Soru 20 <span class="exam-points">5 puan</span> <span class="exam-topic">Prototipleme & Bütüncül Senaryo</span></h3>
<p>Bir startup, üniversite öğrencileri için yemek sipariş platformu geliştirmek istiyor. Kullanıcı beklentileri net değil, bütçe sınırlı ve 3 aylık süre var.</p>
<p><strong>(a)</strong> Hangi süreç modelini seçersiniz? Gerekçenizi yazınız.<br>
<strong>(b)</strong> İlk yapacağınız 3 adımı sıralayınız (analiz perspektifinden).<br>
<strong>(c)</strong> Bu proje için 2 varsayım ve 2 kısıt yazınız.<br>
<strong>(d)</strong> "Kullanıcı yemek sipariş edebilmeli" gereksinimini SMART formatında yeniden yazınız.</p>
<button class="solution-btn" onclick="toggleSolution(this)">💡 Çözümü Göster</button>
<div class="solution-box">
<p><strong>(a) Model seçimi: Agile (Scrum) + Prototipleme</strong></p>
<p>Gerekçe: Kullanıcı beklentileri net değil → belirsizlik yüksek → Waterfall uygun değil. Kısa süre (3 ay) → hızlı iterasyon gerekli → 2 haftalık sprint'lerle 6 sprint yapılabilir. Prototipleme ile kullanıcı geri bildirimi erken alınır, yanlış yol riski azalır.</p>

<p><strong>(b) İlk 3 adım:</strong></p>
<p>1. <strong>Problem tanımı ve paydaş analizi:</strong> Öğrencilerin mevcut yemek sipariş alışkanlıklarını araştır (As-Is). Kampüs yemekhanesi, çevredeki restoranlar, mevcut uygulamalar — neden yetmiyor?</p>
<p>2. <strong>Kapsam belirleme ve gereksinim toplama:</strong> Must Have / Won't Have ayrımını yap. İlk MVP'nin sınırlarını çiz. User story'ler yaz.</p>
<p>3. <strong>Düşük sadakatli prototip (low-fidelity prototype):</strong> Kâğıt prototip veya Figma ile temel akışları (sipariş verme, ödeme, takip) oluştur, 5-10 öğrenciyle test et.</p>

<p><strong>(c) Varsayımlar ve kısıtlar:</strong></p>
<table>
<tr><th>Varsayımlar</th><th>Kısıtlar</th></tr>
<tr><td>Öğrencilerin çoğunluğu akıllı telefon kullanıyor</td><td>Bütçe: Sınırlı (startup)</td></tr>
<tr><td>Kampüs çevresindeki restoranlar platforma katılmaya istekli</td><td>Süre: 3 ay</td></tr>
</table>

<p><strong>(d) SMART gereksinim:</strong></p>
<p>❌ "Kullanıcı yemek sipariş edebilmeli."</p>
<p>✅ "Kayıtlı öğrenci, 5 adımı aşmayan bir sipariş akışı aracılığıyla, menüden ürün seçerek ve kredi kartı/kampüs kartı ile ödeme yaparak sipariş verebilmelidir. Sipariş onayı 3 saniye içinde kullanıcıya gösterilmelidir (v1.0, Sprint 3 sonuna kadar)."</p>
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
