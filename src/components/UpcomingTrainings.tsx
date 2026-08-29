import { useCallback, useEffect, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Clock,
  GraduationCap,
  UtensilsCrossed,
  Coffee,
  BookOpen,
  Wifi,
  BadgeCheck,
  Leaf,
  MessageCircle,
} from "lucide-react";

import puneAsset from "@/assets/city-pune.jpg.asset.json";
import mumbaiAsset from "@/assets/city-mumbai.jpg.asset.json";
import kolhapurAsset from "@/assets/city-kolhapur.jpg.asset.json";
import nashikAsset from "@/assets/city-nashik.jpg.asset.json";

type Training = {
  id: string;
  city: string;
  image: string;
  date: string;
  day: string;
  time: string;
  price: string;
  status: string;
  whatsapp: string;
};

const TRAININGS: Training[] = [
  {
    id: "pune",
    city: "PUNE",
    image: puneAsset.url,
    date: "30 AUG 2026",
    day: "Sunday",
    time: "10:00 AM – 6:30 PM",
    price: "2,000",
    status: "Upcoming",
    whatsapp: "https://wa.me/919999999999",
  },
  {
    id: "mumbai",
    city: "MUMBAI",
    image: mumbaiAsset.url,
    date: "06 SEP 2026",
    day: "Sunday",
    time: "10:00 AM – 6:30 PM",
    price: "2,000",
    status: "Upcoming",
    whatsapp: "https://wa.me/919999999999",
  },
  {
    id: "kolhapur",
    city: "KOLHAPUR",
    image: kolhapurAsset.url,
    date: "13 SEP 2026",
    day: "Sunday",
    time: "10:00 AM – 6:30 PM",
    price: "2,000",
    status: "Upcoming",
    whatsapp: "https://wa.me/919999999999",
  },
  {
    id: "nashik",
    city: "NASHIK",
    image: nashikAsset.url,
    date: "20 SEP 2026",
    day: "Sunday",
    time: "10:00 AM – 6:30 PM",
    price: "2,000",
    status: "Upcoming",
    whatsapp: "https://wa.me/919999999999",
  },
];

const BENEFITS = [
  { icon: GraduationCap, title: "One Day Practical Training", desc: "Hands-on learning at the farm" },
  { icon: UtensilsCrossed, title: "Veg & Non-Veg Lunch", desc: "Delicious lunch included" },
  { icon: Coffee, title: "2 Times Tea & Snacks", desc: "Tea, snacks & refreshments" },
  { icon: BookOpen, title: "Training Material & Notes", desc: "Study material & reference notes" },
  { icon: Wifi, title: "1 Year Online Access", desc: "Telegram training access" },
  { icon: BadgeCheck, title: "Government Certificate", desc: "Certificate after training" },
];

function TrainingCard({ t }: { t: Training }) {
  return (
    <article className="group relative w-[86vw] shrink-0 snap-start overflow-hidden rounded-2xl bg-ink shadow-[0_18px_45px_-24px_rgba(20,30,20,0.55)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_28px_60px_-24px_rgba(20,30,20,0.6)] sm:w-[20.5rem] lg:w-[23rem]">
      <div className="relative h-64 overflow-hidden">
        <img
          src={t.image}
          alt={`${t.city} city landmark`}
          width={800}
          height={600}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,var(--color-ink)_18%,color-mix(in_oklab,var(--color-ink)_55%,transparent)_42%,transparent_74%)]" />
        <span className="absolute left-4 top-4 rounded-full bg-gold px-3 py-1 text-xs font-semibold text-ink">
          {t.status}
        </span>
        <div className="absolute inset-x-4 bottom-3">
          <h3 className="font-display text-4xl font-extrabold leading-none text-cream">{t.city}</h3>
          <p className="mt-2 text-base text-cream/85">Gavran Poultry Farming Training</p>
        </div>
      </div>

      <div className="px-4 pb-5 pt-4">
        <div className="flex items-start gap-4 border-b border-cream/10 pb-4 text-cream">
          <div className="flex items-start gap-2">
            <CalendarDays className="mt-0.5 h-4 w-4 text-gold" />
            <span className="text-[15px] leading-tight">
              {t.date}
              <span className="block text-xs text-cream/60">{t.day}</span>
            </span>
          </div>
          <div className="flex items-start gap-2 border-l border-cream/10 pl-4">
            <Clock className="mt-0.5 h-4 w-4 text-gold" />
            <span className="text-[15px] leading-tight">{t.time}</span>
          </div>
        </div>

        <p className="py-3 text-2xl font-semibold text-cream">₹ {t.price}</p>

        <a
          href={t.whatsapp}
          target="_blank"
          rel="noreferrer"
          className="group/btn inline-flex w-full items-center justify-center gap-2 rounded-lg bg-forest px-5 py-3.5 text-base font-medium text-cream transition-all duration-300 hover:bg-gold hover:text-ink"
        >
          <MessageCircle className="h-4 w-4" />
          Join WhatsApp Group
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
        </a>
      </div>
    </article>
  );
}

