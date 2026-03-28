---
layout: post
title: "Vize Deneme Sınavı: Açık Uçlu 20 Soru"
date: 2026-03-28 11:00:00 +0300
categories: nesne-tabanli-programlama-ii
course_id: nesne-tabanli-programlama-ii
tags: [java, oop, sınav, vize, açık-uçlu, deneme]
---

Bu deneme sınavı, Nesne Tabanlı Programlama II dersinde işlenen tüm konuları kapsayan **açık uçlu** sorulardan oluşmaktadır. Her sorunun altındaki **"Çözümü Göster"** butonuna tıklayarak detaylı çözümü görebilirsiniz.

**Süre:** 90 dakika | **Toplam:** 20 soru | **Zorluk:** Orta-İleri

**Kapsanan Konular:** Miras (Inheritance), Kapsülleme (Encapsulation), Polimorfizm (Polymorphism), Metot Ezme (Overriding) vs Aşırı Yükleme (Overloading), Static blok ve sınıf yükleme, Paket yönetimi ve katmanlı mimari, Diziler/ArrayList/HashMap/Set, Java Swing (JFrame, JPanel, Layout, JButton, JLabel, JTextField), Olay yönetimi (ActionListener), JCheckBox, JRadioButton/ButtonGroup, JComboBox/JList.

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
<h3>📝 Soru 1 <span class="exam-points">5 puan</span> <span class="exam-topic">Miras (Inheritance)</span></h3>
<p>Java'da miras (inheritance) kavramını açıklayınız. Miras kullanmanın <strong>dört temel avantajını</strong> yazınız. <code>extends</code> anahtar kelimesi ne işe yarar? Aşağıdaki kod parçasında <code>IyiKarakter</code> sınıfı <code>Karakter</code> sınıfından hangi özellikleri miras alır?</p>
<pre><code>public class Karakter {
    private int can;
    private String adi;
    public void yuru() { ... }
    public void dur() { ... }
}

public class IyiKarakter extends Karakter {
    private int ucusHizi;
    public void uc() { ... }
}</code></pre>
<button class="solution-btn" onclick="toggleSolution(this)">💡 Çözümü Göster</button>
<div class="solution-box">
<p><strong>Miras:</strong> Bir sınıfın başka bir sınıftan özellik ve davranışları devralmasıdır. "...bir türüdür" (is-a) ilişkisini modeller. <code>extends</code> anahtar kelimesi alt sınıfı üst sınıfa bağlar.</p>
<p><strong>Dört avantaj:</strong></p>
<p>1. <strong>Kod tekrarını önler:</strong> Ortak özellikler bir kez yazılır, tüm alt sınıflar devralır.<br>
2. <strong>Hiyerarşik düzen kurar:</strong> Gerçek dünyadaki ilişkileri modeller.<br>
3. <strong>Bakımı kolaylaştırır:</strong> Ortak bir değişiklik tek yerden yapılır.<br>
4. <strong>Genişletilebilirlik sağlar:</strong> Yeni alt sınıflar eklemek mevcut kodu bozmaz.</p>
<p><strong>Miras alınan üyeler:</strong> <code>IyiKarakter</code>, <code>Karakter</code>'den <code>yuru()</code> ve <code>dur()</code> metotlarını miras alır. <code>can</code> ve <code>adi</code> alanları da miras alınır ancak <code>private</code> oldukları için doğrudan erişilemez — getter/setter aracılığıyla erişilir. <code>IyiKarakter</code> bunlara ek olarak kendi <code>ucusHizi</code> alanını ve <code>uc()</code> metodunu ekler.</p>
<p class="tip">💡 <strong>Önemli:</strong> <code>private</code> üyeler miras alınır (bellekte yer kaplar) ama alt sınıf tarafından doğrudan erişilemez. Bu, kapsülleme (encapsulation) ilkesinin korunmasını sağlar.</p>
</div>
</div>

<!-- SORU 2 -->
<div class="exam-question" id="q2">
<h3>📝 Soru 2 <span class="exam-points">5 puan</span> <span class="exam-topic">Kapsülleme</span></h3>
<p>Kapsülleme (encapsulation) nedir ve neden önemlidir? Aşağıdaki iki kod parçasından hangisi kapsülleme ilkesine uygundur? Gerekçenizi yazınız.</p>
<pre><code>// Versiyon A
public class Ogrenci {
    public String ad;
    public int yas;
}

// Versiyon B
public class Ogrenci {
    private String ad;
    private int yas;

    public String getAd() { return ad; }
    public void setAd(String ad) { this.ad = ad; }
    public int getYas() { return yas; }
    public void setYas(int yas) {
        if (yas > 0 && yas < 150) this.yas = yas;
    }
}</code></pre>
<button class="solution-btn" onclick="toggleSolution(this)">💡 Çözümü Göster</button>
<div class="solution-box">
<p><strong>Kapsülleme:</strong> Bir sınıfın iç verilerini (alanlarını) dış dünyadan gizleyerek, bu verilere yalnızca kontrollü yollarla (getter/setter) erişilmesini sağlayan OOP ilkesidir.</p>
<p><strong>Versiyon B</strong> kapsülleme ilkesine uygundur.</p>
<p><strong>Gerekçe:</strong></p>
<p>• Versiyon A'da alanlar <code>public</code> — herhangi bir sınıf doğrudan <code>ogrenci.yas = -5</code> yazarak geçersiz veri atayabilir. Hiçbir kontrol mekanizması yoktur.<br>
• Versiyon B'de alanlar <code>private</code> — dışarıdan doğrudan erişilemez. <code>setYas()</code> metodu içinde <code>yas > 0 && yas < 150</code> kontrolü var. Geçersiz yaş ataması engellenir.<br>
• Versiyon B, ileride iş kuralı değiştiğinde (ör. minimum yaş 18 olsun) sadece setter'ı değiştirmek yeterlidir — sınıfı kullanan tüm kod değişmez.</p>
<p class="tip">💡 <strong>Altın kural:</strong> Alanları <code>private</code> yap, erişimi getter/setter ile sağla. Bu sayede veri bütünlüğünü korur, bakım kolaylığı kazanırsın.</p>
</div>
</div>

<!-- SORU 3 -->
<div class="exam-question" id="q3">
<h3>📝 Soru 3 <span class="exam-points">5 puan</span> <span class="exam-topic">Polimorfizm</span></h3>
<p>Aşağıdaki kodun çıktısını yazınız. Neden <code>k1</code> değişkeninin tipi <code>Karakter</code> olmasına rağmen <code>Savascı</code>'nın <code>saldir()</code> metodu çalışır? Bu mekanizmanın adı nedir?</p>
<pre><code>class Karakter {
    public void saldir() {
        System.out.println("Karakter temel saldırı yaptı.");
    }
}

