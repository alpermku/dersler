---
layout: post
title: "Vize Deneme Sınavı: Açık Uçlu 20 Soru"
date: 2026-03-28 14:00:00 +0300
categories: algoritma-ve-programlama-ii
course_id: algoritma-ve-programlama-ii
tags: [c-programlama, sınav, vize, açık-uçlu, deneme]
---

Bu deneme sınavı, Algoritma ve Programlama II dersinde işlenen tüm konuları kapsayan **açık uçlu** sorulardan oluşmaktadır. Her sorunun altındaki **"Çözümü Göster"** butonuna tıklayarak detaylı çözümü görebilirsiniz.

**Süre:** 90 dakika | **Toplam:** 20 soru | **Zorluk:** Orta-İleri

**Kapsanan Konular:** Tek boyutlu diziler (tanımlama, sıfırlama, döngü), #define ve sabitler, Dizi sınır ihlali, Frekans analizi (histogram), Çok boyutlu diziler, Dizileri fonksiyona geçirme, Zar simülasyonu (rand/srand), Tekrar eden sayı eleme, Pointer (işaretçi) kavramı, Stringler ve karakter işlemleri.

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
<h3>📝 Soru 1 <span class="exam-points">5 puan</span> <span class="exam-topic">Dizi Temelleri</span></h3>
<p>C dilinde dizi (array) nedir? Dizilerin bellekte <strong>ardışık (contiguous)</strong> saklanması ne anlama gelir? 5 elemanlı bir <code>int</code> dizisinin ilk elemanı <code>0x100</code> adresindeyse, 4. elemanın (indeks 3) bellek adresi ne olur? Hesaplamanızı gösteriniz.</p>
<button class="solution-btn" onclick="toggleSolution(this)">💡 Çözümü Göster</button>
<div class="solution-box">
<p><strong>Dizi:</strong> Aynı veri tipine sahip birden fazla değişkeni, tek bir isim altında saklayan veri yapısıdır. 100 öğrencinin notunu saklamak için 100 ayrı değişken yerine tek bir <code>notlar[100]</code> dizisi tanımlanır.</p>
<p><strong>Ardışık saklama:</strong> Dizinin tüm elemanları bellekte yan yana, boşluksuz olarak tutulur. Bu sayede herhangi bir elemana indeksle doğrudan (O(1)) erişim mümkündür — adres hesaplaması basit bir çarpma ve toplama ile yapılır.</p>
<p><strong>Hesaplama:</strong></p>
<p>Bir <code>int</code> = 4 byte (çoğu sistemde).<br>
Başlangıç adresi: <code>0x100</code><br>
İndeks 3'ün adresi = Başlangıç + (indeks × sizeof(int))<br>
= <code>0x100</code> + (3 × 4) = <code>0x100</code> + 12 = <strong><code>0x10C</code></strong></p>
<p><strong>Tüm adresler:</strong></p>
<table>
<tr><th>İndeks</th><th>Adres</th></tr>
<tr><td>0</td><td>0x100</td></tr>
<tr><td>1</td><td>0x104</td></tr>
<tr><td>2</td><td>0x108</td></tr>
<tr><td>3</td><td><strong>0x10C</strong></td></tr>
<tr><td>4</td><td>0x110</td></tr>
</table>
</div>
</div>

<!-- SORU 2 -->
<div class="exam-question" id="q2">
<h3>📝 Soru 2 <span class="exam-points">5 puan</span> <span class="exam-topic">Dizi Tanımlama & Sıfırlama</span></h3>
<p>Aşağıdaki dizi tanımlamalarının her birinin sonucunu yazınız. Hangileri tüm elemanları sıfırlar? Hangileri kısmen başlatır?</p>
<pre><code>int a[5];                        // (A)
int b[5] = {0};                  // (B)
int c[5] = {10, 20};             // (C)
int d[] = {3, 6, 9, 12};        // (D)</code></pre>
<button class="solution-btn" onclick="toggleSolution(this)">💡 Çözümü Göster</button>
<div class="solution-box">
<table>
<tr><th>Tanım</th><th>Elemanlar</th><th>Açıklama</th></tr>
<tr><td>(A) <code>int a[5];</code></td><td><strong>Belirsiz (çöp değerler)</strong></td><td>Başlatma yapılmadığı için bellekte ne varsa o kalır. Global tanımlanırsa sıfırlanır, ama local'de <strong>asla güvenme</strong>.</td></tr>
<tr><td>(B) <code>int b[5] = {0};</code></td><td><strong>{0, 0, 0, 0, 0}</strong></td><td>İlk elemana 0 atanır, geri kalanlar otomatik 0 ile doldurulur. <strong>Tüm diziyi sıfırlamanın en temiz yolu.</strong></td></tr>
<tr><td>(C) <code>int c[5] = {10, 20};</code></td><td><strong>{10, 20, 0, 0, 0}</strong></td><td>İlk iki eleman verilmiş, geri kalanlar otomatik 0. <strong>Kısmi başlatma.</strong></td></tr>
<tr><td>(D) <code>int d[] = {3, 6, 9, 12};</code></td><td><strong>{3, 6, 9, 12}</strong></td><td>Boyut belirtilmemiş — derleyici eleman sayısına bakarak boyutu <strong>4</strong> olarak belirler.</td></tr>
</table>
<p class="tip">💡 <strong>Altın kural:</strong> Local dizileri başlatmadan kullanmayın! <code>= {0}</code> her zaman güvenli bir başlangıçtır.</p>
</div>
</div>