export default function UpcomingTrainings() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const scrollToIndex = useCallback((i: number) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.children[i] as HTMLElement | undefined;
    if (card) el.scrollTo({ left: card.offsetLeft - el.offsetLeft, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const onScroll = () => {
      const children = Array.from(el.children) as HTMLElement[];
      const left = el.scrollLeft + el.offsetLeft;
      let nearest = 0;
      let best = Infinity;
      children.forEach((c, i) => {
        const d = Math.abs(c.offsetLeft - left);
        if (d < best) {
          best = d;
          nearest = i;
        }
      });
      setActive(nearest);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  const step = (dir: -1 | 1) =>
    scrollToIndex(Math.min(TRAININGS.length - 1, Math.max(0, active + dir)));

  return (
    <section id="training" className="relative overflow-hidden bg-cream pt-16 sm:pt-20">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <header className="flex flex-col items-center text-center">
          <p className="inline-flex items-center gap-2 text-sm font-semibold tracking-[0.2em] text-gold-deep">
            <Leaf className="h-4 w-4" />
            UPCOMING TRAININGS
          </p>
          <h2 className="mt-3 max-w-4xl font-display text-4xl font-extrabold leading-[1.15] text-forest sm:text-5xl lg:text-[3.4rem]">
            Practical Gavran Poultry Farming Training Across Maharashtra
          </h2>
          <div className="mt-5 flex items-center gap-3 text-gold-deep">
            <span className="h-px w-14 bg-gold-deep/50 sm:w-20" />
            <Leaf className="h-4 w-4" />
            <span className="h-px w-14 bg-gold-deep/50 sm:w-20" />
          </div>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-forest/75 sm:text-xl">
            Join the next training session near you and start your journey towards successful
            poultry farming.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => step(-1)}
              aria-label="Previous trainings"
              className="grid h-12 w-12 place-items-center rounded-full border border-forest/20 bg-white text-forest transition-all duration-300 hover:bg-forest hover:text-cream"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => step(1)}
              aria-label="Next trainings"
              className="grid h-12 w-12 place-items-center rounded-full border border-forest/20 bg-white text-forest transition-all duration-300 hover:bg-forest hover:text-cream"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
            <a
              href="#training"
              className="group inline-flex items-center gap-3 rounded-full bg-forest px-6 py-3.5 text-base font-medium text-cream transition-all duration-300 hover:bg-gold-deep"
            >
              View All Trainings
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </header>


        <div
          ref={trackRef}
          className="no-scrollbar mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-2"
        >
          {TRAININGS.map((t) => (
            <TrainingCard key={t.id} t={t} />
          ))}
        </div>

        <div className="mt-6 flex items-center justify-center gap-2">
          {TRAININGS.map((t, i) => (
            <button
              key={t.id}
              type="button"
              onClick={() => scrollToIndex(i)}
              aria-label={`Go to ${t.city} training`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                i === active ? "w-7 bg-forest" : "w-2.5 bg-forest/25 hover:bg-forest/50"
              }`}
            />
          ))}
        </div>

        <ul className="mt-10 grid gap-y-8 rounded-2xl bg-white px-6 py-8 shadow-[0_18px_50px_-30px_rgba(20,40,20,0.5)] sm:grid-cols-2 lg:grid-cols-6 lg:gap-0">
          {BENEFITS.map(({ icon: Icon, title, desc }, i) => (
            <li
              key={title}
              className={`px-2 text-center transition-transform duration-300 hover:-translate-y-1 ${
                i > 0 ? "lg:border-l lg:border-forest/12" : ""
              }`}
            >
              <Icon className="mx-auto h-8 w-8 text-gold-deep" />
              <p className="mt-3 text-[15px] font-semibold leading-snug text-forest">{title}</p>
              <p className="mt-1 text-[13px] leading-snug text-forest/60">{desc}</p>
            </li>
          ))}
        </ul>
      </div>

    </section>
  );
}
