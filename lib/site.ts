// =============================================================
//  ZENTRALE PRAXIS-KONFIGURATION
//  Alle Inhalte an einem Ort – für jede neue Praxis nur hier anpassen.
//  (Demo-Daten einer fiktiven Praxis "Lumident – Zahnärztinnen am See")
// =============================================================

export const site = {
  name: "Lumident",
  fullName: "Lumident – Zahnärztinnen am See",
  claim: "Zahnmedizin auf höchstem Niveau.",
  url: "https://www.lumident.example",
  locale: "de-CH",

  // NAP – Name / Adresse / Telefon (für Local SEO entscheidend)
  contact: {
    phone: "+41 44 123 45 67",
    phoneHref: "+41441234567",
    email: "praxis@lumident.example",
    street: "Seestrasse 142",
    zip: "8002",
    city: "Zürich",
    country: "Schweiz",
    countryCode: "CH",
    geo: { lat: 47.355, lng: 8.536 },
    mapQuery: "Seestrasse 142, 8002 Zürich",
  },

  hours: [
    { day: "Montag", time: "08:00 – 18:00" },
    { day: "Dienstag", time: "08:00 – 18:00" },
    { day: "Mittwoch", time: "08:00 – 18:00" },
    { day: "Donnerstag", time: "08:00 – 20:00" },
    { day: "Freitag", time: "08:00 – 16:00" },
    { day: "Samstag", time: "Nach Vereinbarung" },
    { day: "Sonntag", time: "Geschlossen" },
  ],

  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
  },
} as const;

export type NavItem = { label: string; href: string };

export const nav: NavItem[] = [
  { label: "Start", href: "/" },
  { label: "Leistungen", href: "/leistungen" },
  { label: "Praxis & Team", href: "/team" },
  { label: "Kontakt", href: "/kontakt" },
];

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  points: string[];
  icon: IconName;
};

export type IconName =
  | "tooth"
  | "sparkle"
  | "implant"
  | "shield"
  | "child"
  | "align"
  | "emergency"
  | "scan";

export const services: Service[] = [
  {
    slug: "prophylaxe",
    title: "Prophylaxe & Dentalhygiene",
    short: "Professionelle Reinigung für ein Leben lang gesunde Zähne.",
    description:
      "Vorsorge ist die beste Behandlung. Unsere Dentalhygienikerinnen entfernen schonend Beläge und Verfärbungen und zeigen Ihnen, wie Sie Ihre Zähne zuhause optimal pflegen.",
    points: [
      "Professionelle Zahnreinigung",
      "Individuelles Vorsorgekonzept",
      "Schonende Air-Flow-Politur",
    ],
    icon: "shield",
  },
  {
    slug: "aesthetik",
    title: "Ästhetische Zahnmedizin",
    short: "Ein strahlendes Lächeln, das zu Ihnen passt.",
    description:
      "Von professionellem Bleaching bis zu hauchdünnen Veneers: Wir gestalten Ihr Lächeln natürlich und harmonisch – mit Materialien von höchster Qualität.",
    points: ["Bleaching / Aufhellung", "Veneers & Keramik", "Zahnformkorrekturen"],
    icon: "sparkle",
  },
  {
    slug: "implantologie",
    title: "Implantologie",
    short: "Festsitzender Zahnersatz, der sich anfühlt wie eigene Zähne.",
    description:
      "Moderne Implantate ersetzen verlorene Zähne dauerhaft und schonen die Nachbarzähne. Wir planen jeden Eingriff digital und millimetergenau.",
    points: ["3D-gestützte Planung", "Einzelzahn- & Vollimplantate", "Knochenaufbau"],
    icon: "implant",
  },
  {
    slug: "kieferorthopaedie",
    title: "Unsichtbare Zahnkorrektur",
    short: "Gerade Zähne mit transparenten Alignern – diskret im Alltag.",
    description:
      "Mit modernen, durchsichtigen Schienen korrigieren wir Fehlstellungen, ohne dass es jemand bemerkt. Komfortabel, herausnehmbar und präzise gesteuert.",
    points: ["Transparente Aligner", "Digitaler Behandlungsplan", "Für Erwachsene & Jugendliche"],
    icon: "align",
  },
  {
    slug: "kinderzahnmedizin",
    title: "Kinderzahnmedizin",
    short: "Entspannte Termine für die Kleinsten – ganz ohne Angst.",
    description:
      "Wir nehmen uns Zeit, damit Ihr Kind den Zahnarztbesuch positiv erlebt. Spielerisch, geduldig und mit viel Einfühlungsvermögen.",
    points: ["Kindgerechte Betreuung", "Versiegelung & Vorsorge", "Angstfreie Atmosphäre"],
    icon: "child",
  },
  {
    slug: "notfall",
    title: "Zahnärztlicher Notfall",
    short: "Akute Schmerzen? Wir sind schnell für Sie da.",
    description:
      "Bei akuten Beschwerden erhalten Sie kurzfristig einen Termin. Rufen Sie uns an – wir kümmern uns umgehend um Ihre Behandlung.",
    points: ["Termine am selben Tag", "Schmerzbehandlung", "Telefonische Soforthilfe"],
    icon: "emergency",
  },
];

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  image: string;
};

