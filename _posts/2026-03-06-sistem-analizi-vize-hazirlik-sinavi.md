---
layout: post
title: "Vize Hazırlık Sınavı: 20 Soruluk İnteraktif Test"
date: 2026-03-06 13:00:00 +0300
categories: sistem-analizi-ve-tasarimi
course_id: sistem-analizi-ve-tasarimi
tags: [sistem-analizi, sınav, vize, test, çoktan-seçmeli]
---

{% raw %}

Bu interaktif test, Sistem Analizi ve Tasarımı dersinde şimdiye kadar işlenen tüm konuları kapsamaktadır. Her soruyu yanıtladıktan sonra doğru/yanlış geri bildirim alacak, "Çözümü Göster" butonuyla detaylı açıklamayı görebileceksiniz.

**Kapsanan Konular:** Sistem kavramı ve türleri, Bilgi Sistemleri (TPS, MIS, DSS, ESS, ERP, CRM), Sistem Analizi vs Tasarımı, SDLC aşamaları, Proje türleri, UML tarihi, Süreç Modelleri (Waterfall, V-Model, Prototipleme, Agile, Scrum, Kanban), Git/GitHub ile proje yönetimi, Rapor hazırlama ve kapsam yönetimi.

---

<style>
.quiz-container{max-width:800px;margin:0 auto;font-family:inherit}
.quiz-question{background:var(--bg-alt,#f8f9fa);border:1px solid var(--border,#dee2e6);border-radius:10px;padding:20px;margin-bottom:24px;position:relative}
.quiz-question h3{margin-top:0;color:var(--text,#2c3e50);font-size:1.05em}
.quiz-question pre{background:#1e1e2e;color:#cdd6f4;padding:12px;border-radius:6px;overflow-x:auto}
.quiz-question code{font-size:.92em}
.quiz-options{list-style:none;padding:0;margin:12px 0}
.quiz-options li{padding:10px 14px;margin:6px 0;border:2px solid var(--border,#dee2e6);border-radius:8px;cursor:pointer;transition:all .2s;background:var(--card-bg,#fff);color:var(--text,#2c3e50)}
.quiz-options li:hover{border-color:var(--gold,#C9A84C);background:color-mix(in srgb,var(--gold,#C9A84C) 10%,var(--card-bg,#fff))}
.quiz-options li.selected{border-color:var(--gold,#C9A84C);background:color-mix(in srgb,var(--gold,#C9A84C) 12%,var(--card-bg,#fff));font-weight:600}
.quiz-options li.correct{border-color:#00b894;background:color-mix(in srgb,#00b894 15%,var(--card-bg,#fff))}
.quiz-options li.wrong{border-color:#e74c3c;background:color-mix(in srgb,#e74c3c 12%,var(--card-bg,#fff))}
.quiz-options li.disabled{pointer-events:none;opacity:.85}
.quiz-feedback{margin-top:12px;padding:10px 14px;border-radius:8px;font-weight:600;display:none}
.quiz-feedback.show{display:block}
.quiz-feedback.correct-fb{background:color-mix(in srgb,#00b894 15%,var(--card-bg,#fff));color:#00b894}
.quiz-feedback.wrong-fb{background:color-mix(in srgb,#e74c3c 12%,var(--card-bg,#fff));color:#e74c3c}
.solution-toggle{margin-top:10px;background:var(--primary,#1B2A4A);color:#fff;border:none;padding:8px 18px;border-radius:6px;cursor:pointer;font-size:.9em;display:none}
.solution-toggle:hover{background:var(--primary-mid,#2C4470)}
.solution-box{display:none;margin-top:12px;padding:14px;background:color-mix(in srgb,var(--gold,#C9A84C) 8%,var(--bg,#fff));border-left:4px solid var(--gold,#C9A84C);border-radius:6px;line-height:1.6;color:var(--text,#2c3e50)}
.solution-box pre{background:#1e1e2e;color:#cdd6f4;padding:10px;border-radius:6px}
.quiz-score{text-align:center;padding:24px;background:linear-gradient(135deg,var(--primary,#1B2A4A),var(--primary-mid,#2C4470));color:#fff;border-radius:12px;margin-top:30px;display:none}
.quiz-score h2{margin:0 0 8px}
.quiz-score .score-num{font-size:2.4em;font-weight:800}
.quiz-progress{text-align:center;margin-bottom:20px;font-size:.95em;color:var(--text-muted,#636e72)}
</style>

<div class="quiz-container" id="quizApp">
<div class="quiz-progress" id="progressBar">Yanıtlanan: 0 / 20</div>

<!-- SORU 1 -->
<div class="quiz-question" id="q1">
<h3>Soru 1 — Sistem Kavramının Kökeni</h3>
<p>"Bütün, parçalarının toplamından fazladır" sözü kime aittir ve hangi kavramın temelini oluşturur?</p>
<ul class="quiz-options" data-correct="b">
  <li data-val="a">A) Ludwig von Bertalanffy — Genel Sistem Teorisi</li>
  <li data-val="b">B) Aristoteles — Sistem düşüncesinin temel taşı</li>
  <li data-val="c">C) Fred Brooks — Yazılım karmaşıklığı</li>
  <li data-val="d">D) Winston Royce — Waterfall modeli</li>
</ul>
<div class="quiz-feedback" id="fb1"></div>
<button class="solution-toggle" id="st1" onclick="toggleSolution('sol1')">Çözümü Göster</button>
<div class="solution-box" id="sol1">
<strong>Doğru Cevap: B) Aristoteles</strong><br><br>
Bu söz Aristoteles'in <em>Metafizik</em> eserinden gelir (M.Ö. yaklaşık 350). "Bütün, parçalarının toplamından fazladır" ifadesi, sistem düşüncesinin temel taşıdır. Bertalanffy ise 1968'de <em>Genel Sistem Teorisi</em>'ni formüle etmiştir — o farklı bir katkıdır. Aristoteles'in tespiti, parçalar arası ilişkilerin ve bu ilişkilerden doğan yeni özelliklerin (<em>emergent properties</em>) önemine işaret eder.
</div>
</div>

<!-- SORU 2 -->
<div class="quiz-question" id="q2">
<h3>Soru 2 — Sistem Bileşenleri</h3>
<p>Bir sistemin dört temel bileşeni hangi seçenekte doğru verilmiştir?</p>
<ul class="quiz-options" data-correct="a">
  <li data-val="a">A) Girdiler, İşlemler, Çıktılar, Geri Bildirim</li>
  <li data-val="b">B) Planlama, Analiz, Tasarım, Test</li>
  <li data-val="c">C) Donanım, Yazılım, Veri, Ağ</li>
  <li data-val="d">D) Kullanıcı, Veritabanı, Arayüz, Sunucu</li>
</ul>
<div class="quiz-feedback" id="fb2"></div>
<button class="solution-toggle" id="st2" onclick="toggleSolution('sol2')">Çözümü Göster</button>
<div class="solution-box" id="sol2">
<strong>Doğru Cevap: A) Girdiler, İşlemler, Çıktılar, Geri Bildirim</strong><br><br>
Bilgisayar biliminde sistem kavramını tanımlamak için kullanılan dört temel bileşen:<br>
1. <strong>Girdiler (Inputs):</strong> Dışarıdan alınan veriler, komutlar.<br>
2. <strong>İşlemler (Processes):</strong> Girdileri çıktılara dönüştüren adımlar.<br>
3. <strong>Çıktılar (Outputs):</strong> Üretilen sonuçlar, raporlar.<br>
4. <strong>Geri Bildirim (Feedback):</strong> Çıktıların sistemi düzeltmek için yeniden girdi olması.<br><br>
B şıkkı SDLC aşamalarıdır. C şıkkı teknoloji altyapısı bileşenleridir. D şıkkı yazılım mimarisi bileşenleridir.
</div>
</div>

<!-- SORU 3 -->
<div class="quiz-question" id="q3">
<h3>Soru 3 — Bilgi Sistemi Türleri</h3>
<p>Bir süpermarketteki POS (satış noktası) cihazı ve bordro sistemi hangi bilgi sistemi türüne girer?</p>
<ul class="quiz-options" data-correct="c">
  <li data-val="a">A) DSS — Karar Destek Sistemi</li>
  <li data-val="b">B) MIS — Yönetim Bilgi Sistemi</li>
  <li data-val="c">C) TPS — İşlem İşleme Sistemi</li>
  <li data-val="d">D) ESS — Yönetici Destek Sistemi</li>
</ul>
<div class="quiz-feedback" id="fb3"></div>
<button class="solution-toggle" id="st3" onclick="toggleSolution('sol3')">Çözümü Göster</button>
<div class="solution-box" id="sol3">
<strong>Doğru Cevap: C) TPS — İşlem İşleme Sistemi</strong><br><br>
<strong>TPS (Transaction Processing System)</strong>, günlük operasyonel işlemleri kaydetmek ve izlemek için kullanılır. POS cihazı her satışı anlık kayıt eder, bordro sistemi maaş hesaplamalarını işler — bunlar rutin, yüksek hacimli işlemlerdir.<br><br>
<strong>MIS</strong> orta yönetim için özet raporlar üretir, <strong>DSS</strong> yarı yapılandırılmış kararları destekler, <strong>ESS</strong> ise üst yönetim panoları sunar. Laudon & Laudon sınıflandırmasına göre TPS en alt operasyonel katmandır.
</div>
</div>

<!-- SORU 4 -->
<div class="quiz-question" id="q4">
<h3>Soru 4 — Sistem Analizi vs Tasarımı</h3>
<p>Aşağıdakilerden hangisi <strong>Sistem Analizi</strong>'nin değil, <strong>Sistem Tasarımı</strong>'nın sorusudur?</p>
<ul class="quiz-options" data-correct="d">
  <li data-val="a">A) Kullanıcıların gerçek ihtiyaçları neler?</li>
  <li data-val="b">B) Mevcut sistemde ne işliyor, ne işlemiyor?</li>
  <li data-val="c">C) Sistemin sınırları (scope) nerede?</li>
  <li data-val="d">D) Bileşenler birbirleriyle nasıl iletişim kuracak?</li>
</ul>
<div class="quiz-feedback" id="fb4"></div>
<button class="solution-toggle" id="st4" onclick="toggleSolution('sol4')">Çözümü Göster</button>
<div class="solution-box" id="sol4">
<strong>Doğru Cevap: D) Bileşenler birbirleriyle nasıl iletişim kuracak?</strong><br><br>
Temel ayrım:<br>
<strong>Sistem Analizi = "Ne yapılmalı?" (What)</strong> → Problem odaklı, kullanıcı perspektifi.<br>
<strong>Sistem Tasarımı = "Nasıl yapılmalı?" (How)</strong> → Çözüm odaklı, geliştirici perspektifi.<br><br>
A, B, C şıkları analiz sorusudur: ihtiyaçları anlamak, mevcut durumu incelemek, kapsamı belirlemek. D şıkkı ise çözümün teknik mimarisine ait bir tasarım sorusudur.
</div>
</div>

<!-- SORU 5 -->
<div class="quiz-question" id="q5">
<h3>Soru 5 — SDLC Aşamaları</h3>
<p>Klasik SDLC'de aşağıdaki sıralama hangisinde <strong>doğru</strong> verilmiştir?</p>
<ul class="quiz-options" data-correct="b">
  <li data-val="a">A) Analiz → Planlama → Tasarım → Test → Geliştirme → Dağıtım → Bakım</li>
  <li data-val="b">B) Planlama → Analiz → Tasarım → Geliştirme → Test → Dağıtım → Bakım</li>
  <li data-val="c">C) Planlama → Tasarım → Analiz → Geliştirme → Dağıtım → Test → Bakım</li>
  <li data-val="d">D) Analiz → Tasarım → Planlama → Test → Geliştirme → Bakım → Dağıtım</li>
</ul>
<div class="quiz-feedback" id="fb5"></div>
<button class="solution-toggle" id="st5" onclick="toggleSolution('sol5')">Çözümü Göster</button>
<div class="solution-box" id="sol5">
<strong>Doğru Cevap: B) Planlama → Analiz → Tasarım → Geliştirme → Test → Dağıtım → Bakım</strong><br><br>
SDLC (Software Development Life Cycle) aşamaları:<br>
1. <strong>Planlama:</strong> Fizibilite, kaynak planı, zaman tahmini<br>
2. <strong>Analiz:</strong> Gereksinim toplama ve belgeleme<br>
3. <strong>Tasarım:</strong> Mimari, veri modeli, arayüz tasarımı<br>
4. <strong>Geliştirme:</strong> Kodlama<br>
5. <strong>Test:</strong> Hata tespiti, doğrulama<br>
6. <strong>Dağıtım:</strong> Canlıya alma<br>
7. <strong>Bakım:</strong> Düzeltme ve güncelleme<br><br>
Önce "ne yapacağız?" (planlama+analiz), sonra "nasıl?" (tasarım), sonra "yapalım" (geliştirme), sonra "doğru mu?" (test).
</div>
</div>

<!-- SORU 6 -->
<div class="quiz-question" id="q6">
<h3>Soru 6 — Hata Maliyeti</h3>
<p>IBM Systems Sciences Institute araştırmasına göre, üretim aşamasında düzeltilen bir hata, gereksinim aşamasında düzeltilenden kaç kat daha maliyetlidir?</p>
<ul class="quiz-options" data-correct="d">
  <li data-val="a">A) 5 kat</li>
  <li data-val="b">B) 10 kat</li>
  <li data-val="c">C) 50 kat</li>
  <li data-val="d">D) 100 kat</li>
</ul>
<div class="quiz-feedback" id="fb6"></div>
<button class="solution-toggle" id="st6" onclick="toggleSolution('sol6')">Çözümü Göster</button>
<div class="solution-box" id="sol6">
<strong>Doğru Cevap: D) 100 kat</strong><br><br>
IBM Systems Sciences Institute araştırmasına göre üretim aşamasında düzeltilen bir hata, gereksinim aşamasında düzeltilenden <strong>100 kat</strong> daha maliyetlidir. Bu bulgu, SDLC'nin ve erken aşama analizin neden bu kadar kritik olduğunun en somut kanıtıdır. Pahalı hataları önlemenin yolu, onları erken aşamalarda tespit etmektir.
</div>
</div>

