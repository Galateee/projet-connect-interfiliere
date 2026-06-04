import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt, faChartColumn, faClipboard } from "@fortawesome/free-solid-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { steps, type StepIcon } from "../../data/home";
import { Card, SectionHeader } from "../../components/ui";
import { instrDesc, instrIcon, instrNumber, instrTitle } from "./styles";

const STEP_ICONS: Record<StepIcon, IconDefinition> = {
  clipboard: faClipboard,
  bolt: faBolt,
  chart: faChartColumn,
};

export function HowItWorks() {
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

      {/* cartes instructions */}
      <div className="flex w-full flex-wrap justify-center gap-y-6 lg:flex-nowrap lg:justify-between">
        {steps.map((step) => (
          <Card key={step.number} className="flex w-full flex-col gap-4 px-6.25 py-6 lg:h-65.5 lg:w-[288px] lg:justify-center lg:py-0">
            {/* Icône + numéro */}
            <div className="flex items-center justify-between">
              <FontAwesomeIcon icon={STEP_ICONS[step.icon]} style={{ ...instrIcon, color: "#fff" }} />
              <span style={instrNumber}>{step.number}</span>
            </div>
            {/* Titre + description */}
            <div className="flex flex-col gap-2.5">
              <h3 style={instrTitle}>{step.title}</h3>
              <p style={instrDesc}>{step.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
