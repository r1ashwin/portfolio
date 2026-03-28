const projects = [
  {
    title: "Fluid",
    description:
      "Deterministic inference runtime for reliable AI. Forking vLLM to make AI outputs reproducible. Python, C++, CUDA.",
    tags: ["Startup", "AI Infra", "C++/CUDA"],
    current: true,
  },
  {
    title: "Electromechanical Wall Clock",
    description:
      "Silent clock displaying HH:MM using 28 synchronized stepper motors. Custom PCBs and firmware. Built for INR 28k, sold for INR 40k. Running for 11+ months.",
    tags: ["Hardware", "Firmware", "PCB"],
  },
  {
    title: "FPV Racing Drone",
    description: "Built from scratch with a custom flight controller.",
    tags: ["Hardware", "Drones"],
  },
  {
    title: "War Robots",
    description:
      "Combat robots for national competitions. Top 10 at IIT Bombay and IIT Kanpur Techfests.",
    tags: ["Robotics", "Competition"],
  },
  {
    title: "Leader-Follower Drone",
    description:
      "Autonomous leader-follower drone system designed for blood delivery.",
    tags: ["Drones", "Autonomy"],
  },
  {
    title: "Fashion Outfit Recommender",
    description:
      "Conversational AI for fashion recommendations. Presented at Flipkart GRID 5.0, ranked 198th nationally.",
    tags: ["AI/ML", "NLP"],
  },
];

export default function Projects() {
  return (
    <div className="space-y-4">
      {projects.map((project) => (
        <div
          key={project.title}
          className="rounded-lg border border-zinc-700/80 bg-zinc-900/40 p-4 shadow-lg shadow-black/20 transition-colors hover:border-zinc-600"
        >
          <div className="mb-1 flex flex-wrap items-center gap-2">
            <h3 className="font-medium text-zinc-100">{project.title}</h3>
            {project.current && (
              <span className="rounded-full border border-red-500/40 bg-red-500/10 px-2 py-0.5 text-[10px] text-red-400">
                active
              </span>
            )}
          </div>
          <p className="mb-3 text-sm text-zinc-400">{project.description}</p>
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded bg-zinc-800 px-2 py-0.5 text-[11px] text-zinc-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
