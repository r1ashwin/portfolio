"use client";

import { useState } from "react";
import { ExternalLink, FolderGit2, Sparkles } from "lucide-react";
import { GITHUB_REPOS, githubRepoUrl } from "@/lib/github-repos";

const featured = [
  {
    title: "Local Deterministic AI Runtime (Fluid)",
    description:
      "Deterministic AI engine with replayable reasoning and a custom 1B QLoRA-trained Logic Core. Next.js SSR UI for runs, reasoning logs, and performance. Python, FastAPI, Docker, Redis, Next.js.",
    tags: ["Python", "FastAPI", "Next.js", "Docker", "Redis"],
    current: true,
  },
  {
    title: "Electromechanical Wall Clock",
    description:
      "28-flap electromechanical clock: ESP32/ATmega, custom PCBs, shift registers, interrupt-driven control. Built for INR 28k, sold for INR 40k; 11+ months continuous run.",
    tags: ["Firmware", "PCB", "C++"],
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
      "Autonomous leader-follower system designed for blood delivery.",
    tags: ["Drones", "Autonomy"],
  },
  {
    title: "Conversational Outfit Recommender",
    description:
      "Flipkart GRiD 5.0: chat-based recommender, Docker on GCP, national finals. React, Node, Express, MongoDB.",
    tags: ["React", "GCP", "MongoDB"],
  },
];

type TabId = "featured" | "github";

export default function Projects() {
  const [tab, setTab] = useState<TabId>("featured");

  return (
    <div className="space-y-8">
      <div
        role="tablist"
        aria-label="Choose project view"
        className="grid grid-cols-2 gap-3 sm:max-w-lg"
        data-testid="projects-tabs"
      >
        <button
          type="button"
          role="tab"
          id="tab-featured"
          aria-selected={tab === "featured"}
          aria-controls="panel-featured"
          tabIndex={tab === "featured" ? 0 : -1}
          onClick={() => setTab("featured")}
          className={`flex items-center justify-center gap-2 rounded-xl border px-4 py-3.5 text-sm font-semibold transition-all duration-200 ${
            tab === "featured"
              ? "border-rose-400/45 bg-gradient-to-br from-rose-500/20 to-white/[0.06] text-white shadow-lg shadow-rose-950/20"
              : "border-white/12 bg-white/[0.03] text-zinc-400 hover:border-white/20 hover:bg-white/[0.05] hover:text-zinc-200"
          }`}
        >
          <Sparkles
            className={`h-4 w-4 shrink-0 ${tab === "featured" ? "text-rose-300" : "text-zinc-500"}`}
            aria-hidden
            strokeWidth={2}
          />
          Featured work
        </button>
        <button
          type="button"
          role="tab"
          id="tab-github"
          aria-selected={tab === "github"}
          aria-controls="panel-github"
          tabIndex={tab === "github" ? 0 : -1}
          onClick={() => setTab("github")}
          className={`flex items-center justify-center gap-2 rounded-xl border px-4 py-3.5 text-sm font-semibold transition-all duration-200 ${
            tab === "github"
              ? "border-sky-400/40 bg-gradient-to-br from-sky-500/15 to-white/[0.06] text-white shadow-lg shadow-sky-950/20"
              : "border-white/12 bg-white/[0.03] text-zinc-400 hover:border-white/20 hover:bg-white/[0.05] hover:text-zinc-200"
          }`}
        >
          <FolderGit2
            className={`h-4 w-4 shrink-0 ${tab === "github" ? "text-sky-300" : "text-zinc-500"}`}
            aria-hidden
            strokeWidth={2}
          />
          GitHub
        </button>
      </div>

      {tab === "featured" ? (
        <section
          role="tabpanel"
          id="panel-featured"
          aria-labelledby="tab-featured"
        >
          <p className="mb-6 max-w-2xl text-sm leading-relaxed text-zinc-300">
            Hardware and systems I talk about most: ships, competitions, and
            products.
          </p>
          <div className="space-y-4">
            {featured.map((project) => (
              <article
                key={project.title}
                className="group relative overflow-hidden rounded-2xl border border-white/12 bg-gradient-to-br from-white/[0.07] to-white/[0.02] p-5 shadow-xl shadow-black/25 transition-all duration-200 hover:border-rose-400/30 hover:from-white/[0.09] hover:shadow-rose-950/20"
              >
                <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-rose-500/10 blur-3xl transition-opacity group-hover:opacity-100" />
                <div className="relative">
                  <div className="mb-2 flex flex-wrap items-center gap-2">
                    <h2 className="text-base font-semibold text-white">
                      {project.title}
                    </h2>
                    {project.current ? (
                      <span className="rounded-full border border-rose-400/35 bg-rose-500/15 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wide text-rose-200">
                        Active
                      </span>
                    ) : null}
                  </div>
                  <p className="mb-4 text-sm leading-relaxed text-zinc-200">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-zinc-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      {tab === "github" ? (
        <section
          role="tabpanel"
          id="panel-github"
          aria-labelledby="tab-github"
        >
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
      ) : null}
    </div>
  );
}
