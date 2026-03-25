---
layout: post
title: "Vize Deneme Sınavı: SQL Senaryo Tabanlı 10 Soru"
date: 2026-03-25 18:00:00 +0300
categories: veri-tabani-yonetim-sistemleri-ii
---

Bu deneme sınavı, VTYS II dersinde işlenen konuları kapsayan **senaryo tabanlı açık uçlu** sorulardan oluşmaktadır. Tüm sorular aynı veritabanı senaryosu üzerinden ilerler. Her sorunun altındaki **"Çözümü Göster"** butonuna tıklayarak detaylı çözümü görebilirsiniz.

**Süre:** 60 dakika | **Toplam:** 10 soru | **Zorluk:** Orta

---

{% raw %}

<style>
.exam-container{max-width:850px;margin:0 auto;font-family:inherit}
.exam-scenario{background:color-mix(in srgb,var(--gold,#C9A84C) 8%,var(--bg,#fff));border:2px solid var(--gold,#C9A84C);border-radius:12px;padding:24px;margin-bottom:32px}
.exam-scenario h3{margin-top:0;color:var(--text,#1a1a2e);font-size:1.1em;display:flex;align-items:center;gap:8px}
.exam-scenario pre{background:#1e1e2e;color:#cdd6f4;padding:14px;border-radius:8px;overflow-x:auto;font-size:.88em;line-height:1.6}
.exam-scenario code{font-size:.9em}
.exam-scenario table{width:100%;border-collapse:collapse;margin:12px 0;font-size:.9em}
.exam-scenario th,.exam-scenario td{padding:8px 12px;text-align:left;border:1px solid var(--border,#dee2e6)}
.exam-scenario th{background:var(--bg-alt,#f0f0f5);color:var(--text,#1a1a2e);font-weight:600}
.exam-scenario td{background:var(--card-bg,#fff);color:var(--text,#333)}
.exam-question{background:var(--bg-alt,#f8f9fa);border:1px solid var(--border,#dee2e6);border-radius:10px;padding:20px;margin-bottom:20px;position:relative}
.exam-question h3{margin-top:0;color:var(--text,#2c3e50);font-size:1em;display:flex;align-items:center;gap:8px}
.exam-question p{color:var(--text,#333);line-height:1.7;margin-bottom:10px}
.exam-question code{background:var(--card-bg,#fff);border:1px solid var(--border,#ddd);padding:2px 6px;border-radius:4px;font-size:.88em;color:var(--text,#c0392b)}
.exam-points{display:inline-block;padding:3px 10px;border-radius:50px;background:color-mix(in srgb,var(--gold,#C9A84C) 15%,var(--bg,#fff));color:var(--text,#856404);font-size:.78em;font-weight:700;margin-left:auto}
.solution-btn{margin-top:12px;background:var(--primary,#1B2A4A);color:#fff;border:none;padding:10px 20px;border-radius:8px;cursor:pointer;font-size:.88em;font-weight:600;transition:all .2s;display:inline-flex;align-items:center;gap:6px}
.solution-btn:hover{background:var(--primary-mid,#2C4470);transform:translateY(-1px)}
.solution-btn.open{background:var(--text-muted,#6b7590)}
.solution-box{display:none;margin-top:14px;padding:18px;background:color-mix(in srgb,var(--gold,#C9A84C) 6%,var(--bg,#fff));border-left:4px solid var(--gold,#C9A84C);border-radius:0 8px 8px 0;line-height:1.7;color:var(--text,#333)}
.solution-box.show{display:block}
.solution-box pre{background:#1e1e2e;color:#cdd6f4;padding:14px;border-radius:8px;overflow-x:auto;font-size:.85em;line-height:1.6;margin:10px 0}
.solution-box code{font-size:.88em}
.solution-box p{margin-bottom:10px}
.solution-box table{width:100%;border-collapse:collapse;margin:10px 0;font-size:.88em}
.solution-box th,.solution-box td{padding:6px 10px;text-align:left;border:1px solid var(--border,#dee2e6)}
.solution-box th{background:var(--bg-alt,#f0f0f5);font-weight:600}
.solution-box td{background:var(--card-bg,#fff)}
.solution-box .tip{background:color-mix(in srgb,#00b894 10%,var(--bg,#fff));border:1px solid #00b894;border-radius:6px;padding:8px 12px;margin:10px 0;font-size:.88em;color:var(--text,#333)}
.exam-progress{text-align:center;margin-bottom:24px;font-size:.9em;color:var(--text-muted,#636e72);padding:10px;background:var(--bg-alt,#f8f9fa);border-radius:8px;border:1px solid var(--border,#dee2e6)}
</style>

<div class="exam-container">

<div class="exam-scenario">
<h3>📋 Senaryo: Üniversite Kütüphane Yönetim Sistemi</h3>

<p>Bir üniversite kütüphanesi için veritabanı tasarlanmıştır. Aşağıdaki tablolar ve örnek veriler tüm sorularda kullanılacaktır:</p>

<pre><code>CREATE TABLE uyeler (
    uye_id INT PRIMARY KEY,
    ad VARCHAR(30),
    soyad VARCHAR(30),
    bolum VARCHAR(50),
    kayit_tarihi DATE
);

CREATE TABLE kitaplar (
    kitap_id INT PRIMARY KEY,
    kitap_adi VARCHAR(100),
    yazar VARCHAR(50),
    tur VARCHAR(30),
    stok INT
);

CREATE TABLE odunc (
    odunc_id INT PRIMARY KEY,
    uye_id INT,
    kitap_id INT,
    alma_tarihi DATE,
    iade_tarihi DATE,
    teslim_tarihi DATE
);</code></pre>

<p><strong>uyeler:</strong></p>
<table>
<tr><th>uye_id</th><th>ad</th><th>soyad</th><th>bolum</th><th>kayit_tarihi</th></tr>
<tr><td>1</td><td>Ahmet</td><td>Yılmaz</td><td>YBS</td><td>2024-09-15</td></tr>
<tr><td>2</td><td>Ayşe</td><td>Demir</td><td>Bilgisayar Müh.</td><td>2024-09-20</td></tr>
<tr><td>3</td><td>Mehmet</td><td>Kaya</td><td>YBS</td><td>2025-02-10</td></tr>
<tr><td>4</td><td>Elif</td><td>Çelik</td><td>İşletme</td><td>2024-09-18</td></tr>
<tr><td>5</td><td>Can</td><td>Şahin</td><td>YBS</td><td>2025-09-01</td></tr>
<tr><td>6</td><td>Zeynep</td><td>Arslan</td><td>Elektrik Müh.</td><td>2024-10-05</td></tr>
</table>

<p><strong>kitaplar:</strong></p>
<table>
<tr><th>kitap_id</th><th>kitap_adi</th><th>yazar</th><th>tur</th><th>stok</th></tr>
<tr><td>101</td><td>Veritabanı Sistemleri</td><td>Ramez Elmasri</td><td>Teknik</td><td>5</td></tr>
<tr><td>102</td><td>Yapay Zeka</td><td>Stuart Russell</td><td>Teknik</td><td>3</td></tr>
<tr><td>103</td><td>Suç ve Ceza</td><td>Dostoyevski</td><td>Roman</td><td>8</td></tr>
<tr><td>104</td><td>Python Programlama</td><td>Eric Matthes</td><td>Teknik</td><td>4</td></tr>
<tr><td>105</td><td>1984</td><td>George Orwell</td><td>Roman</td><td>6</td></tr>
<tr><td>106</td><td>İstatistik Giriş</td><td>Serdar Kalaycı</td><td>Teknik</td><td>2</td></tr>
</table>

<p><strong>odunc:</strong></p>
<table>
<tr><th>odunc_id</th><th>uye_id</th><th>kitap_id</th><th>alma_tarihi</th><th>iade_tarihi</th><th>teslim_tarihi</th></tr>
<tr><td>1</td><td>1</td><td>101</td><td>2026-02-01</td><td>2026-02-15</td><td>2026-02-14</td></tr>
<tr><td>2</td><td>1</td><td>103</td><td>2026-02-10</td><td>2026-02-24</td><td>2026-03-01</td></tr>
<tr><td>3</td><td>2</td><td>102</td><td>2026-02-05</td><td>2026-02-19</td><td>NULL</td></tr>
<tr><td>4</td><td>3</td><td>101</td><td>2026-03-01</td><td>2026-03-15</td><td>2026-03-10</td></tr>
<tr><td>5</td><td>3</td><td>104</td><td>2026-03-05</td><td>2026-03-19</td><td>2026-03-20</td></tr>
<tr><td>6</td><td>4</td><td>105</td><td>2026-03-10</td><td>2026-03-24</td><td>NULL</td></tr>
<tr><td>7</td><td>1</td><td>106</td><td>2026-03-12</td><td>2026-03-26</td><td>NULL</td></tr>
<tr><td>8</td><td>2</td><td>104</td><td>2026-03-15</td><td>2026-03-29</td><td>2026-03-28</td></tr>
</table>

<p><strong>Not:</strong> <code>teslim_tarihi</code> NULL ise kitap henüz iade edilmemiştir. <code>iade_tarihi</code> son teslim tarihidir; <code>teslim_tarihi</code> ise fiili iade tarihidir.</p>
</div>

<div class="exam-progress" id="examProgress">Çözülen: 0 / 10</div>

<!-- SORU 1 -->
<div class="exam-question" id="q1">
<h3>📝 Soru 1 <span class="exam-points">10 puan</span></h3>
<p>Tüm üyelerin adını, soyadını ve bölümünü; ödünç aldıkları kitapların adıyla birlikte listeleyin. <strong>Hiç kitap almamış üyeler de listede görünmelidir.</strong> Kitap almamış üyelerin kitap_adi sütununda "Kitap almamış" yazmalıdır.</p>
<button class="solution-btn" onclick="toggleSolution(this)">💡 Çözümü Göster</button>
<div class="solution-box">
<p><strong>Çözüm:</strong></p>
<pre><code>SELECT 
    u.ad, 
    u.soyad, 
    u.bolum,
    COALESCE(k.kitap_adi, 'Kitap almamış') AS kitap_adi
FROM uyeler u
LEFT JOIN odunc o ON u.uye_id = o.uye_id
LEFT JOIN kitaplar k ON o.kitap_id = k.kitap_id;</code></pre>

<p><strong>Neden LEFT JOIN?</strong> Soru "hiç kitap almamış üyeler de görünsün" diyor. INNER JOIN kullansaydık Can (uye_id=5) ve Zeynep (uye_id=6) sonuçta olmazdı — çünkü odunc tablosunda kayıtları yok. LEFT JOIN, sol tablonun (uyeler) tamamını korur.</p>

<p><strong><code>COALESCE</code> ne yapıyor?</strong> İlk argüman NULL ise ikincisini döndürür. Kitap almamış üyelerde <code>k.kitap_adi</code> NULL olacağı için yerine "Kitap almamış" yazılır.</p>

<p><strong>İki LEFT JOIN zinciri:</strong> Önce uyeler → odunc eşleştirilir, sonra odunc → kitaplar eşleştirilir. Her iki adımda da LEFT JOIN kullanmak gerekir — ikincisinde INNER JOIN kullanırsanız kitap almamış üyeler yine kaybolur.</p>
</div>
</div>

<!-- SORU 2 -->
<div class="exam-question" id="q2">
<h3>📝 Soru 2 <span class="exam-points">10 puan</span></h3>
<p>Henüz <strong>iade edilmemiş</strong> kitapları (teslim_tarihi NULL olanlar) listeleyin. Sonuçta üyenin adı-soyadı, kitap adı ve son teslim tarihini gösterin. Sonuçları son teslim tarihine göre sıralayın.</p>
<button class="solution-btn" onclick="toggleSolution(this)">💡 Çözümü Göster</button>
<div class="solution-box">
<p><strong>Çözüm:</strong></p>
<pre><code>SELECT 
    u.ad, 
    u.soyad, 
    k.kitap_adi, 
    o.iade_tarihi AS son_teslim_tarihi
FROM odunc o
INNER JOIN uyeler u ON o.uye_id = u.uye_id
INNER JOIN kitaplar k ON o.kitap_id = k.kitap_id
WHERE o.teslim_tarihi IS NULL
ORDER BY o.iade_tarihi;</code></pre>

<p><strong>Beklenen sonuç:</strong></p>
<table>
<tr><th>ad</th><th>soyad</th><th>kitap_adi</th><th>son_teslim_tarihi</th></tr>
<tr><td>Ayşe</td><td>Demir</td><td>Yapay Zeka</td><td>2026-02-19</td></tr>
<tr><td>Elif</td><td>Çelik</td><td>1984</td><td>2026-03-24</td></tr>
<tr><td>Ahmet</td><td>Yılmaz</td><td>İstatistik Giriş</td><td>2026-03-26</td></tr>
</table>

<p><strong>Neden INNER JOIN yeterli?</strong> Soruda "hiç ödünç almamış üyeleri de göster" gibi bir koşul yok. Sadece ödünç tablosunda kayıtlı ve teslim edilmemiş olanları istiyoruz — bu yüzden INNER JOIN doğru tercih.</p>

<p><strong><code>IS NULL</code> kullanımı:</strong> NULL değerlerle <code>= NULL</code> yazılmaz! <code>IS NULL</code> veya <code>IS NOT NULL</code> kullanılmalıdır. <code>WHERE teslim_tarihi = NULL</code> yazsaydınız sonuç boş dönerdi.</p>
</div>
</div>

<!-- SORU 3 -->
<div class="exam-question" id="q3">
<h3>📝 Soru 3 <span class="exam-points">10 puan</span></h3>
<p>Her bölümden kaç üyenin kütüphaneye kayıtlı olduğunu ve bu bölümlerden toplamda kaç kitap ödünç alındığını bulun. Sonuçları ödünç sayısına göre azalan sıralayın.</p>
<button class="solution-btn" onclick="toggleSolution(this)">💡 Çözümü Göster</button>
<div class="solution-box">
<p><strong>Çözüm:</strong></p>
<pre><code>SELECT 
    u.bolum,
    COUNT(DISTINCT u.uye_id) AS uye_sayisi,
    COUNT(o.odunc_id) AS odunc_sayisi
FROM uyeler u
LEFT JOIN odunc o ON u.uye_id = o.uye_id
GROUP BY u.bolum
ORDER BY odunc_sayisi DESC;</code></pre>

<p><strong>Beklenen sonuç:</strong></p>
<table>
<tr><th>bolum</th><th>uye_sayisi</th><th>odunc_sayisi</th></tr>
<tr><td>YBS</td><td>3</td><td>5</td></tr>
<tr><td>Bilgisayar Müh.</td><td>1</td><td>2</td></tr>
<tr><td>İşletme</td><td>1</td><td>1</td></tr>
<tr><td>Elektrik Müh.</td><td>1</td><td>0</td></tr>
</table>

<p><strong><code>COUNT(DISTINCT u.uye_id)</code> neden gerekli?</strong> LEFT JOIN sonrasında bir üyenin birden fazla ödünç kaydı olabilir (Ahmet'in 3 kaydı var). <code>COUNT(u.uye_id)</code> yazsaydık Ahmet 3 kez sayılırdı. <code>DISTINCT</code> benzersiz üye sayısını verir.</p>

<p><strong><code>COUNT(o.odunc_id)</code> neden <code>COUNT(*)</code> değil?</strong> LEFT JOIN'de eşleşme olmayan satırlarda <code>o.odunc_id</code> NULL olur. <code>COUNT(sütun)</code> NULL'ları saymaz, <code>COUNT(*)</code> sayar. Bu yüzden Elektrik Müh. için <code>COUNT(o.odunc_id) = 0</code>, <code>COUNT(*) = 1</code> olurdu — 0 doğru cevaptır.</p>
</div>
</div>

<!-- SORU 4 -->
<div class="exam-question" id="q4">
<h3>📝 Soru 4 <span class="exam-points">10 puan</span></h3>
<p>Geç teslim edilen kitapları listeleyin. Geç teslim = <code>teslim_tarihi > iade_tarihi</code>. Sonuçta üyenin adı, kitap adı, kaç gün geciktiğini ve gecikme durumunu gösterin. Gecikme 5 günden fazlaysa 'Kritik Gecikme', değilse 'Normal Gecikme' yazsın.</p>
<button class="solution-btn" onclick="toggleSolution(this)">💡 Çözümü Göster</button>
<div class="solution-box">
<p><strong>Çözüm:</strong></p>
<pre><code>SELECT 
    u.ad,
    k.kitap_adi,
    DATEDIFF(o.teslim_tarihi, o.iade_tarihi) AS gecikme_gun,
    CASE 
        WHEN DATEDIFF(o.teslim_tarihi, o.iade_tarihi) > 5 
            THEN 'Kritik Gecikme'
        ELSE 'Normal Gecikme'
    END AS durum
FROM odunc o
INNER JOIN uyeler u ON o.uye_id = u.uye_id
INNER JOIN kitaplar k ON o.kitap_id = k.kitap_id
WHERE o.teslim_tarihi > o.iade_tarihi;</code></pre>

<p><strong>Beklenen sonuç:</strong></p>
<table>
<tr><th>ad</th><th>kitap_adi</th><th>gecikme_gun</th><th>durum</th></tr>
<tr><td>Ahmet</td><td>Suç ve Ceza</td><td>5</td><td>Normal Gecikme</td></tr>
<tr><td>Mehmet</td><td>Python Programlama</td><td>1</td><td>Normal Gecikme</td></tr>
</table>

<p><strong><code>DATEDIFF(tarih1, tarih2)</code></strong> MySQL'de iki tarih arasındaki gün farkını hesaplar. <code>teslim_tarihi - iade_tarihi</code> pozitifse gecikme var demektir.</p>

<p><strong><code>CASE ... WHEN ... THEN ... ELSE ... END</code></strong> SQL'in "if-else" yapısıdır. Hesaplanan gecikme gününe göre dinamik bir metin üretir.</p>

<div class="tip">💡 <strong>İpucu:</strong> PostgreSQL'de <code>DATEDIFF</code> yerine doğrudan <code>teslim_tarihi - iade_tarihi</code> yazılır. SQL Server'da ise <code>DATEDIFF(DAY, iade_tarihi, teslim_tarihi)</code> kullanılır.</div>
</div>
</div>

<!-- SORU 5 -->
<div class="exam-question" id="q5">
<h3>📝 Soru 5 <span class="exam-points">10 puan</span></h3>
<p>En çok ödünç alınan kitabı (veya kitapları, eşitlik varsa) bulun. Sonuçta kitap adını, yazarını ve kaç kez ödünç alındığını gösterin.</p>
<button class="solution-btn" onclick="toggleSolution(this)">💡 Çözümü Göster</button>
<div class="solution-box">
<p><strong>Çözüm:</strong></p>
<pre><code>SELECT 
    k.kitap_adi, 
    k.yazar, 
    COUNT(o.odunc_id) AS odunc_sayisi
FROM kitaplar k
INNER JOIN odunc o ON k.kitap_id = o.kitap_id
GROUP BY k.kitap_id, k.kitap_adi, k.yazar
HAVING COUNT(o.odunc_id) = (
    SELECT MAX(sayi) FROM (
        SELECT COUNT(odunc_id) AS sayi 
        FROM odunc 
        GROUP BY kitap_id
    ) AS alt_sorgu
);</code></pre>

<p><strong>Beklenen sonuç:</strong></p>
<table>
<tr><th>kitap_adi</th><th>yazar</th><th>odunc_sayisi</th></tr>
<tr><td>Veritabanı Sistemleri</td><td>Ramez Elmasri</td><td>2</td></tr>
<tr><td>Python Programlama</td><td>Eric Matthes</td><td>2</td></tr>
</table>

<p><strong>Neden alt sorgu (subquery)?</strong> <code>ORDER BY ... LIMIT 1</code> yazsaydık sadece bir kitap gelirdi — ama iki kitap eşit sayıda ödünç alınmış. <code>HAVING COUNT = (SELECT MAX(...))</code> tüm eşitleri getirir.</p>

<p><strong>Alt sorgu adım adım:</strong></p>
<p>1. En içteki sorgu: Her kitabın ödünç sayısını hesaplar → (101→2, 102→1, 103→1, 104→2, 105→1, 106→1)</p>
<p>2. Ortadaki: Bu sayıların en büyüğünü bulur → MAX = 2</p>
<p>3. HAVING: Ödünç sayısı 2 olan kitapları filtreler</p>
</div>
</div>

<!-- SORU 6 -->
<div class="exam-question" id="q6">
<h3>📝 Soru 6 <span class="exam-points">10 puan</span></h3>
<p>Hiç ödünç alınmamış kitapları listeleyin. Sonuçta kitap adı, yazarı ve stok miktarını gösterin.</p>
<button class="solution-btn" onclick="toggleSolution(this)">💡 Çözümü Göster</button>
<div class="solution-box">
<p><strong>Çözüm:</strong></p>
<pre><code>SELECT k.kitap_adi, k.yazar, k.stok
FROM kitaplar k
LEFT JOIN odunc o ON k.kitap_id = o.kitap_id
WHERE o.odunc_id IS NULL;</code></pre>

<p><strong>Beklenen sonuç:</strong></p>
<table>
<tr><th>kitap_adi</th><th>yazar</th><th>stok</th></tr>
<tr><td>Suç ve Ceza</td><td>Dostoyevski</td><td>8</td></tr>
</table>

<p><strong>Wait — Suç ve Ceza ödünç alınmadı mı?</strong> Hayır, aslında Ahmet almıştı (odunc_id=2, kitap_id=103). Kontrol edelim... Evet, 103 Suç ve Ceza'nın kitap_id'si. O zaman sonuç boş mu?</p>

<p>Hayır — odunc tablosundaki veriye bakın: kitap_id 103 var! Bu durumda hiç ödünç alınmamış kitap yok gibi görünüyor. Ama tabloyu tekrar inceleyin: 106 numaralı İstatistik Giriş Ahmet tarafından alınmış. 105 numaralı 1984 Elif tarafından alınmış. Geriye <strong>hiç ödünç alınmamış kitap kalmıyor</strong>.</p>

<p><strong>Doğru cevap: Boş sonuç kümesi.</strong> Bu da geçerli bir cevaptır! Önemli olan sorgunun doğru yazılmasıdır. LEFT JOIN + WHERE IS NULL tekniği, eşleşmeyen kayıtları bulmak için standart yöntemdir.</p>

<p><strong>Alternatif yöntem (NOT EXISTS):</strong></p>
<pre><code>SELECT k.kitap_adi, k.yazar, k.stok
FROM kitaplar k
WHERE NOT EXISTS (
    SELECT 1 FROM odunc o 
    WHERE o.kitap_id = k.kitap_id
);</code></pre>

<div class="tip">💡 <strong>Sınav ipucu:</strong> Sonuç boş çıksa bile sorgunuz doğruysa tam puan alırsınız. Sorunun amacı tekniği bilmenizdir, veri içeriği değil.</div>
</div>
</div>

<!-- SORU 7 -->
<div class="exam-question" id="q7">
<h3>📝 Soru 7 <span class="exam-points">10 puan</span></h3>
<p>Her üyenin toplam kaç kitap ödünç aldığını, kaçını zamanında ve kaçını geç teslim ettiğini gösteren bir özet rapor oluşturun. Henüz iade edilmemiş kitapları "Bekleyen" olarak sayın.</p>
<button class="solution-btn" onclick="toggleSolution(this)">💡 Çözümü Göster</button>
<div class="solution-box">
<p><strong>Çözüm:</strong></p>
<pre><code>SELECT 
    u.ad,
    u.soyad,
    COUNT(o.odunc_id) AS toplam_odunc,
    SUM(CASE 
        WHEN o.teslim_tarihi IS NOT NULL 
             AND o.teslim_tarihi <= o.iade_tarihi 
        THEN 1 ELSE 0 
    END) AS zamaninda,
    SUM(CASE 
        WHEN o.teslim_tarihi IS NOT NULL 
             AND o.teslim_tarihi > o.iade_tarihi 
        THEN 1 ELSE 0 
    END) AS geciken,
    SUM(CASE 
        WHEN o.teslim_tarihi IS NULL 
        THEN 1 ELSE 0 
    END) AS bekleyen
FROM uyeler u
LEFT JOIN odunc o ON u.uye_id = o.uye_id
GROUP BY u.uye_id, u.ad, u.soyad
ORDER BY toplam_odunc DESC;</code></pre>

<p><strong>Beklenen sonuç:</strong></p>
<table>
<tr><th>ad</th><th>soyad</th><th>toplam</th><th>zamanında</th><th>geciken</th><th>bekleyen</th></tr>
<tr><td>Ahmet</td><td>Yılmaz</td><td>3</td><td>1</td><td>1</td><td>1</td></tr>
<tr><td>Ayşe</td><td>Demir</td><td>2</td><td>1</td><td>0</td><td>1</td></tr>
<tr><td>Mehmet</td><td>Kaya</td><td>2</td><td>1</td><td>1</td><td>0</td></tr>
<tr><td>Elif</td><td>Çelik</td><td>1</td><td>0</td><td>0</td><td>1</td></tr>
<tr><td>Can</td><td>Şahin</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
<tr><td>Zeynep</td><td>Arslan</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
</table>

<p><strong><code>SUM(CASE ... THEN 1 ELSE 0 END)</code></strong> — Bu desen SQL'de <strong>koşullu sayma</strong> yapmanın standart yoludur. Her satır için koşul doğruysa 1, değilse 0 üretir ve bunların toplamı = o koşulu sağlayan kayıt sayısıdır.</p>

<p>Ahmet'in durumunu kontrol edelim:</p>
<p>• odunc_id=1: teslim 14 Şubat, son tarih 15 Şubat → <strong>Zamanında</strong> ✅</p>
<p>• odunc_id=2: teslim 1 Mart, son tarih 24 Şubat → <strong>Geciken</strong> ❌</p>
<p>• odunc_id=7: teslim NULL → <strong>Bekleyen</strong> ⏳</p>
</div>
</div>

<!-- SORU 8 -->
<div class="exam-question" id="q8">
<h3>📝 Soru 8 <span class="exam-points">10 puan</span></h3>
<p>"Teknik" türündeki kitapları ödünç alan üyelerin adını, soyadını ve aldıkları teknik kitapların sayısını bulun. Sadece <strong>2 veya daha fazla</strong> teknik kitap alan üyeleri gösterin.</p>
<button class="solution-btn" onclick="toggleSolution(this)">💡 Çözümü Göster</button>
<div class="solution-box">
<p><strong>Çözüm:</strong></p>
<pre><code>SELECT 
    u.ad, 
    u.soyad, 
    COUNT(o.odunc_id) AS teknik_kitap_sayisi
FROM uyeler u
INNER JOIN odunc o ON u.uye_id = o.uye_id
INNER JOIN kitaplar k ON o.kitap_id = k.kitap_id
WHERE k.tur = 'Teknik'
GROUP BY u.uye_id, u.ad, u.soyad
HAVING COUNT(o.odunc_id) >= 2;</code></pre>

<p><strong>Beklenen sonuç:</strong></p>
<table>
<tr><th>ad</th><th>soyad</th><th>teknik_kitap_sayisi</th></tr>
<tr><td>Ahmet</td><td>Yılmaz</td><td>2</td></tr>
</table>

<p><strong><code>WHERE</code> vs <code>HAVING</code> — ne zaman hangisi?</strong></p>
<p>• <code>WHERE</code>: <strong>Satır bazında</strong> filtreleme, GROUP BY'dan <strong>önce</strong> çalışır. <code>k.tur = 'Teknik'</code> tek bir satırı kontrol eder.</p>
<p>• <code>HAVING</code>: <strong>Grup bazında</strong> filtreleme, GROUP BY'dan <strong>sonra</strong> çalışır. <code>COUNT >= 2</code> bir grubun toplamını kontrol eder.</p>

<p>İşlem sırası: FROM → JOIN → WHERE → GROUP BY → HAVING → SELECT → ORDER BY</p>
</div>
</div>

<!-- SORU 9 -->
<div class="exam-question" id="q9">
<h3>📝 Soru 9 <span class="exam-points">10 puan</span></h3>
<p>Aynı kitabı birden fazla kez ödünç alan üyeleri bulun. Sonuçta üye adı, kitap adı ve kaç kez aldığını gösterin.</p>
<button class="solution-btn" onclick="toggleSolution(this)">💡 Çözümü Göster</button>
<div class="solution-box">
<p><strong>Çözüm:</strong></p>
<pre><code>SELECT 
    u.ad, 
    u.soyad, 
    k.kitap_adi,
    COUNT(o.odunc_id) AS kac_kez
FROM odunc o
INNER JOIN uyeler u ON o.uye_id = u.uye_id
INNER JOIN kitaplar k ON o.kitap_id = k.kitap_id
GROUP BY o.uye_id, o.kitap_id, u.ad, u.soyad, k.kitap_adi
HAVING COUNT(o.odunc_id) > 1;</code></pre>

<p><strong>Beklenen sonuç:</strong> Mevcut veride aynı kitabı iki kez alan üye bulunmamaktadır. Sorgu doğru yazılmışsa sonuç boş döner.</p>

<p><strong>Neden <code>GROUP BY o.uye_id, o.kitap_id</code>?</strong> Aynı üye + aynı kitap kombinasyonunu gruplamak istiyoruz. Sadece <code>uye_id</code>'ye göre gruplasaydık farklı kitaplar da aynı gruba düşerdi. Sadece <code>kitap_id</code>'ye göre gruplasaydık farklı üyeler karışırdı.</p>

<div class="tip">💡 <strong>İpucu:</strong> Bu tür sorularda GROUP BY'a hangi sütunları koyacağınızı belirlemek için "hangi kombinasyonları saymak istiyorum?" sorusunu sorun.</div>
</div>
</div>

<!-- SORU 10 -->
<div class="exam-question" id="q10">
<h3>📝 Soru 10 <span class="exam-points">10 puan</span></h3>
<p>Her kitap türü için ortalama stok miktarını, toplam ödünç alma sayısını ve "popülerlik oranını" (ödünç sayısı / stok) hesaplayın. Sonuçları popülerlik oranına göre azalan sıralayın. Popülerlik oranını virgülden sonra 2 basamakla gösterin.</p>
<button class="solution-btn" onclick="toggleSolution(this)">💡 Çözümü Göster</button>
<div class="solution-box">
<p><strong>Çözüm:</strong></p>
<pre><code>SELECT 
    k.tur,
    ROUND(AVG(k.stok), 2) AS ort_stok,
    COUNT(o.odunc_id) AS toplam_odunc,
    ROUND(
        COUNT(o.odunc_id) * 1.0 / SUM(DISTINCT k.stok), 2
    ) AS populerlik_orani
FROM kitaplar k
LEFT JOIN odunc o ON k.kitap_id = o.kitap_id
GROUP BY k.tur
ORDER BY populerlik_orani DESC;</code></pre>

<p><strong>Dikkat edilecek noktalar:</strong></p>

<p><strong>1. <code>* 1.0</code> neden var?</strong> SQL'de tamsayı / tamsayı = tamsayı sonucu verir (örn. 7/14 = 0). <code>* 1.0</code> ile ondalıklı bölme yapılmasını sağlıyoruz.</p>

<p><strong>2. <code>SUM(DISTINCT k.stok)</code> neden?</strong> LEFT JOIN sonrasında aynı kitap birden fazla satırda tekrarlanabilir (ödünç alınma sayısı kadar). DISTINCT olmazsa stok değerleri çift sayılır.</p>

<p><strong>3. <code>ROUND(değer, 2)</code></strong> sonucu virgülden sonra 2 basamağa yuvarlar.</p>

<p><strong>Alternatif (daha temiz) yaklaşım — alt sorgu ile:</strong></p>
<pre><code>SELECT 
    k.tur,
    ROUND(AVG(k.stok), 2) AS ort_stok,
    COALESCE(odunc_ozet.toplam, 0) AS toplam_odunc,
    ROUND(
        COALESCE(odunc_ozet.toplam, 0) * 1.0 / SUM(k.stok), 2
    ) AS populerlik_orani
FROM kitaplar k
LEFT JOIN (
    SELECT kitap_id, COUNT(*) AS toplam
    FROM odunc
    GROUP BY kitap_id
) odunc_ozet ON k.kitap_id = odunc_ozet.kitap_id
GROUP BY k.tur
ORDER BY populerlik_orani DESC;</code></pre>

<div class="tip">💡 <strong>Genel kural:</strong> Aggregate fonksiyonlar (COUNT, SUM, AVG) JOIN ile birlikte kullanıldığında tekrarlanan satırlara dikkat edin. Şüpheye düştüğünüzde alt sorgu ile önce gruplama yapıp sonra JOIN'lemek daha güvenlidir.</div>
</div>
</div>

</div>

<script>
var openCount = 0;
function toggleSolution(btn) {
    var box = btn.nextElementSibling;
    var isOpen = box.classList.contains('show');
    
    if (isOpen) {
        box.classList.remove('show');
        btn.textContent = '💡 Çözümü Göster';
        btn.classList.remove('open');
        openCount--;
    } else {
        box.classList.add('show');
        btn.textContent = '🔽 Çözümü Gizle';
        btn.classList.add('open');
        openCount++;
    }
    
    document.getElementById('examProgress').textContent = 'Çözülen: ' + openCount + ' / 10';
}
</script>

{% endraw %}
