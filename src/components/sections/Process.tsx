import { motion, type Variants } from "framer-motion";
import { type SiteContent } from "../../data/content";
import SectionWrapper from "../ui/SectionWrapper";

type Props = {
  content: SiteContent["process"];
};

const cardContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardItem: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
};

export default function Process({ content }: Props) {
  return (
    <SectionWrapper id="process">
      <p className="text-sm font-semibold tracking-widest uppercase text-brand-purple">
        {content.kicker}
      </p>
      <h2 className="mt-4 font-heading text-3xl md:text-4xl font-semibold tracking-tight text-brand-text">
        {content.heading}
      </h2>

      <motion.div
        className="mt-12 grid gap-8 md:grid-cols-4"
        variants={cardContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
      >
        {content.steps.map(({ step, title, desc }) => (
          <motion.div key={step} variants={cardItem}>
            <div className="font-heading text-7xl font-bold leading-none text-brand-purple/10 select-none">
              {step}
            </div>
            <div className="mt-3 font-semibold text-brand-text">{title}</div>
            <div className="mt-2 text-sm text-brand-text/70 leading-relaxed">{desc}</div>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
