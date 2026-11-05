"use client";

import { useEffect, useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { createEvent, getEvent, updateEvent, type ApiEvent, type EventInput } from "@/lib/events-api";

type EventFormProps = { editId?: string };

const inputClass = "mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-4 focus:ring-primary/10";
const toLocalDateTime = (value: string) => {
  const date = new Date(value);
  const offset = date.getTimezoneOffset() * 60000;
  return new Date(date.getTime() - offset).toISOString().slice(0, 16);
};

export default function EventForm({ editId }: EventFormProps) {
  const router = useRouter();
  const [initializing, setInitializing] = useState(Boolean(editId));
  const [saving, setSaving] = useState(false);
  const [form, setForm] = useState<EventInput>({
    title: "", description: "", eventType: "Donation", thumbnail: "", location: "", eventDate: "",
  });

  useEffect(() => {
    if (!editId) return;
    let active = true;
    getEvent(editId)
      .then((event: ApiEvent) => {
        if (!active) return;
        setForm({
          title: event.title,
          description: event.description,
          eventType: event.eventType,
          thumbnail: event.thumbnail,
          location: event.location,
          eventDate: toLocalDateTime(event.eventDate),
        });
      })
      .catch((error: unknown) => toast.error(error instanceof Error ? error.message : "Could not load event."))
      .finally(() => { if (active) setInitializing(false); });
    return () => { active = false; };
  }, [editId]);

  function updateField<K extends keyof EventInput>(key: K, value: EventInput[K]) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!form.eventDate || new Date(form.eventDate).getTime() <= Date.now()) {
      toast.error("Choose a future date for your community event.");
      return;
    }
    setSaving(true);
    try {
      const payload = { ...form, title: form.title.trim(), description: form.description.trim(), location: form.location.trim(), thumbnail: form.thumbnail.trim(), eventDate: new Date(form.eventDate).toISOString() };
      if (editId) {
        await updateEvent(editId, payload);
        toast.success("Event updated successfully.");
      } else {
        await createEvent(payload);
        toast.success("Event created successfully.");
      }
      router.push(editId ? "/manage-events" : "/upcoming-events");
      router.refresh();
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Could not save event.");
    } finally {
      setSaving(false);
    }
  }

  if (initializing) return <div className="h-96 animate-pulse rounded-3xl bg-muted" />;

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl border border-border bg-card p-5 shadow-soft sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-2"><label htmlFor="title" className="text-sm font-semibold">Event title</label><input id="title" value={form.title} onChange={(e) => updateField("title", e.target.value)} required minLength={3} maxLength={120} placeholder="e.g. Winter clothes distribution" className={inputClass} /></div>
        <div className="sm:col-span-2"><label htmlFor="description" className="text-sm font-semibold">Description</label><textarea id="description" value={form.description} onChange={(e) => updateField("description", e.target.value)} required minLength={10} maxLength={5000} rows={5} placeholder="Tell volunteers what the event is about and how they can help..." className={inputClass} /></div>
        <div><label htmlFor="eventType" className="text-sm font-semibold">Event type</label><select id="eventType" value={form.eventType} onChange={(e) => updateField("eventType", e.target.value)} className={inputClass}>{["Cleanup", "Plantation", "Donation", "Food support", "Community care", "Volunteering", "Other"].map((type) => <option key={type}>{type}</option>)}</select></div>
        <div><label htmlFor="location" className="text-sm font-semibold">Location</label><input id="location" value={form.location} onChange={(e) => updateField("location", e.target.value)} required maxLength={200} placeholder="Area, city" className={inputClass} /></div>
        <div className="sm:col-span-2"><label htmlFor="thumbnail" className="text-sm font-semibold">Thumbnail image URL</label><input id="thumbnail" type="url" value={form.thumbnail} onChange={(e) => updateField("thumbnail", e.target.value)} required placeholder="https://example.com/event-image.jpg" className={inputClass} /></div>
        <div className="sm:col-span-2"><label htmlFor="eventDate" className="text-sm font-semibold">Event date and time</label><input id="eventDate" type="datetime-local" value={form.eventDate} onChange={(e) => updateField("eventDate", e.target.value)} required min={toLocalDateTime(new Date().toISOString())} className={inputClass} /></div>
      </div>
      <div className="mt-7 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end"><button type="button" onClick={() => router.back()} className="rounded-xl border border-border px-5 py-3 text-sm font-semibold hover:bg-muted">Cancel</button><button type="submit" disabled={saving} className="rounded-xl bg-forest-700 px-6 py-3 text-sm font-bold text-white transition hover:bg-forest-800 disabled:cursor-not-allowed disabled:opacity-60">{saving ? "Saving..." : editId ? "Save changes" : "Create event"}</button></div>
    </form>
  );
}
