import Layout from "@/components/layout/Layout";
import IndustryHero from "@/components/industry/IndustryHero";
import IndustryServices from "@/components/industry/IndustryServices";
import IndustryProcess from "@/components/industry/IndustryProcess";
import IndustryWhyUs from "@/components/industry/IndustryWhyUs";
import IndustryTestimonials from "@/components/industry/IndustryTestimonials";
import IndustryCTA from "@/components/industry/IndustryCTA";
import { GraduationCap } from "lucide-react";

const PhdAssistancePage = () => {
  const heroData = {
    badge: "Ph.D. Assistance",
    badgeIcon: <GraduationCap className="w-4 h-4" />,
    titleWhite: "Complete Ph.D.",
    titleRed: "Research Support",
    subtitle: "Comprehensive assistance for your doctoral journey. From research proposal to thesis submission and defense preparation.",
    tags: ["Research Proposal", "Literature Review", "Data Collection", "Thesis Writing", "Defense Prep", "Publications"],
    primaryCta: "Get Started",
    secondaryCta: "Explore Services",
    stats: [
      { value: "500+", label: "Ph.D. Scholars Helped" },
      { value: "95%", label: "Success Rate" },
      { value: "All", label: "Disciplines Covered" },
      { value: "Expert", label: "Guidance Available" },
    ],
  };

  const services = [
    {
      title: "Research Proposal Writing",
      description: "Craft a compelling research proposal that gets approved by your university committee.",
    },
    {
      title: "Literature Review",
      description: "Comprehensive literature review covering all relevant sources in your research domain.",
    },
    {
      title: "Research Methodology",
      description: "Design robust research methodology including sampling, data collection, and analysis plans.",
    },
    {
      title: "Data Analysis",
      description: "Statistical analysis using SPSS, R, Python, AMOS, and other advanced tools.",
    },
    {
      title: "Thesis Writing",
      description: "Professional thesis writing services maintaining academic standards and originality.",
    },
    {
      title: "Chapter-wise Support",
      description: "Dedicated support for each chapter from introduction to conclusion and references.",
    },
    {
      title: "Synopsis Preparation",
      description: "Create impactful synopsis for pre-submission and university requirements.",
    },
    {
      title: "Defense Preparation",
      description: "Comprehensive preparation for viva voce including presentation and Q&A practice.",
    },
  ];

  const processSteps = [
    {
      number: 1,
      title: "Consultation",
      description: "Discuss your research topic, objectives, and specific requirements with our experts.",
    },
    {
      number: 2,
      title: "Planning",
      description: "Create a detailed timeline and roadmap for your Ph.D. journey with milestones.",
    },
    {
      number: 3,
      title: "Execution",
      description: "Work collaboratively on research, writing, and analysis with regular updates.",
    },
    {
      number: 4,
      title: "Completion",
      description: "Final thesis submission with plagiarism check, formatting, and defense preparation.",
    },
  ];

  const benefits = [
    "Subject matter experts with Ph.D. qualifications",
    "Personalized one-on-one mentorship",
    "Plagiarism-free original research guaranteed",
    "Flexible payment plans for scholars",
    "24/7 support throughout your Ph.D. journey",
  ];

  const testimonials = [
    {
      quote: "RMC's Ph.D. assistance was instrumental in completing my doctorate. Their expert guidance made the complex journey manageable.",
      author: "Dr. Sneha Patel",
      role: "Ph.D. Graduate, Mumbai University",
    },
  ];

  return (
    <Layout>
      <IndustryHero {...heroData} />
      <IndustryServices
        sectionLabel="What We Offer"
        title="Ph.D. Research Services"
        subtitle="End-to-end support for your doctoral research journey, ensuring quality and timely completion."
        services={services}
      />
      <IndustryProcess
        sectionLabel="Our Process"
        title="Your Ph.D. Journey"
        subtitle="A structured approach to guide you through every stage of your doctoral research."
        steps={processSteps}
      />
      <IndustryWhyUs
        sectionLabel="Why Choose Us"
        title="Your Ph.D. Success Partner"
        subtitle="We understand the challenges of doctoral research. Our team of Ph.D. holders provides expert guidance to help you achieve your academic goals with confidence."
        benefits={benefits}
        ctaText="Ready to start your Ph.D. journey?"
      />
      <IndustryTestimonials
        sectionLabel="Testimonials"
        title="What Our Clients Say"
        testimonials={testimonials}
      />
      <IndustryCTA
        title="Need Ph.D. Assistance?"
        subtitle="Let's discuss how we can support your doctoral research and help you achieve your academic dreams."
      />
    </Layout>
  );
};

export default PhdAssistancePage;
