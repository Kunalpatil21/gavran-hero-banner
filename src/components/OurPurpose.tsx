import { Leaf, Target, Eye, Handshake, Users, GraduationCap, MapPin, Smile } from "lucide-react";

const CARDS = [
  {
    icon: Target,
    title: "Our Mission",
    body: "To provide practical, affordable and result-oriented training to farmers and help them achieve financial independence.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    body: "To become India's most trusted platform for farmer education and support, creating a strong and sustainable farming community.",
  },
  {
    icon: Handshake,
    title: "Our Core Values",
    list: [
      "Honesty & Transparency",
      "Practical & Result-Oriented",
      "Continuous Learning",
      "Respect for Farmers",
    ],
  },
];

const STATS = [
  { icon: Users, value: "5000+", label: "Farmers Trained" },
  { icon: GraduationCap, value: "150+", label: "Training Programs" },
  { icon: MapPin, value: "12+", label: "States Reached" },
  { icon: Smile, value: "98%", label: "Farmer Satisfaction" },
];

export default function OurPurpose() {
  return (
    <section className="mx-auto mt-10 max-w-[1400px] px-4 sm:mt-14 sm:px-6 lg:px-8">
      <h2 className="font-display text-[1.9rem] font-extrabold leading-tight tracking-tight text-forest sm:text-[2.2rem]">
        Our Purpose
      </h2>
      <div className="mt-2 flex items-center gap-2">
        <span className="h-[3px] w-9 rounded-full bg-gold-deep" />
        <Leaf className="h-4 w-4 text-forest" />
      </div>

      <div className="mt-7 grid gap-5 md:grid-cols-3">
        {CARDS.map(({ icon: Icon, title, body, list }, i) => (
          <article
            key={title}
            className="rounded-[20px] border border-forest/10 bg-white/70 p-7 text-center shadow-[0_20px_50px_-40px_rgba(20,40,20,0.8)] transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-[0_26px_60px_-34px_rgba(20,40,20,0.6)]"
          >
            <span
              className={`mx-auto grid h-14 w-14 place-items-center rounded-full ${
                i === 1 ? "bg-gold/20 text-gold-deep" : "bg-forest/10 text-forest"
              }`}
            >
              <Icon className="h-6 w-6" strokeWidth={1.7} />
            </span>
            <h3 className="mt-5 font-display text-xl font-extrabold text-forest">
              {title}
            </h3>
            {body && (
              <p className="mt-3 text-[14.5px] leading-[1.9] text-forest/75">
                {body}
              </p>
            )}
            {list && (
              <ul className="mt-3 space-y-1.5 text-left text-[14.5px] leading-[1.8] text-forest/75 sm:pl-4">
                {list.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-forest/60" />
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>

      {/* Stats band */}
      <div className="mt-6 grid grid-cols-2 gap-y-7 rounded-[22px] bg-forest px-6 py-8 shadow-[0_28px_60px_-38px_rgba(20,40,20,0.9)] sm:grid-cols-4 sm:px-8">
        {STATS.map(({ icon: Icon, value, label }, i) => (
          <div
            key={label}
            className={`flex min-w-0 items-center justify-center gap-3 px-2 ${
              i > 0 ? "sm:border-l sm:border-cream/15" : ""
            }`}
          >
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-cream/10 text-gold">
              <Icon className="h-6 w-6" strokeWidth={1.7} />
            </span>
            <div className="min-w-0">
              <p className="font-display text-2xl font-extrabold leading-tight text-gold">
                {value}
              </p>
              <p className="truncate text-[13px] text-cream/80">{label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
