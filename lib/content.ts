/**
 * SOURCE UNIQUE DU CONTENU DU PORTFOLIO
 * -------------------------------------
 * Tous les textes, chiffres et liens du site sont ici. Les pages ne font que les afficher.
 *
 * Marqueurs à remplacer (affichés en surbrillance orange sur le site pour être repérés) :
 *   [À CHIFFRER : ...]  → un chiffre à insérer
 *   [À PRÉCISER : ...]  → une information factuelle à confirmer / compléter
 * Recherche « À CHIFFRER » ou « À PRÉCISER » dans ce fichier pour tous les trouver.
 *
 * Syntaxe : **texte** = mise en gras.
 *
 * Règle : pas de pourcentages de gain ni de métriques de performance (non mesurables / à double tranchant).
 *
 * ⚠️ Cohérence CV ↔ portfolio : les chiffres ci-dessous doivent être strictement
 * identiques à ceux du CV (mêmes valeurs, mêmes arrondis, mêmes mentions « estimé »).
 */

import type { StaticImageData } from "next/image";
import societyCover from "@/public/assets/poster_societythumb.jpg";

export const PROFILE = {
  name: "Théophile Sauffisseau",
  title: "Consultant Data / Product Data Analyst",
  availability: "Disponible janvier 2027 · CDI · Paris",
  school: "Ingénieur Télécom SudParis · Institut Polytechnique de Paris",
  pitch:
    "Ingénieur Télécom SudParis (IP Paris) spécialisé dans la conception de solutions data de bout en bout. Je fais le pont entre l'architecture technique (pipelines, modélisation OLTP/OLAP, SQL) et la décision métier (cadrage produit, KPIs, BI).",
  email: "theophile.sauffisseau@telecom-sudparis.eu",
  linkedin: "https://www.linkedin.com/in/theophile-sauffisseau",
  github: "https://github.com/tsauffisseau",
  // 👉 CV : dépose le PDF final dans /public/assets/ puis mets à jour ce chemin
  //    (idéalement un nom sans accent, ex. "/assets/CV_Theophile_Sauffisseau.pdf").
  //    Pense aussi à régénérer la miniature /public/assets/resumethumb.jpg.
  cvPath: "/assets/Resume_ThéophileSauffisseau_2026.pdf",
  cvDownloadName: "CV_Theophile_Sauffisseau.pdf",
  siteUrl: "https://portfolio-tsauffisseau.vercel.app",
};

/** Bandeau de preuves affiché sous le hero : les signaux lisibles en 10 secondes. */
export const PROOF_POINTS: { value: string; label: string; href?: string }[] = [
  { value: "Ingénieur IP Paris", label: "Télécom SudParis", href: "/about" },
  { value: "+20 000", label: "prescripteurs couverts · HCP-360° (Air Liquide)", href: "/projects/hcp-360" },
  { value: "+200", label: "utilisateurs · Society, app en production", href: "/projects/society" },
  { value: "1er prix / 180", label: "projets · Colloque ESSI 2025", href: "/projects/cassiopee" },
];

/** Fil rouge : la chaîne de valeur de la donnée, vécue côté OLTP et côté OLAP. */
export const VALUE_CHAIN = {
  steps: ["Cadrage métier", "Modélisation", "Pipelines", "BI & KPIs", "Décision"],
  sides: [
    {
      tag: "OLTP",
      title: "Produire une donnée fiable",
      text: "Avec **Society**, j'ai conçu et mis en production une base relationnelle de **32 tables**, l'API, le moteur de recommandation et les pipelines de suivi d'usage d'une application utilisée par **+200 utilisateurs**.",
      slug: "society",
    },
    {
      tag: "OLAP",
      title: "La transformer en décision",
      text: "Chez **Air Liquide Healthcare**, j'ai cadré avec le métier, consolidé les données sur AWS, modélisé la couche analytique et livré un MVP Power BI de **~30 KPIs** pour **~100 commerciaux** terrain.",
      slug: "hcp-360",
    },
  ],
};

