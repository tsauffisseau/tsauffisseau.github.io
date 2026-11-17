import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Download, Mail, MapPin } from "lucide-react";
import { PROFILE, PROJECTS, PROOF_POINTS, VALUE_CHAIN } from "@/lib/content";
import { ProjectTile } from "@/components/ProjectCard";
import { SkillsGrid } from "@/components/SkillsGrid";
import { KpiTile, Rich, SectionHeading, buttonPrimary, buttonSecondary } from "@/components/ui";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import profilePhoto from "@/public/assets/profile.jpg";

function ContactButtons() {
  return (
    <div className="flex flex-wrap gap-3">
      <a href={PROFILE.cvPath} download={PROFILE.cvDownloadName} className={buttonPrimary}>
        <Download className="h-4 w-4" aria-hidden="true" />
        Télécharger mon CV
      </a>
      <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className={buttonSecondary}>
        <LinkedinIcon />
        LinkedIn
      </a>
      <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className={buttonSecondary}>
        <GithubIcon />
        GitHub
      </a>
    </div>
  );
}

export default function Home() {
  return (
    <div className="container mx-auto px-4 sm:px-6 max-w-[980px] py-10 sm:py-16 flex flex-col gap-20 sm:gap-24">
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="grid grid-cols-1 md:grid-cols-[1fr_auto] items-center gap-8 md:gap-12">
        <div className="order-2 md:order-1 flex flex-col gap-4">
          <span className="inline-flex w-fit items-center gap-2 px-3 py-1 text-xs sm:text-sm font-semibold rounded-full border border-emerald-600/30 bg-emerald-50 text-emerald-700 dark:border-emerald-400/30 dark:bg-emerald-400/10 dark:text-emerald-400">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-60 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            {PROFILE.availability}
          </span>

          <div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">{PROFILE.name}</h1>
            <p className="text-xl sm:text-2xl font-semibold text-[var(--primary)] mt-2">{PROFILE.title}</p>
          </div>

          <p className="text-base sm:text-lg text-[var(--muted)] leading-relaxed max-w-[620px]">{PROFILE.pitch}</p>

          <ContactButtons />

          <div className="flex flex-wrap items-center gap-x-5 gap-y-1 text-xs sm:text-sm text-[var(--muted)]">
            <a href={`mailto:${PROFILE.email}`} className="inline-flex items-center gap-1.5 hover:text-[var(--foreground)] transition-colors break-all">
              <Mail className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              {PROFILE.email}
            </a>
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
              Paris
            </span>
          </div>
        </div>

        <Image
          src={profilePhoto}
          alt={PROFILE.name}
          placeholder="blur"
          sizes="(min-width: 768px) 220px, 150px"
          priority
          className="order-1 md:order-2 w-[150px] h-[150px] md:w-[220px] md:h-[220px] rounded-full border border-[var(--border)] object-cover shadow-sm"
        />
      </section>

      {/* ── EN BREF ──────────────────────────────────────────────────────── */}
      <section aria-label="En bref" className="grid grid-cols-2 md:grid-cols-4 gap-3 -mt-8 sm:-mt-10">
        {PROOF_POINTS.map((p) => (
          <KpiTile key={p.label} value={p.value} label={p.label} href={p.href} />
        ))}
      </section>

      {/* ── FIL ROUGE ────────────────────────────────────────────────────── */}
      <section>
        <SectionHeading
          eyebrow="Mon fil rouge"
          title="La chaîne de valeur de la donnée, de bout en bout"
          intro="J'ai vécu en parallèle les deux extrémités de la chaîne : la donnée opérationnelle qui fait tourner un produit, et la donnée analytique qui éclaire une décision."
        />

        <ol className="flex flex-wrap items-center gap-2 mb-5" aria-label="Étapes de la chaîne de valeur">
          {VALUE_CHAIN.steps.map((step, i) => (
            <li key={step} className="flex items-center gap-2">
              <span className="px-3 py-1.5 text-xs sm:text-sm font-semibold rounded-lg border border-[var(--border)] bg-[var(--card)]">
                {step}
              </span>
              {i < VALUE_CHAIN.steps.length - 1 && (
                <ArrowRight className="h-3.5 w-3.5 text-[var(--muted)]" aria-hidden="true" />
              )}
            </li>
          ))}
        </ol>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {VALUE_CHAIN.sides.map((side) => (
            <Link
              key={side.tag}
              href={`/projects/${side.slug}`}
              className="group flex flex-col gap-2 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-[var(--muted)]/40"
            >
              <span className="w-fit px-2 py-0.5 text-xs font-mono font-bold rounded-md bg-[var(--primary)]/10 text-[var(--primary)]">
                {side.tag}
              </span>
              <h3 className="text-lg font-bold">{side.title}</h3>
              <p className="text-sm text-[var(--muted)] leading-relaxed">
                <Rich text={side.text} />
              </p>
              <span className="mt-auto pt-1 inline-flex items-center gap-1.5 text-sm font-semibold group-hover:text-[var(--primary)] transition-colors">
                Voir le projet <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ── PROJETS ──────────────────────────────────────────────────────── */}
      <section>
        <SectionHeading
          eyebrow="Projets"
          title="Expérience & projets phares"
          intro="Chaque projet suit la même logique : un problème métier, une architecture data adaptée, un impact mesurable."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {PROJECTS.map((p, i) => (
            <ProjectTile key={p.slug} project={p} rank={i + 1} />
          ))}
        </div>
        <Link
          href="/projects"
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold hover:text-[var(--primary)] transition-colors"
        >
          Tous les projets en détail <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </section>

      {/* ── COMPÉTENCES ──────────────────────────────────────────────────── */}
      <section>
        <SectionHeading eyebrow="Compétences" title="Une stack orientée architecture & conseil" />
        <SkillsGrid />
      </section>

      {/* ── CONTACT ──────────────────────────────────────────────────────── */}
      <section className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 sm:p-8 flex flex-col gap-4">
        <h2 className="text-2xl font-bold tracking-tight">Échangeons</h2>
        <p className="text-[var(--muted)] leading-relaxed max-w-2xl">
          Vous recrutez un Consultant Data ou un Product Data Analyst pour 2027 ? Je serais ravi d&apos;en discuter.
        </p>
        <ContactButtons />
      </section>
    </div>
  );
}
