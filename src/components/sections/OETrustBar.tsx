const signals = [
  "Built by a real service business operator",
  "Tested in actual businesses — not theory",
  "Works with free AI tools",
  "Plug & Play — fill in your brackets and go",
];

export default function OETrustBar() {
  return (
    <section className="bg-oe-charcoal-soft py-6 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Desktop: horizontal row with separator dots */}
        <div className="hidden md:flex items-center justify-center gap-0 flex-wrap">
          {signals.map((s, i) => (
            <span key={s} className="flex items-center">
              <span className="flex items-center gap-1.5 px-5 text-sm text-white/90">
                <span className="text-oe-gold font-bold text-base">✓</span>
                {s}
              </span>
              {i < signals.length - 1 && (
                <span className="text-oe-gold/40 text-lg select-none">·</span>
              )}
            </span>
          ))}
        </div>

        {/* Mobile: 2×2 grid */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-3 md:hidden">
          {signals.map((s) => (
            <div key={s} className="flex items-start gap-2 text-sm text-white/90">
              <span className="text-oe-gold font-bold shrink-0">✓</span>
              {s}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