class Savascı extends Karakter {
    @Override
    public void saldir() {
        System.out.println("Savaşçı kılıç savurdu!");
    }
}

class Buyucu extends Karakter {
    @Override
    public void saldir() {
        System.out.println("Büyücü ateş topu fırlattı!");
    }
}

public class Main {
    public static void main(String[] args) {
        Karakter k1 = new Savascı();
        Karakter k2 = new Buyucu();
        k1.saldir();
        k2.saldir();
    }
}</code></pre>
<button class="solution-btn" onclick="toggleSolution(this)">💡 Çözümü Göster</button>
<div class="solution-box">
<p><strong>Çıktı:</strong></p>
<pre><code>Savaşçı kılıç savurdu!
Büyücü ateş topu fırlattı!</code></pre>
<p><strong>Açıklama:</strong> Bu mekanizmanın adı <strong>runtime polymorphism (çalışma zamanı çok biçimlilik)</strong>'dir. Aynı zamanda <strong>dynamic method dispatch</strong> olarak da bilinir.</p>
<p>Değişken tipi <code>Karakter</code> olmasına rağmen, JVM çalışma zamanında (runtime) değişkenin işaret ettiği <strong>gerçek nesnenin tipine</strong> bakar. <code>k1</code> aslında bir <code>Savascı</code> nesnesidir, bu yüzden <code>Savascı</code>'nın <code>saldir()</code> metodu çalışır.</p>
<p><strong>Neden önemli?</strong> Polimorfizm sayesinde üst sınıf tipinde bir dizi veya koleksiyon oluşturup içine farklı alt sınıf nesneleri koyabiliriz. Döngüde hepsini aynı metotla çağırırız, her biri kendi davranışını sergiler. Bu, kodun genişletilebilirliğini dramatik şekilde artırır.</p>
<p class="tip">💡 <strong>Derleme vs çalışma zamanı:</strong> Derleyici <code>k1</code>'in <code>Karakter</code> tipinde olduğunu bilir ve <code>saldir()</code> metodunun <code>Karakter</code>'de tanımlı olup olmadığını kontrol eder. Ama <strong>hangi versiyon çalışacağı</strong> çalışma zamanında (runtime) nesnenin gerçek tipine göre belirlenir.</p>
</div>
</div>

<!-- SORU 4 -->
<div class="exam-question" id="q4">
<h3>📝 Soru 4 <span class="exam-points">5 puan</span> <span class="exam-topic">Overriding vs Overloading</span></h3>
<p>Metot ezme (overriding) ile metot aşırı yükleme (overloading) arasındaki farkları şu üç kriter üzerinden açıklayınız: <strong>(a)</strong> Nerede olur? <strong>(b)</strong> Ne değişir? <strong>(c)</strong> Hangi zamanda (derleme/çalışma) karar verilir? Aşağıdaki kodda hangi satırlar overloading, hangileri overriding örneğidir?</p>
<pre><code>class Hesap {
    public int topla(int a, int b) { return a + b; }
    public double topla(double a, double b) { return a + b; }  // Satır X
}

class GelismisHesap extends Hesap {
    @Override
    public int topla(int a, int b) { return a + b + 1; }      // Satır Y
}</code></pre>
<button class="solution-btn" onclick="toggleSolution(this)">💡 Çözümü Göster</button>
<div class="solution-box">
<p><strong>Karşılaştırma:</strong></p>
<table>
<tr><th>Kriter</th><th>Overloading (Aşırı yükleme)</th><th>Overriding (Ezme)</th></tr>
<tr><td>(a) Nerede olur?</td><td>Genelde <strong>aynı sınıfta</strong></td><td><strong>Kalıtımda</strong> (üst-alt sınıf arası)</td></tr>
<tr><td>(b) Ne değişir?</td><td><strong>Parametre listesi</strong> değişir (sayı, tip, sıra)</td><td><strong>Davranış (metot gövdesi)</strong> değişir; imza aynı kalır</td></tr>
<tr><td>(c) Ne zaman karar?</td><td><strong>Derleme zamanı</strong> (compile-time / static binding)</td><td><strong>Çalışma zamanı</strong> (runtime / dynamic binding)</td></tr>
</table>
<p><strong>Kod analizi:</strong></p>
<p>• <strong>Satır X → Overloading:</strong> Aynı sınıfta (<code>Hesap</code>), aynı metot adı (<code>topla</code>), farklı parametre tipi (<code>int</code> → <code>double</code>).<br>
• <strong>Satır Y → Overriding:</strong> Alt sınıfta (<code>GelismisHesap</code>), üst sınıfın <code>topla(int, int)</code> metodu aynı imzayla yeniden yazılmış, davranış değişmiş.</p>
<p class="tip">💡 <strong>Kolay hatırla:</strong> Overloading = "aynı isim, farklı imza" | Overriding = "aynı imza, farklı davranış"</p>
</div>
</div>

<!-- SORU 5 -->
<div class="exam-question" id="q5">
<h3>📝 Soru 5 <span class="exam-points">5 puan</span> <span class="exam-topic">Overriding Kuralları</span></h3>
<p>Metot ezme (overriding) yaparken uyulması gereken kurallardan <strong>dördünü</strong> yazınız. Aşağıdaki kodda bir hata vardır; hatayı bulunuz ve <code>@Override</code> anotasyonunun bu hatayı nasıl önlediğini açıklayınız.</p>
<pre><code>class Hayvan {
    public void sesCikar() {
        System.out.println("Genel ses");
    }
}

