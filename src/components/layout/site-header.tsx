"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronDown, LogOut, UserRound } from "lucide-react";
import { authClient } from "@/lib/auth-client";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/upcoming-events", label: "Upcoming events" },
  { href: "/#about", label: "Our impact" },
  { href: "/#gallery", label: "Gallery" },
];

const accountLinks = [
  { href: "/profile", label: "My profile" },
  { href: "/create-event", label: "Create event" },
  { href: "/manage-events", label: "Manage events" },
  { href: "/joined-events", label: "Joined events" },
];

export default function SiteHeader() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [isSigningOut, setIsSigningOut] = useState(false);
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const closeMenu = () => setIsMenuOpen(false);

  async function handleSignOut() {
    setIsSigningOut(true);

    try {
      const result = await authClient.signOut();
      if (result.error) throw new Error(result.error.message);

      setIsAccountOpen(false);
      closeMenu();
      router.replace("/");
      router.refresh();
    } catch {
      setIsSigningOut(false);
    }
  }

  function renderAccountLinks() {
    return accountLinks.map((link) => (
      <Link
        key={link.href}
        href={link.href}
        onClick={() => {
          setIsAccountOpen(false);
          closeMenu();
        }}
        className="block rounded-lg px-3 py-2 text-sm text-foreground transition hover:bg-forest-50 hover:text-forest-800 dark:hover:bg-white/10 dark:hover:text-amber-300"
      >
        {link.label}
      </Link>
    ));
  }

  return (
    <header className="sticky top-0 z-40 border-b border-forest-900/10 bg-cream/95 backdrop-blur dark:border-white/10 dark:bg-background/95">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <Link href="/" className="flex items-center gap-2.5" aria-label="TogetherWeGrow home">
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-forest-700 text-xl text-white" aria-hidden="true">♡</span>
          <span className="font-display text-xl font-extrabold tracking-tight text-forest-950 dark:text-foreground">Together<span className="text-forest-700 dark:text-amber-300">WeGrow</span></span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => <Link key={link.href} href={link.href} className="text-sm font-medium text-muted-foreground transition hover:text-forest-700 dark:hover:text-amber-300">{link.label}</Link>)}
        </div>

        <div className="flex items-center gap-2">
          {!isPending && user ? (
            <div className="relative">
              <button
                type="button"
                title={user.name}
                aria-label={`Open account menu for ${user.name}`}
                aria-expanded={isAccountOpen}
                onClick={() => setIsAccountOpen((open) => !open)}
                className="flex items-center gap-2 rounded-xl p-1.5 transition hover:bg-forest-100 dark:hover:bg-white/10"
              >
                {user.image ? (
                  <Image src={user.image} alt="" width={36} height={36} unoptimized className="size-9 rounded-full object-cover" />
                ) : (
                  <span className="grid size-9 place-items-center rounded-full bg-forest-100 text-forest-800 dark:bg-forest-900 dark:text-forest-100"><UserRound className="size-5" /></span>
                )}
                <span className="hidden max-w-28 truncate text-sm font-semibold text-forest-900 dark:text-foreground lg:inline">{user.name}</span>
                <ChevronDown className="hidden size-4 text-muted-foreground sm:block" />
              </button>

              {isAccountOpen ? (
                <div className="absolute right-0 top-full z-50 mt-2 w-56 rounded-2xl border border-border bg-card p-2 shadow-soft">
                  <p className="truncate px-3 py-2 text-xs text-muted-foreground" title={user.email}>{user.name}</p>
                  <div className="my-1 border-t border-border" />
                  {renderAccountLinks()}
                  <button type="button" disabled={isSigningOut} onClick={handleSignOut} className="mt-1 flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm font-semibold text-rose-700 transition hover:bg-rose-50 disabled:opacity-60 dark:text-rose-300 dark:hover:bg-rose-950/30">
                    <LogOut className="size-4" /> {isSigningOut ? "Signing out..." : "Log out"}
                  </button>
                </div>
              ) : null}
            </div>
          ) : !isPending ? (
            <>
              <Link href="/login" className="hidden rounded-xl px-4 py-2.5 text-sm font-semibold text-forest-800 hover:bg-forest-100 dark:text-foreground dark:hover:bg-white/10 sm:inline-flex">Log in</Link>
              <Link href="/register" className="rounded-xl bg-forest-700 px-4 py-2.5 text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-forest-800">Get involved</Link>
            </>
          ) : (
            <span className="h-10 w-24 animate-pulse rounded-xl bg-muted" aria-label="Loading account" />
          )}

          <button type="button" className="grid h-10 w-10 place-items-center rounded-xl border border-forest-900/10 md:hidden" aria-label={isMenuOpen ? "Close menu" : "Open menu"} aria-expanded={isMenuOpen} aria-controls="mobile-menu" onClick={() => setIsMenuOpen((open) => !open)}><span aria-hidden="true">{isMenuOpen ? "✕" : "☰"}</span></button>
        </div>
      </nav>

      {isMenuOpen ? (
        <div id="mobile-menu" className="border-t border-forest-900/10 bg-cream px-4 pb-4 pt-2 dark:bg-background sm:px-6 md:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => <Link key={link.href} href={link.href} onClick={closeMenu} className="rounded-xl px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-forest-100 hover:text-forest-700 dark:hover:bg-white/10">{link.label}</Link>)}
            {!isPending && user ? (
              <>
                <div className="my-2 border-t border-border" />
                <p className="px-3 py-2 text-xs font-semibold text-muted-foreground">{user.name}</p>
                {renderAccountLinks()}
                <button type="button" disabled={isSigningOut} onClick={handleSignOut} className="mt-1 flex items-center gap-2 rounded-xl px-3 py-2.5 text-left text-sm font-semibold text-rose-700 hover:bg-rose-50 dark:text-rose-300 dark:hover:bg-rose-950/30"><LogOut className="size-4" /> {isSigningOut ? "Signing out..." : "Log out"}</button>
              </>
            ) : !isPending ? (
              <>
                <Link href="/login" onClick={closeMenu} className="rounded-xl px-3 py-2.5 text-sm font-semibold text-forest-800 hover:bg-forest-100 dark:text-foreground">Log in</Link>
                <Link href="/register" onClick={closeMenu} className="rounded-xl px-3 py-2.5 text-sm font-semibold text-forest-800 hover:bg-forest-100 dark:text-foreground">Create account</Link>
              </>
            ) : null}
          </div>
        </div>
      ) : null}
    </header>
  );
}
