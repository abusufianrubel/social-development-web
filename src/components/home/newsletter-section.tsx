export default function NewsletterSection() {
  return (
    <section className="px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-secondary px-6 py-12 sm:px-12 sm:py-16 dark:bg-card">
        <div className="relative mx-auto max-w-2xl text-center">
          <span className="text-3xl text-primary" aria-hidden="true">
            ✉
          </span>
          <p className="mt-4 text-xs font-bold uppercase tracking-[.2em] text-primary">
            Stay connected
          </p>
          <h2 className="font-display mt-3 text-2xl font-bold text-foreground sm:text-3xl">
            Good things are happening. Be in the know.
          </h2>
          <p className="mt-3 text-sm leading-7 text-muted-foreground">
            Get inspired by community stories and discover new ways to lend a
            hand.
          </p>
          <form className="mx-auto mt-7 flex max-w-lg flex-col gap-2 rounded-2xl bg-background p-2 shadow-soft sm:flex-row">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              name="email"
              type="email"
              placeholder="Enter your email address"
              className="min-w-0 flex-1 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring/40"
            />
            <button
              type="button"
              className="rounded-xl bg-primary px-6 py-3 text-sm font-bold text-primary-foreground hover:bg-primary/90"
            >
              Stay inspired
            </button>
          </form>
          <p className="mt-3 text-[11px] text-muted-foreground">
            Newsletter preview only — subscription is not connected.
          </p>
        </div>
      </div>
    </section>
  );
}