class Kedi extends Hayvan {
    public void sescikar() {
        System.out.println("Miyav");
    }
}</code></pre>
<button class="solution-btn" onclick="toggleSolution(this)">💡 Çözümü Göster</button>
<div class="solution-box">
<p><strong>Overriding kuralları (herhangi dördü):</strong></p>
<p>1. Metot adı <strong>aynı</strong> olmalı.<br>
2. Parametre listesi <strong>aynı</strong> olmalı.<br>
3. Dönüş tipi aynı veya <strong>kovaryant</strong> olmalı.<br>
4. Erişim belirleyici <strong>daraltılamaz</strong> (public olanı protected yapamazsın).<br>
5. <code>final</code> metot override <strong>edilemez</strong>.<br>
6. <code>static</code> metot override değil, <strong>hide</strong> edilir.<br>
7. <code>private</code> metot miras alınmaz, override <strong>edilemez</strong>.</p>
<p><strong>Hata:</strong> <code>sescikar()</code> yazılmış, doğrusu <code>sesCikar()</code> olmalıydı (büyük-küçük harf hatası). Bu durumda override gerçekleşmedi — <code>Kedi</code> sınıfında tamamen yeni bir metot tanımlandı. Üst sınıfın <code>sesCikar()</code> metodu hâlâ değişmeden duruyor.</p>
<p><strong><code>@Override</code>'ın rolü:</strong> Bu anotasyonu ekleseydiniz:</p>
<pre><code>@Override
public void sescikar() { ... }  // DERLEME HATASI!</code></pre>
<p>Derleyici "üst sınıfta <code>sescikar()</code> diye bir metot yok, override edemezsin" diyerek <strong>derleme zamanında</strong> hata verir. Böylece sessiz ve tehlikeli bir mantık hatası önlenmiş olur.</p>
<p class="tip">💡 <strong>Kural:</strong> Her override'da <code>@Override</code> yaz. Zorunlu değildir ama yazılmaması potansiyel hata demektir.</p>
</div>
</div>

<!-- SORU 6 -->
<div class="exam-question" id="q6">
<h3>📝 Soru 6 <span class="exam-points">5 puan</span> <span class="exam-topic">super Anahtar Kelimesi</span></h3>
<p><code>super</code> anahtar kelimesinin Java'da iki farklı kullanım amacını açıklayınız. Aşağıdaki kodun çıktısını yazınız:</p>
<pre><code>class Bildirim {
    public void gonder() {
        System.out.println("Bildirim gönderildi.");
    }
}

class EmailBildirim extends Bildirim {
    @Override
    public void gonder() {
        super.gonder();
        System.out.println("E-posta olarak gönderildi.");
    }
}

public class Main {
    public static void main(String[] args) {
        EmailBildirim e = new EmailBildirim();
        e.gonder();
    }
}</code></pre>
<button class="solution-btn" onclick="toggleSolution(this)">💡 Çözümü Göster</button>
<div class="solution-box">
<p><strong><code>super</code> anahtar kelimesinin iki kullanımı:</strong></p>
<p><strong>1. Üst sınıfın metodunu çağırmak:</strong> <code>super.metotAdi()</code> — Alt sınıf, üst sınıfın davranışını tamamen silmek yerine <strong>genişletmek</strong> istediğinde kullanılır.</p>
<p><strong>2. Üst sınıfın constructor'ını çağırmak:</strong> <code>super(parametreler)</code> — Alt sınıfın constructor'ında, üst sınıfın constructor'ını çağırmak için kullanılır. Constructor'ın <strong>ilk satırında</strong> olmalıdır.</p>
<p><strong>Çıktı:</strong></p>
<pre><code>Bildirim gönderildi.
E-posta olarak gönderildi.</code></pre>
<p><strong>Açıklama:</strong> <code>super.gonder()</code> önce üst sınıfın <code>gonder()</code> metodunu çalıştırır ("Bildirim gönderildi."), ardından alt sınıfın kendi ek davranışı çalışır ("E-posta olarak gönderildi."). Bu şekilde üst sınıfın davranışı korunarak genişletilmiş olur — tamamen ezmek yerine üzerine eklemek.</p>
</div>
</div>

<!-- SORU 7 -->
<div class="exam-question" id="q7">
<h3>📝 Soru 7 <span class="exam-points">5 puan</span> <span class="exam-topic">Static Blok</span></h3>
<p>Aşağıdaki kodun çıktısını yazınız. Static blok ile constructor arasındaki farkları (çalışma zamanı, çalışma sayısı, kullanım amacı) açıklayınız.</p>
<pre><code>class Test {
    static {
        System.out.println("Static blok calisti");
    }

    public Test() {
        System.out.println("Constructor calisti");
    }
}

public class Main {
    public static void main(String[] args) {
        Test t1 = new Test();
        Test t2 = new Test();
    }
}</code></pre>
<button class="solution-btn" onclick="toggleSolution(this)">💡 Çözümü Göster</button>
<div class="solution-box">
<p><strong>Çıktı:</strong></p>
<pre><code>Static blok calisti
Constructor calisti
Constructor calisti</code></pre>
<p><strong>Farklar:</strong></p>
<table>
<tr><th>Kriter</th><th>Static Blok</th><th>Constructor</th></tr>
<tr><td>Çalışma zamanı</td><td>Sınıf JVM'e <strong>ilk yüklendiğinde</strong></td><td>Her <strong>new</strong> çağrısında</td></tr>
<tr><td>Çalışma sayısı</td><td><strong>Bir kez</strong> (ilgili class loader için)</td><td><strong>Her nesne oluşturmada</strong></td></tr>
<tr><td>Kullanım amacı</td><td>Static alanların ilklendirilmesi, sınıf düzeyinde hazırlık</td><td>Nesne (instance) alanlarının ilklendirilmesi</td></tr>
<tr><td>Nesne gerekli mi?</td><td><strong>Hayır</strong> — nesne oluşturmadan çalışır</td><td><strong>Evet</strong> — <code>new</code> ile tetiklenir</td></tr>
</table>
<p class="tip">💡 <strong>Neden bir kez?</strong> Sınıf JVM'e sadece bir kez yüklenir. <code>t1</code> oluşturulurken sınıf yüklenir ve static blok çalışır. <code>t2</code> oluşturulurken sınıf zaten yüklü — static blok tekrar çalışmaz.</p>
</div>
</div>

<!-- SORU 8 -->
<div class="exam-question" id="q8">
<h3>📝 Soru 8 <span class="exam-points">5 puan</span> <span class="exam-topic">Paket Yönetimi</span></h3>
<p>Java'da paket (package) kullanmanın <strong>dört faydasını</strong> yazınız. Aşağıdaki katmanlı mimari yapısında her katmanın (ui, domain, service, repository) görevini açıklayınız.</p>
<pre><code>com/firmaadi/rehber/
 ├── ui/
 │    └── RehberConsoleUI.java
 ├── domain/
 │    └── Kisi.java
 ├── service/
 │    └── RehberService.java
 └── repository/
      └── KisiRepository.java</code></pre>
