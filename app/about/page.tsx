import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="container mx-auto px-4 max-w-[980px] py-8">
      
      {/* Header : Titre + Liens sociaux */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-10 gap-6">
        <h1 className="text-3xl font-bold">About me</h1>
        
        <div className="flex flex-wrap justify-center gap-3">
          <a href="mailto:theophile.sauffisseau@telecom-sudparis.eu" className="flex items-center gap-2 px-4 py-2 border border-[var(--border)] rounded-xl bg-[var(--background)] hover:-translate-y-0.5 hover:shadow-md transition-all text-sm font-semibold">
            <Image src="/assets/icon-mail-black2.svg" alt="Email" width={16} height={16} className="dark:invert" />
            Email
          </a>
          
          <a href="https://github.com/tsauffisseau/society-app" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 border border-primary/30 rounded-xl bg-[var(--background)] hover:-translate-y-0.5 hover:shadow-md transition-all text-sm font-semibold text-primary">
            <Image src="/assets/society_logo.svg" alt="Society" width={16} height={16} />
            Society App
          </a>

          <a href="https://linkedin.com/in/theophile-sauffisseau" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 border border-[var(--border)] rounded-xl bg-[var(--background)] hover:-translate-y-0.5 hover:shadow-md transition-all text-sm font-semibold">
            <Image src="/assets/icon-linkedin.svg" alt="LinkedIn" width={16} height={16} />
            LinkedIn
          </a>

          <a href="https://github.com/tsauffisseau" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 border border-[var(--border)] rounded-xl bg-[var(--background)] hover:-translate-y-0.5 hover:shadow-md transition-all text-sm font-semibold">
            <Image src="/assets/icon-github-black.svg" alt="GitHub" width={16} height={16} className="dark:invert" />
            GitHub
          </a>
        </div>
      </div>

      {/* Grille principale (2/3 Texte - 1/3 Side) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
        
        {/* Colonne Gauche : Texte */}
        <section className="lg:col-span-2 flex flex-col gap-6 text-base leading-relaxed text-[var(--foreground)]">
          <p>
            I’m Théophile Sauffisseau, a French engineering student focused on <strong>machine learning</strong>.<br />
            I am interested in developing explainable models, applied to meaningful topics, particularly in healthcare.<br />
            Currently working as a <strong>Data Analyst at Air Liquide</strong> (Healthcare division). I am looking for a full-time position (CDI) in Data/AI or Product Management starting in September 2026.
          </p>
          
          <p>
            Here I share a few favorite projects and end-to-end pipelines.<br />
            I invite you to have a look at my <Link href="/projects" className="underline decoration-dotted underline-offset-4 hover:opacity-80">projects</Link>, browse my <Link href="/posters" className="underline decoration-dotted underline-offset-4 hover:opacity-80">posters</Link>, or grab my <Link href="/resume" className="underline decoration-dotted underline-offset-4 hover:opacity-80">resume</Link>.
          </p>

          <p>
            <strong>My Profile</strong><br />
            I am interested in developing effective and explainable models, applied to meaningful topics. 
            My goal is to design innovative solutions tailored to high-impact challenges. 
            I enjoy exploring data and models and turning ideas into simple, tangible demos. 
            I’m also into clean visuals and new ways of seeing and exploring my environment. 
            Feel free to check my <strong>GitHub</strong> and <strong>Society App</strong>, or reach me by <strong>Email</strong> !
          </p>

          <p>
            If you’re curious about my artistic work: Have a look at my <Link href="/about/creations" className="underline decoration-dotted underline-offset-4 hover:opacity-80">Personnal Creations</Link>.
          </p>
        </section>

        {/* Colonne Droite : Image & Now */}
        <aside className="flex flex-col gap-6">
          <Image 
            src="/assets/photo_aboutmetoo.jpg" 
            alt="Théophile Sauffisseau" 
            width={400} 
            height={400} 
            className="w-full max-w-[260px] mx-auto rounded-2xl object-cover border border-[var(--border)] shadow-md"
          />
          
          <div className="bg-[var(--card)] border border-[var(--border)] rounded-2xl p-5 shadow-sm">
            <h3 className="font-bold text-lg mb-3">Now</h3>
            <ul className="list-disc list-inside text-[var(--muted)] space-y-2 text-sm">
              <li>Data Analyst @ Air Liquide</li>
              <li>Building "Society" App</li>
              <li>Seeking full-time roles (Sept 2026)</li>
              <li>ML Projects - GitHub repo</li>
            </ul>
          </div>
        </aside>
        
      </div>
    </div>
  );
}