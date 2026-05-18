import Image from "next/image";

export default function Posters() {
  return (
    <div className="container mx-auto px-4 max-w-[980px] py-8">
      <h1 className="text-3xl font-bold mb-3">Posters</h1>
      <p className="text-[var(--muted)] mb-8 max-w-2xl leading-relaxed">
        Here you’ll find my scientific posters and academic publications on machine learning and related topics.<br />
        Click to open the PDF or the corresponding page.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Carte Poster Cassiopée */}
        <a 
          href="/assets/poster_ESSI2025.pdf" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="group flex items-center gap-4 p-3 border border-[var(--border)] rounded-2xl bg-[var(--card)] transition-all hover:-translate-y-1 hover:shadow-xl hover:border-[var(--muted)]/40"
        >
          <Image 
            src="/assets/poster_ESSI2025thumb.jpg" 
            alt="Poster Alzheimer EEG" 
            width={90} 
            height={120} 
            className="rounded-lg object-cover border border-[var(--border)] shrink-0" 
          />
          <div className="flex flex-col gap-1 flex-1 min-w-0">
            <h3 className="font-bold text-lg leading-tight truncate">Alzheimer Detection from EEG signals</h3>
            <p className="text-[var(--muted)] text-sm">2025 • Prize-winning project • PDF</p>
            <div className="flex flex-wrap gap-2 mt-1">
              <span className="px-3 py-1 text-xs text-[var(--muted)] border border-[var(--border)] rounded-full bg-[var(--background)]">Deep Learning</span>
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