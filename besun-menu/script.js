/* ===== Kamand Sweets digital menu ===== */

/* ---------- Category icons (SVG, white line) ---------- */
const ICONS = {
  cupcake:`<path d="M5 11h14l-1.5 8.5a1 1 0 0 1-1 .8H7.5a1 1 0 0 1-1-.8z"/><path d="M5.5 11a3.8 3.8 0 0 1 1-6.2A3.3 3.3 0 0 1 12 3a3.3 3.3 0 0 1 4.5 1.8 3.8 3.8 0 0 1 1 6.2"/><path d="M10 11l-.4 8M14 11l.4 8"/>`,
  pie:`<path d="M3 9.5 12 21l9-11.5z"/><path d="M3 9.5a9 3.4 0 0 1 18 0"/><circle cx="12" cy="12.5" r=".8" fill="currentColor" stroke="none"/>`,
  croissant:`<path d="M5 15a8 8 0 0 1 14-6 6 6 0 0 0-8 2.2 6 6 0 0 0 2 7.8 8 8 0 0 1-8-4z"/><path d="M8.5 11.5l1.5 3M12 10.5l.4 3.4"/>`,
  cake:`<path d="M4 21h16"/><path d="M5 21v-7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v7"/><path d="M4 16.5h16"/><path d="M12 8.5v3.5"/><circle cx="12" cy="6.6" r="1.1"/>`,
  cookie:`<path d="M12 3a9 9 0 1 0 9 9 3 3 0 0 1-3-3 3 3 0 0 1-3-3 3 3 0 0 1-3-3z"/><circle cx="9" cy="10" r=".7" fill="currentColor" stroke="none"/><circle cx="13.5" cy="14" r=".7" fill="currentColor" stroke="none"/><circle cx="9.5" cy="15" r=".7" fill="currentColor" stroke="none"/><circle cx="14" cy="9.5" r=".55" fill="currentColor" stroke="none"/>`,
  coffee:`<path d="M4 8h13v5a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5z"/><path d="M17 9h2.4a2.5 2.5 0 0 1 0 5H17"/><path d="M7.5 2c-.6 1 .6 2 0 3M11 2c-.6 1 .6 2 0 3M14.5 2c-.6 1 .6 2 0 3"/>`,
  cold:`<path d="M6.5 7h11l-1.1 12.2a1 1 0 0 1-1 .9H8.6a1 1 0 0 1-1-.9z"/><path d="M5 7h14"/><path d="M13.5 3l-2 9"/>`,
  drink:`<path d="M6.5 7h11l-1 13a1 1 0 0 1-1 .9H8.5a1 1 0 0 1-1-.9z"/><path d="M5.5 7h13"/><path d="M8.5 4h7l-1 3H9.5z"/>`,
  shake:`<path d="M6 8h12l-1 3H7z"/><path d="M7 11l1.2 9a1 1 0 0 0 1 .9h5.6a1 1 0 0 0 1-.9L17 11"/><path d="M13.5 2.5l-1.2 5.5"/><path d="M9 5c2-1.6 4-1.6 6 0"/>`,
  tea:`<path d="M4 8.5h12v3.5a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5z"/><path d="M16 9.5h2.3a2 2 0 0 1 0 4H16"/><path d="M4 20.5h13"/><path d="M8 2.5c-.5 1 .5 1.6 0 2.6M11.5 2.5c-.5 1 .5 1.6 0 2.6"/>`,
  bread:`<path d="M4 13a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4 1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z"/><path d="M5 14v4a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-4"/><path d="M9 9.2c0-1 .5-1.9 1.4-1.9M13 9.2c0-1 .5-1.9 1.4-1.9"/>`,
  egg:`<path d="M7 7.5c2-2 5-1.2 6 1 3-1 6 1 6 4s-2 5-5 5H8c-3 0-5-2-5-5s2-4.5 4-4.5c0-.2 0-.4 0-.5z"/><circle cx="11" cy="12" r="2.6"/>`,
  sandwich:`<path d="M3 8.5l9-4 9 4-9 4z"/><path d="M4.5 12.2l7.5 3.3 7.5-3.3"/><path d="M4.5 15.4l7.5 3.3 7.5-3.3"/>`,
  jar:`<path d="M8 3h8"/><path d="M9 3v1.8a3 3 0 0 1-1 2.2 3 3 0 0 0-1 2.2V19a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9.2a3 3 0 0 0-1-2.2 3 3 0 0 1-1-2.2V3"/><path d="M7 12h10"/>`,
  leaf:`<path d="M5 20c-1-9 5-15 15-16 1 10-5 16-15 16z"/><path d="M6 20c2-6 6-10 12-12"/>`,
  bottle:`<path d="M10 2.5h4V5a2 2 0 0 0 .6 1.4l.9.9a3 3 0 0 1 .9 2.1V20a2 2 0 0 1-2 2H9.6a2 2 0 0 1-2-2V9.4a3 3 0 0 1 .9-2.1l.9-.9A2 2 0 0 0 10 5z"/><path d="M7.6 11.5h8.8"/>`,
  iceCream:`<path d="M7 9a5 5 0 0 1 10 0z"/><path d="M7.6 9.5 12 21l4.4-11.5"/><path d="M8.7 13.5h6.6"/>`,
  soda:`<path d="M7.5 7h9l-.6 13a1 1 0 0 1-1 .95H9.1a1 1 0 0 1-1-.95z"/><path d="M7.5 7 8.4 4.2A1 1 0 0 1 9.35 3.5h5.3a1 1 0 0 1 .95.7L16.5 7"/><path d="M8 10h8"/>`
};

