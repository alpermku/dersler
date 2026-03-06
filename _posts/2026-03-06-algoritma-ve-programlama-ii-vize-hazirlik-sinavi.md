---
layout: post
title: "Vize Hazırlık Sınavı: 20 Soruluk İnteraktif Test"
date: 2026-03-06 15:00:00 +0300
categories: algoritma-ve-programlama-ii
course_id: algoritma-ve-programlama-ii
tags: [c-programlama, diziler, sınav, vize, test, çoktan-seçmeli]
---

{% raw %}

Bu interaktif test, Algoritma ve Programlama II dersinde şimdiye kadar işlenen tüm konuları kapsamaktadır. Her soruyu yanıtladıktan sonra doğru/yanlış geri bildirim alacak, "Çözümü Göster" butonuyla detaylı açıklamayı görebileceksiniz.

**Kapsanan Konular:** C dilinde dizilere giriş, Dizi tanımlama ve sıfırlama, Döngülerle dizi kullanımı, `#define` ile sabit kullanımı, Dizi sınır ihlali (Out of bounds), Frekans analizi ve zar simülasyonu, Çok boyutlu diziler (Matrisler), Dizilerin fonksiyonlara parametre olarak gönderilmesi, Tekrar eden sayıları eleme mantığı.

---

<style>
.quiz-container{max-width:800px;margin:0 auto;font-family:inherit}.quiz-question{background:#f8f9fa;border:1px solid #dee2e6;border-radius:10px;padding:20px;margin-bottom:24px}.quiz-question h3{margin-top:0;color:#2c3e50;font-size:1.05em}.quiz-question pre{background:#1e1e2e;color:#cdd6f4;padding:12px;border-radius:6px;overflow-x:auto}.quiz-question code{font-size:.92em}.quiz-options{list-style:none;padding:0;margin:12px 0}.quiz-options li{padding:10px 14px;margin:6px 0;border:2px solid #dee2e6;border-radius:8px;cursor:pointer;transition:all .2s;background:#fff}.quiz-options li:hover{border-color:#6c5ce7;background:#f0edff}.quiz-options li.correct{border-color:#00b894;background:#d4fce8}.quiz-options li.wrong{border-color:#e74c3c;background:#fde8e8}.quiz-options li.disabled{pointer-events:none;opacity:.85}.quiz-feedback{margin-top:12px;padding:10px 14px;border-radius:8px;font-weight:600;display:none}.quiz-feedback.show{display:block}.quiz-feedback.correct-fb{background:#d4fce8;color:#00754a}.quiz-feedback.wrong-fb{background:#fde8e8;color:#c0392b}.solution-toggle{margin-top:10px;background:#6c5ce7;color:#fff;border:none;padding:8px 18px;border-radius:6px;cursor:pointer;font-size:.9em;display:none}.solution-toggle:hover{background:#5a4bd1}.solution-box{display:none;margin-top:12px;padding:14px;background:#eef1ff;border-left:4px solid #6c5ce7;border-radius:6px;line-height:1.6}.solution-box pre{background:#1e1e2e;color:#cdd6f4;padding:10px;border-radius:6px}.quiz-score{text-align:center;padding:24px;background:linear-gradient(135deg,#6c5ce7,#a29bfe);color:#fff;border-radius:12px;margin-top:30px;display:none}.quiz-score h2{margin:0 0 8px}.quiz-score .score-num{font-size:2.4em;font-weight:800}.quiz-progress{text-align:center;margin-bottom:20px;font-size:.95em;color:#636e72}
</style>

<div class="quiz-container" id="quizApp">
<div class="quiz-progress" id="progressBar">Yanıtlanan: 0 / 20</div>

<!-- SORU 1 -->
<div class="quiz-question" id="q1">
<h3>Soru 1 — Dizi Tanımlama</h3>
<p>C dilinde 10 elemanlı bir tam sayı dizisi tanımlamak için hangi sözdizimi doğrudur?</p>
<ul class="quiz-options" data-correct="b">
  <li data-val="a">A) <code>int array(10);</code></li>
  <li data-val="b">B) <code>int array[10];</code></li>
  <li data-val="c">C) <code>array int[10];</code></li>
  <li data-val="d">D) <code>int array = new int[10];</code></li>