<!-- SORU 7 -->
<div class="quiz-question" id="q7">
<h3>Soru 7 — UML Tarihi</h3>
<p>"Üç Amigo" olarak bilinen Booch, Rumbaugh ve Jacobson'ın birleştirdiği standart hangisidir?</p>
<ul class="quiz-options" data-correct="a">
  <li data-val="a">A) UML (Unified Modeling Language)</li>
  <li data-val="b">B) SDLC (Software Development Life Cycle)</li>
  <li data-val="c">C) BPMN (Business Process Model and Notation)</li>
  <li data-val="d">D) ERD (Entity Relationship Diagram)</li>
</ul>
<div class="quiz-feedback" id="fb7"></div>
<button class="solution-toggle" id="st7" onclick="toggleSolution('sol7')">Çözümü Göster</button>
<div class="solution-box" id="sol7">
<strong>Doğru Cevap: A) UML</strong><br><br>
1994 yılında <strong>Grady Booch</strong>, <strong>Ivar Jacobson</strong> ve <strong>James Rumbaugh</strong> bir araya gelerek farklı nesne yönelimli notasyonları birleştirdi. Ortaya çıkan <strong>UML (Unified Modeling Language)</strong>, yazılım dünyasına ortak bir modelleme dili kazandırdı.<br><br>
Booch'un sözüyle: <em>"UML bir programlama dili değildir; bir modelleme dilidir. Sistemi farklı perspektiflerden görmeyi sağlayan bir araç kutusudur."</em>
</div>
</div>

