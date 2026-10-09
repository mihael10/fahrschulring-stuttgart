---
title: Technical QA of the SEO implementation (Phase 25)
area: seo, qa, build verification
keywords: [qa, build, lint, sitemap, robots, canonical, json-ld, broken links]
---

# SEO final QA — 2026-10-09

## Automated checks run

| Check | Command / method | Result |
| --- | --- | --- |
| Lint | `npm run lint` | ✅ 0 errors |
| Types | `npx tsc --noEmit` | ✅ |
| Preview build | `GITHUB_REPOSITORY=… NEXT_PUBLIC_SITE_URL=https://mihael10.github.io/fahrschulring-stuttgart npm run build` | ✅ 19 static routes |
| Production build | `SITE_IS_PRODUCTION=true NEXT_PUBLIC_SITE_URL=https://www.fahrschulring.de npm run build` | ✅ 19 static routes, no basePath |
| Routes build | 12 indexable + impressum, datenschutz, 404, robots, sitemap | ✅ |
| Preview staging protection | `out/index.html` → `<meta name="robots" content="noindex, nofollow">`, no canonical; `out/robots.txt` → `Disallow: /` | ✅ |
| Production indexability | every marketing page `index, follow` + canonical `https://www.fahrschulring.de/<path>/`; legal pages `noindex, nofollow` | ✅ (14/14 files) |
| og:url per page | matches canonical on all 12 | ✅ |
| Sitemap | 12 `<loc>` on production host, trailing slashes, per-route lastmod, no legal pages, no github.io URLs (`grep -c github.io` = 0) | ✅ |
| robots.txt (production) | `Allow: /`, `Sitemap: https://www.fahrschulring.de/sitemap.xml`, `Host:` | ✅ |
| JSON-LD | every block `JSON.parse`s; graphs per page listed in QA script output; `<` escaped | ✅ 14/14 valid |
| Internal links | every `href`/`src` starting with `/` resolves to a file in `out/` (incl. images) | ✅ 0 broken |
| Images | every `<img>` has `alt` | ✅ |
| Headings | exactly one `<h1>` per page | ✅ |
| Word counts (production HTML, scripts stripped) | home 1583 · ablauf 1199 · auto 1148 · kosten 985 · umschreiben 956 · motorrad 848 · lkw-bus 768 · anhaenger 666 · klassen 633 · datenschutz 552 · impressum 262 · kontakt 232 · anfahrt 204 · team 166 | ✅ topic pages substantial |
| Visual | Playwright screenshots (390 px, 1280 px) of `/`, `/klassen/auto/`, `/fuehrerschein-kosten/` | ✅ renders; mobile fine (note: `.reveal` sections are opacity-0 until scrolled into view — content is in the HTML regardless) |

QA script: `scratchpad/qa.js` equivalent is reproduced below for re-runs:

```js
// node qa.js  (run from repo root after a build)
const fs=require("fs"),path=require("path");
const walk=d=>fs.readdirSync(d,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(path.join(d,e.name)):[path.join(d,e.name)]);
for(const f of walk("out").filter(f=>f.endsWith(".html"))){const h=fs.readFileSync(f,"utf8");
 for(const b of h.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)) JSON.parse(b[1]);
 for(const u of new Set([...h.matchAll(/(?:href|src)="(\/[^"\/][^"]*)"/g)].map(m=>decodeURIComponent(m[1].split("#")[0])))){
  if(![path.join("out",u),path.join("out",u,"index.html")].some(c=>fs.existsSync(c)&&fs.statSync(c).isFile())) console.log("BROKEN",f,u);}
 if(!/noindex/.test(h)&&!/rel="canonical"/.test(h)) console.log("NO CANONICAL",f);}
```

## Not verifiable here (do before/at launch)

- [ ] Live HTTP checks on `www.fahrschulring.de`: 200 on all 12 routes,
      301 from apex/http and from every `/pages/*.php` (network blocked in
      this environment).
- [ ] Google Rich Results Test / Schema validator on the live URLs (JSON-LD
      is syntactically valid; semantic validation needs the public URL).
- [ ] PageSpeed Insights / Lighthouse mobile on `/` and `/klassen/auto/`
      (expected good: static HTML, ~200 KB hero image is the LCP).
- [ ] Search Console: sitemap accepted, 12 pages indexed, old `.php` URLs
      show as redirects.
- [ ] Verify on the source pages the numbers quoted from search excerpts:
      TÜV SÜD fees (24,99 € / 129,83 €), Führerscheinstelle address
      (Löwentorbogen 11), reform dates, pass rates 2025, Anlage-11 example
      countries, Stadtbahn/bus stops near Hegelstraße (VVS).
- [ ] Owner confirmations listed in `entity-consistency.md` §Owner decisions.
- [ ] Datenschutz: unchanged this pass (GA4, Maps, form already covered);
      add a YouTube section when videos are embedded.

## Files changed in this pass (for review)

Config/plumbing: `next.config.ts`, `.github/workflows/deploy.yml`,
`src/lib/site-url.ts`, `src/lib/metadata.ts`, `src/lib/schema.ts`,
`src/content/routes.ts`, `src/content/sources.ts`, `src/app/robots.ts`,
`src/app/sitemap.ts`, `src/app/layout.tsx`, `alfahosting/.htaccess`.
Components: `JsonLd`, `Breadcrumbs`, `FaqList` (replaces client `Faq`),
`TopicPage`, `content/Prose`, `AnalyticsEvents`, `ClassCard` (heading
level), `ClassesOverview` (links), `Highlights` (H2), `Footer` (routes),
`VehicleCarousel` + `fleet.ts` (alts, aria-hidden loop), `ContactForm`
(event). Pages: all existing pages re-metadata'd; 7 new pages. Content:
`faq.ts` (+30 sourced FAQs), `site.ts` (`phoneE164`, `district`).
