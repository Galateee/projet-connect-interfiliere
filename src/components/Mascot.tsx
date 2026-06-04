/**
 * Mascotte « IA ou pas IA ? » — un seul module pour les deux usages :
 *
 *   • <Mascot mood={n} />         mascotte STATIQUE (PNG) selon une humeur
 *                                 0 = serein/vert … 100 = paniqué/rouge.
 *                                 Utilisée dans les cartes (avis, jauge explicative).
 *
 *   • <MascotAnimated state />    mascotte ANIMÉE (Lottie) avec crossfade :
 *                                 idle (bleu) · angry (rouge, bonne réponse)
 *                                 · happy (vert, mauvaise réponse).
 *
 * Les fichiers Lottie vivent dans 'public/'
 * et sont chargés à la demande puis mis en cache.
 */
import { useEffect, useMemo, useRef, useState } from "react";
import Lottie, { type LottieRefCurrentProps } from "lottie-react";
import { palette, withAlpha } from "../theme/palette";

/* États & timing */

export type MascotState = "idle" | "angry" | "happy";

/** Durée d'affichage d'une réaction avant retour à 'idle' (ms). */
export const MASCOT_REACTION_MS = 5000;

/* Halo partagé */
const GLOW_BLUR_RATIO = 73.85 / 130;
const GLOW_ALPHA = 0.4;

/**
 * Filtre halo « gaussien » : trois drop-shadow de rayons croissants
 * (cœur dense + médian + large) qui épousent la forme de la mascotte.
 */
function glowFilter(color: string, blur: number): string {
  return `drop-shadow(0 0 ${blur * 0.35}px ${color}) drop-shadow(0 0 ${blur * 0.7}px ${color}) drop-shadow(0 0 ${blur}px ${color})`;
}

/* ───────────────────── Mascotte statique (PNG) ───────────────────── */

const NEUTRAL_THRESHOLD = 45;
const PANIC_THRESHOLD = 70;

function moodVariant(mood: number): { src: string; label: string; glow: string } {
  if (mood >= PANIC_THRESHOLD) return { src: "/mascot_rouge.png", label: "Mascotte inquiète", glow: withAlpha(palette.coral, GLOW_ALPHA) };
  if (mood >= NEUTRAL_THRESHOLD) return { src: "/mascot_jaune.png", label: "Mascotte neutre", glow: withAlpha(palette.amber, GLOW_ALPHA) };
  return { src: "/mascot_vert.png", label: "Mascotte sereine", glow: withAlpha(palette.mint, GLOW_ALPHA) };
}

type MascotProps = { mood?: number; size?: number; className?: string; glowBlur?: number };

export function Mascot({ mood = 0, size = 120, className, glowBlur }: MascotProps) {
  const { src, label, glow } = moodVariant(mood);
  const blur = glowBlur ?? size * GLOW_BLUR_RATIO;
  return <img src={src} width={size} height={size} className={className} style={{ objectFit: "contain", filter: glowFilter(glow, blur) }} alt={label} />;
}

/* ───────────────────── Mascotte animée (Lottie) ──────────────────── */

const ANIM_URL: Record<MascotState, string> = {
  idle: "/idle.json",
  angry: "/angry.json",
  happy: "/happy.json",
};

const LABEL: Record<MascotState, string> = {
  idle: "Mascotte au repos",
  angry: "Mascotte énervée",
  happy: "Mascotte réjouie",
};

const animCache = new Map<string, object>();

let preloadStarted = false;
function preloadAllAnimations(): void {
  if (preloadStarted) return;
  preloadStarted = true;
  for (const url of Object.values(ANIM_URL)) {
    if (animCache.has(url)) continue;
    fetch(url)
      .then((res) => (res.ok ? res.json() : null))
      .then((json: object | null) => {
        if (json) animCache.set(url, json);
      })
      .catch(() => {});
  }
}

function useLottie(url: string): object | null {
  const [, bump] = useState(0);
  const data = animCache.get(url) ?? null;
  useEffect(() => {
    if (animCache.has(url)) return;
    let cancelled = false;
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error(`Lottie introuvable: ${url} (${res.status})`);
        return res.json();
      })
      .then((json: object) => {
        animCache.set(url, json);
        if (!cancelled) bump((n) => n + 1);
      })
      .catch((err) => console.error(err));
    return () => {
      cancelled = true;
    };
  }, [url]);
  return data;
}

type MascotAnimatedProps = {
  state: MascotState;
  size?: number;
  className?: string;
  preload?: boolean;
  loop?: boolean;
};

export function MascotAnimated({ state, size = 120, className, preload = false, loop }: MascotAnimatedProps) {
  const cached = useLottie(ANIM_URL[state]);
  const sharpRef = useRef<LottieRefCurrentProps>(null);
  const glowRef = useRef<LottieRefCurrentProps>(null);

  useEffect(() => {
    if (preload) preloadAllAnimations();
  }, [preload]);

  const sharpData = useMemo(() => (cached ? structuredClone(cached) : null), [cached]);
  const glowData = useMemo(() => (cached ? structuredClone(cached) : null), [cached]);

  // Rejoue les deux couches depuis le début, en phase, à chaque changement d'état.
  useEffect(() => {
    if (!sharpData) return;
    sharpRef.current?.goToAndPlay(0, true);
    glowRef.current?.goToAndPlay(0, true);
  }, [sharpData]);

  const isLooping = loop ?? state === "idle";
  const blur = size * GLOW_BLUR_RATIO * 0.5;

  return (
    <div className={`relative inline-flex shrink-0 ${className ?? ""}`} role="img" aria-label={LABEL[state]} style={{ width: size, height: size }}>
      {sharpData && glowData && (
        <>
          {/* Halo = copie floutée de la même animation → même couleur, frame par frame. */}
          <Lottie
            lottieRef={glowRef}
            animationData={glowData}
            loop={isLooping}
            autoplay
            aria-hidden
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              filter: `blur(${blur}px)`,
              opacity: 0.7,
              transform: "scale(1.08)",
              pointerEvents: "none",
            }}
          />
          <Lottie lottieRef={sharpRef} animationData={sharpData} loop={isLooping} autoplay style={{ position: "relative", width: "100%", height: "100%" }} />
        </>
      )}
    </div>
  );
}
