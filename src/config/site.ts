/**
 * Central site configuration for Elemental LAT.
 * Edit these values to update links, copy and server data across the whole site.
 * Placeholders are marked with TODO — replace them with the real data.
 */
export const site = {
  name: "Elemental LAT",
  shortName: "Elemental RP",
  tagline: "El futuro del Roleplay Latino comienza aquí",
  description:
    "Un servidor de rol semi-serio para FiveM, desarrollado por un equipo profesional y pensado para durar años. Diversión, comunidad y sistemas originales — sin vender humo.",
  // FiveM connect code — e.g. "cfx.re/join/xxxxx" or a direct IP
  connectUrl: "https://cfx.re/join/REEMPLAZAR", // TODO: código de conexión real
  discordUrl: "https://discord.gg/MVnAg2qkTQ", // invitación permanente de Discord
  storeUrl: "https://elemental-lat.tebex.io", // TODO: tienda Tebex (o quitar)
  // Player-facing highlights (no technical jargon).
  highlights: {
    status: "Etapa final de reapertura",
    type: "Semi-serio",
    economy: "Economía en USD",
    community: "Comunidad Latina",
  },
} as const;

export type Site = typeof site;

/**
 * Base path the site is served from. Empty in dev/local, "/Elemental-LAT" when
 * exported for GitHub Pages. Injected via next.config `env` so it is available
 * in both server and client bundles (NEXT_PUBLIC_ prefix). In static export,
 * next/image does NOT prepend the basePath to public assets, so reference them
 * through `asset()`.
 */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Prefix a public asset path with the active basePath. */
export const asset = (path: string) =>
  `${basePath}${path.startsWith("/") ? path : `/${path}`}`;
