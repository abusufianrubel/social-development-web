import { ShieldCheck } from "lucide-react";
import ProtectedRoute from "@/components/auth/protected-route";
import PageFrame from "@/components/shared/page-frame";
import PageHeading from "@/components/shared/page-heading";
import ProfileForm from "@/components/profile/profile-form";

export const metadata = { title: "My profile | TogetherWeGrow" };

export default function ProfilePage() {
  return (
    <PageFrame>
      <ProtectedRoute>
        <section className="bg-cream py-12 dark:bg-background sm:py-16">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <PageHeading eyebrow="Your community identity" title="My profile" description="Manage the details volunteers see when you take part in community initiatives." />
            <div className="mb-6 flex items-center gap-3 rounded-2xl border border-border bg-card p-5">
              <ShieldCheck className="size-5 text-primary" />
              <p className="text-sm text-muted-foreground">Your profile details are loaded from your authenticated Better Auth session.</p>
            </div>
            <ProfileForm />
          </div>
        </section>
      </ProtectedRoute>
    </PageFrame>
  );
}
