# Gonderi Olusturma Sablonu

## Dosya Adi Formati

```
_posts/YYYY-MM-DD-baslik-kebab-case.md
```

Ornek: `_posts/2026-02-20-oyun-dongusu-ve-game-loop.md`

---

## Front Matter (Dosyanin Basi)

```yaml
---
layout: post
title: "Gonderi Basligi Buraya"
date: YYYY-MM-DD
categories: ders-kategori-adi
---
```

### Gecerli Kategori Degerleri

| Kategori | Ders |
|----------|------|
| `oyun-programlama` | Oyun Programlama |
| `algoritma-ve-programlama-ii` | Algoritma ve Programlama II |
| `nesne-tabanli-programlama-ii` | Nesne Tabanli Programlama-II |
| `sistem-analizi-ve-tasarimi` | Sistem Analizi ve Tasarimi |
| `veri-tabani-yonetim-sistemleri-ii` | Veri Tabani Yonetim Sistemleri II |

---

## Icerik Yazim Kurallari (Markdown)

### Basliklar

```markdown
## Ana Baslik
### Alt Baslik
#### Kucuk Baslik
```

### Kalin ve Italik

```markdown
**kalin metin**
*italik metin*
```

### Listeler

```markdown
- Madde 1
- Madde 2
- Madde 3

1. Sirali madde 1
2. Sirali madde 2
3. Sirali madde 3
```

### Kod Bloklari

````markdown
Satir ici kod: `degisken_adi`

Cok satirli kod bloku:

```python
def merhaba():
    print("Merhaba Dunya")
```

Dil etiketleri: python, java, c, cpp, csharp, sql, javascript, html, css, bash
````

### Tablolar

```markdown
| Baslik 1 | Baslik 2 | Baslik 3 |
|----------|----------|----------|
| Veri 1   | Veri 2   | Veri 3   |
| Veri 4   | Veri 5   | Veri 6   |
```

### Alinti

```markdown
> Bu bir alinti bloklardir. Onemli notlar icin kullanilabilir.
```

### Yatay Cizgi

```markdown
---
```

---

## Ornek Gonderi

```markdown
---
layout: post
title: "Oyun Dongusu ve Game Loop Yapisi"
date: 2026-02-20
categories: oyun-programlama
---

Bu hafta oyun dongusunun (game loop) nasil calistigini inceliyoruz.

## Oyun Dongusu Nedir?

Oyun dongusu, bir oyunun surekli olarak calisan ana dongusudur. Her dongu adiminda uc temel islem gerceklesir:

1. **Input:** Kullanici girdilerinin okunmasi
2. **Update:** Oyun durumunun guncellenmesi
3. **Render:** Ekranin yeniden cizilmesi

## Basit Bir Oyun Dongusu

```python
while oyun_calisiyor:
    girdi_oku()
    guncelle(delta_zaman)
    ciz()
```

## Sabit ve Degisken Zaman Adimi

| Yontem | Avantaj | Dezavantaj |
|--------|---------|------------|
| Sabit adim | Tutarli fizik | Yavas cihazlarda kasma |
| Degisken adim | Esnek | Fizik hatalari |

> Profesyonel oyun motorlari genellikle sabit fizik adimi + degisken render dongusunu birlikte kullanir.

Gelecek hafta **2D cizim ve sprite yonetimi** konusunu isleyecegiz.
```

---

## Onemli Notlar

- Dosya adi ve front matter icindeki `date` alani **ayni tarih** olmali
- Dosya adi Turkce karakter icermemeli (i yerine i, o yerine o, u yerine u, s yerine s, c yerine c, g yerine g)
- `categories` alani **tam olarak** yukaridaki tablodaki degerlerden biri olmali
- Icerik Markdown formatinda yazilmali, HTML kullanilmamali
- Dosya `_posts/` klasorune konulmali
