const problems = [
  "Posting when you remember to",
  "Quoting from the gut",
  "Writing everything from scratch",
  "No real hiring or onboarding system",
  "Slow days with no plan",
  "Confirmations that never get sent",
];

const solutions = [
  "Content on autopilot",
  "Prompts that price for profit",
  "Templates ready to copy",
  "Onboarding docs built in minutes",
  "Slow day promotion — written and ready",
  "Confirmations that run themselves",
];

export default function OEProblem() {
  return (
    <section className="bg-oe-cream py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section label */}
        <p className="text-xs tracking-[0.2em] uppercase text-oe-gold font-semibold mb-10 text-center md:text-left">
          Sound Familiar?
        </p>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left — The Problem */}
          <div>
            <h2 className="font-heading text-3xl md:text-4xl text-oe-text leading-snug">
              You're running your business between client calls, during lunch,
              and on your phone at 10pm.
            </h2>

            <ul className="mt-8 space-y-3">
              {problems.map((p) => (
                <li key={p} className="flex items-start gap-3 text-base text-oe-text/75">
                  <span className="text-red-500 font-bold mt-0.5 shrink-0 text-lg leading-none">
                    ✕
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </div>

          {/* Right — The Solution */}
          <div className="bg-oe-purple rounded-2xl p-8">
            <h3 className="font-heading text-2xl md:text-3xl text-oe-gold leading-snug">
              AI changes all of this.
            </h3>

            <ul className="mt-6 space-y-3">
              {solutions.map((s) => (
                <li key={s} className="flex items-start gap-3 text-base text-white/90">
                  <span className="text-oe-gold font-bold mt-0.5 shrink-0">✓</span>
                  {s}
                </li>
              ))}
            </ul>

            <p className="mt-8 text-sm text-oe-gold italic">
              Fill in your brackets. Run it. Done.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
