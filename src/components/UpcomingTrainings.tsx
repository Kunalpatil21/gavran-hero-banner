import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  MapPin,
  Leaf,
  Check,
} from "lucide-react";

import puneTrainingAsset from "@/assets/pune-training.png.asset.json";
import palgharTrainingAsset from "@/assets/palghar-training.png.asset.json";

type Training = {
  id: string;
  city: string;
  district: string;
  address: string;
  mapUrl: string;
  image: string;
  date: string;
  day: string;
  time: string;
  whatsapp: string;
};

const TRAININGS: Training[] = [
  {
    id: "palghar-2026-10-04",
    city: "PALGHAR",
    district: "Palghar District",
    address: "Dwit Farm, At-Post Kev, Tal. Vikramgad, Dist. Palghar, Maharashtra – 401403",
    mapUrl: "https://maps.app.goo.gl/S8bPc4FgNbjio2dW7",
    image: palgharTrainingAsset.url,
    date: "04 Oct 2026",
    day: "Sunday",
    time: "10:00 AM – 6:30 PM",
    whatsapp: "https://wa.me/919999999999",
  },
  {
    id: "pune-2026-10-11",
    city: "PUNE",
    district: "Pune District",
    address: "Dwit Farm Pune Branch, At-Shivri, Post-Sasvad, Tal. Purandar, Dist. Pune, Maharashtra – 412301",
    mapUrl: "https://maps.google.com/?q=18.262243,76.658669",
    image: puneTrainingAsset.url,
    date: "11 Oct 2026",
    day: "Sunday",
    time: "10:00 AM – 6:30 PM",
    whatsapp: "https://wa.me/919999999999",
  },
  {
    id: "palghar-2026-10-18",
    city: "PALGHAR",
    district: "Palghar District",
    address: "Dwit Farm, At-Post Kev, Tal. Vikramgad, Dist. Palghar, Maharashtra – 401403",
    mapUrl: "https://maps.app.goo.gl/S8bPc4FgNbjio2dW7",
    image: palgharTrainingAsset.url,
    date: "18 Oct 2026",
    day: "Sunday",
    time: "10:00 AM – 6:30 PM",
    whatsapp: "https://wa.me/919999999999",
  },
  {
    id: "pune-2026-10-25",
    city: "PUNE",
    district: "Pune District",
    address: "Dwit Farm Pune Branch, At-Shivri, Post-Sasvad, Tal. Purandar, Dist. Pune, Maharashtra – 412301",
    mapUrl: "https://maps.google.com/?q=18.262243,76.658669",
    image: puneTrainingAsset.url,
    date: "25 Oct 2026",
    day: "Sunday",
    time: "10:00 AM – 6:30 PM",
    whatsapp: "https://wa.me/919999999999",
  },
];

function isFuture(dateStr: string) {
  const training = new Date(`${dateStr} 00:00:00`);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return training.getTime() >= today.getTime();
}

function TrainingCard({ t }: { t: Training }) {
  const upcoming = isFuture(t.date);

  return (
    <article className="group relative flex w-[84vw] shrink-0 snap-start flex-col overflow-hidden rounded-2xl bg-white shadow-[0_18px_45px_-28px_rgba(20,40,20,0.5)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_28px_60px_-26px_rgba(20,40,20,0.55)] sm:w-[19rem] lg:w-[20.5rem]">
      <div className="relative h-52 overflow-hidden">
        <img
          src={t.image}
          alt={`${t.city} city landmark`}
          width={800}
          height={600}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
        />
        {!upcoming && <div className="absolute inset-0 bg-black/30" />}
        <div className="absolute inset-0 bg-[linear-gradient(to_top,var(--color-ink)_8%,color-mix(in_oklab,var(--color-ink)_45%,transparent)_38%,transparent_68%)]" />

        {upcoming ? (
          <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-gold px-3 py-1 text-xs font-semibold text-ink">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ink/60 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-ink" />
            </span>
            UPCOMING
          </span>
        ) : (
          <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-forest/80 px-3 py-1 text-xs font-semibold text-cream">
            <Check className="h-3 w-3" />
            COMPLETED
          </span>
        )}

        <div className="absolute inset-x-4 bottom-3">
          <h3 className="font-display text-3xl font-extrabold leading-none text-cream">{t.city}</h3>
          <p className="mt-1.5 text-sm text-cream/80">{t.district}</p>
        </div>
      </div>

      <div className="flex flex-1 flex-col px-4 pb-4 pt-4">
        <div className="flex gap-2.5 border-b border-forest/10 pb-3.5">
          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-deep" />
          <div>
            <p className="text-[13px] font-semibold text-forest">Address</p>
            <p className="mt-0.5 text-[13px] leading-snug text-forest/70">{t.address}</p>
          </div>
        </div>

        <div className="flex gap-2.5 border-b border-forest/10 py-3.5">
          <CalendarDays className="mt-0.5 h-4 w-4 shrink-0 text-gold-deep" />
          <div>
            <p className="text-[13px] font-semibold text-forest">Date, Time &amp; Day</p>
            <p className="mt-0.5 text-[13px] leading-snug text-forest/70">
              {t.date} &nbsp;|&nbsp; {t.time}
              <span className="block">{t.day}</span>
              {!upcoming && (
                <span className="block text-forest/50">Training Completed</span>
              )}
            </p>
          </div>
        </div>

        <div className="mt-auto flex items-center gap-2.5 pt-4">
          <a
            href="/training"
            className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-lg bg-forest px-3 py-3 text-sm font-semibold text-cream transition-colors duration-300 hover:bg-gold-deep"
          >
            View Details
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
          <a
            href={t.mapUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-lg border border-forest/60 px-3 py-3 text-sm font-semibold text-forest transition-colors duration-300 hover:bg-forest hover:text-cream"
          >
            <MapPin className="h-4 w-4" />
            Direction
          </a>
        </div>
      </div>
    </article>
  );
}


export default function UpcomingTrainings({ showViewAll = true }: { showViewAll?: boolean }) {
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
          <h2 className="mt-2 max-w-4xl font-display text-3xl font-extrabold leading-tight text-forest sm:text-4xl lg:text-[2.75rem]">
            Practical Gavran Poultry Farming Trainings
          </h2>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-forest/75 sm:text-lg">
            Join the next training session near you and start your journey towards successful
            poultry farming.
          </p>

          <div
            className={`mt-8 flex w-full flex-wrap items-center gap-3 ${
              showViewAll ? "justify-center" : "justify-end"
            }`}
          >
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
            {showViewAll && (
              <Link
                to="/training"
                className="group inline-flex items-center gap-3 rounded-full bg-forest px-6 py-3.5 text-base font-medium text-cream transition-all duration-300 hover:bg-gold-deep"
              >
                View All Trainings
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            )}
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

      </div>
    </section>
  );
}
