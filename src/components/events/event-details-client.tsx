"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowLeft, CalendarDays, MapPin, Users } from "lucide-react";
import { toast } from "react-toastify";
import JoinEventButton from "@/components/events/join-event-button";
import { getEvent, toEventSummary, type ApiEvent } from "@/lib/events-api";

export default function EventDetailsClient({ id }: { id: string }) {
  const [event, setEvent] = useState<ApiEvent | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    getEvent(id).then((item) => { if (active) setEvent(item); })
      .catch((error: unknown) => { if (active) toast.error(error instanceof Error ? error.message : "Could not load event details."); })
      .finally(() => { if (active) setLoading(false); });
    return () => { active = false; };
  }, [id]);

  if (loading) return <div className="mx-auto h-[32rem] max-w-5xl animate-pulse rounded-3xl bg-muted" />;
  if (!event) return <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-card p-12 text-center"><h1 className="text-2xl font-bold">Event not found</h1><Link href="/upcoming-events" className="mt-5 inline-flex text-primary underline">Browse upcoming events</Link></div>;

  const summary = toEventSummary(event);
  return <div className="mx-auto max-w-5xl"><Link href="/upcoming-events" className="mb-7 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"><ArrowLeft className="size-4" /> Back to upcoming events</Link><article className="overflow-hidden rounded-3xl border border-border bg-card shadow-soft"><div className="relative h-64 sm:h-96"><Image src={event.thumbnail} alt={event.title} fill priority unoptimized sizes="(min-width: 1024px) 960px, 100vw" className="object-cover" /><span className="absolute left-5 top-5 rounded-full bg-white/95 px-4 py-2 text-xs font-bold uppercase text-forest-800">{event.eventType}</span></div><div className="p-6 sm:p-10"><p className="text-xs font-bold uppercase tracking-[.2em] text-primary">Community event</p><h1 className="mt-3 text-3xl font-bold sm:text-4xl">{event.title}</h1><p className="mt-5 max-w-3xl text-base leading-8 text-muted-foreground">{event.description}</p><div className="mt-8 grid gap-4 border-y border-border py-6 sm:grid-cols-3"><div className="flex items-center gap-3"><CalendarDays className="size-5 text-primary" /><div><p className="text-xs text-muted-foreground">Event date</p><p className="mt-1 text-sm font-semibold">{summary.date}</p></div></div><div className="flex items-center gap-3"><MapPin className="size-5 text-primary" /><div><p className="text-xs text-muted-foreground">Location</p><p className="mt-1 text-sm font-semibold">{event.location}</p></div></div><div className="flex items-center gap-3"><Users className="size-5 text-primary" /><div><p className="text-xs text-muted-foreground">Open to</p><p className="mt-1 text-sm font-semibold">Community volunteers</p></div></div></div><div className="mt-7 flex flex-col gap-3 sm:flex-row"><JoinEventButton eventId={event._id} /><Link href="/upcoming-events" className="inline-flex items-center justify-center rounded-xl border border-border px-6 py-3.5 text-sm font-semibold hover:bg-muted">Explore more events</Link></div></div></article></div>;
}
