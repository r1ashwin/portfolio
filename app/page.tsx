import HubBackdrop from "@/components/HubBackdrop";
import HubCluster from "@/components/HubCluster";
import SocialLinksRow from "@/components/SocialLinksRow";

export default function Home() {
  return (
    <div className="relative isolate min-h-screen bg-zinc-950">
      <HubBackdrop />

      <main className="relative z-1 mx-auto flex min-h-screen w-full max-w-[1400px] flex-col px-4 pb-6 pt-6 lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:px-8 lg:pb-10 lg:pt-8 xl:gap-16 xl:px-12">
        {/* Hub: first on mobile (above intro), right side on large screens */}
        <div className="order-1 flex min-h-[min(52vh,500px)] flex-1 items-center justify-center pb-1 pt-2 lg:order-2 lg:min-h-0 lg:flex-[1.15] lg:py-0">
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
              className="space-y-1.5 tracking-tight lg:space-y-2"
            >
              <span className="block text-base font-normal text-zinc-400 lg:text-lg">
                Well, hi there.
              </span>
              <span className="block text-xl font-semibold text-zinc-50 lg:text-2xl xl:text-[1.65rem]">
                I&apos;m Ashwin.
              </span>
            </h2>
            <p
              className="mt-4 text-sm leading-relaxed text-zinc-300 lg:mt-5 lg:text-base lg:leading-relaxed"
              data-testid="home-intro"
            >
              I love{" "}
              <span className="text-zinc-200">
                hardware and software that ships
              </span>
              , and most of what sits around them too: robots, research
              problems, competitions, side projects, anything that gets past
              slides and actually runs. If you like that sort of thing,
              I&apos;m glad you&apos;re here.
            </p>
          </div>

          <SocialLinksRow className="mt-5 border-t border-zinc-800/90 pt-5 lg:mt-6 lg:border-0 lg:pt-0" />
        </section>
      </main>
    </div>
  );
}
