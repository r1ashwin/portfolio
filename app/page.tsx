import HubBackdrop from "@/components/HubBackdrop";
import HubCluster from "@/components/HubCluster";

export default function Home() {
  return (
    <div className="relative isolate min-h-screen bg-zinc-950">
      <HubBackdrop />

      <main className="relative z-1 flex min-h-screen flex-col items-center justify-center gap-5 px-3 pb-8">
        <HubCluster />

        <p
          className="max-w-full rounded-full border border-zinc-600/80 bg-zinc-900/70 px-5 py-2.5 text-center font-medium whitespace-nowrap text-zinc-200 shadow-lg shadow-black/30 backdrop-blur-md sm:px-8 sm:py-3"
          style={{ fontSize: "clamp(0.8125rem, 2.8vw, 1rem)" }}
        >
          Browse the hub—or reach out.
        </p>
      </main>
    </div>
  );
}
