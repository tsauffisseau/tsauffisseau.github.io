import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  return (
    <div className="container mx-auto px-4 max-w-[980px] py-8 sm:py-12">
      <h1 className="text-3xl font-bold mb-3">Projects</h1>
      <p className="text-[var(--muted)] mb-8">Personal projects and open-source contributions. Click on the card to see more.</p>

      <div className="flex flex-col gap-6">
        
        {/* SOCIETY */}
        <Link href="/projects/society" className="group block bg-[var(--card)] border border-[var(--border)] rounded-2xl p-5 md:p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-[var(--muted)]/40">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-4">
            <div className="flex items-center gap-3">
              <Image src="/assets/society_logo_white.svg" alt="Society" width={28} height={28} className="shrink-0" aria-hidden="true" />
              <h3 className="text-lg sm:text-xl font-bold text-[var(--foreground)] transition-colors">Society - The BoardGame Social Network</h3>
            </div>
          </div>
          <p className="text-[var(--muted)] mb-4 text-sm leading-relaxed">
            Development of the "Letterboxd for board games" (TypeScript App). Architecting the product vision, technical stack, database, and UI/UX from scratch. Active development.
          </p>
          <div className="flex flex-wrap gap-2 mt-auto">
            <span className="px-3 py-1 text-xs text-[var(--muted)] border border-[var(--border)] rounded-full bg-[var(--background)]">TypeScript</span>
            <span className="px-3 py-1 text-xs text-[var(--muted)] border border-[var(--border)] rounded-full bg-[var(--background)]">Next.js</span>
            <span className="px-3 py-1 text-xs text-[var(--muted)] border border-[var(--border)] rounded-full bg-[var(--background)]">My App</span>
          </div>
        </Link>

        {/* CASSIOPÉE */}
        <Link href="/projects/cassiopee" className="group block bg-[var(--card)] border border-[var(--border)] rounded-2xl p-5 md:p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-[var(--muted)]/40">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-4">
            <div className="flex items-center gap-3">
              <Image src="/assets/icon-brain.svg" alt="Cassiopee" width={28} height={28} className="shrink-0" aria-hidden="true" />
              <h3 className="text-lg sm:text-xl font-bold text-[var(--foreground)]">Alzheimer Detection - EEG</h3>
            </div>
          </div>
          <p className="text-[var(--muted)] mb-4 text-sm leading-relaxed">
            CNN on recurrence-plot representations of multichannel time-series (19 channels). Window-level scoring with subject-level aggregation. Reproducible PyTorch pipeline.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 text-xs text-[var(--muted)] border border-[var(--border)] rounded-full bg-[var(--background)]">PyTorch</span>
            <span className="px-3 py-1 text-xs text-[var(--muted)] border border-[var(--border)] rounded-full bg-[var(--background)]">Medical Engineering</span>
            <span className="px-3 py-1 text-xs text-[var(--muted)] border border-[var(--border)] rounded-full bg-[var(--background)]">Deep Learning</span>
          </div>
        </Link>

        {/* CHESSCOACH */}
        <a href="https://github.com/tsauffisseau/chesscoach" target="_blank" rel="noopener noreferrer" className="group block bg-[var(--card)] border border-[var(--border)] rounded-2xl p-5 md:p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-[var(--muted)]/40">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-4">
            <div className="flex items-center gap-3">
              <Image src="/assets/icon-chess.svg" alt="Chess" width={28} height={28} className="shrink-0" aria-hidden="true" />
              <h3 className="text-lg sm:text-xl font-bold text-[var(--foreground)]">Chesscoach - Game Analyst</h3>
            </div>
            <span className="sm:ml-auto inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold border border-[var(--border)] rounded-full bg-[var(--background)] w-fit">
              <Image src="/assets/github_logo_black.svg" alt="GitHub" width={14} height={14} className="dark:invert" />
              repo
            </span>
          </div>
          <p className="text-[var(--muted)] mb-4 text-sm leading-relaxed">
            Streamlit tool to analyze PGN games with Stockfish: Evolution of your score. Mistakes, blunders and worsts moves classification.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 text-xs text-[var(--muted)] border border-[var(--border)] rounded-full bg-[var(--background)]">Python</span>
            <span className="px-3 py-1 text-xs text-[var(--muted)] border border-[var(--border)] rounded-full bg-[var(--background)]">Streamlit</span>
          </div>
        </a>

        {/* BOARDGAME ANALYSIS */}
        <a href="https://github.com/tsauffisseau/boardgame_analysis" target="_blank" rel="noopener noreferrer" className="group block bg-[var(--card)] border border-[var(--border)] rounded-2xl p-5 md:p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-[var(--muted)]/40">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-4">
            <div className="flex items-center gap-3">
              <Image src="/assets/icon-game.svg" alt="Boardgame" width={28} height={28} className="shrink-0" aria-hidden="true" />
              <h3 className="text-lg sm:text-xl font-bold text-[var(--foreground)]">BoardGame Analysis</h3>
            </div>
            <span className="sm:ml-auto inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold border border-[var(--border)] rounded-full bg-[var(--background)] w-fit">
              <Image src="/assets/github_logo_black.svg" alt="GitHub" width={14} height={14} className="dark:invert" />
              repo
            </span>
          </div>
          <p className="text-[var(--muted)] mb-4 text-sm leading-relaxed">
            Exploring the BoardGameGeek landscape through the lens of playtime, complexity, and popularity.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 text-xs text-[var(--muted)] border border-[var(--border)] rounded-full bg-[var(--background)]">Python</span>
            <span className="px-3 py-1 text-xs text-[var(--muted)] border border-[var(--border)] rounded-full bg-[var(--background)]">Pandas</span>
          </div>
        </a>

      </div>
    </div>
  );
}