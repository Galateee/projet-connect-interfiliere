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

      {/* Cartes stat */}
      <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-3">
        {stats.map((stat) => (
          <Card key={stat.value} className="flex h-48.25 flex-col justify-center gap-2.5 px-6">
            <p style={statValue}>{stat.value}</p>
            <p style={statLabel}>{stat.label}</p>
            <p className="pt-[3.2px]" style={statSource}>
              {stat.source}
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
}
