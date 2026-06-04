import type { CSSProperties } from "react";
import { BAR_BG, whiteA } from "../theme/palette";

const footerText: CSSProperties = {
  fontFamily: '"Outfit", system-ui, sans-serif',
  fontWeight: 400,
  fontSize: "12.48px",
  lineHeight: "18.72px",
  letterSpacing: "0px",
  color: whiteA(0.45),
};

export function Footer() {
  return (
    <footer
      className="flex flex-col items-center justify-center gap-3 px-5 py-6 text-center lg:h-18 lg:flex-row lg:justify-between lg:gap-0 lg:px-25 lg:py-0"
      style={{
        backgroundColor: BAR_BG,
        borderTop: `1px solid ${whiteA(0.45)}`,
      }}>
      {/* logo */}
      <img src="/logo.png" width={85} height={19.75} alt="Manager IA Academy" style={{ objectFit: "contain" }} />

      {/* liens légaux — masqués sur mobile */}
      <div className="hidden items-center gap-1 lg:flex" style={footerText}>
        <a href="#" className="transition-colors hover:text-text">
          Mentions légales
        </a>
        <span aria-hidden>|</span>
        <a href="#" className="transition-colors hover:text-text">
          Politique de confidentialité
        </a>
      </div>
    </footer>
  );
}
