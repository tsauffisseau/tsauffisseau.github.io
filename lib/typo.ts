const NBSP = " ";

/**
 * Typographie française : remplace certaines espaces par des espaces insécables,
 * pour qu'un retour à la ligne ne sépare jamais :
 *   - « : », « ; », « ! », « ? » et « » » du mot qui précède ;
 *   - « « » du mot qui suit ;
 *   - un nombre de ce qui le suit (« 20 000 », « 1 s », « 364 sujets »).
 */
export function fr(text: string): string {
  return text
    .replace(/ ([:;!?»])/g, `${NBSP}$1`)
    .replace(/« /g, `«${NBSP}`)
    .replace(/(\d) (?=\S)/g, `$1${NBSP}`);
}

/** Applique `fr` à toutes les chaînes d'une structure de contenu (hors liens et identifiants). */
const SKIPPED_KEYS = new Set(["href", "src", "slug", "logo", "watermark", "kind", "blurDataURL", "email", "linkedin", "github", "cvPath", "siteUrl"]);

export function typeset<T>(value: T): T {
  if (typeof value === "string") return fr(value) as T;
  if (Array.isArray(value)) return value.map(typeset) as T;
  if (value && typeof value === "object" && Object.getPrototypeOf(value) === Object.prototype) {
    return Object.fromEntries(
      Object.entries(value).map(([key, v]) => [key, SKIPPED_KEYS.has(key) ? v : typeset(v)]),
    ) as T;
  }
  return value;
}
