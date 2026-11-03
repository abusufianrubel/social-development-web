import Link from "next/link";

const causes = [
  {
    href: "#events",
    icon: "♧",
    iconClassName: "text-forest-700",
    cardClassName: "bg-forest-50 hover:bg-forest-100",
    title: "Plantation",
    description: "Grow a greener future",
  },
  {
    href: "#events",
    icon: "♡",
    iconClassName: "text-amber-600",
    cardClassName: "bg-amber-50 hover:bg-amber-100",
    title: "Donation",
    description: "Share what you can",
  },
  {
    href: "#events",
    icon: "⌂",
    iconClassName: "text-sky-700",
    cardClassName: "bg-sky-50 hover:bg-sky-100",
    title: "Community care",
    description: "Support your neighbors",
  },
  {
    href: "#events",
    icon: "✿",
    iconClassName: "text-rose-600",
    cardClassName: "bg-rose-50 hover:bg-rose-100",
    title: "Helping hands",
    description: "Be there for others",
  },
];

export default function CausesSection() {
  return (
    <section
      id="about"
      className="scroll-mt-24 border-y border-forest-900/5 bg-white py-14"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[.2em] text-forest-700">
            Many ways to make a difference
          </p>
          <h2 className="font-display mt-3 text-3xl font-bold text-forest-950">
            Find a cause close to your heart
          </h2>
          <p className="mt-3 text-sm leading-7 text-muted">
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
              <h3 className="mt-3 text-sm font-bold text-forest-950">
                {cause.title}
              </h3>
              <p className="mt-1 text-xs text-muted">{cause.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
