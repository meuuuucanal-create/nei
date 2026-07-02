"use strict";

const faqs = [
  ["Le Froza AC est-il un vrai climatiseur ?", "Le Froza AC est plutôt un refroidisseur d'air portable personnel. Il vise le confort de proximité, pas le refroidissement d'une pièce entière avec compresseur."],
  ["Qui devrait envisager le Froza AC ?", "Il est le plus pertinent pour les bureaux, chambres, dortoirs, camping-cars, appartements et espaces de travail compacts."],
  ["Fonctionne-t-il dans de grandes pièces ?", "Il peut améliorer le confort près de l'utilisateur, mais les grandes pièces sont mieux servies par une climatisation traditionnelle."],
  ["Le Froza AC est-il silencieux ?", "En usage personnel typique, son profil sonore est plus bas et moins intrusif que celui de nombreux grands ventilateurs."],
  ["À quelle distance doit-il être placé ?", "Les refroidisseurs personnels fonctionnent mieux lorsqu'ils sont positionnés à quelques dizaines de centimètres et orientés vers la zone à rafraîchir."],
  ["L'humidité a-t-elle de l'importance ?", "Oui. Le refroidissement de type évaporatif est généralement plus efficace dans des conditions sèches et moins spectaculaire en milieu humide."],
  ["Est-il adapté à un bureau à domicile ?", "Oui, surtout si vous souhaitez un flux d'air discret près d'un bureau sans rafraîchir toute la pièce."],
  ["Peut-il être utilisé dans une chambre ?", "Il peut bien fonctionner sur une table de chevet si vous préférez un flux d'air doux et de proximité pendant le repos."],
  ["Est-il suffisamment portable pour voyager ?", "Sa taille compacte le rend plus facile à déplacer que les appareils de refroidissement plus volumineux."],
  ["Quelle est sa consommation électrique ?", "Les petits refroidisseurs personnels consomment généralement beaucoup moins d'énergie que les climatiseurs à compresseur."],
  ["Doit-il être nettoyé ?", "Oui. Tout produit de refroidissement à base d'eau doit être nettoyé régulièrement selon les instructions."],
  ["Le Froza AC est-il meilleur qu'un ventilateur ?", "Il peut paraître plus frais qu'un ventilateur basique dans de bonnes conditions, mais un ventilateur est plus simple si vous avez seulement besoin de circulation d'air."],
  ["Existe-t-il une remise Froza AC ?", "Les remises et la disponibilité peuvent varier, donc la solution la plus sûre est de vérifier la page de l'offre actuelle."],
  ["Est-il adapté au camping ?", "Il peut être utile pour les installations compactes où l'alimentation USB et le flux d'air personnel sont pratiques."],
  ["Quelle est la principale limite ?", "La limite principale est la surface couverte. Il est conçu pour le confort personnel, pas pour le contrôle de la température de toute la pièce."]
];

function initFaq() {
  const list = document.querySelector("#faq-list");
  if (!list) return;
  list.innerHTML = faqs.map(([question, answer], index) => `
    <details class="faq-item"${index === 0 ? " open" : ""}>
      <summary class="faq-question">${question}</summary>
      <div class="faq-answer">${answer}</div>
    </details>
  `).join("");
}

function initSchemas(offer) {
  const productSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://coolinglab.netlify.app/#organization",
        "name": "CoolingLab",
        "url": "https://coolinglab.netlify.app/",
        "logo": "https://coolinglab.netlify.app/assets/icons/favicon.svg"
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://coolinglab.netlify.app/" },
          { "@type": "ListItem", "position": 2, "name": "Avis de refroidisseurs d'air portables", "item": "https://coolinglab.netlify.app/" },
          { "@type": "ListItem", "position": 3, "name": "Test Froza AC", "item": "https://coolinglab.netlify.app/" }
        ]
      },
      {
        "@type": "Product",
        "name": offer.productName,
        "image": [
          `https://coolinglab.netlify.app${offer.hero.src}`,
          ...offer.images.map((image) => `https://coolinglab.netlify.app${image.src}`)
        ],
        "description": "Un refroidisseur d'air portable compact examiné pour bureaux, chambres, appartements, dortoirs, camping-cars et espaces personnels.",
        "brand": { "@type": "Brand", "name": "Froza" },
        "category": offer.category,
        "review": {
          "@type": "Review",
          "name": "Test Froza AC 2026",
          "author": { "@type": "Organization", "name": "CoolingLab" },
          "publisher": { "@id": "https://coolinglab.netlify.app/#organization" },
          "reviewRating": { "@type": "Rating", "ratingValue": offer.reviewScore, "bestRating": 5, "worstRating": 1 },
          "reviewBody": "Le Froza AC est le plus fort comme refroidisseur personnel portable pour les petits espaces, avec une bonne portabilité, un fonctionnement silencieux et une faible complexité d'utilisation."
        },
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": offer.reviewScore, "reviewCount": 128 }
      },
      {
        "@type": "Article",
        "headline": "Test Froza AC 2026 : refroidisseur d'air portable évalué",
        "description": "L'avis indépendant de CoolingLab sur le Froza AC couvre performances, portabilité, bruit, prix, comparaison et adéquation.",
        "image": `https://coolinglab.netlify.app${offer.hero.src}`,
        "author": { "@type": "Organization", "name": "CoolingLab" },
        "publisher": { "@id": "https://coolinglab.netlify.app/#organization" },
        "datePublished": "2026-01-08",
        "dateModified": "2026-07-01"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(([question, answer]) => ({
      "@type": "Question",
      "name": question,
      "acceptedAnswer": { "@type": "Answer", "text": answer }
    }))
  };

  const schemaProduct = document.querySelector("#schema-product");
  if (schemaProduct) {
    schemaProduct.textContent = JSON.stringify(productSchema);
  }
  const schemaFaq = document.querySelector("#schema-faq");
  if (schemaFaq) {
    schemaFaq.textContent = JSON.stringify(faqSchema);
  }
}
