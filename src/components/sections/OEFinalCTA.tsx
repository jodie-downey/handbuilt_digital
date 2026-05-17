import { trackLead } from "../../lib/tracking";

export default function OEFinalCTA() {
  return (
    <section className="relative bg-oe-charcoal py-20 px-6">
      {/* Gold top border */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-oe-gold" />

      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-heading text-4xl md:text-5xl text-white">
          Stop starting from scratch.
        </h2>
        <p className="mt-5 text-base md:text-lg text-oe-lavender max-w-2xl mx-auto leading-relaxed">
          Every prompt in these packs is something you'd have to write yourself
          anyway.
          <br className="hidden sm:block" />
          Let AI do the first draft. You make it yours.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-5 justify-center items-center">
          {/* CTA Left — free */}
          <div className="flex flex-col items-center gap-1.5">
            <a
              href="http://eepurl.com/KAnk-qfZhX"
              onClick={trackLead}
              className="inline-flex items-center justify-center rounded-xl border border-oe-gold/60 text-oe-gold font-semibold px-7 py-3.5 text-sm hover:bg-oe-gold/10 transition-colors min-w-[200px]"
            >
              Start Free
            </a>
            <span className="text-xs text-white/35">
              Download the Quick Start — 5 prompts, zero cost
            </span>
          </div>

          {/* CTA Right — paid */}
          <div className="flex flex-col items-center gap-1.5">
            <a
              href="#suite"
              className="inline-flex items-center justify-center rounded-xl bg-oe-gold text-oe-charcoal font-semibold px-7 py-3.5 text-sm hover:bg-[#b8973d] transition-colors min-w-[200px]"
            >
              Get Your Playbook
            </a>
            <span className="text-xs text-white/35">
              $29–$47 · Instant download · Plug &amp; Play
            </span>
          </div>
        </div>

        <p className="mt-12 text-xs text-white/25">
          Questions? handbuiltdigital.com · Built by Handbuilt Digital
        </p>
      </div>
    </section>
  );
}