</ul>
<div class="quiz-feedback" id="fb1"></div>
<button class="solution-toggle" id="st1" onclick="toggleSolution('sol1')">Çözümü Göster</button>
<div class="solution-box" id="sol1">
<strong>Doğru Cevap: B</strong><br><br>
C dilinde dizi tanımlaması <code>veri_tipi dizi_adi[boyut];</code> şeklinde yapılır. D şıkkı Java/C# gibi dillerde kullanılır, C dilinde diziler doğrudan tanımlanır.
</div>
</div>

<!-- SORU 2 -->
<div class="quiz-question" id="q2">
<h3>Soru 2 — Dizi Sıfırlama</h3>
<p>Aşağıdaki tanımlamalardan hangisi dizinin <strong>tüm</strong> elemanlarını başlangıçta sıfır (0) yapar?</p>
<ul class="quiz-options" data-correct="a">
  <li data-val="a">A) <code>int sayilar[5] = {0};</code></li>
  <li data-val="b">B) <code>int sayilar[5] = 0;</code></li>
  <li data-val="c">C) <code>int sayilar[5];</code></li>
  <li data-val="d">D) <code>int sayilar[0] = 5;</code></li>
</ul>
<div class="quiz-feedback" id="fb2"></div>
<button class="solution-toggle" id="st2" onclick="toggleSolution('sol2')">Çözümü Göster</button>
<div class="solution-box" id="sol2">
<strong>Doğru Cevap: A</strong><br><br>
Kısmi ilk değer ataması yapıldığında, C derleyicisi dizinin belirtilmeyen diğer tüm elemanlarına otomatik olarak <code>0</code> atar. Sadece ilk elemanı 0 vererek (veya herhangi bir elemanı atayarak) geri kalanın 0 olmasını sağlayabiliriz. C şıkkında dizi elemanları "çöp" (garbage) değerler alır.
</div>
</div>

<!-- SORU 3 -->
<div class="quiz-question" id="q3">
<h3>Soru 3 — İndeksleme</h3>
<p><code>int notlar[10];</code> şeklinde tanımlanmış bir dizinin son elemanına nasıl erişilir?</p>
<ul class="quiz-options" data-correct="c">
  <li data-val="a">A) <code>notlar[1]</code></li>
  <li data-val="b">B) <code>notlar[10]</code></li>
  <li data-val="c">C) <code>notlar[9]</code></li>
  <li data-val="d">D) <code>notlar[son]</code></li>
</ul>
<div class="quiz-feedback" id="fb3"></div>
<button class="solution-toggle" id="st3" onclick="toggleSolution('sol3')">Çözümü Göster</button>
<div class="solution-box" id="sol3">
<strong>Doğru Cevap: C</strong><br><br>
C dilinde dizi indeksleri (sıra numaraları) her zaman 0'dan başlar. 10 elemanlı bir dizinin ilk elemanı 0. indeks, son elemanı ise (Boyut - 1) yani 9. indekstir.
</div>
</div>

<!-- SORU 4 -->
<div class="quiz-question" id="q4">
<h3>Soru 4 — Sınır İhlali (Out of Bounds)</h3>
<p>Eğer 5 elemanlı bir diziye <code>dizi[10] = 42;</code> şeklinde değer atamaya çalışırsanız ne olur?</p>
<ul class="quiz-options" data-correct="d">
  <li data-val="a">A) Derleyici her zaman sözdizimi hatası verir ve kodu derlemez.</li>
  <li data-val="b">B) Dizi boyutu otomatik olarak 11'e genişler.</li>
  <li data-val="c">C) Dizinin ilk elemanının üzerine yazılır.</li>
  <li data-val="d">D) Derleyici hata vermez, ancak program çalışırken "Undefined Behavior" (Tanımsız Davranış) oluşur ve çökebilir.</li>
</ul>
<div class="quiz-feedback" id="fb4"></div>
<button class="solution-toggle" id="st4" onclick="toggleSolution('sol4')">Çözümü Göster</button>
<div class="solution-box" id="sol4">
<strong>Doğru Cevap: D</strong><br><br>
C dili performans amacıyla <strong>sınır kontrolü (bounds checking) yapmaz</strong>. Dizi sınırlarını aşmak bellekte başka değişkenlerin bulunduğu alana (veya kritik bellek alanlarına) yazmaya sebep olur. Bu duruma Tanımsız Davranış denir; program hata vermeden yanlış çalışabilir veya aniden çökebilir (Segmentation Fault).
</div>
</div>

