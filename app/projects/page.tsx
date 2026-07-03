"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Ce composant ne sert plus QUE pour les liens GitHub externes
function GithubCard({ href, children }: { href: string, children: React.ReactNode }) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div
      className="group relative block bg-[var(--card)] border border-[var(--border)] rounded-2xl p-5 md:p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-[var(--muted)]/40 cursor-pointer overflow-hidden"
      onClick={() => setShowMenu(true)}
    >
      {children}

      {showMenu && (
        <div
          className="absolute inset-0 z-[70] bg-black/85 backdrop-blur-sm rounded-2xl flex flex-col items-center justify-center p-3 animate-in fade-in duration-200 pointer-events-auto"
          onClick={(e) => { e.preventDefault(); e.stopPropagation(); setShowMenu(false); }}
        >
          <p className="text-white font-bold mb-5 text-center text-lg tracking-wide drop-shadow-md">
            Open repository on GitHub?
          </p>
          <div className="flex gap-4 items-center justify-center pointer-events-auto">
            
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="w-[105px] h-[85px] bg-white/10 border border-white/20 rounded-2xl flex flex-col items-center justify-center gap-2 transition-transform active:scale-95 shadow-lg shrink-0"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 text-gray-300">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              <span className="text-[9px] font-black text-gray-200 uppercase tracking-widest text-center px-1 leading-tight">
                OPEN GITHUB
              </span>
            </a>

            <button
              onClick={(e) => { e.preventDefault(); e.stopPropagation(); setShowMenu(false); }}
              className="w-[105px] h-[85px] bg-red-500/10 border border-red-500/30 rounded-2xl flex flex-col items-center justify-center gap-2 transition-transform active:scale-95 shadow-lg shrink-0"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 text-red-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
              <span className="text-[9px] font-black text-red-500 uppercase tracking-widest">
                CANCEL
              </span>
            </button>
            
          </div>
        </div>
      )}
    </div>
  );
}

export default function Projects() {
  return (
    <div className="container mx-auto px-6 max-w-[980px] py-8 sm:py-12">
      <h1 className="text-3xl font-bold mb-3">Projects</h1>
      <p className="text-[var(--muted)] mb-8 leading-relaxed">Personal projects and open-source contributions. Click on the cards below to see more details.</p>

      <div className="flex flex-col gap-6">
        
        {/* SOCIETY - Lien direct (Sans pop-up) */}
        <Link href="/projects/society" className="group block bg-[var(--card)] border border-[var(--border)] rounded-2xl p-5 md:p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-[var(--muted)]/40">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-4">
            <div className="flex items-center gap-3">
              <Image src="/assets/society_logo_black.svg" alt="Society" width={28} height={28} className="shrink-0 dark:hidden" aria-hidden="true" />
              <Image src="/assets/society_logo_white.svg" alt="Society" width={28} height={28} className="shrink-0 hidden dark:block" aria-hidden="true" />
              <h3 className="text-lg sm:text-xl font-bold text-[var(--foreground)] transition-colors leading-snug break-words">Society App</h3>
            </div>
          </div>
          <p className="text-[var(--muted)] mb-5 text-sm leading-relaxed">
            Full-stack application allowing users to track their board game sessions and collections. Architected with FastAPI, PostgreSQL, and Next.js, featuring data aggregation from external APIs.
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-auto">
            <div className="flex flex-wrap gap-2">
               <span className="px-3 py-1 text-xs text-[var(--muted)] border border-[var(--border)] rounded-full bg-[var(--background)]">Full-stack</span>
              <span className="px-3 py-1 text-xs text-[var(--muted)] border border-[var(--border)] rounded-full bg-[var(--background)]">Web App</span>
            </div>
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors">
                 Case Study →
            </span>
          </div>
        </Link>

        {/* CASSIOPÉE - Lien direct (Sans pop-up) */}
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
                 Case Study →
            </span>
          </div>
        </Link>

        {/* CHESSCOACH - Avec Pop-up GitHub */}
        <GithubCard href="https://github.com/tsauffisseau/chesscoach">
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
                 GitHub Repository →
            </span>
          </div>
        </GithubCard>

        {/* BOARDGAME ANALYSIS - Avec Pop-up GitHub */}
        <GithubCard href="https://github.com/tsauffisseau/boardgame_analysis">
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
                 GitHub Repository →
            </span>
          </div>
        </GithubCard>

      </div>
    </div>
  );
}