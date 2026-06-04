/**
 * Styles typographiques de l'écran de quiz
 */
import type { CSSProperties } from "react";
import { palette } from "../../theme/palette";

const OUTFIT = '"Outfit", system-ui, sans-serif';
const MANROPE = '"Manrope", system-ui, sans-serif';
const INTER = '"Inter", system-ui, sans-serif';

// — Header —
export const headerLink: CSSProperties = {
  fontFamily: OUTFIT,
  fontWeight: 400,
  fontSize: "15px",
  lineHeight: "22.8px",
  letterSpacing: "-0.3px",
  color: "rgba(255, 255, 255, 0.5)",
};

// — Timeline —
export const timelineLabel: CSSProperties = {
  fontFamily: OUTFIT,
  fontWeight: 400,
  fontSize: "12px",
  lineHeight: "18px",
  letterSpacing: "0.6px",
  color: "rgba(255, 255, 255, 0.35)",
};

// — Carte question —
export const situationEyebrow: CSSProperties = {
  fontFamily: OUTFIT,
  fontWeight: 700,
  fontSize: "clamp(10px, 1.5vw, 10.4px)",
  lineHeight: "15.6px",
  letterSpacing: "1.46px",
  textTransform: "uppercase",
  color: palette.pink,
};
export const scenarioText: CSSProperties = {
  fontFamily: MANROPE,
  fontWeight: 500,
  fontSize: "clamp(14px, 2.5vw, 17.28px)",
  lineHeight: "clamp(20px, 3.6vw, 28.51px)",
  color: "rgba(255, 255, 255, 0.92)",
};

// — Réponses —
export const answerLetter: CSSProperties = {
  fontFamily: OUTFIT,
  fontWeight: 800,
  fontSize: "12.48px",
  lineHeight: "18.72px",
};
export const answerText: CSSProperties = {
  fontFamily: MANROPE,
  fontWeight: 500,
  fontSize: "clamp(14px, 2.4vw, 14.72px)",
  lineHeight: "clamp(20px, 3.4vw, 22.08px)",
  color: "rgba(255, 255, 255, 0.85)",
};
export const answerNumber: CSSProperties = {
  fontFamily: OUTFIT,
  fontWeight: 500,
  fontSize: "10.4px",
  lineHeight: "15.6px",
  color: "rgba(255, 255, 255, 0.2)",
};
export const goodAnswerTag: CSSProperties = {
  fontFamily: INTER,
  fontWeight: 500,
  fontSize: "11.52px",
  lineHeight: "17.28px",
  color: palette.mint,
};

// — Encart commentaire (feedback) —
export const commentText: CSSProperties = {
  fontFamily: OUTFIT,
  fontWeight: 700,
  fontSize: "14px",
  lineHeight: "23.1px",
};

// — Encart explication IA —
export const hintLabel: CSSProperties = {
  fontFamily: OUTFIT,
  fontWeight: 700,
  fontSize: "11.2px",
  lineHeight: "18.48px",
  letterSpacing: "1.12px",
  textTransform: "uppercase",
  color: palette.purpleSoft,
};
export const hintText: CSSProperties = {
  fontFamily: MANROPE,
  fontWeight: 500,
  fontSize: "14px",
  lineHeight: "23.1px",
  color: "rgba(255, 255, 255, 0.8)",
};

// — Boutons —
export const secondaryBtnText: CSSProperties = {
  fontFamily: OUTFIT,
  fontWeight: 600,
  fontSize: "13.12px",
  lineHeight: "19.68px",
  color: palette.pinkSoft,
};
export const validateBtnText: CSSProperties = {
  fontFamily: OUTFIT,
  fontWeight: 700,
  fontSize: "16px",
  lineHeight: "24px",
  letterSpacing: "0.16px",
  color: "#000",
};
export const nextBtnText: CSSProperties = {
  fontFamily: OUTFIT,
  fontWeight: 700,
  fontSize: "13.6px",
  lineHeight: "20.4px",
  color: "rgba(0, 0, 0, 0.8)",
};

// — Jauge latérale —
export const gaugeAxis: CSSProperties = {
  fontFamily: OUTFIT,
  fontWeight: 400,
  fontSize: "8.8px",
  lineHeight: "8.8px",
  color: "rgba(255, 255, 255, 0.3)",
  textAlign: "right",
};
export const gaugePercent: CSSProperties = {
  fontFamily: OUTFIT,
  fontWeight: 800,
  fontSize: "14.4px",
  lineHeight: "21.6px",
  letterSpacing: "-0.29px",
  textAlign: "right",
};
export const gaugeCaption: CSSProperties = {
  fontFamily: OUTFIT,
  fontWeight: 400,
  fontSize: "9.28px",
  lineHeight: "12.99px",
  color: "rgba(255, 255, 255, 0.3)",
  textAlign: "right",
};
export const gaugeTierLabel: CSSProperties = {
  fontFamily: OUTFIT,
  fontWeight: 700,
  fontSize: "9.6px",
  lineHeight: "14.4px",
  letterSpacing: "1.15px",
  textTransform: "uppercase",
};
