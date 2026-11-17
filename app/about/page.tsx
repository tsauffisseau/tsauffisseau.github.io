import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Download } from "lucide-react";
import aboutPhoto from "@/public/assets/photo_aboutmetoo.jpg";
import { PROFILE } from "@/lib/content";
import { Rich, buttonPrimary, textLink } from "@/components/ui";

export const metadata: Metadata = {
  title: "À propos",
  description: "Parcours de Théophile Sauffisseau, ingénieur Télécom SudParis, Consultant Data et Product Data Analyst.",
};

const NOW = [
  "Je cherche un CDI à Paris à partir de janvier 2027.",
  "Je continue de faire évoluer Society (societyapp.fr).",
  "Je construis le pipeline de données BoardGameGeek.",
];

export default function About() {
  return (
    <div className="container mx-auto px-4 sm:px-6 max-w-[980px] py-12 sm:py-16">
      <h1 className="text-4xl sm:text-5xl mb-10">À propos</h1>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-10 lg:gap-16">
        <section className="flex flex-col gap-5 leading-relaxed text-[var(--muted)] order-2 lg:order-1 max-w-[640px]">
          <p className="text-lg text-[var(--foreground)]">
            Je suis Théophile, ingénieur diplômé de Télécom SudParis (Institut Polytechnique de Paris). Je cherche un
            CDI à Paris à partir de janvier 2027, comme Consultant Data (technico-fonctionnel, AMOA Data) ou Product
            Data Analyst.
          </p>

          <h2 className="text-2xl text-[var(--foreground)] mt-4">Ce que je fais</h2>
          <p>
            <Rich text="Pendant mon stage de fin d'études chez Air Liquide Healthcare, j'étais côté décisionnel (OLAP) : cadrage avec le métier, pipeline de données sur AWS, modélisation analytique et dashboards Power BI pour les équipes commerciales. Le détail est dans l'étude de cas [HCP-360°](/projects/hcp-360)." />
          </p>
          <p>
            <Rich text="Avec [Society](/projects/society), j'étais côté transactionnel (OLTP) : j'ai conçu et mis en production une application qui compte plus de 200 utilisateurs, avec son modèle relationnel de 32 tables, son API, son moteur de recommandation et des pipelines de suivi d'usage." />
          </p>
          <p>
            Ce qui m&apos;intéresse, c&apos;est le chemin qui va d&apos;un besoin métier à un modèle de données, puis à
            un outil que les gens utilisent vraiment.
          </p>

          <div className="mt-2">
            <a href={PROFILE.cvPath} download={PROFILE.cvDownloadName} className={buttonPrimary}>
              <Download className="h-4 w-4" aria-hidden="true" /> Télécharger mon CV
            </a>
          </div>

          <h2 className="text-2xl text-[var(--foreground)] mt-8">En dehors de la data</h2>
          <p>
            Je fais du collage numérique, de la création traditionnelle et digitale, et du montage vidéo.{" "}
            <Link href="/about/creations" className={`text-[var(--foreground)] ${textLink}`}>
              Voir mes créations
            </Link>
          </p>
        </section>

        <aside className="flex flex-col gap-8 order-1 lg:order-2">
          <Image
            src={aboutPhoto}
            alt={PROFILE.name}
            placeholder="blur"
            sizes="260px"
            priority
            className="w-full max-w-[260px] rounded-lg object-cover"
          />

          <div className="border-t border-[var(--border)] pt-4">
            <h2 className="text-lg mb-2">En ce moment</h2>
            <ul className="space-y-1.5 text-sm text-[var(--muted)] leading-relaxed">
              {NOW.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="border-t border-[var(--border)] pt-4">
            <h2 className="text-lg mb-2">Formation</h2>
            <p className="text-sm">Télécom SudParis, Institut Polytechnique de Paris</p>
            <p className="text-sm text-[var(--muted)] mt-1">
              <Rich text="Diplôme d'ingénieur, [À PRÉCISER : spécialisation, années]" />
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
