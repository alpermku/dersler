---
layout: post
title: "Vize Hazırlık Sınavı: 20 Soruluk İnteraktif Test"
date: 2026-03-06 12:00:00 +0300
categories: veri-tabani-yonetim-sistemleri-ii
course_id: veri-tabani-yonetim-sistemleri-ii
tags: [sql, mysql, sınav, vize, test, çoktan-seçmeli]
---

{% raw %}

Bu interaktif test, Veri Tabanı Yönetim Sistemleri II dersinde şimdiye kadar işlenen tüm konuları kapsamaktadır. Her soruyu yanıtladıktan sonra doğru/yanlış geri bildirim alacak, "Çözümü Göster" butonuyla detaylı açıklamayı görebileceksiniz.

**Kapsanan Konular:** Metin Fonksiyonları (CONCAT, SUBSTRING, LEFT, RIGHT, UPPER, LOWER, TRIM, LENGTH, REPLACE, INSTR, REVERSE), Matematik Fonksiyonları (ABS, CEIL, FLOOR, ROUND, POWER, SQRT, MOD), Toplama Fonksiyonları (SUM, AVG, COUNT, MAX, MIN), Tarih/Saat Fonksiyonları (CURDATE, EXTRACT, DATEDIFF, DATE_ADD, DATE_SUB), Tip Dönüşümü (CAST, CONVERT).

---

<style>
.quiz-container { max-width: 800px; margin: 0 auto; font-family: inherit; }
.quiz-question {
  background: #f8f9fa; border: 1px solid #dee2e6; border-radius: 10px;
  padding: 20px; margin-bottom: 24px; position: relative;
}
.quiz-question h3 { margin-top: 0; color: #2c3e50; font-size: 1.05em; }
.quiz-question pre { background: #1e1e2e; color: #cdd6f4; padding: 12px; border-radius: 6px; overflow-x: auto; }
.quiz-question code { font-size: 0.92em; }
.quiz-options { list-style: none; padding: 0; margin: 12px 0; }
.quiz-options li {
  padding: 10px 14px; margin: 6px 0; border: 2px solid #dee2e6;
  border-radius: 8px; cursor: pointer; transition: all 0.2s;
  background: #fff;
}
.quiz-options li:hover { border-color: #6c5ce7; background: #f0edff; }
.quiz-options li.selected { border-color: #6c5ce7; background: #ede9ff; font-weight: 600; }
.quiz-options li.correct { border-color: #00b894; background: #d4fce8; }
.quiz-options li.wrong { border-color: #e74c3c; background: #fde8e8; }
.quiz-options li.disabled { pointer-events: none; opacity: 0.85; }
.quiz-feedback {
  margin-top: 12px; padding: 10px 14px; border-radius: 8px;
  font-weight: 600; display: none;
}
.quiz-feedback.show { display: block; }
.quiz-feedback.correct-fb { background: #d4fce8; color: #00754a; }
.quiz-feedback.wrong-fb { background: #fde8e8; color: #c0392b; }
.solution-toggle {
  margin-top: 10px; background: #6c5ce7; color: #fff; border: none;
  padding: 8px 18px; border-radius: 6px; cursor: pointer; font-size: 0.9em;
  display: none;
}
.solution-toggle:hover { background: #5a4bd1; }
.solution-box {
  display: none; margin-top: 12px; padding: 14px; background: #eef1ff;
  border-left: 4px solid #6c5ce7; border-radius: 6px; line-height: 1.6;
}
.solution-box pre { background: #1e1e2e; color: #cdd6f4; padding: 10px; border-radius: 6px; }
.quiz-score {
  text-align: center; padding: 24px; background: linear-gradient(135deg, #6c5ce7, #a29bfe);
  color: #fff; border-radius: 12px; margin-top: 30px; display: none;
}
.quiz-score h2 { margin: 0 0 8px; }
.quiz-score .score-num { font-size: 2.4em; font-weight: 800; }
.quiz-progress { text-align: center; margin-bottom: 20px; font-size: 0.95em; color: #636e72; }
</style>

<div class="quiz-container" id="quizApp">
<div class="quiz-progress" id="progressBar">Yanıtlanan: 0 / 20</div>

<!-- SORU 1 -->
<div class="quiz-question" id="q1">
<h3>Soru 1 — CONCAT ve NULL</h3>
<p>Aşağıdaki sorgunun sonucu nedir?</p>
<pre><code>SELECT CONCAT('Merhaba', NULL, ' Dünya');</code></pre>
<ul class="quiz-options" data-correct="c">
  <li data-val="a">A) Merhaba Dünya</li>
  <li data-val="b">B) Merhaba NULL Dünya</li>
  <li data-val="c">C) NULL</li>
  <li data-val="d">D) Hata verir</li>
</ul>
<div class="quiz-feedback" id="fb1"></div>
<button class="solution-toggle" id="st1" onclick="toggleSolution('sol1')">Çözümü Göster</button>
<div class="solution-box" id="sol1">
<strong>Doğru Cevap: C) NULL</strong><br><br>
<code>CONCAT</code> fonksiyonunda parametrelerden herhangi biri <code>NULL</code> ise, tüm sonuç <code>NULL</code> olur. Bu, CONCAT'in en önemli tuzağıdır. NULL güvenli birleştirme yapmak istiyorsanız <code>CONCAT_WS</code> kullanmalısınız; çünkü <code>CONCAT_WS</code> NULL değerleri otomatik olarak atlar.
</div>
</div>

<!-- SORU 2 -->
<div class="quiz-question" id="q2">
<h3>Soru 2 — CONCAT_WS</h3>
<p>Aşağıdaki sorgunun çıktısı nedir?</p>
<pre><code>SELECT CONCAT_WS('-', 'SQL', NULL, 'Dersi');</code></pre>
<ul class="quiz-options" data-correct="b">
  <li data-val="a">A) SQL-NULL-Dersi</li>
  <li data-val="b">B) SQL-Dersi</li>
  <li data-val="c">C) NULL</li>
  <li data-val="d">D) SQL--Dersi</li>
</ul>
<div class="quiz-feedback" id="fb2"></div>
<button class="solution-toggle" id="st2" onclick="toggleSolution('sol2')">Çözümü Göster</button>
<div class="solution-box" id="sol2">
<strong>Doğru Cevap: B) SQL-Dersi</strong><br><br>
<code>CONCAT_WS</code> (Concatenate With Separator) fonksiyonunun en büyük avantajı NULL güvenli olmasıdır. NULL olan parametreleri tamamen atlar, ayraç da koymaz. Dolayısıyla sadece 'SQL' ve 'Dersi' değerleri '-' ayracıyla birleştirilir.
</div>
</div>

<!-- SORU 3 -->
<div class="quiz-question" id="q3">
<h3>Soru 3 — SUBSTRING</h3>
<p>Aşağıdaki sorgunun sonucu nedir?</p>
<pre><code>SELECT SUBSTRING('VeriTabani', 5);</code></pre>
<ul class="quiz-options" data-correct="a">
  <li data-val="a">A) Tabani</li>
  <li data-val="b">B) TabanI</li>
  <li data-val="c">C) inabaT</li>
  <li data-val="d">D) Taban</li>
