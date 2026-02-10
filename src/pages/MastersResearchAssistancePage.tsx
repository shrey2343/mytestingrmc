import Layout from "@/components/layout/Layout";
import IndustryHero from "@/components/industry/IndustryHero";
import IndustryServices from "@/components/industry/IndustryServices";
import IndustryProcess from "@/components/industry/IndustryProcess";

import IndustryTestimonials from "@/components/industry/IndustryTestimonials";
import IndustryCTA from "@/components/industry/IndustryCTA";

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
    tags: ["Topic Selection", "Literature Review", "Methodology Design", "Questionnaire Development", "Data Collection", "Data Analysis", "Thesis/Dissertation Writing"],
    primaryCta: "WhatsApp Now",
    primaryCtaLink: "https://wa.me/918719070455",
    secondaryCta: "Learn More",
    showQuoteForm: true,
    whatsappNumber: "+918719070455",
  };

  const services = [
    {
      title: "Data Analysis & Results Support",
      description: "We help you identify and finalize a research topic that aligns with your academic goals and program requirements.",
      benefits: [
        "SPSS, R & Excel statistical analysis support",
"Regression, correlation & hypothesis testing",
"ANOVA, T-test & advanced statistical techniques",
"Quantitative & qualitative data analysis guidance",
"NVivo coding & thematic analysis support",
"Data cleaning & questionnaire coding",
"Statistical results interpretation & validation",
"Tables, charts & results chapter structuring"
      ]
    },
    {
      title: "Dissertation Structure & Chapter Development",
      description: "We guide you through comprehensive literature review to establish a strong foundation for your research.",
      benefits: [
        "Complete dissertation outline & roadmap creation",
"Chapter-by-chapter structuring support",
"Introduction & literature review refinement",
"Methodology, results & discussion alignment",
"Linking findings to aims & objectives",
"Critical analysis & argument strengthening",
"Logical flow, coherence & academic clarity",
"Supervisor-style detailed review & feedback"
      ]
    },
    {
      title: " Research Proposal & Topic Clarity",
      description: "We provide expert guidance on selecting and implementing the right research methodology for your study.",
      benefits: [
        "Research topic selection & refinement",
"Research gap identification & justification",
"Research questions, aims & objectives alignment",
"Hypothesis formulation support",
"Conceptual framework development",
"Proposal structure & academic formatting",
"Feasibility, scope & ethics guidance",
"Proposal presentation review & feedback"
      ]
    },
    {
      title: " Research Methodology Design",
      description: "We assist you in collecting, analyzing, and interpreting your research data using industry-standard tools.",
      benefits: [
        "Quantitative, qualitative & mixed-methods design",
"Sampling strategy & data collection planning",
"Questionnaire & interview guide review",
"Research philosophy & approach clarification",
"Validity, reliability & rigor alignment",
"Methodology justification writing support",
"Pilot study planning & evaluation",
"Ethical and methodological consistency check"
      ]
    },
    {
      title: "Academic Editing & Formatting Support",
      description: "We support you in writing each chapter of your thesis with academic rigor and clarity.",
      benefits: [
        "Academic tone, grammar & clarity refinement",
"Content flow & readability enhancement",
"APA / Harvard / MLA referencing accuracy",
"In-text citation & reference list consistency",
"Plagiarism risk reduction guidance",
"University-specific formatting compliance",
"Tables, figures & appendices formatting",
"Final submission quality & readiness check"
      ]
    },
    {
      title: "Research Mastery Program",
      description: "We ensure your thesis meets all academic standards and is ready for submission.",
      benefits: [
        "Research Title & Problem Statement Mastery",
" Literature Review & Research Gap Analysis",
 "Research Proposal & Study Design Development ",
 "Dissertation Writing Framework (End-to-End)",
 "AI-Powered Research Tools & Smart Workflows",
 "Research Paper Writing & Publication Strategy",
" Defense, Viva & Presentation Excellence",
 "Research Branding, Visibility & Monetization",
        
        
      ]
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
      <IndustryServices
        sectionLabel=" Thesis Support "
        title="Comprehensive Master's Research Support"
        subtitle="We provide guided academic support, ensuring you understand every stage of your research while maintaining academic integrity and ethical standards."
        services={services}
        hideLearnMore={true}
        hideDescription={true}
      />
      <IndustryDomains
        sectionLabel="Academic Disciplines"
        title="Domains We Support"
        subtitle="We provide expert research assistance across a wide range of academic disciplines and fields of study."
        domains={domains}
        closingStatement="These are just some of the domains we specialize in. We support many more academic fields and interdisciplinary research areas. Contact us to discuss your specific requirements."
        darkTheme={true}
      />
    
      <IndustryAssurance
        sectionLabel="Our Commitment"
        title="Your Success is Our Priority"
        subtitle="We stand behind every project with comprehensive guarantees and dedicated support."
        assurances={assurances}
        darkTheme={false}
      />
      <VideoTestimonialsSection darkTheme={true} />
      <IndustryTestimonials
        sectionLabel="Testimonials"
        title="What Our Clients Say"
        testimonials={testimonials}
        darkTheme={false}
      />
      <IndustryProcess
        sectionLabel="How the Process Works"
        title="Your Master's Thesis Journey"
        subtitle="A systematic and milestone-driven approach to ensure successful thesis completion."
        steps={processSteps}
        darkTheme={true}
      />
      <IndustryCTA
        sectionLabel="🎓 Get Your Master's Thesis Done — Stress-Free & On Time"
        title="Ready to Start Your Master's Thesis?"
        subtitle="Contact us to discuss your thesis requirements and discover how we can guide you to successful completion."
        whatsappNumber="+918719070455"
        darkTheme={false}
      />
    </Layout>
  );
};

export default MastersResearchAssistancePage;
