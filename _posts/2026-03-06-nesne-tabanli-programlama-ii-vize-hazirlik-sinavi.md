---
layout: post
title: "Vize Hazırlık Sınavı: 20 Soruluk İnteraktif Test"
date: 2026-03-06 16:00:00 +0300
categories: nesne-tabanli-programlama-ii
course_id: nesne-tabanli-programlama-ii
tags: [java, oop, sınav, vize, test, çoktan-seçmeli]
---

{% raw %}

Bu interaktif test, Nesne Tabanlı Programlama II dersinde şimdiye kadar işlenen tüm konuları kapsamaktadır.

**Kapsanan Konular:** Miras (Inheritance) ve `extends`, Üst/Alt sınıf ilişkisi, `super` anahtar kelimesi, Paket yönetimi ve katmanlı mimari, Static blok ve sınıf yükleme süreci, Java diziler, ArrayList, LinkedList, Set, HashMap, Metot Ezme (Method Overriding), Overloading vs Overriding, Polimorfizm (Runtime Polymorphism), `@Override` anotasyonu.

---

<style>
.quiz-container{max-width:800px;margin:0 auto;font-family:inherit}.quiz-question{background:#f8f9fa;border:1px solid #dee2e6;border-radius:10px;padding:20px;margin-bottom:24px}.quiz-question h3{margin-top:0;color:#2c3e50;font-size:1.05em}.quiz-question pre{background:#1e1e2e;color:#cdd6f4;padding:12px;border-radius:6px;overflow-x:auto}.quiz-question code{font-size:.92em}.quiz-options{list-style:none;padding:0;margin:12px 0}.quiz-options li{padding:10px 14px;margin:6px 0;border:2px solid #dee2e6;border-radius:8px;cursor:pointer;transition:all .2s;background:#fff}.quiz-options li:hover{border-color:#6c5ce7;background:#f0edff}.quiz-options li.correct{border-color:#00b894;background:#d4fce8}.quiz-options li.wrong{border-color:#e74c3c;background:#fde8e8}.quiz-options li.disabled{pointer-events:none;opacity:.85}.quiz-feedback{margin-top:12px;padding:10px 14px;border-radius:8px;font-weight:600;display:none}.quiz-feedback.show{display:block}.quiz-feedback.correct-fb{background:#d4fce8;color:#00754a}.quiz-feedback.wrong-fb{background:#fde8e8;color:#c0392b}.solution-toggle{margin-top:10px;background:#6c5ce7;color:#fff;border:none;padding:8px 18px;border-radius:6px;cursor:pointer;font-size:.9em;display:none}.solution-toggle:hover{background:#5a4bd1}.solution-box{display:none;margin-top:12px;padding:14px;background:#eef1ff;border-left:4px solid #6c5ce7;border-radius:6px;line-height:1.6}.solution-box pre{background:#1e1e2e;color:#cdd6f4;padding:10px;border-radius:6px}.quiz-score{text-align:center;padding:24px;background:linear-gradient(135deg,#6c5ce7,#a29bfe);color:#fff;border-radius:12px;margin-top:30px;display:none}.quiz-score h2{margin:0 0 8px}.quiz-score .score-num{font-size:2.4em;font-weight:800}.quiz-progress{text-align:center;margin-bottom:20px;font-size:.95em;color:#636e72}
</style>

<div class="quiz-container" id="quizApp">
<div class="quiz-progress" id="progressBar">Yanıtlanan: 0 / 20</div>

<!-- SORU 1 -->
<div class="quiz-question" id="q1">
<h3>Soru 1 — Miras (Inheritance) Tanımı</h3>
<p>Java'da bir sınıfın başka bir sınıftan miras alması için hangi anahtar kelime kullanılır?</p>
<ul class="quiz-options" data-correct="c">
  <li data-val="a">A) <code>implements</code></li>
  <li data-val="b">B) <code>inherits</code></li>
  <li data-val="c">C) <code>extends</code></li>
  <li data-val="d">D) <code>super</code></li>
