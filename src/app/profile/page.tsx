import { Camera, ShieldCheck, UserRound } from "lucide-react";
import PageFrame from "@/components/shared/page-frame";
import PageHeading from "@/components/shared/page-heading";
import ProfileForm from "@/components/profile/profile-form";

export const metadata = { title: "My profile | TogetherWeGrow" };

export default function ProfilePage() {
  return (
    <PageFrame>
      <section className="bg-cream py-12 dark:bg-background sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <PageHeading eyebrow="Your community identity" title="My profile" description="Manage the details volunteers see when you take part in community initiatives." />
          <div className="mb-6 flex flex-col gap-5 rounded-3xl border border-border bg-card p-6 shadow-soft sm:flex-row sm:items-center">
            <div className="relative grid size-20 shrink-0 place-items-center overflow-hidden rounded-full bg-forest-100 text-forest-800 dark:bg-forest-900 dark:text-forest-100"><UserRound className="size-9" /><span className="absolute bottom-0 right-0 grid size-7 place-items-center rounded-full border-2 border-card bg-amber-300 text-forest-950"><Camera className="size-3.5" /></span></div>
            <div className="flex-1"><p className="font-display text-xl font-bold">Community Member</p><p className="mt-1 text-sm text-muted-foreground">member@example.com</p><p className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-primary"><ShieldCheck className="size-3.5" /> Profile preview</p></div>
          </div>
          <ProfileForm />
          <p className="mt-4 text-center text-xs text-muted-foreground">The authenticated profile will appear here after Better Auth session integration is connected.</p>
        </div>
      </section>
    </PageFrame>
  );
}
