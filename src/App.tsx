import './App.css'

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Header */}
      <header className="border-b">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <img src="/logo.png" alt="HandBuilt Digital logo" className="h-30 w-auto"/>
          <a
            href="#intake"
            className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
          >
            Get a Quote
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Human-built websites for trades.
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Crafted. Not generated. Built to earn trust, explain your work clearly,
              and get customers to call.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#intake"
                className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:opacity-90"
              >
                Start with an intake
              </a>
              <a
                href="#packages"
                className="rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold hover:bg-slate-50"
              >
                See packages
              </a>
            </div>

            <div className="mt-6 text-sm text-slate-500">
              No traffic promises. No fluff. Just a site that reflects real work.
            </div>
          </div>

          <div className="rounded-3xl border bg-slate-50 p-6 shadow-sm">
            <div className="text-sm font-semibold text-slate-700">What you get</div>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li className="flex gap-2">
                <span className="mt-0.5">✓</span>
                <span>Clear service messaging + “why you” trust signals</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-0.5">✓</span>
                <span>Fast loading, mobile-first design</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-0.5">✓</span>
                <span>Lead intake form that lands in my inbox/dashboard</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-0.5">✓</span>
                <span>Launch-ready setup on Netlify with HTTPS</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section id="packages" className="border-t bg-white">
        <div className="mx-auto max-w-5xl px-6 py-14">
          <h2 className="text-2xl font-semibold tracking-tight">Packages</h2>
          <p className="mt-2 text-slate-600">
            Clear scope. Clear timeline. Clear payment structure.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border p-6 shadow-sm">
              <div className="text-sm font-semibold text-slate-700">Foundation</div>
              <div className="mt-2 text-2xl font-semibold">Landing Page</div>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                <li>• 1-page site built for calls</li>
                <li>• Services + trust signals</li>
                <li>• Intake form</li>
                <li>• Basic on-page SEO</li>
              </ul>
            </div>

            <div className="rounded-3xl border p-6 shadow-sm">
              <div className="text-sm font-semibold text-slate-700">Story Builder</div>
              <div className="mt-2 text-2xl font-semibold">3–5 Pages</div>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                <li>• Home + Services + About + Contact</li>
                <li>• Gallery/testimonials (if provided)</li>
                <li>• Intake form</li>
                <li>• Clear navigation + structure</li>
              </ul>
            </div>

            <div className="rounded-3xl border p-6 shadow-sm">
              <div className="text-sm font-semibold text-slate-700">Authority</div>
              <div className="mt-2 text-2xl font-semibold">Custom Build</div>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                <li>• Custom scope (written)</li>
                <li>• Integrations / dashboards / portals</li>
                <li>• Backend options when needed</li>
                <li>• Designed to scale</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="border-t bg-slate-50">
        <div className="mx-auto max-w-5xl px-6 py-14">
          <h2 className="text-2xl font-semibold tracking-tight">How it works</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-4">
            {[
              ["1", "Discovery", "We learn your business, customers, and goals."],
              ["2", "Build", "I build the site to match your story and services."],
              ["3", "Approval", "Walkthrough + one round of reasonable revisions."],
              ["4", "Launch", "Final payment → go live with HTTPS."],
            ].map(([step, title, desc]) => (
              <div key={step} className="rounded-3xl border bg-white p-6 shadow-sm">
                <div className="text-sm font-semibold text-slate-500">Step {step}</div>
                <div className="mt-2 font-semibold">{title}</div>
                <div className="mt-2 text-sm text-slate-600">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intake Form */}
      <section id="intake" className="border-t bg-white">
        <div className="mx-auto max-w-5xl px-6 py-14">
          <h2 className="text-2xl font-semibold tracking-tight">Project intake</h2>
          <p className="mt-2 text-slate-600">
            Fill this out and I’ll reach out to schedule a discovery call.
          </p>

          <div className="mt-8 rounded-3xl border p-6 shadow-sm">
            <form
              name="intake"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              action="/thanks"
              className="grid gap-5"
            >
              {/* Netlify form-name */}
              <input type="hidden" name="form-name" value="intake" />

              {/* Honeypot */}
              <p className="hidden">
                <label>
                  Don’t fill this out: <input name="bot-field" />
                </label>
              </p>

              <div className="grid gap-5 md:grid-cols-2">
                <Field label="Full Name" name="fullName" placeholder="Your name" required />
                <Field label="Business Name" name="businessName" placeholder="Company name" required />
                <Field label="Trade / Industry" name="industry" placeholder="HVAC, tint, plumbing..." required />
                <Field label="Service Area" name="serviceArea" placeholder="City / counties" required />
                <Field label="Email" name="email" placeholder="you@business.com" type="email" required />
                <Field label="Phone" name="phone" placeholder="(555) 555-5555" type="tel" required />
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <Select
                  label="Package Interest"
                  name="package"
                  options={["Landing Page", "3–5 Page Website", "Custom Build"]}
                  required
                />
                <Select
                  label="Timeline"
                  name="timeline"
                  options={["ASAP", "2–4 weeks", "1–2 months", "Not sure yet"]}
                  required
                />
              </div>

              <TextArea
                label="What services do you want highlighted?"
                name="services"
                placeholder="Example: residential installs, commercial work, maintenance plans..."
                required
              />

              <TextArea
                label="What makes you different?"
                name="differentiator"
                placeholder="Example: family-owned, 20+ years, same-day service, warranties..."
              />

              <TextArea
                label="Anything else I should know?"
                name="notes"
                placeholder="Links, competitors you like, photos you have, etc."
              />

              <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                <div className="text-xs text-slate-500">
                  Submissions go to Netlify Forms. No spammy marketing promises.
                </div>
                <button
                  type="submit"
                  className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:opacity-90"
                >
                  Submit intake
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="mx-auto max-w-5xl px-6 py-10 text-sm text-slate-500">
          © {new Date().getFullYear()} HandBuilt Digital — Crafted. Not generated.
        </div>
      </footer>
    </div>
  );
}

function Field({
  label,
  name,
  placeholder,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="grid gap-2">
      <span className="text-sm font-semibold text-slate-700">
        {label} {required ? <span className="text-slate-400">*</span> : null}
      </span>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none ring-slate-200 focus:ring-4"
      />
    </label>
  );
}

function Select({
  label,
  name,
  options,
  required = false,
}: {
  label: string;
  name: string;
  options: string[];
  required?: boolean;
}) {
  return (
    <label className="grid gap-2">
      <span className="text-sm font-semibold text-slate-700">
        {label} {required ? <span className="text-slate-400">*</span> : null}
      </span>
      <select
        name={name}
        required={required}
        className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none ring-slate-200 focus:ring-4"
        defaultValue=""
      >
        <option value="" disabled>
          Select one
        </option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </label>
  );
}

function TextArea({
  label,
  name,
  placeholder,
  required = false,
}: {
  label: string;
  name: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <label className="grid gap-2">
      <span className="text-sm font-semibold text-slate-700">
        {label} {required ? <span className="text-slate-400">*</span> : null}
      </span>
      <textarea
        name={name}
        placeholder={placeholder}
        required={required}
        rows={4}
        className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none ring-slate-200 focus:ring-4"
      />
    </label>
  );
}