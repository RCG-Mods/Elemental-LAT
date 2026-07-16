import type { ComponentPropsWithoutRef, ReactNode } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import { remarkAlert } from "remark-github-blockquote-alert";

/** Flatten React children into plain text (headings here are plain text). */
function textOf(node: ReactNode): string {
  if (node == null || node === false) return "";
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(textOf).join("");
  if (typeof node === "object" && "props" in node) {
    return textOf((node as { props: { children?: ReactNode } }).props.children);
  }
  return "";
}

// "Artículo CGC-004. Powergaming" → { code, label }
const ARTICLE_RE =
  /^Art[íi]culo\s+([A-ZÁÉÍÓÚ]{2,}-\d+(?:-[A-Z0-9]+)?)\.?\s*(.*)$/;

const headingScroll = "scroll-mt-28";

/**
 * Renders the normative markdown with the site's retro/dark styling.
 * Server component — react-markdown runs at build time, nothing ships to the
 * client bundle. Anchor ids come from rehype-slug and match src/lib/normativa.ts.
 */
export function NormativaMarkdown({ children }: { children: string }) {
  return (
    <div className="normativa-prose">
      <Markdown
        remarkPlugins={[remarkGfm, remarkAlert]}
        rehypePlugins={[rehypeSlug]}
        components={{
          h1: ({ children, ...p }: ComponentPropsWithoutRef<"h1">) => (
            <h1
              {...p}
              className={`${headingScroll} mt-20 mb-6 border-t border-white/10 pt-10 text-[clamp(1.6rem,3.5vw,2.4rem)] font-bold text-white first:mt-0 first:border-0 first:pt-0`}
            >
              <span className="brand-gradient">{children}</span>
            </h1>
          ),
          h2: ({ children, ...p }: ComponentPropsWithoutRef<"h2">) => (
            <h2
              {...p}
              className={`${headingScroll} mt-12 mb-4 text-xl font-bold uppercase tracking-[0.12em] text-teal text-glow-teal sm:text-2xl`}
            >
              {children}
            </h2>
          ),
          h3: ({ children, ...p }: ComponentPropsWithoutRef<"h3">) => (
            <h3
              {...p}
              className={`${headingScroll} mt-9 mb-3 text-lg font-bold text-white sm:text-xl`}
            >
              {children}
            </h3>
          ),
          h4: ({ children, ...p }: ComponentPropsWithoutRef<"h4">) => {
            const m = ARTICLE_RE.exec(textOf(children).trim());
            if (m) {
              return (
                <h4
                  {...p}
                  className={`${headingScroll} mt-8 mb-2 flex flex-wrap items-baseline gap-x-2.5 gap-y-1 text-base font-semibold text-white sm:text-lg`}
                >
                  <span className="rounded-md border border-teal/40 bg-teal/10 px-2 py-0.5 font-mono text-xs font-bold tracking-wider text-teal">
                    {m[1]}
                  </span>
                  <span>{m[2]}</span>
                </h4>
              );
            }
            return (
              <h4
                {...p}
                className={`${headingScroll} mt-8 mb-2 text-base font-semibold text-white sm:text-lg`}
              >
                {children}
              </h4>
            );
          },
          p: (p: ComponentPropsWithoutRef<"p">) => (
            <p className="my-4 text-[0.95rem] leading-relaxed text-muted" {...p} />
          ),
          a: ({ href = "", ...p }: ComponentPropsWithoutRef<"a">) => {
            const external = /^https?:\/\//.test(href);
            return (
              <a
                href={href}
                {...(external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="font-medium text-teal underline decoration-teal/40 underline-offset-2 transition-colors hover:text-magenta hover:decoration-magenta/60"
                {...p}
              />
            );
          },
          ul: (p: ComponentPropsWithoutRef<"ul">) => (
            <ul
              className="my-4 flex flex-col gap-2 pl-1 text-[0.95rem] leading-relaxed text-muted [&_ul]:mt-2 [&_ul]:pl-5"
              {...p}
            />
          ),
          ol: (p: ComponentPropsWithoutRef<"ol">) => (
            <ol
              className="my-4 flex list-decimal flex-col gap-2 pl-6 text-[0.95rem] leading-relaxed text-muted marker:text-teal"
              {...p}
            />
          ),
          li: ({ className, ...p }: ComponentPropsWithoutRef<"li">) => {
            const isTask = className?.includes("task-list-item");
            return (
              <li
                className={`${
                  isTask
                    ? "list-none [&>input]:mr-2.5 [&>input]:h-3.5 [&>input]:w-3.5 [&>input]:accent-teal"
                    : "marker:text-teal [&:not(.task-list-item)]:before:mr-2 [&:not(.task-list-item)]:before:text-teal [&:not(.task-list-item)]:before:content-['▸']"
                } ${className ?? ""}`}
                {...p}
              />
            );
          },
          strong: (p: ComponentPropsWithoutRef<"strong">) => (
            <strong className="font-bold text-white" {...p} />
          ),
          code: ({ className, ...p }: ComponentPropsWithoutRef<"code">) => (
            <code
              className={`rounded bg-white/[0.07] px-1.5 py-0.5 font-mono text-[0.85em] text-teal ${className ?? ""}`}
              {...p}
            />
          ),
          pre: (p: ComponentPropsWithoutRef<"pre">) => (
            <pre
              className="my-5 overflow-x-auto rounded-xl border border-white/10 bg-black/40 p-4 text-sm text-muted [&>code]:bg-transparent [&>code]:p-0 [&>code]:text-muted"
              {...p}
            />
          ),
          blockquote: (p: ComponentPropsWithoutRef<"blockquote">) => (
            <blockquote
              className="my-5 rounded-r-xl border-l-2 border-magenta/50 bg-white/[0.02] py-1 pl-5 pr-4 italic text-white/80 [&_p]:text-white/80"
              {...p}
            />
          ),
          hr: () => <hr className="my-12 border-white/10" />,
          table: (p: ComponentPropsWithoutRef<"table">) => (
            <div className="my-6 overflow-x-auto rounded-xl border border-white/10">
              <table className="w-full border-collapse text-left text-sm" {...p} />
            </div>
          ),
          thead: (p: ComponentPropsWithoutRef<"thead">) => (
            <thead className="bg-white/[0.04]" {...p} />
          ),
          th: (p: ComponentPropsWithoutRef<"th">) => (
            <th
              className="border-b border-white/10 px-4 py-2.5 font-semibold text-white"
              {...p}
            />
          ),
          td: (p: ComponentPropsWithoutRef<"td">) => (
            <td
              className="border-b border-white/5 px-4 py-2.5 align-top text-muted"
              {...p}
            />
          ),
        }}
      >
        {children}
      </Markdown>
    </div>
  );
}
