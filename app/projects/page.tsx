import type { Metadata } from "next";
import { OTHER_WORKS, PROJECTS, PROJECTS_INTRO } from "@/lib/content";
import { BrandLogo, ProjectCard } from "@/components/ProjectCard";
import { Rich, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "Projets",
  description:
    "Solution décisionnelle Air Liquide Healthcare, application Society, pipeline de données BoardGameGeek et projet Cassiopée.",
};

export default function Projects() {
  return (
    <div className="container mx-auto px-4 sm:px-6 max-w-[980px] py-12 sm:py-16">
      <h1 className="text-4xl sm:text-5xl mb-4">Projets</h1>
      <p className="text-lg text-[var(--muted)] mb-12 leading-relaxed max-w-2xl">
        <Rich text={PROJECTS_INTRO} />
      </p>

      <div className="flex flex-col gap-6">
        {PROJECTS.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>

      <section className="mt-20">
        <SectionHeading title="Autres travaux" />
        <ul>
          {OTHER_WORKS.map((w) => (
            <li key={w.href} className="border-t border-[var(--border)] last:border-b">
              <a
                href={w.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid grid-cols-[auto_1fr] sm:grid-cols-[auto_1fr_auto] gap-x-4 gap-y-1 py-5"
              >
                <BrandLogo logo={w.logo} className="h-9 w-9 mt-0.5" />
                <div className="min-w-0">
                  <h3 className="text-lg leading-snug group-hover:text-[var(--primary)] transition-colors">{w.title}</h3>
                  <p className="text-sm text-[var(--muted)] leading-relaxed mt-1">{w.description}</p>
                </div>
                <p className="col-start-2 sm:col-start-auto text-sm text-[var(--muted)] whitespace-nowrap sm:pt-1">
                  {w.stack.join(", ")}
                </p>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
