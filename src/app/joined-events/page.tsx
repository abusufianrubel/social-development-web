import Link from "next/link";
import { CalendarCheck2, Compass } from "lucide-react";
import EventCard from "@/components/events/event-card";
import ProtectedRoute from "@/components/auth/protected-route";
import PageFrame from "@/components/shared/page-frame";
import PageHeading from "@/components/shared/page-heading";
import { sampleUpcomingEvents } from "@/lib/sample-events";

export const metadata = { title: "Joined events | TogetherWeGrow" };

export default function JoinedEventsPage() {
  const joinedEvents = sampleUpcomingEvents.slice(1, 4);
  return (
    <PageFrame>
      <section className="bg-cream py-12 dark:bg-background sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ProtectedRoute>
            <PageHeading eyebrow="Your time matters" title="Joined events" description="Keep track of the community activities you plan to take part in and get ready to make an impact." action={<span className="grid size-12 place-items-center rounded-2xl bg-forest-100 text-forest-800 dark:bg-forest-900 dark:text-forest-100"><CalendarCheck2 className="size-6" /></span>} />
            {joinedEvents.length ? <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{joinedEvents.map((event) => <EventCard key={event.id} event={event} />)}</div> : <div className="rounded-3xl border border-dashed border-border bg-card px-6 py-16 text-center"><Compass className="mx-auto size-10 text-primary" /><h2 className="font-display mt-4 text-xl font-bold">Your next good deed is waiting</h2><p className="mx-auto mt-2 max-w-md text-sm leading-6 text-muted-foreground">You have not joined an event yet. Explore local opportunities and find one that speaks to you.</p><Link href="/upcoming-events" className="mt-6 inline-flex rounded-xl bg-forest-700 px-5 py-3 text-sm font-bold text-white hover:bg-forest-800">Explore events</Link></div>}
            <p className="mt-6 text-center text-xs text-muted-foreground">Preview events are shown here. Connect the joined-events API to display your actual registrations.</p>
          </ProtectedRoute>
        </div>
      </section>
    </PageFrame>
  );
}
