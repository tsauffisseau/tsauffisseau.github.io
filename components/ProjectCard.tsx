import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { LogoKey, Project } from "@/lib/content";
import { Badge, Rich, StatusPill } from "./ui";
import { BggIcon, ChessIcon, ExpIcon, PrizeIcon, SocietyLogo } from "./icons";
import airLiquideLogo from "@/public/assets/logos/airliquide.png";
import tspLogo from "@/public/assets/logos/tsp.png";

/** Logo affiché devant le titre d'un projet, dans une tuile carrée arrondie. */
export function BrandLogo({ logo, className = "h-8 w-8" }: { logo?: LogoKey; className?: string }) {
  if (!logo) return null;
  const tile = `shrink-0 inline-flex items-center justify-center overflow-hidden rounded-lg ${className}`;
  switch (logo) {
    case "airliquide":
      return (
        <span className={`${tile} bg-white border border-[var(--border)]`}>
          <Image src={airLiquideLogo} alt="" sizes="48px" className="h-full w-full object-contain p-[14%]" />
        </span>
      );
    case "tsp":
      return (
        <span className={`${tile} bg-black`}>
          <Image src={tspLogo} alt="" sizes="48px" className="w-full h-auto" />
        </span>
      );
    case "bgg":
      return (
        <span className={tile}>
          <BggIcon className="h-full w-full" />
        </span>
      );
    case "chess":
      return (
        <span className={tile}>
          <ChessIcon className="h-full w-full" />
        </span>
      );
    case "society":
      return (
        <span className={`${tile} border border-[var(--border)] bg-[var(--background)]`}>
          <SocietyLogo className="h-[68%] w-[68%]" />
        </span>
      );
  }
}

/** Icône en filigrane derrière une carte : couleur unie, très faible opacité. */
function Watermark({ project, className }: { project: Project; className: string }) {
  const cls = `pointer-events-none absolute -z-10 text-[var(--foreground)] opacity-[0.05] dark:opacity-[0.07] transition-opacity duration-300 group-hover:opacity-[0.09] ${className}`;
  switch (project.watermark) {
    case "exp":
      return <ExpIcon className={cls} />;
    case "prize":
      return <PrizeIcon className={cls} />;
    case "society":
      return <SocietyLogo mono className={cls} />;
    case "bgg":
      return <BggIcon mono className={cls} />;
    default:
      return null;
  }
}

function Rank({ rank, layer }: { rank: number; layer?: string }) {
  return (
    <span className="font-mono text-xs font-bold text-[var(--muted)]">
      {String(rank).padStart(2, "0")}
      {layer && <span className="font-normal"> · {layer}</span>}
    </span>
  );
}

const SUMMARY = [
  { key: "problem", label: "Le besoin" },
  { key: "solution", label: "La démarche" },
  { key: "impact", label: "Le résultat" },
] as const;

/** Résumé rédigé du projet (étude de cas) : besoin, démarche, résultat. */
export function ProjectSummary({ project }: { project: Project }) {
  return (
    <div className="flex flex-col gap-4 max-w-[820px] rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 sm:p-6">
      {SUMMARY.map(({ key, label }) => (
        <p key={key} className="leading-relaxed text-[var(--muted)]">
          <span className="font-semibold text-[var(--foreground)]">{label}. </span>
          <Rich text={project[key]} />
        </p>
      ))}
    </div>
  );
}

/** Carte détaillée (page Projets). */
export function ProjectCard({ project, rank }: { project: Project; rank: number }) {
  const href = `/projects/${project.slug}`;
  return (
    <article className="group relative isolate overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 md:p-7 shadow-sm">
      <Watermark project={project} className="-right-6 -top-6 h-48 w-48" />
      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
        <p className="flex items-center gap-2 text-xs sm:text-sm text-[var(--muted)]">
          <Rank rank={rank} layer={project.layer} />
          <span>{project.kicker}</span>
        </p>
        {project.status && <StatusPill label={project.status.label} tone={project.status.tone} />}
      </div>

      <Link href={href} className="inline-flex items-center gap-3 mb-1">
        <BrandLogo logo={project.logo} className="h-9 w-9" />
        <h3 className="text-xl sm:text-2xl font-bold leading-snug hover:text-[var(--primary)] transition-colors">
          {project.title}
        </h3>
      </Link>
      {project.org && <p className="text-sm font-semibold text-[var(--foreground)]/80 mb-1">{project.org}</p>}
      <p className="text-[var(--muted)] leading-relaxed mb-2">{project.tagline}</p>
      <p className="text-sm text-[var(--muted)] leading-relaxed max-w-[760px]">
        <Rich text={project.impact} />
      </p>

      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mt-5">
        <div className="flex flex-wrap gap-2">
          {project.stack.map((s) => (
            <Badge key={s}>{s}</Badge>
          ))}
        </div>
        <Link
          href={href}
          className="inline-flex items-center gap-1.5 text-sm font-semibold whitespace-nowrap hover:text-[var(--primary)] transition-colors"
        >
          Étude de cas <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}

/** Carte compacte (page d'accueil). */
export function ProjectTile({ project, rank }: { project: Project; rank: number }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group relative isolate overflow-hidden flex flex-col h-full rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-[var(--muted)]/40"
    >
      <Watermark project={project} className="-right-5 -bottom-5 h-36 w-36" />
      <div className="flex items-center justify-between gap-2 mb-3">
        <Rank rank={rank} layer={project.layer} />
        {project.status && <StatusPill label={project.status.label} tone={project.status.tone} />}
      </div>
      <p className="text-xs text-[var(--muted)] mb-2">{project.kicker}</p>
      <h3 className="flex items-center gap-2.5 text-lg font-bold leading-snug mb-2 group-hover:text-[var(--primary)] transition-colors">
        <BrandLogo logo={project.logo} className="h-8 w-8" />
        {project.title}
      </h3>
      <p className="text-sm text-[var(--muted)] leading-relaxed mb-4">{project.tagline}</p>
      <div className="flex flex-wrap gap-1.5 mt-auto">
        {project.stack.slice(0, 4).map((s) => (
          <Badge key={s}>{s}</Badge>
        ))}
      </div>
    </Link>
  );
}
