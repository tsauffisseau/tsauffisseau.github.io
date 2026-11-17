import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { GithubIcon, PdfIcon } from "./icons";
import type { ProjectLink, Tone } from "@/lib/content";

/** Marqueurs de contenu à compléter : [À CHIFFRER ...] / [À PRÉCISER ...] */
const PLACEHOLDER = /^\[À (?:CHIFFRER|PRÉCISER)/;
const TOKENS = /(\*\*[^*]+\*\*|\[À (?:CHIFFRER|PRÉCISER)[^\]]*\])/g;

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

/** Affiche un texte du fichier de contenu : gère **gras** et les marqueurs à compléter. */
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
        if (isPlaceholder(part)) return <Placeholder key={i}>{part}</Placeholder>;
        return <span key={i}>{part}</span>;
      })}
    </>
  );
}

export function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="px-2.5 py-1 text-xs text-[var(--muted)] border border-[var(--border)] rounded-full bg-[var(--background)] whitespace-nowrap">
      {children}
    </span>
  );
}

const TONES: Record<Tone, { pill: string; dot: string }> = {
  live: {
    pill: "text-emerald-700 border-emerald-600/30 bg-emerald-50 dark:text-emerald-400 dark:border-emerald-400/30 dark:bg-emerald-400/10",
    dot: "bg-emerald-500",
  },
  wip: {
    pill: "text-amber-700 border-amber-600/30 bg-amber-50 dark:text-amber-300 dark:border-amber-400/30 dark:bg-amber-400/10",
    dot: "bg-amber-500",
  },
  award: {
    pill: "text-yellow-700 border-yellow-600/30 bg-yellow-50 dark:text-yellow-400 dark:border-yellow-400/30 dark:bg-yellow-400/10",
    dot: "bg-yellow-500",
  },
  neutral: {
    pill: "text-[var(--muted)] border-[var(--border)] bg-[var(--background)]",
    dot: "bg-[var(--muted)]",
  },
};

export function StatusPill({ label, tone }: { label: string; tone: Tone }) {
  const t = TONES[tone];
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold border rounded-full whitespace-nowrap ${t.pill}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${t.dot}`} aria-hidden="true" />
      {label}
    </span>
  );
}

export function KpiTile({ value, label, href }: { value: string; label: string; href?: string }) {
  const todo = isPlaceholder(value);
  const className = `relative block rounded-xl px-4 py-3.5 border ${
    todo
      ? "border-dashed border-amber-500/50 bg-amber-50/60 dark:bg-amber-500/5"
      : "border-[var(--border)] bg-[var(--card)]"
  } ${href ? "group transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-[var(--muted)]/40" : ""}`;
  const body = (
    <>
      {href && (
        <ArrowUpRight
          className="absolute top-3 right-3 h-4 w-4 text-[var(--muted)] group-hover:text-[var(--primary)] transition-colors"
          aria-hidden="true"
        />
      )}
      <p
        className={`text-xl sm:text-2xl font-bold tracking-tight leading-tight ${
          todo ? "text-amber-700 dark:text-amber-300 font-mono text-base sm:text-lg" : ""
        }`}
      >
        {todo ? "À chiffrer" : value}
      </p>
      <p className="text-xs sm:text-sm text-[var(--muted)] mt-1 leading-snug">{label}</p>
    </>
  );
  return href ? (
    <Link href={href} className={className}>
      {body}
    </Link>
  ) : (
    <div className={className}>{body}</div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <div className="mb-6">
      <p className="text-xs font-bold uppercase tracking-widest text-[var(--primary)] mb-2">{eyebrow}</p>
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">{title}</h2>
      {intro && <p className="text-[var(--muted)] mt-2 leading-relaxed max-w-2xl">{intro}</p>}
    </div>
  );
}

const buttonBase =
  "inline-flex items-center gap-2 px-4 py-2 rounded-xl border font-semibold text-sm transition-all hover:-translate-y-0.5 hover:shadow-md";
export const buttonPrimary = `${buttonBase} border-transparent bg-[var(--primary)] text-white hover:brightness-110`;
export const buttonSecondary = `${buttonBase} border-[var(--border)] bg-[var(--card)] hover:border-[var(--muted)]/40`;

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
