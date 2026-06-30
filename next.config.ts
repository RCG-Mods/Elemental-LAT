import type { NextConfig } from "next";

// Repo name — the site is served from https://<owner>.github.io/<repo>/ on GitHub Pages.
const repo = "Elemental-LAT";
const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  // Static HTML export so the site can be hosted on GitHub Pages (no Node server).
  output: "export",
  // GitHub Pages can't run Next's image optimizer.
  images: { unoptimized: true },
  // Serve assets from the project subpath only when deploying to GitHub Pages.
  basePath: isGithubPages ? `/${repo}` : "",
  assetPrefix: isGithubPages ? `/${repo}/` : "",
  // Emit folder-style URLs (e.g. /faq/) which static hosts resolve reliably.
  trailingSlash: true,
};

export default nextConfig;
