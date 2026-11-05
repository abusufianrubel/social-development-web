import Image from "next/image";
import ProtectedRoute from "@/components/auth/protected-route";
import Link from "next/link";
import { CalendarDays, MapPin, PencilLine, Plus, Trash2 } from "lucide-react";
import PageFrame from "@/components/shared/page-frame";
import PageHeading from "@/components/shared/page-heading";
import { sampleUpcomingEvents } from "@/lib/sample-events";

export const metadata = { title: "Manage events | TogetherWeGrow" };

export default function ManageEventsPage() {
  return (
    <PageFrame>
      <section className="bg-cream py-12 dark:bg-background sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ProtectedRoute>
            <PageHeading eyebrow="Your initiatives" title="Manage events" description="Keep your community initiatives up to date. Review event details and make changes when plans evolve." action={<Link href="/create-event" className="inline-flex items-center justify-center gap-2 rounded-xl bg-forest-700 px-5 py-3 text-sm font-bold text-white hover:bg-forest-800"><Plus className="size-4" /> Create event</Link>} />
            <div className="mb-6 flex items-center justify-between rounded-2xl border border-border bg-card p-5">
              <div><p className="text-sm font-bold">Your event overview</p><p className="mt-1 text-xs text-muted-foreground">Preview list · authenticated account</p></div>
              <span className="rounded-full bg-forest-100 px-3 py-1.5 text-xs font-bold text-forest-800 dark:bg-forest-900 dark:text-forest-100">{sampleUpcomingEvents.length} events</span>
            </div>
          <div className="space-y-4">
            {sampleUpcomingEvents.slice(0, 4).map((event) => (
              <article key={event.id} className="flex flex-col gap-5 rounded-2xl border border-border bg-card p-4 shadow-soft sm:flex-row sm:items-center">
                <div className="relative h-32 w-full shrink-0 overflow-hidden rounded-xl sm:w-44"><Image src={event.image} alt={event.imageAlt} fill sizes="176px" className="object-cover" /></div>
                <div className="min-w-0 flex-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-primary">{event.type}</span>
                  <h2 className="font-display mt-1 text-lg font-bold">{event.title}</h2>
                  <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-xs text-muted-foreground"><span className="inline-flex items-center gap-1"><CalendarDays className="size-3.5" />{event.date}</span><span className="inline-flex items-center gap-1"><MapPin className="size-3.5" />{event.location}</span></div>
                </div>
                <div className="flex shrink-0 gap-2">
                  <Link href={`/create-event?edit=${event.id}`} className="inline-flex items-center gap-2 rounded-xl border border-border px-4 py-2.5 text-xs font-bold hover:bg-muted"><PencilLine className="size-3.5" /> Edit</Link>
                  <button type="button" disabled title="Connect the event delete API to enable this action" className="inline-flex cursor-not-allowed items-center gap-2 rounded-xl border border-rose-600/20 px-4 py-2.5 text-xs font-bold text-rose-700 opacity-50 dark:text-rose-300"><Trash2 className="size-3.5" /> Delete</button>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-muted-foreground">This page currently uses sample events. Ownership filtering, updates, and deletion require the documented backend API.</p>
          </ProtectedRoute>
        </div>
      </section>
    </PageFrame>
  );
}
