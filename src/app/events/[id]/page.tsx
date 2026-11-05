"use client";

import { useParams } from "next/navigation";
import PageFrame from "@/components/shared/page-frame";
import EventDetailsClient from "@/components/events/event-details-client";

export default function EventDetailsPage() {
  const params = useParams<{ id: string }>();
  return (
    <PageFrame>
      <section className="bg-cream py-10 dark:bg-background sm:py-14">
        <div className="px-4 sm:px-6 lg:px-8"><EventDetailsClient id={params.id} /></div>
      </section>
    </PageFrame>
  );
}
