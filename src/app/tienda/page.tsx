import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { StoreBackground } from "@/components/store/StoreBackground";
import { StoreHeader } from "@/components/store/StoreHeader";
import { StoreCatalog } from "@/components/store/StoreCatalog";
import { DocumentIcon } from "@/components/icons";
import { site } from "@/config/site";
import { storeCategories, storeMeta, storeTerms } from "@/config/store";

export const metadata: Metadata = {
  title: "Tienda",
  description: `Catálogo de la tienda de ${site.name}: vehículos, propiedades, negocios, prendas, armas e ítems con sus precios y condiciones de compra.`,
};

export default function TiendaPage() {
  return (
    <>
      <StoreBackground />
      <StoreHeader version={storeMeta.version} />
      <main className="flex-1 pt-24 sm:pt-28">
        {/* Hero */}
        <div className="mx-auto mb-12 w-full max-w-7xl px-4">
          <span className="font-jp mb-2 block text-xs tracking-[0.45em] text-[#ff6ec7]/80">
            ショップ
          </span>
          <h1 className="text-[clamp(1.9rem,4.5vw,3rem)] font-bold leading-tight text-white">
            <span className="brand-gradient">Tienda</span> de Elemental
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
            Catálogo de vehículos, propiedades, negocios, prendas, armas e ítems
            disponibles para tu personaje. Cada categoría muestra sus precios y
            estipulaciones.
          </p>
          <div className="mt-4 flex flex-wrap gap-2 text-xs">
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-white/70">
              Versión {storeMeta.version}
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-white/70">
              {storeMeta.updated}
            </span>
          </div>
        </div>

        {/* Global Terms & Conditions */}
        <div className="mx-auto mb-14 w-full max-w-7xl px-4">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
            <div className="mb-4 flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-teal">
                <DocumentIcon className="h-5 w-5" />
              </span>
              <div>
                <h2 className="text-lg font-bold text-white">
                  Términos y condiciones de compra
                </h2>
                <p className="text-xs text-muted">
                  Aplican a todos los ítems del catálogo.
                </p>
              </div>
            </div>
            <ol className="space-y-2.5 text-sm leading-relaxed text-muted">
              {storeTerms.map((term, i) => (
                <li key={i} className="flex gap-3">
                  <span className="font-mono text-xs font-semibold text-purple">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{term}</span>
                </li>
              ))}
            </ol>
            <p className="mt-5 rounded-xl border border-teal/20 bg-teal/5 px-4 py-3 text-xs text-white/70">
              {storeMeta.buyNote}
            </p>
          </div>
        </div>

        <StoreCatalog categories={storeCategories} />
      </main>
      <Footer />
    </>
  );
}
