import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import {
  CodeIcon,
  GamepadIcon,
  ShieldIcon,
  CoinsIcon,
  SparklesIcon,
  ScaleIcon,
} from "./icons";
import type { ComponentType, SVGProps } from "react";

type Feature = {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  accent: string;
};

const features: Feature[] = [
  {
    icon: CodeIcon,
    title: "Desarrollo profesional",
    description:
      "Equipo de desarrolladores propio. La mayoría de los sistemas son personalizados, no scripts descargados y ensamblados. Bugs y exploits se corrigen sobre nuestro propio código.",
    accent: "text-[#00e5ff]",
  },
  {
    icon: GamepadIcon,
    title: "Rol semi-serio",
    description:
      "Respetamos las bases del roleplay, pero sin perder de vista lo importante: divertirse. Cómodo para veteranos y para quienes juegan FiveM por primera vez.",
    accent: "text-[#ff6ec7]",
  },
  {
    icon: ShieldIcon,
    title: "Anti-antirol desde el código",
    description:
      "Muchos sistemas están diseñados para evitar el antirol desde la programación, no solo con reglas: registros de muertes, rastreo de objetos y más.",
    accent: "text-purple",
  },
  {
    icon: CoinsIcon,
    title: "Economía estable y sana",
    description:
      "Basada en USD para una referencia consistente. Progresa, compra propiedades y crea negocios con dinero IC, sin pasar semanas farmeando.",
    accent: "text-[#ffd23f]",
  },
  {
    icon: SparklesIcon,
    title: "Actividades para todos",
    description:
      "Eventos de terror, juegos cooperativos, actividades civiles, minijuegos y uno de los sistemas de PvP más avanzados del rol latino.",
    accent: "text-teal",
  },
  {
    icon: ScaleIcon,
    title: "Reglas con lógica",
    description:
      "Cada norma tiene una razón de existir. Nada de copiar costumbres de otros servidores: reglas claras y un sistema intuitivo para consultarlas.",
    accent: "text-magenta",
  },
];

export function Features() {
  return (
    <section id="caracteristicas" className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          jp="特徴"
          eyebrow="Por qué Elemental"
          title="Calidad demostrada con hechos"
          description="No llenamos el nombre con etiquetas como “ROL SERIO”. Preferimos demostrarlo: un proyecto estable, con desarrollo activo y sistemas originales pensados para durar."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <Reveal as="article" key={feature.title} delay={i * 80}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur transition-all duration-300 hover:border-white/25 hover:bg-white/[0.06]">
                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-violet/0 blur-2xl transition-all duration-500 group-hover:bg-violet/30" />
                <div
                  className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 ${feature.accent}`}
                >
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-white">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {feature.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
