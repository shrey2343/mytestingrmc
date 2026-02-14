import Layout from "@/components/layout/Layout";
import IndustryHero from "@/components/industry/IndustryHero";
import IndustryServices from "@/components/industry/IndustryServices";
import IndustryProcess from "@/components/industry/IndustryProcess";
import IndustryWhyUs from "@/components/industry/IndustryWhyUs";
import IndustryTestimonials from "@/components/industry/IndustryTestimonials";
import IndustryCTA from "@/components/industry/IndustryCTA";
import { PenTool } from "lucide-react";

const EssayWritingPage = () => {
  const heroData = {
    badge: "Essay Writing",
    badgeIcon: <PenTool className="w-4 h-4" />,
    titleWhite: "Professional",
    titleRed: "Essay Writing Services",
    subtitle: "High-quality essay writing for students and professionals. From academic essays to application essays with guaranteed originality.",
    tags: ["Academic Essays", "Argumentative", "Descriptive", "Narrative", "Persuasive", "Critical Analysis"],
    primaryCta: " Talk to Our Experts",
    secondaryCta: "Explore Services",
    stats: [
      { value: "5000+", label: "Essays Written" },
      { value: "99%", label: "Client Satisfaction" },
      { value: "All", label: "Topics Covered" },
      { value: "24/7", label: "Support" },
    ],
  };

  const services = [
    {
      title: "Academic Essays",
      description: "Well-researched academic essays for college and university assignments with proper citations.",
    },
    {
      title: "Argumentative Essays",
      description: "Compelling argumentative essays with strong thesis statements and logical reasoning.",
    },
    {
      title: "Descriptive Essays",
      description: "Vivid descriptive essays that engage readers with detailed observations and imagery.",
    },
    {
      title: "Narrative Essays",
      description: "Engaging narrative essays that tell stories with clear structure and compelling content.",
    },
    {
      title: "Application Essays",
      description: "Standout college and scholarship application essays that showcase your unique qualities.",
    },
    {
      title: "Critical Analysis",
      description: "In-depth critical analysis essays examining literature, articles, and concepts.",
    },
    {
      title: "Compare & Contrast",
      description: "Well-structured comparative essays analyzing similarities and differences effectively.",
    },
    {
      title: "Custom Essays",
      description: "Tailored essay writing for any topic, format, or academic level you need.",
    },
  ];

  const processSteps = [
    {
      number: 1,
      title: "Submit Requirements",
      description: "Share your essay topic, guidelines, word count, and deadline with us.",
    },
    {
      number: 2,
      title: "Writer Assignment",
      description: "We match you with an expert writer specialized in your subject area.",
    },
    {
      number: 3,
      title: "Writing & Review",
      description: "Your essay is written, reviewed for quality, and checked for plagiarism.",
    },
    {
      number: 4,
      title: "Delivery & Revisions",
      description: "Receive your completed essay with free revisions if needed.",
    },
  ];

  const benefits = [
    "Expert writers with subject expertise",
    "100% original and plagiarism-free content",
    "Proper citations in any format (APA, MLA, Chicago)",
    "Free revisions until you're satisfied",
    "Confidential and secure service",
  ];

  const testimonials = [
    {
      quote: "The essay I received was well-written, properly researched, and delivered on time. Highly recommend RMC for essay writing!",
      author: "Neha Singh",
      role: "Undergraduate Student",
    },
  ];

  return (
    <Layout>
      <IndustryHero {...heroData} />
      <IndustryServices
        sectionLabel=" "
        title="Essay Writing Services"
        subtitle="Professional essay writing services for all academic levels and topics with guaranteed quality."
        services={services}
      />
      <IndustryProcess/>
      <IndustryWhyUs
        sectionLabel="Why Choose Us"
        title="Your Writing Partner"
        subtitle="Our team of experienced writers understands academic requirements and delivers essays that meet the highest standards of quality and originality."
        benefits={benefits}
        ctaText="Ready to get your essay written?"
      />
      <IndustryTestimonials
        sectionLabel="Testimonials"
        title="What Our Clients Say"
        testimonials={testimonials}
      />
      <IndustryCTA
        title="Need Essay Writing Help?"
        subtitle="Let our expert writers craft a high-quality essay tailored to your requirements."
      />
    </Layout>
  );
};

export default EssayWritingPage;
