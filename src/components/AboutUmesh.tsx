import { Leaf, Quote } from "lucide-react";

import umeshAsset from "@/assets/umesh-patil-about.png.asset.json";

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
          <h2 className="font-display text-[1.9rem] font-extrabold leading-tight text-forest sm:text-[2.3rem]">
            उमेश पाटील यांच्याबद्दल
          </h2>
          <div className="mt-3 flex items-center gap-2">
            <span className="h-[3px] w-10 rounded-full bg-gold-deep" />
            <Leaf className="h-4 w-4 text-forest" />
          </div>

          <p className="mt-5 font-display text-lg font-extrabold leading-snug text-gold-deep sm:text-xl">
            उमेश पाटील – संस्थापक, DWIT Farm
          </p>

          <p className="mt-4 max-w-3xl text-[15px] leading-[1.85] text-forest/85">
            उमेश पाटील हे <strong className="font-bold text-forest">DWIT Farm चे संस्थापक</strong> असून,
            शुद्ध गावरान कुक्कुटपालन क्षेत्रातील अनुभवी शेतकरी आणि उद्योजक आहेत.
            गेल्या <strong className="font-bold text-forest">७+ वर्षांपासून</strong> त्यांनी गावरान कोंबडी
            पालनाचा प्रत्यक्ष अनुभव घेत स्वतःचा फार्म आणि व्यवसाय यशस्वीपणे उभा केला आहे.
          </p>

          <p className="mt-4 max-w-3xl text-[15px] leading-[1.85] text-forest/85">
            गावरान कोंबड्यांचे संगोपन, योग्य व्यवस्थापन, खाद्य नियोजन, आरोग्य
            व्यवस्थापन आणि बाजारपेठेचा अभ्यास यामधून त्यांनी प्रत्यक्ष अनुभव आणि
            व्यवसायाचे व्यावहारिक ज्ञान मिळवले. स्वतःचा व्यवसाय उभा करून त्यात यश
            मिळवल्यानंतर, हा अनुभव इतर शेतकऱ्यांपर्यंत पोहोचवण्याचा त्यांनी पुढाकार घेतला.
          </p>

          <p className="mt-4 max-w-3xl text-[15px] leading-[1.85] text-forest/85">
            आज <strong className="font-bold text-forest">DWIT Farm</strong> च्या माध्यमातून ते
            शेतकऱ्यांना गावरान कुक्कुटपालन सुरू करण्यापासून ते फार्मचे योग्य व्यवस्थापन
            आणि व्यवसाय वाढवण्यापर्यंत व्यावहारिक मार्गदर्शन व प्रशिक्षण देत आहेत.
          </p>

          <div className="mt-6 flex gap-3 border-l-4 border-gold-deep bg-forest/5 px-4 py-4 sm:px-5">
            <Quote className="mt-0.5 h-5 w-5 shrink-0 text-gold-deep" aria-hidden="true" />
            <blockquote className="font-display text-[15px] font-bold leading-[1.75] text-forest sm:text-base">
              “स्वतः अनुभवातून शिकलेले ज्ञान इतर शेतकऱ्यांना देऊन त्यांनाही यशस्वी
              कुक्कुटपालन व्यवसाय उभा करण्यास मदत करणे, हेच DWIT Farm चे ध्येय आहे.”
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
