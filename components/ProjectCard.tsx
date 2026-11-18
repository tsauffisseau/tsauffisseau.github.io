import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { LogoKey, Project } from "@/lib/content";
import { Rich, Title } from "./ui";
import { BggIcon, ChessIcon, ExpIcon, PrizeIcon, SocietyLogo } from "./icons";
import airLiquideLogo from "@/public/assets/logos/airliquide.png";
import tspLogo from "@/public/assets/logos/tsp.png";

/** Logo affiché devant le titre d'un projet, dans une tuile carrée arrondie. */
export function BrandLogo({ logo, className = "h-8 w-8" }: { logo?: LogoKey; className?: string }) {
  if (!logo) return null;
  // Couleur fixée : les logos ne suivent pas la couleur du titre au survol.
  const tile = `shrink-0 inline-flex items-center justify-center overflow-hidden rounded-md text-[var(--foreground)] ${className}`;
  switch (logo) {
    case "airliquide":
      return (
        <span className={`${tile} bg-white border border-[var(--border)]`}>
          <Image src={airLiquideLogo} alt="" sizes="48px" className="h-full w-full object-contain p-[14%]" />
        </span>
      );
    case "tsp":
      return (
        <span className={`${tile} bg-white border border-[var(--border)]`}>
          <Image src={tspLogo} alt="" sizes="48px" className="h-full w-full object-contain" />
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
  const cls = `pointer-events-none absolute -z-10 text-[var(--foreground)] opacity-[0.05] dark:opacity-[0.07] ${className}`;
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

/** Résumé rédigé de l'étude de cas : le besoin, la démarche, le résultat. */
export function ProjectSummary({ project }: { project: Project }) {
  return (
    <div className="flex flex-col gap-4 max-w-[720px] text-lg leading-relaxed">
      <p>
        <Rich text={project.problem} />
      </p>
      <p className="text-[var(--muted)]">
        <Rich text={project.solution} />
      </p>
      <p className="text-[var(--muted)]">
        <Rich text={project.impact} />
      </p>
    </div>
  );
}

/** Carte détaillée (page Projets), entièrement cliquable. */
export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group relative isolate block overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--card)] p-5 md:p-7 transition-colors hover:border-[var(--pink)]/60"
    >
      <Watermark project={project} className="-right-6 -top-6 h-48 w-48" />
      <p className="text-sm text-[var(--muted)] mb-3">
        {project.status && <span className="text-[var(--pink)]">{project.status}. </span>}
        {project.context}
      </p>

      <h2 className="flex items-start gap-3 text-[1.2rem] sm:text-2xl leading-snug text-pretty mb-1 group-hover:text-[var(--pink)] transition-colors">
        <BrandLogo logo={project.logo} className="h-9 w-9" />
        <span className="pt-0.5">
          <Title text={project.title} />
        </span>
      </h2>
      {project.org && <p className="text-sm text-[var(--muted)] mb-3">{project.org}</p>}
      <p className="leading-relaxed mb-2 max-w-[720px]">{project.tagline}</p>
      <p className="text-sm text-[var(--muted)] leading-relaxed max-w-[720px]">
        <Rich text={project.impact} />
      </p>

      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mt-5">
        <p className="text-xs text-[var(--muted)] leading-relaxed max-w-[600px]">{project.stack.join(", ")}</p>
        <span className="inline-flex items-center gap-1.5 text-sm font-medium whitespace-nowrap group-hover:text-[var(--pink)] transition-colors">
          Étude de cas <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}

/** Ligne de liste (page d'accueil) : logo, titre, accroche, période. */
export function ProjectRow({ project }: { project: Project }) {
  return (
    <li className="border-t border-[var(--border)] last:border-b">
      <Link
        href={`/projects/${project.slug}`}
        className="group grid grid-cols-[auto_1fr] sm:grid-cols-[auto_1fr_auto] gap-x-4 gap-y-1 py-5"
      >
        <BrandLogo logo={project.logo} className="h-9 w-9 mt-0.5" />
        <div className="min-w-0">
          <h3 className="text-lg leading-snug group-hover:text-[var(--primary)] transition-colors">
            <Title text={project.title} />
          </h3>
          <p className="text-sm text-[var(--muted)] leading-relaxed mt-1">{project.tagline}</p>
        </div>
        <p className="col-start-2 sm:col-start-auto text-sm text-[var(--pink)] whitespace-nowrap sm:pt-1">
          {project.period}
        </p>
      </Link>
    </li>
  );
}
