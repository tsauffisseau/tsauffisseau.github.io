import Image from "next/image";

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
          The "Letterboxd for Board Games" – A full-stack social network for board game enthusiasts.
        </p>
        
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <a href="https://societyapp.fr" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 border border-[var(--border)] rounded-xl bg-[var(--background)] hover:-translate-y-0.5 hover:shadow-md transition-all font-semibold text-sm">
            <Image src="/assets/society_logo_black.svg" alt="App" width={16} height={16} className="dark:hidden" />
            <Image src="/assets/society_logo_white.svg" alt="App" width={16} height={16} className="hidden dark:block" />
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
        <h2 className="text-2xl font-bold mb-4">Product Vision & UI/UX</h2>
        <p className="text-[var(--muted)] leading-relaxed mb-8">
          The board game industry is booming, yet players lack a modern, centralized platform to log plays, review games, and connect with their friends' activity. <strong>Society</strong> was built to bridge this gap. Taking inspiration from platforms like Letterboxd or Strava, I designed an intuitive, app-like user experience with a strong focus on mobile responsiveness and clean aesthetics.
        </p>

        <h2 className="text-2xl font-bold mb-4">Architecture & Technical Stack</h2>
        <p className="text-[var(--muted)] leading-relaxed mb-4">
          I architected Society as a full-stack, end-to-end product, handling everything from the database design to the final deployment.
        </p>
        <ul className="list-disc list-inside text-[var(--muted)] space-y-2 mb-8 leading-relaxed">
          <li><strong>Frontend:</strong> React, Next.js (App Router), and Tailwind CSS. Deployed seamlessly on Vercel.</li>
          <li><strong>Backend:</strong> A robust Python API built with FastAPI, connected to a complex PostgreSQL database, with Alembic handling data migrations.</li>
          <li><strong>Data & Algorithms:</strong> Custom Python recommendation engines and smart AI integrations utilizing the OpenAI API. Board game metadata is dynamically aggregated via the BGG API.</li>
          <li><strong>Infrastructure & DevOps:</strong> CI/CD managed through Git/GitHub. Production and development environments are hosted on Railway with built-in observability. Domains (societyapp.fr) are routed via Hostinger.</li>
          <li><strong>External Services:</strong> Cloudinary for optimized image hosting, Resend for transactional emails, and Google Auth for secure, frictionless login.</li>
        </ul>

        <h2 className="text-2xl font-bold mb-4">Current Status & Algorithms</h2>
        <p className="text-[var(--muted)] leading-relaxed mb-8">
          The application is live and in active development. I am currently refining the backend recommendation models and leveraging the massive relational database I built to provide users with highly personalized game suggestions based on their logging history and social graph.
        </p>
      </article>
    </div>
  );
}