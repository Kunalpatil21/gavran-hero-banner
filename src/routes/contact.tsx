import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import {
  ArrowRight,
  Menu,
  X,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Building2,
  Send,
  Leaf,
  Users,
  MapPin,
  Map as MapIcon,
  Bird,
} from "lucide-react";

import gateImage from "@/assets/dwit-farm-gate.jpg";
import logoAsset from "@/assets/dwit-logo.png";
import SectionDivider from "@/components/SectionDivider";
import SiteFooter from "@/components/SiteFooter";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact DWIT Farm — Gavran Poultry Training Support" },
      {
        name: "description",
        content:
          "Get in touch with DWIT Farm for Gavran poultry farming training, guidance and support. Phone, email, WhatsApp and training centre locations across Maharashtra.",
      },
      { property: "og:title", content: "Contact DWIT Farm — Gavran Poultry Training Support" },
      {
        property: "og:description",
        content:
          "Reach DWIT Farm by phone, email or WhatsApp, or visit our training centres in Palghar, Pune and Nashik.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

const NAV = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Gavran Poultry", href: "/gavran-poultry" },
  { label: "Training", href: "/#training" },
  { label: "Franchise", href: "/franchise" },
  { label: "Contact", href: "/contact" },
];

const CONTACT_ITEMS = [
  {
    icon: Phone,
    title: "Phone",
    lines: ["+91 12345 67890", "+91 98765 43210"],
    href: "tel:+911234567890",
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["info@dwitfarm.com", "training@dwitfarm.com"],
    href: "mailto:info@dwitfarm.com",
  },
  {
    icon: Clock,
    title: "Business Hours",
    lines: ["Monday – Sunday", "9:00 AM – 6:00 PM"],
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    lines: ["Click to chat with us", "+91 98765 43210"],
    href: "https://wa.me/919876543210",
  },
];

const LOCATIONS = [
  {
    name: "Plaghar (Head Office)",
    address: ["Dwit Farm, At/Post: N. Po. Khed,", "Tal. Vikramgad,", "Dist. Palghar,", "Maharashtra – 401605"],
    phone: "+91 12345 67890",
    email: "info@dwitfarm.com",
    query: "Vikramgad, Palghar, Maharashtra",
  },
  {
    name: "Pune Training Center",
    address: [
      "Dwit Farm Training Center,",
      "S.No. 25/1, Village Lonikand,",
      "Tal. Haveli, Pune,",
      "Maharashtra – 412216",
    ],
    phone: "+91 87654 32109",
    email: "pune@dwitfarm.com",
    query: "Lonikand, Haveli, Pune, Maharashtra",
  },
  {
    name: "Nashik Training Center",
    address: [
      "Dwit Farm Training Center,",
      "Near Trimbakeshwar Road,",
      "Anjaneri, Nashik,",
      "Maharashtra – 422213",
    ],
    phone: "+91 87654 32108",
    email: "nashik@dwitfarm.com",
    query: "Anjaneri, Nashik, Maharashtra",
  },
];

const STATS = [
  { icon: Leaf, value: "1000+", label: "Farmers Trained" },
  { icon: Users, value: "50+", label: "Training Programs" },
  { icon: MapPin, value: "3+", label: "Locations" },
  { icon: MapIcon, value: "Across India", label: "Serving Farmers" },
];

const inputClass =
  "w-full rounded-lg border border-forest/15 bg-white/70 px-4 py-3 text-[15px] text-forest placeholder:text-forest/45 outline-none transition-colors duration-300 focus:border-gold focus:bg-white";

