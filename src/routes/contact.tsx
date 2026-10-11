import { createFileRoute, Link } from "@tanstack/react-router";
import { type FormEvent } from "react";
import {
  ArrowRight,
  Phone,
  Mail,
  MessageCircle,
  Building2,
  Send,
  Bird,
} from "lucide-react";

const gateImage = "/images/dwit-farm-gate.jpg";
import SiteHeader from "@/components/SiteHeader";
import SectionDivider from "@/components/SectionDivider";
import SiteFooter from "@/components/SiteFooter";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact DWIT Farm — Gavran Poultry Training Support" },
      {
        name: "description",
        content:
          "Contact DWIT Farm for pure Gavran poultry products, practical training and guidance. Visit our Palghar or Pune locations.",
      },
      { property: "og:title", content: "Contact DWIT Farm — Gavran Poultry Training Support" },
      {
        property: "og:description",
        content:
          "Reach DWIT Farm by phone, email or WhatsApp, or visit our locations in Palghar and Pune.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});


const CONTACT_ITEMS = [
  {
    icon: Phone,
    title: "Phone",
    lines: ["+91 92264 66497"],
    href: "tel:+919226466497",
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["dwitfarm@gmail.com"],
    href: "mailto:dwitfarm@gmail.com",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    lines: ["Click to chat with us", "+91 92264 66497"],
    href: "https://wa.me/919226466497",
  },
];

const LOCATIONS = [
  {
    name: "Dwit Farm Main Branch, Palghar",
    address: ["Dwit Farm, At-Post Kev,", "Tal. Vikramgad,", "Dist. Palghar,", "Maharashtra – 401403"],
    query: "Dwit Farm, Kev, Vikramgad, Palghar, Maharashtra 401403",
    directionsUrl: "https://maps.app.goo.gl/S8bPc4FgNbjio2dW7",
  },
  {
    name: "Dwit Farm Pune Branch",
    address: [
      "At-Shivri, Post-Sasvad,",
      "Tal. Purandar,",
      "Dist. Pune,",
      "Maharashtra – 412301",
    ],
    query: "18.262243,76.658669",
    directionsUrl: "https://maps.google.com/?q=18.262243,76.658669",
  },
];

const inputClass =
  "w-full rounded-lg border border-forest/15 bg-white/70 px-4 py-3 text-[15px] text-forest placeholder:text-forest/45 outline-none transition-colors duration-300 focus:border-gold focus:bg-white";

function ContactPage() {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const values = new FormData(e.currentTarget);
    const message = [
      "DWIT Farm website enquiry",
      `Name: ${String(values.get("name") ?? "")}`,
      `Phone: ${String(values.get("phone") ?? "")}`,
      `Email: ${String(values.get("email") ?? "")}`,
      `Subject: ${String(values.get("subject") ?? "")}`,
      `Message: ${String(values.get("message") ?? "")}`,
    ].join("\n");
    window.open(`https://wa.me/919226466497?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <SiteHeader />

      <main className="bg-cream">
        {/* Banner */}
        <section className="relative isolate flex min-h-[360px] items-center overflow-hidden bg-cream md:min-h-[400px] lg:min-h-[460px]">
          <img
            src={gateImage}
            alt="Wooden DWIT Farm entrance gate leading to the poultry shed"
            className="absolute inset-0 -z-10 h-full w-full object-cover object-[70%_center]"
            loading="eager"
            width={1024}
            height={1024}
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-cream from-20% via-cream/90 via-45% to-transparent to-72%" />
          <div className="absolute inset-0 -z-10 bg-cream/55 sm:hidden" />

          <div className="relative mx-auto w-full max-w-[1400px] px-5 pb-12 pt-24 sm:px-8 sm:pt-28 lg:px-12 lg:pb-16 lg:pt-32">
            <div className="max-w-xl sm:w-[62%] lg:w-[54%]">
              <h1 className="font-display text-[2.6rem] font-extrabold leading-[1.05] tracking-tight text-forest sm:text-[3.2rem] lg:text-[3.8rem]">
                CONTACT US
              </h1>
              <p className="mt-4 font-display text-xl font-bold leading-snug text-gold-deep sm:text-2xl lg:text-[1.8rem]">
                आम्ही तुमच्या मदतीसाठी येथे आहोत.
              </p>
              <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-forest/80 sm:text-base">
                गावरान कुक्कुटपालन, आमची उत्पादने किंवा इतर कोणत्याही माहितीसाठी आमच्याशी संपर्क करा. आम्हाला तुमच्याशी बोलायला नक्कीच आवडेल.
              </p>
            </div>
          </div>
        </section>

        {/* Get in touch + form */}
        <section className="mx-auto max-w-[1400px] px-5 py-10 sm:px-8 lg:px-12">
          <div className="grid gap-0 overflow-hidden rounded-[20px] border border-forest/10 bg-cream/60 shadow-[0_24px_60px_-40px_rgba(20,40,20,0.5)] lg:grid-cols-[0.85fr_1.15fr]">
            {/* Get in Touch */}
            <div className="border-b border-forest/10 p-7 sm:p-9 lg:border-b-0 lg:border-r">
              <h2 className="font-display text-2xl font-bold text-forest">Get in Touch</h2>
              <span className="mt-2 block h-[3px] w-10 rounded-full bg-gold" />
              <p className="mt-4 text-[14px] leading-relaxed text-forest/70">
                We&apos;re always happy to answer your questions and provide the support you need.
              </p>

              <ul className="mt-6 divide-y divide-forest/10">
                {CONTACT_ITEMS.map(({ icon: Icon, title, lines, href }) => {
                  const body = (
                    <div className="flex items-start gap-4 py-4">
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gold/15 text-gold-deep">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="font-semibold text-forest">{title}</p>
                        {lines.map((l) => (
                          <p key={l} className="text-[14px] leading-relaxed text-forest/70">
                            {l}
                          </p>
                        ))}
                      </div>
                    </div>
                  );
                  return (
                    <li key={title}>
                      {href ? (
                        <a
                          href={href}
                          target={href.startsWith("http") ? "_blank" : undefined}
                          rel="noreferrer"
                          className="block transition-colors duration-300 hover:text-gold-deep"
                        >
                          {body}
                        </a>
                      ) : (
                        body
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Form */}
            <div className="p-7 sm:p-9">
              <h2 className="font-display text-2xl font-bold text-forest">Send Us a Message</h2>
              <span className="mt-2 block h-[3px] w-10 rounded-full bg-gold" />
              <p className="mt-4 text-[14px] text-forest/70">
                Fill out the form below and we will get back to you soon.
              </p>

              <form onSubmit={onSubmit} className="mt-6 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <input required maxLength={100} name="name" aria-label="Your name" placeholder="Your Name*" className={inputClass} />
                  <input
                    required
                    maxLength={20}
                    name="phone"
                    aria-label="Phone number"
                    type="tel"
                    placeholder="Phone Number*"
                    className={inputClass}
                  />
                </div>
                <input
                  required
                  maxLength={255}
                  name="email"
                  aria-label="Email address"
                  type="email"
                  placeholder="Email Address*"
                  className={inputClass}
                />
                <input required maxLength={150} name="subject" aria-label="Subject" placeholder="Subject*" className={inputClass} />
                <textarea
                  required
                  maxLength={1000}
                  name="message"
                  aria-label="Your message"
                  rows={6}
                  placeholder="Your Message*"
                  className={`${inputClass} resize-none`}
                />
                <button
                  type="submit"
                  className="group inline-flex w-full items-center justify-center gap-3 rounded-lg bg-forest px-6 py-4 text-[15px] font-semibold text-cream transition-all duration-300 hover:-translate-y-0.5 hover:bg-forest/90"
                >
                  <Send className="h-4 w-4 text-gold" />
                  Send Message
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
                <p className="text-center text-xs text-forest/60">Submitting opens WhatsApp with your message ready to send.</p>
              </form>
            </div>
          </div>
        </section>

        {/* Our Locations */}
        <section className="mx-auto max-w-[1400px] px-5 pb-4 sm:px-8 lg:px-12">
          <h2 className="font-display text-3xl font-bold text-forest">Our Locations</h2>
          <span className="mt-2 block h-[3px] w-12 rounded-full bg-gold" />
          <p className="mt-3 text-[15px] text-forest/70">
            Visit or connect with us at our Dwit Farm locations.
          </p>

          <div className="mx-auto mt-7 grid max-w-5xl gap-6 md:grid-cols-2">
            {LOCATIONS.map((loc) => (
              <article
                key={loc.name}
                className="flex flex-col overflow-hidden rounded-[18px] border border-forest/10 bg-cream/60 p-6 shadow-[0_20px_45px_-35px_rgba(20,40,20,0.6)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_55px_-32px_rgba(20,40,20,0.55)]"
              >
                <div className="flex items-start gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gold/15 text-gold-deep">
                    <Building2 className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold text-forest">{loc.name}</h3>
                    <div className="mt-2 text-[14px] leading-relaxed text-forest/70">
                      {loc.address.map((l) => (
                        <p key={l}>{l}</p>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-auto pt-5">
                  <div className="overflow-hidden rounded-xl border border-forest/10">
                  <iframe
                    title={`Map of ${loc.name}`}
                    src={`https://www.google.com/maps?q=${encodeURIComponent(loc.query)}&output=embed`}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="block h-52 w-full sm:h-56"
                  />
                  </div>
                </div>

                <a
                  href={loc.directionsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group mt-5 inline-flex w-fit items-center gap-2 rounded-lg border border-forest/20 bg-white px-4 py-2.5 text-[14px] font-medium text-forest transition-all duration-300 hover:border-gold hover:text-gold-deep"
                >
                  Get Directions
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* CTA band */}
        <section className="mx-auto max-w-[1400px] px-5 pt-10 sm:px-8 lg:px-12">
          <div className="flex flex-col items-start gap-6 rounded-[18px] bg-forest px-7 py-8 sm:px-10 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-6">
              <span className="hidden h-20 w-20 shrink-0 place-items-center rounded-full border border-gold/40 text-gold sm:grid">
                <Bird className="h-9 w-9" />
              </span>
              <div>
                <h2 className="font-display text-2xl font-bold text-cream sm:text-[1.7rem]">
                  Let&apos;s Build a Better Future Together
                </h2>
                <p className="mt-2 max-w-lg text-[15px] leading-relaxed text-cream/80">
                  Join our training programs and be a part of the Gavran Poultry Farming revolution.
                </p>
              </div>
            </div>
            <Link
              to="/training"
              className="group inline-flex shrink-0 items-center gap-3 rounded-lg bg-gradient-to-r from-gold-deep to-gold px-7 py-4 text-[15px] font-semibold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-16px_var(--color-gold)]"
            >
              Join Our Training Programs
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </section>

      </main>

      <SectionDivider />
      <SiteFooter />
    </>
  );
}