</ul>
<div class="quiz-feedback" id="fb3"></div>
<button class="solution-toggle" id="st3" onclick="toggleSolution('sol3')">Çözümü Göster</button>
<div class="solution-box" id="sol3">
<strong>Doğru Cevap: A) Tabani</strong><br><br>
<code>SUBSTRING(metin, baslangic)</code> — uzunluk verilmezse başlangıç pozisyonundan sonuna kadar alır. SQL'de indeksler 1'den başlar: V(1) e(2) r(3) i(4) <strong>T(5)</strong> a(6) b(7) a(8) n(9) i(10). 5. karakterden sona kadar = 'Tabani'.
</div>
</div>

<!-- SORU 4 -->
<div class="quiz-question" id="q4">
<h3>Soru 4 — LEFT ve RIGHT</h3>
<p>Aşağıdaki sorgunun sonucu nedir?</p>
<pre><code>SELECT CONCAT(LEFT('ABC-1234', 3), RIGHT('ABC-1234', 4));</code></pre>
<ul class="quiz-options" data-correct="d">
  <li data-val="a">A) ABC-ABC</li>
  <li data-val="b">B) ABC-1234</li>
  <li data-val="c">C) ABC-123</li>
  <li data-val="d">D) ABC1234</li>
</ul>
<div class="quiz-feedback" id="fb4"></div>
<button class="solution-toggle" id="st4" onclick="toggleSolution('sol4')">Çözümü Göster</button>
<div class="solution-box" id="sol4">
<strong>Doğru Cevap: D) ABC1234</strong><br><br>
<code>LEFT('ABC-1234', 3)</code> → 'ABC' (soldan 3 karakter).<br>
<code>RIGHT('ABC-1234', 4)</code> → '1234' (sağdan 4 karakter).<br>
<code>CONCAT('ABC', '1234')</code> → 'ABC1234'. Tire (-) karakteri ne LEFT ne RIGHT tarafından alınmıştır.
</div>
</div>

