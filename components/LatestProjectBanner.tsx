import Image from "next/image";
import { getLatestProjectPromo } from "@/lib/latest-project";

const CALLOUT = "Check out my latest project!";

export default function LatestProjectBanner() {
  const { href, name, tagline, imageSrc } = getLatestProjectPromo();

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group mb-1 mx-auto block w-full max-w-[min(92vw,22rem)] outline-none sm:max-w-md lg:mb-0 lg:w-full lg:max-w-xs lg:self-center"
      aria-label={`${CALLOUT} ${name}: ${tagline} (opens in a new tab)`}
    >
      <article className="overflow-hidden rounded-lg border border-zinc-700/50 bg-zinc-900/35 shadow-[0_8px_28px_rgba(0,0,0,0.28)] backdrop-blur-sm transition-[border-color,box-shadow] duration-300 group-hover:border-zinc-600/70 group-hover:shadow-[0_12px_36px_rgba(0,0,0,0.38)] group-focus-visible:ring-2 group-focus-visible:ring-rose-500/50 group-focus-visible:ring-offset-2 group-focus-visible:ring-offset-zinc-950">
        <p className="px-3 py-2.5 text-center text-sm font-bold leading-snug tracking-normal text-white antialiased">
          {CALLOUT}
        </p>

        <div className="relative aspect-[3.6/1] w-full overflow-hidden bg-sky-200/20 sm:aspect-[3.9/1] lg:aspect-[2.35/1]">
          <Image
            src={imageSrc}
            alt="Bright tropical island coastline and turquoise water"
            fill
            className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.03]"
            sizes="(max-width: 1024px) min(92vw, 22rem), 320px"
            priority
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950/35 via-transparent to-white/10"
            aria-hidden
          />
        </div>

        <div className="border-t border-zinc-700/40 px-2.5 py-2 sm:px-3 sm:py-2.5">
          <div className="flex items-end justify-between gap-2">
            <div className="min-w-0 flex-1">
              <h3 className="text-base font-semibold tracking-tight text-white sm:text-[1.05rem]">
                {name}
              </h3>
              <p className="mt-0.5 text-xs leading-snug text-zinc-400 transition-colors duration-300 group-hover:text-zinc-300 sm:text-[13px] sm:leading-relaxed">
                {tagline}
              </p>
            </div>
            <span
              className="shrink-0 pb-px text-base font-light text-zinc-500 transition-[color,transform] duration-300 group-hover:translate-x-0.5 group-hover:text-rose-400/90"
              aria-hidden
            >
              →
            </span>
          </div>
        </div>
      </article>
    </a>
  );
}
