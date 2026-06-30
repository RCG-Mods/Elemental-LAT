"use client";

import { useState } from "react";
import { SectionHeading } from "./SectionHeading";

const faqs = [
  {
    q: "¿Qué necesito para jugar?",
    a: "Necesitas una copia legal de GTA V (PC) y el cliente de FiveM instalado. Después solo te unes a nuestro Discord y te conectas al servidor.",
  },
  {
    q: "¿El servidor tiene whitelist?",
    a: "Sí. Para mantener la calidad del rol, el ingreso pasa por un proceso de whitelist sencillo que se gestiona desde el Discord.",
  },
  {
    q: "¿Es pay-to-win?",
    a: "No. La tienda incluye apoyos cosméticos y de conveniencia, nunca ventajas que rompan el equilibrio del rol o la economía.",
  },
  {
    q: "¿Qué framework usa el servidor?",
    a: "Corremos sobre un framework moderno y optimizado, con scripts personalizados para una experiencia fluida y estable.",
  },
  {
    q: "¿Puedo crear mi propia banda o negocio?",
    a: "Claro. Puedes postular facciones, organizaciones y negocios legales. El staff evalúa cada propuesta para integrarla a la ciudad.",
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
