import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  Menu,
  X,
  Leaf,
  ShieldCheck,
  Heart,
  Truck,
  Headphones,
  Phone,
  ClipboardList,
  Package,
  Bird,
  Drumstick,
  Egg,
  Star,
  UserCheck,
  Clock,
  IndianRupee,
  Boxes,
  Timer,
  CreditCard,
  MessageCircle,
  Check,
  Sparkles,
} from "lucide-react";

import logoAsset from "@/assets/dwit-logo.png";
import bannerAsset from "@/assets/gp-banner.jpg.asset.json";
import chicksAsset from "@/assets/gp-chicks.jpg.asset.json";
import hensAsset from "@/assets/gp-hens.jpg.asset.json";
import meatAsset from "@/assets/gp-meat.jpg.asset.json";
import eggsAsset from "@/assets/gp-eggs.jpg.asset.json";
import SectionDivider from "@/components/SectionDivider";
import SiteFooter from "@/components/SiteFooter";

export const Route = createFileRoute("/gavran-poultry")({
  head: () => ({
    meta: [
      { title: "Gavran Poultry — Chicks, Hens, Meat & Eggs | DWIT Farm" },
      {
        name: "description",
        content:
          "Pure gavran chicks, live hens, fresh country chicken meat and farm eggs from DWIT Farm, delivered fresh and safe across Maharashtra.",
      },
      { property: "og:title", content: "Gavran Poultry — Chicks, Hens, Meat & Eggs | DWIT Farm" },
      {
        property: "og:description",
        content:
          "Naturally raised gavran poultry products from DWIT Farm with home delivery across Maharashtra.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GavranPoultryPage,
});

const NAV = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Gavran Poultry", href: "/gavran-poultry" },
  { label: "Training", href: "/#training" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Contact", href: "/contact" },
];

const WHATSAPP = "https://wa.me/919226466497";

const USPS = [
  { icon: Leaf, title: "100% शुद्ध गावरान", sub: "नैसर्गिक आहार, निरोगी आणि तंदुरुस्त" },
  { icon: ShieldCheck, title: "रोगप्रतिकारक क्षमता जास्त", sub: "नैसर्गिक वातावरणात वाढवलेले" },
  { icon: Heart, title: "आरोग्यदायी आणि स्वादिष्ट", sub: "चवदार, पौष्टिक आणि सुरक्षित" },
  { icon: Truck, title: "संपूर्ण महाराष्ट्रात डिलिव्हरी", sub: "वेळेवर आणि सुरक्षित डिलिव्हरी" },
  { icon: Headphones, title: "ऑर्डर व सपोर्ट", sub: "कधीही संपर्क करा, आम्ही तयार" },
];

const PRODUCTS = [
  {
    no: "01",
    icon: Bird,
    image: chicksAsset.url,
    alt: "गावरान बाळ पिल्ले",
    title: "बाळ पिल्ले (चिक्स)",
    sub: "निरोगी आणि जोमदार गावरान पिल्ले",
    points: [
      "लसीकरण केलेली",
      "रोगप्रतिकारक क्षमता जास्त",
      "खाणे वाढ आणि कमी मृत्युदर",
      "योग्य मार्गदर्शनासह उपलब्ध",
    ],
    price: "₹30 – ₹45",
    unit: "/ प्रति पिल्ले",
    min: "किमान ऑर्डर: 25 पिल्ले",
  },
  {
    no: "02",
    icon: Bird,
    image: hensAsset.url,
    alt: "गावरान कोंबडी आणि कोंबडा",
    title: "कोंबडी / कोंबडा (जिवंत)",
    sub: "शुद्ध गावरान कोंबड्या आणि कोंबडे",
    points: [
      "पालनासाठी आणि प्रजननासाठी योग्य",
      "नैसर्गिक पद्धतीने वाढवलेले",
      "तंदुरुस्त आणि वजनदार",
      "रोगमुक्त आणि सक्रिय",
    ],
    price: "₹350 – ₹600",
    unit: "/ प्रति नग",
    min: "किमान ऑर्डर: 5 नग",
  },
  {
    no: "03",
    icon: Drumstick,
    image: meatAsset.url,
    alt: "ताजे गावरान चिकन",
    title: "मांस (मटणासाठी)",
    sub: "ताजे आणि स्वच्छ गावरान मांस",
    points: [
      "नैसर्गिक आहारावर वाढवलेले",
      "चवदार आणि पौष्टिक",
      "स्वच्छ, हायजेनिक प्रक्रिया",
      "फ्रेश कट आणि होम डिलिव्हरी",
    ],
    price: "₹320 – ₹380",
    unit: "/ प्रति किलो",
    min: "किमान ऑर्डर: 1 किलो",
  },
  {
    no: "04",
    icon: Egg,
    image: eggsAsset.url,
    alt: "गावरान अंडी",
    title: "गावरान अंडी",
    sub: "ताजी, पौष्टिक आणि शुद्ध गावरान अंडी",
    points: [
      "दैनंदिन ताजी अंडी",
      "हाय प्रोटीन आणि पौष्टिक",
      "स्वच्छ आणि नैसर्गिक",
      "घरपोच डिलिव्हरी उपलब्ध",
    ],
    price: "₹110 – ₹140",
    unit: "/ प्रति डझन",
    min: "किमान ऑर्डर: 1 डझन (12 अंडी)",
  },
];

const STEPS = [
  { icon: Phone, title: "1. संपर्क करा", sub: "WhatsApp / कॉल द्वारे तुमची ऑर्डर द्या" },
  { icon: ClipboardList, title: "2. ऑर्डर कन्फर्म", sub: "तुमची ऑर्डर कन्फर्म करून तपशील सांगा" },
  { icon: Package, title: "3. तयारी आणि पॅकिंग", sub: "ताजे उत्पादन स्वच्छ पॅक करून तयार केले जाते" },
  { icon: Truck, title: "4. डिलिव्हरी", sub: "वेळेवर आणि सुरक्षित तुमच्या दारी" },
];

const SPECIALS = [
  { icon: Leaf, title: "नैसर्गिक पद्धतीने पालन", sub: "रसायनमुक्त आहार आणि मोकळ्या वातावरणात वाढ" },
  { icon: ShieldCheck, title: "निरोगी आणि तंदुरुस्त", sub: "रोगप्रतिकारक क्षमता जास्त, मृत्युदर कमी" },
  { icon: Star, title: "उत्तम चव आणि गुणवत्ता", sub: "चवदार, पौष्टिक आणि उत्तम दर्जाचे उत्पादन" },
  { icon: UserCheck, title: "तज्ज्ञ मार्गदर्शन", sub: "अनुभवी टीमचे योग्य मार्गदर्शन आणि सपोर्ट" },
  { icon: Clock, title: "वेळेवर डिलिव्हरी", sub: "वेळेवर आणि सुरक्षित डिलिव्हरीची हमी" },
  { icon: IndianRupee, title: "योग्य दर", sub: "उत्तम गुणवत्ता आणि वाजवी दरात उपलब्ध" },
];

const CITIES = [
  ["पुणे", "सातारा", "औरंगाबाद"],
  ["मुंबई", "सांगली", "सोलापूर"],
  ["नाशिक", "अकोला", "धुळे"],
  ["नागपूर", "अमरावती", ""],
  ["कोल्हापूर", "सोलापूर", ""],
];

const DELIVERY_INFO = [
  { icon: Boxes, label: "किमान ऑर्डर:", value: "उत्पादनानुसार (वरील तपशील पहा)" },
  { icon: Timer, label: "डिलिव्हरी वेळ:", value: "सामान्यतः 24 ते 48 तासांत" },
  { icon: Truck, label: "डिलिव्हरी चार्ज:", value: "अंतरानुसार लागू (मोठ्या ऑर्डरवर फ्री डिलिव्हरी)" },
  { icon: CreditCard, label: "पेमेंट पद्धती:", value: "UPI, गुगल पे, फोन पे, बँक ट्रान्सफर, रोख" },
  { icon: Phone, label: "ऑर्डर करण्याची पद्धत:", value: "WhatsApp / कॉल" },
];

const GUARANTEES = [
  "शुद्ध गावरान उत्पादन",
  "रोगमुक्त आणि तंदुरुस्त",
  "स्वच्छ आणि हायजेनिक",
  "समाधान किंवा पुनर्पूर्तता",
  "ग्राहक समाधान आमची प्राधान्यता",
];

function SectionHeading({ label, title }: { label: string; title: string }) {
  return (
    <div className="text-center">
      <p className="flex items-center justify-center gap-2 font-display text-xl font-bold text-forest sm:text-2xl">
        <Leaf className="h-5 w-5 text-gold-deep" />
        {label}
        <Leaf className="h-5 w-5 scale-x-[-1] text-gold-deep" />
      </p>
      {title ? (
        <h2 className="mt-3 font-display text-[1.9rem] font-extrabold leading-tight text-forest sm:text-[2.6rem]">
          {title}
        </h2>
      ) : null}
    </div>
  );
}

function GavranPoultryPage() {
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
                GAVRAN POULTRY &amp; SUPPLY
              </span>
            </span>
          </Link>

          <ul className="hidden items-center justify-center gap-6 lg:flex xl:gap-8">
            {NAV.map((item) => {
              const isActive = item.href === "/gavran-poultry";
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
            </ul>
          </div>
        )}
      </header>

      <main className="bg-white pt-[72px] sm:pt-[84px]">
        {/* Banner */}
        <section className="relative isolate overflow-hidden bg-cream">
          <img
            src={bannerAsset.url}
            alt="Farmer holding a healthy gavran hen with free-range chickens on the DWIT Farm"
            className="absolute inset-y-0 right-0 -z-10 h-full w-full object-cover object-center sm:w-[68%]"
            loading="eager"
            width={1600}
            height={900}
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-cream from-25% via-cream/85 via-45% to-transparent to-72%" />
          <div className="absolute inset-0 -z-10 bg-cream/55 sm:hidden" />

          <div className="mx-auto flex min-h-[300px] max-w-[1400px] items-center px-5 py-12 sm:min-h-[340px] sm:px-8 lg:min-h-[380px] lg:px-12">
            <div className="max-w-md">
              <p className="flex items-center gap-2 text-[13px] font-semibold tracking-[0.18em] text-forest/80">
                <Leaf className="h-4 w-4 text-gold-deep" />
                GAVRAN POULTRY
              </p>
              <h1 className="mt-4 font-display text-[2.4rem] font-extrabold leading-[1.08] tracking-tight text-forest sm:text-[2.9rem] lg:text-[3.2rem]">
                शुद्ध गावरान
                <br />
                <span className="text-gold-deep">पोल्ट्री उत्पादने</span>
              </h1>
              <span className="mt-5 block h-[3px] w-16 rounded-full bg-gold" />
              <p className="mt-5 text-[15px] leading-relaxed text-forest/75">
                पिल्ले, कोंबड्या, ताजे मांस आणि गावरान अंडी — नैसर्गिक पद्धतीने वाढवलेली,
                थेट फार्मवरून तुमच्या घरापर्यंत.
              </p>
            </div>
          </div>
        </section>

        {/* Intro + USPs */}
        <section className="bg-white">
          <div className="mx-auto max-w-[1400px] px-5 pb-4 pt-14 sm:px-8 lg:px-12">
            <SectionHeading
              label="आमच्याकडून काय मिळेल?"
              title="शुद्ध गावरान कोंबड्या – संपूर्ण महाराष्ट्रात उपलब्ध!"
            />
            <div className="mx-auto mt-4 flex max-w-xs items-center gap-3">
              <span className="h-px flex-1 bg-gold/50" />
              <Leaf className="h-4 w-4 text-gold-deep" />
              <span className="h-px flex-1 bg-gold/50" />
            </div>
            <p className="mx-auto mt-5 max-w-3xl text-center text-[16px] leading-relaxed text-forest/75">
              आमच्या फार्मवर नैसर्गिक पद्धतीने वाढवलेले गावरान कोंबड्या, पिल्ले, मांस आणि अंडी
              तुमच्यापर्यंत ताजी आणि सुरक्षित पोहोचवण्याची आमची हमी.
            </p>

            <div className="mt-9 grid gap-px overflow-hidden rounded-2xl border border-forest/10 bg-forest/10 shadow-[0_20px_50px_-40px_rgba(20,40,20,0.9)] sm:grid-cols-2 lg:grid-cols-5">
              {USPS.map(({ icon: Icon, title, sub }) => (
                <div key={title} className="flex items-start gap-3 bg-cream/60 p-5">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white text-gold-deep shadow-sm">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-[15px] font-semibold leading-snug text-forest">{title}</p>
                    <p className="mt-1 text-[13px] leading-snug text-forest/65">{sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Product cards */}
        <section className="bg-white">
          <div className="mx-auto grid max-w-[1400px] gap-6 px-5 py-10 sm:grid-cols-2 sm:px-8 lg:grid-cols-4 lg:px-12">
            {PRODUCTS.map(({ no, icon: Icon, image, alt, title, sub, points, price, unit, min }) => (
              <article
                key={title}
                className="group flex flex-col overflow-hidden rounded-2xl border border-forest/12 bg-white shadow-[0_18px_44px_-34px_rgba(20,40,20,0.9)] transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/45 hover:shadow-[0_26px_60px_-30px_rgba(20,40,20,0.7)]"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={image}
                    alt={alt}
                    loading="lazy"
                    width={1024}
                    height={700}
                    className="h-44 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 grid h-9 w-9 place-items-center rounded-lg bg-forest text-[13px] font-bold text-cream">
                    {no}
                  </span>
                  <span className="absolute -bottom-5 left-4 grid h-11 w-11 place-items-center rounded-full border-4 border-white bg-forest text-cream">
                    <Icon className="h-5 w-5" />
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-5 pt-8">
                  <h3 className="font-display text-[1.15rem] font-bold text-forest">{title}</h3>
                  <p className="mt-1.5 text-[13.5px] leading-snug text-forest/65">{sub}</p>

                  <ul className="mt-4 space-y-2">
                    {points.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-[13.5px] leading-snug text-forest/80">
                        <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold-deep" />
                        {p}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 rounded-xl bg-cream/80 p-4">
                    <p className="font-display text-[1.3rem] font-extrabold text-forest">
                      {price}
                      <span className="ml-1 text-[13px] font-medium text-forest/65">{unit}</span>
                    </p>
                    <p className="mt-1 text-[12.5px] text-forest/60">{min}</p>
                  </div>

                  <a
                    href={WHATSAPP}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center justify-center gap-2 rounded-lg bg-forest px-4 py-3 text-[14px] font-medium text-cream transition-all duration-300 hover:-translate-y-0.5 hover:bg-forest/90"
                  >
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp वर चौकशी करा
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* How to order */}
        <section className="bg-white">
          <div className="mx-auto max-w-[1400px] px-5 py-8 sm:px-8 lg:px-12">
            <SectionHeading label="ऑर्डर कशी करावी?" title="" />
            <div className="mt-7 grid items-stretch gap-4 rounded-2xl border border-forest/10 bg-cream/60 p-6 sm:grid-cols-2 lg:grid-cols-4">
              {STEPS.map(({ icon: Icon, title, sub }, i) => (
                <div key={title} className="relative flex items-start gap-3">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-white text-gold-deep shadow-sm">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="pr-6">
                    <p className="text-[15px] font-semibold text-forest">{title}</p>
                    <p className="mt-1 text-[13px] leading-snug text-forest/65">{sub}</p>
                  </div>
                  {i < STEPS.length - 1 && (
                    <ArrowRight className="absolute right-0 top-4 hidden h-4 w-4 text-forest/30 lg:block" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Specials */}
        <section className="bg-white">
          <div className="mx-auto max-w-[1400px] px-5 py-10 sm:px-8 lg:px-12">
            <SectionHeading label="DWIT FARM ची खासियत?" title="" />
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
              {SPECIALS.map(({ icon: Icon, title, sub }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-forest/10 bg-cream/55 p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-gold/45 hover:bg-white hover:shadow-[0_20px_46px_-34px_rgba(20,40,20,0.85)]"
                >
                  <span className="mx-auto grid h-14 w-14 place-items-center rounded-full border border-gold/30 bg-white text-gold-deep">
                    <Icon className="h-6 w-6" />
                  </span>
                  <p className="mt-4 text-[15px] font-semibold leading-snug text-forest">{title}</p>
                  <p className="mt-2 text-[13px] leading-snug text-forest/65">{sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Delivery */}
        <section className="bg-white">
          <div className="mx-auto grid max-w-[1400px] gap-6 px-5 py-8 sm:px-8 lg:grid-cols-2 lg:px-12">
            <div className="rounded-2xl border border-forest/10 bg-cream/60 p-7">
              <h3 className="font-display text-[1.6rem] font-extrabold text-forest">
                संपूर्ण महाराष्ट्रात डिलिव्हरी!
              </h3>
              <p className="mt-2 text-[15px] text-forest/70">आम्ही खालील भागात घरपोच डिलिव्हरी करतो.</p>
              <div className="relative mt-5">
                <ul className="grid max-w-lg grid-cols-2 gap-x-6 gap-y-2.5 sm:grid-cols-3">
                  {CITIES.flat()
                    .filter(Boolean)
                    .map((c) => (
                      <li key={c} className="flex items-center gap-2 text-[15px] text-forest/85">
                        <span className="h-1.5 w-1.5 rounded-full bg-gold-deep" />
                        {c}
                      </li>
                    ))}
                </ul>
                <Truck className="pointer-events-none absolute -top-2 right-2 hidden h-16 w-16 text-forest/15 lg:block" />
              </div>
              <p className="mt-5 text-[14.5px] text-forest/70">
                आणि इतर सर्व जिल्ह्यांमध्ये डिलिव्हरी उपलब्ध.
              </p>
            </div>

            <div className="rounded-2xl border border-forest/10 bg-cream/60 p-7">
              <h3 className="font-display text-[1.6rem] font-extrabold text-forest">डिलिव्हरी माहिती</h3>
              <ul className="mt-5 space-y-4">
                {DELIVERY_INFO.map(({ icon: Icon, label, value }) => (
                  <li key={label} className="flex items-start gap-3">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-white text-gold-deep shadow-sm">
                      <Icon className="h-4.5 w-4.5" />
                    </span>
                    <p className="text-[14.5px] leading-snug text-forest/80">
                      <span className="font-semibold text-forest">{label} </span>
                      {value}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* CTA band */}
        <section className="bg-white">
          <div className="mx-auto max-w-[1400px] px-5 py-8 sm:px-8 lg:px-12">
            <div className="flex flex-col items-center gap-6 rounded-2xl bg-forest px-7 py-8 text-cream lg:flex-row lg:justify-between">
              <div className="flex items-center gap-5">
                <span className="grid h-16 w-16 shrink-0 place-items-center rounded-full border border-gold/50 text-gold">
                  <Phone className="h-7 w-7" />
                </span>
                <div>
                  <p className="font-display text-[1.55rem] font-extrabold leading-tight">
                    अधिक माहितीसाठी आजच संपर्क करा!
                  </p>
                  <p className="mt-1.5 text-[15px] text-cream/75">
                    तुमच्या गरजेनुसार सर्वोत्तम सल्ला आणि सेवा मिळेल.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-gold-deep to-gold px-6 py-3.5 text-[15px] font-medium text-ink transition-transform duration-300 hover:-translate-y-0.5"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp वर मेसेज करा
                </a>
                <a
                  href="tel:+919226466497"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3.5 text-[15px] font-medium text-forest transition-transform duration-300 hover:-translate-y-0.5"
                >
                  <Phone className="h-4 w-4" />
                  +91 92264 66497
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Guarantee strip */}
        <section className="bg-white">
          <div className="mx-auto max-w-[1400px] px-5 pb-12 sm:px-8 lg:px-12">
            <div className="relative overflow-hidden rounded-2xl border border-forest/10 bg-cream/60 px-6 py-7">
              <Sparkles className="pointer-events-none absolute -left-3 bottom-0 h-20 w-20 text-forest/10" />
              <Sparkles className="pointer-events-none absolute -right-3 top-0 h-20 w-20 text-forest/10" />
              <h3 className="text-center font-display text-[1.4rem] font-extrabold text-forest">
                आमची हमी – शुद्धता, गुणवत्ता आणि विश्वास!
              </h3>
              <ul className="mt-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
                {GUARANTEES.map((g) => (
                  <li key={g} className="flex items-center gap-2 text-[14px] text-forest/80">
                    <span className="grid h-6 w-6 place-items-center rounded-full border border-gold/40 text-gold-deep">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    {g}
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