<!-- SORU 5 -->
<div class="quiz-question" id="q5">
<h3>Soru 5 — TRIM Gelişmiş Kullanımı</h3>
<p>Aşağıdaki sorgunun sonucu nedir?</p>
<pre><code>SELECT TRIM(LEADING '0' FROM '000123');</code></pre>
<ul class="quiz-options" data-correct="b">
  <li data-val="a">A) 000123</li>
  <li data-val="b">B) 123</li>
  <li data-val="c">C) 00012</li>
  <li data-val="d">D) 23</li>
</ul>
<div class="quiz-feedback" id="fb5"></div>
<button class="solution-toggle" id="st5" onclick="toggleSolution('sol5')">Çözümü Göster</button>
<div class="solution-box" id="sol5">
<strong>Doğru Cevap: B) 123</strong><br><br>
<code>TRIM(LEADING '0' FROM '000123')</code> — metnin <strong>başındaki</strong> (LEADING) tüm '0' karakterlerini siler. Baştaki üç sıfır kaldırılır, geriye '123' kalır. TRAILING olsaydı sondan silerdi, BOTH olsaydı her iki taraftan silerdi.
</div>
</div>

<!-- SORU 6 -->
<div class="quiz-question" id="q6">
<h3>Soru 6 — LENGTH ve REPLACE</h3>
<p>Aşağıdaki sorgunun sonucu nedir?</p>
<pre><code>SELECT LENGTH(REPLACE('A B C D', ' ', ''));</code></pre>
<ul class="quiz-options" data-correct="c">
  <li data-val="a">A) 7</li>
  <li data-val="b">B) 3</li>
  <li data-val="c">C) 4</li>
  <li data-val="d">D) 0</li>
</ul>
<div class="quiz-feedback" id="fb6"></div>
<button class="solution-toggle" id="st6" onclick="toggleSolution('sol6')">Çözümü Göster</button>
<div class="solution-box" id="sol6">
<strong>Doğru Cevap: C) 4</strong><br><br>
Adım adım çözelim:<br>
1. <code>REPLACE('A B C D', ' ', '')</code> → Tüm boşlukları siler → 'ABCD'<br>
2. <code>LENGTH('ABCD')</code> → 4 karakter<br>
Orijinal metinde 3 boşluk vardı (7 - 3 = 4).
</div>
</div>

<!-- SORU 7 -->
<div class="quiz-question" id="q7">
<h3>Soru 7 — INSTR</h3>
<p><code>INSTR('veritabani@mail.com', '@')</code> sorgusu ne döndürür?</p>
<ul class="quiz-options" data-correct="b">
  <li data-val="a">A) 0</li>
  <li data-val="b">B) 11</li>
  <li data-val="c">C) 10</li>
  <li data-val="d">D) 12</li>
</ul>
<div class="quiz-feedback" id="fb7"></div>
<button class="solution-toggle" id="st7" onclick="toggleSolution('sol7')">Çözümü Göster</button>
<div class="solution-box" id="sol7">
<strong>Doğru Cevap: B) 11</strong><br><br>
Karakterleri sayalım: v(1) e(2) r(3) i(4) t(5) a(6) b(7) a(8) n(9) i(10) <strong>@(11)</strong>. '@' karakteri 11. pozisyondadır. SQL'de indeksler 1'den başlar!
</div>
</div>

<!-- SORU 8 -->
<div class="quiz-question" id="q8">
<h3>Soru 8 — UPPER ve LOWER</h3>
<p>Aşağıdaki sorgunun sonucu nedir?</p>
<pre><code>SELECT CONCAT(UPPER('sql'), ' ', LOWER('DERSİ'));</code></pre>
<ul class="quiz-options" data-correct="a">
  <li data-val="a">A) SQL dersi</li>
  <li data-val="b">B) sql DERSİ</li>
  <li data-val="c">C) SQL DERSİ</li>
  <li data-val="d">D) sql dersi</li>
