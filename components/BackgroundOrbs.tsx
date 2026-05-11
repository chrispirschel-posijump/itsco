interface BackgroundOrbsProps {
  variant?: "light" | "dark";
}

// Soft drifting radial blobs that sit behind section content
export default function BackgroundOrbs({ variant = "light" }: BackgroundOrbsProps) {
  const isLight = variant === "light";

  // Light variant: warm peach/red blooms barely visible on white
  // Dark variant: red/rust blooms slightly more visible against dark backgrounds
  const orb1 = isLight
    ? "radial-gradient(closest-side, rgba(202,60,39,0.08), transparent)"
    : "radial-gradient(closest-side, rgba(202,60,39,0.18), transparent)";
  const orb2 = isLight
    ? "radial-gradient(closest-side, rgba(202,60,39,0.05), transparent)"
    : "radial-gradient(closest-side, rgba(180,49,30,0.14), transparent)";
  const orb3 = isLight
    ? "radial-gradient(closest-side, rgba(202,60,39,0.06), transparent)"
    : "radial-gradient(closest-side, rgba(202,60,39,0.10), transparent)";

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className="absolute top-[10%] left-[8%] w-[420px] h-[420px] animate-drift-1"
        style={{ background: orb1, filter: "blur(40px)" }}
      />
      <div
        className="absolute bottom-[15%] right-[10%] w-[520px] h-[520px] animate-drift-2"
        style={{ background: orb2, filter: "blur(60px)" }}
      />
      <div
        className="absolute top-[40%] right-[35%] w-[320px] h-[320px] animate-drift-3"
        style={{ background: orb3, filter: "blur(50px)" }}
      />
    </div>
  );
}
