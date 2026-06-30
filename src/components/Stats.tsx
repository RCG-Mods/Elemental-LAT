import { Reveal } from "./Reveal";
import { site } from "@/config/site";

const stats = [
  { value: `${site.server.maxPlayers}`, label: "Slots disponibles" },
  { value: "24/7", label: "Servidor activo" },
  { value: site.server.framework, label: "Framework" },
  { value: site.server.region, label: "Comunidad" },
];

export function Stats() {
  return (
    <section id="servidor" className="relative px-4 py-12">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center justify-center gap-1 bg-background/80 px-4 py-8 text-center backdrop-blur"
              >
                <span className="brand-gradient text-[clamp(1.5rem,4vw,2.25rem)] font-bold leading-none">
                  {stat.value}
                </span>
                <span className="text-xs uppercase tracking-[0.15em] text-muted sm:text-sm">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
