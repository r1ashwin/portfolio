const papers = [
  {
    title: "Multimodal Cardiac Profiling",
    institution: "IIIT Hyderabad",
    description:
      "ECG + PCG models for cardiac profiling using multimodal time-series data.",
    accuracy: "~93.3%",
    status: "Under submission",
  },
  {
    title: "Copper Ion Detection in Water",
    institution: "",
    description:
      "ML pipelines for detecting copper ions in water using colorimetric imaging.",
    accuracy: "~96.8%",
    status: "Under submission",
  },
];

export default function Research() {
  return (
    <div className="space-y-4">
      {papers.map((paper) => (
        <div
          key={paper.title}
          className="rounded-lg border border-zinc-700/80 bg-zinc-900/40 p-4 shadow-lg shadow-black/20"
        >
          <h3 className="mb-1 font-medium text-zinc-100">{paper.title}</h3>
          {paper.institution && (
            <p className="mb-2 text-xs text-zinc-500">{paper.institution}</p>
          )}
          <p className="mb-3 text-sm text-zinc-400">{paper.description}</p>
          <div className="flex items-center gap-3 text-sm">
            <span className="font-mono font-medium text-red-400">
              {paper.accuracy}
            </span>
            <span className="text-zinc-600">|</span>
            <span className="text-zinc-400">{paper.status}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
