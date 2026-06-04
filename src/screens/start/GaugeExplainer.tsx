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

// Remplissage indicatif de la barre par palier.
const TIER_FILL: Record<GaugeTier["color"], string> = {
  green: "15%",
  amber: "45%",
  red: "75%",
};

const AXIS = [100, 50, 10];

export function GaugeExplainer() {
  return (
    // Carte bordée : colonne sur mobile, deux colonnes centrées sur desktop
    <Card className="flex w-full flex-col items-stretch gap-8 p-6 lg:h-98.25 lg:flex-row lg:items-center lg:justify-center lg:gap-8.75 lg:p-0">
      {/* Colonne texte */}
      <div className="flex w-full flex-col gap-8 lg:w-160 lg:shrink-0">
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
              <div key={tier.level} className="flex flex-col items-start gap-2 lg:flex-row lg:items-center lg:gap-3.25">
                <span className="w-11 shrink-0" style={{ ...tierRange, color: accent }}>
                  {tier.range}
                </span>
                <div className="h-1.25 w-full shrink-0 overflow-hidden rounded-full lg:w-61.5" style={{ backgroundColor: withAlpha(accent, 0.2), border: `0.8px solid ${withAlpha(accent, 0.3)}` }}>
                  <div className="h-full rounded-full" style={{ width: TIER_FILL[tier.color], backgroundColor: accent }} />
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

      {/* Jauge verticale (mascottes + graduations + barre dégradée) — desktop seulement */}
      <div className="hidden h-69 items-stretch gap-3 lg:flex">
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
