"use client";

import { useState } from "react";
import Image from "next/image";

// Composant qui ajoute l'overlay sur le PDF
function ResumeCard({ href, children }: { href: string, children: React.ReactNode }) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div
      className="group relative flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 p-5 border border-[var(--border)] rounded-2xl bg-[var(--card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-[var(--muted)]/40 cursor-pointer overflow-hidden"
      onClick={() => setShowMenu(true)}
    >
      {children}

      {showMenu && (
        <div
          className="absolute inset-0 z-[70] bg-black/85 backdrop-blur-sm rounded-2xl flex flex-col items-center justify-center p-3 animate-in fade-in duration-200 pointer-events-auto"
          onClick={(e) => { e.preventDefault(); e.stopPropagation(); setShowMenu(false); }}
        >
          <p className="text-white font-bold mb-5 text-center text-lg tracking-wide drop-shadow-md">
            Open PDF document?
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
                OPEN PDF
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

export default function PostersAndResume() {
  return (
    <div className="flex flex-col items-center px-6 py-12 sm:py-16">
      
      <h1 className="text-3xl font-bold mb-4 text-center">Posters & Resume</h1>
      <p className="text-[var(--muted)] mb-10 max-w-2xl text-center leading-relaxed">
        Here you’ll find my resume, scientific posters, and technical overviews of my main projects.
      </p>

      <div className="flex flex-col gap-5 w-full max-w-[680px]">
        
        {/* CARTE RESUME */}
        <ResumeCard href="/assets/Resume_ThéophileSauffisseau_2026.pdf">
          <div className="flex gap-4 sm:gap-6 w-full">
            <Image 
              src="/assets/resumethumb.jpg" 
              alt="Resume Thumbnail" 
              width={85} 
              height={115} 
              className="rounded-lg object-cover border border-[var(--border)] shrink-0 hidden sm:block" 
            />
            <div className="flex flex-col gap-1.5 py-1 flex-1">
              <h3 className="font-bold text-lg sm:text-xl leading-snug break-words">
                Théophile Sauffisseau - Resume
              </h3>
              <p className="text-[var(--muted)] text-sm mb-3">French • 2026 • PDF</p>
              <div className="flex flex-wrap gap-2 mb-2">
                <span className="px-3 py-1 text-xs text-[var(--muted)] border border-[var(--border)] rounded-full bg-[var(--background)]">Machine Learning</span>
                <span className="px-3 py-1 text-xs text-[var(--muted)] border border-[var(--border)] rounded-full bg-[var(--background)]">Data Engineering</span>
              </div>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--foreground)] mt-auto group-hover:text-[var(--primary)] transition-colors">
                 <Image src="/assets/icon-pdf.svg" alt="PDF" width={16} height={16} />
                 Open PDF →
              </span>
            </div>
          </div>
        </ResumeCard>

        {/* CARTE POSTER CASSIOPÉE */}
        <ResumeCard href="/assets/poster_ESSI2025.pdf">
          <div className="flex gap-4 sm:gap-6 w-full">
            <Image 
              src="/assets/poster_ESSI2025thumb.jpg" 
              alt="Poster Alzheimer EEG" 
              width={85} 
              height={115} 
              className="rounded-lg object-cover border border-[var(--border)] shrink-0 hidden sm:block" 
            />
            <div className="flex flex-col gap-1.5 py-1 flex-1">
              <h3 className="font-bold text-lg sm:text-xl leading-snug break-words">
                Alzheimer Detection via CNN - Poster
              </h3>
              <p className="text-[var(--muted)] text-sm mb-3">2025 • Prize-winning project • PDF</p>
              <div className="flex flex-wrap gap-2 mb-2">
                <span className="px-3 py-1 text-xs text-[var(--muted)] border border-[var(--border)] rounded-full bg-[var(--background)]">Deep Learning</span>
                <span className="px-3 py-1 text-xs text-[var(--muted)] border border-[var(--border)] rounded-full bg-[var(--background)]">PyTorch</span>
              </div>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--foreground)] mt-auto group-hover:text-[var(--primary)] transition-colors">
                 <Image src="/assets/icon-pdf.svg" alt="PDF" width={16} height={16} />
                 Open PDF →
              </span>
            </div>
          </div>
        </ResumeCard>

        {/* CARTE POSTER SOCIETY */}
        <ResumeCard href="/assets/poster_society.pdf">
          <div className="flex gap-4 sm:gap-6 w-full">
            <div className="w-[85px] h-[115px] rounded-lg border border-[var(--border)] bg-[var(--background)] shrink-0 hidden sm:flex items-center justify-center">
              <Image src="/assets/society_logo_black.svg" alt="Society" width={32} height={32} className="dark:hidden opacity-50" />
              <Image src="/assets/society_logo_white.svg" alt="Society" width={32} height={32} className="hidden dark:block opacity-50" />
            </div>

            <div className="flex flex-col gap-1.5 py-1 flex-1">
              <h3 className="font-bold text-lg sm:text-xl leading-snug break-words text-[var(--foreground)]">
                Society App - Technical Overview
              </h3>
              <p className="text-[var(--muted)] text-sm mb-3">2026 • Product Pitch Deck • PDF</p>
              <div className="flex flex-wrap gap-2 mb-2">
                <span className="px-3 py-1 text-xs text-[var(--muted)] border border-[var(--border)] rounded-full bg-[var(--background)]">Architecture</span>
                <span className="px-3 py-1 text-xs text-[var(--muted)] border border-[var(--border)] rounded-full bg-[var(--background)]">Full-stack</span>
              </div>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--foreground)] mt-auto group-hover:text-[var(--primary)] transition-colors">
                 <Image src="/assets/icon-pdf.svg" alt="PDF" width={16} height={16} />
                 Open PDF →
              </span>
            </div>
          </div>
        </ResumeCard>

      </div>
    </div>
  );
}