<!-- SORU 5 -->
<div class="quiz-question" id="q5">
<h3>Soru 5 — #define Kullanımı</h3>
<p>Dizi boyutunu belirlemek için <code>#define BOYUT 10</code> kullanılmasının temel avantajı nedir?</p>
<ul class="quiz-options" data-correct="c">
  <li data-val="a">A) Programın daha hızlı çalışmasını sağlaması.</li>
  <li data-val="b">B) Dizinin sadece tam sayılar tutmasını zorunlu kılması.</li>
  <li data-val="c">C) Sihirli sayılardan (magic numbers) kurtulup, boyut değişimini tek bir satırdan yönetebilmeyi sağlaması.</li>
  <li data-val="d">D) Dizinin boyutunun program çalışırken (runtime) değiştirilebilmesine olanak tanıması.</li>
</ul>
<div class="quiz-feedback" id="fb5"></div>
<button class="solution-toggle" id="st5" onclick="toggleSolution('sol5')">Çözümü Göster</button>
<div class="solution-box" id="sol5">
<strong>Doğru Cevap: C</strong><br><br>
<code>#define</code> bir ön işlemci (preprocessor) komutudur. Kodun içindeki her yere <code>10</code> yazmak yerine <code>BOYUT</code> yazmak, ileride dizinin boyutunu büyütmek gerektiğinde sadece en üstteki define satırını değiştirmeyi yeterli kılar. Bakımı inanılmaz kolaylaştırır.
</div>
</div>

<!-- SORU 6 -->
<div class="quiz-question" id="q6">
<h3>Soru 6 — Kısmi İlk Değer Ataması</h3>
<p><code>int arr[5] = {1, 2};</code> tanımı sonrası <code>arr[3]</code> elemanının değeri ne olur?</p>
<ul class="quiz-options" data-correct="a">
  <li data-val="a">A) 0</li>
  <li data-val="b">B) Çöp (Garbage) Değer</li>
  <li data-val="c">C) 2</li>
  <li data-val="d">D) Tanımsızdır</li>
</ul>
<div class="quiz-feedback" id="fb6"></div>
<button class="solution-toggle" id="st6" onclick="toggleSolution('sol6')">Çözümü Göster</button>
<div class="solution-box" id="sol6">
<strong>Doğru Cevap: A) 0</strong><br><br>
C dilinde dizi tanımlanırken elemanların sadece bir kısmına başlangıç değeri verilirse, geri kalan tüm elemanlar derleyici tarafından otomatik olarak <code>0</code> ile doldurulur. Dizi: <code>{1, 2, 0, 0, 0}</code> şeklinde oluşur.
</div>
</div>

<!-- SORU 7 -->
<div class="quiz-question" id="q7">
<h3>Soru 7 — Diziler ve Fonksiyonlar</h3>
<p>C dilinde bir fonksiyon, kendisine parametre olarak gönderilen bir dizinin içeriğini değiştirirse, dizinin orijinal (çağrıldığı yerdeki) hali nasıl etkilenir?</p>
<ul class="quiz-options" data-correct="c">
  <li data-val="a">A) Etkilenmez, çünkü C sadece değerin kopyasını (pass-by-value) gönderir.</li>
  <li data-val="b">B) Derleyici bu işleme izin vermez.</li>
  <li data-val="c">C) Orijinal dizinin içeriği de değişir (Diziler referans/adres olarak gönderilir).</li>
  <li data-val="d">D) Sadece dizinin ilk elemanı değişebilir.</li>
</ul>
<div class="quiz-feedback" id="fb7"></div>
<button class="solution-toggle" id="st7" onclick="toggleSolution('sol7')">Çözümü Göster</button>
<div class="solution-box" id="sol7">
<strong>Doğru Cevap: C</strong><br><br>
C dilinde diziler fonksiyonlara isimleriyle gönderildiğinde, bellekteki başlangıç adresleri fonksiyona gider (pointer decay). Bu nedenle fonksiyon içerisinde diziye yapılan tüm değişiklikler orijinal diziyi kalıcı olarak etkiler.
</div>
</div>

<!-- SORU 8 -->
<div class="quiz-question" id="q8">
<h3>Soru 8 — Fonksiyon İmzası</h3>
<p>Bir diziyi fonksiyona parametre olarak alırken en doğru fonksiyon tanımı hangisidir?</p>
<ul class="quiz-options" data-correct="b">
  <li data-val="a">A) <code>void islem(int dizi)</code></li>
  <li data-val="b">B) <code>void islem(int dizi[], int boyut)</code></li>
  <li data-val="c">C) <code>void islem(int array[10], double boyut)</code></li>
  <li data-val="d">D) <code>void islem(array dizi[])</code></li>
