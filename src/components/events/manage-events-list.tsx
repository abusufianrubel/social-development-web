"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { CalendarDays, MapPin, PencilLine, Trash2 } from "lucide-react";
import { toast } from "react-toastify";
import { deleteEvent, getMyEvents, toEventSummary, type ApiEvent } from "@/lib/events-api";

export default function ManageEventsList() {
  const [events, setEvents] = useState<ApiEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const load = useCallback(async () => {
    try { setEvents(await getMyEvents()); }
    catch (error) { toast.error(error instanceof Error ? error.message : "Could not load your events."); }
    finally { setLoading(false); }
  }, []);

  useEffect(() => { void load(); }, [load]);

  async function handleDelete(id: string) {
    if (!window.confirm("Delete this event? This action cannot be undone.")) return;
    setDeletingId(id);
    try {
      await deleteEvent(id);
      setEvents((current) => current.filter((event) => event._id !== id));
      toast.success("Event deleted successfully.");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Could not delete event.");
    } finally { setDeletingId(null); }
  }

  if (loading) return <div className="h-64 animate-pulse rounded-2xl bg-muted" />;
  if (!events.length) return <div className="rounded-3xl border border-dashed border-border bg-card p-12 text-center"><p className="font-semibold">You have not created any events yet.</p><Link href="/create-event" className="mt-4 inline-flex rounded-xl bg-forest-700 px-5 py-3 text-sm font-bold text-white">Create your first event</Link></div>;

  return <div className="space-y-4">{events.map((event) => {
    const summary = toEventSummary(event);
    return <article key={event._id} className="flex flex-col gap-5 rounded-2xl border border-border bg-card p-4 shadow-soft sm:flex-row sm:items-center">
      <div className="relative h-32 w-full shrink-0 overflow-hidden rounded-xl sm:w-44"><img src={event.thumbnail} alt={event.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover" /></div>
      <div className="min-w-0 flex-1"><span className="text-[11px] font-bold uppercase tracking-wider text-primary">{event.eventType}</span><h2 className="mt-1 text-lg font-bold">{event.title}</h2><div className="mt-3 flex flex-wrap gap-4 text-xs text-muted-foreground"><span className="inline-flex items-center gap-1"><CalendarDays className="size-3.5" />{summary.date}</span><span className="inline-flex items-center gap-1"><MapPin className="size-3.5" />{event.location}</span></div></div>
      <div className="flex shrink-0 gap-2"><Link href={`/create-event?edit=${event._id}`} className="inline-flex items-center gap-2 rounded-xl border border-border px-4 py-2.5 text-xs font-bold hover:bg-muted"><PencilLine className="size-3.5" /> Edit</Link><button type="button" onClick={() => void handleDelete(event._id)} disabled={deletingId === event._id} className="inline-flex items-center gap-2 rounded-xl border border-rose-600/20 px-4 py-2.5 text-xs font-bold text-rose-700 disabled:opacity-50"><Trash2 className="size-3.5" />{deletingId === event._id ? "Deleting..." : "Delete"}</button></div>
    </article>;
  })}</div>;
}
