import Layout from "@/components/layout/Layout";
import IndustryHero from "@/components/industry/IndustryHero";
import IndustryServices from "@/components/industry/IndustryServices";
import IndustryProcess from "@/components/industry/IndustryProcess";
import IndustryWhyUs from "@/components/industry/IndustryWhyUs";
import IndustryTestimonials from "@/components/industry/IndustryTestimonials";
import IndustryCTA from "@/components/industry/IndustryCTA";
import { Users } from "lucide-react";

const ResearchForEveryonePage = () => {
  const heroData = {
    badge: "Research for Everyone",
    badgeIcon: <Users className="w-4 h-4" />,
    titleWhite: "Accessible Research",
    titleRed: "For All",
    subtitle: "Making quality research accessible to students, professionals, and individuals pursuing knowledge and academic excellence.",
    tags: ["Ivy leagues Admissions",
      "EBI Visa Assistance",
      "Dr. Authority",
      "Ph. D. & DBA Researchers",
      "Corporate Authority",
      "University Faculty / Professors"],
    primaryCta: " Talk to Our Experts",
    secondaryCta: "Explore Services",
    stats: [
      { value: "10K+", label: "Students Helped" },
      { value: "98%", label: "Success Rate" },
      { value: "100+", label: "Topics Covered" },
      { value: "24/7", label: "Support Available" },
    ],
  };

  const services = [
    {
      title: "Research Paper Writing",
      description: "Professional assistance in writing research papers, term papers, and academic essays with proper citations.",
    },
    {
      title: "Thesis & Dissertation Help",
      description: "Comprehensive support for thesis and dissertation writing, from proposal to final submission.",
    },
    {
      title: "Literature Review",
      description: "Thorough literature reviews covering relevant sources and synthesizing existing research.",
    },
    {
      title: "Data Analysis Support",
      description: "Statistical analysis and interpretation of research data using SPSS, R, Python, and Excel.",
    },
    {
      title: "Proofreading & Editing",
      description: "Professional editing services to polish your academic work and ensure clarity and coherence.",
    },
    {
      title: "Citation & Formatting",
      description: "Proper formatting in APA, MLA, Chicago, Harvard, and other citation styles.",
    },
    {
      title: "Research Proposal",
      description: "Crafting compelling research proposals that get approved by academic committees.",
    },
    {
      title: "Presentation Design",
      description: "Creating impactful presentations for thesis defense, conferences, and academic seminars.",
    },
  ];

  const processSteps = [
    {
      number: 1,
      title: "Share Requirements",
      description: "Tell us about your research topic, academic level, and specific requirements.",
    },
    {
      number: 2,
      title: "Get Matched",
      description: "We assign an expert researcher with relevant subject expertise to your project.",
    },
    {
      number: 3,
      title: "Collaborate & Review",
      description: "Work closely with your researcher, provide feedback, and track progress.",
    },
    {
      number: 4,
      title: "Receive & Succeed",
      description: "Get your completed work with quality assurance and plagiarism-free guarantee.",
    },
  ];

  const benefits = [
    "Affordable pricing for students and individuals",
    "Subject matter experts across all disciplines",
    "Plagiarism-free original content guaranteed",
    "Unlimited revisions until satisfaction",
    "Confidential and secure service",
  ];

  const testimonials = [
    {
      quote: "RMC helped me complete my PhD dissertation on time. The quality of research and writing exceeded my expectations. Highly recommended!",
      author: "Amanda Foster",
      role: "PhD Graduate",
    },
    {
      quote: "The statistical analysis support I received was exceptional. RMC's experts made complex data interpretation simple and clear.",
      author: "Kevin Martinez",
      role: "Master's Student",
    },
    {
      quote: "From research proposal to final thesis, RMC supported me throughout my academic journey. Professional and reliable service.",
      author: "Rachel Green",
      role: "Doctoral Candidate",
    },
  ];

  return (
    <Layout>
      <IndustryHero {...heroData} />
      <IndustryServices
        sectionLabel=" "
        title="Research Services for Everyone"
        subtitle="Comprehensive research support designed to help you achieve academic excellence and professional growth."
        services={services}
      />
      <IndustryProcess/>
      <IndustryWhyUs
        sectionLabel="Why Choose Us"
        title="Your Success Partner"
        subtitle="We believe quality research should be accessible to everyone. Our team of experienced researchers is committed to helping you achieve your academic and professional goals."
        benefits={benefits}
        ctaText="Ready to start your research journey?"
      />
      <IndustryTestimonials
        sectionLabel="Testimonials"
        title="What Our Clients Say"
        testimonials={testimonials}
      />
      <IndustryCTA
        title="Need Research Assistance?"
        subtitle="Let's discuss how we can help you with your research needs and academic goals."
      />
    </Layout>
  );
};

export default ResearchForEveryonePage;
