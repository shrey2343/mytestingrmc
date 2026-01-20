import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import ServicesSection from "@/components/home/ServicesSection";
import IndustryCardsSection from "@/components/home/IndustryCardsSection";
import HowWeWorkSection from "@/components/home/HowWeWorkSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <IndustryCardsSection />
      <HowWeWorkSection />
      <TestimonialsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
