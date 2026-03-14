import { motion, type Variants } from "framer-motion";
import { type SiteContent } from "../../data/content";
import SectionWrapper from "../ui/SectionWrapper";

type Props = {
  content: SiteContent["addons"];
};

const cardContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const cardItem: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
};

export default function Addons({ content }: Props) {
  return (
    <SectionWrapper id="addons">
      <p className="text-sm font-semibold tracking-widest uppercase text-brand-purple">
        {content.kicker}
      </p>
      <h2 className="mt-4 font-heading text-3xl md:text-4xl font-semibold tracking-tight text-brand-text">
        {content.heading}
      </h2>
      <p className="mt-3 text-brand-text/70 max-w-2xl leading-relaxed">{content.subheading}</p>

      <motion.div
        className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        variants={cardContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
      >
        {content.items.map((addon) => (
          <motion.div
            key={addon.title}
            variants={cardItem}
            className="rounded-2xl border border-brand-purple/20 bg-brand-bg p-5 hover:bg-brand-accent/10 transition-colors"
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="font-semibold text-brand-text">{addon.title}</h3>
              <span className="shrink-0 text-sm font-semibold text-brand-purple">{addon.price}</span>
            </div>
            <p className="mt-2 text-sm text-brand-text/70 leading-relaxed">{addon.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