</ul>
<div class="quiz-feedback" id="fb1"></div>
<button class="solution-toggle" id="st1" onclick="toggleSolution('sol1')">Çözümü Göster</button>
<div class="solution-box" id="sol1">
<strong>Doğru Cevap: C) extends</strong><br><br>
Java'da miras <code>extends</code> anahtar kelimesiyle sağlanır:<br>
<pre><code>public class Alt extends Ust { }</code></pre>
<code>implements</code> interface'ler için kullanılır. <code>inherits</code> diye bir anahtar kelime yoktur. <code>super</code> ise üst sınıfın constructor'ına veya metoduna erişmek için kullanılır, miras tanımlamak için değil.
</div>
</div>

<!-- SORU 2 -->
<div class="quiz-question" id="q2">
<h3>Soru 2 — Miras Avantajları</h3>
<p>Aşağıdakilerden hangisi miras kullanmanın avantajlarından <strong>değildir</strong>?</p>
<ul class="quiz-options" data-correct="d">
  <li data-val="a">A) Kod tekrarını önler</li>
  <li data-val="b">B) Hiyerarşik düzen kurar</li>
  <li data-val="c">C) Genişletilebilirlik sağlar</li>
  <li data-val="d">D) Programın derleme süresini kısaltır</li>
</ul>
<div class="quiz-feedback" id="fb2"></div>
<button class="solution-toggle" id="st2" onclick="toggleSolution('sol2')">Çözümü Göster</button>
<div class="solution-box" id="sol2">
<strong>Doğru Cevap: D)</strong><br><br>
Mirasın faydaları:<br>
1. <strong>Kod tekrarını önler:</strong> Ortak özellikler bir kez yazılır<br>
2. <strong>Hiyerarşik düzen kurar:</strong> "...bir türüdür" ilişkisini modeller<br>
3. <strong>Bakımı kolaylaştırır:</strong> Değişiklik tek yerden yapılır<br>
4. <strong>Genişletilebilirlik:</strong> Yeni alt sınıflar eklemek mevcut kodu bozmaz<br><br>
Miras, derleme süresini kısaltmaz — bu bir derleme optimizasyonu konusudur, OOP'nin amacı değildir.
</div>
</div>

<!-- SORU 3 -->
<div class="quiz-question" id="q3">
<h3>Soru 3 — super Anahtar Kelimesi</h3>
<p>Alt sınıfın constructor'ında <code>super()</code> çağrısı ne yapar?</p>
<ul class="quiz-options" data-correct="a">
  <li data-val="a">A) Üst sınıfın constructor'ını çağırır</li>
  <li data-val="b">B) Alt sınıfın kendisini yeniden başlatır</li>
  <li data-val="c">C) Miras ilişkisini iptal eder</li>
  <li data-val="d">D) Static bloku çalıştırır</li>
</ul>
<div class="quiz-feedback" id="fb3"></div>
<button class="solution-toggle" id="st3" onclick="toggleSolution('sol3')">Çözümü Göster</button>
<div class="solution-box" id="sol3">
<strong>Doğru Cevap: A) Üst sınıfın constructor'ını çağırır</strong><br><br>
<code>super()</code> çağrısı, alt sınıfın constructor'ı içinde üst sınıfın constructor'ını açıkça çağırmak için kullanılır. Parametreli üst sınıf constructor'ı varsa <code>super(parametre1, parametre2)</code> şeklinde yazılır. Bu çağrı constructor'ın <strong>ilk satırında</strong> olmalıdır.
</div>
</div>

<!-- SORU 4 -->
<div class="quiz-question" id="q4">
<h3>Soru 4 — Oyun Karakter Hiyerarşisi</h3>
<p>Aşağıdaki oyun karakter hiyerarşisinde IyiKarakter sınıfı hangi özelliklere sahip olur?</p>
<pre><code>Karakter: can, hiz, adi, yuru(), dur()
IyiKarakter extends Karakter: ucusHizi, uc()</code></pre>
<ul class="quiz-options" data-correct="b">
  <li data-val="a">A) Sadece ucusHizi ve uc()</li>
  <li data-val="b">B) can, hiz, adi, yuru(), dur() + ucusHizi, uc()</li>
  <li data-val="c">C) Sadece can, hiz, adi</li>
  <li data-val="d">D) ucusHizi, uc(), yuru() — ama can ve hiz olmadan</li>