function icon(name){
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name]||""}</svg>`;
}

/* ---------- Menu data ---------- */
const SECTIONS = [
  {
    id:"main", nav:"غذای اصلی", title:"غذای اصلی", icon:"sandwich",
    items:[
      {n:"ساندویچ فیله مرغ", p:"۳۶۰,۰۰۰ تومان", d:""},
      {n:"ساندویچ تخم مرغ", p:"۳۳۰,۰۰۰ تومان", d:""},
      {n:"سیب زمینی سرخ کرده", p:"۳۳۰,۰۰۰ تومان", d:""}
    ]
  },
  {
    id:"diet", nav:"آیتم‌های رژیمی", title:"آیتم‌های رژیمی", icon:"leaf",
    items:[
      {n:"انرژی بار", p:"۲۴۰,۰۰۰ تومان", d:""},
      {n:"اسنک خرما", p:"۷۰۰,۰۰۰ تومان", d:""},
      {n:"کوکی رژیمی", p:"۱۹۵,۰۰۰ تومان", d:""}
    ]
  },
  {
    id:"dessert", nav:"دسر", title:"دسر", icon:"cake",
    items:[
      {n:"چیزکیک رافائلو", p:"۲۹۰,۰۰۰ تومان", d:""},
      {n:"چیزکیک لوتوس تک نفره", p:"۲۹۰,۰۰۰ تومان", d:""},
      {n:"کیک شکلاتی", p:"۳۰۰,۰۰۰ تومان", d:""},
      {n:"تیرامیسو", p:"۳۲۰,۰۰۰ تومان", d:""},
      {n:"چیزکیک فندق", p:"۲۹۰,۰۰۰ تومان", d:""},
      {n:"کیک خامه‌ای شکلاتی", p:"۴۲۰,۰۰۰ تومان", d:""},
      {n:"کیک وانیلی", p:"۲۹۰,۰۰۰ تومان", d:""}
    ]
  },
  {
    id:"bread-cookie", nav:"نان و کوکی", title:"نان و کوکی", icon:"croissant",
    items:[
      {n:"کروسان شکلاتی", p:"۲۹۸,۰۰۰ تومان", d:""},
      {n:"کروسان پسته", p:"۳۱۰,۰۰۰ تومان", d:""},
      {n:"کوکی چیپس شکلات", p:"۱۶۰,۰۰۰ تومان", d:""},
      {n:"کوکی دبل چاکلت", p:"۱۷۵,۰۰۰ تومان", d:""},
      {n:"رول دارچین", p:"۲۰۹,۰۰۰ تومان", d:""},
      {n:"تویست چاکلت", p:"۲۷۰,۰۰۰ تومان", d:""},
      {n:"رول نیویورکی", p:"۲۸۰,۰۰۰ تومان", d:""}
    ]
  },
  {
    id:"simit", nav:"سیمیت", title:"سیمیت", icon:"bread",
    items:[
      {n:"سیمیت نون و پنیر", p:"۲۸۰,۰۰۰ تومان", d:""},
      {n:"سیمیت موز و نوتلا", p:"۳۱۰,۰۰۰ تومان", d:""},
      {n:"سیمیت تخم مرغ و پیازچه + پنیر", p:"۳۵۰,۰۰۰ تومان", d:""}
    ]
  },
  {
    id:"hot-drinks", nav:"نوشیدنی گرم", title:"نوشیدنی گرم", icon:"coffee",
    items:[
      {n:"کورتادو", p:"۳۵۰,۰۰۰ تومان", d:""},
      {n:"لاته", p:"۳۷۰,۰۰۰ تومان", d:""},
      {n:"اسپرسو", p:"۲۶۰,۰۰۰ تومان", d:""},
      {n:"چای + گل محمدی و دارچین", p:"۱۵۰,۰۰۰ تومان", d:""},
      {n:"کارامل ماکیاتو", p:"۳۹۰,۰۰۰ تومان", d:""},
      {n:"کاپوچینو", p:"۳۶۰,۰۰۰ تومان", d:""},
      {n:"موکا", p:"۳۹۰,۰۰۰ تومان", d:""},
      {n:"آمریکانو", p:"۳۱۰,۰۰۰ تومان", d:""},
      {n:"هات چاکلت", p:"۳۴۰,۰۰۰ تومان", d:""},
      {n:"شیر گرم", p:"۴۰,۰۰۰ تومان", d:""},
      {n:"شیر گرم با دارچین و عسل", p:"۱۵۰,۰۰۰ تومان", d:""}
    ]
  },
  {
    id:"cold-drinks", nav:"نوشیدنی سرد", title:"نوشیدنی سرد", icon:"cold",
    items:[
      {n:"آیس کارامل ماکیاتو", p:"۳۹۹,۰۰۰ تومان", d:""},
      {n:"آیس موکا", p:"۳۹۹,۰۰۰ تومان", d:""},
      {n:"آیس آمریکانو", p:"۳۵۰,۰۰۰ تومان", d:""},
      {n:"آیس لته", p:"۳۷۰,۰۰۰ تومان", d:""},
      {n:"آبمیوه", p:"۱۸۵,۰۰۰ تومان", d:""},
      {n:"آفوگاتو", p:"۳۹۰,۰۰۰ تومان", d:""},
      {n:"شیرموز بستنی", p:"۴۵۰,۰۰۰ تومان", d:""}
    ]
  },
  {
    id:"sports", nav:"نوشیدنی ورزشی", title:"نوشیدنی ورزشی", icon:"bottle",
    items:[
      {n:"آب معدنی", p:"۳۰,۰۰۰ تومان", d:""},
      {n:"ویست", p:"۳۰۰,۰۰۰ تومان", d:""},
      {n:"زی شارژ", p:"۳۰۰,۰۰۰ تومان", d:""}
    ]
  },
  {
    id:"icecream", nav:"بستنی", title:"بستنی", icon:"iceCream",
    items:[
      {n:"بستنی وانیلی", p:"۱۲۰,۰۰۰ تومان", d:""},
      {n:"بستنی نسکافه", p:"۱۲۰,۰۰۰ تومان", d:""},
      {n:"بستنی دارک", p:"۱۲۰,۰۰۰ تومان", d:""},
      {n:"بستنی شکلات تیکه", p:"۱۲۰,۰۰۰ تومان", d:""},
      {n:"بستنی شاتوت", p:"۱۲۰,۰۰۰ تومان", d:""},
      {n:"بستنی کارامل", p:"۱۲۰,۰۰۰ تومان", d:""}
    ]
  },
  {
    id:"shakes", nav:"شیک‌ها", title:"شیک‌ها", icon:"shake",
    items:[
      {n:"شیک نوتلا", p:"۶۲۰,۰۰۰ تومان", d:""},
      {n:"شیک وانیل", p:"۴۸۰,۰۰۰ تومان", d:""},
      {n:"شیک کره بادام زمینی", p:"۵۵۰,۰۰۰ تومان", d:""},
      {n:"شیک توت فرنگی", p:"۵۵۰,۰۰۰ تومان", d:""},
      {n:"شیک نسکافه", p:"۵۷۰,۰۰۰ تومان", d:""}
    ]
  },
  {
    id:"soda", nav:"نوشیدنی گازدار", title:"نوشیدنی گازدار", icon:"soda",
    items:[
      {n:"کوکا زیرو", p:"۹۵,۰۰۰ تومان", d:""},
      {n:"کوکاکولا", p:"۹۵,۰۰۰ تومان", d:""}
    ]
  }
];

/* ---------- Rendering ---------- */
function el(html){
  const t = document.createElement("template");
  t.innerHTML = html.trim();
  return t.content.firstElementChild;
}

const PRODUCT_IMG = "logo.png";

function renderCard(it){
  const desc    = it.d ? `<p class="card-desc">${it.d}</p>` : "";
  const extras  = it.extras
    ? `<p class="card-extras">${it.extras.map(x=>`<span>${x}</span>`).join("")}</p>`
    : "";
  return `
    <article class="card">
      <div class="card-img"><img src="${PRODUCT_IMG}" alt="${it.n}" loading="lazy" /></div>
      <h3 class="card-name">${it.n}</h3>
      <div class="card-price">${it.p}</div>
      ${desc}
      ${extras}
    </article>`;
}

function renderSection(sec){
  let cards = "";
  if(!sec.items.length){
    cards = `<p class="empty-note">به‌زودی…</p>`;
  } else {
    cards = sec.items.map(it =>
      it.sub ? `<div class="sub-label"><span>${it.sub}</span></div>` : renderCard(it)
    ).join("");
  }
  const subtitle = sec.subtitle ? `<p class="section-subtitle">${sec.subtitle}</p>` : "";
  return `
    <section class="section" id="sec-${sec.id}">
      <div class="section-divider"><h2 class="section-title">${sec.title}</h2></div>
      ${subtitle}
      <div class="cards">${cards}</div>
    </section>`;
}

function renderNav(){
  return SECTIONS.map(sec => `
    <button class="cat-item" data-target="sec-${sec.id}" type="button">
      ${icon(sec.icon)}
      <span class="cat-label">${sec.nav}</span>
    </button>`).join("");
}

/* ---------- Init ---------- */
document.addEventListener("DOMContentLoaded", () => {
  // menu + nav
  document.getElementById("menu").innerHTML = SECTIONS.map(renderSection).join("");
  const track = document.getElementById("cat-nav-track");
  track.innerHTML = renderNav();

  const nav      = document.getElementById("cat-nav");
  const chips    = Array.from(track.querySelectorAll(".cat-item"));
  const sections = SECTIONS.map(s => document.getElementById(`sec-${s.id}`));

  // click -> smooth scroll (offset for sticky nav)
  chips.forEach(chip => {
    chip.addEventListener("click", () => {
      const target = document.getElementById(chip.dataset.target);
      if(!target) return;
      const y = target.getBoundingClientRect().top + window.scrollY - nav.offsetHeight - 8;
      window.scrollTo({ top:y, behavior:"smooth" });
    });
  });

  // scroll-spy: highlight active chip + keep it in view
  function setActive(idx){
    chips.forEach((c,i) => c.classList.toggle("active", i === idx));
    const chip = chips[idx];
    if(chip){
      const cr = chip.getBoundingClientRect();
      const tr = track.getBoundingClientRect();
      if(cr.left < tr.left || cr.right > tr.right){
        chip.scrollIntoView({ behavior:"smooth", inline:"center", block:"nearest" });
      }
    }
  }

  let ticking = false;
  function onScroll(){
    if(ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const line = nav.offsetHeight + 40;
      let idx = 0;
      sections.forEach((s,i) => {
        if(s.getBoundingClientRect().top <= line) idx = i;
      });
      setActive(idx);

      const toTop = document.getElementById("to-top");
      toTop.classList.toggle("show", window.scrollY > 500);
      ticking = false;
    });
  }
  window.addEventListener("scroll", onScroll, { passive:true });
  onScroll();

  // back to top
  document.getElementById("to-top").addEventListener("click", () => {
    window.scrollTo({ top:0, behavior:"smooth" });
  });
});
