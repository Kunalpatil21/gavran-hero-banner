import { useEffect, useRef, useState } from "react";
import { Home, Bird, HeartPulse, Wheat, Briefcase, Clock, Leaf, ArrowRight } from "lucide-react";

import farmSetup from "@/assets/topic-farm-setup.jpg.asset.json";
import chicks from "@/assets/topic-chicks.jpg.asset.json";
import health from "@/assets/topic-health.jpg.asset.json";
import feed from "@/assets/topic-feed.jpg.asset.json";
import business from "@/assets/topic-business.jpg.asset.json";
import session from "@/assets/training-session.jpg.asset.json";
import henFamily from "@/assets/hen-family.png";

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
    points: ["फार्म बनवण्याचे नियम", "शेडची उभारणी", "पिल्ले येण्याआधीची तयारी"],
  },
  {
    id: "rearing",
    title: "कोंबडी संगोपन",
    icon: Bird,
    image: chicks.url,
    alt: "Two yellow chicks on farm ground",
    points: ["पिल्लांचे संगोपन", "ऋतूनुसार व्यवस्थापन", "विविध कोंबडी जाती"],
  },
  {
    id: "health",
    title: "आरोग्य आणि औषधे",
    icon: HeartPulse,
    image: health.url,
    alt: "Healthy country hen standing in a farmyard",
    points: ["रोगाची लक्षणे", "औषधोपचार", "लसीकरण वेळापत्रक"],
  },
  {
    id: "feed",
    title: "खाद्य व खर्च",
    icon: Wheat,
    image: feed.url,
    alt: "Bowl of poultry feed with hens behind",
    points: ["खाद्य नियोजन", "खर्च कमी करणे", "अझोला व BSF फार्मिंग"],
  },
  {
    id: "business",
    title: "व्यवसाय मार्गदर्शन",
    icon: Briefcase,
    image: business.url,
    alt: "Free range flock of country hens",
    points: ["विक्रीची पद्धत", "नफा व खर्च नियोजन", "फार्म सुरक्षा"],
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
      { threshold: 0.1 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return { ref, shown };
}

export default function WhatYouWillLearn() {
  const topics = useReveal<HTMLDivElement>();
  const experience = useReveal<HTMLDivElement>();

  return (
    <section id="learn" className="relative overflow-hidden bg-cream pt-16 sm:pt-20">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold tracking-[0.28em] text-gold-deep">
            WHAT YOU WILL LEARN
          </p>
          <h2 className="mt-3 font-display text-4xl font-extrabold leading-[1.2] text-forest sm:text-5xl lg:text-[3.4rem]">
            तुम्हाला नक्की काय शिकायला मिळणार?
          </h2>
          <div className="mt-4 flex items-center justify-center gap-3">
            <span className="h-px w-16 bg-gradient-to-r from-transparent to-gold" />
            <Leaf className="h-4 w-4 text-gold-deep" />
            <span className="h-px w-16 bg-gradient-to-l from-transparent to-gold" />
          </div>
        </div>

        {/* Topic grid */}
        <div
          ref={topics.ref}
          className={`mt-10 grid gap-6 transition-all duration-700 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 ${
            topics.shown ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          {TOPICS.map(({ id, title, icon: Icon, image, alt, points }) => (
            <article
              key={id}
              className="group overflow-hidden rounded-2xl border border-forest/10 bg-white shadow-[0_16px_40px_-28px_rgba(20,40,20,0.6)] transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/60 hover:shadow-[0_26px_60px_-28px_rgba(20,40,20,0.7)]"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={image}
                  alt={alt}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <span className="absolute bottom-3 left-4 grid h-12 w-12 place-items-center rounded-full bg-forest text-cream shadow-lg transition-colors duration-300 group-hover:bg-gold-deep">
                  <Icon className="h-6 w-6" />
                </span>
              </div>
              <div className="px-5 pb-6 pt-4">
                <h3 className="font-display text-xl font-bold text-forest">{title}</h3>
                <ul className="mt-3 space-y-2.5">
                  {points.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-[15px] text-forest/80">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-deep" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        {/* Training experience */}
        <div
          ref={experience.ref}
          className={`mt-14 grid gap-8 rounded-3xl border border-forest/10 bg-white p-6 shadow-[0_24px_70px_-40px_rgba(20,40,20,0.7)] transition-all duration-700 sm:p-8 lg:grid-cols-[1.1fr_1fr] lg:items-stretch ${
            experience.shown ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="flex flex-col">
            <h3 className="font-display text-3xl font-extrabold leading-snug text-forest sm:text-4xl lg:text-[2.75rem]">
              एक दिवस. प्रत्यक्ष फार्मवर.
              <br />
              आयुष्यभरासाठी ज्ञान.
            </h3>
            <div className="mt-4 flex items-center gap-3">
              <span className="h-px w-14 bg-gradient-to-r from-transparent to-gold" />
              <Leaf className="h-4 w-4 text-gold-deep" />
              <span className="h-px w-14 flex-1 bg-gradient-to-l from-transparent to-gold" />
            </div>

            <ol className="no-scrollbar mt-7 flex gap-3 overflow-x-auto rounded-2xl bg-cream p-5">
              {TIMELINE.map(({ icon: Icon, label, sub }, i) => (
                <li key={label} className="flex shrink-0 items-center gap-3">
                  <div className="w-24 text-center">
                    <span className="mx-auto grid h-12 w-12 place-items-center rounded-full border border-forest/15 bg-white text-forest shadow-sm transition-colors duration-300 hover:border-gold hover:text-gold-deep">
                      <Icon className="h-5 w-5" />
                    </span>
                    <p className="mt-2 text-sm font-semibold leading-tight text-forest">{label}</p>
                    <p className="text-xs leading-tight text-forest/60">{sub}</p>
                  </div>
                  {i < TIMELINE.length - 1 && (
                    <ArrowRight className="h-4 w-4 shrink-0 text-forest/30" aria-hidden="true" />
                  )}
                </li>
              ))}
            </ol>

            <p className="mt-6 text-center text-base text-forest/70">
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
              className="h-72 w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-96 lg:h-full"
            />
          </div>
        </div>
      </div>

      {/* Closing wave divider */}
      <div className="relative mt-14 h-28 sm:h-36">
        <svg
          className="absolute inset-x-0 bottom-0 h-full w-full"
          viewBox="0 0 1440 160"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0,74 C240,10 480,10 720,52 C960,94 1200,116 1440,58 L1440,160 L0,160 Z"
            className="fill-gold"
          />
          <path
            d="M0,88 C240,24 480,24 720,66 C960,108 1200,130 1440,72 L1440,160 L0,160 Z"
            className="fill-forest"
          />
        </svg>
        <img
          src={henFamily}
          alt=""
          aria-hidden="true"
          loading="lazy"
          width={1024}
          height={512}
          className="absolute bottom-1 left-1/2 h-20 w-auto -translate-x-1/2 opacity-90 sm:h-28"
        />
      </div>
    </section>
  );
}
