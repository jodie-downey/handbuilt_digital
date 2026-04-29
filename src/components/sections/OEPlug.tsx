import { Link } from "react-router-dom";
import SectionWrapper from "../ui/SectionWrapper";

export default function OEPlug() {
  return (
    <SectionWrapper innerClassName="py-12">
      <div className="relative rounded-2xl bg-oe-charcoal overflow-hidden px-8 py-10 md:px-12 md:py-12 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
        {/* Gold accent line */}
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-oe-gold" />

        <div>
          <p className="text-xs tracking-[0.2em] uppercase text-oe-gold font-semibold">
            Also from Handbuilt Digital
          </p>
          <h2 className="mt-3 font-heading text-2xl md:text-3xl text-white leading-snug">
            Stop letting your business run you.
          </h2>
          <p className="mt-2 text-oe-lavender text-base">
            We built something for that.
          </p>
        </div>

        <Link
          to="/operators-edge"
          className="shrink-0 inline-flex items-center gap-2 rounded-xl bg-oe-gold text-oe-charcoal font-semibold px-6 py-3.5 text-sm hover:bg-[#b8973d] transition-colors"
        >
          Explore Operator's Edge
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </SectionWrapper>
  );
}
