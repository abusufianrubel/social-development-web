import Link from "next/link";

const impactHighlights = [
  {
    icon: "♧",
    title: "Find your people",
    description:
      "Connect with neighbors who care about the same causes.",
    cardClassName: "",
  },
  {
    icon: "↗",
    title: "Take action",
    description: "Turn your time and energy into positive change.",
    cardClassName: "mt-8",
  },
  {
    icon: "♡",
    title: "Build trust",
    description:
      "Create shared experiences that bring communities closer.",
    cardClassName: "-mt-8",
  },
  {
    icon: "✳",
    title: "Make it last",
    description:
      "Small consistent efforts can shape a better future.",
    cardClassName: "",
  },
];

export default function ImpactSection() {
  return (
    <section className="border-y border-border bg-forest-950 py-16 text-cream sm:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="text-xs font-bold uppercase tracking-[.2em] text-amber-300">
            Why TogetherWeGrow
          </p>
          <h2 className="font-display mt-4 max-w-xl text-3xl font-bold leading-tight sm:text-4xl">
            Change doesn&apos;t happen alone. It happens together.
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-7 text-cream/65 sm:text-base">
            A stronger community begins when people find each other, share
            ideas, and take action. We make it easier to discover opportunities
            and turn good intentions into meaningful moments.
          </p>
          <Link
            href="/register"
            className="mt-8 inline-flex rounded-xl bg-amber-400 px-5 py-3 text-sm font-bold text-forest-950 hover:bg-amber-300"
          >
            Become a volunteer&nbsp; →
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {impactHighlights.map((highlight) => (
            <div
              key={highlight.title}
              className={`rounded-3xl bg-cream/10 p-6 ring-1 ring-cream/10 ${highlight.cardClassName}`}
            >
              <span className="text-2xl text-amber-300" aria-hidden="true">
                {highlight.icon}
              </span>
              <h3 className="font-display mt-4 font-bold">{highlight.title}</h3>
              <p className="mt-2 text-sm leading-6 text-cream/60">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
