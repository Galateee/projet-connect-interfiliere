/**
 * Mascotte "IA ou pas IA ?" — image dont l'expression dépend de l'humeur
 * (mood 0 = serein/vert, 100 = paniqué/rouge).
 *
 * mood reflète la remplaçabilité : moins elle est haute, plus la mascotte
 * vire au rouge et fait la grimace. Trois paliers d'images :
 *   - rouge  : score bas (paniquée)
 *   - jaune : score moyen (neutre/inquiète)
 *   - vert : score haut (sereine)
 */
import { palette, withAlpha } from "../theme/palette";

type MascotProps = {
  mood?: number;
  size?: number;
  className?: string;
  glowBlur?: number;
};

const NEUTRAL_THRESHOLD = 45;
const PANIC_THRESHOLD = 70;

type MascotVariant = {
  src: string;
  label: string;
  glow: string;
};

function moodVariant(mood: number): MascotVariant {
  if (mood >= PANIC_THRESHOLD) {
    return { src: "/mascot_rouge.png", label: "Mascotte inquiète", glow: withAlpha(palette.coral, 0.7) };
  }
  if (mood >= NEUTRAL_THRESHOLD) {
    return { src: "/mascot_jaune.png", label: "Mascotte neutre", glow: withAlpha(palette.amber, 0.7) };
  }
  return { src: "/mascot_vert.png", label: "Mascotte sereine", glow: withAlpha(palette.mint, 0.7) };
}

export function Mascot({ mood = 0, size = 120, className, glowBlur }: MascotProps) {
  const { src, label, glow } = moodVariant(mood);
  const blur = glowBlur ?? (size * 12) / 13;

  return (
    <img
      src={src}
      width={size}
      height={size}
      className={className}
      style={{
        objectFit: "contain",
        filter: `drop-shadow(0 0 ${blur}px ${glow})`,
      }}
      alt={label}
    />
  );
}
