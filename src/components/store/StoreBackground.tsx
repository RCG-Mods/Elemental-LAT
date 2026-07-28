/**
 * Calm, static backdrop for the /tienda page.
 * Same Elemental brand mood as the docs page (deep Miami-night + faint neon
 * side glows) so long tables stay legible.
 */
export function StoreBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background"
    >
      <div className="absolute inset-0 bg-[radial-gradient(120%_70%_at_50%_-10%,#2a0a4d_0%,#140636_34%,#08010f_70%)]" />
      <div className="absolute -left-[12vw] top-[8%] h-[46vmin] w-[46vmin] rounded-full bg-[#ff2d95]/10 blur-[110px]" />
      <div className="absolute -right-[12vw] top-1/3 h-[46vmin] w-[46vmin] rounded-full bg-[#00e5ff]/8 blur-[120px]" />
      <div className="absolute inset-x-0 bottom-0 h-[40vh] bg-gradient-to-b from-transparent to-[#08010f]" />
    </div>
  );
}