</ul>
<div class="quiz-feedback" id="fb8"></div>
<button class="solution-toggle" id="st8" onclick="toggleSolution('sol8')">Çözümü Göster</button>
<div class="solution-box" id="sol8">
<strong>Doğru Cevap: B</strong><br><br>
Diziler fonksiyona gönderilirken kendi boyutlarını bilmezler (sadece adres gider). Bu nedenle fonksiyonun diziyi düzgün tarayabilmesi için her zaman boyut bilgisinin ikinci bir parametre olarak gönderilmesi gerekir. Köşeli parantezler içi boş bırakılabilir.
</div>
</div>

<!-- SORU 9 -->
<div class="quiz-question" id="q9">
<h3>Soru 9 — Dizi Uzunluğu (Sizeof)</h3>
<p><code>int dizi[] = {5, 10, 15, 20, 25};</code> şeklinde verilen bir dizinin eleman sayısını formülle bulmak için hangi yapı kullanılır?</p>
<ul class="quiz-options" data-correct="d">
  <li data-val="a">A) <code>dizi.length</code></li>
  <li data-val="b">B) <code>sizeof(dizi)</code></li>
  <li data-val="c">C) <code>lengthOf(dizi)</code></li>
  <li data-val="d">D) <code>sizeof(dizi) / sizeof(dizi[0])</code></li>
</ul>
<div class="quiz-feedback" id="fb9"></div>
<button class="solution-toggle" id="st9" onclick="toggleSolution('sol9')">Çözümü Göster</button>
<div class="solution-box" id="sol9">
<strong>Doğru Cevap: D</strong><br><br>
<code>sizeof(dizi)</code> dizinin bellekte kapladığı toplam byte miktarını (örneğin 20 byte) verir. Eleman sayısını bulmak için toplam byte'ı, bir elemanın kapladığı byte'a <code>sizeof(dizi[0])</code> bölmek gerekir (20 / 4 = 5 eleman). (Not: C'de `.length` gibi özellikler yoktur).
</div>
</div>

<!-- SORU 10 -->
<div class="quiz-question" id="q10">
<h3>Soru 10 — Çok Boyutlu Dizi Tanımlama</h3>
<p>3 satır ve 4 sütundan oluşan iki boyutlu bir tam sayı dizisi (matris) nasıl tanımlanır?</p>
<ul class="quiz-options" data-correct="c">
  <li data-val="a">A) <code>int matris[4][3];</code></li>
  <li data-val="b">B) <code>int matris[3, 4];</code></li>
  <li data-val="c">C) <code>int matris[3][4];</code></li>
  <li data-val="d">D) <code>int matris(3)(4);</code></li>
</ul>
<div class="quiz-feedback" id="fb10"></div>
<button class="solution-toggle" id="st10" onclick="toggleSolution('sol10')">Çözümü Göster</button>
<div class="solution-box" id="sol10">
<strong>Doğru Cevap: C</strong><br><br>
Çok boyutlu diziler C dilinde <code>dizi[satir_sayisi][sutun_sayisi]</code> mantığıyla tanımlanır. Ayrı köşeli parantezler kullanılır.
</div>
</div>

<!-- SORU 11 -->
<div class="quiz-question" id="q11">
<h3>Soru 11 — Çok Boyutlu Dizi Erişimi</h3>
<p><code>int matris[3][3];</code> dizisinde 2. satırın 3. sütunundaki elemana nasıl erişilir? (Not: Satır ve sütun sayıları günlük hayattaki gibi 1'den başlar, C'de ise...)</p>
<ul class="quiz-options" data-correct="b">
  <li data-val="a">A) <code>matris[2][3]</code></li>
  <li data-val="b">B) <code>matris[1][2]</code></li>
  <li data-val="c">C) <code>matris[1, 2]</code></li>
  <li data-val="d">D) <code>matris[2][2]</code></li>
