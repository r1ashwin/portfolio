"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FolderGit2, Sparkles } from "lucide-react";
import {
  PROJECTS_FEATURED_PATH,
  PROJECTS_GITHUB_PATH,
} from "@/lib/project-routes";

export default function ProjectsTabs() {
  const pathname = usePathname();
  const featuredActive =
    pathname === PROJECTS_FEATURED_PATH ||
    pathname.startsWith(`${PROJECTS_FEATURED_PATH}/`);
  const githubActive = pathname === PROJECTS_GITHUB_PATH;

  return (
    <div
      role="tablist"
      aria-label="Choose project view"
      className="mb-8 grid grid-cols-2 gap-3 sm:max-w-lg"
      data-testid="projects-tabs"
    >
      <Link
        href={PROJECTS_FEATURED_PATH}
        role="tab"
        id="tab-featured"
        aria-selected={featuredActive}
        aria-controls="panel-featured"
        tabIndex={featuredActive ? 0 : -1}
        className={`flex items-center justify-center gap-2 rounded-xl border px-4 py-3.5 text-sm font-semibold transition-all duration-200 ${
          featuredActive
            ? "border-rose-400/45 bg-gradient-to-br from-rose-500/20 to-white/[0.06] text-white shadow-lg shadow-rose-950/20"
            : "border-white/12 bg-white/[0.03] text-zinc-400 hover:border-white/20 hover:bg-white/[0.05] hover:text-zinc-200"
        }`}
      >
        <Sparkles
          className={`h-4 w-4 shrink-0 ${featuredActive ? "text-rose-300" : "text-zinc-500"}`}
          aria-hidden
          strokeWidth={2}
        />
        Featured work
      </Link>
      <Link
        href={PROJECTS_GITHUB_PATH}
        role="tab"
        id="tab-github"
        aria-selected={githubActive}
        aria-controls="panel-github"
        tabIndex={githubActive ? 0 : -1}
        className={`flex items-center justify-center gap-2 rounded-xl border px-4 py-3.5 text-sm font-semibold transition-all duration-200 ${
          githubActive
            ? "border-sky-400/40 bg-gradient-to-br from-sky-500/15 to-white/[0.06] text-white shadow-lg shadow-sky-950/20"
            : "border-white/12 bg-white/[0.03] text-zinc-400 hover:border-white/20 hover:bg-white/[0.05] hover:text-zinc-200"
        }`}
      >
        <FolderGit2
          className={`h-4 w-4 shrink-0 ${githubActive ? "text-sky-300" : "text-zinc-500"}`}
          aria-hidden
          strokeWidth={2}
        />
        GitHub
      </Link>
    </div>
  );
}