<!-- SORU 3 -->
<div class="exam-question" id="q3">
<h3>📝 Soru 3 <span class="exam-points">5 puan</span> <span class="exam-topic">#define & Sabitler</span></h3>
<p><strong>"Sihirli sayı" (magic number)</strong> nedir ve neden tehlikelidir? <code>#define</code> kullanarak bu sorunu nasıl çözersiniz? Aşağıdaki kodun sorununu tespit edip <code>#define</code> ile düzeltiniz:</p>
<pre><code>for (int i = 0; i &lt; 10; i++) {
    notlar[i] = 0;
}
// ... 50 satır sonra ...
for (int i = 0; i &lt; 10; i++) {
    printf("%d ", notlar[i]);
}</code></pre>
<button class="solution-btn" onclick="toggleSolution(this)">💡 Çözümü Göster</button>
<div class="solution-box">
<p><strong>Sihirli sayı:</strong> Kodun içine serpiştirilmiş, ne anlama geldiği belirsiz sayılardır. <code>10</code> burada öğrenci sayısı mı, soru sayısı mı, dizi boyutu mu? Sadece yazan bilir. 50 farklı yerde geçiyorsa ve <code>20</code> yapmanız gerekirse, hepsini tek tek bulup değiştirmeniz gerekir — hata riski çok yüksek.</p>
<p><strong>Düzeltilmiş kod:</strong></p>
<pre><code>#define OGRENCI_SAYISI 10

for (int i = 0; i &lt; OGRENCI_SAYISI; i++) {
    notlar[i] = 0;
}
// ... 50 satır sonra ...
for (int i = 0; i &lt; OGRENCI_SAYISI; i++) {
    printf("%d ", notlar[i]);
}</code></pre>
<p><strong>Avantajları:</strong></p>
<p>1. <strong>Okunabilirlik:</strong> <code>OGRENCI_SAYISI</code> ne olduğunu anlatır, <code>10</code> anlatmaz.<br>
2. <strong>Tek noktadan değişiklik:</strong> 20 yapmanız gerekirse sadece <code>#define</code> satırını değiştirirsiniz.<br>
3. <strong>Hata önleme:</strong> Bir yerde 10, diğerinde 20 yazma riski ortadan kalkar.</p>
<p class="tip">💡 <strong>Kural:</strong> <code>#define</code> isimleri BÜYÜK HARF ile yazılır (gelenek). Derleyici, derleme öncesi metin değiştirme (preprocessing) ile tüm <code>OGRENCI_SAYISI</code> ifadelerini <code>10</code> ile değiştirir.</p>
</div>
</div>

<!-- SORU 4 -->
<div class="exam-question" id="q4">
<h3>📝 Soru 4 <span class="exam-points">5 puan</span> <span class="exam-topic">Dizi Sınır İhlali</span></h3>
<p>C dilinde dizi sınır ihlali (array out of bounds) nedir? Neden C derleyicisi bu hatayı <strong>yakalamaz</strong>? Aşağıdaki kodda ne tür sorunlar oluşabilir?</p>
<pre><code>int sayilar[5] = {10, 20, 30, 40, 50};

for (int i = 0; i &lt;= 7; i++) {
    printf("%d ", sayilar[i]);
}</code></pre>
<button class="solution-btn" onclick="toggleSolution(this)">💡 Çözümü Göster</button>
<div class="solution-box">
<p><strong>Dizi sınır ihlali:</strong> Dizinin tanımlı boyutunun dışındaki indekslere (negatif veya boyuttan büyük) erişmeye çalışmaktır. Dizi 5 elemanlıysa (indeks 0-4), indeks 5, 6, 7'ye erişmek sınır ihlalidir.</p>
<p><strong>C neden yakalamaz?</strong> Java veya Python gibi modern diller <code>IndexOutOfBoundsException</code> fırlatır. C'de ise <strong>sınır kontrolü yoktur</strong>. C derleyicisi programcıya güvenir: "10. elemana erişmek istiyorsan, bir bildiğin vardır" der ve bellekte o adrese gider.</p>
<p><strong>Kodun sorunları (indeks 5, 6, 7):</strong></p>
<p>1. <strong>Çöp değer okuma:</strong> Diziye ait olmayan bellek adreslerindeki rastgele veriler okunur — her çalıştırmada farklı sonuç.<br>
2. <strong>Segmentation fault:</strong> Erişilen adres programın bellek alanı dışındaysa işletim sistemi programı sonlandırır.<br>
3. <strong>Buffer overflow:</strong> Yazma işlemi yapılsaydı, başka değişkenlerin veya fonksiyon dönüş adresinin üzerine yazılabilirdi — <strong>güvenlik açığı</strong>.</p>
<p><strong>Düzeltme:</strong> <code>i &lt;= 7</code> → <code>i &lt; 5</code></p>
<p class="tip">💡 <strong>Tarihsel not:</strong> Buffer overflow, yazılım tarihinin en büyük güvenlik açıklarından biridir (Morris Worm, 1988). C'nin sınır kontrolü olmaması hem gücü hem de en büyük zayıflığıdır.</p>
</div>
</div>

<!-- SORU 5 -->
<div class="exam-question" id="q5">
<h3>📝 Soru 5 <span class="exam-points">5 puan</span> <span class="exam-topic">Frekans Analizi</span></h3>
<p>Frekans (histogram) hesabı nedir? 40 öğrencinin 1-10 arasında verdiği puanları analiz etmek için neden 40 tane <code>if-else</code> yazmak yerine frekans dizisi kullanılır? Aşağıdaki kodun çıktısını yazınız:</p>
<pre><code>int veriler[8] = {3, 1, 3, 4, 1, 3, 2, 4};
int frekans[5] = {0};  // indeks 0-4

for (int i = 0; i &lt; 8; i++) {
    frekans[veriler[i]]++;
}