<button class="solution-btn" onclick="toggleSolution(this)">💡 Çözümü Göster</button>
<div class="solution-box">
<p><strong>Dört fayda:</strong></p>
<p>1. <strong>İsim çakışmalarını önler:</strong> Farklı paketlerde aynı isimli sınıflar sorunsuz yaşayabilir.<br>
2. <strong>Kodu modüler hâle getirir:</strong> İlgili sınıflar mantıksal gruplarda toplanır.<br>
3. <strong>Takım çalışmasında düzen sağlar:</strong> Herkes kendi paketinde çalışır, çakışma azalır.<br>
4. <strong>Katmanlı mimari kurmayı kolaylaştırır:</strong> UI, iş mantığı ve veri erişimi birbirinden ayrılır.</p>
<p><strong>Katman görevleri:</strong></p>
<table>
<tr><th>Katman</th><th>Paket</th><th>Görevi</th></tr>
<tr><td><strong>UI (Sunum)</strong></td><td>ui/</td><td>Kullanıcıyla etkileşim — giriş alma, çıktı gösterme. İş mantığı bilmez.</td></tr>
<tr><td><strong>Domain (Model)</strong></td><td>domain/</td><td>Veri modellerini tanımlar. <code>Kisi</code> sınıfı gibi POJO'lar burada. İş kuralı içermez.</td></tr>
<tr><td><strong>Service (İş Mantığı)</strong></td><td>service/</td><td>İş kurallarını uygular — ekleme, silme, arama gibi operasyonların mantığı burada.</td></tr>
<tr><td><strong>Repository (Veri Erişim)</strong></td><td>repository/</td><td>Verilerin saklanma/okunma detayları — veritabanı, dosya, liste gibi kalıcı katman.</td></tr>
</table>
<p class="tip">💡 <strong>Neden katmanlı?</strong> Yarın konsol uygulaması yerine GUI yapmak isterseniz, sadece <code>ui/</code> katmanını değiştirirsiniz — <code>service</code> ve <code>repository</code> aynen kalır. Bu, <strong>separation of concerns</strong> (sorumluluk ayrımı) ilkesidir.</p>
</div>
</div>

<!-- SORU 9 -->
<div class="exam-question" id="q9">
<h3>📝 Soru 9 <span class="exam-points">5 puan</span> <span class="exam-topic">Dizi vs ArrayList</span></h3>
<p>Java'da dizi (array) ile <code>ArrayList</code> arasındaki farkları şu dört kriter üzerinden karşılaştırınız: <strong>(a)</strong> Boyut, <strong>(b)</strong> Tip güvenliği, <strong>(c)</strong> Veri ekleme/silme, <strong>(d)</strong> Performans. Ne zaman dizi, ne zaman ArrayList tercih edilmelidir?</p>
<button class="solution-btn" onclick="toggleSolution(this)">💡 Çözümü Göster</button>
<div class="solution-box">
<table>
<tr><th>Kriter</th><th>Dizi (Array)</th><th>ArrayList</th></tr>
<tr><td>(a) Boyut</td><td><strong>Sabit</strong> — oluşturulurken belirlenir, değiştirilemez</td><td><strong>Dinamik</strong> — eleman ekledikçe otomatik büyür</td></tr>
<tr><td>(b) Tip güvenliği</td><td>Hem primitif hem referans tip tutar (<code>int[]</code>, <code>String[]</code>)</td><td>Sadece referans tip (Generics ile: <code>ArrayList&lt;String&gt;</code>). Primitif için wrapper gerekir (<code>Integer</code>)</td></tr>
<tr><td>(c) Ekleme/silme</td><td>Zor — ortadan silmek için kaydırma gerekir, boyut değişmez</td><td>Kolay — <code>add()</code>, <code>remove()</code> metotları var</td></tr>
<tr><td>(d) Performans</td><td>İndeksle erişim hızlı (O(1)), bellek verimli</td><td>İndeksle erişim hızlı (O(1)) ama ekleme/silme O(n) olabilir, ekstra bellek kullanır</td></tr>
</table>
<p><strong>Ne zaman hangisi?</strong></p>
<p>• <strong>Dizi:</strong> Eleman sayısı baştan biliniyorsa ve değişmeyecekse. Performans kritikse. Primitif tiplerle çalışılıyorsa.<br>
• <strong>ArrayList:</strong> Eleman sayısı değişecekse (dinamik veri). Sık ekleme/silme yapılıyorsa. Koleksiyon API metotlarından faydalanmak isteniyorsa (<code>sort()</code>, <code>contains()</code>, <code>stream()</code> vb.).</p>
</div>
</div>

<!-- SORU 10 -->
<div class="exam-question" id="q10">
<h3>📝 Soru 10 <span class="exam-points">5 puan</span> <span class="exam-topic">HashMap</span></h3>
<p><code>HashMap</code> nedir ve ne zaman kullanılır? Anahtar-değer (key-value) yapısını açıklayınız. Aşağıdaki kodun çıktısını yazınız ve <code>put()</code> ile aynı anahtar tekrar eklendiğinde ne olur?</p>
<pre><code>HashMap&lt;String, Integer&gt; notlar = new HashMap&lt;&gt;();
notlar.put("Ahmet", 85);
notlar.put("Ayşe", 92);
notlar.put("Ahmet", 90);

System.out.println(notlar.get("Ahmet"));
System.out.println(notlar.size());</code></pre>
<button class="solution-btn" onclick="toggleSolution(this)">💡 Çözümü Göster</button>
<div class="solution-box">
<p><strong>HashMap:</strong> Verileri <strong>anahtar-değer (key-value)</strong> çiftleri halinde saklayan veri yapısıdır. Her anahtara karşılık bir değer bulunur. Anahtar tekil olmalıdır.</p>
<p><strong>Ne zaman kullanılır?</strong> "Bu anahtara karşılık gelen değer nedir?" sorusunu sıkça sorduğunuz durumlarda. Öğrenci numarasından nota erişmek, kelimeden anlamına erişmek gibi.</p>
<p><strong>Çıktı:</strong></p>
<pre><code>90
2</code></pre>
<p><strong>Açıklama:</strong> İlk <code>put("Ahmet", 85)</code> ile Ahmet eklendi. İkinci <code>put("Ahmet", 90)</code> ile aynı anahtar tekrar eklendi — HashMap'te aynı anahtar iki kez bulunamaz, bu yüzden <strong>eski değer (85) yeni değerle (90) değiştirilir</strong>. <code>size()</code> 2 döner çünkü sadece 2 farklı anahtar var: "Ahmet" ve "Ayşe".</p>
<p class="tip">💡 <strong>Önemli fark:</strong> <code>ArrayList</code> indeks (0, 1, 2...) ile erişir, <code>HashMap</code> anahtar ile erişir. ArrayList sıralıdır, HashMap sırasızdır (ekleme sırasını garanti etmez; sıralı istiyorsanız <code>LinkedHashMap</code> kullanın).</p>
</div>
</div>

