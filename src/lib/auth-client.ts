"use client";

import { createAuthClient } from "better-auth/react";
import { jwtClient } from "better-auth/client/plugins";

const apiOrigin = (
  process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000"
).replace(/\/+$/, "");

export const authClient = createAuthClient({
  // The Express API mounts Better Auth at /api/v1/auth.
  baseURL: `${apiOrigin}/api/v1/auth`,
  fetchOptions: {
    credentials: "include",
  },
  plugins: [jwtClient()],
});

export const { signIn, signUp, signOut, useSession } = authClient;