</ul>
<div class="quiz-feedback" id="fb4"></div>
<button class="solution-toggle" id="st4" onclick="toggleSolution('sol4')">Çözümü Göster</button>
<div class="solution-box" id="sol4">
<strong>Doğru Cevap: B)</strong><br><br>
Miras alan sınıf, üst sınıfın <strong>tüm</strong> özellik ve metotlarını devralır + kendi ek özelliklerini ekler. IyiKarakter, Karakter'den can, hiz, adi, yuru(), dur()'u miras alır ve bunlara ucusHizi ile uc()'u ekler. Bu mirasın temel mantığıdır: "ortak özellikleri bir kez yaz, devral, genişlet."
</div>
</div>

<!-- SORU 5 -->
<div class="quiz-question" id="q5">
<h3>Soru 5 — Paket (Package) Kavramı</h3>
<p>Java'da paket kullanmanın temel amacı nedir?</p>
<ul class="quiz-options" data-correct="c">
  <li data-val="a">A) Programın daha hızlı çalışmasını sağlamak</li>
  <li data-val="b">B) Sadece büyük projelerde zorunlu olan bir formalite</li>
  <li data-val="c">C) Sınıfları mantıksal olarak gruplamak, isim çakışmalarını önlemek ve modüler yapı kurmak</li>
  <li data-val="d">D) Java'nın derleme hatalarını otomatik düzeltmesi</li>
</ul>
<div class="quiz-feedback" id="fb5"></div>
<button class="solution-toggle" id="st5" onclick="toggleSolution('sol5')">Çözümü Göster</button>
<div class="solution-box" id="sol5">
<strong>Doğru Cevap: C)</strong><br><br>
Paket (package) Java'da sınıfları mantıksal olarak grupladığımız isim alanıdır (namespace). Faydaları:<br>
- Sınıf isim çakışmalarını önler<br>
- Kod tabanını modüler hâle getirir<br>
- Takım çalışmasında düzen sağlar<br>
- Katmanlı mimari kurmayı kolaylaştırır<br><br>
Büyük-küçük tüm projelerde doğru paket yapısı, başlangıçtan itibaren uygulanmalıdır.
</div>
</div>

<!-- SORU 6 -->
<div class="quiz-question" id="q6">
<h3>Soru 6 — Katmanlı Mimari</h3>
<p>Katmanlı mimari yapısında <code>service</code> paketi hangi sorumluluğu taşır?</p>
<ul class="quiz-options" data-correct="d">
  <li data-val="a">A) Kullanıcıdan girdi alma ve ekrana yazdırma</li>
  <li data-val="b">B) Veritabanı bağlantısı ve veri saklama</li>
  <li data-val="c">C) Sistemin çekirdek varlıklarını (entity) tanımlama</li>
  <li data-val="d">D) İş kurallarını ve uygulama mantığını yönetme</li>
</ul>
<div class="quiz-feedback" id="fb6"></div>
<button class="solution-toggle" id="st6" onclick="toggleSolution('sol6')">Çözümü Göster</button>
<div class="solution-box" id="sol6">
<strong>Doğru Cevap: D)</strong><br><br>
Katmanlı mimaride sorumluluklar:<br>
- <strong>ui:</strong> Kullanıcı etkileşimi (girdi/çıktı)<br>
- <strong>domain:</strong> Çekirdek varlıklar (Kisi, Adres vb.)<br>
- <strong>service:</strong> İş kuralları ve uygulama mantığı<br>
- <strong>repository:</strong> Veri erişimi ve saklama<br>
- <strong>exception:</strong> Özel hata sınıfları<br><br>
UI katmanı iş kuralı yazmaz, service katmanı veritabanına doğrudan erişmez — her katmanın net bir sorumluluğu vardır.
</div>
</div>

<!-- SORU 7 -->
<div class="quiz-question" id="q7">
<h3>Soru 7 — Static Blok</h3>
<p>Aşağıdaki kodun çıktısı nedir?</p>
<pre><code>class Test {
    static { System.out.println("Static"); }
    public Test() { System.out.println("Constructor"); }
}
// main içinde:
Test t1 = new Test();
Test t2 = new Test();</code></pre>
<ul class="quiz-options" data-correct="b">
  <li data-val="a">A) Static, Static, Constructor, Constructor</li>
  <li data-val="b">B) Static, Constructor, Constructor</li>
  <li data-val="c">C) Constructor, Constructor, Static</li>
  <li data-val="d">D) Constructor, Static, Constructor, Static</li>
