const experiences = [
  {
    company: "Amazon",
    role: "Software Development Engineer Intern",
    period: "Jan 2026 - Present",
    description:
      "Backend and cloud engineering on the Prime Video (MX Player) team.",
    current: true,
  },
  {
    company: "IIIT Hyderabad (iHub-Data)",
    role: "Research Intern (AI/ML)",
    period: "Jun 2025 - Oct 2025",
    description:
      "Multimodal time-series modeling using state-space models, transformers, CNNs, and RNNs. Built cardiac profiling models with ~93.3% accuracy.",
  },
  {
    company: "DynamicAmalgam Technologies",
    role: "Engineering Intern",
    period: "Apr 2024 - May 2025",
    description:
      "End-to-end systems: embedded firmware, custom PCBs, hardware control, Flutter apps, and web dashboards for consumer electronics.",
  },
  {
    company: "\u03BCCR Robotics Hub, JIIT",
    role: "Senior Advisor",
    period: "Sep 2022 - Present",
    description:
      "Led robotics, UAV, and AI teams for national competitions. Organized events, closed sponsorships, mentored juniors.",
    current: true,
  },
];

export default function Experience() {
  return (
    <div className="space-y-6">
      {experiences.map((exp) => (
        <div
          key={exp.company}
          className="relative border-l border-zinc-700 pl-6"
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
          <p className="mb-2 text-xs text-zinc-500">{exp.period}</p>
          <p className="text-sm text-zinc-400">{exp.description}</p>
        </div>
      ))}
    </div>
  );
}
