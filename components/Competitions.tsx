const competitions = [
  {
    name: "Amazon ML Challenge India",
    year: "2025",
    result: "Ranked 92nd nationally",
    description: "Price prediction model.",
  },
  {
    name: "Flipkart GRID 5.0",
    year: "2023",
    result: "198th nationally",
    description: "Conversational fashion outfit recommender. Semi-finalist.",
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
    percentile: "Top 1-3%",
  },
  {
    platform: "Codeforces",
    title: "Specialist",
    rating: "1552",
    percentile: "Top 1-3%",
  },
];

export default function Competitions() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="mb-3 font-medium text-zinc-100">
          Competitive Programming
        </h3>
        <div className="grid grid-cols-2 gap-3">
          {ratings.map((r) => (
            <div
              key={r.platform}
              className="rounded-lg border border-zinc-700/80 bg-zinc-900/40 p-3 text-center shadow-lg shadow-black/20"
            >
              <p className="text-xs text-zinc-500">{r.platform}</p>
              <p className="font-mono text-xl font-bold text-zinc-100">
                {r.rating}
              </p>
              <p className="text-xs font-medium text-red-400">{r.title}</p>
              <p className="text-[10px] text-zinc-500">{r.percentile}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-3 font-medium text-zinc-100">Competitions</h3>
        <div className="space-y-3">
          {competitions.map((comp) => (
            <div
              key={comp.name}
              className="flex items-start justify-between border-b border-zinc-800 pb-3 last:border-0"
            >
              <div>
                <p className="text-sm text-zinc-100">{comp.name}</p>
                <p className="text-xs text-zinc-500">{comp.description}</p>
              </div>
              <div className="ml-4 shrink-0 text-right">
                <p className="text-sm font-medium text-red-400">{comp.result}</p>
                {comp.year && (
                  <p className="text-xs text-zinc-500">{comp.year}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
