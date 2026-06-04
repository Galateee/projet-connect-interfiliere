import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faArrowRight, faBolt, faBrain, faComments, faShieldHalved } from "@fortawesome/free-solid-svg-icons";
import { palette, whiteA, withAlpha } from "../../theme/palette";
import { formationEyebrow, formationPara, formationTitle, pillarDesc, pillarTitle } from "./resultStyles";
import { VideoModal } from "./VideoModal";

type Pillar = { icon: IconDefinition; title: string; desc: string };

const PILLARS: Pillar[] = [
  { icon: faBrain, title: "IA & Prise de décision", desc: "Apprends à utiliser les prédictions IA comme aide, pas comme oracle." },
  { icon: faShieldHalved, title: "Gouvernance & éthique IA", desc: "Cadrer les usages au sein de votre équipe avec des règles claires." },
  { icon: faComments, title: "Communication & transparence", desc: "Comment parler de l'IA à vos clients, collaborateurs." },
];

/** Vidéo de présentation */
const VIDEO_SRC = "/formation-manager-ia.mp4";

/** Carte « Formation recommandée » mise en avant */
export function TrainingCard() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section
      className="flex w-full flex-col gap-6 rounded-[20px] px-9 py-8"
      style={{
        backgroundColor: whiteA(0.03),
        border: `1px solid ${withAlpha(palette.green, 0.4)}`,
        boxShadow: `0 0 60px ${withAlpha(palette.green, 0.12)}`,
      }}>
      <div className="flex flex-col gap-3">
        <span className="flex items-center gap-2" style={formationEyebrow}>
          <FontAwesomeIcon icon={faBolt} />
          Formation recommandée
        </span>
        <h2 style={formationTitle}>Il est temps de reprendre le contrôle. Votre prochaine décision, c'est celle-ci.</h2>
        <p style={formationPara}>Une formation conçue pour les managers qui veulent comprendre, utiliser et superviser l'IA — sans en avoir peur et sans en être esclave.</p>
      </div>

      <div className="flex gap-3.5">
        {PILLARS.map((p) => (
          <div key={p.title} className="flex flex-1 flex-col gap-2 rounded-2xl px-4 py-4" style={{ backgroundColor: whiteA(0.04), border: `0.8px solid ${whiteA(0.08)}` }}>
            <FontAwesomeIcon icon={p.icon} style={{ color: palette.green, fontSize: "16px" }} />
            <span style={pillarTitle}>{p.title}</span>
            <span style={pillarDesc}>{p.desc}</span>
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={() => setVideoOpen(true)}
        className="flex w-fit cursor-pointer items-center justify-center gap-2 rounded-[43px] px-7 py-2.5 transition-[filter] hover:brightness-110"
        style={{
          backgroundColor: palette.green,
          fontFamily: '"Outfit", system-ui, sans-serif',
          fontWeight: 700,
          fontSize: "14px",
          color: "rgba(0, 0, 0, 0.8)",
        }}>
        Voir la vidéo <FontAwesomeIcon icon={faArrowRight} />
      </button>

      <VideoModal open={videoOpen} onClose={() => setVideoOpen(false)} src={VIDEO_SRC} />
    </section>
  );
}
