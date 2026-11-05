"use client";

import { useSearchParams } from "next/navigation";
import EventForm from "@/components/events/event-form";

export default function CreateEventForm() {
  const searchParams = useSearchParams();
  return <EventForm editId={searchParams.get("edit") ?? undefined} />;
}
