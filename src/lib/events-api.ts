import { apiRequest } from "@/lib/api-client";
import type { EventSummary, EventTypeTone } from "@/types/event";

export type ApiEvent = {
  _id: string;
  title: string;
  description: string;
  eventType: string;
  thumbnail: string;
  location: string;
  eventDate: string;
  creatorId?: string;
  creatorEmail?: string;
  createdAt?: string;
  updatedAt?: string;
};

type ApiResponse<T> = { success: boolean; message: string; data: T };

export type EventInput = {
  title: string;
  description: string;
  eventType: string;
  thumbnail: string;
  location: string;
  eventDate: string;
};

export const eventTypeTone = (type: string): EventTypeTone => {
  const value = type.toLowerCase();
  if (value.includes("plant") || value.includes("volunteer")) return "forest";
  if (value.includes("donat") || value.includes("food")) return "amber";
  if (value.includes("clean")) return "sky";
  return "rose";
};

export const toEventSummary = (event: ApiEvent): EventSummary => ({
  id: event._id,
  title: event.title,
  description: event.description,
  type: event.eventType,
  typeTone: eventTypeTone(event.eventType),
  date: new Intl.DateTimeFormat("en", { dateStyle: "long", timeStyle: "short" }).format(new Date(event.eventDate)),
  location: event.location,
  image: event.thumbnail,
  imageAlt: event.title,
});

export async function getUpcomingEvents(page = 1, limit = 12) {
  const response = await apiRequest<ApiResponse<{
    events: ApiEvent[];
    pagination: { page: number; limit: number; total: number; totalPages: number };
  }>>(`/events?page=${page}&limit=${limit}`);
  return response.data;
}

export async function getRecentEvents() {
  const response = await apiRequest<ApiResponse<{ events: ApiEvent[] }>>("/events/recent");
  return response.data.events;
}

export async function getEvent(id: string) {
  const response = await apiRequest<ApiResponse<{ event: ApiEvent }>>(`/events/${encodeURIComponent(id)}`);
  return response.data.event;
}

export async function createEvent(input: EventInput) {
  const response = await apiRequest<ApiResponse<{ event: ApiEvent }>>(
    "/events", { method: "POST", body: JSON.stringify(input) }, true,
  );
  return response.data.event;
}

export async function updateEvent(id: string, input: Partial<EventInput>) {
  const response = await apiRequest<ApiResponse<{ event: ApiEvent }>>(
    `/events/${encodeURIComponent(id)}`, { method: "PATCH", body: JSON.stringify(input) }, true,
  );
  return response.data.event;
}

export async function deleteEvent(id: string) {
  return apiRequest<ApiResponse<{ eventId: string; deleted: boolean }>>(
    `/events/${encodeURIComponent(id)}`, { method: "DELETE" }, true,
  );
}

export async function getMyEvents() {
  const response = await apiRequest<ApiResponse<{ events: ApiEvent[] }>>("/events/my-events", {}, true);
  return response.data.events;
}

export async function joinEvent(eventId: string) {
  return apiRequest<ApiResponse<{ participation: { _id: string } }>>(
    "/joins", { method: "POST", body: JSON.stringify({ eventId }) }, true,
  );
}

export async function getJoinedEvents() {
  const response = await apiRequest<ApiResponse<{ events: Array<{ event: ApiEvent }> }>>(
    "/joins/my-events", {}, true,
  );
  return response.data.events.map((item) => item.event).filter(Boolean);
}