<!-- SORU 11 -->
<div class="exam-question" id="q11">
<h3>📝 Soru 11 <span class="exam-points">5 puan</span> <span class="exam-topic">Set (Küme)</span></h3>
<p><code>Set</code> veri yapısının <code>ArrayList</code>'ten temel farkı nedir? Aşağıdaki kodun çıktısını tahmin ediniz ve nedenini açıklayınız:</p>
<pre><code>HashSet&lt;String&gt; sehirler = new HashSet&lt;&gt;();
sehirler.add("Ankara");
sehirler.add("İstanbul");
sehirler.add("Ankara");
sehirler.add("İzmir");

System.out.println(sehirler.size());
System.out.println(sehirler.contains("Ankara"));</code></pre>
<button class="solution-btn" onclick="toggleSolution(this)">💡 Çözümü Göster</button>
<div class="solution-box">
<p><strong>Temel fark:</strong> <code>Set</code> <strong>tekrarlı eleman kabul etmez</strong>, <code>ArrayList</code> eder. Set'te sıra garanti edilmez, ArrayList'te ekleme sırası korunur.</p>
<p><strong>Çıktı:</strong></p>
<pre><code>3
true</code></pre>
<p><strong>Açıklama:</strong> "Ankara" iki kez eklenmesine rağmen, <code>HashSet</code> aynı elemanı ikinci kez kabul etmez. Set içinde sadece "Ankara", "İstanbul", "İzmir" var — toplam 3 eleman. <code>contains("Ankara")</code> true döner çünkü ilk ekleme başarılı olmuştur.</p>
<p class="tip">💡 <strong>Ne zaman Set?</strong> Tekrarsız koleksiyon gerektiğinde. Örneğin: benzersiz kullanıcı ID'leri, zaten eklendi mi kontrolü, matematiksel küme işlemleri (birleşim, kesişim).</p>
</div>
</div>

<!-- SORU 12 -->
<div class="exam-question" id="q12">
<h3>📝 Soru 12 <span class="exam-points">5 puan</span> <span class="exam-topic">JFrame & Swing Temelleri</span></h3>
<p>Java Swing'de <code>JFrame</code> sınıfının rolünü açıklayınız. Aşağıdaki kodda her satırın (<strong>A-F</strong>) ne yaptığını yazınız. <code>setVisible(true)</code> neden <strong>en son</strong> çağrılmalıdır?</p>
<pre><code>JFrame frame = new JFrame();            // A
frame.setTitle("Uygulama");             // B
frame.setSize(500, 400);                // C
frame.setDefaultCloseOperation(
    JFrame.EXIT_ON_CLOSE);              // D
frame.setLocationRelativeTo(null);      // E
frame.setVisible(true);                 // F</code></pre>
<button class="solution-btn" onclick="toggleSolution(this)">💡 Çözümü Göster</button>
<div class="solution-box">
<p><strong>JFrame:</strong> Swing'in <strong>temel pencere sınıfıdır</strong>. Bir GUI uygulamasının kök (root) konteynerıdır. Her Swing uygulaması en az bir JFrame ile başlar.</p>
<table>
<tr><th>Satır</th><th>Açıklama</th></tr>
<tr><td>A</td><td>Boş bir pencere nesnesi oluşturur</td></tr>
<tr><td>B</td><td>Pencere başlık çubuğundaki metni "Uygulama" olarak ayarlar</td></tr>
<tr><td>C</td><td>Pencere boyutunu 500×400 piksel olarak belirler (genişlik × yükseklik)</td></tr>
<tr><td>D</td><td>Pencere kapatıldığında programın tamamen sonlanmasını sağlar. Bu olmadan pencere kapanır ama Java işlemi arka planda çalışmaya devam eder</td></tr>
<tr><td>E</td><td>Pencereyi ekranın <strong>tam ortasına</strong> konumlandırır (<code>null</code> = ekranın merkezi)</td></tr>
<tr><td>F</td><td>Pencereyi görünür kılar — bu satır olmadan pencere oluşturulur ama ekranda görünmez</td></tr>
</table>
<p><strong>Neden en son?</strong> <code>setVisible(true)</code> daha önce çağrılırsa, sonradan eklenen bileşenler (buton, label vb.) <strong>ekranda görünmeyebilir</strong>. Önce tüm bileşenleri ekle, ayarları yap, en son görünür kıl.</p>
</div>
</div>

<!-- SORU 13 -->
<div class="exam-question" id="q13">
<h3>📝 Soru 13 <span class="exam-points">5 puan</span> <span class="exam-topic">Layout Yönetimi</span></h3>
<p>Java Swing'deki şu üç layout manager'ı karşılaştırınız: <strong>FlowLayout</strong>, <strong>BorderLayout</strong>, <strong>GridLayout</strong>. Her birinin bileşenleri nasıl yerleştirdiğini ve hangi durumda tercih edilmesi gerektiğini açıklayınız.</p>
<button class="solution-btn" onclick="toggleSolution(this)">💡 Çözümü Göster</button>
<div class="solution-box">
<table>
<tr><th>Layout</th><th>Yerleştirme Şekli</th><th>Ne Zaman Kullanılır?</th></tr>
<tr><td><strong>FlowLayout</strong></td><td>Bileşenleri <strong>soldan sağa sırayla</strong> dizer, satır dolunca alt satıra geçer. JPanel'in varsayılan layout'udur.</td><td>Birkaç butonun yan yana durması gereken basit durumlar. Araç çubuğu, buton grupları.</td></tr>
<tr><td><strong>BorderLayout</strong></td><td>Pencereyi <strong>5 bölgeye</strong> ayırır: NORTH, SOUTH, EAST, WEST, CENTER. Her bölgeye en fazla 1 bileşen. JFrame'in varsayılan layout'udur.</td><td>Ana pencere tasarımı — üstte menü, altta durum çubuğu, ortada ana içerik. Sayfa düzeni gereken her yerde.</td></tr>
<tr><td><strong>GridLayout</strong></td><td>Pencereyi <strong>eşit boyutlu hücrelere</strong> (satır × sütun) böler. Her hücreye 1 bileşen, hepsi aynı boyutta.</td><td>Form tasarımı (etiket-alan çiftleri), hesap makinesi tuşları, düzenli ızgara gereken yerler.</td></tr>
</table>
<p><strong>Kullanım örneği:</strong></p>
<pre><code>// FlowLayout (varsayılan)
JPanel panel1 = new JPanel();  // otomatik FlowLayout

