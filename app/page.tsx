import HubBackdrop from "@/components/HubBackdrop";
import HubCluster from "@/components/HubCluster";
import LatestProjectBanner from "@/components/LatestProjectBanner";
import SocialLinksRow from "@/components/SocialLinksRow";

export default function Home() {
  return (
    <div className="relative isolate min-h-screen bg-zinc-950">
      <HubBackdrop />

      <main className="relative z-1 mx-auto flex min-h-screen w-full max-w-[1400px] flex-col px-4 pb-6 pt-6 lg:flex-row lg:items-center lg:justify-center lg:gap-12 lg:px-8 lg:pb-10 lg:pt-8 xl:gap-16 xl:px-12">
        {/* Mobile: hub first. Desktop: right column, grouped toward centre. */}
        <div className="order-1 flex min-h-[min(52vh,500px)] w-full flex-1 items-center justify-center pb-2 pt-0 lg:order-2 lg:min-h-0 lg:w-auto lg:flex-none lg:py-0">
          <HubCluster />
        </div>

        {/* Mobile: intro → latest project → socials. Desktop: centred column. */}
        <section
          className="order-2 flex w-full max-w-xl flex-col gap-5 lg:order-1 lg:w-full lg:max-w-md lg:flex-none lg:items-center lg:gap-6 lg:text-center"
          aria-labelledby="home-intro-heading"
        >
          <div className="lg:mx-auto lg:w-full lg:max-w-md">
            <h2
              id="home-intro-heading"
              className="space-y-1.5 tracking-tight lg:space-y-2"
            >
              <span className="block text-base font-normal text-white lg:text-lg">
                Well, hi there.
              </span>
              <span className="block text-xl font-semibold text-white lg:text-2xl xl:text-[1.65rem]">
                I&apos;m Ashwin.
              </span>
            </h2>
            <p
              className="mt-4 text-sm leading-relaxed text-white lg:mt-5 lg:text-base lg:leading-relaxed"
              data-testid="home-intro"
            >
              I love hardware and software that ships, and most of what sits
              around them too: robots, research
              problems, competitions, side projects, anything that gets past
              slides and actually runs. If you like that sort of thing,
              I&apos;m glad you&apos;re here.
            </p>
          </div>

          <LatestProjectBanner />

          <SocialLinksRow className="mt-1 border-t border-zinc-800/90 pt-5 lg:mt-0 lg:w-full lg:border-0 lg:pt-0 [&_ul]:lg:justify-center" />
        </section>
      </main>
    </div>
  );
}
