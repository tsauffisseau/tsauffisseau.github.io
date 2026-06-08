import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center px-4 py-12 sm:py-16">
      
      {/* Hero Section */}
      <div className="flex flex-col items-center text-center gap-3 mb-12">
        <Image
          src="/assets/profile.jpg"
          alt="Théophile Sauffisseau"
          width={200}
          height={200}
          className="rounded-full border border-[var(--border)] object-cover shadow-sm mb-3"
          priority
        />
        
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight cursor-default">
          Théophile Sauffisseau
        </h1>
        
        <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-3 text-[var(--muted)] cursor-default text-sm sm:text-base mt-1">
          <span>Data Analyst @ Air Liquide</span>
          <span className="hidden sm:inline">|</span>
          <span>Data & AI Product Builder</span>
        </div>
        
        <a
          href="mailto:theophile.sauffisseau@telecom-sudparis.eu"
          className="mt-3 text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
        >
          theophile.sauffisseau@telecom-sudparis.eu
        </a>
      </div>

      {/* Grille fusionnée : 1 Colonne = 1 Carte + 1 Tuile sociale */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 w-full max-w-[760px] mb-8">
        
        {/* Colonne 1 : Cassiopée & LinkedIn */}
        <div className="flex flex-col gap-4">
          <Link href="/projects/cassiopee" className="group flex flex-col items-center justify-center p-6 rounded-2xl border border-[var(--border)] bg-[var(--card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-[var(--muted)]/40 text-center flex-1">
            <h3 className="text-lg font-bold text-[var(--foreground)] mb-1">1st Prize Project</h3>
            <p className="text-[var(--muted)] text-sm">Alzheimer AD Detection</p>
          </Link>
          <a href="https://www.linkedin.com/in/theophile-sauffisseau" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 p-3.5 rounded-xl border border-[var(--border)] bg-[var(--card)] transition-all duration-200 hover:-translate-y-1 hover:shadow-sm hover:border-[var(--muted)]/40 shrink-0">
            <Image src="/assets/icon-linkedin.svg" alt="LinkedIn" width={18} height={18} className="dark:invert-0" />
            <span className="font-semibold text-sm">LinkedIn</span>
          </a>
        </div>

        {/* Colonne 2 : Projects & GitHub */}
        <div className="flex flex-col gap-4">
          <Link href="/projects" className="group flex flex-col items-center justify-center p-6 rounded-2xl border border-[var(--border)] bg-[var(--card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-[var(--muted)]/40 text-center flex-1">
            <h3 className="text-lg font-bold text-[var(--foreground)] mb-1">My Projects</h3>
            <p className="text-[var(--muted)] text-sm">Personal Projects & GitHub</p>
          </Link>
          <a href="https://github.com/tsauffisseau" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 p-3.5 rounded-xl border border-[var(--border)] bg-[var(--card)] transition-all duration-200 hover:-translate-y-1 hover:shadow-sm hover:border-[var(--muted)]/40 shrink-0">
            <Image src="/assets/github_logo_black.svg" alt="GitHub" width={18} height={18} className="dark:invert" />
            <span className="font-semibold text-sm">GitHub</span>
          </a>
        </div>

        {/* Colonne 3 : Posters & Society */}
        <div className="flex flex-col gap-4">
          <Link href="/resume" className="group flex flex-col items-center justify-center p-6 rounded-2xl border border-[var(--border)] bg-[var(--card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-[var(--muted)]/40 text-center flex-1">
            <h3 className="text-lg font-bold text-[var(--foreground)] mb-1">Posters</h3>
            <p className="text-[var(--muted)] text-sm">Academic Publications</p>
          </Link>
          <a href="https://societyapp.fr" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 p-3.5 rounded-xl border border-[var(--border)] bg-[var(--card)] transition-all duration-200 hover:-translate-y-1 hover:shadow-sm hover:border-[var(--muted)]/40 shrink-0">
            <Image src="/assets/society_logo_white.svg" alt="Society" width={18} height={18} />
            <span className="font-semibold text-sm">My App</span>
          </a>
        </div>

      </div>
    </div>
  );
}