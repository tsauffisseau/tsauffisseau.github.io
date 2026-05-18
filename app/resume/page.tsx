import Image from "next/image";

export default function Resume() {
  return (
    <div className="container mx-auto px-4 max-w-[980px] py-8">
      <h1 className="text-3xl font-bold mb-3">Resume</h1>
      <p className="text-[var(--muted)] mb-8 max-w-2xl leading-relaxed">
        Engineering student at Télécom SudParis (Institut Polytechnique de Paris), with a focus on Machine Learning methods and rigorous evaluation. Interested in building generalizable models and communicating results clearly.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Carte Resume */}
        <a 
          href="/assets/Resume_Theophile_Sauffisseau_MLE_Internship.pdf" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="group flex items-center gap-4 p-3 border border-[var(--border)] rounded-2xl bg-[var(--card)] transition-all hover:-translate-y-1 hover:shadow-xl hover:border-[var(--muted)]/40"
        >
          <Image 
            src="/assets/resumethumb.jpg" 
            alt="Resume Thumbnail" 
            width={90} 
            height={120} 
            className="rounded-lg object-cover border border-[var(--border)] shrink-0" 
          />
          <div className="flex flex-col gap-1 flex-1 min-w-0">
            <h3 className="font-bold text-lg leading-tight">Théophile Sauffisseau - Resume</h3>
            <p className="text-[var(--muted)] text-sm">French • 2025 • PDF</p>
            <div className="flex flex-wrap gap-2 mt-1">
              <span className="px-3 py-1 text-xs text-[var(--muted)] border border-[var(--border)] rounded-full bg-[var(--background)]">Machine Learning</span>
            </div>
          </div>
          <span className="px-3 py-1 text-sm font-semibold border border-[var(--border)] rounded-full bg-[var(--background)] ml-auto shrink-0">
            Open
          </span>
        </a>
      </div>
    </div>
  );
}