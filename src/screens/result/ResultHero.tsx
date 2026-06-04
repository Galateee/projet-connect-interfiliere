import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faArrowDown, faCheck, faFire, faXmark } from "@fortawesome/free-solid-svg-icons";
import { MascotAnimated } from "../../components/Mascot";
import { palette, whiteA } from "../../theme/palette";
import type { QuizSummary } from "../../types/quiz";
import { ResultGauge } from "./ResultGauge";
import { resultVerdict } from "./verdict";
import { heroSubtitle, heroTitle, statCaption, statNumber } from "./resultStyles";

type ResultHeroProps = {
  summary: QuizSummary;
  onSeeRecap: () => void;
};

type Stat = { icon: IconDefinition; value: number; caption: string; color: string };

export function ResultHero({ summary, onSeeRecap }: ResultHeroProps) {
  const { percent, correctCount, total, bestStreak } = summary;
  const verdict = resultVerdict(percent);

  const stats: Stat[] = [
    { icon: faCheck, value: correctCount, caption: "Bonnes réponses", color: palette.green },
    { icon: faXmark, value: total - correctCount, caption: "Mauvaises réponses", color: palette.coral },
    { icon: faFire, value: bestStreak, caption: "Meilleure série", color: palette.amber },
  ];

  return (
    <section
      className="flex w-full flex-col items-center gap-5 rounded-[20px] px-6 pb-7 pt-8 text-center lg:px-10 lg:pb-9 lg:pt-11"
      style={{ backgroundColor: whiteA(0.04), border: `0.8px solid ${whiteA(0.09)}` }}>
      <MascotAnimated state={verdict.mascot} size={104} loop />

      <div className="w-full px-4 lg:px-0">
        <ResultGauge percent={percent} />
      </div>

      <div className="flex flex-col gap-3.5">
        <h1 style={heroTitle}>{verdict.title}</h1>
        <p style={heroSubtitle}>{verdict.subtitle}</p>
      </div>

      {/* Chips de stats */}
      <div className="flex w-full gap-2 lg:gap-3.5">
        {stats.map((s) => (
          <div key={s.caption} className="flex flex-1 flex-col items-center gap-1.5 rounded-2xl px-2 py-4 lg:px-3" style={{ backgroundColor: whiteA(0.04), border: `0.8px solid ${whiteA(0.08)}` }}>
            <span className="flex items-center gap-2">
              <FontAwesomeIcon icon={s.icon} style={{ color: s.color, fontSize: "20px" }} />
              <span style={{ ...statNumber, color: s.color }}>{s.value}</span>
            </span>
            <span className="whitespace-nowrap" style={statCaption}>
              {s.caption}
            </span>
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={onSeeRecap}
        className="flex items-center justify-center gap-2 rounded-[43px] px-6 py-2.5 transition-colors hover:bg-white/8"
        style={{
          border: `1px solid ${whiteA(0.2)}`,
          fontFamily: '"Outfit", system-ui, sans-serif',
          fontWeight: 600,
          fontSize: "13.5px",
          color: whiteA(0.7),
        }}>
        Voir le récapitulatif complet <FontAwesomeIcon icon={faArrowDown} />
      </button>
    </section>
  );
}
