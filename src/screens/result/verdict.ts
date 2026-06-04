/**
 * Verdict de l'écran de résultats : titre, sous-titre et émotion de la mascotte
 * selon le risque de remplacement final.
 */
import type { MascotState } from "../../components/Mascot";

export type Verdict = {
  title: string;
  subtitle: string;
  mascot: MascotState;
};

export function resultVerdict(percent: number): Verdict {
  if (percent > 60) {
    return {
      title: "L'IA vous a remplacé !",
      subtitle: "Votre score suggère que la majorité de vos tâches pourraient être automatisées aujourd'hui. Mais il n'est jamais trop tard pour apprendre — l'IA peut aussi vous aider à progresser !",
      mascot: "happy",
    };
  }
  if (percent >= 30) {
    return {
      title: "L'IA vous talonne.",
      subtitle: "Une partie de vos tâches est déjà automatisable. En affûtant votre jugement et votre usage de l'IA, vous pouvez garder une longueur d'avance.",
      mascot: "idle",
    };
  }
  return {
    title: "Vous gardez le contrôle.",
    subtitle: "Vos décisions restent difficilement automatisables. Continuez à cultiver ce qui vous rend irremplaçable — l'IA reste votre outil, pas votre remplaçante.",
    mascot: "angry",
  };
}
