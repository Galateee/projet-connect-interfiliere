import { useRef } from "react";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { palette, withAlpha } from "../../theme/palette";
import type { QuizSummary } from "../../types/quiz";
import { ResultHero } from "./ResultHero";
import { TrainingCard } from "./TrainingCard";
import { RecapList } from "./RecapList";

type ResultScreenProps = {
  summary: QuizSummary;
  onRestart: () => void;
  onHome: () => void;
};

const BG_GLOW = `radial-gradient(46rem 38rem at 50% 0%, ${withAlpha(palette.green, 0.08)}, transparent 70%), radial-gradient(50rem 42rem at 12% 88%, ${withAlpha(palette.pink, 0.07)}, transparent 100%)`;

/** Écran de résultats (« recap final »). */
export function ResultScreen({ summary, onRestart, onHome }: ResultScreenProps) {
  const recapRef = useRef<HTMLElement>(null);

  const scrollToRecap = () => recapRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <div className="flex min-h-screen flex-col">
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-20" style={{ backgroundColor: "#080810" }} />
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10" style={{ background: BG_GLOW }} />

      {/* Header : retour accueil + relancer */}
      <Navbar back={{ label: "Retour à l'accueil", onClick: onHome }} cta={{ label: "Recommencer l'évaluation", onClick: onRestart }} />

      <main className="flex w-full flex-1 justify-center px-6 pb-16 pt-12">
        <div className="flex w-full max-w-180 flex-col items-center gap-9">
          <ResultHero summary={summary} onSeeRecap={scrollToRecap} />
          <TrainingCard />
          <RecapList ref={recapRef} records={summary.records} />
        </div>
      </main>

      <Footer />
    </div>
  );
}
