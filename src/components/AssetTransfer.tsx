import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { site } from "@/config/site";
import { ExchangeIcon, CheckIcon, ArrowRightIcon } from "./icons";

const businesses = [
  "Talleres mecánicos",
  "Restaurantes",
  "Armerías",
  "Empresas de servicio",
  "Negocios esenciales para el rol",
];

export function AssetTransfer() {
  return (
    <section id="transferencia" className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          jp="資産移行"
          eyebrow="Programa de Transferencia de Bienes"
          title="No empiezas completamente desde cero"
          description="¿Invertiste cientos de horas en otra ciudad? Si demuestras que tenías un negocio, patrimonio o una inversión importante, evaluamos tu caso para darte facilidades y reconstruir ese mismo rol en Elemental LAT."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {/* Businesses we boost */}
          <Reveal>
            <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-teal glow-teal">
                <ExchangeIcon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-white">
                Negocios que impulsamos
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Buscamos negocios que beneficien a toda la ciudad. Si traes a tu
                familia, organización o grupo y se mantienen activos, hay
                condiciones preferenciales en elementos estéticos que
                representen el patrimonio de tu antigua ciudad.
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {businesses.map((b) => (
                  <li
                    key={b}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/85"
                  >
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Fair system */}
          <Reveal delay={100}>
            <div className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur">
              <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-violet/20 blur-3xl" />
              <span className="font-jp mb-2 block text-xs tracking-[0.4em] text-[#ff6ec7]/80">
                公正なシステム
              </span>
              <h3 className="text-lg font-bold text-white">Un sistema justo</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Nadie recibe dinero, negocios o propiedades gratis. Todos los
                bienes siguen requiriendo financiamiento con dinero IC. Lo que
                ofrecemos son <span className="text-white">facilidades</span>{" "}
                para reconstruir tu rol, sin ventajas injustas frente a quienes
                empiezan de cero.
              </p>
              <ul className="mt-5 space-y-2.5">
                {[
                  "Se evalúa caso por caso",
                  "Sin ventajas pay-to-win",
                  "La comunidad es primero",
                ].map((point) => (
                  <li
                    key={point}
                    className="flex items-center gap-2.5 text-sm text-white/85"
                  >
                    <CheckIcon className="h-4 w-4 flex-shrink-0 text-teal" />
                    {point}
                  </li>
                ))}
              </ul>
              <a
                href={site.discordUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-grad group mt-7 inline-flex items-center gap-2.5 rounded-xl px-5 py-3 text-sm font-semibold text-white glow-purple cursor-pointer"
              >
                Solicita la evaluación de tu caso
                <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
