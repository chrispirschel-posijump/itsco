import HeroImage from "@/components/HeroImage";
import CTAButton from "@/components/CTAButton";
import BackgroundOrbs from "@/components/BackgroundOrbs";

interface CTAConfig {
  label: string;
  href?: string;
  utmSuffix?: string;
  variant?: "primary" | "secondary";
}

interface HeroSectionProps {
  eyebrow?: string;
  heading: string;
  subheading?: string;
  primaryCTA?: CTAConfig;
  secondaryCTA?: CTAConfig;
  image?: string;
  imageAlt?: string;
  imagePosition?: "left" | "right" | "none";
  stat?: string;
  statLabel?: string;
  statColor?: string;
  background?: string;
  clip?: boolean;
  orbs?: "light" | "dark" | false;
}

export default function HeroSection({
  eyebrow,
  heading,
  subheading,
  primaryCTA,
  secondaryCTA,
  image,
  imageAlt,
  imagePosition = "right",
  stat,
  statLabel,
  statColor = "#CA3C27",
  background,
  clip = true,
  orbs = false,
}: HeroSectionProps) {
  const isVariantC = imagePosition === "none";

  return (
    <section
      className="relative overflow-hidden min-h-[90vh] flex items-center"
      style={{
        background: background ?? "radial-gradient(ellipse at top, #1a1a1a 0%, #111111 70%)",
        clipPath: clip ? "polygon(0 0, 100% 0, 100% 96%, 0 100%)" : "none",
      }}
    >
      {/* Drifting background orbs */}
      {orbs && <BackgroundOrbs variant={orbs} />}

      {/* Dot grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Full-bleed image panel — positioned relative to section, not content container */}
      {!isVariantC && image && imagePosition === "right" && (
        <div className="absolute right-0 top-0 bottom-0 w-[52%] hidden lg:block">
          <HeroImage
            src={image}
            alt={imageAlt ?? heading}
            fill
            priority
            className="object-cover object-center"
            sizes="52vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-itsco-dark via-itsco-dark/55 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-itsco-dark/60 via-transparent to-transparent" />
        </div>
      )}
      {!isVariantC && image && imagePosition === "left" && (
        <div className="absolute left-0 top-0 bottom-0 w-[52%] hidden lg:block">
          <HeroImage
            src={image}
            alt={imageAlt ?? heading}
            fill
            priority
            className="object-cover object-center"
            sizes="52vw"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-itsco-dark via-itsco-dark/55 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-itsco-dark/60 via-transparent to-transparent" />
        </div>
      )}

      <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-12 py-32 lg:py-40">

        {/* Variant C — stat instead of image */}
        {isVariantC && (
          <div className="max-w-3xl mx-auto text-center">
            {eyebrow && (
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-itsco-red mb-4">
                {eyebrow}
              </p>
            )}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] tracking-tight mb-6 max-w-[16ch] mx-auto">
              {heading}
            </h1>
            {subheading && (
              <p className="text-lg md:text-xl text-white/65 leading-relaxed max-w-[42ch] mx-auto mt-6">
                {subheading}
              </p>
            )}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              {primaryCTA && (
                <CTAButton
                  href={primaryCTA.href}
                  label={primaryCTA.label}
                  variant={primaryCTA.variant ?? "primary"}
                  utmSuffix={primaryCTA.utmSuffix}
                />
              )}
              {secondaryCTA && (
                <CTAButton
                  href={secondaryCTA.href}
                  label={secondaryCTA.label}
                  variant={secondaryCTA.variant ?? "secondary"}
                  utmSuffix={secondaryCTA.utmSuffix}
                />
              )}
            </div>
            {/* Stat box */}
            {stat && (
              <div className="mt-12 inline-block border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm px-10 py-8">
                <p className="text-5xl md:text-6xl font-extrabold leading-none tracking-tight" style={{ color: statColor }}>
                  {stat}
                </p>
                {statLabel && (
                  <p className="text-sm font-medium text-white/55 uppercase tracking-[0.1em] mt-2">
                    {statLabel}
                  </p>
                )}
              </div>
            )}
          </div>
        )}

        {/* Variant A (image right) & Variant B (image left) — text only, image is full-bleed above */}
        {!isVariantC && (
          <div className={`relative ${
            image && imagePosition === "right" ? "lg:max-w-[50%]" :
            image && imagePosition === "left" ? "lg:max-w-[50%] lg:ml-auto" :
            ""
          }`}>
            {eyebrow && (
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-itsco-red mb-4">
                {eyebrow}
              </p>
            )}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] tracking-tight max-w-[16ch]">
              {heading}
            </h1>
            {subheading && (
              <p className="text-lg md:text-xl text-white/65 leading-relaxed max-w-[42ch] mt-6">
                {subheading}
              </p>
            )}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              {primaryCTA && (
                <CTAButton
                  href={primaryCTA.href}
                  label={primaryCTA.label}
                  variant={primaryCTA.variant ?? "primary"}
                  utmSuffix={primaryCTA.utmSuffix}
                />
              )}
              {secondaryCTA && (
                <CTAButton
                  href={secondaryCTA.href}
                  label={secondaryCTA.label}
                  variant={secondaryCTA.variant ?? "secondary"}
                  utmSuffix={secondaryCTA.utmSuffix}
                />
              )}
            </div>

            {/* Mobile image — stacked below text on small screens */}
            {image && (
              <div className="mt-10 relative rounded-2xl overflow-hidden aspect-[4/3] shadow-[0_32px_80px_rgba(0,0,0,0.6)] lg:hidden">
                <HeroImage
                  src={image}
                  alt={imageAlt ?? heading}
                  fill
                  priority
                  className="object-cover"
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
