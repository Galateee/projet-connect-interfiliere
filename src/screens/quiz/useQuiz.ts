import { useCallback, useEffect, useState } from "react";
import { questions } from "../../data/questions";
import type { Answer, Question, QuizAnswerRecord, QuizSummary } from "../../types/quiz";
import { clampPercent } from "../../theme/risk";
import { MASCOT_REACTION_MS, type MascotState } from "../../components/Mascot";

/**
 * Machine à états du quiz, isolée de la vue : sélection d'une réponse,
 * validation (mise à jour du risque + historique), passage à la suivante,
 * indice IA, et raccourcis clavier (1–4 / Entrée).
 */
export type QuizController = {
  question: Question;
  index: number;
  total: number;
  isLast: boolean;
  percent: number;
  history: boolean[];
  selectedId: string | null;
  selected: Answer | null;
  answered: boolean;
  isCorrect: boolean;
  lastCorrect: boolean;
  mascotState: MascotState;
  hintOpen: boolean;
  select: (id: string) => void;
  validate: () => void;
  next: () => void;
  toggleHint: () => void;
};

/** Plus longue série de bonnes réponses consécutives. */
function longestStreak(records: QuizAnswerRecord[]): number {
  let best = 0;
  let current = 0;
  for (const r of records) {
    current = r.isCorrect ? current + 1 : 0;
    if (current > best) best = current;
  }
  return best;
}

export function useQuiz(onFinish: (summary: QuizSummary) => void): QuizController {
  const total = questions.length;
  const [index, setIndex] = useState(0);
  const [percent, setPercent] = useState(0);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [answered, setAnswered] = useState(false);
  const [hintOpen, setHintOpen] = useState(false);
  const [lastCorrect, setLastCorrect] = useState(false);
  const [mascotState, setMascotState] = useState<MascotState>("idle");
  const [records, setRecords] = useState<QuizAnswerRecord[]>([]);

  const question = questions[index];
  const selected = question.answers.find((a) => a.id === selectedId) ?? null;
  const isCorrect = !!selected?.isOptimal;
  const isLast = index + 1 >= total;
  const history = records.map((r) => r.isCorrect);

  const select = useCallback((id: string) => setSelectedId(id), []);
  const toggleHint = useCallback(() => setHintOpen((o) => !o), []);

  const validate = useCallback(() => {
    if (!selected || answered) return;
    const correct = !!selected.isOptimal;
    setPercent((p) => clampPercent(p + selected.impact.replaceability));
    setLastCorrect(correct);
    setRecords((r) => [...r, { questionId: question.id, scenario: question.scenario, answers: question.answers, selectedAnswerId: selected.id, isCorrect: correct }]);
    setMascotState(correct ? "angry" : "happy");
    setAnswered(true);
    setHintOpen(false);
  }, [selected, answered, question]);

  const next = useCallback(() => {
    if (!answered) return;
    if (isLast) {
      onFinish({
        percent,
        total,
        correctCount: records.filter((r) => r.isCorrect).length,
        bestStreak: longestStreak(records),
        records,
      });
      return;
    }
    setIndex((i) => i + 1);
    setSelectedId(null);
    setAnswered(false);
    setHintOpen(false);
    setMascotState("idle");
  }, [answered, isLast, onFinish, percent, records, total]);

  // Retour automatique de la mascotte à l'état neutre après sa réaction.
  useEffect(() => {
    if (mascotState === "idle") return;
    const timer = setTimeout(() => setMascotState("idle"), MASCOT_REACTION_MS);
    return () => clearTimeout(timer);
  }, [mascotState]);

  // Raccourcis clavier : 1–4 pour choisir, Entrée pour valider / passer.
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Enter") {
        if (answered) next();
        else validate();
        return;
      }
      if (!answered) {
        const n = Number(e.key);
        if (n >= 1 && n <= question.answers.length) {
          setSelectedId(question.answers[n - 1].id);
        }
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [answered, validate, next, question.answers]);

  return {
    question,
    index,
    total,
    isLast,
    percent,
    history,
    selectedId,
    selected,
    answered,
    isCorrect,
    lastCorrect,
    mascotState,
    hintOpen,
    select,
    validate,
    next,
    toggleHint,
  };
}
