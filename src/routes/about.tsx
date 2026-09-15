import { createFileRoute } from "@tanstack/react-router";

import aboutBannerAsset from "@/assets/about-banner.png.asset.json";
import AboutStory from "@/components/AboutStory";
import AboutUmesh from "@/components/AboutUmesh";
import OurPurpose from "@/components/OurPurpose";
import FarmerTestimonials from "@/components/FarmerTestimonials";
import SiteHeader from "@/components/SiteHeader";
import SectionDivider from "@/components/SectionDivider";
import SiteFooter from "@/components/SiteFooter";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — DWIT Farm" },
      {
        name: "description",
        content:
          "Learn about DWIT Farm's mission to empower farmers with practical Gavran poultry farming knowledge, real-world training, and continuous support.",
      },
      { property: "og:title", content: "About Us — DWIT Farm" },
      {
        property: "og:description",
        content:
          "DWIT Farm empowers farmers with practical Gavran poultry farming knowledge, real-world training, and continuous support.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});


function AboutPage() {


  return (
    <>
      <SiteHeader />

      {/* About banner */}
      <main className="min-h-screen bg-cream pb-16">
        <section className="relative isolate flex min-h-[360px] items-center overflow-hidden bg-cream md:min-h-[400px] lg:min-h-[460px]">
          {/* Background image (full-bleed) */}
          <img
            src={aboutBannerAsset.url}
            alt="Umesh Patil holding a Gavran hen at DWIT Farm with poultry shed in the background"
            loading="eager"
            width={1600}
            height={700}
            className="absolute inset-0 -z-10 h-full w-full object-cover object-[70%_center]"
          />
          {/* Soft cream fade from the left */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-cream from-20% via-cream/90 via-45% to-transparent to-72%" />
          <div className="absolute inset-0 -z-10 bg-cream/55 sm:hidden" />

          {/* Left content */}
          <div className="relative mx-auto w-full max-w-[1400px] px-5 pb-12 pt-24 sm:px-8 sm:pt-28 lg:px-12 lg:pb-16 lg:pt-32">
            <div className="max-w-xl sm:w-[62%] lg:w-[54%]">
              <h1 className="font-display text-[2.6rem] font-extrabold leading-[1.05] tracking-tight text-forest sm:text-[3.2rem] lg:text-[3.8rem]">
                About Us
              </h1>

              <p className="mt-4 font-display text-xl font-bold leading-snug text-forest sm:text-2xl lg:text-[1.8rem]">
                शिका. समजा. अंमलात आणा.
              </p>
              <p className="mt-1 font-display text-xl font-bold leading-snug text-gold-deep sm:text-2xl lg:text-[1.8rem]">
                आणि बदल घडवा.
              </p>

              <p className="mt-6 max-w-md text-[15px] leading-relaxed text-forest/80 sm:text-base">
                Dwit Farm is on a mission to empower farmers with practical
                knowledge, real-world training, and continuous support.
              </p>
            </div>
          </div>
        </section>

        <AboutStory />
        <AboutUmesh />
        <OurPurpose />
        <FarmerTestimonials />
      </main>
      <SectionDivider />
      <SiteFooter />
    </>
  );
}
