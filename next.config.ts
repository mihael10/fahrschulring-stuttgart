import type { NextConfig } from "next";

// GITHUB_REPOSITORY is set automatically by GitHub Actions, e.g.
// "mihael10/fahrschulring-stuttgart". Project Pages (as opposed to a
// <user>.github.io user/org page) are served from a /<repo> sub-path, so
// every internal link/asset needs that as a base path — but only when
// actually building for Pages; local dev doesn't set this env var.
const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1];
const basePath = repoName ? `/${repoName}` : undefined;

// Mirror into a NEXT_PUBLIC_ var so client components can prefix hardcoded
// <Image src="/..."> strings with it too — see src/lib/base-path.ts for why.
process.env.NEXT_PUBLIC_BASE_PATH = basePath ?? "";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath,
  assetPrefix: basePath,
  // Static export otherwise emits both "team.html" and a same-named
  // "team/" directory (RSC payload files, no index.html) for every route —
  // ambiguous for a plain static file server. trailingSlash makes every
  // route an unambiguous "team/index.html" instead.
  trailingSlash: true,
};

export default nextConfig;