</ul>
<div class="quiz-feedback" id="fb7"></div>
<button class="solution-toggle" id="st7" onclick="toggleSolution('sol7')">Çözümü Göster</button>
<div class="solution-box" id="sol7">
<strong>Doğru Cevap: B) Static, Constructor, Constructor</strong><br><br>
Static blok, sınıf JVM tarafından <strong>ilk kez yüklendiğinde bir kez</strong> çalışır. Constructor ise her nesne oluşturulduğunda çalışır.<br>
1. <code>new Test()</code> → sınıf ilk kez yüklenir → "Static" + "Constructor"<br>
2. <code>new Test()</code> → sınıf zaten yüklü → sadece "Constructor"<br><br>
Sonuç: Static (1 kez), Constructor (2 kez).
</div>
</div>

<!-- SORU 8 -->
<div class="quiz-question" id="q8">
<h3>Soru 8 — Static Blok Tetikleme</h3>
<p>Aşağıdakilerden hangisi bir sınıfın static bloğunun çalışmasını <strong>tetiklemez</strong>?</p>
<ul class="quiz-options" data-correct="d">
  <li data-val="a">A) Sınıftan nesne oluşturma (<code>new</code>)</li>
  <li data-val="b">B) Sınıfın static bir değişkenine erişme</li>
  <li data-val="c">C) <code>Class.forName("...")</code> çağrısı</li>
  <li data-val="d">D) Sınıfın adını bir String değişkende saklamak</li>
</ul>
<div class="quiz-feedback" id="fb8"></div>
<button class="solution-toggle" id="st8" onclick="toggleSolution('sol8')">Çözümü Göster</button>
<div class="solution-box" id="sol8">
<strong>Doğru Cevap: D)</strong><br><br>
Static bloğu tetikleyen durumlar:<br>
1. Sınıftan nesne oluşturma (<code>new</code>) ✓<br>
2. Static metoda erişme ✓<br>
3. Static değişkene erişme ✓<br>
4. <code>Class.forName("...")</code> çağrısı ✓<br><br>
Sınıfın adını bir String'de saklamak (<code>String s = "Test";</code>) sınıfı <strong>yüklemez</strong>, bu sadece bir metin işlemidir.
</div>
</div>

<!-- SORU 9 -->
<div class="quiz-question" id="q9">
<h3>Soru 9 — Java Dizi Tanımlama</h3>
<p>Java'da dizi tanımlamanın <strong>önerilen</strong> (en yaygın) stili hangisidir?</p>
<ul class="quiz-options" data-correct="a">
  <li data-val="a">A) <code>int[] sayilar = new int[5];</code></li>
  <li data-val="b">B) <code>int sayilar[] = new int[5];</code></li>
  <li data-val="c">C) <code>int sayilar = new int(5);</code></li>
  <li data-val="d">D) <code>dizi[] sayilar = new dizi[5];</code></li>
</ul>
<div class="quiz-feedback" id="fb9"></div>
<button class="solution-toggle" id="st9" onclick="toggleSolution('sol9')">Çözümü Göster</button>
<div class="solution-box" id="sol9">
<strong>Doğru Cevap: A)</strong><br><br>
Java'da her iki stil de geçerlidir: <code>int[] sayilar</code> ve <code>int sayilar[]</code>. Ancak ekip standartlarında genelde <code>tip[] ad</code> stili önerilir çünkü "bu bir int dizisidir" bilgisi tipin yanında kalır, daha okunabilirdir.<br><br>
C şıkkı yanlış sözdizimidir (parantez değil, köşeli parantez gerekir). D şıkkındaki <code>dizi</code> Java'da bir veri tipi değildir.
</div>
</div>

<!-- SORU 10 -->
<div class="quiz-question" id="q10">
<h3>Soru 10 — ArrayList vs Array</h3>
<p>ArrayList'in düz diziye (array) göre en önemli avantajı nedir?</p>
<ul class="quiz-options" data-correct="b">
  <li data-val="a">A) Bellekte daha az yer kaplar</li>
  <li data-val="b">B) Boyutu dinamik olarak büyüyüp küçülebilir</li>
  <li data-val="c">C) Primitive tipler (int, double) doğrudan saklanabilir</li>
  <li data-val="d">D) İndeks ile erişim diziden daha hızlıdır</li>
