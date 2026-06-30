import type { NextConfig } from "next";

// Repo name — the site is served from https://<owner>.github.io/<repo>/ on GitHub Pages.
const repo = "Elemental-LAT";
const isGithubPages = process.env.GITHUB_PAGES === "true";
const basePath = isGithubPages ? `/${repo}` : "";

const nextConfig: NextConfig = {
  // Static HTML export so the site can be hosted on GitHub Pages (no Node server).
  output: "export",
  // GitHub Pages can't run Next's image optimizer.
  images: { unoptimized: true },
  // Serve assets from the project subpath only when deploying to GitHub Pages.
  basePath,
  assetPrefix: basePath ? `${basePath}/` : "",
  // Emit folder-style URLs (e.g. /faq/) which static hosts resolve reliably.
  trailingSlash: true,
  // Expose the base path to both server and client bundles for asset() helper.
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;
