import type { Question } from "../types/quiz";

/**
 * Questions du quiz « IA ou pas IA ? ».
 *
 * Convention sur les impacts (variation du risque de remplacement) :
 *   - réponse optimale   : replaceability négatif (le risque baisse)
 *   - réponse risquée    : replaceability +15
 *   - réponse grave      : replaceability +20 à +25
 *   - réponse peu risquée: replaceability +10
 */
export const questions: Question[] = [
  {
    id: "q-remplacer-manager",
    scenario: "L'IA peut-elle remplacer totalement un manager ?",
    assistantHint: "Réfléchissez aux missions qui nécessitent de l'humain : écoute, arbitrage, leadership.",
    answers: [
      {
        id: "a",
        label: "Oui, totalement",
        impact: { replaceability: 20 },
        feedback:
          "Attention. Penser qu'une IA peut remplacer totalement un manager est une vision très réductrice du management. La prise de décision, l'accompagnement des collaborateurs, la gestion des conflits et le leadership restent des responsabilités humaines.",
      },
      {
        id: "b",
        label: "Non",
        isOptimal: true,
        impact: { replaceability: -10 },
        feedback: "Exact. L'IA peut assister un manager dans certaines tâches, mais elle ne remplace ni son jugement, ni sa responsabilité, ni sa capacité à accompagner et fédérer une équipe.",
      },
      {
        id: "c",
        label: "Oui, dans les grandes entreprises",
        impact: { replaceability: 10 },
        feedback:
          "L'IA peut être utilisée dans tous les types d'organisations. Ce n'est pas la taille de l'entreprise qui détermine sa capacité à remplacer un manager, mais la nature profondément humaine du management.",
      },
    ],
  },
  {
    id: "q-donnees-confidentielles",
    scenario: "Peut-on partager des données confidentielles d'entreprise dans une IA publique ?",
    assistantHint: "Pensez aux règles de confidentialité et à la protection des données.",
    answers: [
      {
        id: "a",
        label: "Oui, sans problème",
        impact: { replaceability: 25 },
        feedback:
          "Risque élevé. Partager librement des données confidentielles dans une IA publique peut exposer des informations stratégiques, clients ou RH. C'est une mauvaise pratique à éviter absolument.",
      },
      {
        id: "b",
        label: "Non",
        isOptimal: true,
        impact: { replaceability: -10 },
        feedback:
          "Exact. Les données sensibles ou confidentielles ne doivent pas être partagées dans une IA publique sans validation préalable et sans respecter les règles de sécurité de l'entreprise.",
      },
      {
        id: "c",
        label: "Oui, s'il s'agit de courts extraits",
        impact: { replaceability: 15 },
        feedback: "La longueur d'un document n'a aucun impact sur sa confidentialité. Même un extrait contenant des informations sensibles peut représenter un risque.",
      },
    ],
  },
  {
    id: "q-avantage-ia",
    scenario: "Quel est le principal avantage de l'IA au travail ?",
    assistantHint: "Cherchez la réponse qui améliore votre efficacité sans remplacer votre rôle.",
    answers: [
      {
        id: "a",
        label: "Remplacer les collaborateurs",
        impact: { replaceability: 20 },
        feedback:
          "L'IA transforme certains métiers mais son objectif principal est d'assister les collaborateurs, pas de supprimer tous les emplois. Cette perception peut conduire à une mauvaise compréhension de son rôle réel.",
      },
      {
        id: "b",
        label: "Supprimer les réunions d'équipe",
        impact: { replaceability: 10 },
        feedback: "Certaines réunions peuvent être mieux préparées grâce à l'IA, mais l'outil n'a pas vocation à remplacer les échanges humains et la collaboration.",
      },
      {
        id: "c",
        label: "Faire gagner du temps sur certaines tâches",
        isOptimal: true,
        impact: { replaceability: -10 },
        feedback:
          "Exact. L'IA est particulièrement utile pour accélérer certaines tâches, automatiser des actions répétitives et permettre aux managers de se concentrer sur des activités à plus forte valeur ajoutée.",
      },
    ],
  },
  {
    id: "q-fiabilite-reponse",
    scenario: "Une réponse générée par une IA est toujours fiable.",
    assistantHint: "Une IA peut produire des erreurs ou inventer des informations. Que faut-il en conclure ?",
    answers: [
      {
        id: "a",
        label: "Vrai",
        impact: { replaceability: 20 },
        feedback:
          "Vigilance. Faire confiance systématiquement à une IA est risqué. Elle peut produire des erreurs, des biais ou des informations inventées. Un manager doit toujours conserver un regard critique.",
      },
      {
        id: "b",
        label: "Faux",
        isOptimal: true,
        impact: { replaceability: -10 },
        feedback: "Exact. Une réponse IA doit toujours être analysée et vérifiée avant utilisation. L'esprit critique reste indispensable.",
      },
    ],
  },
  {
    id: "q-usage-adapte",
    scenario: "Quel usage de l'IA est le plus adapté pour un manager ?",
    assistantHint: "Cherchez l'utilisation qui assiste le manager sans prendre une décision à sa place.",
    answers: [
      {
        id: "a",
        label: "Générer un compte rendu de réunion",
        isOptimal: true,
        impact: { replaceability: -10 },
        feedback: "Exact. La rédaction de synthèses ou de comptes rendus est un excellent exemple d'utilisation de l'IA pour gagner du temps sans déléguer la décision.",
      },
      {
        id: "b",
        label: "Prendre seule les décisions RH",
        impact: { replaceability: 25 },
        feedback: "Risque majeur. Les décisions RH ont un impact direct sur les personnes et engagent la responsabilité du manager. Elles ne doivent jamais être prises uniquement par une IA.",
      },
      {
        id: "c",
        label: "Attribuer seule les évaluations des collaborateurs",
        impact: { replaceability: 15 },
        feedback: "L'évaluation des collaborateurs nécessite du contexte, de l'équité et du discernement. L'IA peut assister l'analyse mais ne doit pas attribuer seule des évaluations.",
      },
    ],
  },
  {
    id: "q-reflexe-reponse",
    scenario: "Quel réflexe faut-il avoir après une réponse IA ?",
    assistantHint: "L'IA vous aide, mais qui décide ?",
    answers: [
      {
        id: "a",
        label: "L'utiliser directement",
        impact: { replaceability: 20 },
        feedback: "Attention. Utiliser directement une réponse sans vérification peut conduire à diffuser des erreurs ou à prendre de mauvaises décisions.",
      },
      {
        id: "b",
        label: "La vérifier",
        isOptimal: true,
        impact: { replaceability: -10 },
        feedback: "Exact. Vérifier les informations, les sources et la cohérence d'une réponse est une bonne pratique essentielle.",
      },
      {
        id: "c",
        label: "La supprimer systématiquement",
        impact: { replaceability: 10 },
        feedback: "Supprimer systématiquement les réponses prive de l'intérêt de l'outil. L'objectif est d'exploiter l'IA avec discernement, pas de l'ignorer.",
      },
    ],
  },
  {
    id: "q-utilite-ia",
    scenario: "L'IA est particulièrement utile pour :",
    assistantHint: "Quelle activité apporte le plus de valeur à automatiser ?",
    answers: [
      {
        id: "a",
        label: "Automatiser des tâches répétitives",
        isOptimal: true,
        impact: { replaceability: -10 },
        feedback: "Exact. L'automatisation des tâches chronophages est l'un des principaux bénéfices de l'IA en entreprise.",
      },
      {
        id: "b",
        label: "Remplacer les échanges humains",
        impact: { replaceability: 15 },
        feedback: "Les échanges humains sont essentiels au management. L'IA peut les enrichir mais ne doit pas s'y substituer.",
      },
      {
        id: "c",
        label: "Éviter le travail d'équipe",
        impact: { replaceability: 20 },
        feedback: "Le travail d'équipe est un levier fondamental de performance. Considérer l'IA comme un moyen d'éviter la collaboration va à l'encontre des bonnes pratiques managériales.",
      },
    ],
  },
  {
    id: "q-risque-exces",
    scenario: "Quel est un risque lié à l'utilisation excessive de l'IA ?",
    assistantHint: "Que peut-on perdre lorsqu'on délègue trop de réflexion ?",
    answers: [
      {
        id: "a",
        label: "Développer son esprit critique",
        impact: { replaceability: 10 },
        feedback: "Développer son esprit critique est plutôt un bénéfice recherché. Le véritable risque est de déléguer progressivement sa réflexion à l'outil.",
      },
      {
        id: "b",
        label: "Devenir dépendant des outils",
        isOptimal: true,
        impact: { replaceability: -10 },
        feedback: "Exact. Une utilisation excessive peut réduire l'autonomie, l'esprit critique et la capacité à analyser par soi-même.",
      },
      {
        id: "c",
        label: "Améliorer sa mémoire",
        impact: { replaceability: 10 },
        feedback: "Améliorer sa mémoire n'est pas un risque. Cette réponse montre surtout une confusion sur les effets réels de l'utilisation de l'IA.",
      },
    ],
  },
  {
    id: "q-emotions",
    scenario: "Une IA comprend-elle réellement les émotions humaines ?",
    assistantHint: "L'IA peut-elle ressentir des émotions ?",
    answers: [
      {
        id: "a",
        label: "Oui, mieux qu'un humain",
        impact: { replaceability: 20 },
        feedback:
          "Attention. Considérer qu'une IA comprend mieux les émotions qu'un humain revient à surestimer fortement ses capacités. L'empathie, l'écoute et l'intelligence émotionnelle restent des compétences humaines essentielles.",
      },
      {
        id: "b",
        label: "Oui, totalement",
        impact: { replaceability: 15 },
        feedback: "L'IA peut donner l'impression de comprendre les émotions, mais elle analyse des modèles de langage sans ressentir ce qu'elle exprime.",
      },
      {
        id: "c",
        label: "Non, pas vraiment",
        isOptimal: true,
        impact: { replaceability: -10 },
        feedback: "Exact. L'IA peut détecter certains indices émotionnels ou reproduire des formulations empathiques, mais elle ne ressent pas les émotions.",
      },
    ],
  },
  {
    id: "q-prompt-pertinent",
    scenario: "Pour obtenir une réponse plus pertinente d'une IA, quelle est la meilleure approche ?",
    assistantHint: "L'IA répond mieux lorsqu'elle comprend clairement ce que vous attendez d'elle.",
    answers: [
      {
        id: "a",
        label: 'Écrire une demande vague : "Prépare ma réunion"',
        impact: { replaceability: 15 },
        feedback: "Une demande trop vague limite fortement la pertinence des réponses. Pour tirer parti de l'IA, il est important d'expliquer le contexte, l'objectif et le résultat attendu.",
      },
      {
        id: "b",
        label: "Poser la même question plusieurs fois sans précision",
        impact: { replaceability: 10 },
        feedback: "Répéter la même question ne garantit pas de meilleurs résultats. Il est généralement plus efficace d'ajouter du contexte ou de préciser votre besoin.",
      },
      {
        id: "c",
        label: "Fournir du contexte, un objectif et des détails sur la situation",
        isOptimal: true,
        impact: { replaceability: -10 },
        feedback:
          "Exact. Plus votre demande est précise et contextualisée, plus l'IA pourra produire une réponse adaptée à votre besoin. La qualité du résultat dépend souvent de la qualité des instructions fournies.",
      },
    ],
  },
];
