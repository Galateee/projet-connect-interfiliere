import type { CSSProperties } from "react";
import { MascotAnimated, type MascotState } from "../../components/Mascot";
import { whiteA } from "../../theme/palette";
import { clampPercent, riskColor, riskTier } from "../../theme/risk";
import { gaugePercent, gaugeTierLabel } from "./quizStyles";

type RiskGaugeMobileProps = {
  percent: number;
  mascotState: MascotState;
  className?: string;
};

const riskLabel: CSSProperties = {
  fontFamily: '"Outfit", system-ui, sans-serif',
  fontWeight: 700,
  fontSize: "11px",
  lineHeight: "16px",
  letterSpacing: "1.2px",
  textTransform: "uppercase",
  color: "rgba(255, 255, 255, 0.4)",
};

/**
 * Variante horizontale de la jauge de risque, pour le quiz en format mobile :
 */
export function RiskGaugeMobile({ percent, mascotState, className }: RiskGaugeMobileProps) {
  const clamped = clampPercent(percent);
  const color = riskColor(clamped);
  const { label } = riskTier(clamped);

  return (
    <div className={`flex items-center gap-4 rounded-2xl px-4 py-3.5 ${className ?? ""}`} style={{ backgroundColor: whiteA(0.04), border: `0.8px solid ${whiteA(0.09)}` }}>
      <MascotAnimated state={mascotState} size={52} preload />

      <div className="flex flex-1 flex-col gap-2">
        <div className="flex items-center justify-between">
          <span style={riskLabel}>Risque IA</span>
          <span className="flex items-baseline gap-1.5">
            <span style={{ ...gaugeTierLabel, color }}>{label}</span>
            <span style={{ ...gaugePercent, color }}>{Math.round(clamped)}%</span>
          </span>
        </div>

        <div className="h-2 w-full overflow-hidden rounded-full" style={{ backgroundColor: whiteA(0.08) }}>
          <div className="h-full rounded-full transition-[width] duration-500" style={{ width: `${clamped}%`, background: color, boxShadow: `0 0 10px ${color}66` }} />
        </div>
      </div>
    </div>
  );
}
