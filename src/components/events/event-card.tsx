import Image from "next/image";
import Link from "next/link";
import type { EventSummary, EventTypeTone } from "@/types/event";

const badgeToneClassName: Record<EventTypeTone, string> = {
  forest: "text-forest-800",
  amber: "text-amber-700",
  sky: "text-sky-700",
  rose: "text-rose-700",
};

type EventCardProps = {
  event: EventSummary;
};

export default function EventCard({ event }: EventCardProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-forest-900/10 bg-white shadow-soft transition hover:-translate-y-1">
      <div className="relative overflow-hidden">
        <Image
          src={event.image}
          alt={event.imageAlt}
          width={800}
          height={520}
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <span
          className={`absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-[11px] font-bold uppercase ${badgeToneClassName[event.typeTone]}`}
        >
          {event.type}
        </span>
      </div>
      <div className="flex min-h-[225px] flex-1 flex-col p-5">
        <p className="text-xs font-semibold text-forest-700">
          <span aria-hidden="true">▦</span>&nbsp;{event.date}
        </p>
        <h3 className="font-display mt-3 text-lg font-bold text-forest-950">
          {event.title}
        </h3>
        <p className="mt-2 text-sm leading-6 text-muted">{event.description}</p>
        <div className="mt-auto flex justify-between border-t border-forest-900/10 pt-4 text-xs">
          <span className="text-muted">
            <span aria-hidden="true">⌖</span> {event.location}
          </span>
          <Link
            href={`/events/${event.id}`}
            className="font-bold text-forest-700 hover:text-forest-900"
          >
            View event →
          </Link>
        </div>
      </div>
    </article>
  );
}
