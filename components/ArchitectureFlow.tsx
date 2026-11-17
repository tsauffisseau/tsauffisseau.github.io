import { Fragment } from "react";
import { ArrowRight } from "lucide-react";
import type { FlowLane } from "@/lib/content";
import { Rich, StatusPill } from "./ui";

/** Schéma d'architecture en blocs : une ligne par couche (OLTP, OLAP, pipeline...). */
export function ArchitectureFlow({ lanes }: { lanes: FlowLane[] }) {
  return (
    <div className="flex flex-col gap-4">
      {lanes.map((lane) => {
        const wip = lane.status?.tone === "wip";
        return (
          <div
            key={lane.label}
            className={`rounded-2xl border p-4 sm:p-5 bg-[var(--card)] ${
              wip ? "border-dashed border-amber-500/50" : "border-[var(--border)]"
            }`}
          >
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--muted)]">{lane.label}</span>
              {lane.status && <StatusPill label={lane.status.label} tone={lane.status.tone} />}
            </div>
            <ol className="flex flex-col md:flex-row md:items-stretch gap-1.5 md:gap-2">
              {lane.steps.map((step, i) => (
                <Fragment key={step.title}>
                  <li className="flex-1 min-w-0 rounded-xl border border-[var(--border)] bg-[var(--background)] px-3 py-2.5">
                    <p className="text-sm font-semibold">{step.title}</p>
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
        );
      })}
    </div>
  );
}
