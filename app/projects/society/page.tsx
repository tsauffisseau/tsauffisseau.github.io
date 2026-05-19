import Image from "next/image";

export default function SocietyCaseStudy() {
  return (
    <div className="container mx-auto px-4 max-w-[980px] py-8 sm:py-12">
      
      {/* Header du Projet */}
      <div className="mb-10 border-b border-[var(--border)] pb-8">
        <div className="flex items-center gap-3 mb-4">
          <Image src="/assets/logo_society_black.svg" alt="Society Logo" width={36} height={36} className="dark:invert" />
          <h1 className="text-3xl sm:text-4xl font-bold">Society App</h1>
        </div>
        
        <p className="text-[var(--muted)] text-lg mb-6">
          The "Letterboxd for Board Games" – A full-stack social network for board game enthusiasts.
        </p>
        
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <a href="https://societyapp.fr" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 border border-primary/30 rounded-xl bg-primary/5 text-primary hover:-translate-y-0.5 hover:shadow-md transition-all font-semibold text-sm">
            <Image src="/assets/logo_society_black.svg" alt="App" width={16} height={16} className="dark:invert" style={{ filter: 'brightness(0) saturate(100%) invert(39%) sepia(85%) saturate(2330%) hue-rotate(214deg) brightness(101%) contrast(97%)' }} />
            Open Web App
          </a>
          
          <a href="/assets/poster_society.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 border border-[var(--border)] rounded-xl bg-[var(--background)] hover:-translate-y-0.5 hover:shadow-sm transition-all font-semibold text-sm">
            <Image src="/assets/icon-pdf.svg" alt="PDF" width={16} height={16} />
            Architecture Poster
          </a>
        </div>

        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 text-xs font-semibold text-[var(--foreground)] border border-[var(--border)] rounded-full bg-[var(--background)]">TypeScript</span>
          <span className="px-3 py-1 text-xs text-[var(--muted)] border border-[var(--border)] rounded-full bg-[var(--background)]">Next.js App Router</span>
          <span className="px-3 py-1 text-xs text-[var(--muted)] border border-[var(--border)] rounded-full bg-[var(--background)]">FastAPI (Python)</span>
          <span className="px-3 py-1 text-xs text-[var(--muted)] border border-[var(--border)] rounded-full bg-[var(--background)]">Tailwind CSS</span>
        </div>
      </div>

      {/* Corps du texte */}
      <article className="max-w-[860px]">
        <h2 className="text-2xl font-bold mb-4">Product Vision</h2>
        <p className="text-[var(--muted)] leading-relaxed mb-8">
          The board game industry is booming, yet players lack a modern, centralized platform to log plays, review games, and connect with their friends' activity. <strong>Society</strong> was built to bridge this gap, taking inspiration from platforms like Letterboxd or Strava, but tailored to the specific needs of modern board gamers.
        </p>

        <h2 className="text-2xl font-bold mb-4">Architecture & Approach</h2>
        <ul className="list-disc list-inside text-[var(--muted)] space-y-2 mb-8 leading-relaxed">
          <li><strong>Frontend:</strong> Modern React with Next.js App Router and Tailwind CSS for a fully responsive, app-like UI.</li>
          <li><strong>Backend:</strong> Robust Python API built with FastAPI, handling user authentication, data logic, and game database management.</li>
          <li><strong>Database:</strong> Structuring complex relationships between users, collections, ratings, and game metadata.</li>
          <li><strong>Product Management:</strong> End-to-end design, from Figma mockups and user stories to deployment and continuous integration.</li>
        </ul>

        <h2 className="text-2xl font-bold mb-4">Current Status</h2>
        <p className="text-[var(--muted)] leading-relaxed mb-8">
          The application is in active development. I am continuously iterating on the product, adding new social features, refining the recommendation algorithms, and improving the mobile experience.
        </p>
      </article>
    </div>
  );
}