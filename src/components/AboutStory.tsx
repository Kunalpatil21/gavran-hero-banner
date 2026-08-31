import { Leaf, Sprout, Users, MapPin } from "lucide-react";

import gateImage from "@/assets/dwit-farm-gate.jpg";

const STATS = [
  { icon: Sprout, value: "1000+", label: "Farmers Trained" },
  { icon: Users, value: "50+", label: "Training Program" },
  { icon: MapPin, value: "Across India", label: "Serving Farmers" },
];

export default function AboutStory() {
  return (
    <section className="mx-auto mt-8 max-w-[1400px] px-4 sm:mt-12 sm:px-6 lg:px-8">
      <div className="grid items-center gap-8 rounded-[28px] border border-forest/10 bg-white/60 p-6 shadow-[0_24px_60px_-40px_rgba(20,40,20,0.4)] sm:p-10 lg:grid-cols-2 lg:gap-14 lg:p-14">
        {/* Left column */}
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <Leaf className="h-4 w-4 text-forest" />
            <p className="text-[13px] font-bold tracking-[0.22em] text-forest">
              ABOUT DWIT FARM
            </p>
          </div>
          <div className="mt-2 flex items-center gap-2">
            <span className="h-px w-8 bg-gold-deep" />
            <Leaf className="h-3.5 w-3.5 text-gold-deep" />
          </div>

          <h2 className="mt-4 font-display text-[2.2rem] font-extrabold leading-[1.1] tracking-tight text-forest sm:text-[2.8rem]">
            About Dwit Farm
          </h2>
          <span className="mt-4 block h-[3px] w-16 rounded-full bg-gold-deep" />

          <p className="mt-6 max-w-lg text-[15px] leading-[1.9] text-forest/80 sm:text-base">
            Dwit Farm was started with a simple belief — every farmer deserves
            the right knowledge, at the right time, in the right way. What began
            as a small effort to help nearby farmers has now grown into a
            trusted learning platform for thousands.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-x-2 gap-y-4 rounded-2xl bg-gold/10 px-4 py-5 sm:px-6">
            {STATS.map(({ icon: Icon, value, label }, i) => (
              <div
                key={label}
                className={`flex min-w-0 flex-1 items-center gap-3 ${
                  i < STATS.length - 1 ? "sm:border-r sm:border-forest/10" : ""
                } pr-3`}
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gold/25 text-gold-deep">
                  <Icon className="h-5 w-5" strokeWidth={1.8} />
                </span>
                <div className="min-w-0">
                  <p className="font-display text-lg font-extrabold leading-tight text-forest">
                    {value}
                  </p>
                  <p className="truncate text-[13px] text-forest/70">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right column */}
        <div className="relative overflow-hidden rounded-[20px] border border-forest/10 shadow-[0_30px_70px_-40px_rgba(20,40,20,0.6)]">
          <img
            src={gateImage}
            alt="Entrance gate of DWIT Farm with poultry shed and free-ranging Gavran hens"
            loading="lazy"
            width={1024}
            height={1024}
            className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105 lg:aspect-square"
          />
        </div>
      </div>
    </section>
  );
}
