export type EventTypeTone = "forest" | "amber" | "sky" | "rose";

export type EventSummary = {
  id: string;
  title: string;
  description: string;
  type: string;
  typeTone: EventTypeTone;
  date: string;
  location: string;
  image: string;
  imageAlt: string;
};
