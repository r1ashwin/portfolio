import HubBackdrop from "@/components/HubBackdrop";
import HubCluster from "@/components/HubCluster";

const footerLinks = [
  { label: "Email", href: "mailto:r1ashwindeshpande@gmail.com" },
  { label: "GitHub", href: "https://github.com/r1ashwin" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/r1ashwin" },
] as const;

function QuickLinks({ className }: { className?: string }) {
  return (
    <nav
      className={className}
      aria-label="Quick links"
    >
      <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-zinc-400">
        {footerLinks.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              target={item.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={
                item.href.startsWith("mailto:")
                  ? undefined
                  : "noopener noreferrer"
              }
              className="transition-colors hover:text-white"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default function Home() {
  return (
    <div className="relative isolate min-h-screen bg-zinc-950">
      <HubBackdrop />

      <main className="relative z-1 mx-auto flex min-h-screen w-full max-w-[1400px] flex-col px-4 pb-6 pt-6 lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:px-8 lg:pb-10 lg:pt-8 xl:gap-16 xl:px-12">
        {/* Hub: first on mobile (above intro), right side on large screens */}
        <div className="order-1 flex min-h-[min(50vh,460px)] flex-1 items-center justify-center pb-1 pt-2 lg:order-2 lg:min-h-0 lg:flex-[1.15] lg:py-0">
          <HubCluster />
        </div>

        {/* Intro + links: below hub on mobile, left column on large screens */}
        <section
          className="order-2 -mt-3 flex max-w-xl flex-col gap-4 lg:order-1 lg:mt-0 lg:max-w-md lg:flex-[0.85] lg:gap-6"
          aria-labelledby="home-intro-heading"
        >
          <div>
            <h2
              id="home-intro-heading"
              className="text-lg font-semibold tracking-tight text-zinc-100 lg:text-2xl xl:text-[1.65rem]"
            >
              Hey, I&apos;m Ashwin.
            </h2>
            <p
              className="mt-2.5 text-sm leading-relaxed text-zinc-300 lg:mt-3 lg:text-base lg:leading-relaxed"
              data-testid="home-intro"
            >
              Use the hub to learn more about me—projects, experience,
              research, and the rest.{" "}
              <span className="font-medium text-zinc-100">
                Talk to me
              </span>{" "}
              opens my digital twin; explore the ring or reach out below.
            </p>
          </div>

          <QuickLinks className="hidden border-t border-zinc-800/90 pt-1 lg:block lg:border-0 lg:pt-0" />
        </section>

        <footer className="order-3 mt-4 w-full border-t border-zinc-800/90 pt-3 lg:hidden">
          <QuickLinks className="flex justify-center" />
        </footer>
      </main>
    </div>
  );
}
