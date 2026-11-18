import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Download } from "lucide-react";
import { PROFILE, PROJECTS } from "@/lib/content";
import { ProjectRow } from "@/components/ProjectCard";
import { SkillsGrid } from "@/components/SkillsGrid";
import { Rich, SectionHeading, buttonPrimary, textLink } from "@/components/ui";
import profilePhoto from "@/public/assets/profile.jpg";

export default function Home() {
  const [lead, ...rest] = PROFILE.intro;

  return (
    <div className="container mx-auto px-4 sm:px-6 max-w-[980px] py-12 sm:py-20 flex flex-col gap-20 sm:gap-24">
      <section className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 md:gap-14 items-start">
        <div className="flex flex-col gap-5 max-w-[640px]">
          {/* Sur mobile, la photo se place à gauche du nom ; sur ordinateur, dans la colonne de droite. */}
          <div className="flex items-center gap-5">
            <Image
              src={profilePhoto}
              alt=""
              placeholder="blur"
              sizes="96px"
              priority
              className="md:hidden w-24 h-24 shrink-0 rounded-full object-cover"
            />
            <h1 className="text-[2rem] sm:text-5xl leading-tight">{PROFILE.name}</h1>
          </div>
          <p className="text-lg sm:text-xl leading-relaxed">
            <Rich text={lead} />
          </p>
          {rest.map((paragraph) => (
            <p key={paragraph} className="text-[var(--muted)] leading-relaxed">
              <Rich text={paragraph} />
            </p>
          ))}

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mt-2 text-sm text-[var(--muted)]">
            <a href={PROFILE.cvPath} download={PROFILE.cvDownloadName} className={buttonPrimary}>
              <Download className="h-4 w-4" aria-hidden="true" />
              Télécharger mon CV
            </a>
            <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className={textLink}>
              LinkedIn
            </a>
            <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className={textLink}>
              GitHub
            </a>
            <a href={`mailto:${PROFILE.email}`} className={textLink}>
              E-mail
            </a>
          </div>
        </div>

        <Image
          src={profilePhoto}
          alt={PROFILE.name}
          placeholder="blur"
          sizes="200px"
          priority
          className="hidden md:block w-[200px] h-[200px] rounded-full object-cover"
        />
      </section>

      <section>
        <SectionHeading title="Projets" />
        <ul>
          {PROJECTS.map((p) => (
            <ProjectRow key={p.slug} project={p} />
          ))}
        </ul>
        <Link
          href="/projects"
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium hover:text-[var(--primary)] transition-colors"
        >
          Le détail des projets <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </section>

      <section>
        <SectionHeading title="Compétences" />
        <SkillsGrid />
      </section>
    </div>
  );
}
