import { SKILLS } from "@/lib/content";

/** Compétences par domaine, présentées comme dans un CV. */
export function SkillsGrid() {
  return (
    <dl>
      {SKILLS.map((group) => (
        <div
          key={group.domain}
          className="grid grid-cols-1 sm:grid-cols-[240px_1fr] gap-x-6 gap-y-1 border-t border-[var(--border)] last:border-b py-4"
        >
          <dt className="font-medium">{group.domain}</dt>
          <dd className="text-[var(--muted)] leading-relaxed">{group.items.join(", ")}</dd>
        </div>
      ))}
    </dl>
  );
}
