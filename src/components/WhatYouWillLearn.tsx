import { useCallback, useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Home,
  Bird,
  HeartPulse,
  Wheat,
  Briefcase,
  Clock,
  UtensilsCrossed,
  Coffee,
  BookOpen,
  Send,
  BadgeCheck,
  GraduationCap,
  Leaf,
} from "lucide-react";

import farmSetup from "@/assets/topic-farm-setup.jpg.asset.json";
import chicks from "@/assets/topic-chicks.jpg.asset.json";
import health from "@/assets/topic-health.jpg.asset.json";
import feed from "@/assets/topic-feed.jpg.asset.json";
import business from "@/assets/topic-business.jpg.asset.json";
import session from "@/assets/training-session.jpg.asset.json";

type Topic = {
  id: string;
  title: string;
  icon: typeof Home;
  image: string;
  alt: string;
  points: string[];
};

const TOPICS: Topic[] = [
  {
    id: "setup",
    title: "फार्म सेटअप",
    icon: Home,
    image: farmSetup.url,
    alt: "Bamboo and wood poultry shed on a farm",
    points: ["फार्म बनवण्याचे नियम", "शेडची उभारणी", "पिल्ले येण्याआधीची तयारी", "कंपाऊंड नियोजन"],
  },
  {
    id: "rearing",
    title: "कोंबडी संगोपन",
    icon: Bird,
    image: chicks.url,
    alt: "Two yellow chicks on farm ground",
    points: ["पिल्लांचे संगोपन", "ऋतूनुसार तापमान", "ऋतूनुसार व्यवस्थापन", "विविध कोंबडी जाती"],
  },
  {
    id: "health",
    title: "आरोग्य आणि औषधे",
    icon: HeartPulse,
    image: health.url,
    alt: "Healthy country hen standing in a farmyard",
    points: ["कोंबड्यांचे रोग", "रोगाची लक्षणे", "औषधोपचार", "लसीकरण"],
  },
  {
    id: "feed",
    title: "खाद्य व खर्च",
    icon: Wheat,
    image: feed.url,
    alt: "Bowl of poultry feed with hens behind",
    points: ["पिल्लांचे खाद्य नियोजन", "मोठ्या पक्ष्यांचे खाद्य", "खाद्य खर्च कमी करणे", "अझोला व BSF फार्मिंग"],
  },
  {
    id: "business",
    title: "व्यवसाय मार्गदर्शन",
    icon: Briefcase,
    image: business.url,
    alt: "Free range flock of country hens",
    points: ["कोंबड्या विकण्याची पद्धत", "नफा व खर्चाचे नियोजन", "फार्म सुरक्षा", "आवश्यक मार्गदर्शन"],
  },
];

const TIMELINE = [
  { icon: Clock, label: "10:00 AM", sub: "Training Begins" },
  { icon: Home, label: "Farm Setup", sub: "Shed & planning" },
  { icon: Bird, label: "Chicken Management", sub: "Daily care" },
  { icon: HeartPulse, label: "Health & Medicine", sub: "Disease control" },
  { icon: Wheat, label: "Feed Planning", sub: "Cost control" },
  { icon: Briefcase, label: "Business Guidance", sub: "Selling & profit" },
  { icon: Clock, label: "6:30 PM", sub: "Training Ends" },
];

const PERKS = [
  { icon: GraduationCap, title: "One Day Practical Training", desc: "Hands-on learning at the farm" },
  { icon: UtensilsCrossed, title: "Veg & Non-Veg Lunch", desc: "Delicious lunch included" },
  { icon: Coffee, title: "2 Times Tea & Snacks", desc: "Tea, snacks & refreshments" },
  { icon: BookOpen, title: "Training Material & Notes", desc: "Study material & reference notes" },
  { icon: Send, title: "1 Year Online Access", desc: "Telegram training access" },
  { icon: BadgeCheck, title: "Government Certificate", desc: "Certificate after training" },
];

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return { ref, shown };
}

