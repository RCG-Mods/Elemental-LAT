"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { ComponentType, SVGProps } from "react";
import { asset } from "@/config/site";
import type { StoreCategory, StoreIconKey } from "@/config/store";
import {
  CarIcon,
  HomeIcon,
  BriefcaseIcon,
  GemIcon,
  TargetIcon,
  PackageIcon,
} from "@/components/icons";

const ICONS: Record<StoreIconKey, ComponentType<SVGProps<SVGSVGElement>>> = {
  vehiculos: CarIcon,
  propiedades: HomeIcon,
  negocios: BriefcaseIcon,
  prendas: GemIcon,
  armas: TargetIcon,
  items: PackageIcon,
};

const alignClass = (align?: "left" | "right" | "center") =>
  align === "right"
    ? "text-right"
    : align === "center"
      ? "text-center"
      : "text-left";

export function StoreCatalog({ categories }: { categories: StoreCategory[] }) {
  const [active, setActive] = useState(categories[0]?.id ?? "");
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  // Scrollspy: highlight the tab of the section currently in view.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 },
    );
    Object.values(sectionRefs.current).forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="mx-auto w-full max-w-7xl px-4">
      {/* Sticky category tabs */}
      <nav className="sticky top-16 z-30 -mx-4 mb-10 border-b border-white/5 bg-background/80 px-4 py-3 backdrop-blur-xl">
        <ul className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {categories.map((cat) => {
            const Icon = ICONS[cat.icon];
            const isActive = active === cat.id;
            return (
              <li key={cat.id} className="shrink-0">
                <a
                  href={`#${cat.id}`}
                  className={`flex items-center gap-2 rounded-xl border px-3.5 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "border-white/25 bg-white/10 text-white"
                      : "border-white/10 bg-white/[0.02] text-muted hover:border-white/20 hover:text-white"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {cat.name}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Category sections */}
      <div className="flex flex-col gap-16">
        {categories.map((cat) => {
          const Icon = ICONS[cat.icon];
          return (
            <section
              key={cat.id}
              id={cat.id}
              ref={(el) => {
                sectionRefs.current[cat.id] = el;
              }}
              className="scroll-mt-32"
            >
              <div className="mb-6 flex items-start gap-4">
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-purple">
                  <Icon className="h-6 w-6" />
                </span>
                <div>
                  <span className="font-jp block text-[0.7rem] tracking-[0.4em] text-[#ff6ec7]/70">
                    {cat.jp}
                  </span>
                  <h2 className="text-2xl font-bold text-white">{cat.name}</h2>
                  <p className="mt-1 max-w-2xl text-sm text-muted">{cat.tagline}</p>
                </div>
              </div>

              {/* Optional showcase image */}
              {cat.image && (
                <div className="mb-6 overflow-hidden rounded-2xl border border-white/10">
                  <Image
                    src={asset(cat.image)}
                    alt={cat.imageAlt ?? cat.name}
                    width={1280}
                    height={720}
                    className="h-auto w-full object-cover"
                  />
                </div>
              )}

              {/* Price table */}
              <div className="overflow-x-auto rounded-2xl border border-white/10 bg-white/[0.02]">
                <table className="w-full min-w-[640px] border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-white/10 text-left text-xs uppercase tracking-wider text-white/50">
                      <th className="px-4 py-3 font-semibold">Ítem</th>
                      <th className="px-4 py-3 text-right font-semibold">Precio</th>
                      {cat.columns.map((col) => (
                        <th
                          key={col.key}
                          className={`px-4 py-3 font-semibold ${alignClass(col.align)}`}
                        >
                          {col.label}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {cat.items.map((item, i) => (
                      <tr
                        key={`${cat.id}-${i}`}
                        className="border-b border-white/5 transition-colors last:border-0 hover:bg-white/[0.03]"
                      >
                        <td className="px-4 py-3 font-medium text-white">
                          {item.name}
                        </td>
                        <td className="px-4 py-3 text-right font-mono font-semibold text-teal">
                          {item.price}
                        </td>
                        {cat.columns.map((col) => (
                          <td
                            key={col.key}
                            className={`px-4 py-3 text-muted ${alignClass(col.align)}`}
                          >
                            {item[col.key] ?? "—"}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Category-specific clauses */}
              {cat.terms.length > 0 && (
                <ul className="mt-4 space-y-1.5 text-xs text-white/50">
                  {cat.terms.map((term, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-purple/70">•</span>
                      <span>{term}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          );
        })}
      </div>
    </div>
  );
}
