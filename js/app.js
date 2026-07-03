"use strict";

const offer = {
  siteName: "CoolingLab",
  productName: "Froza AC",
  category: "Refroidisseur d'air portable",
  affiliateUrl: "https://get-froza.com/v8/checkout?b=823&ln=fr&region=fr&_ef_transaction_id=&uid=8254&oid=751&affid=758&source_id={affiliate_id}&sub1={affiliate_id}&sub2={sub1}&sub3={transaction_id}",
  reviewScore: 4.6,
  priceCurrency: "USD",
  hero: {
    src: "/img/Froza%20AC002.jpg",
    alt: "Froza AC, vue avant sur fond clair",
    caption: "Meilleure vue frontale"
  },
  images: [
    { src: "/img/foto%20parede%20Froza%20AC001.jpg", alt: "Froza AC vu de face sur un bureau", caption: "Vue générale" },
    { src: "/img/Froza%20AC003.png", alt: "Froza AC, détail produit", caption: "Détail produit" },
    { src: "/img/Froza%20AC%20vertical004.png", alt: "Froza AC, vue verticale", caption: "Vue verticale" },
    { src: "/img/img005.jpg", alt: "Froza AC en usage", caption: "Usage" },
    { src: "/img/img006.jpg", alt: "Froza AC, vue supplémentaire", caption: "Vue supplémentaire" },
    { src: "/img/img4%20(1).jpg", alt: "Froza AC sur une surface propre", caption: "Vue produit" },
    { src: "/img/img4.webp", alt: "Froza AC, variante produit", caption: "Variante photo" },
    { src: "/img/froza-ac-1mlXaOLCxGfNmG20.avif", alt: "Froza AC, détail technique", caption: "Vue détaillée" }
  ]
};

const features = [
  ["USB", "L'alimentation USB rend son usage simple autour d'un bureau ou en déplacement.", '<svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M12 2v5M17 5H7"/></svg>'],
  ["Portable", "Assez petit pour une table de chevet, un bureau, une étagère de dortoir ou un comptoir de camping-car.", '<svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/></svg>'],
  ["Silencieux", "Conçu pour un flux d'air de proximité sans le bruit agressif des plus grands ventilateurs.", '<svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5L6 9H2v6h4l5 4V5z"/></svg>'],
  ["Économe en énergie", "Consommation plus faible que celle d'un climatiseur à compresseur.", '<svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>'],
  ["Nettoyage facile", "Les surfaces accessibles simplifient l'entretien régulier.", '<svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M17 5H7M17 19H7"/></svg>'],
  ["Compact", "Empreinte propre qui s'adapte aux espaces où un appareil plus volumineux est encombrant.", '<svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 8V4h4M20 8V4h-4M4 16v4h4M20 16v4h-4"/></svg>']
];

const scores = [
  ["Refroidissement", 88],
  ["Bruit", 91],
  ["Portabilité", 95],
  ["Consommation", 93],
  ["Facilité d'utilisation", 90],
  ["Entretien", 84]
];

const pros = [
  "Idéal pour le refroidissement personnel de proximité",
  "Assez silencieux pour un bureau ou une chambre",
  "Empreinte compacte avec installation simple",
  "Plus flexible qu'une climatisation de fenêtre pour le placement",
  "Pertinent pour les acheteurs d'espaces réduits"
];

const cons = [
  "Pas conçu pour rafraîchir une grande pièce entière",
  "La performance dépend de l'humidité et de la distance",
  "L'entretien à base d'eau peut ne pas convenir à tout le monde",
  "Les disponibilités et les remises peuvent varier"
];

const useCases = [
  ["Bureau à domicile", "Maintient un flux d'air discret et proche directement à votre bureau sans gaspillage de fraîcheur."],
  ["Chambre", "Parfait sur une table de chevet pour un refroidissement doux et silencieux pendant le repos."],
  ["Appartement", "Ajoute du confort personnel aux petits espaces de vie sans installation de fenêtre complexe."],
  ["Camping-car", "S'intègre aux plans de travail compacts et fonctionne facilement sur des batteries limitées."],
  ["Camping", "Design très portable qui peut fonctionner directement sur une batterie externe standard."],
  ["Dortoir", "Convient aux espaces d'étude restreints et respecte les règles d'usage énergétique."],
  ["Bureau", "Offre un contrôle individuel de la température sans déranger les collègues."]
];

const comparison = [
  ["Usage idéal", "Zone de refroidissement personnelle", "Circulation d'air", "Légère aide au refroidissement", "Refroidissement complet"],
  ["Portabilité", "Très élevée", "Élevée", "Élevée", "Faible"],
  ["Profil sonore", "Faible", "Variable", "Faible à moyen", "Moyen à élevé"],
  ["Consommation d'énergie", "Faible", "Très faible", "Faible", "Élevée"],
  ["Installation", "Simple", "Simple", "Simple", "Installation souvent nécessaire"],
  ["Acheteur idéal", "Utilisateurs de bureau, dortoir, camping-car, chambre", "Utilisateurs qui ont seulement besoin d'un flux d'air", "Acheteurs cherchant une solution économique", "Climats chauds et besoins de pièce entière"]
];

const icon = '<svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 3v18M5 8h14M7 16h10" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>';

function renderList(selector, values) {
  const node = document.querySelector(selector);
  if (!node) return;
  node.innerHTML = values.map((value) => `<li>${value}</li>`).join("");
}

