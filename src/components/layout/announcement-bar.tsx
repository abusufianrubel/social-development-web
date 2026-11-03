import Link from "next/link";

export default function AnnouncementBar() {
  return (
    <div className="bg-forest-950 px-4 py-2 text-center text-xs font-medium text-white sm:text-sm">
      A little kindness can change a whole community.{" "}
      <Link
        href="#events"
        className="ml-1 font-bold text-amber-300 underline underline-offset-4"
      >
        Find your next event
      </Link>
    </div>
  );
}
