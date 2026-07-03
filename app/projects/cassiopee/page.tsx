"use client";

import { useState } from "react";
import Image from "next/image";

// Composant qui gère le pop-up de confirmation en plein écran pour les petits boutons
function PdfModalButton({ href, label }: { href: string; label: string }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="inline-flex items-center gap-2 px-4 py-2 border border-[var(--border)] rounded-xl bg-[var(--background)] hover:-translate-y-0.5 hover:shadow-md transition-all font-semibold text-sm cursor-pointer"
      >
        <Image src="/assets/icon-pdf.svg" alt="PDF" width={16} height={16} />
        {label}
      </button>

      {showModal && (
        <div
          className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-sm flex flex-col items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={(e) => { e.preventDefault(); e.stopPropagation(); setShowModal(false); }}
        >
          <p className="text-white font-bold mb-6 text-center text-xl tracking-wide drop-shadow-md">
            Open PDF document?
          </p>
          <div className="flex gap-5 items-center justify-center">
            
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="w-[115px] h-[95px] bg-white/10 border border-white/20 rounded-2xl flex flex-col items-center justify-center gap-2 transition-transform active:scale-95 shadow-lg shrink-0"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6 text-gray-300">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              <span className="text-[10px] font-black text-gray-200 uppercase tracking-widest text-center px-1 leading-tight">
                OPEN PDF
              </span>
            </a>

            <button
              onClick={(e) => { e.preventDefault(); e.stopPropagation(); setShowModal(false); }}
              className="w-[115px] h-[95px] bg-red-500/10 border border-red-500/30 rounded-2xl flex flex-col items-center justify-center gap-2 transition-transform active:scale-95 shadow-lg shrink-0"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6 text-red-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
              <span className="text-[10px] font-black text-red-500 uppercase tracking-widest">
                CANCEL
              </span>
            </button>

          </div>
        </div>
      )}
    </>
  );
}

export default function CassiopeeCaseStudy() {
  return (
    <div className="container mx-auto px-4 max-w-[980px] py-8">
      
      {/* Header du Projet */}
      <div className="mb-12 border-b border-[var(--border)] pb-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-3">Projet Cassiopée 2025 - Alzheimer Detection via CNN</h1>
        <p className="text-[var(--muted)] text-lg mb-6">CNN on <em className="italic">Recurrence Plots</em> from 19-channel EEG – End-to-end pipeline</p>
        
        <div className="flex flex-wrap items-center gap-4 mb-5">
          {/* Nouveau bouton Modal pour le PDF */}
          <PdfModalButton href="/assets/poster_ESSI2025.pdf" label="Poster" />
        </div>

        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 text-xs font-semibold text-yellow-600 dark:text-yellow-500 border border-yellow-600/30 dark:border-yellow-500/30 rounded-full bg-[var(--background)]">1st Prize</span>
          <span className="px-3 py-1 text-xs text-[var(--muted)] border border-[var(--border)] rounded-full bg-[var(--background)]">Medical Engineering</span>
          <span className="px-3 py-1 text-xs text-[var(--muted)] border border-[var(--border)] rounded-full bg-[var(--background)]">PyTorch</span>
          <span className="px-3 py-1 text-xs text-[var(--muted)] border border-[var(--border)] rounded-full bg-[var(--background)]">Deep Learning</span>
        </div>
      </div>

      {/* Corps du texte */}
      <article className="max-w-[860px]">
        <h2 className="text-2xl font-bold mb-4">Context</h2>
        <p className="text-[var(--muted)] leading-relaxed mb-8">
          Early detection of Alzheimer’s disease from non-invasive EEG is challenging: signals are noisy, non-stationary and class imbalance is common. We explore a representation-learning approach by transforming windows of EEG into <strong>Recurrence Plots (RP)</strong> and training a lightweight CNN.
        </p>

        <h2 className="text-2xl font-bold mb-4">Approach</h2>
        <ul className="list-disc list-inside text-[var(--muted)] space-y-2 mb-8 leading-relaxed">
          <li>19 electrodes (10–20) – 20 s windows – RP images (200×200) per second.</li>
          <li>Simple CNN (32/64) + BatchNorm + MaxPool – 128-FC – 1 logit (no sigmoid).</li>
          <li>Reproducible preprocessing & splits, metrics at window & patient level.</li>
        </ul>

        <h2 className="text-2xl font-bold mb-4">Results & highlights</h2>
        <ul className="list-disc list-inside text-[var(--muted)] space-y-2 mb-8 leading-relaxed">
          <li>Coherent structure for good results for a first approach.</li>
          <li>Project awarded <strong>1st prize</strong> (student challenge).</li>
          <li>Won the best <strong>Poster</strong> from the Colloque ESSI 2025.</li>
        </ul>

        <h2 className="text-2xl font-bold mb-4">Libraries used</h2>
        <ul className="list-disc list-inside text-[var(--muted)] space-y-2">
          <li>PyTorch, NumPy, Pandas, OpenCV, Matplotlib</li>
        </ul>
      </article>
    </div>
  );
}