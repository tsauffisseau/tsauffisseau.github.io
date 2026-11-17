import type { Metadata } from "next";
import { OTHER_WORKS, PROJECTS } from "@/lib/content";
import { ProjectCard } from "@/components/ProjectCard";
import { Badge, SectionHeading } from "@/components/ui";
import { GithubIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Projets",
  description:
    "Solution décisionnelle Air Liquide Healthcare, produit data Society, pipeline ETL BoardGameGeek et projet Cassiopée.",
};

export default function Projects() {
  return (
    <div className="container mx-auto px-4 sm:px-6 max-w-[980px] py-10 sm:py-14">
      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">Projets</h1>
      <p className="text-[var(--muted)] mb-10 leading-relaxed max-w-2xl">
        Quatre projets, une même logique : partir d&apos;un problème métier, concevoir l&apos;architecture data adaptée,
        puis mesurer l&apos;impact.
      </p>

      <div className="flex flex-col gap-6">
        {PROJECTS.map((p, i) => (
          <ProjectCard key={p.slug} project={p} rank={i + 1} />
        ))}
      </div>

      <section className="mt-16">
        <SectionHeading eyebrow="En complément" title="Autres travaux" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {OTHER_WORKS.map((w) => (
            <a
              key={w.href}
              href={w.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-2 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-[var(--muted)]/40"
            >
              <h3 className="font-bold group-hover:text-[var(--primary)] transition-colors">{w.title}</h3>
              <p className="text-sm text-[var(--muted)] leading-relaxed">{w.description}</p>
              <div className="flex flex-wrap items-center justify-between gap-2 mt-auto pt-2">
                <div className="flex flex-wrap gap-1.5">
                  {w.stack.map((s) => (
                    <Badge key={s}>{s}</Badge>
                  ))}
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold">
                  <GithubIcon className="h-3.5 w-3.5" />
                  GitHub
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
