import Image from "next/image";

export default function PostersAndResume() {
  return (
    <div className="flex flex-col items-center px-6 py-12 sm:py-16">
      
      <h1 className="text-3xl font-bold mb-4 text-center">Posters & Resume</h1>
      {/* Description allégée comme demandé */}
      <p className="text-[var(--muted)] mb-10 max-w-2xl text-center leading-relaxed">
        Here you’ll find my resume, scientific posters, and technical overviews of my main projects.
      </p>

      <div className="flex flex-col gap-5 w-full max-w-[680px]">
        
        {/* CARTE RESUME */}
        <a 
          href="/assets/Resume_Theophile_Sauffisseau_CDI_Octobre.pdf" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="group flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 p-5 border border-[var(--border)] rounded-2xl bg-[var(--card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-[var(--muted)]/40"
        >
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
                 Ouvrir le PDF →
              </span>
            </div>
          </div>
        </a>

        {/* CARTE POSTER CASSIOPÉE */}
        <a 
          href="/assets/poster_ESSI2025.pdf" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="group flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 p-5 border border-[var(--border)] rounded-2xl bg-[var(--card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-[var(--muted)]/40"
        >
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
                Alzheimer Detection via CNN
              </h3>
              <p className="text-[var(--muted)] text-sm mb-3">2025 • Prize-winning project • PDF</p>
              <div className="flex flex-wrap gap-2 mb-2">
                <span className="px-3 py-1 text-xs text-[var(--muted)] border border-[var(--border)] rounded-full bg-[var(--background)]">Deep Learning</span>
                <span className="px-3 py-1 text-xs text-[var(--muted)] border border-[var(--border)] rounded-full bg-[var(--background)]">PyTorch</span>
              </div>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--foreground)] mt-auto group-hover:text-[var(--primary)] transition-colors">
                 <Image src="/assets/icon-pdf.svg" alt="PDF" width={16} height={16} />
                 Voir le Poster →
              </span>
            </div>
          </div>
        </a>

        {/* CARTE POSTER SOCIETY */}
        <a 
          href="/assets/poster_society.pdf" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="group flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 p-5 border border-[var(--border)] rounded-2xl bg-[var(--card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-[var(--muted)]/40"
        >
          <div className="flex gap-4 sm:gap-6 w-full">
            <div className="w-[85px] h-[115px] rounded-lg border border-[var(--border)] bg-[var(--background)] shrink-0 hidden sm:flex items-center justify-center">
              <Image src="/assets/society_logo_black.svg" alt="Society" width={32} height={32} className="dark:hidden opacity-50" />
              <Image src="/assets/society_logo_white.svg" alt="Society" width={32} height={32} className="hidden dark:block opacity-50" />
            </div>

            <div className="flex flex-col gap-1.5 py-1 flex-1">
              {/* Changement du titre pour enlever "social network" */}
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
                 Voir l'Architecture →
              </span>
            </div>
          </div>
        </a>

      </div>
    </div>
  );
}