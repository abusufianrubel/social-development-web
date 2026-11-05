"use client";

import { useState, type FormEvent } from "react";
import type { EventSummary } from "@/types/event";

type EventFormProps = {
  initialEvent?: EventSummary;
};

const inputClass =
  "mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-4 focus:ring-primary/10";

export default function EventForm({ initialEvent }: EventFormProps) {
  const [notice, setNotice] = useState("");
  const [eventDate, setEventDate] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (eventDate && new Date(eventDate).getTime() <= Date.now()) {
      setNotice("Choose a future date for your community event.");
      return;
    }
    setNotice("Your form is valid. Connect the Express event API to save this event.");
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl border border-border bg-card p-5 shadow-soft sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor="title" className="text-sm font-semibold">Event title</label>
          <input id="title" name="title" required minLength={3} defaultValue={initialEvent?.title} placeholder="e.g. Winter clothes distribution" className={inputClass} />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="description" className="text-sm font-semibold">Description</label>
          <textarea id="description" name="description" required minLength={10} rows={5} defaultValue={initialEvent?.description} placeholder="Tell volunteers what the event is about and how they can help..." className={inputClass} />
        </div>
        <div>
          <label htmlFor="eventType" className="text-sm font-semibold">Event type</label>
          <select id="eventType" name="eventType" defaultValue={initialEvent?.type ?? "Donation"} className={inputClass}>
            {["Cleanup", "Plantation", "Donation", "Food support", "Community care", "Volunteering", "Other"].map((type) => <option key={type}>{type}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor="location" className="text-sm font-semibold">Location</label>
          <input id="location" name="location" required defaultValue={initialEvent?.location} placeholder="Area, city" className={inputClass} />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="thumbnail" className="text-sm font-semibold">Thumbnail image URL</label>
          <input id="thumbnail" name="thumbnail" type="url" required defaultValue={initialEvent?.image} placeholder="https://example.com/event-image.jpg" className={inputClass} />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="eventDate" className="text-sm font-semibold">Event date and time</label>
          <input id="eventDate" name="eventDate" type="datetime-local" required min={new Date().toISOString().slice(0, 16)} onChange={(event) => setEventDate(event.target.value)} className={inputClass} />
        </div>
      </div>
      {notice ? <p role="status" className="mt-5 rounded-xl border border-amber-400/40 bg-amber-50 px-4 py-3 text-sm leading-6 text-amber-900 dark:bg-amber-950/30 dark:text-amber-200">{notice}</p> : null}
      <div className="mt-7 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
        <button type="reset" onClick={() => setNotice("")} className="rounded-xl border border-border px-5 py-3 text-sm font-semibold hover:bg-muted">Reset form</button>
        <button type="submit" className="rounded-xl bg-forest-700 px-6 py-3 text-sm font-bold text-white transition hover:bg-forest-800">{initialEvent ? "Save changes" : "Create event"}</button>
      </div>
    </form>
  );
}
