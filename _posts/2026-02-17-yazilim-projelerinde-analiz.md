---
layout: post
title: "Yazılım Projelerinde Analiz ve Örnek Vaka Çalışması"
date: 2026-02-17
categories: sistem-analizi-ve-tasarimi
---

Yazılım geliştirme sadece kodlamaktan ibaret değildir. Bir problemin çözümü olarak nitelediğimiz yazılımların ne yapacağını ve nasıl yapacağını belirlediğimiz, yani problemi tanımladığımız aşama **"Analiz"** aşamasıdır.

Yazdığınız kod ancak isteneni doğru bir biçimde yerine getiriyorsa başarılı bir yazılımdır. Bu nedenle öncelikle yazılımdan ne istendiğinin doğru bir biçimde tanımlanması gerekir.

## Analiz Süreci Nasıl İşler?

1.  **Kapsam Belirleme:** Projenin neleri içerip neleri içermeyeceğinin belirlenmesi.
2.  **Sistem Analizi:** Yazılım ve donanım bileşenlerinin analizi.
3.  **Planlama:** Proje planı ve ekip oluşturma.
4.  **Çözümleme:** Yazılım isterlerinin (gereksinimlerinin) detaylandırılması.

---

## Örnek Vaka: Diyetisyen Randevu Sistemi

Analiz sürecini daha iyi anlamak için bir **Diyetisyen Randevu Sistemi** projesi üzerinden gidelim.

### 1. Kapsam Yönetimi

Müşteriler (öğretmeniniz, eşiniz, dostunuz) her zaman birçok şey isterler. Ancak zaman, bütçe ve enerji sınırlıdır. Kapsamı belirlemek, projeyi yapılabilir sınırlar içine çekmektir.

**Diyetisyen ile İlk Görüşme:**

> **Diyetisyen:** Hastalarım internet üzerinden randevu alabilmeli. Sekreterim ve ben bunları izleyebilmeliyiz. İptal/erteleme 2 gün önceden yapılabilmeli. Ayrıca hastalara SMS/Email gitmeli. Takvim esnek olmalı. He bir de, hastanın tahlil, diyet ve kişisel bilgilerini de takip etsin.

Burada klasik bir müşteri davranışı görüyoruz: "He bir de..." diyerek projeyi iki katına çıkardı.

**Analist (Siz):**
> "Hasta takip sistemi (tahlil, diyet vb.) ayrı bir iştir. Şu an anlattıklarınızdan iki ayrı sisteme ihtiyacınız olduğu anlaşılıyor: **Randevu Sistemi** ve **Hasta Takip Sistemi**. İkisinin aynı anda yetişmesi zor, biriyle başlayalım."

Böylece kapsamı **"Randevu Sistemi"** ile sınırladık.

### 2. İsterlerin Belirlenmesi (Requirements)

Yazılım isteri, yazılımın yerine getireceği işlevlerdir. Bunu belirlemek için doğru soruları sormak gerekir.

**Web Tabanlı Mı?**
> **Siz:** Sistem herkes tarafından erişilebilir olmalı. Web sunucunuz ve alan adınız var mı?
> **Diyetisyen:** Evet, var.

**Esnek Takvim**
> **Siz:** Takvimi nasıl yöneteceksiniz? Her gün tek tek mi gireceksiniz?
> **Diyetisyen:** Hayır, standart saatler (10:00-17:00) olsun, öğle arası (13:00-14:00) düşülsün. Gerektiğinde ek seans açabilelim.

Burada **"Otomatik Tekrarlayan Randevu"** isterini yakaladık. Bu olmazsa olmaz (Must-have).

**İş Kuralları (Business Rules)**
> **Siz:** İptal süresi 2 gün dediniz. Bu süre değişebilir mi?
> **Diyetisyen:** 2 gün standart ama özel durumlarda sekreterim telefonla arayanlar için esneklik yapabilir.

Buradan çıkan sonuç: İptal süresi **parametrik** olmalı. Ayrıca **yetki seviyeleri** (Hasta vs. Sekreter) farklı olmalı.

---

## Sistem İşlevleri (Fonksiyonel Gereksinimler)

Görüşmeler sonucunda sistemin yapması gerekenleri listeliyoruz:

### A. Diyetisyen ve Sekreter İşlevleri
1.  **Yönetici Girişi:** Kullanıcı adı/parola ile giriş.
2.  **Çalışma Zamanı Ayarları:** Günleri ve saat aralıklarını belirleme.
3.  **Ek Seans:** Standart dışı seans ekleme.
4.  **İptal Yönetimi:** Tekil veya toplu seans iptali (SMS/Email bildirimi ile).
5.  **İzleme:** Randevu doluluk durumunu görme.
6.  **Otomatik Oluşturma:** Sistem arka planda boş seansları kurallara göre (45 dk seans + 15 dk ara) oluşturmalı.

### B. Hasta İşlevleri
1.  **Randevu Alma:** Ad, soyad, telefon girerek boş seansa kayıt olma.
2.  **İptal/Erteleme:** Telefon no ile doğrulama yapıp, süre sınırı (2 gün) içindeyse işlem yapma.

## Ekran Tasarımları (Mockups)

Analizden çıkan ekran listesi:
*   **Yönetim:** Giriş, Ayarlar, Takvim Yönetimi, Raporlar.
*   **Hasta:** Randevu Sorgulama, Yeni Randevu, İptal Ekranı.

---

## Sonuç

Analiz, kodlamadan önceki en kritik adımdır. Eğer diyetisyene "seanslar arası boşluk olsun mu?" diye sormasaydık, yazılım bittiğinde "E ben nefes almadan mı çalışacağım?" şikayetiyle karşılaşacaktık ve tüm takvim yapısını baştan kodlamamız gerekecekti.

Analiz, **varsayımları ortadan kaldırma sanatıdır.**