</ul>
<div class="quiz-feedback" id="fb8"></div>
<button class="solution-toggle" id="st8" onclick="toggleSolution('sol8')">Çözümü Göster</button>
<div class="solution-box" id="sol8">
<strong>Doğru Cevap: A) SQL dersi</strong><br><br>
<code>UPPER('sql')</code> → 'SQL' (tüm harfler büyütülür).<br>
<code>LOWER('DERSİ')</code> → 'dersi' (tüm harfler küçültülür).<br>
<code>CONCAT('SQL', ' ', 'dersi')</code> → 'SQL dersi'.
</div>
</div>

<!-- SORU 9 -->
<div class="quiz-question" id="q9">
<h3>Soru 9 — REVERSE</h3>
<p>Aşağıdaki ifadelerden hangisi palindrom kontrolü yapar?</p>
<ul class="quiz-options" data-correct="c">
  <li data-val="a">A) <code>SELECT ad FROM t WHERE REVERSE(ad) != ad;</code></li>
  <li data-val="b">B) <code>SELECT ad FROM t WHERE LENGTH(ad) = LENGTH(REVERSE(ad));</code></li>
  <li data-val="c">C) <code>SELECT ad FROM t WHERE ad = REVERSE(ad);</code></li>
  <li data-val="d">D) <code>SELECT ad FROM t WHERE INSTR(ad, REVERSE(ad)) > 0;</code></li>
</ul>
<div class="quiz-feedback" id="fb9"></div>
<button class="solution-toggle" id="st9" onclick="toggleSolution('sol9')">Çözümü Göster</button>
<div class="solution-box" id="sol9">
<strong>Doğru Cevap: C)</strong><br><br>
Palindrom, tersten okunduğunda da aynı olan kelimedir (örn: "kayak", "ece"). <code>ad = REVERSE(ad)</code> ifadesi, kelimenin ters çevrilmiş haliyle orijinalini karşılaştırır. Eşitse palindromdur.<br><br>
A şıkkı eşit <strong>olmayan</strong>ları bulur (!=). B şıkkı her zaman doğrudur çünkü ters çevirme uzunluğu değiştirmez. D şıkkı farklı bir mantıktır.
</div>
</div>

<!-- SORU 10 -->
<div class="quiz-question" id="q10">
<h3>Soru 10 — ABS ve SUM</h3>
<p>Aşağıdaki tabloda:</p>
<pre><code>| id | miktar |
|----|--------|
| 1  | 500    |
| 2  | -300   |
| 3  | -200   |</code></pre>
<p><code>SELECT SUM(ABS(miktar)) FROM islemler;</code> sonucu nedir?</p>
<ul class="quiz-options" data-correct="d">
  <li data-val="a">A) 0</li>
  <li data-val="b">B) 500</li>
  <li data-val="c">C) -1000</li>
  <li data-val="d">D) 1000</li>
</ul>
<div class="quiz-feedback" id="fb10"></div>
<button class="solution-toggle" id="st10" onclick="toggleSolution('sol10')">Çözümü Göster</button>
<div class="solution-box" id="sol10">
<strong>Doğru Cevap: D) 1000</strong><br><br>
<code>ABS</code> her değerin mutlak değerini alır:<br>
ABS(500) = 500, ABS(-300) = 300, ABS(-200) = 200<br>
<code>SUM(500, 300, 200)</code> = <strong>1000</strong><br><br>
ABS olmadan <code>SUM(miktar)</code> = 500 + (-300) + (-200) = 0 olurdu. ABS ile toplam işlem hacmini, ABS'siz net bakiyeyi hesaplarsınız.
</div>
</div>

<!-- SORU 11 -->
<div class="quiz-question" id="q11">
<h3>Soru 11 — CEIL ve FLOOR</h3>
<p>Aşağıdaki sorguların sonuçları sırasıyla nedir?</p>
<pre><code>SELECT CEIL(-3.2), FLOOR(-3.2);</code></pre>
<ul class="quiz-options" data-correct="b">
  <li data-val="a">A) -4, -3</li>
  <li data-val="b">B) -3, -4</li>
  <li data-val="c">C) -3, -3</li>
  <li data-val="d">D) -4, -4</li>
