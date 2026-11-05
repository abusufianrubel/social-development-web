import Link from "next/link";
import { HeartHandshake } from "lucide-react";
import AuthForm from "@/components/auth/auth-form";
import PageFrame from "@/components/shared/page-frame";

export const metadata = { title: "Sign in | TogetherWeGrow" };

type LoginPageProps = { searchParams: Promise<{ next?: string }> };

export default async function LoginPage({ searchParams }: LoginPageProps) {
  const { next } = await searchParams;
  return (
    <PageFrame>
      <section className="bg-cream px-4 py-12 dark:bg-background sm:py-16">
        <div className="mx-auto grid max-w-5xl overflow-hidden rounded-[2rem] border border-border bg-card shadow-soft lg:grid-cols-[.9fr_1.1fr]">
          <div className="relative hidden flex-col justify-between overflow-hidden bg-forest-950 p-10 text-white lg:flex">
            <div className="absolute -right-20 -top-20 size-72 rounded-full border-[40px] border-white/5" />
            <div className="relative"><Link href="/" className="font-display text-xl font-extrabold">Together<span className="text-amber-300">WeGrow</span></Link><div className="mt-24 max-w-sm"><HeartHandshake className="size-10 text-amber-300" /><h1 className="font-display mt-6 text-4xl font-bold leading-tight">Good to have you back.</h1><p className="mt-4 text-sm leading-7 text-white/65">Your community is making a difference. Sign in and find your next way to help.</p></div></div>
            <p className="relative text-xs text-white/45">Small actions. Big impact.</p>
          </div>
          <div className="p-6 sm:p-10 lg:p-12">
            <p className="text-xs font-bold uppercase tracking-[.2em] text-primary">Welcome back</p>
            <h2 className="font-display mt-3 text-3xl font-bold">Sign in to your account</h2>
            <p className="mt-2 mb-8 text-sm leading-6 text-muted-foreground">Continue making good things happen in your neighborhood.</p>
            <AuthForm mode="login" redirectTo={next} />
          </div>
        </div>
      </section>
    </PageFrame>
  );
}
