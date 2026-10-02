import type { ReactNode, ReactElement, AnchorHTMLAttributes } from "react";

/** Pill-shaped link button. Source: src/components/Button.tsx (a next/link there; a plain <a> here). */
export interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /** primary = green-500 CTA · secondary = white on light grounds · ghost = outline on green-950 · dark = green-950 on green-500 bands. Default "primary". */
  variant?: "primary" | "secondary" | "ghost" | "dark";
  href: string;
  /** Adds the cta-pulse ring (dark ring for variant "dark"). Only for the main conversion button in a view. */
  pulse?: boolean;
  /** "phone" prepends the ringing phone icon. */
  icon?: "phone";
  className?: string;
  children: ReactNode;
}
export declare function Button(props: ButtonProps): ReactElement;

/** Centered eyebrow + H2 + description that opens every section. Source: src/components/SectionHeading.tsx */
export interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  /** true on green-950 grounds. */
  light?: boolean;
}
export declare function SectionHeading(props: SectionHeadingProps): ReactElement;

/** Translucent pill label for dark heroes. Source: inline in src/components/Hero.tsx */
export interface BadgeProps { children: ReactNode; }
export declare function Badge(props: BadgeProps): ReactElement;

/** Glassy key-figure tile for green-950 grounds; render inside a <dl>. Source: inline in src/components/Hero.tsx */
export interface StatTileProps { value: number | string; suffix?: string; label: string; }
export declare function StatTile(props: StatTileProps): ReactElement;

/** Linked card for a license-class group. Source: inline in src/components/ClassesOverview.tsx */
export interface ClassCardProps {
  title: string;
  /** Class codes separated by " · ", shown uppercase. */
  classes?: string;
  description: string;
  href: string;
  /** Link label, default "Details ansehen" (an arrow is appended). */
  cta?: string;
}
export declare function ClassCard(props: ClassCardProps): ReactElement;

/** One accordion row. Source: src/components/Faq.tsx (one row of its list). */
export interface FaqItemProps { question: string; answer: string; defaultOpen?: boolean; }
export declare function FaqItem(props: FaqItemProps): ReactElement;

/** Mobile floating call + mail bar. Source: src/components/StickyContactBar.tsx */
export interface StickyContactBarProps {
  /** E.164 number for tel:, e.g. "+49711295928". */
  phoneHref: string;
  email: string;
  callLabel?: string;
  /** Default true: fixed to the bottom of the viewport. */
  fixed?: boolean;
}
export declare function StickyContactBar(props: StickyContactBarProps): ReactElement;
