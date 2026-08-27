import henFamily from "@/assets/hen-family.png";

/**
 * Full-bleed brand divider: a warm gold curve sweeping over a deep forest
 * green band with the gold hen-and-chicks silhouette resting on it.
 */
export default function SectionDivider() {
  return (
    <div className="relative w-full overflow-hidden bg-cream" aria-hidden="true">
      <div className="relative h-24 sm:h-28 lg:h-32">
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 1440 160"
          preserveAspectRatio="none"
        >
          {/* gold sweep */}
          <path
            d="M0,42 C260,-12 560,-6 800,26 C1030,56 1240,66 1440,34 L1440,160 L0,160 Z"
            className="fill-gold"
          />
          {/* forest band */}
          <path
            d="M0,58 C260,4 560,10 800,42 C1030,72 1240,82 1440,50 L1440,160 L0,160 Z"
            className="fill-forest"
          />
        </svg>

        <img
          src={henFamily}
          alt=""
          loading="lazy"
          width={1024}
          height={512}
          className="absolute bottom-0 left-1/2 h-[72%] w-auto -translate-x-1/2 sm:h-[78%]"
        />
      </div>
    </div>
  );
}
