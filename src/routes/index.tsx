import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, ArrowDown, GraduationCap, Home, Award } from "lucide-react";

import heroAsset from "@/assets/hero-farm.png.asset.json";
import UpcomingTrainings from "@/components/UpcomingTrainings";
import WhatYouWillLearn from "@/components/WhatYouWillLearn";
import AboutDwitFarm from "@/components/AboutDwitFarm";
import FarmVideos from "@/components/FarmVideos";
import SiteHeader from "@/components/SiteHeader";
import SectionDivider from "@/components/SectionDivider";
import SiteFooter from "@/components/SiteFooter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DWIT Farm — Gavran Poultry Farming & Training" },
      {
        name: "description",
        content:
          "Learn practical Gavran poultry farming directly from the farm with Umesh Patil. Hands-on training, farm experience and government certification.",
      },
      { property: "og:title", content: "DWIT Farm — Gavran Poultry Farming & Training" },
      {
        property: "og:description",
        content:
          "Practical Gavran poultry farming training on the farm with Umesh Patil — hands-on sessions and government certificate.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});


const TRUST = [
  { icon: GraduationCap, line1: "Practical", line2: "Training" },
  { icon: Home, line1: "Farm", line2: "Experience" },
  { icon: Award, line1: "Government", line2: "Certificate" },
];

function Index() {


  return (
    <>
    <main id="home" className="relative min-h-screen overflow-hidden bg-ink">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroAsset.url}
          alt="Gavran hens roaming freely under trees at DWIT Farm at golden hour"
          className="hero-zoom h-full w-full object-cover object-center will-change-transform"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-transparent md:via-ink/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/70" />
      </div>

      <SiteHeader />

      {/* Hero content */}
      <div className="relative mx-auto flex min-h-screen max-w-[1600px] flex-col justify-center px-5 pt-32 pb-16 sm:px-8 sm:pt-36 lg:pb-24">
        <h1 className="font-display font-extrabold leading-[1.08] tracking-tight">
          <span
            className="hero-rise block text-[13vw] text-cream sm:text-6xl lg:text-[5.2rem]"
            style={{ animationDelay: "0.1s" }}
          >
            गावरान कुक्कुटपालनाची
          </span>
          <span
            className="hero-rise block text-[13vw] text-cream sm:text-6xl lg:text-[5.2rem]"
            style={{ animationDelay: "0.2s" }}
          >
            योग्य वाटचाल
          </span>
          <span
            className="hero-rise mt-1 block text-[11vw] text-gold sm:text-5xl lg:text-[4.4rem]"
            style={{ animationDelay: "0.35s" }}
          >
            ज्ञान • अनुभव • मार्गदर्शन
          </span>
        </h1>

        <div
          className="hero-rise mt-7 flex max-w-lg items-center gap-3"
          style={{ animationDelay: "0.5s" }}
        >
          <span className="h-px flex-1 bg-gradient-to-r from-gold/60 to-transparent" />
          <span className="text-gold/80">✦</span>
          <span className="h-px flex-1 bg-gradient-to-l from-gold/60 to-transparent" />
        </div>

        <p
          className="hero-rise mt-7 max-w-md text-lg leading-relaxed text-cream/85 sm:text-xl"
          style={{ animationDelay: "0.65s" }}
        >
          गावरान कोंबडी पालनातील प्रत्यक्ष अनुभव, योग्य पद्धती आणि व्यवसायासाठी
          आवश्यक मार्गदर्शन — Dwit Farm सोबत.
        </p>

        <div
          className="hero-rise mt-9 flex flex-col gap-4 sm:flex-row sm:items-center"
          style={{ animationDelay: "0.65s" }}
        >
          <a
            href="#training"
            className="group inline-flex items-center justify-between gap-6 rounded-md bg-gradient-to-r from-gold-deep to-gold px-8 py-4 text-base font-medium text-ink shadow-[0_18px_45px_-18px_rgba(0,0,0,0.95)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_55px_-16px_var(--color-gold)]"
          >
            Join Training
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5" />
          </a>
          <a
            href="#training"
            className="group inline-flex items-center justify-between gap-6 rounded-md border border-cream/40 px-8 py-4 text-base font-medium text-cream backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:text-gold"
          >
            Explore Training
            <ArrowDown className="h-5 w-5 transition-transform duration-300 group-hover:translate-y-1.5" />
          </a>
        </div>

        <ul
          className="hero-rise mt-14 flex flex-wrap items-center gap-x-8 gap-y-6 sm:gap-x-10"
          style={{ animationDelay: "0.8s" }}
        >
          {TRUST.map(({ icon: Icon, line1, line2 }, i) => (
            <li
              key={line1}
              className={`flex min-w-0 items-center gap-3 ${
                i > 0 ? "sm:border-l sm:border-cream/15 sm:pl-8 lg:pl-10" : ""
              }`}
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-gold/50 text-gold">
                <Icon className="h-5 w-5" />
              </span>
              <span className="text-sm leading-tight text-cream/90">
                {line1}
                <br />
                {line2}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </main>
    <UpcomingTrainings />
    <WhatYouWillLearn />
    <AboutDwitFarm />
    <FarmVideos />
    <SectionDivider />
    <SiteFooter />
    </>
  );
}
