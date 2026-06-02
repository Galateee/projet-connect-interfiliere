/**
 * Contenu de la page d'accueil (START).
 */

export type Stat = {
  value: string;
  label: string;
  source: string;
};

export const stats: Stat[] = [
  {
    value: "40%",
    label: "des tâches managériales pourraient être partiellement automatisées",
    source: "— McKinsey, 2024",
  },
  {
    value: "85M",
    label: "d'emplois transformés par l'IA d'ici 2030 dans le monde",
    source: "— WEF, 2023",
  },
  {
    value: "1 sur 3",
    label: "des managers ne sait pas comment travailler efficacement avec l'IA",
    source: "— Deloitte, 2024",
  },
];

/** Clé d'icône Font Awesome, mappée vers l'icône dans le composant. */
export type StepIcon = "clipboard" | "bolt" | "chart";

export type Step = {
  icon: StepIcon;
  number: string;
  title: string;
  description: string;
};

export const steps: Step[] = [
  {
    icon: "clipboard",
    number: "01",
    title: "Lisez la situation",
    description: "Chaque question décrit un cas concret issu du quotidien des managers. Des dilemmes réels, sans bonne réponse évidente.",
  },
  {
    icon: "bolt",
    number: "02",
    title: "Choisissez votre réponse",
    description: "4 réponses possibles. Certaines font monter la jauge IA — d'autres prouvent que votre poste est bien entre vos mains.",
  },
  {
    icon: "chart",
    number: "03",
    title: "Découvrez votre score",
    description: "La jauge révèle votre niveau de risque. Plus elle est haute, plus l'IA se frotte les mains. (C'est humouristique. Peut-être.)",
  },
];

export type GaugeTier = {
  range: string;
  level: string;
  description: string;
  color: "green" | "amber" | "red";
};

export const gaugeTiers: GaugeTier[] = [
  {
    range: "0-30%",
    level: "Irremplaçable",
    description: "Votre jugement humain est votre force",
    color: "green",
  },
  {
    range: "30-60%",
    level: "Vulnérable",
    description: "Des tâches pourraient être automatisées",
    color: "amber",
  },
  {
    range: "> 60%",
    level: "En danger",
    description: "L'IA vous fait de l'œil (et pas poliment)",
    color: "red",
  },
];

export type Testimonial = {
  score: number;
  quote: string;
  author: string;
  role: string;
};

export const testimonials: Testimonial[] = [
  {
    score: 90,
    quote: "J'ai eu 90% à la jauge. Mon équipe ne m'a plus regardé de la même façon depuis.",
    author: "Bertrand M.",
    role: "Directeur Commercial",
  },
  {
    score: 20,
    quote: "J'ai eu 90% à la jauge. Mon équipe ne m'a plus regardé de la même façon depuis.",
    author: "Bertrand M.",
    role: "Directeur Commercial",
  },
  {
    score: 60,
    quote: "J'ai eu 90% à la jauge. Mon équipe ne m'a plus regardé de la même façon depuis.",
    author: "Bertrand M.",
    role: "Directeur Commercial",
  },
];
