import Link from "next/link";
import Image from "next/image";
import { site, asset } from "@/config/site";
import { DiscordIcon, PlayIcon } from "@/components/icons";

/** Slim fixed header for the /normativa docs page. */
export function NormativaHeader({ version }: { version?: string }) {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-4 px-4">
        <div className="flex items-center gap-3 sm:gap-5">
          <Link href="/" aria-label={site.name} className="flex items-center">
            <Image
              src={asset("/brand/server-logo.png")}
              alt={`${site.name} logo`}
              width={140}
              height={44}
              priority
              className="h-8 w-auto"
            />
          </Link>
          <span className="hidden items-center gap-2 text-sm text-white/45 sm:flex">
            <span className="text-white/25">/</span>
            <span className="font-semibold text-white/80">Normativa</span>
            {version && (
              <span className="rounded-full border border-teal/30 bg-teal/10 px-2 py-0.5 font-mono text-[0.65rem] text-teal">
                v{version.replace(/^v/i, "")}
              </span>
            )}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="hidden rounded-xl border border-white/15 px-3.5 py-2 text-sm font-medium text-white transition-colors hover:border-white/35 hover:bg-white/5 sm:inline-flex"
          >
            ← Inicio
          </Link>
          <a
            href={site.discordUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/15 text-white transition-colors hover:border-white/35 hover:bg-white/5 sm:h-auto sm:w-auto sm:gap-2 sm:px-3.5 sm:py-2"
            aria-label="Discord"
          >
            <DiscordIcon className="h-4 w-4" />
            <span className="hidden sm:inline text-sm font-medium">Discord</span>
          </a>
          <a
            href={site.connectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-grad flex items-center gap-2 rounded-xl px-3.5 py-2 text-sm font-semibold text-white glow-purple"
          >
            <PlayIcon className="h-4 w-4" />
            <span className="hidden sm:inline">Conectar</span>
          </a>
        </div>
      </div>
    </header>
  );
}
