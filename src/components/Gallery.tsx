"use client";

import { useEffect, useState } from "react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { asset } from "@/config/site";

// Placeholder tiles — replace `src` with real in-game screenshots later.
const shots: { label: string; span: string; hue: string; src?: string }[] = [
  { label: "Vida nocturna", span: "sm:col-span-2 sm:row-span-2", hue: "from-[#ff2d95]/30 to-[#5e00da]/30", src: "/gallery/vida-nocturna.png" },
  { label: "Persecución policial", span: "", hue: "from-[#00e5ff]/30 to-[#a200ff]/30", src: "/gallery/persecucion.png" },
  { label: "Negocios", span: "", hue: "from-[#ffd23f]/25 to-[#ff6ec7]/30", src: "/gallery/negocios.png" },
  { label: "Eventos", span: "", hue: "from-[#009488]/30 to-[#5e00da]/30", src: "/gallery/eventos.png" },
  { label: "Tuning & garaje", span: "", hue: "from-[#a200ff]/30 to-[#ff2d95]/30", src: "/gallery/tuning.png" },
];

export function Gallery() {
  const [active, setActive] = useState<{ src: string; label: string } | null>(null);

  useEffect(() => {
    if (!active) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    document.addEventListener("keydown", onKey);

    // Lock background scroll while the lightbox is open.
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [active]);

  return (
    <section id="galeria" className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          jp="ギャラリー"
          eyebrow="Galería"
          title="La ciudad en imágenes"
          description="Un vistazo a la atmósfera de Elemental LAT. Pronto, capturas reales de la comunidad."
        />

        <div className="mt-14 grid auto-rows-[150px] grid-cols-2 gap-4 sm:auto-rows-[180px] sm:grid-cols-4">
          {shots.map((shot, i) => (
            <Reveal
              key={shot.label}
              delay={i * 70}
              className={`${shot.span}`}
            >
              <div
                role={shot.src ? "button" : undefined}
                tabIndex={shot.src ? 0 : undefined}
                aria-label={shot.src ? `Ampliar imagen: ${shot.label}` : undefined}
                onClick={shot.src ? () => setActive({ src: shot.src!, label: shot.label }) : undefined}
                onKeyDown={
                  shot.src
                    ? (e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          setActive({ src: shot.src!, label: shot.label });
                        }
                      }
                    : undefined
                }
                className={`group relative flex h-full w-full items-end overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${shot.hue} p-4 backdrop-blur transition-all duration-300 hover:border-white/30 ${shot.src ? "cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60" : ""}`}
              >
                {shot.src && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={asset(shot.src)}
                    alt={shot.label}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}
                <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_50%_120%,transparent_40%,#08010f_100%)]" />
                <span className="font-jp absolute right-3 top-3 text-xs tracking-widest text-white/30">
                  画像
                </span>
                <span className="relative text-sm font-semibold text-white drop-shadow">
                  {shot.label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.label}
          onClick={() => setActive(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#08010f]/90 p-4 backdrop-blur-sm sm:p-8"
        >
          <button
            type="button"
            aria-label="Cerrar"
            onClick={() => setActive(null)}
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-xl text-white/80 transition hover:border-white/40 hover:text-white"
          >
            ×
          </button>
          <figure
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-full max-w-5xl overflow-hidden rounded-2xl border border-white/15 shadow-2xl"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={asset(active.src)}
              alt={active.label}
              className="max-h-[85vh] w-auto object-contain"
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#08010f] to-transparent p-4 text-sm font-semibold text-white">
              {active.label}
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}
