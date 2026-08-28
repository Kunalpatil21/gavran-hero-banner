import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Play, Youtube } from "lucide-react";

const VIDEOS = [
  {
    id: "EDeNjQ5jJAM",
    title: "कमी पैशात पोल्ट्री शेड कसं बांधायचं",
    subtitle: "Low-cost poultry shed setup",
  },
  {
    id: "YOp-7kMG3jk",
    title: "कोंबडी पालन खाद्यावरील खर्च कमी कसा करायचा?",
    subtitle: "Feed cost management",
  },
  {
    id: "Vqn__N7RhHI",
    title: "शेड बांधताना होणाऱ्या चुका कशा टाळायच्या?",
    subtitle: "Common shed-building mistakes",
  },
];

const CHANNEL_URL = "https://www.youtube.com/@dwit-farm_38.";

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

export default function FarmVideos() {
  const reveal = useReveal<HTMLDivElement>();
  const trackRef = useRef<HTMLDivElement | null>(null);

  const scrollBy = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * (el.clientWidth * 0.7), behavior: "smooth" });
  };

  return (
    <section id="videos" className="relative overflow-hidden bg-cream py-16 sm:py-20">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-16 h-72 w-72 rounded-full bg-forest/10 blur-3xl"
      />
      <div
        ref={reveal.ref}
        className={`relative mx-auto grid max-w-[1400px] gap-10 px-5 transition-all duration-700 sm:px-8 lg:grid-cols-[minmax(260px,340px)_1fr] lg:items-center ${
          reveal.shown ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
        }`}
      >
        {/* Left copy */}
        <div>
          <p className="text-sm font-semibold tracking-[0.18em] text-forest">
            LEARN WITH DWIT FARM
          </p>
          <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
            Practical Knowledge,
            <br />
            <span className="text-gold-deep">Directly From the Farm</span>.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink/70">
            Real farming lessons, step by step.
            <br />
            Learn directly from our experts.
          </p>
          <a
            href={CHANNEL_URL}
            target="_blank"
            rel="noreferrer"
            className="group mt-7 inline-flex items-center gap-3 rounded-full border border-forest/40 bg-white/70 px-6 py-3 text-sm font-semibold text-forest transition-all duration-300 hover:-translate-y-0.5 hover:border-forest hover:shadow-[0_16px_34px_-18px_rgba(0,0,0,0.5)]"
          >
            <Youtube className="h-5 w-5 text-red-600" />
            Watch More on YouTube
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

        {/* Cards */}
        <div className="min-w-0">
          <div className="mb-5 flex justify-end gap-3">
            <button
              type="button"
              aria-label="Previous videos"
              onClick={() => scrollBy(-1)}
              className="grid h-11 w-11 place-items-center rounded-full border border-forest/25 text-forest/70 transition-all duration-300 hover:border-forest hover:text-forest"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Next videos"
              onClick={() => scrollBy(1)}
              className="grid h-11 w-11 place-items-center rounded-full border border-forest/60 text-forest transition-all duration-300 hover:bg-forest hover:text-cream"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>

          <div
            ref={trackRef}
            className="no-scrollbar -mx-1 flex snap-x snap-mandatory gap-6 overflow-x-auto px-1 pb-2"
          >
            {VIDEOS.map((v) => (
              <a
                key={v.id}
                href={`https://www.youtube.com/watch?v=${v.id}`}
                target="_blank"
                rel="noreferrer"
                className="group w-[82%] shrink-0 snap-start overflow-hidden rounded-2xl bg-white shadow-[0_18px_40px_-28px_rgba(0,0,0,0.6)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_26px_50px_-24px_rgba(0,0,0,0.55)] sm:w-[52%] lg:w-[calc(33.333%-1rem)]"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={`https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`}
                    alt={v.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute inset-0 grid place-items-center">
                    <span className="grid h-14 w-20 place-items-center rounded-xl bg-red-600 shadow-lg transition-transform duration-300 group-hover:scale-110">
                      <Play className="h-6 w-6 fill-white text-white" />
                    </span>
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-bold leading-snug text-ink">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-sm text-ink/60">{v.subtitle}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