</ul>
<div class="quiz-feedback" id="fb10"></div>
<button class="solution-toggle" id="st10" onclick="toggleSolution('sol10')">Çözümü Göster</button>
<div class="solution-box" id="sol10">
<strong>Doğru Cevap: B)</strong><br><br>
Dizilerin boyutu sabittir — bir kez oluşturulduktan sonra değiştirilemez. <strong>ArrayList</strong> ise <code>add()</code> ve <code>remove()</code> ile dinamik olarak büyüyüp küçülebilir.<br><br>
A yanlış: HashMap sıralı değildir (sıralı istersen LinkedHashMap kullan). B yanlış: HashMap indeksle değil, anahtarla erişim sağlar. D yanlış: HashMap her tipte generic veri tutabilir.
</div>
</div>

<!-- SORU 11 -->
<div class="quiz-question" id="q11">
<h3>Soru 11 — HashMap</h3>
<p>HashMap'in temel çalışma mantığı nedir?</p>
<ul class="quiz-options" data-correct="c">
  <li data-val="a">A) Elemanları ekleme sırasına göre sıralı tutar</li>
  <li data-val="b">B) İndeks numarasıyla erişim sağlar, tıpkı dizi gibi</li>
  <li data-val="c">C) Anahtar-değer (key-value) çiftleri şeklinde veri tutar, anahtarla hızlı erişim sağlar</li>
  <li data-val="d">D) Sadece String tipinde veri saklayabilir</li>
</ul>
<div class="quiz-feedback" id="fb11"></div>
<button class="solution-toggle" id="st11" onclick="toggleSolution('sol11')">Çözümü Göster</button>
<div class="solution-box" id="sol11">
<strong>Doğru Cevap: C)</strong><br><br>
<code>HashMap&lt;K, V&gt;</code> anahtar-değer (key-value) çiftleri şeklinde veri tutar. Anahtarla erişim O(1) hızındadır (ortalamada).<br>
<pre><code>HashMap&lt;String, Integer&gt; notlar = new HashMap&lt;&gt;();
notlar.put("Ahmet", 85);
int not = notlar.get("Ahmet"); // 85</code></pre>
Anahtarlar benzersizdir (aynı key'e yeni değer atanırsa eskisi ezilir). Sıralı değildir (sıralı istersen LinkedHashMap veya TreeMap kullan).
</div>
</div>

<!-- SORU 12 -->
<div class="quiz-question" id="q12">
<h3>Soru 12 — Set (Küme)</h3>
<p>Aşağıdaki kod çalıştırıldığında <code>set.size()</code> kaç döndürür?</p>
<pre><code>Set&lt;String&gt; set = new HashSet&lt;&gt;();
set.add("Java");
set.add("Python");
set.add("Java");
set.add("C++");
System.out.println(set.size());</code></pre>
<ul class="quiz-options" data-correct="b">
  <li data-val="a">A) 4</li>
  <li data-val="b">B) 3</li>
  <li data-val="c">C) 2</li>
  <li data-val="d">D) Derleme hatası verir çünkü aynı eleman iki kez eklenemez</li>
</ul>
<div class="quiz-feedback" id="fb12"></div>
<button class="solution-toggle" id="st12" onclick="toggleSolution('sol12')">Çözümü Göster</button>
<div class="solution-box" id="sol12">
<strong>Doğru Cevap: B) 3</strong><br><br>
<code>Set</code>, matematikteki küme kavramının Java karşılığıdır: <strong>aynı elemandan birden fazla tutmaz</strong>. "Java" ikinci kez eklenmeye çalışıldığında sessizce yok sayılır — hata fırlatmaz.<br><br>
Set'teki elemanlar: {"Java", "Python", "C++"} → <strong>3 eleman</strong>.<br><br>
D şıkkı yanlıştır çünkü Set hata vermez, sadece mükerrer eklemeyi görmezden gelir. Bu davranışı bilmek kritiktir — <code>add()</code> metodu mükerrer durumda <code>false</code> döndürür ama exception fırlatmaz.
</div>
</div>

