import { useState } from "react";
import { StartScreen } from "./screens/StartScreen";
import { QuizScreen } from "./screens/quiz/QuizScreen";

type Phase = "intro" | "quiz";

export function App() {
  const [phase, setPhase] = useState<Phase>("intro");

  if (phase === "quiz") {
    // onExit : retour accueil OU fin du quiz (l'écran résultats reste à concevoir).
    return <QuizScreen onExit={() => setPhase("intro")} />;
  }

  return <StartScreen onStart={() => setPhase("quiz")} />;
}
