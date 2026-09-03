import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import {
  ArrowRight,
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Leaf,
  Check,
  CircleDot,
  Bird,
  Presentation,
  Warehouse,
  Megaphone,
  Headphones,
  TrendingUp,
  FileText,
  Users,
  ShieldCheck,
  GraduationCap,
  Home as HomeIcon,
  Handshake,
} from "lucide-react";

import heroAsset from "@/assets/franchise-hero.jpg.asset.json";
import henAsset from "@/assets/franchise-hen.jpg.asset.json";
import umeshAsset from "@/assets/umesh-patil.png.asset.json";
import logoAsset from "@/assets/dwit-logo.png";
import SectionDivider from "@/components/SectionDivider";
import SiteFooter from "@/components/SiteFooter";

export const Route = createFileRoute("/franchise")({
  head: () => ({
    meta: [
      { title: "Dwit Farm Franchise — गावरान पोल्ट्री फ्रँचायझी नेटवर्क" },
      {
        name: "description",
        content:
          "Dwit Farm सोबत गावरान पोल्ट्री फ्रँचायझी सुरू करा. पक्षी पुरवठा, प्रशिक्षण, फार्म सेटअप मार्गदर्शन, मार्केटिंग सहाय्य आणि सतत सपोर्ट.",
      },
      { property: "og:title", content: "Dwit Farm Franchise — गावरान पोल्ट्री फ्रँचायझी नेटवर्क" },
      {
        property: "og:description",
        content:
          "आपला स्वतःचा पोल्ट्री व्यवसाय सुरू करा — Dwit Farm च्या विश्वास, मार्गदर्शन आणि सपोर्टसह यशस्वी व्हा.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FranchisePage,
});

const NAV = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Gavran Poultry", href: "/gavran-poultry" },
  { label: "Training", href: "/#training" },
  { label: "Franchise", href: "/franchise" },
  { label: "Contact", href: "/contact" },
];

const HERO_USP = [
  { icon: ShieldCheck, label: "विश्वासार्ह मॉडेल" },
  { icon: GraduationCap, label: "संपूर्ण मार्गदर्शन" },
  { icon: TrendingUp, label: "एकत्र वाढूया" },
];

const STATS = [
  { icon: Users, value: "500+", label: "प्रशिक्षित शेतकरी" },
  { icon: MapPin, value: "25+", label: "जिल्ह्यांत उपस्थिती" },
  { icon: Warehouse, value: "100+", label: "फ्रँचायझी पार्टनर" },
  { icon: Handshake, value: "100%", label: "संपूर्ण सपोर्ट व मार्गदर्शन" },
];

const WHY = [
  { icon: Bird, title: "गुणवत्तापूर्ण पक्षी आणि खाद्य" },
  { icon: Presentation, title: "प्रशिक्षण व तांत्रिक मार्गदर्शन" },
  { icon: Warehouse, title: "फार्म सेटअप मार्गदर्शन" },
  { icon: Megaphone, title: "मार्केटिंग व विक्री सहाय्य" },
  { icon: Headphones, title: "सतत व्यवसाय सपोर्ट" },
  { icon: TrendingUp, title: "तुमच्या व्यवसायाच्या वाढीसोबत आम्ही" },
];

const STEPS = [
  { icon: FileText, title: "अर्ज करा", text: "फ्रँचायझी चौकशी फॉर्म भरा." },
  { icon: Users, title: "चर्चा", text: "आमची टीम तुमच्याशी संपर्क करेल." },
  { icon: ShieldCheck, title: "तपासणी", text: "लोकेशन व गरजांची तपासणी केली जाईल." },
  { icon: GraduationCap, title: "प्रशिक्षण", text: "आमच्या तज्ज्ञांकडून संपूर्ण प्रशिक्षण." },
  { icon: HomeIcon, title: "व्यवसाय सुरू करा", text: "फार्म सेटअप करा आणि कमाई सुरू करा." },
];

const WHO = [
  "पोल्ट्री व्यवसायात रस असलेले शेतकरी, स्वयंरोजगार इच्छुक व्यक्ती किंवा गट.",
  "स्वतःचा पोल्ट्री व्यवसाय वाढवू इच्छिणारे.",
  "Dwit Farm च्या नियम व मार्गदर्शनाचे पालन करण्याची तयारी असलेले.",
  "मूलभूत जमीन व पायाभूत सुविधा उपलब्ध असलेले.",
];

const PROVIDES = [
  "गावरान कुक्कुट पिल्ले / पक्षी पुरवठा",
  "प्रशिक्षण व तांत्रिक मार्गदर्शन",
  "फार्म सेटअप मार्गदर्शन",
  "खाद्य नियोजन व आरोग्य व्यवस्थापन मार्गदर्शन",
  "मार्केटिंग व विक्री सहाय्य",
  "सतत सपोर्ट व व्यवसाय वाढीस मदत",
];

const REQUIREMENTS = [
  "किमान जागा: 1000 – 2000 चौ. फूट",
  "शेड व मूलभूत सुविधा आवश्यक",
  "व्यवसाय करण्याची इच्छा व मेहनती वृत्ती",
  "किमान गुंतवणूक: आमच्या मॉडेलनुसार",
  "गुणवत्ता व नियमांचे पालन करण्याची तयारी",
];

const CONTACTS = [
  { icon: Phone, title: "फोन", value: "+91 12345 67890", href: "tel:+911234567890" },
  { icon: MessageCircle, title: "WhatsApp", value: "+91 12345 67890", href: "https://wa.me/911234567890" },
  { icon: Mail, title: "ईमेल", value: "franchise@dwitfarm.com", href: "mailto:franchise@dwitfarm.com" },
  {
    icon: MapPin,
    title: "कार्यालयाचा पत्ता",
    value: "Dwit Farm, At/Post: N. Po. Khed, Tal. Vikramgad, Dist. Palghar, Maharashtra – 401605",
  },
];

const inputClass =
  "w-full rounded-lg border border-forest/15 bg-white px-3.5 py-2.5 text-[15px] text-forest placeholder:text-forest/40 outline-none transition-colors duration-300 focus:border-gold";
const labelClass = "block text-[13px] font-medium text-forest/80";

function FranchisePage() {
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
            <img src={logoAsset} alt="Dwit Farm logo" width={56} height={56} className="h-10 w-10 shrink-0 sm:h-12 sm:w-12" />
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
            {NAV.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.href}
                  className={`relative inline-block py-1 text-[15px] text-cream/85 transition-colors duration-300 hover:text-gold after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-bottom-right after:scale-x-0 after:bg-gold after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100 ${
                    item.href === "/franchise" ? "text-gold after:scale-x-100" : ""
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href="#franchise-form"
              className="hidden items-center gap-2 rounded-md bg-gradient-to-r from-gold-deep to-gold px-5 py-2.5 text-sm font-medium text-ink shadow-[0_10px_28px_-12px_rgba(0,0,0,0.9)] transition-all duration-300 hover:-translate-y-0.5 sm:inline-flex"
            >
              अर्ज करा
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
            </ul>
          </div>
        )}
      </header>

      <main className="bg-white pt-[72px] sm:pt-[84px]">
        {/* Hero */}
        <section className="relative isolate overflow-hidden bg-cream">
          <img
            src={heroAsset.url}
            alt="Gavran hens inside a Dwit Farm poultry shed"
            className="absolute inset-y-0 right-0 -z-10 h-full w-full object-cover object-center lg:w-[62%]"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-cream from-20% via-cream/90 via-42% to-transparent to-70%" />
          <div className="absolute inset-0 -z-10 bg-cream/75 lg:hidden" />

          <div className="mx-auto grid max-w-[1400px] gap-8 px-5 pb-10 pt-8 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-12 lg:pb-14 lg:pt-12">
            <div className="max-w-xl">
              <p className="flex items-center gap-2 text-[13px] text-forest/70">
                <Link to="/" className="hover:text-gold-deep">
                  मुखपृष्ठ
                </Link>
                <span>›</span>
                <span className="text-forest">फ्रँचायझी संधी</span>
              </p>

              <p className="mt-6 text-[15px] font-semibold text-forest/80">Dwit Farm सोबत जोडा</p>
              <h1 className="mt-2 font-display text-[2.3rem] font-extrabold leading-[1.12] tracking-tight text-forest sm:text-[3rem] lg:text-[3.3rem]">
                गावरान पोल्ट्री
                <br />
                फ्रँचायझी नेटवर्क
              </h1>
              <span className="mt-5 flex items-center gap-2">
                <span className="block h-[3px] w-14 rounded-full bg-gold" />
                <Leaf className="h-4 w-4 text-gold-deep" />
              </span>
              <p className="mt-5 max-w-md text-[15px] leading-relaxed text-forest/75">
                आपला स्वतःचा पोल्ट्री व्यवसाय सुरू करा आणि Dwit Farm च्या विश्वास, मार्गदर्शन आणि
                सपोर्टसह यशस्वी व्हा.
              </p>

              <ul className="mt-6 flex flex-wrap items-center gap-x-7 gap-y-3">
                {HERO_USP.map(({ icon: Icon, label }) => (
                  <li key={label} className="flex items-center gap-2.5 text-[14px] text-forest/85">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-forest/25 text-forest">
                      <Icon className="h-4 w-4" />
                    </span>
                    {label}
                  </li>
                ))}
              </ul>

              <a
                href="#franchise-form"
                className="group mt-7 inline-flex items-center gap-3 rounded-lg bg-forest px-6 py-3.5 text-[15px] font-semibold text-cream transition-all duration-300 hover:-translate-y-0.5 hover:bg-forest/90"
              >
                फ्रँचायझीसाठी अर्ज करा
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>

            {/* Founder quote */}
            <div className="flex items-center justify-end">
              <div className="flex max-w-sm items-center gap-5 rounded-[18px] bg-forest/90 p-6 text-cream backdrop-blur-sm lg:bg-transparent lg:p-0">
                <img
                  src={umeshAsset.url}
                  alt="Umesh Patil, founder of Dwit Farm"
                  loading="lazy"
                  className="hidden h-28 w-28 shrink-0 rounded-full border-2 border-gold/50 object-cover object-top sm:block"
                />
                <div>
                  <span className="font-display text-3xl leading-none text-gold">&ldquo;</span>
                  <p className="mt-1 text-[15px] leading-relaxed text-cream/90 lg:text-cream/95">
                    आमचे ध्येय आहे शेतकऱ्यांना बळकटी देणे आणि यशस्वी गावरान पोल्ट्री उद्योजक तयार
                    करणे.
                  </p>
                  <p className="mt-3 font-display text-lg font-bold text-gold">– उमेश पाटील</p>
                  <p className="text-[13px] text-cream/75">संस्थापक, Dwit Farm</p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats card */}
          <div className="mx-auto max-w-[1400px] px-5 pb-10 sm:px-8 lg:px-12">
            <div className="grid gap-6 rounded-[18px] border border-forest/10 bg-white px-6 py-7 shadow-[0_24px_60px_-40px_rgba(20,40,20,0.6)] sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-forest/10">
              {STATS.map(({ icon: Icon, value, label }) => (
                <div key={label} className="flex items-center justify-center gap-4 px-2">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gold/15 text-forest">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-display text-2xl font-extrabold text-forest">{value}</p>
                    <p className="text-[13px] leading-snug text-forest/70">{label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why partner */}
        <section className="mx-auto max-w-[1400px] px-5 py-12 text-center sm:px-8 lg:px-12">
          <h2 className="font-display text-[1.7rem] font-bold text-forest sm:text-[2rem]">
            Dwit Farm सोबत पार्टनर का व्हावे?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-[15px] leading-relaxed text-forest/70">
            आम्ही सुरुवातीपासून शेवटपर्यंत तुमच्यासोबत राहतो आणि तुमचा पोल्ट्री व्यवसाय यशस्वी आणि
            टिकाऊ बनवण्यास मदत करतो.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {WHY.map(({ icon: Icon, title }) => (
              <article
                key={title}
                className="flex flex-col items-center gap-4 rounded-[16px] border border-forest/10 bg-cream/60 px-4 py-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-[0_24px_50px_-35px_rgba(20,40,20,0.6)]"
              >
                <Icon className="h-9 w-9 text-forest" strokeWidth={1.5} />
                <h3 className="text-[14px] font-semibold leading-snug text-forest">{title}</h3>
              </article>
            ))}
          </div>
        </section>

        {/* How it works + who can apply */}
        <section className="mx-auto max-w-[1400px] px-5 pb-12 sm:px-8 lg:px-12">
          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="rounded-[20px] border border-forest/10 bg-cream/60 p-7 sm:p-9">
              <h2 className="font-display text-2xl font-bold text-forest">प्रक्रिया कशी आहे?</h2>
              <span className="mt-3 flex items-center gap-2">
                <span className="block h-[3px] w-12 rounded-full bg-gold" />
                <Leaf className="h-4 w-4 text-gold-deep" />
              </span>

              <ol className="mt-7 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
                {STEPS.map(({ icon: Icon, title, text }, i) => (
                  <li key={title} className="relative text-center">
                    <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-forest text-cream">
                      <Icon className="h-7 w-7" strokeWidth={1.5} />
                    </span>
                    {i < STEPS.length - 1 && (
                      <ArrowRight className="absolute -right-4 top-5 hidden h-4 w-4 text-forest/40 lg:block" />
                    )}
                    <h3 className="mt-3 text-[14px] font-bold text-forest">{title}</h3>
                    <p className="mt-1 text-[13px] leading-snug text-forest/70">{text}</p>
                  </li>
                ))}
              </ol>
            </div>

            <div className="relative isolate overflow-hidden rounded-[20px] border border-forest/10 bg-cream/60 p-7 sm:p-9">
              <img
                src={henAsset.url}
                alt="Gavran hen with a chick"
                loading="lazy"
                className="pointer-events-none absolute bottom-0 right-0 -z-10 h-52 w-52 object-cover opacity-90 [mask-image:radial-gradient(circle_at_60%_60%,black,transparent_72%)]"
              />
              <h2 className="font-display text-2xl font-bold text-forest">कोण अर्ज करू शकते?</h2>
              <span className="mt-3 flex items-center gap-2">
                <span className="block h-[3px] w-12 rounded-full bg-gold" />
                <Leaf className="h-4 w-4 text-gold-deep" />
              </span>
              <ul className="mt-6 max-w-md space-y-4">
                {WHO.map((w) => (
                  <li key={w} className="flex items-start gap-3 text-[14px] leading-relaxed text-forest/80">
                    <CircleDot className="mt-0.5 h-4 w-4 shrink-0 text-gold-deep" />
                    {w}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Provides + requirements + CTA */}
        <section className="mx-auto max-w-[1400px] px-5 pb-12 sm:px-8 lg:px-12">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-[20px] border border-forest/10 bg-cream/60 p-7">
              <h2 className="font-display text-xl font-bold text-forest">Dwit Farm काय देते?</h2>
              <ul className="mt-5 space-y-3">
                {PROVIDES.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-[14px] leading-relaxed text-forest/80">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-forest" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[20px] border border-forest/10 bg-cream/60 p-7">
              <h2 className="font-display text-xl font-bold text-forest">फ्रँचायझी पार्टनरच्या अटी</h2>
              <ul className="mt-5 space-y-3">
                {REQUIREMENTS.map((r) => (
                  <li key={r} className="flex items-start gap-3 text-[14px] leading-relaxed text-forest/80">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-forest" />
                    {r}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[20px] bg-forest p-7 text-cream">
              <h2 className="font-display text-xl font-bold text-cream">फ्रँचायझी पार्टनर व्हायचे आहे?</h2>
              <p className="mt-3 text-[15px] leading-relaxed text-cream/80">
                आजच फॉर्म भरा आणि आमच्या टीमशी संपर्क साधा.
              </p>
              <a
                href="#franchise-form"
                className="group mt-6 inline-flex w-full items-center justify-center gap-3 rounded-lg bg-gradient-to-r from-gold-deep to-gold px-6 py-3.5 text-[15px] font-semibold text-ink transition-all duration-300 hover:-translate-y-0.5"
              >
                अर्ज करा
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <div className="mt-6 flex items-center gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-gold/40 text-gold">
                  <MessageCircle className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-[13px] text-cream/70">किंवा WhatsApp करा</p>
                  <a href="https://wa.me/911234567890" target="_blank" rel="noreferrer" className="font-display text-lg font-bold text-cream hover:text-gold">
                    +91 12345 67890
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enquiry form + contact */}
        <section id="franchise-form" className="mx-auto max-w-[1400px] scroll-mt-24 px-5 pb-14 sm:px-8 lg:px-12">
          <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
            <div className="rounded-[20px] border border-forest/10 bg-cream/60 p-7 sm:p-9">
              <h2 className="font-display text-2xl font-bold text-forest">फ्रँचायझी चौकशी फॉर्म</h2>
              <span className="mt-2 block h-[3px] w-12 rounded-full bg-gold" />

              <form onSubmit={onSubmit} className="mt-6 space-y-4" noValidate={false}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className={labelClass} htmlFor="fname">
                      पूर्ण नाव *
                    </label>
                    <input id="fname" name="name" required maxLength={100} className={`${inputClass} mt-1.5`} />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="fmobile">
                      मोबाईल नंबर *
                    </label>
                    <input
                      id="fmobile"
                      name="mobile"
                      type="tel"
                      required
                      pattern="[0-9+\s-]{10,15}"
                      title="कृपया वैध मोबाईल नंबर टाका"
                      className={`${inputClass} mt-1.5`}
                    />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="fwa">
                      WhatsApp नंबर *
                    </label>
                    <input
                      id="fwa"
                      name="whatsapp"
                      type="tel"
                      required
                      pattern="[0-9+\s-]{10,15}"
                      title="कृपया वैध WhatsApp नंबर टाका"
                      className={`${inputClass} mt-1.5`}
                    />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="femail">
                      ईमेल आयडी
                    </label>
                    <input id="femail" name="email" type="email" maxLength={255} className={`${inputClass} mt-1.5`} />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                  <div>
                    <label className={labelClass} htmlFor="fcity">
                      गाव / शहर *
                    </label>
                    <input id="fcity" name="city" required maxLength={80} className={`${inputClass} mt-1.5`} />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="fdistrict">
                      जिल्हा *
                    </label>
                    <input id="fdistrict" name="district" required maxLength={80} className={`${inputClass} mt-1.5`} />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="fstate">
                      राज्य *
                    </label>
                    <select id="fstate" name="state" required defaultValue="" className={`${inputClass} mt-1.5`}>
                      <option value="" disabled>
                        निवडा
                      </option>
                      <option>महाराष्ट्र</option>
                      <option>गुजरात</option>
                      <option>गोवा</option>
                      <option>कर्नाटक</option>
                      <option>मध्य प्रदेश</option>
                      <option>इतर</option>
                    </select>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className={labelClass} htmlFor="farea">
                      उपलब्ध जागा / क्षेत्रफळ *
                    </label>
                    <select id="farea" name="area" required defaultValue="" className={`${inputClass} mt-1.5`}>
                      <option value="" disabled>
                        निवडा
                      </option>
                      <option>1000 चौ. फुटांपेक्षा कमी</option>
                      <option>1000 – 2000 चौ. फूट</option>
                      <option>2000 – 5000 चौ. फूट</option>
                      <option>5000 चौ. फुटांपेक्षा जास्त</option>
                    </select>
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="finvest">
                      गुंतवणुकीची क्षमता (अंदाजे) *
                    </label>
                    <select id="finvest" name="investment" required defaultValue="" className={`${inputClass} mt-1.5`}>
                      <option value="" disabled>
                        निवडा
                      </option>
                      <option>₹1 लाखांपर्यंत</option>
                      <option>₹1 – 3 लाख</option>
                      <option>₹3 – 5 लाख</option>
                      <option>₹5 लाखांपेक्षा जास्त</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className={labelClass} htmlFor="fmsg">
                    Dwit Farm फ्रँचायझीत का सहभागी व्हायचे आहे? *
                  </label>
                  <textarea
                    id="fmsg"
                    name="message"
                    required
                    rows={4}
                    maxLength={1000}
                    className={`${inputClass} mt-1.5 resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  className="group inline-flex w-full items-center justify-center gap-3 rounded-lg bg-forest px-6 py-3.5 text-[15px] font-semibold text-cream transition-all duration-300 hover:-translate-y-0.5 hover:bg-forest/90 sm:w-auto sm:min-w-[280px]"
                >
                  चौकशी सबमिट करा
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>

                {sent && (
                  <p className="text-[14px] font-medium text-gold-deep">
                    धन्यवाद! तुमची चौकशी मिळाली आहे. आमची टीम लवकरच संपर्क करेल.
                  </p>
                )}
              </form>
            </div>

            <div className="rounded-[20px] border border-forest/10 bg-cream/60 p-7 sm:p-9">
              <h2 className="font-display text-2xl font-bold text-forest">फ्रँचायझी चौकशी संपर्क</h2>
              <p className="mt-3 text-[14px] leading-relaxed text-forest/70">
                आम्ही तुमच्या मदतीसाठी नेहमी तयार आहोत.
              </p>

              <ul className="mt-6 space-y-5">
                {CONTACTS.map(({ icon: Icon, title, value, href }) => (
                  <li key={title} className="flex items-start gap-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gold/15 text-forest">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="font-semibold text-forest">{title}</p>
                      {href ? (
                        <a
                          href={href}
                          target={href.startsWith("http") ? "_blank" : undefined}
                          rel="noreferrer"
                          className="text-[14px] text-forest/75 transition-colors hover:text-gold-deep"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-[14px] leading-relaxed text-forest/75">{value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>

      <SectionDivider />
      <SiteFooter />
    </>
  );
}
