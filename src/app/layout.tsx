import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";
import ToastProvider from "@/components/providers/toast-provider";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"], display: "swap" });
const plusJakarta = Plus_Jakarta_Sans({ variable: "--font-plus-jakarta", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "TogetherWeGrow — Small Actions. Big Impact.",
  description: "Discover local community events and make a positive impact.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable} scroll-smooth`}>
      <body className="flex min-h-full flex-col">
        <TooltipProvider>{children}</TooltipProvider>
        <ToastProvider />
      </body>
    </html>
  );
}
