import type { EventSummary } from "@/types/event";

/**
 * Prototype content for the homepage.
 * TODO: replace with the six latest upcoming events returned by the API.
 */
export const sampleUpcomingEvents: EventSummary[] = [
  {
    id: "plant-a-tree-grow-a-future",
    title: "Plant a Tree, Grow a Future",
    description:
      "Join local volunteers to bring more green spaces to our neighborhood.",
    type: "Plantation",
    typeTone: "forest",
    date: "15 December 2026",
    location: "Mirpur, Dhaka",
    image:
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=520&fit=crop",
    imageAlt: "Community tree planting",
  },
  {
    id: "warm-hearts-winter-drive",
    title: "Warm Hearts Winter Drive",
    description:
      "Help collect and distribute warm clothes to families who need them.",
    type: "Donation",
    typeTone: "amber",
    date: "20 December 2026",
    location: "Dhanmondi, Dhaka",
    image:
      "https://images.unsplash.com/photo-1489493585363-d69421e0edd3?w=800&h=520&fit=crop",
    imageAlt: "Winter clothes donation",
  },
  {
    id: "a-cleaner-park-for-everyone",
    title: "A Cleaner Park for Everyone",
    description:
      "Spend a morning cleaning shared spaces and caring for our environment.",
    type: "Cleanup",
    typeTone: "sky",
    date: "24 December 2026",
    location: "Uttara, Dhaka",
    image:
      "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&h=520&fit=crop",
    imageAlt: "Community cleanup",
  },
  {
    id: "share-a-meal-share-a-smile",
    title: "Share a Meal, Share a Smile",
    description:
      "Prepare meal packages and share them with neighbors in need.",
    type: "Food support",
    typeTone: "amber",
    date: "28 December 2026",
    location: "Mohammadpur, Dhaka",
    image:
      "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&h=520&fit=crop",
    imageAlt: "Food donation activity",
  },
  {
    id: "a-day-of-community-care",
    title: "A Day of Community Care",
    description:
      "Connect with local families and lend a helping hand where it matters.",
    type: "Community care",
    typeTone: "rose",
    date: "04 January 2027",
    location: "Banani, Dhaka",
    image:
      "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800&h=520&fit=crop",
    imageAlt: "Community family support",
  },
  {
    id: "together-for-a-better-tomorrow",
    title: "Together for a Better Tomorrow",
    description:
      "Meet local changemakers and plan a new community initiative together.",
    type: "Volunteering",
    typeTone: "forest",
    date: "10 January 2027",
    location: "Gulshan, Dhaka",
    image:
      "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=800&h=520&fit=crop",
    imageAlt: "Volunteers collaborating",
  },
];
