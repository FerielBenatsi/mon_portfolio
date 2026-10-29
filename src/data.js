import cvFeriel from "./assets/CV_Feriel_Benatsi.pdf";
import photo from "../src/assets/me.png";
import blinkAccueil from "./assets/Projets/blink/accueil.jpg";
import blinkArticle from "./assets/Projets/blink/article.jpg";
import blinkAdmin from "./assets/Projets/blink/dashboard-admin.jpg";
import blinkBoutique from "./assets/Projets/blink/boutique.jpg";
import fixitAccueil from "./assets/Projets/fixit/accueil.jpg";
import fixitArtisans from "./assets/Projets/fixit/artisans.jpg";
import fixitOutilsAvis from "./assets/Projets/fixit/outils-avis.jpg";
import joynAccueil from "./assets/Projets/joyn/accueil.jpg";
import joynMatchs from "./assets/Projets/joyn/matchs.jpg";
import joynProfil from "./assets/Projets/joyn/profil.jpg";
import joynFonctionnalites from "./assets/Projets/joyn/fonctionnalites.jpg";
import planningGrille from "./assets/Projets/planning/grille.jpg";
import planningGlisser from "./assets/Projets/planning/glisser-deposer.jpg";
import planningVueEtudiante from "./assets/Projets/planning/vue-etudiante.jpg";
import planningFormulaire from "./assets/Projets/planning/formulaire.jpg";
import planningConfirmation from "./assets/Projets/planning/confirmation.jpg";
import graph from "./assets/Projets/graph.png";
import fleure from "./assets/Projets/fleure.png";
import sportpulseMatchs from "./assets/Projets/sportpulse/matchs.jpg";
import sportpulsePronostic from "./assets/Projets/sportpulse/pronostic.jpg";
import sportpulseProfil from "./assets/Projets/sportpulse/profil.jpg";
import dessinNympheas from "./assets/dessins/nympheas.jpg";
import dessinKois from "./assets/dessins/kois.jpg";
import dessinColibris from "./assets/dessins/colibris.jpg";
import dessinCygnes from "./assets/dessins/cygnes.jpg";
import dessinAbeille from "./assets/dessins/abeille.jpg";
import dessinLys from "./assets/dessins/lys.jpg";
export const profil = {
  prenom: "Feriel",
  cv: cvFeriel,
  nom: "Benatsi",
  titre: "Développeuse & designer",
  etiquettes: ["Développeuse", "Designer"],
  badge: {
    accroche: "Enchantée,",
    departement: "code, design & coups de crayon",
  },
  ville: "Île-de-France",
  email: "ferielbenatsi6@gmail.com",
  photo: photo,
  aPropos: [
    "Étudiante en Master 2 Informatique, parcours Science et Technologie du Logiciel à Sorbonne Université, je suis passionnée par le développement logiciel et la création de solutions innovantes. Je m'intéresse particulièrement au développement Full Stack, à l'architecture logicielle, au Cloud et à l'intelligence artificielle.Curieuse, créative et toujours en quête de nouveaux défis, j'aime transformer des idées en applications concrètes, performantes et bien conçues.",
  ],
};

export const liens = [
  {
    nom: "LinkedIn",
    url: "https://linkedin.com/in/feriel-benatsi-639136270",
    libelle: "",
  },
  {
    nom: "GitHub",
    url: "https://github.com/FerielBenatsi",
    libelle: "FerielBenatsi",
  },
  { nom: "Behance", url: "https://www.behance.net/benatsiferiel", libelle: "" },
];

