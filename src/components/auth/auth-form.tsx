"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { ArrowRight, Eye, EyeOff, HeartHandshake, Mail } from "lucide-react";

type AuthFormProps = {
  mode: "login" | "register";
};

const fieldClass =
  "mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-4 focus:ring-primary/10";

export default function AuthForm({ mode }: AuthFormProps) {
  const isRegister = mode === "register";
  const [showPassword, setShowPassword] = useState(false);
  const [notice, setNotice] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setNotice(
      "The page design and client-side validation are ready. Connect the configured Better Auth client to enable authentication."
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {isRegister ? (
        <div>
          <label htmlFor="name" className="text-sm font-semibold text-foreground">
            Full name
          </label>
          <input id="name" name="name" autoComplete="name" required placeholder="Your name" className={fieldClass} />
        </div>
      ) : null}
      <div>
        <label htmlFor="email" className="text-sm font-semibold text-foreground">
          Email address
        </label>
        <div className="relative">
          <Mail className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <input id="email" name="email" type="email" autoComplete="email" required placeholder="you@example.com" className={`${fieldClass} pl-11`} />
        </div>
      </div>
      {isRegister ? (
        <div>
          <label htmlFor="photoURL" className="text-sm font-semibold text-foreground">
            Profile photo URL
          </label>
          <input id="photoURL" name="photoURL" type="url" placeholder="https://example.com/photo.jpg" className={fieldClass} />
        </div>
      ) : null}
      <div>
        <div className="flex items-center justify-between">
          <label htmlFor="password" className="text-sm font-semibold text-foreground">
            Password
          </label>
          {!isRegister ? <span className="text-xs text-muted-foreground">Keep it secure</span> : null}
        </div>
        <div className="relative">
          <input id="password" name="password" type={showPassword ? "text" : "password"} autoComplete={isRegister ? "new-password" : "current-password"} minLength={6} required pattern={isRegister ? "(?=.*[a-z])(?=.*[A-Z]).{6,}" : undefined} title={isRegister ? "Use at least 6 characters, including uppercase and lowercase letters." : undefined} placeholder="At least 6 characters" className={`${fieldClass} pr-12`} />
          <button type="button" onClick={() => setShowPassword((value) => !value)} aria-label={showPassword ? "Hide password" : "Show password"} className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg p-2 text-muted-foreground hover:bg-muted">
            {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
          </button>
        </div>
        {isRegister ? <p className="mt-2 text-xs text-muted-foreground">Use at least 6 characters with one uppercase and one lowercase letter.</p> : null}
      </div>
      {notice ? <p role="status" className="rounded-xl border border-amber-400/40 bg-amber-50 px-4 py-3 text-sm leading-6 text-amber-900 dark:bg-amber-950/30 dark:text-amber-200">{notice}</p> : null}
      <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-forest-700 px-5 py-3.5 text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-forest-800">
        {isRegister ? "Create your account" : "Sign in"}
        <ArrowRight className="size-4" />
      </button>
      <div className="relative py-1 text-center text-xs text-muted-foreground">
        <span className="bg-card px-3">or continue with</span>
        <span className="absolute inset-x-0 top-1/2 -z-10 border-t border-border" />
      </div>
      <button type="button" onClick={() => setNotice("Social sign-in becomes active after the Google or GitHub provider credentials are connected in Better Auth.")} className="flex w-full items-center justify-center gap-3 rounded-xl border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-muted">
        <span className="grid size-6 place-items-center rounded-full bg-muted text-xs font-bold">G</span>
        Continue with Google
      </button>
      <p className="text-center text-sm text-muted-foreground">
        {isRegister ? "Already part of the community?" : "New to the community?"}{" "}
        <Link href={isRegister ? "/login" : "/register"} className="font-bold text-primary hover:underline">
          {isRegister ? "Sign in" : "Create an account"}
        </Link>
      </p>
      <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
        <HeartHandshake className="size-4 text-primary" />
        Your next small action can make a big difference.
      </div>
    </form>
  );
}
