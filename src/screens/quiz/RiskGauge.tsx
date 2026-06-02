import { Mascot } from "../../components/Mascot";
import { whiteA } from "../../theme/palette";
import { clampPercent, riskColor, riskTier } from "../../theme/risk";
import { gaugeAxis, gaugeCaption, gaugePercent, gaugeTierLabel } from "./quizStyles";

type RiskGaugeProps = {
  percent: number;
};

const AXIS = [100, 75, 50, 25, 0];
const TRACK_HEIGHT = 200;
const FILL_MIN = 24;

export function RiskGauge({ percent }: RiskGaugeProps) {
  const clamped = clampPercent(percent);
  const color = riskColor(clamped);
  const { label, mood } = riskTier(clamped);
  const fillHeight = FILL_MIN + (clamped / 100) * (TRACK_HEIGHT - FILL_MIN);

  return (
    <div className="flex w-18 shrink-0 flex-col items-center justify-center gap-6.25">
      {/* Mascotte + palier */}
      <div className="flex flex-col items-center gap-2.5">
        <Mascot mood={mood} size={52} />
        <span style={{ ...gaugeTierLabel, color }}>{label}</span>
      </div>

      {/* Jauge */}
      <div className="flex flex-col items-end gap-1">
        <div className="flex items-start gap-3">
          {/* Graduations */}
          <div className="flex flex-col justify-between" style={{ height: `${TRACK_HEIGHT}px` }}>
            {AXIS.map((v) => (
              <span key={v} style={gaugeAxis}>
                {v}
              </span>
            ))}
          </div>
          {/* Piste */}
          <div
            className="flex w-7 flex-col justify-end overflow-hidden rounded-[20px]"
            style={{
              height: `${TRACK_HEIGHT}px`,
              backgroundColor: whiteA(0.06),
              border: `0.8px solid ${whiteA(0.12)}`,
            }}>
            <div
              className="w-full rounded-[20px] transition-[height] duration-500"
              style={{
                height: `${fillHeight}px`,
                background: `linear-gradient(to top, ${color}, ${riskColor(clamped + 15)})`,
                boxShadow: `0 0 12px ${color}66`,
              }}
            />
          </div>
        </div>
        <span style={{ ...gaugePercent, color }}>{Math.round(clamped)}%</span>
      </div>

      <span style={gaugeCaption}>Risque de remplacement IA</span>
    </div>
  );
}