<!-- SORU 13 -->
<div class="quiz-question" id="q13">
<h3>Soru 13 — Overloading vs Overriding</h3>
<p>Aşağıdaki tablodaki bilgilerden hangisi <strong>yanlıştır</strong>?</p>
<ul class="quiz-options" data-correct="d">
  <li data-val="a">A) Overloading: Aynı sınıfta, parametre listesi değişir</li>
  <li data-val="b">B) Overriding: Kalıtımda, metot gövdesi değişir</li>
  <li data-val="c">C) Overriding'de metot adı ve parametre listesi aynı kalır</li>
  <li data-val="d">D) Overloading'de metot adı farklı olmalıdır</li>
</ul>
<div class="quiz-feedback" id="fb13"></div>
<button class="solution-toggle" id="st13" onclick="toggleSolution('sol13')">Çözümü Göster</button>
<div class="solution-box" id="sol13">
<strong>Doğru Cevap: D) — Bu yanlıştır</strong><br><br>
<strong>Overloading (Aşırı Yükleme):</strong> Aynı isimle, <strong>farklı parametre listesiyle</strong> aynı sınıfta birden fazla metot tanımlamak. Metot adı <strong>aynı</strong> kalır!<br>
<strong>Overriding (Ezme):</strong> Kalıtımda, aynı imzayla (aynı ad + aynı parametreler) alt sınıfta davranışı değiştirmek.<br><br>
Kısa formül:<br>
Overloading = "aynı isim, farklı imza"<br>
Overriding = "aynı imza, farklı davranış"
</div>
</div>

<!-- SORU 14 -->
<div class="quiz-question" id="q14">
<h3>Soru 14 — Runtime Polymorphism</h3>
<p>Aşağıdaki kodun çıktısı nedir?</p>
<pre><code>Karakter k1 = new Savascı();
Karakter k2 = new Buyucu();
k1.saldir();
k2.saldir();
// Savascı.saldir() → "Kılıç savurdu!"
// Buyucu.saldir() → "Ateş topu fırlattı!"</code></pre>
<ul class="quiz-options" data-correct="c">
  <li data-val="a">A) Her ikisi de "Karakter temel saldırı yaptı."</li>
  <li data-val="b">B) Derleme hatası verir</li>
  <li data-val="c">C) "Kılıç savurdu!" ve "Ateş topu fırlattı!"</li>
  <li data-val="d">D) "Ateş topu fırlattı!" ve "Kılıç savurdu!" (ters sıra)</li>
</ul>
<div class="quiz-feedback" id="fb14"></div>
<button class="solution-toggle" id="st14" onclick="toggleSolution('sol14')">Çözümü Göster</button>
<div class="solution-box" id="sol14">
<strong>Doğru Cevap: C)</strong><br><br>
Değişken tipi <code>Karakter</code> olsa da JVM çalışma zamanında (runtime) <strong>gerçek nesnenin tipine</strong> bakar. Buna <strong>runtime polymorphism</strong> (çalışma zamanı çok biçimliliği) denir.<br><br>
<code>k1</code>'in gerçek tipi Savascı → "Kılıç savurdu!"<br>
<code>k2</code>'nin gerçek tipi Buyucu → "Ateş topu fırlattı!"<br><br>
Üst sınıf referansı, alt sınıf nesnesini tutabilir — ve metot çağrısında alt sınıfın ezilmiş (override) metodu çalışır.
</div>
</div>

<!-- SORU 15 -->
<div class="quiz-question" id="q15">
<h3>Soru 15 — @Override Anotasyonu</h3>
<p><code>@Override</code> anotasyonunun asıl amacı nedir?</p>
<ul class="quiz-options" data-correct="b">
  <li data-val="a">A) Metodu override etmeyi zorunlu kılar</li>
  <li data-val="b">B) Derleyiciye "bu metot üst sınıftan eziliyor" sinyali verir, yazım hatası varsa derleme hatası üretir</li>
  <li data-val="c">C) Metodu private yapar</li>
  <li data-val="d">D) Override edilen metodu siler</li>
