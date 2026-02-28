import { motion, type Variants } from "framer-motion";

export default function App() {
 const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};
  return (
    <div className="min-h-screen bg-zinc-400 text-zinc-900">
      {/* Header */}
      <header className="border-b">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <img src="/logo.png" alt="HandBuilt Digital logo" className="h-36 md:h-48 lg:h-56 w-auto"/>
          <a
            href="#intake"
            className="rounded-xl bg-zinc-200 px-4 py-2 text-sm font-semibold text-zinc-800 hover:opacity-90"
          >
            Get a Quote
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 py-14 bg-zinc-400">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl text-zinc-900">
              Hand-Coded websites built by a human.
            </h1>
            <p className="mt-4 text-lg text-zinc-600 text-center">
              Crafted. Not generated. Designed to earn customer trust, explain your exceptional work clearly,
              and get customers to contact you.
            </p>

            <div className="mt-6 flex flex-wrap gap-3 justify-center">
              <a
                href="tel:+12707765323"
                className="rounded-xl bg-zinc-900 px-5 py-3 text-sm font-semibold text-zinc-300 hover:opacity-90"
              >
                Call now
              </a>
              <a
                href="#packages"
                className="rounded-xl border border-zinc-500 px-5 py-3 text-sm font-semibold text-zinc-900 hover:bg-zinc-300"
              >
                See packages
              </a>
            </div>

            <div className="mt-6 text-sm text-zinc-500 text-center">
              No generic templates. No stock photos. Just a website that reflects real work.
            </div>
          </div>

          <div className="rounded-3xl border bg-zinc-300 p-6 shadow-sm">
            <div className="text-sm font-semibold text-zinc-700">What sets HandBuilt Digital apart</div>
            <ul className="mt-4 space-y-3 text-sm text-zinc-600">
              <li className="flex gap-2">
                <span className="mt-0.5">✓</span>
                <span>You work directly with me, no handoff confusion</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-0.5">✓</span>
                <span>Websites inspired by personal experience, not specs</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-0.5">✓</span>
                <span>Every build is started and finished with intent</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-0.5">✓</span>
                <span>Built for real customers, not algorithms</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <motion.section 
      variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: "-80px" }}
      className="border-t bg-zinc-300">
  <div className="mx-auto max-w-5xl px-6 py-14">
    <div className="max-w-2xl">
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
        What every HandBuilt Digital site includes
      </h2>
      <p className="mt-3 text-zinc-600">
        No matter the package, every site is built with the same care,
        intention, and respect for your business.
      </p>
    </div>

    <motion.div className="mt-10 grid gap-6 sm:grid-cols-2 "  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}>
      {[
        {
          title: "Personalized care & discovery",
          desc: "I take the time to understand your business, your customers, how you work and what sets you apart.",
        },
        {
          title: "Clear brand presence online",
          desc: "Your site is designed to establish or refine your brand so it looks credible, consistent, and trustworthy the moment someone lands on it.",
        },
        {
          title: "Built-in intake & contact flow",
          desc: "Every site includes a clear intake or contact form so potential customers know exactly how to reach you and what to expect next.",
        },
        {
          title: "Educational service sections",
          desc: "Your services are explained in plain language so customers understand what you do, who it’s for, and why it matters — before they call.",
        },
        {
          title: "Photo gallery or visual proof",
          desc: "When available, real photos of your work are used to build trust and show quality — not stock images that prove nothing.",
        },
        {
          title: "Featured reviews & credibility signals",
          desc: "Testimonials, reviews, or certifications are highlighted to reinforce your reputation and reduce hesitation.",
        },
        {
          title: "Mobile-first, responsive design",
          desc: "Your site is built to look great and function properly on phones, tablets, and desktops — where most customers actually view it.",
        },
        {
          title: "Basic SEO & performance setup",
          desc: "Pages are structured cleanly so search engines and customers can understand your business, services, and location.",
        },
      ].map((item) => (
        <div
          key={item.title}
          className="rounded-2xl border border-zinc-200 bg-zinc-100 p-6 hover:bg-zinc-200"
        >
          <h3 className="font-semibold text-zinc-900">{item.title}</h3>
          <p className="mt-2 text-sm text-zinc-600">{item.desc}</p>
        </div>
      ))}
    </motion.div>

    <div className="mt-10 max-w-2xl text-sm text-zinc-500">
      Every site is built intentionally — not rushed, not automated, and not
      handed off until it reflects the quality of your work.
    </div>
  </div>