</ul>
<div class="quiz-feedback" id="fb11"></div>
<button class="solution-toggle" id="st11" onclick="toggleSolution('sol11')">Çözümü Göster</button>
<div class="solution-box" id="sol11">
<strong>Doğru Cevap: B</strong><br><br>
C dilinde indisler 0'dan başlar. <br>
1. satır = indeks 0, <strong>2. satır = indeks 1</strong>.<br>
1. sütun = indeks 0, 2. sütun = indeks 1, <strong>3. sütun = indeks 2</strong>.<br>
Sonuç: <code>matris[1][2]</code>
</div>
</div>

<!-- SORU 12 -->
<div class="quiz-question" id="q12">
<h3>Soru 12 — Frekans Dizisi Mantığı</h3>
<p>Zar atma simülasyonunda 1 ile 6 arasındaki zarların kaçar kez geldiğini saymak (frekans analizi) istiyoruz. Sayma işlemini yapmak için en uygun dizi boyutu ve atama mantığı hangisidir?</p>
<ul class="quiz-options" data-correct="c">
  <li data-val="a">A) <code>int frekans[5];</code> boyutunda tanımlayıp <code>frekans[zar]++</code> yapmak.</li>
  <li data-val="b">B) <code>int frekans[6];</code> boyutunda tanımlayıp <code>frekans[zar]++</code> yapmak.</li>
  <li data-val="c">C) <code>int frekans[7] = {0};</code> tanımlayıp <code>frekans[zar]++</code> yapmak (indeks = zar değeri eşleşmesi için).</li>
  <li data-val="d">D) Döngüyle her zar sonucu için tek tek <code>if</code> yazıp değişkenleri artırmak.</li>
</ul>
<div class="quiz-feedback" id="fb12"></div>
<button class="solution-toggle" id="st12" onclick="toggleSolution('sol12')">Çözümü Göster</button>
<div class="solution-box" id="sol12">
<strong>Doğru Cevap: C</strong><br><br>
Frekans analizi yaparken "değeri indeks olarak kullanma" mantığı en temiz yoldur. Zar 1-6 arası geldiği için, dizinin 1 ile 6 indekslerine direkt erişmek kod okumasını kolaylaştırır. 7 boyutunda dizi açılırsa (indeks 0 kullanılmaz, 1..6 indeksleri direkt zarları temsil eder) işlem <code>frekans[zar]++</code> kadar basit olur ve 0 ile başlatmak zorunludur.
</div>
</div>

<!-- SORU 13 -->
<div class="quiz-question" id="q13">
<h3>Soru 13 — Çok Boyutlu Diziler ve Fonksiyonlar</h3>
<p>C dilinde çok boyutlu (örneğin 2 boyutlu) bir diziyi fonksiyona parametre olarak gönderirken hangisinin yapılması <strong>zorunludur</strong>?</p>
<ul class="quiz-options" data-correct="b">
  <li data-val="a">A) Tüm boyutların (satır ve sütun) boş bırakılması gerekir: <code>void islem(int matris[][])</code></li>
  <li data-val="b">B) En azından sağdaki boyutların (sütun sayısı) fonksiyona bildirilmesi zorunludur: <code>void islem(int matris[][4])</code></li>
  <li data-val="c">C) Hem satır hem sütun bildirilmelidir, değişken yazılamaz: <code>void islem(int matris[3][4])</code></li>
  <li data-val="d">D) Sadece satır sayısının bildirilmesi yeterlidir: <code>void islem(int matris[3][])</code></li>
</ul>
<div class="quiz-feedback" id="fb13"></div>
<button class="solution-toggle" id="st13" onclick="toggleSolution('sol13')">Çözümü Göster</button>
<div class="solution-box" id="sol13">
<strong>Doğru Cevap: B</strong><br><br>
Derleyicinin bellekte adresi hesaplayabilmesi için "bir satırın kaç elemandan oluştuğunu" (sütun sayısını) bilmesi şarttır. Satır sayısı boş bırakılabilir (<code>[][]</code> kullanımı yasaktır, <code>[][SUTUN_SAYISI]</code> olmak zorundadır).
</div>
</div>

<!-- SORU 14 -->
<div class="quiz-question" id="q14">
<h3>Soru 14 — Döngü ile Diziye Veri Alma</h3>
<p>Kullanıcıdan bir döngü ile diziye veri alırken <code>scanf</code> içerisinde değişken adının önüne hangi işaret konulmalıdır?</p>
<ul class="quiz-options" data-correct="b">
  <li data-val="a">A) Yıldız ( * ) işareti</li>
  <li data-val="b">B) Amperstand ( &amp; ) işareti</li>
  <li data-val="c">C) Hiçbir işaret konulmaz</li>
  <li data-val="d">D) Dolar ( $ ) işareti</li>
