import Layout from "@/components/layout/Layout";
import IndustryHero from "@/components/industry/IndustryHero";
import IndustryServices from "@/components/industry/IndustryServices";
import IndustryProcess from "@/components/industry/IndustryProcess";
import IndustryWhyUs from "@/components/industry/IndustryWhyUs";
import IndustryTestimonials from "@/components/industry/IndustryTestimonials";
import IndustryCTA from "@/components/industry/IndustryCTA";
import { Edit } from "lucide-react";

const EditingPage = () => {
  const heroData = {
    badge: "Editing Services",
    badgeIcon: <Edit className="w-4 h-4" />,
    titleWhite: "Professional",
    titleRed: "Editing & Proofreading",
    subtitle: "Expert editing and proofreading services to polish your academic papers, manuscripts, and documents to perfection.",
    tags: ["Proofreading", "Copy Editing", "Language Editing", "Formatting", "Citation Check", "Quality Assurance"],
    primaryCta: " Talk to Our Experts",
    secondaryCta: "Explore Services",
    stats: [
      { value: "10K+", label: "Documents Edited" },
      { value: "100%", label: "Quality Guaranteed" },
      { value: "Fast", label: "Turnaround" },
      { value: "Expert", label: "Editors" },
    ],
  };

  const services = [
    {
      title: "Proofreading",
      description: "Thorough proofreading to eliminate grammar, spelling, punctuation, and typographical errors.",
    },
    {
      title: "Copy Editing",
      description: "Comprehensive editing for clarity, coherence, consistency, and flow of your content.",
    },
    {
      title: "Language Editing",
      description: "Enhance language quality, improve sentence structure, and ensure academic tone.",
    },
    {
      title: "Substantive Editing",
      description: "In-depth editing focusing on content organization, argument strength, and logical flow.",
    },
    {
      title: "Formatting Services",
      description: "Format your document according to APA, MLA, Chicago, Harvard, or journal guidelines.",
    },
    {
      title: "Citation & References",
      description: "Verify and format citations and references for accuracy and consistency.",
    },
    {
      title: "Plagiarism Check",
      description: "Comprehensive plagiarism detection with detailed similarity reports.",
    },
    {
      title: "Journal Submission Ready",
      description: "Prepare your manuscript for journal submission with final quality checks.",
    },
  ];

  const processSteps = [
    {
      number: 1,
      title: "Document Submission",
      description: "Upload your document and specify editing requirements and deadline.",
    },
    {
      number: 2,
      title: "Editor Assignment",
      description: "We assign an expert editor with relevant subject knowledge to your document.",
    },
    {
      number: 3,
      title: "Editing Process",
      description: "Your document is carefully edited with tracked changes and comments.",
    },
    {
      number: 4,
      title: "Quality Delivery",
      description: "Receive edited document with clean and tracked versions plus editing report.",
    },
  ];

  const benefits = [
    "Professional editors with academic backgrounds",
    "Multiple rounds of quality checks",
    "Track changes for transparency",
    "Fast turnaround without compromising quality",
    "Free re-editing if not satisfied",
  ];

  const testimonials = [
    {
      quote: "RMC's editing service transformed my research paper. The attention to detail and language improvement was outstanding.",
      author: "Prof. Vikram Desai",
      role: "Associate Professor",
    },
  ];

  return (
    <Layout>
      <IndustryHero {...heroData} />
      <IndustryServices
        sectionLabel=" "
        title="Editing & Proofreading Services"
        subtitle="Comprehensive editing services to ensure your documents are error-free and publication-ready."
        services={services}
      />
      <IndustryProcess/>
      <IndustryWhyUs
        sectionLabel="Why Choose Us"
        title="Your Editing Partner"
        subtitle="Our team of professional editors brings years of experience in academic and professional editing, ensuring your work is polished to perfection."
        benefits={benefits}
        ctaText="Ready to polish your document?"
      />
      <IndustryTestimonials
        sectionLabel="Testimonials"
        title="What Our Clients Say"
        testimonials={testimonials}
      />
      <IndustryCTA
        title="Need Professional Editing?"
        subtitle="Let our expert editors refine your document and make it publication-ready."
      />
    </Layout>
  );
};

export default EditingPage;
