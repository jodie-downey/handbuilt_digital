import { oeFAQ } from "../../data/oeFAQ";
import OEFAQItem from "../ui/OEFAQItem";

export default function OEFAQ() {
  return (
    <section className="bg-oe-cream py-20 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.2em] uppercase text-oe-gold font-semibold">
            Common Questions
          </p>
          <h2 className="mt-3 font-heading text-4xl md:text-5xl text-oe-text">
            Before you go.
          </h2>
        </div>

        <div className="bg-white rounded-2xl px-6 md:px-8 divide-y-0">
          {oeFAQ.map((item) => (
            <OEFAQItem key={item.q} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
