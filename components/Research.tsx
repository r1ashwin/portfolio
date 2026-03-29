type Paper = {
  title: string;
  subtitle?: string;
  description: string;
  accuracy: string;
  status: string;
};

const papers: Paper[] = [
  {
    title: "Machine learning analysis of copper ion concentration in water",
    subtitle: "MDPI Sensors (published)",
    description:
      "SVM-based RGB pipeline for colorimetric imaging; scalable ML analysis of copper ions in water.",
    accuracy: "~96.8%",
    status: "Published",
  },
  {
    title: "Multimodal cardiac profiling",
    subtitle: "IIIT Hyderabad",
    description:
      "ECG + PCG models with multimodal time-series pipelines (CNN, RNN, state-space models).",
    accuracy: "~93.3%",
    status: "Under submission",
  },
];

export default function Research() {
  return (
    <div className="space-y-4">
      {papers.map((paper) => (
        <div
          key={paper.title}
          className="rounded-xl border border-white/12 bg-white/[0.04] p-4 shadow-lg shadow-black/20"
        >
          <h3 className="mb-1 font-medium text-white">{paper.title}</h3>
          {paper.subtitle ? (
            <p className="mb-2 text-xs text-zinc-400">{paper.subtitle}</p>
          ) : null}
          <p className="mb-3 text-sm text-zinc-300">{paper.description}</p>
          <div className="flex items-center gap-3 text-sm">
            <span className="font-mono font-medium text-rose-400">
              {paper.accuracy}
            </span>
            <span className="text-zinc-500">|</span>
            <span className="text-zinc-300">{paper.status}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
