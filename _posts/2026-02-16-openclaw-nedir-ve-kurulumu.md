---
layout: post
title: "OpenClaw Nedir ve Nasil Kurulur?"
date: 2026-02-16
categories: nesne-tabanli-programlama-ii
---

Bu haftaki dersimizde biraz mufredat disina cikarak, modern otonom yapay zeka ajanlari gelistirmek icin kullanilan guclu bir arac olan **OpenClaw**'u inceledik.

## OpenClaw Nedir?

OpenClaw, gelistiricilerin kendi bilgisayarlarinda (local) guvenli ve yetenekli yapay zeka ajanlari calistirmasini saglayan acik kaynakli bir platformdur. Bulut tabanli sohbet botlarindan farkli olarak, OpenClaw sizin dosya sisteminize, terminalinize ve tarayiciniza erisebilir; boylece gercek isler yapabilir.

> **Temel Felsefe:** "Yapay zeka sadece sohbet etmek icin degil, is yapmak icindir."

## Nasil Kurulur? (En Guncel Surum)

OpenClaw'u kurmak icin bilgisayarinizda **Node.js** (v20+) yuklu olmalidir. Terminal (Komut Satiri) uzerinden su komutla en guncel surumu yukleyebilirsiniz:

```bash
npm install -g openclaw@latest
```

Kurulum tamamlandiktan sonra surumu kontrol etmek icin:

```bash
openclaw --version
```

## Nasil Kullanilir?

Kurulumdan sonra ajani baslatmak ve onunla konusmak icin su adimlari izleyin:

1.  **Gateway'i Baslat:** Arka planda calisacak servisi acin.
    ```bash
    openclaw gateway start
    ```

2.  **Oturum Ac:**
    Terminalden veya desteklenen bir arayuzden (Telegram, WhatsApp vb.) ajaninizla iletisime gecin.

## Guvenlik Uyarilari 🔒

OpenClaw guclu yeteneklere (dosya silme, komut calistirma) sahiptir. Bu yuzden guvenlik kritiktir:

- **Sandbox:** Ajanin erisebilecegi dosyalari kisitlamak icin `sandbox` ayarlarini yapilandirin.
- **Onay Mekanizmasi:** Kritik islem (orn: dosya silme) yapmadan once ajanin sizden onay istemesini saglayan `ask` modunu aktif tutun.
- **API Anahtarlari:** `OPENAI_API_KEY` gibi ozel anahtarlarinizi asla `git` repolarina yuklemeyin; `.env` dosyasi kullanin.

## Dosya Yapisi

Bir OpenClaw calisma alani (workspace) genellikle su sekildedir:

```
workspace/
├── AGENTS.md       # Ajanin kimligi ve gorevleri
├── MEMORY.md       # Uzun sureli hafiza ve notlar
├── TOOLS.md        # Kullanilabilir araclarin listesi
├── memory/         # Gunluk loglar (YYYY-MM-DD.md)
└── skills/         # Ozel yetenekler (scripts)
```

Daha fazla bilgi ve kaynak kodlari icin resmi repoyu inceleyebilirsiniz:
[https://github.com/openclaw/openclaw](https://github.com/openclaw/openclaw)
