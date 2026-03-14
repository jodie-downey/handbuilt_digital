import { type SiteContent } from "../../data/content";
import SectionWrapper from "../ui/SectionWrapper";

type Props = {
  content: SiteContent["about"];
};

export default function About({ content }: Props) {
  return (
    <SectionWrapper innerClassName="py-20">
      <div className="grid gap-12 md:grid-cols-2 md:items-center">
        <div>
          <img
            src={content.imageSrc}
            alt={content.imageAlt}
            className="w-full rounded-2xl object-cover"
          />
        </div>

        <div>
          <p className="text-sm font-semibold tracking-widest uppercase text-brand-purple">
            {content.kicker}
          </p>
          <h2 className="mt-4 font-heading text-3xl md:text-4xl font-semibold tracking-tight text-brand-text">
            {content.heading}
          </h2>
          {content.paragraphs.map((p, i) => (
            <p key={i} className="mt-5 text-brand-text/80 leading-relaxed">
              {p}
            </p>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
