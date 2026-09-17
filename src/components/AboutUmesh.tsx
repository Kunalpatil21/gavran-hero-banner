import { Leaf, ShieldCheck, Users, Sprout, Star } from "lucide-react";

import umeshAsset from "@/assets/umesh-patil-about.png.asset.json";

const STATS = [
  { icon: ShieldCheck, value: "10+", label: "Years of Experience" },
  { icon: Users, value: "5000+", label: "Farmers Trained" },
  { icon: Sprout, value: "Practical", label: "Real Farm Experience" },
  { icon: Star, value: "Trusted", label: "Farmer Mentor" },
];

export default function AboutUmesh() {
  return (
    <section className="mx-auto mt-8 max-w-[1400px] px-4 sm:mt-12 sm:px-6 lg:px-8">
      <div className="grid items-stretch gap-8 rounded-[28px] border border-forest/10 bg-gold/8 p-5 shadow-[0_24px_60px_-40px_rgba(20,40,20,0.4)] sm:p-8 lg:grid-cols-[minmax(0,380px)_1fr] lg:gap-12 lg:p-10">
        {/* Photo */}
        <div className="overflow-hidden rounded-[20px] border border-forest/10 shadow-[0_28px_60px_-38px_rgba(20,40,20,0.7)]">
          <img
            src={umeshAsset.url}
            alt="Umesh Patil"
            loading="lazy"
            width={960}
            height={1280}
            className="h-full min-h-[320px] w-full object-cover transition-transform duration-700 hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="flex min-w-0 flex-col justify-center">
          <h2 className="font-display text-[1.9rem] font-extrabold leading-tight tracking-tight text-forest sm:text-[2.3rem]">
            About Umesh Patil
          </h2>
          <div className="mt-3 flex items-center gap-2">
            <span className="h-[3px] w-10 rounded-full bg-gold-deep" />
            <Leaf className="h-4 w-4 text-forest" />
          </div>

          <p className="mt-6 max-w-2xl text-[15px] leading-[1.9] text-forest/80">
            Umesh Patil is a farmer, trainer and mentor with 10+ years of
            practical experience in poultry farming and agribusiness.
          </p>
          <p className="mt-4 max-w-2xl text-[15px] leading-[1.9] text-forest/80">
            He has trained thousands of farmers across Maharashtra and other
            states, helping them build successful and profitable farms.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-y-6 sm:grid-cols-4">
            {STATS.map(({ icon: Icon, value, label }, i) => (
              <div
                key={label}
                className={`min-w-0 px-1 sm:px-4 ${
                  i > 0 ? "sm:border-l sm:border-forest/15" : ""
                }`}
              >
                <Icon className="h-6 w-6 text-gold-deep" strokeWidth={1.7} />
                <p className="mt-3 font-display text-base font-extrabold leading-tight text-forest">
                  {value}
                </p>
                <p className="mt-0.5 text-[12.5px] text-forest/65">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
