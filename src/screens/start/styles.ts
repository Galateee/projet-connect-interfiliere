/**
 * Styles typographiques de la landing page
 */
import type { CSSProperties } from "react";
import { palette } from "../../theme/palette";

const OUTFIT = '"Outfit", system-ui, sans-serif';
const MANROPE = '"Manrope", system-ui, sans-serif';

// — En-têtes de section —
export const eyebrowPink: CSSProperties = {
  fontFamily: OUTFIT,
  fontWeight: 600,
  fontSize: "11.52px",
  lineHeight: "17.28px",
  letterSpacing: "2.0736px",
  textTransform: "uppercase",
  color: palette.pink,
};

export const sectionTitle: CSSProperties = {
  fontFamily: OUTFIT,
  fontWeight: 900,
  fontSize: "clamp(28px, 6.2vw, 40px)",
  lineHeight: "clamp(34px, 7.8vw, 50.4px)",
  letterSpacing: "0.16px",
  color: "#fff",
};

export const testiTitle: CSSProperties = {
  ...sectionTitle,
  lineHeight: "clamp(31px, 6.9vw, 44.16px)",
  letterSpacing: "-1.152px",
};

export const ctaTitle: CSSProperties = {
  fontFamily: OUTFIT,
  fontWeight: 900,
  fontSize: "clamp(30px, 8vw, 48px)",
  lineHeight: "clamp(38px, 10vw, 60.48px)",
  letterSpacing: "-1.152px",
  color: "#fff",
};

// — Cartes stat —
export const statValue: CSSProperties = {
  fontFamily: OUTFIT,
  fontWeight: 900,
  fontSize: "48px",
  lineHeight: "48px",
  letterSpacing: "-1.92px",
  color: palette.pink,
};
export const statLabel: CSSProperties = {
  fontFamily: MANROPE,
  fontWeight: 500,
  fontSize: "14.72px",
  lineHeight: "22.82px",
  color: "rgba(255, 255, 255, 0.75)",
};
export const statSource: CSSProperties = {
  fontFamily: MANROPE,
  fontWeight: 500,
  fontSize: "11.52px",
  lineHeight: "17.28px",
  color: "rgba(255, 255, 255, 0.3)",
};

// — Cartes instructions —
export const instrIcon: CSSProperties = {
  fontFamily: OUTFIT,
  fontWeight: 400,
  fontSize: "32px",
  lineHeight: 1,
};
export const instrNumber: CSSProperties = {
  fontFamily: OUTFIT,
  fontWeight: 900,
  fontSize: "48px",
  lineHeight: "48px",
  letterSpacing: "-1.92px",
  color: "rgba(255, 255, 255, 0.2)",
};
export const instrTitle: CSSProperties = {
  fontFamily: OUTFIT,
  fontWeight: 800,
  fontSize: "17.6px",
  lineHeight: "26.4px",
  letterSpacing: "-0.352px",
  color: "#fff",
};
export const instrDesc: CSSProperties = {
  fontFamily: MANROPE,
  fontWeight: 500,
  fontSize: "14px",
  lineHeight: "23.76px",
  color: "rgba(255, 255, 255, 0.5)",
};

// — Jauge —
export const eyebrowGreen: CSSProperties = {
  fontFamily: OUTFIT,
  fontWeight: 600,
  fontSize: "12px",
  lineHeight: "17.28px",
  letterSpacing: "2.0736px",
  textTransform: "uppercase",
  color: palette.green,
};
export const gaugeTitle: CSSProperties = {
  fontFamily: OUTFIT,
  fontWeight: 900,
  fontSize: "clamp(24px, 6vw, 32px)",
  lineHeight: "clamp(29px, 7.2vw, 38.4px)",
  letterSpacing: "-0.96px",
  color: "#fff",
};
export const gaugePara: CSSProperties = {
  fontFamily: MANROPE,
  fontWeight: 500,
  fontSize: "15px",
  lineHeight: "25.84px",
  color: "rgba(255, 255, 255, 0.5)",
};
/** Couleur ajoutée au point d'usage selon le palier. */
export const tierRange: CSSProperties = {
  fontFamily: OUTFIT,
  fontWeight: 700,
  fontSize: "11.2px",
  lineHeight: "16.8px",
};
// Base du texte de palier (Figma : Manrope, niveau en 700 / sépa 400 / desc 500).
export const tierDesc: CSSProperties = {
  fontFamily: MANROPE,
  fontWeight: 700,
  fontSize: "12.48px",
  lineHeight: "18.72px",
  letterSpacing: "0px",
};
export const gaugeAxisLabel: CSSProperties = {
  fontFamily: OUTFIT,
  fontWeight: 700,
  fontSize: "10.4px",
  lineHeight: "15.6px",
  color: "rgba(255, 255, 255, 0.5)",
};

// — Cartes avis —
export const testiQuote: CSSProperties = {
  fontFamily: MANROPE,
  fontWeight: 500,
  fontSize: "15px",
  lineHeight: "24.29px",
  color: "rgba(255, 255, 255, 0.7)",
};
export const testiScore: CSSProperties = {
  fontFamily: OUTFIT,
  fontWeight: 700,
  fontSize: "12px",
  lineHeight: "18px",
  textAlign: "right",
};
export const testiAuthor: CSSProperties = {
  fontFamily: OUTFIT,
  fontWeight: 700,
  fontSize: "14.08px",
  lineHeight: "21.12px",
  color: "#fff",
};
export const testiRole: CSSProperties = {
  fontFamily: MANROPE,
  fontWeight: 500,
  fontSize: "13px",
  lineHeight: "18.72px",
  color: "rgba(255, 255, 255, 0.35)",
};

// — CTA finale —
export const ctaPara: CSSProperties = {
  fontFamily: MANROPE,
  fontWeight: 500,
  fontSize: "16px",
  lineHeight: "25.84px",
  textAlign: "center",
  color: "rgba(255, 255, 255, 0.5)",
};
export const ctaSubtext: CSSProperties = {
  fontFamily: OUTFIT,
  fontWeight: 400,
  fontSize: "12.48px",
  lineHeight: "18.72px",
  textAlign: "center",
  color: "rgba(255, 255, 255, 0.2)",
};
