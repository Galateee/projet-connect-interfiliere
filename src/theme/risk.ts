/**
 * Domaine « risque de remplacement » : couleur et palier en fonction d'un
 * pourcentage 0–100. Centralisé pour que la jauge du quiz et celle de la
 * landing partagent exactement la même logique vert → ambre → rouge.
 */
import { palette } from "./palette";

export type RiskLevel = "low" | "medium" | "high";

const MINT: [number, number, number] = [134, 239, 172];
const AMBER: [number, number, number] = [251, 191, 36];
const CORAL: [number, number, number] = [249, 112, 112];

export const clampPercent = (n: number): number => Math.min(100, Math.max(0, n));

function lerp(a: number, b: number, t: number): number {
  return Math.round(a + (b - a) * t);
}

/** Couleur interpolée vert → ambre → rouge selon le risque. */
export function riskColor(percent: number): string {
  const p = clampPercent(percent);
  const [from, to, t] = p < 50 ? [MINT, AMBER, p / 50] : [AMBER, CORAL, (p - 50) / 50];
  return `rgb(${lerp(from[0], to[0], t)}, ${lerp(from[1], to[1], t)}, ${lerp(from[2], to[2], t)})`;
}

type Tier = { level: RiskLevel; label: string; mood: number; color: string };

/** Palier (libellé + humeur de la mascotte + couleur d'accent). */
export function riskTier(percent: number): Tier {
  const p = clampPercent(percent);
  if (p > 60) return { level: "high", label: "Élevé", mood: 80, color: palette.coral };
  if (p >= 30) return { level: "medium", label: "Modéré", mood: 50, color: palette.amber };
  return { level: "low", label: "Faible", mood: 0, color: palette.mint };
}
