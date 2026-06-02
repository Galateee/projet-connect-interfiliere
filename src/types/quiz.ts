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
