"use client";

import { useEffect, useMemo, useState, type ReactNode } from "react";
import type { Book } from "@/lib/normativa";

const norm = (s: string) =>
  s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "");

type Props = {
  books: Book[];
  children: ReactNode;
};

export function NormativaShell({ books, children }: Props) {
  const [query, setQuery] = useState("");
  const [openIds, setOpenIds] = useState<Set<string>>(new Set());
  const [activeId, setActiveId] = useState<string>("");
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Filter the outline by the search query (accent-insensitive, text + code).
  const filtered = useMemo(() => {
    const q = norm(query.trim());
    if (!q) return books.map((b) => ({ book: b, children: b.children }));
    return books
      .map((b) => {
        const bookMatch = norm(`${b.title}`).includes(q);
        const kids = b.children.filter(
          (c) => norm(c.text).includes(q) || (c.code && norm(c.code).includes(q)),
        );
        if (bookMatch || kids.length)
          return { book: b, children: bookMatch ? b.children : kids };
        return null;
      })
      .filter((x): x is { book: Book; children: Book["children"] } => x !== null);
  }, [books, query]);

  const searching = query.trim().length > 0;

  // Scrollspy: highlight the heading currently at the top of the viewport.
  useEffect(() => {
    const headings = Array.from(
      document.querySelectorAll<HTMLElement>(
        ".normativa-prose :is(h1,h2,h3,h4)[id]",
      ),
    );
    if (!headings.length) return;

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const offset = 140;
        let current = headings[0].id;
        for (const h of headings) {
          if (h.getBoundingClientRect().top - offset <= 0) current = h.id;
          else break;
        }
        setActiveId(current);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  // Which book contains the active heading — keep it expanded.
  const activeBookId = useMemo(() => {
    for (const b of books) {
      if (b.id === activeId) return b.id;
      if (b.children.some((c) => c.id === activeId)) return b.id;
    }
    return "";
  }, [books, activeId]);

  const isOpen = (id: string) =>
    searching || openIds.has(id) || id === activeBookId;

  const toggle = (id: string) =>
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  const nav = (
    <nav className="flex flex-col gap-1">
      <div className="relative mb-3">
        <SearchIcon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar artículo o código…"
          className="w-full rounded-xl border border-white/10 bg-white/[0.03] py-2.5 pl-9 pr-3 text-sm text-white placeholder:text-white/35 outline-none transition-colors focus:border-teal/50"
        />
      </div>

      {filtered.length === 0 && (
        <p className="px-2 py-4 text-sm text-white/40">Sin resultados.</p>
      )}

      {filtered.map(({ book, children: kids }) => {
        const open = isOpen(book.id);
        return (
          <div key={book.id} className="mb-0.5">
            <div className="flex items-stretch">
              <a
                href={`#${book.id}`}
                onClick={() => setDrawerOpen(false)}
                className={`flex-1 rounded-lg px-2.5 py-2 text-left text-[0.82rem] font-semibold transition-colors ${
                  activeBookId === book.id
                    ? "bg-teal/10 text-teal"
                    : "text-white/85 hover:bg-white/5 hover:text-white"
                }`}
              >
                {book.ordinal && (
                  <span className="mr-1.5 font-mono text-[0.7rem] text-white/40">
                    {book.ordinal.replace(/^(Libro|Anexo)\s+/, "")}
                  </span>
                )}
                {book.name}
              </a>
              {kids.length > 0 && (
                <button
                  type="button"
                  aria-label={open ? "Colapsar" : "Expandir"}
                  aria-expanded={open}
                  onClick={() => toggle(book.id)}
                  className="ml-1 flex w-7 items-center justify-center rounded-lg text-white/40 transition-colors hover:bg-white/5 hover:text-white"
                >
                  <ChevronIcon
                    className={`h-3.5 w-3.5 transition-transform duration-200 ${
                      open ? "rotate-90" : ""
                    }`}
                  />
                </button>
              )}
            </div>

            {open && kids.length > 0 && (
              <ul className="mb-1 ml-2 border-l border-white/10 pl-2">
                {kids.map((c) => (
                  <li key={c.id}>
                    <a
                      href={`#${c.id}`}
                      onClick={() => setDrawerOpen(false)}
                      style={{ paddingLeft: `${(c.level - 2) * 12 + 8}px` }}
                      className={`flex items-baseline gap-2 rounded-md py-1.5 pr-2 text-[0.8rem] leading-snug transition-colors ${
                        activeId === c.id
                          ? "text-teal"
                          : "text-muted hover:text-white"
                      }`}
                    >
                      {c.code && (
                        <span className="font-mono text-[0.68rem] text-white/40">
                          {c.code}
                        </span>
                      )}
                      <span className="line-clamp-2">{c.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        );
      })}
    </nav>
  );

  return (
    <div className="mx-auto w-full max-w-7xl px-4 lg:grid lg:grid-cols-[290px_minmax(0,1fr)] lg:gap-10">
      {/* Desktop sidebar */}
      <aside className="hidden lg:block">
        <div className="sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto pb-10 pr-2 [scrollbar-width:thin]">
          {nav}
        </div>
      </aside>

      {/* Mobile: sticky "open index" bar */}
      <div className="sticky top-[4.75rem] z-30 -mx-4 mb-6 border-y border-white/10 bg-background/85 px-4 py-2.5 backdrop-blur lg:hidden">
        <button
          type="button"
          onClick={() => setDrawerOpen(true)}
          className="flex items-center gap-2 text-sm font-semibold text-white"
        >
          <MenuIcon className="h-4 w-4 text-teal" />
          Índice de la normativa
        </button>
      </div>

      {/* Mobile drawer */}
      {drawerOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setDrawerOpen(false)}
          />
          <div className="absolute inset-y-0 left-0 w-[85%] max-w-sm overflow-y-auto border-r border-white/10 bg-background p-4">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-sm font-semibold uppercase tracking-widest text-teal">
                Índice
              </span>
              <button
                type="button"
                aria-label="Cerrar"
                onClick={() => setDrawerOpen(false)}
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/15 text-white"
              >
                ✕
              </button>
            </div>
            {nav}
          </div>
        </div>
      )}

      <div className="min-w-0">{children}</div>
    </div>
  );
}

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className={className} aria-hidden="true">
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" strokeLinecap="round" />
    </svg>
  );
}

function ChevronIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className={className} aria-hidden="true">
      <path d="m9 6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MenuIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className={className} aria-hidden="true">
      <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
    </svg>
  );
}
