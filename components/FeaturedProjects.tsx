import Link from "next/link";
import {
  WALL_CLOCK_PATH,
  WALL_CLOCK_TITLE,
} from "@/lib/project-routes";

const featured = [
  {
    title: "Local Deterministic AI Runtime (Fluid)",
    description:
      "Deterministic AI engine with replayable reasoning and a custom 1B QLoRA-trained Logic Core. Next.js SSR UI for runs, reasoning logs, and performance. Python, FastAPI, Docker, Redis, Next.js.",
    tags: ["Python", "FastAPI", "Next.js", "Docker", "Redis"],
    current: true,
  },
  {
    title: WALL_CLOCK_TITLE,
    description:
      "28-flap electromechanical clock: ESP32/ATmega, custom PCBs, shift registers, interrupt-driven control. Built for INR 28k, sold for INR 40k; 11+ months continuous run.",
    tags: ["Firmware", "PCB", "C++"],
    href: WALL_CLOCK_PATH,
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

export default function FeaturedProjects() {
  return (
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
        {featured.map((project) => {
          const cardClassName =
            "group relative block w-full overflow-hidden rounded-2xl border border-white/12 bg-gradient-to-br from-white/[0.07] to-white/[0.02] p-5 text-left shadow-xl shadow-black/25 transition-all duration-200 hover:border-rose-400/30 hover:from-white/[0.09] hover:shadow-rose-950/20";

          const body = (
            <>
              <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-rose-500/10 blur-3xl transition-opacity group-hover:opacity-100" />
              <div className="relative">
                <div className="mb-2 flex flex-wrap items-center gap-2">
                  <h2 className="text-base font-semibold text-white">
                    {project.title}
                  </h2>
                  {"current" in project && project.current ? (
                    <span className="rounded-full border border-rose-400/35 bg-rose-500/15 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wide text-rose-200">
                      Active
                    </span>
                  ) : null}
                  {"href" in project && project.href ? (
                    <span className="rounded-full border border-white/15 bg-white/5 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wide text-zinc-300">
                      Photos &amp; video
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
            </>
          );

          if ("href" in project && project.href) {
            return (
              <Link
                key={project.title}
                href={project.href}
                className={`${cardClassName} cursor-pointer`}
                data-testid="wall-clock-project"
              >
                {body}
              </Link>
            );
          }

          return (
            <article key={project.title} className={cardClassName}>
              {body}
            </article>
          );
        })}
      </div>
    </section>
  );
}
