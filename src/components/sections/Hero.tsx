import { motion, type Variants } from "framer-motion";
import { type SiteContent } from "../../data/content";
import Button from "../ui/Button";

type Props = {
  content: SiteContent["hero"];
};

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Hero({ content }: Props) {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20 md:py-28">
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="max-w-3xl"
      >
        <motion.p
          variants={item}
          className="text-sm font-semibold tracking-widest uppercase text-brand-purple"
        >
          {content.kicker}
        </motion.p>

        <motion.h1
          variants={item}
          className="mt-5 font-heading text-5xl md:text-6xl font-semibold leading-tight tracking-tight text-brand-text"
        >
          {content.headline}
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 text-lg md:text-xl text-brand-text/70 max-w-2xl leading-relaxed"
        >
          {content.subheadline}
        </motion.p>

        <motion.div variants={item} className="mt-8 flex flex-wrap gap-4">
          <Button href={content.ctaPrimary.href}>{content.ctaPrimary.label}</Button>
          <Button variant="outline" href={content.ctaSecondary.href}>
            {content.ctaSecondary.label}
          </Button>
        </motion.div>

        <motion.ul
          variants={item}
          className="mt-10 flex flex-wrap gap-x-8 gap-y-2 text-sm text-brand-text/50"
        >
          {content.differentiators.map((d) => (
            <li key={d} className="flex items-center gap-2">
              <span className="text-brand-purple font-semibold">✓</span>
              {d}
            </li>
          ))}
        </motion.ul>
      </motion.div>
    </section>
  );
}
