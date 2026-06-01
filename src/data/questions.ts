import type { Question } from '../types/quiz'

/**
 * Questions issues de la fiche de cadrage (NEMOTRON, mai 2026).
 * À enrichir / réécrire par le PM + Comm avant le sprint final.
 *
 * Convention sur les impacts :
 *   - réponse "optimale" : autonomy +15, replaceability -10
 *   - réponse correcte mais passive : autonomy +5, replaceability 0
 *   - réponse risquée : autonomy -10, replaceability +15
 *   - réponse catastrophique : autonomy -15, replaceability +25
 */
export const questions: Question[] = [
  {
    id: 'q-compte-rendu',
    scenario:
      "Un collaborateur vous envoie un compte-rendu de réunion rédigé par une IA et vous demande de le transmettre immédiatement à un client.",
    prompt: 'Que faites-vous ?',
    assistantHint:
      "Pense au risque d'erreur factuelle dans une sortie IA. Que se passe-t-il si le client reçoit une information fausse signée de votre nom ?",
    answers: [
      {
        id: 'a',
        label: 'Je l’envoie directement.',
        impact: { replaceability: 25, autonomy: -15 },
        feedback: 'Pas de relecture = pas de filet de sécurité. La responsabilité reste la vôtre.',
      },
      {
        id: 'b',
        label: 'Je le vérifie avant envoi.',
        isOptimal: true,
        impact: { replaceability: -10, autonomy: 15 },
        feedback: 'Bon réflexe : l’IA propose, vous validez.',
      },
      {
        id: 'c',
        label: 'Je le régénère puis l’envoie.',
        impact: { replaceability: 15, autonomy: -10 },
        feedback: 'Régénérer ne corrige rien si vous ne lisez pas.',
      },
      {
        id: 'd',
        label: 'Je refuse de l’utiliser.',
        impact: { replaceability: 0, autonomy: 5 },
        feedback: 'Vous évitez le risque, mais vous passez à côté du gain de temps.',
      },
    ],
  },
  {
    id: 'q-role-manager',
    scenario: "Votre direction vous demande quel doit être le rôle de l'IA dans votre équipe.",
    prompt: 'Quel usage de l’IA correspond le mieux au rôle attendu du manager ?',
    assistantHint:
      "Le brief est clair : l'IA doit être un levier de performance, pas un substitut au manager. Quelle option respecte ce principe ?",
    answers: [
      {
        id: 'a',
        label: 'Laisser l’IA prendre toutes les décisions importantes.',
        impact: { replaceability: 25, autonomy: -15 },
        feedback: 'Si l’IA décide tout, qu’apportez-vous en plus ?',
      },
      {
        id: 'b',
        label: 'Utiliser l’IA comme aide à la décision tout en gardant un esprit critique.',
        isOptimal: true,
        impact: { replaceability: -10, autonomy: 15 },
        feedback: 'C’est exactement le positionnement attendu.',
      },
      {
        id: 'c',
        label: 'Supprimer tous les échanges humains.',
        impact: { replaceability: 25, autonomy: -15 },
        feedback: 'Le management est avant tout relationnel.',
      },
      {
        id: 'd',
        label: 'Automatiser l’intégralité du management.',
        impact: { replaceability: 25, autonomy: -15 },
        feedback: 'Vous vous rendez obsolète.',
      },
    ],
  },
  {
    id: 'q-donnees-sensibles',
    scenario: 'Vous voulez résumer un document RH confidentiel avec ChatGPT.',
    prompt: 'Pourquoi les données sensibles ne doivent-elles pas être partagées dans certaines IA ?',
    assistantHint:
      "Les modèles grand public peuvent réutiliser les données envoyées pour s'entraîner. Quelles conséquences sur la confidentialité de l'entreprise ?",
    answers: [
      {
        id: 'a',
        label: 'Parce qu’elles peuvent être stockées ou réutilisées.',
        isOptimal: true,
        impact: { replaceability: -10, autonomy: 15 },
        feedback: 'Exact. Vérifiez toujours la politique de confidentialité avant.',
      },
      {
        id: 'b',
        label: 'Parce que l’IA devient plus lente.',
        impact: { replaceability: 15, autonomy: -10 },
        feedback: 'Ce n’est pas le problème.',
      },
      {
        id: 'c',
        label: 'Parce que cela désactive internet.',
        impact: { replaceability: 25, autonomy: -15 },
        feedback: 'Non.',
      },
      {
        id: 'd',
        label: 'Parce que l’ordinateur peut surchauffer.',
        impact: { replaceability: 25, autonomy: -15 },
        feedback: 'Non.',
      },
    ],
  },
  {
    id: 'q-fiabilite',
    scenario: 'Vous recevez une analyse de marché générée par une IA en 30 secondes.',
    prompt: 'Quel réflexe faut-il avoir après une réponse IA ?',
    assistantHint:
      "Une IA peut halluciner. Quel comportement protège votre crédibilité de manager ?",
    answers: [
      {
        id: 'a',
        label: 'La copier directement.',
        impact: { replaceability: 25, autonomy: -15 },
        feedback: 'Vous engagez votre nom sans avoir vérifié.',
      },
      {
        id: 'b',
        label: 'La vérifier.',
        isOptimal: true,
        impact: { replaceability: -10, autonomy: 15 },
        feedback: 'Toujours croiser les sources avant de décider.',
      },
      {
        id: 'c',
        label: 'La supprimer.',
        impact: { replaceability: 0, autonomy: 0 },
        feedback: 'Vous évitez le risque mais perdez l’intérêt de l’outil.',
      },
    ],
  },
  {
    id: 'q-usage-adapte',
    scenario: 'Vous cherchez à intégrer l’IA dans votre routine de manager.',
    prompt: 'Quel usage de l’IA est le plus adapté pour un manager ?',
    assistantHint:
      "Pense aux tâches à faible valeur ajoutée qui peuvent être déléguées sans risque éthique ou RH.",
    answers: [
      {
        id: 'a',
        label: 'Générer un compte rendu de réunion.',
        isOptimal: true,
        impact: { replaceability: -10, autonomy: 15 },
        feedback: 'Tâche répétitive à fort gain de temps, peu de risque.',
      },
      {
        id: 'b',
        label: 'Prendre une décision RH seul.',
        impact: { replaceability: 25, autonomy: -15 },
        feedback: 'Les décisions RH engagent des humains. L’IA n’a pas ce contexte.',
      },
      {
        id: 'c',
        label: 'Noter automatiquement les salariés.',
        impact: { replaceability: 25, autonomy: -15 },
        feedback: 'Risque éthique et juridique majeur.',
      },
    ],
  },
  {
    id: 'q-dependance',
    scenario: "Depuis 3 mois vous utilisez l'IA pour tout : mails, rapports, décisions courantes.",
    prompt: 'Quel est un risque lié à l’utilisation excessive de l’IA ?',
    assistantHint: "Que se passe-t-il pour vos compétences propres si vous ne les pratiquez plus ?",
    answers: [
      {
        id: 'a',
        label: 'Développer son esprit critique.',
        impact: { replaceability: 15, autonomy: -10 },
        feedback: 'C’est l’inverse : trop d’IA atrophie l’esprit critique.',
      },
      {
        id: 'b',
        label: 'Devenir dépendant des outils.',
        isOptimal: true,
        impact: { replaceability: -10, autonomy: 15 },
        feedback: 'Exact. Garder un usage raisonné protège votre valeur.',
      },
      {
        id: 'c',
        label: 'Améliorer sa mémoire.',
        impact: { replaceability: 15, autonomy: -10 },
        feedback: 'Pas démontré.',
      },
    ],
  },
]
