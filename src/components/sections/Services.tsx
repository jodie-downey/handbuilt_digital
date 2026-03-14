import { motion, type Variants } from "framer-motion";
import { type SiteContent } from "../../data/content";
import SectionWrapper from "../ui/SectionWrapper";

type Props = {
  content: SiteContent["services"];
};

const cardContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const cardItem: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
};

export default function Services({ content }: Props) {
  return (
    <SectionWrapper id="services">
      <p className="text-sm font-semibold tracking-widest uppercase text-brand-purple">
        {content.kicker}
      </p>
      <h2 className="mt-4 font-heading text-3xl md:text-4xl font-semibold tracking-tight text-brand-text">
        {content.heading}
      </h2>
      <p className="mt-3 text-brand-text/70 max-w-2xl leading-relaxed">{content.subheading}</p>

      <motion.div
        className="mt-12 grid gap-4 sm:grid-cols-2"
        variants={cardContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
      >
        {content.items.map((item) => (
          <motion.div
            key={item.title}
            variants={cardItem}
            className="rounded-2xl border border-brand-purple/20 bg-brand-bg p-6 hover:bg-brand-accent/10 transition-colors"
          >
            <h3 className="font-semibold text-brand-text flex items-center gap-2">
              <span className="text-brand-purple text-xs">✦</span>
              {item.title}
            </h3>
            <p className="mt-2 text-sm text-brand-text/70 leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </motion.div>

      <p className="mt-10 text-sm text-brand-text/50 max-w-2xl leading-relaxed">
        {content.footnote}
      </p>
    </SectionWrapper>
  );
}
