"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { toast } from "react-toastify";
import { authClient } from "@/lib/auth-client";
import { joinEvent } from "@/lib/events-api";

export default function JoinEventButton({ eventId }: { eventId: string }) {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();
  const [joining, setJoining] = useState(false);

  async function handleJoin() {
    if (!session) {
      router.push(`/login?next=${encodeURIComponent(`/events/${eventId}`)}`);
      return;
    }
    setJoining(true);
    try {
      await joinEvent(eventId);
      toast.success("You have joined this event.");
      router.refresh();
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Could not join this event.");
    } finally {
      setJoining(false);
    }
  }

  if (isPending) return <button disabled className="rounded-xl bg-muted px-6 py-3.5 text-sm font-bold">Checking session...</button>;
  if (!session) return <Link href={`/login?next=${encodeURIComponent(`/events/${eventId}`)}`} className="inline-flex items-center justify-center rounded-xl bg-forest-700 px-6 py-3.5 text-sm font-bold text-white hover:bg-forest-800">Sign in to join</Link>;

  return <button type="button" onClick={handleJoin} disabled={joining} className="rounded-xl bg-forest-700 px-6 py-3.5 text-sm font-bold text-white hover:bg-forest-800 disabled:opacity-60">{joining ? "Joining..." : "Join this event"}</button>;
}
