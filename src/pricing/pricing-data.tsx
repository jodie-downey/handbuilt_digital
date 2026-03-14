export type Tier = {
  id: string;
  name: string;
  priceFrom: number;
  timeline: string;
  tagline: string;
  bestFor: string;
  includes: string[];
  popular?: boolean;
};

export type AddOn = {
  id: string;
  name: string;
  priceFrom: number;
  note?: string;
  tag?: string;
};

export const PRICING = {
  tiers: [
    {
      id: "launch",
      name: "The Foundation : Landing Page",
      priceFrom: 750,
      timeline: "7–14 days",
      tagline: "A bold, clean landing page that makes you look established.",
      bestFor: "New businesses, side hustles, service pros who need leads fast.",
      includes: [
        "One-page site (high-converting sections)",
        "Clear services breakdown",
        "Clear Call to Action for customers",
        "Contact form with email notifications + basic spam protection",
        "3-5 Featured Reviews to establish credibility",
        "Mobile-first responsive design",
        "Basic on page SEO + metadata",
        "Performance pass (fast load)",
      ],
      popular:true,
    },
    {
      id: "business",
      name: "The Story Builder ",
      priceFrom: 1550,
      timeline: "2–4 weeks",
      tagline: "The full online presence: pages, services, trust, and clarity.",
      bestFor: "Established businesses ready to stand out, grow and rank locally. Small catalog online retail.",
      includes: [
        "Up to 5 pages (Home, Services, About, Contact, Pricing, FAQ , etc)",
        "Clear services breakdown",
        "Gallery of work and reviews to establish trust",
        "Clear Call to Action on Home Page",
        "Contact form accessible on multiple pages with email notifications",
        "Analytics setup for customer tracking",
        "Google maps/reviews integration if available",
        "Conversion-focused layout designed to get customers to contact you",
        "Content guidance",
        "On-page SEO for local search intent",
        "Responsive design for mobile, tablet and web viewers"
      ],
      popular: true,
    },
    {
      id: "signature",
      name: "The Authority",
      priceFrom: 3600,
      timeline: "4–8 weeks",
      tagline: "A fully custom site built to scale with your business",
      bestFor: "Brands who want premium design, integrations, and long-term growth. Large catalog online retail.",
      includes: [
        "5 pages or more",
        "Advanced service breakdowns",
        "Custom component library + design system",
        "Advanced sections (blogs, pricing, lead magnets)",
        "Integrations (booking, CRM, email capture)",
        "SEO + performance polish with analytic dashboard",
        "Google maps/reviews integration if available",
      ],
    },
  ],
  addOns: [
    { id: "copy", name: "Copywriting Polish", priceFrom: 250, note: "Tighten messaging + clarity", tag: "Big ROI" },
    { id: "seo", name: "Local SEO Boost", priceFrom: 350, note: "GBP setup + local optimization" },
    { id: "booking", name: "Booking Integration", priceFrom: 150, note: "Jobber, Calendly, Square, etc." },
    { id: "blog", name: "Blog Setup", priceFrom: 300, note: "Template + structure" },
    { id: "leadmag", name: "Lead Magnet + Email Capture", priceFrom: 200 },
    { id: "care", name: "Monthly Care Plan", priceFrom: 79, note: "Updates + monitoring (monthly)", tag: "Popular" },
  ],
  disclaimers: [
    "Pricing is based on scope, content readiness, and integrations.",
    "You’ll always get a clear quote before work begins — no surprise invoices.",
    "Payment plans available for Growth + Signature.",
    "Cash discount and bartering available"
  ],
};