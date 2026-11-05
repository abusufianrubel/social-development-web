"use client";

import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import EventCard from "@/components/events/event-card";
import { getRecentEvents, toEventSummary } from "@/lib/events-api";
import type { EventSummary } from "@/types/event";

export default function RecentEvents() {
  const [events, setEvents] = useState<EventSummary[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    getRecentEvents()
      .then((items) => { if (active) setEvents(items.map(toEventSummary)); })
      .catch((error: unknown) => { if (active) toast.error(error instanceof Error ? error.message : "Could not load recent events."); })
      .finally(() => { if (active) setLoading(false); });
    return () => { active = false; };
  }, []);

  if (loading) return <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{Array.from({ length: 6 }).map((_, i) => <div key={i} className="h-80 animate-pulse rounded-2xl bg-muted" />)}</div>;
  if (!events.length) return <p className="rounded-2xl border border-dashed border-border p-8 text-center text-sm text-muted-foreground">No upcoming events yet.</p>;
  return <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{events.map((event) => <EventCard key={event.id} event={event} />)}</div>;
}
