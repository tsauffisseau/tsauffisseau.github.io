/**
 * Contenu du portfolio : tous les textes, chiffres et liens du site sont ici,
 * les pages ne font que les afficher.
 *
 * Syntaxe reconnue dans les textes :
 *   **texte**             mise en gras
 *   ==texte==             surligné en jaune
 *   [texte](/chemin)      lien
 *   [À CHIFFRER : ...]    chiffre manquant, affiché en surbrillance
 *   [À PRÉCISER : ...]    information à confirmer, affichée en surbrillance
 *
 * Règles éditoriales :
 *   - pas de pourcentages de gain ni de métriques de performance de modèle ;
 *   - les chiffres doivent être identiques à ceux du CV (mêmes valeurs, mêmes arrondis).
 */

import type { StaticImageData } from "next/image";
import societyCover from "@/public/assets/poster_societythumb.jpg";

export const PROFILE = {
  name: "Théophile Sauffisseau",
  title: "Consultant Data / Product Data Analyst",
  availability: "Disponible en janvier 2027",
  /** Paragraphes d'introduction de la page d'accueil. Le premier est mis en avant. */
  intro: [
    "Ingénieur Télécom SudParis (IP Paris), je cherche un CDI de ==Consultant Data== ou de ==Product Data Analyst== à Paris, à partir de janvier 2027.",
    "Pendant mon stage de fin d'études chez Air Liquide Healthcare, j'ai construit [HCP-360°](/projects/hcp-360), un outil décisionnel destiné à une centaine de commerciaux pour suivre plus de 20 000 prescripteurs. En parallèle, j'ai créé [Society](/projects/society), une application de recommandation de jeux de société qui compte aujourd'hui plus de 200 utilisateurs.",
    "Mon projet d'ingénieur sur la [détection d'Alzheimer](/projects/cassiopee) a reçu le 1er prix parmi 180 projets au Colloque ESSI 2025.",
  ],
  email: "theophilesauffisseau@gmail.com",
  linkedin: "https://www.linkedin.com/in/theophile-sauffisseau",
  github: "https://github.com/tsauffisseau",
  // CV : déposer le PDF final dans /public/assets/, mettre à jour ce chemin
  // et régénérer la miniature /public/assets/resumethumb.jpg.
  cvPath: "/assets/Resume_ThéophileSauffisseau_2026.pdf",
  cvDownloadName: "CV_Theophile_Sauffisseau.pdf",
  siteUrl: "https://portfolio-tsauffisseau.vercel.app",
};

/** Introduction de la page Projets. */
export const PROJECTS_INTRO =
  "J'ai travaillé aux deux bouts de la chaîne de la donnée : côté OLAP chez Air Liquide, pour transformer la donnée en décision, et côté OLTP avec Society, pour produire une donnée fiable en production.";

// ---------------------------------------------------------------------------
// Projets
// ---------------------------------------------------------------------------

export type LogoKey = "society" | "airliquide" | "bgg" | "tsp" | "chess";

export type FlowLane = {
  label: string;
  status?: string;
  /** Couche encore en construction : affichée en pointillés. */
  wip?: boolean;
  steps: { title: string; detail?: string }[];
};

export type ProjectLink = {
  label: string;
  href: string;
  kind: "site" | "github" | "pdf";
};

