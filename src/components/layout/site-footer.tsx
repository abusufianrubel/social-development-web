import Link from "next/link";

const exploreLinks = [
  { href: "#home", label: "Home" },
  { href: "#events", label: "Upcoming events" },
  { href: "#about", label: "Our mission" },
  { href: "#gallery", label: "Gallery" },
];

const involvedLinks = [
  { href: "/register", label: "Become a volunteer" },
  { href: "/create-event", label: "Create an event" },
  { href: "/login", label: "Log in" },
  { href: "/register", label: "Create account" },
];

const socialLinks = [
  { href: "#", label: "Facebook", text: "f" },
  { href: "#", label: "Instagram", text: "ig" },
  { href: "#", label: "LinkedIn", text: "in" },
];

export default function SiteFooter() {
  return (
    <footer className="bg-forest-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div className="max-w-sm">
            <Link href="/" className="font-display text-xl font-extrabold">
              Together<span className="text-amber-300">WeGrow</span>
            </Link>
            <p className="mt-5 text-sm leading-7 text-white/60">
              A place for people who believe small acts of kindness can create a
              stronger, more connected community.
            </p>
            <div className="mt-5 flex gap-2">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-sm font-bold hover:bg-white/20"
                >
                  {social.text}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold">Explore</h3>
            <ul className="mt-5 space-y-3 text-sm text-white/60">
              {exploreLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-amber-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold">Get involved</h3>
            <ul className="mt-5 space-y-3 text-sm text-white/60">
              {involvedLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-amber-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold">Our belief</h3>
            <p className="mt-5 text-sm leading-7 text-white/60">
              “Alone we can do so little; together we can do so much.”
            </p>
            <p className="mt-3 text-xs font-semibold text-amber-300">
              — Helen Keller
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/45 sm:flex-row sm:justify-between">
          <p>© 2026 TogetherWeGrow. Built for a better tomorrow.</p>
          <p>Made with care for the community.</p>
        </div>
      </div>
    </footer>
  );
}
