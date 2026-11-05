"use client";

import { authClient } from "@/lib/auth-client";

const apiOrigin = (
  process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000"
).replace(/\/+$/, "");

export const API_BASE_URL = `${apiOrigin}/api/v1`;

type ApiError = { message?: string; errors?: Array<{ field: string; message: string }> };

export async function apiRequest<T>(
  path: string,
  init: RequestInit = {},
  authenticated = false,
): Promise<T> {
  if (!path.startsWith("/") || path.startsWith("//")) {
    throw new Error("API paths must be relative paths starting with '/'.");
  }

  const headers = new Headers(init.headers);
  if (authenticated) {
    const { data, error } = await authClient.token();
    if (error || !data?.token) {
      throw new Error(error?.message ?? "Your session has expired. Please sign in again.");
    }
    headers.set("Authorization", `Bearer ${data.token}`);
  }
  if (init.body && !headers.has("Content-Type")) {
    headers.set("Content-Type", "application/json");
  }

  const response = await fetch(`${API_BASE_URL}${path}`, {
    ...init,
    headers,
    credentials: "include",
    cache: "no-store",
  });
  const result = await response.json().catch(() => null) as (ApiError | T | null);

  if (!response.ok) {
    const message = result && typeof result === "object" && "message" in result
      ? result.message
      : undefined;
    throw new Error(message || `API request failed (${response.status}).`);
  }

  return result as T;
}

/** Backwards-compatible authenticated API helper. */
export function apiFetch<T>(path: string, init: RequestInit = {}) {
  return apiRequest<T>(path, init, true);
}
