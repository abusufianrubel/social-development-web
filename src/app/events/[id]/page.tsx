import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CalendarDays, MapPin, Users } from "lucide-react";
import PageFrame from "@/components/shared/page-frame";
import { sampleUpcomingEvents } from "@/lib/sample-events";

type EventDetailsPageProps = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: EventDetailsPageProps) {
  const { id } = await params;
  const event = sampleUpcomingEvents.find((item) => item.id === id);
  return { title: event ? `${event.title} | TogetherWeGrow` : "Event not found | TogetherWeGrow" };
}

export default async function EventDetailsPage({ params }: EventDetailsPageProps) {
  const { id } = await params;
  const event = sampleUpcomingEvents.find((item) => item.id === id);
  if (!event) notFound();

  return (
    <PageFrame>
      <section className="bg-cream py-10 dark:bg-background sm:py-14">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Link href="/upcoming-events" className="mb-7 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"><ArrowLeft className="size-4" /> Back to upcoming events</Link>
          <article className="overflow-hidden rounded-3xl border border-border bg-card shadow-soft">
            <div className="relative h-64 sm:h-96">
              <Image src={event.image} alt={event.imageAlt} fill priority sizes="(min-width: 1024px) 960px, 100vw" className="object-cover" />
              <span className="absolute left-5 top-5 rounded-full bg-white/95 px-4 py-2 text-xs font-bold uppercase tracking-wide text-forest-800">{event.type}</span>
            </div>
            <div className="p-6 sm:p-10">
              <p className="text-xs font-bold uppercase tracking-[.2em] text-primary">Community event</p>
              <h1 className="font-display mt-3 text-3xl font-bold text-foreground sm:text-4xl">{event.title}</h1>
              <p className="mt-5 max-w-3xl text-base leading-8 text-muted-foreground">{event.description}</p>
              <div className="mt-8 grid gap-4 border-y border-border py-6 sm:grid-cols-3">
                <div className="flex items-center gap-3"><CalendarDays className="size-5 text-primary" /><div><p className="text-xs text-muted-foreground">Event date</p><p className="mt-1 text-sm font-semibold">{event.date}</p></div></div>
                <div className="flex items-center gap-3"><MapPin className="size-5 text-primary" /><div><p className="text-xs text-muted-foreground">Location</p><p className="mt-1 text-sm font-semibold">{event.location}</p></div></div>
                <div className="flex items-center gap-3"><Users className="size-5 text-primary" /><div><p className="text-xs text-muted-foreground">Open to</p><p className="mt-1 text-sm font-semibold">Community volunteers</p></div></div>
              </div>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link href="/login?next=%2Fjoined-events" className="inline-flex items-center justify-center rounded-xl bg-forest-700 px-6 py-3.5 text-sm font-bold text-white hover:bg-forest-800">Join this event</Link>
                <Link href="/upcoming-events" className="inline-flex items-center justify-center rounded-xl border border-border px-6 py-3.5 text-sm font-semibold hover:bg-muted">Explore more events</Link>
              </div>
              <p className="mt-4 text-xs text-muted-foreground">Event details are public. Sign in to join when the authentication and API integrations are connected.</p>
            </div>
          </article>
        </div>
      </section>
    </PageFrame>
  );
}
