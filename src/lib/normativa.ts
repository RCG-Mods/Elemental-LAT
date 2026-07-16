import fs from "node:fs";
import path from "node:path";
import GithubSlugger from "github-slugger";

/**
 * Parser for the Elemental normative center (src/content/normativa.md).
 *
 * The document is a single large, regularly-structured markdown file:
 *   #    → Book (Libro / Anexo / intro)
 *   ##   → Título / section
 *   ###  → Capítulo / Artículo (some books) / question
 *   #### → Artículo (most books)
 *
 * We build a navigation outline whose anchor ids match exactly the ids that
 * `rehype-slug` assigns while rendering, by running the SAME GithubSlugger over
 * every heading in document order. This keeps the sidebar links in sync with the
 * rendered headings without hard-coding anything.
 */

export type OutlineNode = {
  /** Anchor id — identical to the rendered heading id (rehype-slug). */
  id: string;
  /** Heading depth, 2..4. */
  level: number;
  /** Full heading text. */
  text: string;
  /** Article code when the heading is "Artículo XXX-000", e.g. "CGC-004". */
  code?: string;
  /** Human label without the "Artículo CODE." prefix. */
  label: string;
};

export type BookKind = "intro" | "libro" | "anexo";

export type Book = {
  /** Anchor id of the level-1 heading. */
  id: string;
  /** Level-1 heading text. */
  title: string;
  kind: BookKind;
  /** Short label, e.g. "Libro II" / "Anexo A", when present. */
  ordinal?: string;
  /** Descriptive part after the em dash, e.g. "Código General de Conducta". */
  name: string;
  /** All level 2..4 headings under this book, in order. */
  children: OutlineNode[];
};

export type Normativa = {
  raw: string;
  books: Book[];
  version?: string;
  updated?: string;
};

// "Artículo CGC-004. Powergaming" / "Artículo CON-006-A. Identidad semiseria"
const ARTICLE_RE =
  /^Art[íi]culo\s+([A-ZÁÉÍÓÚ]{2,}-\d+(?:-[A-Z0-9]+)?)\.?\s*(.*)$/;

function classifyBook(text: string): BookKind {
  if (/^Libro\b/i.test(text)) return "libro";
  if (/^Anexo\b/i.test(text)) return "anexo";
  return "intro";
}

/** Split "Libro II — Código General de Conducta" into ordinal + name. */
function splitOrdinal(text: string): { ordinal?: string; name: string } {
  const m = /^((?:Libro|Anexo)\s+[A-ZIVXLCDM]+)\s*[—–-]\s*(.+)$/.exec(text);
  if (m) return { ordinal: m[1].trim(), name: m[2].trim() };
  return { name: text };
}

let cache: Normativa | null = null;

export function getNormativa(): Normativa {
  if (cache) return cache;

  const raw = fs.readFileSync(
    path.join(process.cwd(), "src/content/normativa.md"),
    "utf8",
  );

  const slugger = new GithubSlugger();
  const lines = raw.split(/\r?\n/);
  const books: Book[] = [];
  let current: Book | null = null;
  let inCode = false;

  for (const line of lines) {
    if (/^\s*```/.test(line)) {
      inCode = !inCode;
      continue;
    }
    if (inCode) continue;

    const m = /^(#{1,4})\s+(.+?)\s*#*$/.exec(line);
    if (!m) continue;

    const level = m[1].length;
    const text = m[2].trim();
    // Must slug EVERY heading in order to stay aligned with rehype-slug.
    const id = slugger.slug(text);

    if (level === 1) {
      const { ordinal, name } = splitOrdinal(text);
      current = {
        id,
        title: text,
        kind: classifyBook(text),
        ordinal,
        name,
        children: [],
      };
      books.push(current);
    } else if (current) {
      const am = ARTICLE_RE.exec(text);
      current.children.push({
        id,
        level,
        text,
        code: am?.[1],
        label: am ? am[2] || am[1] : text,
      });
    }
  }

  const version = /\*\*Versión:\*\*\s*([^\n<]+)/.exec(raw)?.[1]?.trim();
  const updated = /\*\*Última revisión:\*\*\s*([^\n<]+)/.exec(raw)?.[1]?.trim();

  cache = { raw, books, version, updated };
  return cache;
}