export default function WhatYouWillLearn() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(0);
  const topics = useReveal<HTMLDivElement>();
  const experience = useReveal<HTMLDivElement>();

  const scrollBy = useCallback((dir: -1 | 1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const step = card ? card.offsetWidth + 24 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  }, []);

  const onScroll = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const step = card ? card.offsetWidth + 24 : 1;
    setActive(Math.round(el.scrollLeft / step));
  }, []);

  return (
    <section id="learn" className="relative bg-cream py-20 sm:py-24">
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-medium tracking-[0.32em] text-gold-deep">WHAT YOU WILL LEARN</p>
          <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-forest sm:text-4xl lg:text-5xl">
            तुम्हाला नक्की काय शिकायला मिळणार?
          </h2>
          <div className="mt-5 flex items-center justify-center gap-3">
            <span className="h-px w-16 bg-gradient-to-r from-transparent to-gold" />
            <Leaf className="h-4 w-4 text-gold-deep" />
            <span className="h-px w-16 bg-gradient-to-l from-transparent to-gold" />
          </div>
        </div>

        {/* Carousel */}
        <div
          ref={topics.ref}
          className={`relative mt-12 transition-all duration-700 ${
            topics.shown ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <button
            type="button"
            onClick={() => scrollBy(-1)}
            aria-label="Previous topics"
            className="absolute -left-1 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-forest text-cream shadow-lg transition-all duration-300 hover:scale-105 hover:bg-forest/90 lg:-left-6"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => scrollBy(1)}
            aria-label="Next topics"
            className="absolute -right-1 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-forest text-cream shadow-lg transition-all duration-300 hover:scale-105 hover:bg-forest/90 lg:-right-6"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div
            ref={trackRef}
            onScroll={onScroll}
            className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-1 pb-4 lg:px-8"
          >
            {TOPICS.map(({ id, title, icon: Icon, image, alt, points }) => (
              <article
                key={id}
                data-card
                className="group w-[86%] shrink-0 snap-start overflow-hidden rounded-2xl border border-forest/10 bg-white shadow-[0_16px_40px_-28px_rgba(20,40,20,0.6)] transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/50 hover:shadow-[0_26px_60px_-28px_rgba(20,40,20,0.7)] sm:w-[46%] lg:w-[calc((100%-72px)/4)] xl:w-[calc((100%-96px)/5)]"
              >
                <div className="flex items-center gap-3 px-5 pt-5">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-forest text-cream transition-colors duration-300 group-hover:bg-gold-deep">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-display text-lg font-bold text-forest">{title}</h3>
                </div>
                <div className="mt-4 overflow-hidden px-5">
                  <img
                    src={image}
                    alt={alt}
                    loading="lazy"
                    width={800}
                    height={600}
                    className="h-40 w-full rounded-xl object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <ul className="space-y-2.5 px-5 py-5">
                  {points.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-sm text-forest/80">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-deep" />
                      {p}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="mt-4 flex justify-center gap-2">
            {TOPICS.map((t, i) => (
              <span
                key={t.id}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === active ? "w-6 bg-forest" : "w-2 bg-forest/25"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <a
            href="#learn"
            className="group inline-flex items-center gap-4 rounded-lg bg-forest px-8 py-4 text-sm font-medium text-cream shadow-[0_18px_40px_-22px_rgba(20,40,20,0.9)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-forest/90"
          >
            सर्व विषय पहा
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

        {/* Training experience */}
        <div
          ref={experience.ref}
          className={`mt-16 grid gap-8 rounded-3xl border border-forest/10 bg-white/70 p-6 shadow-[0_24px_70px_-40px_rgba(20,40,20,0.7)] transition-all duration-700 sm:p-8 lg:grid-cols-[1.15fr_1fr] lg:items-stretch ${
            experience.shown ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="flex flex-col">
            <h3 className="font-display text-2xl font-extrabold leading-snug text-forest sm:text-3xl lg:text-4xl">
              एक दिवस. प्रत्यक्ष फार्मवर.
              <br />
              आयुष्यभरासाठी ज्ञान.
            </h3>
            <div className="mt-4 flex items-center gap-3">
              <span className="h-px w-14 bg-gradient-to-r from-transparent to-gold" />
              <Leaf className="h-4 w-4 text-gold-deep" />
              <span className="h-px w-14 bg-gradient-to-l from-transparent to-gold" />
            </div>

            {/* Timeline */}
            <ol className="no-scrollbar mt-7 flex gap-4 overflow-x-auto rounded-2xl bg-cream/70 p-5 sm:gap-2">
              {TIMELINE.map(({ icon: Icon, label, sub }, i) => (
                <li key={label} className="flex shrink-0 items-center gap-4 sm:gap-2">
                  <div className="w-24 text-center">
                    <span className="mx-auto grid h-11 w-11 place-items-center rounded-full border border-forest/15 bg-white text-forest shadow-sm transition-colors duration-300 hover:border-gold hover:text-gold-deep">
                      <Icon className="h-5 w-5" />
                    </span>
                    <p className="mt-2 text-[13px] font-semibold leading-tight text-forest">{label}</p>
                    <p className="text-[11px] leading-tight text-forest/60">{sub}</p>
                  </div>
                  {i < TIMELINE.length - 1 && (
                    <ArrowRight className="h-4 w-4 shrink-0 text-forest/30" aria-hidden="true" />
                  )}
                </li>
              ))}
            </ol>

            {/* Perks */}
            <ul className="mt-6 grid gap-x-4 gap-y-6 rounded-2xl bg-cream/70 p-5 sm:grid-cols-3 lg:grid-cols-6">
              {PERKS.map(({ icon: Icon, title, desc }, i) => (
                <li
                  key={title}
                  className={`px-1 text-center transition-transform duration-300 hover:-translate-y-1 ${
                    i > 0 ? "lg:border-l lg:border-forest/10" : ""
                  }`}
                >
                  <Icon className="mx-auto h-6 w-6 text-gold-deep" />
                  <p className="mt-2 text-[12px] font-semibold leading-tight text-forest">{title}</p>
                  <p className="mt-1 text-[11px] leading-tight text-forest/60">{desc}</p>
                </li>
              ))}
            </ul>

            <p className="mt-6 text-center text-sm text-forest/70">
              <span className="text-gold-deep">✦</span> प्रत्यक्ष अनुभव • योग्य मार्गदर्शन • यशस्वी
              कुक्कुटपालन <span className="text-gold-deep">✦</span>
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl">
            <img
              src={session.url}
              alt="Farmers attending a Gavran poultry training session with a trainer at DWIT Farm"
              loading="lazy"
              width={1200}
              height={1200}
              className="h-64 w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-80 lg:h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
