export default function About() {
  return (
    <div className="space-y-4">
      <p>
        I build things across hardware, software, and AI. Currently an SDE Intern
        at{" "}
        <span className="font-medium text-zinc-100">Amazon</span> on the Prime
        Video team, finishing my B.Tech at JIIT Noida, and building{" "}
        <span className="font-medium text-zinc-100">Fluid</span> — a
        deterministic inference runtime for reliable AI.
      </p>
      <p>
        I have built a 28-motor electromechanical wall clock, FPV racing drones,
        war robots for national competitions, ML pipelines for cardiac
        profiling, and competed in everything from IIT Techfests to the Amazon
        ML Challenge.
      </p>
      <div className="border-t border-zinc-700 pt-4">
        <h3 className="mb-3 font-medium text-zinc-100">Quick stats</h3>
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div>
            <span className="text-zinc-500">Current</span>
            <p className="text-zinc-100">SDE Intern @ Amazon</p>
          </div>
          <div>
            <span className="text-zinc-500">Education</span>
            <p className="text-zinc-100">B.Tech ECE, JIIT &apos;26</p>
          </div>
          <div>
            <span className="text-zinc-500">LeetCode</span>
            <p className="text-zinc-100">Knight (2036)</p>
          </div>
          <div>
            <span className="text-zinc-500">Codeforces</span>
            <p className="text-zinc-100">Specialist (1552)</p>
          </div>
        </div>
      </div>
    </div>
  );
}
