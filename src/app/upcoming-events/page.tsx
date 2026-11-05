import PageFrame from "@/components/shared/page-frame";
import PageHeading from "@/components/shared/page-heading";
import EventList from "@/components/events/event-list";

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
          <div className="mb-7 rounded-2xl border border-border bg-card p-4">
            <p className="text-sm text-muted-foreground">Browse real opportunities created by your community.</p>
          </div>
          <EventList />
        </div>
      </section>
    </PageFrame>
  );
}
