import Layout from "@/components/layout/Layout";
import IndustryHero from "@/components/industry/IndustryHero";
import IndustryServices from "@/components/industry/IndustryServices";
import IndustryProcess from "@/components/industry/IndustryProcess";
import IndustryWhyUs from "@/components/industry/IndustryWhyUs";
import IndustryTestimonials from "@/components/industry/IndustryTestimonials";
import IndustryCTA from "@/components/industry/IndustryCTA";
import { BookOpen } from "lucide-react";

const MastersResearchAssistancePage = () => {
  const heroData = {
    badge: "Master's Research Assistance",
    badgeIcon: <BookOpen className="w-4 h-4" />,
    titleWhite: "Master's Thesis",
    titleRed: "& Dissertation Help",
    subtitle: "Expert assistance for your master's research project. From topic selection to final submission with quality assurance.",
    tags: ["Thesis Writing", "Dissertation", "Research Design", "Data Analysis", "Literature Review", "Formatting"],
    primaryCta: "Get Started",
    secondaryCta: "Explore Services",
    stats: [
      { value: "2000+", label: "Students Helped" },
      { value: "98%", label: "Success Rate" },
      { value: "50+", label: "Subjects Covered" },
      { value: "Quick", label: "Delivery" },
    ],
  };

  const services = [
    {
      title: "Topic Selection",
      description: "Help in selecting a relevant and feasible research topic aligned with your interests.",
    },
    {
      title: "Proposal Writing",
      description: "Craft a strong research proposal that gets approved by your academic committee.",
    },
    {
      title: "Literature Review",
      description: "Comprehensive review of existing literature with proper synthesis and critical analysis.",
    },
    {
      title: "Research Methodology",
      description: "Design appropriate research methods including qualitative and quantitative approaches.",
    },
    {
      title: "Data Collection",
      description: "Assistance in primary and secondary data collection through surveys, interviews, and more.",
    },
    {
      title: "Statistical Analysis",
      description: "Expert data analysis using SPSS, Excel, R, and other statistical software.",
    },
    {
      title: "Thesis Writing",
      description: "Professional writing services for all chapters maintaining academic standards.",
    },
    {
      title: "Proofreading & Formatting",
      description: "Final editing, proofreading, and formatting as per university guidelines.",
    },
  ];

  const processSteps = [
    {
      number: 1,
      title: "Requirement Analysis",
      description: "Understand your research requirements, university guidelines, and deadlines.",
    },
    {
      number: 2,
      title: "Research Planning",
      description: "Create a detailed research plan with timeline and deliverables.",
    },
    {
      number: 3,
      title: "Writing & Analysis",
      description: "Execute research, analyze data, and write your thesis with regular feedback.",
    },
    {
      number: 4,
      title: "Final Submission",
      description: "Deliver polished thesis with plagiarism report and formatting check.",
    },
  ];

  const benefits = [
    "Experienced researchers across all disciplines",
    "Affordable pricing for master's students",
    "Original content with plagiarism-free guarantee",
    "Unlimited revisions until satisfaction",
    "On-time delivery with quality assurance",
  ];

  const testimonials = [
    {
      quote: "RMC made my master's thesis journey smooth and stress-free. Their support was exceptional from start to finish.",
      author: "Rahul Sharma",
      role: "MBA Graduate, Symbiosis University",
    },
  ];

  return (
    <Layout>
      <IndustryHero {...heroData} />
      <IndustryServices
        sectionLabel="What We Offer"
        title="Master's Research Services"
        subtitle="Complete research assistance to help you excel in your master's program and achieve academic success."
        services={services}
      />
      <IndustryProcess
        sectionLabel="Our Process"
        title="How We Help"
        subtitle="A systematic approach to ensure your master's research is completed with excellence."
        steps={processSteps}
      />
      <IndustryWhyUs
        sectionLabel="Why Choose Us"
        title="Your Academic Success Partner"
        subtitle="We specialize in helping master's students complete their research projects successfully. Our team provides personalized support tailored to your specific needs."
        benefits={benefits}
        ctaText="Ready to excel in your master's research?"
      />
      <IndustryTestimonials
        sectionLabel="Testimonials"
        title="What Our Clients Say"
        testimonials={testimonials}
      />
      <IndustryCTA
        title="Need Master's Research Help?"
        subtitle="Connect with our experts and get the support you need to complete your master's thesis successfully."
      />
    </Layout>
  );
};

export default MastersResearchAssistancePage;