for (int i = 1; i &lt;= 4; i++) {
    printf("%d: %d kez\n", i, frekans[i]);
}</code></pre>
<button class="solution-btn" onclick="toggleSolution(this)">💡 Çözümü Göster</button>
<div class="solution-box">
<p><strong>Frekans hesabı:</strong> Bir veri setindeki her değerin kaç kez tekrar ettiğini bulmaktır. "Bu puanı kaç kişi verdi?" sorusunu cevaplar.</p>
<p><strong>Neden frekans dizisi?</strong> 10 farklı puan için 10 tane if-else yazılabilir ama bu çirkin ve genişletilemez bir çözümdür. Puanlar 1-100 arasında olsaydı 100 tane if gerekir! Frekans dizisi ile <strong>tek bir satır</strong> yeterlidir: <code>frekans[puan]++</code></p>
<p><strong>Adım adım izleme:</strong></p>
<table>
<tr><th>i</th><th>veriler[i]</th><th>İşlem</th><th>frekans dizisi</th></tr>
<tr><td>0</td><td>3</td><td>frekans[3]++</td><td>{0, 0, 0, <strong>1</strong>, 0}</td></tr>
<tr><td>1</td><td>1</td><td>frekans[1]++</td><td>{0, <strong>1</strong>, 0, 1, 0}</td></tr>
<tr><td>2</td><td>3</td><td>frekans[3]++</td><td>{0, 1, 0, <strong>2</strong>, 0}</td></tr>
<tr><td>3</td><td>4</td><td>frekans[4]++</td><td>{0, 1, 0, 2, <strong>1</strong>}</td></tr>
<tr><td>4</td><td>1</td><td>frekans[1]++</td><td>{0, <strong>2</strong>, 0, 2, 1}</td></tr>
<tr><td>5</td><td>3</td><td>frekans[3]++</td><td>{0, 2, 0, <strong>3</strong>, 1}</td></tr>
<tr><td>6</td><td>2</td><td>frekans[2]++</td><td>{0, 2, <strong>1</strong>, 3, 1}</td></tr>
<tr><td>7</td><td>4</td><td>frekans[4]++</td><td>{0, 2, 1, 3, <strong>2</strong>}</td></tr>
</table>
<p><strong>Çıktı:</strong></p>
<pre><code>1: 2 kez
2: 1 kez
3: 3 kez
4: 2 kez</code></pre>
</div>
</div>

<!-- SORU 6 -->
<div class="exam-question" id="q6">
<h3>📝 Soru 6 <span class="exam-points">5 puan</span> <span class="exam-topic">Çok Boyutlu Diziler</span></h3>
<p>Tek boyutlu dizi ile iki boyutlu dizi arasındaki farkı açıklayınız. 2 boyutlu bir dizi bellekte nasıl saklanır (satır-öncelikli / row-major)? Aşağıdaki dizinin bellekteki düz sırasını yazınız:</p>
<pre><code>int m[2][3] = {
    {10, 20, 30},
    {40, 50, 60}
};</code></pre>
<button class="solution-btn" onclick="toggleSolution(this)">💡 Çözümü Göster</button>
<div class="solution-box">
<p><strong>Fark:</strong></p>
<p>• <strong>Tek boyutlu dizi:</strong> Bir <strong>liste</strong> (satır) — <code>int notlar[5]</code><br>
• <strong>İki boyutlu dizi:</strong> Bir <strong>tablo</strong> (matris) — satır ve sütunlardan oluşur: <code>int tablo[satir][sutun]</code></p>
<p><strong>Satır-öncelikli (row-major):</strong> C dilinde 2B diziler bellekte <strong>satır satır</strong> ardışık saklanır. Önce 0. satırın tüm elemanları, sonra 1. satırın tüm elemanları gelir.</p>
<p><strong>Bellekteki düz sıra:</strong></p>
<pre><code>Adres:  [0]  [1]  [2]  [3]  [4]  [5]
Değer:  10   20   30   40   50   60
        ← Satır 0 →   ← Satır 1 →</code></pre>
<p><strong>Eleman erişimi:</strong> <code>m[1][2]</code> → Satır 1, Sütun 2 → bellekte indeks = 1×3 + 2 = 5 → değer: <strong>60</strong></p>
<p class="tip">💡 <strong>Genel formül:</strong> <code>m[i][j]</code>'nin bellekteki konumu = i × sütun_sayısı + j. Bu yüzden iç döngüde sütun üzerinde ilerlemek (j++) cache-friendly'dir ve performans açısından önemlidir.</p>
</div>
</div>

<!-- SORU 7 -->
<div class="exam-question" id="q7">
<h3>📝 Soru 7 <span class="exam-points">5 puan</span> <span class="exam-topic">2B Dizi İşlemleri</span></h3>
<p>3 öğrencinin 4 dersten aldığı notları tutan bir 2B dizi verilmiştir. Her öğrencinin not ortalamasını hesaplayan kodu yazınız.</p>
<pre><code>int notlar[3][4] = {
    {70, 85, 90, 60},
    {55, 75, 80, 95},
    {100, 90, 85, 70}
};</code></pre>
<button class="solution-btn" onclick="toggleSolution(this)">💡 Çözümü Göster</button>
<div class="solution-box">
<pre><code>#define OGRENCI 3
#define DERS 4

int notlar[OGRENCI][DERS] = {
    {70, 85, 90, 60},
    {55, 75, 80, 95},
    {100, 90, 85, 70}
};

for (int i = 0; i &lt; OGRENCI; i++) {
    int toplam = 0;
    for (int j = 0; j &lt; DERS; j++) {
        toplam += notlar[i][j];
    }
    float ortalama = (float)toplam / DERS;
    printf("Ogrenci %d ortalamasi: %.1f\n", i + 1, ortalama);
}</code></pre>
<p><strong>Çıktı:</strong></p>
<pre><code>Ogrenci 1 ortalamasi: 76.2
Ogrenci 2 ortalamasi: 76.2
Ogrenci 3 ortalamasi: 86.2</code></pre>
<p><strong>Mantık:</strong> Dış döngü öğrenciler (satırlar), iç döngü dersler (sütunlar) üzerinde ilerler. Her satırın toplamını hesaplayıp ders sayısına böleriz. <code>(float)</code> cast'i tam sayı bölmesini ondalık bölmeye çevirir.</p>
</div>
</div>

<!-- SORU 8 -->
<div class="exam-question" id="q8">
<h3>📝 Soru 8 <span class="exam-points">5 puan</span> <span class="exam-topic">Fonksiyona Dizi Geçirme</span></h3>
<p>C dilinde bir diziyi fonksiyona geçirdiğinizde <strong>kopya mı</strong> gönderilir yoksa <strong>orijinal mi</strong>? Bu, normal değişkenlerden nasıl farklıdır? Aşağıdaki kodun çıktısını yazınız:</p>
<pre><code>void degerArtir(int x) {
    x = x + 100;
}

