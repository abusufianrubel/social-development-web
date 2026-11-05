import Link from "next/link";
import RecentEvents from "@/components/events/recent-events";

export default function UpcomingEventsSection() {
  return (
    <section id="events" className="scroll-mt-24 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.2em] text-primary">Get out there</p>
            <h2 className="font-display mt-3 text-3xl font-bold text-foreground sm:text-4xl">Upcoming events</h2>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">Good people. Meaningful moments. Find an event and be part of the change.</p>
          </div>
          <Link href="/upcoming-events" className="text-sm font-bold text-primary hover:text-primary/80">Explore all events&nbsp; →</Link>
        </div>
        <div className="mt-9"><RecentEvents /></div>
        <div className="mt-10 text-center"><Link href="/upcoming-events" className="inline-flex rounded-xl border border-border bg-card px-6 py-3 text-sm font-bold text-primary hover:bg-accent">View all events&nbsp; →</Link></div>
      </div>
    </section>
  );
}
