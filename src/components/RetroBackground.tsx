/**
 * Fixed vaporwave / Vice City backdrop: deep Miami-night gradient, a striped
 * retro sun, neon side glows, a perspective grid floor and palm silhouettes.
 * Purely decorative — sits behind all content.
 */
export function RetroBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Base Miami-night gradient (magenta haze up top -> deep indigo) */}
      <div className="absolute inset-0 bg-[radial-gradient(130%_85%_at_50%_-12%,#3a0d63_0%,#1a0540_38%,#08010f_74%)]" />

      {/* Striped retro sun + glow */}
      <div className="absolute left-1/2 top-[12%] -translate-x-1/2">
        <div className="sun-pulse absolute left-1/2 top-1/2 h-[52vmin] w-[52vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,95,162,0.5)_0%,rgba(162,0,255,0.3)_45%,transparent_70%)] blur-[6px]" />
        <div className="retro-sun relative h-[34vmin] w-[34vmin] overflow-hidden rounded-full" />
      </div>

      {/* Neon side glows: hot pink + cyan (Vice City) */}
      <div className="absolute -left-[8vw] top-1/4 h-[42vmin] w-[42vmin] rounded-full bg-[#ff2d95]/20 blur-[90px]" />
      <div className="absolute -right-[8vw] top-2/5 h-[42vmin] w-[42vmin] rounded-full bg-[#00e5ff]/15 blur-[90px]" />

      {/* Grid floor */}
      <div className="absolute inset-x-0 bottom-0 h-[46vh] overflow-hidden">
        <div className="retro-grid absolute inset-x-[-25%] bottom-0 h-[120%]" />
        <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-[#08010f] to-transparent" />
      </div>

      {/* Palm silhouettes */}
      <Palm className="absolute bottom-[34vh] left-[3vw] h-[26vh] w-auto text-black/70 opacity-80 [filter:drop-shadow(0_0_2px_rgba(255,45,149,0.35))]" />
      <Palm
        className="absolute bottom-[34vh] right-[4vw] h-[32vh] w-auto scale-x-[-1] text-black/75 opacity-80 [filter:drop-shadow(0_0_2px_rgba(0,229,255,0.3))]"
      />
    </div>
  );
}

function Palm({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 200" fill="currentColor" className={className} aria-hidden="true">
      {/* trunk */}
      <path d="M58 200c2-46 1-92 4-120 .4-4 3-7 3-11 0-2-2-3-2-5 1-3 4-4 6-6-3 0-6 1-8 3-1-3 0-6 1-9-2 2-4 4-5 7-1-2-1-5-1-8-2 4-3 8-3 12-1 31-1 94-2 147z" />
      {/* fronds */}
      <path d="M62 58c14-12 30-16 46-12-15-3-29 1-41 9 13-13 30-19 48-17-18-4-36 2-50 15 9-16 24-27 42-30-19-1-37 8-48 24 2-17 11-32 25-42-17 6-30 20-34 38-6-16-5-34 3-50-12 12-18 30-15 47-9-13-23-22-39-24 15 7 27 19 33 35-16-6-34-5-49 4 17-4 35-1 49 9-15 1-29 8-39 20 14-9 31-12 47-9-9 4-17 10-23 18 11-8 24-12 38-11z" />
    </svg>
  );
}
