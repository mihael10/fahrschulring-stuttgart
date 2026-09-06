"use client";

import { useState } from "react";
import { SectionHeading } from "./SectionHeading";
import { faq } from "@/content/faq";

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading eyebrow="Häufige Fragen" title="Gut zu wissen" />
        <div className="mx-auto mt-12 max-w-3xl divide-y divide-green-100 border-y border-green-100">
          {faq.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={item.question}>
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                >
                  <span className="text-base font-semibold text-green-950">
                    {item.question}
                  </span>
                  <span
                    aria-hidden
                    className={`flex h-7 w-7 flex-none items-center justify-center rounded-full border border-green-200 text-green-700 transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className="grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                  aria-hidden={!isOpen}
                >
                  <div className="overflow-hidden">
                    <p className="pb-5 text-sm leading-relaxed text-green-700">{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