</motion.section>

      {/* Packages */}
      <motion.section id="packages" className="border-t bg-zinc-100" 
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: "-80px" }}
>
        <div className="mx-auto max-w-5xl px-6 py-14">
          <h2 className="text-2xl font-semibold tracking-tight">Packages</h2>
          <p className="mt-2 text-zinc-600">
            Clear packages. Clear timeline. Clear payment structure.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border p-6 shadow-sm hover:bg-zinc-300">
              <div className="text-sm font-semibold text-zinc-700">Foundation</div>
              <div className="mt-2 text-2xl font-semibold">Landing Page</div>
              <ul className="mt-4 space-y-3 text-sm text-zinc-600">
  <li className="flex gap-3">
    <span className="mt-1 text-zinc-400">—</span>
    <span>1-page site with intake form</span>
  </li>
  <li className="flex gap-3">
    <span className="mt-1 text-zinc-400">—</span>
    <span>Crafted to build trust and educate clients</span>
  </li>
  <li className="flex gap-3">
    <span className="mt-1 text-zinc-400">—</span>
    <span>Clear service descriptions to save you time</span>
  </li>
  <li className="flex gap-3">
    <span className="mt-1 text-zinc-400">—</span>
    <span>Basic SEO so customers can find you</span>
  </li>
</ul>
            </div>

            <div className="rounded-3xl border p-6 shadow-sm hover:bg-zinc-300">
              <div className="text-sm font-semibold text-zinc-700">Story Builder</div>
              <div className="mt-2 text-2xl font-semibold">Multi-Page</div>
             <ul className="mt-4 space-y-3 text-sm text-zinc-600">
  <li className="flex gap-3">
    <span className="mt-1 text-zinc-400">—</span>
    <span>3–5 pages with intake form</span>
  </li>
  <li className="flex gap-3">
    <span className="mt-1 text-zinc-400">—</span>
    <span>Google reviews connected if available</span>
  </li>
  <li className="flex gap-3">
    <span className="mt-1 text-zinc-400">—</span>
    <span>Dedicated pages to explain your work and build trust</span>
  </li>
  <li className="flex gap-3">
    <span className="mt-1 text-zinc-400">—</span>
    <span>Clear navigation and structure with SEO in mind</span>
  </li>
</ul>
            </div>

            <div className="rounded-3xl border p-6 shadow-sm hover:bg-zinc-300">
              <div className="text-sm font-semibold text-zinc-700">Authority</div>
              <div className="mt-2 text-2xl font-semibold">Custom Build</div>
              <ul className="mt-4 space-y-2 text-sm text-zinc-600">
                <li className="flex gap-3">
    <span className="mt-1 text-zinc-400">—</span>
    <span>Custom scope over 5 pages</span>
  </li>
  <li className="flex gap-3">
    <span className="mt-1 text-zinc-400">—</span>
    <span>Integrations, dashboards, or portals to grow with your business</span>
  </li>
  <li className="flex gap-3">
    <span className="mt-1 text-zinc-400">—</span>
    <span>Priority planning and deeper collaboration</span>
  </li>
  <li className="flex gap-3">
    <span className="mt-1 text-zinc-400">—</span>
    <span>Designed for complex businesses or online retail</span>
  </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Process */}
      <motion.section className="border-t bg-zinc-100" 
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: "-80px" }}
  
