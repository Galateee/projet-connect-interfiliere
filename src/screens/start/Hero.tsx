import type { CSSProperties } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { MascotAnimated } from "../../components/Mascot";
import { PrimaryButton } from "../../components/ui";
import { eyebrowPink } from "./styles";

type HeroProps = {
  onStart: () => void;
};

// Titre
const headingStyle: CSSProperties = {
  fontFamily: '"Outfit", system-ui, sans-serif',
  fontWeight: 900,
  fontSize: "clamp(31px, 8.4vw, 55px)",
  lineHeight: "clamp(34px, 9.1vw, 59.84px)",
  letterSpacing: "-1.9px",
};

// Paragraphe
const paragraphStyle: CSSProperties = {
  fontFamily: '"Manrope", system-ui, sans-serif',
  fontWeight: 400,
  fontSize: "16.8px",
  lineHeight: "28.56px",
  color: "rgba(255, 255, 255, 0.55)",
};

// Sous-texte du bouton
const subTextStyle: CSSProperties = {
  fontFamily: '"Outfit", system-ui, sans-serif',
  fontWeight: 400,
  fontSize: "12.48px",
  lineHeight: "18.72px",
  color: "rgba(255, 255, 255, 0.28)",
};

export function Hero({ onStart }: HeroProps) {
  return (
    // Pile verticale centrée
    <div className="flex w-full max-w-127.25 flex-col items-center gap-6.5 text-center">
      <MascotAnimated state="idle" size={110} className="animate-float -mb-6" />

      <p style={eyebrowPink}>Quiz — Managers &amp; Intelligence Artificielle</p>

      <h1 className="lg:whitespace-nowrap" style={headingStyle}>
        Pourriez-vous être
        <br />
        remplacé par une IA ?
      </h1>

      <p className="max-w-110" style={paragraphStyle}>
        Répondez à 8 situations inspirées du quotidien des managers et découvrez à quel point l'IA pourrait accomplir vos missions aujourd'hui.
      </p>

      {/* Bouton + sous-texte */}
      <div className="flex w-full flex-col items-center gap-3.75 lg:w-auto">
        <PrimaryButton onClick={onStart} className="w-full lg:w-auto">
          Commencer l'évaluation <FontAwesomeIcon icon={faArrowRight} />
        </PrimaryButton>
        <p className="text-center" style={subTextStyle}>
          8 questions · ~5 minutes
        </p>
      </div>
    </div>
  );
}
