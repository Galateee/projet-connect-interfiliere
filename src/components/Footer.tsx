import type { CSSProperties } from "react";
import { BAR_BG, whiteA } from "../theme/palette";
import { Mascot } from "./Mascot";

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
      className="flex h-18 items-center justify-between px-25"
      style={{
        backgroundColor: BAR_BG,
        borderTop: `1px solid ${whiteA(0.45)}`,
      }}>
      {/* mascotte + nom */}
      <div className="flex items-center gap-3.75">
        <Mascot size={20} />
        <span style={footerText}>IA ou pas IA ? · Quiz pour managers</span>
      </div>

      {/* liens légaux */}
      <div className="flex items-center gap-1" style={footerText}>
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
