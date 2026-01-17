import Layout from "@/components/layout/Layout";
import IndustryHero from "@/components/industry/IndustryHero";
import IndustryServices from "@/components/industry/IndustryServices";
import IndustryProcess from "@/components/industry/IndustryProcess";
import IndustryWhyUs from "@/components/industry/IndustryWhyUs";
import IndustryTestimonials from "@/components/industry/IndustryTestimonials";
import IndustryCTA from "@/components/industry/IndustryCTA";
import { Rocket } from "lucide-react";

const StartupsEnterprisesPage = () => {
  const heroData = {
    badge: "For Startups & Enterprises",
    badgeIcon: <Rocket className="w-4 h-4" />,
    titleWhite: "Research-Backed",
    titleRed: "Growth & Innovation",
    subtitle: "Validating ideas, strengthening funding stories, and building research-backed credibility for startups and enterprise innovation teams.",
    tags: ["Founders", "Innovation Teams", "Corporate R&D", "VC-backed Companies", "Accelerators", "Enterprise Strategy"],
    primaryCta: "Get Started",
    secondaryCta: "Explore Services",
    stats: [
      { value: "500+", label: "Startups Supported" },
      { value: "95%", label: "Client Satisfaction" },
      { value: "50+", label: "Industries Covered" },
      { value: "24/7", label: "Research Support" },
    ],
  };

  const services = [
    {
      title: "Idea Validation & Market Research",
      description: "Validate your startup ideas with comprehensive market research, competitive analysis, and feasibility studies.",
    },
    {
      title: "Pitch Deck & Investor Materials",
      description: "Create compelling pitch decks, business plans, and investor presentations backed by solid research.",
    },
    {
      title: "Data Analytics & Insights",
      description: "Transform raw data into actionable business insights with advanced analytics and visualization.",
    },
    {
      title: "Go-to-Market Strategy",
      description: "Research-driven market entry strategies, customer segmentation, and positioning frameworks.",
    },
    {
      title: "Growth Research & Optimization",
      description: "Identify growth opportunities through customer research, funnel analysis, and market trends.",
    },
    {
      title: "Due Diligence Support",
      description: "Comprehensive research support for M&A, partnerships, and investment decisions.",
    },
    {
      title: "Industry & Competitive Intelligence",
      description: "Stay ahead with in-depth industry reports, competitor tracking, and market monitoring.",
    },
    {
      title: "IP & Patent Research",
      description: "Patent landscape analysis, freedom-to-operate searches, and innovation mapping.",
    },
  ];

  const processSteps = [
    {
      number: 1,
      title: "Discovery Call",
      description: "We understand your business goals, challenges, and research requirements in detail.",
    },
    {
      number: 2,
      title: "Research Design",
      description: "Our experts design a customized research methodology tailored to your needs.",
    },
    {
      number: 3,
      title: "Data Collection & Analysis",
      description: "We gather data from primary and secondary sources with rigorous quality checks.",
    },
    {
      number: 4,
      title: "Insights & Delivery",
      description: "Receive actionable insights with clear recommendations and strategic guidance.",
    },
  ];

  const benefits = [
    "Rapid turnaround without compromising quality",
    "Industry experts with startup and enterprise experience",
    "Flexible engagement models for any stage",
    "Confidential and secure research practices",
    "Direct access to senior researchers",
  ];

  const testimonials = [
    {
      quote: "RMC's market research helped us pivot our product strategy and secure our Series A funding. Their insights were invaluable.",
      author: "Rahul Sharma",
      role: "Founder & CEO, TechVenture",
    },
  ];

  return (
    <Layout>
      <IndustryHero {...heroData} />
      <IndustryServices
        sectionLabel="What We Offer"
        title="Research Services for Growth"
        subtitle="Comprehensive research solutions designed to accelerate your startup journey and enterprise innovation initiatives."
        services={services}
      />
      <IndustryProcess
        sectionLabel="Our Process"
        title="How We Work"
        subtitle="A streamlined process designed for speed and quality, delivering insights when you need them most."
        steps={processSteps}
      />
      <IndustryWhyUs
        sectionLabel="Why Choose Us"
        title="Built for Speed & Scale"
        subtitle="We understand the fast-paced world of startups and enterprise innovation. Our research team combines academic rigor with business acumen to deliver insights that drive decisions."
        benefits={benefits}
        ctaText="Ready to accelerate your growth?"
      />
      <IndustryTestimonials
        sectionLabel="Testimonials"
        title="What Our Clients Say"
        testimonials={testimonials}
      />
      <IndustryCTA
        title="Ready to Transform Your Research?"
        subtitle="Let's discuss how our research expertise can accelerate your growth and innovation goals."
      />
    </Layout>
  );
};

export default StartupsEnterprisesPage;
