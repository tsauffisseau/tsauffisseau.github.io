import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import aboutPhoto from "@/public/assets/photo_aboutmetoo.jpg";
import { PROFILE } from "@/lib/content";
import { Rich, buttonPrimary, buttonSecondary } from "@/components/ui";

export const metadata: Metadata = {
  title: "À propos",
  description: "Parcours de Théophile Sauffisseau, ingénieur Télécom SudParis : Consultant Data / Product Data Analyst.",
};

const NOW = [
  "Recherche d'un CDI à Paris à partir de janvier 2027",
  "Développement continu de Society (societyapp.fr)",
  "Construction du pipeline ETL BoardGameGeek",
];

export default function About() {
  return (
    <div className="container mx-auto px-4 sm:px-6 max-w-[980px] py-10 sm:py-14">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-6">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">À propos</h1>
        <div className="flex flex-wrap gap-3">
          <a href={`mailto:${PROFILE.email}`} className={buttonSecondary}>
            <Mail className="h-4 w-4" aria-hidden="true" /> E-mail
          </a>
          <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className={buttonSecondary}>
            <LinkedinIcon /> LinkedIn
          </a>
          <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className={buttonSecondary}>
            <GithubIcon /> GitHub
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
        <section className="lg:col-span-2 flex flex-col gap-5 text-base leading-relaxed text-[var(--muted)] order-2 lg:order-1">
          <p>
            <Rich text="Je suis Théophile, **ingénieur diplômé de Télécom SudParis** (Institut Polytechnique de Paris). Je recherche un CDI à Paris à partir de janvier 2027 en tant que **Consultant Data** (technico-fonctionnel / AMOA Data) ou **Product Data Analyst**." />
          </p>

          <h2 className="text-xl font-bold text-[var(--foreground)] mt-2">Mon fil rouge : la donnée de bout en bout</h2>
          <p>
            <Rich text="J'ai vécu en parallèle les deux extrémités de la chaîne de valeur de la donnée. Côté **OLAP**, en stage de fin d'études chez **Air Liquide Healthcare**, j'ai conçu une solution décisionnelle pour les équipes commerciales : cadrage avec le métier, pipeline de données sur AWS, modélisation analytique et dashboards Power BI." />
          </p>
          <p>
            <Rich text="Côté **OLTP**, j'ai conçu et mis en production **Society**, une application utilisée par **+200 utilisateurs** dont j'ai conçu le modèle relationnel (32 tables), l'API, le moteur de recommandation et les pipelines analytiques de suivi d'usage." />
          </p>
          <p>
            <Rich text="Ce double point de vue me permet de faire le pont entre ceux qui construisent la donnée et ceux qui l'utilisent pour décider : comprendre un besoin métier, le traduire en modèle de données et en KPIs, puis livrer un outil réellement adopté." />
          </p>

          <div className="flex flex-wrap gap-3 mt-2">
            <a href={PROFILE.cvPath} download={PROFILE.cvDownloadName} className={buttonPrimary}>
              <Download className="h-4 w-4" aria-hidden="true" /> Télécharger mon CV
            </a>
            <Link href="/projects" className={buttonSecondary}>
              Voir mes projets
            </Link>
          </div>

          <div className="mt-6">
            <h2 className="font-bold text-lg text-[var(--foreground)] mb-3">En dehors de la data</h2>
            <Link
              href="/about/creations"
              className="group flex items-center justify-between p-5 border border-[var(--border)] rounded-2xl bg-[var(--card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-[var(--muted)]/40"
            >
              <div className="flex flex-col gap-1">
                <span className="font-bold text-lg text-[var(--foreground)]">Créations personnelles</span>
                <span className="text-sm">Collage numérique, création traditionnelle et digitale, montage vidéo</span>
              </div>
              <div className="w-10 h-10 rounded-full border border-[var(--border)] bg-[var(--background)] flex items-center justify-center shrink-0">
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </div>
            </Link>
          </div>
        </section>

        <aside className="flex flex-col gap-5 order-1 lg:order-2">
          <Image
            src={aboutPhoto}
            alt={PROFILE.name}
            placeholder="blur"
            sizes="260px"
            priority
            className="w-full max-w-[260px] mx-auto rounded-2xl object-cover border border-[var(--border)] shadow-md"
          />

          <div className="bg-[var(--card)] border border-[var(--border)] rounded-2xl p-5">
            <h3 className="font-bold mb-3">En ce moment</h3>
            <ul className="space-y-1.5 text-sm text-[var(--muted)] list-disc pl-5 marker:text-[var(--muted)]">
              {NOW.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="bg-[var(--card)] border border-[var(--border)] rounded-2xl p-5">
            <h3 className="font-bold mb-3">Formation</h3>
            <p className="text-sm font-semibold">Télécom SudParis · Institut Polytechnique de Paris</p>
            <p className="text-sm text-[var(--muted)] mt-1">
              <Rich text="Diplôme d'ingénieur · [À PRÉCISER : spécialisation, années]" />
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
