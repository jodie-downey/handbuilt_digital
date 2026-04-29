const steps = [
  {
    number: "01",
    title: "Pick Your Pack",
    description:
      "Choose the pack for your industry — or start with the free Quick Start to see how it works first.",
  },
  {
    number: "02",
    title: "Fill In Your Brackets",
    description:
      "Every prompt has [YOUR BUSINESS NAME], [YOUR SERVICE], [YOUR PHONE NUMBER] — swap them in, nothing else required.",
  },
  {
    number: "03",
    title: "Run It & Use It",
    description:
      "Paste the prompt into ChatGPT, Claude, or Gemini (all free). Get your output. Post it, send it, or save it. Done.",
  },
];

const aiTools = ["ChatGPT", "Claude", "Gemini"];

export default function OEHowItWorks() {
  return (
    <section className="bg-oe-charcoal py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-14">
          <p className="text-xs tracking-[0.2em] uppercase text-oe-gold font-semibold">
            How It Works
          </p>
          <h2 className="mt-3 font-heading text-4xl md:text-5xl text-white">
            You don't need to know how to use AI.
          </h2>
          <p className="mt-4 text-base text-oe-lavender max-w-xl mx-auto">
            You just need to know how to fill in a bracket.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-6 relative">
          {/* Connector line — desktop only */}
          <div className="hidden md:block absolute top-10 left-[calc(16.67%+1rem)] right-[calc(16.67%+1rem)] h-px bg-oe-gold/20" />

          {steps.map((step) => (
            <div key={step.number} className="flex flex-col items-center text-center md:items-start md:text-left">
              <span className="text-6xl font-bold text-oe-gold font-heading leading-none">
                {step.number}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-white">{step.title}</h3>
              <p className="mt-3 text-sm text-white/60 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Compatibility bar */}
        <div className="mt-16 pt-10 border-t border-white/10 text-center">
          <p className="text-xs tracking-[0.2em] uppercase text-white/40 font-semibold mb-5">
            Works with
          </p>
          <div className="flex items-center justify-center gap-6 md:gap-10 flex-wrap">
            {aiTools.map((tool) => (
              <span
                key={tool}
                className="text-xl md:text-2xl font-semibold text-white/70 tracking-tight"
              >
                {tool}
              </span>
            ))}
          </div>
          <p className="mt-4 text-xs text-white/35">
            All free. No paid subscription required.
          </p>
        </div>
      </div>
    </section>
  );
}
