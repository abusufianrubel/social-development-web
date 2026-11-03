import Link from "next/link";

const causes = [
  {
    href: "#events",
    icon: "♧",
    iconClassName: "text-forest-700 dark:text-forest-100",
    cardClassName:
      "bg-forest-50 hover:bg-forest-100 dark:bg-forest-900/40 dark:hover:bg-forest-800/60",
    title: "Plantation",
    description: "Grow a greener future",
  },
  {
    href: "#events",
    icon: "♡",
    iconClassName: "text-amber-600 dark:text-amber-300",
    cardClassName:
      "bg-amber-50 hover:bg-amber-100 dark:bg-amber-400/10 dark:hover:bg-amber-400/20",
    title: "Donation",
    description: "Share what you can",
  },
  {
    href: "#events",
    icon: "⌂",
    iconClassName: "text-sky-700 dark:text-sky-300",
    cardClassName:
      "bg-sky-50 hover:bg-sky-100 dark:bg-sky-500/10 dark:hover:bg-sky-500/20",
    title: "Community care",
    description: "Support your neighbors",
  },
  {
    href: "#events",
    icon: "✿",
    iconClassName: "text-rose-600 dark:text-rose-300",
    cardClassName:
      "bg-rose-50 hover:bg-rose-100 dark:bg-rose-500/10 dark:hover:bg-rose-500/20",
    title: "Helping hands",
    description: "Be there for others",
  },
];

export default function CausesSection() {
  return (
    <section
      id="about"
      className="scroll-mt-24 border-y border-border bg-card py-14"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[.2em] text-primary">
            Many ways to make a difference
          </p>
          <h2 className="font-display mt-3 text-3xl font-bold text-foreground">
            Find a cause close to your heart
          </h2>
          <p className="mt-3 text-sm leading-7 text-muted-foreground">
            Every community has needs. Every person has something meaningful to
            give.
          </p>
        </div>
        <div className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {causes.map((cause) => (
            <Link
              key={cause.title}
              href={cause.href}
              className={`rounded-2xl p-5 text-center transition hover:-translate-y-1 ${cause.cardClassName}`}
            >
              <span
                className={`text-3xl ${cause.iconClassName}`}
                aria-hidden="true"
              >
                {cause.icon}
              </span>
              <h3 className="mt-3 text-sm font-bold text-foreground">
                {cause.title}
              </h3>
              <p className="mt-1 text-xs text-muted-foreground">
                {cause.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
