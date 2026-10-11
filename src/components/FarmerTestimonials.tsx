import { Link } from "@tanstack/react-router";
import { Leaf } from "lucide-react";

const farmer1 = "/images/farmer-1.jpg";
const farmer2 = "/images/farmer-2.jpg";
const farmer3 = "/images/dwit-vinod-jadhav.png";

const TESTIMONIALS = [
  {
    photo: farmer1,
    quote:
      "DWIT Farm चे प्रशिक्षण घेतल्यानंतर गावरान कोंबडी पालनाबद्दलची माझी समज खूप वाढली. प्रत्यक्ष फार्मवर शिकायला मिळाल्यामुळे अनेक गोष्टी सहज समजल्या.",
    name: "रमेश पाटील",
    role: "प्रशिक्षणार्थी, महाराष्ट्र",
  },
  {
    photo: farmer2,
    quote:
      "गावरान कोंबडी पालनाची योग्य पद्धत, संगोपन आणि खाद्य व्यवस्थापन याबद्दल खूप चांगले मार्गदर्शन मिळाले. प्रत्यक्ष अनुभवातून शिकण्याचा वेगळाच फायदा झाला.",
    name: "संदीप मोरे",
    role: "प्रशिक्षणार्थी, महाराष्ट्र",
  },
  {
    photo: farmer3,
    quote:
      "DWIT Farm कडून मिळालेली माहिती आणि मार्गदर्शन खूप उपयोगी ठरले. गावरान कुक्कुटपालनाबद्दलचा माझा आत्मविश्वास वाढला आणि पुढे काय करायचे याची योग्य दिशा मिळाली.",
    name: "विनोद जाधव",
    role: "कुक्कुटपालन व्यवसायिक, महाराष्ट्र",
  },
];

export default function FarmerTestimonials() {
  return (
    <section className="mx-auto mt-10 max-w-[1400px] px-4 sm:mt-14 sm:px-6 lg:px-8">
      <h2 className="font-display text-[1.9rem] font-extrabold leading-tight tracking-tight text-forest sm:text-[2.2rem]">
        लोकांचा DWIT Farm सोबतचा अनुभव
      </h2>
      <span className="mt-2 block h-[3px] w-16 rounded-full bg-gold-deep" />

      <div className="mt-7 grid gap-5 md:grid-cols-3">
        {TESTIMONIALS.map(({ photo, quote, name, role }) => (
          <figure
            key={name}
            className="flex items-start gap-4 rounded-[20px] border border-forest/10 bg-white/70 p-5 shadow-[0_20px_50px_-40px_rgba(20,40,20,0.8)] transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 sm:p-6"
          >
            <img
              src={photo}
              alt={`${name}, ${role}`}
              loading="lazy"
              width={512}
              height={512}
              className="h-24 w-24 shrink-0 rounded-full border-2 border-gold/40 object-cover sm:h-28 sm:w-28"
            />
            <div className="min-w-0">
              <blockquote className="text-[14.5px] leading-[1.75] text-forest/80">
                &ldquo;{quote}&rdquo;
              </blockquote>
              <figcaption className="mt-4">
                <p className="text-[14.5px] font-bold text-forest">– {name}</p>
                <p className="text-[13px] text-forest/65">{role}</p>
              </figcaption>
            </div>
          </figure>
        ))}
      </div>

      {/* CTA band */}
      <div className="mt-6 flex flex-col items-start gap-6 rounded-[22px] bg-forest px-6 py-8 shadow-[0_28px_60px_-38px_rgba(20,40,20,0.9)] sm:px-9 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-5">
          <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-cream/10 text-gold">
            <Leaf className="h-7 w-7" strokeWidth={1.7} />
          </span>
          <div className="min-w-0">
            <p className="font-display text-xl font-extrabold text-cream sm:text-2xl">
              Ready to Grow Your Farming Business?
            </p>
            <p className="mt-1.5 text-[14px] text-cream/75">
              Learn practical Gavran poultry farming directly at DWIT Farm.
            </p>
          </div>
        </div>
        <Link
          to="/training"
          className="inline-flex shrink-0 items-center rounded-md bg-gradient-to-r from-gold-deep to-gold px-7 py-3.5 text-sm font-semibold text-ink shadow-[0_16px_40px_-18px_rgba(0,0,0,0.95)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_50px_-16px_var(--color-gold)]"
        >
          Join a Training Program
        </Link>
      </div>
    </section>
  );
}
