import Layout from "@/components/layout/Layout";
import IndustryHero from "@/components/industry/IndustryHero";
import IndustryServices from "@/components/industry/IndustryServices";
import IndustryProcess from "@/components/industry/IndustryProcess";
import IndustryWhyUs from "@/components/industry/IndustryWhyUs";
import IndustryTestimonials from "@/components/industry/IndustryTestimonials";
import IndustryCTA from "@/components/industry/IndustryCTA";
import IndustryPainPoints from "@/components/industry/IndustryPainPoints";
import { BookOpen } from "lucide-react";

const MastersResearchAssistancePage = () => {
  const heroData = {
    badge: "Dissertation Help for Masters & Ph.D ",
    badgeIcon: <BookOpen className="w-4 h-4" />,
    titleWhite: "Dissertation Help",
    titleRed: "End-to-End Research Support Solution",
    subtitle: "Complete, Structured, and Ethical Support for Your Master's Thesis. A Master's thesis is a critical academic milestone that requires clear research direction, sound methodology, accurate analysis, and strong academic writing.",
    tags: ["Data Collection","Questionnaire Development","Data Analysis",  "Topic Selection", "Literature Review",  "Thesis Writing", "Formatting"],
    primaryCta: "Contact Us",
    secondaryCta: "Learn More",
    stats: [
      { value: "Master's & Ph.D", label: "Students Supported" },
      { value: "Ethical", label: "Research Practices" },
      { value: "Structured", label: "Guidance" },
      { value: "Complete", label: "Support" },
    ],
  };

  const services = [
    {
      title: "Topic Selection & Research Planning",
      description: "Topic finalization aligned with your program, research problem definition, objective and research question development, feasibility and scope assessment.",
    },
    {
      title: "Literature Review Development",
      description: "Literature search strategy, thematic organization of studies, identification of research gaps, proper academic referencing.",
    },
    {
      title: "Methodology & Study Design Support",
      description: "Quantitative, qualitative, or mixed-methods guidance, questionnaire and data collection tool design, sampling and variable definition, research framework development.",
    },
    {
      title: "Data Collection & Analysis Support",
      description: "Data collection guidance and validation, quantitative and qualitative data analysis support, use of tools such as SPSS, Python, NVivo, R, Excel, interpretation of statistical outputs, tables, figures, and results writing support.",
    },
    {
      title: "Thesis Writing & Chapter Development",
      description: "Chapter-wise writing support, academic language refinement, results, discussion, and conclusion development, alignment with university guidelines.",
    },
    {
      title: "Editing, Formatting & Final Review",
      description: "Proofreading and consistency checks, formatting as per university requirements, reference and citation verification, final submission readiness review.",
    },
    {
      title: "Training & Presentation Support",
      description: "Explanation of methodology and results, support for thesis defense or presentation, confidence-building guidance.",
    },
  ];

  const processSteps = [
    {
      number: 1,
      title: "Initial Consultation",
      description: "Understand your thesis requirements and academic goals.",
    },
    {
      number: 2,
      title: "Customized Support Plan",
      description: "Aligned with your timeline and university guidelines.",
    },
    {
      number: 3,
      title: "Research & Writing Support",
      description: "Milestone-based support throughout your thesis journey.",
    },
    {
      number: 4,
      title: "Review & Refinement",
      description: "Iterative improvement ensuring academic quality.",
    },
    {
      number: 5,
      title: "Final Submission Support",
      description: "Complete preparation for successful thesis submission.",
    },
  ];

  const benefits = [
    "A structured, well-written Master's thesis",
    "Clear understanding of your research",
    "Accurate data interpretation",
    "Academic and ethical compliance",
    "Increased confidence during evaluation",
    "Support for medical, biomedical, life sciences, public health, AI, and healthcare fields",
  ];

  const testimonials = [
    {
    quote: "The support I received for my master's thesis was exceptional. The feedback was detailed, professional, and academically sound.",
    author: "Sarah Williams",
    role: "MS Student, Data Analytics (USA)",
  },
  {
    quote: "Ethical, reliable, and highly professional research assistance. The team helped me refine my proposal and analyze complex datasets effectively.",
    author: "Daniel Thompson",
    role: "Research Analyst, Corporate Sector (USA)",
  },
  {
    quote: "From proposal development to final defense preparation, the guidance was structured and easy to follow. It made my doctoral journey much smoother.",
    author: "Dr. Jennifer Lee",
    role: "PhD Scholar, Business Administration (USA)",
  },
  ];

  const painPoints = [
    {
      title: "Dissertation stress & overwhelm",
      description: "Balancing coursework, research, and personal life while managing the complexity of a master's thesis can feel overwhelming and exhausting.",
    },
    {
      title: "Time pressure & urgent deadlines",
      description: "Tight submission deadlines and multiple academic commitments leave little room for thorough research and quality writing.",
    },
    {
      title: "Confusion about UK academic standards",
      description: "Understanding specific formatting requirements, citation styles, and academic writing conventions expected by UK universities can be challenging.",
    },
    {
      title: "Fear of plagiarism / Turnitin failure",
      description: "Concerns about unintentional plagiarism and failing similarity checks create anxiety, especially when paraphrasing complex academic sources.",
    },
    {
      title: "Difficulty with literature review & research gaps",
      description: "Identifying relevant studies, synthesizing existing research, and articulating clear research gaps requires extensive reading and critical analysis skills.",
    },
    {
      title: "Anxiety about grades & supervisor approval",
      description: "Pressure to meet supervisor expectations and achieve high grades while navigating feedback and revision cycles can be stressful.",
    },
  ];

  return (
    <Layout>
      <IndustryHero {...heroData} />
      <IndustryPainPoints
        sectionLabel="Common Challenges"
        title="Struggling with Your Master's Thesis?"
        subtitle="Many students face these challenges during their research journey. We're here to help you overcome them."
        painPoints={painPoints}
      />
      <IndustryServices
        sectionLabel="Our End-to-End Master's Thesis Support Covers Every Stage"
        title="Comprehensive Master's Research Support"
        subtitle="We provide guided academic support, ensuring you understand every stage of your research while maintaining academic integrity and ethical standards."
        services={services}
      />
      <IndustryProcess
        sectionLabel="How the Process Works"
        title="Your Master's Thesis Journey"
        subtitle="A systematic and milestone-driven approach to ensure successful thesis completion."
        steps={processSteps}
      />
      <IndustryWhyUs
        sectionLabel="Key Outcomes You Can Expect"
        title="Complete Your Master's Thesis with Confidence"
        subtitle="All services are provided as academic guidance, research assistance, and writing support. We strictly follow university policies, ethical research practices, and academic integrity standards. Final responsibility and authorship remain with the student."
        benefits={benefits}
        ctaText="If you are looking for structured, ethical, and expert-guided Master's thesis support, we are here to help."
      />
      <IndustryTestimonials
        sectionLabel="Testimonials"
        title="What Our Clients Say"
        testimonials={testimonials}
      />
      <IndustryCTA
        title="Ready to Start Your Master's Thesis?"
        subtitle="Contact us to discuss your thesis requirements and discover how we can guide you to successful completion."
      />
    </Layout>
  );
};

export default MastersResearchAssistancePage;