void diziDegistir(int dizi[], int boyut) {
    for (int i = 0; i &lt; boyut; i++)
        dizi[i] = dizi[i] * 2;
}

int main() {
    int sayi = 5;
    degerArtir(sayi);
    printf("sayi: %d\n", sayi);

    int arr[3] = {1, 2, 3};
    diziDegistir(arr, 3);
    printf("arr: %d %d %d\n", arr[0], arr[1], arr[2]);
}</code></pre>
<button class="solution-btn" onclick="toggleSolution(this)">💡 Çözümü Göster</button>
<div class="solution-box">
<p><strong>Fark:</strong></p>
<table>
<tr><th></th><th>Normal Değişken</th><th>Dizi</th></tr>
<tr><td>Geçiş şekli</td><td><strong>Kopya</strong> (pass by value)</td><td><strong>Orijinal</strong> (adres gönderilir)</td></tr>
<tr><td>Fonksiyonda değişiklik</td><td>Orijinali <strong>etkilemez</strong></td><td>Orijinali <strong>etkiler</strong></td></tr>
</table>
<p><strong>Çıktı:</strong></p>
<pre><code>sayi: 5
arr: 2 4 6</code></pre>
<p><strong>Açıklama:</strong></p>
<p>• <code>degerArtir(sayi)</code>: <code>sayi</code>'nın kopyası gönderilir. Fonksiyon kopyayı değiştirir (105), ama <code>main</code>'deki <code>sayi</code> hâlâ <strong>5</strong>.<br>
• <code>diziDegistir(arr, 3)</code>: Dizinin başlangıç adresi gönderilir. Fonksiyon orijinal diziyi değiştirir: her eleman 2 ile çarpılır → <strong>{2, 4, 6}</strong>.</p>
<p class="tip">💡 <strong>Benzetme:</strong> Normal değişken geçirmek = fotokopi vermek. Dizi geçirmek = ev anahtarını vermek. Anahtarla giren kişi evin mobilyalarını değiştirebilir!</p>
</div>
</div>

<!-- SORU 9 -->
<div class="exam-question" id="q9">
<h3>📝 Soru 9 <span class="exam-points">5 puan</span> <span class="exam-topic">Fonksiyona Dizi Geçirme</span></h3>
<p>Bir fonksiyon yazınız: <code>int enBuyuk(int dizi[], int boyut)</code> — dizideki en büyük elemanı döndürsün. Neden fonksiyon parametresinde dizinin <strong>boyutunu</strong> ayrıca göndermek zorunludur?</p>
<button class="solution-btn" onclick="toggleSolution(this)">💡 Çözümü Göster</button>
<div class="solution-box">
<pre><code>int enBuyuk(int dizi[], int boyut) {
    int max = dizi[0];
    for (int i = 1; i &lt; boyut; i++) {
        if (dizi[i] &gt; max) {
            max = dizi[i];
        }
    }
    return max;
}

// Kullanım:
int notlar[5] = {72, 95, 60, 88, 91};
int sonuc = enBuyuk(notlar, 5);
printf("En buyuk: %d\n", sonuc);  // 95</code></pre>
<p><strong>Boyut neden gerekli?</strong> C'de bir dizi fonksiyona geçirildiğinde aslında dizinin <strong>başlangıç adresi</strong> (pointer) gönderilir. Fonksiyon dizinin kaç elemanlı olduğunu <strong>bilemez</strong> — bu bilgi kaybolur. Bu yüzden boyutu ayrı bir parametre olarak göndermek zorunludur.</p>
<p class="tip">💡 <strong>sizeof tuzağı:</strong> Fonksiyon içinde <code>sizeof(dizi)</code> yazmak dizinin boyutunu vermez — pointer'ın boyutunu (4 veya 8 byte) verir! Boyutu her zaman parametre olarak alın.</p>
</div>
</div>

<!-- SORU 10 -->
<div class="exam-question" id="q10">
<h3>📝 Soru 10 <span class="exam-points">5 puan</span> <span class="exam-topic">Zar Simülasyonu</span></h3>
<p><code>rand()</code> ve <code>srand()</code> fonksiyonlarının görevlerini açıklayınız. <code>srand(time(NULL))</code> neden programın başında bir kez çağrılır? 1-6 arası rastgele zar değeri üretmek için hangi formül kullanılır?</p>
<button class="solution-btn" onclick="toggleSolution(this)">💡 Çözümü Göster</button>
<div class="solution-box">
<p><strong>rand():</strong> Sözde-rastgele (pseudo-random) bir tamsayı üretir. 0 ile <code>RAND_MAX</code> arasında değer döndürür.</p>
<p><strong>srand():</strong> Rastgele sayı üretecinin <strong>tohum (seed)</strong> değerini ayarlar. Aynı tohum = aynı sayı dizisi. Farklı tohum = farklı sayı dizisi.</p>
<p><strong>srand(time(NULL)) neden bir kez?</strong></p>
<p>• <code>time(NULL)</code> her saniye farklı bir değer döndürür → her çalıştırmada farklı sayı dizisi.<br>
• Sadece <strong>bir kez</strong> çağrılır çünkü her çağrıda sıfırdan başlatır. Döngü içinde çağrılırsa aynı saniyede aynı tohum = aynı sayılar!</p>
<p><strong>1-6 arası zar formülü:</strong></p>
<pre><code>int zar = rand() % 6 + 1;</code></pre>
<p><strong>Mantık:</strong> <code>rand() % 6</code> → 0-5 arası, <code>+ 1</code> → 1-6 arası.</p>
<p><strong>Genel formül:</strong> <code>rand() % (max - min + 1) + min</code></p>
<p><strong>Tam kullanım:</strong></p>
<pre><code>#include &lt;stdlib.h&gt;
#include &lt;time.h&gt;

srand(time(NULL));  // Program başında BİR KEZ

for (int i = 0; i &lt; 10; i++) {
    int zar = rand() % 6 + 1;
    printf("Zar: %d\n", zar);
}</code></pre>
</div>
</div>

