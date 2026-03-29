const competitions = [
  {
    name: "Amazon ML Challenge India",
    year: "2025",
    result: "92nd nationally",
    description: "Price prediction model.",
  },
  {
    name: "Flipkart GRiD 5.0",
    year: "2023",
    result: "Semi-finalist",
    description: "Top ~0.5% of 300K+ participants. Conversational outfit recommender.",
  },
  {
    name: "HackStreet",
    year: "IEEE JIIT",
    result: "Winner",
    description: "Hackathon.",
  },
  {
    name: "OSDHack’23",
    year: "JIIT",
    result: "Winner",
    description: "Hackathon.",
  },
  {
    name: "IIT Bombay Techfest",
    year: "",
    result: "Top 10",
    description: "Robotics competition.",
  },
  {
    name: "IIT Kanpur Techfest",
    year: "",
    result: "Top 10",
    description: "Robotics competition.",
  },
];

const ratings = [
  {
    platform: "LeetCode",
    title: "Knight",
    rating: "2036",
    percentile: "Top ~0.1% weekly",
  },
  {
    platform: "Codeforces",
    title: "Specialist",
    rating: "1549",
    percentile: "Top ~2% global",
  },
];

export default function Competitions() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="mb-3 font-medium text-white">
          Competitive Programming
        </h3>
        <div className="grid grid-cols-2 gap-3">
          {ratings.map((r) => (
            <div
              key={r.platform}
              className="rounded-xl border border-white/12 bg-white/[0.04] p-3 text-center shadow-lg shadow-black/20"
            >
              <p className="text-xs text-zinc-400">{r.platform}</p>
              <p className="font-mono text-xl font-bold text-white">
                {r.rating}
              </p>
              <p className="text-xs font-medium text-rose-400">{r.title}</p>
              <p className="text-[10px] text-zinc-400">{r.percentile}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-3 font-medium text-white">Competitions</h3>
        <div className="space-y-3">
          {competitions.map((comp) => (
            <div
              key={comp.name}
              className="flex items-start justify-between border-b border-white/10 pb-3 last:border-0"
            >
              <div>
                <p className="text-sm text-white">{comp.name}</p>
                <p className="text-xs text-zinc-300">{comp.description}</p>
              </div>
              <div className="ml-4 shrink-0 text-right">
                <p className="text-sm font-medium text-rose-400">{comp.result}</p>
                {comp.year && (
                  <p className="text-xs text-zinc-400">{comp.year}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
