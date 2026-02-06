import Layout from "@/components/layout/Layout";
import IndustryHero from "@/components/industry/IndustryHero";
import IndustryServices from "@/components/industry/IndustryServices";
import IndustryProcess from "@/components/industry/IndustryProcess";
import IndustryWhyUs from "@/components/industry/IndustryWhyUs";
import IndustryTestimonials from "@/components/industry/IndustryTestimonials";
import IndustryCTA from "@/components/industry/IndustryCTA";
import IndustryPainPoints from "@/components/industry/IndustryPainPoints";
import IndustryDomains from "@/components/industry/IndustryDomains";
import IndustryAssurance from "@/components/industry/IndustryAssurance";
import VideoTestimonialsSection from "@/components/home/VideoTestimonialsSection";
import { BookOpen } from "lucide-react";

const MastersResearchAssistancePage = () => {
  const heroData = {
    badge: "Dissertation Help for Masters ",
    badgeIcon: <BookOpen className="w-4 h-4" />,
    titleWhite: "Dissertation Help",
    titleRed: "End-to-End Research Support Solution",
    bulletPoints: [
      "Affordable Price",
      "Unlimited Revisions",
      "On-time Delivery",
      "100% Plagiarism Free",
    ],
    tags: ["Topic Selection","Literature Review","Methodology Design","Questionnaire Development","Data Collection","Data Analysis","Thesis/Dissertation Writing"],
    primaryCta: "WhatsApp Now",
    primaryCtaLink: "https://wa.me/918719070455",
    secondaryCta: "Learn More",
    showQuoteForm: true,
    whatsappNumber: "+918719070455",
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
      title: "Research Writing & Review Support",
      description: "Milestone-based research writing assistance with continuous review and refinement.",
    },
    {
      number: 4,
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
      title: "Dissertation Stress & Overwhelm",
      description: "Balancing coursework, research, and personal life while managing the complexity of a master's thesis can feel overwhelming and exhausting.",
    },
    {
      title: "Time Pressure & Urgent Deadlines",
      description: "Tight submission deadlines and multiple academic commitments leave little room for thorough research and quality writing.",
    },
    {
      title: "Confusion About Academic Standards",
      description: "Understanding specific formatting requirements, citation styles, and academic writing conventions expected by UK universities can be challenging.",
    },
    {
      title: "Fear of Plagiarism / Turnitin Failure",
      description: "Concerns about unintentional plagiarism and failing similarity checks create anxiety, especially when paraphrasing complex academic sources.",
    },
    {
      title: "Difficulty with Literature Review & Research Gaps",
      description: "Identifying relevant studies, synthesizing existing research, and articulating clear research gaps requires extensive reading and critical analysis skills.",
    },
    {
      title: "Anxiety About Grades & Supervisor Approval",
      description: "Pressure to meet supervisor expectations and achieve high grades while navigating feedback and revision cycles can be stressful.",
    },
  ];



  const domains = [
    {
      title: "Business & Management",
      description: "Strategic management, marketing, human resources, operations, and organizational studies.",
    },
    {
      title: "Accounting & Finance",
      description: "Corporate finance, auditing, taxation, financial analysis, and risk management.",
    },
    {
      title: "Computer Science & IT",
      description: "Software engineering, data science, artificial intelligence, cybersecurity, and emerging technologies.",
    },
    {
      title: "Engineering",
      description: "Mechanical, civil, electrical, electronics, and interdisciplinary engineering research.",
    },
    {
      title: "Nursing & Healthcare",
      description: "Evidence-based nursing, public health, healthcare management, and clinical research.",
    },
    {
      title: "Psychology",
      description: "Clinical, cognitive, behavioral, counseling, and organizational psychology.",
    },
    {
      title: "Law & Legal Studies",
      description: "Criminal law, corporate law, international law, constitutional studies, and legal analysis.",
    },
    {
      title: "Education",
      description: "Curriculum studies, educational leadership, teaching methodologies, and learning research.",
    },
    {
      title: "Social Sciences",
      description: "Sociology, political science, international relations, social work, and cultural studies.",
    },
    {
      title: "Economics",
      description: "Microeconomics, macroeconomics, development studies, and econometric research.",
    },
    {
      title: "Environmental Sciences",
      description: "Climate change, sustainability, environmental policy, conservation, and ecological research.",
    },
    {
      title: "Public Health & Epidemiology",
      description: "Disease prevention, health promotion, biostatistics, global health, and population health studies.",
    },
  ];

  const assurances = [
    {
      text: "Subject-specialist writers delivering university standard dissertations",
    },
    {
      text: "100% original, Turnitin-safe work with guaranteed authenticity",
    },
    {
      text: "On-time delivery, including urgent deadlines",
    },
    {
      text: "Dedicated writer for every project",
    },
    {
      text: "Free revisions until complete satisfaction",
    },
    {
      text: "Affordable & transparent pricing — no hidden costs",
    },
    {
      text: "Strict confidentiality and full data protection",
    },
    {
      text: "24/7 expert support from start to submission",
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
      <IndustryDomains
        sectionLabel="Academic Disciplines"
        title="Domains We Support"
        subtitle="We provide expert research assistance across a wide range of academic disciplines and fields of study."
        domains={domains}
        closingStatement="These are just some of the domains we specialize in. We support many more academic fields and interdisciplinary research areas. Contact us to discuss your specific requirements."
      />
      <IndustryAssurance
        sectionLabel="Our Commitment"
        title="Your Success is Our Priority"
        subtitle="We stand behind every project with comprehensive guarantees and dedicated support."
        assurances={assurances}
      />
      <VideoTestimonialsSection />
      <IndustryTestimonials
        sectionLabel="Testimonials"
        title="What Our Clients Say"
        testimonials={testimonials}
      />
      <IndustryCTA
        title="Ready to Start Your Master's Thesis?"
        subtitle="Contact us to discuss your thesis requirements and discover how we can guide you to successful completion."
        whatsappNumber="+918719070455"
      />
    </Layout>
  );
};

export default MastersResearchAssistancePage;
