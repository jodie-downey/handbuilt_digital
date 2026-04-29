export default function OEHero() {
  return (
    <section className="relative bg-oe-charcoal flex flex-col min-h-screen">
      {/* Gold accent line — top of page */}
      <div className="h-[3px] w-full bg-oe-gold shrink-0" />

      <div className="flex-1 flex items-center justify-center px-6 py-20">
        <div className="max-w-3xl w-full text-center">
          {/* Eyebrow */}
          <p className="text-xs tracking-[0.2em] uppercase text-oe-gold font-semibold">
            Operator's Edge by Handbuilt Digital
          </p>

          {/* Gold rule below eyebrow */}
          <div className="mt-3 h-px w-12 bg-oe-gold mx-auto opacity-60" />

          {/* Headline */}
          <h1 className="mt-6 font-heading text-5xl md:text-6xl lg:text-7xl text-white leading-tight tracking-tight">
            Stop Letting Your Business Run You.
          </h1>

          {/* Subheadline */}
          <p className="mt-6 text-lg md:text-xl text-oe-lavender max-w-2xl mx-auto leading-relaxed">
            AI prompt packs built for service operators. Not marketers. Not tech
            people. Operators.
            <br className="hidden sm:block" />
            Plug &amp; Play. Works with ChatGPT, Claude &amp; Gemini — all free.
          </p>

          {/* CTA Row */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="http://eepurl.com/KAnk-qfZhX"
              className="inline-flex items-center justify-center rounded-xl bg-oe-gold text-oe-charcoal font-semibold px-6 py-3.5 text-sm hover:bg-[#b8973d] transition-colors"
            >
              Get the Free Quick Start
            </a>
            <a
              href="#suite"
              className="inline-flex items-center justify-center rounded-xl border border-oe-gold/60 text-oe-gold font-semibold px-6 py-3.5 text-sm hover:bg-oe-gold/10 transition-colors"
            >
              Browse the Full Suite
            </a>
          </div>

          {/* Trust line */}
          <p className="mt-6 text-xs text-oe-gold/60 tracking-wide">
            Works with ChatGPT, Claude &amp; Gemini — no paid subscription required
          </p>
        </div>
      </div>
    </section>
  );
}
