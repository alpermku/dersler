---
layout: post
title: "Sistem Analizi ve Tasarımında Git + GitHub + GitHub Pages ile Uçtan Uca Proje Yönetimi"
date: 2026-03-03
categories: sistem-analizi-ve-tasarimi
---

Bu derste bir projeyi sıfırdan yerelde başlatıp Git ile sürümleyerek GitHub’a taşımayı, ekip içinde kontrollü ilerlemeyi ve haftalık ilerleme raporlarını **GitHub Pages** üzerinden yayınlamayı adım adım yapacağız.

Bu içerik sadece “komut ezberi” değil; aynı zamanda Sistem Analizi ve Tasarımı dersindeki şu soruya da cevap verir:

> "Bir projenin yaşam döngüsünü nasıl görünür, izlenebilir ve denetlenebilir hâle getiririz?"

---

## Bu Derste Kazanacağınız Yetkinlikler

Ders sonunda şunları yapabiliyor olacaksınız:

- Yerelde yeni bir proje klasörü oluşturmak
- Projeyi Git deposuna dönüştürmek (`git init`)
- Dosya eklemek, commit atmak, geçmişi yorumlamak
- Uzak GitHub deposu oluşturmak ve bağlamak (`remote`)
- İlk push ve sonraki güncellemeleri güvenle yapmak
- GitHub’a giriş, SSH/PAT farkı ve temel güvenlik adımlarını uygulamak
- İlerleme raporlarını Markdown ile yazıp GitHub Pages’te yayınlamak
- Haftalık proje raporlamasını akademik düzende sürdürülebilir hâle getirmek

---

## 1) Neden Git + GitHub + GitHub Pages?

Sistem analizi perspektifinden düşünelim:

- **İzlenebilirlik (Traceability):** Hangi gereksinim ne zaman eklendi?
- **Sorumluluk (Accountability):** Hangi değişikliği kim yaptı?
- **Geri alınabilirlik (Rollback):** Hatalı bir noktadan güvenli dönüş mümkün mü?
- **Şeffaf raporlama:** Proje ilerleyişi danışman/öğretim elemanı tarafından düzenli görülebiliyor mu?

Git bu soruların teknik cevabıdır.
GitHub işbirliği katmanıdır.
GitHub Pages ise raporun herkese açık vitrinidir.

---

## 2) Ön Koşullar

- Bir GitHub hesabı
- Bilgisayarda Git kurulumu
- Basit bir kod editörü (VS Code önerilir)

### Kurulum Kontrolü

```bash
git --version
```

Sürüm görüyorsanız hazırsınız.

---

## 3) GitHub Hesabına Giriş (Login) ve Kimlik Doğrulama

GitHub ile çalışırken iki temel kimlik doğrulama yaklaşımı vardır:

1. **HTTPS + Personal Access Token (PAT)**
2. **SSH anahtarı** (önerilen, uzun vadede rahat)

### 3.1 Git Kimliğini Ayarlama (İlk Yapılandırma)

```bash
git config --global user.name "Ad Soyad"
git config --global user.email "mailiniz@ornek.com"
```

Kontrol:

```bash
git config --global --list
```

### 3.2 SSH ile GitHub’a Bağlanma (Önerilen)

```bash
ssh-keygen -t ed25519 -C "mailiniz@ornek.com"
```

Ardından public key’i kopyalayın:

```bash
cat ~/.ssh/id_ed25519.pub
```

GitHub > **Settings > SSH and GPG keys > New SSH key** bölümüne ekleyin.

Test:

```bash
ssh -T git@github.com
```

"Hi <kullanıcı_adı>!" benzeri bir doğrulama mesajı alırsanız bağlantı tamamdır.

---

## 4) Yerelde Proje Oluşturma ve Git Başlatma

Örnek proje: `kampus-yardimlasma`

```bash
mkdir kampus-yardimlasma
cd kampus-yardimlasma
git init
```

İlk dosyaları oluşturalım:

```bash
echo "# Kampüs Yardımlaşma Platformu" > README.md
mkdir docs
echo "# Proje Vizyonu" > docs/vizyon.md
```

Durumu kontrol et:

```bash
git status
```

---

## 5) İlk Commit: Mantık ve Uygulama

Git’te temel akış:

- Working Directory (çalışma alanı)
- Staging Area (`git add`)
- Local Repository (`git commit`)

### 5.1 Dosyaları Stage Et

```bash
git add .
```

### 5.2 Anlamlı Commit At

```bash
git commit -m "chore: proje iskeleti ve başlangıç dokümanları eklendi"
```

### 5.3 Geçmişe Bak

```bash
git log --oneline --decorate --graph
```

> İpucu: Commit mesajı “ne yaptım” + “neden yaptım” ipucunu taşımalı.

---

## 6) Uzak GitHub Reposu Açma ve Bağlama

GitHub’da yeni repo açın: `kampus-yardimlasma`

Yerelden bağlayın:

```bash
git branch -M main
git remote add origin git@github.com:kullaniciadi/kampus-yardimlasma.git
```

Kontrol:

```bash
git remote -v
```

İlk push:

```bash
git push -u origin main
```

Bundan sonra çoğunlukla:

```bash
git push
```

---

## 7) Günlük Geliştirme Döngüsü (Öğrenci İçin En Pratik Model)

Her çalışma seansında bu mini döngüyü izleyin:

