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
    titleWhite: "PhD End-to-End",
    titleRed: "Research Support Solution",
    subtitle: "Structured, Ethical, and Publication-Focused Support Throughout Your PhD Journey. A PhD is not just about writing a thesis — it is about conducting rigorous research, producing credible results, and contributing publishable knowledge to your field.",
    tags: ["Research Planning", "Literature Review", "Data Analysis", "Publication Support", "Thesis Writing", "Viva Preparation"],
    primaryCta: "Contact Us",
    secondaryCta: "Learn More",
    stats: [
      { value: "PhD", label: "Scholars Supported" },
      { value: "Ethical", label: "Research Practices" },
      { value: "Publication", label: "Focused" },
      { value: "Expert", label: "Guidance" },
    ],
  };

  const services = [
    {
      title: "Research Planning & Proposal Support",
      description: "Research topic refinement, problem statement and research gap identification, research objectives and hypotheses development, proposal structuring and academic language refinement, alignment with institutional and ethical guidelines.",
    },
    {
      title: "Literature Review Development",
      description: "Systematic or narrative literature review support, thematic synthesis of existing research, gap identification and conceptual framework development, reference management and citation consistency.",
    },
    {
      title: "Methodology & Study Design Support",
      description: "Quantitative, qualitative, or mixed-methods design support, questionnaire and tool design guidance, variable definition and research framework structuring, ethical research alignment and documentation support.",
    },
    {
      title: "Data Analysis & Scientific Interpretation",
      description: "Quantitative and qualitative data analysis support, collaboration with statisticians when required, interpretation of statistical outputs, results section writing and visualization support, alignment of findings with research objectives.",
    },
    {
      title: "Research Paper Publication Support",
      description: "Manuscript writing from PhD data, abstracts, posters, and conference papers, journal selection and formatting, submission and reviewer response support.",
    },
    {
      title: "Thesis Writing, Editing & Finalization",
      description: "Chapter-wise thesis writing support, academic language refinement and coherence, formatting as per university guidelines, final proofreading and submission readiness review.",
    },
    {
      title: "Training, Guidance & Viva Preparation",
      description: "Explanation of analysis and findings, methodology and results walkthroughs, support for viva/defense preparation, research communication confidence building.",
    },
  ];

  const processSteps = [
    {
      number: 1,
      title: "Initial Consultation",
      description: "Understand your PhD stage and goals through detailed discussion.",
    },
    {
      number: 2,
      title: "Customized Support Plan",
      description: "Tailored to your timeline and specific research requirements.",
    },
    {
      number: 3,
      title: "Ongoing Research & Writing Support",
      description: "Milestone-based support throughout your PhD journey.",
    },
    {
      number: 4,
      title: "Review & Refinement",
      description: "Iterative improvement ensuring quality and academic standards.",
    },
    {
      number: 5,
      title: "Final Submission & Publication Support",
      description: "Complete support for thesis submission and research publication.",
    },
  ];

  const benefits = [
    "Structured and milestone-driven PhD progression",
    "Strong alignment between thesis and publications",
    "Clear understanding of your own research",
    "Improved research quality and academic confidence",
    "Ethical, transparent, and defensible doctoral work",
    "Support for medical, life sciences, public health, AI-healthcare, diagnostics fields",
  ];

  const testimonials = [
  {
    quote: "The structured guidance and ethical research support helped me complete my doctoral work with clarity and confidence. Every step was transparent and well explained.",
    author: "Dr. Stephen Rodrik",
    role: "PhD Researcher",
  },
  {
    quote: "Their mentorship significantly improved my research methodology and academic writing. I successfully published my work in a peer-reviewed journal.",
    author: "Mailo Watson",
    role: "PhD Scholar",
  },
  {
    quote: "The support I received for my master's thesis was exceptional. The feedback was detailed, professional, and academically sound.",
    author: "Shweta Chouhan",
    role: "MS Student",
  },
  ];

  return (
    <Layout>
      <IndustryHero {...heroData} />
      <IndustryServices
        sectionLabel="Our PhD End-to-End Support Covers the Entire Lifecycle"
        title="Comprehensive PhD Research Support"
        subtitle="We work as research partners, helping you progress with clarity, confidence, and consistency while maintaining academic integrity, transparency, and ethical compliance."
        services={services}
      />
      <IndustryProcess/>
      <IndustryWhyUs
        sectionLabel="Key Outcomes You Can Expect"
        title="Support Your PhD — Without Compromising Integrity"
        subtitle="All services are provided as research assistance, writing support, and academic guidance. We strictly adhere to university regulations, publication ethics, and academic integrity standards. Final responsibility and authorship remain with the PhD scholar."
        benefits={benefits}
        ctaText="If you are seeking structured, ethical, and expert PhD research support, we are here to help."
      />
      <IndustryTestimonials
        sectionLabel="Testimonials"
        title="What Our Clients Say"
        testimonials={testimonials}
      />
      <IndustryCTA
        title="Ready to Begin Your PhD Journey?"
        subtitle="Contact us to discuss your PhD requirements and discover how we can support your research with integrity and expertise."
      />
    </Layout>
  );
};

export default PhdAssistancePage;
