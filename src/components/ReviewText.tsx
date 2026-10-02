"use client";

import { useEffect, useRef, useState } from "react";

// Review text clamped to 9 lines; shows a toggle only when the text is
// actually cut off at the current card width.
export function ReviewText({ text }: { text: string }) {
  const ref = useRef<HTMLQuoteElement>(null);
  const [expanded, setExpanded] = useState(false);
  const [overflows, setOverflows] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const measure = () => {
      if (!expanded) setOverflows(el.scrollHeight > el.clientHeight + 1);
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, [expanded]);

  return (
    <div className="mt-4 flex-1">
      <blockquote
        ref={ref}
        className={`whitespace-pre-line text-sm leading-relaxed text-green-800 ${
          expanded ? "" : "line-clamp-[9]"
        }`}
      >
        &bdquo;{text}&ldquo;
      </blockquote>
      {(overflows || expanded) && (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
          className="mt-2 text-sm font-semibold text-green-700 underline hover:text-green-950"
        >
          {expanded ? "Weniger anzeigen" : "Weiterlesen"}
        </button>
      )}
    </div>
  );
}
