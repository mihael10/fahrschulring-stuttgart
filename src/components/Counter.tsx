"use client";

import { useEffect, useState } from "react";

// Counts up from 0 to `value` once, on mount — used for the Hero stat
// tiles. Kept as its own tiny client leaf so Hero itself can stay a server
// component (see architecture.md: client JS should stay minimal).
export function Counter({
  value,
  suffix = "",
  duration = 1200,
  delay = 0,
}: {
  value: number;
  suffix?: string;
  duration?: number;
  delay?: number;
}) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time sync, reduced-motion preference unknown during static-export prerender
      setDisplay(value);
      return;
    }

    let frame: number;

    function animate() {
      const start = performance.now();
      function tick(now: number) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setDisplay(Math.round(eased * value));
        if (progress < 1) frame = requestAnimationFrame(tick);
      }
      frame = requestAnimationFrame(tick);
    }

    const timeout = setTimeout(animate, delay);
    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(frame);
    };
  }, [value, duration, delay]);

  return (
    <span>
      {display}
      {suffix}
    </span>
  );
}
