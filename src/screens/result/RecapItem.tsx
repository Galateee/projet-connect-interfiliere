import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faChevronDown, faLightbulb, faXmark } from "@fortawesome/free-solid-svg-icons";
import { palette, whiteA, withAlpha } from "../../theme/palette";
import type { QuizAnswerRecord } from "../../types/quiz";
import { answerTag, explanationLabel, explanationText, questionLabel, recapOptionLetter, recapOptionText, recapScenario, yourAnswerLabel, yourAnswerText } from "./resultStyles";

const LETTERS = ["A", "B", "C", "D", "E", "F"];

type RecapItemProps = {
  number: number;
  record: QuizAnswerRecord;
};

/** Visuel d'une option en mode déplié : bonne réponse (vert), choix erroné (rouge), neutre. */
function optionVisual(isOptimal: boolean, isPicked: boolean) {
  if (isOptimal) return { bg: withAlpha(palette.mint, 0.1), border: palette.mint, badge: palette.mint, mark: faCheck };
  if (isPicked) return { bg: withAlpha(palette.coral, 0.1), border: palette.coral, badge: palette.coral, mark: faXmark };
  return { bg: whiteA(0.04), border: whiteA(0.1), badge: whiteA(0.1), mark: null };
}

export function RecapItem({ number, record }: RecapItemProps) {
  const [open, setOpen] = useState(false);
  const { scenario, answers, selectedAnswerId, isCorrect } = record;
  const accent = isCorrect ? palette.mint : palette.coral;
  const pickedIndex = answers.findIndex((a) => a.id === selectedAnswerId);
  const picked = pickedIndex >= 0 ? answers[pickedIndex] : undefined;
  const pickedLetter = LETTERS[pickedIndex];

  return (
    <div className="overflow-hidden rounded-2xl" style={{ backgroundColor: withAlpha(accent, 0.05), border: `0.8px solid ${withAlpha(accent, 0.3)}` }}>
      <button type="button" onClick={() => setOpen((o) => !o)} className="flex w-full items-start gap-3 px-5 py-4 text-left">
        {/* Badge état (colonne gauche) */}
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg" style={{ backgroundColor: accent }}>
          <FontAwesomeIcon icon={isCorrect ? faCheck : faXmark} style={{ color: "#fff", fontSize: "13px" }} />
        </span>

        {/* Colonne droite : en-tête + scénario + réponse */}
        <div className="flex min-w-0 flex-1 flex-col gap-3">
          <div className="flex items-center gap-3">
            <span style={questionLabel}>Question {number}</span>
            <span className="rounded-full px-2.5 py-0.5" style={{ ...answerTag, color: accent, backgroundColor: withAlpha(accent, 0.15), border: `0.8px solid ${withAlpha(accent, 0.3)}` }}>
              {isCorrect ? "Bonne réponse" : "Mauvaise réponse"}
            </span>
            <FontAwesomeIcon icon={faChevronDown} className="ml-auto transition-transform" style={{ color: whiteA(0.4), fontSize: "13px", transform: open ? "rotate(180deg)" : "none" }} />
          </div>

          <p style={recapScenario}>{scenario}</p>

          {picked && (
            <p>
              <span style={{ ...yourAnswerLabel, color: accent }}>Votre réponse : </span>
              <span style={yourAnswerText}>
                {pickedLetter}. {picked.label}
              </span>
            </p>
          )}
        </div>
      </button>

      {/* Déplié : toutes les options + explication */}
      {open && (
        <div className="flex flex-col gap-2 px-5 pb-4">
          {answers.map((a, i) => {
            const v = optionVisual(!!a.isOptimal, a.id === selectedAnswerId);
            return (
              <div key={a.id} className="flex items-center justify-between gap-3 rounded-xl px-3.5 py-2.5" style={{ backgroundColor: v.bg, border: `0.8px solid ${v.border}` }}>
                <span className="flex items-center gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md" style={{ backgroundColor: v.badge }}>
                    <span style={{ ...recapOptionLetter, color: v.mark ? "#fff" : whiteA(0.4) }}>{LETTERS[i]}</span>
                  </span>
                  <span style={recapOptionText}>{a.label}</span>
                </span>
                {v.mark && <FontAwesomeIcon icon={v.mark} style={{ color: v.border, fontSize: "14px" }} />}
              </div>
            );
          })}

          {/* Encart explication (feedback de la réponse choisie) */}
          {picked?.feedback && (
            <div className="rounded-xl px-4 py-3.5" style={{ backgroundColor: whiteA(0.12), border: `0.8px solid ${whiteA(0.25)}` }}>
              <p>
                <FontAwesomeIcon icon={faLightbulb} className="mr-2" style={{ color: palette.amber, fontSize: "13px" }} />
                <span style={explanationLabel}>Explication</span>
                <span style={explanationText}> · {picked.feedback}</span>
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
