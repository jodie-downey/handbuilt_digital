import { type SiteContent } from "../../data/content";
import SectionWrapper from "../ui/SectionWrapper";


type Props = {
  content: SiteContent["contact"];
};

export default function Contact({ content }: Props) {
  return (
    <SectionWrapper id="intake">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold tracking-widest uppercase text-brand-purple">
          {content.kicker}
        </p>
        <h2 className="mt-4 font-heading text-3xl md:text-4xl font-semibold tracking-tight text-brand-text">
          {content.heading}
        </h2>
        <p className="mt-3 text-brand-text/70 leading-relaxed">{content.subheading}</p>
      </div>

      <div className="mt-10 rounded-3xl border border-brand-purple/20 p-6 md:p-8 bg-brand-bg">
        <form
          name="intake"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          action="/thanks"
          className="grid gap-5"
          encType="application/x-www-form-urlencoded"
        >
          <input type="hidden" name="form-name" value="intake" />

          <p className="hidden">
            <label>
              Don't fill this out: <input name="bot-field" />
            </label>
          </p>

          <div className="grid gap-5 md:grid-cols-2">
            <Field label="Full Name" name="fullName" placeholder="Your name" required />
            <Field label="Business Name" name="businessName" placeholder="Company name" required />
            <Field
              label="Trade / Industry"
              name="industry"
              placeholder="HVAC, Esthetician, Plumber, Photographer..."
              required
            />
            <Field label="Service Area" name="serviceArea" placeholder="City / counties" required />
            <Field
              label="Email"
              name="email"
              placeholder="you@business.com"
              type="email"
              required
            />
            <Field
              label="Phone"
              name="phone"
              placeholder="(555) 555-5555"
              type="tel"
              required
            />
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
            <div className="text-xs text-brand-text/50">{content.formNote}</div>
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-xl bg-brand-purple-dark px-6 py-3 text-sm font-semibold text-white cursor-pointer hover:opacity-90 transition-opacity shadow-sm"
            >
              {content.submitLabel}
            </button>
          </div>
        </form>
      </div>
    </SectionWrapper>
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
      <span className="text-sm font-semibold text-brand-text">
        {label} {required ? <span className="text-brand-text/40">*</span> : null}
      </span>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="rounded-xl border border-brand-purple/30 bg-white px-4 py-3 text-sm outline-none ring-brand-accent/30 focus:ring-4"
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
      <span className="text-sm font-semibold text-brand-text">
        {label} {required ? <span className="text-brand-text/40">*</span> : null}
      </span>
      <select
        name={name}
        required={required}
        className="rounded-xl border border-brand-purple/30 bg-white px-4 py-3 text-sm outline-none ring-brand-accent/30 focus:ring-4"
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
      <span className="text-sm font-semibold text-brand-text">
        {label} {required ? <span className="text-brand-text/40">*</span> : null}
      </span>
      <textarea
        name={name}
        placeholder={placeholder}
        required={required}
        rows={4}
        className="rounded-xl border border-brand-purple/30 bg-white px-4 py-3 text-sm outline-none ring-brand-accent/30 focus:ring-4"
      />
    </label>
  );
}
