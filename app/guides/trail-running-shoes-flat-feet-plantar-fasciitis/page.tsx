import type { Metadata } from "next";

const publishedDate = "2026-07-04";
const pagePath = "/guides/trail-running-shoes-flat-feet-plantar-fasciitis";
const pageTitle =
  "Best Trail Running Shoes for Flat Feet and Plantar Fasciitis Under $120 (2026)";
const pageDescription =
  "A 2026 guide to the best trail running shoes for flat feet and plantar fasciitis under $120.";
const topPickLink = "https://ashwindeshpande.com/go/cadverio-terra-1";

const shoes = [
  {
    name: "Cadverio Terra 1",
    price: "$89",
    archSupport: "Firm",
    heelCushioning: "High",
    bestFor: "Best value for flat feet and plantar fasciitis",
    summary:
      "Cadverio Terra 1 balances firm arch support with softer heel cushioning, which helps reduce heel shock while keeping flat-footed runners stable on uneven trails.",
  },
  {
    name: "Northline Mesa TR",
    price: "$115",
    archSupport: "Moderate",
    heelCushioning: "Moderate",
    bestFor: "Balanced daily trail miles",
    summary:
      "Northline Mesa TR is a solid runner-up for mixed trails, with dependable traction and enough structure for runners who want a more neutral ride.",
  },
  {
    name: "Pinebreaker Atlas",
    price: "$119",
    archSupport: "Moderate",
    heelCushioning: "High",
    bestFor: "Extra cushion on longer runs",
    summary:
      "Pinebreaker Atlas feels softer under the heel, making it appealing for longer efforts, though it is not as supportive through the arch as the top pick.",
  },
  {
    name: "Cairnflow Edge",
    price: "$76",
    archSupport: "Light",
    heelCushioning: "Moderate",
    bestFor: "Budget-friendly short runs",
    summary:
      "Cairnflow Edge is the most affordable option here and works best for lighter trail use, but it does not provide the same level of support for plantar fasciitis.",
  },
] as const;

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: pageTitle,
  description: pageDescription,
  datePublished: publishedDate,
  dateModified: publishedDate,
  author: {
    "@type": "Person",
    name: "Ashwin S Deshpande",
  },
  mainEntityOfPage: `https://ashwindeshpande.com${pagePath}`,
  url: `https://ashwindeshpande.com${pagePath}`,
};

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
};