// BorderLayout
JFrame frame = new JFrame();   // otomatik BorderLayout
frame.add(buton, BorderLayout.NORTH);

// GridLayout (4 satır, 2 sütun)
JPanel panel2 = new JPanel(new GridLayout(4, 2, 5, 5));</code></pre>
<p class="tip">💡 <strong>İpucu:</strong> Karmaşık arayüzlerde tek bir layout yetmez. İç içe panellerle (nested panels) farklı layout'ları birleştirirsiniz: ana pencere BorderLayout, içindeki bir panel GridLayout, başka bir panel FlowLayout.</p>
</div>
</div>

<!-- SORU 14 -->
<div class="exam-question" id="q14">
<h3>📝 Soru 14 <span class="exam-points">5 puan</span> <span class="exam-topic">Olay Yönetimi</span></h3>
<p>Olay güdümlü programlamanın (event-driven programming) üç temel bileşenini (olay kaynağı, olay nesnesi, olay dinleyicisi) açıklayınız. Aşağıdaki kodda butona tıklandığında ne olur? <code>actionPerformed</code> metodu ne zaman tetiklenir?</p>
<pre><code>JButton kaydetBtn = new JButton("Kaydet");
kaydetBtn.addActionListener(new ActionListener() {
    @Override
    public void actionPerformed(ActionEvent e) {
        System.out.println("Kayıt başarılı!");
    }
});</code></pre>
<button class="solution-btn" onclick="toggleSolution(this)">💡 Çözümü Göster</button>
<div class="solution-box">
<p><strong>Üç bileşen:</strong></p>
<table>
<tr><th>Bileşen</th><th>Görevi</th><th>Bu Koddaki Karşılığı</th></tr>
<tr><td><strong>Olay Kaynağı (Event Source)</strong></td><td>Olayı üreten görsel eleman</td><td><code>kaydetBtn</code> (JButton)</td></tr>
<tr><td><strong>Olay Nesnesi (Event Object)</strong></td><td>Olayın bilgilerini taşıyan nesne</td><td><code>ActionEvent e</code></td></tr>
<tr><td><strong>Olay Dinleyicisi (Event Listener)</strong></td><td>Olaya tepki veren kod bloğu</td><td><code>ActionListener</code>'ın anonim implementasyonu</td></tr>
</table>
<p><strong>Ne olur?</strong> Kullanıcı "Kaydet" butonuna tıkladığında, buton bir <code>ActionEvent</code> nesnesi üretir. Bu olay, <code>addActionListener()</code> ile bağlanmış dinleyiciye iletilir. Dinleyicideki <code>actionPerformed()</code> metodu çalışır ve konsola "Kayıt başarılı!" yazdırılır.</p>
<p><strong>Benzetme:</strong> Buton bir <strong>alarm</strong> gibidir. Alarm çaldığında (tıklanınca), itfaiye (listener) harekete geçer. Ama itfaiyeyi önce alarma <strong>bağlamanız</strong> gerekir (<code>addActionListener</code>) — yoksa alarm çalar, kimse gelmez.</p>
</div>
</div>

<!-- SORU 15 -->
<div class="exam-question" id="q15">
<h3>📝 Soru 15 <span class="exam-points">5 puan</span> <span class="exam-topic">JOptionPane</span></h3>
<p><code>JOptionPane</code> sınıfındaki şu üç diyalog metodunun farkını açıklayınız ve her biri için bir kullanım senaryosu veriniz: <strong>(a)</strong> <code>showMessageDialog</code>, <strong>(b)</strong> <code>showConfirmDialog</code>, <strong>(c)</strong> <code>showInputDialog</code>.</p>
<button class="solution-btn" onclick="toggleSolution(this)">💡 Çözümü Göster</button>
<div class="solution-box">
<table>
<tr><th>Metot</th><th>Amacı</th><th>Dönüş</th><th>Kullanım Senaryosu</th></tr>
<tr><td><strong>(a) showMessageDialog</strong></td><td>Kullanıcıya <strong>bilgi/uyarı</strong> mesajı gösterir. Sadece "Tamam" butonu var.</td><td>void (dönüş yok)</td><td>"Kayıt başarıyla tamamlandı!" bilgilendirmesi</td></tr>
<tr><td><strong>(b) showConfirmDialog</strong></td><td>Kullanıcıdan <strong>onay</strong> ister. Evet/Hayır/İptal butonları.</td><td>int (YES_OPTION=0, NO_OPTION=1, CANCEL_OPTION=2)</td><td>"Silmek istediğinize emin misiniz?" sorusu</td></tr>
<tr><td><strong>(c) showInputDialog</strong></td><td>Kullanıcıdan <strong>metin girişi</strong> alır. Bir text field ve Tamam/İptal butonları.</td><td>String (girilen metin veya null)</td><td>"Yeni dosya adını giriniz:" istemi</td></tr>
</table>
<p><strong>Kod örnekleri:</strong></p>
<pre><code>// (a) Bilgi mesajı
JOptionPane.showMessageDialog(null, "İşlem tamamlandı!");

// (b) Onay diyalogu
int cevap = JOptionPane.showConfirmDialog(null, "Silmek istiyor musunuz?");
if (cevap == JOptionPane.YES_OPTION) { /* sil */ }

// (c) Girdi diyalogu
String isim = JOptionPane.showInputDialog(null, "Adınızı giriniz:");
if (isim != null) { /* kullan */ }</code></pre>
</div>
</div>

<!-- SORU 16 -->
<div class="exam-question" id="q16">
<h3>📝 Soru 16 <span class="exam-points">5 puan</span> <span class="exam-topic">JCheckBox</span></h3>
<p><code>JCheckBox</code> ile <code>JRadioButton</code> arasındaki temel farkı açıklayınız. Aşağıdaki kodda kullanıcı "Kitap Okumak" ve "Dağcılık Yapmak" seçeneklerini işaretleyip butona bastığında <code>sonuc</code> değişkeninin değeri ne olur?</p>
<pre><code>JCheckBox kitapBox = new JCheckBox("Kitap Okumak");
JCheckBox dagcilikBox = new JCheckBox("Dağcılık Yapmak");
JCheckBox bisikletBox = new JCheckBox("Bisiklet Sürmek");