>
        <div className="mx-auto max-w-5xl px-6 py-14">
          <h2 className="text-2xl font-semibold tracking-tight">How it works</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-4">
            {[
              ["1", "Discovery", "We learn your business, customers, and goals."],
              ["2", "Build", "I build the site to match your story and services."],
              ["3", "Approval", "Walkthrough + one round of reasonable revisions."],
              ["4", "Launch", "Final payment → go live and start connecting."],
            ].map(([step, title, desc]) => (
              <div key={step} className="rounded-3xl border bg-zinc-50 p-6 shadow-sm hover:bg-zinc-300">
                <div className="text-sm font-semibold text-zinc-500">Step {step}</div>
                <div className="mt-2 font-semibold">{title}</div>
                <div className="mt-2 text-sm text-zinc-600">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Intake Form */}
      <motion.section id="intake" className="border-t bg-zinc-200" 
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: "-80px" }}
  
>
        <div className="mx-auto max-w-5xl px-6 py-14">
          <h2 className="text-2xl font-semibold tracking-tight">Project intake</h2>
          <p className="mt-2 text-zinc-600">
            Fill this out and I’ll reach out to schedule a discovery call.
          </p>

          <div className="mt-8 rounded-3xl border p-6 shadow-sm bg-zinc-100">
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
                <Field label="Trade / Industry" name="industry" placeholder="HVAC, Esthetician, Plumber, Photographer..." required />
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
                placeholder="Example: residential installs, threading, maintenance plans..."
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
                placeholder="Links, competitors, photos you have, etc."
              />

              <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                <div className="text-xs text-zinc-500">
                  Submissions go to Netlify Forms. No spammy marketing.
                </div>
                <button
                  type="submit"
                  className="rounded-xl bg-zinc-900 px-5 py-3 text-sm font-semibold text-white hover:opacity-90"
                >
                  Submit intake
                </button>
              </div>
            </form>
          </div>
        </div>
      </motion.section>
      <motion.section className="border-t bg-zinc-300" 
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: "-80px" }}
  
>
  <div className="mx-auto max-w-5xl px-6 py-16">
    <div className="grid gap-10 md:grid-cols-2 md:items-center">
      
      {/* Photo */}
      <div>
        <img
          src="/about-me.webp"
          alt="Jodie, founder of HandBuilt Digital"
          className="w-full rounded-2xl object-cover"
        />
      </div>

      {/* Text */}
      <div className="max-w-md">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-900">
          Why HandBuilt Digital exists
        </h2>

        <p className="mt-4 text-zinc-700">
          Hi! Im Jodie. A hands on entrepreneur of over nine years in the automotive industry. Marketing for 
          our company has evolved over the years from word of mouth, to social media 
          and with the expansion of our business the need for a website became aparent. 
          I tried multiple plug and play building sites and even hired an agency that produced what
          felt like another stock website that didn't reflect the exceptional work we were doing in the shop.
          I noticed we weren't the only small business struggling with this, many of our customers and entrepenurial friends
          encountered the same problem. 
        </p>

        <p className="mt-4 text-zinc-700">
          HandBuilt Digital exists to fix that. After completing an intensive Software Engineering program
          with the intention of improving Downey Auto Spas online presence, I realized I wanted to be 
          able to offer the same intential work to any small business that wants to truly capture their brand. 
          I build sites incrementally and intentionally, learning the business first and designing around real
          people, real services, and real goals.
        </p>

        <p className="mt-4 text-zinc-700">
          No shortcuts. No templates. Just thoughtful work, done with care.
        </p>
      </div>

    </div>
  </div>
</motion.section>

      {/* Footer */}
      <footer className="border-t">
        <div className="mx-auto max-w-5xl px-6 py-10 text-sm text-zinc-500">
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
      <span className="text-sm font-semibold text-zinc-700">
        {label} {required ? <span className="text-zinc-400">*</span> : null}
      </span>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm outline-none ring-zinc-200 focus:ring-4"
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
      <span className="text-sm font-semibold text-zinc-700">
        {label} {required ? <span className="text-zinc-400">*</span> : null}
      </span>
      <select
        name={name}
        required={required}
        className="rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm outline-none ring-zinc-200 focus:ring-4"
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
      <span className="text-sm font-semibold text-zinc-700">
        {label} {required ? <span className="text-zinc-400">*</span> : null}
      </span>
      <textarea
        name={name}
        placeholder={placeholder}
        required={required}
        rows={4}
        className="rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm outline-none ring-zinc-200 focus:ring-4"
      />
    </label>
  );
}