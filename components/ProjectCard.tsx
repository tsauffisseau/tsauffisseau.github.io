import Link from "next/link";
import { ArrowRight, Target, Layers, TrendingUp } from "lucide-react";
import type { Project } from "@/lib/content";
import { Badge, Rich, StatusPill } from "./ui";
import { ExpIcon, PrizeIcon, SocietyLogo } from "./icons";

export function ProjectLogo({ project, className }: { project: Project; className: string }) {
  if (project.logo === "society") return <SocietyLogo className={`shrink-0 ${className}`} />;
  return null;
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
    default:
      return null;
  }
}

function Rank({ rank }: { rank: number }) {
  return (
    <span className="font-mono text-xs font-bold text-[var(--primary)]">{String(rank).padStart(2, "0")}</span>
  );
}

const PSI = [
  { key: "problem", label: "Problématique", Icon: Target },
  { key: "solution", label: "Solution", Icon: Layers },
  { key: "impact", label: "Impact", Icon: TrendingUp },
] as const;

/** Encart Problème / Solution / Impact, réutilisé sur les cartes et les études de cas. */
export function ProblemSolutionImpact({ project }: { project: Project }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
      {PSI.map(({ key, label, Icon }) => (
        <div key={key} className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-4">
          <p className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[var(--muted)] mb-2">
            <Icon className="h-3.5 w-3.5 text-[var(--primary)]" aria-hidden="true" />
            {label}
          </p>
          <p className="text-sm leading-relaxed text-[var(--muted)]">
            <Rich text={project[key]} />
          </p>
        </div>
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
          <Rank rank={rank} />
          <span>{project.kicker}</span>
        </p>
        {project.status && <StatusPill label={project.status.label} tone={project.status.tone} />}
      </div>

      <Link href={href} className="group inline-flex items-center gap-3 mb-1">
        <ProjectLogo project={project} className="h-6 w-6" />
        <h3 className="text-xl sm:text-2xl font-bold leading-snug group-hover:text-[var(--primary)] transition-colors">
          {project.title}
        </h3>
      </Link>
      {project.org && <p className="text-sm font-semibold text-[var(--foreground)]/80 mb-1">{project.org}</p>}
      <p className="text-[var(--muted)] mb-5 leading-relaxed">{project.tagline}</p>

      <ProblemSolutionImpact project={project} />

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
        <Rank rank={rank} />
        {project.status && <StatusPill label={project.status.label} tone={project.status.tone} />}
      </div>
      <p className="text-xs text-[var(--muted)] mb-1">{project.kicker}</p>
      <h3 className="flex items-center gap-2 text-lg font-bold leading-snug mb-2 group-hover:text-[var(--primary)] transition-colors">
        <ProjectLogo project={project} className="h-5 w-5" />
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