// Kullanıcı kitapBox ve dagcilikBox'ı işaretledi

String sonuc = "";
if (kitapBox.isSelected()) sonuc += "Kitap ";
if (dagcilikBox.isSelected()) sonuc += "Dağcılık ";
if (bisikletBox.isSelected()) sonuc += "Bisiklet ";</code></pre>
<button class="solution-btn" onclick="toggleSolution(this)">💡 Çözümü Göster</button>
<div class="solution-box">
<p><strong>Temel fark:</strong></p>
<table>
<tr><th>Bileşen</th><th>Çoklu Seçim</th><th>Kullanım</th></tr>
<tr><td><code>JCheckBox</code></td><td>✅ <strong>Evet</strong> — birden fazla seçenek aynı anda işaretlenebilir</td><td>Hobiler, tercihler, filtreler</td></tr>
<tr><td><code>JRadioButton</code></td><td>❌ <strong>Hayır</strong> — ButtonGroup ile yalnızca biri seçilebilir</td><td>Cinsiyet, ödeme yöntemi, askerlik durumu</td></tr>
</table>
<p><strong>sonuc değeri:</strong> <code>"Kitap Dağcılık "</code></p>
<p><strong>Açıklama:</strong> <code>kitapBox.isSelected()</code> true → "Kitap " eklenir. <code>dagcilikBox.isSelected()</code> true → "Dağcılık " eklenir. <code>bisikletBox.isSelected()</code> false → eklenmez.</p>
<p class="tip">💡 <strong>isSelected():</strong> Checkbox'ın işaretli olup olmadığını döndürür. <code>setSelected(true/false)</code> ile programatik olarak işaretlenebilir.</p>
</div>
</div>

<!-- SORU 17 -->
<div class="exam-question" id="q17">
<h3>📝 Soru 17 <span class="exam-points">5 puan</span> <span class="exam-topic">JRadioButton & ButtonGroup</span></h3>
<p><code>ButtonGroup</code> sınıfının rolünü açıklayınız. <code>ButtonGroup</code> kullanılmazsa ne olur? Aşağıdaki kodda bir hata vardır; hatayı bulunuz ve düzeltiniz.</p>
<pre><code>JRadioButton erkekBtn = new JRadioButton("Erkek");
JRadioButton kadinBtn = new JRadioButton("Kadın");
JRadioButton digerBtn = new JRadioButton("Diğer");

JPanel panel = new JPanel();
panel.add(erkekBtn);
panel.add(kadinBtn);
panel.add(digerBtn);</code></pre>
<button class="solution-btn" onclick="toggleSolution(this)">💡 Çözümü Göster</button>
<div class="solution-box">
<p><strong>ButtonGroup'un rolü:</strong> Radio button'ları <strong>mantıksal bir grup</strong> içinde toplar ve grubun içinde <strong>yalnızca birinin</strong> seçili olmasını garanti eder. Birine tıklayınca diğeri otomatik olarak kalkar.</p>
<p><strong>ButtonGroup olmadan:</strong> Radio button'lar <strong>checkbox gibi davranır</strong> — hepsi aynı anda seçilebilir. "Yalnızca bir seçenek" kısıtlaması çalışmaz.</p>
<p><strong>Hata:</strong> <code>ButtonGroup</code> oluşturulmamış! Radio button'lar panele eklendi ama gruba eklenmedi.</p>
<p><strong>Düzeltme:</strong></p>
<pre><code>JRadioButton erkekBtn = new JRadioButton("Erkek");
JRadioButton kadinBtn = new JRadioButton("Kadın");
JRadioButton digerBtn = new JRadioButton("Diğer");

// ButtonGroup oluştur ve radio button'ları ekle
ButtonGroup cinsiyetGroup = new ButtonGroup();
cinsiyetGroup.add(erkekBtn);
cinsiyetGroup.add(kadinBtn);
cinsiyetGroup.add(digerBtn);

JPanel panel = new JPanel();
panel.add(erkekBtn);
panel.add(kadinBtn);
panel.add(digerBtn);</code></pre>
<p class="tip">💡 <strong>Dikkat:</strong> <code>ButtonGroup</code> görsel bir bileşen <strong>değildir</strong> — panele eklenmez! Sadece mantıksal gruplama yapar. Radio button'lar hem <code>ButtonGroup</code>'a hem de <code>JPanel</code>'e ayrı ayrı eklenir.</p>
</div>
</div>

<!-- SORU 18 -->
<div class="exam-question" id="q18">
<h3>📝 Soru 18 <span class="exam-points">5 puan</span> <span class="exam-topic">JComboBox & JList</span></h3>
<p><code>JComboBox</code> ile <code>JList</code> arasındaki farkları (görünüm, seçim modu, alan kullanımı, olay dinleyicisi) açıklayınız. Aşağıdaki kodda kullanıcı "İstanbul" seçtiğinde konsola ne yazdırılır?</p>
<pre><code>String[] sehirler = {"Ankara", "İstanbul", "İzmir"};
JComboBox&lt;String&gt; combo = new JComboBox&lt;&gt;(sehirler);

combo.addActionListener(new ActionListener() {
    @Override
    public void actionPerformed(ActionEvent e) {
        String secilen = (String) combo.getSelectedItem();
        int index = combo.getSelectedIndex();
        System.out.println(secilen + " - " + index);
    }
});</code></pre>
<button class="solution-btn" onclick="toggleSolution(this)">💡 Çözümü Göster</button>
<div class="solution-box">
<p><strong>Farklar:</strong></p>
<table>
<tr><th>Özellik</th><th>JComboBox</th><th>JList</th></tr>
<tr><td>Görünüm</td><td>Açılır menü (dropdown)</td><td>Sabit liste</td></tr>
<tr><td>Varsayılan seçim</td><td>Tek seçim</td><td>Tek veya çoklu seçim</td></tr>
<tr><td>Alan kullanımı</td><td>Az yer kaplar (kapalıyken tek satır)</td><td>Daha fazla yer kaplar</td></tr>
<tr><td>Düzenlenebilir mi?</td><td>Evet (<code>setEditable(true)</code>)</td><td>Hayır</td></tr>
<tr><td>Olay dinleyicisi</td><td><code>ActionListener</code></td><td><code>ListSelectionListener</code></td></tr>
</table>
<p><strong>Çıktı:</strong></p>
<pre><code>İstanbul - 1</code></pre>
<p><strong>Açıklama:</strong> <code>getSelectedItem()</code> seçilen elemanın kendisini ("İstanbul"), <code>getSelectedIndex()</code> ise sıfır tabanlı indeksini (1) döndürür. Dizide sıra: Ankara(0), İstanbul(1), İzmir(2).</p>
</div>
</div>

