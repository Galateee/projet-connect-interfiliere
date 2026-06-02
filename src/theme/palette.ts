/**
 * Source unique des couleurs d'accent du produit (alignées sur le Figma).
 * Tout le reste — composants, styles, jauges — doit importer d'ici plutôt
 * que de répéter des valeurs hex en dur.
 */
export const palette = {
  pink: "#f9a8d4",
  pinkSoft: "#fac6fc",
  mint: "#86efac",
  amber: "#fbbf24",
  coral: "#f97070",
  red: "#ff2727",
  green: "#72ff67",
  purple: "#a855f7",
  purpleSoft: "#c4b5fd",
} as const;

/** Blanc avec opacité — raccourci pour les surfaces/textes atténués. */
export const whiteA = (alpha: number): string => `rgba(255, 255, 255, ${alpha})`;

/** Chrome partagé : fond de la barre frostée (header / footer). */
export const BAR_BG = "rgba(7, 7, 7, 0.25)";

/** Convertit un hex (#rrggbb) en rgba() avec l'opacité donnée. */
export function withAlpha(hex: string, alpha: number): string {
  const n = Number.parseInt(hex.slice(1), 16);
  const r = (n >> 16) & 255;
  const g = (n >> 8) & 255;
  const b = n & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

/** Surface teintée (fond translucide + bordure fine) — encarts feedback/indice. */
export function tintedSurface(hex: string, bgAlpha = 0.1, borderAlpha = 0.3): { backgroundColor: string; border: string } {
  return {
    backgroundColor: withAlpha(hex, bgAlpha),
    border: `0.8px solid ${withAlpha(hex, borderAlpha)}`,
  };
}
