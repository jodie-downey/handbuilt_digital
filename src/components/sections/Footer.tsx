import { type SiteContent } from "../../data/content";
import Button from "../ui/Button";

type Props = {
  content: SiteContent["footer"];
};

export default function Footer({ content }: Props) {
  return (
    <footer className="border-t border-brand-purple/20 bg-brand-bg">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">

          {/* Brand */}
          <div className="md:col-span-2">
            <p className="font-heading text-xl font-semibold text-brand-text">
              HandBuilt Digital
            </p>
            <p className="mt-3 max-w-sm text-sm text-brand-text/70 leading-relaxed">
              {content.description}
            </p>
            <p className="mt-5 font-heading text-base italic text-brand-purple">
              "{content.tagline}"
            </p>
            <div className="mt-6">
              <Button href="#intake">Book a Discovery Call</Button>
            </div>
          </div>

          {/* Links + contact */}
          <div className="flex flex-col gap-8 sm:flex-row md:flex-col">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-brand-text/40">
                Navigate
              </p>
              <ul className="mt-3 space-y-2">
                {content.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-brand-text/70 hover:text-brand-purple transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-brand-text/40">
                Contact
              </p>
              <ul className="mt-3 space-y-2">
                <li>
                  <a
                    href={content.contact.phoneHref}
                    className="text-sm text-brand-text/70 hover:text-brand-purple transition-colors"
                  >
                    {content.contact.phone}
                  </a>
                </li>
                <li className="text-sm text-brand-text/50">{content.contact.location}</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-brand-purple/10 pt-6 text-xs text-brand-text/30">
          © {new Date().getFullYear()} HandBuilt Digital · {content.contact.location} · Built by a real person.
        </div>
      </div>
    </footer>
  );
}
