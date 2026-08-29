import { useEffect, useRef, useState } from "react";
import {
  Home,
  Bird,
  HeartPulse,
  Wheat,
  Briefcase,
  Clock,
  Leaf,
  Users,
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
          className={`relative mt-14 overflow-hidden rounded-[32px] border border-forest/10 bg-gradient-to-br from-white via-cream to-white p-5 shadow-[0_30px_90px_-50px_rgba(20,40,20,0.85)] transition-all duration-700 sm:p-8 ${
            experience.shown ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-gold/15 blur-3xl"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-28 -left-24 h-72 w-72 rounded-full bg-forest/10 blur-3xl"
          />

          <div className="relative grid gap-8 lg:grid-cols-[1fr_400px] lg:items-start">
            <div className="flex min-w-0 flex-col">
              <h3 className="font-display text-3xl font-extrabold leading-snug text-forest sm:text-4xl lg:text-[2.9rem]">
                एक दिवस. प्रत्यक्ष फार्मवर.
                <br />
                <span className="text-gold-deep">आयुष्यभरासाठी ज्ञान.</span>
              </h3>
              <div className="mt-4 flex items-center gap-3">
                <span className="h-1 w-14 rounded-full bg-gold" />
                <Leaf className="h-4 w-4 text-gold-deep" />
              </div>
              <p className="mt-4 max-w-xl text-[17px] leading-relaxed text-forest/75">
                संपूर्ण दिवसाची प्रात्यक्षिके, तज्ज्ञांचे मार्गदर्शन आणि प्रत्यक्ष अनुभवातून शिका आणि
                आत्मनिर्भर व्हा.
              </p>

              <ol className="mt-7 grid grid-cols-3 gap-y-6 rounded-2xl border border-forest/10 bg-white/80 p-5 shadow-inner backdrop-blur sm:grid-cols-4 xl:grid-cols-7">
                {TIMELINE.map(({ icon: Icon, label, sub }) => (
                  <li key={label} className="group text-center">
                    <span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-forest text-cream shadow-md transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-gold-deep sm:h-14 sm:w-14">
                      <Icon className="h-6 w-6" />
                    </span>
                    <p className="mt-2.5 px-1 text-[13px] font-bold leading-tight text-forest sm:text-sm">{label}</p>
                    <p className="mt-0.5 px-1 text-[11px] leading-tight text-forest/60 sm:text-xs">{sub}</p>
                  </li>
                ))}
              </ol>

            </div>

            <div className="lg:sticky lg:top-24">
              <div className="group relative overflow-hidden rounded-[26px] border border-gold/30 shadow-[0_28px_70px_-40px_rgba(20,40,20,0.9)]">
                <img
                  src={session.url}
                  alt="Farmers attending a Gavran poultry training session with a trainer at DWIT Farm"
                  loading="lazy"
                  width={1200}
                  height={1600}
                  className="h-80 w-full object-cover transition-transform duration-[900ms] group-hover:scale-105 sm:h-[26rem] lg:h-[34rem]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-forest/70 via-forest/5 to-transparent" />
                <span className="absolute left-4 top-4 rounded-full bg-cream/90 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-forest">
                  Live Farm Training
                </span>
                <div className="absolute inset-x-4 bottom-4 flex items-center gap-4 rounded-2xl bg-forest/95 px-5 py-4 shadow-lg backdrop-blur-sm">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-cream/10 text-gold">
                    <Users className="h-6 w-6" />
                  </span>
                  <p className="text-[15px] font-semibold leading-snug text-cream sm:text-base">
                    प्रत्यक्ष शिका, प्रत्यक्ष करा,
                    <br />
                    आणि आपल्या यशाची सुरुवात करा!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
}
