export type OEProduct = {
  id: string;
  title: string;
  subtitle: string;
  price: string;
  accentColor: string;
  bullets: string[];
  tags: string[];
  storeUrl: string;
  badge?: string;
};

export type QuickStartProduct = {
  title: string;
  subtitle: string;
  description: string;
  storeUrl: string;
};

export const quickStart: QuickStartProduct = {
  title: "Operator's Edge Quick Start",
  subtitle: "5 Prompts to Run Your Service Business Smarter",
  description:
    "Not sure where to start? This is it. 6 pages. 5 real prompts. Zero cost.",
  storeUrl: "http://eepurl.com/KAnk-qfZhX",
};

export const oeProducts: OEProduct[] = [
  {
    id: "starter",
    title: "Service Business AI Starter Pack",
    subtitle: "40+ prompts. Every angle of your business.",
    price: "$29",
    accentColor: "#7B5EA7",
    bullets: [
      "Social content for any platform",
      "Quoting, hiring & brand voice tools",
      "Done-for-you prompt library",
    ],
    tags: ["ALL INDUSTRIES"],
    storeUrl: "https://stan.store/operatorsedge/p/ai-prompt-pack-for-service-businesses-",
    badge: "Most Popular",
  },
  {
    id: "auto-shop",
    title: "The Auto Shop Playbook",
    subtitle: "Built for the shop that works harder than it gets credit for.",
    price: "$47",
    accentColor: "#C0202A",
    bullets: [
      "Trust-building content vs. fly-by-night competitors",
      "No-show policy + quote builder with CYA docs",
      "Upsell language that actually converts",
    ],
    tags: ["DETAILING", "CERAMIC", "TINT", "MECHANICAL", "TIRES", "CUSTOM FAB"],
    storeUrl: "https://stan.store/operatorsedge/p/auto-shop-ai-prompts--detailers-mechanics--more",
  },
  {
    id: "trades",
    title: "The Trades Playbook",
    subtitle:
      "The communication and operations system your trade business is missing.",
    price: "$47",
    accentColor: "#1D4ED8",
    bullets: [
      "Change order communication that protects your margin",
      "Multi-phase job quoting with permit cost tracking",
      "Field tech onboarding — tribal knowledge into a system",
    ],
    tags: ["HVAC", "PLUMBING", "ELECTRICAL", "ROOFING", "CONTRACTING", "FLOORING"],
    storeUrl: "https://stan.store/operatorsedge/p/trades-ai-prompts--hvac-plumbing--more",
  },
  {
    id: "chair-studio",
    title: "The Chair & Studio Playbook",
    subtitle: "Stop rebuilding your week from scratch. Stabilize your books.",
    price: "$47",
    accentColor: "#7B5EA7",
    bullets: [
      "Rebooking & retention system",
      "Cancellation policy written in your voice",
      "Rate increase communication that keeps clients",
    ],
    tags: ["HAIR", "NAILS", "TATTOO", "ESTHETICS", "LASH & BROW"],
    storeUrl: "https://stan.store/operatorsedge/p/salon--studio-ai-prompts--hair-skin-nail--art",
  },
  {
    id: "food-business",
    title: "The Food Business Playbook",
    subtitle: "Move as fast as your kitchen does.",
    price: "$47",
    accentColor: "#D4521A",
    bullets: [
      "Location drops, sold-out posts & supplier comms — fast",
      "Full catering proposal + event day checklist",
      "Menu pricing & food cost analysis",
    ],
    tags: ["RESTAURANTS", "FOOD TRUCKS", "CATERING", "SPECIALTY"],
    storeUrl: "https://stan.store/operatorsedge/p/food-business-ai-prompts--mobile--brickmortar",
  },
];