function ContactPage() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    e.currentTarget.reset();
  };

  return (
    <>
      {/* Navbar */}
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b border-gold/15 bg-black shadow-lg transition-all duration-500 ${
          scrolled ? "py-2" : "py-3"
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
            {NAV.map((item) => {
              const isActive = item.href === "/contact";
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
              <ArrowRight className="h-4 w-4" />
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
          <div className="border-t border-gold/15 bg-black lg:hidden">
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
                <a
                  href="/#training"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-gold-deep to-gold px-5 py-3 text-sm font-medium text-ink"
                >
                  Join Training <ArrowRight className="h-4 w-4" />
                </a>
              </li>
            </ul>
          </div>
        )}
      </header>

      <main className="bg-white pt-[72px] sm:pt-[84px]">
        {/* Banner */}
        <section className="relative isolate overflow-hidden bg-cream">
          <img
            src={gateImage}
            alt="Wooden DWIT Farm entrance gate leading to the poultry shed"
            className="absolute inset-y-0 right-0 -z-10 h-full w-full object-cover object-center sm:w-[68%]"
            loading="eager"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-cream from-25% via-cream/85 via-45% to-transparent to-72%" />
          <div className="absolute inset-0 -z-10 bg-cream/55 sm:hidden" />

          <div className="mx-auto flex min-h-[300px] max-w-[1400px] items-center px-5 py-12 sm:min-h-[340px] sm:px-8 lg:min-h-[380px] lg:px-12">
            <div className="max-w-md">
              <p className="flex items-center gap-2 text-[13px] font-semibold tracking-[0.18em] text-forest/80">
                <Leaf className="h-4 w-4 text-gold-deep" />
                CONTACT US
              </p>
              <h1 className="mt-4 font-display text-[2.5rem] font-extrabold leading-[1.08] tracking-tight text-forest sm:text-[3rem] lg:text-[3.4rem]">
                We&apos;re Here to
                <br />
                Help You <span className="text-gold-deep">Grow</span>
              </h1>
              <span className="mt-5 block h-[3px] w-16 rounded-full bg-gold" />
              <p className="mt-5 text-[15px] leading-relaxed text-forest/75">
                Have questions about our training programs, poultry farming, or need support?
                Reach out to us – we&apos;d love to hear from you.
              </p>
            </div>
          </div>
        </section>

        {/* Get in touch + form */}
        <section className="mx-auto max-w-[1400px] px-5 py-10 sm:px-8 lg:px-12">
          <div className="grid gap-0 overflow-hidden rounded-[20px] border border-forest/10 bg-cream/60 shadow-[0_24px_60px_-40px_rgba(20,40,20,0.5)] lg:grid-cols-[0.85fr_1.15fr]">
            {/* Get in Touch */}
            <div className="border-b border-forest/10 p-7 sm:p-9 lg:border-b-0 lg:border-r">
              <h2 className="font-display text-2xl font-bold text-forest">Get in Touch</h2>
              <span className="mt-2 block h-[3px] w-10 rounded-full bg-gold" />
              <p className="mt-4 text-[14px] leading-relaxed text-forest/70">
                We&apos;re always happy to answer your questions and provide the support you need.
              </p>

              <ul className="mt-6 divide-y divide-forest/10">
                {CONTACT_ITEMS.map(({ icon: Icon, title, lines, href }) => {
                  const body = (
                    <div className="flex items-start gap-4 py-4">
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gold/15 text-gold-deep">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="font-semibold text-forest">{title}</p>
                        {lines.map((l) => (
                          <p key={l} className="text-[14px] leading-relaxed text-forest/70">
                            {l}
                          </p>
                        ))}
                      </div>
                    </div>
                  );
                  return (
                    <li key={title}>
                      {href ? (
                        <a
                          href={href}
                          target={href.startsWith("http") ? "_blank" : undefined}
                          rel="noreferrer"
                          className="block transition-colors duration-300 hover:text-gold-deep"
                        >
                          {body}
                        </a>
                      ) : (
                        body
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Form */}
            <div className="p-7 sm:p-9">
              <h2 className="font-display text-2xl font-bold text-forest">Send Us a Message</h2>
              <span className="mt-2 block h-[3px] w-10 rounded-full bg-gold" />
              <p className="mt-4 text-[14px] text-forest/70">
                Fill out the form below and we will get back to you soon.
              </p>

              <form onSubmit={onSubmit} className="mt-6 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <input required maxLength={100} name="name" placeholder="Your Name*" className={inputClass} />
                  <input
                    required
                    maxLength={20}
                    name="phone"
                    type="tel"
                    placeholder="Phone Number*"
                    className={inputClass}
                  />
                </div>
                <input
                  required
                  maxLength={255}
                  name="email"
                  type="email"
                  placeholder="Email Address*"
                  className={inputClass}
                />
                <input required maxLength={150} name="subject" placeholder="Subject*" className={inputClass} />
                <textarea
                  required
                  maxLength={1000}
                  name="message"
                  rows={6}
                  placeholder="Your Message*"
                  className={`${inputClass} resize-none`}
                />
                <button
                  type="submit"
                  className="group inline-flex w-full items-center justify-center gap-3 rounded-lg bg-forest px-6 py-4 text-[15px] font-semibold text-cream transition-all duration-300 hover:-translate-y-0.5 hover:bg-forest/90"
                >
                  <Send className="h-4 w-4 text-gold" />
                  Send Message
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
                {sent && (
                  <p className="text-center text-[14px] font-medium text-gold-deep">
                    Thank you! Your message has been sent.
                  </p>
                )}
              </form>
            </div>
          </div>
        </section>

        {/* Our Locations */}
        <section className="mx-auto max-w-[1400px] px-5 pb-4 sm:px-8 lg:px-12">
          <h2 className="font-display text-3xl font-bold text-forest">Our Locations</h2>
          <span className="mt-2 block h-[3px] w-12 rounded-full bg-gold" />
          <p className="mt-3 text-[15px] text-forest/70">
            We have multiple centers to serve and support farmers better across regions.
          </p>

          <div className="mt-7 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {LOCATIONS.map((loc) => (
              <article
                key={loc.name}
                className="flex flex-col overflow-hidden rounded-[18px] border border-forest/10 bg-cream/60 p-6 shadow-[0_20px_45px_-35px_rgba(20,40,20,0.6)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_55px_-32px_rgba(20,40,20,0.55)]"
              >
                <div className="flex items-start gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gold/15 text-gold-deep">
                    <Building2 className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold text-forest">{loc.name}</h3>
                    <div className="mt-2 text-[14px] leading-relaxed text-forest/70">
                      {loc.address.map((l) => (
                        <p key={l}>{l}</p>
                      ))}
                    </div>
                  </div>
                </div>

                <ul className="mt-5 space-y-2 text-[14px] text-forest/80">
                  <li className="flex items-center gap-3">
                    <Phone className="h-4 w-4 shrink-0 text-gold-deep" />
                    <a href={`tel:${loc.phone.replace(/\s/g, "")}`} className="hover:text-gold-deep">
                      {loc.phone}
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <Mail className="h-4 w-4 shrink-0 text-gold-deep" />
                    <a href={`mailto:${loc.email}`} className="hover:text-gold-deep">
                      {loc.email}
                    </a>
                  </li>
                </ul>

                <div className="mt-5 overflow-hidden rounded-xl border border-forest/10">
                  <iframe
                    title={`Map of ${loc.name}`}
                    src={`https://www.google.com/maps?q=${encodeURIComponent(loc.query)}&output=embed`}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="block h-[150px] w-full"
                  />
                </div>

                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(loc.query)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="group mt-5 inline-flex w-fit items-center gap-2 rounded-lg border border-forest/20 bg-white px-4 py-2.5 text-[14px] font-medium text-forest transition-all duration-300 hover:border-gold hover:text-gold-deep"
                >
                  Get Directions
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* CTA band */}
        <section className="mx-auto max-w-[1400px] px-5 pt-10 sm:px-8 lg:px-12">
          <div className="flex flex-col items-start gap-6 rounded-[18px] bg-forest px-7 py-8 sm:px-10 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-6">
              <span className="hidden h-20 w-20 shrink-0 place-items-center rounded-full border border-gold/40 text-gold sm:grid">
                <Bird className="h-9 w-9" />
              </span>
              <div>
                <h2 className="font-display text-2xl font-bold text-cream sm:text-[1.7rem]">
                  Let&apos;s Build a Better Future Together
                </h2>
                <p className="mt-2 max-w-lg text-[15px] leading-relaxed text-cream/80">
                  Join our training programs and be a part of the Gavran Poultry Farming revolution.
                </p>
              </div>
            </div>
            <a
              href="/#training"
              className="group inline-flex shrink-0 items-center gap-3 rounded-lg bg-gradient-to-r from-gold-deep to-gold px-7 py-4 text-[15px] font-semibold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-16px_var(--color-gold)]"
            >
              Join Our Training Programs
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </section>

        {/* Stats strip */}
        <section className="mx-auto max-w-[1400px] px-5 pb-14 pt-6 sm:px-8 lg:px-12">
          <div className="grid gap-6 rounded-[18px] border border-forest/10 bg-cream/60 px-6 py-8 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-forest/10">
            {STATS.map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex items-center justify-center gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gold/15 text-gold-deep">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-display text-xl font-extrabold text-forest">{value}</p>
                  <p className="text-[14px] text-forest/70">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <SectionDivider />
      <SiteFooter />
    </>
  );
}
