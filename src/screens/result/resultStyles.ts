/**
 * Styles typographiques de l'écran de résultats.
 * couleurs issues de la palette partagée.
 */
import type { CSSProperties } from "react";
import { palette } from "../../theme/palette";

const OUTFIT = '"Outfit", system-ui, sans-serif';
const MANROPE = '"Manrope", system-ui, sans-serif';
const INTER = '"Inter", system-ui, sans-serif';

const MUTED = "rgba(255, 255, 255, 0.55)";
const FAINT = "rgba(255, 255, 255, 0.35)";

/* — Carte héro (verdict) — */
export const heroTitle: CSSProperties = {
  fontFamily: OUTFIT,
  fontWeight: 900,
  fontSize: "clamp(20px, 5.4vw, 36px)",
  lineHeight: "clamp(24px, 6vw, 43px)",
  letterSpacing: "-0.7px",
  color: "#fff",
};
export const heroSubtitle: CSSProperties = {
  fontFamily: MANROPE,
  fontWeight: 500,
  fontSize: "15px",
  lineHeight: "24px",
  color: MUTED,
};

/* — Jauge horizontale — */
export const gaugeEdge: CSSProperties = {
  fontFamily: OUTFIT,
  fontWeight: 500,
  fontSize: "11px",
  lineHeight: "16px",
  color: FAINT,
};
export const gaugeValue: CSSProperties = {
  fontFamily: OUTFIT,
  fontWeight: 800,
  fontSize: "14px",
  lineHeight: "20px",
  letterSpacing: "-0.2px",
};

/* — Chips de stats — */
export const statNumber: CSSProperties = {
  fontFamily: OUTFIT,
  fontWeight: 900,
  fontSize: "clamp(20px, 5.4vw, 26px)",
  lineHeight: "clamp(24px, 6.4vw, 30px)",
  letterSpacing: "-0.6px",
};
export const statCaption: CSSProperties = {
  fontFamily: MANROPE,
  fontWeight: 500,
  fontSize: "clamp(8.5px, 2.3vw, 11.5px)",
  lineHeight: "clamp(12px, 3vw, 16px)",
  color: "rgba(255, 255, 255, 0.4)",
};

/* — Carte formation — */
export const formationEyebrow: CSSProperties = {
  fontFamily: OUTFIT,
  fontWeight: 700,
  fontSize: "11px",
  lineHeight: "16px",
  letterSpacing: "1.5px",
  textTransform: "uppercase",
  color: palette.green,
};
export const formationTitle: CSSProperties = {
  fontFamily: OUTFIT,
  fontWeight: 800,
  fontSize: "22px",
  lineHeight: "30px",
  letterSpacing: "-0.4px",
  color: "#fff",
};
export const formationPara: CSSProperties = {
  fontFamily: MANROPE,
  fontWeight: 500,
  fontSize: "14px",
  lineHeight: "22px",
  color: MUTED,
};
export const pillarTitle: CSSProperties = {
  fontFamily: OUTFIT,
  fontWeight: 700,
  fontSize: "13px",
  lineHeight: "18px",
  color: "#fff",
};
export const pillarDesc: CSSProperties = {
  fontFamily: MANROPE,
  fontWeight: 500,
  fontSize: "12px",
  lineHeight: "18px",
  color: "rgba(255, 255, 255, 0.45)",
};

/* — Récapitulatif — */
export const recapEyebrow: CSSProperties = {
  fontFamily: OUTFIT,
  fontWeight: 700,
  fontSize: "11px",
  lineHeight: "16px",
  letterSpacing: "1.5px",
  textTransform: "uppercase",
  color: FAINT,
};
export const recapTitle: CSSProperties = {
  fontFamily: OUTFIT,
  fontWeight: 800,
  fontSize: "22px",
  lineHeight: "30px",
  letterSpacing: "-0.4px",
  color: "#fff",
};
export const questionLabel: CSSProperties = {
  fontFamily: OUTFIT,
  fontWeight: 700,
  fontSize: "10px",
  lineHeight: "15px",
  letterSpacing: "1px",
  textTransform: "uppercase",
  color: "rgba(255, 255, 255, 0.4)",
};
export const answerTag: CSSProperties = {
  fontFamily: INTER,
  fontWeight: 500,
  fontSize: "11px",
  lineHeight: "16px",
};
export const recapScenario: CSSProperties = {
  fontFamily: MANROPE,
  fontWeight: 500,
  fontSize: "14px",
  lineHeight: "22px",
  color: "rgba(255, 255, 255, 0.85)",
};
export const yourAnswerLabel: CSSProperties = {
  fontFamily: OUTFIT,
  fontWeight: 700,
  fontSize: "13px",
  lineHeight: "20px",
};
export const yourAnswerText: CSSProperties = {
  fontFamily: MANROPE,
  fontWeight: 500,
  fontSize: "13px",
  lineHeight: "20px",
  color: "rgba(255, 255, 255, 0.6)",
};
export const recapOptionLetter: CSSProperties = {
  fontFamily: OUTFIT,
  fontWeight: 800,
  fontSize: "12px",
  lineHeight: "18px",
};
export const recapOptionText: CSSProperties = {
  fontFamily: MANROPE,
  fontWeight: 500,
  fontSize: "13px",
  lineHeight: "20px",
  color: "rgba(255, 255, 255, 0.85)",
};

/* — Encart explication (déplié) — */
export const explanationLabel: CSSProperties = {
  fontFamily: OUTFIT,
  fontWeight: 700,
  fontSize: "10.5px",
  lineHeight: "20px",
  letterSpacing: "1px",
  textTransform: "uppercase",
  color: "rgba(255, 255, 255, 0.7)",
};
export const explanationText: CSSProperties = {
  fontFamily: MANROPE,
  fontWeight: 500,
  fontSize: "13px",
  lineHeight: "20px",
  color: "rgba(255, 255, 255, 0.6)",
};
