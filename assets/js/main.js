/* ==========================================================================
   LES RUBIS NOIRS — scripts communs de la maquette
   - en-tête / pied de page partagés (en production : gabarits du CMS)
   - menu mobile, sélecteur de langue, pop-up newsletter, formulaires, animations
   ========================================================================== */

(function () {
  const RN = (window.RN = window.RN || {});
  const page = document.body.dataset.page || "";

  /* ---------- Stockage sûr (navigation privée, etc.) ---------- */
  const store = {
    get(k, s = localStorage) { try { return s.getItem(k); } catch (e) { return null; } },
    set(k, v, s = localStorage) { try { s.setItem(k, v); } catch (e) {} }
  };
  RN.store = store;

  /* ---------- Icônes ---------- */
  const I = {
    gem: '<svg class="brand-mark" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round" aria-hidden="true"><path d="M8 4h16l6 8-14 17L2 12z"/><path d="M2 12h28M12 4l-2 8 6 17 6-17-2-8"/></svg>',
    spotify: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M7 9.4c3.6-1 7.6-.6 10.6 1.1M7.6 12.5c2.9-.8 6.1-.4 8.6 1M8.3 15.5c2.3-.6 4.6-.3 6.6.8" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>',
    youtube: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2" y="5" width="20" height="14" rx="4" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M10 9l5 3-5 3z"/></svg>',
    deezer: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2 17h3.4v3H2zM6.6 14h3.4v6H6.6zM11.2 11h3.4v9h-3.4zM15.8 8h3.4v12h-3.4zM20.4 13H22v7h-1.6z"/></svg>',
    apple: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="10" r="2.6"/><path d="M10.6 14h2.8l-.6 7h-1.6z"/><path d="M6.3 15.5a8 8 0 1111.4 0M8.6 13.4a4.8 4.8 0 116.8 0" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>',
    instagram: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="17.3" cy="6.7" r="1.1"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9h3.5v11H4zM5.75 3.5a2 2 0 110 4 2 2 0 010-4zM10 9h3.3v1.6c.5-.9 1.7-1.9 3.6-1.9 3.6 0 4.1 2.3 4.1 5.3V20h-3.5v-5.3c0-1.3 0-2.9-1.8-2.9s-2.1 1.4-2.1 2.8V20H10z"/></svg>',
    tiktok: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 3h3c.2 1.9 1.6 3.4 3.5 3.6v3.1c-1.3 0-2.5-.4-3.5-1v6.6A5.7 5.7 0 1111.3 9.6v3.2a2.6 2.6 0 102.7 2.6z"/></svg>',
    x: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 4l16 16M20 4L4 20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',
    mail: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="1" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M3.5 6l8.5 7 8.5-7" fill="none" stroke="currentColor" stroke-width="1.6"/></svg>',
    link: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M10 14a4 4 0 005.7 0l3-3a4 4 0 00-5.7-5.7l-1 1M14 10a4 4 0 00-5.7 0l-3 3a4 4 0 005.7 5.7l1-1" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>',
    lock: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 10V7a5 5 0 0110 0v3h1.5v11h-13V10zm2 0h6V7a3 3 0 00-6 0z"/></svg>',
    play: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 4l13 8-13 8z"/></svg>',
    pause: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 4h4v16H6zM14 4h4v16h-4z"/></svg>',
    search: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M15.5 15.5L21 21" stroke="currentColor" stroke-width="1.6"/></svg>',
    download: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v12m0 0l-5-5m5 5l5-5M4 20h16" fill="none" stroke="currentColor" stroke-width="1.6"/></svg>'
  };
  RN.icons = I;

  RN.platformsHTML = function (label) {
    const t = label ? ` — ${label}` : "";
    return `<div class="platforms">
      <a class="platform" href="#" aria-label="Écouter sur Spotify${t}">${I.spotify}</a>
      <a class="platform" href="#" aria-label="Regarder sur YouTube${t}">${I.youtube}</a>
      <a class="platform" href="#" aria-label="Écouter sur Deezer${t}">${I.deezer}</a>
    </div>`;
  };

  /* ---------- Navigation ---------- */
  const NAV = [
    { href: "rubis.html", key: "rubis", fr: "Les Rubis", en: "The Rubies" },
    { href: "episodes.html", key: "episodes", fr: "Épisodes", en: "Episodes" },
    { href: "journal.html", key: "journal", fr: "Le Journal", en: "The Journal" },
    { href: "podcast.html", key: "podcast", fr: "Le podcast", en: "The podcast" },
    { href: "estelle.html", key: "estelle", fr: "Estelle", en: "Estelle" },
    { href: "participer.html", key: "participer", fr: "Participer", en: "Get involved" },
    { href: "presse.html", key: "presse", fr: "Presse", en: "Press", extra: true },
    { href: "contact.html", key: "contact", fr: "Contact", en: "Contact", extra: true }
  ];
  const T = {
    don: { fr: "Faire un don", en: "Donate" },
    menu: { fr: "Menu", en: "Menu" }
  };
  let lang = store.get("rn_lang") === "en" ? "en" : "fr";

  function langSwitch(extraClass) {
    return `<div class="lang ${extraClass || ""}" role="group" aria-label="Langue / Language">
      <button type="button" data-lang="fr" aria-pressed="${lang === "fr"}">FR</button>
      <button type="button" data-lang="en" aria-pressed="${lang === "en"}">EN</button>
    </div>`;
  }

  function renderHeader() {
    const host = document.getElementById("site-header");
    if (!host) return;
    const links = NAV.map((n) =>
      `<a class="nav-link${n.extra ? " nav-extra" : ""}" href="${n.href}" data-i18n-nav="${n.key}"${page === n.key ? ' aria-current="page"' : ""}>${n[lang]}</a>`
    ).join("");
    host.outerHTML = `
    <header class="site-header" id="top">
      <div class="wrap">
        <a class="brand" href="index.html" aria-label="Les Rubis Noirs — accueil">${I.gem}<span class="brand-name">Les Rubis <em>Noirs</em></span></a>
        <nav class="main-nav" id="main-nav" aria-label="Navigation principale">
          ${links}
          <a class="btn btn-ruby nav-don" href="soutenir.html" data-i18n="don">${T.don[lang]}</a>
          ${langSwitch("lang-mobile")}
        </nav>
        <div class="header-tools">
          ${langSwitch()}
          <a class="btn btn-ruby btn-sm btn-don" href="soutenir.html" data-i18n="don">${T.don[lang]}</a>
          <button class="menu-toggle" type="button" aria-controls="main-nav" aria-expanded="false" aria-label="Ouvrir le menu"><span></span><span></span><span></span></button>
        </div>
      </div>
    </header>`;
  }

  function renderFooter() {
    const host = document.getElementById("site-footer");
    if (!host) return;
    host.outerHTML = `
    <footer class="site-footer">
      <div class="wrap">
        <div class="footer-top">
          <div class="footer-brand">
            <a class="brand" href="index.html">${I.gem}<span class="brand-name">Les Rubis <em>Noirs</em></span></a>
            <p>Le podcast et média éditorial qui raconte une autre histoire : celle des parcours, des ambitions et des réussites de personnes noires.</p>
            <div class="socials">
              <a href="#" aria-label="Instagram">${I.instagram}</a>
              <a href="#" aria-label="LinkedIn">${I.linkedin}</a>
              <a href="#" aria-label="TikTok">${I.tiktok}</a>
              <a href="#" aria-label="YouTube">${I.youtube}</a>
            </div>
          </div>
          <div>
            <h4>Explorer</h4>
            <ul>
              <li><a href="rubis.html">Les Rubis</a></li>
              <li><a href="episodes.html">Épisodes</a></li>
              <li><a href="journal.html">Le Journal</a></li>
              <li><a href="podcast.html">À propos du podcast</a></li>
              <li><a href="estelle.html">Estelle KEITA</a></li>
            </ul>
          </div>
          <div>
            <h4>Rejoindre</h4>
            <ul>
              <li><a href="participer.html">Proposer un invité</a></li>
              <li><a href="soutenir.html">Soutenir le média</a></li>
              <li><a href="presse.html">Presse & partenariats</a></li>
              <li><a href="contact.html">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4>Écouter</h4>
            <ul>
              <li><a href="#">Spotify</a></li>
              <li><a href="#">YouTube</a></li>
              <li><a href="#">Deezer</a></li>
              <li><a href="#">Apple Podcasts</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-wordmark" aria-hidden="true">Les Rubis <em>Noirs</em></div>
        <div class="footer-bottom">
          <span>© 2026 Les Rubis Noirs — Estelle KEITA</span>
          <nav aria-label="Informations légales">
            <a href="#">Mentions légales</a>
            <a href="#">Confidentialité</a>
            <a href="#">Cookies</a>
            <a href="#">Conçu par EHYUA LABS</a>
          </nav>
        </div>
      </div>
    </footer>`;
  }

  /* ---------- Toast ---------- */
  let toastEl, toastTimer;
  RN.toast = function (msg) {
    if (!toastEl) {
      toastEl = document.createElement("div");
      toastEl.className = "toast";
      toastEl.setAttribute("role", "status");
      document.body.appendChild(toastEl);
    }
    toastEl.textContent = msg;
    toastEl.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toastEl.classList.remove("show"), 3600);
  };

  /* ---------- Langue ---------- */
  function applyLang(next, announce) {
    lang = next;
    store.set("rn_lang", lang);
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n-nav]").forEach((a) => {
      const n = NAV.find((x) => x.key === a.dataset.i18nNav);
      if (n) a.textContent = n[lang];
    });
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const t = T[el.dataset.i18n];
      if (t) el.textContent = t[lang];
    });
    document.querySelectorAll("[data-lang]").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));
    if (announce && lang === "en") {
      RN.toast("Preview — the full English version (/en/) is planned in the site architecture.");
    }
  }

  /* ---------- Init ---------- */
  renderHeader();
  renderFooter();
  // <span data-icon="spotify"></span> → SVG
  document.querySelectorAll("[data-icon]").forEach((el) => { if (I[el.dataset.icon]) el.outerHTML = I[el.dataset.icon]; });

  const grain = document.createElement("div");
  grain.className = "grain";
  grain.setAttribute("aria-hidden", "true");
  document.body.appendChild(grain);

  const flag = document.createElement("div");
  flag.className = "maquette-flag";
  flag.textContent = "Maquette V1 · contenus fictifs";
  document.body.appendChild(flag);

  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".menu-toggle");
  if (toggle) {
    toggle.addEventListener("click", () => {
      const open = document.body.classList.toggle("menu-open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Fermer le menu" : "Ouvrir le menu");
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && document.body.classList.contains("menu-open")) toggle.click();
    });
  }
  if (header) {
    const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }
  document.addEventListener("click", (e) => {
    const b = e.target.closest("[data-lang]");
    if (b) applyLang(b.dataset.lang, true);
  });
  applyLang(lang, false);

  /* ---------- Révélation au scroll ---------- */
  RN.observeReveal = function (root) {
    const els = (root || document).querySelectorAll(".reveal:not(.in)");
    if (!("IntersectionObserver" in window)) { els.forEach((el) => el.classList.add("in")); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    els.forEach((el) => io.observe(el));
  };

  /* ---------- Validation des formulaires ---------- */
  const emailOk = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim());

  function validateField(field) {
    const input = field.querySelector("input, select, textarea");
    if (!input) return true;
    let ok = true;
    if (input.type === "checkbox") ok = !input.required || input.checked;
    else if (input.required && !input.value.trim()) ok = false;
    else if (input.type === "email" && input.value && !emailOk(input.value)) ok = false;
    else if (input.type === "url" && input.value && !/^https?:\/\/.+\..+/.test(input.value.trim())) ok = false;
    field.classList.toggle("invalid", !ok);
    input.setAttribute("aria-invalid", String(!ok));
    return ok;
  }

  document.querySelectorAll("form[data-validate]").forEach((form) => {
    form.noValidate = true;
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const hp = form.querySelector(".hp input");
      if (hp && hp.value) return; // anti-spam : champ piège rempli
      const fields = [...form.querySelectorAll(".field")];
      const results = fields.map(validateField);
      const firstBad = fields[results.indexOf(false)];
      if (firstBad) { firstBad.querySelector("input, select, textarea").focus(); return; }
      const done = document.getElementById(form.dataset.done);
      form.hidden = true;
      if (done) { done.classList.add("show"); done.setAttribute("tabindex", "-1"); done.focus(); }
    });
    form.addEventListener("input", (e) => {
      const f = e.target.closest(".field.invalid");
      if (f) validateField(f);
    });
  });

  /* ---------- Newsletter (tous les formulaires) ---------- */
  RN.bindNewsletter = function (root) {
    (root || document).querySelectorAll("form[data-newsletter]").forEach((form) => {
      if (form.dataset.bound) return;
      form.dataset.bound = "1";
      form.noValidate = true;
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = form.querySelector('input[type="email"]');
        const consent = form.querySelector('input[type="checkbox"]');
        if (!emailOk(email.value)) { email.focus(); RN.toast("Merci d'indiquer une adresse email valide."); return; }
        if (consent && !consent.checked) { consent.focus(); RN.toast("Merci de cocher la case de consentement."); return; }
        const ok = form.parentElement.querySelector(".form-success");
        form.hidden = true;
        if (ok) ok.classList.add("show");
        store.set("rn_nl_done", "1");
      });
    });
  };
  RN.bindNewsletter();

  /* ---------- Modales ---------- */
  let lastFocus = null;
  RN.openModal = function (id) {
    const m = document.getElementById(id);
    if (!m) return;
    lastFocus = document.activeElement;
    m.classList.add("open");
    m.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    const f = m.querySelector("input, button:not(.modal-close), a");
    setTimeout(() => (f || m.querySelector(".modal-close")).focus(), 60);
  };
  RN.closeModal = function (m) {
    m.classList.remove("open");
    m.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    if (lastFocus) lastFocus.focus();
  };
  document.addEventListener("click", (e) => {
    const c = e.target.closest("[data-close-modal]");
    if (c) RN.closeModal(c.closest(".modal"));
  });
  document.addEventListener("keydown", (e) => {
    if (e.key !== "Escape") return;
    const m = document.querySelector(".modal.open");
    if (m) RN.closeModal(m);
  });

  /* ---------- Pop-up newsletter (accueil) ---------- */
  if (page === "home" && document.getElementById("nl-modal")) {
    const seen = store.get("rn_nl_popup", sessionStorage) || store.get("rn_nl_done");
    if (!seen || location.hash === "#newsletter-popup") {
      setTimeout(() => {
        RN.openModal("nl-modal");
        store.set("rn_nl_popup", "1", sessionStorage);
      }, 1400);
    }
  }

  /* ---------- Partage ---------- */
  RN.shareHTML = function () {
    return `<div class="share" aria-label="Partager">
      <a href="#" aria-label="Partager sur LinkedIn">${I.linkedin}</a>
      <a href="#" aria-label="Partager sur X">${I.x}</a>
      <a href="#" aria-label="Partager par email">${I.mail}</a>
      <button type="button" data-copy-link aria-label="Copier le lien">${I.link}</button>
    </div>`;
  };
  document.addEventListener("click", (e) => {
    if (!e.target.closest("[data-copy-link]")) return;
    const done = () => RN.toast("Lien copié dans le presse-papiers.");
    try { navigator.clipboard.writeText(location.href).then(done, done); } catch (err) { done(); }
  });
  document.addEventListener("click", (e) => {
    const a = e.target.closest('a[href="#"]');
    if (a) { e.preventDefault(); RN.toast("Lien de démonstration — sera relié à la plateforme réelle."); }
  });

  /* ---------- Gabarits de cartes ---------- */
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  RN.esc = esc;

  RN.episodeRow = function (g) {
    const ep = g.episode;
    return `<article class="ep-row reveal">
      <span class="num">${String(ep.n).padStart(2, "0")}</span>
      <a href="invite.html?id=${g.id}" tabindex="-1" aria-hidden="true"><div class="ph ${g.tone}"></div></a>
      <div>
        <div class="label muted">${RN.formatDate(ep.date, lang)} · ${ep.duration} · ${esc(g.sector)}</div>
        <h3><a href="invite.html?id=${g.id}">${esc(ep.title)}</a></h3>
        <div class="guest">${esc(g.name)} <span class="muted">— ${esc(g.role)}</span></div>
        <p>${esc(ep.summary)}</p>
        <div class="tags">${g.themes.map((t) => `<span class="tag">${esc(t)}</span>`).join("")}</div>
      </div>
      <div class="ep-side on-light">
        ${RN.platformsHTML(ep.title)}
        <a class="link-arrow" href="invite.html?id=${g.id}">Voir l'épisode <span aria-hidden="true">→</span></a>
      </div>
    </article>`;
  };

  RN.articleCard = function (a) {
    return `<a class="card reveal" href="article.html?id=${a.id}">
      <div class="thumb"><div class="ph no-figure ${a.tone}" data-label="Visuel article"></div></div>
      <div class="meta label"><span class="cat">${esc(a.category)}</span><span>${a.read}</span></div>
      <h3>${esc(a.title)}</h3>
      <p>${esc(a.excerpt)}</p>
    </a>`;
  };

  RN.mosaicTile = function (g) {
    return `<a class="mosaic-tile reveal" href="invite.html?id=${g.id}">
      <div class="ph ${g.tone}"></div>
      <div class="tile-info"><div class="role">${esc(g.role)}</div><div class="name">${esc(g.name)} · ${esc(g.city.split(",")[0])}</div></div>
    </a>`;
  };

  RN.lang = () => lang;

  document.addEventListener("DOMContentLoaded", () => RN.observeReveal());
  if (document.readyState !== "loading") RN.observeReveal();
})();
