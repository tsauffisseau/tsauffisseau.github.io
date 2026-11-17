import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Info } from "lucide-react";
import { PROJECTS, getProject } from "@/lib/content";
import { ProblemSolutionImpact, ProjectLogo } from "@/components/ProjectCard";
import { ArchitectureFlow } from "@/components/ArchitectureFlow";
import { Badge, KpiTile, ProjectLinkButton, Rich, StatusPill } from "@/components/ui";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return { title: project.shortTitle, description: project.tagline };
}

export default async function CaseStudy({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = PROJECTS.indexOf(project);
  const next = PROJECTS[(index + 1) % PROJECTS.length];

  return (
    <div className="container mx-auto px-4 sm:px-6 max-w-[980px] py-8 sm:py-12">
      <Link
        href="/projects"
        className="inline-flex items-center gap-1.5 text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors mb-6"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Tous les projets
      </Link>

      {/* En-tête */}
      <header className="mb-10 pb-8 border-b border-[var(--border)] grid grid-cols-1 md:grid-cols-[1fr_300px] gap-8 items-start">
        <div className="min-w-0">
        <div className="flex flex-wrap items-center gap-3 mb-3">
          <p className="text-sm text-[var(--muted)]">{project.kicker}</p>
          {project.status && <StatusPill label={project.status.label} tone={project.status.tone} />}
        </div>
        <h1 className="flex items-center gap-3 text-3xl sm:text-4xl font-bold tracking-tight mb-2">
          <ProjectLogo project={project} className="h-9 w-9" />
          {project.title}
        </h1>
        {(project.org || project.role) && (
          <p className="font-semibold text-[var(--foreground)]/80 mb-2">
            {[project.org, project.role].filter(Boolean).join(" · ")}
          </p>
        )}
        <p className="text-lg text-[var(--muted)] leading-relaxed max-w-3xl mb-6">{project.tagline}</p>

        {project.links.length > 0 && (
          <div className="flex flex-wrap gap-3 mb-6">
            {project.links.map((l) => (
              <ProjectLinkButton key={l.href} link={l} />
            ))}
          </div>
        )}

        <div className="flex flex-wrap gap-2">
          {project.stack.map((s) => (
            <Badge key={s}>{s}</Badge>
          ))}
        </div>
        </div>

        {project.cover && (
          <a
            href={project.cover.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-2xl border border-[var(--border)] bg-[var(--card)] p-2 transition-all hover:-translate-y-1 hover:shadow-md hover:border-[var(--muted)]/40"
          >
            <Image
              src={project.cover.src}
              alt={project.cover.caption}
              placeholder="blur"
              sizes="(min-width: 768px) 300px, 100vw"
              priority
              className="w-full h-auto rounded-xl"
            />
            <p className="px-2 pt-2 pb-1 text-xs font-semibold text-[var(--muted)] group-hover:text-[var(--primary)] transition-colors">
              {project.cover.caption} →
            </p>
          </a>
        )}
      </header>

      <div className="flex flex-col gap-12">
        {/* En un coup d'œil */}
        <section>
          <h2 className="text-xl font-bold mb-4">En un coup d&apos;œil</h2>
          <ProblemSolutionImpact project={project} />
        </section>

        {/* Chiffres clés */}
        {project.kpis.length > 0 && (
          <section>
            <h2 className="text-xl font-bold mb-4">Chiffres clés</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {project.kpis.map((k) => (
                <KpiTile key={k.label} value={k.value} label={k.label} />
              ))}
            </div>
          </section>
        )}

        {/* Architecture */}
        <section>
          <h2 className="text-xl font-bold mb-4">Architecture</h2>
          <ArchitectureFlow lanes={project.flow} />
        </section>

        {/* Détail */}
        <article className="flex flex-col gap-8 max-w-[820px]">
          {project.sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-xl font-bold mb-3">{section.title}</h2>
              {section.paragraphs?.map((p, i) => (
                <p key={i} className="text-[var(--muted)] leading-relaxed mb-3">
                  <Rich text={p} />
                </p>
              ))}
              {section.bullets && (
                <ul className="flex flex-col gap-2.5">
                  {section.bullets.map((b, i) => (
                    <li key={i} className="flex gap-3 text-[var(--muted)] leading-relaxed">
                      <span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-[var(--primary)] shrink-0" aria-hidden="true" />
                      <span>
                        <Rich text={b} />
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </article>

        {project.note && (
          <p className="flex gap-2 text-sm text-[var(--muted)] rounded-xl border border-[var(--border)] bg-[var(--card)] p-4">
            <Info className="h-4 w-4 shrink-0 mt-0.5" aria-hidden="true" />
            {project.note}
          </p>
        )}

        {/* Projet suivant */}
        <Link
          href={`/projects/${next.slug}`}
          className="group flex items-center justify-between gap-4 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 transition-all hover:-translate-y-1 hover:shadow-md hover:border-[var(--muted)]/40"
        >
          <div>
            <p className="text-xs uppercase tracking-wider font-bold text-[var(--muted)] mb-1">Projet suivant</p>
            <p className="font-bold group-hover:text-[var(--primary)] transition-colors">{next.title}</p>
          </div>
          <ArrowRight className="h-5 w-5 shrink-0" aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}
