import { useRef } from "react";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import type { QuizSummary } from "../../types/quiz";
import { ResultHero } from "./ResultHero";
import { TrainingCard } from "./TrainingCard";
import { RecapList } from "./RecapList";

type ResultScreenProps = {
  summary: QuizSummary;
  onRestart: () => void;
  onHome: () => void;
};

/** Écran de résultats (« recap final »). */
export function ResultScreen({ summary, onRestart, onHome }: ResultScreenProps) {
  const recapRef = useRef<HTMLElement>(null);

  const scrollToRecap = () => recapRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header : retour accueil + relancer */}
      <Navbar back={{ label: "Retour à l'accueil", onClick: onHome }} cta={{ label: "Recommencer l'évaluation", onClick: onRestart }} ctaDesktopOnly />

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
