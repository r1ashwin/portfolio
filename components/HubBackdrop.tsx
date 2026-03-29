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
      <div className="absolute inset-0 bg-linear-to-br from-zinc-900 via-zinc-950 to-[#060608]" />
      <div className="hub-clouds-wrap" aria-hidden>
        <div className="hub-cloud hub-cloud--a" />
        <div className="hub-cloud hub-cloud--b" />
        <div className="hub-cloud hub-cloud--c" />
      </div>
      <div
        className="pointer-events-none absolute inset-0 opacity-90"
        style={{
          background:
            "radial-gradient(ellipse 90% 60% at 20% 10%, rgba(244, 63, 94, 0.08), transparent 50%), radial-gradient(ellipse 70% 50% at 85% 30%, rgba(147, 197, 253, 0.06), transparent 45%), radial-gradient(ellipse 60% 40% at 50% 100%, rgba(167, 139, 250, 0.05), transparent 50%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: VIGNETTE }}
      />
      <div
        className="pointer-events-none absolute inset-0 backdrop-blur-[10px] backdrop-saturate-110 md:backdrop-blur-[14px] xl:backdrop-blur-lg"
        style={{
          WebkitMaskImage: HUB_MASK,
          maskImage: HUB_MASK,
          backgroundColor: "rgba(255, 255, 255, 0.05)",
        }}
      />
      {/* Subtle vertical rails on wide screens so empty side margins feel intentional */}
      <div
        className="pointer-events-none absolute inset-y-16 left-6 hidden w-px bg-linear-to-b from-transparent via-zinc-600/25 to-transparent xl:block 2xl:left-10"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-16 right-6 hidden w-px bg-linear-to-b from-transparent via-zinc-600/25 to-transparent xl:block 2xl:right-10"
        aria-hidden
      />
    </div>
  );
}
