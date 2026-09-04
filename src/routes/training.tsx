import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  Menu,
  X,
  Leaf,
  Users,
  MapPin,
  Bird,
  Home as HomeIcon,
  HeartPulse,
  TrendingUp,
  Presentation,
  Sprout,
  ShieldCheck,
  Megaphone,
  ClipboardList,
} from "lucide-react";

import logoAsset from "@/assets/dwit-logo.png";
import trainingHero from "@/assets/training-hero.jpg.asset.json";
import trainingSession from "@/assets/training-session.jpg.asset.json";
import gpHens from "@/assets/gp-hens.jpg.asset.json";
import topicFarmSetup from "@/assets/topic-farm-setup.jpg.asset.json";
import topicHealth from "@/assets/topic-health.jpg.asset.json";
import topicBusiness from "@/assets/topic-business.jpg.asset.json";
import SectionDivider from "@/components/SectionDivider";
import SiteFooter from "@/components/SiteFooter";

export const Route = createFileRoute("/training")({
  head: () => ({
    meta: [
      { title: "Poultry Farming Training — DWIT Farm Programs" },
      {
        name: "description",
        content:
          "Practical Gavran poultry farming training at DWIT Farm — beginner, farm management, health & nutrition and advanced programs with on-farm learning and lifetime support.",
      },
      { property: "og:title", content: "Poultry Farming Training — DWIT Farm Programs" },
      {
        property: "og:description",
        content:
          "Learn, understand, implement and grow with DWIT Farm's practical poultry training programs for every skill level.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TrainingPage,
});

const NAV = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Gavran Poultry", href: "/gavran-poultry" },
  { label: "Training", href: "/training" },
  { label: "Franchise", href: "/franchise" },
  { label: "Contact", href: "/contact" },
];

const HERO_STATS = [
  {
    icon: Sprout,
    value: "1000+",
    label: "Farmers Trained",
    note: "Empowering farmers with practical knowledge.",
  },
  {
    icon: Users,
    value: "50+",
    label: "Training Programs",
    note: "Comprehensive programs for all skill levels.",
  },
  {
    icon: MapPin,
    value: "Across India",
    label: "Serving Farmers",
    note: "Reaching farmers in many states and growing together.",
  },
];

const PROGRAMS = [
  {
    icon: Bird,
    image: gpHens.url,
    title: "Beginner Training",
    text: "For those who are new to poultry farming. Learn the basics and get started with confidence.",
  },
  {
    icon: HomeIcon,
    image: topicFarmSetup.url,
    title: "Farm Management",
    text: "Learn how to manage your farm efficiently for better productivity and profitability.",
  },
  {
    icon: HeartPulse,
    image: topicHealth.url,
    title: "Health & Nutrition",
    text: "Understand proper feeding, nutrition and disease prevention for healthy and strong birds.",
  },
  {
    icon: TrendingUp,
    image: topicBusiness.url,
    title: "Advanced Training",
    text: "Advanced strategies, business planning and scaling your poultry farming business.",
  },
];

const LEARN = [
  { icon: Sprout, title: "Breed Selection", text: "Choose the right breed for better results." },
  { icon: ShieldCheck, title: "Disease Management", text: "Identify, prevent and manage diseases effectively." },
  { icon: HomeIcon, title: "Housing Management", text: "Learn low-cost and efficient housing techniques." },
  { icon: Megaphone, title: "Marketing & Sales", text: "Learn how to sell your products in the right market." },
  { icon: Leaf, title: "Feeding & Nutrition", text: "Balanced diet for healthy and productive birds." },
  { icon: ClipboardList, title: "Business Planning", text: "From budgeting to scaling — build a profitable business." },
];

const FORMATS = [
  { icon: Presentation, title: "Classroom Training", text: "Interactive sessions with expert guidance." },
  { icon: HomeIcon, title: "On-Farm Training", text: "Practical learning at our farm." },
  { icon: Users, title: "Online Guidance", text: "Continuous support even after training." },
];

function TrainingPage() {
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
              const isActive = item.href === "/training";
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
              href="https://wa.me/919226466497"
              target="_blank"
              rel="noreferrer"
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
                  href="https://wa.me/919226466497"
                  target="_blank"
                  rel="noreferrer"
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
        {/* Hero banner */}
        <section className="relative isolate overflow-hidden bg-cream">
          <img
            src={trainingHero.url}
            alt="Farmer holding a healthy Gavran hen beside an open poultry shed at DWIT Farm"
            width={1600}
            height={900}
            className="absolute inset-y-0 right-0 -z-10 h-full w-full object-cover object-center sm:w-[62%]"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-cream from-22% via-cream/85 via-44% to-transparent to-70%" />
          <div className="absolute inset-0 -z-10 bg-cream/60 sm:hidden" />

          <div className="mx-auto flex min-h-[320px] max-w-[1400px] items-center px-5 py-12 sm:min-h-[380px] sm:px-8 lg:min-h-[430px] lg:px-12">
            <div className="max-w-lg">
              <p className="flex items-center gap-2 text-[13px] font-semibold tracking-[0.18em] text-forest/80">
                <Leaf className="h-4 w-4 text-gold-deep" />
                TRAINING
              </p>
              <h1 className="mt-4 font-display text-[2.3rem] font-extrabold leading-[1.08] tracking-tight text-forest sm:text-[2.9rem] lg:text-[3.3rem]">
                Learn. Understand.
                <br />
                Implement. <span className="text-gold-deep">Grow.</span>
              </h1>
              <span className="mt-5 block h-[3px] w-16 rounded-full bg-gold" />
              <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-forest/75">
                Practical knowledge, real-world training and continuous support to help you build a
                successful poultry farming business.
              </p>
            </div>
          </div>
        </section>

        {/* Stats card */}
        <section className="bg-white">
          <div className="mx-auto -mt-10 max-w-[1400px] px-5 sm:px-8 lg:px-12">
            <div className="grid divide-y divide-forest/10 rounded-2xl border border-forest/10 bg-white p-6 shadow-[0_28px_60px_-40px_rgba(20,40,20,0.75)] sm:p-8 lg:grid-cols-3 lg:divide-x lg:divide-y-0">
              {HERO_STATS.map(({ icon: Icon, value, label, note }) => (
                <div key={label} className="flex items-start gap-4 py-5 lg:px-4 lg:py-0">
                  <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-gold/15 text-gold-deep">
                    <Icon className="h-6 w-6" />
                  </span>
                  <div>
                    <p className="font-display text-2xl font-extrabold text-forest">{value}</p>
                    <p className="text-[15px] font-medium text-forest/85">{label}</p>
                    <p className="mt-1 text-sm leading-relaxed text-forest/60">{note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Programs */}
        <section className="bg-white py-14 sm:py-16">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
            <h2 className="text-center font-display text-3xl font-extrabold text-forest sm:text-4xl">
              Our Training Programs
            </h2>
            <p className="mt-2 text-center text-gold-deep">❧</p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {PROGRAMS.map(({ icon: Icon, image, title, text }) => (
                <article
                  key={title}
                  className="group overflow-hidden rounded-xl border border-forest/10 bg-white shadow-[0_20px_50px_-38px_rgba(20,40,20,0.9)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_60px_-34px_rgba(20,40,20,0.9)]"
                >
                  <div className="relative">
                    <img
                      src={image}
                      alt={title}
                      loading="lazy"
                      className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute -bottom-6 left-5 grid h-12 w-12 place-items-center rounded-full bg-forest text-gold shadow-lg">
                      <Icon className="h-5 w-5" />
                    </span>
                  </div>
                  <div className="px-5 pb-5 pt-9">
                    <h3 className="font-display text-xl font-bold text-forest">{title}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-forest/70">{text}</p>
                    <Link
                      to="/contact"
                      className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-gold-deep transition-transform duration-300 hover:translate-x-0.5"
                    >
                      Learn More <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* What you will learn */}
        <section className="bg-white pb-14 sm:pb-16">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
            <div className="grid gap-8 rounded-2xl bg-cream p-6 sm:p-9 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="font-display text-3xl font-extrabold text-forest sm:text-[2.1rem]">
                  What You Will Learn
                </h2>
                <span className="mt-4 block h-[3px] w-14 rounded-full bg-gold" />

                <div className="mt-7 grid gap-6 sm:grid-cols-2">
                  {LEARN.map(({ icon: Icon, title, text }) => (
                    <div key={title} className="flex items-start gap-3">
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gold/20 text-gold-deep">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <h3 className="text-[15px] font-bold text-forest">{title}</h3>
                        <p className="mt-1 text-sm leading-relaxed text-forest/70">{text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <img
                src={trainingSession.url}
                alt="Farmers attending an on-farm poultry training session at DWIT Farm"
                loading="lazy"
                className="h-full max-h-[420px] w-full rounded-xl object-cover shadow-[0_28px_60px_-40px_rgba(20,40,20,0.9)]"
              />
            </div>
          </div>
        </section>

        {/* Formats */}
        <section className="bg-white pb-14 sm:pb-16">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
            <h2 className="text-center font-display text-3xl font-extrabold text-forest sm:text-4xl">
              Training Formats
            </h2>
            <p className="mt-2 text-center text-gold-deep">❧</p>

            <div className="mt-8 grid gap-0 overflow-hidden rounded-2xl bg-cream sm:grid-cols-3">
              {FORMATS.map(({ icon: Icon, title, text }, i) => (
                <div
                  key={title}
                  className={`flex items-start gap-4 p-6 sm:p-7 ${
                    i > 0 ? "sm:border-l sm:border-forest/10" : ""
                  }`}
                >
                  <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-forest text-gold">
                    <Icon className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold text-forest">{title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-forest/70">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-white pb-16">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col items-center gap-6 rounded-2xl bg-forest px-6 py-8 text-center sm:px-10 lg:flex-row lg:justify-between lg:text-left">
              <div className="flex flex-col items-center gap-5 lg:flex-row">
                <span className="grid h-16 w-16 shrink-0 place-items-center rounded-full border border-gold/50 text-gold">
                  <Sprout className="h-7 w-7" />
                </span>
                <div>
                  <h2 className="font-display text-2xl font-extrabold text-cream sm:text-[1.7rem]">
                    Ready to Start Your Journey?
                  </h2>
                  <p className="mt-2 max-w-xl text-[15px] leading-relaxed text-cream/80">
                    Join our training programs and take the first step towards a successful poultry
                    farming business.
                  </p>
                </div>
              </div>
              <a
                href="https://wa.me/919226466497"
                target="_blank"
                rel="noreferrer"
                className="inline-flex shrink-0 items-center gap-2 rounded-md bg-gradient-to-r from-gold-deep to-gold px-7 py-4 text-[15px] font-medium text-ink transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-16px_var(--color-gold)]"
              >
                Join Our Training Programs
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <SectionDivider />
      <SiteFooter />
    </>
  );
}
