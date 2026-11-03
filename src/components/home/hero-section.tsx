import Image from "next/image";
import Link from "next/link";

const heroVolunteers = [
  {
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces",
    alt: "Volunteer",
  },
  {
    src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces",
    alt: "Volunteer",
  },
  {
    src: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&h=100&fit=crop&crop=faces",
    alt: "Volunteer",
  },
];

export default function HeroSection() {
  return (
    <section id="home" className="relative scroll-mt-24 overflow-hidden">
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-forest-100 blur-3xl dark:bg-forest-800/40" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-2 lg:px-8 lg:py-24">
        <div className="relative z-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-4 py-2 text-xs font-bold uppercase tracking-[.16em] text-primary">
            <span
              className="h-2 w-2 rounded-full bg-primary"
              aria-hidden="true"
            />
            Community starts with you
          </span>
          <h1 className="font-display mt-6 text-4xl font-extrabold leading-[1.12] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Small actions.
            <br />
            <span className="text-primary">Big impact.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-muted-foreground sm:text-lg">
            Bring people together to make our communities stronger, kinder, and
            greener. Discover local events and find a simple way to make a
            difference.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#events"
              className="rounded-xl bg-primary px-6 py-3.5 text-center text-sm font-bold text-primary-foreground shadow-soft hover:bg-primary/90"
            >
              Explore events&nbsp; →
            </Link>
            <Link
              href="/create-event"
              className="rounded-xl border border-border bg-card px-6 py-3.5 text-center text-sm font-bold text-foreground hover:bg-accent"
            >
              ＋ Create an event
            </Link>
          </div>
          <div className="mt-10 flex items-center gap-4 border-t border-border pt-7">
            <div className="flex -space-x-3">
              {heroVolunteers.map((volunteer) => (
                <Image
                  key={volunteer.src}
                  src={volunteer.src}
                  alt={volunteer.alt}
                  width={100}
                  height={100}
                  className="h-10 w-10 rounded-full border-2 border-background object-cover"
                />
              ))}
            </div>
            <div>
              <p className="text-sm font-bold text-foreground">
                Good things happen together
              </p>
              <p className="mt-0.5 text-xs text-muted-foreground">
                Find people who care about the same things.
              </p>
            </div>
          </div>
        </div>

        <div className="relative mx-auto grid w-full max-w-2xl grid-cols-[1fr_.72fr] items-end gap-4">
          <div
            className="absolute -right-4 -top-5 h-28 w-28 rounded-full border-[18px] border-amber-300/60"
            aria-hidden="true"
          />
          <Image
            src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=900&h=1100&fit=crop"
            alt="Volunteers working together on a community project"
            width={900}
            height={1100}
            priority
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="relative h-[390px] w-full rounded-[2rem] rounded-br-[5rem] object-cover shadow-soft sm:h-[510px]"
          />
          <div className="relative space-y-4 pb-8">
            <Image
              src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=600&h=650&fit=crop"
              alt="Volunteers helping their local community"
              width={600}
              height={650}
              sizes="(min-width: 1024px) 30vw, 60vw"
              className="h-48 w-full rounded-[1.7rem] rounded-tl-[4rem] object-cover shadow-soft sm:h-64"
            />
            <div className="rounded-2xl bg-card p-5 shadow-soft">
              <span
                className="grid h-10 w-10 place-items-center rounded-xl bg-amber-100 text-xl text-amber-700 dark:bg-amber-400/10 dark:text-amber-300"
                aria-hidden="true"
              >
                ♡
              </span>
              <p className="font-display mt-3 font-bold text-foreground">
                Give a little.
              </p>
              <p className="text-sm text-muted-foreground">Change a lot.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
