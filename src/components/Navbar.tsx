import type { CSSProperties, ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { BAR_BG, whiteA } from "../theme/palette";

type NavAction = { label: string; onClick: () => void };

type NavbarProps = {
  back?: NavAction;
  onLogoClick?: () => void;
  cta?: NavAction;
  right?: ReactNode;
};

const BACK_LINK: CSSProperties = {
  fontFamily: '"Outfit", system-ui, sans-serif',
  fontWeight: 400,
  fontSize: "15px",
  lineHeight: "22.8px",
  letterSpacing: "-0.3px",
};

const CTA_TEXT: CSSProperties = {
  fontFamily: '"Outfit", system-ui, sans-serif',
  fontWeight: 700,
  fontSize: "13px",
  lineHeight: "24px",
  letterSpacing: "0.16px",
  color: "rgba(0, 0, 0, 0.75)",
};

function Logo() {
  return <img src="/logo.png" width={129} height={29.97} alt="Manager IA Academy" style={{ objectFit: "contain" }} />;
}

/**
 * Barre de navigation partagée, déclinable par page :
 *   • Accueil    → logo + CTA « Commencer l'évaluation »
 *   • Quiz       → retour accueil + compteur de questions
 *   • Résultats  → retour accueil + CTA « Recommencer l'évaluation »
 */
export function Navbar({ back, onLogoClick, cta, right }: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md" style={{ backgroundColor: BAR_BG, borderBottom: `1px solid ${whiteA(0.2)}` }}>
      <nav className="flex h-18 items-center justify-between px-25">
        {back ? (
          <button type="button" onClick={back.onClick} className="flex items-center gap-2 text-white/50 transition-colors hover:text-white" style={BACK_LINK}>
            <FontAwesomeIcon icon={faArrowLeft} />
            {back.label}
          </button>
        ) : onLogoClick ? (
          <button type="button" onClick={onLogoClick} className="cursor-pointer">
            <Logo />
          </button>
        ) : (
          <Logo />
        )}

        {cta ? (
          <button
            type="button"
            onClick={cta.onClick}
            className="flex items-center justify-center gap-2.5 rounded-[43px] bg-pink px-3.25 py-1.5 transition-colors hover:bg-pink-strong"
            style={CTA_TEXT}>
            {cta.label} <FontAwesomeIcon icon={faArrowRight} />
          </button>
        ) : (
          right
        )}
      </nav>
    </header>
  );
}
