import Link from "next/link";
import { findRoute } from "@/content/routes";

// Visible breadcrumb trail — the BreadcrumbList JSON-LD (src/lib/schema.ts)
// mirrors exactly this, so structured data never claims navigation the
// visitor can't see.
export function Breadcrumbs({ path }: { path: `/${string}` }) {
  const route = findRoute(path);
  if (!route || path === "/") return null;
  const chain = [findRoute("/")!, ...(route.parent ? [findRoute(route.parent)!] : []), route];

  return (
    <nav aria-label="Brotkrumen" className="container-page pt-6 text-xs text-green-700">
      <ol className="flex flex-wrap items-center gap-1.5">
        {chain.map((item, i) => {
          const last = i === chain.length - 1;
          return (
            <li key={item.path} className="flex items-center gap-1.5">
              {i > 0 && <span aria-hidden="true">›</span>}
              {last ? (
                <span aria-current="page" className="font-semibold text-green-950">
                  {item.label}
                </span>
              ) : (
                <Link href={item.path} className="hover:text-green-950 hover:underline">
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
