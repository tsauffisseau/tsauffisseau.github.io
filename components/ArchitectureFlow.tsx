import { Fragment } from "react";
import { ArrowRight } from "lucide-react";
import type { FlowLane } from "@/lib/content";
import { Rich } from "./ui";

/** Schéma d'architecture : une ligne d'étapes par couche (OLTP, OLAP, pipeline...). */
export function ArchitectureFlow({ lanes }: { lanes: FlowLane[] }) {
  return (
    <div className="flex flex-col gap-8">
      {lanes.map((lane) => (
        <div key={lane.label}>
          <p className="text-sm mb-3">
            <span className="font-medium">{lane.label}</span>
            {lane.status && <span className="text-[var(--muted)]">, {lane.status}</span>}
          </p>
          <ol className="flex flex-col md:flex-row md:items-stretch gap-1.5 md:gap-2">
            {lane.steps.map((step, i) => (
              <Fragment key={step.title}>
                <li
                  className={`flex-1 min-w-0 rounded-md border px-3 py-2.5 ${
                    lane.wip ? "border-dashed border-[var(--muted)]/50" : "border-[var(--border)]"
                  }`}
                >
                  <p className="text-sm font-medium">{step.title}</p>
                  {step.detail && (
                    <p className="text-xs text-[var(--muted)] mt-0.5 leading-snug">
                      <Rich text={step.detail} />
                    </p>
                  )}
                </li>
                {i < lane.steps.length - 1 && (
                  <li aria-hidden="true" className="flex items-center justify-center text-[var(--muted)]">
                    <ArrowRight className="h-4 w-4 rotate-90 md:rotate-0" />
                  </li>
                )}
              </Fragment>
            ))}
          </ol>
        </div>
      ))}
    </div>
  );
}
