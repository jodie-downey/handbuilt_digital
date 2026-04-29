import { useState } from "react";
import type { FAQItem } from "../../data/oeFAQ";

export default function OEFAQItem({ q, a }: FAQItem) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-oe-text/10 last:border-0">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left cursor-pointer"
        aria-expanded={open}
      >
        <span className="text-base font-semibold text-oe-text">{q}</span>
        <span
          className="shrink-0 text-oe-gold transition-transform duration-300"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
          aria-hidden="true"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path
              d="M4 6.5L9 11.5L14 6.5"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>

      <div
        style={{ maxHeight: open ? "400px" : "0px" }}
        className="overflow-hidden transition-all duration-300 ease-in-out"
      >
        <p className="pb-5 text-sm text-oe-text/70 leading-relaxed">{a}</p>
      </div>
    </div>
  );
}
