import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Leaf, Play, Youtube } from "lucide-react";

import { Button } from "@/components/ui/button";

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

const CHANNEL_URL = "https://www.youtube.com/@dwit-farm_38";

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
  const [activeVideo, setActiveVideo] = useState(0);

  const scrollBy = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const nextIndex = Math.min(Math.max(activeVideo + dir, 0), VIDEOS.length - 1);
    const card = el.children.item(nextIndex);
    if (!(card instanceof HTMLElement)) return;
    card.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
    setActiveVideo(nextIndex);
  };

  const updateActiveVideo = () => {
    const el = trackRef.current;
    if (!el) return;
    const cards = Array.from(el.children).filter(
      (child): child is HTMLElement => child instanceof HTMLElement,
    );
    if (!cards.length) return;
    const nearest = cards.reduce(
      (best, card, index) => {
        const distance = Math.abs(card.offsetLeft - el.scrollLeft);
        return distance < best.distance ? { index, distance } : best;
      },
      { index: 0, distance: Number.POSITIVE_INFINITY },
    );
    setActiveVideo(nearest.index);
  };

  return (
    <section id="videos" className="overflow-hidden bg-cream py-16 sm:py-20 lg:py-24">
      <div
        ref={reveal.ref}
        className={`mx-auto grid max-w-[1520px] gap-10 px-5 transition-all duration-700 sm:px-8 lg:grid-cols-[minmax(330px,390px)_minmax(0,1fr)] lg:items-center lg:gap-14 ${
          reveal.shown ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
        }`}
      >
        <div className="max-w-md">
          <p className="flex items-center gap-3 text-xs font-semibold tracking-[0.18em] text-gold-deep sm:text-sm">
            <Leaf className="h-5 w-5" aria-hidden="true" />
            LEARN WITH DWIT FARM
          </p>
          <h2 className="mt-6 font-display text-4xl font-extrabold leading-[1.12] text-forest sm:text-5xl">
            Practical Knowledge,
            <br />
            <span className="text-gold-deep">Directly From</span>
            <br />
            the Farm<span className="text-gold-deep">.</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-forest/75 sm:text-lg">
            Real farming lessons, step by step.
            <br />
            Learn directly from our experts.
          </p>
          <Button
            asChild
            className="group mt-8 h-14 rounded-full bg-forest px-7 text-sm font-semibold text-cream shadow-none hover:bg-forest/90"
          >
            <a href={CHANNEL_URL} target="_blank" rel="noreferrer">
              <Youtube className="text-destructive" />
              Watch More on YouTube
              <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </Button>
          <p className="mt-8 text-xs font-semibold tracking-[0.18em] text-forest/55">
            FARMING&nbsp;&nbsp; | &nbsp;&nbsp;TRAINING&nbsp;&nbsp; | &nbsp;&nbsp;TIPS&nbsp;&nbsp; | &nbsp;&nbsp;SUCCESS STORIES
          </p>
        </div>

        <div className="min-w-0">
          <div className="mb-6 flex justify-end gap-3">
            <Button
              type="button"
              variant="outline"
              size="icon"
              aria-label="Previous videos"
              onClick={() => scrollBy(-1)}
              disabled={activeVideo === 0}
              className="h-12 w-12 rounded-full border-forest/25 bg-transparent text-forest shadow-none hover:border-forest hover:bg-transparent hover:text-forest"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <Button
              type="button"
              size="icon"
              aria-label="Next videos"
              onClick={() => scrollBy(1)}
              disabled={activeVideo === VIDEOS.length - 1}
              className="h-12 w-12 rounded-full bg-forest text-cream shadow-none hover:bg-forest/90"
            >
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>

          <div
            ref={trackRef}
            onScroll={updateActiveVideo}
            className="no-scrollbar -mx-1 flex snap-x snap-mandatory gap-6 overflow-x-auto px-1 pb-3"
          >
            {VIDEOS.map((v) => (
              <a
                key={v.id}
                href={`https://www.youtube.com/watch?v=${v.id}`}
                target="_blank"
                rel="noreferrer"
                className="group w-[88%] shrink-0 snap-start overflow-hidden rounded-lg bg-card shadow-[0_18px_45px_-30px_var(--color-ink)] transition-transform duration-300 hover:-translate-y-1 sm:w-[68%] lg:w-[calc(50%-0.75rem)]"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={`/images/youtube-${v.id}.jpg`}
                    alt={v.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute inset-0 grid place-items-center bg-ink/5">
                    <span className="grid h-14 w-20 place-items-center rounded-lg bg-destructive shadow-lg transition-transform duration-300 group-hover:scale-105">
                      <Play className="h-6 w-6 fill-cream text-cream" />
                    </span>
                  </span>
                </div>
                <div className="min-h-32 p-5 sm:p-6">
                  <h3 className="font-display text-xl font-bold leading-snug text-ink">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/55">{v.subtitle}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-6 flex justify-center gap-2" aria-label="Video position">
            {VIDEOS.map((video, index) => (
              <span
                key={video.id}
                aria-hidden="true"
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === activeVideo ? "w-8 bg-forest" : "w-2 bg-forest/20"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