</ul>
<div class="quiz-feedback" id="fb15"></div>
<button class="solution-toggle" id="st15" onclick="toggleSolution('sol15')">Çözümü Göster</button>
<div class="solution-box" id="sol15">
<strong>Doğru Cevap: B)</strong><br><br>
<code>@Override</code> anotasyonu isteğe bağlıdır ama <strong>şiddetle önerilir</strong>. Derleyiciye "bu metodu üst sınıftan eziyorum" bilgisini verir. Eğer metot adını veya parametreleri yanlış yazarsanız, derleyici hata verir ve sizi uyarır.<br><br>
Anotasyon olmadan yanlış yazarsanız, Java bunu yeni bir metot sanır (overloading yapar) ve hata vermez — bug sessizce oluşur.
</div>
</div>

<!-- SORU 16 -->
<div class="quiz-question" id="q16">
<h3>Soru 16 — ArrayList Kullanımı</h3>
<p>Aşağıdaki kodda eksik olan nedir?</p>
<pre><code>ArrayList&lt;int&gt; sayilar = new ArrayList&lt;&gt;();</code></pre>
<ul class="quiz-options" data-correct="a">
  <li data-val="a">A) Primitive tip (int) kullanılamaz, wrapper tip (Integer) kullanılmalı</li>
  <li data-val="b">B) new yerine create yazılmalı</li>
  <li data-val="c">C) ArrayList yerine Array yazılmalı</li>
  <li data-val="d">D) Kodda hata yoktur, doğru çalışır</li>
</ul>
<div class="quiz-feedback" id="fb16"></div>
<button class="solution-toggle" id="st16" onclick="toggleSolution('sol16')">Çözümü Göster</button>
<div class="solution-box" id="sol16">
<strong>Doğru Cevap: A)</strong><br><br>
Java'da generic tipler (ArrayList, HashMap vb.) <strong>primitive tip kabul etmez</strong>. Wrapper sınıflar kullanılmalıdır:<br>
- <code>int</code> → <code>Integer</code><br>
- <code>double</code> → <code>Double</code><br>
- <code>char</code> → <code>Character</code><br>
- <code>boolean</code> → <code>Boolean</code><br><br>
Doğru yazım: <code>ArrayList&lt;Integer&gt; sayilar = new ArrayList&lt;&gt;();</code><br>
Java autoboxing sayesinde <code>sayilar.add(5)</code> yine çalışır (int otomatik Integer'a dönüşür).
</div>
</div>

<!-- SORU 17 -->
<div class="quiz-question" id="q17">
<h3>Soru 17 — LinkedList vs ArrayList</h3>
<p>LinkedList'in ArrayList'e göre daha avantajlı olduğu durum hangisidir?</p>
<ul class="quiz-options" data-correct="c">
  <li data-val="a">A) İndeksle rastgele erişim sık yapılıyorsa</li>
  <li data-val="b">B) Eleman sayısı sabitse</li>
  <li data-val="c">C) Listenin başına/ortasına sık eleman eklenip çıkarılıyorsa</li>
  <li data-val="d">D) Bellekte daha az yer kaplaması gerekiyorsa</li>
</ul>
<div class="quiz-feedback" id="fb17"></div>
<button class="solution-toggle" id="st17" onclick="toggleSolution('sol17')">Çözümü Göster</button>
<div class="solution-box" id="sol17">
<strong>Doğru Cevap: C)</strong><br><br>
<strong>ArrayList:</strong> İndeksle erişim hızlı (O(1)), ama başa ekleme yavaş (tüm elemanlar kaydırılır, O(n)).<br>
<strong>LinkedList:</strong> Başa ekleme/çıkarma hızlı (O(1) — sadece referans değişimi), ama indeksle erişim yavaş (O(n) zincir takibi).<br><br>
Not: Ortaya ekleme her iki yapıda da O(n)'dir (LinkedList'te düğümü bulmak O(n) sürer). Asıl fark <strong>baş ve son</strong> ekleme/çıkarmalardadır. Genel kural: Çoğu durumda ArrayList yeterlidir.
</div>
</div>

