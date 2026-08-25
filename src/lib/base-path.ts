// Next.js auto-prepends `basePath` (next.config.ts) to <Link>, CSS, and JS
// asset URLs, but NOT to a raw string passed as <Image src="/...">  once
// images are unoptimized (required for static export) — see next.config.ts.
// next.config.ts mirrors its own computed basePath into this env var at
// build time so client components can prefix image sources with it too.
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