<!-- SORU 8 -->
<div class="quiz-question" id="q8">
<h3>Soru 8 — Waterfall Modeli</h3>
<p>Waterfall modelinin en büyük zayıflığı aşağıdakilerden hangisidir?</p>
<ul class="quiz-options" data-correct="c">
  <li data-val="a">A) Yönetmesi ve raporlaması zordur</li>
  <li data-val="b">B) Kilometre taşları belirsizdir</li>
  <li data-val="c">C) Erken gereksinim hatası geç aşamada pahalıya patlar</li>
  <li data-val="d">D) Dokümantasyon üretmez</li>
</ul>
<div class="quiz-feedback" id="fb8"></div>
<button class="solution-toggle" id="st8" onclick="toggleSolution('sol8')">Çözümü Göster</button>
<div class="solution-box" id="sol8">
<strong>Doğru Cevap: C) Erken gereksinim hatası geç aşamada pahalıya patlar</strong><br><br>
Waterfall'ın en büyük kırılganlığı budur. Aşamalar lineer ilerlediği için, analiz aşamasında yapılan bir hata ancak test veya dağıtım aşamasında fark edilir — ve düzeltme maliyeti katlanarak artar.<br><br>
Fred Brooks'un dediği gibi: <em>"A primary source of difficulty is that the customer does not know what he wants."</em> Müşteri başta her şeyi net anlatamıyorsa Waterfall zorlanır.<br><br>
A ve B şıkları Waterfall'ın aksine <strong>güçlü</strong> yönleridir (yönetmesi kolay, milestone'lar net). D şıkkı yanlıştır, Waterfall ağır dokümantasyon üretir.
</div>
</div>

