import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center px-4 py-12 sm:py-16">
      
      {/* Hero Section */}
      <div className="flex flex-col items-center text-center gap-2 mb-10">
        <Image
          src="/assets/profile.jpg"
          alt="Théophile Sauffisseau"
          width={220}
          height={220}
          className="rounded-full border-2 border-[var(--border)] object-cover shadow-lg mb-2"
          priority
        />
        <h1 className="text-3xl font-semibold leading-tight">Théophile Sauffisseau</h1>
        <div className="flex flex-col text-[var(--muted)]">
          <a
            href="https://www.linkedin.com/in/theophile-sauffisseau"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--foreground)] transition-colors"
          >
            Data Analyst @ Air Liquide | Data & AI Product Builder
          </a>
          <a
            href="mailto:theophile.sauffisseau@telecom-sudparis.eu"
            className="hover:text-[var(--foreground)] transition-colors"
          >
            theophile.sauffisseau@telecom-sudparis.eu
          </a>
        </div>
      </div>

      {/* 3 Cartes Principales */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-[760px] mb-6">
        
        <Link href="/projects/cassiopee" className="group flex flex-col items-center justify-center p-4 rounded-xl border border-[var(--border)] bg-[var(--background)] transition-all hover:-translate-y-1 hover:shadow-lg hover:border-[var(--muted)]/30 text-center">
          <h3 className="text-lg font-bold text-[var(--text)] group-hover:underline decoration-dotted underline-offset-4 mb-1">1st Prize Project</h3>
          <p className="text-[var(--muted)] text-sm">Alzheimer AD Detection • Deep Learning</p>
        </Link>

        <Link href="/projects" className="group flex flex-col items-center justify-center p-4 rounded-xl border border-[var(--border)] bg-[var(--background)] transition-all hover:-translate-y-1 hover:shadow-lg hover:border-[var(--muted)]/30 text-center">
          <h3 className="text-lg font-bold text-[var(--text)] group-hover:underline decoration-dotted underline-offset-4 mb-1">My Projects</h3>
          <p className="text-[var(--muted)] text-sm">My Personal Projects : GitHub</p>
        </Link>

        <Link href="/about/creations" className="group flex flex-col items-center justify-center p-4 rounded-xl border border-[var(--border)] bg-[var(--background)] transition-all hover:-translate-y-1 hover:shadow-lg hover:border-[var(--muted)]/30 text-center">
          <h3 className="text-lg font-bold text-[var(--text)] group-hover:underline decoration-dotted underline-offset-4 mb-1">Personal Creations</h3>
          <p className="text-[var(--muted)] text-sm">Classical/Digital Art & AI Design</p>
        </Link>

      </div>

      {/* Tuiles Sociales (LinkedIn, GitHub, Society) */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-[760px]">
        
        <a href="https://www.linkedin.com/in/theophile-sauffisseau" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 p-2 rounded-xl border border-[var(--border)] bg-[var(--background)] transition-all hover:-translate-y-1 hover:shadow-md">
          <Image src="/assets/icon-linkedin.svg" alt="LinkedIn" width={18} height={18} className="dark:invert-0" />
          <span className="font-semibold text-sm">LinkedIn</span>
        </a>

        <a href="https://github.com/tsauffisseau" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 p-2 rounded-xl border border-[var(--border)] bg-[var(--background)] transition-all hover:-translate-y-1 hover:shadow-md">
          <Image src="/assets/icon-github-black.svg" alt="GitHub" width={18} height={18} className="dark:invert" />
          <span className="font-semibold text-sm">GitHub</span>
        </a>

        {/* Remplacement de Insta par Society */}
        <a href="https://github.com/tsauffisseau/society-app" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 p-2 rounded-xl border border-[var(--border)] bg-[var(--background)] transition-all hover:-translate-y-1 hover:shadow-md ring-1 ring-primary/20">
          <Image src="/assets/society_logo.svg" alt="Society" width={18} height={18} />
          <span className="font-semibold text-sm text-primary">Society App</span>
        </a>

      </div>
    </div>
  );
}