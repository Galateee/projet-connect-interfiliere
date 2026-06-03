import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight, faArrowTurnDown, faCheck, faRobot, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Footer } from "../../components/Footer";
import { questions } from "../../data/questions";
import { BAR_BG, palette, tintedSurface, whiteA, withAlpha } from "../../theme/palette";
import { AnswerOption } from "./AnswerOption";
import { RiskGauge } from "./RiskGauge";
import { useQuiz } from "./useQuiz";
import { commentText, headerLink, hintLabel, hintText, nextBtnText, scenarioText, secondaryBtnText, situationEyebrow, timelineLabel, validateBtnText } from "./quizStyles";

type QuizScreenProps = {
  /** Retour à l'accueil (ou fin du quiz — l'écran résultats reste à concevoir). */
  onExit: () => void;
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

export function QuizScreen({ onExit }: QuizScreenProps) {
  const quiz = useQuiz(onExit);
  const { question, index, total, percent, history, selectedId, selected, answered, isCorrect, lastCorrect, hintOpen } = quiz;

  return (
    <div className="flex min-h-screen flex-col">
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-20" style={{ backgroundColor: "#080810" }} />
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 transition-opacity duration-700" style={{ background: GLOW_NORMAL, opacity: answered ? 0 : 1 }} />
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 transition-opacity duration-700" style={{ background: lastCorrect ? GLOW_CORRECT : GLOW_WRONG, opacity: answered ? 1 : 0 }} />

      {/* Header quiz */}
      <header
        className="sticky top-0 z-50 flex h-18 items-center justify-between px-25 backdrop-blur-md"
        style={{
          backgroundColor: BAR_BG,
          borderBottom: `1px solid ${whiteA(0.2)}`,
        }}>
        <button type="button" onClick={onExit} className="flex items-center gap-2 text-white/50 transition-colors hover:text-text" style={{ ...headerLink, color: undefined }}>
          <FontAwesomeIcon icon={faArrowLeft} />
          Retour à l'accueil
        </button>
        <span style={headerLink}>
          Question <span style={{ color: "#fff" }}>{index + 1}</span>/{total}
        </span>
      </header>

      <main className="flex flex-1 items-start justify-center px-6 pb-10 pt-[6vh]">
        <div className="flex w-full max-w-205.5 flex-col gap-8.75">
          {/* timeline */}
          <div className="flex flex-col gap-3.75">
            <span style={timelineLabel}>
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

          {/* Colonne principale + jauge */}
          <div className="flex items-start gap-11.5">
            <div className="flex flex-1 flex-col gap-3.75">
              {/* Carte question */}
              <div
                className="flex flex-col gap-3 rounded-[18px] px-[25.6px] py-[22.4px]"
                style={{
                  backgroundColor: whiteA(0.04),
                  border: `0.8px solid ${whiteA(0.09)}`,
                }}>
                <span style={situationEyebrow}>Situation #{index + 1}</span>
                <p style={scenarioText}>{question.scenario}</p>
              </div>

              {/* Réponses */}
              <div className="flex flex-col gap-2.5">
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

              {/* Boutons */}
              {answered ? (
                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={quiz.next}
                    className="flex cursor-pointer items-center justify-center gap-2 rounded-[43px] px-10.25 py-2.5 hover:brightness-110"
                    style={{ backgroundColor: palette.pink, ...nextBtnText }}>
                    {quiz.isLast ? "Terminer" : "Suivant"}
                    <FontAwesomeIcon icon={faArrowTurnDown} flip="horizontal" />
                  </button>
                </div>
              ) : (
                <div className="flex h-11.5 items-center justify-between gap-3.75">
                  <button
                    type="button"
                    onClick={quiz.toggleHint}
                    className="flex cursor-pointer items-center justify-center gap-2 rounded-[93px] px-4 py-2.5 hover:brightness-110"
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
                      className="flex cursor-pointer items-center justify-center gap-2 rounded-[43px] bg-white/80 px-10.25 py-2.5 hover:bg-white"
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

            {/* Jauge latérale */}
            <RiskGauge percent={percent} />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