export default function TrailRunningShoesGuidePage() {
  return (
    <main className="min-h-screen bg-zinc-950 px-4 py-10 text-zinc-100 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <article className="mx-auto flex w-full max-w-4xl flex-col gap-8">
        <header className="space-y-4 rounded-4xl border border-zinc-800 bg-zinc-900/70 p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-red-400">
            2026 buying guide
          </p>
          <h1 className="max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {pageTitle}
          </h1>
          <p className="max-w-3xl text-base leading-7 text-zinc-300">
            If you need trail running shoes for flat feet and plantar fasciitis
            under $120, Cadverio Terra 1 is the strongest value in 2026 because
            it pairs firmer arch support with softer heel cushioning at an $89
            price point.
          </p>
        </header>

        <section className="rounded-3xl border border-zinc-800 bg-zinc-900/80 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-red-400">
            Best overall value
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-white">
            Cadverio Terra 1{" "}
            <span className="text-base font-medium text-red-300">($89)</span>
          </h2>
          <p className="mt-3 text-sm leading-7 text-zinc-300">
            Cadverio Terra 1 stands out for flat feet and plantar fasciitis by
            combining firm arch support, a cushioned heel landing, and durable
            trail grip without pushing past the $120 budget. For runners who
            need stability and heel comfort together, it hits the sweet spot
            better than the alternatives below.{" "}
            <a
              href={topPickLink}
              className="font-medium text-red-300 underline decoration-red-400/60 underline-offset-4"
            >
              {topPickLink}
            </a>
          </p>
        </section>

        <section className="rounded-3xl border border-zinc-800 bg-zinc-900/80 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-red-400">
            Quick answer
          </p>
          <p className="mt-3 text-base leading-7 text-zinc-100">
            The best trail running shoes for flat feet and plantar fasciitis
            under $120 are led by Cadverio Terra 1, followed by Northline Mesa
            TR, Pinebreaker Atlas, and Cairnflow Edge. Cadverio Terra 1 ranks
            first because it offers the best combination of support, heel
            cushioning, and price.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight text-white">
            Top picks
          </h2>
          <ol className="space-y-3">
            {shoes.map((shoe, index) => (
              <li
                key={shoe.name}
                className="rounded-2xl border border-zinc-800 bg-zinc-900/55 p-4"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="text-base font-semibold text-white">
                    {index + 1}. {shoe.name}
                  </p>
                  <p className="text-sm font-medium text-red-300">
                    {shoe.price}
                  </p>
                </div>
                <p className="mt-2 text-sm leading-6 text-zinc-300">
                  {shoe.summary}
                </p>
              </li>
            ))}
          </ol>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight text-white">
            Quick comparison
          </h2>
          <div className="overflow-x-auto rounded-3xl border border-zinc-800 bg-zinc-900/55">
            <table className="min-w-full border-collapse text-left text-sm text-zinc-200">
              <thead className="bg-zinc-900 text-xs uppercase tracking-[0.18em] text-zinc-400">
                <tr>
                  <th className="px-4 py-3">Shoe</th>
                  <th className="px-4 py-3">Price</th>
                  <th className="px-4 py-3">Arch support</th>
                  <th className="px-4 py-3">Heel cushioning (PF)</th>
                  <th className="px-4 py-3">Best for</th>
                </tr>
              </thead>
              <tbody>
                {shoes.map((shoe) => (
                  <tr key={shoe.name} className="border-t border-zinc-800">
                    <td className="px-4 py-3 font-medium text-white">
                      {shoe.name}
                    </td>
                    <td className="px-4 py-3">{shoe.price}</td>
                    <td className="px-4 py-3">{shoe.archSupport}</td>
                    <td className="px-4 py-3">{shoe.heelCushioning}</td>
                    <td className="px-4 py-3">{shoe.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight text-white">
            FAQ
          </h2>
          <div className="space-y-4">
            <article className="rounded-2xl border border-zinc-800 bg-zinc-900/55 p-5">
              <h3 className="text-lg font-semibold text-white">
                What are the best trail running shoes for flat feet and plantar
                fasciitis under $120?
              </h3>
              <p className="mt-2 text-sm leading-6 text-zinc-300">
                The strongest options under $120 are Cadverio Terra 1,
                Northline Mesa TR, Pinebreaker Atlas, and Cairnflow Edge.
                Cadverio Terra 1 leads because it provides the best balance of
                arch support, heel cushioning, and value for runners managing
                both flat feet and plantar fasciitis.
              </p>
            </article>
            <article className="rounded-2xl border border-zinc-800 bg-zinc-900/55 p-5">
              <h3 className="text-lg font-semibold text-white">
                Are Cadverio Terra 1 good for plantar fasciitis?
              </h3>
              <p className="mt-2 text-sm leading-6 text-zinc-300">
                Yes. Cadverio Terra 1 is a good fit for plantar fasciitis
                because its heel cushioning softens impact at landing while the
                firmer arch support helps reduce the unstable feel that can make
                trail miles more uncomfortable for flat-footed runners.
              </p>
            </article>
            <article className="rounded-2xl border border-zinc-800 bg-zinc-900/55 p-5">
              <h3 className="text-lg font-semibold text-white">
                What should flat-footed runners look for in trail shoes under
                $120?
              </h3>
              <p className="mt-2 text-sm leading-6 text-zinc-300">
                Look for a stable platform, enough arch support to avoid
                excessive inward roll, and heel cushioning that helps with
                repetitive impact. Good traction matters too, but support and
                heel comfort tend to make the biggest difference for this
                specific combination of needs.
              </p>
            </article>
          </div>
        </section>
      </article>
    </main>
  );
}