<!-- SORU 9 -->
<div class="quiz-question" id="q9">
<h3>Soru 9 — V-Model</h3>
<p>V-Model'de "Gereksinim Analizi" aşamasının test karşılığı hangisidir?</p>
<ul class="quiz-options" data-correct="b">
  <li data-val="a">A) Birim Testi (Unit Test)</li>
  <li data-val="b">B) Kabul Testi (UAT)</li>
  <li data-val="c">C) Entegrasyon Testi</li>
  <li data-val="d">D) Sistem Testi</li>
</ul>
<div class="quiz-feedback" id="fb9"></div>
<button class="solution-toggle" id="st9" onclick="toggleSolution('sol9')">Çözümü Göster</button>
<div class="solution-box" id="sol9">
<strong>Doğru Cevap: B) Kabul Testi (UAT)</strong><br><br>
V-Model'de her geliştirme adımının bir test karşılığı vardır:<br>
- Gereksinim Analizi ↔ <strong>Kabul Testi (UAT)</strong><br>
- Sistem Tasarımı ↔ Sistem Testi<br>
- Mimari Tasarım ↔ Entegrasyon Testi<br>
- Modül Tasarımı ↔ Birim Testi<br><br>
Mantık şudur: Gereksinimler kullanıcının beklentilerini tanımlar, kabul testi de kullanıcının "evet, istediğim bu" demesini doğrular. V-Model'in en kritik katkısı testi sona bırakmayıp baştan planlamasıdır.
</div>
</div>

<!-- SORU 10 -->
<div class="quiz-question" id="q10">
<h3>Soru 10 — Verification vs Validation</h3>
<p>"Doğru ürünü mü geliştiriyoruz?" sorusu hangi kavrama karşılık gelir?</p>
<ul class="quiz-options" data-correct="a">
  <li data-val="a">A) Validation (Geçerleme)</li>
  <li data-val="b">B) Verification (Doğrulama)</li>
  <li data-val="c">C) Regression Testing</li>
  <li data-val="d">D) Integration Testing</li>