<!-- SORU 11 -->
<div class="exam-question" id="q11">
<h3>📝 Soru 11 <span class="exam-points">5 puan</span> <span class="exam-topic">Tekrar Eleme</span></h3>
<p>Kullanıcıdan 10 adet sayı alınıyor. Daha önce girilmemiş sayılar bir diziye ekleniyor, tekrar edenler atlanıyor. Bu algoritmanın mantığını adım adım açıklayınız. Aşağıdaki girdiler için dizinin son halini yazınız:</p>
<pre><code>Girdiler: 5, 3, 5, 8, 3, 7, 8, 1, 5, 7</code></pre>
<button class="solution-btn" onclick="toggleSolution(this)">💡 Çözümü Göster</button>
<div class="solution-box">
<p><strong>Algoritma:</strong></p>
<p>1. Benzersiz elemanları tutacak bir dizi ve bir sayaç (<code>benzersizSayisi = 0</code>) tanımla.<br>
2. Her yeni girdi için, benzersiz dizisini baştan sona tara.<br>
3. Eğer girdi dizide <strong>yoksa</strong> → diziye ekle, sayacı artır.<br>
4. Eğer dizide <strong>varsa</strong> → atla.</p>
<p><strong>Adım adım izleme:</strong></p>
<table>
<tr><th>Girdi</th><th>Dizide var mı?</th><th>İşlem</th><th>Benzersiz Dizi</th></tr>
<tr><td>5</td><td>Hayır</td><td>Ekle</td><td>{5}</td></tr>
<tr><td>3</td><td>Hayır</td><td>Ekle</td><td>{5, 3}</td></tr>
<tr><td>5</td><td>Evet</td><td>Atla</td><td>{5, 3}</td></tr>
<tr><td>8</td><td>Hayır</td><td>Ekle</td><td>{5, 3, 8}</td></tr>
<tr><td>3</td><td>Evet</td><td>Atla</td><td>{5, 3, 8}</td></tr>
<tr><td>7</td><td>Hayır</td><td>Ekle</td><td>{5, 3, 8, 7}</td></tr>
<tr><td>8</td><td>Evet</td><td>Atla</td><td>{5, 3, 8, 7}</td></tr>
<tr><td>1</td><td>Hayır</td><td>Ekle</td><td>{5, 3, 8, 7, 1}</td></tr>
<tr><td>5</td><td>Evet</td><td>Atla</td><td>{5, 3, 8, 7, 1}</td></tr>
<tr><td>7</td><td>Evet</td><td>Atla</td><td>{5, 3, 8, 7, 1}</td></tr>
</table>
<p><strong>Son hali:</strong> <code>{5, 3, 8, 7, 1}</code> — 5 benzersiz eleman.</p>
</div>
</div>

<!-- SORU 12 -->
<div class="exam-question" id="q12">
<h3>📝 Soru 12 <span class="exam-points">5 puan</span> <span class="exam-topic">Pointer Temelleri</span></h3>
<p>Pointer (işaretçi) nedir? Bir değişkenin <strong>adresi</strong> ile <strong>değeri</strong> arasındaki farkı açıklayınız. <code>&amp;</code> ve <code>*</code> operatörlerinin görevlerini yazınız. Aşağıdaki kodun çıktısını tahmin ediniz:</p>
<pre><code>int sayi = 42;
int *ptr = &amp;sayi;

printf("Deger: %d\n", sayi);
printf("Adres: %p\n", &amp;sayi);
printf("ptr icerigi: %p\n", ptr);
printf("ptr'nin gosterdigi deger: %d\n", *ptr);</code></pre>
<button class="solution-btn" onclick="toggleSolution(this)">💡 Çözümü Göster</button>
<div class="solution-box">
<p><strong>Pointer:</strong> Başka bir değişkenin <strong>bellek adresini</strong> saklayan değişkendir. RAM'i posta kutusu sırası gibi düşünün — her kutunun bir adresi (numarası) ve bir içeriği (değeri) vardır. Pointer, "şu numaralı kutuya bak" diyen not kâğıdıdır.</p>
<p><strong>İki operatör:</strong></p>
<table>
<tr><th>Operatör</th><th>Adı</th><th>Görevi</th></tr>
<tr><td><code>&amp;</code></td><td>Adres operatörü (address-of)</td><td>Değişkenin bellek adresini verir</td></tr>
<tr><td><code>*</code></td><td>Dereference (içerik) operatörü</td><td>Pointer'ın gösterdiği adresteki değere erişir</td></tr>
</table>
<p><strong>Çıktı</strong> (adres değerleri sisteme göre değişir):</p>
<pre><code>Deger: 42
Adres: 0x7ffd1234abcd        (örnek adres)
ptr icerigi: 0x7ffd1234abcd   (aynı adres!)
ptr'nin gosterdigi deger: 42</code></pre>
<p><strong>Açıklama:</strong> <code>&amp;sayi</code> ve <code>ptr</code> aynı adresi gösterir çünkü <code>ptr = &amp;sayi</code> ile atanmıştır. <code>*ptr</code> ise o adresteki değere (42) erişir.</p>
</div>
</div>

<!-- SORU 13 -->
<div class="exam-question" id="q13">
<h3>📝 Soru 13 <span class="exam-points">5 puan</span> <span class="exam-topic">Pointer & Fonksiyon</span></h3>
<p>Pointer kullanarak bir fonksiyonun çağıran taraftaki değişkeni <strong>gerçekten değiştirmesini</strong> sağlayınız. Aşağıdaki <code>swap</code> fonksiyonunu pointer ile tamamlayınız:</p>
<pre><code>void swap(int *a, int *b) {
    // İki değişkenin değerlerini takas et
    // BURAYA YAZINIZ
}

