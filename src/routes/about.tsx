import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";

import aboutBannerAsset from "@/assets/about-banner.png.asset.json";
import logoAsset from "@/assets/dwit-logo.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — DWIT Farm" },
      {
        name: "description",
        content:
          "Learn about DWIT Farm's mission to empower farmers with practical Gavran poultry farming knowledge, real-world training, and continuous support.",
      },
      { property: "og:title", content: "About Us — DWIT Farm" },
      {
        property: "og:description",
        content:
          "DWIT Farm empowers farmers with practical Gavran poultry farming knowledge, real-world training, and continuous support.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const NAV = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Gavran Poultry", href: "/#poultry" },
  { label: "Training", href: "/#training" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Contact", href: "/#contact" },
];

function AboutPage() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Navbar */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-gold/15 bg-ink/90 backdrop-blur-xl py-2 shadow-lg"
            : "border-b border-transparent bg-ink/40 py-3"
        }`}
      >
        <nav className="mx-auto grid max-w-[1600px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 sm:px-8 lg:grid-cols-[auto_1fr_auto]">
          <Link to="/" className="flex min-w-0 items-center gap-3">
            <img
              src={logoAsset}
              alt="DWIT Farm logo"
              width={56}
              height={56}
              className="h-10 w-10 shrink-0 sm:h-12 sm:w-12"
            />
            <span className="min-w-0">
              <span className="block truncate text-lg font-semibold tracking-[0.12em] text-cream sm:text-xl">
                DWIT <span className="font-display text-gold">FARM</span>
              </span>
              <span className="hidden text-[10px] tracking-[0.26em] text-cream/60 sm:block">
                GAVRAN POULTRY FARMING &amp; TRAINING
              </span>
            </span>
          </Link>

          <ul className="hidden items-center justify-center gap-6 lg:flex xl:gap-8">
            {NAV.map((item, i) => {
              const isActive = item.href === "/about";
              return (
                <li key={item.label}>
                  <Link
                    to={item.href}
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
            <a
              href="/#training"
              className="hidden items-center gap-2 rounded-md bg-gradient-to-r from-gold-deep to-gold px-5 py-2.5 text-sm font-medium text-ink shadow-[0_10px_28px_-12px_rgba(0,0,0,0.9)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_36px_-12px_var(--color-gold)] sm:inline-flex"
            >
              Join Training
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-gold/30 text-cream lg:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>

        {open && (
          <div className="border-t border-gold/15 bg-ink/95 backdrop-blur-xl lg:hidden">
            <ul className="mx-auto flex max-w-[1600px] flex-col px-5 py-2 sm:px-8">
              {NAV.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-cream/5 py-3 text-cream/85 transition-colors hover:text-gold"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="py-4">
                <Link
                  to="/#training"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-gold-deep to-gold px-5 py-3 text-sm font-medium text-ink"
                >
                  Join Training <ArrowRight className="h-4 w-4" />
                </Link>
              </li>
            </ul>
          </div>
        )}
      </header>

      {/* About banner */}
      <main className="bg-cream pt-24 sm:pt-28">
        <section className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="relative flex min-h-[280px] items-center overflow-hidden rounded-[28px] border border-forest/10 bg-white shadow-[0_24px_60px_-32px_rgba(20,40,20,0.35)] md:min-h-[320px] lg:min-h-[340px]">
            {/* Left content */}
            <div className="relative z-10 w-full px-6 py-10 sm:w-[55%] sm:px-10 lg:w-[48%] lg:px-14">
              <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-forest">
                About Dwit Farm
              </span>

              <h1 className="mt-4 font-display text-[1.75rem] font-extrabold leading-[1.15] text-forest sm:text-[2.25rem] lg:text-[2.75rem]">
                शिका. समजा. अंमलात आणा.
              </h1>

              <p className="mt-2 font-display text-xl font-bold text-gold-deep sm:text-2xl lg:text-[1.75rem]">
                आणि बदल घडवा.
              </p>

              <p className="mt-4 max-w-md text-[15px] leading-relaxed text-forest/75 sm:text-base">
                गावरान कुक्कुटपालनातील प्रत्यक्ष अनुभव, योग्य मार्गदर्शन आणि शेतकऱ्यांसाठी उपयुक्त ज्ञान — Dwit Farm सोबत.
              </p>
            </div>

            {/* Right image with cream fade */}
            <div className="pointer-events-none absolute inset-0 sm:pointer-events-auto sm:relative sm:inset-auto sm:w-[45%] lg:w-[52%]">
              <img
                src={aboutBannerAsset.url}
                alt="Umesh Patil holding a Gavran hen at DWIT Farm with poultry shed in the background"
                loading="eager"
                width={1200}
                height={600}
                className="h-full w-full object-cover object-center"
              />
              {/* Soft cream fade to the left */}
              <div className="absolute inset-0 bg-gradient-to-r from-cream via-cream/90 to-transparent sm:from-cream sm:via-cream/80 sm:to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-cream/40 via-transparent to-cream/30 sm:hidden" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
