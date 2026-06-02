import { Mascot } from "../../components/Mascot";
import { testimonials } from "../../data/home";
import { Card, SectionHeader } from "../../components/ui";
import { type RiskLevel, riskTier } from "../../theme/risk";
import { testiAuthor, testiQuote, testiRole, testiScore, testiTitle } from "./styles";

const INVERTED_MOOD: Record<RiskLevel, number> = { low: 80, medium: 50, high: 0 };

export function Testimonials() {
  return (
    // En-tête + rangée de cartes
    <section className="flex w-full flex-col items-center gap-8.75">
      {/* En-tête */}
      <SectionHeader eyebrow="Ils ont passé le test" title="Certains en rient. D'autres ont mis à jour leur CV." titleStyle={testiTitle} />

      {/* Cartes avis */}
      <div className="flex w-full flex-wrap justify-center gap-y-6 lg:flex-nowrap lg:justify-between">
        {testimonials.map((t, i) => {
          const tier = riskTier(t.score);
          const color = tier.color;
          return (
            <Card key={i} className="flex h-65 w-73.25 flex-col justify-center gap-5 px-6.25">
              {/* Mascotte + jauge d'avis */}
              <div className="flex items-center gap-3">
                <Mascot mood={INVERTED_MOOD[tier.level]} size={32} />
                <div className="flex flex-1 flex-col items-end gap-1">
                  <span style={{ ...testiScore, color }}>{t.score}%</span>
                  <div className="h-1 w-full overflow-hidden rounded-full bg-white/8">
                    <div className="h-full rounded-full" style={{ width: `${t.score}%`, backgroundColor: color }} />
                  </div>
                </div>
              </div>

              <p style={testiQuote}>« {t.quote} »</p>

              {/* Auteur + rôle */}
              <div className="flex flex-col">
                <span style={testiAuthor}>{t.author}</span>
                <span style={testiRole}>{t.role}</span>
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