</ul>
<div class="quiz-feedback" id="fb10"></div>
<button class="solution-toggle" id="st10" onclick="toggleSolution('sol10')">Çözümü Göster</button>
<div class="solution-box" id="sol10">
<strong>Doğru Cevap: A) Validation (Geçerleme)</strong><br><br>
Bu iki kavram sıklıkla karıştırılır:<br>
- <strong>Verification:</strong> "Ürünü doğru mu geliştiriyoruz?" → Spesifikasyona uygun mu? Teknik doğruluk.<br>
- <strong>Validation:</strong> "Doğru ürünü mü geliştiriyoruz?" → Kullanıcının gerçek ihtiyacını karşılıyor mu?<br><br>
Kısa formül: Verification = "Build the thing right", Validation = "Build the right thing". V-Model her iki kavramı da güçlendirir.
</div>
</div>

<!-- SORU 11 -->
<div class="quiz-question" id="q11">
<h3>Soru 11 — Prototipleme</h3>
<p>Keşif amacıyla üretilen, ürüne dönüştürülmeyip atılan prototip türü hangisidir?</p>
<ul class="quiz-options" data-correct="c">
  <li data-val="a">A) Evolutionary (Evrimsel) prototip</li>
  <li data-val="b">B) Horizontal prototip</li>
  <li data-val="c">C) Throw-away (Atılabilir) prototip</li>
  <li data-val="d">D) Vertical prototip</li>
</ul>
<div class="quiz-feedback" id="fb11"></div>
<button class="solution-toggle" id="st11" onclick="toggleSolution('sol11')">Çözümü Göster</button>
<div class="solution-box" id="sol11">
<strong>Doğru Cevap: C) Throw-away (Atılabilir) prototip</strong><br><br>
Prototip türleri:<br>
- <strong>Throw-away:</strong> Sadece keşif/anlama amaçlı üretilir, ürün olmaz — atılır.<br>
- <strong>Evolutionary:</strong> Evrilerek gerçek ürüne dönüşür.<br>
- <strong>Horizontal:</strong> Arayüz akışını genişçe gösterir (ekran sayısı çok, derinlik az).<br>
- <strong>Vertical:</strong> Belirli bir özelliği uçtan uca çalıştırır (az ekran, derin işlev).<br><br>
En büyük tuzak: Throw-away prototipin teknik borçla üretilip direkt ürüne çevrilmesidir. Bu kaliteyi gömer.
</div>
</div>

<!-- SORU 12 -->
<div class="quiz-question" id="q12">
<h3>Soru 12 — Agile Manifesto</h3>
<p>Agile Manifesto'nun dört değerinden hangisi <strong>yanlış</strong> verilmiştir?</p>
<ul class="quiz-options" data-correct="d">
  <li data-val="a">A) Bireyler ve etkileşimler, süreç ve araçlardan önce gelir</li>
  <li data-val="b">B) Çalışan yazılım, kapsamlı dokümantasyondan önce gelir</li>
  <li data-val="c">C) Müşteri iş birliği, sözleşme pazarlığından önce gelir</li>
  <li data-val="d">D) Detaylı planlama, değişime yanıt vermekten önce gelir</li>
</ul>
<div class="quiz-feedback" id="fb12"></div>
<button class="solution-toggle" id="st12" onclick="toggleSolution('sol12')">Çözümü Göster</button>
<div class="solution-box" id="sol12">
<strong>Doğru Cevap: D) — Bu yanlıştır</strong><br><br>
Agile Manifesto (2001) tam tersi der: <em>"Responding to change over following a plan"</em> — yani <strong>değişime yanıt vermek</strong>, katı bir planı takip etmekten önce gelir.<br><br>
Dört değer:<br>
1. Bireyler ve etkileşimler > süreç ve araçlar<br>
2. Çalışan yazılım > kapsamlı dokümantasyon<br>
3. Müşteri iş birliği > sözleşme pazarlığı<br>
4. <strong>Değişime yanıt > plana bağlılık</strong><br><br>
Bu "plan yapma" demek değildir; "planı putlaştırma" demektir.
</div>
</div>

<!-- SORU 13 -->
<div class="quiz-question" id="q13">
<h3>Soru 13 — Scrum Rolleri</h3>
<p>Scrum çerçevesinde iş değerini ve önceliği yöneten rol hangisidir?</p>
<ul class="quiz-options" data-correct="a">
  <li data-val="a">A) Product Owner</li>
  <li data-val="b">B) Scrum Master</li>
  <li data-val="c">C) Geliştirme Ekibi</li>
  <li data-val="d">D) Proje Yöneticisi</li>
