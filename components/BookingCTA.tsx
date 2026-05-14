import Image from "next/image";
import CTAButton from "@/components/CTAButton";

interface BookingCTAProps {
  utmSuffix: string;
  image?: string;
  imageAlt?: string;
  backgroundImage?: string;
}

export default function BookingCTA({ utmSuffix, image, imageAlt, backgroundImage }: BookingCTAProps) {
  return (
    <section
      className="relative bg-[radial-gradient(ellipse_at_top,_#1a1a1a_0%,_#111111_70%)] overflow-hidden"
      style={{
        ['--color-itsco-cta' as string]: '#CA3C27',
        ['--color-itsco-cta-hover' as string]: '#B4311E',
      }}
    >
      {backgroundImage && (
        <>
          <Image
            src={backgroundImage}
            alt=""
            fill
            className="object-cover object-[center_45%]"
            sizes="100vw"
          />
          {/* Dark overlay — keeps text readable */}
          <div className="absolute inset-0 bg-[#111111]/75" />
          {/* Subtle red tint from bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#CA3C27]/10 via-transparent to-transparent" />
        </>
      )}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-28 md:py-36">

        {image ? (
          /* Split layout when image is provided */
          <div className="flex flex-col lg:flex-row lg:items-center gap-16">
            <div className="lg:flex-1 max-w-2xl">
              <div className="w-12 h-[2px] bg-[#CA3C27] mb-8" />
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#CA3C27] mb-4">
                Free 30-Minute Consultation
              </p>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-[1.1] tracking-tight mb-4">
                Book your free 30-minute consultation with ITSco
              </h2>
              <p className="text-lg text-white/60 leading-relaxed mt-4 max-w-lg">
                Connect with trusted IT experts to scope challenges, identify risks, and drive better business outcomes.
              </p>
              <div className="mt-10">
                <CTAButton
                  utmSuffix={utmSuffix}
                  className="px-8 py-4 rounded-xl text-base hover:shadow-[0_0_40px_rgba(202,60,39,0.3)] transition-[background-color,box-shadow] duration-200"
                />
              </div>
            </div>
            <div className="lg:flex-1 relative rounded-2xl overflow-hidden aspect-[4/3] shadow-[0_24px_60px_rgba(0,0,0,0.5)]">
              <Image
                src={image}
                alt={imageAlt ?? "ITSco consultation"}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
          </div>
        ) : (
          /* Centered layout (default) */
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-12 h-[2px] bg-[#CA3C27] mx-auto mb-8" />
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#CA3C27] mb-4">
              Free 30-Minute Consultation
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-[1.1] tracking-tight">
              Book your free 30-minute consultation with ITSco
            </h2>
            <p className="text-lg text-white/60 leading-relaxed mt-4 max-w-lg mx-auto">
              Connect with trusted IT experts to scope challenges, identify risks, and drive better business outcomes.
            </p>
            <div className="mt-10 flex justify-center">
              <CTAButton
                utmSuffix={utmSuffix}
                className="px-8 py-4 rounded-xl text-base hover:shadow-[0_0_40px_rgba(202,60,39,0.3)]"
              />
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
