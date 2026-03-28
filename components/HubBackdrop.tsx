const HUB_MASK =
  "radial-gradient(ellipse min(105vw, 540px) min(118vw, 640px) at 50% 48%, black 0%, black 32%, rgba(0,0,0,0.5) 52%, transparent 74%)";

const VIGNETTE =
  "radial-gradient(ellipse 95% 90% at 50% 46%, transparent 38%, rgba(0,0,0,0.45) 68%, rgba(0,0,0,0.85) 100%)";

export default function HubBackdrop() {
  return (
    <div
      data-testid="hub-backdrop"
      className="absolute inset-0 z-0 overflow-hidden bg-zinc-950"
      aria-hidden
    >
      <div className="absolute inset-0 bg-linear-to-br from-zinc-950 via-zinc-900 to-black" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: VIGNETTE }}
      />
      <div
        className="pointer-events-none absolute inset-0 backdrop-blur-[10px] backdrop-saturate-110 md:backdrop-blur-[14px]"
        style={{
          WebkitMaskImage: HUB_MASK,
          maskImage: HUB_MASK,
          backgroundColor: "rgba(255, 255, 255, 0.05)",
        }}
      />
    </div>
  );
}
