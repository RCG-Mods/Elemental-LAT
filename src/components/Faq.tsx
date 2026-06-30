"use client";

import { useState } from "react";
import { SectionHeading } from "./SectionHeading";

const faqs = [
  {
    q: "¿Qué significa que sea “semi-serio”?",
    a: "Respetamos las bases del roleplay —valor por la vida, no metagaming, no powergaming, interpretación coherente y respeto entre jugadores—, pero el objetivo principal sigue siendo divertirse. No castigamos situaciones que no afecten a otros jugadores solo porque “así se hace en otros servidores”.",
  },
  {
    q: "¿Es pay-to-win?",
    a: "No. Todo el contenido importante, incluidas las propiedades, se consigue con dinero IC. Las contribuciones económicas se limitan a elementos estéticos que no otorgan ventajas injustas, siempre respetando los lineamientos de Rockstar y Cfx.re.",
  },
  {
    q: "¿Cómo funciona la economía?",
    a: "Está basada en USD para mantener una referencia consistente, pero eso no significa que todo sea carísimo. Puedes comprar vehículos, tener una propiedad y crear negocios sin pasar semanas farmeando: el tiempo es para el rol y para divertirse.",
  },
  {
    q: "Vengo de otra ciudad, ¿empiezo de cero?",
    a: "No necesariamente. Con nuestro Programa de Transferencia de Bienes, si demuestras patrimonio o inversión importante en otra ciudad, evaluamos tu caso para darte facilidades (nunca regalos) y reconstruir tu rol aquí.",
  },
  {
    q: "¿Qué hay además del rol tradicional?",
    a: "Eventos de terror, juegos cooperativos, actividades civiles, minijuegos, eventos especiales y uno de los sistemas de PvP más avanzados creados para un servidor latino, totalmente integrado con el resto del servidor.",
  },
  {
    q: "¿La administración participa en el rol?",
    a: "No. La administración no participa directamente dentro del rol para evitar conflictos de interés, y muchos procesos están automatizados para reducir la intervención administrativa.",
  },
  {
    q: "¿El servidor va a mantenerse en el tiempo?",
    a: "Esa es la idea. Elemental LAT está diseñado para durar años: respeta al 100% los Términos de Servicio de Cfx.re y Rockstar, tiene desarrollo activo sobre código propio y una economía pensada para ser sostenible.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          jp="よくある質問"
          eyebrow="FAQ"
          title="Preguntas frecuentes"
        />

        <div className="mt-12 flex flex-col gap-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div
                key={faq.q}
                className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur transition-colors duration-200 hover:border-white/20"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left cursor-pointer"
                >
                  <span className="text-base font-semibold text-white">
                    {faq.q}
                  </span>
                  <span
                    className={`flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-white/15 text-teal transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                    aria-hidden="true"
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-relaxed text-muted">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
