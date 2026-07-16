"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { site, asset } from "@/config/site";
import { DiscordIcon, PlayIcon } from "./icons";

const links = [
  { href: "#caracteristicas", label: "Por qué Elemental" },
  { href: "#transferencia", label: "Transferencia" },
  { href: "#unirte", label: "Cómo Unirte" },
  { href: "#galeria", label: "Galería" },
  { href: "/normativa", label: "Normativa" },
  { href: "#faq", label: "FAQ" },
];

const isRoute = (href: string) => href.startsWith("/");

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <nav
        className={`flex w-full max-w-6xl items-center justify-between gap-4 rounded-2xl border px-4 py-3 transition-all duration-300 sm:px-6 ${
          scrolled
            ? "border-white/10 bg-background/80 backdrop-blur-xl shadow-[0_8px_40px_rgba(94,0,218,0.25)]"
            : "border-transparent bg-transparent"
        }`}
      >
        <a href="#top" className="flex items-center gap-3" aria-label={site.name}>
          <Image
            src={asset("/brand/server-logo.png")}
            alt={`${site.name} logo`}
            width={150}
            height={48}
            priority
            className="h-9 w-auto"
          />
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-7 lg:flex">
          {links.map((link) =>
            isRoute(link.href) ? (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-semibold text-teal transition-colors duration-200 hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ) : (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-muted transition-colors duration-200 hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ),
          )}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={site.discordUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-xl border border-white/15 px-3.5 py-2 text-sm font-medium text-white transition-colors duration-200 hover:border-white/35 hover:bg-white/5 sm:flex cursor-pointer"
          >
            <DiscordIcon className="h-4 w-4" />
            Discord
          </a>
          <a
            href={site.connectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-grad flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold text-white glow-purple cursor-pointer"
          >
            <PlayIcon className="h-4 w-4" />
            Conectar
          </a>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            className="ml-1 flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 text-white lg:hidden cursor-pointer"
          >
            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 block h-0.5 w-5 bg-current transition-all duration-300 ${
                  open ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 block h-0.5 w-5 bg-current transition-all duration-300 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 block h-0.5 w-5 bg-current transition-all duration-300 ${
                  open ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="absolute inset-x-4 top-[5.5rem] rounded-2xl border border-white/10 bg-background/95 p-4 backdrop-blur-xl lg:hidden">
          <ul className="flex flex-col gap-1">
            {links.map((link) =>
              isRoute(link.href) ? (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3 text-base font-semibold text-teal transition-colors hover:bg-white/5 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ) : (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3 text-base font-medium text-muted transition-colors hover:bg-white/5 hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ),
            )}
            <li>
              <a
                href={site.discordUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="mt-1 flex items-center gap-2 rounded-xl border border-white/15 px-4 py-3 text-base font-medium text-white hover:bg-white/5"
              >
                <DiscordIcon className="h-5 w-5" />
                Unirse al Discord
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
