import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface SectionLayoutProps {
  title: string;
  children: React.ReactNode;
  /** Wider column for dense pages like Projects */
  maxWidth?: "default" | "wide";
}

export default function SectionLayout({
  title,
  children,
  maxWidth = "default",
}: SectionLayoutProps) {
  const widthClass =
    maxWidth === "wide" ? "max-w-5xl" : "max-w-2xl";

  return (
    <main className="page-shell relative isolate min-h-screen px-4 py-8 md:px-8 md:py-12">
      <div className={`relative z-10 mx-auto ${widthClass}`}>
        <div className="mb-8 flex items-start justify-between gap-4">
          <h1 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
            {title}
          </h1>
          <Link
            href="/"
            aria-label="Back to hub"
            data-testid="section-close"
            className="flex shrink-0 items-center gap-1.5 rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm font-medium text-zinc-100 transition-colors hover:border-rose-400/35 hover:bg-rose-500/10 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden strokeWidth={2} />
            <span className="hidden sm:inline">Hub</span>
          </Link>
        </div>
        <div className="text-zinc-200">{children}</div>
      </div>
    </main>
  );
}
