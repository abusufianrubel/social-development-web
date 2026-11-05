import EventCard from "@/components/events/event-card";
import PageFrame from "@/components/shared/page-frame";
import PageHeading from "@/components/shared/page-heading";
import { sampleUpcomingEvents } from "@/lib/sample-events";

export const metadata = {
  title: "Upcoming Events | TogetherWeGrow",
  description: "Discover community service events and find your next way to help.",
};

export default function UpcomingEventsPage() {
  return (
    <PageFrame>
      <section className="bg-cream py-12 dark:bg-background sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <PageHeading eyebrow="Find your people" title="Upcoming events" description="Explore local initiatives, meet people who care, and turn a little of your time into meaningful community impact." />
          <div className="mb-7 flex flex-col gap-3 rounded-2xl border border-border bg-card p-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-muted-foreground">Browse opportunities from your community.</p>
            <div className="flex flex-wrap gap-2">
              {["All events", "Donation", "Plantation", "Cleanup"].map((filter, index) => (
                <span key={filter} className={index === 0 ? "rounded-full bg-forest-700 px-4 py-2 text-xs font-bold text-white" : "rounded-full border border-border px-4 py-2 text-xs font-semibold text-muted-foreground"}>{filter}</span>
              ))}
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {sampleUpcomingEvents.map((event) => <EventCard key={event.id} event={event} />)}
          </div>
          <p className="mt-8 text-center text-xs text-muted-foreground">Preview events are currently shown. Connect the events API to load live community listings.</p>
        </div>
      </section>
    </PageFrame>
  );
}
