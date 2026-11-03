"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "#home", label: "Home", isCurrent: true },
  { href: "#events", label: "Upcoming events", isCurrent: false },
  { href: "#about", label: "Our impact", isCurrent: false },
  { href: "#gallery", label: "Gallery", isCurrent: false },
];

export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-40 border-b border-forest-900/10 bg-cream/95 backdrop-blur">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="flex items-center gap-2.5"
          aria-label="TogetherWeGrow home"
        >
          <span
            className="grid h-10 w-10 place-items-center rounded-2xl bg-forest-700 text-xl text-white"
            aria-hidden="true"
          >
            ♡
          </span>
          <span className="font-display text-xl font-extrabold tracking-tight text-forest-950">
            Together<span className="text-forest-700">WeGrow</span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                link.isCurrent
                  ? "text-sm font-semibold text-forest-800"
                  : "text-sm text-muted hover:text-forest-700"
              }
              aria-current={link.isCurrent ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/login"
            className="hidden rounded-xl px-4 py-2.5 text-sm font-semibold text-forest-800 hover:bg-forest-100 sm:inline-flex"
          >
            Log in
          </Link>
          <Link
            href="/register"
            className="rounded-xl bg-forest-700 px-4 py-2.5 text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-forest-800"
          >
            Get involved
          </Link>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-xl border border-forest-900/10 md:hidden"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span aria-hidden="true">{isMenuOpen ? "✕" : "☰"}</span>
          </button>
        </div>
      </nav>

      {isMenuOpen ? (
        <div
          id="mobile-menu"
          className="border-t border-forest-900/10 bg-cream px-4 pb-4 pt-2 sm:px-6 md:hidden"
        >
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className={
                  link.isCurrent
                    ? "rounded-xl px-3 py-2.5 text-sm font-semibold text-forest-800 hover:bg-forest-100"
                    : "rounded-xl px-3 py-2.5 text-sm text-muted hover:bg-forest-100 hover:text-forest-700"
                }
                aria-current={link.isCurrent ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/login"
              onClick={closeMenu}
              className="rounded-xl px-3 py-2.5 text-sm font-semibold text-forest-800 hover:bg-forest-100 sm:hidden"
            >
              Log in
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
