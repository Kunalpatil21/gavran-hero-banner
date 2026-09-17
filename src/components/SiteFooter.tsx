import { Phone, Mail, MapPin, ChevronRight, Youtube, Facebook, Instagram, MessageCircle } from "lucide-react";
import logoAsset from "@/assets/dwit-logo.png";

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Training", href: "/training" },
  { label: "Contract Farming", href: "/contract-farming" },
  { label: "Franchise", href: "/franchise" },
  { label: "Contact Us", href: "/contact" },
];

const SOCIALS = [
  { icon: Youtube, label: "YouTube", href: "https://www.youtube.com" },
  { icon: Facebook, label: "Facebook", href: "https://www.facebook.com" },
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com" },
  { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/919226466497" },
];

function LinkColumn({ title, links }: { title: string; links: Array<{ label: string; href: string }> }) {
  return (
    <div>
      <h3 className="font-display text-lg font-bold text-forest">{title}</h3>
      <span className="mt-2 block h-[3px] w-9 rounded-full bg-gold" />
      <ul className="mt-3 space-y-2">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="group inline-flex items-center gap-2 text-[15px] text-forest/75 transition-colors duration-300 hover:text-gold-deep"
            >
              <ChevronRight className="h-3.5 w-3.5 text-gold-deep transition-transform duration-300 group-hover:translate-x-0.5" />
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function SiteFooter() {
  return (
    <footer id="contact" className="bg-cream">
      <div className="mx-auto max-w-[1400px] px-5 py-10 sm:px-8 lg:px-12 lg:py-12">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.7fr)_minmax(240px,0.8fr)] lg:gap-16">
          {/* Brand */}
          <div className="min-w-0 lg:border-r lg:border-forest/10 lg:pr-16">
            <div className="flex items-center gap-3">
              <img src={logoAsset} alt="DWIT Farm logo" width={64} height={64} className="h-14 w-14" />
              <div>
                <p className="font-display text-3xl font-extrabold leading-none text-forest">Dwit Farm</p>
                <p className="mt-1.5 text-[15px] font-medium text-gold-deep">From Farm. For Farmers.</p>
                <span className="mt-2 block h-[3px] w-10 rounded-full bg-gold" />
              </div>
            </div>

            <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-forest/75">
              Dwit Farm is dedicated to promoting sustainable poultry farming through practical
              knowledge, training and the right guidance for a better tomorrow.
            </p>

            <ul className="mt-5 grid gap-x-8 gap-y-3 sm:grid-cols-2">
              <li className="flex items-center gap-3">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-forest text-cream">
                  <Phone className="h-4 w-4" />
                </span>
                <a href="tel:9226466497" className="text-[15px] text-forest/85 hover:text-gold-deep">
                  9226466497
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-forest text-cream">
                  <Mail className="h-4 w-4" />
                </span>
                <a
                  href="mailto:dwitfarm@gmail.com"
                  className="text-[15px] text-forest/85 hover:text-gold-deep"
                >
                  dwitfarm@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3 sm:col-span-2">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-forest text-cream">
                  <MapPin className="h-4 w-4" />
                </span>
                <p className="text-[15px] leading-snug text-forest/85">
                  At/Post: M. Po. Khed, Tal. Vikramgad,
                  <br />
                  Dist. Palghar, Maharashtra, India
                </p>
              </li>
            </ul>

            <div className="mt-6 border-t border-forest/10 pt-5">
              <h3 className="font-display text-lg font-bold text-forest">Follow Us</h3>
              <span className="mt-2 block h-[3px] w-9 rounded-full bg-gold" />
              <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-lg text-[15px] leading-relaxed text-forest/75">
                  Stay connected for the latest updates, training videos and farming tips.
                </p>
                <ul className="flex shrink-0 flex-nowrap gap-2.5">
                  {SOCIALS.map(({ icon: Icon, label, href }) => (
                    <li key={label}>
                      <a
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={label}
                        className="grid h-10 w-10 place-items-center rounded-full border border-forest/15 bg-white text-forest shadow-[0_10px_24px_-18px_rgba(20,40,20,0.8)] transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:bg-forest hover:text-cream"
                      >
                        <Icon className="h-5 w-5" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="min-w-0 lg:pt-1">
            <LinkColumn title="Quick Links" links={QUICK_LINKS} />
          </div>
        </div>
      </div>

      <div className="bg-forest">
        <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-2 px-5 py-4 text-center text-sm text-cream/80 sm:flex-row sm:px-8 sm:text-left lg:px-12">
          <p>© 2026 Dwit Farm. All Rights Reserved.</p>
          <span className="text-gold">❧</span>
          <p className="flex items-center gap-4">
            <a href="#" className="transition-colors hover:text-gold">
              Privacy Policy
            </a>
            <span className="text-cream/30">|</span>
            <a href="#" className="transition-colors hover:text-gold">
              Terms &amp; Conditions
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
