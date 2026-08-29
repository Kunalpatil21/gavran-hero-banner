import { useCallback, useEffect, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  MapPin,
  Navigation,
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
  district: string;
  image: string;
  address: string[];
  date: string;
  day: string;
  time: string;
  status: string;
  mapUrl: string;
  detailsUrl: string;
  whatsapp: string;
};

const TRAININGS: Training[] = [
  {
    id: "pune",
    city: "PUNE",
    district: "Pune District",
    image: puneAsset.url,
    address: ["Dwit Farm, At/Post: N. Po. Khed,", "Tal. Vikramgad, Dist. Palghar,", "Maharashtra – 401605"],
    date: "30 Aug 2026",
    day: "Sunday",
    time: "10:00 AM – 6:30 PM",
    status: "Upcoming",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Dwit+Farm+Pune",
    detailsUrl: "#training",
    whatsapp: "https://wa.me/919999999999",
  },
  {
    id: "mumbai",
    city: "MUMBAI",
    district: "Mumbai City",
    image: mumbaiAsset.url,
    address: ["Dwit Farm Training Center,", "Near Metro Station, Borivali (E),", "Mumbai, Maharashtra – 400066"],
    date: "06 Sep 2026",
    day: "Sunday",
    time: "10:00 AM – 6:30 PM",
    status: "Upcoming",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Dwit+Farm+Mumbai",
    detailsUrl: "#training",
    whatsapp: "https://wa.me/919999999999",
  },
  {
    id: "kolhapur",
    city: "KOLHAPUR",
    district: "Kolhapur District",
    image: kolhapurAsset.url,
    address: ["Dwit Farm, Near Shiroli MIDC,", "Hatkanangale, Tal. Hatkanangale,", "Dist. Kolhapur, Maharashtra – 416109"],
    date: "13 Sep 2026",
    day: "Sunday",
    time: "10:00 AM – 6:30 PM",
    status: "Upcoming",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Dwit+Farm+Kolhapur",
    detailsUrl: "#training",
    whatsapp: "https://wa.me/919999999999",
  },
  {
    id: "nashik",
    city: "NASHIK",
    district: "Nashik District",
    image: nashikAsset.url,
    address: ["Dwit Farm, Near Trimbakeshwar Road,", "Anandvalli, Nashik,", "Maharashtra – 422213"],
    date: "20 Sep 2026",
    day: "Sunday",
    time: "10:00 AM – 6:30 PM",
    status: "Upcoming",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Dwit+Farm+Nashik",
    detailsUrl: "#training",
    whatsapp: "https://wa.me/919999999999",
  },
];

function TrainingCard({ t }: { t: Training }) {
  return (
    <article className="group relative flex w-[85vw] shrink-0 snap-start flex-col overflow-hidden rounded-2xl bg-white shadow-[0_18px_45px_-28px_rgba(20,40,20,0.5)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_26px_60px_-28px_rgba(20,40,20,0.6)] sm:w-[21rem] lg:w-[22.5rem]">
      <div className="relative h-52 overflow-hidden">
        <img
          src={t.image}
          alt={`${t.city} city landmark`}
          width={800}
          height={600}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,var(--color-ink)_10%,transparent_62%)]" />
        <span className="absolute left-4 top-4 rounded-full bg-gold px-3 py-1 text-xs font-semibold text-ink">
          {t.status}
        </span>
        <div className="absolute inset-x-4 bottom-3">
          <h3 className="font-display text-3xl font-extrabold leading-none text-cream">{t.city}</h3>
          <p className="mt-1.5 text-sm text-cream/85">{t.district}</p>
        </div>
      </div>

      <div className="flex flex-1 flex-col px-5 pb-5 pt-4">
        <div className="flex gap-3 border-b border-forest/10 pb-4">
          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-deep" />
          <div>
            <p className="text-sm font-semibold text-forest">Address</p>
            <p className="mt-1 text-[13px] leading-relaxed text-forest/70">
              {t.address.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>
          </div>
        </div>

        <div className="flex gap-3 border-b border-forest/10 py-4">
          <CalendarDays className="mt-0.5 h-4 w-4 shrink-0 text-gold-deep" />
          <div>
            <p className="text-sm font-semibold text-forest">Date, Time &amp; Day</p>
            <p className="mt-1 text-[13px] leading-relaxed text-forest/70">
              {t.date} &nbsp;|&nbsp; {t.time}
              <span className="block">{t.day}</span>
            </p>
          </div>
        </div>

        <a
          href={t.mapUrl}
          target="_blank"
          rel="noreferrer"
          className="group/map flex items-center gap-3 border-b border-forest/10 py-4 transition-colors hover:text-gold-deep"
        >
          <Navigation className="mt-0.5 h-4 w-4 shrink-0 text-gold-deep" />
          <span className="flex-1">
            <span className="block text-sm font-semibold text-forest">See Location</span>
            <span className="mt-1 block text-[13px] text-forest/70">View on Map / Get Directions</span>
          </span>
          <ArrowRight className="h-4 w-4 text-forest/60 transition-transform duration-300 group-hover/map:translate-x-1" />
        </a>

        <div className="mt-5 flex items-stretch gap-3">
          <a
            href={t.detailsUrl}
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-forest/25 px-3 py-3 text-sm font-medium text-forest transition-all duration-300 hover:border-forest hover:bg-forest/5"
          >
            View Details
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href={t.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="inline-flex flex-[1.25] items-center justify-center gap-2 rounded-lg bg-forest px-3 py-3 text-sm font-medium text-cream transition-all duration-300 hover:bg-gold-deep"
          >
            <MessageCircle className="h-4 w-4" />
            Join WhatsApp Group
          </a>
        </div>
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

      </div>

    </section>
  );
}
