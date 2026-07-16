import Image from "next/image";
import Link from "next/link";
import { site, asset } from "@/config/site";
import { DiscordIcon, PlayIcon } from "./icons";

const nav = [
  { href: "#caracteristicas", label: "Por qué Elemental" },
  { href: "#transferencia", label: "Transferencia" },
  { href: "#unirte", label: "Cómo Unirte" },
  { href: "#galeria", label: "Galería" },
  { href: "/normativa", label: "Normativa" },
  { href: "#faq", label: "FAQ" },
];

export function Footer() {
  return (
    <footer className="relative mt-auto border-t border-white/10 px-4 py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-sm">
          <Image
            src={asset("/brand/server-logo.png")}
            alt={`${site.name} logo`}
            width={180}
            height={56}
            className="h-10 w-auto"
          />
          <p className="mt-4 text-sm leading-relaxed text-muted">
            {site.description}
          </p>
          <span className="font-jp mt-4 block text-xs tracking-[0.3em] text-white/25">
            エレメンタル・ラテンアメリカ
          </span>
        </div>

        <nav className="flex flex-col gap-2.5">
          <span className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
            Navegación
          </span>
          {nav.map((item) =>
            item.href.startsWith("/") ? (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-muted transition-colors duration-200 hover:text-white"
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-muted transition-colors duration-200 hover:text-white"
              >
                {item.label}
              </a>
            ),
          )}
        </nav>

        <div className="flex flex-col gap-3">
          <span className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
            Comunidad
          </span>
          <a
            href={site.discordUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-xl border border-white/15 px-4 py-2.5 text-sm font-medium text-white transition-colors duration-200 hover:border-white/35 hover:bg-white/5 cursor-pointer"
          >
            <DiscordIcon className="h-4 w-4" />
            Discord
          </a>
          <a
            href={site.connectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-grad flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold text-white cursor-pointer"
          >
            <PlayIcon className="h-4 w-4" />
            Conectar
          </a>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-6xl flex-col items-center justify-between gap-3 border-t border-white/5 pt-6 text-xs text-white/40 sm:flex-row">
        <span>
          © {new Date().getFullYear()} {site.name}. Todos los derechos reservados.
        </span>
        <span>
          No afiliado a Rockstar Games ni Take-Two Interactive.
        </span>
      </div>
    </footer>
  );
}
