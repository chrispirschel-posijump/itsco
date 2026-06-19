export interface NumberedManifestoItem {
  /** Optional override for the numeral. Defaults to auto-numbered "01", "02", etc. */
  number?: string;
  /** Optional small uppercase label above the title (e.g., "Entry Tier"). */
  eyebrow?: string;
  title: string;
  description: string;
  /** Optional smaller line below description (e.g., "Best for: ..."). */
  meta?: string;
}

interface NumberedManifestoProps {
  items: NumberedManifestoItem[];
}

/**
 * NumberedManifesto — vertical numbered list with massive numerals.
 * Use for sequential or principle-based content where each item earns its space.
 * Stacked typography pattern, no card chrome.
 */
export default function NumberedManifesto({ items }: NumberedManifestoProps) {
  return (
    <div className="divide-y divide-[#EBEBEB]">
      {items.map((item, i) => (
        <div
          key={item.title}
          className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 py-12 md:py-16 first:pt-0 last:pb-0"
        >
          {/* Numeral */}
          <div className="md:col-span-3 lg:col-span-2">
            <span className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-[#999] leading-none tracking-tight tabular-nums block">
              {item.number ?? `0${i + 1}`}
            </span>
          </div>

          {/* Content */}
          <div className="md:col-span-9 lg:col-span-10">
            {item.eyebrow && (
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-itsco-red mb-3">
                {item.eyebrow}
              </p>
            )}
            <h3 className="text-2xl md:text-3xl font-semibold text-itsco-dark leading-snug mb-4">
              {item.title}
            </h3>
            <p className="text-base md:text-lg text-itsco-body leading-relaxed max-w-3xl">
              {item.description}
            </p>
            {item.meta && (
              <p className="text-sm text-[#555] mt-4 max-w-3xl">{item.meta}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
