import { Reveal } from "./Reveal";
import { site } from "@/config/site";
import { DiscordIcon, PlayIcon } from "./icons";

export function CtaBanner() {
  return (
    <section className="relative px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="scanlines relative overflow-hidden rounded-3xl border border-white/10 px-6 py-16 text-center sm:px-12">
            {/* Glow backdrop */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(120%_140%_at_50%_0%,rgba(162,0,255,0.35)_0%,rgba(94,0,218,0.15)_40%,transparent_70%)]" />
            <div className="absolute inset-0 -z-10 bg-grad-left opacity-40" />

            <span className="font-jp mb-3 block text-sm tracking-[0.4em] text-[#ff6ec7]">
              都市が待っている
            </span>
            <h2 className="mx-auto max-w-2xl text-balance text-[clamp(1.75rem,5vw,3.25rem)] font-bold leading-tight text-white text-glow">
              Tu historia en la ciudad empieza hoy
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-muted sm:text-lg">
              Únete a {site.name} y forma parte de una comunidad de rol latina
              que no para de crecer.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={site.connectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-grad group flex items-center gap-2.5 rounded-2xl px-7 py-3.5 text-base font-semibold text-white glow-purple cursor-pointer"
              >
                <PlayIcon className="h-5 w-5 transition-transform duration-200 group-hover:scale-110" />
                Conectar al servidor
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
          </div>
        </Reveal>
      </div>
    </section>
  );
}
