import { forwardRef } from "react";
import type { QuizAnswerRecord } from "../../types/quiz";
import { RecapItem } from "./RecapItem";
import { recapEyebrow, recapTitle } from "./resultStyles";

type RecapListProps = {
  records: QuizAnswerRecord[];
};

/** Section « récapitulatif complet » : une carte dépliable par question. */
export const RecapList = forwardRef<HTMLElement, RecapListProps>(function RecapList({ records }, ref) {
  return (
    <section ref={ref} className="flex w-full scroll-mt-24 flex-col gap-5">
      <div className="flex flex-col gap-1.5">
        <span style={recapEyebrow}>Récapitulatif complet</span>
        <h2 style={recapTitle}>Question par question — ce que vous avez répondu</h2>
      </div>

      <div className="flex flex-col gap-3">
        {records.map((r, i) => (
          <RecapItem key={r.questionId} number={i + 1} record={r} />
        ))}
      </div>
    </section>
  );
});
