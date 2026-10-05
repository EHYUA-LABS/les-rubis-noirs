/* ==========================================================================
   Données de démonstration — contenus FICTIFS pour la maquette.
   En production, ces données proviendront du CMS (invités, épisodes, articles).
   ========================================================================== */

window.RN = window.RN || {};

RN.guests = [
  {
    id: "aminata-diallo",
    name: "Aminata Diallo",
    role: "Avocate d'affaires",
    sector: "Droit",
    city: "Paris, France",
    tone: "tone-ruby",
    quote: "On m'a souvent dit que ce métier n'était pas pour moi. J'en ai fait ma meilleure raison d'y aller.",
    themes: ["Études", "Carrière", "Leadership"],
    bio: "Associée dans un cabinet international, Aminata Diallo accompagne des groupes industriels dans leurs opérations de fusion-acquisition entre l'Europe et l'Afrique de l'Ouest.",
    parcours: "Fille d'un chauffeur de taxi et d'une aide-soignante, Aminata découvre le droit à 15 ans lors d'un stage d'observation au tribunal de Bobigny. Elle ne quittera plus cette idée : comprendre les règles pour mieux les faire bouger.",
    studies: ["Master 2 Droit des affaires — Université Paris 1 Panthéon-Sorbonne", "LL.M. — Columbia Law School", "CAPA — École de formation du barreau de Paris"],
    timeline: [
      { year: "2009", title: "Prête serment", text: "Entrée au barreau de Paris." },
      { year: "2012", title: "New York", text: "LL.M. puis deux ans dans un cabinet new-yorkais." },
      { year: "2016", title: "Retour à Paris", text: "Rejoint le pôle M&A d'un cabinet international." },
      { year: "2022", title: "Associée", text: "Première associée noire de l'histoire du bureau parisien." }
    ],
    episode: { n: 12, title: "Faire bouger les règles de l'intérieur", date: "2026-09-18", duration: "58 min",
      summary: "Du tribunal de Bobigny aux grandes opérations internationales : Aminata raconte le doute, la méthode et la persévérance." }
  },
  {
    id: "kwame-mensah",
    name: "Kwame Mensah",
    role: "Ingénieur aérospatial",
    sector: "Ingénierie",
    city: "Toulouse, France",
    tone: "tone-brown",
    quote: "Les maths m'ont donné une langue que personne ne pouvait me retirer.",
    themes: ["Études", "Transmission"],
    bio: "Responsable de programme dans l'industrie spatiale, Kwame Mensah pilote des équipes qui conçoivent les systèmes de propulsion des satellites de demain.",
    parcours: "Arrivé d'Accra à 11 ans sans parler un mot de français, Kwame trouve dans les mathématiques un terrain neutre où il peut briller. Prépa, école d'ingénieurs, puis l'aéronautique.",
    studies: ["Classe préparatoire MPSI/MP — Lycée Pierre-de-Fermat", "Diplôme d'ingénieur — ISAE-SUPAERO"],
    timeline: [
      { year: "2008", title: "ISAE-SUPAERO", text: "Intègre l'école après deux ans de prépa." },
      { year: "2011", title: "Premier poste", text: "Ingénieur propulsion chez un motoriste." },
      { year: "2019", title: "Chef de programme", text: "Pilote une équipe de 40 ingénieurs." }
    ],
    episode: { n: 11, title: "Viser les étoiles, littéralement", date: "2026-09-04", duration: "52 min",
      summary: "Langue, exil, prépa : comment Kwame a transformé chaque obstacle en équation à résoudre." }
  },
  {
    id: "fatou-ndiaye",
    name: "Dr Fatou Ndiaye",
    role: "Chirurgienne cardiaque",
    sector: "Santé",
    city: "Lyon, France",
    tone: "tone-wine",
    quote: "Au bloc, personne ne te demande d'où tu viens. On te demande si tu es prête.",
    themes: ["Études", "Carrière", "Leadership"],
    bio: "Chirurgienne cardiaque dans un CHU, Fatou Ndiaye est aussi engagée dans la formation des internes et le mentorat de jeunes lycéennes.",
    parcours: "Douze années d'études, des gardes à rallonge et une conviction : la médecine doit ressembler à la société qu'elle soigne.",
    studies: ["Doctorat en médecine — Université Claude Bernard Lyon 1", "DES de chirurgie thoracique et cardiovasculaire"],
    timeline: [
      { year: "2006", title: "PACES", text: "Réussit le concours au second essai." },
      { year: "2015", title: "Internat", text: "Choisit la chirurgie cardiaque." },
      { year: "2021", title: "Praticienne hospitalière", text: "Rejoint l'équipe de chirurgie cardiaque du CHU." }
    ],
    episode: { n: 10, title: "Douze ans pour un geste", date: "2026-08-21", duration: "64 min",
      summary: "Le temps long des études de médecine, la charge mentale et la joie intacte du métier." }
  },
  {
    id: "yannick-ebongue",
    name: "Yannick Ebongue",
    role: "Fondateur d'une fintech",
    sector: "Entrepreneuriat",
    city: "Abidjan · Paris",
    tone: "tone-umber",
    quote: "L'échec n'est pas une étape du parcours. C'est le parcours.",
    themes: ["Entrepreneuriat", "Carrière"],
    bio: "Yannick Ebongue a fondé une solution de paiement mobile utilisée dans six pays d'Afrique de l'Ouest et emploie aujourd'hui 120 personnes.",
    parcours: "Deux entreprises fermées avant la bonne. Yannick raconte sans fard l'argent perdu, les amitiés abîmées et ce qui l'a fait revenir.",
    studies: ["Bachelor — ESSEC Business School", "Programme Entrepreneurs — HEC Incubator"],
    timeline: [
      { year: "2013", title: "Première start-up", text: "Une plateforme de e-commerce, fermée au bout de 18 mois." },
      { year: "2016", title: "Deuxième tentative", text: "Un logiciel RH, revendu pour un euro symbolique." },
      { year: "2019", title: "La bonne", text: "Lancement de la solution de paiement mobile." },
      { year: "2025", title: "Série B", text: "Levée de fonds et expansion régionale." }
    ],
    episode: { n: 9, title: "Trois entreprises et une seule obsession", date: "2026-08-07", duration: "71 min",
      summary: "Ce que l'échec enseigne vraiment, et pourquoi Yannick a choisi de bâtir depuis Abidjan." }
  },
  {
    id: "mariam-kone",
    name: "Mariam Koné",
    role: "Diplomate",
    sector: "Institutions",
    city: "Bruxelles, Belgique",
    tone: "tone-ink",
    quote: "La diplomatie, c'est l'art d'écouter ce que l'autre ne dit pas.",
    themes: ["Carrière", "Société"],
    bio: "Conseillère au sein d'une représentation permanente auprès de l'Union européenne, Mariam Koné travaille sur les partenariats Europe–Afrique.",
    parcours: "Concours, mobilités et choix de vie : un parcours entre Bamako, Paris, Addis-Abeba et Bruxelles.",
    studies: ["Sciences Po Paris — Affaires internationales", "Institut national du service public (ex-ENA)"],
    timeline: [
      { year: "2012", title: "Concours", text: "Réussit le concours d'Orient." },
      { year: "2015", title: "Addis-Abeba", text: "Premier poste auprès de l'Union africaine." },
      { year: "2023", title: "Bruxelles", text: "Conseillère partenariats Europe–Afrique." }
    ],
    episode: { n: 8, title: "Parler au nom des autres", date: "2026-07-24", duration: "55 min",
      summary: "Les coulisses de la diplomatie, l'importance des concours et le prix de la mobilité." }
  },
  {
    id: "samuel-adjovi",
    name: "Samuel Adjovi",
    role: "Professeur d'économie",
    sector: "Recherche",
    city: "Montréal, Canada",
    tone: "tone-brown",
    quote: "Un diplôme ne te donne pas une place. Il te donne le droit de la réclamer.",
    themes: ["Études", "Transmission", "Société"],
    bio: "Professeur titulaire en économie du développement, Samuel Adjovi étudie l'impact de l'éducation sur la mobilité sociale.",
    parcours: "Du Bénin au Québec en passant par Toulouse, Samuel a construit une carrière de chercheur sur une question intime : qu'est-ce qui permet de changer de trajectoire ?",
    studies: ["Licence — Université d'Abomey-Calavi", "Doctorat — Toulouse School of Economics"],
    timeline: [
      { year: "2007", title: "Départ", text: "Bourse d'excellence pour poursuivre ses études en France." },
      { year: "2014", title: "Doctorat", text: "Thèse sur l'éducation et la mobilité sociale." },
      { year: "2020", title: "Montréal", text: "Professeur titulaire." }
    ],
    episode: { n: 7, title: "L'école comme ascenseur, vraiment ?", date: "2026-07-10", duration: "61 min",
      summary: "Un économiste face à sa propre histoire : ce que disent les données, et ce qu'elles taisent." }
  },
  {
    id: "grace-mbemba",
    name: "Grâce Mbemba",
    role: "Directrice financière",
    sector: "Finance",
    city: "Londres, Royaume-Uni",
    tone: "tone-ruby",
    quote: "Je ne demandais pas la permission. Je demandais des chiffres.",
    themes: ["Carrière", "Leadership"],
    bio: "Directrice financière d'un groupe de luxe coté, Grâce Mbemba est l'une des rares femmes noires à occuper ce poste au Royaume-Uni.",
    parcours: "Audit, banque d'affaires, puis la direction financière : un parcours de rigueur et de négociation, où chaque promotion s'est arrachée.",
    studies: ["Master Finance — NEOMA Business School", "Expertise comptable"],
    timeline: [
      { year: "2005", title: "Audit", text: "Débute dans un cabinet d'audit Big Four à Paris." },
      { year: "2011", title: "Londres", text: "Banque d'affaires, équipe fusions-acquisitions." },
      { year: "2024", title: "CFO", text: "Nommée directrice financière d'un groupe coté." }
    ],
    episode: { n: 6, title: "Le pouvoir des chiffres", date: "2026-06-26", duration: "49 min",
      summary: "Négocier son salaire, s'imposer en comité de direction, et rester soi-même." }
  },
  {
    id: "ibrahima-sow",
    name: "Ibrahima Sow",
    role: "Architecte",
    sector: "Architecture",
    city: "Dakar, Sénégal",
    tone: "tone-umber",
    quote: "Construire, c'est raconter une histoire à ceux qui viendront après nous.",
    themes: ["Entrepreneuriat", "Transmission", "Société"],
    bio: "Fondateur d'une agence d'architecture bioclimatique, Ibrahima Sow réinvente les matériaux traditionnels pour les villes africaines contemporaines.",
    parcours: "Formé à Paris, revenu à Dakar, Ibrahima a choisi de bâtir là où il a grandi — avec la terre, le bois et le climat.",
    studies: ["Diplôme d'architecte — ENSA Paris-Belleville", "Post-master Architecture & climat"],
    timeline: [
      { year: "2010", title: "Diplôme", text: "Architecte DPLG à Paris." },
      { year: "2014", title: "Retour", text: "Installation à Dakar." },
      { year: "2018", title: "Agence", text: "Création de son agence, 15 collaborateurs aujourd'hui." }
    ],
    episode: { n: 5, title: "Bâtir avec la terre", date: "2026-06-12", duration: "57 min",
      summary: "Revenir, entreprendre et faire de l'architecture un acte de transmission." }
  }
];

