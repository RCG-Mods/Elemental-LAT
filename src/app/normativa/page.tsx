import type { Metadata } from "next";
import { getNormativa } from "@/lib/normativa";
import { NormativaShell } from "@/components/normativa/NormativaShell";
import { NormativaMarkdown } from "@/components/normativa/NormativaMarkdown";
import { NormativaHeader } from "@/components/normativa/NormativaHeader";
import { NormativaBackground } from "@/components/normativa/NormativaBackground";
import { Footer } from "@/components/Footer";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: "Normativa",
  description: `Centro normativo de ${site.name}: constitución, código de conducta, código penal IC, manuales, monetización, privacidad y apelaciones.`,
};

export default function NormativaPage() {
  const { raw, books, version, updated } = getNormativa();
  // The document's own top-level "# Centro Normativo…" title is surfaced by the
  // hero below, so drop that first heading line to avoid a duplicate title.
  const body = raw.replace(/^#\s+.*(\r?\n)/, "");
  const introId = books[0]?.id;

  return (
    <>
      <NormativaBackground />
      <NormativaHeader version={version} />
      <main className="flex-1 pt-24 sm:pt-28">
        <div
          id={introId}
          className="mx-auto mb-10 w-full max-w-7xl scroll-mt-24 px-4"
        >
          <span className="font-jp mb-2 block text-xs tracking-[0.45em] text-[#ff6ec7]/80">
            規範センター
          </span>
          <h1 className="text-[clamp(1.9rem,4.5vw,3rem)] font-bold leading-tight text-white">
            Centro <span className="brand-gradient">Normativo</span>
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
            Constitución, códigos, manuales y políticas de {site.name}. Combina
            reglas de comunidad{" "}
            <span className="font-semibold text-white">(OOC)</span> y normas
            ficticias dentro de personaje{" "}
            <span className="font-semibold text-white">(IC)</span>.
          </p>
          {(version || updated) && (
            <div className="mt-4 flex flex-wrap gap-2 text-xs">
              {version && (
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-white/70">
                  Versión {version}
                </span>
              )}
              {updated && (
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-white/70">
                  Última revisión: {updated}
                </span>
              )}
            </div>
          )}
        </div>

        <NormativaShell books={books}>
          <NormativaMarkdown>{body}</NormativaMarkdown>
        </NormativaShell>
      </main>
      <Footer />
    </>
  );
}
