---
layout: post
title: "Unity 3D ve VS Code Kurulum Rehberi"
date: 2026-02-16
categories: oyun-programlama
---

Bu derste, oyun gelistirme dunyasinin en popular motorlarindan biri olan **Unity**'i ve onunla mukemmel uyum saglayan kod editoru **Visual Studio Code**'u kuracagiz. Bu ikili, sektorun standart setidir.

## Neden Unity?

Unity, sadece bir "oyun motoru" degil, kapsamli bir ekosistemdir.
- **Cross-Platform:** Tek bir kod tabaniyla iOS, Android, PC, Konsol ve Web'e cikti alabilirsiniz.
- **Asset Store:** Hazir modeller, sesler ve scriptlerle prototiplemeyi hizlandirir.
- **Topluluk:** Karsilasabileceginiz her hatanin cozumu muhtemelen forumlarda vardir.
- **C# Dili:** Guclu, modern ve nesne tabanli bir dil kullanir.

---

## Adim 1: Unity Hub Kurulumu

Unity Editor'un kendisini dogrudan kurmayiz; once surumleri yoneten **Unity Hub**'i kurariz.

1.  [unity.com/download](https://unity.com/download) adresine gidin.
2.  **"Download Unity Hub"** butonuna tiklayin.
3.  Indirilen dosyayi (Windows icin .exe, Mac icin .dmg) calistirin ve kurulumu tamamlayin.
4.  Unity Hub'i acin ve **Unity ID** ile giris yapin (Hesabiniz yoksa ucretsiz olusturun).
5.  **Lisans Aktivasyonu:**
    - Sol menuden *Preferences* (Cark simgesi) -> *Licenses* sekmesine gidin.
    - "Add License" -> "Get a free personal license" secenegini kullanin.

## Adim 2: Unity Editor Kurulumu

Artik motorun kendisini kurabiliriz.

1.  Unity Hub'da sol menuden **Installs** sekmesine gelin.
2.  Sag ustteki **"Install Editor"** butonuna tiklayin.
3.  **"Official Releases"** altinda, yaninda `(LTS)` yazan en guncel surumu secin. (LTS: Long Term Support - En kararli surumdur).
4.  **Modul Secimi (Onemli!):**
    - "Add modules" ekraninda, ihtiyaciniz olan platformlari secin.
    - **Microsoft Visual Studio Community 2022:** Bunu **SECME YIN**. Biz daha hafif olan VS Code kullanacagiz.
    - **Android Build Support** (Eger mobil oyun yapacaksaniz).
    - **WebGL Build Support** (Tarayici oyunlari icin).
    - **Documentation:** Secmenize gerek yok, online bakabilirsiniz.
5.  "Continue" diyerek kurulumu baslatin. Bu islem internet hizina bagli olarak 15-30 dakika surebilir.

---

## Adim 3: VS Code Kurulumu

Visual Studio (Community/Enterprise) cok gucludur ama agirdir. VS Code ise hafif, hizli ve eklentilerle ozellestirilebilir.

1.  [code.visualstudio.com](https://code.visualstudio.com) adresinden sisteminize uygun surumu indirin ve kurun.
2.  VS Code'u acin.

## Adim 4: Unity ve VS Code Entegrasyonu

Kod yazarken `IntelliSense` (otomatik tamamlama) ozelliginin calismasi hayati onem tasir. `Rigidbody` yazarken `ri...` dediginizde tamamlamasi gerekir.

1.  **Gerekli Eklentiler (VS Code icinde):**
    - Sol menuden *Extensions* (Kare simgesi) kismina tiklayin.
    - **"C# Dev Kit"** (Microsoft) eklentisini bulun ve kurun.
    - **"Unity"** (Microsoft) eklentisini bulun ve kurun.

2.  **Unity Ayarlari:**
    - Unity Editor'u acin (Herhangi bir proje ile).
    - Menuden **Edit -> Preferences** (Mac: Unity -> Settings) yolunu izleyin.
    - **External Tools** sekmesine gelin.
    - **External Script Editor** secenegini **"Visual Studio Code"** olarak degistirin. (Listede yoksa "Browse" diyerek `code.exe` veya `Visual Studio Code.app` dosyasini gosterin).
    - **"Regenerate project files"** butonuna tiklayin.

---

## Kontrol Zamani

Her seyin dogru calistigini test edelim:
1.  Unity'de `Project` penceresinde sag tiklayip `Create -> C# Script` deyin.
2.  Dosyaya bir isim verin (orn: `TestScript`) ve cift tiklayin.
3.  VS Code acilacaktir.
4.  `void Start()` icine `Deb` yazdiginizda `Debug` onerisi geliyorsa basardiniz!

Artik oyun dunyasini insa etmeye hazirsiniz. 🚀
