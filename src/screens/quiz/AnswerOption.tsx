import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { palette, whiteA, withAlpha } from "../../theme/palette";
import { answerLetter, answerNumber, answerText, goodAnswerTag } from "./quizStyles";

type AnswerOptionProps = {
  letter: string;
  number: number;
  text: string;
  answered: boolean;
  isSelected: boolean;
  isCorrect: boolean;
  onClick: () => void;
};

type Visual = {
  bg: string;
  border: string;
  letterBg: string;
  letterColor: string;
};

const DEFAULT_VISUAL: Visual = {
  bg: whiteA(0.04),
  border: whiteA(0.1),
  letterBg: whiteA(0.1),
  letterColor: whiteA(0.4),
};

function visual({ answered, isSelected, isCorrect }: AnswerOptionProps): Visual {
  if (!answered) {
    return isSelected ? { bg: whiteA(0.09), border: whiteA(0.25), letterBg: whiteA(0.2), letterColor: "#fff" } : DEFAULT_VISUAL;
  }
  if (isSelected && isCorrect) {
    return { bg: withAlpha(palette.mint, 0.1), border: palette.mint, letterBg: palette.mint, letterColor: "#fff" };
  }
  if (isSelected && !isCorrect) {
    return { bg: withAlpha(palette.coral, 0.1), border: palette.coral, letterBg: palette.coral, letterColor: "#fff" };
  }
  if (isCorrect) {
    return { ...DEFAULT_VISUAL, border: withAlpha(palette.mint, 0.45) }; // bonne réponse révélée
  }
  return DEFAULT_VISUAL;
}

/** Indicateur de droite : numéro clavier, ✓ / ✗, ou tag « Bonne réponse ». */
function RightSlot({ answered, isSelected, isCorrect, number }: AnswerOptionProps) {
  if (answered && isSelected && isCorrect) {
    return <FontAwesomeIcon icon={faCheck} style={{ fontSize: "16px", color: "#dcfce7" }} />;
  }
  if (answered && isSelected && !isCorrect) {
    return <FontAwesomeIcon icon={faXmark} style={{ fontSize: "16px", color: "#fff" }} />;
  }
  if (answered && isCorrect) {
    return (
      <span className="flex items-center gap-1" style={goodAnswerTag}>
        <FontAwesomeIcon icon={faArrowLeft} />
        Bonne réponse
      </span>
    );
  }
  return (
    <span className="flex h-4.75 w-3.75 items-center justify-center rounded-sm" style={{ border: `0.8px solid ${whiteA(0.12)}` }}>
      <span style={answerNumber}>{number}</span>
    </span>
  );
}

export function AnswerOption(props: AnswerOptionProps) {
  const { letter, text, answered, isSelected, onClick } = props;
  const v = visual(props);
  const [hovered, setHovered] = useState(false);
  const isHoverable = !answered && !isSelected;
  const showHover = isHoverable && hovered;

  return (
    <button
      type="button"
      disabled={answered}
      aria-pressed={props.isSelected}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex items-center justify-between gap-3 rounded-[14px] px-[17.6px] py-[13.6px] text-left transition-colors disabled:cursor-default"
      style={{
        backgroundColor: showHover ? whiteA(0.08) : v.bg,
        border: `0.8px solid ${showHover ? whiteA(0.22) : v.border}`,
        cursor: isHoverable ? "pointer" : undefined,
      }}>
      <span className="flex items-center gap-3">
        <span className="flex h-7.5 w-7.5 shrink-0 items-center justify-center rounded-lg" style={{ backgroundColor: v.letterBg }}>
          <span style={{ ...answerLetter, color: v.letterColor }}>{letter}</span>
        </span>
        <span style={answerText}>{text}</span>
      </span>
      <RightSlot {...props} />
    </button>
  );
}