export const team: TeamMember[] = [
  {
    name: "Dr. med. dent. Sarah Lindner",
    role: "Praxisinhaberin · Implantologie",
    bio: "Über 15 Jahre Erfahrung in ästhetischer Zahnmedizin und Implantologie. Ihr Anspruch: Behandlungen, die man kaum spürt und lange hält.",
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Dr. med. dent. Elena Vogt",
    role: "Zahnärztin · Kieferorthopädie",
    bio: "Spezialistin für unsichtbare Zahnkorrekturen. Plant jede Behandlung digital und begleitet Patientinnen und Patienten Schritt für Schritt.",
    image: "/images/team-vogt.png",
  },
  {
    name: "Lena Frei",
    role: "Dipl. Dentalhygienikerin",
    bio: "Mit ruhiger Hand und viel Geduld sorgt sie für gründliche Prophylaxe und ein rundum gutes Gefühl bei jedem Besuch.",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Nina Keller",
    role: "Praxismanagerin",
    bio: "Sorgt dafür, dass von der Terminbuchung bis zur Abrechnung alles reibungslos läuft – Ihre erste Ansprechperson am Empfang.",
    image: "/images/team-keller.png",
  },
];

export type Testimonial = { quote: string; author: string; detail: string };

export const testimonials: Testimonial[] = [
  {
    quote:
      "Ich hatte jahrelang Angst vor dem Zahnarzt. Hier wurde mir diese Angst genommen – ruhig, ehrlich und absolut schmerzfrei.",
    author: "Carla M.",
    detail: "Patientin seit 2021",
  },
  {
    quote:
      "Mein neues Implantat fühlt sich an wie ein eigener Zahn. Die Beratung war top und alles lief genau wie besprochen.",
    author: "Thomas R.",
    detail: "Implantat-Patient",
  },
  {
    quote:
      "Endlich gerade Zähne, ohne dass es jemand bemerkt hat. Das Team ist herzlich und super organisiert.",
    author: "Jasmin W.",
    detail: "Aligner-Behandlung",
  },
];

export const faqs = [
  {
    q: "Nehmen Sie neue Patientinnen und Patienten auf?",
    a: "Ja, wir freuen uns über neue Patientinnen und Patienten. Vereinbaren Sie einfach telefonisch oder über das Kontaktformular einen ersten Termin.",
  },
  {
    q: "Werden die Kosten von der Krankenkasse übernommen?",
    a: "Bei der Grundversicherung sind zahnärztliche Behandlungen in der Schweiz nur in bestimmten Fällen gedeckt. Wir beraten Sie transparent und erstellen vorab einen klaren Kostenvoranschlag.",
  },
  {
    q: "Was mache ich bei akuten Zahnschmerzen?",
    a: "Rufen Sie uns an – bei akuten Beschwerden erhalten Sie in der Regel noch am selben Tag einen Termin. Ausserhalb der Öffnungszeiten finden Sie auf dieser Seite den Notfalldienst.",
  },
  {
    q: "Bieten Sie auch angstfreie Behandlungen an?",
    a: "Absolut. Wir nehmen uns Zeit, erklären jeden Schritt und bieten auf Wunsch zusätzliche Massnahmen zur Entspannung an. Viele unserer Patientinnen und Patienten kommen genau deshalb zu uns.",
  },
];

export const stats = [
  { value: "15+", label: "Jahre Erfahrung" },
  { value: "12.000+", label: "Behandlungen" },
  { value: "4,9★", label: "Google-Bewertung" },
  { value: "100%", label: "digitale Planung" },
];
