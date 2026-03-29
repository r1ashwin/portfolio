const experiences: {
  company: string;
  role: string;
  period: string;
  location?: string;
  bullets: string[];
  current?: boolean;
}[] = [
  {
    company: "Amazon",
    role: "Software Engineering Intern",
    period: "Jan 2026 – Present",
    location: "Bengaluru",
    current: true,
    bullets: [
      "Prime Video (MX Player): independently drove migration of MX Player Catalog Vending Service from DUB to ZAZ AWS regions — completed a 6-month org goal in ~3 months and cut infra cost ~30%.",
      "Built automation for service and data migration for reliable, repeatable production rollouts.",
      "Developed and deployed a no-code portal for PCA (Pre-Computed Audience) groups so non-engineers can configure ad targeting.",
    ],
  },
  {
    company: "IIIT Hyderabad (iHub-Data)",
    role: "Research Intern (Backend & AI/ML)",
    period: "Jun 2025 – Oct 2025",
    location: "Hyderabad",
    bullets: [
      "Distributed multimodal ML pipelines (CNN, RNN, state-space models) for synchronized ECG–PCG analysis; ~40% inference latency reduction.",
      "Scalable PyTorch training workflows with optimized data loaders and modular evaluation APIs.",
      "Cardiac profiling models ~93.3% accuracy; related paper under submission.",
    ],
  },
  {
    company: "Dynamic Amalgam Technologies Inc.",
    role: "Software Engineering Intern",
    period: "Apr 2024 – Apr 2025",
    location: "New York City (remote)",
    bullets: [
      "C++ firmware for 28-flap electromechanical clock (ESP32/ATmega, custom PCBs, shift registers); interrupt-driven motion control.",
      "Power-gating logic ~35% lower draw; cloud telemetry via REST/MQTT with real-time device state.",
    ],
  },
  {
    company: "\u03BCCR Robotics Hub, JIIT",
    role: "Senior Advisor",
    period: "Sep 2022 – Present",
    current: true,
    bullets: [
      "Led robotics, UAV, and AI teams for national competitions; mentored juniors.",
      "Organized pitch events, ideathons, overnight builds; sponsorships — closed four sponsors in a week via in-person outreach.",
    ],
  },
];

export default function Experience() {
  return (
    <div className="space-y-6">
      {experiences.map((exp) => (
        <div
          key={`${exp.company}-${exp.period}`}
          className="relative border-l border-white/15 pl-6"
        >
          <div
            className="absolute top-1.5 left-0 h-2 w-2 -translate-x-[5px] rounded-full"
            style={{ backgroundColor: exp.current ? "#ef4444" : "#71717a" }}
          />
          <div className="mb-1 flex flex-wrap items-center gap-2">
            <h3 className="font-medium text-zinc-100">{exp.company}</h3>
            {exp.current && (
              <span className="rounded-full border border-red-500/40 bg-red-500/10 px-2 py-0.5 text-[10px] text-red-400">
                current
              </span>
            )}
          </div>
          <p className="text-sm text-zinc-300">{exp.role}</p>
          <p className="mb-2 text-xs text-zinc-400">
            {exp.period}
            {exp.location ? ` · ${exp.location}` : ""}
          </p>
          <ul className="list-disc space-y-1.5 pl-4 text-sm text-zinc-300">
            {exp.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
