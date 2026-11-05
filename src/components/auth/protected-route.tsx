"use client";

import { useEffect, type ReactNode } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

export default function ProtectedRoute({ children }: { children: ReactNode }) {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();

  useEffect(() => {
    if (!isPending && !session) {
      router.replace("/login");
    }
  }, [isPending, router, session]);

  if (isPending) {
    return (
      <div className="grid min-h-[50vh] place-items-center bg-cream px-4 dark:bg-background">
        <div className="w-full max-w-sm animate-pulse space-y-4" aria-label="Checking your session">
          <div className="mx-auto size-12 rounded-2xl bg-forest-100 dark:bg-forest-900" />
          <div className="mx-auto h-4 w-40 rounded bg-muted" />
          <div className="mx-auto h-3 w-56 rounded bg-muted" />
        </div>
      </div>
    );
  }

  if (!session) return null;

  return children;
}
