import Link from "next/link";
import { SKILLS, getProject } from "@/lib/content";

/** Compétences regroupées par domaine, chacune reliée aux projets qui la prouvent. */
export function SkillsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {SKILLS.map((group) => (
        <div key={group.domain} className="flex flex-col rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5">
          <h3 className="font-bold mb-3">{group.domain}</h3>
          <ul className="space-y-2 text-sm text-[var(--muted)] mb-4">
            {group.items.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-2 h-1 w-1 rounded-full bg-[var(--primary)] shrink-0" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-auto pt-3 border-t border-[var(--border)] text-xs text-[var(--muted)]">
            Mis en œuvre dans :{" "}
            {group.provenIn.map((slug, i) => {
              const p = getProject(slug);
              if (!p) return null;
              return (
                <span key={slug}>
                  {i > 0 && ", "}
                  <Link href={`/projects/${slug}`} className="font-semibold text-[var(--foreground)] hover:text-[var(--primary)]">
                    {p.shortTitle}
                  </Link>
                </span>
              );
            })}
          </p>
        </div>
      ))}
    </div>
  );
}