// ---------------------------------------------------------------------------
// PROJETS
// ---------------------------------------------------------------------------

export type Tone = "live" | "wip" | "award" | "neutral";

export type FlowLane = {
  label: string;
  status?: { label: string; tone: Tone };
  steps: { title: string; detail?: string }[];
};

export type ProjectLink = {
  label: string;
  href: string;
  kind: "site" | "github" | "pdf";
};

export type Project = {
  slug: string;
  /** Nom court utilisé dans les listes et la navigation. */
  shortTitle: string;
  kicker: string;
  title: string;
  org?: string;
  role?: string;
  tagline: string;
  logo?: "society";
  /** Icône affichée en filigrane derrière la carte du projet. */
  watermark?: "exp" | "prize" | "society";
  /** Visuel cliquable affiché dans l'étude de cas. */
  cover?: { src: StaticImageData; href: string; caption: string };
  status?: { label: string; tone: Tone };
  problem: string;
  solution: string;
  impact: string;
  stack: string[];
  kpis: { value: string; label: string }[];
  flow: FlowLane[];
  sections: { title: string; paragraphs?: string[]; bullets?: string[] }[];
  note?: string;
  links: ProjectLink[];
};

export const PROJECTS: Project[] = [
  // 1 ─ EXPÉRIENCE PHARE ────────────────────────────────────────────────────
  {
    slug: "hcp-360",
    shortTitle: "HCP-360°",
    kicker: "Expérience phare · Stage de fin d'études (6 mois) · 2026",
    title: "Solution décisionnelle « HCP-360° »",
    org: "Air Liquide Healthcare · Santé à Domicile France",
    role: "Data Analyst",
    tagline:
      "Un MVP décisionnel qui donne aux commerciaux terrain une vue 360° de plus de 20 000 prescripteurs pour prioriser leurs tournées.",
    watermark: "exp",
    status: { label: "MVP validé · en industrialisation", tone: "live" },
    problem:
      "Les commerciaux terrain préparaient leurs tournées en consolidant à la main des données dispersées entre Salesforce, l'activité commerciale et des référentiels géographiques : un travail long, sans vision claire des prescripteurs à prioriser.",
    solution:
      "MVP cadré avec les PO, les SO et le métier : consolidation de **3 sources** via un pipeline Python sur **AWS SageMaker**, modèle analytique et dashboards **Power BI** structurés autour de **~30 KPIs**.",
    impact:
      "Une vue 360° unifiée, en un clic, pour **~100 commerciaux** terrain sur **+20 000 prescripteurs**. MVP validé et repris en industrialisation par l'équipe Data.",
    stack: ["Python", "Pandas", "AWS SageMaker", "S3 / Athena", "SQL", "Salesforce", "Power BI", "DAX", "Agile"],
    kpis: [
      { value: "+20 000", label: "prescripteurs couverts" },
      { value: "~100", label: "commerciaux terrain & managers ciblés" },
      { value: "~30", label: "KPIs structurés sur 3 axes" },
      { value: "3", label: "sources consolidées (CRM, activité, géographie)" },
    ],
    flow: [
      {
        label: "Chaîne décisionnelle (OLAP)",
        steps: [
          { title: "Sources", detail: "CRM Salesforce · activité commerciale · référentiels géographiques" },
          { title: "Préparation", detail: "Python · AWS SageMaker" },
          { title: "Modélisation", detail: "Modèle analytique · faits / dimensions" },
          { title: "Restitution", detail: "Power BI · DAX · ~30 KPIs" },
          { title: "Décision", detail: "Priorisation des tournées" },
        ],
      },
    ],
    sections: [
      {
        title: "Contexte & enjeu métier",
        paragraphs: [
          "Dans l'activité Santé à Domicile France d'Air Liquide Healthcare, les commerciaux terrain entretiennent la relation avec les prescripteurs : médecins généralistes, spécialistes, praticiens hospitaliers et libéraux.",
          "Avant le projet, préparer une tournée signifiait consolider à la main des extractions Salesforce et Excel. L'objectif de HCP-360° : offrir une **vue unifiée de chaque prescripteur, en un clic**, pour objectiver la priorisation des visites.",
        ],
      },
      {
        title: "Ma démarche",
        bullets: [
          "**Cadrage** : interface entre les Product Owners, les Solution Owners et les utilisateurs métier pour traduire les besoins en KPIs et en user stories, dans un cadre agile.",
          "**Données** : consolidation de 3 sources (CRM Salesforce, données de prescription et d'activité commerciale, référentiels géographiques) via un pipeline de préparation Python sur AWS SageMaker.",
          "**Modélisation analytique** : structuration en faits et dimensions pour servir des analyses cohérentes et performantes.",
          "**KPIs** : ~30 indicateurs structurés autour de 3 axes : potentiel du prescripteur, dynamique d'activité commerciale, risque d'attrition.",
          "**Restitution** : dashboards Power BI (DAX) pensés pour l'usage terrain : lisibles, actionnables, orientés décision.",
        ],
      },
      {
        title: "Résultats",
        bullets: [
          "**Vue 360° unifiée** : la préparation des tournées passe d'une consolidation manuelle (Excel / Salesforce) à une vue consolidée, en un clic.",
          "Identification des **prescripteurs à plus fort potentiel** pour prioriser les visites.",
          "**MVP validé** par les Product Owners et Solution Owners, puis passage en industrialisation : déploiement repris par l'équipe Data interne et intégration au Data Warehouse de l'entreprise.",
        ],
      },
    ],
    note: "Les données et les visuels étant confidentiels, cette page présente la démarche et l'architecture, sans aucune donnée réelle.",
    links: [],
  },

  // 2 ─ SOCIETY ─────────────────────────────────────────────────────────────
  {
    slug: "society",
    shortTitle: "Society",
    kicker: "Produit data de bout en bout · Projet personnel",
    title: "Society",
    tagline:
      "Plateforme sociale et de recommandation IA pour les jeux de société : le « Netflix des jeux de société ».",
    logo: "society",
    watermark: "society",
    cover: {
      src: societyCover,
      href: "/assets/poster_society.pdf",
      caption: "Présentation produit & technique (PDF)",
    },
    status: { label: "En production", tone: "live" },
    problem:
      "Les outils des joueurs de jeux de société sont datés et ne recommandent rien de pertinent : les données (parties, collections, goûts) existent mais ne sont ni structurées ni valorisées.",
    solution:
      "Développement et mise en production d'un produit data complet : base relationnelle **PostgreSQL de 32 tables** (Alembic), API **FastAPI**, front **Next.js**, recommandation sémantique (**pgvector**, embeddings, API LLM) et **pipelines analytiques (OLAP)** de suivi d'usage.",
    impact:
      "En production sur **societyapp.fr** : **+200 utilisateurs** inscrits, **~400 jeux** modélisés et enrichis, usage suivi par des pipelines OLAP.",
    stack: ["PostgreSQL", "pgvector", "Alembic", "FastAPI", "Python", "Next.js", "TypeScript", "Embeddings / LLM", "Railway", "Vercel"],
    kpis: [
      { value: "+200", label: "utilisateurs inscrits" },
      { value: "~400", label: "jeux modélisés & enrichis" },
      { value: "32", label: "tables relationnelles (PostgreSQL)" },
      { value: "En prod", label: "societyapp.fr" },
    ],
    flow: [
      {
        label: "Transactionnel (OLTP)",
        status: { label: "En production", tone: "live" },
        steps: [
          { title: "Front", detail: "Next.js · Vercel" },
          { title: "API", detail: "FastAPI · Railway" },
          { title: "Base", detail: "PostgreSQL · 32 tables · Alembic" },
          { title: "Recommandation", detail: "pgvector · embeddings · API LLM" },
        ],
      },
      {
        label: "Analytique (OLAP)",
        status: { label: "Suivi d'usage", tone: "live" },
        steps: [
          { title: "Événements", detail: "Parties, collections, wishlists" },
          { title: "Pipeline", detail: "Python / SQL" },
          { title: "Modèle analytique", detail: "Faits d'usage · dimensions" },
          { title: "Pilotage produit", detail: "Engagement, rétention" },
        ],
      },
    ],
    sections: [
      {
        title: "Vision produit",
        paragraphs: [
          "Les jeux de société modernes ont des univers visuels superbes, mais les outils numériques qui les accompagnent sont restés datés. **Society** réunit dans une même plateforme la recommandation personnalisée, le suivi des parties et des collections, et une dimension sociale.",
          "Je l'ai abordé comme un produit : identification du besoin, priorisation des fonctionnalités, conception de l'expérience, mise en production et itérations. Aujourd'hui, **+200 utilisateurs** y ont créé un compte, suivent leurs parties et interagissent entre eux.",
        ],
      },
      {
        title: "Architecture transactionnelle (OLTP)",
        bullets: [
          "**Modélisation** : conception des modèles conceptuel et physique d'une base PostgreSQL de **32 tables** (utilisateurs, jeux, parties, collections, relations sociales), migrations versionnées avec Alembic.",
          "**Catalogue** : **~400 jeux** modélisés et enrichis (métadonnées, mécaniques, embeddings sémantiques), à partir de l'API BoardGameGeek.",
          "**API** : backend Python FastAPI, exposant les données au front et au moteur de recommandation.",
          "**Front** : Next.js (App Router), React et Tailwind CSS.",
        ],
      },
      {
        title: "Moteur de recommandation",
        paragraphs: [
          "Recherche vectorielle avec **pgvector** sur les embeddings sémantiques des jeux, combinée à une API LLM et à l'historique de l'utilisateur (parties jouées, ordre de la wishlist) pour proposer des jeux réellement pertinents.",
        ],
      },
      {
        title: "Couche analytique (OLAP)",
        paragraphs: [
          "Au-delà de la base qui fait tourner le produit, des pipelines analytiques extraient les événements d'usage vers un modèle analytique (faits / dimensions) pour **piloter** le produit : engagement, rétention et qualité des recommandations.",
        ],
      },
      {
        title: "Infrastructure & services",
        bullets: [
          "Environnements de production et de développement sur Railway, front sur Vercel, CI/CD via GitHub.",
          "Cloudinary (images), Resend (e-mails transactionnels), Google Auth (connexion), domaine societyapp.fr.",
        ],
      },
    ],
    links: [
      { label: "Ouvrir l'application", href: "https://societyapp.fr", kind: "site" },
      { label: "Présentation (PDF)", href: "/assets/poster_society.pdf", kind: "pdf" },
    ],
  },

  // 3 ─ PIPELINE BGG ────────────────────────────────────────────────────────
  {
    slug: "bgg-pipeline",
    shortTitle: "Pipeline BGG",
    kicker: "Data Engineering · Projet personnel",
    title: "Pipeline ETL & Analytics : BoardGameGeek",
    tagline: "De l'API brute à l'analyse des tendances du marché du jeu de société.",
    status: { label: "Pipeline en construction", tone: "wip" },
    problem:
      "Le marché du jeu de société génère beaucoup de données (notes, complexité, mécaniques, éditeurs), mais elles sont brutes, au format XML et non historisées : impossible d'en suivre les tendances dans le temps.",
    solution:
      "Ingestion automatisée depuis l'API BoardGameGeek, nettoyage et transformation en **Python / SQL**, **modèle dimensionnel** analytique et dataviz des tendances du marché.",
    impact:
      "Phase 1 (analyse exploratoire) publiée sur GitHub · Phase 2 (pipeline industrialisé) en cours · [À CHIFFRER : nombre de jeux ingérés]",
    stack: ["Python", "Pandas", "SQL", "API XML", "Modélisation dimensionnelle", "Dataviz"],
    kpis: [
      { value: "[À CHIFFRER]", label: "jeux ingérés" },
      { value: "[À CHIFFRER]", label: "tables du modèle en étoile" },
      { value: "[À CHIFFRER]", label: "fréquence de rafraîchissement" },
    ],
    flow: [
      {
        label: "Pipeline cible",
        status: { label: "En construction", tone: "wip" },
        steps: [
          { title: "Extraction", detail: "API BoardGameGeek · XML" },
          { title: "Transformation", detail: "Python · Pandas" },
          { title: "Chargement", detail: "SQL · schéma en étoile" },
          { title: "Analyse", detail: "Dataviz des tendances" },
        ],
      },
    ],
    sections: [
      {
        title: "Phase 1 · Analyse exploratoire (réalisée)",
        paragraphs: [
          "Exploration du catalogue BoardGameGeek sous l'angle de la durée de partie, de la complexité et de la popularité, pour identifier les premières tendances et les limites des données disponibles.",
        ],
      },
      {
        title: "Phase 2 · Pipeline ETL & modèle dimensionnel (en cours)",
        bullets: [
          "**Extraction** : ingestion automatisée et incrémentale depuis l'API BoardGameGeek.",
          "**Transformation** : parsing XML, nettoyage, normalisation des mécaniques, catégories et éditeurs.",
          "**Modèle cible** : une table de faits de classement historisée (snapshots) reliée aux dimensions jeu, mécanique, éditeur et date.",
          "**Restitution** : tableaux de bord sur l'évolution du marché (mécaniques en croissance, complexité moyenne, éditeurs dominants).",
        ],
      },
    ],
    // 👉 Ajoute ici le lien du nouveau dépôt du pipeline quand il sera publié.
    links: [
      {
        label: "Phase 1 sur GitHub",
        href: "https://github.com/tsauffisseau/boardgame_analysis",
        kind: "github",
      },
    ],
  },

  // 4 ─ CASSIOPÉE (source : poster_ESSI2025.pdf) ────────────────────────────
  {
    slug: "cassiopee",
    shortTitle: "Cassiopée",
    kicker: "Projet d'ingénieur en binôme · Deep Learning · 2024-2025",
    title: "Projet Cassiopée : détection d'Alzheimer par Deep Learning",
    org: "Télécom SudParis · encadré par le laboratoire SAMOVAR",
    tagline:
      "Pipeline complète de traitement de signaux EEG, des enregistrements bruts à un score de risque par patient.",
    watermark: "prize",
    status: { label: "1er prix · Colloque ESSI 2025", tone: "award" },
    problem:
      "Les diagnostics actuels de la maladie d'Alzheimer sont coûteux et invasifs. L'EEG offre une alternative non invasive, mais ses signaux sont bruités et difficiles à interpréter.",
    solution:
      "Signaux EEG filtrés (bande Thêta 2), découpés en époques de 1 s, transformés en images de **motifs récurrents** (Recurrence Plots) puis classés par un **CNN**, avec agrégation des scores par patient.",
    impact:
      "**1er prix parmi 180 projets** et prix du meilleur poster au Colloque ESSI 2025, sur une cohorte EEG de **364 sujets**.",
    stack: ["Python", "PyTorch", "NumPy", "Pandas", "OpenCV", "Matplotlib"],
    kpis: [
      { value: "1er / 180", label: "projets · Colloque ESSI 2025" },
      { value: "Meilleur poster", label: "Colloque ESSI 2025" },
      { value: "364", label: "sujets EEG (182 patients MA / 182 sains)" },
      { value: "10", label: "répartitions train / validation / test des patients" },
    ],
    flow: [
      {
        label: "Pipeline de traitement",
        steps: [
          { title: "Données", detail: "EEG de 364 sujets · 182 MA / 182 sains" },
          { title: "Prétraitement", detail: "Filtre Thêta 2 (6–8 Hz) · 19 époques de 1 s" },
          { title: "Représentation", detail: "Recurrence Plots 200×200 · 19 images / patient" },
          { title: "Modèle", detail: "CNN 3 blocs · PyTorch" },
          { title: "Décision", detail: "Score agrégé par patient" },
        ],
      },
    ],
    sections: [
      {
        title: "Contexte",
        paragraphs: [
          "La maladie d'Alzheimer est la principale maladie neurodégénérative, avec 7,7 millions de nouveaux cas par an dans le monde. Les diagnostics actuels sont coûteux et invasifs ; l'**électroencéphalographie (EEG)** permet de détecter de façon non invasive les altérations précoces des rythmes cérébraux.",
          "Notre approche : transformer les signaux EEG en images de **motifs récurrents** (Recurrence Plots) qui révèlent des structures périodiques ou transitoires invisibles sur le signal brut, puis entraîner un réseau de neurones convolutif sur ces images.",
        ],
      },
      {
        title: "Approche",
        bullets: [
          "**Données** : signaux EEG de 182 individus sains et 182 patients atteints de la maladie d'Alzheimer.",
          "**Prétraitement** : signaux de 19 s préfiltrés dans la bande Thêta 2 (6–8 Hz), segmentés en 19 époques de 1 s.",
          "**Représentation** : une image de motifs récurrents 200×200 par époque (distance euclidienne entre points du signal), moyennée pixel à pixel sur deux électrodes : 19 images par patient.",
          "**Modèle** : CNN à 3 blocs de convolution (ReLU, MaxPool) et une couche entièrement connectée ; score patient obtenu par agrégation sigmoïde des scores de ses images.",
          "**Évaluation** : 10 répartitions aléatoires des patients en train / validation / test, pour des résultats robustes au niveau patient.",
        ],
      },
      {
        title: "Résultats & distinctions",
        bullets: [
          "Des résultats encourageants pour une première approche, obtenus sur les paires d'électrodes Fp1/O1 et Fp2/O2.",
          "**1er prix** parmi 180 projets et **prix du meilleur poster** au Colloque ESSI 2025.",
          "Perspectives : élargir à d'autres électrodes et bandes de fréquences (Alpha, Thêta), optimiser l'architecture du CNN, valider sur une cohorte indépendante.",
        ],
      },
    ],
    links: [{ label: "Poster (PDF)", href: "/assets/poster_ESSI2025.pdf", kind: "pdf" }],
  },
];

