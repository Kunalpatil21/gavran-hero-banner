import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  Leaf,
  Lightbulb,
  Sprout,
  GraduationCap,
  Users,
  ArrowRight,
  Quote,
} from "lucide-react";

import umeshAsset from "@/assets/umesh-patil-home.png.asset.json";

const MISSION = [
  {
    icon: Lightbulb,
    text: "सातत्य, नियोजन आणि योग्य मार्गदर्शनाने गावरान कुक्कुटपालन व्यवसाय यशस्वी केला.",
  },
  {
    icon: Sprout,
    text: "खाद्य, रोगनियंत्रण, व्यवस्थापन आणि नफा वाढवण्याची संपूर्ण माहिती प्रत्यक्ष अनुभवातून विकसित केली.",
  },
  {
    icon: GraduationCap,
    text: "आजवर अनेक शेतकरी, तरुण आणि नवीन उद्योजकांना प्रशिक्षण देऊन त्यांचे व्यवसाय यशस्वी केले.",
  },
  { icon: Users, text: "द्वित्त फार्मच्या माध्यमातून ७ वर्षांचा अनुभव प्रत्येक शेतकऱ्यापर्यंत पोहोचवत आहे." },
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

export default function AboutDwitFarm() {
  const reveal = useReveal<HTMLDivElement>();

  return (
    <section id="about" className="relative overflow-hidden bg-cream py-16 sm:py-20">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-10 h-64 w-64 rounded-full bg-gold/10 blur-3xl"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-28 bottom-0 h-72 w-72 rounded-full bg-forest/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div
          ref={reveal.ref}
          className={`grid items-center gap-8 transition-all duration-700 lg:grid-cols-[460px_1fr] lg:gap-14 ${
            reveal.shown ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          {/* Photo column */}
          <div className="group relative mx-auto w-full max-w-sm lg:mx-0">
            <div className="relative overflow-hidden rounded-[28px] border border-gold/30 shadow-[0_34px_80px_-44px_rgba(20,40,20,0.9)]">
              <img
                src={umeshAsset.url}
                alt="उमेश पाटील — संस्थापक, द्वित्त फार्म"
                loading="lazy"
                width={960}
                height={1280}
                className="aspect-[3/4] w-full object-cover transition-transform duration-[900ms] group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-forest/55 via-transparent to-transparent" />
              <div className="absolute inset-x-4 bottom-4 flex items-center gap-3 rounded-2xl bg-forest/95 px-5 py-4 shadow-lg backdrop-blur-sm">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-cream/10 text-gold">
                  <Leaf className="h-6 w-6" strokeWidth={1.8} />
                </span>
                <div className="min-w-0">
                  <p className="truncate text-base font-bold text-cream">उमेश पाटील</p>
                  <p className="truncate text-[13px] text-cream/70">संस्थापक, द्वित्त फार्म</p>
                </div>
              </div>
              {/* Experience highlight */}
              <div className="absolute -right-3 top-6 flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-deep to-gold px-4 py-2.5 text-ink shadow-[0_14px_30px_-12px_var(--color-gold)] sm:-right-4">
                <span className="font-display text-lg font-extrabold leading-none">7+</span>
                <span className="text-[11px] font-semibold leading-tight">Years<br />Experience</span>
              </div>
            </div>
          </div>

          {/* Content column */}
          <div className="min-w-0">
            <div className="flex items-center gap-3">
              <Leaf className="h-4 w-4 text-gold-deep" />
              <p className="text-sm font-semibold tracking-[0.28em] text-gold-deep">आमच्याबद्दल</p>
              <Leaf className="h-4 w-4 text-gold-deep" />
            </div>

            <h2 className="mt-4 font-display text-3xl font-extrabold leading-[1.18] text-forest sm:text-4xl lg:text-[2.9rem]">
              शेतातून <span className="text-gold-deep">ज्ञान</span>, अनुभवातून{" "}
              <span className="text-gold-deep">समाधान</span>.
            </h2>

            <p className="mt-5 text-[17px] leading-relaxed text-forest/75">
              द्वित्त फार्मचे संस्थापक उमेश पाटील यांची थोडक्यात ओळख. ७ वर्षांच्या गावरान
              कुक्कुटपालनाच्या अनुभवातून शिकून, आज द्वित्त फार्मच्या माध्यमातून हा अनुभव
              प्रत्येक शेतकऱ्यापर्यंत पोहोचवत आहे.
            </p>

            <ul className="mt-7 space-y-3.5">
              {MISSION.map(({ icon: Icon, text }) => (
                <li
                  key={text}
                  className="flex items-start gap-3.5 rounded-2xl border border-forest/10 bg-white/70 px-4 py-3.5 shadow-[0_12px_30px_-26px_rgba(20,40,20,0.8)] transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/50 hover:shadow-[0_18px_40px_-26px_rgba(20,40,20,0.8)]"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-forest text-cream shadow-md">
                    <Icon className="h-5 w-5" strokeWidth={1.7} />
                  </span>
                  <p className="pt-1 text-[15px] leading-snug text-forest/80">{text}</p>
                </li>
              ))}
            </ul>

            {/* Quote + CTA */}
            <div className="mt-7 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <blockquote className="relative flex items-start gap-3 text-[15px] italic leading-snug text-forest/70">
                <Quote className="mt-0.5 h-5 w-5 shrink-0 text-gold-deep" />
                प्रत्यक्ष शिका, प्रत्यक्ष करा आणि आपल्या यशाची सुरुवात करा.
              </blockquote>
              <Link
                to="/about"
                className="group inline-flex shrink-0 items-center gap-3 rounded-md bg-gradient-to-r from-gold-deep to-gold px-7 py-3.5 text-sm font-semibold text-ink shadow-[0_16px_40px_-18px_rgba(0,0,0,0.95)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_50px_-16px_var(--color-gold)]"
              >
                Know More
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
