import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { whiteA } from "../../theme/palette";

type VideoModalProps = {
  open: boolean;
  onClose: () => void;
  src: string;
  poster?: string;
};

/**
 * Lecteur vidéo en superposition : vidéo au premier plan,
 * arrière-plan flouté et assombri, fermeture via la croix, le clic en
 * dehors ou la touche Échap.
 */
export function VideoModal({ open, onClose, src, poster }: VideoModalProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div role="dialog" aria-modal="true" aria-label="Vidéo de présentation" className="fixed inset-0 z-100 flex items-center justify-center p-6" onClick={onClose}>
      {/* Fond flouté + assombri */}
      <div aria-hidden className="absolute inset-0 backdrop-blur-md" style={{ backgroundColor: "rgba(4, 4, 10, 0.7)" }} />

      {/* Bouton fermer */}
      <button
        type="button"
        onClick={onClose}
        aria-label="Fermer la vidéo"
        className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-white/10"
        style={{ color: "#fff" }}>
        <FontAwesomeIcon icon={faXmark} style={{ fontSize: "22px" }} />
      </button>

      {/* Vidéo */}
      <div
        className="relative aspect-video w-full max-w-215 overflow-hidden rounded-[20px]"
        style={{ border: `1px solid ${whiteA(0.12)}`, boxShadow: "0 30px 80px rgba(0, 0, 0, 0.55)" }}
        onClick={(e) => e.stopPropagation()}>
        <video src={src} poster={poster} controls autoPlay className="h-full w-full bg-black object-contain">
          Votre navigateur ne supporte pas la lecture vidéo.
        </video>
      </div>
    </div>
  );
}
