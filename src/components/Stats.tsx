import { Reveal } from "./Reveal";
import { site } from "@/config/site";

const items = [
  { value: site.highlights.type, label: "Estilo de rol" },
  { value: "USD", label: "Economía estable" },
  { value: "24/7", label: "Servidor activo" },
  { value: "Años", label: "Proyecto para durar" },
];

export function Stats() {
  return (
    <section id="servidor" className="relative px-4 py-12">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 lg:grid-cols-4">
            {items.map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center justify-center gap-1 bg-background/80 px-4 py-8 text-center backdrop-blur"
              >
                <span className="brand-gradient text-[clamp(1.5rem,4vw,2.25rem)] font-bold leading-none">
                  {item.value}
                </span>
                <span className="text-xs uppercase tracking-[0.15em] text-muted sm:text-sm">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
