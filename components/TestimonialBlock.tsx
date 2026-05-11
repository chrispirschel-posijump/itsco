interface TestimonialBlockProps {
  quote: string;
  name: string;
  title: string;
  company: string;
  variant?: "light" | "dark";
}

export default function TestimonialBlock({
  quote,
  name,
  title,
  company,
  variant = "light",
}: TestimonialBlockProps) {
  const isDark = variant === "dark";

  return (
    <section
      className={
        isDark
          ? "bg-[radial-gradient(ellipse_at_top,_#1a1a1a_0%,_#111111_70%)]"
          : "bg-white"
      }
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-28 lg:py-32">
        <div className="max-w-3xl mx-auto text-center">
          {isDark ? (
            <>
              {/* Red accent line */}
              <div className="w-8 h-[3px] bg-[#CA3C27] mx-auto mb-8" />

              <blockquote className="text-2xl md:text-3xl font-medium text-white leading-[1.5]">
                &ldquo;{quote}&rdquo;
              </blockquote>

              <div className="mt-8 text-sm text-white/50">
                <span className="font-semibold text-white/80">{name}</span>
                {" · "}
                {title}, {company}
              </div>
            </>
          ) : (
            <div className="border border-[#EBEBEB] rounded-2xl p-8 md:p-12">
              {/* Red accent line */}
              <div className="w-8 h-[3px] bg-[#CA3C27] mx-auto mb-8" />

              <blockquote className="text-xl text-[#111111] font-medium leading-relaxed">
                &ldquo;{quote}&rdquo;
              </blockquote>

              <div className="mt-6 text-sm text-[#888]">
                <span className="font-semibold text-[#111111]">{name}</span>
                {" · "}
                {title}, {company}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
