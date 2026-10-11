import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Leaf,
  Users,
  Home as HomeIcon,
  Presentation,
  Sprout,
  ShieldCheck,
  Megaphone,
  ClipboardList,
} from "lucide-react";

const trainingHero = "/images/training-hero.jpg";
const trainingSession = "/images/training-session.jpg";
import SiteHeader from "@/components/SiteHeader";
import SectionDivider from "@/components/SectionDivider";
import SiteFooter from "@/components/SiteFooter";
import UpcomingTrainings from "@/components/UpcomingTrainings";
import WhatYouWillLearn from "@/components/WhatYouWillLearn";

export const Route = createFileRoute("/training")({
  head: () => ({
    meta: [
      { title: "Poultry Farming Training — DWIT Farm Programs" },
      {
        name: "description",
        content:
          "Practical Gavran poultry farming training at DWIT Farm covering farm setup, health, nutrition, management and business guidance through on-farm learning.",
      },
      { property: "og:title", content: "Poultry Farming Training — DWIT Farm Programs" },
      {
        property: "og:description",
        content:
          "Learn, understand, implement and grow with DWIT Farm's practical poultry training programs for every skill level.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TrainingPage,
});



const LEARN = [
  { icon: Sprout, title: "Breed Selection", text: "Choose the right breed for better results." },
  { icon: ShieldCheck, title: "Disease Management", text: "Identify, prevent and manage diseases effectively." },
  { icon: HomeIcon, title: "Housing Management", text: "Learn low-cost and efficient housing techniques." },
  { icon: Megaphone, title: "Marketing & Sales", text: "Learn how to sell your products in the right market." },
  { icon: Leaf, title: "Feeding & Nutrition", text: "Balanced diet for healthy and productive birds." },
  { icon: ClipboardList, title: "Business Planning", text: "From budgeting to scaling — build a profitable business." },
];

const FORMATS = [
  { icon: Presentation, title: "Classroom Training", text: "Interactive sessions with expert guidance." },
  { icon: HomeIcon, title: "On-Farm Training", text: "Practical learning at our farm." },
  { icon: Users, title: "Online Guidance", text: "Continuous support even after training." },
];

function TrainingPage() {


  return (
    <>
      <SiteHeader />

      <main className="bg-cream">
        {/* Hero banner */}
        <section className="relative isolate flex min-h-[360px] items-center overflow-hidden bg-cream md:min-h-[400px] lg:min-h-[460px]">
          <img
            src={trainingHero}
            alt="Farmer holding a healthy Gavran hen beside an open poultry shed at DWIT Farm"
            width={1600}
            height={900}
            className="absolute inset-0 -z-10 h-full w-full object-cover object-[70%_center]"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-cream from-20% via-cream/90 via-45% to-transparent to-70%" />
          <div className="absolute inset-0 -z-10 bg-cream/60 sm:hidden" />

          <div className="relative mx-auto w-full max-w-[1400px] px-5 pb-12 pt-24 sm:px-8 sm:pt-28 lg:px-12 lg:pb-16 lg:pt-32">
            <div className="max-w-xl sm:w-[62%] lg:w-[54%]">
              <h1 className="font-display text-[2.6rem] font-extrabold leading-[1.05] tracking-tight text-forest sm:text-[3.2rem] lg:text-[3.8rem]">
                TRAINING
              </h1>

              <p className="mt-4 font-display text-xl font-bold leading-snug text-gold-deep sm:text-2xl lg:text-[1.8rem]">
                शिका, सुरुवात करा आणि यशस्वी व्हा.
              </p>

              <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-forest/80 sm:text-base">
                गावरान कुक्कुटपालनाची योग्य पद्धत प्रत्यक्ष फार्मवर शिका, आवश्यक ज्ञान मिळवा
                आणि स्वतःचा व्यवसाय सुरू करण्यासाठी योग्य दिशा मिळवा.
              </p>
            </div>
          </div>
        </section>

        <UpcomingTrainings showViewAll={false} />
        <WhatYouWillLearn />

        {/* What you will learn */}
        <section className="bg-cream pb-14 sm:pb-16">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
            <div className="grid gap-8 rounded-2xl bg-cream p-6 sm:p-9 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="font-display text-3xl font-extrabold text-forest sm:text-[2.1rem]">
                  What You Will Learn
                </h2>
                <span className="mt-4 block h-[3px] w-14 rounded-full bg-gold" />

                <div className="mt-7 grid gap-6 sm:grid-cols-2">
                  {LEARN.map(({ icon: Icon, title, text }) => (
                    <div key={title} className="flex items-start gap-3">
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gold/20 text-gold-deep">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <h3 className="text-[15px] font-bold text-forest">{title}</h3>
                        <p className="mt-1 text-sm leading-relaxed text-forest/70">{text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <img
                src={trainingSession}
                alt="Farmers attending an on-farm poultry training session at DWIT Farm"
                loading="lazy"
                className="h-full max-h-[420px] w-full rounded-xl object-cover shadow-[0_28px_60px_-40px_rgba(20,40,20,0.9)]"
              />
            </div>
          </div>
        </section>

        {/* Formats */}
        <section className="bg-cream pb-14 sm:pb-16">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
            <h2 className="text-center font-display text-3xl font-extrabold text-forest sm:text-4xl">
              Training Formats
            </h2>

            <div className="mt-8 grid gap-0 overflow-hidden rounded-2xl bg-cream sm:grid-cols-3">
              {FORMATS.map(({ icon: Icon, title, text }, i) => (
                <div
                  key={title}
                  className={`flex items-start gap-4 p-6 sm:p-7 ${
                    i > 0 ? "sm:border-l sm:border-forest/10" : ""
                  }`}
                >
                  <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-forest text-gold">
                    <Icon className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold text-forest">{title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-forest/70">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-cream pb-16">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col items-center gap-6 rounded-2xl bg-forest px-6 py-8 text-center sm:px-10 lg:flex-row lg:justify-between lg:text-left">
              <div className="flex flex-col items-center gap-5 lg:flex-row">
                <span className="grid h-16 w-16 shrink-0 place-items-center rounded-full border border-gold/50 text-gold">
                  <Sprout className="h-7 w-7" />
                </span>
                <div>
                  <h2 className="font-display text-2xl font-extrabold text-cream sm:text-[1.7rem]">
                    Ready to Start Your Journey?
                  </h2>
                  <p className="mt-2 max-w-xl text-[15px] leading-relaxed text-cream/80">
                    Join our training programs and take the first step towards a successful poultry
                    farming business.
                  </p>
                </div>
              </div>
              <a
                href="https://wa.me/919226466497"
                target="_blank"
                rel="noreferrer"
                className="inline-flex shrink-0 items-center gap-2 rounded-md bg-gradient-to-r from-gold-deep to-gold px-7 py-4 text-[15px] font-medium text-ink transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-16px_var(--color-gold)]"
              >
                Join Our Training Programs
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <SectionDivider />
      <SiteFooter />
    </>
  );
}
