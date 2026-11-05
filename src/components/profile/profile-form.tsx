"use client";

import { useEffect, useState, type FormEvent } from "react";
import { authClient } from "@/lib/auth-client";

const inputClass =
  "mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10";

export default function ProfileForm() {
  const { data: session, isPending } = authClient.useSession();
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [notice, setNotice] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    if (session?.user) {
      setName(session.user.name ?? "");
      setImage(session.user.image ?? "");
    }
  }, [session]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setNotice("");
    setIsSaving(true);

    try {
      const result = await authClient.updateUser({
        name: name.trim(),
        image: image.trim() || undefined,
      });

      if (result.error) throw new Error(result.error.message);
      setNotice("Your profile has been updated.");
    } catch (error) {
      setNotice(error instanceof Error ? error.message : "Could not update your profile.");
    } finally {
      setIsSaving(false);
    }
  }

  if (isPending) {
    return <div className="h-56 animate-pulse rounded-3xl bg-muted" aria-label="Loading profile" />;
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="profileName" className="text-sm font-semibold">Display name</label>
          <input id="profileName" name="name" value={name} onChange={(event) => setName(event.target.value)} required minLength={2} className={inputClass} />
        </div>
        <div>
          <label htmlFor="profileEmail" className="text-sm font-semibold">Email address</label>
          <input id="profileEmail" type="email" value={session?.user.email ?? ""} readOnly className={`${inputClass} cursor-not-allowed bg-muted text-muted-foreground`} />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="profileImage" className="text-sm font-semibold">Profile photo URL</label>
          <input id="profileImage" name="image" type="url" value={image} onChange={(event) => setImage(event.target.value)} placeholder="https://example.com/profile.jpg" className={inputClass} />
        </div>
      </div>
      {notice ? <p role="status" className="mt-5 rounded-xl border border-border bg-muted px-4 py-3 text-sm text-foreground">{notice}</p> : null}
      <button type="submit" disabled={isSaving} className="mt-7 rounded-xl bg-forest-700 px-6 py-3 text-sm font-bold text-white hover:bg-forest-800 disabled:cursor-not-allowed disabled:opacity-60">{isSaving ? "Saving..." : "Save profile"}</button>
    </form>
  );
}
