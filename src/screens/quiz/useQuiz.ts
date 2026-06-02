import { useCallback, useEffect, useState } from "react";
import { questions } from "../../data/questions";
import type { Answer, Question } from "../../types/quiz";
import { clampPercent } from "../../theme/risk";

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
  hintOpen: boolean;
  select: (id: string) => void;
  validate: () => void;
  next: () => void;
  toggleHint: () => void;
};

export function useQuiz(onFinish: () => void): QuizController {
  const total = questions.length;
  const [index, setIndex] = useState(0);
  const [percent, setPercent] = useState(0);
  const [history, setHistory] = useState<boolean[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [answered, setAnswered] = useState(false);
  const [hintOpen, setHintOpen] = useState(false);
  const [lastCorrect, setLastCorrect] = useState(false);

  const question = questions[index];
  const selected = question.answers.find((a) => a.id === selectedId) ?? null;
  const isCorrect = !!selected?.isOptimal;
  const isLast = index + 1 >= total;

  const select = useCallback((id: string) => setSelectedId(id), []);
  const toggleHint = useCallback(() => setHintOpen((o) => !o), []);

  const validate = useCallback(() => {
    if (!selected || answered) return;
    setPercent((p) => clampPercent(p + selected.impact.replaceability));
    setLastCorrect(!!selected.isOptimal);
    setAnswered(true);
    setHintOpen(false);
  }, [selected, answered]);

  const next = useCallback(() => {
    if (!answered) return;
    setHistory((h) => [...h, isCorrect]);
    if (isLast) {
      onFinish();
      return;
    }
    setIndex((i) => i + 1);
    setSelectedId(null);
    setAnswered(false);
    setHintOpen(false);
  }, [answered, isCorrect, isLast, onFinish]);

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
    hintOpen,
    select,
    validate,
    next,
    toggleHint,
  };
}
