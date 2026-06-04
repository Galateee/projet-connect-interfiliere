import { stats } from "../../data/home";
import { Card, SectionHeader } from "../../components/ui";
import { statLabel, statSource, statValue } from "./styles";

export function StatsRow() {
  return (
    // En-tête + rangée de cartes
    <section className="flex w-full flex-col items-center gap-8.75">
      <SectionHeader
        eyebrow="Pourquoi ça compte"
        title={
          <>
            L'IA ne fait pas que prédire le futur.
            <br />
            Elle le façonne déjà.
          </>
        }
      />

      {/* Cartes stat — lignes sur mobile, cartes colonnes sur desktop */}
      <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-3">
        {stats.map((stat) => (
          <Card key={stat.value} className="flex flex-row items-center gap-4 px-6 py-5 md:h-48.25 md:flex-col md:items-stretch md:justify-center md:gap-2.5 md:py-0">
            <p className="shrink-0" style={statValue}>
              {stat.value}
            </p>
            <div className="flex flex-col gap-1 md:contents">
              <p style={statLabel}>{stat.label}</p>
              <p className="md:pt-[3.2px]" style={statSource}>
                {stat.source}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
