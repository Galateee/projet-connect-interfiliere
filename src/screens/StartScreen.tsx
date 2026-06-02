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

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar onStart={onStart} />
      <main className="w-full px-6">
        <div className="mx-auto flex w-full max-w-238.25 flex-col items-center gap-32.75 pt-17 pb-25.5">
          <Hero onStart={onStart} />
          <StatsRow />
          <HowItWorks />
          <GaugeExplainer />
          <Testimonials />
          <div className="-mt-7.25 flex w-full justify-center">
            <FinalCta onStart={onStart} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