</ul>
<div class="quiz-feedback" id="fb13"></div>
<button class="solution-toggle" id="st13" onclick="toggleSolution('sol13')">Çözümü Göster</button>
<div class="solution-box" id="sol13">
<strong>Doğru Cevap: A) Product Owner</strong><br><br>
Scrum'daki üç rol:<br>
- <strong>Product Owner:</strong> İş değerini ve önceliği yönetir. Product Backlog'un sahibidir. "Ne yapılacak?" sorusunun cevabını verir.<br>
- <strong>Scrum Master:</strong> Takımın akışını korur, engelleri kaldırır. Süreç koçu rolündedir.<br>
- <strong>Geliştirme Ekibi:</strong> Teslimatı (Increment) üretir.<br><br>
Dikkat: Scrum'da "Proje Yöneticisi" rolü yoktur. Bu sorumluluklar Product Owner ve Scrum Master arasında dağıtılır.
</div>
</div>

<!-- SORU 14 -->
<div class="quiz-question" id="q14">
<h3>Soru 14 — Scrum Artefaktları</h3>
<p>Aşağıdakilerden hangisi bir Scrum artefaktı <strong>değildir</strong>?</p>
<ul class="quiz-options" data-correct="d">
  <li data-val="a">A) Product Backlog</li>
  <li data-val="b">B) Sprint Backlog</li>
  <li data-val="c">C) Increment</li>
  <li data-val="d">D) Kanban Board</li>
</ul>
<div class="quiz-feedback" id="fb14"></div>
<button class="solution-toggle" id="st14" onclick="toggleSolution('sol14')">Çözümü Göster</button>
<div class="solution-box" id="sol14">
<strong>Doğru Cevap: D) Kanban Board</strong><br><br>
Scrum'ın üç artefaktı:<br>
1. <strong>Product Backlog:</strong> Tüm yapılacak işlerin önceliklendirilmiş listesi.<br>
2. <strong>Sprint Backlog:</strong> Mevcut sprint için seçilmiş işler + bunları tamamlama planı.<br>
3. <strong>Increment:</strong> Sprint sonunda ortaya çıkan çalışan, teslim edilebilir ürün parçası.<br><br>
Kanban Board ise Kanban metodolojisine ait bir araçtır. Scrum takımları da görsel pano kullanabilir, ama bu resmi bir Scrum artefaktı değildir.
</div>
</div>

<!-- SORU 15 -->
<div class="quiz-question" id="q15">
<h3>Soru 15 — Kanban Prensipleri</h3>
<p>"Stop starting, start finishing" ilkesi hangi yaklaşıma aittir ve ne anlama gelir?</p>
<ul class="quiz-options" data-correct="b">
  <li data-val="a">A) Scrum — Sprint sonunda tamamlanmamış işi iptal et</li>
  <li data-val="b">B) Kanban — Yeni iş başlatma yerine mevcut işi bitirmeye odaklan</li>
  <li data-val="c">C) Waterfall — Bir aşama bitmeden diğerine geçme</li>
  <li data-val="d">D) Prototipleme — Prototipi erken at, yenisine başla</li>
</ul>
<div class="quiz-feedback" id="fb15"></div>
<button class="solution-toggle" id="st15" onclick="toggleSolution('sol15')">Çözümü Göster</button>
<div class="solution-box" id="sol15">
<strong>Doğru Cevap: B) Kanban</strong><br><br>
"Stop starting, start finishing" Kanban topluluklarının temel ilkesidir. Bu ilke üretkenlik yanılsamasını kırar: <strong>çok işe başlamak değil, işi bitirmek değer üretir</strong>.<br><br>
Kanban'ın ana prensipleri:<br>
1. İşi görselleştir<br>
2. WIP (eşzamanlı iş) limiti koy<br>
3. Akışı ölç<br>
4. Sürekli iyileştir<br><br>
WIP limiti, aynı anda çok iş başlamamayı zorlar ve bu ilkeyi uygulamaya koyar.
</div>
</div>

<!-- SORU 16 -->
<div class="quiz-question" id="q16">
<h3>Soru 16 — Scrum vs Kanban</h3>
<p>Aşağıdakilerden hangisi Scrum ile Kanban arasındaki doğru bir farktır?</p>
<ul class="quiz-options" data-correct="c">
  <li data-val="a">A) Scrum sürekli akış kullanır, Kanban sabit periyot kullanır</li>
  <li data-val="b">B) Kanban'da Product Owner zorunludur</li>
  <li data-val="c">C) Scrum sabit periyotlu Sprint kullanır, Kanban sürekli akış kullanır</li>
  <li data-val="d">D) Scrum'da WIP limiti zorunludur, Kanban'da yoktur</li>
