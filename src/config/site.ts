/**
 * Central site configuration for Elemental LAT.
 * Edit these values to update links, copy and server data across the whole site.
 * Placeholders are marked with TODO — replace them with the real data.
 */
export const site = {
  name: "Elemental LAT",
  shortName: "Elemental RP",
  tagline: "Tu historia comienza aquí",
  description:
    "Servidor de rol serio para FiveM. Economía viva, facciones, trabajos legales e ilegales y una comunidad latina activa. Crea tu personaje y escribe tu propia historia.",
  // FiveM connect code — e.g. "cfx.re/join/xxxxx" or a direct IP
  connectUrl: "https://cfx.re/join/REEMPLAZAR", // TODO: código de conexión real
  discordUrl: "https://discord.gg/REEMPLAZAR", // TODO: invitación de Discord real
  storeUrl: "https://elemental-lat.tebex.io", // TODO: tienda Tebex (o quitar)
  // Live data placeholders (can be wired to a status API later)
  server: {
    maxPlayers: 128,
    framework: "QBCore / ESX",
    region: "LATAM",
  },
} as const;

export type Site = typeof site;

/**
 * Base path the site is served from. Empty in dev/local, "/Elemental-LAT" when
 * exported for GitHub Pages. In static export, next/image does NOT prepend the
 * basePath to public assets, so reference them through `asset()`.
 */
export const basePath =
  process.env.GITHUB_PAGES === "true" ? "/Elemental-LAT" : "";

/** Prefix a public asset path with the active basePath. */
export const asset = (path: string) =>
  `${basePath}${path.startsWith("/") ? path : `/${path}`}`;