export const competences = [
  {
    groupe: "Langages ",
    items: ["C", "C++", "Ocaml", "Python", "Java", "JavaScript"],
  },
  {
    groupe: "Conception & design",
    items: ["Figma", "UI / UX", "Maquettes & prototypes", "UML"],
  },
  {
    groupe: "Frontend",
    items: ["React", "TypeScript", "HTML & CSS", "Tailwind CSS"],
  },
  {
    groupe: "Backend",
    items: [
      "Node.js / Express",
      "Go",
      { nom: "Spring Boot", enCours: true },
      { nom: "PostgreSQL", enCours: true },
      "SQL",
      "JWT",
      "Rest API",
    ],
  },
  {
    groupe: "Déploiement",
    items: [
      { nom: "Docker", enCours: true },
      { nom: "GitHub Actions (CI/CD)", enCours: true },
      "Git & GitHub",
      "Netlify",
      "Linux",
    ],
  },
];
export const projets = [
  {
    slug: "joyn",
    titre: "Joyn",
    image: joynAccueil,
    description:
      "L'alternance façon Tinder : étudiants et entreprises swipent pour se trouver. Joyn a job with joy.",
    tags: ["Flutter", "Dart", "Material 3"],
    github: "https://github.com/idris-ach2002/GPSTL-JOYN-FRONT.git",
    annee: "2026, en cours",
    role: "Design figma, Développement du front Flutter",
    equipe: "Projet de groupe",
    contexte:
      "Projet de cours. Trouver une alternance, c'est souvent envoyer des dizaines de candidatures sans réponse. Joyn renverse la logique : étudiants et entreprises se découvrent en swipant, et le contact s'ouvre quand l'intérêt est réciproque.",
    fonctionnalites: [
      "Profils étudiants et offres d'entreprises présentés en cartes à swiper",
      "Match quand l'intérêt est réciproque",
      "Cooptation : un alternant en fin de contrat peut trouver son remplaçant via l'app",
      "Espace dédié aux entreprises et formule d'abonnement pour obtenir plus de likes",
    ],
    defis:
      "Faire tourner la même interface sur le web et sur mobile avec Flutter, en avançant sur des données fictives avant que le back soit branché. Le passage aux composants Material 3, avec le style Joyn porté par le thème, garde l'interface cohérente sur tous les écrans.",
    captures: [joynMatchs, joynProfil, joynFonctionnalites],
  },
  {
    slug: "depgraph",
    titre: "DepGraph",
    image: graph,
    description:
      "Un outil en ligne de commande qui transforme un projet JS/TS en graphe de dépendances, pour repérer les cycles, les fichiers orphelins et les modules trop centraux.",
    tags: ["Node.js", "TypeScript", "AST", "Graphes", "Vitest"],
    github: "https://github.com/FerielBenatsi/depgraph",
    annee: "2026",
    role: "Conception et développement",
    equipe: "Projet solo",
    contexte:
      "Projet personnel. Quand un projet grossit, les imports finissent par former des boucles, des fichiers deviennent inutiles et quelques modules concentrent toutes les dépendances, sans que personne ne le voie. DepGraph rend cette structure visible : chaque fichier devient un sommet, chaque import une arête, et des algorithmes de graphes font le diagnostic.",
    fonctionnalites: [
      "Scan du projet, lecture des imports via l'AST TypeScript, puis résolution des chemins",
      "Détection des cycles de dépendances avec l'algorithme de Tarjan (composantes fortement connexes)",
      "Repérage des fichiers orphelins par parcours en profondeur depuis les points d'entrée",
      "Métriques de couplage : fan-in, fan-out et fichiers « hubs »",
      "Rapport de synthèse lisible dans le terminal",
    ],
    defis:
      "Passer d'un code source à un graphe fiable : chaque import doit être résolu vers le bon fichier (chemins relatifs, extensions, fichiers index) avant de lancer les algorithmes. Le pipeline est découpé en étapes (scanner, parser, résolveur, constructeur de graphe, analyses) testées séparément avec Vitest, et l'outil a été validé en s'analysant lui-même de bout en bout.",
    captures: [],
  },
  {
    slug: "sportpulse",
    titre: "SportPulse",
    demo: "https://sportpules.netlify.app/",

    image: sportpulseMatchs,
    description:
      "Une application communautaire de pronostics de football : on parie sur le score avant le coup d'envoi, on gagne des points et on grimpe au classement.",
    tags: ["React", "Go", "SQLite", "JWT", "Tailwind CSS", "API REST"],
    github: "https://github.com/FerielBenatsi/SportPulse.git",
    annee: "2025 – 2026",
    role: "Développement du front (React)",
    equipe: "Binôme",
    contexte:
      "Projet de l'UE PC3R (Master 1 STL, Sorbonne Université). Le but : une vraie application web complète, avec un back en Go qui s'appuie sur une API externe de données sportives (football-data.org) et un front React qui ne parle qu'à notre propre API.",
    fonctionnalites: [
      "Matchs des 7 prochains jours et matchs passés, regroupés par compétition",
      "Pronostic de score avant le coup d'envoi, verrouillé une fois le match commencé",
      "Points calculés automatiquement : 3 pour le score exact, 1 pour le bon résultat",
      "Classement général et hebdomadaire, avec podium",
      "Profils publics avec statistiques et historique des pronostics",
      "Commentaires sous chaque match, et inscription sécurisée (JWT, mots de passe hachés avec bcrypt)",
    ],
    defis:
      "Organiser l'échange entre trois mondes : football-data.org, limitée à 10 requêtes par minute, le back Go et ses 11 routes REST, et le front React. Côté front, il a fallu gérer l'authentification de bout en bout (jeton JWT, routes protégées, utilisateur connecté partagé via un contexte) et un formulaire de pronostic qui se verrouille au coup d'envoi.",
    captures: [sportpulsePronostic, sportpulseProfil],
  },
  {
    slug: "broker-pubsub",
    titre: "Broker pub/sub",
    description:
      "Un intergiciel de publication/souscription à base de composants en Java, appliqué à une simulation météo : stations, bulletins et éoliennes échangent via un broker central.",
    tags: ["Java", "JUnit", "Composants", "Concurrence", "Pub/Sub"],
    github: "https://github.com/FerielBenatsi/CPS.git",
    annee: "2025 – 2026",
    role: "développement java concurrent",
    equipe: "équipe de 2",
    contexte:
      "Projet de l'UE CPS (Master 1 STL, Sorbonne Université). Le but : construire un système de publication/souscription avec le modèle à composants BCM4Java, où publieurs et souscripteurs ne se connaissent pas et ne communiquent qu'à travers un broker.",
    fonctionnalites: [
      "Broker central qui reçoit, filtre et redistribue les messages selon les abonnements",
      "Publieurs (stations météo, bureau météo) et souscripteurs (éoliennes) avec filtres sur le contenu des messages",
      "Trois classes de service, FREE, STANDARD et PREMIUM : les clients privilégiés créent et détruisent leurs propres canaux, dans la limite d'un quota",
      "Greffons côté broker et côté client pour étendre le comportement sans modifier les composants",
      "Réception avancée : attente bloquante, attente avec délai ou Future, avec priorité aux attentes en cours",
      "Scénarios de test chronométrés sur une horloge accélérée",
    ],
    defis:
      "Rendre le broker asynchrone et concurrent : publication et livraison passent par des tâches réparties sur trois pools de threads distincts (réception, propagation, livraison). Il a fallu protéger toutes les structures partagées (abonnements, canaux, files de messages) contre les accès simultanés. L'horloge accélérée garantit l'ordre des scénarios : création du canal, puis abonnement, puis publication.",
    captures: [],
  },
  {
    slug: "planning-master",
    titre: "Planning M1 Informatique",
    description:
      "Un éditeur d'emploi du temps en glisser-déposer pour l'administration du Master Informatique de Sorbonne Université.",
    tags: [
      "React 19",
      "Vite",
      "Zustand",
      "Tailwind CSS",
      "PHP",
      "MariaDB",
      "Vitest",
    ],
    image: planningGrille,
    github:
      "https://github.com/FerielBenatsi/Editeur-de-planning-interactif-PSTL.git",
    annee: "2025 – 2026",
    role: "Conception, design, développement frontend",
    equipe: "Binôme, projet STL encadré par Antoine Genitrini",
    contexte:
      "Projet STL du Master 1, né d'un besoin réel de l'administration. Le planning du master vivait dans un fichier CSV au format maison, où chaque créneau est codé en abrégé (lu08 pour lundi 8 h). Tout se modifiait à la main, sans retour visuel : les conflits passaient inaperçus et une faute de syntaxe suffisait à casser le fichier.",
    fonctionnalites: [
      "Import du CSV du master et grille hebdomadaire, avec une couleur fixe par UE",
      "Glisser-déposer des créneaux, avec confirmation si la case est déjà occupée",
      "Création, modification et suppression de créneaux CM ou TD, en 2 h ou 4 h",
      "Groupes de TD renumérotés automatiquement dans l'ordre chronologique",
      "Filtres par semestre, parcours et UE, modes consultation et édition, annulation de la dernière action",
      "Vue étudiante en lecture seule, partageable par une simple URL",
      "Export CSV réimportable sans perte, sauvegardé aussi dans MariaDB",
    ],
    defis:
      "Le glisser-déposer sur une grille en deux dimensions, là où les bibliothèques courantes ne gèrent que des listes : nous avons utilisé l'API HTML5 native. Puis les performances : chaque survol de case faisait re-rendre les 25 cellules de la grille. Avec des sélecteurs Zustand ciblés, React.memo, useMemo et useCallback, seules 2 cellules se re-rendent désormais. Les fonctions clés sont couvertes par 34 tests Vitest, dont un test aller-retour qui garantit qu'un CSV exporté se réimporte sans perte.",
    captures: [
      planningGlisser,
      planningVueEtudiante,
      planningFormulaire,
      planningConfirmation,
    ],
  },
  {
    slug: "bouquet",
    titre: "Bouquet",
    description:
      "Tape ton prénom, chaque lettre devient une fleur, et ton bouquet se compose sous tes yeux.",
    tags: ["React", "Vite", "Tailwind CSS", "Animations CSS"],
    demo: "https://bouquet-fleurnom.netlify.app/",
    image: fleure,
    github: "https://github.com/FerielBenatsi/Bouquet-.git",
    annee: "2026",
    role: "Conception et développement",
    equipe: "Projet solo",
    contexte:
      "Projet personnel, pensé pour être partagé. L'idée : un cadeau simple et personnel, que chacun peut créer avec son prénom en quelques secondes, puis envoyer à ses proches ou poster en story.",
    fonctionnalites: [
      "Clavier AZERTY illustré : chaque touche affiche la fleur de sa lettre",
      "Chaque lettre tapée ajoute une fleur au bouquet, avec une animation d'éclosion",
      "Bouquet disposé en éventail, avec six rubans au choix",
      "Téléchargement du bouquet en image, prêt à partager en story",
      "Interface responsive, pensée d'abord pour le téléphone",
    ],
    defis:
      "Garder un joli bouquet quelle que soit la longueur du prénom : chaque fleur prend une position, un angle et un ordre de superposition prédéfinis en éventail, et la base des tiges remonte quand on ajoute un ruban. L'animation d'éclosion est placée sur un élément intérieur, pour ne pas écraser la rotation de la fleur.",
    captures: [],
  },
  {
    slug: "huffman-dynamique",
    titre: "Huffman dynamique",
    description:
      "Un compresseur de texte sans perte qui construit son arbre de Huffman à la volée, en une seule lecture du fichier.",
    tags: ["Python", "Algorithmique", "Compression", "Arbres", "Bash"],
    github: "https://github.com/FerielBenatsi/algav_huff.git",
    annee: "2025 – 2026",
    role: "Développement de l'algorithme et tests",
    equipe: "Équipe de 2",
    contexte:
      "Projet de l'UE ALGAV (Master 1 STL, Sorbonne Université). Le Huffman classique lit le texte deux fois : une pour compter les fréquences, une pour coder. La version dynamique fait les deux en même temps : l'arbre évolue à chaque caractère, et le décompresseur le reconstruit à l'identique sans qu'on ait à le lui transmettre.",
    fonctionnalites: [
      "Arbre de Huffman adaptatif mis à jour à chaque caractère, avec une feuille spéciale pour les symboles encore jamais vus",
      "Lecture et écriture au bit près, sans aucune dépendance externe",
      "Commandes compresser et decompresser, compatibles UTF-8 (accents, émojis)",
      "Banc d'essai automatique : génération de fichiers (aléatoires uniformes, loi de Zipf, biaisés, code source), puis compression, décompression et vérification d'intégrité",
      "Analyse des résultats : taux de compression et temps selon la taille et la distribution des caractères",
    ],
    defis:
      "Préserver la propriété de l'arbre adaptatif à chaque mise à jour : les poids doivent rester croissants dans l'ordre de numérotation (de gauche à droite, de bas en haut), ce qui impose de trouver le bon nœud à échanger avant chaque incrément. Le moindre écart entre compresseur et décompresseur corrompt tout le fichier, d'où la vérification d'intégrité systématique sur chaque test.",
    captures: [],
  },
  {
    slug: "blink",
    titre: "Blink",
    description:
      "Une marketplace de mode où chaque client peut aussi ouvrir sa boutique et vendre ses propres articles.",
    tags: ["UML", "React", "Node.js", "Express", "Figma", "SQL"],
    image: blinkAccueil,
    annee: "2024 – 2025",
    role: "design conception, développement frontend",
    equipe: "Équipe de 3",
    github: "https://github.com/FerielBenatsi/Blink-.git",
    behance:
      "https://www.behance.net/gallery/231700797/Find-your-style-in-a-blink-E-commerce-UI-Design",
    contexte:
      "Projet du module Méthodes de conception (Master 1 Génie logiciel, Université de Béjaïa). Le but : suivre tout le processus UML avec un atelier de génie logiciel, des cas d'utilisation jusqu'au diagramme de classes de conception, puis générer la base de données et réaliser les interfaces.",
    fonctionnalites: [
      "Catalogue avec recherche, favoris, commentaires et signalement d'articles",
      "Panier et paiement par carte simulé, avec gestion des erreurs (champs invalides, paiement refusé)",
      "Boutique personnelle : un client peut devenir vendeur et gérer ses articles et ses commandes",
      "Tableau de bord admin : vendeurs et commissions, clients, commentaires et signalements",
    ],
    defis:
      "Modéliser des rôles qui se recoupent : un client peut ouvrir sa boutique et l'administrateur peut aussi vendre. Il a fallu en tenir compte dans les cas d'utilisation comme dans le diagramme de classes de conception.",
    captures: [blinkArticle, blinkAdmin, blinkBoutique],
  },
  {
    slug: "fixit",
    titre: "Fix'it",
    description:
      "Une plateforme pour trouver un artisan de confiance près de chez soi, et pour les artisans, se faire connaître.",
    tags: ["UML", "React", "Node.js", "Express", "Figma", "SQL"],
    image: fixitAccueil,
    github: "https://github.com/FerielBenatsi/fixit.git",
    annee: "2024 – 2025",
    role: "design conception, développement frontend",
    equipe: "Équipe de 4",
    contexte:
      "Le secteur artisanal repose encore beaucoup sur le bouche-à-oreille : le client a du mal à trouver vite un artisan compétent et disponible, et l'artisan à se rendre visible au-delà de son quartier. Fix'it centralise la recherche et la mise en relation, avec des profils détaillés et des avis vérifiés.",
    fonctionnalites: [
      "Recherche d'artisans par domaine, région et note",
      "Profils détaillés : compétences, tarifs horaires, zones couvertes, disponibilités et galerie de travaux",
      "Demandes de prestation suivies (acceptée, refusée, en attente) et rappel la veille du rendez-vous",
      "Avis de 1 à 5 étoiles, avec commentaire et photos",
    ],
    defis:
      "Concevoir pour deux publics aux attentes opposées : le client veut trouver vite et pouvoir faire confiance, l'artisan veut se démarquer. Les niveaux d'artisan (confirmé, professionnel, expert), les compétences affichées et les avis vérifiés répondent aux deux à la fois.",
    captures: [fixitArtisans, fixitOutilsAvis],
  },
];

