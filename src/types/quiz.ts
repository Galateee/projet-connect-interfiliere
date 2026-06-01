export type AnswerImpact = {
  /** Variation de la jauge de remplaçabilité. Positif = plus remplaçable. */
  replaceability: number
  /** Variation de la jauge d'autonomie. Positif = plus autonome. */
  autonomy: number
}

export type Answer = {
  id: string
  label: string
  /** Si défini, considéré comme la "bonne" pratique (utile pour le bilan). */
  isOptimal?: boolean
  impact: AnswerImpact
  /** Feedback court montré juste après le clic. */
  feedback?: string
}

export type Question = {
  id: string
  /** Mise en contexte managériale courte. */
  scenario: string
  /** La question posée au manager. */
  prompt: string
  answers: Answer[]
  /** Indice scénarisé que l'assistant IA donnera si sollicité sur cette question. */
  assistantHint: string
}

export type Phase = 'intro' | 'quiz' | 'results'

export type QuizState = {
  phase: Phase
  questionIndex: number
  /** 0 = totalement maître de ses décisions, 100 = remplaçable par une IA. */
  replaceability: number
  /** 0 = totalement dépendant de l'assistant, 100 = autonome. */
  autonomy: number
  /** Nombre de fois où l'assistant IA a été sollicité. */
  assistantCalls: number
  /** Réponses choisies, dans l'ordre. */
  history: Array<{ questionId: string; answerId: string }>
}
