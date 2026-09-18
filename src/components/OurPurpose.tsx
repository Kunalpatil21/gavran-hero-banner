import { CheckCircle2, Eye, Handshake, Leaf, Target } from "lucide-react";

const PURPOSES = [
  {
    icon: Target,
    title: "आमचे ध्येय",
    introduction:
      "शुद्ध गावरान कुक्कुटपालनाला प्रोत्साहन देणे आणि शेतकरी व ग्राहकांना त्याचा खरा फायदा मिळवून देणे.",
    body: "DWIT Farm च्या माध्यमातून दर्जेदार गावरान पिल्ले, कोंबड्या, अंडी आणि मांस उपलब्ध करून देणे, शेतकऱ्यांना गावरान कुक्कुटपालन व्यवसायासाठी आवश्यक मार्गदर्शन व सहकार्य देणे आणि अधिकाधिक लोकांपर्यंत शुद्ध गावरान कोंबडीची नैसर्गिक चव आणि गुणवत्ता पोहोचवणे हा आमचा मुख्य उद्देश आहे.",
  },
  {
    icon: Eye,
    title: "आमची दृष्टी",
    introduction:
      "महाराष्ट्रात शुद्ध गावरान कुक्कुटपालनासाठी एक विश्वासार्ह आणि सर्वसमावेशक ब्रँड म्हणून DWIT Farm ची ओळख निर्माण करणे.",
    body: "शेतकऱ्यांना गावरान कुक्कुटपालनातून चांगला व्यवसाय उभारण्याची संधी मिळावी आणि ग्राहकांना खऱ्या गावरान कोंबडीची शुद्धता, चव आणि गुणवत्ता अनुभवता यावी, यासाठी सातत्याने काम करणे.",
  },
];

const VALUES = [
  {
    title: "शुद्धता आणि गुणवत्ता",
    body: "गावरान कुक्कुटपालनाच्या नैसर्गिक गुणवत्तेला प्राधान्य",
  },
  {
    title: "विश्वास आणि पारदर्शकता",
    body: "शेतकरी आणि ग्राहकांशी विश्वासू व पारदर्शक व्यवहार",
  },
  {
    title: "शेतकऱ्यांचा विकास",
    body: "योग्य मार्गदर्शन, प्रशिक्षण आणि व्यवसायासाठी आवश्यक सहकार्य",
  },
  {
    title: "दर्जेदार उत्पादने",
    body: "पिल्ले, कोंबड्या, अंडी आणि मांसामध्ये गुणवत्तेवर भर",
  },
  {
    title: "गावरान संस्कृतीचा प्रसार",
    body: "शुद्ध गावरान कोंबडीची चव, गुणवत्ता आणि महत्त्व अधिकाधिक लोकांपर्यंत पोहोचवणे",
  },
];

export default function OurPurpose() {
  return (
    <section className="mx-auto mt-10 max-w-[1400px] px-4 sm:mt-14 sm:px-6 lg:px-8">
      <h2 className="font-display text-[1.9rem] font-extrabold leading-tight text-forest sm:text-[2.2rem]">
        आमचा उद्देश
      </h2>
      <div className="mt-2 flex items-center gap-2">
        <span className="h-[3px] w-9 rounded-full bg-gold-deep" />
        <Leaf className="h-4 w-4 text-forest" />
      </article>

      <div className="mt-7 grid items-start gap-5 lg:grid-cols-2">
        {PURPOSES.map(({ icon: Icon, title, introduction, body }, i) => (
          <article
            key={title}
            className="rounded-[20px] border border-forest/10 bg-white/70 p-6 shadow-[0_20px_50px_-40px_rgba(20,40,20,0.8)] transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-[0_26px_60px_-34px_rgba(20,40,20,0.6)] sm:p-8"
          >
            <span
              className={`grid h-14 w-14 place-items-center rounded-full ${
                i === 1 ? "bg-gold/20 text-gold-deep" : "bg-forest/10 text-forest"
              }`}
            >
              <Icon className="h-6 w-6" strokeWidth={1.7} />
            </span>
            <h3 className="mt-5 font-display text-2xl font-extrabold text-forest">
              {title}
            </h3>
            <p className="mt-4 text-[15px] font-bold leading-[1.85] text-forest">
              {introduction}
            </p>
            <p className="mt-3 text-[15px] leading-[1.85] text-forest/80">{body}</p>
          </article>
        ))}
      </div>

      <article className="mt-5 rounded-[20px] border border-gold/30 bg-forest p-6 shadow-[0_24px_55px_-38px_rgba(20,40,20,0.9)] sm:p-8">
        <div className="flex items-center gap-4">
          <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-cream/10 text-gold">
            <Handshake className="h-6 w-6" strokeWidth={1.7} />
          </span>
          <h3 className="font-display text-2xl font-extrabold text-cream">
            आमची मूलभूत मूल्ये
          </h3>
        </div>
        <ul className="mt-6 grid gap-4 md:grid-cols-2">
          {VALUES.map(({ title, body }, index) => (
            <li
              key={title}
              className={`flex items-start gap-3 rounded-lg bg-cream/8 px-4 py-4 ${
                index === VALUES.length - 1 ? "md:col-span-2" : ""
              }`}
            >
              <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-gold" strokeWidth={2} />
              <p className="text-[15px] leading-[1.75] text-cream/85">
                <strong className="font-bold text-gold">{title}</strong>
                <span className="text-gold"> – </span>
                {body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