RN.articles = [
  { id: "choisir-sa-voie", title: "Choisir sa voie quand personne autour de soi ne l'a tracée", category: "Études", date: "2026-09-28", read: "7 min", tone: "tone-brown",
    excerpt: "Orientation, Parcoursup, prépa ou université : ce que nos invités auraient aimé savoir à 17 ans." },
  { id: "negocier-son-salaire", title: "Négocier son salaire : cinq leçons tirées de nos épisodes", category: "Carrière", date: "2026-09-21", read: "6 min", tone: "tone-ruby",
    excerpt: "Grâce, Aminata et Kwame partagent leurs méthodes pour oser demander — et obtenir." },
  { id: "echouer-pour-entreprendre", title: "Échouer, recommencer : l'entrepreneuriat sans filtre", category: "Entrepreneuriat", date: "2026-09-14", read: "8 min", tone: "tone-umber",
    excerpt: "Ce que les belles histoires de start-up oublient de raconter." },
  { id: "representation", title: "Pourquoi la représentation change les trajectoires", category: "Société", date: "2026-09-07", read: "9 min", tone: "tone-wine",
    excerpt: "On ne devient pas facilement ce que l'on n'a jamais vu. Enquête." },
  { id: "portrait-aminata", title: "Aminata Diallo, la règle et l'exception", category: "Parcours", date: "2026-08-31", read: "10 min", tone: "tone-ink",
    excerpt: "Portrait long format d'une avocate qui a fait de chaque refus un point de départ." },
  { id: "dix-phrases", title: "Dix phrases qu'on retient longtemps après l'écoute", category: "Inspiration", date: "2026-08-24", read: "4 min", tone: "tone-sand",
    excerpt: "Une sélection de citations de nos invités, à garder près de soi." }
];

RN.sectors = ["Droit", "Ingénierie", "Santé", "Entrepreneuriat", "Institutions", "Recherche", "Finance", "Architecture"];
RN.themes = ["Études", "Carrière", "Entrepreneuriat", "Leadership", "Transmission", "Société"];
RN.journalCats = ["Parcours", "Carrière", "Études", "Entrepreneuriat", "Société", "Inspiration"];

RN.formatDate = function (iso, lang) {
  const d = new Date(iso + "T12:00:00");
  return d.toLocaleDateString(lang === "en" ? "en-GB" : "fr-FR", { day: "numeric", month: "long", year: "numeric" });
};
RN.guest = (id) => RN.guests.find((g) => g.id === id);
RN.article = (id) => RN.articles.find((a) => a.id === id);
