import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ReservationModal from "@/components/ReservationModal";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import FreshIngredientsSection from "@/components/sections/FreshIngredientsSection";
import ChefsSection from "@/components/sections/ChefsSection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import WorkingHoursSection from "@/components/sections/WorkingHoursSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import StatsSection from "@/components/sections/StatsSection";
import AppDownloadSection from "@/components/sections/AppDownloadSection";
import BlogSection from "@/components/sections/BlogSection";
import NewsletterSection from "@/components/sections/NewsletterSection";

const Index = () => {
  const [isReservationOpen, setIsReservationOpen] = useState(false);

  const openReservation = () => setIsReservationOpen(true);
  const closeReservation = () => setIsReservationOpen(false);

  return (
    <div className="min-h-screen">
      <Header onBookTable={openReservation} />
      
      <main>
        <HeroSection onBookTable={openReservation} />
        <AboutSection onBookTable={openReservation} />
        <FreshIngredientsSection />
        <ChefsSection />
        <WhyChooseUsSection />
        <WorkingHoursSection onBookTable={openReservation} />
        <TestimonialsSection />
        <StatsSection />
        <AppDownloadSection />
        <BlogSection />
        <NewsletterSection />
      </main>

      <Footer />

      <ReservationModal isOpen={isReservationOpen} onClose={closeReservation} />
    </div>
  );
};

export default Index;
