import { trackPurchaseClick } from "../../lib/tracking";
import type { OEProduct } from "../../data/oeProducts";

type Props = OEProduct;

export default function OEProductCard({
  title,
  subtitle,
  price,
  accentColor,
  bullets,
  tags,
  storeUrl,
  badge,
}: Props) {
  return (
    <div className="relative flex flex-col rounded-2xl bg-white border border-gray-200 hover:border-oe-gold hover:shadow-xl transition-all duration-200 overflow-hidden group">
      {/* Accent color bar */}
      <div className="h-1 w-full shrink-0" style={{ backgroundColor: accentColor }} />

      {badge && (
        <span className="absolute top-4 right-4 text-xs font-bold uppercase tracking-wider text-oe-gold border border-oe-gold rounded-full px-2.5 py-0.5">
          {badge}
        </span>
      )}

      <div className="flex flex-col flex-1 p-6">
        <h3 className="text-base font-semibold text-oe-text leading-snug pr-20">{title}</h3>
        <p className="mt-1 text-2xl font-bold text-oe-charcoal">{price}</p>
        <p className="mt-1.5 text-sm text-oe-text/60 leading-relaxed">{subtitle}</p>

        <ul className="mt-4 space-y-2 flex-1">
          {bullets.map((b) => (
            <li key={b} className="flex items-start gap-2 text-sm text-oe-text/80">
              <span className="text-oe-gold font-bold mt-0.5 shrink-0">✓</span>
              {b}
            </li>
          ))}
        </ul>

        <a
          href={storeUrl}
          onClick={() => trackPurchaseClick(title)}
          className="mt-6 block text-center rounded-xl bg-oe-gold text-oe-charcoal font-semibold py-3 px-4 text-sm hover:bg-[#b8973d] transition-colors"
        >
          Get Instant Playbook Access
        </a>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium uppercase tracking-wide text-oe-text/50 bg-oe-text/5 rounded-full px-2.5 py-0.5"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
