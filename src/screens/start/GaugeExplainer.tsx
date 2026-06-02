import { Mascot } from "../../components/Mascot";
import { Card } from "../../components/ui";
import { gaugeTiers, type GaugeTier } from "../../data/home";
import { palette, whiteA, withAlpha } from "../../theme/palette";
import { eyebrowGreen, gaugeAxisLabel, gaugePara, gaugeTitle, tierDesc, tierRange } from "./styles";

const TIER_COLOR: Record<GaugeTier["color"], string> = {
  green: palette.mint,
  amber: palette.amber,
  red: palette.coral,
};

const AXIS = [100, 50, 10];

export function GaugeExplainer() {
  return (
    // Carte bordée, contenu centré
    <Card className="flex h-98.25 w-full items-center justify-center gap-8.75">
      {/* Colonne texte */}
      <div className="flex w-160 shrink-0 flex-col gap-8">
        {/* Titre + intro */}
        <div className="flex flex-col gap-4">
          <p style={eyebrowGreen}>La jauge IA</p>
          <h2 style={gaugeTitle}>Plus elle monte, moins vous comptez.</h2>
          <p style={gaugePara}>
            À chaque mauvaise réponse — déléguer sans réfléchir, ignorer l'IA ou au contraire tout lui confier — la jauge grimpe. Elle mesure à quel point votre rôle pourrait être automatisé
            aujourd'hui.
          </p>
        </div>

        {/* Paliers */}
        <div className="flex flex-col gap-5">
          {gaugeTiers.map((tier) => {
            const accent = TIER_COLOR[tier.color];
            return (
              <div key={tier.level} className="flex items-center gap-3.25">
                <span className="w-11 shrink-0" style={{ ...tierRange, color: accent }}>
                  {tier.range}
                </span>
                <div className="h-1.25 w-61.5 shrink-0 overflow-hidden rounded-full" style={{ backgroundColor: withAlpha(accent, 0.2), border: `0.8px solid ${withAlpha(accent, 0.3)}` }}>
                  <div className="h-full rounded-full" style={{ width: "31%", backgroundColor: accent }} />
                </div>
                <span style={tierDesc}>
                  <span style={{ color: accent }}>{tier.level}</span>
                  <span style={{ fontWeight: 400, color: whiteA(0.5) }}> · </span>
                  <span style={{ fontWeight: 500, color: whiteA(0.5) }}>{tier.description}</span>
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Jauge verticale (mascottes + graduations + barre dégradée) */}
      <div className="flex h-69 items-stretch gap-3">
        <div className="flex flex-col justify-between">
          <Mascot mood={0} size={24} />
          <Mascot mood={50} size={24} />
          <Mascot mood={80} size={24} />
        </div>
        <div className="flex flex-col justify-between">
          {AXIS.map((level) => (
            <span key={level} style={gaugeAxisLabel}>
              {level}%
            </span>
          ))}
        </div>
        <div className="w-2 rounded-full" aria-hidden style={{ background: `linear-gradient(to bottom, ${palette.coral}, ${palette.amber} 49%, ${palette.mint})` }} />
      </div>
    </Card>
  );
}
