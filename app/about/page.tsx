import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="container mx-auto px-4 max-w-[980px] py-8 sm:py-12">
      
      <div className="flex flex-col md:flex-row items-center justify-between mb-10 gap-6">
        <h1 className="text-3xl font-bold">About me</h1>
        
        <div className="flex flex-wrap justify-center gap-3">
          <a href="mailto:theophile.sauffisseau@telecom-sudparis.eu" className="flex items-center gap-2 px-4 py-2 border border-[var(--border)] rounded-xl bg-[var(--card)] hover:-translate-y-0.5 hover:shadow-md transition-all text-sm font-semibold">
            <Image src="/assets/mail_black.svg" alt="Email" width={16} height={16} className="dark:invert" />
            Email
          </a>

          <a href="https://linkedin.com/in/theophile-sauffisseau" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 border border-[var(--border)] rounded-xl bg-[var(--card)] hover:-translate-y-0.5 hover:shadow-md transition-all text-sm font-semibold">
            <Image src="/assets/icon-linkedin.svg" alt="LinkedIn" width={16} height={16} />
            LinkedIn
          </a>

          <a href="https://github.com/tsauffisseau" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 border border-[var(--border)] rounded-xl bg-[var(--card)] hover:-translate-y-0.5 hover:shadow-md transition-all text-sm font-semibold">
            <Image src="/assets/github_logo_black.svg" alt="GitHub" width={16} height={16} className="dark:invert" />
            GitHub
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
        
        <section className="lg:col-span-2 flex flex-col gap-6 text-base leading-relaxed text-[var(--foreground)] order-2 lg:order-1">
          <p>
            Hi, my name is Théophile. I am a French engineering student from Télécom SudParis with a strong focus on <strong>Data Analytics, Business Intelligence, and Data Modeling</strong>.
          </p>
          
          <p>
             I am currently completing my final-year internship as a <strong>Data Analyst at Air Liquide</strong> (Healthcare division), where I transform complex sales and operational datasets into clear visual insights to drive business decisions. I am actively looking for a full-time position (CDI) as a <strong>Business Data Analyst</strong> starting in October 2026.
          </p>

          <p>
            <strong>My Profile</strong><br />
            My goal is to bridge the gap between data infrastructure and concrete business use cases. Whether it is integrating ETL processes, structuring a robust PostgreSQL database, or designing interactive Power BI dashboards, I enjoy turning raw data into actionable insights for sales and marketing teams.
          </p>

          <p>
             Feel free to check my <strong>GitHub</strong>, or reach out by <strong>Email</strong>!
          </p>

          <div className="mt-4">
            <h3 className="font-bold text-lg mb-3">Artistic Work</h3>
            <Link href="/about/creations" className="group flex items-center justify-between p-5 border border-[var(--border)] rounded-2xl bg-[var(--card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-[var(--muted)]/40">
              <div className="flex flex-col gap-1">
                <span className="font-bold text-lg transition-colors">Personal Creations</span>
                <span className="text-[var(--muted)] text-sm">Digital collage, traditional/digital art, video edits</span>
              </div>
              <div className="w-10 h-10 rounded-full border border-[var(--border)] bg-[var(--background)] flex items-center justify-center shrink-0">
                <Image src="/assets/arrow.svg" alt="Arrow" width={16} height={16} className="dark:invert" />
              </div>
            </Link>
          </div>

        </section>

        <aside className="flex flex-col gap-6 order-1 lg:order-2">
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
              <li>Building "Society" Full-stack App</li>
              <li>Seeking full-time roles (Oct-Nov 2026)</li>
              <li>Deep Learning / Data Projects</li>
            </ul>
          </div>
        </aside>
        
      </div>
    </div>
  );
}