int main() {
    int x = 5, y = 10;
    swap(&amp;x, &amp;y);
    printf("x=%d, y=%d\n", x, y);  // x=10, y=5
}</code></pre>
<button class="solution-btn" onclick="toggleSolution(this)">💡 Çözümü Göster</button>
<div class="solution-box">
<pre><code>void swap(int *a, int *b) {
    int gecici = *a;  // a'nın gösterdiği değeri sakla
    *a = *b;          // b'nin değerini a'ya yaz
    *b = gecici;      // saklanan değeri b'ye yaz
}</code></pre>
<p><strong>Neden pointer gerekli?</strong> Normal parametrelerle (pass by value) fonksiyon kopyalar üzerinde çalışır — orijinal değişkenler değişmez. Pointer ile fonksiyona değişkenlerin <strong>adreslerini</strong> gönderiyoruz. <code>*a</code> ve <code>*b</code> ile o adreslerdeki değerlere doğrudan erişip değiştiriyoruz.</p>
<p><strong>Adım adım:</strong></p>
<table>
<tr><th>Adım</th><th>İşlem</th><th>*a (x)</th><th>*b (y)</th><th>gecici</th></tr>
<tr><td>Başlangıç</td><td>—</td><td>5</td><td>10</td><td>—</td></tr>
<tr><td>1</td><td>gecici = *a</td><td>5</td><td>10</td><td>5</td></tr>
<tr><td>2</td><td>*a = *b</td><td><strong>10</strong></td><td>10</td><td>5</td></tr>
<tr><td>3</td><td>*b = gecici</td><td>10</td><td><strong>5</strong></td><td>5</td></tr>
</table>
</div>
</div>

<!-- SORU 14 -->
<div class="exam-question" id="q14">
<h3>📝 Soru 14 <span class="exam-points">5 puan</span> <span class="exam-topic">Pointer & Dizi İlişkisi</span></h3>
<p>C'de dizi adı aslında ne ifade eder? Aşağıdaki iki erişim yöntemi neden aynı sonucu verir? Her birinin çıktısını yazınız:</p>
<pre><code>int dizi[4] = {10, 20, 30, 40};
int *ptr = dizi;

printf("%d\n", dizi[2]);
printf("%d\n", *(ptr + 2));
printf("%d\n", *(dizi + 2));</code></pre>
<button class="solution-btn" onclick="toggleSolution(this)">💡 Çözümü Göster</button>
<div class="solution-box">
<p><strong>Dizi adı:</strong> C'de dizi adı (<code>dizi</code>), dizinin <strong>ilk elemanının bellek adresini</strong> temsil eder. Yani <code>dizi</code> ile <code>&amp;dizi[0]</code> aynı şeydir. Bu nedenle <code>int *ptr = dizi;</code> yazdığımızda ptr dizinin başını gösterir.</p>
<p><strong>Çıktı (üçü de aynı):</strong></p>
<pre><code>30
30
30</code></pre>
<p><strong>Açıklama:</strong></p>
<p>• <code>dizi[2]</code> → indeks notasyonu, doğrudan 3. elemana erişir.<br>
• <code>*(ptr + 2)</code> → pointer aritmetiği: ptr başlangıç adresi + 2 eleman ileri = 3. elemanın adresi, <code>*</code> ile değerine erişir.<br>
• <code>*(dizi + 2)</code> → dizi adı da bir adres olduğu için aynı pointer aritmetiği çalışır.</p>
<p><strong>Eşdeğerlik:</strong> <code>dizi[i]</code> ifadesi aslında derleyici tarafından <code>*(dizi + i)</code> olarak yorumlanır. İkisi birebir aynı makine kodunu üretir.</p>
<p class="tip">💡 <strong>Önemli fark:</strong> Dizi adı bir <strong>sabit pointer</strong>'dır — <code>dizi++</code> yazamazsınız. Ama <code>ptr++</code> yazabilirsiniz çünkü ptr bir değişkendir.</p>
</div>
</div>

