import { ExternalLink } from "lucide-react";
import { GITHUB_REPOS, githubRepoUrl } from "@/lib/github-repos";

export default function GitHubProjects() {
  return (
    <section role="tabpanel" id="panel-github" aria-labelledby="tab-github">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <h2 className="text-lg font-semibold tracking-tight text-white">
          GitHub repositories
        </h2>
        <a
          href="https://github.com/r1ashwin?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-zinc-100 transition-colors hover:border-sky-400/40 hover:bg-sky-500/10 hover:text-white"
        >
          All on GitHub
          <ExternalLink className="h-3.5 w-3.5 opacity-80" aria-hidden />
        </a>
      </div>
      <p className="mb-6 max-w-2xl text-sm leading-relaxed text-zinc-300">
        Public repos under{" "}
        <span className="font-medium text-zinc-100">r1ashwin</span> — click a
        card to open it. Private work (e.g. Fluid) isn&apos;t listed here.
      </p>

      <ul className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {GITHUB_REPOS.map((repo) => (
          <li key={repo.name}>
            <a
              href={githubRepoUrl(repo.name)}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex h-full flex-col rounded-xl border bg-gradient-to-b p-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg ${
                repo.highlight
                  ? "border-rose-400/25 from-rose-500/[0.08] to-white/[0.03] hover:border-rose-400/45 hover:shadow-rose-950/25"
                  : "border-white/10 from-white/[0.06] to-white/[0.02] hover:border-white/20 hover:shadow-black/30"
              }`}
            >
              <div className="mb-2 flex items-start justify-between gap-2">
                <span className="font-mono text-sm font-semibold text-white">
                  {repo.name}
                </span>
                <ExternalLink
                  className="h-4 w-4 shrink-0 text-zinc-400 opacity-70"
                  aria-hidden
                />
              </div>
              <p className="mb-3 flex-1 text-sm leading-relaxed text-zinc-200">
                {repo.description}
              </p>
              {repo.language ? (
                <span className="mt-auto inline-flex w-fit rounded-md border border-sky-400/20 bg-sky-500/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-sky-200">
                  {repo.language}
                </span>
              ) : null}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
