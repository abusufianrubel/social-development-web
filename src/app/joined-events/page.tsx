import Link from "next/link";
import { CalendarCheck2, Compass } from "lucide-react";
import ProtectedRoute from "@/components/auth/protected-route";
import JoinedEventsList from "@/components/events/joined-events-list";
import PageFrame from "@/components/shared/page-frame";
import PageHeading from "@/components/shared/page-heading";

export const metadata = { title: "Joined events | TogetherWeGrow" };

export default function JoinedEventsPage() {
  return (
    <PageFrame>
      <section className="bg-cream py-12 dark:bg-background sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ProtectedRoute>
            <PageHeading eyebrow="Your time matters" title="Joined events" description="Keep track of the community activities you plan to take part in." action={<span className="grid size-12 place-items-center rounded-2xl bg-forest-100 text-forest-800 dark:bg-forest-900 dark:text-forest-100"><CalendarCheck2 className="size-6" /></span>} />
            <JoinedEventsList />
          </ProtectedRoute>
        </div>
      </section>
    </PageFrame>
  );
}