function initContent() {
  document.querySelectorAll("[data-affiliate-link]").forEach((link) => {
    link.href = offer.affiliateUrl;
    link.rel = "sponsored noopener";
  });

  const featureGrid = document.querySelector("#feature-grid");
  if (featureGrid) {
    featureGrid.innerHTML = features.map(([title, text, customIcon]) => `
      <article class="card reveal">
        <div class="card-icon">${customIcon || icon}</div>
        <h3>${title}</h3>
        <p>${text}</p>
      </article>
    `).join("");
  }

  const scorePanel = document.querySelector("#score-panel");
  if (scorePanel) {
    scorePanel.innerHTML = scores.map(([label, value]) => `
      <div class="score-row" data-score="${value}">
        <strong>${label}</strong>
        <div class="bar" aria-hidden="true"><span></span></div>
        <em>${value}</em>
      </div>
    `).join("");
  }

  renderList("#pros-list", pros);
  renderList("#cons-list", cons);

  const useGrid = document.querySelector("#use-grid");
  if (useGrid) {
    useGrid.innerHTML = useCases.map(([name, desc]) => `
      <article class="card reveal"><h3>${name}</h3><p>${desc}</p></article>
    `).join("");
  }

  const comparisonBody = document.querySelector("#comparison-body");
  if (comparisonBody) {
    comparisonBody.innerHTML = comparison.map((row) => `
      <tr>${row.map((cell) => `<td>${cell}</td>`).join("")}</tr>
    `).join("");
  }

  const galleryTrack = document.querySelector("#gallery-track");
  if (galleryTrack) {
    galleryTrack.innerHTML = offer.images.map((image, index) => `
      <figure class="gallery-card" role="group" aria-roledescription="diapositive" aria-label="Diapositive ${index + 1} sur ${offer.images.length}">
        <img src="${image.src}" alt="${image.alt}" loading="lazy">
        <figcaption>${image.caption || `Image ${index + 1}`}</figcaption>
      </figure>
    `).join("");
  }
}

function initNav() {
  const button = document.querySelector(".nav-toggle");
  const menu = document.querySelector("#nav-menu");
  if (!button || !menu) return;

  const closeMenu = () => {
    button.setAttribute("aria-expanded", "false");
    menu.classList.remove("is-open");
  };

  button.addEventListener("click", () => {
    const open = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!open));
    menu.classList.toggle("is-open", !open);
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && button.getAttribute("aria-expanded") === "true") {
      closeMenu();
    }
  });
}

function initCarousel() {
  const track = document.querySelector("#gallery-track");
  if (!track) return;

  document.querySelector("[data-carousel-prev]")?.addEventListener("click", () => track.scrollBy({ left: -320, behavior: "smooth" }));
  document.querySelector("[data-carousel-next]")?.addEventListener("click", () => track.scrollBy({ left: 320, behavior: "smooth" }));

  const carouselContainer = track.closest(".carousel");
  if (carouselContainer) {
    carouselContainer.setAttribute("role", "region");
    carouselContainer.setAttribute("tabindex", "0");
    carouselContainer.setAttribute("aria-label", "Carrousel de la galerie produit. Utilisez les flèches gauche et droite pour défiler.");
    carouselContainer.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        track.scrollBy({ left: -320, behavior: "smooth" });
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        track.scrollBy({ left: 320, behavior: "smooth" });
      }
    });

    // Implement a subtle swipe indicator (dots) below the carousel without changing CSS/HTML files
    const dotsContainer = document.createElement("div");
    dotsContainer.className = "carousel-dots";
    dotsContainer.style.display = "flex";
    dotsContainer.style.justifyContent = "center";
    dotsContainer.style.gap = "8px";
    dotsContainer.style.marginTop = "14px";

    const slideCount = offer.images.length;
    const dots = [];
    for (let i = 0; i < slideCount; i++) {
      const dot = document.createElement("span");
      dot.className = "carousel-dot";
      dot.style.width = "6px";
      dot.style.height = "6px";
      dot.style.borderRadius = "50%";
      dot.style.backgroundColor = i === 0 ? "var(--blue)" : "var(--line)";
      dot.style.transition = "background-color 220ms ease";
      dotsContainer.appendChild(dot);
      dots.push(dot);
    }

    carouselContainer.after(dotsContainer);

    // Sync dot selection on scroll using scroll percentage calculation
    track.addEventListener("scroll", () => {
      const scrollWidth = track.scrollWidth - track.clientWidth;
      if (scrollWidth <= 0) return;
      const scrollLeft = track.scrollLeft;
      const percentage = scrollLeft / scrollWidth;
      const activeIndex = Math.min(
        Math.round(percentage * (slideCount - 1)),
        slideCount - 1
      );
      dots.forEach((dot, idx) => {
        dot.style.backgroundColor = idx === activeIndex ? "var(--blue)" : "var(--line)";
      });
    }, { passive: true });
  }
}

function initVideo() {
  document.querySelectorAll("[data-video]").forEach((shell) => {
    shell.addEventListener("click", () => {
      if (shell.querySelector("iframe")) return;
      const iframe = document.createElement("iframe");
      iframe.src = shell.dataset.video;
      iframe.title = "Revue vidéo Froza AC";
      iframe.loading = "lazy";
      iframe.allow = "accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
      iframe.allowFullscreen = true;
      shell.replaceChildren(iframe);
    }, { once: true });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initContent();
  initFaq();
  initSchemas(offer);
  initNav();
  initCarousel();
  initVideo();
  initAnimations();
  initTracking();
});
