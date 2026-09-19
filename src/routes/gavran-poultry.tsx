import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Leaf,
  ShieldCheck,
  Heart,
  Truck,
  Headphones,
  Phone,
  ClipboardList,
  Package,
  Star,
  UserCheck,
  Clock,
  IndianRupee,
  Boxes,
  Timer,
  CreditCard,
  MessageCircle,
  Check,
  Sparkles,
} from "lucide-react";

import bannerAsset from "@/assets/gp-banner.jpg.asset.json";
import chicksAsset from "@/assets/gp-chicks.jpg.asset.json";
import hensAsset from "@/assets/gp-hens.jpg.asset.json";
import meatAsset from "@/assets/gp-meat.jpg.asset.json";
import eggsAsset from "@/assets/gp-eggs.jpg.asset.json";
import monthOldChicksImage from "@/assets/gp-month-old-chicks.jpg";
import azollaBedImage from "@/assets/gp-azolla-bed.jpg";
import poultryFeedImage from "@/assets/gp-poultry-feed.jpg";
import poultryEquipmentImage from "@/assets/gp-poultry-equipment.jpg";
import SiteHeader from "@/components/SiteHeader";
import SectionDivider from "@/components/SectionDivider";
import SiteFooter from "@/components/SiteFooter";

export const Route = createFileRoute("/gavran-poultry")({
  head: () => ({
    meta: [
      { title: "Gavran Poultry — Chicks, Hens, Meat & Eggs | DWIT Farm" },
      {
        name: "description",
        content:
          "Pure gavran chicks, live hens, fresh country chicken meat and farm eggs from DWIT Farm, delivered fresh and safe across Maharashtra.",
      },
      { property: "og:title", content: "Gavran Poultry — Chicks, Hens, Meat & Eggs | DWIT Farm" },
      {
        property: "og:description",
        content:
          "Naturally raised gavran poultry products from DWIT Farm with home delivery across Maharashtra.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GavranPoultryPage,
});


const WHATSAPP = "https://wa.me/919226466497";

const USPS = [
  { icon: Leaf, title: "100% शुद्ध गावरान", sub: "नैसर्गिक पद्धतीने वाढवलेले" },
  { icon: ShieldCheck, title: "रोगप्रतिकारक क्षमता", sub: "निरोगी आणि मजबूत" },
  { icon: Heart, title: "आरोग्यदायी आणि सुरक्षित", sub: "चवदार, पौष्टिक आणि नैसर्गिक" },
  { icon: Truck, title: "संपूर्ण महाराष्ट्रात डिलिव्हरी", sub: "वेळेवर आणि सुरक्षित" },
  { icon: Headphones, title: "ऑर्डर व सपोर्ट", sub: "त्वरित संपर्क आणि मार्गदर्शन" },
];

const PRODUCTS = [
  {
    no: "01",
    image: chicksAsset.url,
    alt: "एक दिवसांची गावरान पिल्ले",
    title: "१ दिवसांचे पिल्ले",
    english: "1-Day Chick",
    description: "निरोगी आणि सक्रिय गावरान पिल्ले",
    points: ["शुद्ध गावरान वंश", "सक्रिय आणि निरोगी", "योग्य वाढीसाठी मार्गदर्शन"],
    price: "₹60 / पिल्लू",
  },
  {
    no: "02",
    image: monthOldChicksImage,
    alt: "एक महिन्यांची गावरान पिल्ले",
    title: "१ महिन्यांचे पिल्ले",
    english: "1-Month Chick",
    description: "सुदृढ आणि लसीकरण केलेली पिल्ले",
    points: ["चांगली वाढ आणि वजन", "रोगप्रतिकारक क्षमता", "शेतीसाठी तयार"],
    price: "₹150 / पिल्लू",
  },
  {
    no: "03",
    image: hensAsset.url,
    alt: "गावरान कोंबडा आणि कोंबडी",
    title: "गावरान कोंबडा / कोंबडी",
    english: "Hen / Cock",
    description: "दर्जेदार शुद्ध गावरान कोंबडी",
    points: ["नैसर्गिक पद्धतीने वाढवलेली", "चवदार आणि पौष्टिक", "शेती व घरगुती वापरासाठी योग्य"],
    price: "₹600 / किलो",
  },
  {
    no: "04",
    image: eggsAsset.url,
    alt: "गावरान अंडी",
    title: "गावरान अंडी",
    english: "Eggs",
    description: "ताजी आणि नैसर्गिक गावरान अंडी",
    points: ["पौष्टिक आणि आरोग्यदायी", "नैसर्गिक पद्धतीने उत्पादन", "छान चव आणि दर्जा"],
    price: "₹20 / अंडे",
  },
  {
    no: "05",
    image: azollaBedImage,
    alt: "कुक्कुटपालनासाठी अझोला बेड",
    title: "अझोला बेड",
    english: "Azolla Bed",
    description: "कुक्कुटपालनासाठी उपयुक्त अझोला बेड",
    points: ["उच्च प्रतीचे सेटअप", "सोपे व्यवस्थापन", "कोंबड्यांसाठी उत्तम पूरक आहार"],
    price: "माहितीसाठी संपर्क करा",
  },
  {
    no: "06",
    image: poultryFeedImage,
    alt: "दर्जेदार कुक्कुट खाद्य",
    title: "कुक्कुट खाद्य",
    english: "Poultry Feed",
    description: "गावरान कोंबड्यांसाठी दर्जेदार खाद्य",
    points: ["संतुलित पोषण", "नैसर्गिक वाढीसाठी उपयुक्त", "चांगले आरोग्य आणि उत्पादन"],
    price: "माहितीसाठी संपर्क करा",
  },
  {
    no: "07",
    image: poultryEquipmentImage,
    alt: "कुक्कुटपालनासाठी फीडर आणि ड्रिंकर साहित्य",
    title: "कुक्कुटपालन साहित्य",
    english: "Poultry Equipment",
    description: "सर्व प्रकारचे कुक्कुटपालन साहित्य",
    points: ["उत्तम दर्जाचे फीडर आणि ड्रिंकर", "शेतीसाठी आवश्यक साधने", "परवडणाऱ्या किमतीत उपलब्ध"],
    price: "माहितीसाठी संपर्क करा",
  },
  {
    no: "08",
    image: meatAsset.url,
    alt: "स्वच्छ ताजे गावरान चिकन",
    title: "गावरान चिकन",
    english: "Pure Gavran Chicken",
    description: "ताजे, स्वच्छ आणि चवदार गावरान चिकन",
    points: ["नैसर्गिक पद्धतीने वाढवलेले", "उत्तम चव आणि गुणवत्ता", "घरगुती व हॉटेल वापरासाठी योग्य"],
    price: "माहितीसाठी संपर्क करा",
  },
];

const STEPS = [
  { icon: Phone, title: "1. संपर्क करा", sub: "WhatsApp / कॉल द्वारे तुमची ऑर्डर द्या" },
  { icon: ClipboardList, title: "2. ऑर्डर कन्फर्म", sub: "तुमची ऑर्डर कन्फर्म करून तपशील सांगा" },
  { icon: Package, title: "3. तयारी आणि पॅकिंग", sub: "ताजे उत्पादन स्वच्छ पॅक करून तयार केले जाते" },
  { icon: Truck, title: "4. डिलिव्हरी", sub: "वेळेवर आणि सुरक्षित तुमच्या दारी" },
];

const SPECIALS = [
  { icon: Leaf, title: "नैसर्गिक पद्धतीने पालन", sub: "रसायनमुक्त आहार आणि मोकळ्या वातावरणात वाढ" },
  { icon: ShieldCheck, title: "निरोगी आणि तंदुरुस्त", sub: "रोगप्रतिकारक क्षमता जास्त, मृत्युदर कमी" },
  { icon: Star, title: "उत्तम चव आणि गुणवत्ता", sub: "चवदार, पौष्टिक आणि उत्तम दर्जाचे उत्पादन" },
  { icon: UserCheck, title: "तज्ज्ञ मार्गदर्शन", sub: "अनुभवी टीमचे योग्य मार्गदर्शन आणि सपोर्ट" },
  { icon: Clock, title: "वेळेवर डिलिव्हरी", sub: "वेळेवर आणि सुरक्षित डिलिव्हरीची हमी" },
  { icon: IndianRupee, title: "योग्य दर", sub: "उत्तम गुणवत्ता आणि वाजवी दरात उपलब्ध" },
];

const CITIES = [
  ["पुणे", "सातारा", "औरंगाबाद"],
  ["मुंबई", "सांगली", "सोलापूर"],
  ["नाशिक", "अकोला", "धुळे"],
  ["नागपूर", "अमरावती", ""],
  ["कोल्हापूर", "सोलापूर", ""],
];

const DELIVERY_INFO = [
  { icon: Boxes, label: "किमान ऑर्डर:", value: "उत्पादनानुसार (वरील तपशील पहा)" },
  { icon: Timer, label: "डिलिव्हरी वेळ:", value: "सामान्यतः 24 ते 48 तासांत" },
  { icon: Truck, label: "डिलिव्हरी चार्ज:", value: "अंतरानुसार लागू (मोठ्या ऑर्डरवर फ्री डिलिव्हरी)" },
  { icon: CreditCard, label: "पेमेंट पद्धती:", value: "UPI, गुगल पे, फोन पे, बँक ट्रान्सफर, रोख" },
  { icon: Phone, label: "ऑर्डर करण्याची पद्धत:", value: "WhatsApp / कॉल" },
];

const GUARANTEES = [
  "शुद्ध गावरान उत्पादन",
  "रोगमुक्त आणि तंदुरुस्त",
  "स्वच्छ आणि हायजेनिक",
  "समाधान किंवा पुनर्पूर्तता",
  "ग्राहक समाधान आमची प्राधान्यता",
];

function SectionHeading({ label, title }: { label: string; title: string }) {
  return (
    <div className="text-center">
      <p className="flex items-center justify-center gap-2 font-display text-xl font-bold text-forest sm:text-2xl">
        <Leaf className="h-5 w-5 text-gold-deep" />
        {label}
        <Leaf className="h-5 w-5 scale-x-[-1] text-gold-deep" />
      </p>
      {title ? (
        <h2 className="mt-3 font-display text-[1.9rem] font-extrabold leading-tight text-forest sm:text-[2.6rem]">
          {title}
        </h2>
      ) : null}
    </div>
  );
}

function GavranPoultryPage() {


  return (
    <>
      <SiteHeader />

      <main className="bg-white">
        {/* Banner */}
        <section className="relative isolate flex min-h-[360px] items-center overflow-hidden bg-cream md:min-h-[400px] lg:min-h-[460px]">
          <img
            src={bannerAsset.url}
            alt="Farmer holding a healthy gavran hen with free-range chickens on the DWIT Farm"
            className="absolute inset-0 -z-10 h-full w-full object-cover object-[70%_center]"
            loading="eager"
            width={1600}
            height={900}
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-cream from-20% via-cream/90 via-45% to-transparent to-72%" />
          <div className="absolute inset-0 -z-10 bg-cream/55 sm:hidden" />

          <div className="relative mx-auto w-full max-w-[1400px] px-5 pb-12 pt-24 sm:px-8 sm:pt-28 lg:px-12 lg:pb-16 lg:pt-32">
            <div className="max-w-xl sm:w-[62%] lg:w-[54%]">
              <p className="flex items-center gap-2 text-[13px] font-semibold tracking-[0.18em] text-forest/80">
                <Leaf className="h-4 w-4 text-gold-deep" />
                GAVRAN POULTRY
              </p>
              <h1 className="mt-4 font-display text-[2.4rem] font-extrabold leading-[1.08] tracking-tight text-forest sm:text-[2.9rem] lg:text-[3.2rem]">
                शुद्ध गावरान
                <br />
                <span className="text-gold-deep">पोल्ट्री उत्पादने</span>
              </h1>
              <span className="mt-5 block h-[3px] w-16 rounded-full bg-gold" />
              <p className="mt-5 text-[15px] leading-relaxed text-forest/75">
                पिल्ले, कोंबड्या, ताजे मांस आणि गावरान अंडी — नैसर्गिक पद्धतीने वाढवलेली,
                थेट फार्मवरून तुमच्या घरापर्यंत.
              </p>
            </div>
          </div>
        </section>

        {/* Product showcase */}
        <section className="bg-cream/45">
          <div className="mx-auto max-w-[1400px] px-5 pb-16 pt-14 sm:px-8 sm:pb-20 lg:px-12 lg:pt-18">
            <SectionHeading label="आमच्याकडून दर्जेदार उत्पादने" title="शुद्ध गावरान कोंबडी – संपूर्ण महाराष्ट्रात उपलब्ध!" />
            <div className="mx-auto mt-4 flex max-w-xs items-center gap-3">
              <span className="h-px flex-1 bg-gold/50" />
              <Leaf className="h-4 w-4 text-gold-deep" />
              <span className="h-px flex-1 bg-gold/50" />
            </div>
            <p className="mx-auto mt-5 max-w-3xl text-center text-[16px] leading-relaxed text-forest/75">
              DWIT Farm कडून तुम्हाला दर्जेदार गावरान पिल्ले, कोंबड्या, अंडी, चिकन आणि
              कुक्कुटपालनासाठी आवश्यक उत्पादने विश्वासार्ह गुणवत्तेसह उपलब्ध करून दिली जातात.
            </p>

            <div className="mt-9 grid gap-px overflow-hidden rounded-xl border border-forest/10 bg-forest/10 shadow-[0_20px_50px_-40px_rgba(20,40,20,0.9)] sm:grid-cols-2 lg:grid-cols-5">
              {USPS.map(({ icon: Icon, title, sub }) => (
                <div key={title} className="flex items-center gap-3 bg-cream/80 p-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-background text-gold-deep shadow-sm">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[14px] font-bold leading-snug text-forest">{title}</p>
                    <p className="mt-0.5 text-[12px] leading-snug text-forest/65">{sub}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 grid items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {PRODUCTS.map(({ no, image, alt, title, english, description, points, price }) => (
              <article
                key={title}
                className="group flex h-full flex-col overflow-hidden rounded-lg border border-forest/10 bg-background shadow-[0_16px_38px_-28px_rgba(20,40,20,0.8)] transition-all duration-300 hover:-translate-y-1 hover:border-gold/45 hover:shadow-[0_24px_52px_-28px_rgba(20,40,20,0.65)]"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={image}
                    alt={alt}
                    loading="lazy"
                    width={1024}
                    height={700}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 grid h-8 min-w-8 place-items-center rounded-md bg-forest px-2 text-[12px] font-bold text-cream shadow-md">
                    {no}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-[1.2rem] font-extrabold leading-tight text-forest">{title}</h3>
                  <p className="mt-1 text-[12.5px] font-medium text-forest/55">{english}</p>
                  <p className="mt-3 min-h-10 text-[13.5px] leading-relaxed text-forest/70">{description}</p>

                  <ul className="mt-4 space-y-2.5">
                    {points.map((p) => (
                      <li key={p} className="flex items-start gap-2.5 text-[13px] leading-snug text-forest/80">
                        <span className="mt-px grid h-5 w-5 shrink-0 place-items-center rounded-full bg-gold/20 text-gold-deep">
                          <Check className="h-3 w-3" />
                        </span>
                        {p}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-5">
                    <div className="rounded-md bg-cream px-3 py-3 text-center">
                      <p className="font-display text-[1.08rem] font-extrabold text-forest">{price}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
            </div>

            <div className="mt-10 text-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-forest px-7 py-3.5 text-[15px] font-semibold text-cream shadow-[0_14px_30px_-20px_rgba(20,40,20,0.9)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-forest/90"
              >
                सर्व उत्पादनांची माहिती पहा
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        {/* How to order */}
        <section className="bg-white">
          <div className="mx-auto max-w-[1400px] px-5 py-8 sm:px-8 lg:px-12">
            <SectionHeading label="ऑर्डर कशी करावी?" title="" />
            <div className="mt-7 grid items-stretch gap-4 rounded-2xl border border-forest/10 bg-cream/60 p-6 sm:grid-cols-2 lg:grid-cols-4">
              {STEPS.map(({ icon: Icon, title, sub }, i) => (
                <div key={title} className="relative flex items-start gap-3">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-white text-gold-deep shadow-sm">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="pr-6">
                    <p className="text-[15px] font-semibold text-forest">{title}</p>
                    <p className="mt-1 text-[13px] leading-snug text-forest/65">{sub}</p>
                  </div>
                  {i < STEPS.length - 1 && (
                    <ArrowRight className="absolute right-0 top-4 hidden h-4 w-4 text-forest/30 lg:block" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Specials */}
        <section className="bg-white">
          <div className="mx-auto max-w-[1400px] px-5 py-10 sm:px-8 lg:px-12">
            <SectionHeading label="DWIT FARM ची खासियत?" title="" />
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
              {SPECIALS.map(({ icon: Icon, title, sub }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-forest/10 bg-cream/55 p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-gold/45 hover:bg-white hover:shadow-[0_20px_46px_-34px_rgba(20,40,20,0.85)]"
                >
                  <span className="mx-auto grid h-14 w-14 place-items-center rounded-full border border-gold/30 bg-white text-gold-deep">
                    <Icon className="h-6 w-6" />
                  </span>
                  <p className="mt-4 text-[15px] font-semibold leading-snug text-forest">{title}</p>
                  <p className="mt-2 text-[13px] leading-snug text-forest/65">{sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Delivery */}
        <section className="bg-white">
          <div className="mx-auto grid max-w-[1400px] gap-6 px-5 py-8 sm:px-8 lg:grid-cols-2 lg:px-12">
            <div className="rounded-2xl border border-forest/10 bg-cream/60 p-7">
              <h3 className="font-display text-[1.6rem] font-extrabold text-forest">
                संपूर्ण महाराष्ट्रात डिलिव्हरी!
              </h3>
              <p className="mt-2 text-[15px] text-forest/70">आम्ही खालील भागात घरपोच डिलिव्हरी करतो.</p>
              <div className="relative mt-5">
                <ul className="grid max-w-lg grid-cols-2 gap-x-6 gap-y-2.5 sm:grid-cols-3">
                  {CITIES.flat()
                    .filter(Boolean)
                    .map((c, index) => (
                      <li key={`${c}-${index}`} className="flex items-center gap-2 text-[15px] text-forest/85">
                        <span className="h-1.5 w-1.5 rounded-full bg-gold-deep" />
                        {c}
                      </li>
                    ))}
                </ul>
                <Truck className="pointer-events-none absolute -top-2 right-2 hidden h-16 w-16 text-forest/15 lg:block" />
              </div>
              <p className="mt-5 text-[14.5px] text-forest/70">
                आणि इतर सर्व जिल्ह्यांमध्ये डिलिव्हरी उपलब्ध.
              </p>
            </div>

            <div className="rounded-2xl border border-forest/10 bg-cream/60 p-7">
              <h3 className="font-display text-[1.6rem] font-extrabold text-forest">डिलिव्हरी माहिती</h3>
              <ul className="mt-5 space-y-4">
                {DELIVERY_INFO.map(({ icon: Icon, label, value }) => (
                  <li key={label} className="flex items-start gap-3">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-white text-gold-deep shadow-sm">
                      <Icon className="h-4.5 w-4.5" />
                    </span>
                    <p className="text-[14.5px] leading-snug text-forest/80">
                      <span className="font-semibold text-forest">{label} </span>
                      {value}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* CTA band */}
        <section className="bg-white">
          <div className="mx-auto max-w-[1400px] px-5 py-8 sm:px-8 lg:px-12">
            <div className="flex flex-col items-center gap-6 rounded-2xl bg-forest px-7 py-8 text-cream lg:flex-row lg:justify-between">
              <div className="flex items-center gap-5">
                <span className="grid h-16 w-16 shrink-0 place-items-center rounded-full border border-gold/50 text-gold">
                  <Phone className="h-7 w-7" />
                </span>
                <div>
                  <p className="font-display text-[1.55rem] font-extrabold leading-tight">
                    अधिक माहितीसाठी आजच संपर्क करा!
                  </p>
                  <p className="mt-1.5 text-[15px] text-cream/75">
                    तुमच्या गरजेनुसार सर्वोत्तम सल्ला आणि सेवा मिळेल.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-gold-deep to-gold px-6 py-3.5 text-[15px] font-medium text-ink transition-transform duration-300 hover:-translate-y-0.5"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp वर मेसेज करा
                </a>
                <a
                  href="tel:+919226466497"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3.5 text-[15px] font-medium text-forest transition-transform duration-300 hover:-translate-y-0.5"
                >
                  <Phone className="h-4 w-4" />
                  +91 92264 66497
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Guarantee strip */}
        <section className="bg-white">
          <div className="mx-auto max-w-[1400px] px-5 pb-12 sm:px-8 lg:px-12">
            <div className="relative overflow-hidden rounded-2xl border border-forest/10 bg-cream/60 px-6 py-7">
              <Sparkles className="pointer-events-none absolute -left-3 bottom-0 h-20 w-20 text-forest/10" />
              <Sparkles className="pointer-events-none absolute -right-3 top-0 h-20 w-20 text-forest/10" />
              <h3 className="text-center font-display text-[1.4rem] font-extrabold text-forest">
                आमची हमी – शुद्धता, गुणवत्ता आणि विश्वास!
              </h3>
              <ul className="mt-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
                {GUARANTEES.map((g) => (
                  <li key={g} className="flex items-center gap-2 text-[14px] text-forest/80">
                    <span className="grid h-6 w-6 place-items-center rounded-full border border-gold/40 text-gold-deep">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    {g}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>

      <SectionDivider />
      <SiteFooter />
    </>
  );
}
