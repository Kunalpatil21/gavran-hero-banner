import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { z } from "zod";
import {
  ArrowRight,
  Bird,
  ChartNoAxesCombined,
  Check,
  ChevronDown,
  CircleDollarSign,
  ClipboardCheck,
  FileCheck2,
  FileText,
  Handshake,
  Leaf,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Scale,
  ShieldCheck,
  Sprout,
  Users,
  X,
} from "lucide-react";

import heroAsset from "@/assets/franchise-hero.jpg.asset.json";
import chicksAsset from "@/assets/gp-chicks.jpg.asset.json";
import hensAsset from "@/assets/gp-hens.jpg.asset.json";
import farmAsset from "@/assets/hero-farm.png.asset.json";
import SiteHeader from "@/components/SiteHeader";
import SectionDivider from "@/components/SectionDivider";
import SiteFooter from "@/components/SiteFooter";

export const Route = createFileRoute("/contract-farming")({
  head: () => ({
    meta: [
      { title: "Contract Farming — DWIT Farm Gavran Poultry" },
      {
        name: "description",
        content:
          "Explore DWIT Farm's Gavran poultry contract farming model, farmer responsibilities, buy-back policy, eligibility, documents and application process.",
      },
      { property: "og:title", content: "Contract Farming — DWIT Farm Gavran Poultry" },
      {
        property: "og:description",
        content:
          "A transparent Gavran poultry partnership model with practical guidance, defined responsibilities and market support.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContractFarmingPage,
});


const WHY = [
  { icon: ShieldCheck, title: "रोग कमी, पक्षी निरोगी", text: "नियोजित आरोग्य व्यवस्थापन आणि योग्य निगा." },
  { icon: ChartNoAxesCombined, title: "वाढ चांगली, उत्पादन वाढते", text: "प्रत्येक टप्प्यावर व्यावहारिक मार्गदर्शन." },
  { icon: CircleDollarSign, title: "खर्च कमी, नफा जास्त", text: "खाद्य व संसाधनांचे शास्त्रीय नियोजन." },
  { icon: Leaf, title: "वैज्ञानिक पालन पद्धती", text: "गावरान पक्ष्यांसाठी सिद्ध आणि सुयोग्य पद्धत." },
  { icon: Users, title: "तांत्रिक व प्रशिक्षण सहाय्य", text: "फार्म सुरू करण्यापासून सातत्यपूर्ण सपोर्ट." },
  { icon: Handshake, title: "विश्वासार्ह बाजारपेठ", text: "ठरलेल्या गुणवत्तेनुसार पारदर्शक Buy Back प्रक्रिया." },
];

const DETAILS = [
  {
    no: "01",
    title: "DWIT Farm ची जबाबदारी",
    icon: ClipboardCheck,
    image: chicksAsset.url,
    points: [
      "दर्जेदार गावरान पिल्ले पुरवणे",
      "Vaccination Time Table देणे",
      "Medicines व तांत्रिक मार्गदर्शन",
      "नियमित Farm Visit",
      "मोबाईल / WhatsApp सपोर्ट",
      "खाद्य व व्यवस्थापन मार्गदर्शन",
      "मार्केटिंग आणि Buy Back सुविधा",
      "प्रशिक्षण व रेकॉर्ड ठेवण्याचे मार्गदर्शन",
    ],
  },
  {
    no: "02",
    title: "शेतकऱ्याची जबाबदारी",
    icon: Sprout,
    image: farmAsset.url,
    alert: true,
    points: [
      "कंपनीच्या आराखड्यानुसार शेड तयार करणे",
      "स्वच्छ पाणी आणि योग्य खाद्य देणे",
      "वेळेवर लसीकरण करणे",
      "आजारी पक्ष्यांची माहिती तातडीने देणे",
      "दैनिक रेकॉर्ड ठेवणे",
      "कंपनीच्या सूचनांचे पालन करणे",
      "परवानगीशिवाय पक्ष्यांची विक्री न करणे",
    ],
  },
  {
    no: "03",
    title: "Buy Back Policy",
    icon: Scale,
    image: hensAsset.url,
    points: [
      "ठराविक वजनानंतर किंवा वयानुसार पक्षी खरेदी केले जातील.",
      "खरेदी दर त्या वेळच्या बाजारभाव, गुणवत्ता आणि वजनावर ठरेल.",
      "पक्षी उत्पादनानंतर 7 दिवसांच्या आत प्रोसेस सुरू केली जाईल.",
      "वजनासाठी इलेक्ट्रॉनिक काट्याचा वापर केला जाईल.",
      "पेमेंट बँक ट्रान्सफर किंवा UPI द्वारे केले जाईल.",
    ],
  },
  {
    no: "04",
    title: "करार कालावधी आणि नूतनीकरण",
    icon: FileCheck2,
    image: heroAsset.url,
    points: [
      "कराराचा कालावधी 1 वर्ष / 3 वर्ष / 5 वर्ष असा असू शकतो.",
      "दोन्ही पक्षांच्या लेखी संमतीने कराराचे नूतनीकरण केले जाईल.",
      "अटी, क्षमता आणि कार्यपद्धती करारपत्रात स्पष्ट नमूद केल्या जातील.",
    ],
  },
  {
    no: "05",
    title: "आवश्यक कागदपत्रे",
    icon: FileText,
    image: chicksAsset.url,
    points: ["आधार कार्ड", "PAN कार्ड (असल्यास)", "बँक पासबुक", "7/12 किंवा जमिनीचा पुरावा", "दोन फोटो"],
  },
  {
    no: "06",
    title: "करार रद्द होण्याची कारणे",
    icon: X,
    image: heroAsset.url,
    alert: true,
    points: [
      "कंपनीच्या नियमांचे उल्लंघन",
      "परवानगीशिवाय पक्ष्यांची विक्री",
      "चुकीची किंवा अपूर्ण माहिती देणे",
      "पक्ष्यांची जाणूनबुजून निकृष्ट दर्जाची देखभाल",
    ],
  },
  {
    no: "07",
    title: "शेतकऱ्यांना मिळणारे फायदे",
    icon: ChartNoAxesCombined,
    image: hensAsset.url,
    points: [
      "दर्जेदार पिल्ले आणि तांत्रिक मार्गदर्शन",
      "कमी जोखीम आणि नियमित प्रशिक्षण",
      "व्यवसाय वाढीसाठी मदत",
      "मार्केटिंगची चिंता कमी",
      "DWIT Farm बँड अंतर्गत काम करण्याची संधी",
    ],
  },
  {
    no: "08",
    title: "विशेष अटी व शर्ती",
    icon: Scale,
    image: farmAsset.url,
    alert: true,
    points: [
      "नैसर्गिक आपत्ती आल्यास दोन्ही पक्ष चर्चा करून निर्णय घेतील.",
      "सर्व वाद महाराष्ट्रातील संबंधित न्यायालयाच्या कार्यक्षेत्रात निकाली काढले जातील.",
      "करारातील प्रत्येक कलम लेखी स्वरूपात मान्य झाल्यानंतरच लागू राहील.",
    ],
  },
];

const FAQS = [
  { q: "या योजनेत कोण सहभागी होऊ शकतो?", a: "शेड, स्वच्छ पाणी, मूलभूत सुविधा आणि गावरान कुक्कुटपालनाची तयारी असलेला शेतकरी अर्ज करू शकतो." },
  { q: "किती किमान जागा आवश्यक आहे?", a: "उपलब्ध जागेची पाहणी, प्रस्तावित पक्षी क्षमता आणि स्थानिक परिस्थितीनुसार अंतिम गरज ठरवली जाते." },
  { q: "पिल्लांची निवड कशी केली जाते?", a: "DWIT Farm आरोग्य, गुणवत्ता आणि पालन मॉडेलनुसार योग्य गावरान पिल्लांची निवड व पुरवठा करते." },
  { q: "औषधे आणि लसीकरणाची सेवा कोण करेल?", a: "लसीकरण वेळापत्रक व तांत्रिक मार्गदर्शन DWIT Farm देईल; दैनंदिन पालनाची जबाबदारी शेतकऱ्याची राहील." },
  { q: "कंपनी पक्षी कधी खरेदी करेल?", a: "पक्षी ठरलेल्या वय, वजन आणि गुणवत्तेच्या निकषांपर्यंत पोहोचल्यानंतर Buy Back प्रक्रिया सुरू होईल." },
  { q: "पेमेंट कसे केले जाते?", a: "मान्य वजन, गुणवत्ता आणि बाजारभावानुसार अंतिम रक्कम बँक ट्रान्सफर किंवा UPI द्वारे दिली जाते." },
  { q: "कराराचा कालावधी किती असतो?", a: "करार 1, 3 किंवा 5 वर्षांचा असू शकतो आणि दोन्ही पक्षांच्या लेखी संमतीने नूतनीकरण करता येते." },
  { q: "मी करार घेतल्यानंतर काय शिकलो?", a: "फार्म सेटअप, खाद्य, लसीकरण, नोंदी, आरोग्य व्यवस्थापन आणि विक्री प्रक्रियेचे मार्गदर्शन मिळते." },
  { q: "काही अडचण आल्यास मदत कशी मिळेल?", a: "फोन, WhatsApp आणि नियोजित Farm Visit द्वारे तांत्रिक मदत उपलब्ध केली जाते." },
  { q: "अधिक माहितीसाठी कोणाशी संपर्क करावा?", a: "DWIT Farm टीमशी +91 92264 66497 या क्रमांकावर फोन किंवा WhatsApp द्वारे संपर्क करा." },
];

const applicationSchema = z.object({
  name: z.string().trim().min(2, "कृपया पूर्ण नाव टाका.").max(100, "नाव 100 अक्षरांपेक्षा कमी असावे."),
  mobile: z.string().trim().regex(/^[0-9+\s-]{10,15}$/, "कृपया वैध मोबाईल नंबर टाका."),
  whatsapp: z.string().trim().regex(/^[0-9+\s-]{10,15}$/, "कृपया वैध WhatsApp नंबर टाका."),
  email: z.union([z.literal(""), z.string().trim().email("कृपया वैध ईमेल टाका.").max(255)]),
  city: z.string().trim().min(2, "गाव किंवा शहर टाका.").max(80),
  district: z.string().trim().min(2, "जिल्हा टाका.").max(80),
  state: z.string().trim().min(2, "राज्य निवडा."),
  area: z.string().trim().min(1, "उपलब्ध जागा निवडा."),
  capacity: z.string().trim().min(1, "पक्षी क्षमता निवडा."),
  message: z.string().trim().max(1000, "माहिती 1000 अक्षरांपेक्षा कमी असावी."),
});

type FormErrors = Partial<Record<keyof z.infer<typeof applicationSchema>, string>>;

const inputClass =
  "w-full rounded-md border border-forest/15 bg-white px-3.5 py-3 text-[15px] text-forest outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/15";
const labelClass = "block text-[13px] font-semibold text-forest/80";

function ContractFarmingPage() {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});


  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(false);
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const result = applicationSchema.safeParse(data);
    if (!result.success) {
      const nextErrors: FormErrors = {};
      result.error.issues.forEach((issue) => {
        const key = issue.path[0];
        if (typeof key === "string" && !(key in nextErrors)) nextErrors[key as keyof FormErrors] = issue.message;
      });
      setErrors(nextErrors);
      return;
    }
    setErrors({});
    setSent(true);
    form.reset();
  };

  return (
    <>
      <SiteHeader />

      <main className="bg-white">
        <section className="relative isolate flex min-h-[360px] items-center overflow-hidden bg-cream md:min-h-[400px] lg:min-h-[460px]">
          <img src={heroAsset.url} alt="DWIT Farm poultry sheds and free-range Gavran hens" className="absolute inset-0 -z-20 h-full w-full object-cover object-[70%_center]" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-cream from-20% via-cream/90 via-45% to-transparent to-72%" />
          <div className="absolute inset-0 -z-10 bg-cream/55 sm:hidden" />
          <div className="relative mx-auto w-full max-w-[1400px] px-5 pb-12 pt-24 sm:px-8 sm:pt-28 lg:px-12 lg:pb-16 lg:pt-32">
            <div className="max-w-xl sm:w-[62%] lg:w-[54%]">
              <h1 className="font-display text-[2.6rem] font-extrabold leading-[1.05] tracking-tight text-forest sm:text-[3.2rem] lg:text-[3.8rem]">
                CONTRACT FARMING
              </h1>

              <p className="mt-4 font-display text-xl font-bold leading-snug text-gold-deep sm:text-2xl lg:text-[1.8rem]">
                मेहनत तुमची. साथ DWIT Farm ची.
              </p>

              <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-forest/80 sm:text-base">
                गावरान कोंबडी पालनासाठी पिल्ले, योग्य मार्गदर्शन आणि आवश्यक सहकार्य देत
                तुमच्या फार्मच्या वाढीसाठी DWIT Farm तुमच्या सोबत.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-cream/45 py-14 sm:py-18">
          <div className="mx-auto grid max-w-[1400px] items-center gap-8 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-12">
            <img src={hensAsset.url} alt="Healthy Gavran hens at a poultry farm" className="h-[310px] w-full rounded-lg object-cover shadow-xl" loading="lazy" />
            <div>
              <p className="text-sm font-semibold uppercase text-gold-deep">शेतकऱ्यांसोबत एक विश्वासार्ह भागीदारी</p>
              <h2 className="mt-2 font-display text-3xl font-extrabold text-forest sm:text-4xl">कॉन्ट्रॅक्ट फार्मिंग म्हणजे काय?</h2>
              <span className="mt-3 block h-1 w-16 rounded-full bg-gold" />
              <p className="mt-5 text-[17px] leading-relaxed text-forest/80">DWIT Farm च्या मार्गदर्शनाखाली गावरान कोंबडी पालन करण्यासाठी शेतकऱ्यांसोबत करार पद्धतीने काम करण्याची ही एक विश्वासार्ह योजना आहे. काही शेती पालन करा, आम्ही तुमच्या संपूर्ण प्रक्रियेत मार्गदर्शन, तांत्रिक सपोर्ट आणि निश्चित बाजारपेठ देतो.</p>
              <blockquote className="mt-6 border-l-4 border-gold bg-white/70 px-5 py-4 font-display text-xl font-bold text-forest">“तुमची मेहनत — आमची जबाबदारी — हमखास बाजारपेठ!”</blockquote>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
            <div className="text-center"><h2 className="font-display text-3xl font-extrabold text-forest sm:text-4xl">DWIT Farm निवडण्याची कारणे</h2><p className="mt-2 text-forest/65">शेतकऱ्यांच्या यशासाठी आमचा अनुभव आणि दृढ सहकार्य</p></div>
            <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
              {WHY.map(({ icon: Icon, title, text }) => <article key={title} className="rounded-md border border-forest/10 bg-cream/55 p-5 text-center transition duration-300 hover:-translate-y-1 hover:border-gold/60 hover:shadow-lg"><span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-forest text-gold"><Icon className="h-6 w-6" /></span><h3 className="mt-4 font-display text-lg font-bold text-forest">{title}</h3><p className="mt-2 text-sm leading-relaxed text-forest/65">{text}</p></article>)}
            </div>
          </div>
        </section>

        <section className="bg-cream/45 py-16 sm:py-20">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
            <div className="text-center"><h2 className="font-display text-3xl font-extrabold text-forest sm:text-4xl">कॉन्ट्रॅक्ट फार्मिंगची संपूर्ण माहिती</h2><p className="mt-2 text-forest/65">खालील प्रत्येक टप्प्यावर तुमच्या यशासाठी आम्ही सोबत</p></div>
            <div className="mt-10 grid gap-5 lg:grid-cols-2">
              {DETAILS.map(({ no, title, icon: Icon, image, points, alert }) => <article key={no} className="overflow-hidden rounded-lg border border-forest/10 bg-white shadow-sm transition hover:shadow-xl"><div className="grid min-h-[320px] sm:grid-cols-[1.16fr_0.84fr]"><div className="p-6"><div className="flex items-center gap-3"><span className={`grid h-11 w-11 place-items-center rounded-full font-bold text-cream ${alert ? "bg-gold-deep" : "bg-forest"}`}>{no}</span><Icon className={`h-5 w-5 ${alert ? "text-gold-deep" : "text-forest"}`} /></div><h3 className={`mt-4 font-display text-2xl font-bold ${alert ? "text-gold-deep" : "text-forest"}`}>{title}</h3><ul className="mt-4 space-y-2">{points.map((point) => <li key={point} className="flex gap-2.5 text-[14px] leading-relaxed text-forest/75"><span className={`mt-1 grid h-4 w-4 shrink-0 place-items-center rounded-full text-cream ${alert ? "bg-gold-deep" : "bg-forest"}`}><Check className="h-2.5 w-2.5" /></span>{point}</li>)}</ul></div><img src={image} alt="" className="h-56 w-full object-cover sm:h-full" loading="lazy" /></div></article>)}
            </div>
          </div>
        </section>

        <section className="py-14 sm:py-18">
          <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
            <div className="relative isolate overflow-hidden rounded-lg bg-forest px-7 py-10 text-cream sm:px-10 lg:px-14">
              <img src={farmAsset.url} alt="DWIT Farm poultry sheds" className="absolute inset-0 -z-20 h-full w-full object-cover opacity-30" loading="lazy" />
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-forest via-forest/95 to-forest/50" />
              <div className="max-w-3xl"><div className="flex items-center gap-4"><span className="grid h-14 w-14 place-items-center rounded-full bg-gold text-ink"><CircleDollarSign className="h-7 w-7" /></span><div><p className="font-semibold text-gold">DWIT FARM चे उद्दिष्ट</p><h2 className="font-display text-3xl font-extrabold sm:text-4xl">शेतकऱ्यांचा विकास — सतत पुढे</h2></div></div><p className="mt-6 text-[17px] leading-relaxed text-cream/85">शेतकऱ्यांना उत्पादन वाढ, दर्जेदार गावरान कोंबडी उत्पादन, तांत्रिक मार्गदर्शन, बाजारपेठ आणि Buy Back ची संपूर्ण जबाबदारी DWIT Farm घेते. पारदर्शक पद्धतीने एकत्र वाढणे हेच आमचे उद्दिष्ट आहे.</p></div>
            </div>
          </div>
        </section>

        <section className="bg-cream/45 py-16">
          <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
            <div className="text-center"><h2 className="font-display text-3xl font-extrabold text-forest sm:text-4xl">वारंवार विचारले जाणारे प्रश्न (FAQ)</h2><p className="mt-2 text-forest/65">तुमच्या सर्व प्रश्नांची उत्तरे येथे मिळतील</p></div>
            <div className="mt-9 grid items-start gap-3 md:grid-cols-2">{FAQS.map(({ q, a }) => <details key={q} className="group rounded-md border border-forest/10 bg-white px-5 py-4"><summary className="flex cursor-pointer list-none items-center justify-between gap-3 font-semibold text-forest">{q}<ChevronDown className="h-4 w-4 shrink-0 transition group-open:rotate-180" /></summary><p className="mt-3 border-t border-forest/10 pt-3 text-sm leading-relaxed text-forest/70">{a}</p></details>)}</div>
          </div>
        </section>

        <section id="application" className="scroll-mt-24 py-16 sm:py-20">
          <div className="mx-auto grid max-w-[1400px] gap-6 px-5 sm:px-8 lg:grid-cols-[1.25fr_0.75fr] lg:px-12">
            <div className="rounded-lg border border-forest/10 bg-cream/45 p-6 sm:p-9">
              <h2 className="font-display text-3xl font-extrabold text-forest">कॉन्ट्रॅक्ट फार्मिंग नोंदणी फॉर्म</h2><p className="mt-2 text-sm text-forest/65">आजच नोंदणी करा आणि आपल्या व्यवसायाला यशस्वी प्रवास द्या.</p>
              <form onSubmit={onSubmit} className="mt-7 space-y-4" noValidate>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field id="cf-name" name="name" label="पूर्ण नाव *" error={errors.name} className={inputClass} />
                  <Field id="cf-mobile" name="mobile" label="मोबाईल नंबर *" type="tel" error={errors.mobile} className={inputClass} />
                  <Field id="cf-whatsapp" name="whatsapp" label="WhatsApp नंबर *" type="tel" error={errors.whatsapp} className={inputClass} />
                  <Field id="cf-email" name="email" label="ईमेल आयडी" type="email" error={errors.email} className={inputClass} />
                  <Field id="cf-city" name="city" label="गाव / शहर *" error={errors.city} className={inputClass} />
                  <Field id="cf-district" name="district" label="जिल्हा *" error={errors.district} className={inputClass} />
                  <SelectField id="cf-state" name="state" label="राज्य *" error={errors.state} options={["महाराष्ट्र", "गुजरात", "गोवा", "कर्नाटक", "मध्य प्रदेश", "इतर"]} />
                  <SelectField id="cf-area" name="area" label="उपलब्ध जागा / शेड *" error={errors.area} options={["1000 चौ. फुटांपेक्षा कमी", "1000 – 2000 चौ. फूट", "2000 – 5000 चौ. फूट", "5000 चौ. फुटांपेक्षा जास्त"]} />
                  <SelectField id="cf-capacity" name="capacity" label="प्रस्तावित पक्षी क्षमता *" error={errors.capacity} options={["100 – 500", "500 – 1000", "1000 – 2500", "2500 पेक्षा जास्त"]} />
                </div>
                <div><label className={labelClass} htmlFor="cf-message">या कॉन्ट्रॅक्टबद्दल आपल्याला काही विचारायचे आहे का?</label><textarea id="cf-message" name="message" rows={4} maxLength={1000} className={`${inputClass} mt-1.5 resize-none`} />{errors.message && <p className="mt-1 text-xs text-gold-deep">{errors.message}</p>}</div>
                <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-forest px-6 py-3.5 font-semibold text-cream transition hover:-translate-y-0.5 sm:w-auto">नोंदणी सबमिट करा <ArrowRight className="h-4 w-4" /></button>
                {sent && <p role="status" className="text-sm font-semibold text-forest">धन्यवाद! तुमची माहिती तपासणीसाठी नोंदवली आहे. कृपया थेट संपर्कासाठी WhatsApp वापरा.</p>}
              </form>
            </div>

            <aside className="relative overflow-hidden rounded-lg border border-forest/10 bg-cream p-7 sm:p-9">
              <h2 className="font-display text-3xl font-extrabold text-forest">आमच्याशी संपर्क साधा</h2><p className="mt-2 text-sm text-forest/65">अधिक माहितीसाठी आजच संपर्क करा.</p>
              <ul className="mt-7 space-y-5">
                <ContactItem icon={Phone} title="फोन" value="+91 92264 66497" href="tel:+919226466497" />
                <ContactItem icon={MessageCircle} title="WhatsApp" value="+91 92264 66497" href="https://wa.me/919226466497" />
                <ContactItem icon={Mail} title="ईमेल" value="franchise@dwitfarm.com" href="mailto:franchise@dwitfarm.com" />
                <ContactItem icon={MapPin} title="कार्यालयाचा पत्ता" value="Dwit Farm, At/Post: N. Po. Khed, Tal. Vikramgad, Dist. Palghar, Maharashtra – 401605" />
              </ul>
              <div className="mt-9 flex items-end justify-between border-t border-forest/10 pt-7"><p className="max-w-[190px] font-display text-xl font-bold text-forest">तुमची मेहनत — आमची जबाबदारी...</p><Bird className="h-20 w-20 text-gold-deep/70" /></div>
            </aside>
          </div>
        </section>
      </main>
      <SectionDivider />
      <SiteFooter />
    </>
  );
}

function Field({ id, name, label, type = "text", error, className }: { id: string; name: string; label: string; type?: string; error: string | undefined; className: string }) {
  return <div><label className={labelClass} htmlFor={id}>{label}</label><input id={id} name={name} type={type} maxLength={type === "email" ? 255 : 100} aria-invalid={Boolean(error)} className={`${className} mt-1.5`} />{error && <p className="mt-1 text-xs text-gold-deep">{error}</p>}</div>;
}

function SelectField({ id, name, label, error, options }: { id: string; name: string; label: string; error: string | undefined; options: string[] }) {
  return <div><label className={labelClass} htmlFor={id}>{label}</label><select id={id} name={name} defaultValue="" aria-invalid={Boolean(error)} className={`${inputClass} mt-1.5`}><option value="" disabled>निवडा</option>{options.map((option) => <option key={option}>{option}</option>)}</select>{error && <p className="mt-1 text-xs text-gold-deep">{error}</p>}</div>;
}

function ContactItem({ icon: Icon, title, value, href }: { icon: typeof Phone; title: string; value: string; href?: string }) {
  return <li className="flex items-start gap-4"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-forest text-gold"><Icon className="h-5 w-5" /></span><div><p className="font-semibold text-forest">{title}</p>{href ? <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="text-sm text-forest/70 hover:text-gold-deep">{value}</a> : <p className="text-sm leading-relaxed text-forest/70">{value}</p>}</div></li>;
}