import { Leaf } from "lucide-react";

const gateImage = "/images/dwit-farm-gate.jpg";

export default function AboutStory() {
  return (
    <section className="mx-auto mt-8 max-w-[1400px] px-4 sm:mt-12 sm:px-6 lg:px-8">
      <div className="grid items-center gap-8 rounded-[28px] border border-forest/10 bg-white/60 p-6 shadow-[0_24px_60px_-40px_rgba(20,40,20,0.4)] sm:p-10 lg:grid-cols-2 lg:gap-14 lg:p-14">
        {/* Left column */}
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <Leaf className="h-4 w-4 text-forest" />
            <p className="text-[13px] font-bold text-gold-deep">
              DWIT Farm बद्दल
            </p>
          </div>
          <div className="mt-2 flex items-center gap-2">
            <span className="h-px w-8 bg-gold-deep" />
            <Leaf className="h-3.5 w-3.5 text-gold-deep" />
          </div>

          <h2 className="mt-4 font-display text-[2.2rem] font-extrabold leading-[1.1] text-forest sm:text-[2.8rem]">
            DWIT Farm बद्दल
          </h2>
          <span className="mt-4 block h-[3px] w-16 rounded-full bg-gold-deep" />

          <div className="mt-6 max-w-xl space-y-4 text-[15px] leading-[1.9] text-forest/80 sm:text-base">
            <p>
              <strong className="font-bold text-forest">DWIT Farm</strong> ची सुरुवात शुद्ध
              गावरान कोंबडी पालनाची आवड आणि शेतकऱ्यांना मदत करण्याच्या उद्देशाने झाली. गेल्या काही
              वर्षांत गावरान कोंबडी पालनाचा प्रत्यक्ष अनुभव घेत आम्ही स्वतःचा फार्म आणि व्यवसाय उभा
              केला.
            </p>
            <p>
              आज <strong className="font-bold text-forest">DWIT Farm</strong> मध्ये गावरान पिल्ले,
              कोंबड्या, अंडी आणि गावरान चिकन उपलब्ध करून दिले जाते. तसेच गावरान कोंबडी पालन सुरू करू
              इच्छिणाऱ्या शेतकऱ्यांना <strong className="font-bold text-forest">प्रशिक्षण, योग्य मार्गदर्शन आणि प्रत्यक्ष अनुभवावर आधारित मदत</strong> दिली जाते.
            </p>
            <p>
              शुद्ध गावरान कोंबडीची चव आणि गुणवत्ता अधिकाधिक लोकांपर्यंत पोहोचवणे आणि शेतकऱ्यांना या
              व्यवसायातून चांगली संधी मिळवून देणे, हा <strong className="font-bold text-gold-deep">DWIT Farm चा मुख्य उद्देश</strong> आहे.
            </p>
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
