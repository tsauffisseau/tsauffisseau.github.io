import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  return (
    <div className="container mx-auto px-4 max-w-[980px] py-8">
      <h1 className="text-3xl font-bold mb-3">Projects</h1>
      <p className="text-[var(--muted)] mb-8">Personal projects and open-source contributions. Click on the card to see more.</p>

      <div className="flex flex-col gap-6">
        
        {/* NOUVEAU : SOCIETY */}
        <a href="https://github.com/tsauffisseau/society-app" target="_blank" rel="noopener noreferrer" className="group block bg-[var(--card)] border border-primary/30 rounded-2xl p-5 md:p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl hover:border-primary">
          <div className="flex items-center gap-3 mb-3">
            <Image src="/assets/society_logo.svg" alt="" width={20} height={20} aria-hidden="true" />
            <h3 className="text-xl font-bold text-primary">Society - The BoardGame Social Network</h3>
            <span className="ml-auto inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold border border-[var(--border)] rounded-full bg-[var(--background)]">
              <Image src="/assets/icon-github-black.svg" alt="" width={14} height={14} className="dark:invert" />
              repo
            </span>
          </div>
          <p className="text-[var(--muted)] mb-4 text-sm leading-relaxed">
            Development of the "Letterboxd for board games" (TypeScript App). Architecting the product vision, technical stack, database, and UI/UX from scratch. Active development.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 text-xs text-[var(--muted)] border border-[var(--border)] rounded-full bg-[var(--background)]">TypeScript</span>
            <span className="px-3 py-1 text-xs text-[var(--muted)] border border-[var(--border)] rounded-full bg-[var(--background)]">Next.js</span>
            <span className="px-3 py-1 text-xs text-[var(--muted)] border border-[var(--border)] rounded-full bg-[var(--background)]">Tailwind CSS</span>
            <span className="px-3 py-1 text-xs text-[var(--primary)] border border-[var(--primary)]/30 rounded-full bg-[var(--background)]">Work in progress</span>
          </div>
        </a>

        {/* CASSIOPÉE */}
        <Link href="/projects/cassiopee" className="group block bg-[var(--card)] border border-[var(--border)] rounded-2xl p-5 md:p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl hover:border-[var(--muted)]/40">
          <div className="flex items-center gap-3 mb-3">
            <Image src="/assets/icon-brain.svg" alt="" width={20} height={20} aria-hidden="true" />
            <h3 className="text-xl font-bold text-[var(--foreground)]">Alzheimer Detection - EEG</h3>
            <span className="ml-auto inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold border border-[var(--border)] rounded-full bg-[var(--background)]">
              <Image src="/assets/icon-pdf.svg" alt="" width={14} height={14} />
              poster
            </span>
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
        <a href="https://github.com/tsauffisseau/chesscoach" target="_blank" rel="noopener noreferrer" className="group block bg-[var(--card)] border border-[var(--border)] rounded-2xl p-5 md:p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl hover:border-[var(--muted)]/40">
          <div className="flex items-center gap-3 mb-3">
            <Image src="/assets/icon-chess.svg" alt="" width={20} height={20} aria-hidden="true" />
            <h3 className="text-xl font-bold text-[var(--foreground)]">Chesscoach - Game Analyst</h3>
            <span className="ml-auto inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold border border-[var(--border)] rounded-full bg-[var(--background)]">
              <Image src="/assets/icon-github-black.svg" alt="" width={14} height={14} className="dark:invert" />
              repo
            </span>
          </div>
          <p className="text-[var(--muted)] mb-4 text-sm leading-relaxed">
            Streamlit tool to analyze PGN games with Stockfish: Evolution of your score. Mistakes, blunders and worsts moves classification.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 text-xs text-[var(--muted)] border border-[var(--border)] rounded-full bg-[var(--background)]">Python</span>
            <span className="px-3 py-1 text-xs text-[var(--muted)] border border-[var(--border)] rounded-full bg-[var(--background)]">Streamlit</span>
            <span className="px-3 py-1 text-xs text-[var(--muted)] border border-[var(--border)] rounded-full bg-[var(--background)]">Stockfish</span>
          </div>
        </a>

        {/* BOARDGAME ANALYSIS */}
        <a href="https://github.com/tsauffisseau/boardgame_analysis" target="_blank" rel="noopener noreferrer" className="group block bg-[var(--card)] border border-[var(--border)] rounded-2xl p-5 md:p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl hover:border-[var(--muted)]/40">
          <div className="flex items-center gap-3 mb-3">
            <Image src="/assets/icon-game.svg" alt="" width={20} height={20} aria-hidden="true" />
            <h3 className="text-xl font-bold text-[var(--foreground)]">BoardGame Analysis</h3>
            <span className="ml-auto inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold border border-[var(--border)] rounded-full bg-[var(--background)]">
              <Image src="/assets/icon-github-black.svg" alt="" width={14} height={14} className="dark:invert" />
              repo
            </span>
          </div>
          <p className="text-[var(--muted)] mb-4 text-sm leading-relaxed">
            Exploring the BoardGameGeek landscape through the lens of playtime, complexity, and popularity.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 text-xs text-[var(--muted)] border border-[var(--border)] rounded-full bg-[var(--background)]">Python</span>
            <span className="px-3 py-1 text-xs text-[var(--muted)] border border-[var(--border)] rounded-full bg-[var(--background)]">Pandas</span>
            <span className="px-3 py-1 text-xs text-[var(--muted)] border border-[var(--border)] rounded-full bg-[var(--background)]">Data Viz</span>
          </div>
        </a>

      </div>
    </div>
  );
}