<!-- SORU 18 -->
<div class="quiz-question" id="q18">
<h3>Soru 18 — Java Dizi İndeksleme</h3>
<p>Aşağıdaki kodda ne olur?</p>
<pre><code>int[] notlar = {85, 90, 78, 92};
System.out.println(notlar[4]);</code></pre>
<ul class="quiz-options" data-correct="d">
  <li data-val="a">A) 92 yazdırılır</li>
  <li data-val="b">B) 0 yazdırılır</li>
  <li data-val="c">C) null yazdırılır</li>
  <li data-val="d">D) ArrayIndexOutOfBoundsException hatası fırlatılır</li>
</ul>
<div class="quiz-feedback" id="fb18"></div>
<button class="solution-toggle" id="st18" onclick="toggleSolution('sol18')">Çözümü Göster</button>
<div class="solution-box" id="sol18">
<strong>Doğru Cevap: D)</strong><br><br>
4 elemanlı bir dizinin geçerli indeksleri 0, 1, 2, 3'tür. <code>notlar[4]</code> sınır dışıdır. Java, C'nin aksine <strong>sınır kontrolü yapar</strong> ve çalışma zamanında <code>ArrayIndexOutOfBoundsException</code> fırlatır.<br><br>
C dilinde bu sessiz bir hata (undefined behavior) olurdu, Java'da ise açık bir exception fırlatılır — bu Java'nın güvenlik avantajlarından biridir.
</div>
</div>

<!-- SORU 19 -->
<div class="quiz-question" id="q19">
<h3>Soru 19 — Veri Yapısı Seçimi</h3>
<p>Öğrenci numarası → Not eşleştirmesi yapan bir sistem için en uygun veri yapısı hangisidir?</p>
<ul class="quiz-options" data-correct="b">
  <li data-val="a">A) ArrayList</li>
  <li data-val="b">B) HashMap</li>
  <li data-val="c">C) Set</li>
  <li data-val="d">D) Düz dizi (array)</li>
</ul>
<div class="quiz-feedback" id="fb19"></div>
<button class="solution-toggle" id="st19" onclick="toggleSolution('sol19')">Çözümü Göster</button>
<div class="solution-box" id="sol19">
<strong>Doğru Cevap: B) HashMap</strong><br><br>
"Bir şeye göre başka bir şeyi bulmak" = anahtar-değer ilişkisi = <strong>HashMap</strong>.<br>
<pre><code>HashMap&lt;String, Integer&gt; notlar = new HashMap&lt;&gt;();
notlar.put("2024001", 85);
int not = notlar.get("2024001"); // 85</code></pre>
ArrayList sıralı liste tutar ama anahtarla arama yapmaz. Set tekrarsızlık sağlar ama değer eşleştirmez. Düz dizi sabit boyutlu ve indeksle çalışır.
</div>
</div>

<!-- SORU 20 -->
<div class="quiz-question" id="q20">
<h3>Soru 20 — Metot Ezme Kuralları</h3>
<p>Aşağıdakilerden hangisi metot ezme (overriding) için geçerli bir kural <strong>değildir</strong>?</p>
<ul class="quiz-options" data-correct="c">
  <li data-val="a">A) Metot adı ve parametre listesi üst sınıftakiyle aynı olmalıdır</li>
  <li data-val="b">B) Dönüş tipi üst sınıftakiyle uyumlu olmalıdır</li>
  <li data-val="c">C) Alt sınıftaki metot üst sınıftakinden daha kısıtlı erişim belirleyicisine sahip olabilir (ör. public → private)</li>
  <li data-val="d">D) <code>@Override</code> anotasyonu kullanılması önerilir</li>
</ul>
<div class="quiz-feedback" id="fb20"></div>
<button class="solution-toggle" id="st20" onclick="toggleSolution('sol20')">Çözümü Göster</button>
<div class="solution-box" id="sol20">
<strong>Doğru Cevap: C) — Bu yanlıştır</strong><br><br>
Metot ezme kurallarında erişim belirleyici (access modifier) <strong>daraltılamaz</strong>, yalnızca genişletilebilir. Üst sınıfta <code>public</code> olan bir metot, alt sınıfta <code>private</code> yapılamaz.<br><br>
Geçerli yön: <code>protected → public</code> (genişletme) ✓<br>
Geçersiz yön: <code>public → private</code> (daraltma) ✗<br><br>
Diğer kurallar doğrudur: aynı ad + aynı parametreler, uyumlu dönüş tipi, ve @Override kullanımı şiddetle önerilir.
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
