import Image from "next/image";
import { site, asset } from "@/config/site";
import { DiscordIcon, PlayIcon } from "./icons";
import { ConnectCode } from "./ConnectCode";

export function Hero() {
  return (
    <section
      id="top"
      className="scanlines relative flex min-h-[100svh] flex-col items-center justify-center px-4 pb-20 pt-32 text-center"
    >
      {/* Status pill */}
      <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm backdrop-blur">
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal opacity-75" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-teal" />
        </span>
        <span className="text-muted">
          Servidor <span className="font-semibold text-white">Online</span> ·{" "}
          {site.server.region}
        </span>
      </div>

      {/* Logo */}
      <div className="float-y relative">
        <Image
          src={asset("/brand/server-logo.png")}
          alt={`${site.name} — logo`}
          width={760}
          height={236}
          priority
          className="h-auto w-[78vw] max-w-2xl drop-shadow-[0_0_40px_rgba(162,0,255,0.45)]"
        />
      </div>

      {/* Japanese katakana accent (decorative) */}
      <p
        aria-hidden="true"
        className="font-jp mt-5 text-sm tracking-[0.5em] text-[#ff6ec7] text-glow sm:text-base"
      >
        エレメンタル・ロールプレイ
      </p>

      {/* Tagline */}
      <h1 className="sr-only">{site.name} — Servidor de Rol FiveM</h1>
      <p className="mt-6 max-w-2xl text-balance text-[clamp(1.5rem,4vw,2.6rem)] font-bold leading-tight text-white text-glow">
        {site.tagline}
      </p>
      <p className="mt-4 max-w-xl text-balance text-base leading-relaxed text-muted sm:text-lg">
        {site.description}
      </p>

      {/* CTAs */}
      <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
        <a
          href={site.connectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-grad group flex items-center gap-2.5 rounded-2xl px-7 py-3.5 text-base font-semibold text-white glow-purple cursor-pointer"
        >
          <PlayIcon className="h-5 w-5 transition-transform duration-200 group-hover:scale-110" />
          Conectar ahora
        </a>
        <a
          href={site.discordUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 rounded-2xl border border-white/20 bg-white/5 px-7 py-3.5 text-base font-semibold text-white backdrop-blur transition-colors duration-200 hover:border-white/40 hover:bg-white/10 cursor-pointer"
        >
          <DiscordIcon className="h-5 w-5" />
          Unirse al Discord
        </a>
      </div>

      {/* Connect code */}
      <div className="mt-6">
        <ConnectCode />
      </div>
    </section>
  );
}