</ul>
<div class="quiz-feedback" id="fb11"></div>
<button class="solution-toggle" id="st11" onclick="toggleSolution('sol11')">Çözümü Göster</button>
<div class="solution-box" id="sol11">
<strong>Doğru Cevap: B) -3, -4</strong><br><br>
<code>CEIL</code> (tavan) her zaman <strong>yukarıya</strong> yuvarlar: -3.2 → -3 (sayı doğrusunda -3, -3.2'nin sağında/yukarısındadır).<br>
<code>FLOOR</code> (taban) her zaman <strong>aşağıya</strong> yuvarlar: -3.2 → -4 (sayı doğrusunda -4, -3.2'nin solunda/aşağısındadır).<br><br>
Negatif sayılarda yuvarlama yönü sıklıkla karıştırılır. Asansör benzetmesini hatırlayın: CEIL üst kata, FLOOR alt kata götürür.
</div>
</div>

<!-- SORU 12 -->
<div class="quiz-question" id="q12">
<h3>Soru 12 — ROUND</h3>
<p>Aşağıdaki sorgunun sonucu nedir?</p>
<pre><code>SELECT ROUND(1876.54, -2);</code></pre>
<ul class="quiz-options" data-correct="c">
  <li data-val="a">A) 1876.54</li>
  <li data-val="b">B) 1877</li>
  <li data-val="c">C) 1900</li>
  <li data-val="d">D) 1800</li>
</ul>
<div class="quiz-feedback" id="fb12"></div>
<button class="solution-toggle" id="st12" onclick="toggleSolution('sol12')">Çözümü Göster</button>
<div class="solution-box" id="sol12">
<strong>Doğru Cevap: C) 1900</strong><br><br>
<code>ROUND(sayi, -2)</code> — negatif ikinci parametre, <strong>yüzler basamağına</strong> yuvarlar. 1876.54'ün yüzler basamağı 8'dir. Onlar basamağı 7 ≥ 5 olduğundan yukarı yuvarlanır: 1876 → <strong>1900</strong>.
</div>
</div>

<!-- SORU 13 -->
<div class="quiz-question" id="q13">
<h3>Soru 13 — POWER ve SQRT</h3>
<p>Aşağıdaki sorgunun sonucu nedir?</p>
<pre><code>SELECT SQRT(POWER(3, 4));</code></pre>
<ul class="quiz-options" data-correct="a">
  <li data-val="a">A) 9</li>
  <li data-val="b">B) 81</li>
  <li data-val="c">C) 12</li>
  <li data-val="d">D) 27</li>
</ul>
<div class="quiz-feedback" id="fb13"></div>
<button class="solution-toggle" id="st13" onclick="toggleSolution('sol13')">Çözümü Göster</button>
<div class="solution-box" id="sol13">
<strong>Doğru Cevap: A) 9</strong><br><br>
Adım adım:<br>
1. <code>POWER(3, 4)</code> = 3⁴ = 81<br>
2. <code>SQRT(81)</code> = √81 = <strong>9</strong><br><br>
Matematiksel olarak: √(3⁴) = 3² = 9. Karekök, üssü yarıya indirir.
</div>
</div>

<!-- SORU 14 -->
<div class="quiz-question" id="q14">
<h3>Soru 14 — MOD</h3>
<p>Bir tablodaki çift ID'li kayıtları getirmek için hangi WHERE koşulu kullanılır?</p>
<ul class="quiz-options" data-correct="b">
  <li data-val="a">A) <code>WHERE MOD(id, 2) = 1</code></li>
  <li data-val="b">B) <code>WHERE MOD(id, 2) = 0</code></li>
  <li data-val="c">C) <code>WHERE MOD(id, 2) > 0</code></li>
  <li data-val="d">D) <code>WHERE MOD(2, id) = 0</code></li>
</ul>
<div class="quiz-feedback" id="fb14"></div>
<button class="solution-toggle" id="st14" onclick="toggleSolution('sol14')">Çözümü Göster</button>
<div class="solution-box" id="sol14">
<strong>Doğru Cevap: B) WHERE MOD(id, 2) = 0</strong><br><br>
<code>MOD(id, 2)</code> — id'nin 2'ye bölümünden kalanı verir. Çift sayılar 2'ye tam bölünür, yani kalan 0'dır. Tek sayılar için kalan 1 olur. Bu nedenle <code>MOD(id, 2) = 0</code> çift sayıları filtreler.<br><br>
A şıkkı tek sayıları, C şıkkı da tek sayıları (kalan > 0) getirir. D şıkkı parametre sırasını karıştırmıştır.
</div>
</div>

