import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { MascotAnimated } from "../../components/Mascot";
import { PrimaryButton } from "../../components/ui";
import { ctaPara, ctaSubtext, ctaTitle } from "./styles";

type FinalCtaProps = {
  onStart: () => void;
};

export function FinalCta({ onStart }: FinalCtaProps) {
  return (
    <section className="flex w-full max-w-181 flex-col items-center gap-10 text-center">
      <MascotAnimated state="idle" size={98} className="animate-float -mb-8" />

      {/* Titre + paragraphe */}
      <div className="flex flex-col gap-6.25">
        <h2 style={ctaTitle}>Prêts à tester vos compétences&nbsp;?</h2>
        {/* Paragraphe */}
        <p style={ctaPara}>
          Dix situations concrètes, cinq minutes, un verdict sans détour. Découvrez dès maintenant à quel point votre rôle résiste à l'IA — et repartez avec des pistes pour rester indispensable.
        </p>
      </div>

      {/* Bouton + sous-texte */}
      <div className="flex flex-col items-center gap-3.75">
        <PrimaryButton onClick={onStart}>
          Commencer l'évaluation <FontAwesomeIcon icon={faArrowRight} />
        </PrimaryButton>
        <p style={ctaSubtext}>Gratuit · Sans inscription · Résultats instantanés</p>
      </div>
    </section>
  );
}
