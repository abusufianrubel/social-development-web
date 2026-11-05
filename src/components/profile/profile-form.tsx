"use client";

import { useState, type FormEvent } from "react";

const inputClass =
  "mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10";

export default function ProfileForm() {
  const [notice, setNotice] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setNotice("Profile form is ready. Connect your profile update API to persist these changes.");
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="profileName" className="text-sm font-semibold">Display name</label>
          <input id="profileName" name="name" defaultValue="Community Member" required className={inputClass} />
        </div>
        <div>
          <label htmlFor="profileEmail" className="text-sm font-semibold">Email address</label>
          <input id="profileEmail" type="email" defaultValue="member@example.com" readOnly className={`${inputClass} cursor-not-allowed bg-muted text-muted-foreground`} />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="profileImage" className="text-sm font-semibold">Profile photo URL</label>
          <input id="profileImage" name="image" type="url" placeholder="https://example.com/profile.jpg" className={inputClass} />
        </div>
      </div>
      {notice ? <p role="status" className="mt-5 rounded-xl border border-amber-400/40 bg-amber-50 px-4 py-3 text-sm text-amber-900 dark:bg-amber-950/30 dark:text-amber-200">{notice}</p> : null}
      <button type="submit" className="mt-7 rounded-xl bg-forest-700 px-6 py-3 text-sm font-bold text-white hover:bg-forest-800">Save profile</button>
    </form>
  );
}