<!-- SORU 15 -->
<div class="quiz-question" id="q15">
<h3>Soru 15 — COUNT ve NULL</h3>
<p>Aşağıdaki tabloda:</p>
<pre><code>| id | email          |
|----|----------------|
| 1  | a@mail.com     |
| 2  | NULL           |
| 3  | b@mail.com     |
| 4  | NULL           |</code></pre>
<p><code>COUNT(*)</code> ve <code>COUNT(email)</code> sonuçları sırasıyla nedir?</p>
<ul class="quiz-options" data-correct="c">
  <li data-val="a">A) 4 ve 4</li>
  <li data-val="b">B) 2 ve 2</li>
  <li data-val="c">C) 4 ve 2</li>
  <li data-val="d">D) 2 ve 4</li>
</ul>
<div class="quiz-feedback" id="fb15"></div>
<button class="solution-toggle" id="st15" onclick="toggleSolution('sol15')">Çözümü Göster</button>
<div class="solution-box" id="sol15">
<strong>Doğru Cevap: C) 4 ve 2</strong><br><br>
<code>COUNT(*)</code> — tüm satırları sayar, NULL olup olmadığına bakmaz → <strong>4</strong>.<br>
<code>COUNT(email)</code> — sadece email sütununda NULL <strong>olmayan</strong> değerleri sayar → <strong>2</strong> (id 1 ve 3).<br><br>
Bu fark sınavlarda en çok sorulan konulardan biridir. <code>COUNT(*)</code> satır sayar, <code>COUNT(sütun)</code> dolu değer sayar.
</div>
</div>

<!-- SORU 16 -->
<div class="quiz-question" id="q16">
<h3>Soru 16 — AVG ve NULL Davranışı</h3>
<p>Aşağıdaki tabloda:</p>
<pre><code>| id | not |
|----|-----|
| 1  | 80  |
| 2  | NULL|
| 3  | 60  |</code></pre>
<p><code>SELECT AVG(not_degeri) FROM notlar;</code> sonucu nedir?</p>
<ul class="quiz-options" data-correct="d">
  <li data-val="a">A) 46.67</li>
  <li data-val="b">B) 140</li>
  <li data-val="c">C) NULL</li>
  <li data-val="d">D) 70</li>
</ul>
<div class="quiz-feedback" id="fb16"></div>
<button class="solution-toggle" id="st16" onclick="toggleSolution('sol16')">Çözümü Göster</button>
<div class="solution-box" id="sol16">
<strong>Doğru Cevap: D) 70</strong><br><br>
<code>AVG</code> fonksiyonu NULL değerleri <strong>atlar</strong>. Yani:<br>
Toplam = 80 + 60 = 140<br>
Bölen = 2 (NULL olan satır sayılmaz, 3'e değil 2'ye bölünür)<br>
Ortalama = 140 / 2 = <strong>70</strong><br><br>
Eğer NULL değeri 0 olarak dahil etmek isterseniz <code>AVG(COALESCE(not_degeri, 0))</code> kullanmalısınız; bu durumda sonuç 140/3 ≈ 46.67 olurdu.
</div>
</div>

<!-- SORU 17 -->
<div class="quiz-question" id="q17">
<h3>Soru 17 — EXTRACT</h3>
<p>Aşağıdaki sorgu ne döndürür?</p>
<pre><code>SELECT EXTRACT(QUARTER FROM '2026-08-15');</code></pre>
<ul class="quiz-options" data-correct="c">
  <li data-val="a">A) 2</li>
  <li data-val="b">B) 8</li>
  <li data-val="c">C) 3</li>
  <li data-val="d">D) 4</li>
</ul>
<div class="quiz-feedback" id="fb17"></div>
<button class="solution-toggle" id="st17" onclick="toggleSolution('sol17')">Çözümü Göster</button>
<div class="solution-box" id="sol17">
<strong>Doğru Cevap: C) 3</strong><br><br>
<code>EXTRACT(QUARTER FROM tarih)</code> — tarihin yılın kaçıncı çeyreğinde olduğunu döndürür:<br>
- Q1: Ocak–Mart (1–3. aylar)<br>
- Q2: Nisan–Haziran (4–6. aylar)<br>
- <strong>Q3: Temmuz–Eylül (7–9. aylar)</strong><br>
- Q4: Ekim–Aralık (10–12. aylar)<br><br>
Ağustos (8. ay) → 3. çeyrek.
</div>
</div>

