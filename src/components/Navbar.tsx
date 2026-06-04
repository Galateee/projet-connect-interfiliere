import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { BAR_BG, whiteA } from "../theme/palette";

type NavbarProps = {
  onStart: () => void;
};

export function Navbar({ onStart }: NavbarProps) {
  return (
    <header
      className="sticky top-0 z-50 backdrop-blur-md"
      style={{
        backgroundColor: BAR_BG,
        borderBottom: `1px solid ${whiteA(0.2)}`,
      }}>
      <nav className="flex h-18 items-center justify-between px-25">
        <img src="/logo.png" width={129} height={29.97} alt="Manager IA Academy" style={{ objectFit: "contain" }} />
        <button
          type="button"
          onClick={onStart}
          className="flex items-center justify-center gap-2.5 rounded-[43px] bg-pink px-3.25 py-1.5 transition-colors hover:bg-pink-strong"
          style={{
            fontFamily: '"Outfit", system-ui, sans-serif',
            fontWeight: 700,
            fontSize: "13px",
            lineHeight: "24px",
            letterSpacing: "0.16px",
            color: "rgba(0, 0, 0, 0.75)",
          }}>
          Commencer l'évaluation <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </nav>
    </header>
  );
}
