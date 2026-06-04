export type AnswerImpact = {
  replaceability: number;
};

export type Answer = {
  id: string;
  label: string;
  isOptimal?: boolean;
  impact: AnswerImpact;
  feedback?: string;
};

export type Question = {
  id: string;
  scenario: string;
  answers: Answer[];
  assistantHint: string;
};

/** Détail d'une question pour le récapitulatif de fin */
export type QuizAnswerRecord = {
  questionId: string;
  scenario: string;
  answers: Answer[];
  selectedAnswerId: string;
  isCorrect: boolean;
};

/** Bilan de fin de quiz, transmis à l'écran de résultats */
export type QuizSummary = {
  percent: number;
  total: number;
  correctCount: number;
  bestStreak: number;
  records: QuizAnswerRecord[];
};
