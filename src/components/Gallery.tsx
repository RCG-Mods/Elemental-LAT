import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { asset } from "@/config/site";

// Placeholder tiles — replace `src` with real in-game screenshots later.
const shots: { label: string; span: string; hue: string; src?: string }[] = [
  { label: "Vida nocturna", span: "sm:col-span-2 sm:row-span-2", hue: "from-[#ff2d95]/30 to-[#5e00da]/30", src: "/gallery/vida-nocturna.png" },
  { label: "Persecución policial", span: "", hue: "from-[#00e5ff]/30 to-[#a200ff]/30" },
  { label: "Negocios", span: "", hue: "from-[#ffd23f]/25 to-[#ff6ec7]/30" },
  { label: "Eventos", span: "", hue: "from-[#009488]/30 to-[#5e00da]/30" },
  { label: "Tuning & garaje", span: "", hue: "from-[#a200ff]/30 to-[#ff2d95]/30" },
];

export function Gallery() {
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
                className={`group relative flex h-full w-full items-end overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${shot.hue} p-4 backdrop-blur transition-all duration-300 hover:border-white/30`}
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
    </section>
  );
}