1. `git pull` (uzaktaki güncel durumu al)
2. Değişiklik yap
3. `git status`
4. `git add .`
5. `git commit -m "..."`
6. `git push`

Örnek:

```bash
git pull
# kod/doküman güncelle
git status
git add .
git commit -m "feat: kullanıcı kayıt akışı analiz notları eklendi"
git push
```

---

## 8) İlerleme Raporlarını Doğru Sunma: GitHub Pages

Sistem Analizi ve Tasarımı derslerinde sık problem: “Ödev var ama süreç görünmüyor.”

Bunu çözmek için proje içinde rapor alanı açıyoruz:

```bash
mkdir -p raporlar/haftalik
```

Örnek rapor dosyası:

`raporlar/haftalik/hafta-01.md`

İçerik şablonu:

```markdown
# Hafta 01 İlerleme Raporu

## 1) Hedef
Bu hafta projenin kapsamını netleştirmek.

## 2) Yapılanlar
- Proje deposu açıldı
- README ve vizyon dokümanı yazıldı
- İlk commit ve push yapıldı

## 3) Kararlar
- İlk sürüm web tabanlı olacak
- Yetkilendirme MVP'de temel düzeyde tutulacak

## 4) Riskler
- Gereksinimlerin değişme olasılığı yüksek

## 5) Gelecek Hafta Planı
- Paydaş analizi
- Use-case taslakları
```

### 8.1 GitHub Pages Aktifleştirme

1. GitHub repo > **Settings**
2. Sol menüden **Pages**
3. Source: `Deploy from a branch`
4. Branch: `main` / folder: `/ (root)` veya `/docs`
5. Save

Site adresi şu formata gelir:

`https://kullaniciadi.github.io/kampus-yardimlasma/`

> Alternatif: Raporları `docs/` altında tutup Pages kaynağını `/docs` seçebilirsiniz.

---

## 9) Örnek Senaryo: Bir Haftalık Proje Akışı

### Gün 1 — Başlangıç
- Repo oluşturuldu
- README + vizyon eklendi
- İlk commit/push tamam

### Gün 3 — Analiz Genişletme
- `docs/paydas-analizi.md` eklendi
- Commit: `docs: paydaş analizi ilk taslak`

### Gün 5 — Raporlama
- `raporlar/haftalik/hafta-01.md` güncellendi
- Commit: `report: hafta 01 ilerleme raporu yayımlandı`

Bu akışın artısı: Öğretim elemanı sadece repoya bakarak süreci tarihsel olarak görebilir.

---

## 10) Sık Yapılan Hatalar ve Çözüm Rehberi

### Hata 1: "nothing to commit"
Sebep: Değişiklik yok veya dosya takipte değil.

Çözüm:

```bash
git status
```

### Hata 2: `remote origin already exists`
Sebep: `origin` zaten tanımlı.

Çözüm:

```bash
git remote remove origin
git remote add origin git@github.com:kullaniciadi/repo.git
```

### Hata 3: `rejected (non-fast-forward)`
Sebep: Uzakta yeni commit var.

Çözüm:

```bash
git pull --rebase
git push
```

### Hata 4: Branch adı karışıklığı (`master/main`)

Çözüm:

```bash
git branch -M main
```

---

## 11) Ders İçin Değerlendirme Kriterleri (Öneri)

| Ölçüt | Beklenen |
|---|---|
| Repo Düzeni | README, docs, raporlar klasör yapısı düzenli |
| Commit Kalitesi | Küçük, anlamlı, düzenli commit mesajları |
| Süreç Şeffaflığı | Haftalık raporlar tarihsel olarak takip edilebilir |
| GitHub Pages | Raporların yayınlanmış ve erişilebilir olması |
| Analiz Derinliği | Karar, risk, kapsam ve plan bölümlerinin dolu olması |

---

## 12) Mini Uygulama Ödevi

Aşağıdaki adımları bireysel olarak uygulayın:

1. `sistem-analizi-projem` adında yerel klasör oluşturun.
2. Git repo başlatın ve `README.md` + `docs/vizyon.md` ekleyin.
3. İlk commit’i atın.
4. GitHub’da uzak repo açıp `origin` olarak bağlayın.
5. Projeyi push’layın.
6. `raporlar/haftalik/hafta-01.md` dosyası ile ilk raporunuzu yazın.
7. GitHub Pages’i aktif edip rapor bağlantınızı paylaşın.

---

## 13) Sonuç

Git sadece kod saklama aracı değildir; Sistem Analizi ve Tasarımı dersinde **kanıt üretme mekanizmasıdır**.

- Analiz kararlarının izi commit geçmişinde kalır.
- Proje evrimi raporlarla görünür hâle gelir.
- GitHub Pages süreci vitrine taşır.

Kısacası: iyi proje, iyi analiz + iyi raporlama + iyi sürüm kontrolüdür.

---

## Hızlı Komut Özeti

```bash
# ilk kurulum
git config --global user.name "Ad Soyad"
git config --global user.email "mail@example.com"

# yeni proje
mkdir proje && cd proje
git init
git add .
git commit -m "chore: initial commit"

# github bağlama
git branch -M main
git remote add origin git@github.com:kullaniciadi/proje.git
git push -u origin main

# günlük akış
git pull
git add .
git commit -m "feat/docs/report: ..."
git push
```
