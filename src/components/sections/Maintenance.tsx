import { type SiteContent } from "../../data/content";
import SectionWrapper from "../ui/SectionWrapper";
import Button from "../ui/Button";

type Props = {
  content: SiteContent["maintenance"];
};

export default function Maintenance({ content }: Props) {
  return (
    <SectionWrapper>
      <div className="grid gap-12 md:grid-cols-2 md:items-start">

        {/* Left — copy */}
        <div>
          <p className="text-sm font-semibold tracking-widest uppercase text-brand-purple">
            {content.kicker}
          </p>
          <h2 className="mt-4 font-heading text-3xl md:text-4xl font-semibold tracking-tight text-brand-text">
            {content.heading}
          </h2>
          <p className="mt-4 text-brand-text/70 leading-relaxed">{content.subheading}</p>

          <ul className="mt-6 space-y-3">
            {content.benefits.map((b) => (
              <li key={b} className="flex gap-3 text-sm text-brand-text/70 leading-relaxed">
                <span className="mt-0.5 text-brand-purple shrink-0">✓</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>

          <p className="mt-6 text-xs text-brand-text/40 leading-relaxed">{content.note}</p>

          <div className="mt-6">
            <Button variant="outline" href={content.cta.href}>
              {content.cta.label}
            </Button>
          </div>
        </div>

        {/* Right — plan tiers */}
        <div className="space-y-3">
          {content.plans.map((plan, i) => (
            <div
              key={plan.name}
              className="flex items-center justify-between rounded-2xl border border-brand-purple/20 bg-brand-bg px-5 py-4"
            >
              <div>
                <p className="font-semibold text-brand-text">{plan.name}</p>
                <p className="mt-0.5 text-xs text-brand-text/50">{plan.bestFor}</p>
              </div>
              <span className="text-xs font-semibold text-brand-purple/50 tracking-widest uppercase">
                {["Basic", "Standard", "Advanced"][i]}
              </span>
            </div>
          ))}
          <p className="pt-2 text-xs text-brand-text/40 leading-relaxed">
            Pricing covered during your discovery call. No long-term contracts required.
          </p>
        </div>

      </div>
    </SectionWrapper>
  );
}
