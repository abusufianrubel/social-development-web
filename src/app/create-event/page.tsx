import { CalendarPlus } from "lucide-react";
import { Suspense } from "react";
import ProtectedRoute from "@/components/auth/protected-route";
import PageFrame from "@/components/shared/page-frame";
import PageHeading from "@/components/shared/page-heading";
import CreateEventForm from "@/components/events/create-event-form";

export const metadata = { title: "Create an event | TogetherWeGrow" };

export default function CreateEventPage() {
  return (
    <PageFrame>
      <section className="bg-cream py-12 dark:bg-background sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <ProtectedRoute>
            <PageHeading eyebrow="Bring people together" title="Create or update an event" description="Share a meaningful opportunity with your neighborhood." action={<span className="grid size-12 place-items-center rounded-2xl bg-forest-100 text-forest-800 dark:bg-forest-900 dark:text-forest-100"><CalendarPlus className="size-6" /></span>} />
            <Suspense fallback={<div className="h-96 animate-pulse rounded-3xl bg-muted" />}><CreateEventForm /></Suspense>
          </ProtectedRoute>
        </div>
      </section>
    </PageFrame>
  );
}
