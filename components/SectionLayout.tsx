import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface SectionLayoutProps {
  title: string;
  children: React.ReactNode;
}

export default function SectionLayout({ title, children }: SectionLayoutProps) {
  return (
    <main className="min-h-screen bg-zinc-950 px-4 py-8 md:px-8 md:py-12">
      <div className="mx-auto max-w-2xl">
        <div className="mb-8 flex items-start justify-between gap-4">
          <h1 className="text-2xl font-bold tracking-tight text-zinc-100 md:text-3xl">
            {title}
          </h1>
          <Link
            href="/"
            aria-label="Back to hub"
            data-testid="section-close"
            className="flex shrink-0 items-center gap-1.5 rounded-lg border border-zinc-700 px-3 py-2 text-sm text-zinc-400 transition-colors hover:border-zinc-500 hover:text-zinc-100"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden strokeWidth={2} />
            <span className="hidden sm:inline">Hub</span>
          </Link>
        </div>
        <div className="text-zinc-300">{children}</div>
      </div>
    </main>
  );
}
