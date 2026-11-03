import AnnouncementBar from "@/components/layout/announcement-bar";
import SiteFooter from "@/components/layout/site-footer";
import SiteHeader from "@/components/layout/site-header";
import CausesSection from "@/components/home/causes-section";
import GallerySection from "@/components/home/gallery-section";
import HeroSection from "@/components/home/hero-section";
import ImpactSection from "@/components/home/impact-section";
import NewsletterSection from "@/components/home/newsletter-section";
import UpcomingEventsSection from "@/components/home/upcoming-events-section";

export default function HomePage() {
  return (
    <>
      <AnnouncementBar />
      <SiteHeader />
      <main>
        <HeroSection />
        <CausesSection />
        <UpcomingEventsSection />
        <ImpactSection />
        <GallerySection />
        <NewsletterSection />
      </main>
      <SiteFooter />
    </>
  );
}