export type Project = {
  slug: string;
  /** Nom court utilisé dans les métadonnées. */
  shortTitle: string;
  /** Cadre du projet : stage, projet personnel, projet d'école. */
  context: string;
  /** Période affichée dans les listes. */
  period: string;
  title: string;
  org?: string;
  role?: string;
  tagline: string;
  logo?: LogoKey;
  /** Icône en filigrane derrière la carte du projet. */
  watermark?: "exp" | "prize" | "society" | "bgg";
  /** Visuel cliquable affiché dans l'étude de cas. */
  cover?: { src: StaticImageData; href: string; caption: string };
  status?: string;
  /** Résumé de l'étude de cas, en trois temps : besoin, démarche, résultat. */
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
  // HCP-360° (stage Air Liquide Healthcare)
  {
    slug: "hcp-360",
    shortTitle: "HCP-360°",
    context: "Stage de fin d'études (6 mois)",
    period: "2026",
    title: "Solution décisionnelle HCP-360°",
    org: "Air Liquide Healthcare, Santé à Domicile France",
    role: "Data Analyst",
    tagline:
      "Un outil Power BI qui donne aux commerciaux terrain une vue complète de plus de 20 000 prescripteurs, pour savoir qui visiter en priorité.",
    logo: "airliquide",
    watermark: "exp",
    status: "POC exploratoire validé, en cours d'industrialisation",
    problem:
      "Pour préparer leurs tournées, les commerciaux croisaient à la main des extractions Salesforce, des fichiers d'activité et des référentiels géographiques. C'était long, et rien n'indiquait clairement quels prescripteurs voir en priorité.",
    solution:
      "J'ai cadré un POC exploratoire avec les Product Owners, les Solution Owners et les équipes métier, puis construit toute la chaîne : consolidation des 3 sources dans un pipeline Python sur AWS SageMaker, modèle analytique, et dashboards Power BI organisés autour d'une trentaine de KPIs.",
    impact:
      "Le POC donne aux ~100 commerciaux terrain ciblés une vue unifiée de plus de 20 000 prescripteurs, en un clic. Il a été validé et l'équipe Data interne l'industrialise.",
    stack: ["Python", "Pandas", "AWS SageMaker", "S3 / Athena", "SQL", "Salesforce", "Power BI", "DAX", "Agile"],
    kpis: [
      { value: "+20 000", label: "prescripteurs couverts" },
      { value: "~100", label: "commerciaux terrain et managers ciblés" },
      { value: "~30", label: "KPIs, répartis sur 3 axes" },
      { value: "3", label: "sources consolidées (CRM, activité, géographie)" },
    ],
    flow: [
      {
        label: "Chaîne décisionnelle (OLAP)",
        steps: [
          { title: "Sources", detail: "CRM Salesforce, activité commerciale, référentiels géographiques" },
          { title: "Préparation", detail: "Python sur AWS SageMaker" },
          { title: "Modélisation", detail: "Modèle analytique en faits et dimensions" },
          { title: "Restitution", detail: "Power BI, DAX, ~30 KPIs" },
          { title: "Décision", detail: "Priorisation des tournées" },
        ],
      },
    ],
    sections: [
      {
        title: "Contexte",
        paragraphs: [
          "Dans l'activité Santé à Domicile France d'Air Liquide Healthcare, les commerciaux terrain entretiennent la relation avec les prescripteurs : médecins généralistes, spécialistes, praticiens hospitaliers et libéraux.",
          "Avant le projet, préparer une tournée voulait dire consolider à la main des extractions Salesforce et Excel. L'objectif de HCP-360° était de donner une vue unifiée de chaque prescripteur, en un clic, pour objectiver le choix des visites.",
        ],
      },
      {
        title: "Ce que j'ai fait",
        bullets: [
          "J'ai fait l'interface entre les Product Owners, les Solution Owners et les utilisateurs métier pour traduire leurs besoins en KPIs et en user stories, dans un cadre agile.",
          "J'ai consolidé 3 sources (CRM Salesforce, données de prescription et d'activité commerciale, référentiels géographiques) dans un pipeline de préparation Python sur AWS SageMaker.",
          "J'ai structuré les données en faits et dimensions, pour que toutes les analyses reposent sur le même modèle.",
          "J'ai défini ~30 indicateurs autour de 3 axes : le potentiel du prescripteur, la dynamique de l'activité commerciale et le risque d'attrition.",
          "J'ai conçu les dashboards Power BI (DAX) pour un usage terrain : lisibles, et pensés pour aboutir à une décision.",
        ],
      },
      {
        title: "Résultats",
        bullets: [
          "La préparation d'une tournée ne passe plus par une consolidation manuelle sous Excel et Salesforce : la vue est disponible en un clic.",
          "Les prescripteurs à plus fort potentiel ressortent directement, ce qui aide à prioriser les visites.",
          "Le POC a été validé par les Product Owners et les Solution Owners. L'équipe Data interne reprend son déploiement et son intégration au Data Warehouse de l'entreprise.",
        ],
      },
    ],
    note: "Les données et les visuels étant confidentiels, cette page présente la démarche et l'architecture, sans aucune donnée réelle.",
    links: [],
  },

  // Society (projet personnel)
  {
    slug: "society",
    shortTitle: "Society",
    context: "Projet personnel",
    period: "En production",
    title: "Society",
    tagline:
      "Une plateforme sociale de recommandation de jeux de société, pensée comme un « Netflix des jeux de société ».",
    logo: "society",
    watermark: "society",
    cover: {
      src: societyCover,
      href: "/assets/poster_society.pdf",
      caption: "Présentation produit et technique (PDF)",
    },
    status: "En production sur societyapp.fr",
    problem:
      "Les outils des joueurs de jeux de société sont datés et leurs recommandations peu pertinentes. Les données existent (parties, collections, goûts), mais personne ne les structure ni ne les exploite.",
    solution:
      "J'ai conçu une base PostgreSQL de 32 tables (migrations Alembic), une API FastAPI et un front Next.js. La recommandation repose sur pgvector, des embeddings et une API LLM, et des pipelines analytiques (OLAP) suivent l'usage.",
    impact:
      "L'application tourne sur societyapp.fr : plus de 200 utilisateurs inscrits, environ 400 jeux modélisés et enrichis, et un usage suivi par des pipelines OLAP.",
    stack: ["PostgreSQL", "pgvector", "Alembic", "FastAPI", "Python", "Next.js", "TypeScript", "Embeddings / LLM", "Railway", "Vercel"],
    kpis: [
      { value: "+200", label: "utilisateurs inscrits" },
      { value: "~400", label: "jeux modélisés et enrichis" },
      { value: "32", label: "tables relationnelles (PostgreSQL)" },
      { value: "En prod", label: "sur societyapp.fr" },
    ],
    flow: [
      {
        label: "Transactionnel (OLTP)",
        status: "en production",
        steps: [
          { title: "Front", detail: "Next.js, hébergé sur Vercel" },
          { title: "API", detail: "FastAPI, hébergée sur Railway" },
          { title: "Base", detail: "PostgreSQL, 32 tables, Alembic" },
          { title: "Recommandation", detail: "pgvector, embeddings, API LLM" },
        ],
      },
      {
        label: "Analytique (OLAP)",
        status: "suivi d'usage",
        steps: [
          { title: "Événements", detail: "Parties, collections, wishlists" },
          { title: "Pipeline", detail: "Python et SQL" },
          { title: "Modèle analytique", detail: "Faits d'usage et dimensions" },
          { title: "Pilotage produit", detail: "Engagement, rétention" },
        ],
      },
    ],
    sections: [
      {
        title: "Le produit",
        paragraphs: [
          "Les jeux de société modernes ont des univers visuels superbes, mais les outils numériques qui les accompagnent sont restés datés. Society réunit la recommandation personnalisée, le suivi des parties et des collections, et une dimension sociale.",
          "Je l'ai mené comme un produit : identifier le besoin, prioriser les fonctionnalités, concevoir l'expérience, mettre en production, puis itérer. Plus de 200 utilisateurs y ont aujourd'hui un compte, suivent leurs parties et échangent entre eux.",
        ],
      },
      {
        title: "Base de données et API (OLTP)",
        bullets: [
          "J'ai conçu les modèles conceptuel et physique d'une base PostgreSQL de 32 tables (utilisateurs, jeux, parties, collections, relations sociales), avec des migrations versionnées par Alembic.",
          "Le catalogue compte ~400 jeux, importés depuis l'API BoardGameGeek puis enrichis : métadonnées, mécaniques, embeddings sémantiques.",
          "Une API FastAPI expose les données au front et au moteur de recommandation.",
          "Le front est développé en Next.js (App Router), React et Tailwind CSS.",
        ],
      },
      {
        title: "Recommandation",
        paragraphs: [
          "Les recommandations combinent une recherche vectorielle (pgvector) sur les embeddings des jeux, une API LLM et l'historique de l'utilisateur, comme ses parties jouées et l'ordre de sa wishlist.",
        ],
      },
      {
        title: "Couche analytique (OLAP)",
        paragraphs: [
          "En plus de la base qui fait tourner l'application, des pipelines extraient les événements d'usage vers un modèle analytique en faits et dimensions. Je m'en sers pour piloter le produit : engagement, rétention, qualité des recommandations.",
        ],
      },
      {
        title: "Infrastructure",
        bullets: [
          "Environnements de production et de développement sur Railway, front sur Vercel, CI/CD via GitHub.",
          "Cloudinary pour les images, Resend pour les e-mails transactionnels, connexion Google, domaine societyapp.fr.",
        ],
      },
    ],
    links: [
      { label: "Ouvrir l'application", href: "https://societyapp.fr", kind: "site" },
      { label: "Présentation (PDF)", href: "/assets/poster_society.pdf", kind: "pdf" },
    ],
  },

  // Pipeline BoardGameGeek (projet personnel, en cours)
  {
    slug: "bgg-pipeline",
    shortTitle: "Pipeline BGG",
    context: "Projet personnel",
    period: "En cours",
    title: "Pipeline de données BoardGameGeek",
    tagline: "De l'API brute de BoardGameGeek à l'analyse des tendances du marché du jeu de société.",
    logo: "bgg",
    watermark: "bgg",
    status: "Pipeline en construction",
    problem:
      "BoardGameGeek publie beaucoup de données sur les jeux (notes, complexité, mécaniques, éditeurs), mais en XML brut et sans historique. Impossible d'y suivre une tendance dans le temps.",
    solution:
      "Je construis une ingestion automatisée depuis l'API, des transformations en Python et SQL, un modèle dimensionnel et des visualisations des tendances du marché.",
    impact:
      "La phase 1, une analyse exploratoire, est publiée sur GitHub. La phase 2, le pipeline industrialisé, est en cours : elle vise ~25 000 jeux classés, rafraîchis chaque semaine.",
    stack: ["Python", "Pandas", "SQL", "API XML", "Modélisation dimensionnelle", "Dataviz"],
    // Chiffres provisoires : objectifs de la phase 2, à remplacer par les valeurs réelles.
    kpis: [
      { value: "~25 000", label: "jeux classés visés" },
      { value: "5", label: "tables du modèle en étoile (1 fait, 4 dimensions)" },
      { value: "Hebdo", label: "rafraîchissement prévu" },
    ],
    flow: [
      {
        label: "Pipeline cible",
        status: "en construction",
        wip: true,
        steps: [
          { title: "Extraction", detail: "API BoardGameGeek (XML)" },
          { title: "Transformation", detail: "Python, Pandas" },
          { title: "Chargement", detail: "SQL, schéma en étoile" },
          { title: "Analyse", detail: "Visualisation des tendances" },
        ],
      },
    ],
    sections: [
      {
        title: "Phase 1 : Analyse exploratoire (terminée)",
        paragraphs: [
          "J'ai exploré le catalogue BoardGameGeek sous l'angle de la durée de partie, de la complexité et de la popularité, pour repérer les premières tendances et les limites des données disponibles.",
        ],
      },
      {
        title: "Phase 2 : Pipeline et modèle dimensionnel (en cours)",
        bullets: [
          "Extraction automatisée et incrémentale depuis l'API BoardGameGeek.",
          "Parsing du XML, nettoyage, normalisation des mécaniques, catégories et éditeurs.",
          "Une table de faits des classements, historisée par snapshots, reliée aux dimensions jeu, mécanique, éditeur et date.",
          "Des tableaux de bord sur l'évolution du marché : mécaniques en croissance, complexité moyenne, éditeurs dominants.",
        ],
      },
    ],
    // Ajouter ici le lien du dépôt du pipeline quand il sera publié.
    links: [
      {
        label: "Phase 1 sur GitHub",
        href: "https://github.com/tsauffisseau/boardgame_analysis",
        kind: "github",
      },
    ],
  },

  // Cassiopée (projet d'école, source : public/assets/poster_ESSI2025.pdf)
  {
    slug: "cassiopee",
    shortTitle: "Cassiopée",
    context: "Projet d'ingénieur en binôme, 2024-2025",
    period: "2025",
    title: "Projet Cassiopée : Détection d'Alzheimer par Deep\u00a0Learning",
    org: "Télécom SudParis, encadré par le laboratoire SAMOVAR",
    tagline:
      "Une chaîne complète de traitement de signaux EEG, des enregistrements bruts jusqu'à un score de risque par patient.",
    logo: "tsp",
    watermark: "prize",
    status: "1er prix au Colloque ESSI 2025",
    problem:
      "Diagnostiquer la maladie d'Alzheimer coûte cher et passe par des examens invasifs. L'EEG est une alternative non invasive, mais ses signaux sont bruités et difficiles à interpréter.",
    solution:
      "Nous avons filtré les signaux EEG (bande Thêta 2), découpés en époques de 1 s, puis transformés en images de motifs récurrents (Recurrence Plots) classées par un CNN. Les scores sont ensuite agrégés par patient.",
    impact:
      "Le projet a reçu le 1er prix parmi 180 projets et le prix du meilleur poster au Colloque ESSI 2025. Il porte sur une cohorte EEG de 364 sujets.",
    stack: ["Python", "PyTorch", "NumPy", "Pandas", "OpenCV", "Matplotlib"],
    kpis: [
      { value: "1er / 180", label: "projets au Colloque ESSI 2025" },
      { value: "Meilleur poster", label: "Colloque ESSI 2025" },
      { value: "364", label: "sujets EEG (182 patients, 182 sains)" },
      { value: "10", label: "répartitions train, validation et test" },
    ],
    flow: [
      {
        label: "Chaîne de traitement",
        steps: [
          { title: "Données", detail: "EEG de 364 sujets, 182 malades et 182 sains" },
          { title: "Prétraitement", detail: "Filtre Thêta 2 (6–8 Hz), 19 époques de 1 s" },
          { title: "Représentation", detail: "Recurrence Plots 200×200, 19 images par patient" },
          { title: "Modèle", detail: "CNN à 3 blocs, PyTorch" },
          { title: "Décision", detail: "Score agrégé par patient" },
        ],
      },
    ],
    sections: [
      {
        title: "Contexte",
        paragraphs: [
          "La maladie d'Alzheimer est la principale maladie neurodégénérative, avec 7,7 millions de nouveaux cas par an dans le monde. Les diagnostics actuels sont coûteux et invasifs, alors que l'électroencéphalographie (EEG) permet de détecter sans intervention les altérations précoces des rythmes cérébraux.",
          "Notre idée : transformer les signaux EEG en images de motifs récurrents (Recurrence Plots), qui font apparaître des structures périodiques ou transitoires invisibles sur le signal brut, puis entraîner un réseau de neurones convolutif sur ces images.",
        ],
      },
      {
        title: "Approche",
        bullets: [
          "La cohorte réunit 182 personnes saines et 182 patients atteints de la maladie d'Alzheimer.",
          "Les signaux de 19 s sont préfiltrés dans la bande Thêta 2 (6–8 Hz), puis découpés en 19 époques de 1 s.",
          "Chaque époque devient une image de motifs récurrents de 200×200 (distance euclidienne entre points du signal), moyennée pixel à pixel sur deux électrodes. On obtient 19 images par patient.",
          "Le CNN compte 3 blocs de convolution (ReLU, MaxPool) et une couche entièrement connectée. Le score d'un patient agrège par sigmoïde les scores de ses images.",
          "Nous avons évalué le modèle sur 10 répartitions aléatoires des patients en train, validation et test, pour des résultats robustes au niveau patient.",
        ],
      },
      {
        title: "Résultats",
        bullets: [
          "Des résultats encourageants pour une première approche, sur les paires d'électrodes Fp1/O1 et Fp2/O2.",
          "1er prix parmi 180 projets et prix du meilleur poster au Colloque ESSI 2025.",
          "Pistes pour la suite : étendre à d'autres électrodes et bandes de fréquences (Alpha, Thêta), optimiser l'architecture du CNN, valider sur une cohorte indépendante.",
        ],
      },
    ],
    links: [{ label: "Poster (PDF)", href: "/assets/poster_ESSI2025.pdf", kind: "pdf" }],
  },
];