<!-- SORU 15 -->
<div class="exam-question" id="q15">
<h3>📝 Soru 15 <span class="exam-points">5 puan</span> <span class="exam-topic">String Temelleri</span></h3>
<p>C dilinde <strong>string diye bir veri tipi var mıdır?</strong> String aslında nedir? Null karakter (<code>\0</code>) neden zorunludur? Aşağıdaki dört tanımlama yönteminin hepsinin aynı sonucu verdiğini açıklayınız:</p>
<pre><code>char a[] = "Alper";
char b[] = {'A', 'l', 'p', 'e', 'r', '\0'};
char c[] = {65, 108, 112, 101, 114, 0};
char *d = "Alper";</code></pre>
<button class="solution-btn" onclick="toggleSolution(this)">💡 Çözümü Göster</button>
<div class="solution-box">
<p><strong>String tipi var mı?</strong> <strong>Hayır!</strong> C'de <code>str</code> veya <code>String</code> diye bir veri tipi yoktur. String, sadece <strong>sonunda <code>\0</code> (null karakter) bulunan bir karakter dizisidir.</strong></p>
<p><strong>Null karakter neden zorunlu?</strong> C, string'in nerede bittiğini <code>\0</code> ile anlar. <code>printf("%s")</code>, <code>strlen()</code>, <code>strcmp()</code> gibi fonksiyonlar <code>\0</code>'a kadar okur. Null olmadan fonksiyonlar dizinin ötesine taşar — <strong>tanımsız davranış</strong>.</p>
<p><strong>Dört yöntem aynı sonuç:</strong></p>
<table>
<tr><th>Yöntem</th><th>Açıklama</th></tr>
<tr><td><code>char a[] = "Alper";</code></td><td>String literali — derleyici otomatik <code>\0</code> ekler. Boyut: 6 (5 harf + 1 null).</td></tr>
<tr><td><code>char b[] = {'A','l','p','e','r','\0'};</code></td><td>Karakter dizisi — <code>\0</code>'ı <strong>siz</strong> eklemeniz gerekir.</td></tr>
<tr><td><code>char c[] = {65,108,112,101,114,0};</code></td><td>ASCII kodlarıyla — 65='A', 108='l', ... 0='\0'. Aynı bellekte aynı baytlar.</td></tr>
<tr><td><code>char *d = "Alper";</code></td><td>Pointer ile — <strong>salt okunur</strong> bellekteki literali gösterir. <code>d[0]='X'</code> tehlikeli!</td></tr>
</table>
<p class="tip">💡 <strong>a, b, c</strong> → değiştirilebilir (stack'te). <strong>d</strong> → salt okunur bölgeyi gösterir, değiştirmek tanımsız davranıştır.</p>
</div>
</div>

<!-- SORU 16 -->
<div class="exam-question" id="q16">
<h3>📝 Soru 16 <span class="exam-points">5 puan</span> <span class="exam-topic">String Fonksiyonları</span></h3>
<p><code>&lt;string.h&gt;</code> kütüphanesindeki şu fonksiyonların ne yaptığını ve dönüş değerini yazınız: <strong>(a)</strong> <code>strlen()</code>, <strong>(b)</strong> <code>strcpy()</code>, <strong>(c)</strong> <code>strcmp()</code>, <strong>(d)</strong> <code>strcat()</code>. Her biri için bir kullanım örneği veriniz.</p>
<button class="solution-btn" onclick="toggleSolution(this)">💡 Çözümü Göster</button>
<div class="solution-box">
<table>
<tr><th>Fonksiyon</th><th>Görevi</th><th>Dönüş</th><th>Örnek</th></tr>
<tr><td><strong>(a) strlen(s)</strong></td><td>String'in uzunluğunu bulur (<code>\0</code> hariç)</td><td>size_t (uzunluk)</td><td><code>strlen("Alper")</code> → <strong>5</strong></td></tr>
<tr><td><strong>(b) strcpy(hedef, kaynak)</strong></td><td>Kaynak string'i hedefe <strong>kopyalar</strong></td><td>char* (hedef adresi)</td><td><code>strcpy(isim, "Ali")</code> → isim = "Ali"</td></tr>
<tr><td><strong>(c) strcmp(s1, s2)</strong></td><td>İki string'i <strong>karşılaştırır</strong></td><td>0: eşit, &lt;0: s1 küçük, &gt;0: s1 büyük</td><td><code>strcmp("Ali","Ali")</code> → <strong>0</strong></td></tr>
<tr><td><strong>(d) strcat(hedef, kaynak)</strong></td><td>Kaynak string'i hedefin <strong>sonuna ekler</strong></td><td>char* (hedef adresi)</td><td><code>strcat("Merhaba ","Dünya")</code> → "Merhaba Dünya"</td></tr>
</table>
<p class="tip">💡 <strong>Kritik uyarı:</strong> C'de <code>==</code> ile string karşılaştırma <strong>YAPILMAZ</strong> — bu adresleri karşılaştırır, içerikleri değil! Daima <code>strcmp()</code> kullanın. Ayrıca <code>strcpy</code> ve <code>strcat</code>'te hedef dizinin yeterli büyüklükte olmasını sağlamak <strong>sizin sorumluluğunuzdur</strong> — taşma kontrolü yoktur!</p>
</div>
</div>

<!-- SORU 17 -->
<div class="exam-question" id="q17">
<h3>📝 Soru 17 <span class="exam-points">5 puan</span> <span class="exam-topic">Karakter İşlemleri</span></h3>
<p><code>&lt;ctype.h&gt;</code> kütüphanesindeki <code>toupper()</code>, <code>tolower()</code>, <code>isalpha()</code>, <code>isdigit()</code> fonksiyonlarını açıklayınız. Bir string'deki tüm küçük harfleri büyüğe çeviren kodu yazınız (<code>toupper</code> ile).</p>
<button class="solution-btn" onclick="toggleSolution(this)">💡 Çözümü Göster</button>
<div class="solution-box">
<table>
<tr><th>Fonksiyon</th><th>Görevi</th><th>Örnek</th></tr>
<tr><td><code>toupper(c)</code></td><td>Küçük harfi büyüğe çevirir</td><td><code>toupper('a')</code> → 'A'</td></tr>
<tr><td><code>tolower(c)</code></td><td>Büyük harfi küçüğe çevirir</td><td><code>tolower('Z')</code> → 'z'</td></tr>
<tr><td><code>isalpha(c)</code></td><td>Harf mi? (a-z, A-Z)</td><td><code>isalpha('5')</code> → 0 (false)</td></tr>
<tr><td><code>isdigit(c)</code></td><td>Rakam mı? (0-9)</td><td><code>isdigit('5')</code> → sıfır dışı (true)</td></tr>
</table>
<p><strong>Tüm harfleri büyüğe çevirme:</strong></p>
<pre><code>#include &lt;ctype.h&gt;
#include &lt;string.h&gt;

char metin[] = "Merhaba Dunya 123";

for (int i = 0; i &lt; strlen(metin); i++) {
    metin[i] = toupper(metin[i]);
}

printf("%s\n", metin);
// Çıktı: MERHABA DUNYA 123</code></pre>
<p><strong>Not:</strong> <code>toupper()</code> harf olmayanları (rakam, boşluk, noktalama) olduğu gibi bırakır — kontrol etmeye gerek yok.</p>
</div>
</div>

<!-- SORU 18 -->
<div class="exam-question" id="q18">
<h3>📝 Soru 18 <span class="exam-points">5 puan</span> <span class="exam-topic">String Giriş/Çıkış</span></h3>
<p><code>scanf("%s")</code> ile <code>fgets()</code> arasındaki farkı açıklayınız. "Alper Kahraman" girdisi verildiğinde her birinin ne okuduğunu yazınız. <code>fgets()</code>'in sonuna eklediği <code>\n</code> karakterini nasıl temizlersiniz?</p>
<button class="solution-btn" onclick="toggleSolution(this)">💡 Çözümü Göster</button>
<div class="solution-box">
<table>
<tr><th></th><th>scanf("%s")</th><th>fgets()</th></tr>
<tr><td>Okuma şekli</td><td>İlk boşluğa (whitespace) kadar okur</td><td>Satır sonuna (\n) kadar tamamını okur</td></tr>
<tr><td>"Alper Kahraman" girdisi</td><td><strong>"Alper"</strong> (boşlukta durur)</td><td><strong>"Alper Kahraman\n"</strong> (tamamını okur)</td></tr>
<tr><td>Buffer taşması koruması</td><td>❌ Yok — tehlikeli</td><td>✅ Var — boyut sınırı verilir</td></tr>
</table>
<p><strong>fgets kullanımı:</strong></p>
<pre><code>char isim[50];
fgets(isim, 50, stdin);
// isim = "Alper Kahraman\n"</code></pre>
<p><strong>\n temizleme:</strong></p>
<pre><code>// Yöntem 1: strlen ile
isim[strlen(isim) - 1] = '\0';

// Yöntem 2: strcspn ile (daha güvenli)
isim[strcspn(isim, "\n")] = '\0';</code></pre>
<p class="tip">💡 <strong>Kural:</strong> Boşluk içerebilecek metinler (tam isim, adres vb.) için <strong>her zaman fgets() kullanın</strong>. <code>scanf("%s")</code> yalnızca tek kelimelik girdilerde güvenlidir.</p>
</div>
</div>

<!-- SORU 19 -->
<div class="exam-question" id="q19">
<h3>📝 Soru 19 <span class="exam-points">5 puan</span> <span class="exam-topic">Tür Dönüşümü</span></h3>
<p><code>atoi()</code>, <code>atof()</code> ve <code>sprintf()</code> fonksiyonlarının görevlerini açıklayınız. Aşağıdaki kodun çıktısını yazınız:</p>
<pre><code>char sayi_str[] = "42";
char ondalik_str[] = "3.14";
char sonuc[50];

int sayi = atoi(sayi_str);
double ondalik = atof(ondalik_str);

printf("Tam sayi: %d\n", sayi + 8);
printf("Ondalik: %.2f\n", ondalik * 2);

sprintf(sonuc, "Toplam: %d", sayi + 100);
printf("%s\n", sonuc);</code></pre>
<button class="solution-btn" onclick="toggleSolution(this)">💡 Çözümü Göster</button>
<div class="solution-box">
<table>
<tr><th>Fonksiyon</th><th>Görevi</th><th>Dönüşüm Yönü</th></tr>
<tr><td><code>atoi(str)</code></td><td>String'i <strong>int</strong>'e çevirir</td><td>String → Sayı</td></tr>
<tr><td><code>atof(str)</code></td><td>String'i <strong>double</strong>'a çevirir</td><td>String → Ondalık sayı</td></tr>
<tr><td><code>sprintf(buf, fmt, ...)</code></td><td>Formatlanmış çıktıyı <strong>string'e</strong> yazar (ekrana değil)</td><td>Sayı → String</td></tr>
</table>
<p><strong>Çıktı:</strong></p>
<pre><code>Tam sayi: 50
Ondalik: 6.28
Toplam: 142</code></pre>
<p><strong>Açıklama:</strong></p>
<p>• <code>atoi("42")</code> → 42 (int). 42 + 8 = <strong>50</strong>.<br>
• <code>atof("3.14")</code> → 3.14 (double). 3.14 × 2 = <strong>6.28</strong>.<br>
• <code>sprintf(sonuc, "Toplam: %d", 142)</code> → <code>sonuc</code> string'ine "Toplam: 142" yazar.</p>
</div>
</div>

<!-- SORU 20 -->
<div class="exam-question" id="q20">
<h3>📝 Soru 20 <span class="exam-points">5 puan</span> <span class="exam-topic">Bütüncül Senaryo</span></h3>
<p>Bir <strong>mini sözlük programı</strong> yazmanız isteniyor. Program 5 kelime ve anlamını saklayacak (2B karakter dizisi). Kullanıcı bir kelime girdiğinde, sözlükte varsa anlamını gösterecek, yoksa "Bulunamadı" diyecek.</p>
<p><strong>(a)</strong> Kelimeleri ve anlamları hangi veri yapısıyla saklarsınız?<br>
<strong>(b)</strong> Kullanıcı girişini almak için neden <code>fgets()</code> tercih edersiniz?<br>
<strong>(c)</strong> Arama işleminde kelime karşılaştırması için hangi fonksiyonu kullanırsınız ve neden <code>==</code> kullanılamaz?<br>
<strong>(d)</strong> Programın pseudocode'unu yazınız.</p>
<button class="solution-btn" onclick="toggleSolution(this)">💡 Çözümü Göster</button>
<div class="solution-box">
<p><strong>(a) Veri yapısı:</strong> İki adet 2B karakter dizisi — biri kelimeler, biri anlamlar için:</p>
<pre><code>#define KELIME_SAYISI 5
#define MAX_UZUNLUK 50

char kelimeler[KELIME_SAYISI][MAX_UZUNLUK] = {
    "pointer", "dizi", "fonksiyon", "dongu", "string"
};
char anlamlar[KELIME_SAYISI][MAX_UZUNLUK] = {
    "Bellek adresi saklayan degisken",
    "Ayni tipte verileri ardisik tutan yapi",
    "Tekrar kullanilabilir kod blogu",
    "Tekrarlayan islemleri otomatiklestiren yapi",
    "Null ile biten karakter dizisi"
};</code></pre>

<p><strong>(b) Neden fgets?</strong> Kullanıcı birden fazla kelimeli terim girebilir (ör: "for dongusu"). <code>scanf("%s")</code> boşlukta durur, sadece "for" okur. <code>fgets()</code> satırın tamamını okur.</p>

<p><strong>(c) Karşılaştırma:</strong> <code>strcmp()</code> kullanılır. <code>==</code> operatörü C'de string karşılaştırmaz — iki pointer'ın (adresin) eşit olup olmadığını kontrol eder, içerikleri değil!</p>

<p><strong>(d) Pseudocode:</strong></p>
<pre><code>char aranan[MAX_UZUNLUK];

printf("Kelime giriniz: ");
fgets(aranan, MAX_UZUNLUK, stdin);
aranan[strcspn(aranan, "\n")] = '\0';  // \n temizle

int bulundu = 0;
for (int i = 0; i &lt; KELIME_SAYISI; i++) {
    if (strcmp(kelimeler[i], aranan) == 0) {
        printf("Anlam: %s\n", anlamlar[i]);
        bulundu = 1;
        break;
    }
}

if (!bulundu) {
    printf("Bulunamadi!\n");
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
