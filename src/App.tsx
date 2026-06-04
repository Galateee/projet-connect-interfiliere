import { useState } from "react";
import { StartScreen } from "./screens/StartScreen";
import { QuizScreen } from "./screens/quiz/QuizScreen";
import { ResultScreen } from "./screens/result/ResultScreen";
import type { QuizSummary } from "./types/quiz";

type Phase = "intro" | "quiz" | "result";

export function App() {
  const [phase, setPhase] = useState<Phase>("intro");
  const [summary, setSummary] = useState<QuizSummary | null>(null);

  if (phase === "quiz") {
    return (
      <QuizScreen
        onExit={() => setPhase("intro")}
        onFinish={(s) => {
          setSummary(s);
          setPhase("result");
        }}
      />
    );
  }

  if (phase === "result" && summary) {
    return <ResultScreen summary={summary} onRestart={() => setPhase("quiz")} onHome={() => setPhase("intro")} />;
  }

  return <StartScreen onStart={() => setPhase("quiz")} />;
}
