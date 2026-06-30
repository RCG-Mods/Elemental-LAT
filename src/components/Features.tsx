import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import {
  CoinsIcon,
  BriefcaseIcon,
  ShieldIcon,
  UsersIcon,
  HomeIcon,
  CarIcon,
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
    icon: CoinsIcon,
    title: "Economía viva",
    description:
      "Mercado dinámico, negocios propios, sueldos y precios que responden a la comunidad. Tu esfuerzo se nota.",
    accent: "text-[#ffd23f]",
  },
  {
    icon: BriefcaseIcon,
    title: "Trabajos legales e ilegales",
    description:
      "Desde mecánico, taxista o paramédico hasta los caminos más turbios. Tú eliges tu historia.",
    accent: "text-teal",
  },
  {
    icon: UsersIcon,
    title: "Facciones y bandas",
    description:
      "Organizaciones con territorio, jerarquía y conflictos reales. Alíate o domina las calles.",
    accent: "text-[#ff6ec7]",
  },
  {
    icon: ShieldIcon,
    title: "Policía y EMS activos",
    description:
      "Cuerpos de seguridad y emergencias con protocolos serios que mantienen el rol equilibrado.",
    accent: "text-purple",
  },
  {
    icon: HomeIcon,
    title: "Propiedades y casas",
    description:
      "Compra, decora y administra tu hogar o local. Un lugar que de verdad es tuyo.",
    accent: "text-[#00e5ff]",
  },
  {
    icon: CarIcon,
    title: "Vehículos y tuning",
    description:
      "Garajes, concesionarios y personalización profunda. Arma el auto que define tu personaje.",
    accent: "text-magenta",
  },
];

export function Features() {
  return (
    <section id="caracteristicas" className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          jp="特徴"
          eyebrow="Características"
          title="Todo lo que hace único a Elemental"
          description="Sistemas pensados para un rol serio, inmersivo y con consecuencias reales. Sin pay-to-win, con comunidad."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <Reveal as="article" key={feature.title} delay={i * 80}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur transition-all duration-300 hover:border-white/25 hover:bg-white/[0.06]">
                {/* hover glow */}
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
