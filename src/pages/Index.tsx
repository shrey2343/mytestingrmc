import { useState, useEffect } from "react";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import ServicesSection from "@/components/home/ServicesSection";
// import IndustryCardsSection from "@/components/home/IndustryCardsSection";
import HowWeWorkSection from "@/components/home/HowWeWorkSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTASection from "@/components/home/CTASection";
import VideoTestimonialsSection from "@/components/home/VideoTestimonialsSection";
import QuoteFormModal from "@/components/QuoteFormModal";

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Check if modal has been shown in this session
    const hasShownModal = sessionStorage.getItem('hasShownAutoModal');
    
    if (!hasShownModal) {
      // Open modal after 5 seconds
      const timer = setTimeout(() => {
        setIsModalOpen(true);
        sessionStorage.setItem('hasShownAutoModal', 'true');
      }, 5000);

      // Cleanup timer on unmount
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <Layout>
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      {/* <IndustryCardsSection /> */}
      <HowWeWorkSection />
      <VideoTestimonialsSection/>
      <TestimonialsSection />
      <CTASection />
      
      {/* Auto-popup Modal */}
      <QuoteFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </Layout>
  );
};

export default Index;
