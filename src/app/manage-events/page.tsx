import ProtectedRoute from "@/components/auth/protected-route";
import ManageEventsList from "@/components/events/manage-events-list";
import PageFrame from "@/components/shared/page-frame";
import PageHeading from "@/components/shared/page-heading";
import Link from "next/link";
import { Plus } from "lucide-react";

export const metadata = { title: "Manage events | TogetherWeGrow" };

export default function ManageEventsPage() {
  return (
    <PageFrame>
      <section className="bg-cream py-12 dark:bg-background sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ProtectedRoute>
            <PageHeading eyebrow="Your initiatives" title="Manage events" description="Review and update the community initiatives you created." action={<Link href="/create-event" className="inline-flex items-center gap-2 rounded-xl bg-forest-700 px-5 py-3 text-sm font-bold text-white hover:bg-forest-800"><Plus className="size-4" /> Create event</Link>} />
            <ManageEventsList />
          </ProtectedRoute>
        </div>
      </section>
    </PageFrame>
  );
}
