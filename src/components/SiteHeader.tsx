import { Link, useLocation } from "@tanstack/react-router";
import { ArrowRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const logoAsset = "/images/dwit-logo-primary.png";

const NAV_ITEMS = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Gavran Poultry", to: "/gavran-poultry" },
  { label: "Training", to: "/training" },
  { label: "Contract Farming", to: "/contract-farming" },
  { label: "Contact", to: "/contact" },
] as const;

export default function SiteHeader() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-gold/15 bg-ink/90 py-2 shadow-lg backdrop-blur-xl"
          : "border-b border-gold/10 bg-ink/80 py-4 backdrop-blur-md"
      }`}
    >
      <nav className="mx-auto grid max-w-[1600px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 sm:px-8 lg:grid-cols-[auto_1fr_auto]">
        <Link to="/" className="flex min-w-0 items-center gap-3" aria-label="DWIT Farm home">
          <img
            src={logoAsset}
            alt="DWIT Farm logo"
            width={56}
            height={56}
            className="h-11 w-11 shrink-0 sm:h-14 sm:w-14"
          />
          <span className="min-w-0">
            <span className="block truncate text-lg font-semibold tracking-[0.14em] text-cream sm:text-2xl">
              DWIT <span className="font-display text-gold">FARM</span>
            </span>
            <span className="hidden text-[10px] tracking-[0.28em] text-cream/60 sm:block">
              GAVRAN POULTRY FARMING &amp; TRAINING
            </span>
          </span>
        </Link>

        <ul className="hidden items-center justify-center gap-7 lg:flex xl:gap-9">
          {NAV_ITEMS.map((item) => {
            const isActive = location.pathname === item.to;
            return (
              <li key={item.label}>
                <Link
                  to={item.to}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative inline-block py-1 text-[15px] text-cream/85 transition-colors duration-300 hover:text-gold after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-bottom-right after:scale-x-0 after:bg-gold after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100 ${
                    isActive ? "text-gold after:scale-x-100" : ""
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-3">
          <Link
            to="/training"
            className="group hidden items-center gap-3 rounded-md bg-gradient-to-r from-gold-deep to-gold px-6 py-3 text-sm font-medium text-ink shadow-[0_10px_30px_-12px_rgba(0,0,0,0.9)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_-12px_var(--color-gold)] sm:inline-flex"
          >
            Join Training
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-gold/30 text-cream lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-gold/15 bg-ink/95 backdrop-blur-xl lg:hidden">
          <ul className="mx-auto flex max-w-[1600px] flex-col px-5 py-2 sm:px-8">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.to}
                  aria-current={location.pathname === item.to ? "page" : undefined}
                  className={`block border-b border-cream/5 py-3 transition-colors hover:text-gold ${
                    location.pathname === item.to ? "text-gold" : "text-cream/85"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="py-4">
              <Link
                to="/training"
                className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-gold-deep to-gold px-5 py-3 text-sm font-medium text-ink"
              >
                Join Training <ArrowRight className="h-4 w-4" />
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}