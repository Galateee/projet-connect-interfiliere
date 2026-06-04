import { clampPercent, riskColor } from "../../theme/risk";
import { whiteA } from "../../theme/palette";
import { gaugeEdge, gaugeValue } from "./resultStyles";

type ResultGaugeProps = {
  percent: number;
};

const KNOB = 16;

/** Jauge horizontale « Tache humaine → Automatisé » du verdict. */
export function ResultGauge({ percent }: ResultGaugeProps) {
  const p = clampPercent(percent);
  const color = riskColor(p);

  return (
    <div className="flex w-full flex-col gap-2">
      {/* Valeur alignée sur le curseur */}
      <div className="relative h-5">
        <span className="absolute -translate-x-1/2 whitespace-nowrap" style={{ left: `${p}%`, ...gaugeValue, color }}>
          {Math.round(p)}%
        </span>
      </div>

      {/* Piste + curseur */}
      <div className="relative h-2 rounded-full" style={{ backgroundColor: whiteA(0.1) }}>
        <div className="absolute inset-y-0 left-0 rounded-full" style={{ width: `${p}%`, background: `linear-gradient(to right, ${riskColor(0)}, ${color})` }} />
        <div
          className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            left: `${p}%`,
            width: KNOB,
            height: KNOB,
            backgroundColor: "#fff",
            boxShadow: `0 0 0 4px ${whiteA(0.12)}, 0 0 10px ${color}`,
          }}
        />
      </div>

      {/* Légendes */}
      <div className="flex justify-between">
        <span style={gaugeEdge}>Tache humaine</span>
        <span style={gaugeEdge}>Automatisé</span>
      </div>
    </div>
  );
}
