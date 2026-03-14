import { motion, type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

type Props = {
  id?: string;
  className?: string;
  innerClassName?: string;
  children: React.ReactNode;
};

export default function SectionWrapper({
  id,
  className = "",
  innerClassName = "",
  children,
}: Props) {
  return (
    <motion.section
      id={id}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className={`border-t border-brand-purple/20 bg-brand-bg ${className}`}
    >
      <div className={`mx-auto max-w-5xl px-6 py-14 ${innerClassName}`}>{children}</div>
    </motion.section>
  );
}
