import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { PROJECTS, getProject } from "@/lib/content";
import { BrandLogo, ProjectSummary } from "@/components/ProjectCard";
import { ArchitectureFlow } from "@/components/ArchitectureFlow";
import { Badge, KeyFigures, ProjectLinkButton, Rich, Title } from "@/components/ui";

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
  const byline = [project.role, project.org].filter(Boolean).join(", ");

  return (
    <div className="container mx-auto px-4 sm:px-6 max-w-[980px] py-10 sm:py-14">
      <Link
        href="/projects"
        className="inline-flex items-center gap-1.5 text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors mb-8"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Tous les projets
      </Link>

      <header className="mb-12 pb-10 border-b border-[var(--border)] grid grid-cols-1 md:grid-cols-[1fr_280px] gap-8 items-start">
        <div className="min-w-0">
          {project.status && <p className="text-sm font-medium text-[var(--pink)] mb-1">{project.status}</p>}
          <p className="text-sm text-[var(--muted)] mb-4">{project.context}</p>
          <h1 className="flex items-start gap-4 text-3xl sm:text-4xl leading-tight mb-3">
            <BrandLogo logo={project.logo} className="h-10 w-10 sm:mt-0.5" />
            <span>
              <Title text={project.title} />
            </span>
          </h1>
          {byline && <p className="text-[var(--muted)] mb-3">{byline}</p>}
          <p className="text-lg leading-relaxed max-w-3xl mb-6">{project.tagline}</p>

          {project.links.length > 0 && (
            <div className="flex flex-wrap gap-3 mb-6">
              {project.links.map((l) => (
                <ProjectLinkButton key={l.href} link={l} />
              ))}
            </div>
          )}

          <div className="flex flex-wrap gap-1.5">
            {project.stack.map((s) => (
              <Badge key={s}>{s}</Badge>
            ))}
          </div>
        </div>

        {project.cover && (
          <a href={project.cover.href} target="_blank" rel="noopener noreferrer" className="group block">
            <Image
              src={project.cover.src}
              alt={project.cover.caption}
              placeholder="blur"
              sizes="(min-width: 768px) 280px, 100vw"
              priority
              className="w-full h-auto rounded-md border border-[var(--border)]"
            />
            <p className="pt-2 text-xs text-[var(--muted)] group-hover:text-[var(--foreground)] transition-colors">
              {project.cover.caption}
            </p>
          </a>
        )}
      </header>

      <div className="flex flex-col gap-14">
        <section>
          <h2 className="text-2xl mb-4">Résumé</h2>
          <ProjectSummary project={project} />
        </section>

        {project.kpis.length > 0 && (
          <section>
            <h2 className="text-2xl mb-5">Chiffres clés</h2>
            <KeyFigures items={project.kpis} />
          </section>
        )}

        <section>
          <h2 className="text-2xl mb-5">Architecture</h2>
          <ArchitectureFlow lanes={project.flow} />
        </section>

        <article className="flex flex-col gap-10 max-w-[720px]">
          {project.sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-2xl mb-3">{section.title}</h2>
              {section.paragraphs?.map((p, i) => (
                <p key={i} className="text-[var(--muted)] leading-relaxed mb-3">
                  <Rich text={p} />
                </p>
              ))}
              {section.bullets && (
                <ul className="flex flex-col gap-2.5 list-disc pl-5 marker:text-[var(--muted)]">
                  {section.bullets.map((b, i) => (
                    <li key={i} className="text-[var(--muted)] leading-relaxed pl-1">
                      <Rich text={b} />
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </article>

        {project.note && <p className="text-sm italic text-[var(--muted)] max-w-[720px]">{project.note}</p>}

        <Link
          href={`/projects/${next.slug}`}
          className="group flex items-center justify-between gap-4 border-t border-[var(--border)] pt-6"
        >
          <div>
            <p className="text-sm text-[var(--muted)] mb-1">Projet suivant</p>
            <p className="font-display text-xl group-hover:text-[var(--primary)] transition-colors">
              <Title text={next.title} />
            </p>
          </div>
          <ArrowRight className="h-5 w-5 shrink-0" aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}