</ul>
<div class="quiz-feedback" id="fb14"></div>
<button class="solution-toggle" id="st14" onclick="toggleSolution('sol14')">Çözümü Göster</button>
<div class="solution-box" id="sol14">
<strong>Doğru Cevap: B</strong><br><br>
Tek bir dizi elemanına değer okurken, o elemanın bellekteki adresini <code>scanf</code>'e iletmeliyiz. Örnek: <code>scanf("%d", &amp;dizi[i]);</code>. (Not: Eğer karakter dizisi/string okusaydık <code>&amp;</code> koymaya gerek kalmazdı, ancak tam sayılar için şarttır).
</div>
</div>

<!-- SORU 15 -->
<div class="quiz-question" id="q15">
<h3>Soru 15 — Rastgele Sayı (Random)</h3>
<p>Frekans analizi yapmak için 1 ile 6 arasında (1 ve 6 dahil) rastgele bir sayı üretmek isteyen öğrencinin doğru kodu aşağıdakilerden hangisidir?</p>
<ul class="quiz-options" data-correct="b">
  <li data-val="a">A) <code>rand() % 6</code></li>
  <li data-val="b">B) <code>(rand() % 6) + 1</code></li>
  <li data-val="c">C) <code>rand(1, 6)</code></li>
  <li data-val="d">D) <code>random(6) + 1</code></li>
</ul>
<div class="quiz-feedback" id="fb15"></div>
<button class="solution-toggle" id="st15" onclick="toggleSolution('sol15')">Çözümü Göster</button>
<div class="solution-box" id="sol15">
<strong>Doğru Cevap: B</strong><br><br>
<code>rand() % 6</code> işlemi 0 ile 5 arasında rastgele sayılar üretir. Zar değeri istediğimiz için sonucun üzerine 1 eklersek <code>(0..5) + 1 = (1..6)</code> aralığını elde ederiz.
</div>
</div>

<!-- SORU 16 -->
<div class="quiz-question" id="q16">
<h3>Soru 16 — Bellek (Memory) Düzeni</h3>
<p>Dizilerin bilgisayar belleğindeki tutulma şekli nasıldır?</p>
<ul class="quiz-options" data-correct="c">
  <li data-val="a">A) Dağınık ve parçalı şekilde (Bağlı Liste gibi).</li>
  <li data-val="b">B) Belleğin sadece en son kısmında tutulur.</li>
  <li data-val="c">C) Elemanları bellekte ardışık (peş peşe) olarak tahsis edilir.</li>
  <li data-val="d">D) İndeks sırasına göre rastgele adreslerde tutulur.</li>
</ul>
<div class="quiz-feedback" id="fb16"></div>
<button class="solution-toggle" id="st16" onclick="toggleSolution('sol16')">Çözümü Göster</button>
<div class="solution-box" id="sol16">
<strong>Doğru Cevap: C</strong><br><br>
Dizilerin temel mantığı <strong>ardışık bellek (contiguous memory)</strong> kullanımıdır. Bu özellikleri sayesinde indeksleme işlemi çok hızlı gerçekleşir (başlangıç adresi + indeks * veri tipi boyutu = aranılan bellek konumu).
</div>
</div>

<!-- SORU 17 -->
<div class="quiz-question" id="q17">
<h3>Soru 17 — Matrislerde İç İçe Döngüler</h3>
<p>Satır ve sütunları olan bir 2D matrisi yazdırmak için kullanılan dış döngü ve iç döngü genellikle neleri temsil eder?</p>
<ul class="quiz-options" data-correct="a">
  <li data-val="a">A) Dış döngü satırları, iç döngü sütunları</li>
  <li data-val="b">B) Dış döngü sütunları, iç döngü satırları</li>
  <li data-val="c">C) Fark etmez, bilgisayar ikisini de aynı anda okur</li>
  <li data-val="d">D) Dış döngü pozitif, iç döngü negatif sayıları kontrol eder</li>
