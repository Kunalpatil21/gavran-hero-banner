import { Phone, MapPin, ChevronRight, Youtube, Facebook, Instagram, MessageCircle } from "lucide-react";
import logoAsset from "@/assets/dwit-logo.png";

const QUICK_LINKS = [
  "Home",
  "About Us",
  "Our Training",
  "Contract Farming",
  "Franchise",
  "Contact Us",
];

const SOCIALS = [
  { icon: Youtube, label: "YouTube", href: "https://www.youtube.com" },
  { icon: Facebook, label: "Facebook", href: "https://www.facebook.com" },
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com" },
  { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/919226466497" },
];

function LinkColumn({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h3 className="font-display text-lg font-bold text-forest">{title}</h3>
      <span className="mt-2 block h-[3px] w-9 rounded-full bg-gold" />
      <ul className="mt-3 space-y-2">
        {links.map((l) => (
          <li key={l}>
            <a
              href="#"
              className="group inline-flex items-center gap-2 text-[15px] text-forest/75 transition-colors duration-300 hover:text-gold-deep"
            >
              <ChevronRight className="h-3.5 w-3.5 text-gold-deep transition-transform duration-300 group-hover:translate-x-0.5" />
              {l}
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
      <div className="mx-auto max-w-[1400px] px-5 py-9 sm:px-8 lg:px-12 lg:py-10">
        <div className="grid items-start gap-8 sm:grid-cols-2 lg:grid-cols-[1.6fr_0.8fr_1fr] lg:gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <img src={logoAsset} alt="DWIT Farm logo" width={64} height={64} className="h-14 w-14" />
              <div>
                <p className="font-display text-3xl font-extrabold leading-none text-forest">Dwit Farm</p>
                <p className="mt-1.5 text-[15px] font-medium text-gold-deep">From Farm. For Farmers.</p>
                <span className="mt-2 block h-[3px] w-10 rounded-full bg-gold" />
              </div>
            </div>

            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-forest/75">
              Dwit Farm is dedicated to promoting sustainable poultry farming through practical
              knowledge, training and the right guidance for a better tomorrow.
            </p>

            <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              <li className="flex items-center gap-3">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-forest text-cream">
                  <Phone className="h-4 w-4" />
                </span>
                <a href="tel:9226466497" className="text-[15px] text-forest/85 hover:text-gold-deep">
                  9226466497
                </a>
              </li>
              <li className="flex items-center gap-3 sm:col-span-2 lg:col-span-1 xl:col-span-2">
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
          </div>

          <LinkColumn title="Quick Links" links={QUICK_LINKS} />

          <div>
            <h3 className="font-display text-lg font-bold text-forest">Follow Us</h3>
            <span className="mt-2 block h-[3px] w-9 rounded-full bg-gold" />
            <p className="mt-3 max-w-xs text-[15px] leading-relaxed text-forest/75">
              Stay connected for the latest updates, training videos and farming tips.
            </p>
            <ul className="mt-4 flex flex-nowrap gap-2.5">
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
