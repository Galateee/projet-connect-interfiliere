import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Hero } from "./start/Hero";
import { StatsRow } from "./start/StatsRow";
import { HowItWorks } from "./start/HowItWorks";
import { GaugeExplainer } from "./start/GaugeExplainer";
import { Testimonials } from "./start/Testimonials";
import { FinalCta } from "./start/FinalCta";

type StartScreenProps = {
  onStart: () => void;
};

/** Séparateur entre sections (mobile uniquement) */
function MobileDivider() {
  return <div aria-hidden className="h-px w-40 shrink-0 lg:hidden" style={{ background: "linear-gradient(to right, transparent, rgba(255, 255, 255, 0.25), transparent)" }} />;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar
        cta={{
          label: (
            <>
              <span className="lg:hidden">Commencer</span>
              <span className="hidden lg:inline">Commencer l'évaluation</span>
            </>
          ),
          onClick: onStart,
        }}
      />
      <main className="w-full px-6">
        <div className="mx-auto flex w-full max-w-238.25 flex-col items-center gap-11 pt-12 pb-16 lg:gap-32.75 lg:pt-17 lg:pb-25.5">
          <Hero onStart={onStart} />
          <MobileDivider />
          <StatsRow />
          <MobileDivider />
          <HowItWorks />
          <MobileDivider />
          <GaugeExplainer />
          <MobileDivider />
          <Testimonials />
          <MobileDivider />
          <div className="flex w-full justify-center lg:-mt-7.25">
            <FinalCta onStart={onStart} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