export const parcours = [
  {
    periode: "2026 – 2027",
    titre: "Master 2 Informatique, parcours Science et Technologie du Logiciel",
    lieu: "Sorbonne Université - Paris",
  },
  {
    periode: "2025 – 2026",
    titre: "Master 1 Informatique, parcours Science et Technologie du Logiciel",
    lieu: "Sorbonne Université - Paris",
  },
  {
    periode: "2024 – 2025",
    titre: "Master 1 Informatique, Génie Logiciel",
    lieu: "Université de Bejaia - Algérie",
  },
  {
    periode: "2021 – 2024",
    titre: "Licence en Informatique, Systeme d'information",
    lieu: "Université de Bejaia - Algérie",
  },
];

export const certificats = [
  // {
  //   titre: "Nom du certificat",
  //   organisme: "Organisme",
  //   date: "2026",
  //   image: "/certificats/nom.jpg",  // aperçu (facultatif)
  //   lien: "/certificats/nom.pdf",
  // },
];

export const dessins = [
  {
    src: dessinNympheas,
    titre: "Nymphéas",
    technique: "Acrylique sur toile",
    annee: "2026",
  },
  { src: dessinKois, titre: "Les koïs", technique: "Acrylique sur toile" },
  { src: dessinColibris, titre: "Colibris", technique: "Acrylique sur toile" },
  { src: dessinCygnes, titre: "Les cygnes", technique: "Acrylique sur toile" },
  { src: dessinAbeille, titre: "L'abeille", technique: "Acrylique sur toile" },
  { src: dessinLys, titre: "Lys orangé", technique: "Acrylique sur toile" },
];
