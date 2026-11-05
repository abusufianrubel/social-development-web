import { CalendarPlus } from "lucide-react";
import { notFound } from "next/navigation";
import EventForm from "@/components/events/event-form";
import ProtectedRoute from "@/components/auth/protected-route";
import PageFrame from "@/components/shared/page-frame";
import PageHeading from "@/components/shared/page-heading";
import { sampleUpcomingEvents } from "@/lib/sample-events";

type CreateEventPageProps = { searchParams: Promise<{ edit?: string }> };

export const metadata = { title: "Create an event | TogetherWeGrow" };

export default async function CreateEventPage({ searchParams }: CreateEventPageProps) {
  const { edit } = await searchParams;
  const initialEvent = edit ? sampleUpcomingEvents.find((event) => event.id === edit) : undefined;
  if (edit && !initialEvent) notFound();

  return (
    <PageFrame>
      <section className="bg-cream py-12 dark:bg-background sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <ProtectedRoute>
            <PageHeading eyebrow="Bring people together" title={initialEvent ? "Update your event" : "Create an event"} description="Share a meaningful opportunity with your neighborhood. Clear details help volunteers know how they can make a difference." action={<span className="grid size-12 place-items-center rounded-2xl bg-forest-100 text-forest-800 dark:bg-forest-900 dark:text-forest-100"><CalendarPlus className="size-6" /></span>} />
            <EventForm initialEvent={initialEvent} />
            <p className="mt-4 text-center text-xs text-muted-foreground">You are signed in. Event saving will be connected to the Express event API.</p>
          </ProtectedRoute>
        </div>
      </section>
    </PageFrame>
  );
}