<!-- SORU 18 -->
<div class="quiz-question" id="q18">
<h3>Soru 18 — DATEDIFF</h3>
<p>Aşağıdaki sorgunun sonucu nedir?</p>
<pre><code>SELECT DATEDIFF('2026-03-01', '2026-03-10');</code></pre>
<ul class="quiz-options" data-correct="a">
  <li data-val="a">A) -9</li>
  <li data-val="b">B) 9</li>
  <li data-val="c">C) -10</li>
  <li data-val="d">D) 10</li>
</ul>
<div class="quiz-feedback" id="fb18"></div>
<button class="solution-toggle" id="st18" onclick="toggleSolution('sol18')">Çözümü Göster</button>
<div class="solution-box" id="sol18">
<strong>Doğru Cevap: A) -9</strong><br><br>
<code>DATEDIFF(tarih1, tarih2)</code> = tarih1 - tarih2 işlemini gün cinsinden yapar.<br>
1 Mart - 10 Mart = <strong>-9</strong> gün.<br><br>
Parametre sırası çok önemlidir! Büyük tarih birinci parametrede olmalıdır ki pozitif sonuç alasınız. Tersi negatif döner.
</div>
</div>

<!-- SORU 19 -->
<div class="quiz-question" id="q19">
<h3>Soru 19 — DATE_ADD ve DATE_SUB</h3>
<p>Bugün 2026-03-06 ise, aşağıdaki sorgunun sonucu nedir?</p>
<pre><code>SELECT DATE_SUB('2026-03-06', INTERVAL 1 MONTH);</code></pre>
<ul class="quiz-options" data-correct="b">
  <li data-val="a">A) 2026-02-28</li>
  <li data-val="b">B) 2026-02-06</li>
  <li data-val="c">C) 2026-04-06</li>
  <li data-val="d">D) 2026-01-06</li>
</ul>
<div class="quiz-feedback" id="fb19"></div>
<button class="solution-toggle" id="st19" onclick="toggleSolution('sol19')">Çözümü Göster</button>
<div class="solution-box" id="sol19">
<strong>Doğru Cevap: B) 2026-02-06</strong><br><br>
<code>DATE_SUB(tarih, INTERVAL 1 MONTH)</code> — tarihten 1 ay çıkarır.<br>
6 Mart 2026 - 1 ay = <strong>6 Şubat 2026</strong>.<br><br>
Gün numarası korunur. Eğer hedef ayda o gün yoksa (örn. 31 Mart - 1 ay = 28/29 Şubat), MySQL ayın son gününe yuvarlar.
</div>
</div>

<!-- SORU 20 -->
<div class="quiz-question" id="q20">
<h3>Soru 20 — CAST ve CONVERT</h3>
<p>Aşağıdaki seçeneklerden hangisi <strong>yanlıştır</strong>?</p>
<ul class="quiz-options" data-correct="d">
  <li data-val="a">A) <code>CAST('123' AS UNSIGNED)</code> → 123 döndürür</li>
  <li data-val="b">B) <code>CONVERT</code>, karakter seti dönüşümü için <code>USING</code> ile kullanılabilir</li>
  <li data-val="c">C) <code>CAST('2026-03-06' AS DATE)</code> metni tarih tipine çevirir</li>
  <li data-val="d">D) <code>CAST</code> ve <code>CONVERT</code> WHERE koşulunda kullanıldığında indeks performansını artırır</li>
</ul>
<div class="quiz-feedback" id="fb20"></div>
<button class="solution-toggle" id="st20" onclick="toggleSolution('sol20')">Çözümü Göster</button>
<div class="solution-box" id="sol20">
<strong>Doğru Cevap: D)</strong><br><br>
D şıkkı yanlıştır çünkü tam tersine, WHERE veya JOIN içinde sütuna <code>CAST/CONVERT</code> uygulamak <strong>indeks kullanımını düşürür</strong>. Veritabanı, sütun üzerinde fonksiyon uygulandığında indeksi kullanamaz (index scan yerine full table scan yapar).<br><br>
Doğru yaklaşım: Veriyi zaten doğru tipte saklamaktır. CAST/CONVERT güçlüdür ama şema tasarımının yerini tutmaz.
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
