import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { GithubIcon, PdfIcon } from "./icons";
import type { ProjectLink } from "@/lib/content";

/** Lien texte : souligné discret qui se dessine à l'apparition et passe au rose au survol (voir .u-line). */
export const textLink = "u-line";

/** Titre de projet : les mots composés (« HCP-360° ») ne sont jamais coupés en fin de ligne. */
export function Title({ text }: { text: string }) {
  return (
    <>
      {text.split(/(\S+-\S+)/).map((part, i) =>
        i % 2 ? (
          <span key={i} className="whitespace-nowrap">
            {part}
          </span>
        ) : (
          part
        ),
      )}
    </>
  );
}

const buttonBase =
  "inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors";
export const buttonPrimary = `${buttonBase} bg-[var(--yellow)] text-[#151413] font-semibold hover:bg-[var(--pink)]`;
export const buttonSecondary = `${buttonBase} border border-[var(--border)] hover:bg-[var(--card)]`;

/** Marqueurs de contenu à compléter : [À CHIFFRER ...] / [À PRÉCISER ...] */
const PLACEHOLDER = /^\[À (?:CHIFFRER|PRÉCISER)/;
const LINK = /^\[([^\]]+)\]\(([^)]+)\)$/;
const TOKENS = /(\*\*[^*]+\*\*|==[^=]+==|\[[^\]]+\]\([^)]+\)|\[À (?:CHIFFRER|PRÉCISER)[^\]]*\])/g;

export function isPlaceholder(text: string) {
  return PLACEHOLDER.test(text);
}

export function Placeholder({ children }: { children: React.ReactNode }) {
  return (
    <mark className="rounded px-1 py-0.5 font-mono text-[0.85em] bg-amber-100 text-amber-800 border border-dashed border-amber-400 dark:bg-amber-500/15 dark:text-amber-300 dark:border-amber-500/50">
      {children}
    </mark>
  );
}

/** Affiche un texte du fichier de contenu : gras, liens et marqueurs à compléter. */
export function Rich({ text }: { text: string }) {
  return (
    <>
      {text.split(TOKENS).map((part, i) => {
        if (!part) return null;
        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <strong key={i} className="font-semibold text-[var(--foreground)]">
              {part.slice(2, -2)}
            </strong>
          );
        }
        if (part.startsWith("==") && part.endsWith("==")) {
          return (
            <mark key={i} className="marker">
              {part.slice(2, -2)}
            </mark>
          );
        }
        if (isPlaceholder(part)) return <Placeholder key={i}>{part}</Placeholder>;
        const link = part.match(LINK);
        if (link) {
          return (
            <Link key={i} href={link[2]} className={`text-[var(--foreground)] whitespace-nowrap ${textLink}`}>
              {link[1]}
            </Link>
          );
        }
        return <span key={i}>{part}</span>;
      })}
    </>
  );
}

export function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-md border border-[var(--border)] px-2 py-0.5 text-xs text-[var(--muted)] whitespace-nowrap">
      {children}
    </span>
  );
}

/** Chiffres clés : une rangée de valeurs séparées par de fines lignes, sans cadre. */
export function KeyFigures({ items }: { items: { value: string; label: string }[] }) {
  return (
    <dl className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-6">
      {items.map((k) => {
        const todo = isPlaceholder(k.value);
        return (
          <div key={k.label} className="flex flex-col-reverse justify-end border-t border-[var(--border)] pt-3">
            <dt className="mt-1 text-sm text-[var(--muted)] leading-snug">{k.label}</dt>
            <dd
              className={
                todo
                  ? "font-mono text-sm text-amber-700 dark:text-amber-300"
                  : "font-display text-2xl sm:text-3xl leading-tight"
              }
            >
              {todo ? "À chiffrer" : <span className="marker">{k.value}</span>}
            </dd>
          </div>
        );
      })}
    </dl>
  );
}

export function SectionHeading({ title, intro }: { title: string; intro?: string }) {
  return (
    <div className="mb-6">
      <h2 className="text-2xl sm:text-3xl">{title}</h2>
      {intro && (
        <p className="text-[var(--muted)] mt-2 leading-relaxed max-w-2xl">
          <Rich text={intro} />
        </p>
      )}
    </div>
  );
}

export function ProjectLinkButton({ link }: { link: ProjectLink }) {
  return (
    <a href={link.href} target="_blank" rel="noopener noreferrer" className={buttonSecondary}>
      {link.kind === "github" && <GithubIcon />}
      {link.kind === "pdf" && <PdfIcon />}
      {link.kind === "site" && <ExternalLink className="h-4 w-4" aria-hidden="true" />}
      {link.label}
    </a>
  );
}