export function getProject(slug: string) {
  return PROJECTS.find((p) => p.slug === slug);
}

/** Travaux secondaires, affichés en bas de la page Projets. */
export const OTHER_WORKS: { title: string; description: string; stack: string[]; href: string }[] = [
  {
    title: "Chesscoach : analyse de parties d'échecs",
    description:
      "Outil Streamlit d'analyse de parties (PGN) avec Stockfish : évolution de l'évaluation, classification des imprécisions, erreurs et gaffes.",
    stack: ["Python", "Streamlit"],
    href: "https://github.com/tsauffisseau/chesscoach",
  },
];

// ---------------------------------------------------------------------------
// COMPÉTENCES
// ---------------------------------------------------------------------------

export const SKILLS: { domain: string; items: string[]; provenIn: string[] }[] = [
  {
    domain: "Architecture & Modélisation",
    items: [
      "Modélisation OLTP / OLAP",
      "Schéma en étoile",
      "Conception de pipelines ETL / ELT",
      "Cadrage produit & Agile (PO / SO)",
    ],
    provenIn: ["hcp-360", "society", "bgg-pipeline"],
  },
  {
    domain: "Data, BI & Cloud",
    items: ["SQL avancé", "Power BI (DAX)", "AWS (SageMaker, S3 / Athena)", "PostgreSQL (pgvector)"],
    provenIn: ["hcp-360", "society"],
  },
  {
    domain: "Développement & Outils",
    items: ["Python (Pandas, Scikit-Learn)", "FastAPI", "Next.js", "Git", "Docker"],
    provenIn: ["society", "bgg-pipeline", "cassiopee"],
  },
];