export function getProject(slug: string) {
  return PROJECTS.find((p) => p.slug === slug);
}

/** Travaux secondaires, en bas de la page Projets. */
export const OTHER_WORKS: { title: string; logo?: LogoKey; description: string; stack: string[]; href: string }[] = [
  {
    title: "Chesscoach : Analyse de parties d'échecs",
    logo: "chess",
    description:
      "Un outil Streamlit qui analyse des parties d'échecs (PGN) avec Stockfish : évolution de l'évaluation, repérage des imprécisions, erreurs et gaffes.",
    stack: ["Python", "Streamlit"],
    href: "https://github.com/tsauffisseau/chesscoach",
  },
];

// ---------------------------------------------------------------------------
// Compétences
// ---------------------------------------------------------------------------

export const SKILLS: { domain: string; items: string[] }[] = [
  {
    domain: "Architecture et modélisation",
    items: [
      "Modélisation OLTP / OLAP",
      "Schéma en étoile",
      "Conception de pipelines ETL / ELT",
      "Cadrage produit et agilité (PO / SO)",
    ],
  },
  {
    domain: "Data, BI et cloud",
    items: ["SQL avancé", "Power BI (DAX)", "AWS (SageMaker, S3 / Athena)", "PostgreSQL (pgvector)"],
  },
  {
    domain: "Développement",
    items: ["Python (Pandas, Scikit-Learn)", "FastAPI", "Next.js", "Git", "Docker"],
  },
];
