# IA ou pas IA ? — Kit de sensibilisation IA pour managers

Application web d'auto-évaluation qui aide les **managers** à comprendre quand
l'intelligence artificielle est un atout et quand elle devient un risque de se
rendre _remplaçable_. À travers un quiz de 10 situations, l'utilisateur fait
évoluer une jauge de **« risque de remplacement par l'IA »** et reçoit un verdict
personnalisé ainsi qu'une orientation vers une formation.

> Projet interfilière YNOV — Groupe **NEMOTRON** · Y-Days 2026.

🔗 **Démo en ligne :** https://projet-connect-interfiliere.vercel.app/

---

## Fonctionnalités

- **Landing page** présentant le concept, les statistiques et le fonctionnement de la jauge.
- **Quiz interactif** de 10 questions, avec :
  - une mascotte animée qui réagit à chaque réponse,
  - une jauge de risque qui évolue en temps réel (vert → ambre → rouge),
  - un indice « IA » optionnel par question,
  - des raccourcis clavier (`1`–`4` pour répondre, `Entrée` pour valider/continuer).
- **Écran de résultat** : verdict, score, meilleure série, récapitulatif détaillé des réponses, et accès à une vidéo de présentation de la formation.
- **Responsive** mobile / desktop (mobile-first, sans dégrader le rendu desktop).

---

## Stack technique

| Domaine     | Choix                                 |
| ----------- | ------------------------------------- |
| Framework   | React 19                              |
| Build / dev | Vite 6                                |
| Langage     | TypeScript                            |
| Styles      | Tailwind CSS v4 (`@tailwindcss/vite`) |
| Animations  | Lottie (`lottie-react`)               |
| Icônes      | FontAwesome                           |
| Déploiement | Vercel (build statique)               |

Aucun back-end ni base de données : les questions sont statiques et tout le
calcul s'effectue côté client.

---

## Démarrage

Prérequis : **Node.js ≥ 18** et **npm**.

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement (http://localhost:5173)
npm run dev

# Build de production
npm run build

# Prévisualiser le build
npm run preview
```

### Scripts disponibles

| Script              | Description                           |
| ------------------- | ------------------------------------- |
| `npm run dev`       | Serveur de dev Vite avec HMR          |
| `npm run build`     | Vérifie les types puis génère `dist/` |
| `npm run preview`   | Sert le build de production en local  |
| `npm run lint`      | Analyse ESLint                        |
| `npm run typecheck` | Vérification TypeScript sans émission |

---

## Structure du projet

```
src/
├── App.tsx                 # Machine à 3 phases : intro → quiz → result
├── main.tsx                # Point d'entrée React
├── index.css               # Styles globaux + fond dégradé
│
├── components/             # Composants partagés
│   ├── Mascot.tsx          # Mascotte statique (PNG) + animée (Lottie + halo)
│   ├── Navbar.tsx          # Barre de navigation dynamique (réutilisée partout)
│   ├── Footer.tsx
│   └── ui.tsx              # Boutons et primitives d'UI
│
├── data/
│   ├── questions.ts        # Les 10 questions du quiz + impacts/feedbacks
│   └── home.ts             # Contenu de la landing (stats, avis…)
│
├── screens/
│   ├── StartScreen.tsx     # Landing
│   ├── start/              # Sections de la landing (Hero, StatsRow, Gauge…)
│   ├── quiz/
│   │   ├── useQuiz.ts       # Logique du quiz (machine à états, score, clavier)
│   │   ├── QuizScreen.tsx   # Vue du quiz
│   │   ├── AnswerOption.tsx
│   │   └── RiskGauge*.tsx   # Jauges desktop / mobile
│   └── result/             # Écran de résultat (verdict, récap, vidéo…)
│
├── theme/
│   ├── palette.ts          # Couleurs
│   └── risk.ts             # Logique « risque » : couleur interpolée + paliers
│
└── types/
    └── quiz.ts             # Types Question, Answer, QuizSummary…
```

---

## Fonctionnement de la jauge de risque

Chaque réponse porte un impact sur le pourcentage de risque :

| Type de réponse  | `impact.replaceability`  |
| ---------------- | ------------------------ |
| Réponse optimale | `-10` (le risque baisse) |
| Réponse risquée  | `+10` à `+15`            |
| Réponse grave    | `+20` à `+25`            |

À chaque validation, le pourcentage est mis à jour puis borné entre 0 et 100
(`clampPercent`). La couleur de la jauge est **interpolée** linéairement
vert → ambre → rouge (`riskColor`), tandis que le palier discret
(`Faible < 30`, `Modéré 30–60`, `Élevé > 60`) pilote le libellé et l'humeur de
la mascotte (`riskTier`). Cette logique est centralisée dans `theme/risk.ts`
pour être partagée entre le quiz et la landing.

> La jauge mesure le **risque d'être remplaçable** : mieux on gère l'IA, plus
> ce risque diminue — d'où une bonne réponse qui _fait baisser_ le pourcentage.

---

## Qualité

Avant chaque commit, le code passe par :

```bash
npm run typecheck   # tsc --noEmit
npm run lint        # eslint
npm run build       # build de production
```

Les commits suivent la convention `feat / fix / refactor / docs / chore…`.

---

## Équipe

Projet interfilière **YNOV** réalisé par le groupe **NEMOTRON** dans le cadre des
Y-Days 2026 (filières développement, design et communication).
