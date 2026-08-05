import Link from "next/link";
import { ComponentProps } from "react";

type Variant = "primary" | "secondary" | "ghost" | "dark";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-amber-500 text-navy-950 hover:bg-amber-400 focus-visible:outline-amber-600 shadow-sm shadow-amber-900/10",
  secondary:
    "bg-white text-navy-900 border border-navy-100 hover:bg-navy-50 focus-visible:outline-navy-700",
  ghost:
    "bg-transparent text-white border border-white/30 hover:bg-white/10 focus-visible:outline-white",
  dark: "bg-navy-950 text-white hover:bg-navy-900 focus-visible:outline-navy-700",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

export function Button({
  variant = "primary",
  className = "",
  href,
  ...props
}: {
  variant?: Variant;
  href: string;
  className?: string;
} & Omit<ComponentProps<typeof Link>, "href">) {
  return (
    <Link
      href={href}
      className={`${base} ${variantClasses[variant]} ${className}`}
      {...props}
    />
  );
}
