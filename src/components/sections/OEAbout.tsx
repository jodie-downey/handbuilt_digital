import OECredentialCard from "../ui/OECredentialCard";

const credentials = [
  "Co-owner of a professional detailing & window tinting shop. These prompts run in our business every single day.",
  "4th generation HVAC family. 2nd generation plumbing. Grew up watching trades businesses run from the inside — the emergency calls, the invoice rewrites, the permit headaches. All of it.",
  "Web design & digital systems builder for small operators. Every prompt has been built, tested, and refined across multiple real service businesses.",
];

export default function OEAbout() {
  return (
    <section className="bg-oe-purple py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left — copy */}
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-oe-gold font-semibold">
              Why Trust This?
            </p>
            <h2 className="mt-4 font-heading text-3xl md:text-4xl text-white leading-snug">
              Because it was built inside real businesses.
            </h2>
            <p className="mt-6 text-white/75 text-base leading-relaxed">
              These prompts weren't written in a marketing agency or a content
              studio. They were built by someone running actual service businesses
              — using AI every day for quoting, hiring, pricing, branding, and
              the operational decisions that most operators never have time to get
              right.
            </p>
            <p className="mt-4 text-white/75 text-base leading-relaxed">
              Not theory. Not templates someone copied from a YouTube video. Real
              prompts tested in real businesses.
            </p>
          </div>

          {/* Right — credential cards */}
          <div className="space-y-5">
            {credentials.map((c) => (
              <OECredentialCard key={c}>{c}</OECredentialCard>
            ))}
          </div>
        </div>

        {/* Bottom quote */}
        <div className="mt-14 text-center">
          <p className="text-oe-gold italic text-lg font-heading">
            "Built by an operator. For operators."
          </p>
        </div>
      </div>
    </section>
  );
}