</ul>
<div class="quiz-feedback" id="fb16"></div>
<button class="solution-toggle" id="st16" onclick="toggleSolution('sol16')">Çözümü Göster</button>
<div class="solution-box" id="sol16">
<strong>Doğru Cevap: C)</strong><br><br>
Temel farklar:<br>
- <strong>Scrum:</strong> Sabit periyotlu Sprint (genellikle 1-4 hafta), Sprint başında yoğun planlama.<br>
- <strong>Kanban:</strong> Sürekli akış, Sprint kavramı yok, sürekli öncelik güncelleme.<br><br>
A şıkkı tam tersidir. B şıkkı yanlış — Product Owner Scrum'a özgüdür, Kanban'da zorunlu değildir. D şıkkı yanlış — WIP limiti Kanban'ın temel prensibidir, Scrum'da böyle bir zorunluluk yoktur.
</div>
</div>

<!-- SORU 17 -->
<div class="quiz-question" id="q17">
<h3>Soru 17 — Git Temel Akış</h3>
<p>Git'te dosyaları commit'lemeden önce geçirmeniz gereken alan hangisidir?</p>
<ul class="quiz-options" data-correct="b">
  <li data-val="a">A) Remote Repository</li>
  <li data-val="b">B) Staging Area (git add)</li>
  <li data-val="c">C) GitHub Pages</li>
  <li data-val="d">D) Working Directory</li>
</ul>
<div class="quiz-feedback" id="fb17"></div>
<button class="solution-toggle" id="st17" onclick="toggleSolution('sol17')">Çözümü Göster</button>
<div class="solution-box" id="sol17">
<strong>Doğru Cevap: B) Staging Area (git add)</strong><br><br>
Git'te temel akış:<br>
1. <strong>Working Directory:</strong> Dosyalarınızı düzenlediğiniz çalışma alanı.<br>
2. <strong>Staging Area:</strong> <code>git add</code> ile dosyaları commit'e hazırladığınız ara alan.<br>
3. <strong>Local Repository:</strong> <code>git commit</code> ile değişikliklerin kalıcı olarak kaydedildiği yer.<br>
4. <strong>Remote Repository:</strong> <code>git push</code> ile GitHub'a gönderilen uzak depo.<br><br>
Staging Area, hangi değişiklikleri commit'e dahil edeceğinizi seçmenizi sağlar — bu Git'in en güçlü özelliklerinden biridir.
</div>
</div>

<!-- SORU 18 -->
<div class="quiz-question" id="q18">
<h3>Soru 18 — Git ve Sistem Analizi İlişkisi</h3>
<p>Git + GitHub'ın Sistem Analizi perspektifinden sağladığı en önemli üç fayda hangisidir?</p>
<ul class="quiz-options" data-correct="a">
  <li data-val="a">A) İzlenebilirlik, Sorumluluk, Geri Alınabilirlik</li>
  <li data-val="b">B) Hız, Maliyet Düşürme, Otomatik Test</li>
  <li data-val="c">C) Veritabanı Yedekleme, Sunucu Yönetimi, Dağıtım</li>
  <li data-val="d">D) Kod Derleme, Hata Ayıklama, Profilleme</li>
</ul>
<div class="quiz-feedback" id="fb18"></div>
<button class="solution-toggle" id="st18" onclick="toggleSolution('sol18')">Çözümü Göster</button>
<div class="solution-box" id="sol18">
<strong>Doğru Cevap: A) İzlenebilirlik, Sorumluluk, Geri Alınabilirlik</strong><br><br>
Sistem analizi perspektifinden Git'in değeri:<br>
- <strong>İzlenebilirlik (Traceability):</strong> Hangi gereksinim ne zaman eklendi? Commit geçmişi bunu gösterir.<br>
- <strong>Sorumluluk (Accountability):</strong> Hangi değişikliği kim yaptı? Her commit'in sahibi bellidir.<br>
- <strong>Geri Alınabilirlik (Rollback):</strong> Hatalı bir noktadan güvenli dönüş mümkündür.<br><br>
Git sadece kod saklama aracı değil; Sistem Analizi dersinde <strong>kanıt üretme mekanizmasıdır</strong>.
</div>
</div>

<!-- SORU 19 -->
<div class="quiz-question" id="q19">
<h3>Soru 19 — Kapsam Yönetimi</h3>
<p>Proje teklif raporunda "Kapsam" bölümünün iki temel parçası nedir?</p>
<ul class="quiz-options" data-correct="d">
  <li data-val="a">A) Güçlü Yönler ve Zayıf Yönler</li>
  <li data-val="b">B) Problem Tanımı ve Çözüm Önerisi</li>
  <li data-val="c">C) Fonksiyonel Gereksinimler ve Performans Gereksinimleri</li>
  <li data-val="d">D) Kapsam Dahili (In-Scope) ve Kapsam Harici (Out-of-Scope)</li>
