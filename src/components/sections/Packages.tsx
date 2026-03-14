import { motion, type Variants } from "framer-motion";
import { type SiteContent } from "../../data/content";
import SectionWrapper from "../ui/SectionWrapper";
import Button from "../ui/Button";

type Props = {
  content: SiteContent["packages"];
};

const cardContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardItem: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

export default function Packages({ content }: Props) {
  return (
    <SectionWrapper id="packages">
      <div className="text-center max-w-2xl mx-auto">
        <p className="text-sm font-semibold tracking-widest uppercase text-brand-purple">
          {content.kicker}
        </p>
        <h2 className="mt-4 font-heading text-3xl md:text-4xl font-semibold tracking-tight text-brand-text">
          {content.heading}
        </h2>
        <p className="mt-3 text-brand-text/70">{content.subheading}</p>
      </div>

      <motion.div
        className="mt-12 grid gap-6 md:grid-cols-3 md:items-center"
        variants={cardContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
      >
        {content.items.map((pkg) =>
          pkg.featured ? (
            <motion.div
              key={pkg.tier}
              variants={cardItem}
              className="relative rounded-3xl bg-brand-purple p-8 shadow-xl md:scale-[1.04]"
            >
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="rounded-full bg-brand-accent px-3 py-1 text-xs font-semibold text-brand-purple-dark">
                  Most popular
                </span>
              </div>
              <div className="text-sm font-semibold text-white/60">{pkg.tier}</div>
              <div className="mt-2 font-heading text-2xl font-semibold text-white">{pkg.name}</div>
              <div className="mt-3 font-heading text-xl font-semibold text-brand-accent">
                {pkg.price}
              </div>
              <div className="mt-1 text-xs text-white/50">{pkg.timeline}</div>
              <ul className="mt-6 space-y-3 text-sm text-white/80">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex gap-3">
                    <span className="mt-0.5 text-brand-accent shrink-0">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button variant="white" href="#intake" className="w-full">
                  Book a Call
                </Button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key={pkg.tier}
              variants={cardItem}
              className="rounded-3xl border border-brand-purple/20 bg-brand-bg p-6 shadow-sm"
            >
              <div className="text-sm font-semibold text-brand-text/60">{pkg.tier}</div>
              <div className="mt-2 font-heading text-2xl font-semibold text-brand-text">
                {pkg.name}
              </div>
              <div className="mt-3 font-heading text-lg font-semibold text-brand-purple">
                {pkg.price}
              </div>
              <div className="mt-1 text-xs text-brand-text/40">{pkg.timeline}</div>
              <ul className="mt-6 space-y-3 text-sm text-brand-text/70">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex gap-3">
                    <span className="mt-0.5 text-brand-purple/50 shrink-0">—</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button variant="outline" href="#intake" className="w-full">
                  Book a Call
                </Button>
              </div>
            </motion.div>
          )
        )}
      </motion.div>

      <p className="mt-8 text-center text-xs text-brand-text/40">{content.priceNote}</p>
    </SectionWrapper>
  );
}
