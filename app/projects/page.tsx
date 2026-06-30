import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  return (
    <div className="container mx-auto px-6 max-w-[980px] py-8 sm:py-12">
      <h1 className="text-3xl font-bold mb-3">Projects</h1>
      {/* Nouvelle phrase d'intro */}
      <p className="text-[var(--muted)] mb-8 leading-relaxed">Personal projects and open-source contributions. Click on the cards below to see more of it.</p>

      <div className="flex flex-col gap-6">
        
        {/* SOCIETY */}
        <Link href="/projects/society" className="group block bg-[var(--card)] border border-[var(--border)] rounded-2xl p-5 md:p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-[var(--muted)]/40">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-4">
            <div className="flex items-center gap-3">
              <Image src="/assets/society_logo_black.svg" alt="Society" width={28} height={28} className="shrink-0 dark:hidden" aria-hidden="true" />
              <Image src="/assets/society_logo_white.svg" alt="Society" width={28} height={28} className="shrink-0 hidden dark:block" aria-hidden="true" />
              <h3 className="text-lg sm:text-xl font-bold text-[var(--foreground)] transition-colors leading-snug break-words">Society App</h3>
            </div>
          </div>
          {/* Nouvelle description technique basée sur ton doc */}
          <p className="text-[var(--muted)] mb-5 text-sm leading-relaxed">
            Full-stack application allowing users to track their board game sessions and collections. Architected with FastAPI, PostgreSQL, and Next.js, featuring data aggregation from external APIs.
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-auto">
            <div className="flex flex-wrap gap-2">
               <span className="px-3 py-1 text-xs text-[var(--muted)] border border-[var(--border)] rounded-full bg-[var(--background)]">Full-stack</span>
              <span className="px-3 py-1 text-xs text-[var(--muted)] border border-[var(--border)] rounded-full bg-[var(--background)]">Web App</span>
            </div>
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors">
                 Lire l'étude de cas →
            </span>
          </div>
        </Link>

        {/* CASSIOPÉE */}
        <Link href="/projects/cassiopee" className="group block bg-[var(--card)] border border-[var(--border)] rounded-2xl p-5 md:p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-[var(--muted)]/40">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-4">
            <div className="flex items-center gap-3">
              <Image src="/assets/icon-brain.svg" alt="Cassiopee" width={28} height={28} className="shrink-0" aria-hidden="true" />
              <h3 className="text-lg sm:text-xl font-bold text-[var(--foreground)] leading-snug break-words">Alzheimer Detection via CNN</h3>
            </div>
          </div>
          <p className="text-[var(--muted)] mb-5 text-sm leading-relaxed">
            CNN on recurrence-plot representations of multichannel time-series (19 channels). Window-level scoring with subject-level aggregation. Reproducible PyTorch pipeline.
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-auto">
             <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 text-xs text-[var(--muted)] border border-[var(--border)] rounded-full bg-[var(--background)]">PyTorch</span>
              <span className="px-3 py-1 text-xs text-[var(--muted)] border border-[var(--border)] rounded-full bg-[var(--background)]">Deep Learning</span>
            </div>
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors">
                 Lire l'étude de cas →
            </span>
          </div>
        </Link>

        {/* CHESSCOACH */}
        <a href="https://github.com/tsauffisseau/chesscoach" target="_blank" rel="noopener noreferrer" className="group block bg-[var(--card)] border border-[var(--border)] rounded-2xl p-5 md:p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-[var(--muted)]/40">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-4">
            <div className="flex items-center gap-3">
              <Image src="/assets/icon-chess.svg" alt="Chess" width={28} height={28} className="shrink-0" aria-hidden="true" />
              <h3 className="text-lg sm:text-xl font-bold text-[var(--foreground)] leading-snug break-words">Chesscoach - Game Analyst</h3>
            </div>
          </div>
          <p className="text-[var(--muted)] mb-5 text-sm leading-relaxed">
            Streamlit tool to analyze PGN games with Stockfish: Evolution of your score. Mistakes, blunders and worsts moves classification.
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-auto">
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 text-xs text-[var(--muted)] border border-[var(--border)] rounded-full bg-[var(--background)]">Python</span>
              <span className="px-3 py-1 text-xs text-[var(--muted)] border border-[var(--border)] rounded-full bg-[var(--background)]">Streamlit</span>
            </div>
             <span className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors">
                 <Image src="/assets/github_logo_black.svg" alt="GitHub" width={16} height={16} className="dark:invert" />
                 Voir le code sur GitHub →
            </span>
          </div>
        </a>

        {/* BOARDGAME ANALYSIS */}
        <a href="https://github.com/tsauffisseau/boardgame_analysis" target="_blank" rel="noopener noreferrer" className="group block bg-[var(--card)] border border-[var(--border)] rounded-2xl p-5 md:p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-[var(--muted)]/40">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-4">
            <div className="flex items-center gap-3">
              <Image src="/assets/icon-game.svg" alt="Boardgame" width={28} height={28} className="shrink-0" aria-hidden="true" />
              <h3 className="text-lg sm:text-xl font-bold text-[var(--foreground)] leading-snug break-words">BoardGame Analysis</h3>
            </div>
          </div>
          <p className="text-[var(--muted)] mb-5 text-sm leading-relaxed">
            Exploring the BoardGameGeek landscape through the lens of playtime, complexity, and popularity.
          </p>
           <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-auto">
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 text-xs text-[var(--muted)] border border-[var(--border)] rounded-full bg-[var(--background)]">Python</span>
              <span className="px-3 py-1 text-xs text-[var(--muted)] border border-[var(--border)] rounded-full bg-[var(--background)]">Pandas</span>
            </div>
             <span className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors">
                 <Image src="/assets/github_logo_black.svg" alt="GitHub" width={16} height={16} className="dark:invert" />
                 Voir le code sur GitHub →
            </span>
          </div>
        </a>

      </div>
    </div>
  );
}