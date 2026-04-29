import { quickStart, oeProducts } from "../../data/oeProducts";
import OEProductCard from "../ui/OEProductCard";

export default function OEProductSuite() {
  return (
    <section id="suite" className="bg-white py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.2em] uppercase text-oe-gold font-semibold">
            The Suite
          </p>
          <h2 className="mt-3 font-heading text-4xl md:text-5xl text-oe-text">
            Pick Your Industry. Plug It In.
          </h2>
          <p className="mt-4 text-base text-oe-text/60 max-w-xl mx-auto">
            Each playbook is built specifically for how your industry actually runs.
          </p>
        </div>

        {/* Quick Start — featured full-width card */}
        <div className="relative rounded-2xl bg-oe-purple overflow-hidden mb-10 p-8 md:p-10">
          {/* FREE badge */}
          <span className="absolute top-5 right-5 text-xs font-bold uppercase tracking-wider text-oe-charcoal bg-oe-gold rounded-full px-3 py-1">
            Free
          </span>

          <div className="max-w-xl">
            <h3 className="font-heading text-2xl md:text-3xl text-white leading-snug">
              {quickStart.title}
            </h3>
            <p className="mt-2 text-oe-lavender text-base">{quickStart.subtitle}</p>
            <p className="mt-4 text-white/75 text-sm leading-relaxed">
              {quickStart.description}
            </p>

            <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <a
                href={quickStart.storeUrl}
                className="inline-flex items-center justify-center rounded-xl bg-oe-gold text-oe-charcoal font-semibold px-6 py-3 text-sm hover:bg-[#b8973d] transition-colors"
              >
                Download Free
              </a>
              <span className="text-xs text-white/40">No email required on this platform</span>
            </div>
          </div>
        </div>

        {/* Paid products — 2-column grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {oeProducts.map((product) => (
            <OEProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}
