export default function NewsletterSection() {
  return (
    <section className="px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-forest-100 px-6 py-12 sm:px-12 sm:py-16">
        <div className="relative mx-auto max-w-2xl text-center">
          <span className="text-3xl text-forest-700" aria-hidden="true">
            ✉
          </span>
          <p className="mt-4 text-xs font-bold uppercase tracking-[.2em] text-forest-700">
            Stay connected
          </p>
          <h2 className="font-display mt-3 text-2xl font-bold text-forest-950 sm:text-3xl">
            Good things are happening. Be in the know.
          </h2>
          <p className="mt-3 text-sm leading-7 text-muted">
            Get inspired by community stories and discover new ways to lend a
            hand.
          </p>
          <form className="mx-auto mt-7 flex max-w-lg flex-col gap-2 rounded-2xl bg-white p-2 shadow-soft sm:flex-row">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              name="email"
              type="email"
              placeholder="Enter your email address"
              className="min-w-0 flex-1 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-forest-700/20"
            />
            <button
              type="button"
              className="rounded-xl bg-forest-700 px-6 py-3 text-sm font-bold text-white hover:bg-forest-800"
            >
              Stay inspired
            </button>
          </form>
          <p className="mt-3 text-[11px] text-muted">
            Newsletter preview only — subscription is not connected.
          </p>
        </div>
      </div>
    </section>
  );
}
