"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Compass } from "lucide-react";
import { toast } from "react-toastify";
import EventCard from "@/components/events/event-card";
import { getJoinedEvents, toEventSummary } from "@/lib/events-api";
import type { EventSummary } from "@/types/event";

export default function JoinedEventsList() {
  const [events, setEvents] = useState<EventSummary[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    getJoinedEvents()
      .then((items) => { if (active) setEvents(items.map(toEventSummary)); })
      .catch((error: unknown) => { if (active) toast.error(error instanceof Error ? error.message : "Could not load joined events."); })
      .finally(() => { if (active) setLoading(false); });
    return () => { active = false; };
  }, []);

  if (loading) return <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{Array.from({ length: 3 }).map((_, i) => <div key={i} className="h-80 animate-pulse rounded-2xl bg-muted" />)}</div>;
  if (!events.length) return <div className="rounded-3xl border border-dashed border-border bg-card px-6 py-16 text-center"><Compass className="mx-auto size-10 text-primary" /><h2 className="mt-4 text-xl font-bold">Your next good deed is waiting</h2><p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">You have not joined an event yet. Explore local opportunities and find one that speaks to you.</p><Link href="/upcoming-events" className="mt-6 inline-flex rounded-xl bg-forest-700 px-5 py-3 text-sm font-bold text-white">Explore events</Link></div>;
  return <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{events.map((event) => <EventCard key={event.id} event={event} />)}</div>;
}