</ul>
<div class="quiz-feedback" id="fb17"></div>
<button class="solution-toggle" id="st17" onclick="toggleSolution('sol17')">Çözümü Göster</button>
<div class="solution-box" id="sol17">
<strong>Doğru Cevap: A</strong><br><br>
C programlamada genel pratik, dış döngünün `i` (satır), iç döngünün `j` (sütun) olarak tasarlanmasıdır. Bellekte diziler de "Row-major" (satır-öncelikli) olarak ardışık tutulduğu için bu erişim tarzı performanslıdır.
</div>
</div>

<!-- SORU 18 -->
<div class="quiz-question" id="q18">
<h3>Soru 18 — Tekrar Eden Sayıları Eleme Algoritması</h3>
<p>Bir dizideki tekrar eden (mükerrer) elemanları silme algoritması mantığında genellikle hangi yöntem kullanılır?</p>
<ul class="quiz-options" data-correct="c">
  <li data-val="a">A) Dizi fonksiyonlara gönderilip `delete` komutu kullanılır.</li>
  <li data-val="b">B) Mükerrer eleman eksi bir (-1) değerine eşitlenir ve atlanır.</li>
  <li data-val="c">C) Yeni bir benzersizler dizisi açılır, her eleman yeni dizide var mı diye kontrol edilip yoksa eklenir.</li>
  <li data-val="d">D) Dizinin boyutunu dinamik olarak küçültmek için `#define` küçültülür.</li>
</ul>
<div class="quiz-feedback" id="fb18"></div>
<button class="solution-toggle" id="st18" onclick="toggleSolution('sol18')">Çözümü Göster</button>
<div class="solution-box" id="sol18">
<strong>Doğru Cevap: C</strong><br><br>
Derste işlenen en klasik yöntem: Sırayla orijinal dizideki her eleman incelenir, eğer bu eleman ikinci "benzersizler" dizimizde (veya aynı dizi içinde kaydırmalı kontrolde) henüz bulunmuyorsa, kopyalanır. C'de dizilerin boyutu bir kere oluştuktan sonra değiştirilemez (D yanlış). C'de `delete` diye bir dizi komutu yoktur (A yanlış).
</div>
</div>

<!-- SORU 19 -->
<div class="quiz-question" id="q19">
<h3>Soru 19 — Diziye String Atama</h3>
<p>Karakterlerden oluşan dizilere (String) özgü kural nedir?</p>
<ul class="quiz-options" data-correct="a">
  <li data-val="a">A) Dizinin bitiş noktasını belirtmek için en sona her zaman Null Terminator ('\0') eklenir/bulunmalıdır.</li>
  <li data-val="b">B) String dizilerinde döngü kullanılamaz.</li>
  <li data-val="c">C) Karakter dizileri sadece tek boyutlu olabilir.</li>
  <li data-val="d">D) Integer dizilere göre bellekte daha çok yer kaplarlar.</li>
</ul>
<div class="quiz-feedback" id="fb19"></div>
<button class="solution-toggle" id="st19" onclick="toggleSolution('sol19')">Çözümü Göster</button>
<div class="solution-box" id="sol19">
<strong>Doğru Cevap: A</strong><br><br>
C dilinde stringler, karakter (char) dizileridir. Fonksiyonların (printf, strcpy vb.) stringin nerede bittiğini anlaması için bellekte son karaktere gizlice Null Terminator karakteri <code>\0</code> konur. Bu sebeple 5 harfli bir kelime için en az 6 boyutlu bir <code>char</code> dizisi açılmalıdır.
</div>
</div>

<!-- SORU 20 -->
<div class="quiz-question" id="q20">
<h3>Soru 20 — Kod Çıktısı</h3>
<p>Aşağıdaki kodun çıktısı nedir?</p>
<pre><code>int arr[4] = {10, 20, 30, 40};
int x = arr[1] + arr[2];
printf("%d", x);
</code></pre>
<ul class="quiz-options" data-correct="d">
  <li data-val="a">A) 30</li>
  <li data-val="b">B) 70</li>
  <li data-val="c">C) 40</li>
  <li data-val="d">D) 50</li>
</ul>
<div class="quiz-feedback" id="fb20"></div>
<button class="solution-toggle" id="st20" onclick="toggleSolution('sol20')">Çözümü Göster</button>
<div class="solution-box" id="sol20">
<strong>Doğru Cevap: D</strong><br><br>
İndeksler 0'dan başlar.<br>
<code>arr[0] = 10</code><br>
<code>arr[1] = 20</code><br>
<code>arr[2] = 30</code><br>
<code>x = 20 + 30 = 50</code>
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