<!-- SORU 19 -->
<div class="exam-question" id="q19">
<h3>📝 Soru 19 <span class="exam-points">5 puan</span> <span class="exam-topic">Swing Bileşenleri</span></h3>
<p>Aşağıdaki Swing bileşenlerinin her birinin ne işe yaradığını ve hangi kullanıcı etkileşimi için tasarlandığını tek cümleyle açıklayınız: <strong>(a)</strong> <code>JLabel</code>, <strong>(b)</strong> <code>JTextField</code>, <strong>(c)</strong> <code>JButton</code>, <strong>(d)</strong> <code>JPanel</code>, <strong>(e)</strong> <code>JScrollPane</code>.</p>
<button class="solution-btn" onclick="toggleSolution(this)">💡 Çözümü Göster</button>
<div class="solution-box">
<table>
<tr><th>Bileşen</th><th>Açıklama</th></tr>
<tr><td><strong>(a) JLabel</strong></td><td>Kullanıcıya <strong>salt okunur metin veya ikon</strong> göstermek için kullanılır — etkileşim sağlamaz, bilgi sunar (form etiketleri, başlıklar, açıklamalar).</td></tr>
<tr><td><strong>(b) JTextField</strong></td><td>Kullanıcıdan <strong>tek satır metin girişi</strong> almak için kullanılır — ad, e-posta, arama kutusu gibi kısa veri girişleri.</td></tr>
<tr><td><strong>(c) JButton</strong></td><td>Kullanıcının <strong>tıklayarak bir eylem tetiklemesi</strong> için kullanılır — kaydet, sil, ara gibi işlemleri başlatır.</td></tr>
<tr><td><strong>(d) JPanel</strong></td><td>Diğer bileşenleri <strong>gruplamak ve düzenlemek</strong> için kullanılan konteyner — kendi layout manager'ı olabilir, iç içe kullanılarak karmaşık arayüzler oluşturulur.</td></tr>
<tr><td><strong>(e) JScrollPane</strong></td><td>İçeriği <strong>pencere sınırlarını aştığında kaydırma çubukları</strong> ekleyen sarmalayıcı — özellikle JList, JTextArea gibi uzun içerikli bileşenlerle kullanılır.</td></tr>
</table>
</div>
</div>

<!-- SORU 20 -->
<div class="exam-question" id="q20">
<h3>📝 Soru 20 <span class="exam-points">5 puan</span> <span class="exam-topic">Bütüncül Senaryo</span></h3>
<p>Bir <strong>öğrenci kayıt formu</strong> uygulaması tasarlamanız isteniyor. Formda şunlar olacak: ad-soyad (metin girişi), bölüm (açılır listeden seçim), cinsiyet (radio button), hobiler (checkbox), kaydet butonu. Butona basılınca tüm bilgiler bir label'da gösterilecek.</p>
<p><strong>(a)</strong> Hangi Swing bileşenlerini kullanırsınız? Her alan için bileşen adını yazınız.<br>
<strong>(b)</strong> Cinsiyet alanında <code>ButtonGroup</code> kullanmazsanız ne olur?<br>
<strong>(c)</strong> Layout stratejinizi açıklayınız (hangi panelde hangi layout?).<br>
<strong>(d)</strong> Kaydet butonuna olay dinleyicisi nasıl bağlanır? Pseudocode ile yazınız.</p>
<button class="solution-btn" onclick="toggleSolution(this)">💡 Çözümü Göster</button>
<div class="solution-box">
<p><strong>(a) Bileşen eşleştirme:</strong></p>
<table>
<tr><th>Form Alanı</th><th>Swing Bileşeni</th></tr>
<tr><td>Ad-Soyad</td><td><code>JTextField</code></td></tr>
<tr><td>Bölüm</td><td><code>JComboBox</code></td></tr>
<tr><td>Cinsiyet</td><td><code>JRadioButton</code> + <code>ButtonGroup</code></td></tr>
<tr><td>Hobiler</td><td><code>JCheckBox</code> (birden fazla)</td></tr>
<tr><td>Kaydet butonu</td><td><code>JButton</code></td></tr>
<tr><td>Sonuç gösterimi</td><td><code>JLabel</code></td></tr>
<tr><td>Etiketler (Ad:, Bölüm: vb.)</td><td><code>JLabel</code></td></tr>
</table>

<p><strong>(b) ButtonGroup olmazsa:</strong> Cinsiyet radio button'ları checkbox gibi davranır — kullanıcı hem "Erkek" hem "Kadın" hem "Diğer"i aynı anda seçebilir. Bu, mantıksal olarak yanlıştır.</p>

<p><strong>(c) Layout stratejisi:</strong></p>
<pre><code>JFrame (BorderLayout)
 ├── NORTH: başlık JLabel
 ├── CENTER: formPanel (GridLayout veya BoxLayout)
 │    ├── satır: JLabel("Ad:") + JTextField
 │    ├── satır: JLabel("Bölüm:") + JComboBox
 │    ├── satır: JLabel("Cinsiyet:") + cinsiyetPanel (FlowLayout)
 │    │    └── JRadioButton x3 + ButtonGroup
 │    └── satır: JLabel("Hobiler:") + hobiPanel (FlowLayout)
 │         └── JCheckBox x N
 ├── SOUTH: southPanel (FlowLayout)
 │    ├── JButton("Kaydet")
 │    └── JLabel(sonuç)</code></pre>

<p><strong>(d) Olay dinleyicisi (pseudocode):</strong></p>
<pre><code>kaydetBtn.addActionListener(new ActionListener() {
    @Override
    public void actionPerformed(ActionEvent e) {
        String ad = adField.getText();
        String bolum = (String) bolumCombo.getSelectedItem();

        String cinsiyet = "";
        if (erkekBtn.isSelected()) cinsiyet = "Erkek";
        else if (kadinBtn.isSelected()) cinsiyet = "Kadın";

        String hobiler = "";
        if (kitapBox.isSelected()) hobiler += "Kitap ";
        if (sporBox.isSelected()) hobiler += "Spor ";

        sonucLabel.setText(ad + " | " + bolum
            + " | " + cinsiyet + " | " + hobiler);
    }
});</code></pre>
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
