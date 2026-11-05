import Link from "next/link";
import { Compass } from "lucide-react";
import PageFrame from "@/components/shared/page-frame";

export default function NotFound() {
  return (
    <PageFrame>
      <section className="grid min-h-[55vh] place-items-center bg-cream px-4 py-16 text-center dark:bg-background">
        <div className="max-w-md">
          <span className="mx-auto grid size-16 place-items-center rounded-2xl bg-forest-100 text-forest-800 dark:bg-forest-900 dark:text-forest-100"><Compass className="size-8" /></span>
          <p className="mt-6 text-xs font-bold uppercase tracking-[.2em] text-primary">404 · Page not found</p>
          <h1 className="font-display mt-3 text-3xl font-bold">Looks like this path wandered off.</h1>
          <p className="mt-3 text-sm leading-7 text-muted-foreground">The page may have moved, or the event you are looking for is no longer available.</p>
          <Link href="/" className="mt-7 inline-flex rounded-xl bg-forest-700 px-6 py-3 text-sm font-bold text-white hover:bg-forest-800">Back to home</Link>
        </div>
      </section>
    </PageFrame>
  );
}
