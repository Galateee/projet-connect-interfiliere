import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowTurnDown, faCheck, faRobot, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { questions } from "../../data/questions";
import { palette, tintedSurface, whiteA, withAlpha } from "../../theme/palette";
import { AnswerOption } from "./AnswerOption";
import { RiskGauge } from "./RiskGauge";
import { RiskGaugeMobile } from "./RiskGaugeMobile";
import { useQuiz } from "./useQuiz";
import { commentText, headerLink, hintLabel, hintText, nextBtnText, scenarioText, secondaryBtnText, situationEyebrow, timelineLabel, validateBtnText } from "./quizStyles";

import type { QuizSummary } from "../../types/quiz";

type QuizScreenProps = {
  onExit: () => void;
  onFinish: (summary: QuizSummary) => void;
};

const LETTERS = ["A", "B", "C", "D", "E", "F"];

// Halos d'arrière-plan.
function glow(hex: string, alpha: number): string {
  const stop = withAlpha(hex, alpha);
  return `radial-gradient(50rem 42rem at 85% 82%, ${stop}, transparent 100%), radial-gradient(50rem 42rem at 8% 11%, ${stop}, transparent 100%)`;
}
const GLOW_NORMAL = glow(palette.pink, 0.1);
const GLOW_CORRECT = glow(palette.green, 0.1);
const GLOW_WRONG = glow(palette.red, 0.1);

export function QuizScreen({ onExit, onFinish }: QuizScreenProps) {
  const quiz = useQuiz(onFinish);
  const { question, index, total, percent, history, selectedId, selected, answered, isCorrect, lastCorrect, mascotState, hintOpen } = quiz;

  return (
    <div className="flex min-h-screen flex-col">
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-20" style={{ backgroundColor: "#080810" }} />
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 transition-opacity duration-700" style={{ background: GLOW_NORMAL, opacity: answered ? 0 : 1 }} />
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 transition-opacity duration-700" style={{ background: lastCorrect ? GLOW_CORRECT : GLOW_WRONG, opacity: answered ? 1 : 0 }} />

      {/* Header quiz */}
      <Navbar
        back={{ label: "Retour à l'accueil", onClick: onExit }}
        right={
          <span style={headerLink}>
            <span className="hidden lg:inline">Question </span>
            <span style={{ color: "#fff" }}>{index + 1}</span>/{total}
          </span>
        }
      />

      <main className="flex flex-1 items-start justify-center px-6 pb-4 pt-4 lg:pb-10 lg:pt-[6vh]">
        <div className="flex w-full max-w-205.5 flex-col gap-4 lg:gap-8.75">
          {/* timeline */}
          <div className="flex flex-col gap-3.75">
            <span className="hidden lg:inline" style={timelineLabel}>
              Question <span style={{ color: "#fff" }}>{index + 1}</span> / {total}
            </span>
            <div className="flex gap-1">
              {questions.map((q, i) => {
                let bg = whiteA(0.15);
                if (i < history.length) bg = withAlpha(history[i] ? palette.mint : palette.coral, 0.5);
                else if (i === index) bg = "#fff";
                return <div key={q.id} className="h-1 flex-1 rounded-full" style={{ backgroundColor: bg }} />;
              })}
            </div>
          </div>

          {/* Jauge horizontale (mobile uniquement, en haut) */}
          <RiskGaugeMobile percent={percent} mascotState={mascotState} className="lg:hidden" />

          {/* Colonne principale + jauge latérale (desktop) */}
          <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:gap-11.5">
            <div className="flex flex-1 flex-col gap-3 lg:gap-3.75">
              {/* Carte question */}
              <div
                className="flex flex-col gap-2 rounded-[18px] px-[25.6px] py-4 lg:gap-3 lg:py-[22.4px]"
                style={{
                  backgroundColor: whiteA(0.04),
                  border: `0.8px solid ${whiteA(0.09)}`,
                }}>
                <span style={situationEyebrow}>Situation #{index + 1}</span>
                <p style={scenarioText}>{question.scenario}</p>
              </div>

              {/* Réponses */}
              <div className="flex flex-col gap-2 lg:gap-2.5">
                {question.answers.map((a, i) => (
                  <AnswerOption
                    key={a.id}
                    letter={LETTERS[i]}
                    number={i + 1}
                    text={a.label}
                    answered={answered}
                    isSelected={selectedId === a.id}
                    isCorrect={!!a.isOptimal}
                    onClick={() => !answered && quiz.select(a.id)}
                  />
                ))}
              </div>

              {/* Encart explication IA (si ouvert, avant réponse) */}
              {hintOpen && !answered && (
                <div className="flex flex-col gap-2 rounded-[14px] px-[19.2px] py-4" style={tintedSurface(palette.purple)}>
                  <span className="flex items-center gap-2" style={hintLabel}>
                    <FontAwesomeIcon icon={faRobot} />
                    Explication IA
                  </span>
                  <p style={hintText}>{question.assistantHint}</p>
                </div>
              )}

              {/* Encart commentaire (après validation) */}
              {answered && selected && (
                <div className="rounded-[14px] px-[19.2px] py-4" style={tintedSurface(isCorrect ? palette.mint : palette.coral)}>
                  <p style={{ ...commentText, color: isCorrect ? palette.green : palette.coral }}>
                    <FontAwesomeIcon icon={isCorrect ? faCheck : faXmark} className="mr-1.5" />
                    {selected.feedback}
                  </p>
                </div>
              )}

              {/* Boutons (empilés pleine largeur sur mobile) */}
              {answered ? (
                <div className="flex lg:justify-end">
                  <button
                    type="button"
                    onClick={quiz.next}
                    className="flex h-9.25 w-full cursor-pointer items-center justify-center gap-2 rounded-[43px] px-10.25 py-2.5 hover:brightness-110 lg:h-auto lg:w-auto"
                    style={{ backgroundColor: palette.pink, ...nextBtnText }}>
                    {quiz.isLast ? "Terminer" : "Suivant"}
                    <FontAwesomeIcon icon={faArrowTurnDown} flip="horizontal" />
                  </button>
                </div>
              ) : (
                <div className="flex flex-col gap-3 lg:h-11.5 lg:flex-row lg:items-center lg:justify-between lg:gap-3.75">
                  <button
                    type="button"
                    onClick={quiz.toggleHint}
                    className="flex h-9.25 w-full cursor-pointer items-center justify-center gap-2 rounded-[93px] px-4 py-2.5 hover:brightness-110 lg:h-auto lg:w-auto"
                    style={{
                      backgroundColor: withAlpha(palette.pink, 0.4),
                      border: `1px solid ${palette.pink}`,
                      ...secondaryBtnText,
                    }}>
                    <FontAwesomeIcon icon={faRobot} />
                    {hintOpen ? "Masquer" : "Demander un indice à l'IA"}
                  </button>
                  {selectedId && (
                    <button
                      type="button"
                      onClick={quiz.validate}
                      className="flex h-9.25 w-full cursor-pointer items-center justify-center gap-2 rounded-[43px] bg-white/80 px-10.25 py-2.5 hover:bg-white lg:h-auto lg:w-auto"
                      style={{
                        border: `1px solid ${whiteA(0.75)}`,
                        ...validateBtnText,
                      }}>
                      Valider <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                  )}
                </div>
              )}
            </div>

            {/* Jauge latérale (desktop uniquement) */}
            <div className="hidden shrink-0 lg:block">
              <RiskGauge percent={percent} mascotState={mascotState} />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
