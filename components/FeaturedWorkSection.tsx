import Image from "next/image";
import {
  FEATURED_SECTION_HEADING,
  getFeaturedItems,
  type FeaturedItem,
} from "@/lib/featured-work";

function MlGraphicBanner() {
  return (
    <div
      className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-indigo-950/95 via-zinc-900 to-violet-950/90"
      aria-hidden
    >
      <svg
        viewBox="0 0 320 100"
        className="h-[72%] w-[88%] max-h-[52px] text-indigo-300/90 sm:max-h-[58px]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="ml-edge" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgb(129 140 248)" stopOpacity="0.9" />
            <stop offset="100%" stopColor="rgb(167 139 250)" stopOpacity="0.55" />
          </linearGradient>
        </defs>
        {[18, 50, 82].map((y) => (
          <circle key={`in-${y}`} cx="36" cy={y} r="5" fill="rgb(196 181 253)" opacity="0.85" />
        ))}
        {[22, 50, 78].map((y) => (
          <circle key={`h-${y}`} cx="118" cy={y} r="5.5" fill="rgb(165 180 252)" opacity="0.9" />
        ))}
        {[22, 50, 78].map((y) => (
          <circle key={`h2-${y}`} cx="188" cy={y} r="5.5" fill="rgb(165 180 252)" opacity="0.75" />
        ))}
        <circle cx="268" cy="50" r="6" fill="url(#ml-edge)" />
        {[18, 50, 82].flatMap((y1) =>
          [22, 50, 78].map((y2) => (
            <line
              key={`e1-${y1}-${y2}`}
              x1="41"
              y1={y1}
              x2="112.5"
              y2={y2}
              stroke="rgb(129 140 248)"
              strokeWidth="0.75"
              opacity="0.35"
            />
          )),
        )}
        {[22, 50, 78].flatMap((y1) =>
          [22, 50, 78].map((y2) => (
            <line
              key={`e2-${y1}-${y2}`}
              x1="123.5"
              y1={y1}
              x2="182.5"
              y2={y2}
              stroke="rgb(129 140 248)"
              strokeWidth="0.65"
              opacity="0.28"
            />
          )),
        )}
        {[22, 50, 78].map((y) => (
          <line
            key={`e3-${y}`}
            x1="193.5"
            y1={y}
            x2="262"
            y2="50"
            stroke="rgb(167 139 250)"
            strokeWidth="0.85"
            opacity="0.4"
          />
        ))}
        <text
          x="160"
          y="93"
          textAnchor="middle"
          fill="rgb(196 181 253)"
          fillOpacity="0.55"
          fontFamily="system-ui, sans-serif"
          fontSize="7.5"
          fontWeight="600"
          letterSpacing="0.24em"
        >
          ML
        </text>
      </svg>
    </div>
  );
}

function kindStripId(item: FeaturedItem) {
  return item.kind === "Research paper"
    ? "featured-strip-research"
    : "featured-strip-projects";
}

function FeaturedCard({
  item,
  priorityImage,
}: {
  item: FeaturedItem;
  priorityImage: boolean;
}) {
  const ariaDetail = item.showTagline && item.tagline ? item.tagline : item.title;
  const stripId = kindStripId(item);

  return (
    <article
      className="overflow-hidden rounded-lg border border-zinc-700/50 bg-zinc-900/35 shadow-[0_8px_28px_rgba(0,0,0,0.28)] backdrop-blur-sm transition-all duration-300 has-[a:hover]:border-red-500 has-[a:hover]:shadow-[0_0_22px_rgba(239,68,68,0.35)] has-[a:focus-visible]:ring-2 has-[a:focus-visible]:ring-red-500/70 has-[a:focus-visible]:ring-offset-2 has-[a:focus-visible]:ring-offset-zinc-950"
    >
      {/* Outside the <a> so :visited / browser link styles never mute this strip */}
      <div
        id={stripId}
        className="border-b border-zinc-600/50 bg-zinc-900/50 px-2.5 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-white antialiased sm:px-3 sm:text-[11px] sm:tracking-[0.16em]"
        style={{ color: "#fafafa", fontWeight: 700 }}
      >
        {item.kind}
      </div>

      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group block w-full text-white outline-none visited:text-white"
        aria-label={`${item.kind}: ${item.title}. ${ariaDetail} (opens in a new tab)`}
      >
        <div className="relative aspect-[3.6/1] w-full overflow-hidden bg-zinc-800/50 sm:aspect-[3.9/1] lg:aspect-[2.35/1]">
          {item.visual === "ml-graphic" ? (
            <MlGraphicBanner />
          ) : (
            <>
              <Image
                src={item.imageSrc}
                alt={item.imageAlt}
                fill
                className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                sizes="(max-width: 1024px) min(92vw, 22rem), 320px"
                priority={priorityImage}
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950/40 via-transparent to-white/5"
                aria-hidden
              />
            </>
          )}
        </div>

        <div className="border-t border-zinc-700/40 px-2.5 py-2 transition-colors duration-300 group-hover:border-red-500/35 sm:px-3 sm:py-2.5">
          <div className="flex items-end justify-between gap-2">
            <div className="min-w-0 flex-1">
              <h3
                className={`text-[15px] font-bold leading-snug tracking-tight sm:text-[1.05rem] ${
                  item.kind === "Research paper" ? "truncate" : ""
                }`}
                title={item.kind === "Research paper" ? item.title : undefined}
              >
                {item.title}
              </h3>
              {item.showTagline && item.tagline ? (
                <p
                  className="mt-1 text-xs font-bold leading-snug sm:text-[13px]"
                  style={{ color: "#fafafa", fontWeight: 700 }}
                >
                  {item.tagline}
                </p>
              ) : null}
            </div>
            <span
              className="shrink-0 pb-px text-base font-light text-zinc-500 transition-[color,transform] duration-300 group-hover:translate-x-0.5 group-hover:text-red-400"
              aria-hidden
            >
              →
            </span>
          </div>
        </div>
      </a>
    </article>
  );
}

export default function FeaturedWorkSection() {
  const items = getFeaturedItems();

  return (
    <div className="mx-auto mb-1 w-full max-w-[min(92vw,22rem)] sm:max-w-md lg:mx-0 lg:mb-0 lg:w-full lg:max-w-xs lg:self-start">
      <h3 className="mb-3 px-0.5 text-center text-sm font-bold leading-snug tracking-normal text-white antialiased lg:text-left">
        {FEATURED_SECTION_HEADING}
      </h3>
      <div className="flex flex-col gap-3 sm:gap-3.5">
        {items.map((item, i) => (
          <FeaturedCard key={item.kind} item={item} priorityImage={i === 1} />
        ))}
      </div>
    </div>
  );
}
