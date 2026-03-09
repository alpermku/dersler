---
layout: post
title: "CV Oluşturucu: Profesyonel Özgeçmişini Hemen Oluştur"
date: 2026-03-09 23:00:00 +0300
categories: genel-kultur
---

Özgeçmiş rehberimizi okudunuz, artık sıra uygulamada. Aşağıdaki formu doldurun, canlı önizlemede CV'nizi görün ve **PDF olarak indirin**. ATS uyumlu, tek sayfa, profesyonel format.

{% raw %}

<style>
.cv-app{max-width:1100px;margin:0 auto;font-family:inherit}
.cv-layout{display:grid;grid-template-columns:1fr 1fr;gap:24px;align-items:start}
@media(max-width:860px){.cv-layout{grid-template-columns:1fr}}
.cv-form{background:#f8f9fa;border:1px solid #dee2e6;border-radius:12px;padding:20px}
.cv-form h3{margin:20px 0 10px;color:#2c3e50;font-size:1em;border-bottom:2px solid #6c5ce7;padding-bottom:4px;display:flex;align-items:center;gap:8px}
.cv-form h3:first-child{margin-top:0}
.cv-form label{display:block;font-size:.85em;color:#555;margin:8px 0 3px;font-weight:600}
.cv-form input,.cv-form textarea,.cv-form select{width:100%;padding:8px 10px;border:1px solid #ccc;border-radius:6px;font-size:.9em;font-family:inherit;background:#fff}
.cv-form textarea{resize:vertical;min-height:50px}
.cv-form input:focus,.cv-form textarea:focus{outline:none;border-color:#6c5ce7;box-shadow:0 0 0 2px rgba(108,92,231,.15)}
.entry-group{background:#fff;border:1px solid #e0e0e0;border-radius:8px;padding:12px;margin:8px 0}
.entry-group .entry-row{display:grid;grid-template-columns:1fr 1fr;gap:8px}
@media(max-width:500px){.entry-group .entry-row{grid-template-columns:1fr}}
.btn{padding:8px 16px;border:none;border-radius:6px;cursor:pointer;font-size:.85em;font-weight:600;transition:all .2s}
.btn-add{background:#00b894;color:#fff;margin:6px 0}
.btn-add:hover{background:#00a381}
.btn-remove{background:#e74c3c;color:#fff;font-size:.75em;padding:4px 10px}
.btn-remove:hover{background:#c0392b}
.btn-pdf{background:linear-gradient(135deg,#6c5ce7,#a29bfe);color:#fff;padding:12px 28px;font-size:1em;border-radius:8px;margin:12px 0;width:100%}
.btn-pdf:hover{opacity:.9;transform:translateY(-1px)}
.btn-share{background:linear-gradient(135deg,#0984e3,#74b9ff);color:#fff;padding:10px 20px;font-size:.9em;border-radius:8px;margin:6px 0;width:100%}
.btn-share:hover{opacity:.9}
.cv-preview-wrap{position:sticky;top:20px}
.cv-preview{background:#fff;border:1px solid #ccc;border-radius:4px;padding:32px 36px;font-family:'Segoe UI',Arial,sans-serif;font-size:10.5px;line-height:1.5;color:#222;min-height:600px;box-shadow:0 2px 12px rgba(0,0,0,.08)}
.cv-preview h1{font-size:18px;margin:0;text-align:center;letter-spacing:1px;color:#1a1a2e}
.cv-preview .cv-contact{text-align:center;font-size:9.5px;color:#555;margin:4px 0 12px;word-break:break-all}
.cv-preview .cv-section{margin:10px 0}
.cv-preview .cv-section-title{font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.8px;color:#1a1a2e;border-bottom:1.5px solid #2c3e50;padding-bottom:2px;margin-bottom:6px}
.cv-preview .cv-entry{margin-bottom:8px}
.cv-preview .cv-entry-header{display:flex;justify-content:space-between;font-weight:600;font-size:10.5px}
.cv-preview .cv-entry-sub{font-size:9.5px;color:#555;font-style:italic}
.cv-preview .cv-entry-detail{font-size:9.5px;color:#666}
.cv-preview ul{margin:2px 0 0 14px;padding:0}
.cv-preview li{font-size:9.5px;margin-bottom:1px;color:#333}
.cv-preview .cv-summary{font-size:10px;color:#444;margin:0 0 6px;line-height:1.6}
.cv-preview .cv-skills-grid{display:grid;grid-template-columns:auto 1fr;gap:2px 12px;font-size:9.5px}
.cv-preview .cv-skills-grid .sk-cat{font-weight:600;color:#2c3e50}
.cv-preview .cv-skills-grid .sk-val{color:#444}
.cv-preview .cv-langs{font-size:9.5px;color:#444}
.tip-box{background:#fff3cd;border:1px solid #ffc107;border-radius:6px;padding:8px 12px;margin:8px 0;font-size:.82em;color:#856404}
.hidden{display:none}
</style>

<div class="cv-app">

<div class="tip-box">💡 Formu doldurdukça sağ tarafta (mobilde aşağıda) canlı önizleme güncellenir. Tamamlayınca <strong>"PDF İndir"</strong> butonuna basın.</div>

<div class="cv-layout">

<!-- ========== FORM ========== -->
<div class="cv-form" id="cvForm">

<h3>👤 Kişisel Bilgiler</h3>
<label>Ad Soyad</label>
<input type="text" id="fullName" placeholder="Alper Kahraman" oninput="render()">
<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
<div><label>E-posta</label><input type="email" id="email" placeholder="alper@gmail.com" oninput="render()"></div>
<div><label>Telefon</label><input type="tel" id="phone" placeholder="+90 555 123 4567" oninput="render()"></div>
</div>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
<div><label>LinkedIn</label><input type="text" id="linkedin" placeholder="linkedin.com/in/alper" oninput="render()"></div>
<div><label>GitHub</label><input type="text" id="github" placeholder="github.com/alper" oninput="render()"></div>
</div>
<label>Şehir</label>
<input type="text" id="city" placeholder="İstanbul, Türkiye" oninput="render()">

<h3>📝 Profil Özeti</h3>
<textarea id="summary" rows="3" placeholder="Java ve Python deneyimine sahip Bilgisayar Programcılığı son sınıf öğrencisi. OOP, veritabanı yönetimi ve REST API geliştirme alanlarında 4 proje tamamladı." oninput="render()"></textarea>

<h3>💻 Teknik Beceriler</h3>
<div id="skillsList">
<div class="entry-group" data-idx="0">
<div class="entry-row">
<div><label>Kategori</label><input type="text" placeholder="Diller" oninput="render()" class="sk-cat"></div>
<div><label>Beceriler</label><input type="text" placeholder="Java, Python, JavaScript" oninput="render()" class="sk-val"></div>
</div>
</div>
</div>
<button class="btn btn-add" onclick="addSkill()">+ Kategori Ekle</button>

<h3>🎓 Eğitim</h3>
<div id="eduList">
<div class="entry-group" data-idx="0">
<label>Bölüm / Program</label>
<input type="text" placeholder="Bilgisayar Programcılığı" oninput="render()" class="edu-dept">
<div class="entry-row">
<div><label>Üniversite</label><input type="text" placeholder="Fırat Üniversitesi" oninput="render()" class="edu-uni"></div>
<div><label>Tarih</label><input type="text" placeholder="2024 – 2026" oninput="render()" class="edu-date"></div>
</div>
<div class="entry-row">
<div><label>GNO</label><input type="text" placeholder="3.35 / 4.00" oninput="render()" class="edu-gno"></div>
<div><label>İlgili Dersler</label><input type="text" placeholder="OOP, Veritabanı, Algoritma" oninput="render()" class="edu-courses"></div>
</div>
</div>
</div>

<h3>🚀 Projeler</h3>
<div id="projList">
<div class="entry-group" data-idx="0">
<div class="entry-row">
<div><label>Proje Adı</label><input type="text" placeholder="Kişi Rehberi Uygulaması" oninput="render()" class="prj-name"></div>
<div><label>Teknolojiler</label><input type="text" placeholder="Java, Swing, MySQL" oninput="render()" class="prj-tech"></div>
</div>
<label>Açıklama (her satır = bir madde)</label>
<textarea rows="3" placeholder="JFrame/JPanel ile katmanlı CRUD uygulaması geliştirdim&#10;Repository pattern ile veritabanı katmanını ayırdım&#10;500+ kayıt üzerinde anlık arama ekledim" oninput="render()" class="prj-desc"></textarea>
<label>GitHub Linki (opsiyonel)</label>
<input type="text" placeholder="github.com/kullanici/proje" oninput="render()" class="prj-link">
</div>
</div>
<button class="btn btn-add" onclick="addProject()">+ Proje Ekle</button>

<h3>💼 İş Deneyimi / Staj</h3>
<div id="expList"></div>
<button class="btn btn-add" onclick="addExp()">+ Deneyim Ekle</button>

<h3>📜 Sertifikalar</h3>
<div id="certList"></div>
<button class="btn btn-add" onclick="addCert()">+ Sertifika Ekle</button>

<h3>🌍 Yabancı Dil</h3>
<div id="langList">
<div class="entry-group" data-idx="0">
<div class="entry-row">
<div><label>Dil</label><input type="text" placeholder="İngilizce" oninput="render()" class="lang-name"></div>
<div><label>Seviye</label><input type="text" placeholder="B2 — YDS: 75" oninput="render()" class="lang-level"></div>
</div>
</div>
</div>
<button class="btn btn-add" onclick="addLang()">+ Dil Ekle</button>

<button class="btn btn-pdf" onclick="downloadPDF()">📄 PDF Olarak İndir</button>

</div>

<!-- ========== PREVIEW ========== -->
<div class="cv-preview-wrap">
<div class="cv-preview" id="cvPreview">
<p style="color:#999;text-align:center;padding-top:80px">← Formu doldurmaya başlayın, önizleme burada görünecek.</p>
</div>
</div>

</div>
</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js"></script>

<script>
// ─── State helpers ───
function addSkill(){
  const c=document.getElementById('skillsList');
  const d=document.createElement('div');d.className='entry-group';
  d.innerHTML=`<div class="entry-row"><div><label>Kategori</label><input type="text" placeholder="Framework" oninput="render()" class="sk-cat"></div><div><label>Beceriler</label><input type="text" placeholder="Spring Boot, Django" oninput="render()" class="sk-val"></div></div><button class="btn btn-remove" onclick="this.parentElement.remove();render()">✕ Sil</button>`;
  c.appendChild(d);
}
function addProject(){
  const c=document.getElementById('projList');
  const d=document.createElement('div');d.className='entry-group';
  d.innerHTML=`<div class="entry-row"><div><label>Proje Adı</label><input type="text" placeholder="Proje adı" oninput="render()" class="prj-name"></div><div><label>Teknolojiler</label><input type="text" placeholder="Python, Flask" oninput="render()" class="prj-tech"></div></div><label>Açıklama (her satır = bir madde)</label><textarea rows="3" placeholder="Madde 1&#10;Madde 2" oninput="render()" class="prj-desc"></textarea><label>GitHub Linki</label><input type="text" placeholder="github.com/..." oninput="render()" class="prj-link"><button class="btn btn-remove" onclick="this.parentElement.remove();render()">✕ Sil</button>`;
  c.appendChild(d);
}
function addExp(){
  const c=document.getElementById('expList');
  const d=document.createElement('div');d.className='entry-group';
  d.innerHTML=`<div class="entry-row"><div><label>Pozisyon</label><input type="text" placeholder="Backend Stajyer" oninput="render()" class="exp-title"></div><div><label>Tarih</label><input type="text" placeholder="Haz 2025 – Ağu 2025" oninput="render()" class="exp-date"></div></div><label>Şirket</label><input type="text" placeholder="ABC Teknoloji A.Ş., İstanbul" oninput="render()" class="exp-company"><label>Açıklama (her satır = bir madde)</label><textarea rows="3" placeholder="Spring Boot ile 3 yeni endpoint ekledim&#10;Test kapsama oranını %72'ye çıkardım" oninput="render()" class="exp-desc"></textarea><button class="btn btn-remove" onclick="this.parentElement.remove();render()">✕ Sil</button>`;
  c.appendChild(d);
}
function addCert(){
  const c=document.getElementById('certList');
  const d=document.createElement('div');d.className='entry-group';
  d.innerHTML=`<div class="entry-row"><div><label>Sertifika Adı</label><input type="text" placeholder="Python for Everybody" oninput="render()" class="cert-name"></div><div><label>Kurum / Platform, Yıl</label><input type="text" placeholder="Coursera, 2025" oninput="render()" class="cert-org"></div></div><button class="btn btn-remove" onclick="this.parentElement.remove();render()">✕ Sil</button>`;
  c.appendChild(d);
}
function addLang(){
  const c=document.getElementById('langList');
  const d=document.createElement('div');d.className='entry-group';
  d.innerHTML=`<div class="entry-row"><div><label>Dil</label><input type="text" placeholder="Almanca" oninput="render()" class="lang-name"></div><div><label>Seviye</label><input type="text" placeholder="A2" oninput="render()" class="lang-level"></div></div><button class="btn btn-remove" onclick="this.parentElement.remove();render()">✕ Sil</button>`;
  c.appendChild(d);
}

// ─── Collect data ───
function gv(id){return document.getElementById(id).value.trim();}
function collect(parentId, cls){
  return Array.from(document.querySelectorAll('#'+parentId+' .entry-group')).map(g=>{
    const o={};
    cls.forEach(c=>{const el=g.querySelector('.'+c);o[c]=el?(el.value||'').trim():'';});
    return o;
  }).filter(o=>Object.values(o).some(v=>v));
}

// ─── Render ───
function esc(s){const d=document.createElement('div');d.textContent=s;return d.innerHTML;}

function render(){
  const name=gv('fullName'),email=gv('email'),phone=gv('phone'),linkedin=gv('linkedin'),github=gv('github'),city=gv('city'),summary=gv('summary');
  const skills=collect('skillsList',['sk-cat','sk-val']);
  const edu=collect('eduList',['edu-dept','edu-uni','edu-date','edu-gno','edu-courses']);
  const projs=collect('projList',['prj-name','prj-tech','prj-desc','prj-link']);
  const exps=collect('expList',['exp-title','exp-date','exp-company','exp-desc']);
  const certs=collect('certList',['cert-name','cert-org']);
  const langs=collect('langList',['lang-name','lang-level']);

  if(!name&&!summary&&skills.length===0){
    document.getElementById('cvPreview').innerHTML='<p style="color:#999;text-align:center;padding-top:80px">← Formu doldurmaya başlayın, önizleme burada görünecek.</p>';
    return;
  }

  let h='';
  // Header
  h+=`<h1>${esc(name)||'AD SOYAD'}</h1>`;
  const contact=[];
  if(email)contact.push(esc(email));
  if(phone)contact.push(esc(phone));
  if(linkedin)contact.push(esc(linkedin));
  if(github)contact.push(esc(github));
  if(city)contact.push(esc(city));
  if(contact.length)h+=`<div class="cv-contact">${contact.join(' &nbsp;&middot;&nbsp; ')}</div>`;

  // Summary
  if(summary){
    h+=`<div class="cv-section"><div class="cv-section-title">Profil Özeti</div><p class="cv-summary">${esc(summary)}</p></div>`;
  }

  // Skills
  if(skills.length){
    h+=`<div class="cv-section"><div class="cv-section-title">Teknik Beceriler</div><div class="cv-skills-grid">`;
    skills.forEach(s=>{
      if(s['sk-cat']||s['sk-val'])h+=`<span class="sk-cat">${esc(s['sk-cat'])}</span><span class="sk-val">${esc(s['sk-val'])}</span>`;
    });
    h+=`</div></div>`;
  }

  // Education
  if(edu.length){
    h+=`<div class="cv-section"><div class="cv-section-title">Eğitim</div>`;
    edu.forEach(e=>{
      h+=`<div class="cv-entry"><div class="cv-entry-header"><span>${esc(e['edu-dept'])}</span><span>${esc(e['edu-date'])}</span></div>`;
      if(e['edu-uni'])h+=`<div class="cv-entry-sub">${esc(e['edu-uni'])}`;
      if(e['edu-gno'])h+=` &nbsp;|&nbsp; GNO: ${esc(e['edu-gno'])}`;
      h+=`</div>`;
      if(e['edu-courses'])h+=`<div class="cv-entry-detail">İlgili Dersler: ${esc(e['edu-courses'])}</div>`;
      h+=`</div>`;
    });
    h+=`</div>`;
  }

  // Projects
  if(projs.length){
    h+=`<div class="cv-section"><div class="cv-section-title">Projeler</div>`;
    projs.forEach(p=>{
      h+=`<div class="cv-entry"><div class="cv-entry-header"><span>${esc(p['prj-name'])}</span><span style="font-weight:400;font-style:italic;color:#666">${esc(p['prj-tech'])}</span></div>`;
      if(p['prj-desc']){
        const lines=p['prj-desc'].split('\n').map(l=>l.trim()).filter(l=>l);
        if(lines.length){h+=`<ul>`;lines.forEach(l=>{h+=`<li>${esc(l.replace(/^[-•]\s*/,''))}</li>`;});h+=`</ul>`;}
      }
      if(p['prj-link'])h+=`<div class="cv-entry-detail">${esc(p['prj-link'])}</div>`;
      h+=`</div>`;
    });
    h+=`</div>`;
  }

  // Experience
  if(exps.length){
    h+=`<div class="cv-section"><div class="cv-section-title">İş Deneyimi</div>`;
    exps.forEach(e=>{
      h+=`<div class="cv-entry"><div class="cv-entry-header"><span>${esc(e['exp-title'])}</span><span>${esc(e['exp-date'])}</span></div>`;
      if(e['exp-company'])h+=`<div class="cv-entry-sub">${esc(e['exp-company'])}</div>`;
      if(e['exp-desc']){
        const lines=e['exp-desc'].split('\n').map(l=>l.trim()).filter(l=>l);
        if(lines.length){h+=`<ul>`;lines.forEach(l=>{h+=`<li>${esc(l.replace(/^[-•]\s*/,''))}</li>`;});h+=`</ul>`;}
      }
      h+=`</div>`;
    });
    h+=`</div>`;
  }

  // Certs
  if(certs.length){
    h+=`<div class="cv-section"><div class="cv-section-title">Sertifikalar</div><ul>`;
    certs.forEach(c=>{
      let t=esc(c['cert-name']);
      if(c['cert-org'])t+=' — '+esc(c['cert-org']);
      h+=`<li>${t}</li>`;
    });
    h+=`</ul></div>`;
  }

  // Languages
  if(langs.length){
    h+=`<div class="cv-section"><div class="cv-section-title">Yabancı Dil</div><div class="cv-langs">`;
    langs.forEach(l=>{
      h+=`<div>${esc(l['lang-name'])}: ${esc(l['lang-level'])}</div>`;
    });
    h+=`</div></div>`;
  }

  document.getElementById('cvPreview').innerHTML=h;
}

// ─── PDF ───
function downloadPDF(){
  const el=document.getElementById('cvPreview');
  if(el.querySelector('p[style]')&&el.children.length===1){
    alert('Lütfen önce formu doldurun!');return;
  }
  const name=gv('fullName')||'CV';
  const filename=name.replace(/\s+/g,'_')+'_CV.pdf';

  // Build a self-contained HTML string with all styles inlined
  const cssText=`
    *{margin:0;padding:0;box-sizing:border-box}
    body{font-family:'Segoe UI',Arial,Helvetica,sans-serif;font-size:10.5px;line-height:1.5;color:#222;padding:0;background:#fff}
    h1{font-size:18px;text-align:center;letter-spacing:1px;color:#1a1a2e;margin:0}
    .cv-contact{text-align:center;font-size:9.5px;color:#555;margin:4px 0 12px;word-break:break-all}
    .cv-section{margin:10px 0}
    .cv-section-title{font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.8px;color:#1a1a2e;border-bottom:1.5px solid #2c3e50;padding-bottom:2px;margin-bottom:6px}
    .cv-entry{margin-bottom:8px}
    .cv-entry-header{display:flex;justify-content:space-between;font-weight:600;font-size:10.5px}
    .cv-entry-sub{font-size:9.5px;color:#555;font-style:italic}
    .cv-entry-detail{font-size:9.5px;color:#666}
    .cv-summary{font-size:10px;color:#444;margin:0 0 6px;line-height:1.6}
    .cv-skills-grid{display:grid;grid-template-columns:auto 1fr;gap:2px 12px;font-size:9.5px}
    .sk-cat{font-weight:600;color:#2c3e50}
    .sk-val{color:#444}
    .cv-langs{font-size:9.5px;color:#444}
    ul{margin:2px 0 0 14px;padding:0}
    li{font-size:9.5px;margin-bottom:1px;color:#333}
  `;

  const wrapper=document.createElement('div');
  wrapper.innerHTML=`<style>${cssText}</style>${el.innerHTML}`;
  wrapper.style.cssText='position:fixed;left:-9999px;top:0;width:190mm;background:#fff;padding:10mm;z-index:-1;';
  document.body.appendChild(wrapper);

  const opt={
    margin:0,
    filename:filename,
    image:{type:'jpeg',quality:0.98},
    html2canvas:{scale:2,useCORS:true,logging:false,width:wrapper.scrollWidth,height:wrapper.scrollHeight},
    jsPDF:{unit:'mm',format:'a4',orientation:'portrait'}
  };

  html2pdf().set(opt).from(wrapper).save().then(()=>{
    document.body.removeChild(wrapper);
  }).catch(()=>{
    if(wrapper.parentNode)document.body.removeChild(wrapper);
  });
}
</script>

{% endraw %}
