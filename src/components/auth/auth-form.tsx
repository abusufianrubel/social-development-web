"use client";

import Link from "next/link";
import { useEffect, useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, Eye, EyeOff, HeartHandshake, Mail } from "lucide-react";
import { authClient } from "@/lib/auth-client";

type AuthFormProps = {
  mode: "login" | "register";
};

const fieldClass =
  "mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-4 focus:ring-primary/10";

export default function AuthForm({ mode }: AuthFormProps) {
  const isRegister = mode === "register";
  const router = useRouter();
  const { data: session, isPending: isSessionPending } = authClient.useSession();
  const [showPassword, setShowPassword] = useState(false);
  const [notice, setNotice] = useState("");
  const [noticeType, setNoticeType] = useState<"success" | "error">("error");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!isSessionPending && session) {
      router.replace("/upcoming-events");
    }
  }, [isSessionPending, router, session]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (isSubmitting) return;

    setNotice("");
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);
    const email = String(formData.get("email") ?? "").trim();
    const password = String(formData.get("password") ?? "");

    try {
      if (isRegister) {
        const name = String(formData.get("name") ?? "").trim();
        const image = String(formData.get("photoURL") ?? "").trim();

        const result = await authClient.signUp.email({
          name,
          email,
          password,
          image: image || undefined,
          callbackURL: "/upcoming-events",
        });

        if (result.error) throw new Error(result.error.message);
        setNoticeType("success");
        setNotice("Your account has been created. Welcome to TogetherWeGrow!");
      } else {
        const result = await authClient.signIn.email({
          email,
          password,
          callbackURL: "/upcoming-events",
        });

        if (result.error) throw new Error(result.error.message);
        setNoticeType("success");
        setNotice("You are signed in. Redirecting to upcoming events...");
      }

      router.replace("/upcoming-events");
      router.refresh();
    } catch (error) {
      setNoticeType("error");
      setNotice(
        error instanceof Error
          ? error.message
          : "Authentication failed. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  async function handleGoogleSignIn() {
    if (isSubmitting) return;

    setNotice("");
    setIsSubmitting(true);

    try {
      const result = await authClient.signIn.social({
        provider: "google",
        callbackURL: "/upcoming-events",
      });

      if (result.error) throw new Error(result.error.message);
    } catch (error) {
      setNoticeType("error");
      setNotice(
        error instanceof Error
          ? error.message
          : "Google sign-in could not be started. Please try again.",
      );
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {isRegister ? (
        <div>
          <label htmlFor="name" className="text-sm font-semibold text-foreground">
            Full name
          </label>
          <input id="name" name="name" autoComplete="name" required minLength={2} placeholder="Your name" className={fieldClass} />
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
          <input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            autoComplete={isRegister ? "new-password" : "current-password"}
            minLength={isRegister ? 6 : undefined}
            required
            pattern={isRegister ? "(?=.*[a-z])(?=.*[A-Z]).{6,}" : undefined}
            title={isRegister ? "Use at least 6 characters, including uppercase and lowercase letters." : undefined}
            placeholder="At least 6 characters"
            className={`${fieldClass} pr-12`}
          />
          <button type="button" onClick={() => setShowPassword((value) => !value)} aria-label={showPassword ? "Hide password" : "Show password"} className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg p-2 text-muted-foreground hover:bg-muted">
            {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
          </button>
        </div>
        {isRegister ? <p className="mt-2 text-xs text-muted-foreground">Use at least 6 characters with one uppercase and one lowercase letter.</p> : null}
      </div>

      {notice ? (
        <p
          role={noticeType === "error" ? "alert" : "status"}
          className={
            noticeType === "success"
              ? "rounded-xl border border-emerald-500/30 bg-emerald-50 px-4 py-3 text-sm leading-6 text-emerald-900 dark:bg-emerald-950/30 dark:text-emerald-200"
              : "rounded-xl border border-rose-500/30 bg-rose-50 px-4 py-3 text-sm leading-6 text-rose-900 dark:bg-rose-950/30 dark:text-rose-200"
          }
        >
          {notice}
        </p>
      ) : null}

      <button type="submit" disabled={isSubmitting} className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-forest-700 px-5 py-3.5 text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-forest-800 disabled:cursor-not-allowed disabled:opacity-60">
        {isSubmitting ? "Please wait..." : isRegister ? "Create your account" : "Sign in"}
        {!isSubmitting ? <ArrowRight className="size-4" /> : null}
      </button>

      <div className="relative py-1 text-center text-xs text-muted-foreground">
        <span className="bg-card px-3">or continue with</span>
        <span className="absolute inset-x-0 top-1/2 -z-10 border-t border-border" />
      </div>

      <button type="button" disabled={isSubmitting} onClick={handleGoogleSignIn} className="flex w-full items-center justify-center gap-3 rounded-xl border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-muted disabled:cursor-not-allowed disabled:opacity-60">
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