</ul>
<div class="quiz-feedback" id="fb19"></div>
<button class="solution-toggle" id="st19" onclick="toggleSolution('sol19')">Çözümü Göster</button>
<div class="solution-box" id="sol19">
<strong>Doğru Cevap: D) Kapsam Dahili (In-Scope) ve Kapsam Harici (Out-of-Scope)</strong><br><br>
Kapsam bölümü iki parçalı yazılmalıdır:<br>
- <strong>Kapsam Dahili (In-Scope):</strong> Bu dönem kesin yapılacak özellikler.<br>
- <strong>Kapsam Harici (Out-of-Scope):</strong> Bilinçli şekilde ertelenen veya yapılmayacak kısımlar.<br><br>
Bu ayrımı yazmayan projeler dönem ortasında kontrol kaybı yaşar. "Scope creep" (kapsam kayması) yazılım projelerinin en yaygın başarısızlık nedenlerinden biridir. Neyi <strong>yapmayacağınızı</strong> tanımlamak, neyi yapacağınızı tanımlamak kadar önemlidir.
</div>
</div>

<!-- SORU 20 -->
<div class="quiz-question" id="q20">
<h3>Soru 20 — Model Seçimi</h3>
<p>Gereksinimleri başlangıçta belirsiz, kullanıcı geri bildirimi önemli ve dönem içinde çalışan sürüm istenen bir üniversite projesi için en uygun yaklaşım hangisidir?</p>
<ul class="quiz-options" data-correct="c">
  <li data-val="a">A) Saf Waterfall modeli</li>
  <li data-val="b">B) V-Model ile katı test planlaması</li>
  <li data-val="c">C) Horizontal prototip → Scrum sprintleri → Kanban panosu (hibrit)</li>
  <li data-val="d">D) Dokümantasyon odaklı Big Design Up Front</li>
</ul>
<div class="quiz-feedback" id="fb20"></div>
<button class="solution-toggle" id="st20" onclick="toggleSolution('sol20')">Çözümü Göster</button>
<div class="solution-box" id="sol20">
<strong>Doğru Cevap: C) Hibrit yaklaşım</strong><br><br>
Derste verilen "Üniversite Kulüp Etkinlik Sistemi" vaka çalışmasında bu analiz yapılmıştı:<br>
- Gereksinimler kısmen belirsiz → <strong>Başlangıçta horizontal prototip</strong> (ekran akışını göster, geri bildirim al)<br>
- Kullanıcı geri bildirimi önemli → <strong>Scrum ile 2 haftalık sprintler</strong> (iteratif teslimat)<br>
- Destek talepleri için → <strong>Kanban panosu</strong><br><br>
Bu hibrit yaklaşım hem keşif, hem teslimat, hem bakım dengesini kurar. Model seçimi teknik bir tercih değil; <strong>risk, insan, zaman ve değer yönetimi kararıdır</strong>.<br><br>
A ve D şıkları belirsiz gereksinimlere uygun değildir. B şıkkı regülasyonun yoğun olduğu projelere uygundur.
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
(function() {
  var answered = 0;
  var correct = 0;
  var total = 20;

  document.querySelectorAll('.quiz-options').forEach(function(ul) {
    var items = ul.querySelectorAll('li');
    var correctVal = ul.getAttribute('data-correct');
    var qDiv = ul.closest('.quiz-question');
    var qId = qDiv.id;
    var num = qId.replace('q', '');

    items.forEach(function(li) {
      li.addEventListener('click', function() {
        if (ul.classList.contains('answered')) return;
        ul.classList.add('answered');
        answered++;

        var chosen = li.getAttribute('data-val');
        var fb = document.getElementById('fb' + num);
        var st = document.getElementById('st' + num);

        items.forEach(function(item) {
          item.classList.add('disabled');
          if (item.getAttribute('data-val') === correctVal) {
            item.classList.add('correct');
          }
        });

        if (chosen === correctVal) {
          correct++;
          li.classList.add('correct');
          fb.textContent = '✅ Doğru!';
          fb.className = 'quiz-feedback show correct-fb';
        } else {
          li.classList.add('wrong');
          fb.textContent = '❌ Yanlış! Doğru cevap: ' + correctVal.toUpperCase();
          fb.className = 'quiz-feedback show wrong-fb';
        }

        st.style.display = 'inline-block';
        document.getElementById('progressBar').textContent = 'Yanıtlanan: ' + answered + ' / ' + total;

        if (answered === total) {
          var sc = document.getElementById('scoreCard');
          sc.style.display = 'block';
          document.getElementById('scoreNum').textContent = correct + ' / ' + total;
          var pct = Math.round((correct / total) * 100);
          var msg = '';
          if (pct >= 90) msg = '🌟 Mükemmel! Vizeye hazırsın!';
          else if (pct >= 70) msg = '👏 İyi! Birkaç konuyu tekrar et.';
          else if (pct >= 50) msg = '📚 Orta. Ders notlarını gözden geçir.';
          else msg = '⚠️ Daha çok çalışman gerekiyor. Ders notlarına dön!';
          document.getElementById('scoreMsg').textContent = pct + '% — ' + msg;
          sc.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  });

  window.toggleSolution = function(id) {
    var box = document.getElementById(id);
    box.style.display = box.style.display === 'block' ? 'none' : 'block';
  };
})();
</script>

{% endraw %}
