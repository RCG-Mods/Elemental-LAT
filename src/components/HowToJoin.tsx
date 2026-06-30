import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { site } from "@/config/site";
import { DiscordIcon, PlayIcon, CheckIcon, ArrowRightIcon } from "./icons";
import type { ComponentType, SVGProps } from "react";

type Step = {
  n: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
};

const steps: Step[] = [
  {
    n: "01",
    icon: DiscordIcon,
    title: "Únete al Discord",
    description:
      "Entra a nuestra comunidad, lee las reglas y preséntate. Aquí empieza todo.",
  },
  {
    n: "02",
    icon: CheckIcon,
    title: "Crea tu personaje",
    description:
      "Completa el whitelist, diseña tu historia y prepara tu primer día en la ciudad.",
  },
  {
    n: "03",
    icon: PlayIcon,
    title: "Conéctate y juega",
    description:
      "Abre FiveM, conéctate al servidor y vive tu rol. La ciudad te está esperando.",
  },
];

export function HowToJoin() {
  return (
    <section id="unirte" className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          jp="参加方法"
          eyebrow="Cómo unirte"
          title="Empieza a jugar en 3 pasos"
          description="Sin complicaciones. En pocos minutos puedes estar dentro de la ciudad."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {steps.map((step, i) => (
            <Reveal key={step.n} delay={i * 100}>
              <div className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur">
                <span className="brand-gradient absolute right-5 top-3 text-5xl font-bold opacity-30">
                  {step.n}
                </span>
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-teal glow-teal">
                  <step.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 flex justify-center">
          <a
            href={site.discordUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-grad group flex items-center gap-2.5 rounded-2xl px-7 py-3.5 text-base font-semibold text-white glow-purple cursor-pointer"
          >
            Empezar ahora
            <ArrowRightIcon className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
