const henFamily = "/images/hen-family.png";

export default function SectionDivider() {
  return (
    <div aria-hidden className="relative w-full overflow-hidden bg-cream leading-none">
      <svg
        viewBox="0 0 1440 160"
        preserveAspectRatio="none"
        className="block h-[90px] w-full sm:h-[130px] lg:h-[160px]"
      >
        <path
          d="M0,58 C300,10 640,4 900,34 C1130,60 1300,72 1440,52 L1440,160 L0,160 Z"
          fill="var(--color-gold)"
        />
        <path
          d="M0,74 C300,26 640,20 900,50 C1130,76 1300,88 1440,68 L1440,160 L0,160 Z"
          fill="var(--color-forest)"
        />
      </svg>
      <img
        src={henFamily}
        alt=""
        className="pointer-events-none absolute bottom-1 left-1/2 h-[62px] -translate-x-1/2 sm:h-[86px] lg:h-[104px]"
      />
    </div>
  );
}
