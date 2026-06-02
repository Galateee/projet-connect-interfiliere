import type { CSSProperties, ReactNode } from "react";
import { eyebrowPink, sectionTitle } from "../screens/start/styles";

type SectionHeaderProps = {
  eyebrow: ReactNode;
  title: ReactNode;
  eyebrowStyle?: CSSProperties;
  titleStyle?: CSSProperties;
};

/** En-tête de section centré : eyebrow + titre. */
export function SectionHeader({ eyebrow, title, eyebrowStyle = eyebrowPink, titleStyle = sectionTitle }: SectionHeaderProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <p style={eyebrowStyle}>{eyebrow}</p>
      <h2 style={titleStyle}>{title}</h2>
    </div>
  );
}

/** Carte de surface. */
export function Card({ children, className = "", style }: { children: ReactNode; className?: string; style?: CSSProperties }) {
  return (
    <div className={`rounded-[20px] border border-white/9 bg-white/4 ${className}`} style={style}>
      {children}
    </div>
  );
}

type PrimaryButtonProps = {
  onClick?: () => void;
  children: ReactNode;
  className?: string;
};

/** Bouton d'action principal. */
export function PrimaryButton({ onClick, children, className = "" }: PrimaryButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex items-center justify-center gap-2.5 rounded-[43px] bg-pink transition-colors hover:bg-pink-strong ${className}`}
      style={{
        height: "53px",
        padding: "10px 41px",
        fontFamily: '"Outfit", system-ui, sans-serif',
        fontWeight: 700,
        fontSize: "16px",
        lineHeight: "24px",
        letterSpacing: "0.16px",
        color: "rgba(0, 0, 0, 0.75)",
      }}>
      {children}
    </button>
  );
}
