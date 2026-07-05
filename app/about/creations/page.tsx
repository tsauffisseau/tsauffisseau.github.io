import Image from "next/image";

export default function Creations() {
  return (
    <div className="container mx-auto px-4 max-w-[980px] py-12 flex flex-col items-center text-center">
      
      <h1 className="text-3xl font-bold mb-4">Personal Creations</h1>
      <p className="text-[var(--muted)] max-w-2xl leading-relaxed mb-8">
        I build images through digital collage and <strong>traditional/digital</strong> creation. I focus on personal compositions - Feel free to check my Instagram and Youtube Channel.
      </p>

      <a 
        href="https://instagram.com/philes_art" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="inline-flex items-center gap-2 px-5 py-2.5 mb-12 border border-[var(--border)] rounded-full bg-[var(--card)] hover:-translate-y-1 hover:shadow-lg transition-all font-semibold text-sm"
      >
        <Image src="/assets/icon-instagram.svg" alt="Instagram" width={18} height={18} />
        Instagram account
      </a>

      {/* Galerie */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full mb-12">
        {/* L'astuce Next.js Image : fill + object-cover dans une div parent "relative" */}
        <div className="group relative aspect-square w-full rounded-2xl overflow-hidden border border-[var(--border)] shadow-sm bg-[var(--card)]">
          <Image src="/assets/creations/crea1.jpg" alt="Collage 01" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
        </div>
        <div className="group relative aspect-square w-full rounded-2xl overflow-hidden border border-[var(--border)] shadow-sm bg-[var(--card)]">
          <Image src="/assets/creations/crea2.jpg" alt="Collage 02" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
        </div>
        <div className="group relative aspect-square w-full rounded-2xl overflow-hidden border border-[var(--border)] shadow-sm bg-[var(--card)]">
          <Image src="/assets/creations/crea3.jpg" alt="Collage 03" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
        </div>
      </div>

      <a 
        href="https://www.youtube.com/@PhilesArt" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="inline-flex items-center gap-2 px-5 py-2.5 border border-[var(--border)] rounded-full bg-[var(--card)] hover:-translate-y-1 hover:shadow-lg transition-all font-semibold text-sm"
      >
        <Image src="/assets/icon-youtube.svg" alt="YouTube" width={18} height={18} />
        Youtube Channel
      </a>
    </div>
  );
}