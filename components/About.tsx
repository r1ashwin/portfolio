export default function About() {
  return (
    <div className="space-y-4">
      <p className="leading-relaxed text-zinc-200">
        I build across hardware, embedded, and AI. I&apos;m a software engineering
        intern at{" "}
        <span className="font-medium text-white">Amazon</span> in Bengaluru on{" "}
        <span className="font-medium text-white">
          Prime Video (MX Player)
        </span>
        , finishing my B.Tech in ECE at JIIT Noida (class of 2026).
      </p>
      <p className="leading-relaxed text-zinc-200">
        I also work on{" "}
        <span className="font-medium text-white">Fluid</span> — a local
        deterministic AI runtime (FastAPI, Docker, Redis, Next.js) with replayable
        reasoning and a custom Logic Core.
      </p>
      <p className="leading-relaxed text-zinc-200">
        I&apos;ve shipped a 28-motor wall clock, FPV drones, war robots for IIT
        Techfests, multimodal ML at IIIT-H, and competed from Flipkart GRiD finals
        to the Amazon ML Challenge — plus hack wins at HackStreet and OSDHack.
      </p>
      <div className="border-t border-white/10 pt-4">
        <h3 className="mb-3 font-medium text-white">Quick stats</h3>
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div>
            <span className="text-zinc-400">Current</span>
            <p className="text-zinc-100">SWE Intern @ Amazon</p>
          </div>
          <div>
            <span className="text-zinc-400">Education</span>
            <p className="text-zinc-100">B.Tech ECE, JIIT &apos;26</p>
          </div>
          <div>
            <span className="text-zinc-400">LeetCode</span>
            <p className="text-zinc-100">Knight (2036)</p>
          </div>
          <div>
            <span className="text-zinc-400">Codeforces</span>
            <p className="text-zinc-100">Specialist (1549)</p>
          </div>
        </div>
      </div>
    </div>
  );
}
