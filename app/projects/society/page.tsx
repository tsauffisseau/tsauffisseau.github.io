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
        className="inline-flex items-center gap-2 px-4 py-2 border border-[var(--border)] rounded-xl bg-[var(--background)] hover:-translate-y-0.5 hover:shadow-sm transition-all font-semibold text-sm cursor-pointer"
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

export default function SocietyCaseStudy() {
  return (
    <div className="container mx-auto px-4 max-w-[980px] py-8 sm:py-12">
      
      {/* Header du Projet */}
      <div className="mb-10 border-b border-[var(--border)] pb-8">
        <div className="flex items-center gap-3 mb-4">
          <Image src="/assets/society_logo_black.svg" alt="Society Logo" width={36} height={36} className="dark:hidden" />
          <Image src="/assets/society_logo_white.svg" alt="Society Logo" width={36} height={36} className="hidden dark:block" />
          <h1 className="text-3xl sm:text-4xl font-bold">Society App</h1>
        </div>
        
        <p className="text-[var(--muted)] text-lg mb-6">
          A full-stack, data-driven social network tailored for board game enthusiasts.
        </p>
        
        <div className="flex flex-wrap items-center gap-3 mb-6">
          {/* Lien Direct (Logo explicite) */}
          <a href="https://societyapp.fr" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 border border-[var(--border)] rounded-xl bg-[var(--background)] hover:-translate-y-0.5 hover:shadow-md transition-all font-semibold text-sm">
            <Image src="/assets/society_logo_black.svg" alt="App" width={16} height={16} className="dark:hidden" />
            <Image src="/assets/society_logo_white.svg" alt="App" width={16} height={16} className="hidden dark:block" />
            Open Web App
          </a>
          
          {/* Nouveau bouton Modal pour le PDF */}
          <PdfModalButton href="/assets/poster_society.pdf" label="App Presentation" />
        </div>

        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 text-xs font-semibold text-[var(--foreground)] border border-[var(--border)] rounded-full bg-[var(--background)]">TypeScript</span>
          <span className="px-3 py-1 text-xs text-[var(--muted)] border border-[var(--border)] rounded-full bg-[var(--background)]">Next.js App Router</span>
          <span className="px-3 py-1 text-xs text-[var(--muted)] border border-[var(--border)] rounded-full bg-[var(--background)]">FastAPI (Python)</span>
          <span className="px-3 py-1 text-xs font-semibold text-[var(--foreground)] border border-[var(--border)] rounded-full bg-[var(--background)]">Data Modeling</span>
          <span className="px-3 py-1 text-xs text-[var(--muted)] border border-[var(--border)] rounded-full bg-[var(--background)]">PostgreSQL</span>
        </div>
      </div>

      {/* Corps du texte */}
      <article className="max-w-[860px]">
        <h2 className="text-2xl font-bold mb-4">Product Vision & UI/UX</h2>
        <p className="text-[var(--muted)] leading-relaxed mb-8">
        While modern board games feature stunning artwork, existing digital tools remain visually outdated, clunky, and fail to do these beautiful illustrations justice. <strong>Society</strong> was built to replace these old interfaces with a comprehensive, all-in-one platform. It seamlessly combines smart game recommendations tailored to your tastes, detailed collection and play tracking, and advanced social features. I designed an intuitive, highly visual user experience that finally brings the aesthetic of modern board gaming to the digital space.
        </p>

        <h2 className="text-2xl font-bold mb-4">Architecture & Technical Stack</h2>
        <p className="text-[var(--muted)] leading-relaxed mb-4">
          I architected Society(Web App) as a full-stack, end-to-end product, handling everything from the database design to the final deployment.
        </p>
        <ul className="list-disc list-inside text-[var(--muted)] space-y-2 mb-8 leading-relaxed">
          <li><strong>Backend & Data Integration:</strong> A robust Python API built with FastAPI, connected to a complex PostgreSQL database. I designed the conceptual and physical data models to ensure data integrity and scalability, with Alembic handling migrations.</li>
          <li><strong>Frontend:</strong> React, Next.js (App Router), and Tailwind CSS. Deployed seamlessly on Vercel.</li>
          <li><strong>Backend:</strong> A robust Python API built with FastAPI, connected to a complex PostgreSQL database, with Alembic handling data migrations.</li>
          <li><strong>Data & Algorithms:</strong> Custom Python recommendation engines and smart AI integrations utilizing the OpenAI API. Board game metadata is dynamically aggregated via the BGG API.</li>
          <li><strong>Infrastructure & DevOps:</strong> CI/CD managed through Git/GitHub. Production and development environments are hosted on Railway with built-in observability. Domains (societyapp.fr) are routed via Hostinger.</li>
          <li><strong>External Services:</strong> Cloudinary for optimized image hosting, Resend for transactional emails, and Google Auth for secure, frictionless login.</li>
        </ul>

        <h2 className="text-2xl font-bold mb-4">Current Status & Algorithms</h2>
        <p className="text-[var(--muted)] leading-relaxed mb-8">
          The application is live and in active development. I am currently refining the backend recommendation models and leveraging the massive relational database I built to provide users with highly personalized game suggestions based on their logging history and wishlist games order.
        </p>
      </article>
    </div>
  );
}